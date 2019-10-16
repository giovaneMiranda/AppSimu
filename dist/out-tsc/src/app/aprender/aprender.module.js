import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AprenderPage } from './aprender.page';
var routes = [
    {
        path: '',
        component: AprenderPage
    }
];
var AprenderPageModule = /** @class */ (function () {
    function AprenderPageModule() {
    }
    AprenderPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AprenderPage]
        })
    ], AprenderPageModule);
    return AprenderPageModule;
}());
export { AprenderPageModule };
//# sourceMappingURL=aprender.module.js.map