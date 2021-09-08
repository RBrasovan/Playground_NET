import { Directions } from "./directions";

export class Locations {
  id: number;
  name: string;
  description: string;
  objects : number[];
  directions : Directions[];
  characters : number[];

  constructor(object) {
    this.id = object.id;
    this.name = object.name;
    this.description = object.description;
    this.objects = object.objects;
    this.directions = object.directions;
    this.characters = object.characters;
  }

}


