import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { BaseService } from './base.service';

@Injectable()
export class BlogService extends BaseService{
  constructor(protected angularFireDatabase: AngularFireDatabase) { 
    super(angularFireDatabase, 'Blog');
  }
}
