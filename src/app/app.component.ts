import { Component, OnInit } from '@angular/core';
import {consoleTestResultHandler} from 'tslint/lib/test';
import {rejects} from 'assert';
import {AppareilService} from './services/appareil.service';

function SetTimeout(param: () => void, number: 4000) {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) =>{
    const date = new Date();
    setTimeout (
      () =>  {
        resolve(date);
      }, 2000
    );
  });
  appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  ngOnInit(): void {
    this.appareils =  this.appareilService.appareils;
  }

  // App.component.ts appelle les méthode service
  onAllumer(){
   this.appareilService.switchOnAll();
  }
  onEteindre(){
    this.appareilService.switchOffAll();
  }


}
