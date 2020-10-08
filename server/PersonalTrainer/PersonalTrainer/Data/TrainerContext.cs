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
            modelBuilder.Entity<Trainer>().ToTable("Trainers")
                .HasKey(t => t.Id);

            modelBuilder.Entity<Trainer>()
                .Property<string>("FirstName");

            modelBuilder.Entity<Trainer>()
                .Property<string>("LastName");

            modelBuilder.Entity<Trainer>()
                .Property<string>("Email");

            modelBuilder.Entity<Trainer>()
                .Property<Gender>("Gender")
                .HasConversion<string>();

            modelBuilder.Entity<Location>().ToTable("Locations")
                .HasKey(l => l.Id);

            modelBuilder.Entity<Location>()
                .Property<string>("City");
            modelBuilder.Entity<Location>()
                .Property<string>("State");

            modelBuilder.Entity<TrainerLocation>().ToTable("TrainerLocations")
                .HasKey(tl => tl.Id);

            modelBuilder.Entity<TrainerLocation>()
                .Property(t => t.TrainerId)
                .HasColumnName("TrainerId")
                .IsRequired();

            modelBuilder.Entity<TrainerLocation>()
                .Property(t => t.LocationId)
                .HasColumnName("LocationId")
                .IsRequired();

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