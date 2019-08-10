import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4),  Validators.pattern('/^[a-zA-Z ]*$/')]),
    email: new FormControl('', [Validators.required, Validators.pattern('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/')]),
    pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
    repass: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required, Validators.pattern('/^[6-9]{1}[0-9]{9}$/')])
  });

  constructor() { }
onSubmit() {
  console.warn(this.signupForm.value);
}

}
