import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-stickercounter',
  templateUrl: './stickercounter.component.html',
  styleUrls: ['./stickercounter.component.css']
})
export class StickercounterComponent implements OnInit {

  agents:any;
  total:any;
  transact:any;
  pending:any;
  stickertoday:any;

  loading:boolean = false
  ud = JSON.parse(localStorage.getItem('userdata')) //get users email
  loaderror:any = ''

  agentindtotal:boolean=true;

  agentstotal:any;
 

  constructor(public service: ServiceService, public router: Router) { }

  ngOnInit() {

    this.loading = true
    this.service.getAnaytics(this.ud.email, this.ud.role).subscribe(data=>{
      //console.log(data);
      
      this.loading = false

//this.total = parseFloat(data['responseData'][0]['total']);
//this.transact= data['responseData'][0]['total'];
//this.pending = data['total pending'][0]['pending'];
this.stickertoday = data['today_sticker'][0]['totalCount'];


    

    }, error => {
      this.loading = false
      this.loaderror = 'failed to fetch data. Reload'
      swal.fire({
        title: 'Oops...',
        text: error.name,
        footer: ''
      });
    });   
   


    

  }

} 



