import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PortfolioService extends BaseService {
  constructor(protected angularFireDatabase: AngularFireDatabase) {
    super(angularFireDatabase, 'Portfolio');
  }
}
