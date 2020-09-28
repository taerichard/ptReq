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

        TrainerLocation GetTrainerLocation(int trainerLocationId);

        IEnumerable<TrainerLocation> GetAllTrainerLocation();
    }
}