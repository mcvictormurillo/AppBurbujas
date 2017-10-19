import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecomendadosPage } from '../recomendados/recomendados';
import { CartaService } from '../../services/carta.service';
import { CartaInterface } from '../../models/carta/carta.interface';
import { PlatoInterface } from '../../models/plato/plato.interface';
import { SumaInterface } from '../../models/suma/suma.interface';
import { SumaItemInterface} from '../../models/suma/SumaItemInterface';
import { AngularFireDatabase} from 'angularfire2/database/database';
import { Storage} from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-carta',
  templateUrl: 'carta.html',
})


export class CartaPage {
  sumaItem = {} as SumaInterface;
 
  sumaItemInterface = {} as SumaItemInterface;
  listSumaInterface : Array<SumaItemInterface>;
  lista: SumaItemInterface[]=[];
  
  carta = {} as CartaInterface;
  platos: Array<PlatoInterface>;

  public menuID: number;
  public compra: number = 0;
  public mas: Boolean=true;
  public bandera: any;
  plato = {} as PlatoInterface; 

  constructor(   
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cartaService: CartaService,
    public database: AngularFireDatabase,
    private storage: Storage) {
      
   
    this.carta = navParams.get(`cartaIterface`); 
    console.log('estes en un objeto de home a carta',this.carta.title);   
    switch(Number(this.carta.id)){
      case 1: this.platos = cartaService.getPlatosParrilas();
      break;
      case 2: this.platos = cartaService.getPlatosBistecks();
      break;
      case 3: this.platos = cartaService.getPlatosPastas();
      break;
      case 4: this.platos = cartaService.getPlatosPescados();
      break;
      default:
      break;
    }  
    this.getData();    
  }

  goToHome(plato: PlatoInterface){
    this.storage.get('Compra').then((val) => {
      if(val==5000){
        this.navCtrl.setRoot(HomePage);
        console.log('no seleccionastes plato')
      }else{
        this.navCtrl.setRoot(HomePage, {plato: plato});
        console.log('seleccionaste platos GRACIAS');
      }
    });     
     
  }
  
  goToDetalles(){
    this.navCtrl.setRoot(RecomendadosPage);
  }

  //------- Operacion de suma y resta de platos
  Sumar(idN,nomTitulo){
    for(let i=0; i< this.platos.length; i++){
      if(this.platos[i].id == idN){
        this.compra = this.compra + this.platos[i].precio;
      }
    } 
    this.storage.set('Compra', this.compra);
    this.sumaItemInterface = nomTitulo;
    this.lista.push(this.sumaItemInterface);
    console.log(this.lista);
    
      
  }

  Restar(idN){
    for(let i=0; i< this.platos.length; i++){
      if(this.platos[i].id == idN){
        this.compra = this.compra - this.platos[i].precio;
      }
    }
    this.storage.set('Compra',this.compra );
  }

  //------Metodo para mostrar o cultar la compra de un plato

  Mostrar(numId){
    for(let i=0; i< this.platos.length; i++){
      if(this.platos[i].id == numId){
        if(this.platos[i].estado==0){
          this.platos[i].estado=1;
        }
        else this.platos[i].estado=0;
      }
    }
 
  }

  Recomendados(platoIterface: PlatoInterface, cartaTitle: string){
    this.navCtrl.setRoot(RecomendadosPage,{platoInterface: platoIterface, cartaTitle: cartaTitle});
  }

  
  getData(){
    this.storage.get('Compra').then((val) => {
      if(val==null){
        console.log('no hay compra', val);
        
      }else{
        console.log('hay compra',val);
        this.compra = val;
        
      }
      
    });
  }
//----------------------------
showRadio() {
  let alert = this.alertCtrl.create();
  alert.setTitle('Lightsaber color');

  alert.addInput({
    type: 'radio',
    label: 'Blue',
    value: 'blue',
    checked: true
  });

  alert.addButton('Cancel');
  alert.addButton({
    text: 'OK',
    handler: data => {
      this.testRadioOpen = false;
      this.testRadioResult = data;
    }
  });
  alert.present();
}



//

}
