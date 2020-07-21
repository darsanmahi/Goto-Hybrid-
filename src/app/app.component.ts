import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "./services/login.service";


import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'home'
    },
    {
      title: 'Expenses Tracker',
      url: '/expensestracker',
      icon: 'paper-plane'
    },
    {
      title: 'Diary',
      url: '/diary',
      icon: 'heart'
    },
    {
      title: 'To-do list',
      url: '/todolist',
      icon: 'archive'
    },
  ];
 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authService: AuthenticationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    }

}
