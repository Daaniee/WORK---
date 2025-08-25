using Microsoft.AspNetCore.Mvc;
using StudentReg.Models;
using Microsoft.AspNetCore.JsonPatch;



namespace StudentReg.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RegistrationController : ControllerBase
    {
        [HttpGet("all", Name = "GetAllStudents")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<IEnumerable<Student>> GetStudents()
        {
            return Ok(StudentRepository.Students);
        }

        [HttpGet("{id}", Name = "GetStudentById")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<Student> GetStudentById(int id)
        {
            if (id <= 0)
            {   // bad 400 Client Error
                return BadRequest("Invalid student ID.");
            }
            var student = StudentRepository.Students.FirstOrDefault(s => s.Id == id);
            if (student == null)
            {
                return NotFound();
            }
            return Ok(student);
        }

        [HttpGet("search", Name = "SearchStudentsByName")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<Student> SearchStudentsByName(string name)
        {
            var student = StudentRepository.Students
                .FirstOrDefault(s => s.Name.Contains(name, StringComparison.OrdinalIgnoreCase));

            if (string.IsNullOrWhiteSpace(name))
            {
                return BadRequest("Name parameter is required.");
            }
            if (student == null)
            {
                return NotFound($"Student with name {name} not found.");
            }

            return Ok(student);
        }

        [HttpDelete("{id:int}", Name = "DeleteStudentById")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<bool> DeleteStudent(int id)
        {
            if (id <= 0)
            {   // bad 400 Client Error
                return BadRequest("Invalid student ID.");
            }
            if (!StudentRepository.Students.Any(n => n.Id == id))
            {   // Not Found 404 Client Error
                return NotFound($"Student with ID {id} not found.");
            }
            var student = StudentRepository.Students.Where(n => n.Id == id).FirstOrDefault();

            StudentRepository.Students.Remove(student);
            return Ok(true);
        }

        [HttpPut]
        [Route("Update/{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult UpdateStudent(int id, [FromBody] Student model)
        {
            if (model == null || id != model.Id)
            {
                return BadRequest("Invalid student data.");
            }

            var existingStudent = StudentRepository.Students.FirstOrDefault(n => n.Id == id);
            if (existingStudent == null)
            {
                return NotFound($"Student with ID {id} not found.");
            }

            existingStudent.Name = model.Name;
            existingStudent.Age = model.Age;
            existingStudent.AdmissionNumber = model.AdmissionNumber;
            existingStudent.Gender = model.Gender;
            existingStudent.Class = model.Class;

            return NoContent();
        }

        [HttpPatch]
        [Route("Update/{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult UpdatePartial(int id, [FromBody] JsonPatchDocument<Student> patchDocument)
        {
            if (patchDocument == null || id <= 0)
            {
                return BadRequest("Invalid patch document.");
            }

            var existingStudent = StudentRepository.Students.FirstOrDefault(n => n.Id == id);
            if (existingStudent == null)
            {
                return NotFound($"Student with ID {id} not found.");
            }

            var student = new Student
            {
                Id = existingStudent.Id,
                Name = existingStudent.Name,
                Age = existingStudent.Age,
                AdmissionNumber = existingStudent.AdmissionNumber,
                Gender = existingStudent.Gender,
                Class = existingStudent.Class
            };

            patchDocument.ApplyTo(student, ModelState);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            existingStudent.Name = student.Name;
            existingStudent.Age = student.Age;
            existingStudent.AdmissionNumber = student.AdmissionNumber;
            existingStudent.Gender = student.Gender;
            existingStudent.Class = student.Class;



            return NoContent();
        }

        [HttpPost]
        [Route("Create")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public ActionResult<Student> CreateStudent([FromBody] Student model)
        {
            if (model == null)
            {
                return BadRequest("Invalid student data.");
            }

            var student = new Student
            {
                Id = StudentRepository.Students.Max(n => n.Id) + 1,
                Name = model.Name,
                Age = model.Age,
                AdmissionNumber = model.AdmissionNumber,
                Gender = model.Gender,
                Class = model.Class
            };

            StudentRepository.Students.Add(student);
            model.Id = student.Id;
            return CreatedAtRoute("GetStudentById", new { id = model.Id }, model);
        }
    }
}
