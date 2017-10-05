import { Component,   ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CartaPage } from '../carta/carta';
//import { AcercaPage } from '../acerca/acerca';
import { CartaService } from '../../services/carta.service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cartas=[];
  @ViewChild('myNav') nav: NavController;
  constructor(
  public navCtrl: NavController,
  public cartaService: CartaService) {
    this.cartas = cartaService.getCartas();
    }
    public goToCarta(id){
      this.navCtrl.push(CartaPage,{id:id});
    }

  }
 /*
  goToMenu(menuID){
    this.navCtrl.push(CartaPage,{menuID:menuID});

  }
  goToAcerca(){
    this.navCtrl.push( AcercaPage );

  }
  goToCarta(id){
    this.navCtrl.push(CartaPage,{id:id});
  }

*/



