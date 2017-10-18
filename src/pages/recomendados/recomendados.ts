import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartaService } from '../../services/carta.service';
import { PublicacionesPage } from '../publicaciones/publicaciones';
//import { CartaInterface } from '../../models/carta/carta.interface';
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
 n: boolean;
 m: boolean;
 sumaStar: number=0;
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
/*
 
  Calificacion1(){    
    if(this.calificacion1==false){
      this.calificacion1=true;
      this.calificacion2=false;      
      this.sumaStar = this.sumaStar +1;
    }else{
      this.calificacion1=true;
      this.sumaStar = this.sumaStar -1;
    } 
    
  }

  Calificacion2(){    
    if(this.calificacion2==false){
      this.calificacion2=true;
      this.calificacion2=false;      
      this.sumaStar = this.sumaStar +1;
    }else{
      this.calificacion2=true;
      this.sumaStar = this.sumaStar -1;
    } 
    
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecomendadosPage');
  }

}
