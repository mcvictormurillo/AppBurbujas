import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RecomendadosPage } from '../recomendados/recomendados';
import { CartaService } from '../../services/carta.service';
import { CartaInterface } from '../../models/carta/carta.interface';
import { PlatoInterface } from '../../models/plato/plato.interface';
import { SumaInterface } from '../../models/suma/suma.interface';
import { SumaItemInterface} from '../../models/suma/SumaItemInterface';
import { AngularFireDatabase} from 'angularfire2/database/database';
import { Storage} from '@ionic/storage';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-carta',
  templateUrl: 'carta.html',
})


export class CartaPage {
  sumaItem = {} as SumaInterface;
 
  sumaItemInterface = {} as SumaItemInterface;
  listSumaInterface : Array<SumaItemInterface>;
  //lista: SumaItemInterface[]=[];
  lista: String[]=[];  
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
    private storage: Storage,
    private alertCtrl: AlertController,
    public toastCtrl: ToastController) {  

    if(navParams.get(`myListaReturn`)==null){
      this.lista = navParams.get(`myLista`);//home
      this.carta = navParams.get(`cartaIterface`); 
      console.log('LA LISTA LA TENIA HOME');
    }else{
      this.lista = navParams.get(`myListaReturn`);
      this.carta = navParams.get(`myCartaReturn`);
      console.log('LA LISTA LA TENIA RECOMENDADOS');
    }
    
    console.log('lista recibida de home', this.lista);
    //console.log('estes en un objeto de home a carta',this.carta.title);   
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

  
  goToHome(lista: String[]){
    
    this.storage.get('Compra').then((val) => {
      if(val==0){
        this.navCtrl.setRoot(HomePage);
        console.log('no seleccionastes plato')
      }else{
        this.navCtrl.setRoot(HomePage, {myLista: lista});
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
    this.lista.push(nomTitulo);
    console.log(this.lista);
  }

  Restar(idN,nomTitulo){
    for(let i=0; i< this.platos.length; i++){
      if(this.platos[i].id == idN){
        this.compra = this.compra - this.platos[i].precio;
      }
    }
    this.storage.set('Compra',this.compra );

    for(let i=0; i< this.lista.length; i++){
      if(this.lista[i]==nomTitulo){
        this.lista.splice(i,1);
      }
    }
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

  Recomendados(platoIterface: PlatoInterface, cartaTitle: string, lista: String[], carta:CartaInterface){         
    this.storage.get('Compra').then((val) => {
      if(val==0){
        this.navCtrl.setRoot(RecomendadosPage,{platoInterface: platoIterface, cartaTitle: cartaTitle, myLista: lista, myCarta: carta}); 
        console.log('enviando a recomendaciones vacia')
      }else{
        this.navCtrl.setRoot(RecomendadosPage,{platoInterface: platoIterface, cartaTitle: cartaTitle, myLista: lista, myCarta: carta}); 
        console.log('enviando a recomendaciones true');
      }
    });         
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

showCheckbox() {
  let alert = this.alertCtrl.create();
  alert.setCssClass('alertCss');
  alert.setTitle('Lista de Platos'+ ' ' + '$'+ '' + String(this.compra));
    
  for(let i=0; i<this.lista.length; i++){
    console.log(this.lista[i]);
    alert.addInput({
    type: 'checkbox',
    label: String(this.lista[i]),
    value: 'id',
    checked: true,    
  });
} 

    
  alert.addButton('Cancel');
  alert.addButton({
    text: 'OK',
    handler: data => {
      this.lista.push(String(this.compra));
      //this.lista.push(String(data.idCliente));
      this.cartaService.enviarPedido(this.lista);
      this.presentToast();
      this.storage.set('Compra',0);
      //this.testRadioOpen = false;
      //this.testRadioResult = data;
    }
  });
  alert.present();
}

//-------------------------------------------

showPrompt() {
  let prompt = this.alertCtrl.create({
    title: 'Confirmar Pedido',
    message: "Ingresa tu N° Identificación",
    inputs: [
      {
        name: 'title',
        placeholder: 'C.C'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          console.log('Saved clicked',data.title);
          //this.lista.push(String(data.title));
          // this.cartaService.enviarPedido(this.lista);
          //this.presentToast();
          
        }
      }
    ]
  });
  prompt.present();
}

presentToast() {
  const toast = this.toastCtrl.create({
    message: 'Tu pedido ha sido enviado',
    duration: 2000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}


}
