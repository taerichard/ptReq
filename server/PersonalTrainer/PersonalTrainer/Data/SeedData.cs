using Microsoft.EntityFrameworkCore.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonalTrainer.Models;
using Bogus;

// https://docs.microsoft.com/en-us/aspnet/core/data/ef-mvc/intro?view=aspnetcore-3.1
namespace PersonalTrainer.Data
{
    // called after database is created.
    public static class SeedData
    {
        public static void Initialize(TrainerContext context)
        {
            context.Database.EnsureCreated();

            if (context.Trainers.Any())
            {
                return;
            }

            Trainer trainer1 = CreateTrainer();
            Location location1 = CreateLocation();

            trainer1.Location = location1;

            context.Trainers.Add(trainer1);
            context.SaveChanges();
        }

        public static Trainer CreateTrainer()
        {
            // firstName, lastName, email, Location
            var faker = new Faker();

            Trainer trainer = new Trainer
            {
                FirstName = faker.Name.FirstName(),
                LastName = faker.Name.LastName(),
                Email = faker.Internet.Email(),
                Location = CreateLocation()
            };

            return trainer;
        }

        public static Location CreateLocation()
        {
            var faker = new Faker();

            Location location = new Location
            {
                City = faker.Address.City(),
                State = faker.Address.State()
            };

            return location;
        }
    }
}