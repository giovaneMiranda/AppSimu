import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ToolbarPage } from './toolbar.page';

const routes: Routes = [
  {
    path: '',
    component: ToolbarPage,
    children: [
      { path: '', redirectTo: 'consultaacao' },
      { path: 'consultaacao', loadChildren: '../consultaacao/consultaacao.module#ConsultaacaoPageModule' },
      { path: 'carteira', loadChildren: '../carteira/carteira.module#CarteiraPageModule' },
      { path: 'ordem', loadChildren: '../ordem/ordem.module#OrdemPageModule' },
    ]
  },
  {
    path: '',
    redirectTo: 'consultaacao',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ToolbarPage]
})
export class ToolbarPageModule { }
