import { User } from '#types/Auth/User';
import { Injectable, inject } from '@angular/core';
import { Model } from '../types';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  limit,
  orderBy,
  query,
  setDoc,
  startAfter,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements Model<User>{
  private store: Firestore = inject(Firestore);
  private collectionPath = 'users';

  async create(user: User): Promise<void> {
    await addDoc(collection(this.store, this.collectionPath), user);
  }

  getAll(): Observable<User[]> {
    return collectionData(collection(this.store, this.collectionPath)) as Observable<User[]>;
  }

  get(id: string): Observable<User> {
    return docData(doc(this.store, this.collectionPath, id)) as Observable<User>;
  }

  list(pageSize: number = 10, order: keyof User = 'uid', startAfterId?: string): Observable<User[]> {
    const usersCollection = collection(this.store, this.collectionPath);
    let userQuery;
    if (startAfterId) {
      userQuery = query(usersCollection, orderBy(order), startAfter(startAfterId), limit(pageSize));
    } else {
      userQuery = query(usersCollection, orderBy(order), limit(pageSize));
    }
    return collectionData(userQuery) as Observable<User[]>;
  };

  async set(id: string, user: Partial<User>): Promise<void> {
    await setDoc(doc(this.store, this.collectionPath, id), { ...user });
  }

  async delete(id: string): Promise<void> {
    await deleteDoc(doc(this.store, this.collectionPath, id));
  }
}