import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../../service/service.service';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-hfprofile',
  templateUrl: './hfprofile.component.html',
  styleUrls: ['./hfprofile.component.css']
})
export class HfprofileComponent implements OnInit {
userdata;
  updateprofile:FormGroup;
  constructor(private router: Router, private service: ServiceService, public formbuilder: FormBuilder ) {
    this.updateprofile = this.formbuilder.group({
      email: new FormControl('',[Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname : new FormControl('', [Validators.required]),
      managerid: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required])

    })
   }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('userdata'));
  }

  
  updateProfile(){
    //console.log(4);
    
  }

}
