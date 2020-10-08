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
        private readonly TrainerContext _trainerContext;

        public DbInitializer(TrainerContext trainerContext)
        {
            _trainerContext = trainerContext;
        }

        private Random random;

        public void SeedData()
        {
            // cities cannot be repeated

            random = new Random();
            var cities = new List<string> { "Kenmore", "Bothell", "Kirkland", "Woodinville", "Seattle", "Redmond", "Bellevue", "Monroe" };
            var state = "WA";

            for (int i = 0; i < 20; i++)
            {
                var randomIndex = random.Next(0, cities.Count);
                var randomCity = cities[randomIndex];
                Location location = GenerateLocation(cities[randomIndex], state);
                Trainer trainer = GenerateTrainer();
                TrainerLocation tl = new TrainerLocation(trainer, location);
                _trainerContext.TrainerLocations.Add(tl);
            }

            _trainerContext.SaveChanges();
        }

        public static TrainerLocation CreateTrainerLocation(Trainer trainer, Location location)
        {
            return new TrainerLocation
            {
                Location = location,
                Trainer = trainer,
            };
        }

        public static Location CreateLocationWithCity(string city)
        {
            Location location = new Location
            {
                City = city,
                State = "WA"
            };

            return location;
        }

        public static Location GenerateLocation(string city, string state)
        {
            Location location = new Location
            {
                City = city,
                State = state
            };

            return location;
        }

        public static Trainer GenerateTrainer()
        {
            var fakeTrainer = new Faker<Trainer>()
                 .RuleFor(f => f.FirstName, c => c.Name.FirstName())
                 .RuleFor(l => l.LastName, c => c.Name.LastName())
                 .RuleFor(g => g.Gender, c => c.PickRandom<Gender>())
                 .RuleFor(e => e.Email, (f, v) => f.Internet.Email(v.FirstName, v.LastName));

            return fakeTrainer;
        }
    }
}