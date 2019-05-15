import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
    providedIn: 'root'
  })
export class TeamService extends BaseService {
  constructor(protected angularFirestore: AngularFirestore) {
    super(angularFirestore, 'Teams');
  }
}
