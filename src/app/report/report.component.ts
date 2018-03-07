import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  public filterType='';
  public filterValue;
  
  constructor() { }
  public reports=[{"ManagerName":"Sonia Chawla","NumberOfEmpl":"32","NumberOfCabs":"12","Cost":"3600","RequestID":"1234","Shift":"Regular","EmployeeQlid":"re124111","TimeAndDate":"21-12-18,6:12pm","CabNumber":"2675","VendorName":"ABC CAB SERVICE","TypeOfCab":"Micro"},
  {"ManagerName":"Ruchi Chawla","NumberOfEmpl":"2","NumberOfCabs":"1","Cost":"300","RequestID":"8234","Shift":"Regular","EmployeeQlid":"pp222191","TimeAndDate":"21-12-18,6:12pm","CabNumber":"5566","VendorName":"Rose CAB SERVICE","TypeOfCab":"Mini"},
  {"ManagerName":"Aman Chawla","NumberOfEmpl":"12","NumberOfCabs":"10","Cost":"4600","RequestID":"1534","Shift":"Regular","EmployeeQlid":"yu123161","TimeAndDate":"21-12-18,6:12pm","CabNumber":"6464","VendorName":"COdeCatchers CAB SERVICE","TypeOfCab":"Mini"} ];
  ngOnInit() { 
  }
  search()
  {
    if(this.filterType=='')
    return ;
    console.log(this.filterType+" "+this.filterValue);
    
    let JSONStr = "{'request':{'"+this.filterType+"': '"+this.filterValue+"'}}";
  }}