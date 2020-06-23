using PersonalTrainer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalTrainer.Repositories
{
    public interface ITrainerLocationRepository
    {
        ICollection<TrainerLocation> Get();

        //TrainerLocation CreateTrainerLocation(Trainer trainer, Location location);
        TrainerLocation CreateTrainerLocation(TrainerLocation trainerLocation);

        void Remove(int id);
    }
}