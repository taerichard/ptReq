using PersonalTrainer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonalTrainer.Data;
using Microsoft.EntityFrameworkCore;

namespace PersonalTrainer.Repositories
{
    public class TrainerRepository : ITrainerRepository
    {
        private readonly TrainerContext _trainerContext;

        public TrainerRepository(TrainerContext trainerContext)
        {
            _trainerContext = trainerContext;
        }

        public IEnumerable<Trainer> GetTrainers()
        {
            var trainers = _trainerContext
                .Trainers
                .Include(t => t.Locations).ToList();

            return trainers;
        }

        public Trainer Add(Trainer trainer)
        {
            _trainerContext.Trainers.Add(trainer);

            var locations = trainer.Locations
                .Select(l => new Location { City = l.Location.City, State = l.Location.State });
            _trainerContext.Locations.AddRange(locations);

            _trainerContext.TrainerLocations.a
            _trainerContext.SaveChanges();
        }

        public void DeleteById(int id)
        {
            Trainer trainer = _trainerContext.Trainers.FirstOrDefault(t => t.Id == id);

            if (trainer != null)
            {
                _trainerContext.Trainers.Remove(trainer);
            }
        }

        public Trainer GetTrainerById(int id)
        {
            Trainer trainer = _trainerContext.Trainers.FirstOrDefault(t => t.Id == id);

            return trainer;
        }

        public void Update(Trainer trainer)
        {
            Trainer trainerToUpdate = _trainerContext.Trainers
                .Include(t => t.Locations)
                .FirstOrDefault(t => t.Id == trainer.Id);

            trainerToUpdate.FirstName = trainer.FirstName;
            trainerToUpdate.LastName = trainer.LastName;
            trainerToUpdate.Email = trainer.Email;
            trainerToUpdate.Locations = trainer.Locations;
        }
    }
}