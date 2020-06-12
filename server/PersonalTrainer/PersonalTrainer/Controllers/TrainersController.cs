using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PersonalTrainer.Data;
using PersonalTrainer.Models;

namespace PersonalTrainer.Controllers
{
    [Route("api/[controller]")]
    public class TrainersController : ControllerBase
    {
        private readonly TrainerContext _trainerDb;

        public TrainersController(TrainerContext trainerDb)
        {
            _trainerDb = trainerDb;
        }

        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Trainer> trainers = _trainerDb.Trainers;
            return Ok(trainers);
        }
    }
}