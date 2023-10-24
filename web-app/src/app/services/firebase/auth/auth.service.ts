import { inject, Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from '@angular/fire/auth';
import { map, Observable } from 'rxjs';
import LOGIN_STATUS from 'src/lib/enum/loginStatus';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  private FirebaseAuth: Auth = inject(Auth);

  private authState: Observable<User | null> = authState(this.FirebaseAuth);

  async register(email: string, password: string): Promise<string | User> {
    try {
      const { user } = await createUserWithEmailAndPassword(this.FirebaseAuth, email, password);
      localStorage.setItem('loginStatus', LOGIN_STATUS.LOGGED_IN);
      return user;
    } catch (error) {
      console.error(error);
      return 'there was an issue registering the user';
    }
  }

  async login(email: string, password: string): Promise<string | User> {
    try {
      const { user } = await signInWithEmailAndPassword(this.FirebaseAuth, email, password);
      localStorage.setItem('loginStatus', LOGIN_STATUS.LOGGED_IN);
      return user;
    } catch (error) {
      console.error(error);
      return 'login failed';
    }
  }

  async logout(): Promise<string | void> {
    try {
      await signOut(this.FirebaseAuth);
      localStorage.setItem('loginStatus', LOGIN_STATUS.LOGGED_OUT);
      return 'logged out';
    } catch (error) {
      console.error(error);
      return 'error while login out the user';
    }
  }

  getLoginStatus(): Observable<User | null> {
    return this.authState;
  }

  isLoggedIn(): Observable<boolean> {
    return this.authState.pipe(map((user) => (!!user)));
  }
}
