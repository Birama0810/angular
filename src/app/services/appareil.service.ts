export class AppareilService {
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
  // Methodes

  switchOnAll() {
    for (let appareil of this.appareils){
      appareil.status = 'allumé';
    }
  }

  switchOffAll() {
    for (let appareil of this.appareils){
      appareil.status = 'éteint';
    }
  }
  switchOnOne(index: number){
    this.appareils[index].status = 'allumé';
  }
  switchOffOne(index: number){
    this.appareils[index].status = 'éteint';
  }

}
