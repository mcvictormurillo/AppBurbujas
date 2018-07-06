import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database/database';

@Injectable()

export class NotesService{
    constructor(public afDB: AngularFireDatabase){}
    notesm =[
        {id: 1, title: 'Nota 1', description: 'description 1'},
        {id: 2, title: 'Nota 2', description: 'description 2'},
        {id: 3, title: 'Nota 3', description: 'description 3'},
      ];
      notes=[];
      frecuencias=[]

    public getFrecs(){
        // return this.notes;
        return this.afDB.list('frecs/');
    }
    public getNotes(){
       // return this.notes;
        return this.afDB.list('notas/');
    }
    
    public getFrec(id){
        //elemento, index
       // return this.notes.filter(function(e,i){ return e.id==id })[0] || {id: null, title: null, description: null};
       return this.afDB.object('frecs/' + id);
    }

    public getNote(id){
        //elemento, index
       // return this.notes.filter(function(e,i){ return e.id==id })[0] || {id: null, title: null, description: null};
       return this.afDB.object('notas/' + id);
    }

    public createFrec(note){
        //this.notes.push(note);
        this.afDB.database.ref('frecs/'+ note.id).set(note);
    }

    public createNote(note){
        //this.notes.push(note);
        this.afDB.database.ref('notas/'+ note.id).set(note);
    }

    public editFrec(note){
        /* for(let i=0; i< this.notes.length; i++){
             if(this.notes[i].id == note.id){
                 this.notes[i]==note;
             }
         }*/
         this.afDB.database.ref('frecs/'+ note.id).set(note);
     }
    public editNote(note){
       /* for(let i=0; i< this.notes.length; i++){
            if(this.notes[i].id == note.id){
                this.notes[i]==note;
            }
        }*/
        this.afDB.database.ref('notas/'+ note.id).set(note);
    }

    public deleteFrec(note){
        /*for(let i=0; i< this.notes.length; i++){
            if(this.notes[i].id == note.id){
                this.notes.splice(i,1);// indice y cuantos
            }
        }*/
        this.afDB.database.ref('frecs/'+ note.id).remove();
    }

    public deleteNote(note){
        /*for(let i=0; i< this.notes.length; i++){
            if(this.notes[i].id == note.id){
                this.notes.splice(i,1);// indice y cuantos
            }
        }*/
        this.afDB.database.ref('notas/'+ note.id).remove();
    }

    public enviarPedido(note){
    
        this.afDB.database.ref('nuevo/'+ note.id).set(note);
     
    }
    

}