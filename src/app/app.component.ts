import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MenuPage } from '../pages/menu/menu';
import { HomePage } from '../pages/home/home';
import { AcercaPage } from '../pages/acerca/acerca';
import { RecomendadosPage } from '../pages/recomendados/recomendados';
import { PublicacionesPage } from '../pages/publicaciones/publicaciones';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MenuPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

