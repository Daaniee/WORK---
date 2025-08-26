using Microsoft.AspNetCore.Mvc;
using StudentReg.Models;
using Microsoft.AspNetCore.JsonPatch;




namespace StudentReg.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RegistrationController : ControllerBase
    {
        ApplicationDbContext db;
        public RegistrationController(ApplicationDbContext db_)
        {
            db = db_;
        }
        [HttpGet("all", Name = "GetAllStudents")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IEnumerable<Student> GetStudents()
        {
           List<Student> studentList = db.Student.ToList();
            return studentList;
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
            var student = db.Student.FirstOrDefault(s => s.Id == id);
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
            var student = db.Student
                .Where(s => s.Name.ToLower().Contains(name.ToLower()))
                .FirstOrDefault();

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
            if (!db.Student.Any(n => n.Id == id))
            {   // Not Found 404 Client Error
                return NotFound($"Student with ID {id} not found.");
            }
            var student = db.Student.Where(n => n.Id == id).FirstOrDefault();

            db.Student.Remove(student);
            db.SaveChanges();
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

            var existingStudent = db.Student.FirstOrDefault(n => n.Id == id);
            if (existingStudent == null)
            {
                return NotFound($"Student with ID {id} not found.");
            }

            existingStudent.Name = model.Name;
            existingStudent.PassportImage = model.PassportImage;
            existingStudent.Age = model.Age;
            existingStudent.AdmissionNo = model.AdmissionNo;
            existingStudent.Gender = model.Gender;
            existingStudent.Class = model.Class;

            db.SaveChanges();

            return NoContent();
        }

        [HttpPatch]
[Route("Update/{id}")]
[ProducesResponseType(StatusCodes.Status204NoContent)]
[ProducesResponseType(StatusCodes.Status400BadRequest)]
[ProducesResponseType(StatusCodes.Status404NotFound)]
[ProducesResponseType(StatusCodes.Status500InternalServerError)]
public IActionResult UpdatePartial(int id, [FromBody] JsonPatchDocument<Student> patchDocument)
{
    if (patchDocument == null || id <= 0)
    {
        return BadRequest("Invalid patch document.");
    }

    var existingStudent = db.Student.FirstOrDefault(n => n.Id == id);
    if (existingStudent == null)
    {
        return NotFound($"Student with ID {id} not found.");
    }

    // ✅ Apply patch directly to the tracked entity
    patchDocument.ApplyTo(existingStudent, ModelState);

    if (!ModelState.IsValid)
    {
        return BadRequest(ModelState);
    }

    // ✅ Save changes to database
    db.SaveChanges();

    return NoContent();
}


        [HttpPost]
        [Route("Create")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public string CreateStudent([FromBody] Student model)
        {
            string result = string.Empty;
            if (model == null)
            {
                 result = "Invalid student data.";
                return result;
            }

            var student = new Student
            {
                Id = db.Student.Max(n => n.Id) + 1,
                PassportImage = model.PassportImage,
                Name = model.Name,
                Age = model.Age,
                AdmissionNo = model.AdmissionNo,
                Gender = model.Gender,
                Class = model.Class
            };

            db.Student.Add(student);
            model.Id = student.Id;
            int res = db.SaveChanges();
            if (res >0) {
               result = "Student created successfully."; 
            }else{
               result = "Failed to create student.";
            }
            return result;
        }
    }
}
