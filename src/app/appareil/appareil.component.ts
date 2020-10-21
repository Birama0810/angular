import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  @Input appareilName: string ;
  @Input appareilStatut: string;
  @Input appareilEtat: string;
  constructor() { }

  ngOnInit(): void {
  }
  getStatut(){
    return this.appareilStatut;
  }
  getEtat(){
    return this.appareilEtat;
  }

}
