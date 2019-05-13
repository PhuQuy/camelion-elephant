import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class SubscribeService extends BaseService{
  constructor(protected angularFireDatabase: AngularFirestore) { 
    super(angularFireDatabase, 'Subscribe');
  }
}