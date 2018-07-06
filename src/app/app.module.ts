import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PanelPage } from '../pages/panel/panel';
import { LavadorasPage } from '../pages/lavadoras/lavadoras';
import { HoraPage} from '../pages/hora/hora';
import { DireccionPage } from '../pages/direccion/direccion';
import { NotesService } from '../services/note.services';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IonicStorageModule } from '@ionic/storage';

export const firebaseConfig = {
  apiKey: "AIzaSyAfXCdeeb2NNspos5vPZQ5cPf9Dtlj0Fgc",
    authDomain: "bdfire-ebed8.firebaseapp.com",
    databaseURL: "https://bdfire-ebed8.firebaseio.com",
    projectId: "bdfire-ebed8",
    storageBucket: "bdfire-ebed8.appspot.com",
    messagingSenderId: "417445514063"
 /* apiKey: "AIzaSyAiYnlBy7hdaPGe_pOGUPejTklpEgf-y7w",
  authDomain: "notas-7e663.firebaseapp.com",
  databaseURL: "https://notas-7e663.firebaseio.com",
  projectId: "notas-7e663",
  storageBucket: "notas-7e663.appspot.com",
  messagingSenderId: "610908934332"
  apiKey: "AIzaSyCYH7O-QC-dAZ3eeOuEfLTNpFbod5hYk1I",
  authDomain: "ionic3bd.firebaseapp.com",
  databaseURL: "https://ionic3bd.firebaseio.com",
  projectId: "ionic3bd",
  storageBucket: "ionic3bd.appspot.com",
  messagingSenderId: "816889618197"*/

}


@NgModule({
  declarations: [
    PanelPage,
    LavadorasPage,
    HoraPage,
    DireccionPage,    
    MyApp,
    HomePage,    
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    
    IonicStorageModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAq2VAgfTKtO2hycLaEgi60oEVb--ciVko'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PanelPage,
    LavadorasPage,
    HoraPage,
    DireccionPage,
    MyApp,
    HomePage,    
  
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NotesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   
    Geolocation

    
  ]
})
export class AppModule {}
