﻿using System;
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
                // add data to location first

                var cities = new string[] { "Kenmore", "Bothell", "Kirkland", "Woodinville", "Seattle", "Redmond", "Bellevue", "Monroe" };
                var locationList = new Location[cities.Length];

                for (int i = 0; i < cities.Length; i++)
                {
                    locationList[i] = CreateLocationWithCity(cities[i]);
                }

                // creating trainer location
                var trainerLocationList = new List<TrainerLocation>();

                for (int i = 0; i < 10; i++)
                {
                    var randomCityNumber = random.Next(0, cities.Length);
                    var newLocation = locationList[randomCityNumber];

                    // creating trainerlocation with trainer and location values
                    var trainerLocation = new TrainerLocation
                    {
                        Trainer = GenerateTrainer(),
                        Location = newLocation
                    };

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