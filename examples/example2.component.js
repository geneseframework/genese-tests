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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Example2Component = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Example2Component = /** @class */ (function () {
    function Example2Component(formBuilder, language) {
        this.formBuilder = formBuilder;
        this.language = language;
        this.options = {};
        this.formSubmitted = new core_1.EventEmitter();
        this.nguiInview = new core_1.EventEmitter();
        this.nguiOutview = new core_1.EventEmitter();
        this.amountVal = 0;
        this.error = 'error';
    }
    Object.defineProperty(Example2Component.prototype, "showFlow", {
        set: function (show) {
            this.isFlow2 = show;
            this.getControlsAndCreateForm();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Example2Component.prototype, "myData", {
        get: function () {
            var amount = this.data.tooltip.amount[this.language];
            var threshold = this.data.location.threshold;
            amount = amount ? amount.replace(/\[XXX]/gi, "$" + threshold + ".00") : '';
            var tooltip = this.data.tooltip.site[this.language];
            tooltip = tooltip ? tooltip.replace(/\[XXX]/gi, "$" + threshold + ".00") : '';
            var sites = this.data.location.sites;
            return { amount: amount, siteToolTip: siteToolTip, sites: sites };
        },
        enumerable: false,
        configurable: true
    });
    Example2Component.prototype.ngOnInit = function () {
        typeof this.isFlow2 !== 'boolean' ? this.createForm() : null;
    };
    Example2Component.prototype.createForm = function (controls) {
        controls = this.isFlow2 ? this.getControls() : this.getFormControls();
        this.createForm(controls);
        this.myForm = this.formBuilder.group(controls);
        if (!this.isFlow2) {
            this.handleFoo();
            this.handleBar();
        }
    };
    Example2Component.prototype.getFormControls = function () {
        var defaultControlKeys = ['foo', 'bar', 'baz'];
        switch (this.selectedType.code) {
            case 'foo':
                this.formControlsKeys = __spreadArrays(defaultControlKeys, ['foo', 'bar']);
                break;
            default:
                this.formControlsKeys = defaultControlKeys;
        }
        return this.getControls();
    };
    Example2Component.prototype.getControls = function () {
        var allControls = {};
        var notRequiredFields = ['fuz', 'baz'];
        this.formControlsKeys.forEach(function (key) {
            var validations = !notRequiredFields.includes(key) ? forms_1.Validators.required : '';
            allControls[key] = ['', validations];
        });
        return allControls;
    };
    Example2Component.prototype.handleBar = function () {
        var _this = this;
        var thresholdAmount = Number(this.data.location.threshold);
        this.myForm.get('amount').valueChanges.subscribe(function (amount) {
            _this.amount = Number(amount);
            _this.valid = _this.isValid();
            _this.handleFoo(thresholdAmount);
        });
    };
    Example2Component.prototype.handleFoo = function () {
        var _this = this;
        var fooControl = this.myForm.get('foo');
        if (fooControl) {
            this.myForm.get('foo').valueChanges.subscribe(function (fooValue) {
                var fee = _this.details.content.moreDetails.plan;
                _this.amount = fooValue * (fee / 99);
                _this.myForm.get('foo').setValue(_this.amount, { only: true });
            });
        }
    };
    Example2Component.prototype.getAmount = function () {
        if (this.amountVal > Number(this.data.amount) && !this.selected.id) {
            this.error = '1';
            return false;
        }
        else if (this.foo && this.amountVal > this.data.amount2) {
            this.error = '2';
            return false;
        }
        else if (!this.myForm.get('amount').valid) {
            this.error = '3';
            return false;
        }
        return true;
    };
    Example2Component.prototype.handleFoo = function (amount) {
        this.showFoo = this.amountVal > amount && !this.isValid;
        this.showFoo ? this.myForm.get('foo').enable() : this.myForm.get('foo').disable();
    };
    Example2Component.prototype.isFieldValid = function (formControl) {
        return formControl.touched && !formControl.valid;
    };
    Example2Component.prototype.isValid = function () {
        if (!this.isFlow2) {
            return !this.getAmount();
        }
    };
    Example2Component.prototype.submit = function () {
        this.formSubmitted.emit(this.myForm.value);
    };
    __decorate([
        core_1.Input('item'),
        __metadata("design:type", Object)
    ], Example2Component.prototype, "options");
    __decorate([
        core_1.Input('showFlow'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], Example2Component.prototype, "showFlow");
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], Example2Component.prototype, "formSubmitted");
    __decorate([
        core_1.Output('inview'),
        __metadata("design:type", core_1.EventEmitter)
    ], Example2Component.prototype, "nguiInview");
    __decorate([
        core_1.Output('outview'),
        __metadata("design:type", core_1.EventEmitter)
    ], Example2Component.prototype, "nguiOutview");
    Example2Component = __decorate([
        core_1.Component({
            selector: 'app-example2',
            template: '',
            styleUrls: ['']
        }),
        __param(1, core_1.Inject(core_1.LOCALE_ID)),
        __metadata("design:paramtypes", [forms_1.FormBuilder, Object])
    ], Example2Component);
    return Example2Component;
}());
exports.Example2Component = Example2Component;
