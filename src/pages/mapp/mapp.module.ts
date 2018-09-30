import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MappPage } from './mapp';

@NgModule({
  declarations: [
    MappPage,
  ],
  imports: [
    IonicPageModule.forChild(MappPage),
  ],
})
export class MappPageModule {}
