(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schemes-schemes-module"],{

/***/ "./src/app/schemes/route-resolvers/scheme-resolver.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/schemes/route-resolvers/scheme-resolver.service.ts ***!
  \********************************************************************/
/*! exports provided: SchemeResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeResolverService", function() { return SchemeResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_scheme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/scheme.service */ "./src/app/shared/services/scheme.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class SchemeResolverService {
    constructor(schemeService, router) {
        this.schemeService = schemeService;
        this.router = router;
    }
    resolve(route, state) {
        const schemeName = route.paramMap.get('schemeName');
        return this.schemeService.getSchemeByName(schemeName);
    }
}
SchemeResolverService.ɵfac = function SchemeResolverService_Factory(t) { return new (t || SchemeResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_scheme_service__WEBPACK_IMPORTED_MODULE_1__["SchemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SchemeResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SchemeResolverService, factory: SchemeResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemeResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_scheme_service__WEBPACK_IMPORTED_MODULE_1__["SchemeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/schemes/route-resolvers/schemes-resolver.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/schemes/route-resolvers/schemes-resolver.service.ts ***!
  \*********************************************************************/
/*! exports provided: SchemesResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemesResolverService", function() { return SchemesResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_scheme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/scheme.service */ "./src/app/shared/services/scheme.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class SchemesResolverService {
    constructor(schemeService, router) {
        this.schemeService = schemeService;
        this.router = router;
    }
    resolve(route, state) {
        return this.schemeService.getSchemeNames();
    }
}
SchemesResolverService.ɵfac = function SchemesResolverService_Factory(t) { return new (t || SchemesResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_scheme_service__WEBPACK_IMPORTED_MODULE_1__["SchemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SchemesResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SchemesResolverService, factory: SchemesResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemesResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_scheme_service__WEBPACK_IMPORTED_MODULE_1__["SchemeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/schemes/scheme-default/scheme-default.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/schemes/scheme-default/scheme-default.component.ts ***!
  \********************************************************************/
/*! exports provided: SchemeDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeDefaultComponent", function() { return SchemeDefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SchemeDefaultComponent {
    constructor() { }
    ngOnInit() {
    }
}
SchemeDefaultComponent.ɵfac = function SchemeDefaultComponent_Factory(t) { return new (t || SchemeDefaultComponent)(); };
SchemeDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SchemeDefaultComponent, selectors: [["emes-scheme-default"]], decls: 2, vars: 0, template: function SchemeDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "scheme-default works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGVtZXMvc2NoZW1lLWRlZmF1bHQvc2NoZW1lLWRlZmF1bHQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemeDefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-scheme-default',
                templateUrl: './scheme-default.component.html',
                styleUrls: ['./scheme-default.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/schemes/scheme/scheme.component.ts":
/*!****************************************************!*\
  !*** ./src/app/schemes/scheme/scheme.component.ts ***!
  \****************************************************/
/*! exports provided: SchemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeComponent", function() { return SchemeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _shared_services_scheme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/scheme.service */ "./src/app/shared/services/scheme.service.ts");
/* harmony import */ var data_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! data-table */ "./dist/data-table/fesm2015/data-table.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








class SchemeComponent {
    constructor(schemeService) {
        this.schemeService = schemeService;
        // Indicator whether current user is admin
        this.isAdmin = true;
        // Used for cleaning subscription
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        const columnDefinition = [
            { id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none' },
            { id: '2', name: 'fullName', label: 'Field Name', type: 'text', visible: true, searchable: false, filterMode: 'text' },
            { id: '3', name: 'scheme', label: 'Type', type: 'text', visible: true, searchable: false, filterMode: 'none' },
            {
                id: '4',
                name: 'view',
                label: 'View',
                type: 'icon',
                visible: true,
                searchable: false,
                filterMode: 'none',
                click: this.viewField.bind(this)
            },
            {
                id: '5',
                name: 'delete',
                label: 'Delete',
                type: 'icon',
                visible: true,
                searchable: false,
                filterMode: 'none',
                click: this.deleteField.bind(this)
            },
        ];
        this.schemeService.scheme$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(scheme => {
            this.settings = {
                selectableRows: false,
                columnDefinitions: columnDefinition,
                data: scheme.fields.map(t => (Object.assign(Object.assign({}, t), { view: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faExternalLinkAlt"], delete: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTrash"] }))),
                toolBar: {
                    right: [
                        ...this.isAdmin ? [{
                                name: 'New Field',
                                type: 'button',
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlus"],
                                callback: this.createField.bind(this)
                            }] : [],
                        { type: 'filter' }
                    ]
                },
                groupBy: []
            };
        });
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    createField() {
    }
    viewField() {
    }
    deleteField() { }
}
SchemeComponent.ɵfac = function SchemeComponent_Factory(t) { return new (t || SchemeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_scheme_service__WEBPACK_IMPORTED_MODULE_4__["SchemeService"])); };
SchemeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SchemeComponent, selectors: [["emes-scheme"]], decls: 5, vars: 4, consts: [[1, "d-flex", "justify-content-between", "flex-wrap", "flex-md-nowrap", "align-items-center", "pt-3", "pb-2", "mb-3", "border-bottom"], [1, "d-flex", "flex-fill", 3, "settings"]], template: function SchemeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "csps-data-table", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "ADMIN.USERS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings);
    } }, directives: [data_table__WEBPACK_IMPORTED_MODULE_5__["DataTableComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZW1lcy9zY2hlbWUvQzpcXERldlxcSW50ZXJuYWxcXENsaWVudEFwcC0yL3NyY1xcYXBwXFxzY2hlbWVzXFxzY2hlbWVcXHNjaGVtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2NoZW1lcy9zY2hlbWUvc2NoZW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2NoZW1lcy9zY2hlbWUvc2NoZW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-scheme',
                templateUrl: './scheme.component.html',
                styleUrls: ['./scheme.component.scss']
            }]
    }], function () { return [{ type: _shared_services_scheme_service__WEBPACK_IMPORTED_MODULE_4__["SchemeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/schemes/schemes-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/schemes/schemes-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SchemesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemesRoutingModule", function() { return SchemesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _schemes_schemes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schemes/schemes.component */ "./src/app/schemes/schemes/schemes.component.ts");
/* harmony import */ var _route_resolvers_schemes_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route-resolvers/schemes-resolver.service */ "./src/app/schemes/route-resolvers/schemes-resolver.service.ts");
/* harmony import */ var _scheme_scheme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scheme/scheme.component */ "./src/app/schemes/scheme/scheme.component.ts");
/* harmony import */ var _route_resolvers_scheme_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route-resolvers/scheme-resolver.service */ "./src/app/schemes/route-resolvers/scheme-resolver.service.ts");
/* harmony import */ var _scheme_default_scheme_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scheme-default/scheme-default.component */ "./src/app/schemes/scheme-default/scheme-default.component.ts");









const routes = [{
        path: '', component: _schemes_schemes_component__WEBPACK_IMPORTED_MODULE_2__["SchemesComponent"], resolve: { schemes: _route_resolvers_schemes_resolver_service__WEBPACK_IMPORTED_MODULE_3__["SchemesResolverService"] }, children: [
            { path: ':schemeName', component: _scheme_scheme_component__WEBPACK_IMPORTED_MODULE_4__["SchemeComponent"], resolve: { scheme: _route_resolvers_scheme_resolver_service__WEBPACK_IMPORTED_MODULE_5__["SchemeResolverService"] } },
            { path: '', component: _scheme_default_scheme_default_component__WEBPACK_IMPORTED_MODULE_6__["SchemeDefaultComponent"] }
        ]
    }];
class SchemesRoutingModule {
}
SchemesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SchemesRoutingModule });
SchemesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SchemesRoutingModule_Factory(t) { return new (t || SchemesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SchemesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/schemes/schemes.module.ts":
/*!*******************************************!*\
  !*** ./src/app/schemes/schemes.module.ts ***!
  \*******************************************/
/*! exports provided: SchemesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemesModule", function() { return SchemesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _schemes_schemes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schemes/schemes.component */ "./src/app/schemes/schemes/schemes.component.ts");
/* harmony import */ var _scheme_default_scheme_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scheme-default/scheme-default.component */ "./src/app/schemes/scheme-default/scheme-default.component.ts");
/* harmony import */ var _scheme_scheme_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheme/scheme.component */ "./src/app/schemes/scheme/scheme.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _schemes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schemes-routing.module */ "./src/app/schemes/schemes-routing.module.ts");







class SchemesModule {
}
SchemesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SchemesModule });
SchemesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SchemesModule_Factory(t) { return new (t || SchemesModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _schemes_routing_module__WEBPACK_IMPORTED_MODULE_5__["SchemesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SchemesModule, { declarations: [_schemes_schemes_component__WEBPACK_IMPORTED_MODULE_1__["SchemesComponent"], _scheme_default_scheme_default_component__WEBPACK_IMPORTED_MODULE_2__["SchemeDefaultComponent"], _scheme_scheme_component__WEBPACK_IMPORTED_MODULE_3__["SchemeComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _schemes_routing_module__WEBPACK_IMPORTED_MODULE_5__["SchemesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_schemes_schemes_component__WEBPACK_IMPORTED_MODULE_1__["SchemesComponent"], _scheme_default_scheme_default_component__WEBPACK_IMPORTED_MODULE_2__["SchemeDefaultComponent"], _scheme_scheme_component__WEBPACK_IMPORTED_MODULE_3__["SchemeComponent"]],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _schemes_routing_module__WEBPACK_IMPORTED_MODULE_5__["SchemesRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/schemes/schemes/schemes.component.ts":
/*!******************************************************!*\
  !*** ./src/app/schemes/schemes/schemes.component.ts ***!
  \******************************************************/
/*! exports provided: SchemesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemesComponent", function() { return SchemesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_scheme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/scheme.service */ "./src/app/shared/services/scheme.service.ts");
/* harmony import */ var _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/side-bar/side-bar.component */ "./src/app/shared/side-bar/side-bar.component.ts");








class SchemesComponent {
    constructor(route, schemeService) {
        this.route = route;
        this.schemeService = schemeService;
        // Used for cleaning subscription
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.schemeService.schemeNames$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe((schemeNames) => {
            this.menuItems = schemeNames.map(p => ({
                id: p,
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faHome"],
                label: p,
                route: [p],
                children: []
            }));
            // Add new page as sticky bottom menu item
            // if (this.showNewPage) {
            //   const newPageMenuItem: MenuItem = { id: 'newPageMenuItemId', label: 'New Page', icon: faPlus, stickyBottom: true, onClick: () => this.showCreateNewDocument('', '') };
            //   this.menuItems.push(newPageMenuItem);
            // }
            //
            // // Add settings as sticky bottom menu item
            // if (this.showSettings) {
            //   const settingMenuItem: MenuItem = { id: 'settingsMenuItemId', label: 'Settings', icon: faCog, stickyBottom: true, route: ['settings'], collpaseOnClick: true };
            //   this.menuItems.push(settingMenuItem);
            // }
        });
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    createScheme() {
    }
}
SchemesComponent.ɵfac = function SchemesComponent_Factory(t) { return new (t || SchemesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_scheme_service__WEBPACK_IMPORTED_MODULE_5__["SchemeService"])); };
SchemesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SchemesComponent, selectors: [["emes-schemes"]], decls: 5, vars: 2, consts: [[1, "container-fluid", "h-100", "px-0"], [1, "row", "h-100", "no-gutters"], [1, "col-md-3", "col-lg-2", "d-none", "d-md-block", "bg-light", 3, "header", "menuItems"], [1, "col", "d-flex", "flex-column"]], template: function SchemesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "emes-side-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", "Bin")("menuItems", ctx.menuItems);
    } }, directives: [_shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__["SideBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGVtZXMvc2NoZW1lcy9zY2hlbWVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-schemes',
                templateUrl: './schemes.component.html',
                styleUrls: ['./schemes.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _shared_services_scheme_service__WEBPACK_IMPORTED_MODULE_5__["SchemeService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=schemes-schemes-module-es2015.js.map