function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"], {
  /***/
  "./src/app/orders/create-order/create-order.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/orders/create-order/create-order.component.ts ***!
    \***************************************************************/

  /*! exports provided: CreateOrderComponent */

  /***/
  function srcAppOrdersCreateOrderCreateOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateOrderComponent", function () {
      return CreateOrderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CreateOrderComponent = /*#__PURE__*/function () {
      function CreateOrderComponent() {
        _classCallCheck(this, CreateOrderComponent);
      }

      _createClass(CreateOrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CreateOrderComponent;
    }();

    CreateOrderComponent.ɵfac = function CreateOrderComponent_Factory(t) {
      return new (t || CreateOrderComponent)();
    };

    CreateOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateOrderComponent,
      selectors: [["emes-create-order"]],
      decls: 2,
      vars: 0,
      template: function CreateOrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "create-order works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9jcmVhdGUtb3JkZXIvY3JlYXRlLW9yZGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-create-order',
          templateUrl: './create-order.component.html',
          styleUrls: ['./create-order.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/orders/order-default/order-default.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/orders/order-default/order-default.component.ts ***!
    \*****************************************************************/

  /*! exports provided: OrderDefaultComponent */

  /***/
  function srcAppOrdersOrderDefaultOrderDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDefaultComponent", function () {
      return OrderDefaultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OrderDefaultComponent = /*#__PURE__*/function () {
      function OrderDefaultComponent() {
        _classCallCheck(this, OrderDefaultComponent);
      }

      _createClass(OrderDefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrderDefaultComponent;
    }();

    OrderDefaultComponent.ɵfac = function OrderDefaultComponent_Factory(t) {
      return new (t || OrderDefaultComponent)();
    };

    OrderDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderDefaultComponent,
      selectors: [["emes-order-default"]],
      decls: 4,
      vars: 0,
      consts: [[1, "container-fluid", "d-flex", "flex-column", "flex-fill"], [1, "row", "p-0", "flex-fill", "align-items-center", "mt-5"], [1, "col", "text-center"]],
      template: function OrderDefaultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Select a Order in the left hand side list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlci1kZWZhdWx0L29yZGVyLWRlZmF1bHQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderDefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-order-default',
          templateUrl: './order-default.component.html',
          styleUrls: ['./order-default.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/orders/order-viewer/order-viewer.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/orders/order-viewer/order-viewer.component.ts ***!
    \***************************************************************/

  /*! exports provided: OrderViewerComponent */

  /***/
  function srcAppOrdersOrderViewerOrderViewerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderViewerComponent", function () {
      return OrderViewerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function OrderViewerComponent_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function OrderViewerComponent_ng_template_10_form_0_ng_container_3_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function OrderViewerComponent_ng_template_10_form_0_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderViewerComponent_ng_template_10_form_0_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var attribute_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", attribute_r5.value.attributes);
      }
    }

    function OrderViewerComponent_ng_template_10_form_0_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Id");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderViewerComponent_ng_template_10_form_0_ng_container_4_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var attribute_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return attribute_r5.value.value = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var attribute_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", attribute_r5.value.value);
      }
    }

    function OrderViewerComponent_ng_template_10_form_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrderViewerComponent_ng_template_10_form_0_ng_container_3_Template, 2, 2, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderViewerComponent_ng_template_10_form_0_ng_container_4_Template, 6, 1, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var attribute_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Key", attribute_r5.key, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", attribute_r5.value.attributes && attribute_r5.value.attributes.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !attribute_r5.value.attributes || attribute_r5.value.attributes.length === 0);
      }
    }

    function OrderViewerComponent_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrderViewerComponent_ng_template_10_form_0_Template, 5, 3, "form", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "keyvalue");
      }

      if (rf & 2) {
        var attributes_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, attributes_r3));
      }
    }

    var OrderViewerComponent = /*#__PURE__*/function () {
      function OrderViewerComponent() {
        _classCallCheck(this, OrderViewerComponent);

        this.myContext = 'hello';
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dismissed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // Indicate roles selected

        this.itemsSelected = false; // The list of group members, name and description of the group.
        // A deep copy of the config.group object is needed in case user decide to cancel the form

        this.items = [];
        this.selectedItems = [];
      }

      _createClass(OrderViewerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.config.attributes);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {}
      }, {
        key: "selectItems",
        value: function selectItems(rows) {
          this.selectedItems = this.items.filter(function (r) {
            return rows.map(function (x) {
              return x.data.id;
            }).includes(r.id);
          });

          if (this.selectedItems.length > 0) {
            this.itemsSelected = true;
          } else {
            this.itemsSelected = false;
          }
        }
      }, {
        key: "submitForm",
        value: function submitForm(method) {
          this.submitted.emit(this.selectedItems);
        }
      }, {
        key: "dismissForm",
        value: function dismissForm(method) {
          this.dismissed.emit(method);
        }
      }]);

      return OrderViewerComponent;
    }();

    OrderViewerComponent.ɵfac = function OrderViewerComponent_Factory(t) {
      return new (t || OrderViewerComponent)();
    };

    OrderViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderViewerComponent,
      selectors: [["emes-order-viewer"]],
      inputs: {
        config: "config"
      },
      outputs: {
        submitted: "submitted",
        dismissed: "dismissed"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 17,
      vars: 6,
      consts: [[1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "d-flex", "flex-column", 2, "height", "60vh"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["dynamicForm", ""], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "form-row"], [1, "form-group", "col-sm-12", "col-md-12"], ["for", "inputId"], ["type", "text", "id", "inputId", "name", "inputId", 1, "form-control", 3, "ngModel", "ngModelChange"]],
      template: function OrderViewerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderViewerComponent_Template_button_click_5_listener() {
            return ctx.dismissForm("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OrderViewerComponent_ng_container_9_Template, 1, 0, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OrderViewerComponent_ng_template_10_Template, 2, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderViewerComponent_Template_button_click_13_listener() {
            return ctx.dismissForm("Close button");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderViewerComponent_Template_button_click_15_listener() {
            return ctx.submitForm("OK");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "ORDER.CREATE ORDER"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ctx.config.attributes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.itemsSelected);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlci12aWV3ZXIvb3JkZXItdmlld2VyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-order-viewer',
          templateUrl: './order-viewer.component.html',
          styleUrls: ['./order-viewer.component.scss']
        }]
      }], function () {
        return [];
      }, {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        submitted: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        dismissed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/orders/order/order.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/orders/order/order.component.ts ***!
    \*************************************************/

  /*! exports provided: OrderComponent */

  /***/
  function srcAppOrdersOrderOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderComponent", function () {
      return OrderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
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

    function OrderComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_div_7_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.save(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_div_7_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.save(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_div_7_Template_button_click_8_listener() {
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

    function OrderComponent_button_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_button_14_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.save(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderComponent_button_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_button_15_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save & Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderComponent_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_button_16_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.copy();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Copy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderComponent_button_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_button_17_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16["delete"]();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function OrderComponent_option_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);

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

    var OrderComponent = /*#__PURE__*/function () {
      function OrderComponent(route) {
        _classCallCheck(this, OrderComponent);

        this.route = route;
        this.isAuthor = true;
        this.isOwner = true; // Icon

        this.faEllipsisV = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEllipsisV"];
        this.types = []; // Used for cleaning subscription

        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(OrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe)).subscribe(function (data) {
            if (data.order) {
              _this.order = data.order;
            }

            console.log(_this.order);
          });
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

      return OrderComponent;
    }();

    OrderComponent.ɵfac = function OrderComponent_Factory(t) {
      return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    OrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderComponent,
      selectors: [["emes-order"]],
      decls: 36,
      vars: 12,
      consts: [[1, "container-fluid", "d-flex", "flex-column"], [1, "row", "justify-content-between", "align-items-center", "pt-3", "pb-2", "mb-3", "border-bottom"], [1, "col-auto"], [1, "btn-toolbar", "mb-2", "mb-md-0"], ["class", "btn-group mr-2", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", "mr-2", 3, "click"], ["ngbDropdown", "", "placement", "bottom-right", 1, "btn-group", "mr-2"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-sm", "btn-link", "dropdown-icon"], [1, "text-primary", "pointer", 3, "icon", "fixedWidth"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "inputId"], ["type", "text", "id", "inputId", "name", "inputId", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "selectType"], ["name", "selectType", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "inputType"], ["type", "text", "id", "inputType", "name", "inputType", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn-group", "mr-2"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["ngbDropdown", "", "placement", "bottom-right", 1, "btn-group"], ["ngbDropdownToggle", "", 1, "btn", "btn-sm", "btn-primary", "dropdown-toggle-split"], ["ngbDropdownItem", "", 3, "click"]],
      template: function OrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Order Management ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OrderComponent_div_7_Template, 10, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderComponent_Template_button_click_8_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OrderComponent_button_14_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OrderComponent_button_15_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OrderComponent_button_16_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, OrderComponent_button_17_Template, 2, 0, "button", 10);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.order.id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Select Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderComponent_Template_select_ngModelChange_28_listener($event) {
            return ctx.selectedType = $event;
          })("ngModelChange", function OrderComponent_Template_select_ngModelChange_28_listener() {
            return ctx.typeSelected();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Please select a type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, OrderComponent_option_31_Template, 2, 2, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OrderComponent_Template_input_ngModelChange_35_listener($event) {
            return ctx.order.status = $event;
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.order.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.order.status);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: [".dropdown-icon.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJzL29yZGVyL0M6XFxEZXZcXEludGVybmFsXFxDbGllbnRBcHAtMi9zcmNcXGFwcFxcb3JkZXJzXFxvcmRlclxcb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29yZGVycy9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1pY29uLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiIsIi5kcm9wZG93bi1pY29uLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-order',
          templateUrl: './order.component.html',
          styleUrls: ['./order.component.scss']
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
  "./src/app/orders/orders-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/orders/orders-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: OrdersRoutingModule */

  /***/
  function srcAppOrdersOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function () {
      return OrdersRoutingModule;
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


    var _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./orders/orders.component */
    "./src/app/orders/orders/orders.component.ts");
    /* harmony import */


    var _route_resolvers_orders_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./route-resolvers/orders-resolver.service */
    "./src/app/orders/route-resolvers/orders-resolver.service.ts");
    /* harmony import */


    var _route_resolvers_order_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./route-resolvers/order-resolver.service */
    "./src/app/orders/route-resolvers/order-resolver.service.ts");
    /* harmony import */


    var _order_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./order/order.component */
    "./src/app/orders/order/order.component.ts");
    /* harmony import */


    var _route_resolvers_order_scheme_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./route-resolvers/order-scheme-resolver.service */
    "./src/app/orders/route-resolvers/order-scheme-resolver.service.ts");

    var routes = [{
      path: '',
      component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"],
      resolve: {
        orders: _route_resolvers_orders_resolver_service__WEBPACK_IMPORTED_MODULE_3__["OrdersResolverService"],
        scheme: _route_resolvers_order_scheme_resolver_service__WEBPACK_IMPORTED_MODULE_6__["OrderSchemeResolverService"]
      }
    }, {
      path: ':orderId',
      resolve: {
        order: _route_resolvers_order_resolver_service__WEBPACK_IMPORTED_MODULE_4__["OrderResolverService"]
      },
      component: _order_order_component__WEBPACK_IMPORTED_MODULE_5__["OrderComponent"]
    }];

    var OrdersRoutingModule = function OrdersRoutingModule() {
      _classCallCheck(this, OrdersRoutingModule);
    };

    OrdersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OrdersRoutingModule
    });
    OrdersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OrdersRoutingModule_Factory(t) {
        return new (t || OrdersRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrdersRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersRoutingModule, [{
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
  "./src/app/orders/orders.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/orders/orders.module.ts ***!
    \*****************************************/

  /*! exports provided: OrdersModule */

  /***/
  function srcAppOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersModule", function () {
      return OrdersModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _orders_orders_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./orders/orders.component */
    "./src/app/orders/orders/orders.component.ts");
    /* harmony import */


    var _order_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./order/order.component */
    "./src/app/orders/order/order.component.ts");
    /* harmony import */


    var _order_default_order_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-default/order-default.component */
    "./src/app/orders/order-default/order-default.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./orders-routing.module */
    "./src/app/orders/orders-routing.module.ts");
    /* harmony import */


    var _create_order_create_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./create-order/create-order.component */
    "./src/app/orders/create-order/create-order.component.ts");
    /* harmony import */


    var _order_viewer_order_viewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./order-viewer/order-viewer.component */
    "./src/app/orders/order-viewer/order-viewer.component.ts");

    var OrdersModule = function OrdersModule() {
      _classCallCheck(this, OrdersModule);
    };

    OrdersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OrdersModule
    });
    OrdersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OrdersModule_Factory(t) {
        return new (t || OrdersModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrdersModule, {
        declarations: [_orders_orders_component__WEBPACK_IMPORTED_MODULE_1__["OrdersComponent"], _order_order_component__WEBPACK_IMPORTED_MODULE_2__["OrderComponent"], _order_default_order_default_component__WEBPACK_IMPORTED_MODULE_3__["OrderDefaultComponent"], _create_order_create_order_component__WEBPACK_IMPORTED_MODULE_6__["CreateOrderComponent"], _order_viewer_order_viewer_component__WEBPACK_IMPORTED_MODULE_7__["OrderViewerComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_orders_orders_component__WEBPACK_IMPORTED_MODULE_1__["OrdersComponent"], _order_order_component__WEBPACK_IMPORTED_MODULE_2__["OrderComponent"], _order_default_order_default_component__WEBPACK_IMPORTED_MODULE_3__["OrderDefaultComponent"], _create_order_create_order_component__WEBPACK_IMPORTED_MODULE_6__["CreateOrderComponent"], _order_viewer_order_viewer_component__WEBPACK_IMPORTED_MODULE_7__["OrderViewerComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/orders/orders/orders.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/orders/orders/orders.component.ts ***!
    \***************************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppOrdersOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var dynamic_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! dynamic-form */
    "./dist/dynamic-form/fesm2015/dynamic-form.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/order.service */
    "./src/app/orders/shared/order.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var data_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! data-table */
    "./dist/data-table/fesm2015/data-table.js");

    var OrdersComponent = /*#__PURE__*/function () {
      function OrdersComponent(route, orderService, translateService, dynamicFormService) {
        _classCallCheck(this, OrdersComponent);

        this.route = route;
        this.orderService = orderService;
        this.translateService = translateService;
        this.dynamicFormService = dynamicFormService; // Indicator whether current user is admin

        this.isAdmin = true;
        this.closeResult = ''; // Preferences of order columns

        this.LOCAL_STORAGE_PREFERENCES = 'ORDERS'; // Used for cleaning subscription

        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(OrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // TODO: set customized order columns
          var preferences = this.getPreferences();
          var observables = [];
          observables.push(this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe)));
          observables.push(this.orderService.orders$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe)));
          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(observables).subscribe(function (x) {
            var columnDefinitions = [{
              id: '1',
              name: 'id',
              label: 'Id',
              type: 'text',
              visible: true,
              searchable: false,
              filterMode: 'none'
            }, {
              id: '2',
              name: 'status',
              label: 'Status',
              type: 'text',
              visible: true,
              searchable: false,
              filterMode: 'text'
            }, {
              id: '2',
              name: 'template.name',
              label: 'Template',
              type: 'text',
              visible: true,
              searchable: false,
              filterMode: 'text'
            }, {
              id: '2',
              name: 'lastChange',
              label: 'LastChange',
              type: 'text',
              visible: true,
              searchable: false,
              filterMode: 'text'
            }];
            _this2.orderScheme = x[0].scheme;
            var orders = x[1];

            _this2.setDynamicColumns(_this2.orderScheme.fields, columnDefinitions);

            columnDefinitions.push({
              id: '4',
              name: 'view',
              label: 'View',
              type: 'icon',
              visible: true,
              searchable: false,
              filterMode: 'none',
              click: _this2.viewOrder.bind(_this2)
            }, {
              id: '5',
              name: 'delete',
              label: 'Delete',
              type: 'icon',
              visible: true,
              searchable: false,
              filterMode: 'none',
              click: _this2.deleteOrder.bind(_this2)
            });
            _this2.settings = {
              selectableRows: false,
              columnDefinitions: columnDefinitions,
              data: orders.map(function (o) {
                return Object.assign(Object.assign(Object.assign({}, o), _this2.getValueForRecord(_this2.orderScheme, o)), {
                  view: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faExternalLinkAlt"],
                  "delete": _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTrash"]
                });
              }),
              toolBar: {
                right: [].concat(_toConsumableArray(_this2.isAdmin ? [{
                  name: 'New Order',
                  type: 'button',
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlus"],
                  callback: _this2.createOrder.bind(_this2)
                }] : []), [{
                  type: 'filter'
                }])
              },
              groupBy: []
            };
          });
        }
      }, {
        key: "setDynamicColumns",
        value: function setDynamicColumns(fields, columnDefinitions) {
          var _this3 = this;

          fields.forEach(function (field) {
            if (field.type.toLowerCase() === 'array' || field.type.toLowerCase() === 'struct') {
              _this3.setDynamicColumns(field.fields, columnDefinitions);
            } else {
              columnDefinitions.push({
                id: field.id,
                name: field.name,
                label: field.name,
                type: 'text',
                visible: true,
                searchable: false,
                filterMode: 'text'
              });
            }
          });
        }
      }, {
        key: "getValueForRecord",
        value: function getValueForRecord(scheme, order) {
          var _this4 = this;

          var _final = {};
          scheme.fields.forEach(function (field) {
            var attribute = order.attributes[field.name];

            if (attribute) {
              _this4.setValueFromOrderAttribute(attribute, field, _final);
            }
          });
          return _final;
        }
      }, {
        key: "setValueFromOrderAttribute",
        value: function setValueFromOrderAttribute(orderAttribute, field, _final2) {
          var _this5 = this;

          if (field.type === 'array') {
            field.fields.forEach(function (subField) {
              var subAttribute = orderAttribute.attributes[subField.name];

              if (subAttribute) {
                _this5.setValueFromOrderAttribute(subAttribute, subField, _final2);
              }
            });
          } else if (field.type === 'struct') {} else {
            _final2[field.name] = orderAttribute.value;
          }
        }
      }, {
        key: "getPreferences",
        value: function getPreferences() {
          var pref = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_PREFERENCES));
          return pref;
        }
      }, {
        key: "createOrder",
        value: function createOrder() {
          var _this6 = this;

          var config = {
            headerText: 'Create a user',
            submitText: 'OK',
            closeText: 'Cancel',
            onSubmit: function onSubmit(e) {
              return _this6.doCreateOrder(e);
            },
            onDismiss: function onDismiss(e) {},
            extraButtons: [],
            fields: []
          };
          this.orderScheme.fields.forEach(function (field) {
            _this6.setFieldsByOrderScheme('', field, config.fields);
          });
          this.dynamicFormService.popDynamicFormModal(config);
        }
      }, {
        key: "getEmptyAttributesByField",
        value: function getEmptyAttributesByField(fields) {
          var _this7 = this;

          var attributes = {};
          fields.forEach(function (field) {
            attributes[field.name] = {
              id: '',
              name: field.name,
              type: field.type,
              value: '',
              suffix: '',
              attributes: {}
            };

            if (field.type === 'array') {
              _this7.getEmptyAttributesByField(field.fields);
            } else if (field.type === 'struct') {} else {}
          });
          return attributes;
        }
      }, {
        key: "setFieldsByOrderScheme",
        value: function setFieldsByOrderScheme(parentName, field, fieldConfigs) {
          var _this8 = this;

          var theFieldName = parentName !== '' ? parentName + '.' + field.name : field.name;

          if (field.type.toLowerCase() === 'array') {
            field.fields.forEach(function (subField) {
              return _this8.setFieldsByOrderScheme(theFieldName, subField, fieldConfigs);
            });
          } else if (field.type.toLowerCase() === 'struct') {} else {
            fieldConfigs.push({
              type: 'input',
              label: field.name,
              name: theFieldName,
              placeholder: 'Enter ' + field.name,
              validation: [dynamic_form__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].required(field.name + ' required')]
            });
          }
        }
      }, {
        key: "doCreateOrder",
        value: function doCreateOrder(e) {
          var _this9 = this;

          var attributes = {};
          this.orderScheme.fields.forEach(function (field) {
            return _this9.setAttributes('', field, e, attributes);
          });
          this.orderService.create(attributes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe)).subscribe();
        }
      }, {
        key: "setAttributes",
        value: function setAttributes(parentName, field, results, attributes) {
          var _this10 = this;

          var theFieldName = parentName !== '' ? parentName + '.' + field.name : field.name;
          attributes[field.name] = {
            id: '',
            name: field.name,
            type: field.type,
            value: '',
            suffix: '',
            attributes: {}
          };

          if (field.type.toLowerCase() === 'array') {
            field.fields.forEach(function (subField) {
              return _this10.setAttributes(theFieldName, subField, results, attributes[field.name].attributes);
            });
          } else if (field.type.toLowerCase() === 'struct') {} else {
            attributes[field.name].value = results[theFieldName];
          }
        }
      }, {
        key: "viewOrder",
        value: function viewOrder() {}
      }, {
        key: "deleteOrder",
        value: function deleteOrder() {}
      }]);

      return OrdersComponent;
    }();

    OrdersComponent.ɵfac = function OrdersComponent_Factory(t) {
      return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](dynamic_form__WEBPACK_IMPORTED_MODULE_4__["DynamicFormService"]));
    };

    OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrdersComponent,
      selectors: [["emes-orders"]],
      decls: 5,
      vars: 4,
      consts: [[1, "d-flex", "justify-content-between", "flex-wrap", "flex-md-nowrap", "align-items-center", "pt-3", "pb-2", "mb-3", "border-bottom"], [1, "d-flex", "flex-fill", 3, "settings"]],
      template: function OrdersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "csps-data-table", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "ORDER.ORDERS"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings);
        }
      },
      directives: [data_table__WEBPACK_IMPORTED_MODULE_8__["DataTableComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-orders',
          templateUrl: './orders.component.html',
          styleUrls: ['./orders.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _shared_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: dynamic_form__WEBPACK_IMPORTED_MODULE_4__["DynamicFormService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/orders/route-resolvers/order-resolver.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/orders/route-resolvers/order-resolver.service.ts ***!
    \******************************************************************/

  /*! exports provided: OrderResolverService */

  /***/
  function srcAppOrdersRouteResolversOrderResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderResolverService", function () {
      return OrderResolverService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/order.service */
    "./src/app/orders/shared/order.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var OrderResolverService = /*#__PURE__*/function () {
      function OrderResolverService(orderService, router) {
        _classCallCheck(this, OrderResolverService);

        this.orderService = orderService;
        this.router = router;
      }

      _createClass(OrderResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var id = route.paramMap.get('orderId');
          return this.orderService.getOrder(id);
        }
      }]);

      return OrderResolverService;
    }();

    OrderResolverService.ɵfac = function OrderResolverService_Factory(t) {
      return new (t || OrderResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    OrderResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OrderResolverService,
      factory: OrderResolverService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/orders/route-resolvers/order-scheme-resolver.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/orders/route-resolvers/order-scheme-resolver.service.ts ***!
    \*************************************************************************/

  /*! exports provided: OrderSchemeResolverService */

  /***/
  function srcAppOrdersRouteResolversOrderSchemeResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderSchemeResolverService", function () {
      return OrderSchemeResolverService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_scheme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/services/scheme.service */
    "./src/app/shared/services/scheme.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var OrderSchemeResolverService = /*#__PURE__*/function () {
      function OrderSchemeResolverService(schemeService, router) {
        _classCallCheck(this, OrderSchemeResolverService);

        this.schemeService = schemeService;
        this.router = router;
        this.orderSchemeName = 'Order_Scheme';
      }

      _createClass(OrderSchemeResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.schemeService.getSchemeByName(this.orderSchemeName);
        }
      }]);

      return OrderSchemeResolverService;
    }();

    OrderSchemeResolverService.ɵfac = function OrderSchemeResolverService_Factory(t) {
      return new (t || OrderSchemeResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_scheme_service__WEBPACK_IMPORTED_MODULE_1__["SchemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    OrderSchemeResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OrderSchemeResolverService,
      factory: OrderSchemeResolverService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderSchemeResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_services_scheme_service__WEBPACK_IMPORTED_MODULE_1__["SchemeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/orders/route-resolvers/orders-resolver.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/orders/route-resolvers/orders-resolver.service.ts ***!
    \*******************************************************************/

  /*! exports provided: OrdersResolverService */

  /***/
  function srcAppOrdersRouteResolversOrdersResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersResolverService", function () {
      return OrdersResolverService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/order.service */
    "./src/app/orders/shared/order.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var OrdersResolverService = /*#__PURE__*/function () {
      function OrdersResolverService(orderService, router) {
        _classCallCheck(this, OrdersResolverService);

        this.orderService = orderService;
        this.router = router;
      }

      _createClass(OrdersResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.orderService.getOrders(0, 50);
        }
      }]);

      return OrdersResolverService;
    }();

    OrdersResolverService.ɵfac = function OrdersResolverService_Factory(t) {
      return new (t || OrdersResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    OrdersResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OrdersResolverService,
      factory: OrdersResolverService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/orders/shared/order.service.ts":
  /*!************************************************!*\
    !*** ./src/app/orders/shared/order.service.ts ***!
    \************************************************/

  /*! exports provided: OrderService */

  /***/
  function srcAppOrdersSharedOrderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderService", function () {
      return OrderService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var OrderService = /*#__PURE__*/function () {
      function OrderService(http) {
        _classCallCheck(this, OrderService);

        this.http = http;
        this.orderUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'api/v1/orders'; // URL to web api

        this.orders$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.orders = [{
          id: '60266424',
          status: 'New',
          lastChange: '2021-08-26T09:30:43:345',
          internalOrder: true,
          attributes: {
            erp_body_data: {
              id: '618589669',
              name: 'erp_body_data',
              type: 'array',
              suffix: 'erp_body_data',
              attributes: {
                vinCode: {
                  id: '1',
                  name: 'vinCode',
                  type: 'string',
                  value: 'LFC9888TG3000NH',
                  suffix: '',
                  attributes: {}
                },
                bodyType: {
                  id: '2',
                  name: 'bodyType',
                  type: 'string',
                  value: 'DB',
                  suffix: '',
                  attributes: {}
                },
                firstColorCode: {
                  id: '3',
                  name: 'firstColorCode',
                  type: 'string',
                  value: '10',
                  suffix: '',
                  attributes: {}
                },
                secondColorCode: {
                  id: '4',
                  name: 'secondColorCode',
                  type: 'string',
                  value: '20',
                  suffix: '',
                  attributes: {}
                },
                carCategory: {
                  id: '5',
                  name: 'carCategory',
                  type: 'string',
                  value: '-Y',
                  suffix: '',
                  attributes: {}
                },
                roofWindow: {
                  id: '6',
                  name: 'carCategory',
                  type: 'string',
                  value: '-Y',
                  suffix: '',
                  attributes: {}
                },
                orderNumber: {
                  id: '7',
                  name: 'orderNumber',
                  type: 'string',
                  value: 'H1000309033',
                  suffix: '',
                  attributes: {}
                },
                orderType: {
                  id: '8',
                  name: 'orderType',
                  type: 'string',
                  value: '01',
                  suffix: '',
                  attributes: {}
                },
                plantId: {
                  id: '9',
                  name: 'plantId',
                  type: 'string',
                  value: 'H',
                  suffix: '',
                  attributes: {}
                },
                twoTonedCar: {
                  id: '10',
                  name: 'twoTonedCar',
                  type: 'string',
                  value: 'H',
                  suffix: '',
                  attributes: {}
                }
              }
            }
          },
          template: {
            id: '49075898',
            name: 'Standard Run',
            nextId: '21',
            valid: true,
            parent: null,
            selector: '49085817',
            leadTime: null,
            group: {
              id: '57100',
              name: 'complete process'
            },
            templateType: 'WITH_MATCHER',
            matcherValid: true,
            comment: '',
            graphics: '',
            variants: []
          }
        }];
      }

      _createClass(OrderService, [{
        key: "getOrder",
        value: function getOrder(id) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.orders.find(function (p) {
            return p.id === id;
          }));
        }
      }, {
        key: "getOrders",
        value: function getOrders(page, size) {
          // const url = `${this.orderUrl}/?page=${page}&size=${size}`;
          // return this.http.get<Order[]>(url).pipe(tap(x => {
          //   this.orders$.next(x);
          // }));
          this.orders$.next(this.orders);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.orders);
        }
      }, {
        key: "create",
        value: function create(attributes) {
          var _this11 = this;

          var url = "".concat(this.orderUrl);
          var payload = {
            isInternal: true,
            attributes: attributes
          };
          return this.http.post(url, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (x) {
            var newOrder = {
              id: x,
              status: 'new',
              lastChange: new Date().toString(),
              internalOrder: true,
              attributes: attributes,
              template: null
            };

            var orders = _this11.orders$.getValue();

            orders.push(newOrder);

            _this11.orders$.next(orders);
          }));
        }
      }]);

      return OrderService;
    }();

    OrderService.ɵfac = function OrderService_Factory(t) {
      return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OrderService,
      factory: OrderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=orders-orders-module-es5.js.map