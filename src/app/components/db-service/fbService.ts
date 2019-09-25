import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable()
export class FireBaseService {

    constructor(private afs: AngularFirestore) {
    }

    getCircular(){
        return this.afs.collection("circular").snapshotChanges();
    }

    getEvents(){
        return this.afs.collection("event").snapshotChanges();
    }

    getNews(){
        return this.afs.collection("news").snapshotChanges();
    }

}

