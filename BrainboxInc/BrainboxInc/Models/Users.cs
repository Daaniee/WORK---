using System.ComponentModel.DataAnnotations;

public class Users
{
    [Key]
    public int UserId { get; set; }

    [Required]
    [MaxLength(100)]
    public string Username { get; set; }

    [Required]
    [MaxLength(100)]
    public string Email { get; set; }

    [Required]
    public string Password { get; set; }
}