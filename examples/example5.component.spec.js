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
var core_2 = require("@angular/core");
var example5_component_1 = require("./example5.component");
var oneview_components_1 = require("@rogers/oneview-components");
var twelve_service_1 = require("../twelve.service");
var nine_service_1 = require("./nine.service");
var ten_service_1 = require("./ten.service");
var fourteen_service_1 = require("./fourteen.service");
var eleven_service_1 = require("../eleven.service");
var fifteen_service_1 = require("../fifteen.service");
var thirteen_service_1 = require("./thirteen.service");
var MockServiceTwelve = /** @class */ (function () {
    function MockServiceTwelve() {
    }
    MockServiceTwelve = __decorate([
        core_1.Injectable()
    ], MockServiceTwelve);
    return MockServiceTwelve;
}());
var MockElementRef = /** @class */ (function () {
    function MockElementRef() {
        this.nativeElement = {};
    }
    MockElementRef = __decorate([
        core_1.Injectable()
    ], MockElementRef);
    return MockElementRef;
}());
var MockServiceNine = /** @class */ (function () {
    function MockServiceNine() {
    }
    MockServiceNine = __decorate([
        core_1.Injectable()
    ], MockServiceNine);
    return MockServiceNine;
}());
var MockServiceTen = /** @class */ (function () {
    function MockServiceTen() {
    }
    MockServiceTen = __decorate([
        core_1.Injectable()
    ], MockServiceTen);
    return MockServiceTen;
}());
var MockServiceFourteen = /** @class */ (function () {
    function MockServiceFourteen() {
        this.getServiceFourteen = function () { };
    }
    MockServiceFourteen = __decorate([
        core_1.Injectable()
    ], MockServiceFourteen);
    return MockServiceFourteen;
}());
var MockServiceEleven = /** @class */ (function () {
    function MockServiceEleven() {
    }
    MockServiceEleven = __decorate([
        core_1.Injectable()
    ], MockServiceEleven);
    return MockServiceEleven;
}());
var MockServiceFifteen = /** @class */ (function () {
    function MockServiceFifteen() {
    }
    MockServiceFifteen = __decorate([
        core_1.Injectable()
    ], MockServiceFifteen);
    return MockServiceFifteen;
}());
var MockServiceThirteen = /** @class */ (function () {
    function MockServiceThirteen() {
    }
    MockServiceThirteen = __decorate([
        core_1.Injectable()
    ], MockServiceThirteen);
    return MockServiceThirteen;
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
describe('Example5Component', function () {
    var fixture;
    var component;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [
                example5_component_1.Example5Component,
                TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
                OneviewPermittedDirective
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA, core_1.NO_ERRORS_SCHEMA],
            providers: [
                oneview_components_1.ServiceEight,
                oneview_components_1.ServiceSeven,
                oneview_components_1.ServivceSix,
                { provide: twelve_service_1.ServiceTwelve, useClass: MockServiceTwelve },
                { provide: core_2.ElementRef, useClass: MockElementRef },
                { provide: nine_service_1.ServiceNine, useClass: MockServiceNine },
                { provide: ten_service_1.ServiceTen, useClass: MockServiceTen },
                { provide: fourteen_service_1.ServiceFourteen, useClass: MockServiceFourteen },
                oneview_components_1.ServiceThree,
                { provide: eleven_service_1.ServiceEleven, useClass: MockServiceEleven },
                { provide: fifteen_service_1.ServiceFifteen, useClass: MockServiceFifteen },
                { provide: thirteen_service_1.ServiceThirteen, useClass: MockServiceThirteen }
            ]
        }).overrideComponent(example5_component_1.Example5Component, {}).compileComponents();
        fixture = testing_1.TestBed.createComponent(example5_component_1.Example5Component);
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
    it('should run GetterDeclaration #isHhhAaa', function () { return __awaiter(void 0, void 0, void 0, function () {
        var isHhhAaa;
        return __generator(this, function (_a) {
            component.service8 = component.service8 || {};
            component.service8.bazInfo = {
                'consumer': {},
                authorizationLevel: {},
                authorozationLevel: 'authorozationLevel'
            };
            isHhhAaa = component.isHhhAaa;
            return [2 /*return*/];
        });
    }); });
    it('should run #ngOnInit()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.ssssMmmm = component.ssssMmmm || {};
            component.ssssMmmm.lob = 'lob';
            component.service9 = component.service9 || {};
            component.service9.getdetails = jest.fn().mockReturnValue(rxjs_1.of({}));
            component.service9.getPostDatedPPC = jest.fn().mockReturnValue(rxjs_1.of({}));
            component.service9.getIiiiiiiii = jest.fn().mockReturnValue(rxjs_1.of({}));
            component.service9.getFooBar1Summary = jest.fn().mockReturnValue(rxjs_1.of({}));
            component.service9.getSssAaaLll = jest.fn();
            component.service9.handleEeeDT = jest.fn();
            component.service12 = component.service12 || {};
            component.service12.getSssIiiiD = rxjs_1.of({});
            component.serviceSixteen = component.serviceSixteen || {};
            component.serviceSixteen.getEeeDddSsss = jest.fn().mockReturnValue({
                nnnPpp: {}
            });
            component.service15 = component.service15 || {};
            component.service15.getTttAaa = jest.fn().mockReturnValue(rxjs_1.of({
                ecid: {}
            }));
            component.service15.getSD = jest.fn().mockReturnValue(rxjs_1.of({}));
            component.ngOnInit();
            return [2 /*return*/];
        });
    }); });
    it('should run #updateHanoi()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.fffCccDddd = component.fffCccDddd || {};
            component.fffCccDddd.nativeElement = {
                offsetHeight: {}
            };
            component.myFooList = component.myFooList || {};
            component.myFooList.nativeElement = {
                style: {
                    height: {}
                }
            };
            component.fooList1 = component.fooList1 || {};
            component.fooList1.nativeElement = {
                style: {
                    height: {}
                }
            };
            component.updateHanoi({});
            return [2 /*return*/];
        });
    }); });
    it('should run #openSsMmD()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.ServiceThree = component.ServiceThree || {};
            component.ServiceThree.open = jest.fn();
            component.openSsMmD({});
            return [2 /*return*/];
        });
    }); });
    it('should run #startFfPp()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    component.service8 = component.service8 || {};
                    component.service8.bazInfo = {
                        fooOneCode: {}
                    };
                    component.service6 = component.service6 || {};
                    component.service6.isFooDone = jest.fn();
                    component.ServiceThree = component.ServiceThree || {};
                    component.ServiceThree.open = jest.fn().mockReturnValue({
                        fooOneCodeChange$: rxjs_1.of({})
                    });
                    component.service13 = component.service13 || {};
                    component.service13.checkFfCuI = jest.fn();
                    component.component3 = component.component3 || {};
                    component.component3.changePlPr = jest.fn();
                    return [4 /*yield*/, component.startFfPp({})];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should run #handleFlBu()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    component.service8 = component.service8 || {};
                    component.service8.bazInfo = {
                        fooOneCode: {}
                    };
                    component.service8.ssssMmmm = {
                        nnnAaaa: {}
                    };
                    component.service6 = component.service6 || {};
                    component.service6.isFooDone = jest.fn();
                    component.ServiceThree = component.ServiceThree || {};
                    component.ServiceThree.open = jest.fn().mockReturnValue({
                        fooOneCodeChange$: rxjs_1.of({})
                    });
                    component.service10 = component.service10 || {};
                    component.service10.handleFooCodeChange = jest.fn();
                    component.service10.checkTyEl = jest.fn();
                    component.service10.upgradeDwHa = jest.fn();
                    return [4 /*yield*/, component.handleFlBu({
                            detail: {
                                ccc: {}
                            }
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should run #goIgTTo()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.el = component.el || {};
            component.el.nativeElement = {
                dispatchEvent: function () { }
            };
            component.goIgTTo({});
            return [2 /*return*/];
        });
    }); });
});
