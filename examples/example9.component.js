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
exports.TotalDataDetailsComponent = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@ngx-serviceFive/core");
var router_1 = require("@angular/router");
var oneview_components_1 = require("@rogers/oneview-components");
var http_1 = require("@angular/common/http");
var suspend_ccc_service_1 = require("../suspend-ccc.service");
var data_manager_service_1 = require("../data-manager.service");
var TotalDataDetailsComponent = /** @class */ (function () {
    function TotalDataDetailsComponent(serviceFive, http, route, dataService, encryptionService) {
        this.serviceFive = serviceFive;
        this.http = http;
        this.route = route;
        this.dataService = dataService;
        this.encryptionService = encryptionService;
        this.planDetails = {};
        this.urlData$ = this.encryptionService.decrypt(decodeURIComponent(this.route.snapshot.params['cipherText']), this.keyMap);
    }
    TotalDataDetailsComponent.prototype.ngOnInit = function () {
        this.individualcccList = this.ssssMmmm.subList.filter(function (item) { return !item.shareEverything.isSharingData; });
        this.service8.ssssMmmm.subList.filter(function (contact) { return contact.shareEverything.isPrimaryccc; })[0].numSxFoo;
        var _a = this.getPastUsage1(this.pastUsageBills, this.pricePlansList), cccDataUsed = _a.cccDataUsed, dates = _a.dates;
        var _b = this.getPastUsage2(this.pastUsageBills, this.pricePlansList), cccDataUsed2 = _b[0], dates2 = _b[1];
        var myVar = this.getPastUsage3(this.pastUsageBills, this.pricePlansList);
    };
    TotalDataDetailsComponent.prototype.getPrimaryccc = function (pricePlansCurrent) {
        var featureGroup = pricePlansCurrent.featureGroupList
            .subscribe(function (group) { return group.featureGroup.label.en === 'Data'; })[0];
        return this.service8.ssssMmmm.subList
            .filter(function (contact) { return contact.shareEverything.isPrimaryccc; })[0]
            .numSxFoo;
    };
    TotalDataDetailsComponent.prototype.openErrorserviceThree = function (title, code) {
        return this.serviceThree.open(Component64, {
            data: {
                error: this.serviceFive.instant(title),
                content: this.serviceFive.instant(code),
                showCustomButton: true,
                customButtonName: 'OK'
            },
            showBbbbCccc: true,
            backgroundClickClose: false
        }).serviceThreeOutput;
    };
    TotalDataDetailsComponent.prototype.getWirelessDetails = function () {
        var _this = this;
        return zip(this.getPostPaidDetails(this.ccc, this.ban), this.getCurrentSubsidy(this.ccc, +this.ban, cdr)).pipe(tap(function (_a) {
            var ppDetails = _a[0], _ = _a[1];
            _this.postPaidDetails = ppDetails;
        }));
    };
    TotalDataDetailsComponent.prototype.getBonusDataListForSharing = function (usageDetails, subscriptionsDataUsage) {
        var _this = this;
        var secccList = subscriptionsDataUsage.data.secccList &&
            subscriptionsDataUsage.data.secccList.filter(function (ccc) { return ccc === _this.data.ccc; })[0];
    };
    TotalDataDetailsComponent.prototype.getPastUsage = function (fuz, pricePlansList) {
        var cccDataUsed = {};
        var dates = [];
        fuz.forEach(function (bill) {
            var dataSharedBundle = bill.shared_bundles.shared_bundle.filter(function (bundle) { return bundle.category === 'Data'; })[0];
            dataSharedBundle.used_amount_details.forEach(function (usedAmountDetails, index) {
                var phoneNumber = usedAmountDetails.subscriber_phone_number.split('-').join('');
                cccDataUsed[phoneNumber] = cccDataUsed[phoneNumber] || {};
                cccDataUsed[phoneNumber]['name'] = cccDataUsed[phoneNumber]['name'] || usedAmountDetails.subscriber_first_name;
                cccDataUsed[phoneNumber][bill.issue_date] = usedAmountDetails.used_amount;
                cccDataUsed[phoneNumber]['totalUsage'] = cccDataUsed[phoneNumber]['totalUsage'] || 0;
                cccDataUsed[phoneNumber]['totalUsage'] += +usedAmountDetails.used_amount;
            });
            // Total usage per date
            var totalUsageThisDate = dataSharedBundle.used_amount_details.reduce(function (acc, val) { return acc + +val.used_amount; }, 0);
            dates.push({ issueDate: bill.issue_date, totalUsageThisDate: totalUsageThisDate });
        });
    };
    TotalDataDetailsComponent.prototype.funcParamAsArray = function (myParam) {
        myParam.map(function (_a) {
            var param1 = _a[0], param2 = _a[1];
            param1.foo.bar.baz = 1;
            param2.a.b.c = 2;
        });
    };
    TotalDataDetailsComponent.prototype.funcParamAsObject = function (myParam) {
        myParam.subscribe(function (_a) {
            var param3 = _a.param3, param4 = _a.param4;
            param3.foo.bar.baz = 3;
            param4.a.b.c = 4;
        });
    };
    TotalDataDetailsComponent.prototype.funcParamAsCombined = function (myParam) {
        myParam.subscribe(function (_a) {
            var param1 = _a[0], param2 = _a[1], _b = _a[2], param3 = _b.param3, param4 = _b.param4;
            param1.foo.bar.baz = 1;
            param2.a.b.c = 2;
            param3.x.y.z = 3;
            param4.one.two.three = 4;
        });
    };
    var _a, _b, _c;
    TotalDataDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-total-data-details',
            templateUrl: './total-data-details.component.html',
            styleUrls: ['./total-data-details.component.scss'],
            providers: [suspend_ccc_service_1.SuspendcccService]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof core_2.ServiceFive !== "undefined" && core_2.ServiceFive) === "function" ? _a : Object, http_1.HttpClient,
            router_1.ActivatedRoute, typeof (_b = typeof data_manager_service_1.DataManagerService !== "undefined" && data_manager_service_1.DataManagerService) === "function" ? _b : Object, typeof (_c = typeof oneview_components_1.EncryptionService !== "undefined" && oneview_components_1.EncryptionService) === "function" ? _c : Object])
    ], TotalDataDetailsComponent);
    return TotalDataDetailsComponent;
}());
exports.TotalDataDetailsComponent = TotalDataDetailsComponent;
