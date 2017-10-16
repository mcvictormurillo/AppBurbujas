import { Component,   ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartaPage } from '../carta/carta';
//import { AcercaPage } from '../acerca/acerca';
import { CartaService } from '../../services/carta.service';
import { CartaInterface } from '../../models/carta/carta.interface';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    @ViewChild('myNav') nav: NavController; 
    cartas: Array<CartaInterface>;
    suma: number;
    
    constructor(
    public navCtrl: NavController,
    public cartaService: CartaService) {
    this.cartas = cartaService.getCartas();    
  }

    public goToCarta(cartaInterface: CartaInterface){
      this.navCtrl.push(CartaPage,{cartaIterface: cartaInterface});
    }

}




