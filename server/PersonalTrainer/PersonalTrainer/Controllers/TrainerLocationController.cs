﻿using System;
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
        public IActionResult Post(TrainerLocationViewModel trainerLocationViewModel)
        {
            TrainerLocation trainerLocation = new TrainerLocation
            {
                Location = new Location
                {
                    City = trainerLocationViewModel.Location.City,
                    State = trainerLocationViewModel.Location.State
                },

                Trainer = new Trainer
                {
                    FirstName = trainerLocationViewModel.Trainer.FirstName,
                    LastName = trainerLocationViewModel.Trainer.LastName,
                    Email = trainerLocationViewModel.Trainer.Email
                },
            };

            if (trainerLocation == null)
            {
                return BadRequest();
            }

            _trainerLocationRepository.CreateTrainerLocation(trainerLocation);

            return Ok(trainerLocationViewModel);
        }

        [HttpGet("{id}")]
        public IActionResult GetTrainer(int id)
        {
            TrainerLocation trainerLocation = _trainerLocationRepository.GetTrainerLocation(id);

            Trainer trainer = _trainerLocationRepository.GetTrainerInformation(trainerLocation);

            return Ok(trainer);
        }

        [HttpGet]
        public IActionResult GetTrainerLocations()
        {
            var trainerLocation = _trainerLocationRepository.Get();

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