import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { FirebaseStorage } from '@firebase/storage-types';

@Injectable()
export class UploadService {

    pushUpload(path, file) {

        return Observable.create((obs: Observer<string>) => {
            const storageRef = firebase.storage().ref();
            const uploadTask = storageRef.child(path).put(file);
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot) => {
                    const snap = snapshot as firebase.storage.UploadTaskSnapshot;
                },
                (error) => {
                    console.log(error)
                },
                () => {
                    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        obs.next(downloadURL);
                        obs.complete();
                    });
                }
            );

        });

    }

    deleteFile(path) {
        const storageRef = firebase.storage().ref();
        const deleteRef = storageRef.child(path);
        deleteRef.delete();
    }

    deleteFileByURL(url) { 
        let last = url.lastIndexOf('/');
        let asd = url.indexOf('?')
        let a = url.substr(last, asd);
        let b = a.substr(0, a.indexOf('?'));

        let path = b.replace(/%2F/g,'/'); 
        const storageRef = firebase.storage().ref();
    
        const deleteRef = storageRef.child(path);
        deleteRef.delete();
    }

}
