import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OrdemPage } from './ordem.page';
var routes = [
    {
        path: '',
        component: OrdemPage
    }
];
var OrdemPageModule = /** @class */ (function () {
    function OrdemPageModule() {
    }
    OrdemPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [OrdemPage]
        })
    ], OrdemPageModule);
    return OrdemPageModule;
}());
export { OrdemPageModule };
//# sourceMappingURL=ordem.module.js.map