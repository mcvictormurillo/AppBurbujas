import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartaService } from '../../services/carta.service';
import { PublicacionesPage } from '../publicaciones/publicaciones';


@IonicPage()
@Component({
  selector: 'page-recomendados',
  templateUrl: 'recomendados.html',
})
export class RecomendadosPage {
 platos = [];
 idPlato = null;
 idCarta = null;
 plato = {id: null, titulo: null, imagen: null, precio: null, estado:null, descripcion: null, idBD: null};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cartaService: CartaService) {
    this.idPlato = navParams.get('idP');
    this.idCarta = navParams.get('idC');
    this.idCarta = navParams.get('idImg');
    switch(this.idCarta){
      case 1: this.plato = cartaService.getPlatoParrilla(this.idPlato);
      break;
      case 2: this.plato = cartaService.getPlatoBisteck(this.idPlato);
      break;
      case 3: this.plato = cartaService.getPlatoPasta(this.idPlato);
      break;
      case 4: this.plato = cartaService.getPlatoPescado(this.idPlato);
      break;
    }
   

  }
  AddRecomendacion(){
    this.plato.idBD = Date.now();
   
    this.cartaService.createRecomendacion(this.plato);
    this.navCtrl.push(PublicacionesPage);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecomendadosPage');
  }

}
