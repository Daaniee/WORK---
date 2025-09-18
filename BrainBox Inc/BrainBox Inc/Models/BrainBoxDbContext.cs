using Microsoft.EntityFrameworkCore;
using StudentReg.Models; // Adjust this namespace to match where your models are

namespace "BrainBox Inc".Models
{
    public class BrainBoxDbContext : DbContext
    {
        public BrainBoxDbContext(DbContextOptions<BrainBoxDbContext> options)
            : base(options)
        {
        }
        public DbSet<Product> Products { get; set; }
    }
}