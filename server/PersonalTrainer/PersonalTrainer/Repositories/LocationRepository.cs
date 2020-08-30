using PersonalTrainer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonalTrainer.Data;
using Microsoft.EntityFrameworkCore.Internal;

namespace PersonalTrainer.Repositories
{
    public class LocationRepository : ILocationRepository
    {
        private readonly TrainerContext _trainerContext;

        public LocationRepository(TrainerContext TrainerContext)
        {
            _trainerContext = TrainerContext;
        }

        public Location AddLocation(Location location)
        {
            // location must be unique
            throw new NotImplementedException();
        }

        public ICollection<Location> GetAllLocations()
        {
            throw new NotImplementedException();
        }

        public Location GetLocation(int id)
        {
            throw new NotImplementedException();
        }
    }
}