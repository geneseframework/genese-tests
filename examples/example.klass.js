"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ExampleKlass = void 0;
var html_custom_element_1 = require("html-custom-element");
var template = require("./my.html");
var loading_1 = require("./loading");
var ExampleKlass = /** @class */ (function (_super) {
    __extends(ExampleKlass, _super);
    function ExampleKlass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadingImageSrc = loading_1.loadingImage;
        return _this;
    }
    Object.defineProperty(ExampleKlass.prototype, "username", {
        get: function () {
            return this["for"] === 'care' ?
                this.userInfo.userId.replace('.', ' ') : this.userInfo.firstName + " " + this.userInfo.lastName;
        },
        enumerable: false,
        configurable: true
    });
    ExampleKlass.prototype.connectedCallback = function () {
        var _this = this;
        var footerEl = this.closest('my-footer');
        if (footerEl) {
            this.userInfo = footerEl.userInfo;
            this.i18n = footerEl.i18n.userInfo;
            this.pppUuuu = footerEl.pppUuuu;
        }
        _super.prototype.renderWith.call(this, template).then(function (_) {
            _this.render();
            _this.attachListeners();
        });
    };
    ExampleKlass.prototype.setUserCode = function (userCode, isCurrent) {
        if (isCurrent === void 0) { isCurrent = true; }
        Array.from(this.querySelectorAll('.user-code')).forEach(function (el) {
            el.innerHTML = userCode;
        });
        if (isCurrent && this.querySelector('.current-user-code')) {
            this.querySelector('.current-user-code').innerHTML = userCode;
        }
    };
    ExampleKlass.prototype.attachListeners = function () {
        var _this = this;
        Array.from(document.querySelectorAll('.text-field input'))
            .forEach(function (t) {
            var parent = t.parentElement;
            var container = _this.querySelector('.' + t.id + '-container');
            var button = _this.querySelector('.' + t.id + '-container button');
            parent.classList.add('empty');
            t.addEventListener('focus', function (_) { return parent.classList.add('active'); });
            t.addEventListener('blur', function (_) { return parent.classList.remove('active'); });
            t.addEventListener('input', function (e) {
                var target = e.target;
                if (target.value) {
                    parent.classList.remove('empty');
                }
                if (target.validity.valid) {
                    container.classList.add('valid');
                    button.removeAttribute('disabled');
                }
                else {
                    container.classList.remove('valid');
                    button.setAttribute('disabled', 'disabled');
                }
            });
        });
    };
    return ExampleKlass;
}(html_custom_element_1.HTMLCustomElement));
exports.ExampleKlass = ExampleKlass;
ExampleKlass.define('user-ofni', ExampleKlass);
