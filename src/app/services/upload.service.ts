import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { HttpClient, HttpHeaders } from '@angular/common/http';


const cloudName = 'dsntngtdx';
const unsignedUploadPreset = 'ztj48enx';
@Injectable({
    providedIn: 'root'
})

export class UploadService {
    constructor(private http: HttpClient) {

    }
    pushUpload(tag, file) {
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
        let fd = new FormData();
        fd.append('upload_preset', unsignedUploadPreset);
        fd.append('tags', tag); // Optional - add tag for image admin in Cloudinary
        fd.append('file', file);
        return Observable.create((obs: Observer<string>) => {
            this.http.post(url, fd).subscribe(res => {
                obs.next(res['secure_url']);
                obs.complete();
            })
        });
    }

    deleteFile(path) {
        // const storageRef = firebase.storage().ref();
        // const deleteRef = storageRef.child(path);
        // deleteRef.delete();
    }

    deleteFileByURL(url) {
        // let last = url.lastIndexOf('/');
        // let asd = url.indexOf('?')
        // let a = url.substr(last, asd);
        // let b = a.substr(0, a.indexOf('?'));

        // let path = b.replace(/%2F/g, '/');
        // const storageRef = firebase.storage().ref();

        // const deleteRef = storageRef.child(path);
        // deleteRef.delete();
    }

}
