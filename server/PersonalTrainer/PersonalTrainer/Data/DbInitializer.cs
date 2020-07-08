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
            if (!_trainerContext.TrainerLocations.Any())
            {
                // add data to location first
                var locationList = new List<Location>();
                var cities = new string[] { "Kenmore", "Bothell", "Kirkland", "Woodinville", "Seattle", "Redmond", "Bellevue", "Monroe" };

                foreach (var city in cities)
                {
                    locationList.Add(CreateLocationWithCity(city));
                }

                _trainerContext.Locations.AddRange(locationList);
                _trainerContext.SaveChanges();

                //var trainerLocationList = new List<TrainerLocation>();

                //for (int i = 0; i < 10; i++)
                //{
                //    var trainer = GenerateTrainer();
                //    var location = GenerateLocation();

                //    _trainerContext.Trainers.Add(trainer);
                //    _trainerContext.Locations.Add(location);

                //    var trainerLocation = new TrainerLocation
                //    {
                //        Trainer = trainer,
                //        Location = location,
                //    };

                //    trainerLocationList.Add(trainerLocation);
                //}

                //_trainerContext.TrainerLocations.AddRange(trainerLocationList);
                //_trainerContext.SaveChanges();
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

        public static Location GenerateLocation()
        {
            Random random = new Random();
            var cities = new string[] { "Kenmore", "Bothell", "Kirkland", "Woodinville", "Seattle", "Redmond", "Bellevue", "Monroe" };

            Location location = new Location
            {
                City = cities[random.Next(0, cities.Length)],
                State = "WA"
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