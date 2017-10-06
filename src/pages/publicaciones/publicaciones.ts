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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cartaService: CartaService
  ) {
    cartaService.getPublicaciones().subscribe(datos=>{
      this.platos = datos;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicacionesPage');
  }

}
