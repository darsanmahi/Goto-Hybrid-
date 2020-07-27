import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collaborativediary',
  templateUrl: './collaborativediary.page.html',
  styleUrls: ['./collaborativediary.page.scss'],
})
export class CollaborativediaryPage implements OnInit {

  constructor(
    private ngFireAuth : AngularFireAuth,
    private db:AngularFireDatabase
  ) { 
    
  }

  ngOnInit() {
  }

  checkBookid(bid,pword,name){
    var i = '';
    var flag = 0;
    var bid1 = bid.value;
    this.db.database.ref('users/').once("value", function (snapshot) {
      var data = snapshot.val();
      for (i in data) {
        if (i == bid1) {
          flag = 1;
          console.log(i);
          console.log(bid1);
          break;
        }
      }
    })
    setTimeout((event) => {
      if (flag == 1) {
        this.verifyPword1(bid1, pword.value, name.value);
      }
      else if (flag == 0) {
        alert("No such Book exist! Create One");
      }
    }, 2000)
  }

  openBook(bid,pword,name){
    var i='';
    var flag=0;
    var bid1= bid.value;
    this.db.database.ref('users/').once("value",function(snapshot){
      var data =snapshot.val();
      for(i in data){
        if(i==bid1){
          flag=1;
          console.log(i);
          console.log(bid1);
          break;
        }
      }
    })
    setTimeout((event)=>{
      if (flag == 1) {
        this.verifyPword(bid1, pword.value, name.value);
      }
      else if (flag == 0) {
        alert("No such Book exist! Create One");
      }
    },2000)
  }
  createBook(bid, pword, name){
    this.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        var date = new Date();
        var datet = date.getDate();
        var montht = date.getMonth() + 1;
        var montht1 = '0' + String(montht);
        var yeart = date.getFullYear();
        var today = String(datet) + '-' + (montht1)+ '-' + String(yeart);
        console.log(name);
        console.log('users/' + bid + '/' + pword + '/' + today + '/' + name);
        this.db.database.ref('users/' + bid + '/' + pword + '/' + today + '/' + name).set({
          mom: 'New Book Up here!'
        }).then(e => console.log('Success'))
      }
    })
  }
  joinBook(bid, pword, name){
    this.ngFireAuth.authState.subscribe((user)=>{
      if(user){
        var date = new Date();
        var datet = date.getDate();
        var montht = date.getMonth() + 1;
        var montht1 = '0' + String(montht);
        var yeart = date.getFullYear();
        var today = String(datet) + '-' + (montht1) + '-' + String(yeart);
        console.log(name);
        console.log('users/'+ bid + '/' + pword + '/' + today + '/' + name);
        this.db.database.ref('users/'+bid+'/'+pword+'/'+today+'/'+name).set({
          mom: 'Hey I am new here!'
        }).then(e => console.log('Success'))
      }
    })

  }

  verifyPword1(bid,pword,name){
    var i = '';
    var flag = 0;
    this.db.database.ref('users/' + bid).once("value", function (snapshot) {
      var data = snapshot.val();
      for (i in data) {
        if (i == pword) {
          flag = 1;
          break;
        }
      }
    })
    setTimeout((event) => {
      if (flag == 1) {
        this.joinBook(bid, pword, name);
      }
      else if (flag == 0) {
        alert("Incorrect Password");
      }
    }, 2000)
  }

  verifyPword(bid,pword,name){
    var i = '';
    var flag=0;
    this.db.database.ref('users/'+bid).once("value",function(snapshot){
      var data = snapshot.val();
      for(i in data){
        if(i==pword){
          flag=1;
          break;
        }
      }
    })
    setTimeout((event) => {
      if (flag == 1) {
        this.verifyName(bid, pword, name);
      }
      else if (flag == 0) {
        alert("Incorrect Password");
      }
    }, 2000)
  }

  verifyName(bid,pword,name){
    var i='';
    var flag = 0;
    this.db.database.ref('users/'+bid+'/'+pword).once("value",function(snapshot){
      var data = snapshot.val();
      for (i in data){
      
      }
    })
  }
  verfiyName1(bid,pword,name,i){

  }

}
