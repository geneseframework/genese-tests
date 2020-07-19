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
exports.Example7Componet = void 0;
var core_1 = require("@angular/core");
var my_components_1 = require("./my-components");
var one_component_1 = require("./one.component");
var two_component_1 = require("./two.component");
var eleven_service_1 = require("./eleven.service");
var one_service_1 = require("./one.service");
var Example7Componet = /** @class */ (function () {
    function Example7Componet(serviceThree, component3Data, navigation) {
        this.serviceThree = serviceThree;
        this.component3Data = component3Data;
        this.navigation = navigation;
        this.fooData = {
            ccc: null,
            cccEeeeChecked: false,
            aaaSssSelected: '',
            fo: 'all',
            ccccAaaAaaa: null
        };
        this.barData = {
            numSxFoo: null,
            typeFxFoo: null
        };
    }
    // ENTRYPOINT
    Example7Componet.prototype.changePlPr = function () {
        return __awaiter(this, void 0, void 0, function () {
            var numPx1, pSFuz, som, fuz, barStatus, hasFooAa, typeFxFoo, mainS, data, numSFooS, isGood;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        numPx1 = this.component3Data.getPx1();
                        return [4 /*yield*/, this.component3Data.getPpSFuz().toPromise()];
                    case 1:
                        pSFuz = _a.sent();
                        if (!pSFuz) {
                            return [2 /*return*/];
                        }
                        som = pSFuz && this.component3Data.checkIfMOS(pSFuz);
                        if (!(som === 'x')) return [3 /*break*/, 6];
                        fuz = this.component3Data.getFuz(pSFuz);
                        barStatus = this.component3Data.getBarStatus(fuz);
                        if (!(barStatus === 'a')) return [3 /*break*/, 2];
                        hasFooAa = this.component3Data.hasFooAaSubs(fuz);
                        typeFxFoo = hasFooAa ? 'multi' : 'single';
                        this.targetPx = typeFxFoo === 'multi' ? 'X' : 'Y';
                        this.setFooBarFuzData({ numSxFoo: numPx1, fo: 'all', typeFxFoo: typeFxFoo });
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(barStatus === 'b')) return [3 /*break*/, 3];
                        mainS = this.component3Data.getMainSub(fuz);
                        this.setFooBarFuzData({ numSxFoo: mainS.numMainFoo, fo: 'm', typeFxFoo: 'm' });
                        this.targetPx = 'X';
                        return [3 /*break*/, 5];
                    case 3:
                        if (!(barStatus === 'c')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getFooData(fuz, numPx1)];
                    case 4:
                        data = _a.sent();
                        this.setFooBarFuzData(data);
                        this.targetPx = data.targetPx;
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        if (som === 'y') {
                            numSFooS = this.component3Data.getNumSFooS(pSFuz);
                            this.targetPx = 'ChoosePlan';
                            this.setFooBarFuzData({ numSxFoo: numSFooS, fo: 'all', typeFxFoo: 's' });
                        }
                        _a.label = 7;
                    case 7: return [4 /*yield*/, this.getGoodness(this.barData.numSxFoo, this.barData.typeFxFoo)];
                    case 8:
                        isGood = _a.sent();
                        if (isGood === true) {
                            this.fooData.cccEeeeChecked = true;
                            this.saveFoo();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Example7Componet.prototype.getGoodness = function (numSxFoo, typeFxFoo) {
        return __awaiter(this, void 0, void 0, function () {
            var eeeRrrSss, isBbEeIi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.component3Data.getEeeRrrSss(numSxFoo, typeFxFoo).toPromise()];
                    case 1:
                        eeeRrrSss = _a.sent();
                        if (!eeeRrrSss) return [3 /*break*/, 5];
                        if (!eeeRrrSss.good) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.checkBbEeIi(eeeRrrSss)];
                    case 2:
                        isBbEeIi = _a.sent();
                        return [2 /*return*/, isBbEeIi];
                    case 3:
                        if (eeeRrrSss.good === false) {
                            this.serviceThree.open(one_component_1.Component71, { data: {
                                    stts: 'eligibility-error',
                                    errorCode: this.component3Data.formatEeeCccEee(eeeRrrSss.eligibilityCode)
                                } });
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/, false];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Example7Componet.prototype.checkBbEeIi = function (eeeRrrSss) {
        return __awaiter(this, void 0, void 0, function () {
            var getFuz, pFuz, iiiCccc_1, serviceThree;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.fooData.ccccAaaAaaa = eeeRrrSss.ccccAaaAaaa;
                        return [4 /*yield*/, this.component3Data.getFuz().toPromise()];
                    case 1:
                        getFuz = _a.sent();
                        pFuz = getFuz && this.component3Data.getPpFuz(getFuz);
                        if (pFuz && pFuz.length > 0) {
                            iiiCccc_1 = pFuz[0].iiiCccc;
                            serviceThree = this.serviceThree.open(one_component_1.Component71, { data: { stts: 'b' } });
                            serviceThree.pcc$.subscribe(function (resp) { return __awaiter(_this, void 0, void 0, function () {
                                var cccCccC, cccCccserviceThree;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.component3Data.cccCcc(iiiCccc_1).toPromise()];
                                        case 1:
                                            cccCccC = _a.sent();
                                            if (cccCccC && cccCccC.rH && cccCccC.rH.status === 's') {
                                                cccCccserviceThree = this.serviceThree.open(one_component_1.Component71, { data: { stts: 'c-a-s' } });
                                                cccCccserviceThree.saveFoo$.subscribe(function (cccCccResp) { return _this.saveFoo(); });
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    Example7Componet.prototype.saveFoo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var saveBar;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.component3Data.savePPCState(this.fooData).toPromise()];
                    case 1:
                        saveBar = _a.sent();
                        saveBar && this.navigation.changeR({ detail: this.targetPx });
                        return [2 /*return*/];
                }
            });
        });
    };
    Example7Componet.prototype.getFooData = function (activeFuz, numPx1) {
        return __awaiter(this, void 0, void 0, function () {
            var hasAM, hasOivs, promiseFunc;
            var _this = this;
            return __generator(this, function (_a) {
                hasAM = this.component3Data.hasAM(activeFuz);
                hasOivs = this.component3Data.hasOivs(activeFuz);
                promiseFunc = function (resolve, reject) {
                    var etIspd = _this.component3Data.etIspd; // DRY
                    if (hasAM) {
                        var mainS_1 = _this.component3Data.getMainSub(activeFuz);
                        var hasAMserviceThree = _this.serviceThree.open(one_component_1.Component71, {});
                        var aaaSssSelected_1 = _this.component3Data.getAasp(activeFuz);
                        // user chose to only make changes to individual line
                        hasAMserviceThree.proceedWep$.subscribe(function (resp) {
                            var payLep = etIspd('cp', numPx1, '');
                            resolve(payLep);
                        });
                        // user chose to add individual line to shared plan and wants to add data
                        hasAMserviceThree.proceedTad$.subscribe(function (resp) {
                            var payLad = etIspd('csp', mainS_1.numMainFoo, aaaSssSelected_1);
                            resolve(payLad);
                        });
                        // user chose to add individual line to shared plan and doesnt want to add data
                        hasAMserviceThree.proceedTnad$.subscribe(function (resp) {
                            var payLnad = etIspd('alo', mainS_1.numMainFoo, aaaSssSelected_1);
                            resolve(payLnad);
                        });
                    }
                    else if (hasOivs) {
                        var oiiisubs = _this.component3Data.getOiiis(activeFuz);
                        var hasOivserviceThree = _this.serviceThree.open(two_component_1.Component72, { data: { individualSubs: oiiisubs, numPx1: numPx1 } });
                        // user chose to only make changes to individual line
                        hasOivserviceThree.makeCtycp$.subscribe(function (resp) {
                            var makeCtcppl = etIspd('cp', numPx1, '');
                            resolve(makeCtcppl);
                        });
                        // user chose to create shared plan from individual lines
                        hasOivserviceThree.createAspwyol.subscribe(function (resp) {
                            var createAspwyolpl = etIspd('csp', resp.ccc, resp.aaaSssSelected);
                            resolve(createAspwyolpl);
                        });
                    }
                    else {
                        var onlysiiip = etIspd('cp', numPx1, '');
                        resolve(onlysiiip);
                    }
                };
                return [2 /*return*/, new Promise(promiseFunc)];
            });
        });
    };
    Example7Componet.prototype.setFooBarFuzData = function (data) {
        var x = {
            a: data.x,
            b: data.y,
            c: data.z,
            d: data.a,
            e: data.b || ''
        };
        for (var _i = 0, _a = Object.keys(x_1); _i < _a.length; _i++) {
            var x_1 = _a[_i];
            this.barData[x_1] = x_1[x_1];
        }
        for (var _b = 0, _c = Object.keys(x_2); _b < _c.length; _b++) {
            var x_2 = _c[_b];
            this.fooData[x_2] = x_2[x_2];
        }
    };
    var _a, _b, _c;
    Example7Componet = __decorate([
        core_1.Component({ template: '', selector: 'xyz' }),
        __metadata("design:paramtypes", [typeof (_a = typeof my_components_1.ServiceThree !== "undefined" && my_components_1.ServiceThree) === "function" ? _a : Object, typeof (_b = typeof one_service_1.Service71 !== "undefined" && one_service_1.Service71) === "function" ? _b : Object, typeof (_c = typeof eleven_service_1.ServiceEleven !== "undefined" && eleven_service_1.ServiceEleven) === "function" ? _c : Object])
    ], Example7Componet);
    return Example7Componet;
}());
exports.Example7Componet = Example7Componet;
