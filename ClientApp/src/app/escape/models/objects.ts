export class Objects {
  id:number;
  name: string;
  usable: boolean;
  weight: number;
  damage: number;

  constructor(object) {
    this.id = object.id;
    this.name = object.name;
    this.usable = object.usable;
    this.weight = object.weight;
    this.damage = object.damage;
  }
}
