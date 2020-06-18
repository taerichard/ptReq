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

        public DbSet<TrainerLocation> TrainerLocations { get; set; }
        public DbSet<Trainer> Trainers { get; set; }
        public DbSet<Location> Locations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TrainerLocation>().ToTable("TrainerLocation")
                .HasKey(tl => new { tl.TrainerId, tl.LocationId });

            modelBuilder.Entity<TrainerLocation>()
                .HasOne(t => t.Trainer)
                .WithMany(t => t.TrainerLocations)
                .HasForeignKey(t => t.TrainerId);

            modelBuilder.Entity<TrainerLocation>()
                .HasOne(tl => tl.Location)
                .WithMany(tl => tl.TrainerLocations)
                .HasForeignKey(tl => tl.LocationId);
        }
    }
}