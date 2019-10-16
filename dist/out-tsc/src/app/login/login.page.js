import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
var LoginPage = /** @class */ (function () {
    function LoginPage(loadingController, toastController, authService, afs) {
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.authService = authService;
        this.afs = afs;
        this.userLogin = {};
        this.userRegister = {};
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var error_1, message;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        return [4 /*yield*/, this.authService.login(this.userLogin)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        error_1 = _a.sent();
                        message = void 0;
                        console.error(error_1);
                        this.presentToast(error_1.message);
                        return [3 /*break*/, 6];
                    case 5:
                        this.loading.dismiss();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.register = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var newUSer, newUserObject, error_2, message;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, 6, 7]);
                        return [4 /*yield*/, this.authService.register(this.userRegister)];
                    case 3:
                        newUSer = _a.sent();
                        newUserObject = Object.assign({}, this.userRegister);
                        newUserObject.dinheiro = 10000;
                        delete newUserObject.email;
                        delete newUserObject.password;
                        return [4 /*yield*/, this.afs.collection('User').doc(newUSer.user.uid).set(newUserObject)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        error_2 = _a.sent();
                        message = void 0;
                        switch (error_2.code) {
                            case 'auth/weak-password':
                                message = 'Senha deve ter no mínimo 6 caracteres.';
                                break;
                            case 'auth/email-already-in-use':
                                message = 'O endereço de e-mail já está sendo usado por outra conta';
                                break;
                            case 'auth/invalid-email':
                                message = 'O endereço de email está mal formatado.';
                                break;
                            case 'auth/argument-error':
                                message = 'O campo de email e senha devem ser preencidos.';
                                break;
                        }
                        console.error(error_2);
                        this.presentToast(message);
                        return [3 /*break*/, 7];
                    case 6:
                        this.loading.dismiss();
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.presentLoading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Carregando...',
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/, this.loading.present()];
                }
            });
        });
    };
    LoginPage.prototype.presentToast = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [LoadingController,
            ToastController,
            AuthService,
            AngularFirestore])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map