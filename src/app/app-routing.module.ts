import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { OrdemGuard } from './guards/ordem.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule',canActivate: [LoginGuard]},
  { path: 'detalheacao', loadChildren: './detalheacao/detalheacao.module#DetalheAcaoPageModule' },
  { path: 'ordem', loadChildren: './ordem/ordem.module#OrdemPageModule'},
  { path: 'ativos', loadChildren: './ativos/ativos.module#AtivosPageModule' },
  { path: 'aprender', loadChildren: './aprender/aprender.module#AprenderPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
