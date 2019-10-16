import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
var AuthService = /** @class */ (function () {
    function AuthService(afa) {
        this.afa = afa;
    }
    AuthService.prototype.login = function (user) {
        return this.afa.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    AuthService.prototype.register = function (user) {
        return this.afa.auth.createUserWithEmailAndPassword(user.email, user.password);
    };
    AuthService.prototype.logout = function () {
        return this.afa.auth.signOut();
    };
    AuthService.prototype.getAuth = function () {
        return this.afa.auth;
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map