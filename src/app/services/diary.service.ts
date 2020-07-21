import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private db : AngularFireDatabase,
    private storage : AngularFireStorage
  ) { }
  writepersonaldiary(data){
    var date = new Date();
    var datet = date.getDate();
    var montht = date.getMonth()+1;
    var montht1 = '0' + String(montht);
    console.log(montht1);
    var yeart = date.getFullYear();
    var today = String(datet) + (montht1) + String(yeart);
    this.ngFireAuth.authState.subscribe(user => {
      if(user){
        var userID = user.uid;
        this.db.database.ref('users/' + userID + '/Diary' + '/' + today).set({
          mom: data
        })
        .then(
          e => alert("Memories Recorded")
        )
        .catch(
          e=>alert(e.message)
        );
      }
    })
  }
  storePicture(pic){
    var date = new Date();
    var datet = date.getDate();
    var montht = date.getMonth() + 1;
    var montht1 = '0' + String(montht);
    var yeart = date.getFullYear();
    var today = String(datet) + (montht1) + String(yeart);
    this.ngFireAuth.authState.subscribe(user=>{
      if(user){
        var userid = user.uid;
        const mynewfile = new File([pic], today + '.jpg', { type: pic.type })
        this.storage.ref(userid+'/'+mynewfile.name).put(pic).catch(e=>alert(e.message));
      }
    })
  }
  storeVideo(vid) {
    var date = new Date();
    var datet = date.getDate();
    var montht = date.getMonth() + 1;
    var montht1 = '0' + String(montht);
    var yeart = date.getFullYear();
    var today = String(datet) + (montht1) + String(yeart);
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        var userid = user.uid;
        const mynewfile1 = new File([vid], today + '.mp4', { type: vid.type })
        this.storage.ref(userid + '/' + mynewfile1.name).put(vid).catch(e => alert(e.message));
      }
    })
  }

}
