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
var platform_browser_1 = require("@angular/platform-browser");
var NguiHighlightPipe = /** @class */ (function () {
    function NguiHighlightPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    NguiHighlightPipe.prototype.transform = function (text, search) {
        var ret = text;
        if (search) {
            var re = new RegExp(search, 'ig');
            ret = text.replace(re, function (match) { return "<span class=\"ngui-highlight\">" + match + "</span>"; });
        }
        return this.sanitizer.bypassSecurityTrustHtml(ret);
    };
    NguiHighlightPipe = __decorate([
        core_1.Pipe({ name: 'nguiHighlight' }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], NguiHighlightPipe);
    return NguiHighlightPipe;
}());
exports.NguiHighlightPipe = NguiHighlightPipe;
