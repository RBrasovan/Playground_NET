import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Locations } from '../models/locations';
import { Objects } from '../models/objects';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  objectsData : any;
  locationsData : any;
  allObjects : Objects[] = [];
  allLocations: Locations[] = [];

  constructor(private http: HttpClient, @Inject('BASE_URL') public baseUrl: string) { }

  getObjects() {
    return this.http.get<Objects[]>(this.baseUrl + 'weatherforecast');
  }

  getLocations() {
    return this.http.get<Locations[]>(this.baseUrl + 'weatherforecast');

  }

  getObjectByID(id : number) {
    //console.log(this.objectsData.default);
    return this.objectsData.default.find(obj => obj.id == id);
  }

  getObjectsAtLocation(ids : number[]) {
    //console.log(this.locationsData.default);
    var objectsAtLoc : Objects[] = [];
    ids.forEach(id => {
      objectsAtLoc.push(this.objectsData.default.find(objs => objs.id == id));
    });

    return objectsAtLoc;
  }

  getLocationByID(id : number) {
    //console.log(this.locationsData.default);
    return this.locationsData.default.find(loc => loc.id == id);
  }

}
