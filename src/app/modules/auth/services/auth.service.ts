import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { UsersService } from '../../users/services/users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: any;
  private usersService: UsersService;

  constructor(private service: UsersService) {
    this.auth = getAuth();
    this.usersService = service;
  }

  public async signUp(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);

      await this.usersService.addUser({ firstName, lastName, email });
    } catch (error) {
      console.error(error);
    }
  }

  public async singIn(email: string, password: string) {
    await signInWithEmailAndPassword(this.auth, email, password);
  }

  public async signOut() {
    await signOut(this.auth);
  }
}
