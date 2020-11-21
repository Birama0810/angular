import { Component } from '@angular/core';
import {consoleTestResultHandler} from 'tslint/lib/test';
import {rejects} from 'assert';

function SetTimeout(param: () => void, number: 4000) {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) =>{
    const date = new Date();
    setTimeout (
      () =>  {
        resolve(date);
      }, 2000
    );
  });

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint',
      etat: 'réconditionné'
    },
    {
      name: 'Frigo',
      status: 'allumé',
      etat: 'neuf'
    },
    {
      name: 'ordinateur',
      status: 'allumé',
      etat: 'occasion'
    },
    {
      name: 'Rasoir électrique',
      status: 'éteint',
      etat: 'occasion'
    }
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  // tslint:disable-next-line:typedef
  onAllumer(){
    console.log(" On allume tout");
  }
}
