import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'applcation/json'
    })
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') public baseUrl: string) { }


  getLocations() {
    return this.http.get<Location[]>(this.baseUrl + 'location/getlist', this.httpOptions);

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

interface Location {
  description: string[];
}
