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

        public TrainerLocation CreateTrainerLocation(TrainerLocation trainerLocation)
        {
            _trainerContext.TrainerLocations.Add(trainerLocation);
            _trainerContext.Trainers.Add(trainerLocation.Trainer);
            _trainerContext.Locations.Add(trainerLocation.Location);
            _trainerContext.SaveChanges();

            return trainerLocation;
        }

        public ICollection<TrainerLocation> Get()
        {
            var trainerLocations = _trainerContext.TrainerLocations.ToList();

            return trainerLocations;
        }

        public void Remove(int id)
        {
            TrainerLocation trainerLocation = _trainerContext.TrainerLocations.FirstOrDefault(tl => tl.Id == id);

            if (trainerLocation != null)
                _trainerContext.TrainerLocations.Remove(trainerLocation);

            _trainerContext.SaveChanges();
        }
    }
}