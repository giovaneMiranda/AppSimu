import { TestBed, inject } from '@angular/core/testing';
import { OrdemGuard } from './ordem.guard';
describe('OrdemGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [OrdemGuard]
        });
    });
    it('should ...', inject([OrdemGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=ordem.guard.spec.js.map