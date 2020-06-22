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
        public IActionResult Create(TrainerLocationParameter parameter)
        {
            TrainerLocation trainerLocation = _trainerLocationRepository.CreateTrainerLocation(parameter.Trainer, parameter.Location);

            if (trainerLocation == null)
            {
                return BadRequest();
            }

            return Ok(trainerLocation);
        }

        [HttpGet]
        public IActionResult Get()
        {
            var trainerLocation = _trainerLocationRepository.Get();

            return Ok(trainerLocation);
        }
    }
}