using PersonalTrainer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonalTrainer.Data;

namespace PersonalTrainer.Repositories
{
    public class TrainerRepository : ITrainerRepository
    {
        private readonly TrainerContext _trainerContext;

        public TrainerRepository(TrainerContext trainerContext)
        {
            _trainerContext = trainerContext;
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public void Edit(int id)
        {
            throw new NotImplementedException();
        }

        public Trainer GetTrainer(Trainer trainer)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Trainer> GetTrainers()
        {
            throw new NotImplementedException();
        }

        public Trainer Post(Trainer trainer)
        {
            Trainer newTrainer = new Trainer
            {
                FirstName = trainer.FirstName,
                LastName = trainer.LastName,
                Email = trainer.Email,
                Location = trainer.Location
            };

            return newTrainer;
        }
    }
}