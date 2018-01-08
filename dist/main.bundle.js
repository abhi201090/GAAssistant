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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='maroon' data-image=\"\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/sidebar-4.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMaps('maps')\">\n            <app-footer></app-footer>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__ = __webpack_require__("../../../../perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //$.material.init();
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            _this.navbar.sidebarClose();
            if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* NavigationStart */]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* NavigationEnd */]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* NavigationEnd */]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */](elemSidebar);
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AppComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps.update();
        }
    };
    AppComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_components_module__ = __webpack_require__("../../../../../src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__table_list_table_list_component__ = __webpack_require__("../../../../../src/app/table-list/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__typography_typography_component__ = __webpack_require__("../../../../../src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__icons_icons_component__ = __webpack_require__("../../../../../src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__maps_maps_component__ = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__upgrade_upgrade_component__ = __webpack_require__("../../../../../src/app/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_datatable_datatable_component__ = __webpack_require__("../../../../../src/app/components/datatable/datatable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__servcies_user_service__ = __webpack_require__("../../../../../src/app/servcies/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_datatable_dialog_component__ = __webpack_require__("../../../../../src/app/components/datatable/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__terms_terms_component__ = __webpack_require__("../../../../../src/app/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__terms_addtermdialog_component__ = __webpack_require__("../../../../../src/app/terms/addtermdialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__terms_viewtermdialog_component__ = __webpack_require__("../../../../../src/app/terms/viewtermdialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__terms_edittermdialog_component__ = __webpack_require__("../../../../../src/app/terms/edittermdialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__terms_deletetermdialog_component__ = __webpack_require__("../../../../../src/app/terms/deletetermdialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_datepicker__ = __webpack_require__("../../../../ng2-datepicker/bundles/ng2-datepicker.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_datepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_ng2_datepicker__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__table_list_table_list_component__["a" /* TableListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__typography_typography_component__["a" /* TypographyComponent */],
                __WEBPACK_IMPORTED_MODULE_14__icons_icons_component__["a" /* IconsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__maps_maps_component__["a" /* MapsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__notifications_notifications_component__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__upgrade_upgrade_component__["a" /* UpgradeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_datatable_datatable_component__["a" /* DataTableComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_datatable_dialog_component__["a" /* DialogContent */],
                __WEBPACK_IMPORTED_MODULE_24__terms_terms_component__["a" /* ManageTerms */],
                __WEBPACK_IMPORTED_MODULE_25__terms_addtermdialog_component__["a" /* AddTermDialogContent */],
                __WEBPACK_IMPORTED_MODULE_26__terms_viewtermdialog_component__["a" /* ViewTermDialog */],
                __WEBPACK_IMPORTED_MODULE_27__terms_edittermdialog_component__["a" /* EditTermDialog */],
                __WEBPACK_IMPORTED_MODULE_28__terms_deletetermdialog_component__["a" /* DeleteTermDialog */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material__["f" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material__["b" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material__["d" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_22_ng2_bootstrap_modal__["BootstrapModalModule"],
                __WEBPACK_IMPORTED_MODULE_29_ng2_datepicker__["NgDatepickerModule"],
                __WEBPACK_IMPORTED_MODULE_6_ngx_loading__["a" /* LoadingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_21__servcies_user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_23__components_datatable_dialog_component__["a" /* DialogContent */], __WEBPACK_IMPORTED_MODULE_25__terms_addtermdialog_component__["a" /* AddTermDialogContent */], __WEBPACK_IMPORTED_MODULE_26__terms_viewtermdialog_component__["a" /* ViewTermDialog */], __WEBPACK_IMPORTED_MODULE_27__terms_edittermdialog_component__["a" /* EditTermDialog */], __WEBPACK_IMPORTED_MODULE_28__terms_deletetermdialog_component__["a" /* DeleteTermDialog */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__table_list_table_list_component__ = __webpack_require__("../../../../../src/app/table-list/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__typography_typography_component__ = __webpack_require__("../../../../../src/app/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__icons_icons_component__ = __webpack_require__("../../../../../src/app/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__maps_maps_component__ = __webpack_require__("../../../../../src/app/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notifications_notifications_component__ = __webpack_require__("../../../../../src/app/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__upgrade_upgrade_component__ = __webpack_require__("../../../../../src/app/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__terms_terms_component__ = __webpack_require__("../../../../../src/app/terms/terms.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'user-profile', component: __WEBPACK_IMPORTED_MODULE_5__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'terms', component: __WEBPACK_IMPORTED_MODULE_12__terms_terms_component__["a" /* ManageTerms */] },
    { path: 'table-list', component: __WEBPACK_IMPORTED_MODULE_6__table_list_table_list_component__["a" /* TableListComponent */] },
    { path: 'typography', component: __WEBPACK_IMPORTED_MODULE_7__typography_typography_component__["a" /* TypographyComponent */] },
    { path: 'icons', component: __WEBPACK_IMPORTED_MODULE_8__icons_icons_component__["a" /* IconsComponent */] },
    { path: 'maps', component: __WEBPACK_IMPORTED_MODULE_9__maps_maps_component__["a" /* MapsComponent */] },
    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_10__notifications_notifications_component__["a" /* NotificationsComponent */] },
    { path: 'upgrade', component: __WEBPACK_IMPORTED_MODULE_11__upgrade_upgrade_component__["a" /* UpgradeComponent */] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/datatable/datatable.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.example-header {\r\n  min-height: 64px;\r\n  padding: 8px 24px 0;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n  \r\n  .mat-table {\r\n    overflow-y: hidden; \r\n    overflow-x: hidden;\r\n    max-height: auto;\r\n  }\r\n\r\n .header-style {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    border-bottom:1px solid rgba(0 , 0, 0, 0.2);\r\n    /*border-bottom-width: 1px;\r\n    border-bottom-style: solid;*/\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    min-height: 48px;\r\n    padding: 0 24px;\r\n    font-weight: 500;\r\n    color:#C32626;\r\n  }\r\n\r\n  .row-style {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    border-bottom:1px solid rgba(0 , 0, 0, 0.2);\r\n    /*border-bottom-width: 1px;\r\n    border-bottom-style: solid;*/\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    min-height: 48px;\r\n    padding: 0 24px;\r\n    font-weight: 300;\r\n  }\r\n\r\n\r\n  .new-mat-paginator .mat-paginator-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n    margin-right: 20px;\r\n    min-height: 56px;\r\n    padding: 0 8px;\r\n    -ms-flex-wrap: wrap-reverse;\r\n        flex-wrap: wrap-reverse;\r\n}\r\n\r\n.new-mat-paginator .mat-paginator-page-size-label{\r\n  font-weight: 500;\r\n}\r\n\r\n.new-mat-paginator .mat-button, .mat-icon-button {\r\n  background: 0 0;\r\n}\r\n.new-mat-paginator .mat-paginator-decrement, .mat-paginator-increment{\r\n  border-top: 2px solid rgba(0,0,0,.84);\r\n  border-right: 2px solid rgba(0,0,0,.84);\r\n}\r\n\r\n.new-mat-paginator .mat-icon-button[disabled] .mat-paginator-decrement, .mat-icon-button[disabled] .mat-paginator-increment{\r\n  border-top: 2px solid rgba(0,0,0,.44);\r\n  border-right: 2px solid rgba(0,0,0,.44);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/datatable/datatable.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-table\">\r\n        <div>\r\n                <button class=\"btn btn-md btn-success\">Add Job</button>\r\n        </div><br>\r\n        <div >\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Filter\" style=\"width: 500px;\" (keyup)=\"applyFilter($event.target.value)\">\r\n        </div><br>\r\n        <mat-table [dataSource]=\"ndata\" matSort>\r\n                <ng-container matColumnDef=\"name\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let person\"> {{person.name}} </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"email\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let person\"> {{person.email}} </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"jobTitle\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Job Title </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let person\"> {{person.jobTitle}} </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"active\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Active </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let person\"> {{person.active}} </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"phoneNumber\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Phone Number </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let person\"> {{person.phoneNumber}} </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"date\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Date </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let person\"> {{person.date}} </mat-cell>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"action\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> Actions </mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let person\"><span>\r\n                                <button style=\"background: transparent; border:none; color: #00BCD4;\" (click)=\"opendialog(person)\"><i class=\"material-icons\">visibility</i></button>\r\n                                <button style=\"background: transparent; border:none; color:#FF9800;\"><i class=\"material-icons\">mode_edit</i></button>\r\n                                <button style=\"background: transparent; border:none; color:#C62828;\"><i class=\"material-icons\">delete</i></button>\r\n                        </span>\r\n                        </mat-cell>\r\n                </ng-container>\r\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"header-style\"></mat-header-row>\r\n                <mat-row *matRowDef=\"let row; columns: displayedColumns\" class=\"row-style\"></mat-row>\r\n        </mat-table>\r\n        <mat-paginator [pageSize]=\"10\">\r\n        </mat-paginator>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/datatable/datatable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sampledata__ = __webpack_require__("../../../../../src/app/components/datatable/sampledata.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servcies_user_service__ = __webpack_require__("../../../../../src/app/servcies/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog_component__ = __webpack_require__("../../../../../src/app/components/datatable/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DataTableComponent = /** @class */ (function () {
    function DataTableComponent(dialogService, userService) {
        this.dialogService = dialogService;
        this.userService = userService;
        this.displayedColumns = ['name', 'email', 'jobTitle', 'active', 'phoneNumber', 'date', 'action'];
        this.ndata = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatTableDataSource */](__WEBPACK_IMPORTED_MODULE_1__sampledata__["a" /* sdata */]);
    }
    DataTableComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.ndata.filter = filterValue;
    };
    DataTableComponent.prototype.opendialog = function (data) {
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_6__dialog_component__["a" /* DialogContent */], data)
            .subscribe(function (isConfirmed) {
            //We get dialog result
            if (isConfirmed) {
                alert('accepted');
            }
            else {
                alert('declined');
            }
        });
    };
    DataTableComponent.prototype.ngAfterViewInit = function () {
        this.ndata.paginator = this.paginator;
        this.ndata.sort = this.sort;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatPaginator */])
    ], DataTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatSort */])
    ], DataTableComponent.prototype, "sort", void 0);
    DataTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'data-table-grid',
            providers: [],
            template: __webpack_require__("../../../../../src/app/components/datatable/datatable.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/datatable/datatable.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            host: {
                'class': 'new-mat-paginator'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal__["DialogService"], __WEBPACK_IMPORTED_MODULE_5__servcies_user_service__["a" /* UserService */]])
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/datatable/dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-new .modal-content {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%) !important;\r\n            transform: translate(-50%, -50%) !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/datatable/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\r\n    <div class=\"modal-body\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <div class=\"card card-nav-tabs\">\r\n                        <div class=\"card-header\" data-background-color=\"purple\">\r\n                            <h4 class=\"title\">Job Details</h4>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <form>\r\n                                        <div class=\"form-group\">\r\n                                            <label>Name</label>\r\n                                            <input type=\"text\" class=\"form-control\" readonly value=\"{{name}}\" />\r\n                                            <br>\r\n                                            <label>Email</label>\r\n                                            <input type=\"text\" class=\"form-control\" readonly value=\"{{email}}\" />\r\n                                            <br>\r\n                                            <label>Job Title</label>\r\n                                            <input type=\"text\" class=\"form-control\" readonly value=\"{{jobTitle}}\" />\r\n                                            <br>\r\n                                            <label>Active</label>\r\n                                            <input type=\"text\" class=\"form-control\" readonly value=\"{{active}}\" />\r\n                                            <br>\r\n                                            <label>Phone Number</label>\r\n                                            <input type=\"text\" class=\"form-control\" readonly value=\"{{phoneNumber}}\" />\r\n                                            <br>\r\n                                            <label>Date</label>\r\n                                            <input type=\"text\" class=\"form-control\" readonly value=\"{{date}}\" />\r\n                                            <br>\r\n                                        </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">OK</button>\r\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">Cancel</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/datatable/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogContent = /** @class */ (function (_super) {
    __extends(DialogContent, _super);
    function DialogContent(dialogService) {
        return _super.call(this, dialogService) || this;
    }
    DialogContent.prototype.confirm = function () {
        // we set dialog result as true on click on confirm button, 
        // then we can get dialog result from caller code 
        this.result = true;
        this.close();
    };
    DialogContent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dialog-data',
            template: __webpack_require__("../../../../../src/app/components/datatable/dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/datatable/dialog.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            host: {
                'class': 'modal-new'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]])
    ], DialogContent);
    return DialogContent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));



/***/ }),

/***/ "../../../../../src/app/components/datatable/sampledata.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sdata; });
var sdata = [
    { "name": "Aaron 2Moore", "email": "Heath44@hotmail.com", "jobTitle": "Regional Configuration Producer", "active": true, "phoneNumber": "611-898-6201", "date": "2015-11-06T07:21:25.510Z" },
    { "name": "Yvonne Conroy Mrs.", "email": "Gideon9@yahoo.com", "jobTitle": "Global Mobility Orchestrator", "active": false, "phoneNumber": "115-850-0969", "date": "2014-12-20T00:48:40.276Z" },
    { "name": "Laron Padberg", "email": "Laney_Huels@hotmail.com", "jobTitle": "Senior Directives Supervisor", "active": false, "phoneNumber": "632-654-3034", "date": "2015-09-29T04:33:38.544Z" },
    { "name": "Dr. Maryam Spinka", "email": "Aletha.Labadie@hotmail.com", "jobTitle": "Dynamic Mobility Associate", "active": true, "phoneNumber": "547-345-0067", "date": "2015-09-23T01:13:39.320Z" },
    { "name": "Kiley Baumbach", "email": "Rogelio24@hotmail.com", "jobTitle": "Principal Metrics Orchestrator", "active": true, "phoneNumber": "958-524-5164", "date": "2014-12-05T23:39:27.340Z" },
    { "name": "Hollis MacGyver", "email": "Yazmin.Heidenreich97@gmail.com", "jobTitle": "Direct Markets Assistant", "active": true, "phoneNumber": "603-607-3241", "date": "2015-02-12T10:40:52.977Z" },
    { "name": "Axel McLaughlin", "email": "Deon_Heaney@gmail.com", "jobTitle": "Forward Mobility Architect", "active": false, "phoneNumber": "983-639-0705", "date": "2015-03-01T02:28:26.030Z" },
    { "name": "Ricardo Botsford", "email": "Melisa73@yahoo.com", "jobTitle": "Direct Quality Consultant", "active": true, "phoneNumber": "408-082-9480", "date": "2015-01-31T03:41:54.611Z" },
    { "name": "Corbin Funk Mrs.", "email": "Marjory.Morissette51@gmail.com", "jobTitle": "Human Configuration Manager", "active": true, "phoneNumber": "386-937-8683", "date": "2014-12-05T15:07:36.843Z" },
    { "name": "Rosalind Paucek", "email": "Ivy_Stanton@gmail.com", "jobTitle": "Future Creative Supervisor", "active": true, "phoneNumber": "977-661-7403", "date": "2015-06-10T17:42:38.644Z" },
    { "name": "Henderson Moore", "email": "Randi_Corkery@hotmail.com", "jobTitle": "Internal Accountability Director", "active": true, "phoneNumber": "078-101-6377", "date": "2015-09-26T05:14:34.913Z" },
    { "name": "Kelli Schoen", "email": "Reva.Kiehn54@yahoo.com", "jobTitle": "National Accountability Architect", "active": false, "phoneNumber": "654-591-6561", "date": "2015-05-04T06:50:37.482Z" },
    { "name": "Kenna Fritsch", "email": "Wilburn2@gmail.com", "jobTitle": "Legacy Response Administrator", "active": true, "phoneNumber": "790-480-2859", "date": "2015-10-10T23:37:05.867Z" },
    { "name": "Judge Marquardt", "email": "Letha_Champlin69@hotmail.com", "jobTitle": "Human Program Specialist", "active": true, "phoneNumber": "100-494-1787", "date": "2015-04-04T23:29:48.588Z" },
    { "name": "Kurtis Hane", "email": "Mona.Gaylord47@yahoo.com", "jobTitle": "International Optimization Director", "active": false, "phoneNumber": "008-800-2959", "date": "2014-12-04T21:09:50.722Z" },
    { "name": "Nicolette Lind", "email": "Thurman30@yahoo.com", "jobTitle": "Legacy Marketing Facilitator", "active": true, "phoneNumber": "007-908-2460", "date": "2015-06-22T08:11:57.381Z" },
    { "name": "Idella Green", "email": "Fernando_Ward@yahoo.com", "jobTitle": "Dynamic Division Orchestrator", "active": false, "phoneNumber": "147-865-1578", "date": "2015-02-12T23:00:31.283Z" },
    { "name": "Mackenzie Bartell", "email": "Price25@yahoo.com", "jobTitle": "National Directives Associate", "active": false, "phoneNumber": "235-649-0980", "date": "2015-06-24T20:21:51.356Z" },
    { "name": "Mose Kohler", "email": "Malika56@hotmail.com", "jobTitle": "Lead Implementation Executive", "active": true, "phoneNumber": "614-886-4868", "date": "2015-03-04T13:05:23.698Z" },
    { "name": "Cielo Kuphal", "email": "Jude_Terry24@gmail.com", "jobTitle": "Dynamic Division Analyst", "active": false, "phoneNumber": "590-976-7492", "date": "2015-06-02T20:52:32.664Z" },
    { "name": "Haleigh Stokes", "email": "Belle_Herman64@yahoo.com", "jobTitle": "Global Intranet Executive", "active": false, "phoneNumber": "418-255-9365", "date": "2015-04-10T00:32:10.283Z" },
    { "name": "Tyrese Walter", "email": "Garland.Veum52@hotmail.com", "jobTitle": "Senior Web Liason", "active": false, "phoneNumber": "041-555-9831", "date": "2015-08-18T20:05:08.839Z" },
    { "name": "Barney Shields", "email": "Anika27@gmail.com", "jobTitle": "District Web Administrator", "active": true, "phoneNumber": "379-438-0217", "date": "2015-06-01T09:28:46.778Z" },
    { "name": "Favian Abbott Miss", "email": "Palma_Little@hotmail.com", "jobTitle": "Lead Implementation Facilitator", "active": false, "phoneNumber": "642-808-5400", "date": "2015-08-09T07:38:06.588Z" },
    { "name": "Carissa Kunze", "email": "Merl_Frami@yahoo.com", "jobTitle": "Regional Division Technician", "active": true, "phoneNumber": "949-983-0342", "date": "2015-11-05T08:09:09.463Z" }
];
/* unused harmony default export */ var _unused_webpack_default_export = (sdata);


/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                        Home\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Company\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Portfolio\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                       Blog\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}} <a href=\"http://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n        </p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">power_settings_new</i>\n                       <p class=\"hidden-lg hidden-md\">Sign Out</p>\n                    </a>\n                </li>\n            </ul>\n\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.element = element;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"/assets/img/wpiLogo.png\"/>\n        </div>\n        GA Assistant\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n    <form class=\"navbar-form navbar-right\" role=\"search\" *ngIf=\"isMobileMenu()\">\n        <div class=\"form-group form-black is-empty\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            <span class=\"material-input\"></span>\n        </div>\n        <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n        </button>\n    </form>\n\n    <ul class=\"nav nav-mobile-menu\" *ngIf=\"isMobileMenu()\">\n        <li>\n            <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"material-icons\">dashboard</i>\n                <p class=\"hidden-lg hidden-md\">Dashboard</p>\n            </a>\n        </li>\n        <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"material-icons\">notifications</i>\n                <span class=\"notification\">5</span>\n                <p class=\"hidden-lg hidden-md\">Notifications</p>\n            </a>\n            <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Mike John responded to your email</a></li>\n                <li><a href=\"#\">You have 5 new tasks</a></li>\n                <li><a href=\"#\">You're now friend with Andrew</a></li>\n                <li><a href=\"#\">Another Notification</a></li>\n                <li><a href=\"#\">Another One</a></li>\n            </ul>\n        </li>\n        <li>\n            <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n               <i class=\"material-icons\">person</i>\n               <p class=\"hidden-lg hidden-md\">Profile</p>\n            </a>\n        </li>\n    </ul>\n\n    <div class=\"nav-container\">\n        <ul class=\"nav\">\n            <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n                <a  [routerLink]=\"[menuItem.path]\">\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\n                    <p>{{menuItem.title}}</p>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servcies_user_service__ = __webpack_require__("../../../../../src/app/servcies/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ROUTES = [
    { path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: '', role: 'admin' },
    { path: 'user-profile', title: 'View Jobs', icon: 'work', class: '', role: 'admin' },
    { path: 'terms', title: 'Manage Terms', icon: 'watch_later', class: '', role: 'admin' },
    { path: 'table-list', title: 'Manage Terms1', icon: 'watch_later', class: '', role: 'stud' },
    { path: 'table-list', title: 'Manage Terms2', icon: 'watch_later', class: '', role: 'fac' }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(userService) {
        this.userService = userService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var role = '';
        this.userService.getUserDetails().subscribe(function (res) {
            console.log(res.commonname);
        }, function (err) {
            if (err.error === 'Unauthorized') {
                location.replace('/login');
            }
        });
        if (role === 'GAAdmin') {
            console.log('here');
            this.menuItems = ROUTES.filter(function (menuItem) { return menuItem.role == 'admin'; });
        }
        else
            this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servcies_user_service__["a" /* UserService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"card card-nav-tabs\">\n                    <div class=\"card-header\" data-background-color=\"purple\">\n                        <h4 class=\"title\">Current Jobs</h4>\n                    </div>\n                    <div class=\"card-content\">\n                        <data-table-grid></data-table-grid>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/icons/icons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\">Material Design Icons</h4>\n                        <p class=\"category\">Handcrafted by our friends from <a target=\"_blank\" href=\"https://design.google.com/icons/\">Google</a></p>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"iframe-container hidden-sm hidden-xs\">\n                            <iframe src=\"https://design.google.com/icons/\">\n                                <p>Your browser does not support iframes.</p>\n                            </iframe>\n                        </div>\n                        <div class=\"col-md-6 hidden-lg hidden-md text-center\">\n                            <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the  <a href=\"https://design.google.com/icons/\" target=\"_blank\">Material Icons</a></h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
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

var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-icons',
            template: __webpack_require__("../../../../../src/app/icons/icons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/icons/icons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/maps/maps.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"card card-nav-tabs\">\n                    <div class=\"card-header\" data-background-color=\"purple\">\n                        <h4 class=\"title\">Job Details</h4>\n\n                    </div>\n\n                    <div class=\"card-content\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-12\">\n                                <form>\n                                    <div class=\"form-group\">\n                                        <label>Name</label>\n                                        <input type=\"text\" class=\"form-control\" readonly value=\"Name\" />\n                                        <br>\n                                        <label>Email</label>\n                                        <input type=\"text\" class=\"form-control\" readonly value=\"Email\" />\n                                        <br>\n\n                                        <label>Job Title</label>\n                                        <input type=\"text\" class=\"form-control\" readonly value=\"Job Title\" />\n                                        <br>\n                                        <label>Active</label>\n                                        <input type=\"text\" class=\"form-control\" readonly value=\"Active\" />\n                                        <br>\n                                        <label>Phone Number</label>\n                                        <input type=\"text\" class=\"form-control\" readonly value=\"Phone Number\" />\n                                        <br>\n                                        <label>Date</label>\n                                        <input type=\"text\" class=\"form-control\" readonly value=\"Date\" />\n                                        <br>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
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

var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
    };
    ;
    MapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-maps',
            template: __webpack_require__("../../../../../src/app/maps/maps.component.html"),
            styles: [__webpack_require__("../../../../../src/app/maps/maps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-header\" data-background-color=\"red\">\n                <h4 class=\"title\">Notifications</h4>\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\n            </div>\n            <div class=\"card-content\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <h5>Notifications Style</h5>\n                        <div class=\"alert alert-info\">\n                            <span>This is a plain notification</span>\n                        </div>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span>This is a notification with close button.</span>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                        </div>\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <h5>Notification states</h5>\n                        <div class=\"alert alert-info\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                        </div>\n                        <div class=\"alert alert-success\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                        </div>\n                        <div class=\"alert alert-warning\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                        </div>\n                        <div class=\"alert alert-danger\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                        </div>\n                        <div class=\"alert alert-primary\">\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\n                            <span><b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                        </div>\n                    </div>\n                </div>\n\n                <br>\n                <br>\n\n                <div class=\"places-buttons\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-md-offset-3 text-center\">\n                            <h5>Notifications Places\n                                <p class=\"category\">Click to view notifications</p>\n                            </h5>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-8 col-md-offset-2\">\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-8 col-md-offset-2\">\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
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

var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            }
        });
    };
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__("../../../../../src/app/notifications/notifications.component.html"),
            styles: [__webpack_require__("../../../../../src/app/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/servcies/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.serviceURL = "http://localhost:3000/";
    }
    UserService.prototype.getUserDetails = function () {
        return this.http.get('/userDetails');
    };
    UserService.prototype.addTerm = function (data) {
        return this.http.post('/addterm', data);
    };
    UserService.prototype.updateTerm = function (data) {
        return this.http.post('/updateterm', data);
    };
    UserService.prototype.deleteTerm = function (data) {
        return this.http.post('/deleteterm', data);
    };
    UserService.prototype.getTerms = function () {
        return this.http.get('/getTerms');
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\">Simple Table</h4>\n                        <p class=\"category\">Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"card-content table-responsive\">\n                        <table class=\"table\">\n                            <thead class=\"text-danger\">\n                                <tr>\n                                    <th>Name</th>\n                                    <th>Country</th>\n                                    <th>City</th>\n                                    <th>Salary</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>Dakota Rice</td>\n                                    <td>Niger</td>\n                                    <td>Oud-Turnhout</td>\n                                    <td class=\"text-danger\">$36,738</td>\n                                </tr>\n                                <tr>\n                                    <td>Minerva Hooper</td>\n                                    <td>Curaçao</td>\n                                    <td>Sinaai-Waas</td>\n                                    <td class=\"text-danger\">$23,789</td>\n                                </tr>\n                                <tr>\n                                    <td>Sage Rodriguez</td>\n                                    <td>Netherlands</td>\n                                    <td>Baileux</td>\n                                    <td class=\"text-danger\">$56,142</td>\n                                </tr>\n                                <tr>\n                                    <td>Philip Chaney</td>\n                                    <td>Korea, South</td>\n                                    <td>Overland Park</td>\n                                    <td class=\"text-danger\">$38,735</td>\n                                </tr>\n                                <tr>\n                                    <td>Doris Greene</td>\n                                    <td>Malawi</td>\n                                    <td>Feldkirchen in Kärnten</td>\n                                    <td class=\"text-danger\">$63,542</td>\n                                </tr>\n                                <tr>\n                                    <td>Mason Porter</td>\n                                    <td>Chile</td>\n                                    <td>Gloucester</td>\n                                    <td class=\"text-danger\">$78,615</td>\n                                </tr>\n                            </tbody>\n                        </table>\n\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <h4 class=\"title\">Table on Plain Background</h4>\n                        <p class=\"category\">Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"card-content table-responsive\">\n                        <table class=\"table table-hover\">\n                            <thead>\n                                <tr>\n                                    <th>ID</th>\n                                    <th>Name</th>\n                                    <th>Salary</th>\n                                    <th>Country</th>\n                                    <th>City</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>1</td>\n                                    <td>Dakota Rice</td>\n                                    <td>$36,738</td>\n                                    <td>Niger</td>\n                                    <td>Oud-Turnhout</td>\n                                </tr>\n                                <tr>\n                                    <td>2</td>\n                                    <td>Minerva Hooper</td>\n                                    <td>$23,789</td>\n                                    <td>Curaçao</td>\n                                    <td>Sinaai-Waas</td>\n                                </tr>\n                                <tr>\n                                    <td>3</td>\n                                    <td>Sage Rodriguez</td>\n                                    <td>$56,142</td>\n                                    <td>Netherlands</td>\n                                    <td>Baileux</td>\n                                </tr>\n                                <tr>\n                                    <td>4</td>\n                                    <td>Philip Chaney</td>\n                                    <td>$38,735</td>\n                                    <td>Korea, South</td>\n                                    <td>Overland Park</td>\n                                </tr>\n                                <tr>\n                                    <td>5</td>\n                                    <td>Doris Greene</td>\n                                    <td>$63,542</td>\n                                    <td>Malawi</td>\n                                    <td>Feldkirchen in Kärnten</td>\n                                </tr>\n                                <tr>\n                                    <td>6</td>\n                                    <td>Mason Porter</td>\n                                    <td>$78,615</td>\n                                    <td>Chile</td>\n                                    <td>Gloucester</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/table-list/table-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableListComponent; });
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

var TableListComponent = /** @class */ (function () {
    function TableListComponent() {
    }
    TableListComponent.prototype.ngOnInit = function () {
    };
    TableListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table-list',
            template: __webpack_require__("../../../../../src/app/table-list/table-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/table-list/table-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TableListComponent);
    return TableListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/terms/addtermdialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-new .modal-content {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%) !important;\r\n            transform: translate(-50%, -50%) !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/terms/addtermdialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\r\n    <div class=\"modal-body\">\r\n        <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px', primaryColor:'#C52828' }\"></ngx-loading>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <div class=\"card card-nav-tabs\">\r\n                        <div class=\"card-header\" data-background-color=\"orange\">\r\n                            <h4 class=\"title\">Add Term</h4>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\">\r\n                                    <form name=\"termForm\" id=\"termForm\" #termForm=\"ngForm\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>Name</label>\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" id=\"name\" #termName=\"ngModel\" required/>\r\n                                            <div *ngIf=\"termName.invalid && (termName.dirty || termName.touched)\" style=\"color:red;\">\r\n                                                <div *ngIf=\"termName.errors.required\">\r\n                                                    Name is required.\r\n                                                </div>\r\n                                            </div>\r\n                                            <br>\r\n                                            <label>Status</label>\r\n                                            <div class=\"container-fluid\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-2\">\r\n                                                        <label>Upcoming</label>\r\n                                                        <input type=\"radio\" name=\"status\" value=\"Upcoming\" id=\"status\" [(ngModel)]=\"status\" #termStatus=\"ngModel\" required/>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-2\">\r\n                                                        <label>Active</label>\r\n                                                        <input type=\"radio\" name=\"status\" value=\"Active\" id=\"status\" [(ngModel)]=\"status\" #termStatus=\"ngModel\" required/>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-2\">\r\n                                                        <label>Closed</label>\r\n                                                        <input type=\"radio\" name=\"status\" value=\"Closed\" id=\"status\" [(ngModel)]=\"status\" #termStatus=\"ngModel\" required/>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div *ngIf=\"termStatus.invalid && (termStatus.dirty || termStatus.touched)\" style=\"color:red;\">\r\n                                                <div *ngIf=\"termStatus.errors.required\">\r\n                                                    Status is required.\r\n                                                </div>\r\n                                            </div>\r\n                                            <br>\r\n                                            <label>Type</label>\r\n                                            <div class=\"container-fluid\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-2\">\r\n                                                        <label>Fall</label>\r\n                                                        <input type=\"radio\" name=\"type\" id=\"type\" value=\"Fall\" [(ngModel)]=\"type\" #termType=\"ngModel\" required/>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-2\">\r\n                                                        <label>Spring</label>\r\n                                                        <input type=\"radio\" name=\"type\" id=\"type\" value=\"Spring\" [(ngModel)]=\"type\" #termType=\"ngModel\" required/>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-2\">\r\n                                                        <label>Summer</label>\r\n                                                        <input type=\"radio\" name=\"type\" id=\"type\" value=\"Summer\" [(ngModel)]=\"type\" #termType=\"ngModel\" required/>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-2\">\r\n                                                        <label>Annual</label>\r\n                                                        <input type=\"radio\" name=\"type\" id=\"type\" value=\"Annual\" [(ngModel)]=\"type\" #termType=\"ngModel\" required/>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-2\">\r\n                                                        <label>Other</label>\r\n                                                        <input type=\"radio\" name=\"type\" id=\"type\" value=\"Other\" [(ngModel)]=\"type\" #termType=\"ngModel\" required/>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div *ngIf=\"termType.invalid && (termType.dirty || termType.touched)\" style=\"color:red;\">\r\n                                                <div *ngIf=\"termType.errors.required\">\r\n                                                    Term type is required.\r\n                                                </div>\r\n                                            </div>\r\n                                            <br>\r\n                                            <div class=\"container\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-3\">\r\n                                                        <label>From</label>\r\n                                                        <ng-datepicker [(ngModel)]=\"from\" id=\"FromDate\" name=\"FromDate\" #termFrom=\"ngModel\" required (ngModelChange)=\"compareDate()\"></ng-datepicker>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-3\">\r\n                                                        <label>To</label>\r\n                                                        <ng-datepicker [(ngModel)]=\"to\" id=\"ToDate\" name=\"ToDate\" #termTo=\"ngModel\" required (ngModelChange)=\"compareDate()\"></ng-datepicker>\r\n\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div *ngIf=\"termFrom.invalid && (termFrom.dirty || termFrom.touched)\" style=\"color:red;\">\r\n                                                <div *ngIf=\"termFrom.errors.required\">\r\n                                                    From date is required.\r\n                                                </div>\r\n                                            </div>\r\n                                            <div *ngIf=\"termTo.invalid && (termTo.dirty || termTo.touched)\" style=\"color:red;\">\r\n                                                <div *ngIf=\"termTo.errors.required\">\r\n                                                    To is required.\r\n                                                </div>\r\n                                            </div>\r\n                                            <div *ngIf=\"error.isError\" style=\"color:red;\">\r\n                                                <div>\r\n                                                    {{error.errorMessage}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <div>\r\n            <button type=\"submit\" class=\"btn btn-success\" (click)=\"confirm()\" [disabled]=\"!termForm.form.valid || error.isError\">Save</button>\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">Cancel</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/terms/addtermdialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTermDialogContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_locale_fr__ = __webpack_require__("../../../../date-fns/locale/fr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_locale_fr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_locale_fr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servcies_user_service__ = __webpack_require__("../../../../../src/app/servcies/user.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddTermDialogContent = /** @class */ (function (_super) {
    __extends(AddTermDialogContent, _super);
    function AddTermDialogContent(dialogService, userService) {
        var _this = _super.call(this, dialogService) || this;
        _this.userService = userService;
        _this.loading = false;
        _this.name = "";
        _this.status = "Upcoming";
        _this.from = new Date(Date.now());
        _this.to = new Date(Date.now());
        _this.options = {
            minYear: 1970,
            maxYear: 2030,
            displayFormat: 'MMM D[,] YYYY',
            barTitleFormat: 'MMMM YYYY',
            firstCalendarDay: 0,
            locale: __WEBPACK_IMPORTED_MODULE_2_date_fns_locale_fr__,
            minDate: _this.from,
            maxDate: new Date(Date.parse(_this.to.setDate(_this.to.getDate() + 1).toLocaleString())) // Maximal selectable date
        };
        _this.error = { isError: false, errorMessage: '' };
        return _this;
    }
    AddTermDialogContent.prototype.confirm = function () {
        var _this = this;
        this.loading = true;
        var data = {
            _id: null,
            name: this.name,
            status: this.status,
            from: this.from,
            to: this.to,
            type: this.type,
            created_at: new Date(Date.now()),
            updated_at: new Date(Date.now())
        };
        this.userService.addTerm(data).subscribe(function () {
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
            if (err.error === 'Unauthorized')
                location.replace('/login');
        });
        this.result = true;
        this.close();
    };
    AddTermDialogContent.prototype.compareDate = function () {
        var current = new Date(Date.now());
        if (Date.parse(this.from.toDateString()) < Date.parse(current.toDateString())) {
            this.error.isError = true;
            this.error.errorMessage = 'From date cannot be less than current date';
            console.log(current.toDateString());
            console.log(this.from.toDateString());
        }
        else {
            if (Date.parse(this.to.toDateString()) < Date.parse(this.from.toDateString())) {
                this.error.errorMessage = '"To" date must be greater than "From" date';
                this.error.isError = true;
            }
            else {
                this.error.errorMessage = '';
                this.error.isError = false;
            }
        }
    };
    AddTermDialogContent.prototype.ngOnInit = function () {
    };
    AddTermDialogContent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'term-data',
            template: __webpack_require__("../../../../../src/app/terms/addtermdialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/terms/addtermdialog.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            host: {
                'class': 'modal-new'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"], __WEBPACK_IMPORTED_MODULE_3__servcies_user_service__["a" /* UserService */]])
    ], AddTermDialogContent);
    return AddTermDialogContent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));



/***/ }),

/***/ "../../../../../src/app/terms/deletetermdialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-new .modal-content {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%) !important;\r\n            transform: translate(-50%, -50%) !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/terms/deletetermdialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\r\n    <div class=\"modal-body\">\r\n        <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px', primaryColor:'#C52828' }\"></ngx-loading>\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    Are you sure ?\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"confirm()\">Yes</button>\r\n                    <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">No</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/terms/deletetermdialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteTermDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servcies_user_service__ = __webpack_require__("../../../../../src/app/servcies/user.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteTermDialog = /** @class */ (function (_super) {
    __extends(DeleteTermDialog, _super);
    function DeleteTermDialog(dialogService, userService) {
        var _this = _super.call(this, dialogService) || this;
        _this.userService = userService;
        _this.loading = false;
        return _this;
    }
    DeleteTermDialog.prototype.confirm = function () {
        var _this = this;
        this.loading = true;
        var data = {
            _id: this._id,
            name: this.name,
            status: this.status,
            from: this.from,
            to: this.to,
            type: this.type,
            created_at: this.created_at,
            updated_at: new Date(Date.now())
        };
        this.userService.deleteTerm(data).subscribe(function () {
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
            if (err.error === 'Unauthorized')
                location.replace('/login');
        });
        ;
        this.result = true;
        this.close();
    };
    DeleteTermDialog.prototype.ngOnInit = function () {
    };
    DeleteTermDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'term-data',
            template: __webpack_require__("../../../../../src/app/terms/deletetermdialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/terms/deletetermdialog.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            host: {
                'class': 'modal-new'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"], __WEBPACK_IMPORTED_MODULE_2__servcies_user_service__["a" /* UserService */]])
    ], DeleteTermDialog);
    return DeleteTermDialog;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));



/***/ }),

/***/ "../../../../../src/app/terms/edittermdialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTermDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_locale_fr__ = __webpack_require__("../../../../date-fns/locale/fr/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_locale_fr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_locale_fr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servcies_user_service__ = __webpack_require__("../../../../../src/app/servcies/user.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditTermDialog = /** @class */ (function (_super) {
    __extends(EditTermDialog, _super);
    function EditTermDialog(dialogService, userService) {
        var _this = _super.call(this, dialogService) || this;
        _this.userService = userService;
        _this.loading = false;
        _this.options = {
            minYear: 1970,
            maxYear: 2030,
            displayFormat: 'MMM D[,] YYYY',
            barTitleFormat: 'MMMM YYYY',
            firstCalendarDay: 0,
            locale: __WEBPACK_IMPORTED_MODULE_2_date_fns_locale_fr__
        };
        _this.error = { isError: false, errorMessage: '' };
        return _this;
    }
    EditTermDialog.prototype.confirm = function () {
        var _this = this;
        this.loading = true;
        var data = {
            _id: this._id,
            name: this.name,
            status: this.status,
            from: this.from,
            to: this.to,
            type: this.type,
            created_at: this.created_at,
            updated_at: new Date(Date.now())
        };
        this.userService.updateTerm(data).subscribe(function () {
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
            if (err.error === 'Unauthorized')
                location.replace('/login');
        });
        ;
        this.result = true;
        this.close();
    };
    EditTermDialog.prototype.compareDate = function () {
        var current = new Date(Date.now());
        if (Date.parse(this.from.toDateString()) < Date.parse(current.toDateString())) {
            this.error.isError = true;
            this.error.errorMessage = 'From date cannot be less than current date';
            console.log(current.toDateString());
            console.log(this.from.toDateString());
        }
        else {
            if (Date.parse(this.to.toDateString()) < Date.parse(this.from.toDateString())) {
                this.error.errorMessage = '"To" date must be greater than "From" date';
                this.error.isError = true;
                console.log('here');
            }
            else {
                this.error.errorMessage = '';
                this.error.isError = false;
            }
        }
    };
    EditTermDialog.prototype.ngOnInit = function () {
    };
    EditTermDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'term-data',
            template: __webpack_require__("../../../../../src/app/terms/addtermdialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/terms/addtermdialog.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            host: {
                'class': 'modal-new'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"], __WEBPACK_IMPORTED_MODULE_3__servcies_user_service__["a" /* UserService */]])
    ], EditTermDialog);
    return EditTermDialog;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));



/***/ }),

/***/ "../../../../../src/app/terms/terms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n    \r\n    .mat-table {\r\n      overflow-y: hidden; \r\n      overflow-x: hidden;\r\n      max-height: auto;\r\n    }\r\n  \r\n   .header-style {\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      border-bottom:1px solid rgba(0 , 0, 0, 0.2);\r\n      /*border-bottom-width: 1px;\r\n      border-bottom-style: solid;*/\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n      min-height: 48px;\r\n      padding: 0 24px;\r\n      font-weight: 500;\r\n      color:#C32626;\r\n    }\r\n  \r\n    .row-style {\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      border-bottom:1px solid rgba(0 , 0, 0, 0.2);\r\n      /*border-bottom-width: 1px;\r\n      border-bottom-style: solid;*/\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n      min-height: 48px;\r\n      padding: 0 24px;\r\n      font-weight: 300;\r\n    }\r\n  \r\n  \r\n    .new-mat-paginator .mat-paginator-container {\r\n      display: -webkit-box;\r\n      display: -ms-flexbox;\r\n      display: flex;\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n      -webkit-box-pack: end;\r\n          -ms-flex-pack: end;\r\n              justify-content: flex-end;\r\n      margin-right: 20px;\r\n      min-height: 56px;\r\n      padding: 0 8px;\r\n      -ms-flex-wrap: wrap-reverse;\r\n          flex-wrap: wrap-reverse;\r\n  }\r\n  \r\n  .new-mat-paginator .mat-paginator-page-size-label{\r\n    font-weight: 500;\r\n  }\r\n  \r\n  .new-mat-paginator .mat-button, .mat-icon-button {\r\n    background: 0 0;\r\n  }\r\n  .new-mat-paginator .mat-paginator-decrement, .mat-paginator-increment{\r\n    border-top: 2px solid rgba(0,0,0,.84);\r\n    border-right: 2px solid rgba(0,0,0,.84);\r\n  }\r\n  \r\n  .new-mat-paginator .mat-icon-button[disabled] .mat-paginator-decrement, .mat-icon-button[disabled] .mat-paginator-increment{\r\n    border-top: 2px solid rgba(0,0,0,.44);\r\n    border-right: 2px solid rgba(0,0,0,.44);\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/terms/terms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n        <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px', primaryColor:'#C52828' }\"></ngx-loading>\r\n        <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                                <div class=\"card card-nav-tabs\">\r\n                                        <div class=\"card-header\" data-background-color=\"purple\">\r\n                                                <h4 class=\"title\">Terms</h4>\r\n                                        </div>\r\n                                        <div class=\"card-content\">\r\n                                                <div class=\"example-container mat-table\">\r\n                                                        <div>\r\n                                                                <button class=\"btn btn-md btn-success\" (click)=\"opendialog()\">Add Term</button>\r\n                                                        </div>\r\n                                                        <br>\r\n                                                        <div>\r\n                                                                <input type=\"text\" class=\"form-control\" placeholder=\"Filter\" style=\"width: 500px;\" (keyup)=\"applyFilter($event.target.value)\">\r\n                                                        </div>\r\n                                                        <br>\r\n                                                        <mat-table [dataSource]=\"datasource\" matSort>\r\n                                                                <ng-container matColumnDef=\"name\">\r\n                                                                        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n                                                                        <mat-cell *matCellDef=\"let term\"> {{term.name}} </mat-cell>\r\n                                                                </ng-container>\r\n                                                                <ng-container matColumnDef=\"status\">\r\n                                                                        <mat-header-cell *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\r\n                                                                        <mat-cell *matCellDef=\"let term\"> {{term.status}} </mat-cell>\r\n                                                                </ng-container>\r\n                                                                <ng-container matColumnDef=\"from\">\r\n                                                                        <mat-header-cell *matHeaderCellDef mat-sort-header> From </mat-header-cell>\r\n                                                                        <mat-cell *matCellDef=\"let term\"> {{term.from | date: 'MM/dd/yyyy'}} </mat-cell>\r\n                                                                </ng-container>\r\n                                                                <ng-container matColumnDef=\"to\">\r\n                                                                        <mat-header-cell *matHeaderCellDef mat-sort-header> To </mat-header-cell>\r\n                                                                        <mat-cell *matCellDef=\"let term\"> {{term.to | date: 'MM/dd/yyyy'}} </mat-cell>\r\n                                                                </ng-container>\r\n                                                                <ng-container matColumnDef=\"type\">\r\n                                                                        <mat-header-cell *matHeaderCellDef mat-sort-header> Type </mat-header-cell>\r\n                                                                        <mat-cell *matCellDef=\"let term\"> {{term.type}} </mat-cell>\r\n                                                                </ng-container>>\r\n                                                                <ng-container matColumnDef=\"action\">\r\n                                                                        <mat-header-cell *matHeaderCellDef mat-sort-header> Actions </mat-header-cell>\r\n                                                                        <mat-cell *matCellDef=\"let term\">\r\n                                                                                <span>\r\n                                                                                        <button style=\"background: transparent; border:none; color: #00BCD4;\" (click)=\"viewterm(term)\">\r\n                                                                                                <i class=\"material-icons\">visibility</i>\r\n                                                                                        </button>\r\n                                                                                        <button style=\"background: transparent; border:none; color:#FF9800;\" (click)=\"editterm(term)\">\r\n                                                                                                <i class=\"material-icons\">mode_edit</i>\r\n                                                                                        </button>\r\n                                                                                        <button style=\"background: transparent; border:none; color:#C62828;\" (click)=\"deleteterm(term)\">\r\n                                                                                                <i class=\"material-icons\">delete</i>\r\n                                                                                        </button>\r\n                                                                                </span>\r\n                                                                        </mat-cell>\r\n                                                                </ng-container>\r\n                                                                <mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"header-style\"></mat-header-row>\r\n                                                                <mat-row *matRowDef=\"let row; columns: displayedColumns\" class=\"row-style\"></mat-row>\r\n                                                        </mat-table>\r\n                                                        <mat-paginator [pageSize]=\"10\">\r\n                                                        </mat-paginator>\r\n                                                </div>\r\n                                        </div>\r\n                                </div>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/terms/terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageTerms; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addtermdialog_component__ = __webpack_require__("../../../../../src/app/terms/addtermdialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewtermdialog_component__ = __webpack_require__("../../../../../src/app/terms/viewtermdialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edittermdialog_component__ = __webpack_require__("../../../../../src/app/terms/edittermdialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deletetermdialog_component__ = __webpack_require__("../../../../../src/app/terms/deletetermdialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__servcies_user_service__ = __webpack_require__("../../../../../src/app/servcies/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ManageTerms = /** @class */ (function () {
    function ManageTerms(userService, dialogService) {
        var _this = this;
        this.userService = userService;
        this.dialogService = dialogService;
        this.loading = false;
        this.datasource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatTableDataSource */]([]);
        this.displayedColumns = ['name', 'status', 'from', 'to', 'type', 'action'];
        this.loading = true;
        this.userService.getTerms().subscribe(function (res) {
            _this.datasource.data = res;
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
            if (err.error === 'Unauthorized') {
                console.log(err.error);
            }
        });
    }
    ManageTerms.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.datasource.filter = filterValue;
    };
    ManageTerms.prototype.opendialog = function () {
        var _this = this;
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_2__addtermdialog_component__["a" /* AddTermDialogContent */], {})
            .subscribe(function (isConfirmed) {
            //We get dialog result
            if (isConfirmed) {
                _this.loading = true;
                _this.userService.getTerms().subscribe(function (res) {
                    _this.datasource.data = res;
                    _this.loading = false;
                }, function (err) {
                    _this.loading = false;
                    if (err.error === 'Unauthorized') {
                        console.log(err.error);
                    }
                });
            }
            else {
                //alert('declined');
            }
        });
    };
    ManageTerms.prototype.editterm = function (data) {
        var _this = this;
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_4__edittermdialog_component__["a" /* EditTermDialog */], data)
            .subscribe(function (isConfirmed) {
            //We get dialog result
            if (isConfirmed) {
                _this.loading = true;
                _this.userService.getTerms().subscribe(function (res) {
                    _this.datasource.data = res;
                    _this.loading = false;
                }, function (err) {
                    _this.loading = false;
                    if (err.error === 'Unauthorized') {
                        console.log(err.error);
                    }
                });
            }
            else {
                //alert('declined');
            }
        });
    };
    ManageTerms.prototype.viewterm = function (data) {
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_3__viewtermdialog_component__["a" /* ViewTermDialog */], data)
            .subscribe(function (isConfirmed) {
            //We get dialog result
            if (isConfirmed) {
            }
            else {
                //alert('declined');
            }
        });
    };
    ManageTerms.prototype.deleteterm = function (data) {
        var _this = this;
        var disposable = this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_5__deletetermdialog_component__["a" /* DeleteTermDialog */], data)
            .subscribe(function (isConfirmed) {
            //We get dialog result
            if (isConfirmed) {
                _this.loading = true;
                _this.userService.getTerms().subscribe(function (res) {
                    _this.datasource.data = res;
                    _this.loading = false;
                }, function (err) {
                    _this.loading = false;
                    if (err.error === 'Unauthorized') {
                        console.log(err.error);
                    }
                });
            }
            else {
                //alert('declined');
            }
        });
    };
    ManageTerms.prototype.ngAfterViewInit = function () {
        this.datasource.paginator = this.paginator;
        this.datasource.sort = this.sort;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatPaginator */])
    ], ManageTerms.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatSort */])
    ], ManageTerms.prototype, "sort", void 0);
    ManageTerms = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'terms',
            template: __webpack_require__("../../../../../src/app/terms/terms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/terms/terms.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            host: {
                'class': 'new-mat-paginator'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__servcies_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap_modal__["DialogService"]])
    ], ManageTerms);
    return ManageTerms;
}());



/***/ }),

/***/ "../../../../../src/app/terms/viewtermdialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-new .modal-content {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%) !important;\r\n            transform: translate(-50%, -50%) !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/terms/viewtermdialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\r\n        <div class=\"modal-body\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"card card-nav-tabs\">\r\n                            <div class=\"card-header\" data-background-color=\"blue\">\r\n                                <h4 class=\"title\">Term Details</h4>\r\n                            </div>\r\n                            <div class=\"card-content\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <form name=\"termForm\" id=\"termForm\">\r\n                                            <div class=\"form-group\">\r\n                                                <label>Name</label>\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" id=\"name\" #termName=\"ngModel\" required readonly/>\r\n                                                <br>\r\n                                                <label>Status</label>\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"status\" name=\"status\" id=\"status\" #termStatus=\"ngModel\" required readonly/>\r\n                                                <br>\r\n                                                <label>Type</label>\r\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"type\" name=\"type\" id=\"type\" #termType=\"ngModel\" required readonly/>\r\n                                                <br>\r\n                                                <div class=\"container\">\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-3\">\r\n                                                            <label>From</label>\r\n                                                            <input type=\"text\" value=\"{{from | date: 'MM/dd/yyyy'}}\" id=\"FromDate\" name=\"FromDate\" class=\"form-control\" required  readonly />\r\n                                                        </div>\r\n                                                        <div class=\"col-md-3 \">\r\n                                                            <label>To</label>\r\n                                                            <input type=\"text\" value=\"{{to | date: 'MM/dd/yyyy'}}\" id=\"ToDate\" name=\"ToDate\" class=\"form-control\" required  readonly />\r\n                                                            \r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <div>\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"close()\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/terms/viewtermdialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTermDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewTermDialog = /** @class */ (function (_super) {
    __extends(ViewTermDialog, _super);
    function ViewTermDialog(dialogService) {
        return _super.call(this, dialogService) || this;
    }
    ViewTermDialog.prototype.ngOnInit = function () {
    };
    ViewTermDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'viewterm',
            template: __webpack_require__("../../../../../src/app/terms/viewtermdialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/terms/viewtermdialog.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            host: {
                'class': 'modal-new'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]])
    ], ViewTermDialog);
    return ViewTermDialog;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));



/***/ }),

/***/ "../../../../../src/app/typography/typography.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"red\">\n                    <h4 class=\"title\">Material Dashboard Heading</h4>\n                    <p class=\"category\">Created using Roboto Font Family</p>\n                </div>\n                <div class=\"card-content\">\n                    <div id=\"typography\">\n                        <div class=\"title\">\n                            <h2>Typography</h2>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"tim-typo\">\n                                <h1><span class=\"tim-note\">Header 1</span>The Life of Material Dashboard </h1>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <h2><span class=\"tim-note\">Header 2</span>The life of Material Dashboard </h2>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <h3><span class=\"tim-note\">Header 3</span>The life of Material Dashboard </h3>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <h4><span class=\"tim-note\">Header 4</span>The life of Material Dashboard </h4>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <h5><span class=\"tim-note\">Header 5</span>The life of Material Dashboard </h5>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <h6><span class=\"tim-note\">Header 6</span>The life of Material Dashboard </h6>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <p><span class=\"tim-note\">Paragraph</span>\n                                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Quote</span>\n                                <blockquote>\n                                 <p>\n                                 I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n                                 </p>\n                                 <small>\n                                 Kanye West, Musician\n                                 </small>\n                                </blockquote>\n                            </div>\n\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Muted Text</span>\n                                <p class=\"text-muted\">\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                                </p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Primary Text</span>\n                                <p class=\"text-primary\">\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Info Text</span>\n                                <p class=\"text-info\">\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Success Text</span>\n                                <p class=\"text-success\">\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Warning Text</span>\n                                <p class=\"text-warning\">\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                                </p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <span class=\"tim-note\">Danger Text</span>\n                                <p class=\"text-danger\">\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\n                            </div>\n                            <div class=\"tim-typo\">\n                                <h2><span class=\"tim-note\">Small Tag</span>\n                                    Header with small subtitle <br>\n                                    <small>Use \"small\" tag for the headers</small>\n                                </h2>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
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

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__("../../../../../src/app/typography/typography.component.html"),
            styles: [__webpack_require__("../../../../../src/app/typography/typography.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"card\">\n                    <div class=\"card-header text-center\" data-background-color=\"red\">\n                        <h4 class=\"title\">Material Dashboard PRO</h4>\n                        <p class=\"category\">Are you looking for more components? Please check our Premium Version of Material Dashboard.</p>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"table-responsive table-upgrade\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th class=\"text-center\">Free</th>\n                                        <th class=\"text-center\">PRO</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>Components</td>\n                                        <td class=\"text-center\">60</td>\n                                        <td class=\"text-center\">200</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Plugins</td>\n                                        <td class=\"text-center\">2</td>\n                                        <td class=\"text-center\">15</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Example Pages</td>\n                                        <td class=\"text-center\">3</td>\n                                        <td class=\"text-center\">27</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Login, Register, Pricing, Lock Pages</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation, FullCalendar etc...</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Mini Sidebar</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Premium Support</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td></td>\n                                        <td class=\"text-center\">Free</td>\n                                        <td class=\"text-center\">Just $49</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"text-center\"></td>\n                                        <td class=\"text-center\">\n                                            <a href=\"#\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\n                                        </td>\n                                        <td class=\"text-center\">\n                                            <a target=\"_blank\" href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2/?ref=md-free-angular-upgrade-local\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/upgrade/upgrade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeComponent; });
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

var UpgradeComponent = /** @class */ (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upgrade',
            template: __webpack_require__("../../../../../src/app/upgrade/upgrade.component.html"),
            styles: [__webpack_require__("../../../../../src/app/upgrade/upgrade.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"red\">\n                    <h4 class=\"title\">Edit Profile</h4>\n                    <p class=\"category\">Complete your profile</p>\n                </div>\n                <div class=\"card-content\">\n                    <form>\n                        <div class=\"row\">\n                            <div class=\"col-md-5\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Company (disabled)</label>\n                                    <input type=\"text\" class=\"form-control\" disabled>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Username</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Email address</label>\n                                    <input type=\"email\" class=\"form-control\" >\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Fist Name</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Last Name</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Adress</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">City</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Country</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                            <div class=\"col-md-4\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Postal Code</label>\n                                    <input type=\"text\" class=\"form-control\" >\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <div class=\"form-group\">\n                                    <label>About Me</label>\n                                    <div class=\"form-group form-black label-floating is-empty\">\n                                        <label class=\"control-label\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\n                                        <textarea class=\"form-control\" rows=\"5\"></textarea>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\n                        <div class=\"clearfix\"></div>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"card card-profile\">\n                <div class=\"card-avatar\">\n                    <a href=\"#pablo\">\n                        <img class=\"img\" src=\"../assets/img/faces/marc.jpg\" />\n                    </a>\n                </div>\n\n                <div class=\"content\">\n                    <h6 class=\"category text-gray\">CEO / Co-Founder</h6>\n                    <h4 class=\"card-title\">Alec Thompson</h4>\n                    <p class=\"card-content\">\n                        Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n                    </p>\n                    <a href=\"#pablo\" class=\"btn btn-danger btn-round\">Follow</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
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

var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__("../../../../../src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map