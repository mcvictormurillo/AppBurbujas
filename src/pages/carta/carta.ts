import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecomendadosPage } from '../recomendados/recomendados';
import { CartaService } from '../../services/carta.service';
import { CartaInterface } from '../../models/carta/carta.interface';
import { PlatoInterface } from '../../models/plato/plato.interface';



@IonicPage()
@Component({
  selector: 'page-carta',
  templateUrl: 'carta.html',
})


export class CartaPage {
  carta = {} as CartaInterface;
  platos: Array<PlatoInterface>;
  public menuID: number;
  public compra: number = 0;
  public mas: Boolean=true;

  constructor(   
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cartaService: CartaService) {

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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartaPage');
  }
  
  goToDetalles(){
    this.navCtrl.setRoot( RecomendadosPage);
  }

  Sumar(idN){
    for(let i=0; i< this.platos.length; i++){
      if(this.platos[i].id == idN){
        this.compra = this.compra + this.platos[i].precio;
      }
    }    
  }

  Restar(idN){
    for(let i=0; i< this.platos.length; i++){
      if(this.platos[i].id == idN){
        this.compra = this.compra - this.platos[i].precio;
      }
    }
  }

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
}
