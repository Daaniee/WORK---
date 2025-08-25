using Microsoft.EntityFrameworkCore;
using StudentReg.Models; // Adjust this namespace to match where your models are

namespace StudentReg.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<Student> Students { get; set; }
    }
}
