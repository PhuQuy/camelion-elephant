import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BaseService } from './base.service';

@Injectable()
export class BlogService extends BaseService{
  constructor(protected angularFirestore: AngularFirestore) { 
    super(angularFirestore, 'blog');
  }
}
