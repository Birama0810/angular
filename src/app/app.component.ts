import { Component } from '@angular/core';
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
export class AppComponent {
  constructor() {
  }

}
