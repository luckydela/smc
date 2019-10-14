import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-mcnfmpassword',
  templateUrl: './mcnfmpassword.component.html',
  styleUrls: ['./mcnfmpassword.component.css']
})
export class McnfmpasswordComponent implements OnInit {

  passwordform: FormGroup;
  constructor(private router: Router, private service: ServiceService, public formbuilder: FormBuilder) { 
    this.passwordform = this.formbuilder.group({
      password: new FormControl('',[Validators.required]),
      confirm_password: new FormControl('',[Validators.required]) 
    })
  }

  ngOnInit() {

   
  }

  setPassword(){
   if(this.passwordform.valid){

    

   }
  }

}
