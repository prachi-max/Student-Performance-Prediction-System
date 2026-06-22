// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { AuthService } from '../services/auth';
// import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [FormsModule, CommonModule, ReactiveFormsModule],
//   templateUrl: './register.html',
//   styleUrls: ['./register.css']
// })
// export class Register { 

//   user:any = {};
//   successMessage = '';
//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private auth:AuthService){}

//   register(){
//     this.auth.register(this.user)
//       .subscribe({
//         next:()=>{
//           alert("Registered Successfully");
//         },
//         error:()=>{
//           alert("Registration Failed");
//         }
//       });
//   }

//   this.authService.register(this.user).subscribe({
//     next: (res: any) => {

//       this.successMessage = "🎉 Registration Successful!";

//       // clear form
//       this.user = {};

//       // redirect after 2 seconds
//       setTimeout(() => {
//         this.router.navigate(['/login']);
//       }, 2000);
//     },

//     error: (err) => {
//       alert("Something went wrong");
//     }
//   });
// }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register {

  user: any = {
    name: '',
    email: '',
    phone: '',
    password: ''
  };

  successMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register() {
    this.authService.register(this.user).subscribe({
      next: (res: any) => {

        this.successMessage = "🎉 Registration Successful!";

        // reset form
        this.user = {
          name: '',
          email: '',
          phone: '',
          password: ''
        };

        // redirect after 2 sec
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },

      error: (err: any) => {
        alert("Registration failed");
        console.error(err);
      }
    });
  }

}