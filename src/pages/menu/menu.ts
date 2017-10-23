import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AcercaPage } from '../acerca/acerca';
import { PublicacionesPage } from '../publicaciones/publicaciones';
//import { CartaPage } from '../carta/carta';
import { HomePage } from '../home/home';
import { MapaPage} from '../mapa/mapa';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  i: number=null;
  root: any = HomePage;
  menuOpc: Menu[] = [
    { label: 'Home', icon: 'home', id: 1 },
    { label: 'Publicaciones', icon: 'star', id: 2 },
    { label: 'Acerca', icon: 'md-restaurant', id: 3 }, 
    { label: 'localización', icon: 'md-restaurant', id: 4 },   
  ];

public pages: Array<{
  label: string,
  icon: string,
  id: number,
}>

  constructor(public navCtrl: NavController) {
    this.pages = [
      { label: 'Home', icon: 'home', id: 1 },
      { label: 'Publicaciones', icon: 'restaurant', id: 2 },
      { label: 'Acerca', icon: 'md-restaurant', id: 3 },     
      { label: 'localización', icon: 'pin', id: 4 },     
    ];
  }
  setContent(i) {
    switch(i){
      case 1: this.root = HomePage;
      break;
      case 2: this.root = PublicacionesPage;
      break;
      case 3: this.root = AcercaPage;
      break;
      case 4: this.root = MapaPage;
      break;
      default:
      break;
    }
  
  }
  goHome(){
    this.root = HomePage;
  }
  goPubli(){
    this.root = PublicacionesPage
  }
  goAcerca(){
    this.root = AcercaPage
  }
  goMapa(){
    this.root = MapaPage
  }

}

interface Menu {
  label: string;
  icon: string;
  id: number;
}

