import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../services/note.services';
@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  id= null;
  note = {id: null, title: null, description: null};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public noteService: NotesService
  ) {
    this.id = navParams.get('id');
    if(this.id !=0){
      noteService.getNote(this.id).subscribe(note =>{
        this.note = note;
      });   
    } //si es cero, le hemos dado crear y no llamamos ningun metodo get para llenar

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  addNote(){
    if(this.id != 0){
      this.noteService.editNote(this.note);
      alert('Nota editada');
     

    }else{
      this.note.id = Date.now();
      this.noteService.createNote(this.note);
      alert('Nota creada');

    }
    this.navCtrl.pop();
  }
  deleteNote(){
    this.noteService.deleteNote(this.note);
    alert('Nota eliminada');
    this.navCtrl.pop();
  }
}
