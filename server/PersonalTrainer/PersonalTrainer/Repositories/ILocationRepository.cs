using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PersonalTrainer.Models;

namespace PersonalTrainer.Repositories
{
    public interface ILocationRepository
    {
        ICollection<Location> GetAllLocations();

        Location GetLocation(int id);

        Location CreateLocation(Location location);

        Location GetLocationByCityName(string city);
    }
}