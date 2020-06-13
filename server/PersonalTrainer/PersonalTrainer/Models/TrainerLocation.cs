using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalTrainer.Models
{
    public class TrainerLocation
    {
        public int Id { get; set; }
        public int TrainerId { get; set; }
        public int LocationId { get; set; }

        public Trainer Trainer { get; set; }
        public Location Location { get; set; }
    }
}