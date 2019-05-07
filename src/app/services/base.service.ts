import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected basePath = '';
  constructor(protected angularFireDatabase: AngularFireDatabase, path: string) {
    this.basePath = path;
  }

  public update(data) {
    return Observable.create((obs: Observer<string>) => {
      if (data.id) {
        const itemRef = this.angularFireDatabase.object(`${this.basePath}${data.id}`);
        itemRef.update(data);
        obs.next(data.id);
        obs.complete();
      } else {
        const itemRef = this.angularFireDatabase.list(`${this.basePath}`);
        itemRef.push(data).then(c => {
          obs.next(c.key);
          obs.complete();
        });
      }
    });
  }

  getAlls(): Observable<any[]> {
    return this.angularFireDatabase.list(this.basePath).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  getById(id) {
    return this.angularFireDatabase.object(`${this.basePath}/${id}`).valueChanges();
  }

  getByRoute(route) {
    return this.angularFireDatabase.object(`${this.basePath}/${route}`).valueChanges();
  }

  delete(path) {
    const itemRef = this.angularFireDatabase.object(`${this.basePath}/${path}`);
    itemRef.remove();
  }
}
