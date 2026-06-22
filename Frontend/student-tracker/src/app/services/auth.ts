import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {

  // UPDATED: Points to your exact deployed project instance with the sub-route
  // This makes Angular look for a server-side setting instead of a hardcoded string
private apiUrl = (window as any).env?.API_URL || "https://onrender.com";


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
