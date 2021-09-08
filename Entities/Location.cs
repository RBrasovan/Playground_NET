using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Playground.Entities
{
    public class Location
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string description { get; set; }

    }
}
