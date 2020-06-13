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
        public DbSet<TrainerLocation> TrainerLocations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Trainer>().ToTable("Trainer");
            //.HasMany(t => t.Locations)
            //.WithOne();

            modelBuilder.Entity<Location>().ToTable("Location");

            modelBuilder.Entity<TrainerLocation>()
                .HasKey(l => new { l.TrainerId, l.LocationId });

            modelBuilder.Entity<TrainerLocation>()
                .HasOne(t => t.Location);

            modelBuilder.Entity<TrainerLocation>()
                .HasOne(t => t.Trainer)
                .WithMany(t => t.Locations);
        }
    }
}