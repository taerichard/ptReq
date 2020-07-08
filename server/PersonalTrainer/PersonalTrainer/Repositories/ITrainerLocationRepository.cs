using PersonalTrainer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalTrainer.Repositories
{
    public interface ITrainerLocationRepository
    {
        TrainerLocation CreateTrainerLocation(TrainerLocation trainerLocation);

        void Remove(int id);

        TrainerLocation GetTrainerAndLocation(int id);

        IEnumerable<TrainerLocation> GetTrainersByCity(string city);

        IEnumerable<TrainerLocation> GetAllTrainerLocations();
    }
}