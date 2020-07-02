using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bogus;
using Microsoft.EntityFrameworkCore;
using PersonalTrainer.Controllers;
using PersonalTrainer.Models;

namespace PersonalTrainer.Data
{
    public class SeedData
    {
        public static void SeedTrainerLocation(TrainerContext context)
        {
            if (!context.TrainerLocations.Any())
            {
                List<TrainerLocation> trainerLocationData = new List<TrainerLocation>()
                {
                    new TrainerLocation
                    {
                        Trainer = CreateTrainer("")
                    }
                };
            }
        }

        public static TrainerLocation CreateTrainerLocation(Trainer trainer, Location location)
        {
            return new TrainerLocation
            {
                Location = location,
                Trainer = trainer,
            };
        }

        public static Location GenerateLocation()
        {
            var location = new Faker<Location>()
                .RuleFor(l => l.City, c => c.Address.City())
                .RuleFor(s => s.State, c => c.Address.State());

            return location;
        }

        public static Trainer GenerateTrainer(string firstName, string lastName, string email)
        {
            return new Trainer
            {
                FirstName = firstName,
                LastName = lastName,
                Email = email
            };
        }
    }
}