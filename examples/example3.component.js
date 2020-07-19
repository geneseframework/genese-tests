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
exports.Example3Component = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var date_fns_1 = require("date-fns");
var payment_1 = require("../../payment");
var payment_service_1 = require("../payment.service");
var billing_header_service_1 = require("./billing-header.service");
var serviceThree_service_1 = require("../../oneview-common/serviceThree/serviceThree.service");
var billing_data_service_1 = require("src/app/billing/billing-page/billing-data.service");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var Example3Component = /** @class */ (function () {
    function Example3Component(route, el, serviceThree, bbbHhh, serviceOne, serviceFour, language) {
        var _this = this;
        this.route = route;
        this.el = el;
        this.serviceThree = serviceThree;
        this.bbbHhh = bbbHhh;
        this.serviceOne = serviceOne;
        this.serviceFour = serviceFour;
        this.language = language;
        this.links = {
            link1: '/link',
            link2: '/link/link2',
            link3: '/link/link3',
            link4: '/link4'
        };
        this.myError = false;
        this.myMessage$ = rxjs_1.defer(function () { return _this.myInfo$; }).pipe(operators_1.map(function (myInfo) {
            if (myInfo.myType && myInfo.startDate && myInfo.endDate) {
                return _this.processThisDate(myInfo.myType, myInfo.startDate, myInfo.endDate);
            }
            else {
                return '';
            }
        }));
        this.fooImg = '';
        this.isFooEeeCcc = false;
        this.showBarXxx = false;
        this.cccLllEee = false;
        this.aaaAaCccLll = false;
        this.NnnCcclll = false;
        this.cccLllWwwEee = false;
    }
    Object.defineProperty(Example3Component.prototype, "iiiiPppp", {
        set: function (data) {
            data = data || {};
            if (data) {
                this.myCount = data.count;
                this.upcomingDate = data.upcomingDate;
                this.myAmount = data.myAmount;
            }
        },
        enumerable: false,
        configurable: true
    });
    Example3Component.prototype.ngOnInit = function () {
        var _this = this;
        var ccc = this.route.snapshot.params['ccc'];
        this.currentLanguage = this.language ? this.language : 'en';
        this.isXxxYyy = this.ssssMmmm.accountStatus.toUpperCase() === 'FOO';
        this.setNnnMmm();
        this._foo = this.details.OooPppMmm.tttMmm.toUpperCase();
        this.isNotFoo = this._foo !== 'R';
        if (this._foo === 'D') {
            this.setCccDddBbb();
        }
        else if (this._foo === 'C') {
            this.setFooDddCcc();
        }
        this.cccUuu = this.getcccUuu() || 0;
        this.cccLllWwwEee = this.isCccLllWwwSssIiii();
        this.serviceOne.getfooCardConfig().subscribe(function (config) { return (_this.config = config); });
        this.serviceFour
            .getFooing()
            .pipe(operators_1.map(function (billing) { return billing.OooPppMmm.tttMmm; }))
            .subscribe(function (tttMmm) { return (_this.OooPppMmm = tttMmm); });
    };
    Example3Component.prototype.setCccDddBbb = function () {
        this.barCard = this.details.OooPppMmm.chequingDetails;
        this.fooNumber = this.barCard.nnnAaaa;
    };
    Example3Component.prototype.setFooDddCcc = function () {
        var cardImg = {
            visa: 'assets/visa.png',
            master: 'assets/master.png',
            amex: 'assets/amex.png'
        };
        this.fooCard = this.details.OooPppMmm.fooCardDetails;
        if (this.fooCard && this.fooCard.ccType) {
            this.fooImg = cardImg[this.fooCard.ccType.toLowerCase()];
        }
        this.fooBaz = date_fns_1.lastDayOfMonth(this.bbbHhh.getLocalDate(this.fooCard.fooBaz));
        this.fooBazDate = this.bbbHhh.formatDate(this.fooBaz, this.language);
        this.isFooDddCcc = this.bbbHhh.isFooDddCcc(this.fooBaz);
        this.isFooEeeCcc = !this.isFooDddCcc && this.bbbHhh.isFooEeeCcc(this.fooBaz);
        this.showFooXxx = this.isFooDddCcc || this.isFooEeeCcc;
        this.numDaysDone = this.isFooEeeCcc && date_fns_1.differenceInCalendarDays(this.fooBaz, new Date());
    };
    Example3Component.prototype.openPpppCccc = function (type) {
        var _this = this;
        var date = this.details && this.details.dddDddBbb
            ? this.bbbHhh.formatDate(new Date(('' + this.details.dddDddBbb).replace('-', '/')), this.language)
            : null;
        var serviceThreeComponent = this.serviceThree.open(payment_1.ComponentOne, {
            data: { ssssMmmm: this.ssssMmmm, type: type, date: date }
        });
        serviceThreeComponent.$tttCccMmmCcc.subscribe(function (res) { return res && (_this.isNotFoo = false); });
    };
    Example3Component.prototype.openPppSss = function (event) {
        event.stopPropagation();
        this.el.nativeElement.dispatchEvent(new CustomEvent('my-event1', {
            detail: {},
            bubbles: true
        }));
    };
    Example3Component.prototype.openPppSssHistory = function (event) {
        event.stopPropagation();
        this.el.nativeElement.dispatchEvent(new CustomEvent('my-event2', {
            detail: {},
            bubbles: true
        }));
    };
    Example3Component.prototype.processThisDate = function (myType, startDate, endDate) {
        var currentDate = new Date();
        this.showBarXxx =
            date_fns_1.isWithinInterval(currentDate, {
                start: startDate,
                end: endDate
            }) || date_fns_1.isSameDay(currentDate, startDate);
        if (this.showBarXxx) {
            if (!this.isNotFoo && myType !== 'E_BILL') {
                return 'Set up Online Billing and Auto Pay';
            }
        }
        else {
            return '';
        }
    };
    Example3Component.prototype.setNnnMmm = function () {
        if (this.myConfig) {
            var _a = this.getStartEndDates(this.myConfig), startDate = _a.startDate, endDate = _a.endDate;
            var myType = this.details.myType ? this.details.myType : 'error';
            this.cccNnnMsg = this.processThisDate(myType, startDate, endDate);
        }
    };
    Example3Component.prototype.getStartEndDates = function (config) {
        if (!config.startDate || !config.endDate) {
            config.startDate = config.endDate = new Date();
        }
        else {
            var startDate = new Date(config.startDate.replace('-', '/'));
            var endDate = new Date(config.endDate.replace('-', '/'));
            return { startDate: startDate, endDate: endDate };
        }
        return { startDate: config.startDate, endDate: config.endDate };
    };
    Example3Component.prototype.getcccUuu = function () {
        if (this.details) {
            var llllCccc = this.details.llllCccc || 0;
            var CcccAaa = this.details.ccccAaaAaaa || 0;
            return llllCccc - CcccAaa;
        }
    };
    Example3Component.prototype.getPpppCcc = function () {
        var used = this.getcccUuu() || 0;
        var llllCccc = this.details.llllCccc || 0;
        var percentage = (used / llllCccc) * 100;
        return percentage ? percentage : 0;
    };
    Example3Component.prototype.isCccLllWwwSssIiii = function () {
        if (this.details.llllCccc <= 0) {
            return false;
        }
        var component3 = this.getPpppCcc();
        if (component3 >= 100) {
            this.cccLllEee = true;
            return true;
        }
        else if ((component3 < 75) && (component3 >= 60)) {
            this.NnnCcclll = true;
            return true;
        }
    };
    var _a, _b, _c, _d;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Example3Component.prototype, "details");
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Example3Component.prototype, "myConfig");
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Example3Component.prototype, "ssssMmmm");
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Example3Component.prototype, "links");
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Example3Component.prototype, "myError");
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], Example3Component.prototype, "iiiiPppp");
    __decorate([
        core_1.Input(),
        __metadata("design:type", rxjs_1.Observable)
    ], Example3Component.prototype, "myInfo$");
    Example3Component = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './my.html',
            styleUrls: ['./my.scss']
        }),
        __param(6, core_1.Inject(core_1.LOCALE_ID)),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            core_1.ElementRef, typeof (_a = typeof serviceThree_service_1.ServiceThree !== "undefined" && serviceThree_service_1.ServiceThree) === "function" ? _a : Object, typeof (_b = typeof billing_header_service_1.ServiceTwo !== "undefined" && billing_header_service_1.ServiceTwo) === "function" ? _b : Object, typeof (_c = typeof payment_service_1.ServiceOne !== "undefined" && payment_service_1.ServiceOne) === "function" ? _c : Object, typeof (_d = typeof billing_data_service_1.ServiceFour !== "undefined" && billing_data_service_1.ServiceFour) === "function" ? _d : Object, String])
    ], Example3Component);
    return Example3Component;
}());
exports.Example3Component = Example3Component;
