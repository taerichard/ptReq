using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
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

        public TrainerLocation(Trainer trainer, Location location)
        {
            Trainer = trainer;
            Location = location;
        }

        public TrainerLocation()
        {
        }
    }
}