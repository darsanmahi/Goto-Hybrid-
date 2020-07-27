import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DiaryService {
  authState: any;
  Firebase = "https://personaldiary-719e9.firebaseio.com";
  constructor(
    public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public db : AngularFireDatabase,
    private storage : AngularFireStorage,
  ) { 
    this.ngFireAuth.authState.subscribe((authState) => {
      if(authState){
        this.authState=authState.uid;
        console.log(this.authState);
      }
    });
  }
  writepersonaldiary(data){
    var date = new Date();
    var datet = date.getDate();
    var montht = date.getMonth()+1;
    var montht1 = '0' + String(montht);
    console.log(montht1);
    var yeart = date.getFullYear();
    var today = String(datet) + '-' + (montht1) + '-' + String(yeart);
    this.ngFireAuth.authState.subscribe(user => {
      if(user){
        var userID = user.uid;
        this.db.database.ref('users/' + userID + '/Diary'+'/'+today).set({
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
    var yeart = date.getFullYear();``
    var today = String(datet) + '-' + String(montht1) + '-' + String(yeart);
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
    var today = String(datet)+ '-' + (montht1) + '-' + String(yeart);
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        var userid = user.uid;
        const mynewfile1 = new File([vid], today + '.mp4', { type: vid.type })
        this.storage.ref(userid + '/' + mynewfile1.name).put(vid).catch(e => alert(e.message));
      }
    })
  }

  async readData(){
    if(typeof this.readprev==='undefined'){

    }
    else{
      console.log(this.readprev())
    const data2 = await(this.readprev());
    console.log(data2);
    return data2;
    }
  }

  readprev(){
    return this.db.list('users/').valueChanges();
  }

}
