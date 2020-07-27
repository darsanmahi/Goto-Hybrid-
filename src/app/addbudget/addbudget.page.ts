import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addbudget',
  templateUrl: './addbudget.page.html',
  styleUrls: ['./addbudget.page.scss'],
})
export class AddbudgetPage implements OnInit {

  constructor(
    private ngFireAuth: AngularFireAuth,  
    private db: AngularFireDatabase,
    private db1: AngularFireDatabase
  ) { }

  ngOnInit() {
  }

  addBudget(amt){
    if(amt.value){
      this.ngFireAuth.authState.subscribe((user) => {
        if (user) {
          this.db.database.ref('users/' + user.uid + '/Balance').set({
            Amount: Number(amt.value)
          }).then((event) => {alert("Budget Added!")});
          this.db.database.ref('users/' + user.uid + '/Budget').set({
            Amount: Number(amt.value)
          }).then((event) => { alert("Balance Added!") });
        }
      }) 
    }
    else{
      alert("Invalid Input!");
    }
  }
  addIncrement(amt){
    if(amt.value){
      this.ngFireAuth.authState.subscribe((user) => {
        if (user) {
          var data=0;
          this.db.database.ref('users/'+user.uid+'/Balance/Amount').once("value",function(snapshot){
            data = snapshot.val();
            console.log(data);
          })
          setTimeout((event)=>{
            if (data != 0) {
              console.log(data);
              var tot = Number(data) + Number(amt.value);
              console.log(tot);
              this.db.database.ref('users/' + user.uid + '/Balance').set({
                Amount: tot
              }).then((event) => { alert("Balance Updated!") });
            }
          },2000)
        }
      })
    }
  }

}
