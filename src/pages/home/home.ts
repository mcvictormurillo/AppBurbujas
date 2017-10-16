import { Component,   ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartaPage } from '../carta/carta';
//import { AcercaPage } from '../acerca/acerca';
import { CartaService } from '../../services/carta.service';
import { CartaInterface } from '../../models/carta/carta.interface';
import { AlertController } from 'ionic-angular';
import { Storage} from '@ionic/storage';

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
    public cartaService: CartaService,
    public alertCtrl: AlertController,
    private storage: Storage) {
    this.cartas = cartaService.getCartas();  
    this.getData();  
  }

    public goToCarta(cartaInterface: CartaInterface){
      
      this.navCtrl.push(CartaPage,{cartaIterface: cartaInterface});
            
    }

    getData(){
      this.storage.get('compra').then((val) => {
        if(val==null){
          this.storage.set('compra',0);
          console.log('no hay compra', val);
          
        }else{
          console.log('hay compra',val);
          
        }
        
      });
    }

    

    

    

}




