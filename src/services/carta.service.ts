import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database/database';
@Injectable()

export class CartaService{
    constructor(public afDB: AngularFireDatabase){}
    publicaciones=[];
    notes=[];

    public getPublicaciones(){
       // return this.notes;
        return this.afDB.list('notas/');
    }
    cartas =[
        {id: 1, title: 'Parrilla ', description: 'description 1', imagen: '/assets/icon/parrilla.jpg'},
        {id: 2, title: 'Bisteck ', description: 'description 2', imagen: '/assets/icon/bisteck2.jpg'},
        {id: 3, title: 'Pasta ', description: 'description 3', imagen: '/assets/icon/pasta.jpg'},
        {id: 4, title: 'Percados Y Mariscos', description: 'description 3', imagen: '/assets/icon/mariscos.jpg'},
      ];
    platosParrila=[
      {id: 1, titulo: 'titulo1',imagen: '/assets/icon/parrilla.jpg', precio: 1000, estado: 1, descripcion: null, idBD: null},
      {id: 2, titulo: 'titulo2',imagen: '/assets/icon/parrilla.jpg', precio: 2000, estado: 1, descripcion: null, idBD: null},
      {id: 3, titulo: 'titulo3',imagen: '/assets/icon/parrilla.jpg', precio: 3000, estado: 1, descripcion: null, idBD: null}, 
      {id: 4, titulo: 'titulo4',imagen: '/assets/icon/parrilla.jpg', precio: 4000, estado: 1, descripcion: null, idBD: null},
      
     
      ];

    platosBisteck=[
        {id: 1, titulo: 'titulo1', imagen: '/assets/icon/bisteck2.jpg', precio: 1000, estado: 1},
        {id: 2, titulo: 'titulo2', imagen: '/assets/icon/bisteck2.jpg', precio: 2000, estado: 1},
        {id: 3, titulo: 'titulo3', imagen: '/assets/icon/bisteck2.jpg', precio: 3000, estado: 1},
        {id: 4, titulo: 'titulo4', imagen: '/assets/icon/bisteck2.jpg', precio: 4000, estado: 1},
        ];
    platosPasta=[
        {id: 1, titulo: 'titulo1', imagen: '/assets/icon/pasta.jpg', precio: 1000, estado: 1},
        {id: 2, titulo: 'titulo2', imagen: '/assets/icon/pasta.jpg', precio: 2000, estado: 1},
        {id: 3, titulo: 'titulo3', imagen: '/assets/icon/pasta.jpg', precio: 3000, estado: 1},
        {id: 4, titulo: 'titulo4', imagen: '/assets/icon/pasta.jpg', precio: 4000, estado: 1},
       
        ];
    platosPescado=[
        {id: 1, titulo: 'titulo1', imagen: '/assets/icon/mariscos.jpg', precio: 1000, estado: 1},
        {id: 2, titulo: 'titulo2', imagen: '/assets/icon/mariscos.jpg', precio: 2000, estado: 1},
        {id: 3, titulo: 'titulo3', imagen: '/assets/icon/mariscos.jpg', precio: 3000, estado: 1},
        {id: 4, titulo: 'titulo4', imagen: '/assets/icon/mariscos.jpg', precio: 4000, estado: 1},
        ];
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

     public getCarta(id){
      //elemento, index
     return this.cartas.filter(function(e,i){ return e.id==id })[0] || {id: null, title: null, description: null, imagen: null};
     }

     public getPlatoParrilla(id){
      //elemento, index
     return this.platosParrila.filter(function(e,i){ return e.id==id })[0] || {id: null, titulo: null, imagen: null, precio: null, estado:null, descripcion: null, idBD: null};
     }

     public getPlatoBisteck(id){
      //elemento, index
     return this.platosBisteck.filter(function(e,i){ return e.id==id })[0] || {id: null, titulo: null, imagen: null, precio: null, estado:null};
     }

     public getPlatoPasta(id){
      //elemento, index
     return this.platosPasta.filter(function(e,i){ return e.id==id })[0] || {id: null, titulo: null, imagen: null, precio: null, estado:null};
     }
     public getPlatoPescado(id){
      //elemento, index
     return this.platosPescado.filter(function(e,i){ return e.id==id })[0] || {id: null, titulo: null, imagen: null, precio: null, estado:null};
     }
    
     public enviarRecomendacion(n){
       this.afDB.database.ref('notas/'+n).set(n);
     }
     
     public createRecomendacion(plato){
      //this.notes.push(note);
      this.afDB.database.ref('notas/'+ plato.idBD).set(plato);
  }

 
}