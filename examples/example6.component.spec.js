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
var example6_component_1 = require("./example6.component");
var my_components_1 = require("./my-components");
var platform_browser_1 = require("@angular/platform-browser");
var four_service_1 = require("./four.service");
var sixty_one_service_1 = require("../sixty-one.service");
var one_service_1 = require("../one.service");
var router_1 = require("@angular/router");
var evleven_service_1 = require("../../evleven.service");
var core_2 = require("@ngx-tranalste/core");
var sixty_two_service_1 = require("./sixty-two.service");
var MockServiceThree = /** @class */ (function () {
    function MockServiceThree() {
        this.open = function () { };
        this.close = function () { };
    }
    MockServiceThree = __decorate([
        core_1.Injectable()
    ], MockServiceThree);
    return MockServiceThree;
}());
var MockServiceFour = /** @class */ (function () {
    function MockServiceFour() {
        this.catchError = function () {
            return rxjs_1.of({});
        };
        this.getFooing = function () { };
        this.loadBbbUuuu = function () { };
    }
    MockServiceFour = __decorate([
        core_1.Injectable()
    ], MockServiceFour);
    return MockServiceFour;
}());
var MockService61 = /** @class */ (function () {
    function MockService61() {
    }
    MockService61 = __decorate([
        core_1.Injectable()
    ], MockService61);
    return MockService61;
}());
var MockserviceOne = /** @class */ (function () {
    function MockserviceOne() {
    }
    MockserviceOne = __decorate([
        core_1.Injectable()
    ], MockserviceOne);
    return MockserviceOne;
}());
var MockServiceEight = /** @class */ (function () {
    function MockServiceEight() {
        this.language = {};
        this.ssssMmmm = {};
    }
    MockServiceEight = __decorate([
        core_1.Injectable()
    ], MockServiceEight);
    return MockServiceEight;
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
var MockServiceEleven = /** @class */ (function () {
    function MockServiceEleven() {
    }
    MockServiceEleven = __decorate([
        core_1.Injectable()
    ], MockServiceEleven);
    return MockServiceEleven;
}());
var MockService62 = /** @class */ (function () {
    function MockService62() {
        this.toshowBarXxx = function () { };
    }
    MockService62 = __decorate([
        core_1.Injectable()
    ], MockService62);
    return MockService62;
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
describe('Example6Component', function () {
    var fixture;
    var component;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [
                example6_component_1.Example6Component,
                TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
                OneviewPermittedDirective
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA, core_1.NO_ERRORS_SCHEMA],
            providers: [
                { provide: my_components_1.ServiceThree, useClass: MockServiceThree },
                platform_browser_1.DomSanitizer,
                { provide: four_service_1.ServiceFour, useClass: MockServiceFour },
                { provide: sixty_one_service_1.Service61, useClass: MockService61 },
                { provide: one_service_1.serviceOne, useClass: MockserviceOne },
                { provide: my_components_1.ServiceEight, useClass: MockServiceEight },
                { provide: router_1.Router, useClass: MockRouter },
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
                { provide: evleven_service_1.ServiceEleven, useClass: MockServiceEleven },
                core_2.ServiceFive,
                { provide: sixty_two_service_1.Service62, useClass: MockService62 }
            ]
        }).overrideComponent(example6_component_1.Example6Component, {}).compileComponents();
        fixture = testing_1.TestBed.createComponent(example6_component_1.Example6Component);
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
    it('should run SetterDeclaration #mySelection', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.mySelection = {};
            return [2 /*return*/];
        });
    }); });
    it('should run GetterDeclaration #mySelection', function () { return __awaiter(void 0, void 0, void 0, function () {
        var mySelection;
        return __generator(this, function (_a) {
            mySelection = component.mySelection;
            return [2 /*return*/];
        });
    }); });
    it('should run #ngOnInit()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.serviceEleven = component.serviceEleven || {};
            component.serviceEleven.isFffPppRrrr = 'isFffPppRrrr';
            component.router = component.router || {};
            component.router.events = rxjs_1.of({});
            component.service64 = component.service64 || {};
            component.service64.getPppIiiAaaa = jest.fn().mockReturnValue(rxjs_1.of({
                dddPpp: {
                    length: {}
                }
            }));
            component.setbbbHhhPTPMessage = jest.fn();
            component.serviceOne = component.serviceOne || {};
            component.serviceOne.getHhhPppp = jest.fn().mockReturnValue(rxjs_1.of({}));
            component.serviceFour = component.serviceFour || {};
            component.serviceFour.getmyConfig = jest.fn().mockReturnValue(rxjs_1.of({}));
            component.ngOnInit();
            return [2 /*return*/];
        });
    }); });
    it('should run #getIiiFooPppBar()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.service64 = component.service64 || {};
            component.service64.getIiiFooPppBar = jest.fn().mockReturnValue(rxjs_1.of({
                fooFuz: {
                    length: {}
                }
            }));
            component.getIiiFooPppBar({
                detail: {
                    PId: {}
                }
            });
            return [2 /*return*/];
        });
    }); });
    it('should run #setbbbHhhPTPMessage()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.serviceFour = component.serviceFour || {};
            component.serviceFour.getIdFffHhhP = jest.fn();
            component.service64 = component.service64 || {};
            component.service64.getIiiFooPppBar = jest.fn().mockReturnValue(rxjs_1.of({
                fooFuz: {
                    length: {}
                }
            }));
            component.setbbbHhhPTPMessage();
            return [2 /*return*/];
        });
    }); });
    it('should run #setTranslations()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.serviceFour = component.serviceFour || {};
            component.serviceFour.getmyType = jest.fn().mockReturnValue(rxjs_1.of({}));
            component.service62 = component.service62 || {};
            component.service62.getCccEchoDtCcc = jest.fn();
            component.mySelection = component.mySelection || {};
            component.mySelection.issue_date = 'issue_date';
            component.serviceFive = component.serviceFive || {};
            component.serviceFive.instant = jest.fn().mockReturnValue('ngentest');
            component.setTranslations();
            return [2 /*return*/];
        });
    }); });
    it('should run #doBbbAaaDddd()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.serviceThree = component.serviceThree || {};
            component.serviceThree.open = jest.fn();
            component.fetchMee = jest.fn().mockReturnValue(rxjs_1.of({}));
            component.doBbbAaaDddd({});
            return [2 /*return*/];
        });
    }); });
    it('should run #fetchMee()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.serviceFour = component.serviceFour || {};
            component.serviceFour.betSssEeeMee = jest.fn().mockReturnValue(rxjs_1.of({}));
            component.serviceFour.fetchBar = jest.fn().mockReturnValue(rxjs_1.of({}));
            component.serviceFour.doFoo = jest.fn();
            component.mySelection = component.mySelection || {};
            component.mySelection.id = 'id';
            component.mySelection.date = 'date';
            component.serviceThree = component.serviceThree || {};
            component.serviceThree.close = jest.fn();
            component.serviceThree.open = jest.fn();
            component.fetchMee({});
            return [2 /*return*/];
        });
    }); });
    it('should run #printBar()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.serviceThree = component.serviceThree || {};
            component.serviceThree.open = jest.fn();
            component.serviceThree.close = jest.fn();
            component.serviceFour = component.serviceFour || {};
            component.serviceFour.betSssEeeMee = jest.fn().mockReturnValue(rxjs_1.of({}));
            component.serviceFour.resolveMyUrl = jest.fn();
            component.sanitize = component.sanitize || {};
            component.sanitize.bypassSecurityTrustResourceUrl = jest.fn();
            component.mySelection = component.mySelection || {};
            component.mySelection.link = 'link';
            component.printBar();
            return [2 /*return*/];
        });
    }); });
    it('should run #saveFoo()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.serviceThree = component.serviceThree || {};
            component.serviceThree.open = jest.fn();
            component.serviceThree.close = jest.fn();
            component.serviceFour = component.serviceFour || {};
            component.serviceFour.betSssEeeMee = jest.fn().mockReturnValue(rxjs_1.of({}));
            component.serviceFour.resolveMyUrl = jest.fn();
            component.mySelection = component.mySelection || {};
            component.mySelection.link = 'link';
            window.open = jest.fn();
            component.saveFoo();
            return [2 /*return*/];
        });
    }); });
    it('should run #setFuz()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.iFrameBill = component.iFrameBill || {};
            component.iFrameBill.first = {
                nativeElement: {}
            };
            component.iFrameBill.contentDocument = {
                body: {
                    scrollHeight: {}
                }
            };
            component.iFrameBill.style = {
                height: {}
            };
            component.setFuz({});
            return [2 /*return*/];
        });
    }); });
    it('should run #schFooClicked()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.schFooClicked({});
            return [2 /*return*/];
        });
    }); });
    it('should run #barSelected()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.service64 = component.service64 || {};
            component.service64.checkFoo = jest.fn().mockReturnValue(rxjs_1.of({
                x: {}
            }));
            component.details = component.details || {};
            component.details.x = 'x';
            component.serviceThree = component.serviceThree || {};
            component.serviceThree.open = jest.fn();
            component.checkTyEl = jest.fn();
            component.openFoo = jest.fn();
            component.barSelected({});
            return [2 /*return*/];
        });
    }); });
    it('should run #checkTyEl()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.service64 = component.service64 || {};
            component.service64.checkEeePppMe1 = jest.fn().mockReturnValue(rxjs_1.of({
                x: {}
            }));
            component.details = component.details || {};
            component.details.x = 'x';
            component.showBar1 = jest.fn();
            component.serviceThree = component.serviceThree || {};
            component.serviceThree.open = jest.fn();
            component.openFoo = jest.fn();
            component.checkTyEl();
            return [2 /*return*/];
        });
    }); });
    it('should run #showBar1()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.service64 = component.service64 || {};
            component.service64.getFooLink = jest.fn().mockReturnValue(rxjs_1.of({
                x: {
                    fr: {},
                    en: {}
                }
            }));
            component.service8 = component.service8 || {};
            component.service8.language = 'language';
            component.serviceThree = component.serviceThree || {};
            component.serviceThree.open = jest.fn().mockReturnValue({
                foo$: rxjs_1.of({})
            });
            component.details = component.details || {};
            component.details.x = 'x';
            component.saveFuz = jest.fn();
            component.openFoo = jest.fn();
            component.showBar1();
            return [2 /*return*/];
        });
    }); });
    it('should run #saveFuz()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.serviceFive = component.serviceFive || {};
            component.serviceFive.instant = jest.fn();
            component.service64 = component.service64 || {};
            component.service64.schedulePTP = jest.fn().mockReturnValue(rxjs_1.of({
                status: {}
            }));
            component.serviceThree = component.serviceThree || {};
            component.serviceThree.open = jest.fn();
            component.openFoo = jest.fn();
            component.saveFuz({});
            return [2 /*return*/];
        });
    }); });
    it('should run #openFoo()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.serviceFive = component.serviceFive || {};
            component.serviceFive.instant = jest.fn();
            component.serviceThree = component.serviceThree || {};
            component.serviceThree.open = jest.fn();
            component.openFoo({});
            return [2 /*return*/];
        });
    }); });
    it('should run #handleError()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.handleError({
                error: {}
            });
            return [2 /*return*/];
        });
    }); });
});
