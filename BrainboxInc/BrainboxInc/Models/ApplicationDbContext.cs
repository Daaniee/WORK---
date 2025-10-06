using Microsoft.EntityFrameworkCore;

namespace BrainboxInc.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<Item> Items { get; set; }
        public DbSet<Cart> Cart { get; set; }
        public DbSet<Users> Users { get; set; }
    }
}
