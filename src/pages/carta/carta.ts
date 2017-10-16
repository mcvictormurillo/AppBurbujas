import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecomendadosPage } from '../recomendados/recomendados';
import { CartaService } from '../../services/carta.service';
import { CartaInterface } from '../../models/carta/carta.interface';
import { PlatoInterface } from '../../models/plato/plato.interface';
import { SumaInterface } from '../../models/suma/suma.interface';
import { FirebaseListObservable} from 'angularfire2/Database';
import { AngularFireDatabase} from 'angularfire2/database/database';
import { FirebaseObjectObservable} from 'angularfire2/Database';
import { Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-carta',
  templateUrl: 'carta.html',
})


export class CartaPage {
  sumaItem = {} as SumaInterface;
  sumaItemRef$ = {} as FirebaseListObservable<SumaInterface[]>;  
  sumaItemObjRef$: FirebaseObjectObservable<SumaInterface>;

  carta = {} as CartaInterface;
  platos: Array<PlatoInterface>;
  public menuID: number;
  public compra: number = 0;
  public mas: Boolean=true;
  public bandera: any;

  constructor(   
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cartaService: CartaService,
    public database: AngularFireDatabase,
    private storage: Storage) {
    this.sumaItemRef$ = this.database.list('suma');
    this.sumaItemObjRef$ = this.database.object(`suma/${this.compra}`);
    this.carta = navParams.get(`cartaIterface`);    
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
  
  goToDetalles(){
    this.navCtrl.setRoot(RecomendadosPage);
  }

  //------- Operacion de suma y resta de platos
  Sumar(idN){
    for(let i=0; i< this.platos.length; i++){
      if(this.platos[i].id == idN){
        this.compra = this.compra + this.platos[i].precio;
      }
    } 
    this.storage.set('compra', this.compra);
  }

  Restar(idN){
    for(let i=0; i< this.platos.length; i++){
      if(this.platos[i].id == idN){
        this.compra = this.compra - this.platos[i].precio;
      }
    }
    this.storage.set('compra',this.compra );
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
    this.storage.get('compra').then((val) => {
      if(val==null){
        console.log('no hay compra', val);
        
      }else{
        console.log('hay compra',val);
        this.compra = val;
        
      }
      
    });
  }
}
