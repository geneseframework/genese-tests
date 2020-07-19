"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ExampleComponent = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var auth_guard_service_1 = require("./auth-guard.service");
var cookie_service_1 = require("./cookie.service");
var ExampleComponent = /** @class */ (function () {
    function ExampleComponent(authGuardSvc, cookie, platformId, router) {
        this.authGuardSvc = authGuardSvc;
        this.cookie = cookie;
        this.platformId = platformId;
        this.router = router;
        this.loggedIn = this.authGuardSvc.foo().bar.baz().isLoggedIn;
        // console.log('this is comments')
        this.language = cookie.get('language') || 'en'; // AssignmentExpression
        this.router.route().foo().bar; // for test
        // this.language.foo().bar;        // for test
        cookie.foo().bar.baz() || 'XX'; // for test
        cookie.foo().bar.baz() && 'YY'; // for test
    }
    ExampleComponent.prototype.ngOnInit = function () {
        var _this = this;
        var thresholdAmount = Number(this.adjustmentsDetailsCms.location.threshold);
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                setTimeout(function (_) {
                    var menuId = event.urlAfterRedirects.substr(1);
                    _this.menuEl.nativeElement.highlightMenu(menuId);
                }, 500);
            }
        });
    };
    ExampleComponent.prototype.logout = function () {
        this.authGuardSvc.logoff();
    };
    // istanbul ignore next
    ExampleComponent.prototype.changeLanguage = function (event) {
        var currentLang = this.cookie.get('language');
        document.cookie = currentLang === 'fr' ? 'language=en;' : 'language=fr;';
        window.location.reload();
    };
    // istanbul ignore next
    ExampleComponent.prototype.onDeactivate = function () {
        if (!common_1.isPlatformBrowser(this.platformId)) {
            return false;
        }
        window.scrollTo(0, 0); // go to top when route changes
    };
    var _a, _b;
    __decorate([
        core_2.ViewChild('menuEl'),
        __metadata("design:type", core_2.ElementRef)
    ], ExampleComponent.prototype, "menuEl");
    ExampleComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: '<div>Example Component</div>',
            styles: ['']
        }),
        __param(2, core_2.Inject(core_2.PLATFORM_ID)),
        __metadata("design:paramtypes", [typeof (_a = typeof auth_guard_service_1.AuthGuardService !== "undefined" && auth_guard_service_1.AuthGuardService) === "function" ? _a : Object, typeof (_b = typeof cookie_service_1.CookieService !== "undefined" && cookie_service_1.CookieService) === "function" ? _b : Object, Object,
            router_1.Router])
    ], ExampleComponent);
    return ExampleComponent;
}());
exports.ExampleComponent = ExampleComponent;
