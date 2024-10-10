import { Injectable } from '@angular/core';
import { error } from 'console';
import { LatLngLiteral } from 'leaflet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getCurrentLocation():Observable<LatLngLiteral>{
    return new Observable((obsever)=>{
      if(!navigator.geolocation){
        return;
      }
      return navigator.geolocation.getCurrentPosition(
        (pos)=>{
          obsever.next({
            lat:pos.coords.latitude,
            lng:pos.coords.longitude
          })
        },
        (error)=>{
          obsever.error(error);
        }
      )
    })
  }
}
