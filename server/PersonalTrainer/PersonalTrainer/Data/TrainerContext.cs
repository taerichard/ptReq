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
    }
}