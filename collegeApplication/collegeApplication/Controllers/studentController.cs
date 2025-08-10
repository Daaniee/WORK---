using CollegeApplication.Models;
using Microsoft.AspNetCore.Mvc;

namespace CollegeApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Student> GetStudents()
        {
            return new List<Student>()
            {
                new Student {
                    Id = 1,
                    StudentName = "Student 1",
                    Email = "daniel@example.com",
                    Address = "123 Main St"
                },
                new Student {
                    Id = 2,
                    StudentName = "Student 2",
                    Email = "jane@example.com",
                    Address = "456 Elm St"
                }
            };
        }
    }
}