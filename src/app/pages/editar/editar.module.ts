import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditarPage } from './editar.page';
import { DemoMaterialModule } from 'src/app/material-module';
import { AngularFireDatabaseModule } from '@angular/fire/database';

const routes: Routes = [
  {
    path: '',
    component: EditarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularFireDatabaseModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class EditarPageModule {}
