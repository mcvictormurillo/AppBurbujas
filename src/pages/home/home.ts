import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';
import {NotesService} from '../../services/note.services';
import { PanelPage} from '../panel/panel';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  //arrData=[];
  //myInput:String="mi string";
    constructor(public navCtrl: NavController,
    public notaService: NotesService,
    //private fdb: AngularFireDatabase
  ) {
 // this.fdb.list('personas/').subscribe(data=>{
 //  this.arrData = data;
 //  console.log(this.arrData);//  }); 
     }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  
 panel(){
   this.navCtrl.push(PanelPage);
 }
  

/*  btnAddClicked(){
    this.fdb.list('personas/').push(this.myInput);
  }

  delete(i){
    this.fdb.list('personas/').remove(this.arrData[i].$key);
  }
*/

}
