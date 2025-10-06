using System.ComponentModel.DataAnnotations;

public class Register
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string Username { get; set; }

    [Required]
    [MaxLength(100)]
    public string Password { get; set; }

    [Required]
    [EmailAddress]
    [MaxLength(100)]
    public string Email { get; set; }

    [MaxLength(50)]
    [RegularExpression("^(?i)(employee|admin)$", ErrorMessage = "Category must be either 'Employee' or 'Admin'.")]
    public string Category { get; set; }
}