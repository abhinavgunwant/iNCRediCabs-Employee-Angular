import { Component, OnInit } from '@angular/core';
import { RequestModel } from '../Model/requestModel';
import { UnscheduledRequestService } from '../Services/unscheduled-request.service';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';


declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-unscheduled-request',
  templateUrl: './unscheduled-request.component.html',
  styleUrls: ['./unscheduled-request.component.css']
})
export class UnscheduledRequestComponent implements OnInit {

  public requests: RequestModel;
  public showReqArr = [];
  public defaultRequest = "Pending";


  constructor(public unscheduledRequestService: UnscheduledRequestService) {
    // console.log("constructor"); 
    this.requests= new RequestModel();
  }

  ngOnInit() {
     
     this.unscheduledRequestService.getAllUnscheduledRequest(this.defaultRequest).subscribe(
      (data) => {
          this.requests=data;
          // console.log(this.requests);
      });
    this.initShowDetails(this.requests);
    
    //  console.log("ngInit");
    
  }

  allocateRequest(requestID){
 
  this.unscheduledRequestService.doAllocateRequest(requestID);
    

  }

  downloadRequestExcel() {
    var downloadReqArr = new Array();

    $('.requestDiv').find(':checkbox').each(function () {
      if ($(this).is(':checked')) {
        downloadReqArr.push($(this).val());
      }
    });
    console.log(downloadReqArr);
   
    this.unscheduledRequestService.downloadExcel();
  }

  search() {
    // console.log(this.defaultRequest);
    this.unscheduledRequestService.getAllUnscheduledRequest(this.defaultRequest).subscribe(
      (data) => {
          // console.log(data);
          this.requests=data;
          // console.log(this.requests);
      });
    this.initShowDetails(this.requests);
  }

  toggleSelectAll() {

    var checkedStatus = $('#chk_selectAll').is(':checked');

    $('.requestDiv').find(':checkbox').each(function () {
      $(this).prop('checked', checkedStatus);
    });

  }

  initShowDetails(req) {
    // this.showReqArr = [];
    for (var i = 0; i < req.length; ++i) {
      this.showReqArr.push(false);
    }
    //  console.log(this.showReqArr);
  }

  onShowDetails(i) {
    $('#urqst-' + i).slideDown();
    this.showReqArr[i] = true;
  }

  onHideDetails(i) {
    $('#urqst-' + i).slideUp();
    this.showReqArr[i] = false;
  }

}
