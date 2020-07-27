import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';
import { element } from 'protractor';
import { DiaryService } from './../services/diary.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { runInThisContext } from 'vm';
import { map, finalize } from 'rxjs/operators';
import { url } from 'inspector';

@Component({
  selector: 'app-readpersonaldiary',
  templateUrl: './readpersonaldiary.page.html',
  styleUrls: ['./readpersonaldiary.page.scss'],
})
export class ReadpersonaldiaryPage implements OnInit {
  
  data1: Observable<any>;
  data2: string[]=[];
  data3: string[] =[];
  itemsRef :AngularFireList<any>;
  public authState : any;
  public counta: number=0;
  public i:string;
  constructor(
     db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private ngFireAuth: AngularFireAuth,
    private diaryservice: DiaryService
  ) {
      this.authState = this.ngFireAuth.authState.subscribe((user) => {
        if(user){
          var i ='';
          var d1 =[];
          var d2 = [];
          this.authState = user.uid;
          console.log(this.authState);
          this.itemsRef = db.list('users/' + this.authState + '/Diary');
          this.data1 = this.itemsRef.snapshotChanges().pipe(
            map(changes =>
              changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
            )
          );
          db.database.ref('users/'+user.uid+'/Diary').once("value",function(snapshot){
            var data = snapshot.val();
            for(i in data){
              d1.push(i);
              d2.push(i);
            }
          }).then((event) => {
            d1.forEach(element => {
              console.log(element);
              const ref = this.storage.ref(user.uid + '/' + element + '.jpg');
              console.log(user.uid + '/' + element + '.jpg');
              if(ref){
                ref.getDownloadURL().subscribe((urli)=>this.data2.push(urli));
                console.log(this.data2);
              }
              
            });
            d2.forEach(element => {
              console.log(element);
              const ref = this.storage.ref(user.uid + '/' + element + '.mp4');
              if (ref) {
                ref.getDownloadURL().subscribe((urli) => this.data3.push(urli));
              }

            });
          })
        }
      })
   }

  ngOnInit() { 
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  slideOpts1 = {
    initialSlide: 0,
    speed: 200
  };
  
}
