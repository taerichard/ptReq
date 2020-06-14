using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalTrainer.Models
{
    public class Location
    {
        public int Id { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public IEnumerable<Trainer> Trainers { get; set; }
        public IEnumerable<TrainerLocation> TrainerLocation { get; set; }

        // required for many:many relationship
        public Trainer Trainer { get; set; }
    }
}