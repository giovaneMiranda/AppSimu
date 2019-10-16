import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
var OrdemGuard = /** @class */ (function () {
    function OrdemGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    OrdemGuard.prototype.canActivate = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.authService.getAuth().onAuthStateChanged(function (user) {
                if (user)
                    _this.router.navigate(['ordem']);
                resolve(!user ? true : false);
            });
        });
    };
    OrdemGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            Router])
    ], OrdemGuard);
    return OrdemGuard;
}());
export { OrdemGuard };
//# sourceMappingURL=ordem.guard.js.map