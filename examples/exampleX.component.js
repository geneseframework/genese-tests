"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ExampleXComponent = void 0;
var core_1 = require("@angular/core");
var ExampleXComponent = /** @class */ (function () {
    function ExampleXComponent() {
    }
    ExampleXComponent.prototype.doMore = function (param) {
        this.dtDts = this.dtSv.getDtDts4Sh(this.usDts);
        this.ttRmPc = (this.dtDts.rmDt / this.dtDts.ttDt) * 100;
        var dvDt;
        dvDt = this.dvDts[dvDtsNumber];
        var title = {
            en: dvDt ? dvDt.EN.pdTt : '',
            fr: dvDt ? dvDt.FR.pdTt : ''
        };
        var x = param.x.y.z;
        x.foo.bar();
        var thisVar = this.foo.bar.baz();
        thisVar.a.boc = '123';
        var sv3Cmp = this.serviceThree.open(Component64, { data: { result: result, reasonCode: reasonCode } });
        sv3Cmp.usAc.subscribe(function (ret) { return ret; });
        this.ttAvUsAmBls = this.dates.reduce(function (acc, val) { return acc + +val.ttUsThDt; }, 0) / this.dates.length;
    };
    ExampleXComponent.prototype.setFooDddCcc = function () {
        this.fooCd = this.details.OooPppMmm.fooCdDetails;
        if (this.fooCd && this.fooCd.ccType) {
            this.fooImg = cardImg[this.fooCd.ccType.toLowerCase()];
        }
        this.fooBaz = lastDayOfMonth(this.bbbHhh.getLcDt(this.fooCd.fooBaz));
        this.fooBazDate = this.bbbHhh.formatDate(this.fooBaz, this.language);
        this.isFooDddCcc = this.bbbHhh.isFooDddCcc(this.fooBaz);
        this.isFooEeeCcc = !this.isFooDddCcc && this.bbbHhh.isFooEeeCcc(this.fooBaz);
        this.showFooXxx = this.isFooDddCcc || this.isFooEeeCcc;
        this.numDaysDone = this.isFooEeeCcc && differenceInCalendarDays(this.fooBaz, new Date());
    };
    ExampleXComponent = __decorate([
        core_1.Component({})
    ], ExampleXComponent);
    return ExampleXComponent;
}());
exports.ExampleXComponent = ExampleXComponent;
