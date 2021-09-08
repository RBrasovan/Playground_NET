using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Playground.Entities;
using Playground.Repositories;

namespace Playground_NET.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly LocationRepository _gameService;

        public WeatherForecastController(LocationRepository gamesService)
        {
            _gameService = gamesService;
        }

        [HttpGet]
        public ActionResult<List<Location>> Get() =>
            _gameService.Get();

        [HttpGet("{id}", Name = "GetGame")]
        public ActionResult<Location> Get(string id)
        {
            var game = _gameService.Get(id);

            if (game == null)
            {
                return NotFound();
            }

            return game;
        }
    }
}
