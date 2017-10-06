import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AcercaPage } from '../pages/acerca/acerca';
import { RecomendadosPage } from '../pages/recomendados/recomendados';
import { PublicacionesPage } from '../pages/publicaciones/publicaciones';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav: Nav;
  public rootPage:any;
  public pages: Array<{
    titulo: string,
    component: any,
    icon: string,
  }>

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen) {

      this.rootPage = HomePage;
      this.pages = [
        { titulo: 'Inicio', component: HomePage, icon:'home'},
        { titulo: 'Recomendaciones', component: RecomendadosPage, icon:'star-outline'},
        { titulo: 'Acerca', component: AcercaPage, icon:'information-circle'},
        { titulo: 'Publicaciones', component: PublicacionesPage, icon:'information-circle'},
        
        
      ];
      platform.ready().then(() => {
       statusBar.styleDefault();
       splashScreen.hide();
    });
  }
  goToPage(page){
    this.nav.setRoot(page);
  }

}

