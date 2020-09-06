﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PersonalTrainer.Data;
using PersonalTrainer.Models;
using PersonalTrainer.Repositories;
using PersonalTrainer.Services;
using PersonalTrainer.ViewModels;

namespace PersonalTrainer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainerController : ControllerBase
    {
        private readonly ITrainerRepository _trainerRepository;
        private readonly ITrainerLocationServices _tlRepo;

        public TrainerController(ITrainerLocationServices TlRepo, ITrainerRepository TrainerRepo)
        {
            _tlRepo = TlRepo;
            _trainerRepository = TrainerRepo;
        }

        [HttpGet]
        public IActionResult GetAllTrainers()
        {
            var trainers = _trainerRepository.GetTrainers();
            return Ok(trainers);
        }

        [HttpGet("{city}")]
        public IActionResult GetTrainersByCityName(string city)
        {
            var trainers = _tlRepo.GetTrainersByCity(city);

            var results = trainers.Select(t => new TrainerDetailViewModel
            {
                FirstName = t.FirstName,
                LastName = t.LastName,
            });

            return Ok(results);
        }

        //[HttpGet("{id}")]
        //public IActionResult GetTrainer(int id)
        //{
        //    var trainer = _trainerRepository.GetTrainerById(id);

        //    if (trainer == null)
        //    {
        //        return BadRequest();
        //    }

        //    return Ok(trainer);
        //}

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

        //[HttpDelete("{id}")]
        //public IActionResult DeleteTrainer(int id)
        //{
        //    _trainerRepository.DeleteTrainer(id);

        //    return Ok();
        //}
    }
}