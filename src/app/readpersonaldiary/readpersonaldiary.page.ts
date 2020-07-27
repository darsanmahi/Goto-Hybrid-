import { computeStackId } from '@ionic/angular/directives/navigation/stack-utils';
import { element } from 'protractor';
import { DiaryService } from './../services/diary.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { runInThisContext } from 'vm';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-readpersonaldiary',
  templateUrl: './readpersonaldiary.page.html',
  styleUrls: ['./readpersonaldiary.page.scss'],
})
export class ReadpersonaldiaryPage implements OnInit {
  
  data1: Observable<any>;
  data2: Observable<any>;
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
          this.authState = user.uid;
          console.log(this.authState);
          this.itemsRef = db.list('users/' + this.authState + '/Diary');
          this.data1 = this.itemsRef.snapshotChanges().pipe(
            map(changes =>
              changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
            )
          );
          const ref = this.storage.ref(user.uid+'/'+this.data1);
          this.data2 = ref.getDownloadURL();
          console.log(this.data2);
        }
      })
   }

  ngOnInit() { 
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  
}
