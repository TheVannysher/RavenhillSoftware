import { inject, Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

import { RouteFullPaths } from '#lib/enum/routes';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  private FirebaseAuth: Auth = inject(Auth);

  private router: Router = inject(Router);

  private route: ActivatedRoute = inject(ActivatedRoute);

  private user: Observable<User | null> = authState(this.FirebaseAuth);

  async register(email: string, password: string): Promise<string | User> {
    try {
      const { user } = await createUserWithEmailAndPassword(
        this.FirebaseAuth,
        email,
        password,
      );
      // get role of user
      const localUser = {
        username: user.displayName || email,
        role: 'Role',
      };
      localStorage.setItem('user', JSON.stringify(localUser));
      this.router.navigate([RouteFullPaths.OVERVIEW]);
      return user;
    } catch (error) {
      console.error(error);
      return 'there was an issue registering the user';
    }
  }

  async login(email: string, password: string): Promise<string | void> {
    try {
      const { user } = await signInWithEmailAndPassword(this.FirebaseAuth, email, password);
      // get role of user
      const localUser = {
        username: user.displayName || email,
        role: 'Role',
      };
      localStorage.setItem('user', JSON.stringify(localUser));
      console.log('login success!');
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || RouteFullPaths.OVERVIEW;
      this.router.navigate([returnUrl]);
    } catch (error) {
      console.error(error);
      return 'login failed';
    }
  }

  async logout(): Promise<string | void> {
    try {
      await signOut(this.FirebaseAuth);
      localStorage.removeItem('user');
      return 'logged out';
    } catch (error) {
      console.error(error);
      return 'error while login out the user';
    }
  }

  isLoggedIn(): Observable<boolean> {
    return this.user.pipe(map((user) => (!!user)));
  }
}
