using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PersonalTrainer.Models;

namespace PersonalTrainer.Data
{
    public class TrainersContext : DbContext
    {
        public TrainersContext(DbContextOptions<TrainersContext> options)
        : base(options)
        {
        }

        public DbSet<Trainer> Trainers { get; set; }
    }
}