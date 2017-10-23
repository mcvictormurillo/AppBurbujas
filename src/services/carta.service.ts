import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database/database';

@Injectable()

export class CartaService{
    constructor(public afDB: AngularFireDatabase){}
    publicaciones=[];
    notes=[];
    plstos=[];
    compra: number;

    public setCompra(n: number){
      this.compra = n;
    }

    public getCompra(){
      return this.compra;
    }

    public getPublicaciones(){
      return this.afDB.list('notas/');
       
    }
    //---------Home Mostramos los platos Generales-----------
    cartas =[
        {id: 1, title: 'Parrilla ', imagen: 'assets/icon/parrilla.jpg'},
        {id: 2, title: 'Bisteck ', imagen: 'assets/icon/bisteck2.jpg'},
        {id: 3, title: 'Pasta ', imagen: 'assets/icon/pasta.jpg'},
        {id: 4, title: 'Percados Y Mariscos', imagen: 'assets/icon/mariscos.jpg'},
      ];

    platosParrila=[
      {id: 1, titulo: 'titulo1 Parrilla',imagen: 'assets/icon/parrilla.jpg', precio: 1000, estado: 1, descripcion: null, idBD: null},
      {id: 2, titulo: 'titulo2 Parrilla',imagen: 'assets/icon/parrilla.jpg', precio: 2000, estado: 1, descripcion: null, idBD: null},
      {id: 3, titulo: 'titulo3 Parrilla',imagen: 'assets/icon/parrilla.jpg', precio: 3000, estado: 1, descripcion: null, idBD: null}, 
      {id: 4, titulo: 'titulo4 Parrilla',imagen: 'assets/icon/parrilla.jpg', precio: 4000, estado: 1, descripcion: null, idBD: null},    
      ];

    platosBisteck=[
        {id: 1, titulo: 'titulo1 Bisteck', imagen: 'assets/icon/bisteck2.jpg', precio: 1000, estado: 1, descripcion: null, idBD: null},
        {id: 2, titulo: 'titulo2 Bisteck', imagen: 'assets/icon/bisteck2.jpg', precio: 2000, estado: 1, descripcion: null, idBD: null},
        {id: 3, titulo: 'titulo3 Bisteck', imagen: 'assets/icon/bisteck2.jpg', precio: 3000, estado: 1, descripcion: null, idBD: null},
        {id: 4, titulo: 'titulo4 Bisteck', imagen: 'assets/icon/bisteck2.jpg', precio: 4000, estado: 1, descripcion: null, idBD: null},
        ];
    platosPasta=[
        {id: 1, titulo: 'titulo1 Pasta', imagen: 'assets/icon/pasta.jpg', precio: 1000, estado: 1, descripcion: null, idBD: null},
        {id: 2, titulo: 'titulo2 Pasta', imagen: 'assets/icon/pasta.jpg', precio: 2000, estado: 1, descripcion: null, idBD: null},
        {id: 3, titulo: 'titulo3 Pasta', imagen: 'assets/icon/pasta.jpg', precio: 3000, estado: 1, descripcion: null, idBD: null},
        {id: 4, titulo: 'titulo4 Pasta', imagen: 'assets/icon/pasta.jpg', precio: 4000, estado: 1, descripcion: null, idBD: null},       
        ];
    platosPescado=[
        {id: 1, titulo: 'titulo1 Pescado', imagen: 'assets/icon/mariscos.jpg', precio: 1000, estado: 1, descripcion: null, idBD: null},
        {id: 2, titulo: 'titulo2 Pescado', imagen: 'assets/icon/mariscos.jpg', precio: 2000, estado: 1, descripcion: null, idBD: null},
        {id: 3, titulo: 'titulo3 Pescado', imagen: 'assets/icon/mariscos.jpg', precio: 3000, estado: 1, descripcion: null, idBD: null},
        {id: 4, titulo: 'titulo4 Pescado', imagen: 'assets/icon/mariscos.jpg', precio: 4000, estado: 1, descripcion: null, idBD: null},
        ];

        //----------Metodos para Retornar Los diferentes Platos--------

        public getCartas(){
          return this.cartas;       
        }
        public getPlatosParrilas(){
          return this.platosParrila;       
        }
        public getPlatosBistecks(){
          return this.platosBisteck;       
        }
        public getPlatosPastas(){
          return this.platosPasta;       
        }
        public getPlatosPescados(){
          return this.platosPescado;       
        }
   
  public enviarRecomendacion(n){
  this.afDB.database.ref('notas/'+n).set(n);
  }
  
  public createRecomendacion(plato):Boolean{

  this.afDB.database.ref('notas/'+ plato.idBD).set(plato);
  return true
  }

  public createSuma(suma){
    this.afDB.database.ref('suma/');
  }

  public enviarPedido(idPedido:String[]){
    this.afDB.database.ref('pedidos/'+ idPedido[idPedido.length-1]).set(idPedido);
    //this.afDB.database.ref('pedidos/'+ idPedido[idPedido.length-1]).set(idPedido);

  }


 
}

