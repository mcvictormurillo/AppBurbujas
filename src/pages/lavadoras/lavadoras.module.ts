import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LavadorasPage } from './lavadoras';

@NgModule({
  declarations: [
    LavadorasPage,
  ],
  imports: [
    IonicPageModule.forChild(LavadorasPage),
  ],
})
export class LavadorasPageModule {}
