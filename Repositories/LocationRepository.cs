using System;
using System.Collections.Generic;
using MongoDB.Driver;
using Playground.Entities;

namespace Playground.Repositories
{
    public class LocationRepository
    {
        private readonly IMongoCollection<Location> _games;

        public LocationRepository(IPlaygroundDatabaseSettings settings)
        {
            var client = new MongoClient("mongodb+srv://PlaygroundAdmin:bGrwKxVoqaWIqJaW@playground.dbou8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
            var database = client.GetDatabase("Escape");

            _games = database.GetCollection<Location>("Locations");
        }

        public List<Location> Get() => _games.Find(game => true).ToList();

        public Location Get(string id) => _games.Find(game => game.Id == id).FirstOrDefault();


    }
}
