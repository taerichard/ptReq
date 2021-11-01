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
        private Random random;

        public DbInitializer(TrainerContext trainerContext)
        {
            _trainerContext = trainerContext;
        }

        public void SeedData()
        {
            random = new Random();

            if (!_trainerContext.TrainerLocations.Any())
            {
                // creating trainer location
                var trainerLocationList = new List<TrainerLocation>();

                var cities = new List<string> { "Kenmore", "Bothell", "Kirkland", "Woodinville", "Seattle", "Redmond", "Bellevue", "Monroe" };
                var state = "WA";

                for (int i = 0; i < cities.Count; i++)
                {
                    var randomCityPicker = random.Next(0, cities.Count);
                    var newCity = cities[randomCityPicker];

                    // creating trainerlocation with trainer and location values
                    var trainerLocation = new TrainerLocation
                    {
                        Trainer = GenerateTrainer(),
                        Location = GenerateLocation(newCity, state)
                    };

                    cities.RemoveAt(i);

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
                 .RuleFor(e => e.Email, (f, v) => f.Internet.Email(v.FirstName, v.LastName));

            return fakeTrainer;
        }
    }
}