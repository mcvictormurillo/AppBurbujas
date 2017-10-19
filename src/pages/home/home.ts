import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CartaPage } from '../carta/carta';
//import { AcercaPage } from '../acerca/acerca';
import { CartaService } from '../../services/carta.service';
import { CartaInterface } from '../../models/carta/carta.interface';
import { AlertController } from 'ionic-angular';
import { Storage} from '@ionic/storage';
import { PlatoInterface } from '../../models/plato/plato.interface';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   // @ViewChild('myNav') nav: NavController; 
    cartas: Array<CartaInterface>;
    suma: number;
    plato = {} as PlatoInterface;
    
    cadena:string;
    bandera: boolean;

    constructor(
    public navCtrl: NavController,
    public cartaService: CartaService,
    public alertCtrl: AlertController,
    private storage: Storage,
    public navParams: NavParams) {    
    this.cartas = cartaService.getCartas();  
    this.getData();      
   // this.storage.get('idCliente').then((val) => {
    //console.log('el cliente es', val)});
    if(this.navParams.get('plato')==null){
      console.log('el obejto plato es nulo');

    }else{
      this.plato = this.navParams.get('plato');  
      console.log('el objeto plato es true');
    }
       
  }



    public goToCarta(cartaInterface: CartaInterface){      
      this.navCtrl.setRoot(CartaPage,{cartaIterface: cartaInterface});                
    }

    
    getData(){
      this.storage.get('Compra').then((val) => {
        if(val==null){
          this.storage.set('Compra',0);
          console.log('no hay compra', val);
          
        }else{
          console.log('hay compra',val);          
        }        
      });
    }

   
   
  }




/*

 showPrompt() {
      let prompt = this.alertCtrl.create({
        title: 'Bienvenido!',
        
        inputs: [
          {
            name: 'id',
            placeholder: 'Identificacion',
            
          },
          
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              console.log('Saved clicked', data.id);
              this.storage.set('Cliente', data.id);
              this.storage.get('Cliente').then((val) => {console.log('el cliente es', val)});
            }
          }
        ]
      });
      prompt.present();
    }
*/