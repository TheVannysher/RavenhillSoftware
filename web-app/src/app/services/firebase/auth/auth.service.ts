import { inject, Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from '@angular/fire/auth';
import {
  doc, docData, Firestore, setDoc,
} from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  of,
  switchMap,
} from 'rxjs';

import { RouteFullPaths } from '#lib/enum/routes';
import { User } from '#types/Auth/User';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  private store: Firestore = inject(Firestore);

  private FirebaseAuth: Auth = inject(Auth);

  private router: Router = inject(Router);

  private route: ActivatedRoute = inject(ActivatedRoute);

  private user$: Observable<any>;

  constructor() {
    this.user$ = authState(this.FirebaseAuth).pipe(
      switchMap((user) => {
        if (user) {
          const data = docData(doc(this.store, 'users', user.uid));
          return data as Observable<User>;
        }
        return of(null);
      }),
    );
  }

  async register(email: string, password: string, displayName: string | undefined): Promise<void> {
    const { user } = await createUserWithEmailAndPassword(
      this.FirebaseAuth,
      email,
      password,
    );
    if (displayName) {
      await updateProfile(user, { displayName });
    }
    if (user) {
      const {
        photoURL,
        uid,
      } = user;
      await setDoc(doc(this.store, 'users', uid), {
        displayName: displayName || user.displayName,
        email,
        photoURL,
        uid,
        roles: ['defaultAccess'],
      });
      this.router.navigate([RouteFullPaths.OVERVIEW]);
    }
  }

  async login(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(this.FirebaseAuth, email, password);
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || RouteFullPaths.OVERVIEW;
    this.router.navigate([returnUrl]);
  }

  async logout(): Promise<void> {
    await signOut(this.FirebaseAuth);
  }

  getUser(): Observable<User | null> {
    return this.user$;
  }
}
