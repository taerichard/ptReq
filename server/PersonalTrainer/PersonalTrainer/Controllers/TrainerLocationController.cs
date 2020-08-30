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

        //GET api/trainerlocation/{id}
        [HttpGet("{id}")]
        public IActionResult Get(int trainerId)
        {
            var location = _trainerLocationRepository.GetTrainerLocationByTrainerId(trainerId);

            if (location != null)
            {
                return Ok(location);
            }
            return NotFound();
        }

        [HttpPost]
        public IActionResult Create(TrainerLocationViewModel trainerLocationViewModel)
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

        [HttpGet]
        public IActionResult GetAllTrainerLocations()
        {
            IEnumerable<TrainerLocation> trainerLocation = _trainerLocationRepository
                .GetAllTrainerLocations();
            return Ok(trainerLocation);
        }

        //[HttpGet("{cityName}")]
        //public IActionResult GetAllTrainersByCity(string cityName)
        //{
        //    IEnumerable<TrainerLocation> trainerLocation = _trainerLocationRepository
        //        .GetTrainersByCity(cityName);

        //    return Ok(trainerLocation);
        //}

        //[HttpDelete("{id}")]
        //public IActionResult DeleteTrainerLocation(int id)
        //{
        //    _trainerLocationRepository.Remove(id);
        //    return Ok();
        //}
    }
}