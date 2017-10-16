import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartaService } from '../../services/carta.service';
import { PublicacionesPage } from '../publicaciones/publicaciones';
import { CartaInterface } from '../../models/carta/carta.interface';
import { PlatoInterface } from '../../models/plato/plato.interface';

@IonicPage()
@Component({
  selector: 'page-recomendados',
  templateUrl: 'recomendados.html',
})
export class RecomendadosPage {
 platos: Array<PlatoInterface>;
 cartaTitulo: string;
 idPlato = null;
 idCarta = null;
 idImg = null;
 plato = {} as PlatoInterface;
 calificacion1: boolean=false;
 calificacion2: boolean=false;
 calificacion3: boolean=false;
 calificacion4: boolean=false;
 calificacion5: boolean=false;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cartaService: CartaService) {
    this.cartaTitulo = navParams.get('cartaTitle');
    this.plato = navParams.get(`platoInterface`);
  }
  AddRecomendacion(){
    
    this.plato.idBD = Date.now();    
    this.cartaService.createRecomendacion(this.plato);
    this.navCtrl.setRoot(PublicacionesPage);
    
  }

  Calificacion(index:number){
    switch(index){
      case 1: this.calificacion1=true; this.calificacion2=false; this.calificacion3=false; this.calificacion4=false; this.calificacion5=false;              
      break;
      case 2: this.calificacion1=true; this.calificacion2=true; this.calificacion3=false; this.calificacion4=false; this.calificacion5=false;
      break;
      case 3: this.calificacion1=true; this.calificacion2=true; this.calificacion3=true; this.calificacion4=false; this.calificacion5=false;
      break;
      case 4: this.calificacion1=true; this.calificacion2=true; this.calificacion3=true; this.calificacion4=true; this.calificacion5=false;
      break;
      case 5: this.calificacion1=true; this.calificacion2=true; this.calificacion3=true; this.calificacion4=true; this.calificacion5=true;
      break;
      default:
      break;
    }
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecomendadosPage');
  }

}
