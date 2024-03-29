﻿using System;
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

        public ICollection<TrainerLocation> TrainerLocations { get; set; }
    }
}