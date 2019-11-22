import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService extends BaseService {
  constructor(protected angularFirestore: AngularFirestore) {
    super(angularFirestore, 'Portfolios');
  }

  getInHome() {
    return this.angularFirestore.collection<any>(this.basePath,
      // tslint:disable-next-line: max-line-length
      ref => ref.limit(6).where('is_home', '==', true).where('published', '==', true).orderBy('createdAt', 'desc')).snapshotChanges().map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data();
          data.id = a.payload.doc.id;
          return data;
        });
      });
  }

}
