import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameService } from '../escape/services/game.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public locations: Location[];

  constructor(private gameService : GameService) {
    this.gameService.getLocations().subscribe(l => {
      this.locations = l;
    })
}
}

interface Location {
  description: string[];
}
