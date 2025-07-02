import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { PasswordValidation } from '../password-validation';
import { UsernameValidation } from '../username-validation';
import { LoginService } from '../login-service';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SignIn {

  signInForm = new FormGroup({
    username: new FormControl('',[Validators.required, UsernameValidation]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12), PasswordValidation])
  })

  loginService = inject(LoginService);

  submitSignIn(){
    if(this.signInForm){
      this.loginService.userLogin(this.signInForm.value).subscribe((result:any) => {
        if(result.token){
          localStorage.setItem('token', result.token);
        }
      })
    }
  }

}
