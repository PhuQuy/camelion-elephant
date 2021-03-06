import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';
@Injectable({
    providedIn: 'root'
  })
export class ContactService extends BaseService{
  constructor(protected angularFireDatabase: AngularFirestore,  private http: HttpClient,) { 
    super(angularFireDatabase, 'Contact');
  }

  sendEmail(data){
  	return this.http.post(`${environment.emailURL}`, data);
  }
}
