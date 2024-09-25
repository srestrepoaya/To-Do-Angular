import { inject, Injectable } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  Firestore,
  addDoc,
  collection,
  collectionData,
  getDocs,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../types/user.type';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private firestore: Firestore;
  private usersCollection: CollectionReference<DocumentData, DocumentData>;
  public users$: Observable<any[]>;

  constructor() {
    this.firestore = inject(Firestore);

    this.usersCollection = collection(this.firestore, 'Users');

    this.users$ = collectionData(this.usersCollection);
  }

  async addUser(user: User): Promise<void> {
    await addDoc(collection(this.firestore, 'Users'), user);
  }

  async getUsers(): Promise<any[]> {
    const querySnapshot = await getDocs(this.usersCollection);
    return querySnapshot.docs;
  }

  // async updateUser(id: string, updates: Partial<any>): Promise<void> {
  //   const docRef = doc(this.firestore, 'Users', id);
  //   await updateDoc(docRef, updates);
  // }

  // async deleteUser(id: string): Promise<void> {
  //   const docRef = doc(this.firestore, 'Users', id);
  //   await deleteDoc(docRef);
  // }
}
