using PersonalTrainer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonalTrainer.Repositories;

namespace PersonalTrainer.Services
{
    public class TrainerLocationServices : ITrainerLocationServices
    {
        private readonly ITrainerLocationRepository _tlRepo;

        public TrainerLocationServices(ITrainerLocationRepository tlRepo)
        {
            _tlRepo = tlRepo;
        }

        // Locations
        public IEnumerable<Location> GetLocationByLastName(string lastName)
        {
            var locations = _tlRepo.GetAllTrainerLocation()
                .Where(l => l.Trainer.LastName == lastName)
                .Select(l => l.Location);

            return locations;
        }

        public IEnumerable<Location> GetLocationsByFirstName(string firstName)
        {
            throw new NotImplementedException();
        }

        // Trainers
        public IEnumerable<Trainer> GetTrainersByGender(Gender gender)
        {
            var trainers = _tlRepo.GetAllTrainerLocation()
                .Select(t => t.Trainer)
                .Where(t => t.Gender == gender)
                .ToList();

            return trainers;
        }

        public Trainer GetTrainerByEmail(string email)
        {
            var trainer = _tlRepo.GetAllTrainerLocation()
                .Select(t => t.Trainer)
                .FirstOrDefault(t => t.Email == email);

            return trainer;
        }

        public IEnumerable<Trainer> GetTrainersByCity(string city)
        {
            var trainers = _tlRepo.GetAllTrainerLocation()
                .Where(t => t.Location.City == city)
                .Select(t => t.Trainer)
                .ToList();

            return trainers;
        }

        public IEnumerable<Trainer> GetTrainersByFirstName(string firstName)
        {
            var trainers = _tlRepo.GetAllTrainerLocation()
                .Select(t => t.Trainer)
                .Where(t => t.FirstName == firstName)
                .ToList();

            return trainers;
        }

        public IEnumerable<Trainer> GetTrainersByLastName(string lastName)
        {
            var trainers = _tlRepo.GetAllTrainerLocation()
                .Select(t => t.Trainer)
                .Where(t => t.LastName == lastName)
                .Select(t => new Trainer
                {
                    FirstName = t.FirstName,
                    LastName = t.LastName,
                    Email = t.Email
                })
                .ToList();

            return trainers;
        }

        public IEnumerable<Trainer> GetTrainersByState(string state)
        {
            var trainers = _tlRepo.GetAllTrainerLocation()
                .Where(l => l.Location.State == state)
                .Select(t => t.Trainer)
                .ToList();

            return trainers;
        }
    }
}