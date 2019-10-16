import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate: [LoginGuard] },
    { path: 'detalheacao', loadChildren: './detalheacao/detalheacao.module#DetalheAcaoPageModule' },
    { path: 'ordem', loadChildren: './ordem/ordem.module#OrdemPageModule' },
    { path: 'ativos', loadChildren: './ativos/ativos.module#AtivosPageModule' },
    { path: 'aprender', loadChildren: './aprender/aprender.module#AprenderPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map