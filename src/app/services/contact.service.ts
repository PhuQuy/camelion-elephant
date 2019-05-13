import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ContactService extends BaseService{
  constructor(protected angularFireDatabase: AngularFirestore) { 
<<<<<<< HEAD
    super(angularFireDatabase, 'Contact');
=======
    super(angularFireDatabase, 'Contacts');
>>>>>>> b3d24307ffedcb934179dbd90d41595884fb2c1e
  }
}
