import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartaService } from '../../services/carta.service';

@IonicPage()
@Component({
  selector: 'page-publicaciones',
  templateUrl: 'publicaciones.html',
})
export class PublicacionesPage {
  platos=[];
  platos2=[];
  aux: number;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cartaService: CartaService
  ) {
      cartaService.getPublicaciones().subscribe(datos=>{
      //this.platos = datos;
      for(let i=0; i<datos.length; i++){
        this.aux = datos.length - 1 -i;
        this.platos2[this.aux] = datos[i];
       
      }

    });
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicacionesPage');
  }

}
