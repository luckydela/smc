import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addagents',
  templateUrl: './addagents.component.html',
  styleUrls: ['./addagents.component.css']
})
export class AddagentsComponent implements OnInit {

  userdata;

  agentform: FormGroup;
  constructor(public formBuilder: FormBuilder, public service: ServiceService, public router: Router) { 
    this.agentform = this.formBuilder.group({
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      //phone:new FormControl('',[Validators.required]),
      phone:new FormControl('',Validators.compose([Validators.pattern(/^(\+233)[0-9]\d{8}$/),Validators.required])),
      email:new FormControl('',[Validators.required]),
      //password: new FormControl('',[Validators.required]),
      location: new FormControl('',[Validators.required]),
      managerName: new FormControl('',[Validators.required]),
      managerEmail: new FormControl('',[Validators.required]),
    })
  }

  ngOnInit() {
    this.userdata=JSON.parse(localStorage.getItem('userdata'));

  }

  addagent(){
    if (this.agentform.valid) {
      swal.showLoading()
      this.service.addagent(this.agentform.value)
      .subscribe(response => {
        swal.hideLoading()
        if (response['responseCode'] === '000') {
          this.agentform = this.formBuilder.group({
            firstName:new FormControl('',[Validators.required]),
            lastName:new FormControl('',[Validators.required]),
            phone:new FormControl('',Validators.compose([Validators.pattern(/^(\+233)[0-9]\d{8}$/),Validators.required])),
            email:new FormControl('',[Validators.required]),
            //password: new FormControl('',[Validators.required]),
            location: new FormControl('',[Validators.required]),
            managerName: new FormControl('',[Validators.required]),
            managerEmail: new FormControl('',[Validators.required]),
          })
          swal.fire("Success",response['responseMessage'], "success");
          this.router.navigate(['/agents']);
        } else {
          swal.fire({
            title: 'Oops...',
            text: response['responseMessage'],
            footer: ''
          });
        }
        
      }, error => {
        swal.fire({
          title: 'Oops...',
          text: error,
          footer: ''
        });
        swal.hideLoading()
      })
    } else {
      swal.fire({
        title: 'Oops...',
        text: 'Please fill all form fields',
        footer: ''
      });
    }
    
  }

}
