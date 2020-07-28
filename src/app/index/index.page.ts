import { AuthenticationService } from './../services/login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: "app-index",
  templateUrl: "./index.page.html",
  styleUrls: ["./index.page.scss"],
})
export class IndexPage implements OnInit {
  constructor(private storage: Storage, private router: Router, private loginservice : AuthenticationService) {
    console.log(this.loginservice.isLoggedIn);
     if(this.loginservice.isLoggedIn){
       this.router.navigate(['/home']);
     }
  }

  ngOnInit() {}
}
