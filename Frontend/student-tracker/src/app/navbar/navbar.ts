import { Component, Inject, PLATFORM_ID } from '@angular/core';

import {
  CommonModule,
  isPlatformBrowser
} from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,

  imports: [
    RouterModule,
    CommonModule
  ],

  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {

  loggedIn = false;

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object
  ) {}

  ngOnInit() {

    if (isPlatformBrowser(this.platformId)) {

      this.checkLogin();

    }

  }

  checkLogin() {

    this.loggedIn =
      !!localStorage.getItem('token');

  }

  isLoggedIn(): boolean {

    return this.loggedIn;

  }

  logout() {

    if (isPlatformBrowser(this.platformId)) {

      localStorage.removeItem('token');

      this.loggedIn = false;

      window.location.reload();

    }

  }

}