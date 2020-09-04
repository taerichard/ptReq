using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PersonalTrainer.Repositories;
using PersonalTrainer.Models;
using PersonalTrainer.Services;

namespace PersonalTrainer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlaygroundController : ControllerBase
    {
        private readonly ITrainerLocationServices _tlServices;

        public PlaygroundController(ITrainerLocationServices TrainerLocationServices)
        {
            _tlServices = TrainerLocationServices;
        }

        [HttpGet("{lastName}")]
        public IActionResult GetLocationsByLastName(string lastName)
        {
            var locations = _tlServices.GetLocationByLastName(lastName);

            if (locations != null)
            {
                return Ok(locations);
            }

            return BadRequest();
        }
    }
}