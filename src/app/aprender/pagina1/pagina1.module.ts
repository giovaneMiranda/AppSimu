import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Pagina1Page } from './pagina1.page';




const routes: Routes = [
  {
    path: '',
    component: Pagina1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)

  ],
  declarations: [Pagina1Page]

})
export class Pagina1PageModule {}


