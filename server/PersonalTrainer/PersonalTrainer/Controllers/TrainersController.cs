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
    [ApiController]
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

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var trainer = _trainerRepository.GetTrainerById(id);

            if (trainer == null)
            {
                return BadRequest();
            }

            return Ok(trainer);
        }

        [HttpPost]
        public IActionResult Create(Trainer trainer)
        {
            if (trainer == null)
            {
                return BadRequest();
            }

            Trainer newTrainer = _trainerRepository.Add(trainer);
            return Ok(newTrainer);
        }
    }
}