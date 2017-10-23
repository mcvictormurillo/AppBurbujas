import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from '@agm/core';




@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  //title: string = 'My first AGM project';
  lat2: number = 2.46357830068324;
  lng2: number = -76.58079029999999;
  lat: number;
  lng: number;
  zoom: number = 13;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.location();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaPage');
  }

  location(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(pos=>{
        this.lat=pos.coords.latitude;
        this.lng=pos.coords.longitude;
        //this.zoom=7;
      });
    }
  }

}
