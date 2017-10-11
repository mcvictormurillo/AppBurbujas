import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecomendadosPage } from '../recomendados/recomendados';
import { CartaService } from '../../services/carta.service';



@IonicPage()
@Component({
  selector: 'page-carta',
  templateUrl: 'carta.html',
})


export class CartaPage {
  platos=[];
  id= null;
  carta = {id: null, title: null, description: null, imagen: null};
  public menuID: number;
  //public plato: string;
  public compra: number = 0;
  public mas: Boolean=true;
  constructor(
   
    public navCtrl: NavController, 
    public navParams: NavParams,
    public cartaService: CartaService) {
    this.id = navParams.get('id');
    this.carta = cartaService.getCarta(this.id);
    switch(this.id){
      case 1: this.platos = cartaService.getPlatosParrilas();
      break;
      case 2: this.platos = cartaService.getPlatosBistecks();
      break;
      case 3: this.platos = cartaService.getPlatosPastas();
      break;
      case 4: this.platos = cartaService.getPlatosPescados();
      break;

    }

      /*
      this.cartas = cartaService.getCartas();
      this.id = navParams.get('id');
      if(this.id !=0){
        this.carta = cartaService.getCarta(this.id);
        };  */ 
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartaPage');
  }
  
  goToDetalles(){
    this.navCtrl.push( RecomendadosPage);
  }
  Sumar(idN){
    for(let i=0; i< this.platos.length; i++){
      if(this.platos[i].id == idN){
        this.compra = this.compra + this.platos[i].precio;
      }
    }
    this.cartaService.enviarRecomendacion(idN);
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
    /*if(this.mas==false){
    this.mas=true;
    }
    else 
    this.mas = false;*/
  }

  Recomendados(idPlato, idCarta, idImagen){
    this.navCtrl.push(RecomendadosPage,{idP:idPlato, idC: idCarta, idImg: idImagen});
  }
}
