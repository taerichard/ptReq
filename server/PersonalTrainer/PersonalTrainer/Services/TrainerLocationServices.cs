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
        private readonly ITrainerRepository _trainerRepo;
        private readonly ILocationRepository _locationRepo;
        private readonly ITrainerLocationRepository _tlRepo;

        public TrainerLocationServices(ILocationRepository LocationRepo)
        {
            _locationRepo = LocationRepo;
        }

        // Locations
        public IEnumerable<Location> GetLocationByLastName(string lastName)
        {
            var locations = _locationRepo.GetAllLocations()
                .Where(l => l.Trainer.LastName == lastName);

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
            throw new NotImplementedException();
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