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
    public class LocationController : ControllerBase
    {
        private readonly LocationRepository _locationRepo;

        public LocationController(LocationRepository locationRepo)
        {
            _locationRepo = locationRepo;
        }

        [HttpGet("getlist", Name = "GetLocations")]
        public ActionResult<List<Location>> Get()
        {
            var locations = _locationRepo.Get();
            return locations;
        }
            

        [HttpGet("{id}", Name = "GetLocationById")]
        public ActionResult<Location> Get(string id)
        {
            var game = _locationRepo.Get(id);

            if (game == null)
            {
                return NotFound();
            }

            return game;
        }
    }
}
