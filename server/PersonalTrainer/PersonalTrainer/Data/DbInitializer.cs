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
    public class DbInitializer
    {
        private TrainerContext _trainerContext;

        public DbInitializer(TrainerContext trainerContext)
        {
            _trainerContext = trainerContext;
        }

        public void SeedData()
        {
            if (!_trainerContext.TrainerLocations.Any())
            {
                List<TrainerLocation> trainerLocationList = new List<TrainerLocation>();

                for (int i = 0; i < 30; i++)
                {
                    var trainer = GenerateTrainer();
                    var location = GenerateLocation();
                    var trainerLocation = new TrainerLocation
                    {
                        Trainer = trainer,
                        Location = location
                    };

                    //context.Trainers.Add(trainer);
                    //context.Locations.Add(location);
                    trainerLocationList.Add(trainerLocation);
                }

                _trainerContext.TrainerLocations.AddRange(trainerLocationList);
                _trainerContext.SaveChanges();
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
            var fakeLocation = new Faker<Location>()
                .RuleFor(l => l.City, c => c.Address.City())
                .RuleFor(s => s.State, c => c.Address.State());

            return fakeLocation;
        }

        public static Trainer GenerateTrainer()
        {
            var fakeTrainer = new Faker<Trainer>()
                 .RuleFor(f => f.FirstName, c => c.Name.FirstName())
                 .RuleFor(l => l.LastName, c => c.Name.LastName())
                 .RuleFor(e => e.Email, (f, v) => f.Internet.Email(v.FirstName, v.LastName));

            return fakeTrainer;
        }
    }
}