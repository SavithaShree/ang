import { Routes } from '@angular/router';
import { FormLoginComponent } from './form-login/form-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const appRoutes: Routes = [
    { path: 'form-login', 
      component: FormLoginComponent 
    },
    {
      path: 'sign-up',
      component: SignUpComponent
    }
];
