import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

  // FIX: login() was pointing to hardcoded Render URL, register() to localhost
  // Now both use the same local URL consistently
  private apiUrl = "https://onrender.com";

  constructor(private http: HttpClient, private router: Router) {}

  register(data: any) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  login(data: any) {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  saveToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  getUserId(): string | null {
    return localStorage.getItem("userId");
  }

  getUserName(): string | null {
    return localStorage.getItem("userName");
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return !!localStorage.getItem("token");
  }
}
