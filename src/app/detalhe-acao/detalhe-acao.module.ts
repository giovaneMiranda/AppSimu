import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetalheAcaoPage } from './detalhe-acao.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheAcaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetalheAcaoPage]
})
export class DetalheAcaoPageModule {}
