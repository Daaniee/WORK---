using Microsoft.EntityFrameworkCore;

namespace TimeTracker.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<Register> Registers { get; set; }
        public DbSet<TimeLog> TimeLogs { get; set; }

    }
}