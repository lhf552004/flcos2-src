(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/users.component */ "./src/app/admin/users/users.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin/admin.component.ts");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roles/roles.component */ "./src/app/admin/roles/roles.component.ts");
/* harmony import */ var _menus_menus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menus/menus.component */ "./src/app/admin/menus/menus.component.ts");
/* harmony import */ var _route_resolvers_users_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./route-resolvers/users-resolver.service */ "./src/app/admin/route-resolvers/users-resolver.service.ts");
/* harmony import */ var _route_resolvers_roles_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./route-resolvers/roles-resolver.service */ "./src/app/admin/route-resolvers/roles-resolver.service.ts");
/* harmony import */ var _route_resolvers_menus_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./route-resolvers/menus-resolver.service */ "./src/app/admin/route-resolvers/menus-resolver.service.ts");











const routes = [{
        path: '', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], children: [
            { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"], resolve: { users: _route_resolvers_users_resolver_service__WEBPACK_IMPORTED_MODULE_6__["UsersResolverService"] } },
            { path: 'roles', component: _roles_roles_component__WEBPACK_IMPORTED_MODULE_4__["RolesComponent"], resolve: { roles: _route_resolvers_roles_resolver_service__WEBPACK_IMPORTED_MODULE_7__["RolesResolverService"] } },
            { path: 'menus', component: _menus_menus_component__WEBPACK_IMPORTED_MODULE_5__["MenusComponent"], resolve: { menus: _route_resolvers_menus_resolver_service__WEBPACK_IMPORTED_MODULE_8__["MenusResolverService"], roles: _route_resolvers_roles_resolver_service__WEBPACK_IMPORTED_MODULE_7__["RolesResolverService"] } }
        ]
    }];
class AdminRoutingModule {
}
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users/users.component */ "./src/app/admin/users/users.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roles/roles.component */ "./src/app/admin/roles/roles.component.ts");
/* harmony import */ var _menus_menus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menus/menus.component */ "./src/app/admin/menus/menus.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin/admin.component.ts");
/* harmony import */ var _user_viewer_user_viewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-viewer/user-viewer.component */ "./src/app/admin/user-viewer/user-viewer.component.ts");
/* harmony import */ var _roles_selector_roles_selector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./roles-selector/roles-selector.component */ "./src/app/admin/roles-selector/roles-selector.component.ts");










class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_users_users_component__WEBPACK_IMPORTED_MODULE_1__["UsersComponent"], _roles_roles_component__WEBPACK_IMPORTED_MODULE_4__["RolesComponent"], _menus_menus_component__WEBPACK_IMPORTED_MODULE_5__["MenusComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], _user_viewer_user_viewer_component__WEBPACK_IMPORTED_MODULE_7__["UserViewerComponent"], _roles_selector_roles_selector_component__WEBPACK_IMPORTED_MODULE_8__["RolesSelectorComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_users_users_component__WEBPACK_IMPORTED_MODULE_1__["UsersComponent"], _roles_roles_component__WEBPACK_IMPORTED_MODULE_4__["RolesComponent"], _menus_menus_component__WEBPACK_IMPORTED_MODULE_5__["MenusComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], _user_viewer_user_viewer_component__WEBPACK_IMPORTED_MODULE_7__["UserViewerComponent"], _roles_selector_roles_selector_component__WEBPACK_IMPORTED_MODULE_8__["RolesSelectorComponent"]],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/admin/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");





class AdminComponent {
    constructor() {
        // Icons
        this.faUsers = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUsers"];
        this.faUserTag = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUserTag"];
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBars"];
        this.faSitemap = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSitemap"];
    }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["emes-admin"]], decls: 23, vars: 9, consts: [[1, "container-fluid", "h-100", "d-flex", "pr-0"], [1, "row", "flex-fill"], [1, "col-2", "border-right", "gray-200-background", "pt-2"], [1, "nav", "flex-column"], [1, "nav-item", "d-flex", "justify-content-between"], [1, "nav-link"], [1, "text-capitalize", "font-weight-bold"], [1, "dropdown-divider", "gray-500-border-top", "mx-n3"], ["routerLinkActive", "active", 1, "nav-link", "pointer", 3, "routerLink"], [3, "icon", "fixedWidth"], [1, "col", "d-flex"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Roles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Menus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faUsers)("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faUserTag)("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "menus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faBars)("fixedWidth", true);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/admin/menus/menus.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/menus/menus.component.ts ***!
  \************************************************/
/*! exports provided: MenusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusComponent", function() { return MenusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var dynamic_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dynamic-form */ "./dist/dynamic-form/fesm2015/dynamic-form.js");
/* harmony import */ var _core_user_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/user/role.service */ "./src/app/core/user/role.service.ts");
/* harmony import */ var _core_layout_menu_menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/layout/menu/menu.service */ "./src/app/core/layout/menu/menu.service.ts");
/* harmony import */ var data_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! data-table */ "./dist/data-table/fesm2015/data-table.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");











class MenusComponent {
    constructor(roleService, menuService, dynamicFormService) {
        this.roleService = roleService;
        this.menuService = menuService;
        this.dynamicFormService = dynamicFormService;
        // Indicator whether current user is admin
        this.isAdmin = true;
        this.closeResult = '';
        // Used for cleaning subscription
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        const columnDefinition = [
            { id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none' },
            { id: '2', name: 'name', label: 'Name', type: 'text', visible: true, searchable: false, filterMode: 'text' },
            { id: '3', name: 'url', label: 'Url', type: 'text', visible: true, searchable: false, filterMode: 'text' },
            { id: '4', name: 'roleName', label: 'Role', type: 'text', visible: true, searchable: false, filterMode: 'text' },
            {
                id: '4',
                name: 'view',
                label: 'View',
                type: 'icon',
                visible: true,
                searchable: false,
                filterMode: 'none',
                click: this.viewMenu.bind(this)
            },
            {
                id: '5',
                name: 'delete',
                label: 'Delete',
                type: 'icon',
                visible: true,
                searchable: false,
                filterMode: 'none',
                click: this.deleteMenu.bind(this)
            },
        ];
        this.menuService.allMenus$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(users => {
            this.settings = {
                selectableRows: false,
                columnDefinitions: columnDefinition,
                data: users.map(t => { var _a; return (Object.assign(Object.assign({}, t), { roleName: (_a = t.role) === null || _a === void 0 ? void 0 : _a.name, view: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faExternalLinkAlt"], delete: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTrash"] })); }),
                toolBar: {
                    right: [
                        ...this.isAdmin ? [{
                                name: 'New Menu',
                                type: 'button',
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlus"],
                                callback: this.createMenu.bind(this)
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
    createMenu() {
        const config = {
            headerText: 'Create a menu',
            submitText: 'OK',
            closeText: 'Cancel',
            onSubmit: (e) => this.doCreateMenu(e),
            onDismiss: (e) => {
            },
            extraButtons: [],
            fields: [
                {
                    type: 'input',
                    label: 'Name',
                    name: 'name',
                    placeholder: 'Enter the menu name',
                    validation: [
                        dynamic_form__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].required('Name required'),
                    ]
                }, {
                    type: 'input',
                    label: 'Url',
                    name: 'url',
                    placeholder: 'Enter the url',
                    validation: [
                        dynamic_form__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].required('Url required'),
                    ]
                }, {
                    type: 'select',
                    label: 'Role',
                    name: 'role',
                    options: this.roleService.roles$.getValue().map(x => ({ key: x, value: x.name })),
                    placeholder: 'Choose existed Sprint Scenario',
                    validation: []
                }
            ]
        };
        this.dynamicFormService.popDynamicFormModal(config);
    }
    doCreateMenu(newMenu) {
        this.menuService.createMenu(newMenu).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe();
    }
    viewMenu(menu) {
        var _a;
        const config = {
            headerText: 'View a menu',
            submitText: 'OK',
            closeText: 'Cancel',
            onSubmit: (e) => this.doUpdateMenu(menu.id, e),
            onDismiss: (e) => {
            },
            extraButtons: [],
            fields: [
                {
                    type: 'input',
                    label: 'Name',
                    name: 'name',
                    value: menu.name,
                    placeholder: 'Enter the menu name',
                    validation: [
                        dynamic_form__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].required('Name required'),
                    ]
                }, {
                    type: 'input',
                    label: 'Url',
                    name: 'url',
                    value: menu.url,
                    placeholder: 'Enter the url',
                    validation: [
                        dynamic_form__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].required('Url required'),
                    ]
                }, {
                    type: 'select',
                    label: 'Role',
                    name: 'role',
                    value: (_a = menu.role) === null || _a === void 0 ? void 0 : _a.name,
                    options: this.roleService.roles$.getValue().map(x => ({ key: x, value: x.name })),
                    placeholder: 'Choose a role',
                    validation: []
                }
            ]
        };
        this.dynamicFormService.popDynamicFormModal(config);
    }
    doUpdateMenu(id, menu) {
        this.menuService.update(id, menu).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe();
    }
    deleteMenu(menu) {
        const config = {
            headerText: 'Confirm Delete Menu.',
            submitText: 'Ok',
            closeText: 'Cancel',
            onSubmit: () => this.doDelete(menu),
            onDismiss: () => {
            },
            notifications: [`Are you Sure you want to delete menu '${menu.name}'?`]
        };
        this.dynamicFormService.popNotification(config);
    }
    doDelete(menu) {
        this.menuService.delete(menu.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(x => {
        });
    }
}
MenusComponent.ɵfac = function MenusComponent_Factory(t) { return new (t || MenusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_user_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_layout_menu_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](dynamic_form__WEBPACK_IMPORTED_MODULE_4__["DynamicFormService"])); };
MenusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenusComponent, selectors: [["emes-menus"]], decls: 5, vars: 4, consts: [[1, "d-flex", "justify-content-between", "flex-wrap", "flex-md-nowrap", "align-items-center", "pt-3", "pb-2", "mb-3", "border-bottom"], [1, "d-flex", "flex-fill", 3, "settings"]], template: function MenusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "csps-data-table", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "ADMIN.MENUS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings);
    } }, directives: [data_table__WEBPACK_IMPORTED_MODULE_7__["DataTableComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vbWVudXMvQzpcXERldlxcSW50ZXJuYWxcXENsaWVudEFwcC0yL3NyY1xcYXBwXFxhZG1pblxcbWVudXNcXG1lbnVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9tZW51cy9tZW51cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21lbnVzL21lbnVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-menus',
                templateUrl: './menus.component.html',
                styleUrls: ['./menus.component.scss']
            }]
    }], function () { return [{ type: _core_user_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"] }, { type: _core_layout_menu_menu_service__WEBPACK_IMPORTED_MODULE_6__["MenuService"] }, { type: dynamic_form__WEBPACK_IMPORTED_MODULE_4__["DynamicFormService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/roles-selector/roles-selector.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/roles-selector/roles-selector.component.ts ***!
  \******************************************************************/
/*! exports provided: RolesSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesSelectorComponent", function() { return RolesSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var data_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! data-table */ "./dist/data-table/fesm2015/data-table.js");




class RolesSelectorComponent {
    constructor() {
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dismissed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Indicate roles selected
        this.roleSelected = false;
        // The list of group members, name and description of the group.
        // A deep copy of the config.group object is needed in case user decide to cancel the form
        this.roles = [];
        this.selectedRoles = [];
    }
    ngOnInit() {
        this.buildTableSettings();
    }
    ngOnDestroy() {
    }
    buildTableSettings() {
        this.roles = this.config.roles;
        const columnDefinition = [
            { id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: true, filterMode: 'none' },
            { id: '2', name: 'name', label: 'Role name', type: 'text', visible: true, searchable: true, filterMode: 'select' }
        ];
        this.settings = {
            selectableRows: true,
            columnDefinitions: columnDefinition,
            data: this.roles.map(r => (Object.assign(Object.assign({}, r), { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"] }))),
            toolBar: {
                left: [{ name: 'Select', type: 'button', callback: this.selectRoles.bind(this) }],
                right: [{ type: 'search' }]
            },
            groupBy: []
        };
    }
    selectRoles(rows) {
        this.selectedRoles = this.roles.filter(r => rows.map(x => x.data.id).includes(r.id));
        if (this.selectedRoles.length > 0) {
            this.roleSelected = true;
        }
        else {
            this.roleSelected = false;
        }
    }
    submitForm(method) {
        this.submitted.emit(this.selectedRoles);
    }
    dismissForm(method) {
        this.dismissed.emit(method);
    }
}
RolesSelectorComponent.ɵfac = function RolesSelectorComponent_Factory(t) { return new (t || RolesSelectorComponent)(); };
RolesSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolesSelectorComponent, selectors: [["emes-roles-selector"]], inputs: { config: "config" }, outputs: { submitted: "submitted", dismissed: "dismissed" }, decls: 14, vars: 2, consts: [[1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "d-flex", "flex-column", 2, "height", "60vh"], [1, "d-flex", "flex-fill", 3, "settings"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function RolesSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Select Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesSelectorComponent_Template_button_click_4_listener() { return ctx.dismissForm("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "csps-data-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesSelectorComponent_Template_button_click_10_listener() { return ctx.dismissForm("Close button"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RolesSelectorComponent_Template_button_click_12_listener() { return ctx.submitForm("OK"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.roleSelected);
    } }, directives: [data_table__WEBPACK_IMPORTED_MODULE_2__["DataTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JvbGVzLXNlbGVjdG9yL3JvbGVzLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesSelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-roles-selector',
                templateUrl: './roles-selector.component.html',
                styleUrls: ['./roles-selector.component.scss']
            }]
    }], function () { return []; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dismissed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/admin/roles/roles.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/roles/roles.component.ts ***!
  \************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var dynamic_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dynamic-form */ "./dist/dynamic-form/fesm2015/dynamic-form.js");
/* harmony import */ var _core_user_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/user/role.service */ "./src/app/core/user/role.service.ts");
/* harmony import */ var data_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! data-table */ "./dist/data-table/fesm2015/data-table.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










class RolesComponent {
    constructor(roleService, dynamicFormService) {
        this.roleService = roleService;
        this.dynamicFormService = dynamicFormService;
        // Indicator whether current user is admin
        this.isAdmin = true;
        // Used for cleaning subscription
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        const columnDefinition = [
            { id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: true, filterMode: 'none' },
            { id: '2', name: 'name', label: 'Name', type: 'text', visible: true, searchable: true, filterMode: 'text' },
            {
                id: '4',
                name: 'view',
                label: 'View',
                type: 'icon',
                visible: true,
                searchable: false,
                filterMode: 'none',
                click: this.viewRole.bind(this)
            },
            {
                id: '5',
                name: 'delete',
                label: 'Delete',
                type: 'icon',
                visible: true,
                searchable: false,
                filterMode: 'none',
                click: this.deleteRole.bind(this)
            },
        ];
        this.roleService.roles$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(users => {
            this.settings = {
                selectableRows: false,
                columnDefinitions: columnDefinition,
                data: users.map(t => (Object.assign(Object.assign({}, t), { view: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faExternalLinkAlt"], delete: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTrash"] }))),
                toolBar: {
                    right: [
                        ...this.isAdmin ? [{
                                name: 'New Role',
                                type: 'button',
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlus"],
                                callback: this.createRole.bind(this)
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
    createRole() {
        const config = {
            headerText: 'Create a role',
            submitText: 'OK',
            closeText: 'Cancel',
            onSubmit: (e) => this.doCreateRole(e.name),
            onDismiss: (e) => {
            },
            extraButtons: [],
            fields: [
                {
                    type: 'input',
                    label: 'Name',
                    name: 'name',
                    placeholder: 'Enter a role name',
                    validation: [
                        dynamic_form__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].required('Role name required'),
                    ]
                }
            ]
        };
        this.dynamicFormService.popDynamicFormModal(config);
    }
    doCreateRole(name) {
        this.roleService.create(name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe();
    }
    viewRole(role) {
        const config = {
            headerText: 'Create a role',
            submitText: 'OK',
            closeText: 'Cancel',
            onSubmit: (e) => this.doRename(role.id, e.name),
            onDismiss: (e) => {
            },
            extraButtons: [],
            fields: [
                {
                    type: 'input',
                    label: 'Name',
                    name: 'name',
                    value: role.name,
                    placeholder: 'Enter a role name',
                    validation: [
                        dynamic_form__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].required('Role name required'),
                    ]
                }
            ]
        };
        this.dynamicFormService.popDynamicFormModal(config);
    }
    doRename(id, newName) {
        this.roleService.rename(id, newName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe();
    }
    deleteRole() {
    }
}
RolesComponent.ɵfac = function RolesComponent_Factory(t) { return new (t || RolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_user_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](dynamic_form__WEBPACK_IMPORTED_MODULE_4__["DynamicFormService"])); };
RolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RolesComponent, selectors: [["emes-roles"]], decls: 5, vars: 4, consts: [[1, "d-flex", "justify-content-between", "flex-wrap", "flex-md-nowrap", "align-items-center", "pt-3", "pb-2", "mb-3", "border-bottom"], [1, "d-flex", "flex-fill", 3, "settings"]], template: function RolesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "csps-data-table", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "ADMIN.ROLES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings);
    } }, directives: [data_table__WEBPACK_IMPORTED_MODULE_6__["DataTableComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vcm9sZXMvQzpcXERldlxcSW50ZXJuYWxcXENsaWVudEFwcC0yL3NyY1xcYXBwXFxhZG1pblxccm9sZXNcXHJvbGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9yb2xlcy9yb2xlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-roles',
                templateUrl: './roles.component.html',
                styleUrls: ['./roles.component.scss']
            }]
    }], function () { return [{ type: _core_user_role_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"] }, { type: dynamic_form__WEBPACK_IMPORTED_MODULE_4__["DynamicFormService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/route-resolvers/menus-resolver.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/route-resolvers/menus-resolver.service.ts ***!
  \*****************************************************************/
/*! exports provided: MenusResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenusResolverService", function() { return MenusResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_layout_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/layout/menu/menu.service */ "./src/app/core/layout/menu/menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class MenusResolverService {
    constructor(menuService, router) {
        this.menuService = menuService;
        this.router = router;
    }
    resolve(route, state) {
        return this.menuService.getMenus();
    }
}
MenusResolverService.ɵfac = function MenusResolverService_Factory(t) { return new (t || MenusResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_layout_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MenusResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenusResolverService, factory: MenusResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenusResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _core_layout_menu_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/route-resolvers/roles-resolver.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/route-resolvers/roles-resolver.service.ts ***!
  \*****************************************************************/
/*! exports provided: RolesResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesResolverService", function() { return RolesResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_user_role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/user/role.service */ "./src/app/core/user/role.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class RolesResolverService {
    constructor(roleService, router) {
        this.roleService = roleService;
        this.router = router;
    }
    resolve(route, state) {
        return this.roleService.getRoles();
    }
}
RolesResolverService.ɵfac = function RolesResolverService_Factory(t) { return new (t || RolesResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_user_role_service__WEBPACK_IMPORTED_MODULE_1__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RolesResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RolesResolverService, factory: RolesResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RolesResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _core_user_role_service__WEBPACK_IMPORTED_MODULE_1__["RoleService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/route-resolvers/users-resolver.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/route-resolvers/users-resolver.service.ts ***!
  \*****************************************************************/
/*! exports provided: UsersResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersResolverService", function() { return UsersResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class UsersResolverService {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    resolve(route, state) {
        return this.userService.getUsers();
    }
}
UsersResolverService.ɵfac = function UsersResolverService_Factory(t) { return new (t || UsersResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UsersResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersResolverService, factory: UsersResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _core_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/user-viewer/user-viewer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/user-viewer/user-viewer.component.ts ***!
  \************************************************************/
/*! exports provided: UserViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewerComponent", function() { return UserViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _roles_selector_roles_selector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../roles-selector/roles-selector.component */ "./src/app/admin/roles-selector/roles-selector.component.ts");
/* harmony import */ var dynamic_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dynamic-form */ "./dist/dynamic-form/fesm2015/dynamic-form.js");
/* harmony import */ var _core_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var _core_user_role_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/user/role.service */ "./src/app/core/user/role.service.ts");
/* harmony import */ var data_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! data-table */ "./dist/data-table/fesm2015/data-table.js");










class UserViewerComponent {
    constructor(dynamicFormService, userService, roleService) {
        this.dynamicFormService = dynamicFormService;
        this.userService = userService;
        this.roleService = roleService;
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dismissed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // The list of group members, name and description of the group.
        // A deep copy of the config.group object is needed in case user decide to cancel the form
        this.roles = [];
        // The list of team members that have been added and removed
        // It is necessary to keep track of those to allow the user to cancel the form
        this.addedRoles = [];
        this.removedRoles = [];
        // Used for cleaning subscription
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.buildTableSettings();
    }
    ngOnChanges() {
        this.buildTableSettings();
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
    buildTableSettings() {
        this.name = this.config.user.firstName + ' ' + this.config.user.lastName;
        this.roles = this.config.user.roles;
        const columnDefinition = [
            { id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: true, filterMode: 'none' },
            { id: '2', name: 'name', label: 'Role name', type: 'text', visible: true, searchable: true, filterMode: 'select' },
            {
                id: '3',
                name: 'icon',
                label: 'Remove',
                type: 'icon',
                visible: true,
                searchable: false,
                filterMode: 'none',
                click: this.removeRole.bind(this)
            },
        ];
        this.settings = {
            selectableRows: true,
            columnDefinitions: columnDefinition,
            data: this.roles.map(g => (Object.assign(Object.assign({}, g), { icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTrash"] }))),
            toolBar: {
                left: [
                    { name: 'Remove', type: 'button', callback: this.removeRoles.bind(this) }
                ],
                right: [
                    { name: 'Add Role', type: 'button', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"], callback: this.addRole.bind(this) },
                    { type: 'search' }
                ]
            },
            groupBy: []
        };
    }
    submitForm(method) {
        this.submitted.emit({
            addedRoles: this.addedRoles,
            removedRoles: this.removedRoles
        });
    }
    dismissForm(method) {
        this.dismissed.emit(method);
    }
    // Add a role to the user
    addRole() {
        this.roleService.getRoles().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(roles => {
            const selectedRoleIds = this.roles.map(r => r.id);
            const config = {
                roles: roles.filter(r => !selectedRoleIds.includes(r.id)),
                onSubmit: (selectedRoles) => this.doAddRole(selectedRoles),
                onDismiss: (e) => {
                }
            };
            this.dynamicFormService.popModal(_roles_selector_roles_selector_component__WEBPACK_IMPORTED_MODULE_4__["RolesSelectorComponent"], config);
        });
    }
    doAddRole(roles) {
        this.config.user.roles.push(...roles);
        this.userService.updateUser(this.config.user.id, this.config.user, false).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(x => {
            this.buildTableSettings();
        }, error => {
            const indexs = roles.map(r => this.removedRoles.findIndex(x => x.id === r.id));
            indexs.forEach(idx => {
                if (idx > 0) {
                    this.roles.splice(idx, 1);
                }
            });
        });
    }
    // Remove role from the user
    removeRole(row) {
        this.removeRoles([{ data: row }]);
    }
    removeRoles(rows) {
        const roles = rows.map(x => x.data);
        const config = {
            headerText: 'Remove members',
            submitText: 'Ok',
            closeText: 'Cancel',
            onSubmit: () => this.doRemoveRoles(roles),
            onDismiss: () => {
            },
            notifications: [
                'Are you sure to remove the following role(s) from this user?',
                roles.map(x => x.name).join(', ')
            ]
        };
        this.dynamicFormService.popNotification(config);
    }
    doRemoveRoles(roles) {
        // Members were removed if they are not in the list of addedMembers, otherwise they are un-added
        roles.forEach(u => {
            const idx = this.addedRoles.findIndex(x => x.id === u.id);
            if (idx > -1) {
                this.addedRoles.splice(idx, 1);
            }
            else {
                this.removedRoles.push(u);
            }
            const idx2 = this.roles.findIndex(x => x.id === u.id);
            this.roles.splice(idx2, 1);
        });
        this.buildTableSettings();
    }
}
UserViewerComponent.ɵfac = function UserViewerComponent_Factory(t) { return new (t || UserViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](dynamic_form__WEBPACK_IMPORTED_MODULE_5__["DynamicFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_user_role_service__WEBPACK_IMPORTED_MODULE_7__["RoleService"])); };
UserViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserViewerComponent, selectors: [["emes-user-viewer"]], inputs: { config: "config" }, outputs: { submitted: "submitted", dismissed: "dismissed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 14, vars: 2, consts: [[1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "d-flex", "flex-column", 2, "height", "80vh"], [1, "d-flex", "flex-fill", 3, "settings"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function UserViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserViewerComponent_Template_button_click_4_listener() { return ctx.dismissForm("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "csps-data-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserViewerComponent_Template_button_click_10_listener() { return ctx.dismissForm("Close button"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserViewerComponent_Template_button_click_12_listener() { return ctx.submitForm("OK"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Manage User: ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings);
    } }, directives: [data_table__WEBPACK_IMPORTED_MODULE_8__["DataTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItdmlld2VyL3VzZXItdmlld2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-user-viewer',
                templateUrl: './user-viewer.component.html',
                styleUrls: ['./user-viewer.component.scss']
            }]
    }], function () { return [{ type: dynamic_form__WEBPACK_IMPORTED_MODULE_5__["DynamicFormService"] }, { type: _core_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _core_user_role_service__WEBPACK_IMPORTED_MODULE_7__["RoleService"] }]; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], submitted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dismissed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/admin/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var dynamic_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dynamic-form */ "./dist/dynamic-form/fesm2015/dynamic-form.js");
/* harmony import */ var _user_viewer_user_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-viewer/user-viewer.component */ "./src/app/admin/user-viewer/user-viewer.component.ts");
/* harmony import */ var _core_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/user/user.service */ "./src/app/core/user/user.service.ts");
/* harmony import */ var data_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! data-table */ "./dist/data-table/fesm2015/data-table.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");











class UsersComponent {
    constructor(userService, dynamicFormService) {
        this.userService = userService;
        this.dynamicFormService = dynamicFormService;
        // Indicator whether current user is admin
        this.isAdmin = true;
        // Used for cleaning subscription
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        const columnDefinition = [
            { id: '1', name: 'id', label: 'Id', type: 'text', visible: true, searchable: false, filterMode: 'none' },
            { id: '2', name: 'name', label: 'Name', type: 'text', visible: true, searchable: false, filterMode: 'text' },
            { id: '3', name: 'roles.length', label: 'Roles', type: 'text', visible: true, searchable: false, filterMode: 'none' },
            {
                id: '4',
                name: 'view',
                label: 'View',
                type: 'icon',
                visible: true,
                searchable: false,
                filterMode: 'none',
                click: this.viewUser.bind(this)
            },
            {
                id: '5',
                name: 'delete',
                label: 'Delete',
                type: 'icon',
                visible: true,
                searchable: false,
                filterMode: 'none',
                click: this.deleteUser.bind(this)
            },
        ];
        this.userService.users$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(users => {
            this.settings = {
                selectableRows: false,
                columnDefinitions: columnDefinition,
                data: users.map(t => (Object.assign(Object.assign({}, t), { name: t.firstName + ' ' + t.lastName, view: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faExternalLinkAlt"], delete: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTrash"] }))),
                toolBar: {
                    right: [
                        ...this.isAdmin ? [{
                                name: 'New User',
                                type: 'button',
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlus"],
                                callback: this.createUser.bind(this)
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
    createUser() {
        const config = {
            headerText: 'Create a user',
            submitText: 'OK',
            closeText: 'Cancel',
            onSubmit: (e) => this.doCreateUser(e),
            onDismiss: (e) => {
            },
            extraButtons: [],
            fields: [
                {
                    type: 'input',
                    label: 'User name',
                    name: 'userName',
                    placeholder: 'Enter a user name',
                    validation: [
                        dynamic_form__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].required('User name required'),
                    ]
                },
                {
                    type: 'input',
                    label: 'First name',
                    name: 'firstName',
                    placeholder: 'Enter the first name',
                    validation: [
                        dynamic_form__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].required('First name required'),
                    ]
                },
                {
                    type: 'input',
                    label: 'Last name',
                    name: 'lastName',
                    placeholder: 'Enter the last name',
                    validation: [
                        dynamic_form__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].required('Last name required'),
                    ]
                },
                {
                    type: 'input',
                    label: 'Password',
                    name: 'password',
                    placeholder: 'Enter the password',
                    validation: [
                        dynamic_form__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].required('Password required'),
                    ]
                }
            ]
        };
        this.dynamicFormService.popDynamicFormModal(config);
    }
    doCreateUser(e) {
        this.userService.createUser(e).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe();
    }
    viewUser(user) {
        const config = {
            user,
            onSubmit: (changes) => this.processChanges(user, changes),
            onDismiss: (e) => {
            }
        };
        this.dynamicFormService.popModal(_user_viewer_user_viewer_component__WEBPACK_IMPORTED_MODULE_5__["UserViewerComponent"], config);
    }
    processChanges(user, changes) {
        if (changes && changes.addedRoles && changes.addedRoles.length > 0) {
        }
        if (changes && changes.removedRoles && changes.removedRoles.length > 0) {
        }
    }
    deleteUser() {
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](dynamic_form__WEBPACK_IMPORTED_MODULE_4__["DynamicFormService"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["emes-users"]], decls: 5, vars: 4, consts: [[1, "d-flex", "justify-content-between", "flex-wrap", "flex-md-nowrap", "align-items-center", "pt-3", "pb-2", "mb-3", "border-bottom"], [1, "d-flex", "flex-fill", 3, "settings"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [data_table__WEBPACK_IMPORTED_MODULE_7__["DataTableComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlcnMvQzpcXERldlxcSW50ZXJuYWxcXENsaWVudEFwcC0yL3NyY1xcYXBwXFxhZG1pblxcdXNlcnNcXHVzZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi91c2Vycy91c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.scss']
            }]
    }], function () { return [{ type: _core_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: dynamic_form__WEBPACK_IMPORTED_MODULE_4__["DynamicFormService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/user/role.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/user/role.service.ts ***!
  \*******************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class RoleService {
    constructor(http) {
        this.http = http;
        this.roleUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'api/v1/roles';
        this.roles$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.roles = [
            {
                id: '1',
                name: 'ROLE_ADMIN'
            }
        ];
    }
    getRoles() {
        // const url = `${this.roleUrl}`;
        // return this.http.get<any>(url).pipe(tap(r => {
        //   this.roles$.next(r);
        // }));
        this.roles$.next(this.roles);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.roles);
    }
    create(name) {
        // const url = `${this.roleUrl}`;
        // const payload = {name};
        // return this.http.post<any>(url, payload).pipe(tap(x => {
        //   const roles = this.roles$.getValue();
        //   roles.push({id: x, name});
        //   this.roles$.next(roles);
        // }));
        const roles = this.roles$.getValue();
        roles.push({ id: '123', name });
        this.roles$.next(roles);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
    }
    rename(id, newName) {
        // const url = `${this.roleUrl}/${id}/add-menus`;
        // const payload = {name: newName};
        // return this.http.put<any>(url, payload).pipe(tap(x => {
        //   const roles = this.roles$.getValue();
        //   const theRole = roles.find(r => r.id === id);
        //   if (theRole) {
        //     theRole.name = newName;
        //   }
        //   this.roles$.next(roles);
        // }));
        const roles = this.roles$.getValue();
        const theRole = roles.find(r => r.id === id);
        if (theRole) {
            theRole.name = newName;
        }
        this.roles$.next(roles);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
    }
}
RoleService.ɵfac = function RoleService_Factory(t) { return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
RoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoleService, factory: RoleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map