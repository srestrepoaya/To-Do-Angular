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
import { Task } from '../types/task.type';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private firestore: Firestore;
  private TaskCollection: CollectionReference<DocumentData, DocumentData>;
  public tasks$: Observable<any[]>;

  constructor() {
    this.firestore = inject(Firestore);

    this.TaskCollection = collection(this.firestore, 'Tasks');

    this.tasks$ = collectionData(this.TaskCollection);
  }

  async addTask(task: Task): Promise<void> {
    await addDoc(collection(this.firestore, 'Tasks'), task);
  }

  async getTasks(): Promise<any[]> {
    const querySnapshot = await getDocs(this.TaskCollection);
    return querySnapshot.docs;
  }

  // async updateTask(id: string, updates: Partial<any>): Promise<void> {
  //   const docRef = doc(this.firestore, 'Tasks', id);
  //   await updateDoc(docRef, updates);
  // }

  // async deleteTask(id: string): Promise<void> {
  //   const docRef = doc(this.firestore, 'Tasks', id);
  //   await deleteDoc(docRef);
  // }
}
