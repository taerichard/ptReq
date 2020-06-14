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
            //modelBuilder.Entity<Trainer>().ToTable("Trainer")
            //    .HasMany(tr => tr.Locations)
            //    .WithOne(tr => tr.Trainer);

            //modelBuilder.Entity<Location>().ToTable("Location")
            //    .HasMany(l => l.Trainers)
            //    .WithOne(l => l.Location);

            modelBuilder.Entity<TrainerLocation>().ToTable("TrainerLocation");

            modelBuilder.Entity<TrainerLocation>()
                .HasKey(tl => new { tl.TrainerId, tl.LocationId });

            modelBuilder.Entity<TrainerLocation>()
                .HasOne(tr => tr.Trainer)
                .WithMany(tr => tr.TrainerLocations)
                .HasForeignKey(tr => tr.TrainerId);

            modelBuilder.Entity<TrainerLocation>()
                .HasOne(tr => tr.Location)
                .WithMany(tr => tr.TrainerLocation)
                .HasForeignKey(tr => tr.LocationId);
        }
    }
}