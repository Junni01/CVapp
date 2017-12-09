import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalprojectsPage } from './personalprojects';

@NgModule({
  declarations: [
    PersonalprojectsPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalprojectsPage),
  ],
})
export class PersonalprojectsPageModule {}
