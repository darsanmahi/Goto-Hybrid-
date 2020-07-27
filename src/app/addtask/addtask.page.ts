import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ControlContainer, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
FormsModule
ReactiveFormsModule
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.page.html',
  styleUrls: ['./addtask.page.scss'],
})
export class AddtaskPage implements OnInit {
  
  addTaskForm: FormGroup;

  constructor(
    private ngFireAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private formbuilder: FormBuilder,
    private modalCtrl: ModalController
  ) {
   }

  ngOnInit() {
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }

  onSubmit(title,desc,date) {
    this.ngFireAuth.authState.subscribe((user)=>{
      if(user){
        this.db.database.ref('users/'+user.uid+'/Todo/'+title.value).set({
          Date: date.value,
          Description: desc.value,
          Status: "Pending"
        })
      }
    })
    this.modalCtrl.dismiss();
  }

}
