import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
var LoginGuard = /** @class */ (function () {
    function LoginGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.authService.getAuth().onAuthStateChanged(function (user) {
                if (user)
                    _this.router.navigate(['home']);
                resolve(!user ? true : false);
            });
        });
    };
    LoginGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            Router])
    ], LoginGuard);
    return LoginGuard;
}());
export { LoginGuard };
//# sourceMappingURL=login.guard.js.map