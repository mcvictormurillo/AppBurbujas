import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartaService } from '../../services/carta.service';
import { PublicacionesPage } from '../publicaciones/publicaciones';
import { CartaInterface } from '../../models/carta/carta.interface';
import { PlatoInterface } from '../../models/plato/plato.interface';
import { CartaPage} from '../carta/carta';
import { Storage} from '@ionic/storage';
import { ToastController } from 'ionic-angular';

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
 n: boolean;
 m: boolean;
 sumaStar: number=0;
 lista: String[]=[];  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cartaService: CartaService,
    public storage: Storage,
    public toastCtrl: ToastController) {
    this.cartaTitulo = navParams.get('cartaTitle');
    this.plato = navParams.get(`platoInterface`);
    this.lista = navParams.get(`myLista`);
    console.log('lista recibida en recomendados', this.lista);
    this.carta = navParams.get(`myCarta`); 
  }
  AddRecomendacion(lista: String[], carta: CartaInterface){    
    this.plato.idBD = Date.now();    
    if(this.cartaService.createRecomendacion(this.plato)==true){
      this.presentToast();  
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecomendadosPage');
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'El envio fue exitoso',
      duration: 2000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
