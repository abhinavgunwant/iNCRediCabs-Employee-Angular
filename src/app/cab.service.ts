import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Http } from '@angular/http';
import * as env from '../environments/environment';

@Injectable()
export class CabService {

    constructor(
        private _http: Http,
    )
    {}

    getCabs():Observable<any>{
        
        var data;
        return this._http.post(env.environment.url+'/Cab/CabDetails','').map((response)=>{
          return response.json()
        })
        
      }
      searchCab(body){
        return this._http.post(env.environment.url+"/Search/SearchCab",body).map((response)=>{
      return response.json()
    })
  }

  deleteCab(body){
    return this._http.post(env.environment.url+"/CabStatus/DisableCab",body).map((response)=>{
      return response.json()
    })
  }
  updateCab(body){
    return this._http.post(env.environment.url+"/Cab/Updatecab",body).map((response)=>{
      return response.json();
    })
  }
  
  enableCab(body){
    return this._http.post(env.environment.url+"/CabStatus/EnableCab",body).map((response)=>{
      return response.json();
    })
  }

  driverCab(body): Observable<any>{
    return this._http.post(env.environment.url+"/Driver/DriverType",body);
    
        }
        addcab(body): Observable<any>{
          return this._http.post(env.environment.url+"/Add/Addcab", body);
          } 
          
        sendfile(Rcert): Observable<any>{
            return this._http.post(env.environment.url+"/Add/AddImage", Rcert);
            } 
        
        
}