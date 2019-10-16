import { TestBed, inject } from '@angular/core/testing';
import { LoginGuard } from './login.guard';
describe('LoginGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [LoginGuard]
        });
    });
    it('should ...', inject([LoginGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=login.guard.spec.js.map