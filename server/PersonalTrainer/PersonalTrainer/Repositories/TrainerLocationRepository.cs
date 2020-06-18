using PersonalTrainer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonalTrainer.Data;

namespace PersonalTrainer.Repositories
{
    public class TrainerLocationRepository : ITrainerLocationRepository
    {
        private readonly TrainerContext _trainerContext;

        public TrainerLocationRepository(TrainerContext TrainerContext)
        {
            _trainerContext = TrainerContext;
        }

        public ICollection<TrainerLocation> Get()
        {
            var trainerLocations = _trainerContext.TrainerLocations.ToList();

            return trainerLocations;
        }
    }
}