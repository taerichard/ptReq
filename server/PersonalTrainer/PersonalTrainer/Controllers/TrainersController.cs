using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PersonalTrainer.Data;
using PersonalTrainer.Models;
using PersonalTrainer.Repositories;

namespace PersonalTrainer.Controllers
{
    [Route("api/[controller]")]
    public class TrainersController : ControllerBase
    {
        private readonly ITrainerRepository _trainerRepository;

        public TrainersController(ITrainerRepository trainerRepository)
        {
            _trainerRepository = trainerRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var trainers = _trainerRepository.GetTrainers();
            return Ok(trainers);
        }

        [HttpPost]
        public IActionResult Create(Trainer trainer)
        {
            Trainer newTrainer = _trainerRepository.Add(trainer);

            return Ok(newTrainer);
        }
    }
}