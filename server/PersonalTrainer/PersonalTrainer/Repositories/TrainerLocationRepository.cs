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

        //public TrainerLocation CreateTrainerLocation(Trainer trainer, Location location)
        //{
        //    TrainerLocation trainerLocation = new TrainerLocation(trainer, location);

        //    _trainerContext.Trainers.Add(trainer);
        //    _trainerContext.Locations.Add(location);
        //    _trainerContext.TrainerLocations.Add(trainerLocation);
        //    _trainerContext.SaveChanges();

        //    return trainerLocation;
        //}

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

        public void Remove(TrainerLocation trainerLocation)
        {
            _trainerContext.TrainerLocations.Remove(trainerLocation);
        }
    }
}