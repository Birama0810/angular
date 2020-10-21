import { Component } from '@angular/core';
import {consoleTestResultHandler} from 'tslint/lib/test';

function SetTimeout(param: () => void, number: 4000) {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;
  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';
  StatutOne = 'éteint';
  StatutTwo = 'allumé';
  StatutThree = 'éteint';
  EtatOne = 'réconditionnée';
  EtatTwo = 'neuf';
  EtatThree = 'occasion';

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
