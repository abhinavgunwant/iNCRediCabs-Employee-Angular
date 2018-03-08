import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Http } from '@angular/http';
import * as env from '../environments/environment';

@Injectable()
export class DriverService {

    constructor(
        private _http: Http,
    )
    {}

    getDrivers():Observable<any>{
        
        var data;
        return this._http.post(env.environment.url+'/Driver/DriverDetails','').map((response)=>{
          return response.json()
        })
        
      }

      searchDriver(body){
        return this._http.post(env.environment.url+"/Search/SearchDriver",body).map((response)=>{
      return response.json()
    })
  }   

  deleteDriver(body){
    return this._http.post(env.environment.url+"/DriverStatus/DisableDriver",body).map((response)=>{
      return response.json()
    })
  }
  
  enableDriver(body){
    return this._http.post(env.environment.url+"/DriverStatus/EnableDriver",body).map((response)=>{
      return response.json();
    })
  }
  adddriver(body): Observable<any>{
    return this._http.post(env.environment.url+"/Add/AddDriver", body);
    }

  sendfile(file_upload): Observable<any>{
      return this._http.post(env.environment.url+"/Add/AddImage", file_upload);
      }  

      updatedriver(body){
        return this._http.post(env.environment.url+"/Driver/UpdateDriver",body).map((response)=>{
          return response.json();
        })
      }
}