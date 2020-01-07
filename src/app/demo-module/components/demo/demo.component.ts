import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MustMatch } from './../../../_helpers/must-match.validator';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  genders: string[];
  submittedValues: any;
  finalarraykeys: string[];
  finalarrayvalues: unknown[];
  constructor(private formBuilder: FormBuilder) { }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    // console.log('this.registerForm.value',this.registerForm.value);

    this.finalarraykeys = Object.keys(this.registerForm.value);
    this.finalarrayvalues = Object.values(this.registerForm.value);
    for(var i=0;i<this.finalarrayvalues.length;i++){
     if(this.finalarrayvalues[i]==true){
      this.finalarrayvalues[i]= 'accepted T & C';
     }
     else{
      this.finalarrayvalues
     }
   }
    //console.log(this.finalarraykeys);
    // console.log(this.finalarrayvalues);

  }

  ngOnInit() {
    this.genders = ['male', 'female'];


    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      checkbox: ['', Validators.requiredTrue]

    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
   

  }
  get f() { return this.registerForm.controls; }

}
