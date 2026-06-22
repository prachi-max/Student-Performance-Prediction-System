
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  loginForm!: FormGroup;

constructor(
  private fb: FormBuilder,
  private authService: AuthService,
  private router: Router
) {

    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });

  }

  isLoading = false;
loginSuccess = false;


login() {

  
  this.isLoading = true;

  this.authService
    .login(this.loginForm.value)

    .subscribe({

      next: (res: any) => {
     console.log("LOGIN RESPONSE:", res);

        // Save token
        localStorage.setItem(
          'token',
          res.token
        );

        // Save user ID
        localStorage.setItem(
          'userId',
          res.user._id
        );

        // Save username
        localStorage.setItem(
          'userName',
          res.user.name
        );

        console.log(
          "✅ USER ID:",
          localStorage.getItem('userId')
        );

       this.isLoading = false;
       this.loginSuccess = true;
       alert('Login successful');
       setTimeout(() => {
       window.location.href = '/';
     }, 1000);
      },

      error: (err) => {

        console.log(err);

        this.isLoading = false;

        alert("Login failed");

      }

    });

}

fillDemo() {
  this.loginForm.patchValue({
    email: 'pintu.jadav40@gmail.com',
    password: 'pintu40'
  });
}

}

