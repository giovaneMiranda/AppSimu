import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
var OrdemService = /** @class */ (function () {
    function OrdemService(afs) {
        this.afs = afs;
    }
    OrdemService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], OrdemService);
    return OrdemService;
}());
export { OrdemService };
//# sourceMappingURL=ordem.service.js.map