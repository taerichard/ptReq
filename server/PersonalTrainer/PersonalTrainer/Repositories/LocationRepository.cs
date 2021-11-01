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

        public Location CreateLocation(Location location)
        {
            // check location already exists in db
            var newLocation = _trainerContext.Locations.FirstOrDefault(l => l.City == location.City);
            // null = not in db
            if (newLocation == null)
                _trainerContext.Locations.Add(location);
            _trainerContext.SaveChanges();

            return location;
        }

        public ICollection<Location> GetAllLocations()
        {
            var locations = _trainerContext.Locations.ToList();

            return locations;
        }

        public Location GetLocation(int id)
        {
            var location = _trainerContext.Locations
                .FirstOrDefault(l => l.Id == id);

            return location;
        }

        public Location GetLocationByCityName(string city)
        {
            var location = _trainerContext.Locations.FirstOrDefault(l => l.City == city);

            if (location != null)
            {
                return location;
            }

            return location;
        }
    }
}