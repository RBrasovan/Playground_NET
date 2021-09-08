import { Skill } from "./skill";

export class Characters {
  id:number;
  name : string;
  description : string;
  goodOrEvil : boolean;
  health : number;
  skills : Skill[];
  objects : Object[];
}
