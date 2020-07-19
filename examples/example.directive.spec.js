"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var platform_browser_1 = require("@angular/platform-browser");
var core_2 = require("@angular/core");
var example_directive_1 = require("./example.directive");
var MockElementRef = /** @class */ (function () {
    function MockElementRef() {
        this.nativeElement = {};
    }
    MockElementRef = __decorate([
        core_1.Injectable()
    ], MockElementRef);
    return MockElementRef;
}());
var DirectiveTestComponent = /** @class */ (function () {
    function DirectiveTestComponent() {
    }
    DirectiveTestComponent.prototype.onNguiInview = function (event) { };
    DirectiveTestComponent.prototype.onNguiOutview = function (event) { };
    DirectiveTestComponent = __decorate([
        core_1.Component({
            template: "\n  <div my [item]=\"options\" (inview)=\"onNguiInview($event)\" (outview)=\"onNguiOutview($event)\"></div>\n  "
        })
    ], DirectiveTestComponent);
    return DirectiveTestComponent;
}());
describe('MyDirective', function () {
    var fixture;
    var component;
    var directiveEl;
    var directive;
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            testing_1.TestBed.configureTestingModule({
                declarations: [example_directive_1.MyDirective, DirectiveTestComponent],
                providers: [
                    { provide: core_2.ElementRef, useClass: MockElementRef },
                    core_2.Renderer2,
                    { provide: 'PLATFORM_ID', useValue: 'browser' }
                ],
                schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
            }).compileComponents();
            fixture = testing_1.TestBed.createComponent(DirectiveTestComponent);
            component = fixture.componentInstance;
            directiveEl = fixture.debugElement.query(platform_browser_1.By.directive(example_directive_1.MyDirective));
            directive = directiveEl.injector.get(example_directive_1.MyDirective);
            return [2 /*return*/];
        });
    }); });
    it("should run a directive", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(component).toBeTruthy();
            expect(directive).toBeTruthy();
            return [2 /*return*/];
        });
    }); });
    it('should run #ngOnInit()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            directive.handleIntersect = directive.handleIntersect || {};
            directive.handleIntersect.bind = jest.fn();
            directive.observer = directive.observer || {};
            directive.observer.observe = jest.fn();
            directive.element = directive.element || {};
            directive.element.nativeElement = 'nativeElement';
            directive.ngOnInit();
            return [2 /*return*/];
        });
    }); });
    it('should run #ngOnDestroy()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            directive.observer = directive.observer || {};
            directive.observer.disconnect = jest.fn();
            directive.ngOnDestroy();
            return [2 /*return*/];
        });
    }); });
    it('should run #handleIntersect()', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            directive.nguiInview = directive.nguiInview || {};
            directive.nguiInview.emit = jest.fn();
            directive.nguiOutview = directive.nguiOutview || {};
            directive.nguiOutview.emit = jest.fn();
            directive.handleIntersect([{}], {});
            return [2 /*return*/];
        });
    }); });
});
