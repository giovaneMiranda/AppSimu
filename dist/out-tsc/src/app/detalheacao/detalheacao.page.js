import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var DetalheAcaoPage = /** @class */ (function () {
    function DetalheAcaoPage() {
    }
    DetalheAcaoPage.prototype.ngOnInit = function () {
    };
    DetalheAcaoPage.prototype.compra = function () {
        if (this.comp == true) {
            this.comp = false;
        }
        else {
            this.comp = true;
            this.vend = false;
        }
    };
    DetalheAcaoPage.prototype.venda = function () {
        if (this.vend == true) {
            this.vend = false;
        }
        else {
            this.comp = false;
            this.vend = true;
        }
    };
    DetalheAcaoPage = tslib_1.__decorate([
        Component({
            selector: 'app-detalheacao',
            templateUrl: './detalheacao.page.html',
            styleUrls: ['./detalheacao.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DetalheAcaoPage);
    return DetalheAcaoPage;
}());
export { DetalheAcaoPage };
//# sourceMappingURL=detalheacao.page.js.map