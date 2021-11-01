using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using PersonalTrainer.Repositories;
using PersonalTrainer.Models;
using Location = PersonalTrainer.Models.Location;

namespace PersonalTrainer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        private readonly ILocationRepository _locationRepository;

        public LocationController(ILocationRepository LocationRepository)
        {
            _locationRepository = LocationRepository;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var locations = _locationRepository.GetAllLocations();

            return Ok(locations);
        }

        [HttpGet("city/{city}")]
        public IActionResult GetLocationByCity(string city)
        {
            var location = _locationRepository.GetLocationByCityName(city);

            return Ok(location);
        }

        [HttpPost]
        public IActionResult Add(Location location)
        {
            _locationRepository.CreateLocation(location);

            return Ok(location);
        }
    }
}