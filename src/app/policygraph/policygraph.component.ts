import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import { PolicyService } from '../service/policyservice';
import swal from 'sweetalert2';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-policygraph',
  templateUrl: './policygraph.component.html',
  styleUrls: ['./policygraph.component.css']
})
export class PolicygraphComponent implements OnInit {


  charts:any;
  ud = JSON.parse(localStorage.getItem('userdata')); //get users email


  total:any;
  transact:any;
  pending:any;

  loaderror:any=''


  loading:boolean = false;
  topperformstartdate:any;
  topperformenddate:any;
  selectmonth: any;

  periodchart:any=[];
  


  constructor(public service: ServiceService, public router:Router,  public policyservice: PolicyService) { }

  ngOnInit() {

    var today = new Date(); //get todays date
    this.topperformenddate = today.toISOString().substring(0,10) //convert todays date to format eg.2019-08.02 and set it to end date
    
    today.setDate(today.getDate() - 7) // subtract 7 days from todays date
    this.topperformstartdate = today.toISOString().substring(0,10) //set that date to start date
    
    this.perfomanceDetails()
    
  }


  perfomanceDetails(){

    let minDate = new Date(this.topperformstartdate)
    let maxDate = new Date(this.topperformenddate)
  
    let days = (maxDate.getTime()-minDate.getTime())/(1000 * 3600 * 24)
    //let month = (maxDate.getMonth()-minDate.getMonth())/(1000*3600*24*30)
    
  
    if (days === 7 || days === 30 ) {
      if (this.topperformstartdate === undefined || this.topperformenddate === undefined) {
        swal.fire({ type: 'error',title: 'Oops...',text: 'Start Date or End Date was not selected.',footer: 'Please, make the necessary changes and try again.'});
      } else if(this.topperformstartdate > this.topperformenddate) { 
        swal.fire({ type: 'error',title: 'Oops...',text: 'Start Date is more than End Date.',footer: 'Please, make the necessary changes and try again.'});
      } else {
        this.loading = true;
        this.service.policiesGraphapi({email:this.ud.email,minDate:this.topperformstartdate,maxDate:this.topperformenddate,duration:days.toString(), role:this.ud.role})
          .subscribe(data => {
            this.loading = false;
            this.periodchart = data['responseData'];
            
            let labels = [],amounts=[];
            data['responseData'].forEach(element => {
              labels.push(element.date);
              //amounts.push(parseFloat(element.total.replace(/,/g,'')));
              amounts.push(element.total);

            
              
            });
          
            this.charts = this.policyservice.getPolicyChart(labels,amounts,'policytrans');
    
            this.topperformenddate = ''
            this.topperformstartdate = ''
    
          },error => {
            this.loading = false;
            swal.fire({ type: 'error',title: 'Oops...',text: error.message,footer: 'Please, make the necessary changes and try again.'});
          })
      }
    } else {
      return  swal.fire({ type: 'error',title: 'Oops...',text: 'Interval Should be 7 or 30 days',footer: 'Please, make the necessary changes and try again.'});
    }  
    
  }
  
  sevendaycal(){
   var today = new Date(); //get todays date
    this.topperformenddate = today.toISOString().substring(0,10) //convert todays date to format eg.2019-08.02 and set it to end date
    var calduration =today.setDate(today.getDate()-7) // subtract 7 days from todays date
    this.topperformstartdate = today.toISOString().substring(0,10) //set that date to start date
 

  this.service.policiesGraphapi({email: this.ud.email, maxDate: this.topperformenddate,minDate:this.topperformenddate, duration:calduration, role:this.ud.role}).subscribe(data=>{

  })
 }
   

//   thirtydaycal(){
//       var today = new Date(); //get todays date
//   this.topperformenddate = today.toISOString().substring(0,10) //convert todays date to format eg.2019-08.02 and set it to end date
  
//   today.setDate(today.getDate() - 30) // subtract 7 days from todays date
//   this.topperformstartdate = today.toISOString().substring(0,10) //set that date to start date
  
    
//   }


//   oneyearcal(){
//     var yearlycal = 'months';
//     var today = new Date(); //get todays date
// this.topperformenddate = today.toISOString().substring(0,10) //convert todays date to format eg.2019-08.02 and set it to end date

// today.setDate(today.getDate()) // subtract 7 days from todays date
// this.topperformstartdate = today.toISOString().substring(0,10) //set that date to start date

//   }


}




