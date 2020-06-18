using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PersonalTrainer.Repositories;

namespace PersonalTrainer.Controllers
{
    [Route("api/[controller]")]
    public class TrainerLocationController : ControllerBase
    {
        private readonly ITrainerLocationRepository _trainerLocationRepository;

        public TrainerLocationController(ITrainerLocationRepository TrainerLocationRepository)
        {
            _trainerLocationRepository = TrainerLocationRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var trainerLocation = _trainerLocationRepository.Get();
            return Ok(trainerLocation);
        }
    }
}