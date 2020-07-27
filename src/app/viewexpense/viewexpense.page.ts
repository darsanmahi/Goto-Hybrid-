import { Observable } from 'rxjs';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-viewexpense',
  templateUrl: './viewexpense.page.html',
  styleUrls: ['./viewexpense.page.scss'],
})
export class ViewexpensePage implements OnInit {

  itemsRef: AngularFireList<any>;
  data1: Observable<any>;
  data2: Observable<any>;
  data3: Observable<any>;
  constructor(
    private ngFireAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    this.ngFireAuth.authState.subscribe((user)=>{
      if(user){
        this.itemsRef = this.db.list('users/'+user.uid+'/Expense');
        this.data1 = this.itemsRef.snapshotChanges().pipe(
          map(changes =>
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          )
        );
        this.data2 = this.db.list('users/'+user.uid+'/Balance').valueChanges();
        this.data3 = this.db.list('users/' + user.uid + '/Budget').valueChanges();
      }
    })

   }

  ngOnInit() {
  }

}
