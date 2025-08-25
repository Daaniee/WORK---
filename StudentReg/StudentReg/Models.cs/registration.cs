using System.ComponentModel.DataAnnotations.Schema;

[Table("StudentData")]
public class Student
{
    public int Id { get; set; }
    public string PassportImage { get; set; }
    public string Name { get; set; }
    public int Age { get; set; }
    public string AdmissionNo { get; set; }
    public string Gender { get; set; }
    public string Class { get; set; }
}
