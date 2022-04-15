(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["opc-servers-opc-servers-module"],{

/***/ "./src/app/opc-servers/opc-server-default/opc-server-default.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/opc-servers/opc-server-default/opc-server-default.component.ts ***!
  \********************************************************************************/
/*! exports provided: OpcServerDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcServerDefaultComponent", function() { return OpcServerDefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class OpcServerDefaultComponent {
    ngOnInit() { }
}
OpcServerDefaultComponent.ɵfac = function OpcServerDefaultComponent_Factory(t) { return new (t || OpcServerDefaultComponent)(); };
OpcServerDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OpcServerDefaultComponent, selectors: [["emes-opc-server-default"]], decls: 2, vars: 0, template: function OpcServerDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "opc-server-default works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wYy1zZXJ2ZXJzL29wYy1zZXJ2ZXItZGVmYXVsdC9vcGMtc2VydmVyLWRlZmF1bHQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpcServerDefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-opc-server-default',
                templateUrl: './opc-server-default.component.html',
                styleUrls: ['./opc-server-default.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/opc-servers/opc-server-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/opc-servers/opc-server-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: OpcServerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcServerRoutingModule", function() { return OpcServerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _opc_servers_opc_servers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opc-servers/opc-servers.component */ "./src/app/opc-servers/opc-servers/opc-servers.component.ts");
/* harmony import */ var _route_resolvers_opc_server_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route-resolvers/opc-server-resolver.service */ "./src/app/opc-servers/route-resolvers/opc-server-resolver.service.ts");
/* harmony import */ var _route_resolvers_opc_servers_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route-resolvers/opc-servers-resolver.service */ "./src/app/opc-servers/route-resolvers/opc-servers-resolver.service.ts");
/* harmony import */ var _opc_server_opc_server_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./opc-server/opc-server.component */ "./src/app/opc-servers/opc-server/opc-server.component.ts");
/* harmony import */ var _opc_server_default_opc_server_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./opc-server-default/opc-server-default.component */ "./src/app/opc-servers/opc-server-default/opc-server-default.component.ts");









const routes = [{
        path: '', component: _opc_servers_opc_servers_component__WEBPACK_IMPORTED_MODULE_2__["OpcServersComponent"], resolve: { opcServers: _route_resolvers_opc_servers_resolver_service__WEBPACK_IMPORTED_MODULE_4__["OpcServersResolverService"] }, children: [
            { path: ':opcServerId', component: _opc_server_opc_server_component__WEBPACK_IMPORTED_MODULE_5__["OpcServerComponent"], resolve: { opcServer: _route_resolvers_opc_server_resolver_service__WEBPACK_IMPORTED_MODULE_3__["OpcServerResolverService"] } },
            { path: '', component: _opc_server_default_opc_server_default_component__WEBPACK_IMPORTED_MODULE_6__["OpcServerDefaultComponent"] }
        ]
    }];
class OpcServerRoutingModule {
}
OpcServerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OpcServerRoutingModule });
OpcServerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OpcServerRoutingModule_Factory(t) { return new (t || OpcServerRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OpcServerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpcServerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/opc-servers/opc-server/opc-server.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/opc-servers/opc-server/opc-server.component.ts ***!
  \****************************************************************/
/*! exports provided: OpcServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcServerComponent", function() { return OpcServerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_notificator_notification_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/notificator/notification.model */ "./src/app/core/notificator/notification.model.ts");
/* harmony import */ var _shared_opc_server_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/opc-server-config.service */ "./src/app/opc-servers/shared/opc-server-config.service.ts");
/* harmony import */ var dynamic_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dynamic-form */ "./dist/dynamic-form/fesm2015/dynamic-form.js");
/* harmony import */ var _core_notificator_notificator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/notificator/notificator.service */ "./src/app/core/notificator/notificator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");














class OpcServerComponent {
    constructor(opcServerConfigService, dynamicFormService, notificatorService, route, router) {
        this.opcServerConfigService = opcServerConfigService;
        this.dynamicFormService = dynamicFormService;
        this.notificatorService = notificatorService;
        this.route = route;
        this.router = router;
        // Used for cleaning subscription
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Icon
        this.faEllipsisV = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEllipsisV"];
        // Indicator whether current opc server configuration is changed
        this.isChanged = false;
    }
    ngOnInit() {
        this.opcServerConfigService.opcServer$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(x => {
            this.opcServer = x;
        });
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    opcServerChanged() {
        this.isChanged = true;
    }
    endPointUrlChanged() {
        this.isChanged = true;
    }
    save() {
        this.opcServerConfigService.update(this.opcServer.id, this.opcServer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(x => {
            this.isChanged = false;
            this.notificatorService.sendNotification(new _core_notificator_notification_model__WEBPACK_IMPORTED_MODULE_4__["Notification"]('Save successfully', 'info'));
        }, error => {
            this.notificatorService.sendNotification(new _core_notificator_notification_model__WEBPACK_IMPORTED_MODULE_4__["Notification"]('Save failed', 'danger'));
        });
    }
    copy() {
        const newOpcServer = Object.assign(Object.assign({}, this.opcServer), { id: '', name: this.opcServer.name + '- copy' });
        this.opcServerConfigService.create(newOpcServer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(x => {
            this.notificatorService.sendNotification(new _core_notificator_notification_model__WEBPACK_IMPORTED_MODULE_4__["Notification"]('Copy successfully with ' + this.opcServer.name + '- copy', 'info'));
        });
    }
    delete() {
        const config = {
            headerText: 'Delete Opc Server',
            submitText: 'Ok',
            closeText: 'Cancel',
            onSubmit: () => this.doDeleteOPCServer(),
            onDismiss: () => {
            },
            notifications: [
                'Are you sure to delete the opc server?',
                this.opcServer.name
            ]
        };
        this.dynamicFormService.popNotification(config);
    }
    doDeleteOPCServer() {
        this.opcServerConfigService.delete(this.opcServer.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(x => {
            this.notificatorService.sendNotification(new _core_notificator_notification_model__WEBPACK_IMPORTED_MODULE_4__["Notification"]('OPC Server ' + this.opcServer.name + ' is deleted', 'info'));
            this.router.navigate(['..'], { relativeTo: this.route });
        });
    }
}
OpcServerComponent.ɵfac = function OpcServerComponent_Factory(t) { return new (t || OpcServerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_opc_server_config_service__WEBPACK_IMPORTED_MODULE_5__["OpcServerConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](dynamic_form__WEBPACK_IMPORTED_MODULE_6__["DynamicFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_notificator_notificator_service__WEBPACK_IMPORTED_MODULE_7__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
OpcServerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OpcServerComponent, selectors: [["emes-opc-server"]], decls: 61, vars: 40, consts: [[1, "container-fluid", "d-flex", "flex-column"], [1, "row", "justify-content-between", "align-items-center", "pt-3", "pb-2", "mb-3", "border-bottom"], [1, "col-auto"], [1, "btn-toolbar", "mb-2", "mb-md-0"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "mr-2", 3, "disabled", "click"], ["ngbDropdown", "", "placement", "bottom-right", 1, "btn-group", "mr-2"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-sm", "btn-link", "dropdown-icon"], [1, "text-primary", "pointer", 3, "icon", "fixedWidth"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["ngbDropdownItem", "", 3, "click"], [1, "ml-2", "mr-2"], [1, "form-row"], [1, "form-group", "col-md-6", "col-sm-12"], ["for", "inputId"], ["type", "text", "id", "inputId", "name", "inputId", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputTargetWeight"], ["type", "text", "id", "inputTargetWeight", "name", "inputTargetWeight", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputName"], ["type", "text", "id", "inputName", "name", "inputName", "placeholder", "Enter Name here", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["for", "inputLine"], ["type", "text", "id", "inputLine", "name", "inputLine", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["type", "text", "id", "inputTcpPort", "name", "inputTcpPort", "placeholder", "Enter tcp port here", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["type", "text", "id", "inputHttpsPort", "name", "inputHttpsPort", "placeholder", "Enter https port here", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], [1, "form-check", "col-md-6", "col-sm-12"], ["type", "checkbox", "id", "checkboxInternal", "name", "checkboxInternal", "placeholder", "Enter Name here", 1, "form-check-input", 3, "ngModel", "ngModelChange", "input"], ["for", "inputName", 1, "form-check-label"]], template: function OpcServerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OpcServerComponent_Template_button_click_8_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OpcServerComponent_Template_button_click_15_listener() { return ctx.copy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OpcServerComponent_Template_button_click_18_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OpcServerComponent_Template_input_ngModelChange_26_listener($event) { return ctx.opcServer.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OpcServerComponent_Template_input_ngModelChange_31_listener($event) { return ctx.opcServer.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OpcServerComponent_Template_input_ngModelChange_37_listener($event) { return ctx.opcServer.name = $event; })("input", function OpcServerComponent_Template_input_input_37_listener() { return ctx.opcServerChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OpcServerComponent_Template_input_ngModelChange_42_listener($event) { return ctx.opcServer.address = $event; })("input", function OpcServerComponent_Template_input_input_42_listener() { return ctx.opcServerChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OpcServerComponent_Template_input_ngModelChange_48_listener($event) { return ctx.opcServer.tcpPort = $event; })("input", function OpcServerComponent_Template_input_input_48_listener() { return ctx.opcServerChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OpcServerComponent_Template_input_ngModelChange_53_listener($event) { return ctx.opcServer.httpsPort = $event; })("input", function OpcServerComponent_Template_input_input_53_listener() { return ctx.opcServerChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OpcServerComponent_Template_input_ngModelChange_57_listener($event) { return ctx.opcServer.internal = $event; })("input", function OpcServerComponent_Template_input_input_57_listener() { return ctx.opcServerChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 20, "OPC.OPC SERVER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isChanged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 22, "GENERAL.SAVE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEllipsisV)("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 24, "GENERAL.COPY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 26, "GENERAL.DELETE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.opcServer.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 28, "GENERAL.STATUS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.opcServer.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 30, "GENERAL.NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.opcServer.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 32, "OPC.ADDRESS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.opcServer.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 34, "OPC.TCP PORT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.opcServer.tcpPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 36, "OPC.HTTPS PORT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.opcServer.httpsPort);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.opcServer.internal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 38, "GENERAL.INTERNAL"));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownToggle"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FaIconComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownItem"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["CheckboxControlValueAccessor"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n\n.dropdown-icon.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3BjLXNlcnZlcnMvb3BjLXNlcnZlci9DOlxcRGV2XFxJbnRlcm5hbFxcQ2xpZW50QXBwLTIvc3JjXFxhcHBcXG9wYy1zZXJ2ZXJzXFxvcGMtc2VydmVyXFxvcGMtc2VydmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vcGMtc2VydmVycy9vcGMtc2VydmVyL29wYy1zZXJ2ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9vcGMtc2VydmVycy9vcGMtc2VydmVyL29wYy1zZXJ2ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uZHJvcGRvd24taWNvbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5kcm9wZG93bi1pY29uLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpcServerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-opc-server',
                templateUrl: './opc-server.component.html',
                styleUrls: ['./opc-server.component.scss']
            }]
    }], function () { return [{ type: _shared_opc_server_config_service__WEBPACK_IMPORTED_MODULE_5__["OpcServerConfigService"] }, { type: dynamic_form__WEBPACK_IMPORTED_MODULE_6__["DynamicFormService"] }, { type: _core_notificator_notificator_service__WEBPACK_IMPORTED_MODULE_7__["NotificatorService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/opc-servers/opc-servers.module.ts":
/*!***************************************************!*\
  !*** ./src/app/opc-servers/opc-servers.module.ts ***!
  \***************************************************/
/*! exports provided: OpcServersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcServersModule", function() { return OpcServersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _opc_servers_opc_servers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opc-servers/opc-servers.component */ "./src/app/opc-servers/opc-servers/opc-servers.component.ts");
/* harmony import */ var _opc_server_opc_server_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opc-server/opc-server.component */ "./src/app/opc-servers/opc-server/opc-server.component.ts");
/* harmony import */ var _opc_server_default_opc_server_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./opc-server-default/opc-server-default.component */ "./src/app/opc-servers/opc-server-default/opc-server-default.component.ts");
/* harmony import */ var _opc_server_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./opc-server-routing.module */ "./src/app/opc-servers/opc-server-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");








class OpcServersModule {
}
OpcServersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OpcServersModule });
OpcServersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OpcServersModule_Factory(t) { return new (t || OpcServersModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"],
            _opc_server_routing_module__WEBPACK_IMPORTED_MODULE_4__["OpcServerRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OpcServersModule, { declarations: [_opc_servers_opc_servers_component__WEBPACK_IMPORTED_MODULE_1__["OpcServersComponent"], _opc_server_opc_server_component__WEBPACK_IMPORTED_MODULE_2__["OpcServerComponent"], _opc_server_default_opc_server_default_component__WEBPACK_IMPORTED_MODULE_3__["OpcServerDefaultComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"],
        _opc_server_routing_module__WEBPACK_IMPORTED_MODULE_4__["OpcServerRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpcServersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_opc_servers_opc_servers_component__WEBPACK_IMPORTED_MODULE_1__["OpcServersComponent"], _opc_server_opc_server_component__WEBPACK_IMPORTED_MODULE_2__["OpcServerComponent"], _opc_server_default_opc_server_default_component__WEBPACK_IMPORTED_MODULE_3__["OpcServerDefaultComponent"]],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"],
                    _opc_server_routing_module__WEBPACK_IMPORTED_MODULE_4__["OpcServerRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/opc-servers/opc-servers/opc-servers.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/opc-servers/opc-servers/opc-servers.component.ts ***!
  \******************************************************************/
/*! exports provided: OpcServersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcServersComponent", function() { return OpcServersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var dynamic_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dynamic-form */ "./dist/dynamic-form/fesm2015/dynamic-form.js");
/* harmony import */ var _shared_opc_server_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/opc-server-config.service */ "./src/app/opc-servers/shared/opc-server-config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/side-bar/side-bar.component */ "./src/app/shared/side-bar/side-bar.component.ts");










class OpcServersComponent {
    constructor(opcServerConfigService, dynamicFormService, route, router) {
        this.opcServerConfigService = opcServerConfigService;
        this.dynamicFormService = dynamicFormService;
        this.route = route;
        this.router = router;
        // Used for cleaning subscription
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.opcServerConfigService.opcServers$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(x => {
            this.menuItems = x.map(opc => ({
                id: opc.id,
                label: opc.name,
                icon: null,
                route: [opc.id],
                children: []
            }));
            const newPageMenuItem = {
                id: 'newPageMenuItemId',
                label: 'New Page',
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlus"],
                stickyBottom: true,
                onClick: () => this.showCreateNewOpcServer('', '')
            };
            this.menuItems.push(newPageMenuItem);
        });
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    showCreateNewOpcServer(path, sectionId) {
        const config = {
            headerText: 'Create a Opc Server',
            submitText: 'OK',
            closeText: 'Cancel',
            onSubmit: (e) => this.doCreateOpcServer(e),
            onDismiss: (e) => {
            },
            extraButtons: [],
            fields: [
                {
                    type: 'input',
                    label: 'Name',
                    name: 'name',
                    placeholder: 'Enter a opc server name',
                    validation: [
                        dynamic_form__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].required('Opc Server name required'),
                    ]
                },
                {
                    type: 'input',
                    label: 'Address',
                    name: 'address',
                    placeholder: 'Enter the address',
                    validation: [
                        dynamic_form__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].required('Address required'),
                    ]
                },
                {
                    type: 'checkbox',
                    label: 'Is internal',
                    name: 'internal',
                    placeholder: 'Is Internal',
                    validation: []
                },
                {
                    type: 'number',
                    label: 'Tcp binding port',
                    name: 'tcpPort',
                    placeholder: 'Enter the tcp binding port',
                    validation: [
                        dynamic_form__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].required('Tcp binding port required'),
                    ]
                },
                {
                    type: 'number',
                    label: 'Https binding port',
                    name: 'httpsPort',
                    placeholder: 'Enter the https binding port',
                    validation: [
                        dynamic_form__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].required('Https binding port required'),
                    ]
                },
                {
                    type: 'input',
                    label: 'Config path',
                    name: 'configPath',
                    placeholder: 'Enter the config path',
                    validation: [
                        dynamic_form__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].required('Config path required'),
                    ]
                },
            ]
        };
        this.dynamicFormService.popDynamicFormModal(config);
    }
    doCreateOpcServer(opcServer) {
        this.opcServerConfigService.create(opcServer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe();
    }
}
OpcServersComponent.ɵfac = function OpcServersComponent_Factory(t) { return new (t || OpcServersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_opc_server_config_service__WEBPACK_IMPORTED_MODULE_5__["OpcServerConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](dynamic_form__WEBPACK_IMPORTED_MODULE_4__["DynamicFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
OpcServersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OpcServersComponent, selectors: [["emes-opc-servers"]], decls: 5, vars: 2, consts: [[1, "container-fluid", "h-100", "px-0"], [1, "row", "h-100", "no-gutters"], [1, "col-md-3", "col-lg-2", "d-none", "d-md-block", "bg-light", 3, "header", "menuItems"], [1, "col-md-9", "col-lg-10", "d-flex", "flex-column", "w-100"]], template: function OpcServersComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", "OPC.OPC SERVERS")("menuItems", ctx.menuItems);
    } }, directives: [_shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_7__["SideBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wYy1zZXJ2ZXJzL29wYy1zZXJ2ZXJzL29wYy1zZXJ2ZXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpcServersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-opc-servers',
                templateUrl: './opc-servers.component.html',
                styleUrls: ['./opc-servers.component.scss']
            }]
    }], function () { return [{ type: _shared_opc_server_config_service__WEBPACK_IMPORTED_MODULE_5__["OpcServerConfigService"] }, { type: dynamic_form__WEBPACK_IMPORTED_MODULE_4__["DynamicFormService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/opc-servers/route-resolvers/opc-server-resolver.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/opc-servers/route-resolvers/opc-server-resolver.service.ts ***!
  \****************************************************************************/
/*! exports provided: OpcServerResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcServerResolverService", function() { return OpcServerResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_opc_server_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/opc-server-config.service */ "./src/app/opc-servers/shared/opc-server-config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class OpcServerResolverService {
    constructor(opcServerConfigService, router) {
        this.opcServerConfigService = opcServerConfigService;
        this.router = router;
    }
    resolve(route, state) {
        const id = route.paramMap.get('opcServerId');
        return this.opcServerConfigService.get(id);
    }
}
OpcServerResolverService.ɵfac = function OpcServerResolverService_Factory(t) { return new (t || OpcServerResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_opc_server_config_service__WEBPACK_IMPORTED_MODULE_1__["OpcServerConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
OpcServerResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OpcServerResolverService, factory: OpcServerResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpcServerResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_opc_server_config_service__WEBPACK_IMPORTED_MODULE_1__["OpcServerConfigService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/opc-servers/route-resolvers/opc-servers-resolver.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/opc-servers/route-resolvers/opc-servers-resolver.service.ts ***!
  \*****************************************************************************/
/*! exports provided: OpcServersResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcServersResolverService", function() { return OpcServersResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_opc_server_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/opc-server-config.service */ "./src/app/opc-servers/shared/opc-server-config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class OpcServersResolverService {
    constructor(opcServerConfigService, router) {
        this.opcServerConfigService = opcServerConfigService;
        this.router = router;
    }
    resolve(route, state) {
        return this.opcServerConfigService.getAll(0, 50);
    }
}
OpcServersResolverService.ɵfac = function OpcServersResolverService_Factory(t) { return new (t || OpcServersResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_opc_server_config_service__WEBPACK_IMPORTED_MODULE_1__["OpcServerConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
OpcServersResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OpcServersResolverService, factory: OpcServersResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpcServersResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_opc_server_config_service__WEBPACK_IMPORTED_MODULE_1__["OpcServerConfigService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/opc-servers/shared/opc-server-config.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/opc-servers/shared/opc-server-config.service.ts ***!
  \*****************************************************************/
/*! exports provided: OpcServerConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpcServerConfigService", function() { return OpcServerConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class OpcServerConfigService {
    constructor(http) {
        this.http = http;
        this.opcConfigUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'api/v1/opc-configs';
        this.opcServers$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.opcServer$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.opcServers = [
            {
                id: '1',
                name: 'OPC',
                address: '0.0.0.0',
                internal: false,
                tcpPort: 12345,
                httpsPort: 1234,
                status: 'Running'
            }
        ];
    }
    get(id) {
        // const url = `${this.opcConfigUrl}/${id}`;
        // return this.http.get<OPCServer>(url).pipe(tap(x => {
        //   this.opcServer$.next(x);
        // }));
        const opcServer = this.opcServers.find(o => o.id === id);
        this.opcServer$.next(opcServer);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(opcServer);
    }
    getAll(page, size) {
        // const url = `${this.opcConfigUrl}`;
        // return this.http.get<OPCServer[]>(url).pipe(tap(x => {
        //   this.opcServers$.next(x);
        // }));
        this.opcServers$.next(this.opcServers);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.opcServers);
    }
    create(opcServer) {
        // const url = `${this.opcConfigUrl}`;
        // return this.http.post(url, opcServer).pipe(tap(x => {
        //   const opcServers = this.opcServers$.getValue();
        //   opcServers.push({...opcServer, id: x, status: 'New'});
        //   this.opcServers$.next(opcServers);
        // }));
        const opcServers = this.opcServers$.getValue();
        opcServers.push(Object.assign(Object.assign({}, opcServer), { id: '1123', status: 'New' }));
        this.opcServers$.next(opcServers);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(opcServers);
    }
    update(id, opcServer) {
        // const url = `${this.opcConfigUrl}/${id}`;
        // return this.http.put(url, opcServer).pipe(tap(x => {
        //   const opcServers = this.opcServers$.getValue();
        //   let existed = opcServers.find(o => o.id === id);
        //   if (existed) {
        //     existed = {...opcServer};
        //   }
        //   this.opcServers$.next(opcServers);
        // }));
        const opcServers = this.opcServers$.getValue();
        let existed = opcServers.find(o => o.id === id);
        if (existed) {
            existed = Object.assign({}, opcServer);
        }
        this.opcServers$.next(opcServers);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(opcServers);
    }
    delete(id) {
        // const url = `${this.opcConfigUrl}/${id}`;
        // return this.http.delete(url).pipe(tap(x => {
        //   const opcServers = this.opcServers$.getValue();
        //   const idx = opcServers.findIndex(o => o.id === id);
        //   if (idx > -1) {
        //     opcServers.splice(idx, 1);
        //   }
        //   this.opcServers$.next(opcServers);
        // }));
        const opcServers = this.opcServers$.getValue();
        const idx = opcServers.findIndex(o => o.id === id);
        if (idx > -1) {
            opcServers.splice(idx, 1);
        }
        this.opcServers$.next(opcServers);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(opcServers);
    }
}
OpcServerConfigService.ɵfac = function OpcServerConfigService_Factory(t) { return new (t || OpcServerConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
OpcServerConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OpcServerConfigService, factory: OpcServerConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpcServerConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=opc-servers-opc-servers-module-es2015.js.map