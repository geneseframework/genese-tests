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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var MyDirective = /** @class */ (function () {
    function MyDirective(element, renderer, platformId) {
        this.element = element;
        this.renderer = renderer;
        this.platformId = platformId;
        /** IntersectionObserver options */
        this.options = {};
        /** Event that will be fired when in viewport */
        this.nguiInview = new core_1.EventEmitter();
        /** Event that will be fired when out of  viewport */
        this.nguiOutview = new core_1.EventEmitter();
    }
    /** Starts IntersectionObserver */
    MyDirective.prototype.ngOnInit = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.observer = new IntersectionObserver(this.handleIntersect.bind(this), this.options);
            this.observer.observe(this.element.nativeElement);
        }
    };
    /** Stops IntersectionObserver */
    MyDirective.prototype.ngOnDestroy = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.observer && this.observer.disconnect();
        }
    };
    MyDirective.prototype.handleIntersect = function (entries, observer) {
        var _this = this;
        entries.forEach(function (entry) {
            if (entry['isIntersecting']) {
                _this.nguiInview.emit(entry);
            }
            else {
                _this.nguiOutview.emit(entry);
            }
        });
    };
    __decorate([
        core_1.Input('item'),
        __metadata("design:type", Object)
    ], MyDirective.prototype, "options");
    __decorate([
        core_1.Output('inview'),
        __metadata("design:type", core_1.EventEmitter)
    ], MyDirective.prototype, "nguiInview");
    __decorate([
        core_1.Output('outview'),
        __metadata("design:type", core_1.EventEmitter)
    ], MyDirective.prototype, "nguiOutview");
    MyDirective = __decorate([
        core_1.Directive({
            selector: '[my]' // tslint:disable-line
        }),
        __param(2, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.Renderer2, Object])
    ], MyDirective);
    return MyDirective;
}());
exports.MyDirective = MyDirective;
