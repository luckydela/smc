import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ServiceService } from '../../service/service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-hfaddmanager',
  templateUrl: './hfaddmanager.component.html',
  styleUrls: ['./hfaddmanager.component.css']
})
export class HfaddmanagerComponent implements OnInit {

  
  addmanagerform: FormGroup;
  constructor(public formBuilder: FormBuilder, public service: ServiceService) { 
    this.addmanagerform = this.formBuilder.group({
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      //managerid: new FormControl('',[Validators.required]),
    })
  }

  ngOnInit() {
  }

  addmanager(){
    if (this.addmanagerform.valid) {
      swal.showLoading()
      this.service.addManager(this.addmanagerform.value)
      .subscribe(response => {
        swal.hideLoading()
        if (response['responseCode'] === '000') {
          this.addmanagerform = this.formBuilder.group({
            firstName:new FormControl('',[Validators.required]),
            lastName:new FormControl('',[Validators.required]),
            email:new FormControl('',[Validators.required]),
            //managerid: new FormControl('',[Validators.required]),
          })
          swal.fire("Success",response['responseMessage'], "success");
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
