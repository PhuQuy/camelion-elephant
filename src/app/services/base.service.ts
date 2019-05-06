import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected basePath = '';
  constructor(protected angularFirestore: AngularFirestore, path: string) {
    this.basePath = path;
  }

  public update(data) {
    return this.angularFirestore.collection(this.basePath).doc(data.id).set({
      ...data
    });
  }

  public create(data) {
    return this.angularFirestore.collection(this.basePath).add({
      ...data
    });
  }

  public delete(id) {
    return this.angularFirestore.collection(this.basePath).doc(id).delete();
  }

  public getById(id) {
    let itemPath = `${this.basePath}/${id}`;
    return this.angularFirestore.doc<any>(itemPath).valueChanges();
  }

  public getAll() {
    return this.angularFirestore.collection<any>(this.basePath).snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }
}
