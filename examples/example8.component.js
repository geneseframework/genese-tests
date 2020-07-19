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
exports.Example8Component = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var one_service_1 = require("./one.service");
var two_service_1 = require("./two.service");
var my_components_1 = require("./my-components");
var core_2 = require("@ngx-serviceFive/core");
var navigation_service_1 = require("../framework/navigation.service");
var Example8Component = /** @class */ (function () {
    function Example8Component(service81, serviceThree, serviceFive, service82, navigation, router) {
        this.service81 = service81;
        this.serviceThree = serviceThree;
        this.serviceFive = serviceFive;
        this.service82 = service82;
        this.navigation = navigation;
        this.router = router;
    }
    Example8Component.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, this.service81.getSmade().toPromise()];
                    case 1:
                        _a.data = _b.sent();
                        this.acovsu = this.data[0];
                        this.acovde = this.data[1];
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _b.sent();
                        this.openFoo(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Example8Component.prototype.resetVa = function (noReAd) {
        this.sebi = null;
        this.sech = null;
        this.refoadfo = null;
        this.exisse = null;
        this.adchs = null;
        this.hichbl = false;
        this.sead = noReAd ? this.sead : null;
    };
    Example8Component.prototype.realfis = function () {
        this.resetVa();
        this.sese = null;
        this.wlpode = null;
        this.read = null;
    };
    Example8Component.prototype.seplch = function (sese) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, e_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.realfis();
                        if (!sese) return [3 /*break*/, 5];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 5]);
                        this.showlo = true;
                        _a = this;
                        return [4 /*yield*/, this.service81.getWipode(sese).toPromise()];
                    case 2:
                        _a.wlpode = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.service81.getReads(sese).toPromise()];
                    case 3:
                        _b.read = _c.sent();
                        this.setAdtynbis();
                        this.sese = sese;
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _c.sent();
                        this.openFoo(e_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Example8Component.prototype.setAdtynbis = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, e_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.service81.getAdTys().toPromise()];
                    case 1:
                        _a.adty = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.service81.loadBbbUuuu().toPromise()];
                    case 2:
                        _b.acUsSu = _c.sent();
                        this.showlo = false;
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _c.sent();
                        this.adty = null;
                        this.showlo = false;
                        this.openFoo(e_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Example8Component.prototype.adTyChd = function (sead) {
        this.resetVa();
        this.sead = sead;
        this.isTrsSed = sead.code === 'x';
        this.isIsNoFoshn = ['x', 'y'].includes(sead.code);
    };
    Example8Component.prototype.biCyCh = function (sebi) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.resetVa(true);
                        this.sebi = sebi;
                        this.hichbl = sebi === 'nb';
                        !this.hichbl ? this.setCh() : null;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 5, , 6]);
                        _a = this;
                        if (!this.adsDeCm) return [3 /*break*/, 2];
                        _b = this.adsDeCm;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.service81.getAdsDeCmDes().toPromise()];
                    case 3:
                        _b = _c.sent();
                        _c.label = 4;
                    case 4:
                        _a.adsDeCm = _b;
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _c.sent();
                        this.sebi = null;
                        this.openFoo(error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Example8Component.prototype.setCh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.service81.getAdsChs(this.sese, this.sebi).subscribe(function (resp) { return _this.adchs = resp; }, function (err) {
                    var buErStCo = (err.error || {}).fooCode;
                    if (buErStCo === 560) {
                        _this.chErMsg = 'msg';
                    }
                    else {
                        _this.openFoo(err);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    Example8Component.prototype.handleChSe = function (sech) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.refoadfo = null;
                this.sech = sech;
                return [2 /*return*/];
            });
        });
    };
    Example8Component.prototype.handleIsCh = function (seIs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (seIs.isSed || seIs.newInEnd || seIs.isOpOrCld === 'op') {
                    this.refoadfo = true;
                    this.exisse = seIs.isSed;
                    this.showAuAdFl = this.exisse && this.exisse.auAd === 'noau';
                    this.maIsNu = seIs.newInEnd;
                }
                else {
                    this.refoadfo = false;
                }
                return [2 /*return*/];
            });
        });
    };
    Example8Component.prototype.showAdFo = function () {
        return (this.refoadfo || this.isTrsSed) &&
            this.adsDeCm && (this.sech || this.hichbl);
    };
    Example8Component.prototype.foSu = function (frVls) {
        return __awaiter(this, void 0, void 0, function () {
            var e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.showAuAdFl) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.service82.setDaNCrIn(this.sead, this.exisse, frVls, this.sese).toPromise()];
                    case 2:
                        _a.sent();
                        this.opInRSuMo();
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _a.sent();
                        this.openFoo(e_4);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.submitCrMg(frVls);
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Example8Component.prototype.submitCrMg = function (frVls) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // Creating payload only on Submit as user can keep on changing options so we don't have to keep on processing data on each change
                this.service82.setSeAdNBiDt(this.sese, this.sead, this.sebi);
                this.service82.setChDt(this.sech);
                this.service82.setIsDt(this.exisse, this.maIsNu, this.sead);
                this.service82.setFrDt(frVls);
                this.service82.submitCrMg().subscribe(function (resp) { return _this.opInRSuMo(true, frVls); }, function (err) {
                    var buErStCo = err.error && err.error.fooCode;
                    if (buErStCo === 560) {
                        var t = 'title';
                        var c = 'sorry.';
                        _this.openFoo(err, t, c);
                    }
                    else {
                        _this.openFoo(err);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    Example8Component.prototype.opInRSuMo = function (showSbFl, frVls) {
        var _this = this;
        var serviceThree = this.serviceThree.open(my_components_1.Component81, {
            data: {
                adTy: this.sead.name,
                amount: showSbFl ? frVls.adAm : '0',
                adCd: ['N/A'],
                showSbFl: showSbFl
            }
        });
        serviceThree.dnCld.subscribe(function () {
            _this.serviceThree.close();
            _this.router.nvByUr(_this.navigation.pvUr);
        });
    };
    Example8Component.prototype.openFoo = function (err, t, c) {
        var grd = {
            x: this.serviceFive.instant(c || 'c'),
            y: this.serviceFive.instant(t || 't')
        };
        this.serviceThree.open(my_components_1.Component64, { x: grd });
    };
    var _a, _b, _c, _d, _e;
    Example8Component = __decorate([
        core_1.Component({
            selector: 'my-component',
            templateUrl: './my.html',
            styleUrls: ['./my.scss']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof one_service_1.Service81 !== "undefined" && one_service_1.Service81) === "function" ? _a : Object, typeof (_b = typeof my_components_1.ServiceThree !== "undefined" && my_components_1.ServiceThree) === "function" ? _b : Object, typeof (_c = typeof core_2.ServiceFive !== "undefined" && core_2.ServiceFive) === "function" ? _c : Object, typeof (_d = typeof two_service_1.Service82 !== "undefined" && two_service_1.Service82) === "function" ? _d : Object, typeof (_e = typeof navigation_service_1.ServiceEleven !== "undefined" && navigation_service_1.ServiceEleven) === "function" ? _e : Object, router_1.Router])
    ], Example8Component);
    return Example8Component;
}());
exports.Example8Component = Example8Component;
