import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Locations } from '../models/locations';
import { Objects } from '../models/objects';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  placeholder: string;
  formgroup = new FormGroup({
    input: new FormControl(''),
  });
  inputs: string[] = [];
  textAreaText: string;
  objects: Objects[];
  locations: Locations[] = [];
  currentLoc: Locations;
  currentObjects: Objects[];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.placeholder = 'Welcome to Escape!';

    //get stuff here
    /*this.gameService.getObjects().subscribe(o => {
      this.objects = o;
    });*/
    this.gameService.getLocations().subscribe(l => {
      this.locations = l;
      console.log(this.locations)
    });


    this.currentLoc = this.locations[0];
    this.currentObjects = this.gameService.getObjectsAtLocation(
      this.currentLoc.objects
    );
  }

  update() {
    if (this.formgroup.valid) {
      this.pushText(this.formgroup.value.input);
      console.log(this.inputs[this.inputs.length - 1])
      //Preform Actions
      this.actions(this.inputs[this.inputs.length - 1]);

      this.formgroup.reset();
    }
  }

  actions(line: string) {
    let lineComponents = [];
    lineComponents = line.split(' ');
    console.log(lineComponents);

    switch (lineComponents[0]) {
      case 'go': {
        this.go(lineComponents[1]);
        break;
      }
      case 'pickup': {
        console.log("You've pickup something");
        break;
      }
      case 'use': {
        console.log("You've used something");
        break;
      }
      case 'look': {
        console.log("Location: " + this.currentLoc.description);
        console.log(this.currentObjects);
        break;
      }
      default: {
        console.log("You've done nothing");
      }
    }
  }

  go(direction: string) {

    this.currentLoc.directions.forEach((direc) => {
      if (direc.direction == direction) {
        this.currentLoc = this.locations.filter(l => l.id == direc.location)[0];
        this.currentObjects = this.gameService.getObjectsAtLocation(
          this.currentLoc.objects
        );
        console.log("you went " + direc.direction + " to go to " + this.locations.filter(l => l.id == direc.location)[0].name);
        this.look();
        return;
      }
      else {
        console.log("You can't go that way.");
      }
    });
  }

  pushText(input: string) {
    document.getElementById('gameArea').focus();
    this.inputs.push(input);

    setTimeout(() => {
      var objDiv = document.getElementById('gameArea');
      objDiv.scrollTop = objDiv.scrollHeight;
    }, 0);
  }

  look() {
    console.log("Location: " + this.currentLoc.description);
    console.log(this.currentObjects);
  }

}
