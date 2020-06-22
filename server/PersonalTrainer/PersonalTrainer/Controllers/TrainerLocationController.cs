using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PersonalTrainer.Models;
using PersonalTrainer.Repositories;
using PersonalTrainer.ViewModels;

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
            TrainerLocationViewModel trainerLocationViewModel = new TrainerLocationViewModel
            {
                Trainer = new Trainer
                {
                    FirstName = parameter.Trainer.FirstName,
                    LastName = parameter.Trainer.LastName,
                    Email = parameter.Trainer.Email
                },

                Location = new Location
                {
                    City = parameter.Location.City,
                    State = parameter.Location.State,
                }
            };

            TrainerLocation trainerLocation = _trainerLocationRepository
                .CreateTrainerLocation(trainerLocationViewModel.Trainer, trainerLocationViewModel.Location);

            if (trainerLocation == null)
            {
                return BadRequest();
            }

            return Ok(trainerLocationViewModel);
        }

        [HttpGet]
        public IActionResult Get()
        {
            var trainerLocation = _trainerLocationRepository.Get();

            return Ok(trainerLocation);
        }
    }
}