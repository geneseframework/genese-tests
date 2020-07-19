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
exports.Example5Component = void 0;
var core_1 = require("@angular/core");
var oneview_components_1 = require("@rogers/oneview-components");
var oneview_components_2 = require("@rogers/oneview-components");
var oneview_components_3 = require("@rogers/oneview-components");
var oneview_components_4 = require("@rogers/oneview-components");
var nine_service_1 = require("./nine.service");
var ten_service_1 = require("./ten.service");
var eleven_service_1 = require("../eleven.service");
var twelve_service_1 = require("../twelve.service");
var fourteen_service_1 = require("./fourteen.service");
var one_component_1 = require("./one.component");
var two_component_1 = require("./two.component");
var thirteen_service_1 = require("./thirteen.service");
var fifteen_service_1 = require("../fifteen.service");
var three_component_1 = require("./three.component");
var Example5Component = /** @class */ (function () {
    function Example5Component(service8, serviceSixteen, service6, service12, el, service9, service10, service14, ServiceThree, serviceEleven, service15, service13) {
        this.service8 = service8;
        this.serviceSixteen = serviceSixteen;
        this.service6 = service6;
        this.service12 = service12;
        this.el = el;
        this.service9 = service9;
        this.service10 = service10;
        this.service14 = service14;
        this.ServiceThree = ServiceThree;
        this.serviceEleven = serviceEleven;
        this.service15 = service15;
        this.service13 = service13;
        this.sssIiiiiii = { ofni: {}, iiiCccc: 5 };
        this.fooBarSummary = { dddSssFoo: [{ pppDddFooPpp: {} }] };
        this.sassFoo = { i: true, t: true, h: true, s: true, i: true };
        this.nnnAaaa = service8.nnnAaaa; // Patch fix to send account number in Preapproval & Subscription/summary request
        this.ssssMmmm = service8.ssssMmmm;
        this.sssTttSsss = service14.getServiceFourteen();
    }
    Object.defineProperty(Example5Component.prototype, "isHhhAaa", {
        get: function () {
            return this.service8.bazInfo['consumer'] &&
                this.service8.bazInfo.authorizationLevel &&
                this.service8.bazInfo.authorozationLevel.toUpperCase() === 'ACCOUNT_HOLDER';
        },
        enumerable: false,
        configurable: true
    });
    Example5Component.prototype.ngOnInit = function () {
        var _this = this;
        this.isOooCcc = this.ssssMmmm.lob === 'C';
        this.service9.getdetails()
            .subscribe(function (resp) { return _this.details = resp; });
        this.service9.getPostDatedPPC()
            .subscribe(function (resp) { return _this.FooDdddPppp = resp; }, function (error) { return _this.FooDdddPpppErr = true; });
        this.service12.getSssIiiiD.subscribe(function (resp) { return _this.sssIiiiiii = resp; });
        // show shareverything section first before we get subscription summary
        this.EeeDddSssss =
            this.serviceSixteen.getEeeDddSsss(this.ssssMmmm, this.fooBarSummary);
        this.service9.getIiiiiiiii()
            .subscribe(function (resp) { return _this.iiiiiiiiiDetails = resp; }, function (error) { return _this.eeeIiiiiii = true; });
        this.service9.getFooBar1Summary(this.nnnAaaa, 'foo')
            .subscribe(function (resp) {
            _this.fooBarSummary = resp;
            _this.EeeDddSssss = _this.serviceSixteen.getEeeDddSsss(_this.ssssMmmm, resp);
            _this.HasEeeSss = !!_this.EeeDddSssss.nnnPpp;
        });
        this.sassFoo = this.service9.getSssAaaLll();
        this.service15.getTttAaa().subscribe(function (tttAaaaaa) {
            _this.tttAaaaaa = tttAaaaaa;
            _this.service15.getSD(_this.tttAaaaaa.ecid).subscribe(function (resp) { return _this.sssDddd = resp; }, function (error) { return _this.ErrDdddd = true; });
        }, function (error) { return _this.fooBarErr = _this.service9.handleEeeDT(error); });
    };
    Example5Component.prototype.updateHanoi = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.vh = _this.fffCccDddd.nativeElement.offsetHeight;
            _this.myFooList.nativeElement.style.height = _this.vh + 'px';
            _this.fooList1.nativeElement.style.height = _this.vh + 'px';
        }, 500);
    };
    Example5Component.prototype.openSsMmD = function (serviceThreeType) {
        this.ServiceThree.open(one_component_1.ComponentOne, { data: serviceThreeType });
    };
    Example5Component.prototype.startFfPp = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var fooOneCode, allowedAcDc, serviceThree;
            var _this = this;
            return __generator(this, function (_a) {
                fooOneCode = this.service8.bazInfo.fooOneCode;
                allowedAcDc = this.service6.isFooDone('FooCode', 'update');
                if (allowedAcDc && !fooOneCode) {
                    serviceThree = this.ServiceThree.open(two_component_1.ComponentTwo, {
                        data: { state: 'sss' }
                    });
                    serviceThree.fooOneCodeChange$.subscribe(function (newFooCode) { return __awaiter(_this, void 0, void 0, function () {
                        var isFooCodeUpdated;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.service13.checkFfCuI(newFooCode)];
                                case 1:
                                    isFooCodeUpdated = _a.sent();
                                    if (isFooCodeUpdated) {
                                        this.component3.changePlPr();
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                else {
                    this.component3.changePlPr();
                }
                return [2 /*return*/];
            });
        });
    };
    Example5Component.prototype.handleFlBu = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var fooOneCode, selectedccc, nnnAaaa, allowedAcDc, serviceThree, isGood;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fooOneCode = this.service8.bazInfo.fooOneCode;
                        selectedccc = event.detail.ccc;
                        nnnAaaa = this.service8.ssssMmmm.nnnAaaa;
                        allowedAcDc = this.service6.isFooDone('FooCode', 'update');
                        if (!(allowedAcDc && !fooOneCode)) return [3 /*break*/, 1];
                        serviceThree = this.ServiceThree.open(two_component_1.ComponentTwo, {
                            data: { state: 'success' }
                        });
                        serviceThree.fooOneCodeChange$.subscribe(function (newFooCode) {
                            return _this.service10.handleFooCodeChange(newFooCode, nnnAaaa, selectedccc);
                        } //
                        );
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.service10.checkTyEl(nnnAaaa, selectedccc)];
                    case 2:
                        isGood = _a.sent();
                        isGood && this.service10.upgradeDwHa(nnnAaaa, selectedccc);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Example5Component.prototype.goIgTTo = function (event) {
        this.el.nativeElement.dispatchEvent(new CustomEvent('n-to', {
            detail: 'getTTig',
            bubbles: true
        }));
    };
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    __decorate([
        core_1.ViewChild('fffCccDddd', { read: core_1.ElementRef }),
        __metadata("design:type", core_1.ElementRef)
    ], Example5Component.prototype, "fffCccDddd");
    __decorate([
        core_1.ViewChild('myFooList', { read: core_1.ElementRef }),
        __metadata("design:type", core_1.ElementRef)
    ], Example5Component.prototype, "myFooList");
    __decorate([
        core_1.ViewChild('fooList1', { read: core_1.ElementRef }),
        __metadata("design:type", core_1.ElementRef)
    ], Example5Component.prototype, "fooList1");
    __decorate([
        core_1.ViewChild('mmmSssAaa', { read: core_1.ElementRef }),
        __metadata("design:type", core_1.ElementRef)
    ], Example5Component.prototype, "mmmSssAaa");
    __decorate([
        core_1.ViewChild(three_component_1.ComponentThree),
        __metadata("design:type", typeof (_a = typeof three_component_1.ComponentThree !== "undefined" && three_component_1.ComponentThree) === "function" ? _a : Object)
    ], Example5Component.prototype, "component3");
    Example5Component = __decorate([
        core_1.Component({
            selector: 'example-5',
            templateUrl: './my.html',
            styleUrls: ["./my.scss"]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof oneview_components_3.ServiceEight !== "undefined" && oneview_components_3.ServiceEight) === "function" ? _b : Object, typeof (_c = typeof oneview_components_2.ServiceSeven !== "undefined" && oneview_components_2.ServiceSeven) === "function" ? _c : Object, typeof (_d = typeof oneview_components_1.ServivceSix !== "undefined" && oneview_components_1.ServivceSix) === "function" ? _d : Object, typeof (_e = typeof twelve_service_1.ServiceTwelve !== "undefined" && twelve_service_1.ServiceTwelve) === "function" ? _e : Object, core_1.ElementRef, typeof (_f = typeof nine_service_1.ServiceNine !== "undefined" && nine_service_1.ServiceNine) === "function" ? _f : Object, typeof (_g = typeof ten_service_1.ServiceTen !== "undefined" && ten_service_1.ServiceTen) === "function" ? _g : Object, typeof (_h = typeof fourteen_service_1.ServiceFourteen !== "undefined" && fourteen_service_1.ServiceFourteen) === "function" ? _h : Object, typeof (_j = typeof oneview_components_4.ServiceThree !== "undefined" && oneview_components_4.ServiceThree) === "function" ? _j : Object, typeof (_k = typeof eleven_service_1.ServiceEleven !== "undefined" && eleven_service_1.ServiceEleven) === "function" ? _k : Object, typeof (_l = typeof fifteen_service_1.ServiceFifteen !== "undefined" && fifteen_service_1.ServiceFifteen) === "function" ? _l : Object, typeof (_m = typeof thirteen_service_1.ServiceThirteen !== "undefined" && thirteen_service_1.ServiceThirteen) === "function" ? _m : Object])
    ], Example5Component);
    return Example5Component;
}());
exports.Example5Component = Example5Component;
