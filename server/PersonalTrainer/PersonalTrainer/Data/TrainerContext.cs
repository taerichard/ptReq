using Microsoft.EntityFrameworkCore;
using PersonalTrainer.Models;

namespace PersonalTrainer.Data
{
    public class TrainerContext : DbContext
    {
        public TrainerContext(DbContextOptions<TrainerContext> options)
        : base(options)
        {
        }

        public DbSet<Trainer> Trainers { get; set; }
        public DbSet<Location> Locations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Trainer>().ToTable("Trainers").Ignore("Location");
            modelBuilder.Entity<Location>().ToTable("Locations");
        }
    }
}