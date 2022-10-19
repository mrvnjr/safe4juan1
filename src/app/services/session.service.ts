import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private router: Router
  ) { }

  setToken(token: any) {
  localStorage.setItem('care4juan_loginSession', token);
  }

	getToken() {
		return localStorage.getItem('care4juan_loginSession');
	}

	isLoggedIn() {
		const usertoken = this.getToken();
		if (usertoken != null) {
			return true
		}
		return false;
	}

	getSessionLogin() {
		if (this.isLoggedIn()) {
			var user_type =JSON.parse(localStorage.getItem('fssat_loginSession')!) ;
			user_type = JSON.parse(user_type)['user_type'];
			if (this.router.url == '/login' || this.router.url == '/register') {
				this.router.navigate(['/barangaydash']);
			}
		}
	}
}
