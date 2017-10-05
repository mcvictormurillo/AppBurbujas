import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { CartaPage } from '../pages/carta/carta';
import { AcercaPage } from '../pages/acerca/acerca';
import { RecomendadosPage } from '../pages/recomendados/recomendados';
import { CartaService } from '../services/carta.service';



import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAiYnlBy7hdaPGe_pOGUPejTklpEgf-y7w",
  authDomain: "notas-7e663.firebaseapp.com",
  databaseURL: "https://notas-7e663.firebaseio.com",
  projectId: "notas-7e663",
  storageBucket: "notas-7e663.appspot.com",
  messagingSenderId: "610908934332"

}

@NgModule({
  declarations: [
    MyApp,
    HomePage,    
    CartaPage,
    AcercaPage,
    RecomendadosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CartaPage,
    AcercaPage,
    RecomendadosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CartaService,
    
  ]
})
export class AppModule {}
