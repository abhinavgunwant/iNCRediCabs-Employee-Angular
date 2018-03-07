import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { ACTIONS } from '../Reducers/todoreducer';
import { filter_model } from '../Model/route-filter';
import { environment } from '../../environments/environment';

import { ApiService, REQUEST_TYPE_GET , REQUEST_TYPE_DELETE , REQUEST_TYPE_POST , REQUEST_TYPE_PUT} from '../Services/api.service';
import { ShowRouteComponent } from '../show-route/show-route.component';


@Injectable()
export class RosterService {

  // constructor(private _http:Http,f_m:filter_model,private apiService: ApiService) { }
  constructor(private _http:Http,private apiService: ApiService) { }
  private getvendordetails='http://localhost:8090/iNCRediCabs/iNCRediCabs/vendorDetails';
  private getemployeesdetails='http://localhost:8090/iNCRediCabs/iNCRediCabs/empDetails';
  private getavailablecab='http://localhost:8090/iNCRediCabs/iNCRediCabs/getCab';
  private createscheduledroute='http://localhost:8090/iNCRediCabs/iNCRediCabs/insertRouteSCH';
  private getqlidlist='http://localhost:8090/iNCRediCabs/iNCRediCabs/empqlid';
  private employeedeactive='http://localhost:8090/iNCRediCabs/iNCRediCabs/empDeactive';
  private insertRouteUnSCH='http://localhost:8090/iNCRediCabs/iNCRediCabs/insertRouteUnSCH';
  getVendorDetails(){
    return this._http.post(this.getvendordetails,"");
   }
  
   getAvailableCab(cabjson){
    return this._http.post(this.getavailablecab,cabjson);
   }
  
   getEmployeesDetails(empqlid){
    return this._http.post(this.getemployeesdetails,empqlid);
   }
   
   getQlidList(){
    return this._http.post(this.getqlidlist,"");
   }
  
   postunscheduledroute(jsonstring){
    const headers= new Headers({'Content-Type': 'application/json'});
    return this._http.post(this.insertRouteUnSCH,JSON.stringify(jsonstring),{headers:headers});
   }
  
   postEmployeeDeactive(jsonstring){
    const headers= new Headers({'Content-Type': 'application/json'});
     return this._http.post(this.employeedeactive,jsonstring,{headers:headers});
  
   }
  
   postscheduledroute(jsonstring){
    const headers= new Headers({'Content-Type': 'application/json'});
    return this._http.post(this.createscheduledroute,JSON.stringify(jsonstring),{headers:headers});
   }
  
 public upload:boolean=false;
 public cab_clicked;
  public getJsonData(){
    return this._http.get('http://localhost:8090/iNCRediCabs/iNCRediCabs/RosterData')
    .map(res => res.json());  
  }

  // Get Filtered data
public postJsonData(c_no,qlid,s_id,e_name){ 
let body={"c_n":c_no,"qlid":qlid,"s_i":s_id,"e_n":e_name};
let headers=new Headers();
  headers.append('Content-Type','application/JSON');
return this._http.post('http://localhost:8090/iNCRediCabs/iNCRediCabs/showRosterInfo',body,{headers: headers}).map(res =>res.json());          
}

//get Add Emp qlid
public getAddData(c_no){ 
  let body={"c_n":c_no};
  let headers=new Headers();
    headers.append('Content-Type','application/JSON');
  return this._http.post('http://localhost:8090/iNCRediCabs/iNCRediCabs/getAddQlid',body,{headers: headers}).map(res =>res.json());          
  }

//get cab list editemp
public getcablist(){ 
  let body={};
  let headers=new Headers();
    headers.append('Content-Type','application/JSON');
  return this._http.post('http://localhost:8090/iNCRediCabs/iNCRediCabs/getcablist',body,{headers: headers}).map(res =>res.json());          
  }

//get Add Emp qlid
public addEmpToDb(qlid,c_no){ 
  let body={"qlid":qlid,"c_n":c_no};
  let headers=new Headers();
    headers.append('Content-Type','application/JSON');
  return this._http.post('http://localhost:8090/iNCRediCabs/iNCRediCabs/AddEmpToDb',body,{headers: headers})
  .catch(this.handleError);          
  
}

handleError(error :Response){
  console.log(error);
  return Observable.throw(error);
}


public sendData(){
  let json=JSON.stringify({"r_no":"route_no","emp_qlid":"qlid","shift_time":"time"});
    let  params=json;
    let headers=new Headers();``
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://localhost:8090/iNCRediCabs/iNCRediCabs/showRosterInfo',params,{headers: headers}).map(res =>res.json());   
}

// Sending Excel Data
public sendfile(formdata:any){
  let body=formdata;
    return this._http.post('http://localhost:8090/iNCRediCabs/iNCRediCabs/UploadFileData',body);   
}

public changeUploadValue(){
  console.log(this.upload);
  return this.upload;
}

public change_cab_clicked(cab){
  this.cab_clicked=cab;
} 


public deleteQlid(qlid){
  let json={"emp_qlid":qlid};
    let  body=json;
    let headers=new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://localhost:8090/iNCRediCabs/iNCRediCabs/inactiveqlid',body,{headers: headers});   
}

//saurav
public posteditinfo(a,b,d,e,f){
  let body={"cabno":a,"picktime":b,"qlid":d,"sdate":e,"edate":f};
  return this._http.post('http://localhost:8090/iNCRediCabs/iNCRediCabs/editd',body);
}

//richa
public getAddData1(){ 
  
  let headers=new Headers();
      
  headers.append('Content-Type','application/JSON');
    
  return this._http.post('http://localhost:8090/iNCRediCabs/iNCRediCabs/getRoute',{headers: headers}).map(res =>res.json());          
  
    }
  
  
    public getcabData(){ 
      
  let headers=new Headers();
       
   headers.append('Content-Type','application/JSON');
    
    return this._http.post('http://localhost:8090/iNCRediCabs/iNCRediCabs/getCabno',{headers: headers}).map(res =>res.json());          
  
      }
    
   
     public updater(a,b,c){ 
   
       let body={"r_n":a, "c_n":b,"s_i":c};
  
        return this._http.post('http://localhost:8090/iNCRediCabs/iNCRediCabs/UpdateRoute',body); 
           
        }
  
  

}
