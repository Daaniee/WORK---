using System.ComponentModel.DataAnnotations;

namespace StudentReg.Models
{
    public class Student
    {
        public int Id { get; set; }
        [Url]
        public string PassportImage { get; set; }
        [StringLength(20)]
        public string Name { get; set; }
        [Range(11, 100)]
        public int Age { get; set; }
        public string AdmissionNumber { get; set; }
        public string Gender { get; set; }
        public string Class { get; set; }
    }
}