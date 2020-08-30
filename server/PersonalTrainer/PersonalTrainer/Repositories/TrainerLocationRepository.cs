using PersonalTrainer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonalTrainer.Data;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.EntityFrameworkCore;

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

        public TrainerLocation GetTrainerAndLocation(int id)
        {
            TrainerLocation trainerLocation = _trainerContext.TrainerLocations
                .FirstOrDefault(t => t.Id == id);

            return trainerLocation;
        }

        public void Remove(int id)
        {
            TrainerLocation trainerLocation = _trainerContext.TrainerLocations.FirstOrDefault(tl => tl.Id == id);

            if (trainerLocation != null)
                _trainerContext.TrainerLocations.Remove(trainerLocation);

            _trainerContext.SaveChanges();
        }

        public IEnumerable<TrainerLocation> GetTrainersByCity(string city)
        {
            var trainerLocations = _trainerContext.TrainerLocations
                .Include(t => t.Trainer)
                .Include(l => l.Location)
                .Where(t => t.Location.City == city).ToList();

            return trainerLocations;
        }

        public IEnumerable<TrainerLocation> GetAllTrainerLocations()
        {
            var trainerLocations = _trainerContext.TrainerLocations;

            return trainerLocations;
        }

        public IEnumerable<TrainerLocation> GetTrainerLocationByTrainerId(int trainerId)
        {
            var trainer = _trainerContext.TrainerLocations
                .Include(t => t.Trainer)
                .Where(t => t.TrainerId == trainerId).ToList();

            return trainer;
        }
    }
}