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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// tslint:disable
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var example_component_1 = require("./example.component");
var auth_guard_service_1 = require("./auth-guard.service");
var cookie_service_1 = require("./cookie.service");
var router_1 = require("@angular/router");
var MockAuthGuardService = /** @class */ (function () {
    function MockAuthGuardService() {
        this.foo = function () {
            return {
                bar: {
                    baz: function () {
                        return {
                            isLoggedIn: {}
                        };
                    }
                }
            };
        };
    }
    MockAuthGuardService = __decorate([
        core_1.Injectable()
    ], MockAuthGuardService);
    return MockAuthGuardService;
}());
var MockCookieService = /** @class */ (function () {
    function MockCookieService() {
        this.get = function () { };
        this.foo = function () {
            return {
                bar: {
                    baz: function () { }
                }
            };
        };
    }
    MockCookieService = __decorate([
        core_1.Injectable()
    ], MockCookieService);
    return MockCookieService;
}());
var MockRouter = /** @class */ (function () {
    function MockRouter() {
        this.route = function () {
            return {
                foo: function () {
                    return {
                        bar: {}
                    };
                }
            };
        };
    }
    MockRouter.prototype.navigate = function () { };
    ;
    MockRouter = __decorate([
        core_1.Injectable()
    ], MockRouter);
    return MockRouter;
}());
var OneviewPermittedDirective = /** @class */ (function () {
    function OneviewPermittedDirective() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], OneviewPermittedDirective.prototype, "oneviewPermitted");
    OneviewPermittedDirective = __decorate([
        core_1.Directive({ selector: '[oneviewPermitted]' })
    ], OneviewPermittedDirective);
    return OneviewPermittedDirective;
}());
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe() {
    }
    TranslatePipe.prototype.transform = function (value) { return value; };
    TranslatePipe = __decorate([
        core_1.Pipe({ name: 'translate' })
    ], TranslatePipe);
    return TranslatePipe;
}());
var PhoneNumberPipe = /** @class */ (function () {
    function PhoneNumberPipe() {
    }
    PhoneNumberPipe.prototype.transform = function (value) { return value; };
    PhoneNumberPipe = __decorate([
        core_1.Pipe({ name: 'phoneNumber' })
    ], PhoneNumberPipe);
    return PhoneNumberPipe;
}());
var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe() {
    }
    SafeHtmlPipe.prototype.transform = function (value) { return value; };
    SafeHtmlPipe = __decorate([
        core_1.Pipe({ name: 'safeHtml' })
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());
describe('ExampleComponent', function () {
    var fixture;
    var component;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [
                example_component_1.ExampleComponent,
                TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
                OneviewPermittedDirective
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA, core_1.NO_ERRORS_SCHEMA],
            providers: [
                { provide: auth_guard_service_1.AuthGuardService, useClass: MockAuthGuardService },
                { provide: cookie_service_1.CookieService, useClass: MockCookieService },
                { provide: 'PLATFORM_ID', useValue: 'browser' },
                { provide: router_1.Router, useClass: MockRouter }
            ]
        }).overrideComponent(example_component_1.ExampleComponent, {}).compileComponents();
        fixture = testing_1.TestBed.createComponent(example_component_1.ExampleComponent);
        component = fixture.debugElement.componentInstance;
    });
    afterEach(function () {
        component.ngOnDestroy = function () { };
        fixture.destroy();
    });
    it('should run #constructor()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(component).toBeTruthy();
            return [2 /*return*/];
        });
    }); });
    it('should run #ngOnInit()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.adjustmentsDetailsCms = component.adjustmentsDetailsCms || {};
            component.adjustmentsDetailsCms.location = {
                threshold: {}
            };
            component.router = component.router || {};
            component.router.events = rxjs_1.of({
                urlAfterRedirects: 'urlAfterRedirects'
            });
            component.menuEl = component.menuEl || {};
            component.menuEl.nativeElement = {
                highlightMenu: function () { }
            };
            component.ngOnInit();
            return [2 /*return*/];
        });
    }); });
    it('should run #logout()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.authGuardSvc = component.authGuardSvc || {};
            component.authGuardSvc.logoff = jest.fn();
            component.logout();
            return [2 /*return*/];
        });
    }); });
    it('should run #changeLanguage()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.cookie = component.cookie || {};
            component.cookie.get = jest.fn();
            window.location.reload = jest.fn();
            component.changeLanguage({});
            return [2 /*return*/];
        });
    }); });
    it('should run #onDeactivate()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            window.scrollTo = jest.fn();
            component.onDeactivate();
            return [2 /*return*/];
        });
    }); });
});
