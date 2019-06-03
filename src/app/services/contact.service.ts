import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
export class ContactService extends BaseService{
  constructor(protected angularFireDatabase: AngularFirestore,  private http: HttpClient,) { 
    super(angularFireDatabase, 'Contact');
  }

  sendEmail(email, fullname){
  	return this.http.post('/api/sendEmail', {email:email, fullname:fullname});
  }
}
