import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected basePath = '';
  constructor(protected angularFirestore: AngularFirestore, path: string) {
    this.basePath = path;
  }

  public update(data) {
    const timestamp = this.timestamp;
    return this.angularFirestore.collection(this.basePath).doc(data.id).set({
      ...data, createdAt: timestamp
    });
  }

  public create(data) {
    const timestamp = this.timestamp;
    return this.angularFirestore.collection(this.basePath).add({
      ...data, createdAt: timestamp
    });
  }

  public getAll(query?) {
    return this.angularFirestore.collection<any>(this.basePath).snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  public getById(id) {
    let itemPath = `${this.basePath}/${id}`;
    return this.angularFirestore.doc<any>(itemPath).valueChanges();
  }

  get timestamp() {
    return new Date();
  }

  public delete(id) {
    return this.angularFirestore.collection(this.basePath).doc(id).delete();
  }
}
