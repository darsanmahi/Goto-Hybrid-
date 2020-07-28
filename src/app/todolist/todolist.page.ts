import { element } from 'protractor';
import { AddtaskPage } from './../addtask/addtask.page';
import { Observable } from 'rxjs';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { LoadingController, AlertController, IonItemSliding, ToastController, ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.page.html',
  styleUrls: ['./todolist.page.scss'],
})
export class TodolistPage implements OnInit {

  itemsRef: AngularFireList<any>;
  data1: Observable<any>;
  data2:any;
  addTaskForm: FormGroup;

  constructor(
    private ngFireAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private formbuilder: FormBuilder,
    private modalCtrl: ModalController,
    private localnotif : LocalNotifications
  ) {
    this.ngFireAuth.authState.subscribe((user)=>{
      if(user){
        console.log('users/' + user.uid + '/Todo');
        this.itemsRef = this.db.list('users/' + user.uid + '/Todo');
        this.data1 = this.itemsRef.snapshotChanges().pipe(
          map(changes =>
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          )
        );
        this.data2 = this.db.list('users/' + user.uid + '/Todo').valueChanges();
        this.data2.forEach(element => {
          console.log(element);
        });
        this.data1.forEach(element => {
          console.log(element);
        });
      }
    })
   }

  ngOnInit() {
  }


  async deleteTask(item: IonItemSliding, id) {
    console.log('delete', id);
    const alert = await this.alertCtrl.create({
      header: 'Confirm Delete',
      message: 'Did you complete the event '+ id + ' ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Delete cancelled');
            item.close();
          }
        },
        {
          text: 'Delete',
          handler: async () => {
            const loading = await this.loadingCtrl.create({
              message: 'Deleting . . .'
            });
            const toast = await this.toastCtrl.create({
              message: 'Event ' + id + ' deleted successfully',
              duration: 3000
            })
            loading.present();
            this.ngFireAuth.authState.subscribe((user)=>{
              if(user){
                this.db.database.ref('users/'+user.uid+'/Todo/'+id).remove().then((a)=>{
                  toast.present();
                  loading.dismiss();
                })
              }
            })
          }
        }
      ]
    });

    alert.present();

  }
  async openAddTask() {
    const modal = await this.modalCtrl.create({
      component: AddtaskPage,
    });
    await modal.present();
  }

}
