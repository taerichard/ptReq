using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalTrainer.Models
{
    public class TrainerLocationServices
    {
        public Trainer Trainer { get; set; }
        public Location Location { get; set; }
        public IEnumerable<Trainer> Trainers { get; set; }
        public IEnumerable<Location> Locations { get; set; }
    }
}