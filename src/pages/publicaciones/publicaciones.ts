import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartaService } from '../../services/carta.service';
import { CartaPage} from '../carta/carta';
import { Storage} from '@ionic/storage';
import { CartaInterface } from '../../models/carta/carta.interface';
import { HomePage } from '../home/home';
import { MenuPage} from '../menu/menu';
@IonicPage()
@Component({
  selector: 'page-publicaciones',
  templateUrl: 'publicaciones.html',
})
export class PublicacionesPage {
  platos=[];
  platos2=[];
  aux: number;
  lista: String[]=[];  
  carta = {} as CartaInterface;
  root: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cartaService: CartaService,
    public storage: Storage
  ) {
      cartaService.getPublicaciones().subscribe(datos=>{
      //this.platos = datos;
      for(let i=0; i<datos.length; i++){
        this.aux = datos.length - 1 -i;
        this.platos2[this.aux] = datos[i];
       
      }

    });
    this.lista = navParams.get(`myLista`);
    this.carta = navParams.get(`myCarta`); 
   
  }
  goToCarta(lista: String[], carta:CartaInterface){   
    if(lista==null && carta==null){
      this.navCtrl.push(MenuPage);
      //this.root = HomePage;
    } else{
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
    
   
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicacionesPage');
  }

}
