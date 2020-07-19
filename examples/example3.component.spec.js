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
var example3_component_1 = require("./example3.component");
var router_1 = require("@angular/router");
var serviceThree_service_1 = require("../../oneview-common/serviceThree/serviceThree.service");
var billing_header_service_1 = require("./billing-header.service");
var payment_service_1 = require("../payment.service");
var billing_data_service_1 = require("src/app/billing/billing-page/billing-data.service");
var MockElementRef = /** @class */ (function () {
    function MockElementRef() {
        this.nativeElement = {};
    }
    MockElementRef = __decorate([
        core_1.Injectable()
    ], MockElementRef);
    return MockElementRef;
}());
var MockServiceThree = /** @class */ (function () {
    function MockServiceThree() {
    }
    MockServiceThree = __decorate([
        core_1.Injectable()
    ], MockServiceThree);
    return MockServiceThree;
}());
var MockServiceTwo = /** @class */ (function () {
    function MockServiceTwo() {
    }
    MockServiceTwo = __decorate([
        core_1.Injectable()
    ], MockServiceTwo);
    return MockServiceTwo;
}());
var MockServiceOne = /** @class */ (function () {
    function MockServiceOne() {
    }
    MockServiceOne = __decorate([
        core_1.Injectable()
    ], MockServiceOne);
    return MockServiceOne;
}());
var MockServiceFour = /** @class */ (function () {
    function MockServiceFour() {
    }
    MockServiceFour = __decorate([
        core_1.Injectable()
    ], MockServiceFour);
    return MockServiceFour;
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
describe('Example3Component', function () {
    var fixture;
    var component;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [
                example3_component_1.Example3Component,
                TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
                OneviewPermittedDirective
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA, core_1.NO_ERRORS_SCHEMA],
            providers: [
                {
                    provide: router_1.ActivatedRoute,
                    useValue: {
                        snapshot: { url: 'url', params: {}, queryParams: {}, data: {} },
                        url: rxjs_1.of('url'),
                        params: rxjs_1.of({}),
                        queryParams: rxjs_1.of({}),
                        fragment: rxjs_1.of('fragment'),
                        data: rxjs_1.of({})
                    }
                },
                { provide: core_2.ElementRef, useClass: MockElementRef },
                { provide: serviceThree_service_1.ServiceThree, useClass: MockServiceThree },
                { provide: billing_header_service_1.ServiceTwo, useClass: MockServiceTwo },
                { provide: payment_service_1.ServiceOne, useClass: MockServiceOne },
                { provide: billing_data_service_1.ServiceFour, useClass: MockServiceFour },
                { provide: 'LOCALE_ID', useValue: 'en' }
            ]
        }).overrideComponent(example3_component_1.Example3Component, {}).compileComponents();
        fixture = testing_1.TestBed.createComponent(example3_component_1.Example3Component);
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
    it('should run SetterDeclaration #iiiiPppp', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.iiiiPppp = {
                count: {},
                upcomingDate: {},
                myAmount: {}
            };
            return [2 /*return*/];
        });
    }); });
    it('should run #ngOnInit()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.route = component.route || {};
            component.route.snapshot = {
                params: {
                    'ccc': {}
                }
            };
            component.ssssMmmm = component.ssssMmmm || {};
            component.ssssMmmm.accountStatus = 'accountStatus';
            component.setNnnMmm = jest.fn();
            component.details = component.details || {};
            component.details.OooPppMmm = {
                tttMmm: 'tttMmm'
            };
            component.setCccDddBbb = jest.fn();
            component.setFooDddCcc = jest.fn();
            component.getcccUuu = jest.fn();
            component.isCccLllWwwSssIiii = jest.fn();
            component.serviceOne = component.serviceOne || {};
            component.serviceOne.getfooCardConfig = jest.fn().mockReturnValue(rxjs_1.of({}));
            component.serviceFour = component.serviceFour || {};
            component.serviceFour.getFooing = jest.fn().mockReturnValue(rxjs_1.of({}));
            component.ngOnInit();
            return [2 /*return*/];
        });
    }); });
    it('should run #setCccDddBbb()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.details = component.details || {};
            component.details.OooPppMmm = {
                chequingDetails: {
                    nnnAaaa: {}
                }
            };
            component.setCccDddBbb();
            return [2 /*return*/];
        });
    }); });
    it('should run #setFooDddCcc()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.details = component.details || {};
            component.details.OooPppMmm = {
                fooCardDetails: {
                    ccType: {},
                    fooBaz: {}
                }
            };
            component.bbbHhh = component.bbbHhh || {};
            component.bbbHhh.getLocalDate = jest.fn();
            component.bbbHhh.formatDate = jest.fn();
            component.bbbHhh.isFooDddCcc = jest.fn();
            component.bbbHhh.isFooEeeCcc = jest.fn();
            component.setFooDddCcc();
            return [2 /*return*/];
        });
    }); });
    it('should run #openPpppCccc()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.details = component.details || {};
            component.details.dddDddBbb = 'dddDddBbb';
            component.bbbHhh = component.bbbHhh || {};
            component.bbbHhh.formatDate = jest.fn();
            component.serviceThree = component.serviceThree || {};
            component.serviceThree.open = jest.fn().mockReturnValue({
                $tttCccMmmCcc: rxjs_1.of({})
            });
            component.openPpppCccc({});
            return [2 /*return*/];
        });
    }); });
    it('should run #openPppSss()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.el = component.el || {};
            component.el.nativeElement = {
                dispatchEvent: function () { }
            };
            component.openPppSss({
                stopPropagation: function () { }
            });
            return [2 /*return*/];
        });
    }); });
    it('should run #openPppSssHistory()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.el = component.el || {};
            component.el.nativeElement = {
                dispatchEvent: function () { }
            };
            component.openPppSssHistory({
                stopPropagation: function () { }
            });
            return [2 /*return*/];
        });
    }); });
    it('should run #processThisDate()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.processThisDate({}, {}, {});
            return [2 /*return*/];
        });
    }); });
    it('should run #setNnnMmm()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.getStartEndDates = jest.fn().mockReturnValue({
                startDate: {},
                endDate: {}
            });
            component.details = component.details || {};
            component.details.myType = 'myType';
            component.processThisDate = jest.fn();
            component.setNnnMmm();
            return [2 /*return*/];
        });
    }); });
    it('should run #getStartEndDates()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.getStartEndDates({
                startDate: 'startDate',
                endDate: 'endDate'
            });
            return [2 /*return*/];
        });
    }); });
    it('should run #getcccUuu()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.details = component.details || {};
            component.details.llllCccc = 'llllCccc';
            component.details.ccccAaaAaaa = 'ccccAaaAaaa';
            component.getcccUuu();
            return [2 /*return*/];
        });
    }); });
    it('should run #getPpppCcc()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.getcccUuu = jest.fn();
            component.details = component.details || {};
            component.details.llllCccc = 'llllCccc';
            component.getPpppCcc();
            return [2 /*return*/];
        });
    }); });
    it('should run #isCccLllWwwSssIiii()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.details = component.details || {};
            component.details.llllCccc = 'llllCccc';
            component.getPpppCcc = jest.fn();
            component.isCccLllWwwSssIiii();
            return [2 /*return*/];
        });
    }); });
});
