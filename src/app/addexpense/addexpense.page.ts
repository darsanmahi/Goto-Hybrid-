import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.page.html',
  styleUrls: ['./addexpense.page.scss'],
})
export class AddexpensePage implements OnInit {

  data11: any;
  constructor(
    private ngFireAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) { }

  ngOnInit() {
  }

  addExpense(amt,date,reason){
    this.ngFireAuth.authState.subscribe((user)=>{
      if(user){
        var data=0;
        this.db.database.ref('users/'+user.uid+'/Expense/'+date.value).set({
          Amount: Number(amt.value),
          Name: reason.value
        })
        this.data11 = this.db.list('users/' + user.uid + '/Balance').valueChanges();
        this.data11.forEach(element => {
            var tot = Number(element) - Number(amt.value);
            console.log(tot);
            this.db.database.ref('users/' + user.uid + '/Balance').set({
              Amount: tot
            })
        });
        this.db.database.ref('users/'+user.uid+'/Balance').once("value",function(snapshot){
          data = snapshot.val();
          console.log(data);
        })
      }
    })
  }
}
