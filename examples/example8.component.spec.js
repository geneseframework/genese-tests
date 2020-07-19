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
var example8_component_1 = require("./example8.component");
var one_service_1 = require("./one.service");
var my_components_1 = require("./my-components");
var core_2 = require("@ngx-serviceFive/core");
var two_service_1 = require("./two.service");
var navigation_service_1 = require("../framework/navigation.service");
var router_1 = require("@angular/router");
var MockService81 = /** @class */ (function () {
    function MockService81() {
    }
    MockService81 = __decorate([
        core_1.Injectable()
    ], MockService81);
    return MockService81;
}());
var MockServiceThree = /** @class */ (function () {
    function MockServiceThree() {
    }
    MockServiceThree = __decorate([
        core_1.Injectable()
    ], MockServiceThree);
    return MockServiceThree;
}());
var MockService82 = /** @class */ (function () {
    function MockService82() {
    }
    MockService82 = __decorate([
        core_1.Injectable()
    ], MockService82);
    return MockService82;
}());
var MockServiceEleven = /** @class */ (function () {
    function MockServiceEleven() {
    }
    MockServiceEleven = __decorate([
        core_1.Injectable()
    ], MockServiceEleven);
    return MockServiceEleven;
}());
var MockRouter = /** @class */ (function () {
    function MockRouter() {
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
describe('Example8Component', function () {
    var fixture;
    var component;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [
                example8_component_1.Example8Component,
                TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
                OneviewPermittedDirective
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA, core_1.NO_ERRORS_SCHEMA],
            providers: [
                { provide: one_service_1.Service81, useClass: MockService81 },
                { provide: my_components_1.ServiceThree, useClass: MockServiceThree },
                core_2.ServiceFive,
                { provide: two_service_1.Service82, useClass: MockService82 },
                { provide: navigation_service_1.ServiceEleven, useClass: MockServiceEleven },
                { provide: router_1.Router, useClass: MockRouter }
            ]
        }).overrideComponent(example8_component_1.Example8Component, {}).compileComponents();
        fixture = testing_1.TestBed.createComponent(example8_component_1.Example8Component);
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
            switch (_a.label) {
                case 0:
                    component.service81 = component.service81 || {};
                    component.service81.getSmade = jest.fn().mockReturnValue(rxjs_1.of({}));
                    component.data = component.data || {};
                    component.data;
                    .0 = '0';
                    component.data;
                    .1 = '1';
                    return [4 /*yield*/, component.ngOnInit()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should run #resetVa()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.resetVa({});
            return [2 /*return*/];
        });
    }); });
    it('should run #realfis()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.resetVa = jest.fn();
            component.realfis();
            return [2 /*return*/];
        });
    }); });
    it('should run #seplch()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    component.realfis = jest.fn();
                    component.service81 = component.service81 || {};
                    component.service81.getWipode = jest.fn().mockReturnValue(rxjs_1.of({}));
                    component.service81.getReads = jest.fn().mockReturnValue(rxjs_1.of({}));
                    component.setAdtynbis = jest.fn();
                    return [4 /*yield*/, component.seplch({})];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should run #setAdtynbis()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    component.service81 = component.service81 || {};
                    component.service81.getAdTys = jest.fn().mockReturnValue(rxjs_1.of({}));
                    component.service81.loadBbbUuuu = jest.fn().mockReturnValue(rxjs_1.of({}));
                    return [4 /*yield*/, component.setAdtynbis()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should run #adTyChd()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.resetVa = jest.fn();
            component.adTyChd({
                code: {}
            });
            return [2 /*return*/];
        });
    }); });
    it('should run #biCyCh()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    component.resetVa = jest.fn();
                    component.setCh = jest.fn();
                    component.service81 = component.service81 || {};
                    component.service81.getAdsDeCmDes = jest.fn().mockReturnValue(rxjs_1.of({}));
                    return [4 /*yield*/, component.biCyCh({})];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should run #setCh()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    component.service81 = component.service81 || {};
                    component.service81.getAdsChs = jest.fn().mockReturnValue(rxjs_1.of({}));
                    component.openFoo = jest.fn();
                    return [4 /*yield*/, component.setCh()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should run #handleChSe()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, component.handleChSe({})];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should run #handleIsCh()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, component.handleIsCh({
                        isSed: {
                            auAd: {}
                        },
                        newInEnd: {},
                        isOpOrCld: {}
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should run #showAdFo()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.showAdFo();
            return [2 /*return*/];
        });
    }); });
    it('should run #foSu()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    component.service82 = component.service82 || {};
                    component.service82.setDaNCrIn = jest.fn().mockReturnValue(rxjs_1.of({}));
                    component.opInRSuMo = jest.fn();
                    component.submitCrMg = jest.fn();
                    return [4 /*yield*/, component.foSu({})];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should run #submitCrMg()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    component.service82 = component.service82 || {};
                    component.service82.setSeAdNBiDt = jest.fn();
                    component.service82.setChDt = jest.fn();
                    component.service82.setIsDt = jest.fn();
                    component.service82.setFrDt = jest.fn();
                    component.service82.submitCrMg = jest.fn().mockReturnValue(rxjs_1.of({}));
                    component.opInRSuMo = jest.fn();
                    component.openFoo = jest.fn();
                    return [4 /*yield*/, component.submitCrMg({})];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should run #opInRSuMo()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.serviceThree = component.serviceThree || {};
            component.serviceThree.open = jest.fn().mockReturnValue({
                dnCld: rxjs_1.of({})
            });
            component.serviceThree.close = jest.fn();
            component.sead = component.sead || {};
            component.sead.name = 'name';
            component.router = component.router || {};
            component.router.nvByUr = jest.fn();
            component.navigation = component.navigation || {};
            component.navigation.pvUr = 'pvUr';
            component.opInRSuMo({}, {
                adAm: {}
            });
            return [2 /*return*/];
        });
    }); });
    it('should run #openFoo()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.serviceFive = component.serviceFive || {};
            component.serviceFive.instant = jest.fn();
            component.serviceThree = component.serviceThree || {};
            component.serviceThree.open = jest.fn();
            component.openFoo({}, {}, {});
            return [2 /*return*/];
        });
    }); });
});
