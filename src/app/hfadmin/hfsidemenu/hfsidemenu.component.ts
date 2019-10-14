import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../../service/service.service'

@Component({
  selector: 'app-hfsidemenu',
  templateUrl: './hfsidemenu.component.html',
  styleUrls: ['./hfsidemenu.component.css']
})
export class HfsidemenuComponent implements OnInit {

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit() {
  }


  // maindasbd(){
  //   this.router.navigate(['hfadmin/hfdsbd']);
  // }

}