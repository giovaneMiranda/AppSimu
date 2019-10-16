import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AtivosPage } from './ativos.page';
var routes = [
    {
        path: '',
        component: AtivosPage
    }
];
var AtivosPageModule = /** @class */ (function () {
    function AtivosPageModule() {
    }
    AtivosPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AtivosPage]
        })
    ], AtivosPageModule);
    return AtivosPageModule;
}());
export { AtivosPageModule };
//# sourceMappingURL=ativos.module.js.map