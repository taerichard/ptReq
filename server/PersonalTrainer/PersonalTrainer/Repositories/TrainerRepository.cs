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
            var trainers = _trainerContext.Trainers;
            return trainers;
        }

        public Trainer Add(Trainer trainer)
        {
            _trainerContext.Trainers.Add(trainer);
            _trainerContext.SaveChanges();
            return trainer;
        }

        public Trainer GetTrainerById(int id)
        {
            Trainer trainer = _trainerContext.Trainers.FirstOrDefault(t => t.Id == id);
            return trainer;
        }

        public ICollection<Trainer> GetTrainersByCityName(int locationId)
        {
            throw new NotImplementedException();
        }
    }
}