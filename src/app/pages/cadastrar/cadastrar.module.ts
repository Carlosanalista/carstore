import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrarPage } from './cadastrar.page';
import { DemoMaterialModule } from 'src/app/material-module';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const routes: Routes = [
  {
    path: '',
    component: CadastrarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    IonicModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrarPage]
})
export class CadastrarPageModule {}
