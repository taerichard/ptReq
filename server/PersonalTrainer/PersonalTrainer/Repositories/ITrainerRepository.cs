using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonalTrainer.Models;

namespace PersonalTrainer.Repositories
{
    internal interface ITrainerRepository
    {
        Trainer Post(Trainer trainer);

        void Delete(int id);

        IEnumerable<Trainer> GetTrainers();

        Trainer GetTrainer(Trainer trainer);

        void Edit(int id);
    }
}