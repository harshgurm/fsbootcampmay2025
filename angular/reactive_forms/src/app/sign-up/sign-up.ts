import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../login-service';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {

  loginService = inject(LoginService);

  signUpForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    confirm_password: new FormControl('', [Validators.required]),
  })

  submitSignUp(){
    if(this.signUpForm.value){
      this.loginService.userSignUp(this.signUpForm.value).subscribe((data:any) => {
        if(data){
          console.log(data);
        }
      })
    }
  }

}
