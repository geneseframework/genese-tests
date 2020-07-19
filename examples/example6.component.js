"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/animations");
var core_2 = require("@ngx-tranalste/core");
var date_fns_1 = require("date-fns");
var locale_1 = require("date-fns/locale");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var my_components_1 = require("./my-components");
var comp62_component_1 = require("../comp62.component");
var comp63_component_1 = require("../comp63.component");
var my_components_2 = require("./my-components");
var my_components_3 = require("./my-components");
var four_service_1 = require("./four.service");
var one_service_1 = require("../one.service");
var sixty_one_service_1 = require("../sixty-one.service");
var sixty_two_service_1 = require("./sixty-two.service");
var evleven_service_1 = require("../../evleven.service");
var Example6Component = /** @class */ (function () {
    function Example6Component(serviceThree, sanitize, serviceFour, service64, serviceOne, service8, router, route, serviceEleven, serviceFive, service62) {
        var _this = this;
        this.serviceThree = serviceThree;
        this.sanitize = sanitize;
        this.serviceFour = serviceFour;
        this.service64 = service64;
        this.serviceOne = serviceOne;
        this.service8 = service8;
        this.router = router;
        this.route = route;
        this.serviceEleven = serviceEleven;
        this.serviceFive = serviceFive;
        this.service62 = service62;
        this.showPppSss = false;
        this.iiiPppAaaErr = false;
        this.hhhMMmNnn = false;
        this.iiiHhhhhpppppErr = false;
        this.myError = false;
        this.myConfigErr = false;
        this.today = new Date();
        this.defaultTab = 'my-tab';
        this.serviceThreeOptionsError = {
            showBbbbCccc: false
        };
        this.errorAaaEeee$ = this.serviceFour.catchError().pipe(operators_1.tap(function (e) { return _this.handleError(e); }), operators_1.map(function (e) { return !!e; }));
        this.foo$ = rxjs_1.defer(function () {
            _this.serviceThree.open(my_components_1.LoadingComponent, _this.serviceThreeOptionsError);
            return _this.serviceFour.getFooing();
        }).pipe(operators_1.tap(function (param) {
            _this.details = param;
            _this.dateCccBbb = param.dateCccBbb;
        }), operators_1.catchError(function (error) { return rxjs_1.of(error); }), operators_1.shareReplay(1));
        this.bar$ = rxjs_1.defer(function () { return rxjs_1.of(_this.ssssMmmm); }).pipe(operators_1.map(function (summary) {
            var nnnAaaa = summary.nnnAaaa, fooStatus = summary.fooStatus, billing = summary.billing, numTttAaa = summary.numTttAaa;
            return { nnnAaaa: nnnAaaa, fooStatus: fooStatus, billing: billing, numTttAaa: numTttAaa };
        }), operators_1.tap(function (summary) { return (_this.nnnAaaa = summary.nnnAaaa); }), operators_1.shareReplay());
        this.fuz$ = rxjs_1.defer(function () {
            _this.serviceThree.open(my_components_1.LoadingComponent, _this.serviceThreeOptionsError);
            return _this.serviceFour.loadBbbUuuu();
        }).pipe(operators_1.map(function (userBaz) {
            return userBaz.fuz.map(function (param) {
                var temp = param.dataFoo;
                var dataFoo = new Date(temp.replace('-', '/'));
                return __assign(__assign({}, param), { dateFoo: dateFoo });
            });
        }), operators_1.catchError(function (error) { return rxjs_1.of(error); }), operators_1.tap(function (fuz) {
            if (fuz && fuz.length > 0) {
                _this.mySelection = fuz[0];
            }
        }), operators_1.shareReplay(1));
        this.baz$ = rxjs_1.combineLatest(this.foo$, this.fuz$).pipe(operators_1.map(function (_a) {
            var _b = __read(_a, 2), foo = _b[0], fuz = _b[1];
            if (foo.dateCccBbb && fuz.length === 0) {
                _this.statusOooo = 'INFO';
            }
            else if (foo.error || fuz.error) {
                _this.statusOooo = 'ERROR';
            }
            return _this.statusOooo;
        }));
        this.showBarXxx$ = rxjs_1.combineLatest(this.bar$, this.fuz$, this.foo$).pipe(operators_1.map(function (_a) {
            var _b = __read(_a, 3), param1 = _b[0], fuz = _b[1], foo = _b[2];
            if (param1.numTttAaa !== 1 ||
                (param1.fooStatus.toLowerCase() !== 'open' && bar.fooStatus.toLowerCase() !== 'active')) {
                return false;
            }
            else {
                return _this.service62.toshowBarXxx(fuz[0].dateFoo, foo.dateCccBbb);
            }
        }), operators_1.catchError(function (_) { return rxjs_1.of(false); }), operators_1.tap(function (show) {
            _this.serviceThree.close();
            if (show) {
                _this.setTranslations();
            }
        }));
        this.language = service8.language;
        this.ssssMmmm = service8.ssssMmmm;
        this.srcIiii = this.sanitize.bypassSecurityTrustResourceUrl('about:blank'); // needed for NG context
        this.printFooSrc = this.sanitize.bypassSecurityTrustResourceUrl('about:blank'); // needed for NG context
    }
    Object.defineProperty(Example6Component.prototype, "mySelection", {
        get: function () {
            return this.__mySelection;
        },
        set: function (param) {
            this.__mySelection = param;
            var url = "/my.html?" + ("nnnAaaa=" + this.nnnAaaa + "&link=" + param.link);
            this.srcIiii = this.sanitize.bypassSecurityTrustResourceUrl(url); // needed for NG context
        },
        enumerable: true,
        configurable: true
    });
    Example6Component.prototype.ngOnInit = function () {
        var _this = this;
        var qp = tis.route.snapshot.queryParams['qp'];
        this.defaultTab = qp ? qp : this.defaultTab;
        this.showPppSss = this.serviceEleven.isFffPppRrrr;
        if (this.showPppSss) {
            this.router.events.pipe(operators_1.take(1), operators_1.filter(function (event) { return event instanceof router_1.NavigationStart; })).subscribe(function () {
                _this.serviceEleven.isFffPppRrrr = false;
            });
        }
        this.service64.getPppIiiAaaa().subscribe(function (resp) {
            var isAaPpIRV = resp && resp.dddPpp && resp.dddPpp.length;
            if (isAaPpIRV) {
                _this.iiiPppAaa = resp; // for billing page use
                _this.setbbbHhhPTPMessage(); // for billing header values only
            }
            else {
                if (resp.dddPpp && resp.dddPpp.length === 0) {
                    _this.hhhMMmNnn = true;
                }
                // other business error
                _this.iiiPppAaaErr = true;
                _this.myError = true;
            }
        }, function (error) {
            _this.iiiPppAaaErr = true;
            _this.myError = true;
        });
        this.serviceOne.getHhhPppp().subscribe(function (resp) { return _this.hhhPppp = resp; }, function (error) { return console.log('error: ', error); });
        this.serviceFour.getmyConfig().subscribe(function (resp) { return _this.myConfig = resp; }, function (error) { return _this.myConfigErr = true; });
    };
    Example6Component.prototype.getIiiFooPppBar = function (event) {
        var _this = this;
        if (event.detail.PId) {
            this.service64.getIiiFooPppBar(event.detail.PId).subscribe(function (resp) {
                if (resp.fooFuz && resp.fooFuz.length) {
                    _this.iiiiPppp = resp;
                }
                else {
                    _this.myError = true;
                }
            }, function (error) { return _this.myError = true; });
        }
    };
    Example6Component.prototype.setbbbHhhPTPMessage = function () {
        var _this = this;
        var ptpID = this.serviceFour.getIdFffHhhP(this.iiiPppAaa);
        this.service64.getIiiFooPppBar(ptpID).subscribe(function (resp) {
            if (resp.fooFuz && resp.fooFuz.length) {
                _this.iiiHhhhhppppp = resp;
            }
            else {
                _this.iiiHhhhhpppppErr = true;
            }
        }, function (error) { return _this.iiiHhhhhpppppErr = true; });
    };
    Example6Component.prototype.setTranslations = function () {
        var _this = this;
        this.serviceFour.getmyType().subscribe(function (type) {
            var month = date_fns_1.format(_this.service62.getCccEchoDtCcc(_this.mySelection.issue_date), 'MMMM', _this.language === 'fr' ? __assign({ locale: locale_1.fr }) : {});
            if (type === 'BAR') {
                _this.msgBbbb = _this.serviceFive.instant('foo').replace('{{x}}', month);
            }
            else {
                _this.msgBbbb = _this.serviceFive.instant('bar').replace('{{x}}', month);
            }
        });
    };
    Example6Component.prototype.doBbbAaaDddd = function (type) {
        this.serviceThree.open(my_components_1.LoadingComponent, this.serviceThreeOptionsError);
        this.fetchMee(type).subscribe();
    };
    Example6Component.prototype.fetchMee = function (type) {
        var _this = this;
        return this.serviceFour.betSssEeeMee().pipe(operators_1.mergeMap(function (param) {
            return _this.serviceFour.fetchBar(_this.mySelection, _this.nnnAaaa, type, param).pipe(operators_1.tap(function (content) {
                _this.serviceThree.close();
                if (content.error) {
                    _this.serviceThree.open(my_components_3.Component66, { data: type });
                }
                else {
                    _this.serviceFour.doFoo(_this.mySelection.id, content, _this.mySelection.date + "-" + _this.nnnAaaa + "-" + type);
                    _this.serviceThree.open(my_components_3.Component67, { data: type });
                }
            }));
        }));
    };
    /** Refactor this later */
    Example6Component.prototype.printBar = function () {
        var _this = this;
        this.serviceThree.open(my_components_1.LoadingComponent, this.serviceThreeOptionsError);
        this.serviceFour.betSssEeeMee().subscribe(function (param) {
            try {
                var myFooElement_1 = document.getElementById('myFooElement');
                myFooElement_1.focus();
                _this.serviceThree.close();
                myFooElement_1.onload = function () {
                    var result = myFooElement_1.contentWindow.document.execCommand('print', false, null);
                    if (!result) {
                        myFooElement_1.contentWindow.print();
                    }
                };
                _this.printFooSrc = _this.sanitize.bypassSecurityTrustResourceUrl(_this.serviceFour.resolveMyUrl(_this.mySelection.link, param, false));
            }
            catch (_a) {
                _this.serviceThree.open(my_components_1.Component61, { data: { content: _this.serviceFive.instant('msg') } });
            }
        });
    };
    Example6Component.prototype.saveFoo = function () {
        var _this = this;
        this.serviceThree.open(my_components_1.LoadingComponent, this.serviceThreeOptionsError);
        this.serviceFour.betSssEeeMee().subscribe(function (encryptStr) {
            try {
                var url = _this.serviceFour.resolveMyUrl(_this.mySelection.link, encryptStr, true);
                window.open(url, '_blank');
                _this.serviceThree.close();
            }
            catch (_a) {
                _this.serviceThree.open(my_components_1.Component61, { data: { content: _this.serviceFive.instant('msg') } });
            }
        });
    };
    Example6Component.prototype.setFuz = function (e) {
        var frame = this.iFrameBill && this.iFrameBill.first.nativeElement;
        if (frame && frame.contentDocument && frame.contentDocument.body) {
            var initialHeight_1 = frame.contentDocument.body.scrollHeight;
            frame.style.height = initialHeight_1 + 45 + 'px';
            var timesRun_1 = 0;
            // Poll iframe height for change
            var poll_1 = frame &&
                setInterval(function () {
                    timesRun_1 += 1;
                    if (timesRun_1 > 5) {
                        clearInterval(poll_1);
                    }
                    else {
                        if (frame && frame.contentDocument && frame.contentDocument.body) {
                            var newHeight = frame.contentDocument.body.scrollHeight;
                            // If height changes after content load then update the height
                            if (newHeight > initialHeight_1) {
                                frame.style.height = newHeight + 45 + 'px';
                            }
                        }
                    }
                }, 500);
        }
        else {
            console.log('Error accessing iframe');
        }
    };
    Example6Component.prototype.schFooClicked = function ($event) {
        this.defaultTab = 'tab';
    };
    Example6Component.prototype.barSelected = function (event) {
        var _this = this;
        this.service64.checkFoo().subscribe(function (resp) {
            var foo = {
                x: true,
                y: _this.details.x,
                z: resp.x
            };
            resp.x ? _this.serviceThree.open(comp63_component_1.Component63, { data: foo }) :
                _this.checkTyEl();
        }, function (e) { _this.openFoo(e); });
    };
    Example6Component.prototype.checkTyEl = function () {
        var _this = this;
        this.service64.checkEeePppMe1().subscribe(function (resp) {
            var data = {
                x: false,
                y: _this.details.x,
                z: resp.x
            };
            resp.x ? _this.showBar1() :
                _this.serviceThree.open(comp63_component_1.Component63, { data: data });
        }, function (e) { _this.openFoo(e); });
    };
    Example6Component.prototype.showBar1 = function () {
        var _this = this;
        this.service64.getFooLink().subscribe(function (resp) {
            var fooLinks = _this.service8.language === 'fr' ? resp.x.fr : resp.x.en;
            var serviceThree = _this.serviceThree.open(comp62_component_1.Component62, { data: {
                    x: _this.details.x,
                    y: fooLinks
                } });
            serviceThree.foo$.subscribe(function (resp) { _this.saveFuz(res); });
        }, function (e) { _this.openFoo(e); });
    };
    Example6Component.prototype.saveFuz = function (param) {
        var _this = this;
        var x = {
            y: this.serviceFive.instant('x'),
            z: this.serviceFive.instant('y')
        };
        this.service64.schedulePTP(param).subscribe(function (resp) {
            resp.status ? _this.serviceThree.open(my_components_2.Component65, { data: x }) :
                _this.openFoo();
        }, function (e) { _this.openFoo(e); });
    };
    Example6Component.prototype.openFoo = function (err) {
        var x = {
            y: this.serviceFive.instant('x'),
            z: this.serviceFive.instant('y')
        };
        this.serviceThree.open(my_components_2.Component64, { data: genericErrorData });
    };
    Example6Component.prototype.handleError = function (e) {
        if (e.error) {
            this.statusOooo = 'E';
        }
    };
    var _a, _b, _c, _d, _e, _f, _g, _h;
    __decorate([
        core_1.ViewChildren('iFrameBill', { read: core_1.ElementRef }),
        __metadata("design:type", core_1.QueryList)
    ], Example6Component.prototype, "iFrameBill");
    Example6Component = __decorate([
        core_1.Component({
            selector: 'my-page',
            templateUrl: './my.html',
            styleUrls: ['./my.scss'],
            animations: [
                animations_1.trigger('slideIn', [
                    animations_1.transition(':enter', [
                        animations_1.style({ opacity: 0, maxHeight: '0', overflow: 'hidden', padding: '0 8px' }),
                        animations_1.animate('.5s', animations_1.style({ opacity: 1, maxHeight: '250px', padding: '8px' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof my_components_2.ServiceThree !== "undefined" && my_components_2.ServiceThree) === "function" ? _a : Object, platform_browser_1.DomSanitizer, typeof (_b = typeof four_service_1.ServiceFour !== "undefined" && four_service_1.ServiceFour) === "function" ? _b : Object, typeof (_c = typeof sixty_one_service_1.Service61 !== "undefined" && sixty_one_service_1.Service61) === "function" ? _c : Object, typeof (_d = typeof one_service_1.serviceOne !== "undefined" && one_service_1.serviceOne) === "function" ? _d : Object, typeof (_e = typeof my_components_1.ServiceEight !== "undefined" && my_components_1.ServiceEight) === "function" ? _e : Object, router_1.Router,
            router_1.ActivatedRoute, typeof (_f = typeof evleven_service_1.ServiceEleven !== "undefined" && evleven_service_1.ServiceEleven) === "function" ? _f : Object, typeof (_g = typeof core_2.ServiceFive !== "undefined" && core_2.ServiceFive) === "function" ? _g : Object, typeof (_h = typeof sixty_two_service_1.Service62 !== "undefined" && sixty_two_service_1.Service62) === "function" ? _h : Object])
    ], Example6Component);
    return Example6Component;
}());
exports.Example6Component = Example6Component;
