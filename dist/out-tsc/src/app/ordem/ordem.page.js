import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
var OrdemPage = /** @class */ (function () {
    function OrdemPage(authService, afDataBase) {
        this.authService = authService;
        this.afDataBase = afDataBase;
    }
    OrdemPage.prototype.ngOnInit = function () {
        this.authService.getAuth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user.uid);
            }
        });
        //this.afDataBase.object<Userbd>("User/"this.userData.)
    };
    OrdemPage = tslib_1.__decorate([
        Component({
            selector: 'app-ordem',
            templateUrl: './ordem.page.html',
            styleUrls: ['./ordem.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, AngularFireDatabase])
    ], OrdemPage);
    return OrdemPage;
}());
export { OrdemPage };
//# sourceMappingURL=ordem.page.js.map