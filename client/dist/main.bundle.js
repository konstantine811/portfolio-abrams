webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRouter = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'skills', component: __WEBPACK_IMPORTED_MODULE_3__skills_skills_component__["a" /* SkillsComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_4__portfolio_portfolio_component__["a" /* PortfolioComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRouter)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-box\">\n    <div class=\"container-box__white\"></div>\n    <div class=\"container-box__black\"></div>\n    <div class=\"container-box__content\">\n        <router-outlet></router-outlet>     \n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-height: 800px) {\n  :host .container-box__content {\n    width: 90vw;\n    height: 90vh;\n    top: 5vh;\n    left: 5vw; }\n  :host .skills-black-box {\n    right: 55vw; } }\n\n@media only screen and (max-width: 1024px) {\n  :host .container-box__content {\n    overflow-y: scroll;\n    height: auto; }\n  :host .column-tablet-12 {\n    width: 100%; }\n  :host .navigation-desktop {\n    margin-right: 50px; }\n  :host .on-mobile {\n    display: block; }\n  :host .on-desktop {\n    display: none; } }\n\n.container-box {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.container-box__white {\n  width: 30vw;\n  height: 100vh;\n  background-color: #ffffff; }\n\n.container-box__black {\n  width: 70vw;\n  height: 100vh;\n  background-color: #1e1d1e; }\n\n.container-box__content {\n  width: 80vw;\n  height: 80vh;\n  position: absolute;\n  top: 10vh;\n  left: 10vw;\n  background-color: #ffffff;\n  box-shadow: 1px 10px 69px 5px rgba(0, 0, 0, 0.5);\n  overflow: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_shared_core_module__ = __webpack_require__("../../../../../src/app/core/shared.core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__skills_skills_module__ = __webpack_require__("../../../../../src/app/skills/skills.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__portfolio_portfolio_module__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_shared_core_module__["a" /* SharedCoreModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_8__skills_skills_module__["a" /* SkillsModule */],
                __WEBPACK_IMPORTED_MODULE_9__portfolio_portfolio_module__["a" /* PortfolioModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_device_detector__["a" /* Ng2DeviceDetectorModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/directives/attr.directives.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaAttrDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaAttrDirective = (function () {
    function PaAttrDirective(route, elem, renderer) {
        this.route = route;
        this.elem = elem;
        this.renderer = renderer;
        this.currentCount = 0;
        this.currentRoute = this.route.url;
    }
    PaAttrDirective.prototype.scroll = function (e) {
        var _this = this;
        this.currentCount = this.currentCount + e.deltaY;
        var elem = e.target;
        setTimeout(function () {
            _this.currentCount = 0;
        }, 1500);
        switch (this.currentRoute) {
            case '/home':
                this.scrollOnRight('right');
                if (this.currentCount > 400) {
                    this.route.navigate(['/skills']);
                }
                break;
            case '/skills':
                this.scrollOnRight('back');
                if (this.currentCount <= -400) {
                    this.route.navigate(['/home']);
                }
                this.scrollOnRight('right');
                if (this.currentCount >= 400) {
                    this.route.navigate(['/portfolio']);
                }
                break;
            case '/portfolio':
                this.scrollOnRight('back');
                if (this.currentCount <= -400) {
                    this.route.navigate(['/skills']);
                }
                this.scrollOnRight('right');
                if (this.currentCount >= 400) {
                    this.route.navigate(['/home']);
                    console.log(3);
                }
        }
    };
    PaAttrDirective.prototype.ngAfterViewInit = function () {
        this.animElement = this.elem.nativeElement.querySelector('.content-link');
    };
    PaAttrDirective.prototype.scrollOnRight = function (side) {
        var _this = this;
        if (side === 'right') {
            if (this.currentCount >= 100) {
                setTimeout(function () {
                    _this.renderer.setStyle(_this.animElement, 'height', '92%');
                }, 100);
                setTimeout(function () {
                    _this.renderer.setStyle(_this.animElement, 'height', '90%');
                }, 500);
            }
            if (this.currentCount >= 200) {
                setTimeout(function () {
                    _this.renderer.setStyle(_this.animElement, 'height', '94%');
                }, 100);
                setTimeout(function () {
                    _this.renderer.setStyle(_this.animElement, 'height', '90%');
                }, 800);
            }
            if (this.currentCount >= 300) {
                setTimeout(function () {
                    _this.renderer.setStyle(_this.animElement, 'height', '96%');
                }, 100);
                setTimeout(function () {
                    _this.renderer.setStyle(_this.animElement, 'height', '90%');
                }, 900);
            }
        }
        if (side === 'back') {
            if (this.currentCount >= -100) {
                setTimeout(function () {
                    _this.renderer.setStyle(_this.animElement, 'height', '88%');
                }, 100);
                setTimeout(function () {
                    _this.renderer.setStyle(_this.animElement, 'height', '90%');
                }, 500);
            }
            if (this.currentCount >= -200) {
                setTimeout(function () {
                    _this.renderer.setStyle(_this.animElement, 'height', '86%');
                }, 100);
                setTimeout(function () {
                    _this.renderer.setStyle(_this.animElement, 'height', '90%');
                }, 800);
            }
            if (this.currentCount >= -300) {
                setTimeout(function () {
                    _this.renderer.setStyle(_this.animElement, 'height', '84%');
                }, 100);
                setTimeout(function () {
                    _this.renderer.setStyle(_this.animElement, 'height', '90%');
                }, 900);
            }
        }
        setTimeout(function () {
            _this.renderer.addClass(_this.elem.nativeElement, 'on-animation-scorll');
        }, 100);
        setTimeout(function () {
            _this.renderer.removeClass(_this.elem.nativeElement, 'on-animation-scorll');
        }, 1200);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('wheel', ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PaAttrDirective.prototype, "scroll", null);
    PaAttrDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: "[scroll-attr]",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], PaAttrDirective);
    return PaAttrDirective;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/device-info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeviceInfoService = (function () {
    function DeviceInfoService(deviceService) {
        this.deviceService = deviceService;
    }
    DeviceInfoService.prototype.deviceDesktop = function () {
        return this.deviceService.isDesktop();
    };
    DeviceInfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_device_detector__["b" /* Ng2DeviceService */]])
    ], DeviceInfoService);
    return DeviceInfoService;
}());



/***/ }),

/***/ "../../../../../src/app/core/shared.core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedCoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_attr_directives__ = __webpack_require__("../../../../../src/app/core/directives/attr.directives.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_device_info_service__ = __webpack_require__("../../../../../src/app/core/services/device-info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedCoreModule = (function () {
    function SharedCoreModule() {
    }
    SharedCoreModule_1 = SharedCoreModule;
    SharedCoreModule.forRoot = function () {
        return {
            ngModule: SharedCoreModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_2__directives_attr_directives__["a" /* PaAttrDirective */]]
        };
    };
    SharedCoreModule = SharedCoreModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__directives_attr_directives__["a" /* PaAttrDirective */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_device_info_service__["a" /* DeviceInfoService */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__directives_attr_directives__["a" /* PaAttrDirective */]
            ]
        })
    ], SharedCoreModule);
    return SharedCoreModule;
    var SharedCoreModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" scroll-attr>\n    <div class=\"content-header-txt on-scroll-text-white\">\n        <h4 class=\"content-header-txt__inner\" [class.content-header-txt__inner-animate]=\"fadeInAnimation\">Abrams Constantine</h4>\n        <p class=\"content-header-txt__inner-about\" [class.content-header-txt__inner-animate]=\"fadeInAnimation\">Web developer</p>\n    </div>\n    <div class=\"content-header\" [class.content-animation]=\"fadeInAnimation\">\n        <div class=\"row\">\n            <app-nav class=\"on-desktop\"></app-nav>\n        </div>\n        <div class=\"row\">\n            <div class=\"column column-tablet-12\">\n                <div class=\"content-header__about-txt\">\n                    <div class=\"about-txt on-scroll-text-white\">\n                        <p class=\"about-txt__inner\">\n                        I′m 27 years old, and was born in Ukraine. I love programming, design and like discover all of modern and \n                        creative fields such as: HTML5, CSS3, JavaScript, Angular, NodeJs, graphic design, 3d designing, web design, etc. Now, \n                        I′m working as a Frontend Developer and with me, programming was become a part of my life. I always \n                        strive to create unique, qualitatively designed and supported web-pages for our clients.\n                        </p>\n                    </div>  \n                </div>\n            </div>\n        </div>  \n    </div>\n    <app-social-link></app-social-link>\n    <div class=\"content-bottom\">\n        <div class=\"content-bottom-txt\">\n            <div class=\"bottom-txt on-scroll-text-black\">\n                <p class=\"bottom-txt__inner bottom-txt__inner--first\">\n                        Full Stack Javascript\n                </p>\n            </div>\n           <div class=\"bottom-txt on-scroll-text-black\">\n                <p class=\"bottom-txt__inner bottom-txt__inner--second\">\n                        Developer\n                </p>\n           </div>\n        </div>\n        <div class=\"content-image\">\n            <img class=\"content-image__inner\" src=\"./assets/img/Abrams.png\" alt=\"\">\n        </div>    \n    </div> \n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-height: 800px) {\n  :host .container-box__content {\n    width: 90vw;\n    height: 90vh;\n    top: 5vh;\n    left: 5vw; }\n  :host .skills-black-box {\n    right: 55vw; } }\n\n@media only screen and (max-width: 1024px) {\n  :host .container-box__content {\n    overflow-y: scroll;\n    height: auto; }\n  :host .column-tablet-12 {\n    width: 100%; }\n  :host .navigation-desktop {\n    margin-right: 50px; }\n  :host .on-mobile {\n    display: block; }\n  :host .on-desktop {\n    display: none; } }\n\n@media only screen and (max-width: 1075px) {\n  :host .about-txt__inner {\n    width: 70%; } }\n\n@media only screen and (max-width: 1024px) {\n  :host {\n    overflow-x: hidden !important;\n    overflow-y: scroll !important;\n    height: 100% !important;\n    position: relative !important; }\n    :host .about-txt__inner {\n      width: 83%;\n      margin-left: 44px;\n      margin-top: 99px;\n      padding-right: 25%; }\n    :host .content-image__inner {\n      max-height: 100%;\n      width: 100%;\n      position: relative;\n      top: calc(9vw - 20px); }\n    :host .content-header {\n      height: auto; }\n    :host .content-bottom {\n      height: auto; }\n    :host .content-bottom-txt {\n      height: 100%;\n      overflow: visible; }\n    :host .bottom-txt {\n      height: auto;\n      overflow: visible; }\n    :host .bottom-txt__inner {\n      font-size: 26px; } }\n\n@media only screen and (max-height: 629px) {\n  :host .about-txt__inner {\n    width: 80%; } }\n\n:host {\n  position: fixed;\n  width: inherit;\n  height: inherit;\n  display: block;\n  overflow: hidden;\n  background-color: #ffffff; }\n\n.container {\n  width: 100%;\n  height: 100%; }\n\n.container-flex {\n  position: absolute;\n  top: 0;\n  width: auto;\n  z-index: 10; }\n\n.content-header-txt {\n  width: 232px;\n  position: absolute;\n  z-index: 100; }\n\n.content-header-txt__inner {\n  display: inline-block;\n  color: #1d1b1d;\n  font-size: 20px;\n  font-family: 'Advent Pro', sans;\n  font-weight: 600;\n  width: auto;\n  padding: 30px 40px 0;\n  margin: 0; }\n\n.content-header-txt__inner-about {\n  display: inline-block;\n  color: #1d1b1d;\n  font-size: 16px;\n  font-family: 'Advent Pro', sans;\n  font-weight: 300;\n  width: 100%;\n  padding: 0px 65px 0;\n  margin: 0; }\n\n.content-header-txt__inner-animate {\n  -webkit-animation: color-txt 1s 1.9s 1 forwards;\n          animation: color-txt 1s 1.9s 1 forwards; }\n\n.about-txt {\n  max-width: 100%;\n  overflow: hidden; }\n\n.about-txt__inner {\n  color: #ffffff;\n  width: 50%;\n  margin-left: 19%;\n  -webkit-transform: translate(0, -150%);\n          transform: translate(0, -150%);\n  opacity: 0;\n  -webkit-animation: content-txt 1.4s 5.5s 1 forwards cubic-bezier(0, 1, 0.8, 1);\n          animation: content-txt 1.4s 5.5s 1 forwards cubic-bezier(0, 1, 0.8, 1); }\n\n.content-header {\n  height: 60%;\n  width: 100%;\n  background-color: #1d1b1d;\n  z-index: 100;\n  -webkit-transform: translate(-250%, 0);\n          transform: translate(-250%, 0); }\n\n.content-animation {\n  -webkit-animation: content-black 3s 1 forwards cubic-bezier(0.4, 0, 0.2, 1);\n          animation: content-black 3s 1 forwards cubic-bezier(0.4, 0, 0.2, 1); }\n\n.content-bottom {\n  height: 40%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.content-image {\n  width: 100%;\n  height: 100%; }\n\n.content-image__inner {\n  width: auto;\n  position: absolute;\n  bottom: 0;\n  right: 14%;\n  max-height: 66vh;\n  z-index: 1000; }\n\n.content-bottom-txt {\n  width: 100%;\n  height: 50%;\n  overflow: hidden;\n  margin-top: 7%; }\n\n.bottom-txt {\n  overflow: hidden;\n  height: 50px;\n  -webkit-perspective: 200px;\n          perspective: 200px; }\n\n.bottom-txt__inner {\n  text-align: center;\n  font-size: 35px;\n  margin: 0 auto;\n  opacity: 0;\n  -webkit-transform: translate(0, -250%) rotateX(-90deg);\n          transform: translate(0, -250%) rotateX(-90deg); }\n\n.bottom-txt__inner--first {\n  -webkit-animation: content-txt-bottom 1.5s 4s 1 forwards cubic-bezier(0, 1, 0.8, 1);\n          animation: content-txt-bottom 1.5s 4s 1 forwards cubic-bezier(0, 1, 0.8, 1); }\n\n.bottom-txt__inner--second {\n  -webkit-animation: content-txt-bottom 1.5s 5s 1 forwards cubic-bezier(0, 1, 0.8, 1);\n          animation: content-txt-bottom 1.5s 5s 1 forwards cubic-bezier(0, 1, 0.8, 1); }\n\n@-webkit-keyframes color-txt {\n  0% {\n    color: #1d1b1d; }\n  100% {\n    color: #ffffff; } }\n\n@keyframes color-txt {\n  0% {\n    color: #1d1b1d; }\n  100% {\n    color: #ffffff; } }\n\n@-webkit-keyframes content-black {\n  0% {\n    -webkit-transform: translate(-250%, 0);\n            transform: translate(-250%, 0); }\n  60% {\n    -webkit-transform: translate(-55%, 0);\n            transform: translate(-55%, 0); }\n  70% {\n    -webkit-transform: translate(-29%, 0);\n            transform: translate(-29%, 0); }\n  80% {\n    -webkit-transform: translate(-17%, 0);\n            transform: translate(-17%, 0); }\n  90% {\n    -webkit-transform: translate(-11%, 0);\n            transform: translate(-11%, 0); }\n  100% {\n    -webkit-transform: translate(0%, 0%);\n            transform: translate(0%, 0%); } }\n\n@keyframes content-black {\n  0% {\n    -webkit-transform: translate(-250%, 0);\n            transform: translate(-250%, 0); }\n  60% {\n    -webkit-transform: translate(-55%, 0);\n            transform: translate(-55%, 0); }\n  70% {\n    -webkit-transform: translate(-29%, 0);\n            transform: translate(-29%, 0); }\n  80% {\n    -webkit-transform: translate(-17%, 0);\n            transform: translate(-17%, 0); }\n  90% {\n    -webkit-transform: translate(-11%, 0);\n            transform: translate(-11%, 0); }\n  100% {\n    -webkit-transform: translate(0%, 0%);\n            transform: translate(0%, 0%); } }\n\n@-webkit-keyframes content-txt {\n  0% {\n    -webkit-transform: translate(0, -150%);\n            transform: translate(0, -150%);\n    opacity: 0; }\n  45% {\n    opacity: 0; }\n  100% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n    opacity: 1; } }\n\n@keyframes content-txt {\n  0% {\n    -webkit-transform: translate(0, -150%);\n            transform: translate(0, -150%);\n    opacity: 0; }\n  45% {\n    opacity: 0; }\n  100% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n    opacity: 1; } }\n\n@-webkit-keyframes content-txt-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(0, -250%) rotateX(-90deg);\n            transform: translate(0, -250%) rotateX(-90deg); }\n  1% {\n    -webkit-transform: translate(0, -150%) rotateX(-90deg);\n            transform: translate(0, -150%) rotateX(-90deg); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0, 0) rotateX(0deg);\n            transform: translate(0, 0) rotateX(0deg); } }\n\n@keyframes content-txt-bottom {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(0, -250%) rotateX(-90deg);\n            transform: translate(0, -250%) rotateX(-90deg); }\n  1% {\n    -webkit-transform: translate(0, -150%) rotateX(-90deg);\n            transform: translate(0, -150%) rotateX(-90deg); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0, 0) rotateX(0deg);\n            transform: translate(0, 0) rotateX(0deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.fadeInAnimation = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.fadeInAnimation = true;
        }, 500);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_shared_core_module__ = __webpack_require__("../../../../../src/app/core/shared.core.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__core_shared_core_module__["a" /* SharedCoreModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" scroll-attr>\r\n    <app-social-link></app-social-link>\r\n    <div class=\"row row-right\">\r\n        <app-nav *ngIf=\"device\"></app-nav>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"container-portfolio\">\r\n            <ul class=\"container-portfolio__wrap\">\r\n                <li class=\"portfolio-item\">\r\n                    <div class=\"item-wrap\">\r\n                        <img src=\"./assets/img/portfolio/black-bird.png\" alt=\"\" class=\"portfolio-item__image\">\r\n                        <div class=\"page-link\">\r\n                            <a href=\"https://konstantine811.github.io/fashion/\" target=\"content\" class=\"page-link__inner\">link</a>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n                <li class=\"portfolio-item\">\r\n                    <div class=\"item-wrap\">\r\n                        <img src=\"./assets/img/portfolio/landing-portfolio.png\" alt=\"\" class=\"portfolio-item__image\">\r\n                        <div class=\"page-link\">\r\n                            <a href=\"https://konstantine811.github.io/abrams.github.io/\" target=\"content\" class=\"page-link__inner\">link</a>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  width: 100%;\n  height: 100%; }\n\n.row-right {\n  position: absolute;\n  right: 0;\n  width: 50%; }\n\n.container-portfolio {\n  padding-top: 100px;\n  margin: 0 auto;\n  width: 100%; }\n\n.container-portfolio__wrap {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 103px 0px 0px;\n  margin: 0 auto;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  list-style: none;\n  overflow: hidden; }\n\n.portfolio-item {\n  padding: 10px 10px;\n  cursor: pointer;\n  overflow: hidden;\n  z-index: 1000;\n  opacity: 0;\n  -webkit-transform: translate(0%, -100%);\n          transform: translate(0%, -100%); }\n  .portfolio-item:hover .page-link {\n    -webkit-animation: animation-page-link 0.3s 1 forwards cubic-bezier(1, -0.06, 0, 0.94);\n            animation: animation-page-link 0.3s 1 forwards cubic-bezier(1, -0.06, 0, 0.94); }\n  .portfolio-item:nth-child(1) {\n    -webkit-animation: animation-portfolio-item 1.35s 1 forwards cubic-bezier(0, -0.06, 0, 0.94);\n            animation: animation-portfolio-item 1.35s 1 forwards cubic-bezier(0, -0.06, 0, 0.94); }\n  .portfolio-item:nth-child(2) {\n    -webkit-animation: animation-portfolio-item 2.7s 1 forwards cubic-bezier(0, -0.06, 0, 0.94);\n            animation: animation-portfolio-item 2.7s 1 forwards cubic-bezier(0, -0.06, 0, 0.94); }\n\n.item-wrap {\n  width: 300px;\n  height: 100%;\n  position: relative;\n  border: solid 2px #1e1d1e;\n  transition: all 0.3s ease-in; }\n  .item-wrap:hover {\n    box-shadow: 10px 10px 3px -3px #1e1d1e;\n    -webkit-transform: translate(-2px, -4px);\n            transform: translate(-2px, -4px); }\n\n.portfolio-item__image {\n  width: 100%;\n  height: 100%; }\n\n.page-link {\n  position: absolute;\n  top: 181px;\n  width: 127px;\n  height: 36px;\n  background-color: black;\n  -webkit-transform: translate(-200%, 0);\n          transform: translate(-200%, 0); }\n\na.page-link__inner {\n  text-decoration: none;\n  color: #ffffff;\n  text-align: center;\n  width: 100%;\n  display: block;\n  font-size: 20px;\n  padding-top: 4px;\n  transition: text-shadow 0.2s ease-in; }\n  a.page-link__inner:hover {\n    text-shadow: 5px 5px 2px #ffffff; }\n\n@-webkit-keyframes animation-page-link {\n  0% {\n    -webkit-transform: translate(-200%, 0);\n            transform: translate(-200%, 0); }\n  100% {\n    -webkit-transform: translate(-9%, 0);\n            transform: translate(-9%, 0); } }\n\n@keyframes animation-page-link {\n  0% {\n    -webkit-transform: translate(-200%, 0);\n            transform: translate(-200%, 0); }\n  100% {\n    -webkit-transform: translate(-9%, 0);\n            transform: translate(-9%, 0); } }\n\n@-webkit-keyframes animation-portfolio-item {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(0%, -100%);\n            transform: translate(0%, -100%); }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0%, 0%);\n            transform: translate(0%, 0%); } }\n\n@keyframes animation-portfolio-item {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate(0%, -100%);\n            transform: translate(0%, -100%); }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate(0%, 0%);\n            transform: translate(0%, 0%); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_device_info_service__ = __webpack_require__("../../../../../src/app/core/services/device-info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PortfolioComponent = (function () {
    function PortfolioComponent(deviceInfo) {
        this.deviceInfo = deviceInfo;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        this.device = this.deviceInfo.deviceDesktop();
    };
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__("../../../../../src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_device_info_service__["a" /* DeviceInfoService */]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_shared_core_module__ = __webpack_require__("../../../../../src/app/core/shared.core.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PortfolioModule = (function () {
    function PortfolioModule() {
    }
    PortfolioModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__core_shared_core_module__["a" /* SharedCoreModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__portfolio_component__["a" /* PortfolioComponent */]
            ]
        })
    ], PortfolioModule);
    return PortfolioModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navigation navigation-desktop on-desktop\">\n    <div class=\"navigation-desktop__wrap\" [class.navigation-desktop__wrap--black]='colorNav'>\n        <button [routerLink]=\"['/home']\"  [routerLinkActive]=\"['is-active']\"  class=\"navigation__link navigation-desktop__link\" [class.no-opacity]=\"opacity\" [class.navigation-desktop__link--animate]=\"animate\">Home</button>\n        <button [routerLink]=\"['/skills']\" [routerLinkActive]=\"['is-active']\"  class=\"navigation__link navigation-desktop__link\" [class.no-opacity]=\"opacity\" [class.navigation-desktop__link--animate]=\"animate\">Skills</button>\n        <button [routerLink]=\"['/portfolio']\" [routerLinkActive]=\"['is-active']\"   class=\"navigation__link navigation-desktop__link\" [class.no-opacity]=\"opacity\" [class.navigation-desktop__link--animate]=\"animate\">Portfolio</button>\n     </div> \n </nav>\n <nav class=\"navigation navigation-mobile on-mobile\">\n    <div class=\"navigation-mobile__wrap\" [class.navigation-desktop__wrap--black]='color'>\n        <button [routerLink]=\"['/home']\"  [routerLinkActive]=\"['is-active-mobile']\"  class=\"navigation__link navigation-mobile__link\">\n            <div class=\"content-button\">\n                <span class=\"icon-home\"></span>Home\n            </div>\n        </button>\n        <button [routerLink]=\"['/skills']\" [routerLinkActive]=\"['is-active-mobile']\"  class=\"navigation__link navigation-mobile__link\">\n            <div class=\"content-button\">\n                <span class=\"icon-skills\"></span> Skills\n            </div>\n        </button>\n        <button [routerLink]=\"['/portfolio']\" [routerLinkActive]=\"['is-active-mobile']\"   class=\"navigation__link navigation-mobile__link\">\n            <div class=\"content-button\">\n                <span class=\"icon-portfolio\"></span> Portfolio\n            </div>\n        </button>\n    </div> \n</nav>"

/***/ }),

/***/ "../../../../../src/app/shared/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-height: 800px) {\n  :host .container-box__content {\n    width: 90vw;\n    height: 90vh;\n    top: 5vh;\n    left: 5vw; }\n  :host .skills-black-box {\n    right: 55vw; } }\n\n@media only screen and (max-width: 1024px) {\n  :host .container-box__content {\n    overflow-y: scroll;\n    height: auto; }\n  :host .column-tablet-12 {\n    width: 100%; }\n  :host .navigation-desktop {\n    margin-right: 50px; }\n  :host .on-mobile {\n    display: block; }\n  :host .on-desktop {\n    display: none; } }\n\n:host {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.navigation-desktop {\n  margin-top: 0;\n  margin-right: 200px;\n  height: 100px;\n  overflow: hidden; }\n\n.navigation-desktop__wrap {\n  display: inline-block;\n  height: 200px;\n  position: relative;\n  top: 30px;\n  width: 100%;\n  min-width: 225px;\n  text-align: center; }\n\n.navigation-desktop__wrap--black .navigation-desktop__link {\n  color: #1e1d1e; }\n  .navigation-desktop__wrap--black .navigation-desktop__link:hover {\n    box-shadow: 0px 1px 13px 2px #1e1d1e;\n    color: #ffffff;\n    background-color: rgba(30, 29, 30, 0.9); }\n\n.navigation-desktop__wrap--black .is-active {\n  border-bottom: 1px solid #1e1d1e !important; }\n\n.navigation__link {\n  color: #ffffff;\n  font-family: 'Advent Pro', sans;\n  text-decoration: none;\n  font-weight: 400;\n  font-size: 14px;\n  display: inline-block;\n  background: transparent;\n  border: none;\n  outline: none;\n  cursor: pointer; }\n\n.navigation-desktop__link {\n  padding: 0px 10px;\n  transition: all 0.4s ease-in-out; }\n  .navigation-desktop__link:hover {\n    box-shadow: 0px 1px 13px -4px #ffffff; }\n\n.navigation-desktop__link--animate {\n  -webkit-transform: translate(0, -300px);\n          transform: translate(0, -300px); }\n  .navigation-desktop__link--animate:nth-child(1) {\n    -webkit-animation: trans-txt 1.14s 1 forwards cubic-bezier(0, 1, 0.8, 1);\n            animation: trans-txt 1.14s 1 forwards cubic-bezier(0, 1, 0.8, 1); }\n  .navigation-desktop__link--animate:nth-child(2) {\n    -webkit-animation: trans-txt 2.28s 1 forwards cubic-bezier(0, 1, 0.8, 1);\n            animation: trans-txt 2.28s 1 forwards cubic-bezier(0, 1, 0.8, 1); }\n  .navigation-desktop__link--animate:nth-child(3) {\n    -webkit-animation: trans-txt 3.42s 1 forwards cubic-bezier(0, 1, 0.8, 1);\n            animation: trans-txt 3.42s 1 forwards cubic-bezier(0, 1, 0.8, 1); }\n\n.no-opacity {\n  opacity: 0; }\n\n.navigation-mobile__link {\n  width: 100%;\n  margin-bottom: 20px;\n  opacity: 0; }\n  .navigation-mobile__link:nth-child(1) {\n    -webkit-animation: opacity-txt 3.8s 4s 1 forwards cubic-bezier(0, 1, 0.8, 1);\n            animation: opacity-txt 3.8s 4s 1 forwards cubic-bezier(0, 1, 0.8, 1); }\n  .navigation-mobile__link:nth-child(2) {\n    -webkit-animation: opacity-txt 7.6s 4s 1 forwards cubic-bezier(0, 1, 0.8, 1);\n            animation: opacity-txt 7.6s 4s 1 forwards cubic-bezier(0, 1, 0.8, 1); }\n  .navigation-mobile__link:nth-child(3) {\n    -webkit-animation: opacity-txt 11.4s 4s 1 forwards cubic-bezier(0, 1, 0.8, 1);\n            animation: opacity-txt 11.4s 4s 1 forwards cubic-bezier(0, 1, 0.8, 1); }\n\n[class^=\"icon-\"]:before, [class*=\" icon-\"]:before {\n  display: block;\n  font-size: 24px; }\n\n.content-button {\n  width: 100%;\n  box-shadow: 2px 4px 3px #404040, inset -1px -1px 5px #7b7b7b;\n  padding: 7px 0px;\n  border-radius: 2px; }\n\n.is-active-mobile .content-button {\n  width: 100%;\n  box-shadow: none;\n  padding: 7px 0px;\n  border-radius: 2px; }\n\n@-webkit-keyframes trans-txt {\n  0% {\n    -webkit-transform: translate(0, -300px);\n            transform: translate(0, -300px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n    opacity: 1; } }\n\n@keyframes trans-txt {\n  0% {\n    -webkit-transform: translate(0, -300px);\n            transform: translate(0, -300px);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n    opacity: 1; } }\n\n@-webkit-keyframes opacity-txt {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes opacity-txt {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_device_info_service__ = __webpack_require__("../../../../../src/app/core/services/device-info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = (function () {
    function NavComponent(deviceInfo, router) {
        this.deviceInfo = deviceInfo;
        this.router = router;
        this.opacity = true;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.opacity = true;
        setTimeout(function () {
            _this.animate = true;
        }, 3300);
        this.desktop = this.deviceInfo.deviceDesktop();
        this.router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]) {
                switch (val.url) {
                    case '/skills':
                        _this.colorNav = true;
                        break;
                    case '/portfolio':
                        _this.colorNav = true;
                        break;
                    case '/home':
                        _this.colorNav = false;
                        break;
                }
            }
        });
        if (this.router.url === '/home') {
            this.colorNav = false;
        }
        else {
            this.colorNav = true;
        }
    };
    NavComponent.prototype.goTo = function (path) {
        this.router.navigate([path]);
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/shared/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_services_device_info_service__["a" /* DeviceInfoService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/progress-bar/progress-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-progress-bar\">\n    <div class=\"progress-bar\">\n        <div class=\"progress progress-html\"></div>\n        <div class=\"progress-bar-skill\">\n            <div class=\"progress-bar-skill__inner\">\n                HTML5 \n            </div>  \n        </div>\n    </div>\n    <div class=\"progress-bar\">\n        <div class=\"progress progress-css\"></div>\n        <div class=\"progress-bar-skill\">\n            <div class=\"progress-bar-skill__inner\">\n            CSS3\n            </div>  \n        </div>\n    </div>\n    <div class=\"progress-bar\">\n        <div class=\"progress progress-js\"></div>\n        <div class=\"progress-bar-skill\">\n            <div class=\"progress-bar-skill__inner\">\n                JavaScript\n            </div>  \n        </div>\n    </div>\n    <div class=\"progress-bar\">\n        <div class=\"progress progress-angular\"></div>\n        <div class=\"progress-bar-skill\">\n            <div class=\"progress-bar-skill__inner\">\n                Angular 2+\n            </div>  \n        </div>\n    </div>\n    <div class=\"progress-bar\">\n        <div class=\"progress progress-node\"></div>\n        <div class=\"progress-bar-skill\">\n            <div class=\"progress-bar-skill__inner\">\n            Node JS\n            </div>  \n        </div>\n    </div>\n    <div class=\"progress-bar\">\n        <div class=\"progress progress-photoshop\"></div>\n        <div class=\"progress-bar-skill\">\n            <div class=\"progress-bar-skill__inner\">\n            Photoshop\n            </div>  \n        </div>\n    </div>\n    <div class=\"progress-bar\">\n        <div class=\"progress progress-illustrator\"></div>\n        <div class=\"progress-bar-skill\">\n            <div class=\"progress-bar-skill__inner\">\n            Illustrator\n            </div>  \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/progress-bar/progress-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 1024px) {\n  :host .container-progress-bar[_ngcontent-c4] {\n    bottom: 0px; } }\n\n:host {\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  display: block; }\n\n.container-progress-bar {\n  position: relative;\n  bottom: 60px;\n  z-index: 101; }\n\n.progress-bar {\n  width: 306px;\n  height: 11px;\n  background-color: #1d1b1d;\n  padding: 3px;\n  border-radius: 3px;\n  margin: 50px auto;\n  position: relative; }\n\n.progress {\n  width: 0px;\n  height: 2px;\n  border: dotted white 2px;\n  height: 2px; }\n\n.progress-bar-skill {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  height: 60px;\n  position: absolute;\n  right: 0;\n  overflow: hidden;\n  -webkit-perspective: 200px;\n          perspective: 200px; }\n\n.progress-bar-skill__inner {\n  background-color: black;\n  color: white;\n  padding: 5px;\n  border-radius: 1px;\n  -webkit-transform-origin: top;\n          transform-origin: top;\n  -webkit-transform: rotateX(-100deg);\n          transform: rotateX(-100deg);\n  -webkit-animation: skill 0.9s 3.5s 1 forwards cubic-bezier(0.82, -0.27, 0.33, 0.37);\n          animation: skill 0.9s 3.5s 1 forwards cubic-bezier(0.82, -0.27, 0.33, 0.37); }\n\n.progress-html {\n  -webkit-animation: progress-html 2.4s 1.5s 1 forwards cubic-bezier(0.58, 1.31, 0.84, -0.17);\n          animation: progress-html 2.4s 1.5s 1 forwards cubic-bezier(0.58, 1.31, 0.84, -0.17); }\n\n.progress-css {\n  -webkit-animation: progress-css 2.4s 1.5s 1 forwards cubic-bezier(0.58, 1.31, 0.84, -0.17);\n          animation: progress-css 2.4s 1.5s 1 forwards cubic-bezier(0.58, 1.31, 0.84, -0.17); }\n\n.progress-js {\n  -webkit-animation: progress-js 2.4s 1.5s 1 forwards cubic-bezier(0.58, 1.31, 0.84, -0.17);\n          animation: progress-js 2.4s 1.5s 1 forwards cubic-bezier(0.58, 1.31, 0.84, -0.17); }\n\n.progress-angular {\n  -webkit-animation: progress-angular 2.4s 1.5s 1 forwards cubic-bezier(0.58, 1.31, 0.84, -0.17);\n          animation: progress-angular 2.4s 1.5s 1 forwards cubic-bezier(0.58, 1.31, 0.84, -0.17); }\n\n.progress-node {\n  -webkit-animation: progress-node 2.4s 1.5s 1 forwards cubic-bezier(0.58, 1.31, 0.84, -0.17);\n          animation: progress-node 2.4s 1.5s 1 forwards cubic-bezier(0.58, 1.31, 0.84, -0.17); }\n\n.progress-photoshop {\n  -webkit-animation: progress-photoshop 2.4s 1.5s 1 forwards cubic-bezier(0.58, 1.31, 0.84, -0.17);\n          animation: progress-photoshop 2.4s 1.5s 1 forwards cubic-bezier(0.58, 1.31, 0.84, -0.17); }\n\n.progress-illustrator {\n  -webkit-animation: progress-illustrator 2.4s 1.5s 1 forwards cubic-bezier(0.58, 1.31, 0.84, -0.17);\n          animation: progress-illustrator 2.4s 1.5s 1 forwards cubic-bezier(0.58, 1.31, 0.84, -0.17); }\n\n@-webkit-keyframes progress-html {\n  0% {\n    width: 0px; }\n  100% {\n    width: 250px; } }\n\n@keyframes progress-html {\n  0% {\n    width: 0px; }\n  100% {\n    width: 250px; } }\n\n@-webkit-keyframes progress-css {\n  0% {\n    width: 0px; }\n  100% {\n    width: 220px; } }\n\n@keyframes progress-css {\n  0% {\n    width: 0px; }\n  100% {\n    width: 220px; } }\n\n@-webkit-keyframes progress-js {\n  0% {\n    width: 0px; }\n  100% {\n    width: 180px; } }\n\n@keyframes progress-js {\n  0% {\n    width: 0px; }\n  100% {\n    width: 180px; } }\n\n@-webkit-keyframes progress-angular {\n  0% {\n    width: 0px; }\n  100% {\n    width: 140px; } }\n\n@keyframes progress-angular {\n  0% {\n    width: 0px; }\n  100% {\n    width: 140px; } }\n\n@-webkit-keyframes progress-node {\n  0% {\n    width: 0px; }\n  100% {\n    width: 120px; } }\n\n@keyframes progress-node {\n  0% {\n    width: 0px; }\n  100% {\n    width: 120px; } }\n\n@-webkit-keyframes progress-photoshop {\n  0% {\n    width: 0px; }\n  100% {\n    width: 160px; } }\n\n@keyframes progress-photoshop {\n  0% {\n    width: 0px; }\n  100% {\n    width: 160px; } }\n\n@-webkit-keyframes progress-illustrator {\n  0% {\n    width: 0px; }\n  100% {\n    width: 140px; } }\n\n@keyframes progress-illustrator {\n  0% {\n    width: 0px; }\n  100% {\n    width: 140px; } }\n\n@-webkit-keyframes skill {\n  0% {\n    -webkit-transform: rotateX(-100deg);\n            transform: rotateX(-100deg); }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg); } }\n\n@keyframes skill {\n  0% {\n    -webkit-transform: rotateX(-100deg);\n            transform: rotateX(-100deg); }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/progress-bar/progress-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
    };
    ProgressBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-progress-bar',
            template: __webpack_require__("../../../../../src/app/shared/progress-bar/progress-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/progress-bar/progress-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav_nav_component__ = __webpack_require__("../../../../../src/app/shared/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_bar_progress_bar_component__ = __webpack_require__("../../../../../src/app/shared/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__social_link_social_link_component__ = __webpack_require__("../../../../../src/app/shared/social-link/social-link.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__nav_nav_component__["a" /* NavComponent */], __WEBPACK_IMPORTED_MODULE_3__progress_bar_progress_bar_component__["a" /* ProgressBarComponent */], __WEBPACK_IMPORTED_MODULE_5__social_link_social_link_component__["a" /* SocialLinkComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__nav_nav_component__["a" /* NavComponent */], __WEBPACK_IMPORTED_MODULE_3__progress_bar_progress_bar_component__["a" /* ProgressBarComponent */], __WEBPACK_IMPORTED_MODULE_5__social_link_social_link_component__["a" /* SocialLinkComponent */]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/social-link/social-link.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <app-nav></app-nav>\n      <div class=\"contacts\">\n        <div class=\"contacts-wrap\">\n          <p class=\"contacts-title\">Contacts:</p>\n          <ul class=\"link-wrap\">\n            <li class=\"link-wrap__item link-wrap__item--first\">\n              <a href=\"https://github.com/konstantine811\" target=\"content\" class=\"link-wrap__inner\">\n                <div class=\"link-image\">\n                  <img src=\"./assets/img/link/github.png\" alt=\"\" class=\"link-image__inner link-image__inner--first\">\n                </div>\n                <span class=\"link-text\">My Github</span>\n              </a>\n            </li>\n            <li class=\"link-wrap__item link-wrap__item--second\">\n                <a href=\"https://www.linkedin.com/in/%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD-%D0%B0%D0%B1%D1%80%D0%B0%D0%BC%D0%BA%D0%B8%D0%BD-959584142/\" target=\"content\" class=\"link-wrap__inner\">\n                  <div class=\"link-image\">\n                    <img src=\"./assets/img/link/linkedin.png\" alt=\"\" class=\"link-image__inner link-image__inner--second\">\n                  </div>\n                  <span class=\"link-text\">Linkedin</span>\n                </a>\n              </li>\n              <li class=\"link-wrap__item link-wrap__item--third\">\n                  <a href=\"https://www.facebook.com/constaine.abrams\" target=\"content\" class=\"link-wrap__inner\">\n                    <div class=\"link-image\">\n                      <img src=\"./assets/img/link/facebook.jpg\" alt=\"\" class=\"link-image__inner link-image__inner--third\">\n                    </div>\n                    <span class=\"link-text\">Facebook</span>\n                  </a>\n                </li>\n          </ul>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/social-link/social-link.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%;\n  min-width: 60px;\n  height: 90%;\n  min-height: 500px;\n  background-color: #1d1b1d;\n  position: absolute;\n  -webkit-transform: translate(-100%, 0);\n          transform: translate(-100%, 0);\n  top: 0;\n  right: 100%;\n  z-index: 9;\n  transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-animation: content-link-black 3.5s 1 forwards cubic-bezier(0.4, 0, 0.2, 1);\n          animation: content-link-black 3.5s 1 forwards cubic-bezier(0.4, 0, 0.2, 1); }\n\n.contacts {\n  position: absolute;\n  bottom: 0;\n  width: 100%; }\n\n.contacts-wrap {\n  opacity: 0;\n  -webkit-animation: animation-link 2s 4s 1 forwards cubic-bezier(0.4, 0, 0.2, 1);\n          animation: animation-link 2s 4s 1 forwards cubic-bezier(0.4, 0, 0.2, 1); }\n\n.contacts-title {\n  color: rgba(255, 255, 255, 0.4);\n  text-align: center; }\n\n.link-wrap {\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n\n.link-wrap__item {\n  list-style: none;\n  width: 100%;\n  display: block;\n  opacity: 0;\n  text-align: center;\n  padding-bottom: 15px; }\n\n.link-wrap__item--first {\n  -webkit-animation: animation-link 2s 5s 1 forwards cubic-bezier(0.4, 0, 0.2, 1);\n          animation: animation-link 2s 5s 1 forwards cubic-bezier(0.4, 0, 0.2, 1); }\n\n.link-wrap__item--second {\n  -webkit-animation: animation-link 2s 5.5s 1 forwards cubic-bezier(0.4, 0, 0.2, 1);\n          animation: animation-link 2s 5.5s 1 forwards cubic-bezier(0.4, 0, 0.2, 1); }\n\n.link-wrap__item--third {\n  -webkit-animation: animation-link 2s 6s 1 forwards cubic-bezier(0.4, 0, 0.2, 1);\n          animation: animation-link 2s 6s 1 forwards cubic-bezier(0.4, 0, 0.2, 1); }\n\n.link-wrap__inner {\n  text-decoration: none;\n  color: white; }\n\n.link-image__inner {\n  width: 29%;\n  background-color: white;\n  border: 2px solid silver;\n  border-radius: 24%;\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n\n.link-image__inner--first {\n  -webkit-animation: animation-image-link 0.4s 5.4s 1 forwards cubic-bezier(0.9, 1, 0.2, 1);\n          animation: animation-image-link 0.4s 5.4s 1 forwards cubic-bezier(0.9, 1, 0.2, 1); }\n\n.link-image__inner--second {\n  -webkit-animation: animation-image-link 0.4s 6s 1 forwards cubic-bezier(0.9, 1, 0.2, 1);\n          animation: animation-image-link 0.4s 6s 1 forwards cubic-bezier(0.9, 1, 0.2, 1); }\n\n.link-image__inner--third {\n  -webkit-animation: animation-image-link 0.4s 6.6s 1 forwards cubic-bezier(0.9, 1, 0.2, 1);\n          animation: animation-image-link 0.4s 6.6s 1 forwards cubic-bezier(0.9, 1, 0.2, 1); }\n\n.link-text {\n  font-size: 12px; }\n\n@-webkit-keyframes content-link-black {\n  0% {\n    -webkit-transform: translate(-100%, 0);\n            transform: translate(-100%, 0);\n    right: 90%; }\n  50% {\n    width: 80%;\n    -webkit-transform: translate(-20%, 0);\n            transform: translate(-20%, 0); }\n  100% {\n    right: 0;\n    width: 10%;\n    -webkit-transform: translate(0%, 0%);\n            transform: translate(0%, 0%); } }\n\n@keyframes content-link-black {\n  0% {\n    -webkit-transform: translate(-100%, 0);\n            transform: translate(-100%, 0);\n    right: 90%; }\n  50% {\n    width: 80%;\n    -webkit-transform: translate(-20%, 0);\n            transform: translate(-20%, 0); }\n  100% {\n    right: 0;\n    width: 10%;\n    -webkit-transform: translate(0%, 0%);\n            transform: translate(0%, 0%); } }\n\n@-webkit-keyframes animation-link {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes animation-link {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes animation-image-link {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes animation-image-link {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/social-link/social-link.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialLinkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialLinkComponent = (function () {
    function SocialLinkComponent() {
        this.fadeInAnimation = false;
    }
    SocialLinkComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.fadeInAnimation = true;
        }, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('attr.scroll-attr')
        // @HostBinding('class.content-link')
        ,
        __metadata("design:type", Object)
    ], SocialLinkComponent.prototype, "fadeInAnimation", void 0);
    SocialLinkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-social-link',
            template: __webpack_require__("../../../../../src/app/shared/social-link/social-link.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/social-link/social-link.component.scss")],
            // tslint:disable-next-line:use-host-property-decorator
            host: {
                '[class.content-link]': 'true',
                '[class.content-link-animation]': 'fadeInAnimation'
            }
        }),
        __metadata("design:paramtypes", [])
    ], SocialLinkComponent);
    return SocialLinkComponent;
}());



/***/ }),

/***/ "../../../../../src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" scroll-attr>\n    <app-social-link></app-social-link>\n    <div class=\"row\">\n        <app-nav class=\"on-desktop\"></app-nav>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6 col-sm-12 col-xs-12\">\n            <app-progress-bar></app-progress-bar>\n        </div>\n        <div class=\"col-md-6 col-sm-12 col-xs-12\">\n            <div class=\"container-skills\">\n                <div class=\"skills-txt on-scroll-text-white\">\n                    <p class=\"skills-txt__inner\">\n                        My web development experience is 1+ years. \n                        I have the knowledge and practical experience of HTML5 and the Jade, HandleBars re-processors.  \n                        CSS3 and re-processors Sass (Scss), Styles and Less.  \n                        And also I use Bootstrap, Semantic UI frameworks.  \n                        The code is written according to the rules of BEM.  \n                        Experience in designing design sites using such products from Adobe as: Photshop and Illustrator.  \n                        Practical experience and application of various specialties using SVG image format.  \n                        Javascrit (ES5, ES6, TypeScript) and the JQuery library.  \n                        Build a project using Gulp or Webpack.  The Angular2 + framework.  \n                        Writing a backend service using NodeJs as well as the Express framework.\n                    </p>\n                </div>  \n            </div>\n        </div>\n        <div class=\"skills-black-box on-desktop\">\n            <div class=\"skills-black-box__inner\"></div>\n        </div> \n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (max-width: 1024px) {\n  :host .skills-txt {\n    background-color: #1e1d1e;\n    border-radius: 8px;\n    box-shadow: 4px 8px 23px 0px #1e1d1e;\n    width: 80%;\n    -webkit-transform: translate(-200%, 0);\n            transform: translate(-200%, 0);\n    -webkit-animation: animation-txt-responsive 2.5s 3.3s 1 forwards cubic-bezier(0.74, 0.34, 0, 1.16);\n            animation: animation-txt-responsive 2.5s 3.3s 1 forwards cubic-bezier(0.74, 0.34, 0, 1.16); }\n  :host .skills-txt__inner {\n    text-align: center;\n    width: 100%;\n    max-width: 100%;\n    margin-top: 0;\n    right: 0;\n    padding: 15px 15px;\n    font-size: 19px; } }\n\n@media only screen and (max-height: 800px) {\n  :host .container-box__content {\n    width: 90vw;\n    height: 90vh;\n    top: 5vh;\n    left: 5vw; }\n  :host .skills-black-box {\n    right: 55vw; } }\n\n@media only screen and (max-width: 1024px) {\n  :host .container-box__content {\n    overflow-y: scroll;\n    height: auto; }\n  :host .column-tablet-12 {\n    width: 100%; }\n  :host .navigation-desktop {\n    margin-right: 50px; }\n  :host .on-mobile {\n    display: block; }\n  :host .on-desktop {\n    display: none; } }\n\n:host {\n  display: block;\n  width: 100%;\n  height: 100%; }\n\n.skills-txt__inner {\n  text-align: left;\n  width: 80%;\n  max-width: 500px;\n  margin-top: 84px;\n  color: #ffffff;\n  z-index: 10;\n  position: relative;\n  right: 6.7vw; }\n\n.skills-black-box {\n  position: absolute;\n  z-index: 1;\n  right: 51vw;\n  top: 87px; }\n\n.skills-black-box__inner {\n  width: 0;\n  height: 400px;\n  max-width: 669px;\n  background-color: #1e1d1e;\n  position: absolute;\n  border-radius: 8px;\n  box-shadow: 4px 8px 23px 0px #1e1d1e;\n  -webkit-animation: animation-black-skills 2.5s 4s 1 forwards cubic-bezier(0.74, 0.34, 0, 1.16);\n          animation: animation-black-skills 2.5s 4s 1 forwards cubic-bezier(0.74, 0.34, 0, 1.16); }\n\n@-webkit-keyframes animation-black-skills {\n  0% {\n    width: 0; }\n  100% {\n    width: 42vw; } }\n\n@keyframes animation-black-skills {\n  0% {\n    width: 0; }\n  100% {\n    width: 42vw; } }\n\n@-webkit-keyframes animation-txt-responsive {\n  0% {\n    -webkit-transform: translate(-200%, 0);\n            transform: translate(-200%, 0); }\n  100% {\n    -webkit-transform: translate(0%, 0);\n            transform: translate(0%, 0); } }\n\n@keyframes animation-txt-responsive {\n  0% {\n    -webkit-transform: translate(-200%, 0);\n            transform: translate(-200%, 0); }\n  100% {\n    -webkit-transform: translate(0%, 0);\n            transform: translate(0%, 0); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_device_info_service__ = __webpack_require__("../../../../../src/app/core/services/device-info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = (function () {
    function SkillsComponent(deviceInfo) {
        this.deviceInfo = deviceInfo;
    }
    SkillsComponent.prototype.ngOnInit = function () {
        this.device = this.deviceInfo.deviceDesktop();
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__("../../../../../src/app/skills/skills.component.html"),
            styles: [__webpack_require__("../../../../../src/app/skills/skills.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_device_info_service__["a" /* DeviceInfoService */]])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/skills/skills.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_shared_core_module__ = __webpack_require__("../../../../../src/app/core/shared.core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SkillsModule = (function () {
    function SkillsModule() {
    }
    SkillsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__core_shared_core_module__["a" /* SharedCoreModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__skills_component__["a" /* SkillsComponent */]]
        })
    ], SkillsModule);
    return SkillsModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map