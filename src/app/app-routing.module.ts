import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { OrdemGuard } from './guards/ordem.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [LoginGuard] },
  { path: 'detalheacao', loadChildren: './detalheacao/detalheacao.module#DetalheAcaoPageModule', canActivate: [AuthGuard] },
  { path: 'detalheacao/:id', loadChildren: './detalheacao/detalheacao.module#DetalheAcaoPageModule', canActivate: [AuthGuard] },
  { path: 'aprender', loadChildren: './aprender/aprender.module#AprenderPageModule', canActivate: [AuthGuard] },
  { path: 'toolbar', loadChildren: './toolbar/toolbar.module#ToolbarPageModule', canActivate: [AuthGuard] },
  { path: 'consultaacao', loadChildren: './consultaacao/consultaacao.module#ConsultaacaoPageModule', canActivate: [AuthGuard] },
  { path: 'carteira', loadChildren: './carteira/carteira.module#CarteiraPageModule', canActivate: [AuthGuard] },
  { path: 'ordem', loadChildren: './ordem/ordem.module#OrdemPageModule', canActivate: [AuthGuard] },
  { path: 'configuracao', loadChildren: './configuracao/configuracao.module#ConfiguracaoPageModule' , canActivate: [AuthGuard]},  { path: 'pagina1', loadChildren: './aprender/pagina1/pagina1.module#Pagina1PageModule' },
  { path: 'pagina2', loadChildren: './aprender/pagina2/pagina2.module#Pagina2PageModule' },
  { path: 'pagina3', loadChildren: './aprender/pagina3/pagina3.module#Pagina3PageModule' },
  { path: 'pagina4', loadChildren: './aprender/pagina4/pagina4.module#Pagina4PageModule' },
  { path: 'pagina5', loadChildren: './aprender/pagina5/pagina5.module#Pagina5PageModule' },
  { path: 'pagina6', loadChildren: './aprender/pagina6/pagina6.module#Pagina6PageModule' },
  { path: 'pagina7', loadChildren: './aprender/pagina7/pagina7.module#Pagina7PageModule' },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }