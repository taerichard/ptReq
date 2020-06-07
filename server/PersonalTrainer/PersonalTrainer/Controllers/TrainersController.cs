using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonalTrainer.Data;
using PersonalTrainer.Models;

namespace PersonalTrainer.Controllers
{
    [Route("api/[controller]")]
    public class TrainersController : Controller
    {
        private readonly TrainersContext _trainerDb;

        public TrainersController(TrainersContext TrainerContext)
        {
            _trainerDb = TrainerContext;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Json("hello");
        }
    }
}