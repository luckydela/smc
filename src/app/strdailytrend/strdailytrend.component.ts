import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';
import {Charts} from 'chart.js';
import {ChartService} from '../service/chart.service'

@Component({
  selector: 'app-strdailytrend',
  templateUrl: './strdailytrend.component.html',
  styleUrls: ['./strdailytrend.component.css']
})
export class StrdailytrendComponent implements OnInit {

  total:any;

  loading:boolean = false
  ud = JSON.parse(localStorage.getItem('userdata')) //get users email
  loaderror:any = ''


  agentstotal:any;

  stickerid:any;
  datecreated:any;
 
  charts:any=[];


  constructor(public service: ServiceService, public router: Router, public chartservice: ChartService ) { }

  ngOnInit() {
    this.service.getStickers(this.ud.email).subscribe(data => {
      let labels = [],datecreated=[], stickerno=[]; //declare empty arrays to accet labels, counts and amounts of the graph

      //loop through returned data and retrieve the agent_ids as labels, totalCount as counts data and totalAmount as amount data
      data['responseData '].forEach(element => {
        //labels.push(element.stickerRange_id);
        datecreated.push(element.created_at);
        labels.push(parseFloat(element.current_sticker.replace(/,/g,'')));
      
      });
      console.log(labels);
      
      // finally call graph function to draw 
      this.charts = this.chartservice.getStickerChart(labels,datecreated);     
    })

}


}