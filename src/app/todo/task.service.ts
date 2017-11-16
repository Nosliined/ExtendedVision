import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

@Injectable()
export class TaskService {
  angularfire: AngularFireDatabase;
  items: FirebaseListObservable<any>;

  constructor(af: AngularFireDatabase) {
    this.angularfire = af;
  }

 }