using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PersonalTrainer.Models;
using PersonalTrainer.Repositories;

namespace PersonalTrainer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainerLocationController : ControllerBase
    {
        private readonly ITrainerLocationRepository _trainerLocationRepository;

        public TrainerLocationController(ITrainerLocationRepository TrainerLocationRepository)
        {
            _trainerLocationRepository = TrainerLocationRepository;
        }

        [HttpPost]
        public IActionResult Create(TrainerLocation tl)
        {
            tl = new TrainerLocation
            {
                Location = new Location
                {
                    City = tl.Location.City,
                    State = tl.Location.State
                },

                Trainer = new Trainer
                {
                    FirstName = tl.Trainer.FirstName,
                    LastName = tl.Trainer.LastName,
                    Email = tl.Trainer.Email
                },
            };

            if (tl == null)
            {
                return BadRequest();
            }

            _trainerLocationRepository.CreateTrainerLocation(tl);

            return Ok(tl);
        }

        [HttpGet]
        public IActionResult GetAllTrainerLocation()
        {
            IEnumerable<TrainerLocation> trainerLocation = _trainerLocationRepository
                .GetAllTrainerLocation();

            return Ok(trainerLocation);
        }

        //GET api/trainerlocation/{id}
        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            var trainerLocation = _trainerLocationRepository.GetTrainerLocation(id);

            if (trainerLocation == null)
            {
                return NotFound();
            }
            return Ok(trainerLocation);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTrainerLocation(int id)
        {
            _trainerLocationRepository.Remove(id);
            return Ok();
        }
    }
}