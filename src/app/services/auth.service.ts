
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class AuthService {

  constructor() { }

  isAuthenticated() {
    // false means user is not logged in
    return true;
  }

  decode() {
    // Role: 'User'
    // Role: 'Admin'
    return {
      Role: 'Admin'
    };
  }
}
