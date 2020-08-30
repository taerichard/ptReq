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
    public class TrainerController : ControllerBase
    {
        private readonly ITrainerRepository _trainerRepository;

        public TrainerController(ITrainerRepository trainerRepository)
        {
            _trainerRepository = trainerRepository;
        }

        [HttpGet]
        public IActionResult GetAllTrainers()
        {
            var trainers = _trainerRepository.GetTrainers();
            return Ok(trainers);
        }

        [HttpGet("{id}")]
        public IActionResult GetTrainer(int id)
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

        [HttpDelete("{id}")]
        public IActionResult DeleteTrainer(int id)
        {
            _trainerRepository.DeleteTrainer(id);

            return Ok();
        }
    }
}