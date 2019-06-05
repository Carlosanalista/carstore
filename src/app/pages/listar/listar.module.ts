import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListarPage } from './listar.page';
import { AngularFireDatabaseModule } from '@angular/fire/database';

const routes: Routes = [
  {
    path: '',
    component: ListarPage
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
  declarations: [ListarPage]
})
export class ListarPageModule {}
