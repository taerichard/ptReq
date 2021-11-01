using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonalTrainer.Models;

namespace PersonalTrainer.Repositories
{
    public interface ITrainerRepository
    {
        Trainer Add(Trainer trainer);

        IEnumerable<Trainer> GetTrainers();

        Trainer GetTrainerById(int id);

        Trainer DeleteTrainer(int id);
    }
}