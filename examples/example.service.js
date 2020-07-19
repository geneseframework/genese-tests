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
exports.DynamicComponentService = void 0;
var core_1 = require("@angular/core");
var oneview_components_1 = require("@rogers/oneview-components");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var DynamicComponentService = /** @class */ (function () {
    function DynamicComponentService(factoryResolver, http, route, encryptionService) {
        this.factoryResolver = factoryResolver;
        this.http = http;
        this.route = route;
        this.encryptionService = encryptionService;
        this.urlData$ = this.encryptionService.decrypt(decodeURIComponent(this.route.snapshot.params['cipherText']), this.keyMap);
    }
    DynamicComponentService.prototype.createComponent = function (component, into) {
        this.rootViewContainer = into || this.rootViewContainer;
        var factory = this.factoryResolver.resolveComponentFactory(component);
        return factory.create(this.rootViewContainer.parentInjector);
    };
    DynamicComponentService.prototype.insertComponent = function (componentRef) {
        var compId = "ngui-dyn-" + (Math.floor(Math.random() * Math.pow(10, 7)) + Math.pow(10, 6));
        componentRef.location.nativeElement.setAttribute('id', compId);
        componentRef.instance.id = compId;
        this.rootViewContainer.insert(componentRef.hostView);
        return componentRef.instance;
    };
    DynamicComponentService.prototype.emptyFunction = function () {
        // empty function
    };
    var _a;
    DynamicComponentService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(core_1.ComponentFactoryResolver)),
        __metadata("design:paramtypes", [Object, http_1.HttpClient,
            router_1.ActivatedRoute, typeof (_a = typeof oneview_components_1.EncryptionService !== "undefined" && oneview_components_1.EncryptionService) === "function" ? _a : Object])
    ], DynamicComponentService);
    return DynamicComponentService;
}());
exports.DynamicComponentService = DynamicComponentService;
