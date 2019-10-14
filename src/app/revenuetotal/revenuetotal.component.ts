import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-revenuetotal',
  templateUrl: './revenuetotal.component.html',
  styleUrls: ['./revenuetotal.component.css']
})
export class RevenuetotalComponent implements OnInit {

  total:any;
  transact:any;
  pending:any;
  transacttoday:any;
  policytoday:any;

  loaderror:any='';
  loading:boolean = false;
  ud = JSON.parse(localStorage.getItem('userdata')); //get users email




  constructor(private service: ServiceService) { }

  ngOnInit() {


    this.loading = true
    this.service.getAnaytics(this.ud.email, this.ud.role).subscribe(data=>{
      this.loading = false
      //this.total = parseFloat(data['total'][0]['total'].replace(/,/g,''));
      //this.transact= data['transaction count'][0]['total']
      this.total = parseFloat(data['total_transactions'][0]['totalAmount'].replace(/,/g,''));
      //this.transact= data['total transactions'][0]['totalCount'];
      //this.pending = data['total pending'][0]['pending'];
     // this.transacttoday = parseFloat(data['today_transaction'][0]['totalAmount'].replace(/,/g,''));
      //this.policytoday = data['today_policy'][0]['totalCount'];

      //console.log(this.total);
      

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
