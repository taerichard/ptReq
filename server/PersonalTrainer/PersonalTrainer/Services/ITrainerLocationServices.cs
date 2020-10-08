using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonalTrainer.Models;

namespace PersonalTrainer.Services
{
    public interface ITrainerLocationServices
    {
        // Trainers
        IEnumerable<Trainer> GetTrainersByGender(Gender gender);

        IEnumerable<Trainer> GetTrainersByFirstName(string firstName);

        Trainer GetTrainerByEmail(string email);

        IEnumerable<Trainer> GetTrainersByLastName(string lastName);

        IEnumerable<Trainer> GetTrainersByCity(string city);

        IEnumerable<Trainer> GetTrainersByState(string state);

        // Locations
        IEnumerable<Location> GetLocationsByFirstName(string firstName);

        IEnumerable<Location> GetLocationByLastName(string lastName);
    }
}