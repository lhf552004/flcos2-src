function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["equipments-equipments-module"], {
  /***/
  "./src/app/equipments/equipment-default/equipment-default.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/equipments/equipment-default/equipment-default.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: EquipmentDefaultComponent */

  /***/
  function srcAppEquipmentsEquipmentDefaultEquipmentDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentDefaultComponent", function () {
      return EquipmentDefaultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EquipmentDefaultComponent = /*#__PURE__*/function () {
      function EquipmentDefaultComponent() {
        _classCallCheck(this, EquipmentDefaultComponent);
      }

      _createClass(EquipmentDefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EquipmentDefaultComponent;
    }();

    EquipmentDefaultComponent.ɵfac = function EquipmentDefaultComponent_Factory(t) {
      return new (t || EquipmentDefaultComponent)();
    };

    EquipmentDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EquipmentDefaultComponent,
      selectors: [["emes-equipment-default"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container-fluid", "d-flex", "flex-column", "flex-fill"], [1, "row", "p-0", "flex-fill", "align-items-center", "mt-5"], [1, "col", "text-center"]],
      template: function EquipmentDefaultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Select a item in the left hand side list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VxdWlwbWVudHMvZXF1aXBtZW50LWRlZmF1bHQvZXF1aXBtZW50LWRlZmF1bHQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquipmentDefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-equipment-default',
          templateUrl: './equipment-default.component.html',
          styleUrls: ['./equipment-default.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/equipments/equipment-home/equipment-home.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/equipments/equipment-home/equipment-home.component.ts ***!
    \***********************************************************************/

  /*! exports provided: EquipmentHomeComponent */

  /***/
  function srcAppEquipmentsEquipmentHomeEquipmentHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentHomeComponent", function () {
      return EquipmentHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/side-bar/side-bar.component */
    "./src/app/shared/side-bar/side-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var EquipmentHomeComponent = /*#__PURE__*/function () {
      function EquipmentHomeComponent() {
        _classCallCheck(this, EquipmentHomeComponent);

        // Used for cleaning subscription
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(EquipmentHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menuItems = [{
            id: '1',
            label: 'Sections',
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTasks"],
            route: ['sections'],
            children: []
          }, {
            id: '2',
            label: 'Equipments',
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTasks"],
            route: ['equipments'],
            children: []
          }];
        }
      }]);

      return EquipmentHomeComponent;
    }();

    EquipmentHomeComponent.ɵfac = function EquipmentHomeComponent_Factory(t) {
      return new (t || EquipmentHomeComponent)();
    };

    EquipmentHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EquipmentHomeComponent,
      selectors: [["emes-equipment-home"]],
      decls: 5,
      vars: 2,
      consts: [[1, "container-fluid", "h-100", "px-0"], [1, "row", "h-100", "no-gutters"], [1, "col-md-3", "col-lg-2", "d-none", "d-md-block", "bg-light", 3, "header", "menuItems"], [1, "col-md-9", "col-lg-10", "d-flex", "flex-column", "w-100"]],
      template: function EquipmentHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "emes-side-bar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", "Process")("menuItems", ctx.menuItems);
        }
      },
      directives: [_shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__["SideBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VxdWlwbWVudHMvZXF1aXBtZW50LWhvbWUvZXF1aXBtZW50LWhvbWUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquipmentHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-equipment-home',
          templateUrl: './equipment-home.component.html',
          styleUrls: ['./equipment-home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/equipments/equipment/equipment.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/equipments/equipment/equipment.component.ts ***!
    \*************************************************************/

  /*! exports provided: EquipmentComponent */

  /***/
  function srcAppEquipmentsEquipmentEquipmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentComponent", function () {
      return EquipmentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function EquipmentComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquipmentComponent_div_7_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.save(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquipmentComponent_div_7_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.save(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquipmentComponent_div_7_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.save(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Save & Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EquipmentComponent_button_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquipmentComponent_button_14_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.save(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EquipmentComponent_button_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquipmentComponent_button_15_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save & Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EquipmentComponent_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquipmentComponent_button_16_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.copy();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Copy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EquipmentComponent_button_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquipmentComponent_button_17_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16["delete"]();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EquipmentComponent_option_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", type_r18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r18, " ");
      }
    }

    var EquipmentComponent = /*#__PURE__*/function () {
      function EquipmentComponent(route) {
        _classCallCheck(this, EquipmentComponent);

        this.route = route; // Icon

        this.faEllipsisV = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEllipsisV"]; // Equipment type

        this.types = ['discharger', 'mixer', 'packer']; // Indicator whether it is a author

        this.isAuthor = true; // Indicator whether it is a owner

        this.isOwner = true; // Used for cleaning subscription 

        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(EquipmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(function (data) {
            if (data.equipment) _this.equipment = data.equipment;
            console.log(_this.equipment);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe.next();
          this.unsubscribe.complete();
        }
      }, {
        key: "save",
        value: function save(close) {}
      }, {
        key: "close",
        value: function close() {}
      }, {
        key: "copy",
        value: function copy() {}
      }, {
        key: "delete",
        value: function _delete() {}
      }, {
        key: "typeSelected",
        value: function typeSelected() {}
      }, {
        key: "nameChanged",
        value: function nameChanged($event) {}
      }]);

      return EquipmentComponent;
    }();

    EquipmentComponent.ɵfac = function EquipmentComponent_Factory(t) {
      return new (t || EquipmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    EquipmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EquipmentComponent,
      selectors: [["emes-equipment"]],
      decls: 40,
      vars: 13,
      consts: [[1, "container-fluid", "d-flex", "flex-column"], [1, "row", "justify-content-between", "align-items-center", "pt-3", "pb-2", "mb-3", "border-bottom"], [1, "col-auto"], [1, "btn-toolbar", "mb-2", "mb-md-0"], ["class", "btn-group mr-2", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", "mr-2", 3, "click"], ["ngbDropdown", "", "placement", "bottom-right", 1, "btn-group", "mr-2"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-sm", "btn-link", "dropdown-icon"], [1, "text-primary", "pointer", 3, "icon", "fixedWidth"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "inputId"], ["type", "text", "id", "inputId", "name", "inputId", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputName"], ["type", "text", "id", "inputName", "name", "inputName", "placeholder", "Enter Name here", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["for", "selectType"], ["name", "selectType", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "inputType"], ["type", "text", "id", "inputType", "name", "inputType", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn-group", "mr-2"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["ngbDropdown", "", "placement", "bottom-right", 1, "btn-group"], ["ngbDropdownToggle", "", 1, "btn", "btn-sm", "btn-primary", "dropdown-toggle-split"], ["ngbDropdownItem", "", 3, "click"]],
      template: function EquipmentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Equipment Management ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EquipmentComponent_div_7_Template, 10, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EquipmentComponent_Template_button_click_8_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EquipmentComponent_button_14_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EquipmentComponent_button_15_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EquipmentComponent_button_16_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EquipmentComponent_button_17_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EquipmentComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.equipment.id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EquipmentComponent_Template_input_ngModelChange_27_listener($event) {
            return ctx.equipment.name = $event;
          })("input", function EquipmentComponent_Template_input_input_27_listener($event) {
            return ctx.nameChanged($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Select Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EquipmentComponent_Template_select_ngModelChange_32_listener($event) {
            return ctx.selectedType = $event;
          })("ngModelChange", function EquipmentComponent_Template_select_ngModelChange_32_listener() {
            return ctx.typeSelected();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Please select a type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, EquipmentComponent_option_35_Template, 2, 2, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EquipmentComponent_Template_input_ngModelChange_39_listener($event) {
            return ctx.equipment.type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEllipsisV)("fixedWidth", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOwner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOwner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.equipment.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.equipment.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.equipment.type);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VxdWlwbWVudHMvZXF1aXBtZW50L2VxdWlwbWVudC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquipmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-equipment',
          templateUrl: './equipment.component.html',
          styleUrls: ['./equipment.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/equipments/equipments-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/equipments/equipments-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: EquipmentsRoutingModule */

  /***/
  function srcAppEquipmentsEquipmentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentsRoutingModule", function () {
      return EquipmentsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _equipment_default_equipment_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./equipment-default/equipment-default.component */
    "./src/app/equipments/equipment-default/equipment-default.component.ts");
    /* harmony import */


    var _equipment_home_equipment_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./equipment-home/equipment-home.component */
    "./src/app/equipments/equipment-home/equipment-home.component.ts");
    /* harmony import */


    var _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./equipment/equipment.component */
    "./src/app/equipments/equipment/equipment.component.ts");
    /* harmony import */


    var _equipments_wrapper_equipments_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./equipments-wrapper/equipments-wrapper.component */
    "./src/app/equipments/equipments-wrapper/equipments-wrapper.component.ts");
    /* harmony import */


    var _equipments_equipments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./equipments/equipments.component */
    "./src/app/equipments/equipments/equipments.component.ts");
    /* harmony import */


    var _route_resolvers_equipment_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./route-resolvers/equipment-resolver.service */
    "./src/app/equipments/route-resolvers/equipment-resolver.service.ts");
    /* harmony import */


    var _route_resolvers_equipments_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./route-resolvers/equipments-resolver.service */
    "./src/app/equipments/route-resolvers/equipments-resolver.service.ts");
    /* harmony import */


    var _route_resolvers_section_resolver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./route-resolvers/section-resolver.service */
    "./src/app/equipments/route-resolvers/section-resolver.service.ts");
    /* harmony import */


    var _route_resolvers_sections_resolver_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./route-resolvers/sections-resolver.service */
    "./src/app/equipments/route-resolvers/sections-resolver.service.ts");
    /* harmony import */


    var _section_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./section/section.component */
    "./src/app/equipments/section/section.component.ts");
    /* harmony import */


    var _sections_wrapper_sections_wrapper_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./sections-wrapper/sections-wrapper.component */
    "./src/app/equipments/sections-wrapper/sections-wrapper.component.ts");
    /* harmony import */


    var _sections_sections_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./sections/sections.component */
    "./src/app/equipments/sections/sections.component.ts");

    var routes = [{
      path: '',
      component: _equipment_home_equipment_home_component__WEBPACK_IMPORTED_MODULE_3__["EquipmentHomeComponent"],

      /*canActivate: [AuthGuardService],*/
      children: [{
        path: 'sections',
        component: _sections_wrapper_sections_wrapper_component__WEBPACK_IMPORTED_MODULE_12__["SectionsWrapperComponent"],

        /*canActivate: [AuthGuardService],*/
        children: [{
          path: '',
          resolve: {
            sections: _route_resolvers_sections_resolver_service__WEBPACK_IMPORTED_MODULE_10__["SectionsResolverService"]
          },

          /*canActivate: [AuthGuardService],*/
          component: _sections_sections_component__WEBPACK_IMPORTED_MODULE_13__["SectionsComponent"]
        }, {
          path: ':sectionId',
          resolve: {
            section: _route_resolvers_section_resolver_service__WEBPACK_IMPORTED_MODULE_9__["SectionResolverService"]
          },
          component: _section_section_component__WEBPACK_IMPORTED_MODULE_11__["SectionComponent"]
        }]
      }, {
        path: 'equipments',
        component: _equipments_wrapper_equipments_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["EquipmentsWrapperComponent"],

        /*canActivate: [AuthGuardService],*/
        children: [{
          path: '',
          resolve: {
            equipments: _route_resolvers_equipments_resolver_service__WEBPACK_IMPORTED_MODULE_8__["EquipmentsResolverService"]
          },

          /*canActivate: [AuthGuardService],*/
          component: _equipments_equipments_component__WEBPACK_IMPORTED_MODULE_6__["EquipmentsComponent"]
        }, {
          path: ':equipId',
          resolve: {
            equipment: _route_resolvers_equipment_resolver_service__WEBPACK_IMPORTED_MODULE_7__["EquipmentResolverService"]
          },
          component: _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_4__["EquipmentComponent"]
        }]
      }, {
        path: '',
        component: _equipment_default_equipment_default_component__WEBPACK_IMPORTED_MODULE_2__["EquipmentDefaultComponent"]
      }]
    }];

    var EquipmentsRoutingModule = function EquipmentsRoutingModule() {
      _classCallCheck(this, EquipmentsRoutingModule);
    };

    EquipmentsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EquipmentsRoutingModule
    });
    EquipmentsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EquipmentsRoutingModule_Factory(t) {
        return new (t || EquipmentsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EquipmentsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquipmentsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/equipments/equipments-wrapper/equipments-wrapper.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/equipments/equipments-wrapper/equipments-wrapper.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: EquipmentsWrapperComponent */

  /***/
  function srcAppEquipmentsEquipmentsWrapperEquipmentsWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentsWrapperComponent", function () {
      return EquipmentsWrapperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var EquipmentsWrapperComponent = /*#__PURE__*/function () {
      function EquipmentsWrapperComponent() {
        _classCallCheck(this, EquipmentsWrapperComponent);
      }

      _createClass(EquipmentsWrapperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EquipmentsWrapperComponent;
    }();

    EquipmentsWrapperComponent.ɵfac = function EquipmentsWrapperComponent_Factory(t) {
      return new (t || EquipmentsWrapperComponent)();
    };

    EquipmentsWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EquipmentsWrapperComponent,
      selectors: [["emes-equipments-wrapper"]],
      decls: 1,
      vars: 0,
      template: function EquipmentsWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VxdWlwbWVudHMvZXF1aXBtZW50cy13cmFwcGVyL2VxdWlwbWVudHMtd3JhcHBlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquipmentsWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-equipments-wrapper',
          templateUrl: './equipments-wrapper.component.html',
          styleUrls: ['./equipments-wrapper.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/equipments/equipments.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/equipments/equipments.module.ts ***!
    \*************************************************/

  /*! exports provided: EquipmentsModule */

  /***/
  function srcAppEquipmentsEquipmentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentsModule", function () {
      return EquipmentsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _equipments_equipments_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./equipments/equipments.component */
    "./src/app/equipments/equipments/equipments.component.ts");
    /* harmony import */


    var _sections_sections_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sections/sections.component */
    "./src/app/equipments/sections/sections.component.ts");
    /* harmony import */


    var _section_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./section/section.component */
    "./src/app/equipments/section/section.component.ts");
    /* harmony import */


    var _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./equipment/equipment.component */
    "./src/app/equipments/equipment/equipment.component.ts");
    /* harmony import */


    var _equipments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./equipments-routing.module */
    "./src/app/equipments/equipments-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _equipment_home_equipment_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./equipment-home/equipment-home.component */
    "./src/app/equipments/equipment-home/equipment-home.component.ts");
    /* harmony import */


    var _sections_wrapper_sections_wrapper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sections-wrapper/sections-wrapper.component */
    "./src/app/equipments/sections-wrapper/sections-wrapper.component.ts");
    /* harmony import */


    var _equipments_wrapper_equipments_wrapper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./equipments-wrapper/equipments-wrapper.component */
    "./src/app/equipments/equipments-wrapper/equipments-wrapper.component.ts");
    /* harmony import */


    var _equipment_default_equipment_default_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./equipment-default/equipment-default.component */
    "./src/app/equipments/equipment-default/equipment-default.component.ts");

    var EquipmentsModule = function EquipmentsModule() {
      _classCallCheck(this, EquipmentsModule);
    };

    EquipmentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EquipmentsModule
    });
    EquipmentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EquipmentsModule_Factory(t) {
        return new (t || EquipmentsModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _equipments_routing_module__WEBPACK_IMPORTED_MODULE_5__["EquipmentsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EquipmentsModule, {
        declarations: [_equipments_equipments_component__WEBPACK_IMPORTED_MODULE_1__["EquipmentsComponent"], _sections_sections_component__WEBPACK_IMPORTED_MODULE_2__["SectionsComponent"], _section_section_component__WEBPACK_IMPORTED_MODULE_3__["SectionComponent"], _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_4__["EquipmentComponent"], _equipment_home_equipment_home_component__WEBPACK_IMPORTED_MODULE_7__["EquipmentHomeComponent"], _sections_wrapper_sections_wrapper_component__WEBPACK_IMPORTED_MODULE_8__["SectionsWrapperComponent"], _equipments_wrapper_equipments_wrapper_component__WEBPACK_IMPORTED_MODULE_9__["EquipmentsWrapperComponent"], _equipment_default_equipment_default_component__WEBPACK_IMPORTED_MODULE_10__["EquipmentDefaultComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _equipments_routing_module__WEBPACK_IMPORTED_MODULE_5__["EquipmentsRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquipmentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_equipments_equipments_component__WEBPACK_IMPORTED_MODULE_1__["EquipmentsComponent"], _sections_sections_component__WEBPACK_IMPORTED_MODULE_2__["SectionsComponent"], _section_section_component__WEBPACK_IMPORTED_MODULE_3__["SectionComponent"], _equipment_equipment_component__WEBPACK_IMPORTED_MODULE_4__["EquipmentComponent"], _equipment_home_equipment_home_component__WEBPACK_IMPORTED_MODULE_7__["EquipmentHomeComponent"], _sections_wrapper_sections_wrapper_component__WEBPACK_IMPORTED_MODULE_8__["SectionsWrapperComponent"], _equipments_wrapper_equipments_wrapper_component__WEBPACK_IMPORTED_MODULE_9__["EquipmentsWrapperComponent"], _equipment_default_equipment_default_component__WEBPACK_IMPORTED_MODULE_10__["EquipmentDefaultComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _equipments_routing_module__WEBPACK_IMPORTED_MODULE_5__["EquipmentsRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/equipments/equipments/equipments.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/equipments/equipments/equipments.component.ts ***!
    \***************************************************************/

  /*! exports provided: EquipmentsComponent */

  /***/
  function srcAppEquipmentsEquipmentsEquipmentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentsComponent", function () {
      return EquipmentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function EquipmentsComponent_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var equipment_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, equipment_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](equipment_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](equipment_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](equipment_r1.type);
      }
    }

    var EquipmentsComponent = /*#__PURE__*/function () {
      function EquipmentsComponent(route) {
        _classCallCheck(this, EquipmentsComponent);

        this.route = route; // Used for cleaning subscription

        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(EquipmentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(function (data) {
            _this2.equipments = data.equipments;
            console.log(_this2.equipments);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe.next();
          this.unsubscribe.complete();
        }
      }]);

      return EquipmentsComponent;
    }();

    EquipmentsComponent.ɵfac = function EquipmentsComponent_Factory(t) {
      return new (t || EquipmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    EquipmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EquipmentsComponent,
      selectors: [["emes-equipments"]],
      decls: 13,
      vars: 1,
      consts: [[1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [3, "routerLink"]],
      template: function EquipmentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EquipmentsComponent_tr_12_Template, 10, 7, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.equipments);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VxdWlwbWVudHMvZXF1aXBtZW50cy9lcXVpcG1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquipmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-equipments',
          templateUrl: './equipments.component.html',
          styleUrls: ['./equipments.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/equipments/route-resolvers/equipment-resolver.service.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/equipments/route-resolvers/equipment-resolver.service.ts ***!
    \**************************************************************************/

  /*! exports provided: EquipmentResolverService */

  /***/
  function srcAppEquipmentsRouteResolversEquipmentResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentResolverService", function () {
      return EquipmentResolverService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_equipment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/equipment.service */
    "./src/app/equipments/shared/equipment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var EquipmentResolverService = /*#__PURE__*/function () {
      function EquipmentResolverService(equipmentService, router) {
        _classCallCheck(this, EquipmentResolverService);

        this.equipmentService = equipmentService;
        this.router = router;
      }

      _createClass(EquipmentResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var id = route.paramMap.get('equipId');
          console.log(id);
          return this.equipmentService.getEquipment(id);
        }
      }]);

      return EquipmentResolverService;
    }();

    EquipmentResolverService.ɵfac = function EquipmentResolverService_Factory(t) {
      return new (t || EquipmentResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_equipment_service__WEBPACK_IMPORTED_MODULE_1__["EquipmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    EquipmentResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EquipmentResolverService,
      factory: EquipmentResolverService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquipmentResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_equipment_service__WEBPACK_IMPORTED_MODULE_1__["EquipmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/equipments/route-resolvers/equipments-resolver.service.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/equipments/route-resolvers/equipments-resolver.service.ts ***!
    \***************************************************************************/

  /*! exports provided: EquipmentsResolverService */

  /***/
  function srcAppEquipmentsRouteResolversEquipmentsResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentsResolverService", function () {
      return EquipmentsResolverService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_equipment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/equipment.service */
    "./src/app/equipments/shared/equipment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var EquipmentsResolverService = /*#__PURE__*/function () {
      function EquipmentsResolverService(equipmentService, router) {
        _classCallCheck(this, EquipmentsResolverService);

        this.equipmentService = equipmentService;
        this.router = router;
      }

      _createClass(EquipmentsResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.equipmentService.getEquipments();
        }
      }]);

      return EquipmentsResolverService;
    }();

    EquipmentsResolverService.ɵfac = function EquipmentsResolverService_Factory(t) {
      return new (t || EquipmentsResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_equipment_service__WEBPACK_IMPORTED_MODULE_1__["EquipmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    EquipmentsResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EquipmentsResolverService,
      factory: EquipmentsResolverService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquipmentsResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_equipment_service__WEBPACK_IMPORTED_MODULE_1__["EquipmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/equipments/route-resolvers/section-resolver.service.ts":
  /*!************************************************************************!*\
    !*** ./src/app/equipments/route-resolvers/section-resolver.service.ts ***!
    \************************************************************************/

  /*! exports provided: SectionResolverService */

  /***/
  function srcAppEquipmentsRouteResolversSectionResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionResolverService", function () {
      return SectionResolverService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_equipment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/equipment.service */
    "./src/app/equipments/shared/equipment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SectionResolverService = /*#__PURE__*/function () {
      function SectionResolverService(equipmentService, router) {
        _classCallCheck(this, SectionResolverService);

        this.equipmentService = equipmentService;
        this.router = router;
      }

      _createClass(SectionResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var id = route.paramMap.get('sectionId');
          console.log('SectionId: ' + id);
          return this.equipmentService.getSection(id);
        }
      }]);

      return SectionResolverService;
    }();

    SectionResolverService.ɵfac = function SectionResolverService_Factory(t) {
      return new (t || SectionResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_equipment_service__WEBPACK_IMPORTED_MODULE_1__["EquipmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    SectionResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SectionResolverService,
      factory: SectionResolverService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_equipment_service__WEBPACK_IMPORTED_MODULE_1__["EquipmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/equipments/route-resolvers/sections-resolver.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/equipments/route-resolvers/sections-resolver.service.ts ***!
    \*************************************************************************/

  /*! exports provided: SectionsResolverService */

  /***/
  function srcAppEquipmentsRouteResolversSectionsResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionsResolverService", function () {
      return SectionsResolverService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_equipment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/equipment.service */
    "./src/app/equipments/shared/equipment.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SectionsResolverService = /*#__PURE__*/function () {
      function SectionsResolverService(equipmentService, router) {
        _classCallCheck(this, SectionsResolverService);

        this.equipmentService = equipmentService;
        this.router = router;
      }

      _createClass(SectionsResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.equipmentService.getSections();
        }
      }]);

      return SectionsResolverService;
    }();

    SectionsResolverService.ɵfac = function SectionsResolverService_Factory(t) {
      return new (t || SectionsResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_equipment_service__WEBPACK_IMPORTED_MODULE_1__["EquipmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    SectionsResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SectionsResolverService,
      factory: SectionsResolverService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionsResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_equipment_service__WEBPACK_IMPORTED_MODULE_1__["EquipmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/equipments/section/section.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/equipments/section/section.component.ts ***!
    \*********************************************************/

  /*! exports provided: SectionComponent */

  /***/
  function srcAppEquipmentsSectionSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionComponent", function () {
      return SectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function SectionComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SectionComponent_div_7_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.save(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SectionComponent_div_7_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.save(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SectionComponent_div_7_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.save(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Save & Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SectionComponent_button_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SectionComponent_button_14_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.save(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SectionComponent_button_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SectionComponent_button_15_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save & Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SectionComponent_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SectionComponent_button_16_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.copy();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Copy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SectionComponent_button_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SectionComponent_button_17_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15["delete"]();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SectionComponent = /*#__PURE__*/function () {
      function SectionComponent(route) {
        _classCallCheck(this, SectionComponent);

        this.route = route; // Icon

        this.faEllipsisV = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEllipsisV"]; // Indicator whether it is a author

        this.isAuthor = true; // Indicator whether it is a owner

        this.isOwner = true; // Used for cleaning subscription 

        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(SectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(function (data) {
            if (data.section) _this3.section = data.section;
            console.log(_this3.section);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe.next();
          this.unsubscribe.complete();
        }
      }, {
        key: "save",
        value: function save(close) {}
      }, {
        key: "close",
        value: function close() {}
      }, {
        key: "copy",
        value: function copy() {}
      }, {
        key: "delete",
        value: function _delete() {}
      }, {
        key: "typeSelected",
        value: function typeSelected() {}
      }, {
        key: "nameChanged",
        value: function nameChanged($event) {}
      }]);

      return SectionComponent;
    }();

    SectionComponent.ɵfac = function SectionComponent_Factory(t) {
      return new (t || SectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    SectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SectionComponent,
      selectors: [["emes-section"]],
      decls: 28,
      vars: 9,
      consts: [[1, "container-fluid", "d-flex", "flex-column"], [1, "row", "justify-content-between", "align-items-center", "pt-3", "pb-2", "mb-3", "border-bottom"], [1, "col-auto"], [1, "btn-toolbar", "mb-2", "mb-md-0"], ["class", "btn-group mr-2", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", "mr-2", 3, "click"], ["ngbDropdown", "", "placement", "bottom-right", 1, "btn-group", "mr-2"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-sm", "btn-link", "dropdown-icon"], [1, "text-primary", "pointer", 3, "icon", "fixedWidth"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "inputId"], ["type", "text", "id", "inputId", "name", "inputId", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputName"], ["type", "text", "id", "inputName", "name", "inputName", "placeholder", "Enter Name here", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], [1, "btn-group", "mr-2"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["ngbDropdown", "", "placement", "bottom-right", 1, "btn-group"], ["ngbDropdownToggle", "", 1, "btn", "btn-sm", "btn-primary", "dropdown-toggle-split"], ["ngbDropdownItem", "", 3, "click"]],
      template: function SectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Section Management ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SectionComponent_div_7_Template, 10, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SectionComponent_Template_button_click_8_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SectionComponent_button_14_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SectionComponent_button_15_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SectionComponent_button_16_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SectionComponent_button_17_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SectionComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.section.id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SectionComponent_Template_input_ngModelChange_27_listener($event) {
            return ctx.section.name = $event;
          })("input", function SectionComponent_Template_input_input_27_listener($event) {
            return ctx.nameChanged($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEllipsisV)("fixedWidth", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOwner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOwner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.section.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.section.name);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VxdWlwbWVudHMvc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-section',
          templateUrl: './section.component.html',
          styleUrls: ['./section.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/equipments/sections-wrapper/sections-wrapper.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/equipments/sections-wrapper/sections-wrapper.component.ts ***!
    \***************************************************************************/

  /*! exports provided: SectionsWrapperComponent */

  /***/
  function srcAppEquipmentsSectionsWrapperSectionsWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionsWrapperComponent", function () {
      return SectionsWrapperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SectionsWrapperComponent = /*#__PURE__*/function () {
      function SectionsWrapperComponent() {
        _classCallCheck(this, SectionsWrapperComponent);
      }

      _createClass(SectionsWrapperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SectionsWrapperComponent;
    }();

    SectionsWrapperComponent.ɵfac = function SectionsWrapperComponent_Factory(t) {
      return new (t || SectionsWrapperComponent)();
    };

    SectionsWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SectionsWrapperComponent,
      selectors: [["emes-sections-wrapper"]],
      decls: 1,
      vars: 0,
      template: function SectionsWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VxdWlwbWVudHMvc2VjdGlvbnMtd3JhcHBlci9zZWN0aW9ucy13cmFwcGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionsWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-sections-wrapper',
          templateUrl: './sections-wrapper.component.html',
          styleUrls: ['./sections-wrapper.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/equipments/sections/sections.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/equipments/sections/sections.component.ts ***!
    \***********************************************************/

  /*! exports provided: SectionsComponent */

  /***/
  function srcAppEquipmentsSectionsSectionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionsComponent", function () {
      return SectionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a1) {
      return ["..", a1];
    };

    function SectionsComponent_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var section_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, section_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r1.equipments.length);
      }
    }

    var SectionsComponent = /*#__PURE__*/function () {
      function SectionsComponent(route) {
        _classCallCheck(this, SectionsComponent);

        this.route = route; // Used for cleaning subscription

        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(SectionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(function (data) {
            _this4.sections = data.sections;
            console.log(_this4.sections);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe.next();
          this.unsubscribe.complete();
        }
      }]);

      return SectionsComponent;
    }();

    SectionsComponent.ɵfac = function SectionsComponent_Factory(t) {
      return new (t || SectionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    SectionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SectionsComponent,
      selectors: [["emes-sections"]],
      decls: 13,
      vars: 1,
      consts: [[1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [3, "routerLink"]],
      template: function SectionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Equipments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SectionsComponent_tr_12_Template, 10, 7, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sections);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VxdWlwbWVudHMvc2VjdGlvbnMvc2VjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-sections',
          templateUrl: './sections.component.html',
          styleUrls: ['./sections.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=equipments-equipments-module-es5.js.map