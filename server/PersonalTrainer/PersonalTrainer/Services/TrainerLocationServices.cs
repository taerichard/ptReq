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
        public Trainer GetTrainerByEmail(string email)
        {
            throw new NotImplementedException();
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
            throw new NotImplementedException();
        }

        public IEnumerable<Trainer> GetTrainersByLastName(string lastName)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Trainer> GetTrainersByState(string state)
        {
            throw new NotImplementedException();
        }
    }
}