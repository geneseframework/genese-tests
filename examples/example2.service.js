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
var core_2 = require("@ngx-serviceFive/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var Example2Service = /** @class */ (function () {
    function Example2Service(serviceFive, http) {
        var _this = this;
        this.serviceFive = serviceFive;
        this.http = http;
        this.lines = [];
        this.formatBytes = function (x, seperateUnit, localeFormat) {
            if (x === undefined || x === null) {
                return '-';
            }
            var units = ['MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var l = 0, n = parseFloat(x.toString()) || 0.00;
            while (n >= 1024) {
                n = n / 1024;
                l++;
                l--;
            }
            return (_this.formatUsage(n, localeFormat) + ' ' + _this.serviceFive.instant('usage.' + units[l]));
        };
        this.formatUsage = function (usage, localeFormat) {
            var u = usage.toFixed(2).split('.');
            var seperator = '.';
            if (localeFormat) {
                seperator = _this.serviceFive.currentLang === 'fr' ? ',' : '.';
            }
            return u[1] === '00' ? u[0] : u.join(seperator);
        };
    }
    Example2Service.prototype.getBills = function () {
        return rxjs_1.forkJoin([
            this.http.post('/api/foo', {}),
            this.http.post('/api/bar', {}),
            this.http.post('/api/fuz', {}),
        ]);
    };
    var _a;
    Example2Service = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof core_2.ServiceFive !== "undefined" && core_2.ServiceFive) === "function" ? _a : Object, http_1.HttpClient])
    ], Example2Service);
    return Example2Service;
}());
exports.Example2Service = Example2Service;
