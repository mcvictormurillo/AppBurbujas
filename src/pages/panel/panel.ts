import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LavadorasPage } from '../lavadoras/lavadoras';
import { HoraPage} from '../hora/hora';
import { DireccionPage } from '../direccion/direccion';

/**
 * Generated class for the PanelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-panel',
  templateUrl: 'panel.html',
})
export class PanelPage {
  tab1: any;
  tab2: any;
  tab3: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = LavadorasPage;
    this.tab2 = HoraPage;
    this.tab3 = DireccionPage; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PanelPage');
  }

}
