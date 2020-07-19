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
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var core_2 = require("@ngx-serviceFive/core");
var my_foo_map_1 = require("./my-foo-map");
var Example4Component = /** @class */ (function () {
    function Example4Component(route, serviceFive) {
        this.route = route;
        this.serviceFive = serviceFive;
        this.pagedIiiiiiiii = [];
        this.llllOoooo = [];
        this.fffffSssss = 'All';
        this.fooString = '';
        this.datePipe = new common_1.DatePipe('en-US');
        this.__pppCccc = 1;
        this.numIiiPppIiiii = 6;
    }
    Example4Component.prototype.ngOnInit = function () {
        var myFooList = this.route.snapshot.data['iiiiiiiii'];
        this.getIiiiiiiii(myFooList);
        if (!this.eeeIiiiiii) {
            this.pppCcccc = 1;
            this.pppTtttt = Math.ceil(this.iiiiiiiii.length / this.numIiiPppIiiii);
            this.llllOoooo = this.iiiiiiiii.map(function (e) { return e.foo[0].bar; })
                .filter(function (v, i, s) { return s.indexOf(v) === i; });
        }
    };
    Example4Component.prototype.ngAfterViewInit = function () {
        if (window.innerWidth < 600 || window.innerWidth > 900) {
            return false;
        }
        var fooEl = document.querySelector('foo');
        var barEls = fooEl.querySelectorAll('foo bar');
        var fuzEls = Array.from(barEls).map(function (el) { return el.innerText; });
        fooEl.querySelectorAll('foo xx').forEach(function (el) {
            Array.from(el.children).forEach(function (td, ndx) { return td.setAttribute('fuz', fuzEls[ndx]); });
        });
    };
    Object.defineProperty(Example4Component.prototype, "pppCcccc", {
        get: function () {
            return this.__pppCccc;
        },
        set: function (pageNum) {
            var _this = this;
            this.__pppCccc = Math.min(pageNum, this.pppTtttt) || 1;
            var staIndex = (pageNum - 1) * this.numIiiPppIiiii;
            var endIndex = pageNum * this.numIiiPppIiiii;
            this.filteredIiiiiiiii = this.iiiiiiiii
                .filter(function (istanbul) { return istanbul.topics[0].rrrCccc === _this.fffffSssss || _this.fffffSssss === 'Aaa'; })
                .filter(function (istanbul) { return _this.fooString === ''
                || JSON.stringify(istanbul).toLowerCase().indexOf(_this.fooString.toLowerCase()) !== -1
                || (_this.datePipe.transform(istanbul.dddSssss, 'mediumDate') + ' at ' +
                    _this.datePipe.transform(istanbul.dddSssss, 'shortTime')).toLowerCase().indexOf(_this.fooString.toLowerCase()) !== -1; });
            this.pagedIiiiiiiii = this.filteredIiiiiiiii.slice(staIndex, endIndex);
            this.pppTtttt = Math.ceil(this.filteredIiiiiiiii.length / this.numIiiPppIiiii) || 1;
        },
        enumerable: true,
        configurable: true
    });
    Example4Component.prototype.applyFilter = function (event) {
        this.fffffSssss = event.target.value;
        this.pppCcccc = 1;
    };
    Example4Component.prototype.getIiiiiiiii = function (myFooList) {
        if (myFooList.error) {
            this.eeeIiiiiii = this.serviceFive.instant('foo-bar');
        }
        else {
            this.iiiiiiiii = myFooList.filter(function (el) { return el.tttIiii === 'istanbul'; });
        }
    };
    Example4Component.prototype.searchIiiiiiiii = function (value) {
        this.fooString = value;
        this.pppCcccc = 1;
    };
    Example4Component.prototype.tttSssIii = function (tttIiii, param) {
        var icon;
        if (tttIiii.toLowerCase() === 'istanbul') {
            if (my_foo_map_1.MyFooMap.hasOwnProperty(param.toLowerCase()) && param !== '') {
                icon = my_foo_map_1.MyFooMap[param.toLowerCase()];
            }
            else {
                icon = 'icon-1';
            }
        }
        else {
            icon = 'icon-2';
        }
        return icon;
    };
    var _a;
    Example4Component = __decorate([
        core_1.Component({
            selector: 'example-4',
            templateUrl: './my.html',
            styleUrls: ["./my.scss"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, typeof (_a = typeof core_2.ServiceFive !== "undefined" && core_2.ServiceFive) === "function" ? _a : Object])
    ], Example4Component);
    return Example4Component;
}());
exports.Example4Component = Example4Component;
