import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule, JsonPipe],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SignIn {

  user = {
    name: '',
    password: ''
  }

  submitSignInForm(form: {}){
    console.log(form)
  }

}
