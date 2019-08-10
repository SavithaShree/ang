import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  loginForm = this.fb.group({
    name: ['', Validators.required],
    age: ['', [Validators.required, Validators.maxLength(2)]],
    gender: ['', Validators.required],
    address1: this.fb.group({
      city: ['', Validators.required],
      state: ['', Validators.required]
    }),
    address2: this.fb.group({
      city: ['', Validators.required],
      state: ['', Validators.required]
    }),
    address3: this.fb.group({
      city: ['', Validators.required],
      state: ['', Validators.required]
    }),
    selectAll: [''],
    selectNone: [''],
    preference1: [''],
    preference2: [''],
    preference3: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.onChanges();
  }

  onChanges() {
    this.loginForm.get('selectAll').valueChanges.subscribe(bool => {
      this.loginForm
        .patchValue({ preference1: bool, preference2: bool, preference3: bool });
    });
    this.loginForm.get('selectNone').valueChanges.subscribe(bool => {
      if (bool) {
      this.loginForm
        .patchValue({ selectAll: false, preference1: false, preference2: false, preference3: false });
      }
    });
  }

}
