import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetalheAcaoPage } from './detalheacao.page';
var routes = [
    {
        path: '',
        component: DetalheAcaoPage
    }
];
var DetalheAcaoPageModule = /** @class */ (function () {
    function DetalheAcaoPageModule() {
    }
    DetalheAcaoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DetalheAcaoPage]
        })
    ], DetalheAcaoPageModule);
    return DetalheAcaoPageModule;
}());
export { DetalheAcaoPageModule };
//# sourceMappingURL=detalheacao.module.js.map