import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartaService } from '../../services/carta.service';
import { PublicacionesPage } from '../publicaciones/publicaciones';
import { CartaInterface } from '../../models/carta/carta.interface';
import { PlatoInterface } from '../../models/plato/plato.interface';
import { CartaPage} from '../carta/carta';
import { Storage} from '@ionic/storage';

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
 carta = {} as CartaInterface;
 calificacion1: boolean=false;
 calificacion2: boolean=false;
 calificacion3: boolean=false;
 calificacion4: boolean=false;
 calificacion5: boolean=false;
 n: boolean;
 m: boolean;
 sumaStar: number=0;
 lista: String[]=[];  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cartaService: CartaService,
    public storage: Storage) {
    this.cartaTitulo = navParams.get('cartaTitle');
    this.plato = navParams.get(`platoInterface`);
    this.lista = navParams.get(`myLista`);
    console.log('lista recibida en recomendados', this.lista);
    this.carta = navParams.get(`myCarta`); 
  }
  AddRecomendacion(lista: String[], carta: CartaInterface){    
    this.plato.idBD = Date.now();    
    this.cartaService.createRecomendacion(this.plato);    
      this.storage.get('Compra').then((val) => {
        if(val==0){
          this.navCtrl.setRoot(PublicacionesPage,{myLista: lista, myCarta: carta});
          console.log('lista enviadoa a publicaciones vacia')
        }else{
          this.navCtrl.setRoot(PublicacionesPage,{myLista: lista, myCarta: carta});
          console.log('lista enviadoa a publicaciones true',this.lista);
        }
      });      
  }

  goToCarta(lista: String[], carta:CartaInterface){    
      
      this.storage.get('Compra').then((val) => {
        if(val==0){
          this.navCtrl.setRoot(CartaPage,{myListaReturn: lista,myCartaReturn: carta});
          console.log('lista devuelta a publicaciones vacia')
        }else{
          this.navCtrl.setRoot(CartaPage,{myListaReturn: lista,myCartaReturn: carta});
          console.log('lista devuelta a publicaciones true',this.lista);
        }
      });      
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
