using System;
namespace Playground.Entities
{
    public class PlaygroundDatabaseSettings : IPlaygroundDatabaseSettings
    {
        public string PlaygroundCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IPlaygroundDatabaseSettings
    {
        string PlaygroundCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
