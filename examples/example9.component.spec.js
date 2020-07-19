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
var example9_component_1 = require("./example9.component");
var core_2 = require("@ngx-serviceFive/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var data_manager_service_1 = require("../data-manager.service");
var oneview_components_1 = require("@rogers/oneview-components");
var MockHttpClient = /** @class */ (function () {
    function MockHttpClient() {
    }
    MockHttpClient.prototype.post = function () { };
    ;
    MockHttpClient = __decorate([
        core_1.Injectable()
    ], MockHttpClient);
    return MockHttpClient;
}());
var MockDataManagerService = /** @class */ (function () {
    function MockDataManagerService() {
    }
    MockDataManagerService = __decorate([
        core_1.Injectable()
    ], MockDataManagerService);
    return MockDataManagerService;
}());
var MockEncryptionService = /** @class */ (function () {
    function MockEncryptionService() {
        this.decrypt = function () { };
    }
    MockEncryptionService = __decorate([
        core_1.Injectable()
    ], MockEncryptionService);
    return MockEncryptionService;
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
describe('TotalDataDetailsComponent', function () {
    var fixture;
    var component;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [
                example9_component_1.TotalDataDetailsComponent,
                TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
                OneviewPermittedDirective
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA, core_1.NO_ERRORS_SCHEMA],
            providers: [
                core_2.ServiceFive,
                { provide: http_1.HttpClient, useClass: MockHttpClient },
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
                { provide: data_manager_service_1.DataManagerService, useClass: MockDataManagerService },
                { provide: oneview_components_1.EncryptionService, useClass: MockEncryptionService }
            ]
        }).overrideComponent(example9_component_1.TotalDataDetailsComponent, {
            set: { providers: [{ provide: SuspendcccService, useClass: MockSuspendcccService }] }
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(example9_component_1.TotalDataDetailsComponent);
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
            component.ssssMmmm = component.ssssMmmm || {};
            component.ssssMmmm.subList = [
                {
                    "shareEverything": {
                        "isSharingData": {}
                    }
                }
            ];
            component.service8 = component.service8 || {};
            component.service8.ssssMmmm = {
                subList: [{
                        shareEverything: {
                            isPrimaryccc: {}
                        },
                        numSxFoo: {}
                    }]
            };
            component.getPastUsage1 = jest.fn().mockReturnValue({
                cccDataUsed: {},
                dates: {}
            });
            component.getPastUsage2 = jest.fn().mockReturnValue([
                "cccDataUsed2",
                "dates2"
            ]);
            component.getPastUsage3 = jest.fn();
            component.ngOnInit();
            return [2 /*return*/];
        });
    }); });
    it('should run #getPrimaryccc()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.service8 = component.service8 || {};
            component.service8.ssssMmmm = {
                subList: [{
                        shareEverything: {
                            isPrimaryccc: {}
                        },
                        numSxFoo: {}
                    }]
            };
            component.getPrimaryccc({
                featureGroupList: rxjs_1.of({
                    featureGroup: {
                        label: {
                            en: {}
                        }
                    }
                })
            });
            return [2 /*return*/];
        });
    }); });
    it('should run #openErrorserviceThree()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.serviceThree = component.serviceThree || {};
            component.serviceThree.open = jest.fn().mockReturnValue({
                serviceThreeOutput: {}
            });
            component.serviceFive = component.serviceFive || {};
            component.serviceFive.instant = jest.fn();
            component.openErrorserviceThree({}, {});
            return [2 /*return*/];
        });
    }); });
    it('should run #getWirelessDetails()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.getPostPaidDetails = jest.fn();
            component.getCurrentSubsidy = jest.fn();
            component.getWirelessDetails();
            return [2 /*return*/];
        });
    }); });
    it('should run #getBonusDataListForSharing()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.data = component.data || {};
            component.data.ccc = 'ccc';
            component.getBonusDataListForSharing({}, {
                data: {
                    secccList: [{}]
                }
            });
            return [2 /*return*/];
        });
    }); });
    it('should run #getPastUsage()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.getPastUsage([{
                    shared_bundles: {
                        shared_bundle: [{}]
                    },
                    issue_date: {}
                }], {});
            return [2 /*return*/];
        });
    }); });
    it('should run #funcParamAsArray()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.funcParamAsArray([{
                    foo: {
                        bar: {
                            baz: {}
                        }
                    }
                }, {
                    a: {
                        b: {
                            c: {}
                        }
                    }
                }]);
            return [2 /*return*/];
        });
    }); });
    it('should run #funcParamAsObject()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.funcParamAsObject(rxjs_1.of({
                param3: {
                    foo: {
                        bar: {
                            baz: {}
                        }
                    }
                },
                param4: {
                    a: {
                        b: {
                            c: {}
                        }
                    }
                }
            }));
            return [2 /*return*/];
        });
    }); });
    it('should run #funcParamAsCombined()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            component.funcParamAsCombined(rxjs_1.of({
                foo: {
                    bar: {
                        baz: {}
                    }
                }
            }, {
                a: {
                    b: {
                        c: {}
                    }
                }
            }, {
                param3: {
                    x: {
                        y: {
                            z: {}
                        }
                    }
                },
                param4: {
                    one: {
                        two: {
                            three: {}
                        }
                    }
                }
            }));
            return [2 /*return*/];
        });
    }); });
});
