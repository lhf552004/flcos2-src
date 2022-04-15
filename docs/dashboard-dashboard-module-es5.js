function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/core.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/core.js ***!
    \************************************************************************/

  /*! exports provided: ɵMatchMedia, ɵMockMatchMedia, ɵMockMatchMediaProvider, CoreModule, removeStyles, BROWSER_PROVIDER, CLASS_NAME, MediaChange, StylesheetMap, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, mergeAlias, BaseDirective2, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MediaObserver, MediaTrigger, sortDescendingPriority, sortAscendingPriority, coerceArray, StyleUtils, StyleBuilder, validateBasis, MediaMarshaller, BREAKPOINT_PRINT, PrintHook */

  /***/
  function node_modulesAngularFlexLayout__ivy_ngcc__Esm2015CoreJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵMatchMedia", function () {
      return MatchMedia;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵMockMatchMedia", function () {
      return MockMatchMedia;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵMockMatchMediaProvider", function () {
      return MockMatchMediaProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeStyles", function () {
      return removeStyles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BROWSER_PROVIDER", function () {
      return BROWSER_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function () {
      return CLASS_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaChange", function () {
      return MediaChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StylesheetMap", function () {
      return StylesheetMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function () {
      return DEFAULT_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LAYOUT_CONFIG", function () {
      return LAYOUT_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN", function () {
      return SERVER_TOKEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function () {
      return BREAKPOINT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mergeAlias", function () {
      return mergeAlias;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseDirective2", function () {
      return BaseDirective2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_BREAKPOINTS", function () {
      return DEFAULT_BREAKPOINTS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScreenTypes", function () {
      return ScreenTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ORIENTATION_BREAKPOINTS", function () {
      return ORIENTATION_BREAKPOINTS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreakPointRegistry", function () {
      return BreakPointRegistry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function () {
      return BREAKPOINTS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaObserver", function () {
      return MediaObserver;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaTrigger", function () {
      return MediaTrigger;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sortDescendingPriority", function () {
      return sortDescendingPriority;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sortAscendingPriority", function () {
      return sortAscendingPriority;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
      return coerceArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleUtils", function () {
      return StyleUtils;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleBuilder", function () {
      return StyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateBasis", function () {
      return validateBasis;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaMarshaller", function () {
      return MediaMarshaller;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BREAKPOINT_PRINT", function () {
      return BREAKPOINT_PRINT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrintHook", function () {
      return PrintHook;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: core/browser-provider.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Find all of the server-generated stylings, if any, and remove them
     * This will be in the form of inline classes and the style block in the
     * head of the DOM
     * @param {?} _document
     * @param {?} platformId
     * @return {?}
     */


    function removeStyles(_document, platformId) {
      return (
        /**
        * @return {?}
        */
        function () {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
            /** @type {?} */
            var elements = Array.from(_document.querySelectorAll("[class*=".concat(CLASS_NAME, "]"))); // RegExp constructor should only be used if passing a variable to the constructor.
            // When using static regular expression it is more performant to use reg exp literal.
            // This is also needed to provide Safari 9 compatibility, please see
            // https://stackoverflow.com/questions/37919802 for more discussion.

            /** @type {?} */

            var classRegex = /\bflex-layout-.+?\b/g;
            elements.forEach(
            /**
            * @param {?} el
            * @return {?}
            */
            function (el) {
              el.classList.contains("".concat(CLASS_NAME, "ssr")) && el.parentNode ? el.parentNode.removeChild(el) : el.className.replace(classRegex, '');
            });
          }
        }
      );
    }
    /**
     *  Provider to remove SSR styles on the browser
     * @type {?}
     */


    var BROWSER_PROVIDER = {
      provide:
      /** @type {?} */
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"],
      useFactory: removeStyles,
      deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]],
      multi: true
    };
    /** @type {?} */

    var CLASS_NAME = 'flex-layout-';
    /**
     * @fileoverview added by tsickle
     * Generated from: core/module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * *****************************************************************
     * Define module for common Angular Layout utilities
     * *****************************************************************
     */

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      },
      providers: [BROWSER_PROVIDER]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          providers: [BROWSER_PROVIDER]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: core/media-change.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class instances emitted [to observers] for each mql notification
     */


    var MediaChange = /*#__PURE__*/function () {
      /**
       * @param {?=} matches whether the mediaQuery is currently activated
       * @param {?=} mediaQuery e.g. (min-width: 600px) and (max-width: 959px)
       * @param {?=} mqAlias e.g. gt-sm, md, gt-lg
       * @param {?=} suffix e.g. GtSM, Md, GtLg
       * @param {?=} priority the priority of activation for the given breakpoint
       */
      function MediaChange() {
        var matches = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var mediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';
        var mqAlias = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        var suffix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
        var priority = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

        _classCallCheck(this, MediaChange);

        this.matches = matches;
        this.mediaQuery = mediaQuery;
        this.mqAlias = mqAlias;
        this.suffix = suffix;
        this.priority = priority;
        this.property = '';
      }
      /**
       * Create an exact copy of the MediaChange
       * @return {?}
       */


      _createClass(MediaChange, [{
        key: "clone",
        value: function clone() {
          return new MediaChange(this.matches, this.mediaQuery, this.mqAlias, this.suffix);
        }
      }]);

      return MediaChange;
    }();
    /**
     * @fileoverview added by tsickle
     * Generated from: core/stylesheet-map/stylesheet-map.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Utility to emulate a CSS stylesheet
     *
     * This utility class stores all of the styles for a given HTML element
     * as a readonly `stylesheet` map.
     */


    var StylesheetMap = /*#__PURE__*/function () {
      function StylesheetMap() {
        _classCallCheck(this, StylesheetMap);

        this.stylesheet = new Map();
      }
      /**
       * Add an individual style to an HTML element
       * @param {?} element
       * @param {?} style
       * @param {?} value
       * @return {?}
       */


      _createClass(StylesheetMap, [{
        key: "addStyleToElement",
        value: function addStyleToElement(element, style, value) {
          /** @type {?} */
          var stylesheet = this.stylesheet.get(element);

          if (stylesheet) {
            stylesheet.set(style, value);
          } else {
            this.stylesheet.set(element, new Map([[style, value]]));
          }
        }
        /**
         * Clear the virtual stylesheet
         * @return {?}
         */

      }, {
        key: "clearStyles",
        value: function clearStyles() {
          this.stylesheet.clear();
        }
        /**
         * Retrieve a given style for an HTML element
         * @param {?} el
         * @param {?} styleName
         * @return {?}
         */

      }, {
        key: "getStyleForElement",
        value: function getStyleForElement(el, styleName) {
          /** @type {?} */
          var styles = this.stylesheet.get(el);
          /** @type {?} */

          var value = '';

          if (styles) {
            /** @type {?} */
            var style = styles.get(styleName);

            if (typeof style === 'number' || typeof style === 'string') {
              value = style + '';
            }
          }

          return value;
        }
      }]);

      return StylesheetMap;
    }();

    StylesheetMap.ɵfac = function StylesheetMap_Factory(t) {
      return new (t || StylesheetMap)();
    };
    /** @nocollapse */


    StylesheetMap.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function StylesheetMap_Factory() {
        return new StylesheetMap();
      },
      token: StylesheetMap,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StylesheetMap, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: core/stylesheet-map/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: core/tokens/library-config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_CONFIG = {
      addFlexToParent: true,
      addOrientationBps: false,
      disableDefaultBps: false,
      disableVendorPrefixes: false,
      serverLoaded: false,
      useColumnBasisZero: true,
      printWithBreakpoints: [],
      mediaTriggerAutoRestore: true,
      ssrObserveBreakpoints: []
    };
    /** @type {?} */

    var LAYOUT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Flex Layout token, config options for the library', {
      providedIn: 'root',
      factory:
      /**
      * @return {?}
      */
      function factory() {
        return DEFAULT_CONFIG;
      }
    });
    /**
     * @fileoverview added by tsickle
     * Generated from: core/tokens/server-token.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Token that is provided to tell whether the FlexLayoutServerModule
     * has been included in the bundle
     *
     * NOTE: This can be manually provided to disable styles when using SSR
     * @type {?}
     */

    var SERVER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('FlexLayoutServerLoaded', {
      providedIn: 'root',
      factory:
      /**
      * @return {?}
      */
      function factory() {
        return false;
      }
    });
    /**
     * @fileoverview added by tsickle
     * Generated from: core/tokens/breakpoint-token.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Flex Layout token, collect all breakpoints into one provider', {
      providedIn: 'root',
      factory:
      /**
      * @return {?}
      */
      function factory() {
        return null;
      }
    });
    /**
     * @fileoverview added by tsickle
     * Generated from: core/tokens/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: core/add-alias.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * For the specified MediaChange, make sure it contains the breakpoint alias
     * and suffix (if available).
     * @param {?} dest
     * @param {?} source
     * @return {?}
     */

    function mergeAlias(dest, source) {
      dest = dest ? dest.clone() : new MediaChange();

      if (source) {
        dest.mqAlias = source.alias;
        dest.mediaQuery = source.mediaQuery;
        dest.suffix =
        /** @type {?} */
        source.suffix;
        dest.priority =
        /** @type {?} */
        source.priority;
      }

      return dest;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: utils/layout-validator.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     * @type {?}
     */


    var INLINE = 'inline';
    /** @type {?} */

    var LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
    /**
     * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
     * @param {?} value
     * @return {?}
     */

    function buildLayoutCSS(value) {
      var _validateValue = validateValue(value),
          _validateValue2 = _slicedToArray(_validateValue, 3),
          direction = _validateValue2[0],
          wrap = _validateValue2[1],
          isInline = _validateValue2[2];

      return buildCSS(direction, wrap, isInline);
    }
    /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of 'row'
     * @param {?} value
     * @return {?}
     */


    function validateValue(value) {
      value = value ? value.toLowerCase() : '';

      var _value$split = value.split(' '),
          _value$split2 = _slicedToArray(_value$split, 3),
          direction = _value$split2[0],
          wrap = _value$split2[1],
          inline = _value$split2[2]; // First value must be the `flex-direction`


      if (!LAYOUT_VALUES.find(
      /**
      * @param {?} x
      * @return {?}
      */
      function (x) {
        return x === direction;
      })) {
        direction = LAYOUT_VALUES[0];
      }

      if (wrap === INLINE) {
        wrap = inline !== INLINE ? inline : '';
        inline = INLINE;
      }

      return [direction, validateWrapValue(wrap), !!inline];
    }
    /**
     * Convert layout-wrap='<value>' to expected flex-wrap style
     * @param {?} value
     * @return {?}
     */


    function validateWrapValue(value) {
      if (!!value) {
        switch (value.toLowerCase()) {
          case 'reverse':
          case 'wrap-reverse':
          case 'reverse-wrap':
            value = 'wrap-reverse';
            break;

          case 'no':
          case 'none':
          case 'nowrap':
            value = 'nowrap';
            break;
          // All other values fallback to 'wrap'

          default:
            value = 'wrap';
            break;
        }
      }

      return value;
    }
    /**
     * Build the CSS that should be assigned to the element instance
     * BUG:
     *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
     *      Use height instead if possible; height : <xxx>vh;
     *
     *  This way any padding or border specified on the child elements are
     *  laid out and drawn inside that element's specified width and height.
     * @param {?} direction
     * @param {?=} wrap
     * @param {?=} inline
     * @return {?}
     */


    function buildCSS(direction) {
      var wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var inline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
      };
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: core/base/base2.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @abstract
     */


    var BaseDirective2 = /*#__PURE__*/function () {
      /**
       * @protected
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       */
      function BaseDirective2(elementRef, styleBuilder, styler, marshal) {
        _classCallCheck(this, BaseDirective2);

        this.elementRef = elementRef;
        this.styleBuilder = styleBuilder;
        this.styler = styler;
        this.marshal = marshal;
        this.DIRECTIVE_KEY = '';
        this.inputs = [];
        /**
         * The most recently used styles for the builder
         */

        this.mru = {};
        this.destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Cache map for style computation
         */

        this.styleCache = new Map();
      }
      /**
       * Access to host element's parent DOM node
       * @protected
       * @return {?}
       */


      _createClass(BaseDirective2, [{
        key: "ngOnChanges",

        /**
         * For \@Input changes
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          var _this = this;

          Object.keys(changes).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            if (_this.inputs.indexOf(key) !== -1) {
              /** @type {?} */
              var bp = key.split('.').slice(1).join('.');
              /** @type {?} */

              var val = changes[key].currentValue;

              _this.setValue(val, bp);
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroySubject.next();
          this.destroySubject.complete();
          this.marshal.releaseElement(this.nativeElement);
        }
        /**
         * Register with central marshaller service
         * @protected
         * @param {?=} extraTriggers
         * @return {?}
         */

      }, {
        key: "init",
        value: function init() {
          var extraTriggers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          this.marshal.init(this.elementRef.nativeElement, this.DIRECTIVE_KEY, this.updateWithValue.bind(this), this.clearStyles.bind(this), extraTriggers);
        }
        /**
         * Add styles to the element using predefined style builder
         * @protected
         * @param {?} input
         * @param {?=} parent
         * @return {?}
         */

      }, {
        key: "addStyles",
        value: function addStyles(input, parent) {
          /** @type {?} */
          var builder = this.styleBuilder;
          /** @type {?} */

          var useCache = builder.shouldCache;
          /** @type {?} */

          var genStyles = this.styleCache.get(input);

          if (!genStyles || !useCache) {
            genStyles = builder.buildStyles(input, parent);

            if (useCache) {
              this.styleCache.set(input, genStyles);
            }
          }

          this.mru = Object.assign({}, genStyles);
          this.applyStyleToElement(genStyles);
          builder.sideEffect(input, genStyles, parent);
        }
        /**
         * Remove generated styles from an element using predefined style builder
         * @protected
         * @return {?}
         */

      }, {
        key: "clearStyles",
        value: function clearStyles() {
          var _this2 = this;

          Object.keys(this.mru).forEach(
          /**
          * @param {?} k
          * @return {?}
          */
          function (k) {
            _this2.mru[k] = '';
          });
          this.applyStyleToElement(this.mru);
          this.mru = {};
        }
        /**
         * Force trigger style updates on DOM element
         * @protected
         * @return {?}
         */

      }, {
        key: "triggerUpdate",
        value: function triggerUpdate() {
          this.marshal.triggerUpdate(this.nativeElement, this.DIRECTIVE_KEY);
        }
        /**
         * Determine the DOM element's Flexbox flow (flex-direction).
         *
         * Check inline style first then check computed (stylesheet) style.
         * And optionally add the flow value to element's inline style.
         * @protected
         * @param {?} target
         * @param {?=} addIfMissing
         * @return {?}
         */

      }, {
        key: "getFlexFlowDirection",
        value: function getFlexFlowDirection(target) {
          var addIfMissing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (target) {
            var _this$styler$getFlowD = this.styler.getFlowDirection(target),
                _this$styler$getFlowD2 = _slicedToArray(_this$styler$getFlowD, 2),
                value = _this$styler$getFlowD2[0],
                hasInlineValue = _this$styler$getFlowD2[1];

            if (!hasInlineValue && addIfMissing) {
              /** @type {?} */
              var style = buildLayoutCSS(value);
              /** @type {?} */

              var elements = [target];
              this.styler.applyStyleToElements(style, elements);
            }

            return value.trim();
          }

          return 'row';
        }
        /**
         * @protected
         * @param {?} target
         * @return {?}
         */

      }, {
        key: "hasWrap",
        value: function hasWrap(target) {
          return this.styler.hasWrap(target);
        }
        /**
         * Applies styles given via string pair or object map to the directive element
         * @protected
         * @param {?} style
         * @param {?=} value
         * @param {?=} element
         * @return {?}
         */

      }, {
        key: "applyStyleToElement",
        value: function applyStyleToElement(style, value) {
          var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.nativeElement;
          this.styler.applyStyleToElement(element, style, value);
        }
        /**
         * @protected
         * @param {?} val
         * @param {?} bp
         * @return {?}
         */

      }, {
        key: "setValue",
        value: function setValue(val, bp) {
          this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, val, bp);
        }
        /**
         * @protected
         * @param {?} input
         * @return {?}
         */

      }, {
        key: "updateWithValue",
        value: function updateWithValue(input) {
          if (this.currentValue !== input) {
            this.addStyles(input);
            this.currentValue = input;
          }
        }
      }, {
        key: "parentElement",
        get: function get() {
          return this.elementRef.nativeElement.parentElement;
        }
        /**
         * Access to the HTMLElement for the directive
         * @protected
         * @return {?}
         */

      }, {
        key: "nativeElement",
        get: function get() {
          return this.elementRef.nativeElement;
        }
        /**
         * Access to the activated value for the directive
         * @return {?}
         */

      }, {
        key: "activatedValue",
        get: function get() {
          return this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, value, this.marshal.activatedAlias);
        }
      }]);

      return BaseDirective2;
    }();

    BaseDirective2.ɵfac = function BaseDirective2_Factory(t) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
    };

    BaseDirective2.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: BaseDirective2,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /**
     * @fileoverview added by tsickle
     * Generated from: core/base/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: core/breakpoints/data/break-points.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * NOTE: Smaller ranges have HIGHER priority since the match is more specific
     * @type {?}
     */

    var DEFAULT_BREAKPOINTS = [{
      alias: 'xs',
      mediaQuery: 'screen and (min-width: 0px) and (max-width: 599.9px)',
      priority: 1000
    }, {
      alias: 'sm',
      mediaQuery: 'screen and (min-width: 600px) and (max-width: 959.9px)',
      priority: 900
    }, {
      alias: 'md',
      mediaQuery: 'screen and (min-width: 960px) and (max-width: 1279.9px)',
      priority: 800
    }, {
      alias: 'lg',
      mediaQuery: 'screen and (min-width: 1280px) and (max-width: 1919.9px)',
      priority: 700
    }, {
      alias: 'xl',
      mediaQuery: 'screen and (min-width: 1920px) and (max-width: 4999.9px)',
      priority: 600
    }, {
      alias: 'lt-sm',
      overlapping: true,
      mediaQuery: 'screen and (max-width: 599.9px)',
      priority: 950
    }, {
      alias: 'lt-md',
      overlapping: true,
      mediaQuery: 'screen and (max-width: 959.9px)',
      priority: 850
    }, {
      alias: 'lt-lg',
      overlapping: true,
      mediaQuery: 'screen and (max-width: 1279.9px)',
      priority: 750
    }, {
      alias: 'lt-xl',
      overlapping: true,
      priority: 650,
      mediaQuery: 'screen and (max-width: 1919.9px)'
    }, {
      alias: 'gt-xs',
      overlapping: true,
      mediaQuery: 'screen and (min-width: 600px)',
      priority: -950
    }, {
      alias: 'gt-sm',
      overlapping: true,
      mediaQuery: 'screen and (min-width: 960px)',
      priority: -850
    }, {
      alias: 'gt-md',
      overlapping: true,
      mediaQuery: 'screen and (min-width: 1280px)',
      priority: -750
    }, {
      alias: 'gt-lg',
      overlapping: true,
      mediaQuery: 'screen and (min-width: 1920px)',
      priority: -650
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: core/breakpoints/data/orientation-break-points.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /* tslint:disable */

    /** @type {?} */

    var HANDSET_PORTRAIT = '(orientation: portrait) and (max-width: 599.9px)';
    /** @type {?} */

    var HANDSET_LANDSCAPE = '(orientation: landscape) and (max-width: 959.9px)';
    /** @type {?} */

    var TABLET_PORTRAIT = '(orientation: portrait) and (min-width: 600px) and (max-width: 839.9px)';
    /** @type {?} */

    var TABLET_LANDSCAPE = '(orientation: landscape) and (min-width: 960px) and (max-width: 1279.9px)';
    /** @type {?} */

    var WEB_PORTRAIT = '(orientation: portrait) and (min-width: 840px)';
    /** @type {?} */

    var WEB_LANDSCAPE = '(orientation: landscape) and (min-width: 1280px)';
    /** @type {?} */

    var ScreenTypes = {
      'HANDSET': "".concat(HANDSET_PORTRAIT, ", ").concat(HANDSET_LANDSCAPE),
      'TABLET': "".concat(TABLET_PORTRAIT, " , ").concat(TABLET_LANDSCAPE),
      'WEB': "".concat(WEB_PORTRAIT, ", ").concat(WEB_LANDSCAPE, " "),
      'HANDSET_PORTRAIT': "".concat(HANDSET_PORTRAIT),
      'TABLET_PORTRAIT': "".concat(TABLET_PORTRAIT, " "),
      'WEB_PORTRAIT': "".concat(WEB_PORTRAIT),
      'HANDSET_LANDSCAPE': "".concat(HANDSET_LANDSCAPE),
      'TABLET_LANDSCAPE': "".concat(TABLET_LANDSCAPE),
      'WEB_LANDSCAPE': "".concat(WEB_LANDSCAPE)
    };
    /**
     * Extended Breakpoints for handset/tablets with landscape or portrait orientations
     * @type {?}
     */

    var ORIENTATION_BREAKPOINTS = [{
      'alias': 'handset',
      priority: 2000,
      'mediaQuery': ScreenTypes.HANDSET
    }, {
      'alias': 'handset.landscape',
      priority: 2000,
      'mediaQuery': ScreenTypes.HANDSET_LANDSCAPE
    }, {
      'alias': 'handset.portrait',
      priority: 2000,
      'mediaQuery': ScreenTypes.HANDSET_PORTRAIT
    }, {
      'alias': 'tablet',
      priority: 2100,
      'mediaQuery': ScreenTypes.TABLET
    }, {
      'alias': 'tablet.landscape',
      priority: 2100,
      'mediaQuery': ScreenTypes.TABLET_LANDSCAPE
    }, {
      'alias': 'tablet.portrait',
      priority: 2100,
      'mediaQuery': ScreenTypes.TABLET_PORTRAIT
    }, {
      'alias': 'web',
      priority: 2200,
      'mediaQuery': ScreenTypes.WEB,
      overlapping: true
    }, {
      'alias': 'web.landscape',
      priority: 2200,
      'mediaQuery': ScreenTypes.WEB_LANDSCAPE,
      overlapping: true
    }, {
      'alias': 'web.portrait',
      priority: 2200,
      'mediaQuery': ScreenTypes.WEB_PORTRAIT,
      overlapping: true
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: core/breakpoints/break-point.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: utils/object-extend.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Extends an object with the *enumerable* and *own* properties of one or more source objects,
     * similar to Object.assign.
     *
     * @param {?} dest The object which will have properties copied to it.
     * @param {...?} sources The source objects from which properties will be copied.
     * @return {?}
     */

    function extendObject(dest) {
      if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
      }

      for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
      }

      for (var _i2 = 0, _sources = sources; _i2 < _sources.length; _i2++) {
        var source = _sources[_i2];

        if (source != null) {
          for (var key in source) {
            if (source.hasOwnProperty(key)) {
              dest[key] = source[key];
            }
          }
        }
      }

      return dest;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: core/breakpoints/breakpoint-tools.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var ALIAS_DELIMITERS = /(\.|-|_)/g;
    /**
     * @param {?} part
     * @return {?}
     */

    function firstUpperCase(part) {
      /** @type {?} */
      var first = part.length > 0 ? part.charAt(0) : '';
      /** @type {?} */

      var remainder = part.length > 1 ? part.slice(1) : '';
      return first.toUpperCase() + remainder;
    }
    /**
     * Converts snake-case to SnakeCase.
     * @param {?} name Text to UpperCamelCase
     * @return {?}
     */


    function camelCase(name) {
      return name.replace(ALIAS_DELIMITERS, '|').split('|').map(firstUpperCase).join('');
    }
    /**
     * For each breakpoint, ensure that a Suffix is defined;
     * fallback to UpperCamelCase the unique Alias value
     * @param {?} list
     * @return {?}
     */


    function validateSuffixes(list) {
      list.forEach(
      /**
      * @param {?} bp
      * @return {?}
      */
      function (bp) {
        if (!bp.suffix) {
          bp.suffix = camelCase(bp.alias); // create Suffix value based on alias

          bp.overlapping = !!bp.overlapping; // ensure default value
        }
      });
      return list;
    }
    /**
     * Merge a custom breakpoint list with the default list based on unique alias values
     *  - Items are added if the alias is not in the default list
     *  - Items are merged with the custom override if the alias exists in the default list
     * @param {?} defaults
     * @param {?=} custom
     * @return {?}
     */


    function mergeByAlias(defaults) {
      var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      /** @type {?} */
      var dict = {};
      defaults.forEach(
      /**
      * @param {?} bp
      * @return {?}
      */
      function (bp) {
        dict[bp.alias] = bp;
      }); // Merge custom breakpoints

      custom.forEach(
      /**
      * @param {?} bp
      * @return {?}
      */
      function (bp) {
        if (dict[bp.alias]) {
          extendObject(dict[bp.alias], bp);
        } else {
          dict[bp.alias] = bp;
        }
      });
      return validateSuffixes(Object.keys(dict).map(
      /**
      * @param {?} k
      * @return {?}
      */
      function (k) {
        return dict[k];
      }));
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: core/breakpoints/break-points-token.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     *  Injection token unique to the flex-layout library.
     *  Use this token when build a custom provider (see below).
     * @type {?}
     */


    var BREAKPOINTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Token (@angular/flex-layout) Breakpoints', {
      providedIn: 'root',
      factory:
      /**
      * @return {?}
      */
      function factory() {
        /** @type {?} */
        var breakpoints = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BREAKPOINT);
        /** @type {?} */

        var layoutConfig = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(LAYOUT_CONFIG);
        /** @type {?} */

        var bpFlattenArray = [].concat.apply([], (breakpoints || []).map(
        /**
        * @param {?} v
        * @return {?}
        */
        function (v) {
          return Array.isArray(v) ? v : [v];
        }));
        /** @type {?} */

        var builtIns = (layoutConfig.disableDefaultBps ? [] : DEFAULT_BREAKPOINTS).concat(layoutConfig.addOrientationBps ? ORIENTATION_BREAKPOINTS : []);
        return mergeByAlias(builtIns, bpFlattenArray);
      }
    });
    /**
     * @fileoverview added by tsickle
     * Generated from: core/utils/sort.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * HOF to sort the breakpoints by descending priority
     * @template T
     * @param {?} a
     * @param {?} b
     * @return {?}
     */

    function sortDescendingPriority(a, b) {
      /** @type {?} */
      var priorityA = a ? a.priority || 0 : 0;
      /** @type {?} */

      var priorityB = b ? b.priority || 0 : 0;
      return priorityB - priorityA;
    }
    /**
     * HOF to sort the breakpoints by ascending priority
     * @template T
     * @param {?} a
     * @param {?} b
     * @return {?}
     */


    function sortAscendingPriority(a, b) {
      /** @type {?} */
      var pA = a.priority || 0;
      /** @type {?} */

      var pB = b.priority || 0;
      return pA - pB;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: core/breakpoints/break-point-registry.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Registry of 1..n MediaQuery breakpoint ranges
     * This is published as a provider and may be overridden from custom, application-specific ranges
     *
     */


    var BreakPointRegistry = /*#__PURE__*/function () {
      /**
       * @param {?} list
       */
      function BreakPointRegistry(list) {
        _classCallCheck(this, BreakPointRegistry);

        /**
         * Memoized BreakPoint Lookups
         */
        this.findByMap = new Map();
        this.items = _toConsumableArray(list).sort(sortAscendingPriority);
      }
      /**
       * Search breakpoints by alias (e.g. gt-xs)
       * @param {?} alias
       * @return {?}
       */


      _createClass(BreakPointRegistry, [{
        key: "findByAlias",
        value: function findByAlias(alias) {
          return !alias ? null : this.findWithPredicate(alias,
          /**
          * @param {?} bp
          * @return {?}
          */
          function (bp) {
            return bp.alias == alias;
          });
        }
        /**
         * @param {?} query
         * @return {?}
         */

      }, {
        key: "findByQuery",
        value: function findByQuery(query) {
          return this.findWithPredicate(query,
          /**
          * @param {?} bp
          * @return {?}
          */
          function (bp) {
            return bp.mediaQuery == query;
          });
        }
        /**
         * Get all the breakpoints whose ranges could overlapping `normal` ranges;
         * e.g. gt-sm overlaps md, lg, and xl
         * @return {?}
         */

      }, {
        key: "findWithPredicate",

        /**
         * Memoized lookup using custom predicate function
         * @private
         * @param {?} key
         * @param {?} searchFn
         * @return {?}
         */
        value: function findWithPredicate(key, searchFn) {
          /** @type {?} */
          var response = this.findByMap.get(key);

          if (!response) {
            response = this.items.find(searchFn) || null;
            this.findByMap.set(key, response);
          }

          return response || null;
        }
      }, {
        key: "overlappings",
        get: function get() {
          return this.items.filter(
          /**
          * @param {?} it
          * @return {?}
          */
          function (it) {
            return it.overlapping == true;
          });
        }
        /**
         * Get list of all registered (non-empty) breakpoint aliases
         * @return {?}
         */

      }, {
        key: "aliases",
        get: function get() {
          return this.items.map(
          /**
          * @param {?} it
          * @return {?}
          */
          function (it) {
            return it.alias;
          });
        }
        /**
         * Aliases are mapped to properties using suffixes
         * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
         * for property layoutGtSM.
         * @return {?}
         */

      }, {
        key: "suffixes",
        get: function get() {
          return this.items.map(
          /**
          * @param {?} it
          * @return {?}
          */
          function (it) {
            return !!it.suffix ? it.suffix : '';
          });
        }
      }]);

      return BreakPointRegistry;
    }();

    BreakPointRegistry.ɵfac = function BreakPointRegistry_Factory(t) {
      return new (t || BreakPointRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BREAKPOINTS));
    };
    /** @nocollapse */


    BreakPointRegistry.ctorParameters = function () {
      return [{
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [BREAKPOINTS]
        }]
      }];
    };
    /** @nocollapse */


    BreakPointRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function BreakPointRegistry_Factory() {
        return new BreakPointRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BREAKPOINTS));
      },
      token: BreakPointRegistry,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakPointRegistry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [BREAKPOINTS]
          }]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: core/breakpoints/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: core/match-media/match-media.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * MediaMonitor configures listeners to mediaQuery changes and publishes an Observable facade to
     * convert mediaQuery change callbacks to subscriber notifications. These notifications will be
     * performed within the ng Zone to trigger change detections and component updates.
     *
     * NOTE: both mediaQuery activations and de-activations are announced in notifications
     */


    var MatchMedia = /*#__PURE__*/function () {
      /**
       * @param {?} _zone
       * @param {?} _platformId
       * @param {?} _document
       */
      function MatchMedia(_zone, _platformId, _document) {
        _classCallCheck(this, MatchMedia);

        this._zone = _zone;
        this._platformId = _platformId;
        this._document = _document;
        /**
         * Initialize source with 'all' so all non-responsive APIs trigger style updates
         */

        this.source = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new MediaChange(true));
        this.registry = new Map();
        this.pendingRemoveListenerFns = [];
        this._observable$ = this.source.asObservable();
      }
      /**
       * Publish list of all current activations
       * @return {?}
       */


      _createClass(MatchMedia, [{
        key: "isActive",

        /**
         * For the specified mediaQuery?
         * @param {?} mediaQuery
         * @return {?}
         */
        value: function isActive(mediaQuery) {
          /** @type {?} */
          var mql = this.registry.get(mediaQuery);
          return !!mql ? mql.matches : this.registerQuery(mediaQuery).some(
          /**
          * @param {?} m
          * @return {?}
          */
          function (m) {
            return m.matches;
          });
        }
        /**
         * External observers can watch for all (or a specific) mql changes.
         * Typically used by the MediaQueryAdaptor; optionally available to components
         * who wish to use the MediaMonitor as mediaMonitor$ observable service.
         *
         * Use deferred registration process to register breakpoints only on subscription
         * This logic also enforces logic to register all mediaQueries BEFORE notify
         * subscribers of notifications.
         * @param {?=} mqList
         * @param {?=} filterOthers
         * @return {?}
         */

      }, {
        key: "observe",
        value: function observe(mqList) {
          var _this3 = this;

          var filterOthers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (mqList && mqList.length) {
            /** @type {?} */
            var matchMedia$ = this._observable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
            /**
            * @param {?} change
            * @return {?}
            */
            function (change) {
              return !filterOthers ? true : mqList.indexOf(change.mediaQuery) > -1;
            }));
            /** @type {?} */


            var registration$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
            /**
            * @param {?} observer
            * @return {?}
            */
            function (observer) {
              // tslint:disable-line:max-line-length

              /** @type {?} */
              var matches = _this3.registerQuery(mqList);

              if (matches.length) {
                /** @type {?} */
                var lastChange =
                /** @type {?} */
                matches.pop();
                matches.forEach(
                /**
                * @param {?} e
                * @return {?}
                */
                function (e) {
                  observer.next(e);
                });

                _this3.source.next(lastChange); // last match is cached

              }

              observer.complete();
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(registration$, matchMedia$);
          }

          return this._observable$;
        }
        /**
         * Based on the BreakPointRegistry provider, register internal listeners for each unique
         * mediaQuery. Each listener emits specific MediaChange data to observers
         * @param {?} mediaQuery
         * @return {?}
         */

      }, {
        key: "registerQuery",
        value: function registerQuery(mediaQuery) {
          var _this4 = this;

          /** @type {?} */
          var list = Array.isArray(mediaQuery) ? mediaQuery : [mediaQuery];
          /** @type {?} */

          var matches = [];
          buildQueryCss(list, this._document);
          list.forEach(
          /**
          * @param {?} query
          * @return {?}
          */
          function (query) {
            /** @type {?} */
            var onMQLEvent =
            /**
            * @param {?} e
            * @return {?}
            */
            function onMQLEvent(e) {
              _this4._zone.run(
              /**
              * @return {?}
              */
              function () {
                return _this4.source.next(new MediaChange(e.matches, query));
              });
            };
            /** @type {?} */


            var mql = _this4.registry.get(query);

            if (!mql) {
              mql = _this4.buildMQL(query);
              mql.addListener(onMQLEvent);

              _this4.pendingRemoveListenerFns.push(
              /**
              * @return {?}
              */
              function () {
                return (
                  /** @type {?} */
                  mql.removeListener(onMQLEvent)
                );
              });

              _this4.registry.set(query, mql);
            }

            if (mql.matches) {
              matches.push(new MediaChange(true, query));
            }
          });
          return matches;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var fn;

          while (fn = this.pendingRemoveListenerFns.pop()) {
            fn();
          }
        }
        /**
         * Call window.matchMedia() to build a MediaQueryList; which
         * supports 0..n listeners for activation/deactivation
         * @protected
         * @param {?} query
         * @return {?}
         */

      }, {
        key: "buildMQL",
        value: function buildMQL(query) {
          return constructMql(query, Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId));
        }
      }, {
        key: "activations",
        get: function get() {
          /** @type {?} */
          var results = [];
          this.registry.forEach(
          /**
          * @param {?} mql
          * @param {?} key
          * @return {?}
          */
          function (mql, key) {
            if (mql.matches) {
              results.push(key);
            }
          });
          return results;
        }
      }]);

      return MatchMedia;
    }();

    MatchMedia.ɵfac = function MatchMedia_Factory(t) {
      return new (t || MatchMedia)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };
    /** @nocollapse */


    MatchMedia.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    MatchMedia.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function MatchMedia_Factory() {
        return new MatchMedia(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      },
      token: MatchMedia,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchMedia, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();
    /**
     * Private global registry for all dynamically-created, injected style tags
     * @see prepare(query)
     * @type {?}
     */


    var ALL_STYLES = {};
    /**
     * For Webkit engines that only trigger the MediaQueryList Listener
     * when there is at least one CSS selector for the respective media query.
     *
     * @param {?} mediaQueries
     * @param {?} _document
     * @return {?}
     */

    function buildQueryCss(mediaQueries, _document) {
      /** @type {?} */
      var list = mediaQueries.filter(
      /**
      * @param {?} it
      * @return {?}
      */
      function (it) {
        return !ALL_STYLES[it];
      });

      if (list.length > 0) {
        /** @type {?} */
        var query = list.join(', ');

        try {
          /** @type {?} */
          var styleEl = _document.createElement('style');

          styleEl.setAttribute('type', 'text/css');

          if (!
          /** @type {?} */
          styleEl.styleSheet) {
            /** @type {?} */
            var cssText = "\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ".concat(query, " {.fx-query-test{ }}\n");
            styleEl.appendChild(_document.createTextNode(cssText));
          }

          /** @type {?} */
          _document.head.appendChild(styleEl); // Store in private global registry


          list.forEach(
          /**
          * @param {?} mq
          * @return {?}
          */
          function (mq) {
            return ALL_STYLES[mq] = styleEl;
          });
        } catch (e) {
          console.error(e);
        }
      }
    }
    /**
     * @param {?} query
     * @param {?} isBrowser
     * @return {?}
     */


    function constructMql(query, isBrowser) {
      /** @type {?} */
      var canListen = isBrowser && !!
      /** @type {?} */
      window.matchMedia('all').addListener;
      return canListen ?
      /** @type {?} */
      window.matchMedia(query) :
      /** @type {?} */
      {
        matches: query === 'all' || query === '',
        media: query,
        addListener:
        /**
        * @return {?}
        */
        function addListener() {},
        removeListener:
        /**
        * @return {?}
        */
        function removeListener() {},
        onchange: null,

        /**
         * @return {?}
         */
        addEventListener: function addEventListener() {},

        /**
         * @return {?}
         */
        removeEventListener: function removeEventListener() {},

        /**
         * @return {?}
         */
        dispatchEvent: function dispatchEvent() {
          return false;
        }
      };
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: core/match-media/mock/mock-match-media.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * MockMatchMedia mocks calls to the Window API matchMedia with a build of a simulated
     * MockMediaQueryListener. Methods are available to simulate an activation of a mediaQuery
     * range and to clearAll mediaQuery listeners.
     */


    var MockMatchMedia = /*#__PURE__*/function (_MatchMedia) {
      _inherits(MockMatchMedia, _MatchMedia);

      var _super = _createSuper(MockMatchMedia);

      // Allow fallback to overlapping mediaQueries

      /**
       * @param {?} _zone
       * @param {?} _platformId
       * @param {?} _document
       * @param {?} _breakpoints
       */
      function MockMatchMedia(_zone, _platformId, _document, _breakpoints) {
        var _this5;

        _classCallCheck(this, MockMatchMedia);

        _this5 = _super.call(this, _zone, _platformId, _document);
        _this5._breakpoints = _breakpoints;
        _this5.autoRegisterQueries = true; // Used for testing BreakPoint registrations
        // Used for testing BreakPoint registrations

        _this5.useOverlaps = false; // Allow fallback to overlapping mediaQueries

        return _this5;
      }
      /**
       * Easy method to clear all listeners for all mediaQueries
       * @return {?}
       */


      _createClass(MockMatchMedia, [{
        key: "clearAll",
        value: function clearAll() {
          this.registry.forEach(
          /**
          * @param {?} mql
          * @return {?}
          */
          function (mql) {
            /** @type {?} */
            mql.destroy();
          });
          this.registry.clear();
          this.useOverlaps = false;
        }
        /**
         * Feature to support manual, simulated activation of a mediaQuery.
         * @param {?} mediaQuery
         * @param {?=} useOverlaps
         * @return {?}
         */

      }, {
        key: "activate",
        value: function activate(mediaQuery) {
          var useOverlaps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          useOverlaps = useOverlaps || this.useOverlaps;
          mediaQuery = this._validateQuery(mediaQuery);

          if (useOverlaps || !this.isActive(mediaQuery)) {
            this._deactivateAll();

            this._registerMediaQuery(mediaQuery);

            this._activateWithOverlaps(mediaQuery, useOverlaps);
          }

          return this.hasActivated;
        }
        /**
         * Converts an optional mediaQuery alias to a specific, valid mediaQuery
         * @param {?} queryOrAlias
         * @return {?}
         */

      }, {
        key: "_validateQuery",
        value: function _validateQuery(queryOrAlias) {
          /** @type {?} */
          var bp = this._breakpoints.findByAlias(queryOrAlias);

          return bp && bp.mediaQuery || queryOrAlias;
        }
        /**
         * Manually onMediaChange any overlapping mediaQueries to simulate
         * similar functionality in the window.matchMedia()
         * @private
         * @param {?} mediaQuery
         * @param {?} useOverlaps
         * @return {?}
         */

      }, {
        key: "_activateWithOverlaps",
        value: function _activateWithOverlaps(mediaQuery, useOverlaps) {
          if (useOverlaps) {
            /** @type {?} */
            var bp = this._breakpoints.findByQuery(mediaQuery);
            /** @type {?} */


            var alias = bp ? bp.alias : 'unknown'; // Simulate activation of overlapping lt-<XXX> ranges

            switch (alias) {
              case 'lg':
                this._activateByAlias('lt-xl');

                break;

              case 'md':
                this._activateByAlias('lt-xl, lt-lg');

                break;

              case 'sm':
                this._activateByAlias('lt-xl, lt-lg, lt-md');

                break;

              case 'xs':
                this._activateByAlias('lt-xl, lt-lg, lt-md, lt-sm');

                break;
            } // Simulate activation of overlapping gt-<xxxx> mediaQuery ranges


            switch (alias) {
              case 'xl':
                this._activateByAlias('gt-lg, gt-md, gt-sm, gt-xs');

                break;

              case 'lg':
                this._activateByAlias('gt-md, gt-sm, gt-xs');

                break;

              case 'md':
                this._activateByAlias('gt-sm, gt-xs');

                break;

              case 'sm':
                this._activateByAlias('gt-xs');

                break;
            }
          } // Activate last since the responsiveActivation is watching *this* mediaQuery


          return this._activateByQuery(mediaQuery);
        }
        /**
         *
         * @private
         * @param {?} aliases
         * @return {?}
         */

      }, {
        key: "_activateByAlias",
        value: function _activateByAlias(aliases) {
          var _this6 = this;

          /** @type {?} */
          var activate =
          /**
          * @param {?} alias
          * @return {?}
          */
          function activate(alias) {
            /** @type {?} */
            var bp = _this6._breakpoints.findByAlias(alias);

            _this6._activateByQuery(bp ? bp.mediaQuery : alias);
          };

          aliases.split(',').forEach(
          /**
          * @param {?} alias
          * @return {?}
          */
          function (alias) {
            return activate(alias.trim());
          });
        }
        /**
         *
         * @private
         * @param {?} mediaQuery
         * @return {?}
         */

      }, {
        key: "_activateByQuery",
        value: function _activateByQuery(mediaQuery) {
          /** @type {?} */
          var mql =
          /** @type {?} */
          this.registry.get(mediaQuery);

          if (mql && !this.isActive(mediaQuery)) {
            this.registry.set(mediaQuery, mql.activate());
          }

          return this.hasActivated;
        }
        /**
         * Deactivate all current MQLs and reset the buffer
         * @private
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */

      }, {
        key: "_deactivateAll",
        value: function _deactivateAll() {
          /** @type {?} */
          this.registry.forEach(
          /**
          * @param {?} it
          * @return {?}
          */
          function (it) {
            /** @type {?} */
            it.deactivate();
          });
          return (
            /** @type {?} */
            this
          );
        }
        /**
         * Insure the mediaQuery is registered with MatchMedia
         * @private
         * @param {?} mediaQuery
         * @return {?}
         */

      }, {
        key: "_registerMediaQuery",
        value: function _registerMediaQuery(mediaQuery) {
          if (!this.registry.has(mediaQuery) && this.autoRegisterQueries) {
            this.registerQuery(mediaQuery);
          }
        }
        /**
         * Call window.matchMedia() to build a MediaQueryList; which
         * supports 0..n listeners for activation/deactivation
         * @protected
         * @param {?} query
         * @return {?}
         */

      }, {
        key: "buildMQL",
        value: function buildMQL(query) {
          return new MockMediaQueryList(query);
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "hasActivated",
        get: function get() {
          return this.activations.length > 0;
        }
      }]);

      return MockMatchMedia;
    }(MatchMedia);

    MockMatchMedia.ɵfac = function MockMatchMedia_Factory(t) {
      return new (t || MockMatchMedia)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry));
    };

    MockMatchMedia.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MockMatchMedia,
      factory: MockMatchMedia.ɵfac
    });
    /** @nocollapse */

    MockMatchMedia.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: BreakPointRegistry
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MockMatchMedia, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: BreakPointRegistry
        }];
      }, null);
    })();
    /**
     * Special internal class to simulate a MediaQueryList and
     * - supports manual activation to simulate mediaQuery matching
     * - manages listeners
     */


    var MockMediaQueryList = /*#__PURE__*/function () {
      /**
       * @param {?} _mediaQuery
       */
      function MockMediaQueryList(_mediaQuery) {
        _classCallCheck(this, MockMediaQueryList);

        this._mediaQuery = _mediaQuery;
        this._isActive = false;
        this._listeners = [];
        this.onchange = null;
      }
      /**
       * @return {?}
       */


      _createClass(MockMediaQueryList, [{
        key: "destroy",

        /**
         * Destroy the current list by deactivating the
         * listeners and clearing the internal list
         * @return {?}
         */
        value: function destroy() {
          this.deactivate();
          this._listeners = [];
        }
        /**
         * Notify all listeners that 'matches === TRUE'
         * @return {?}
         */

      }, {
        key: "activate",
        value: function activate() {
          var _this7 = this;

          if (!this._isActive) {
            this._isActive = true;

            this._listeners.forEach(
            /**
            * @param {?} callback
            * @return {?}
            */
            function (callback) {
              /** @type {?} */
              var cb =
              /** @type {?} */
              callback;
              cb.call(_this7,
              /** @type {?} */
              {
                matches: _this7.matches,
                media: _this7.media
              });
            });
          }

          return this;
        }
        /**
         * Notify all listeners that 'matches === false'
         * @return {?}
         */

      }, {
        key: "deactivate",
        value: function deactivate() {
          var _this8 = this;

          if (this._isActive) {
            this._isActive = false;

            this._listeners.forEach(
            /**
            * @param {?} callback
            * @return {?}
            */
            function (callback) {
              /** @type {?} */
              var cb =
              /** @type {?} */
              callback;
              cb.call(_this8,
              /** @type {?} */
              {
                matches: _this8.matches,
                media: _this8.media
              });
            });
          }

          return this;
        }
        /**
         * Add a listener to our internal list to activate later
         * @param {?} listener
         * @return {?}
         */

      }, {
        key: "addListener",
        value: function addListener(listener) {
          if (this._listeners.indexOf(listener) === -1) {
            this._listeners.push(listener);
          }

          if (this._isActive) {
            /** @type {?} */
            var cb =
            /** @type {?} */
            listener;
            cb.call(this,
            /** @type {?} */
            {
              matches: this.matches,
              media: this.media
            });
          }
        }
        /**
         * Don't need to remove listeners in the testing environment
         * @param {?} _
         * @return {?}
         */

      }, {
        key: "removeListener",
        value: function removeListener(_) {}
        /**
         * @param {?} _
         * @param {?} __
         * @param {?=} ___
         * @return {?}
         */

      }, {
        key: "addEventListener",
        value: function addEventListener(_, __, ___) {}
        /**
         * @param {?} _
         * @param {?} __
         * @param {?=} ___
         * @return {?}
         */

      }, {
        key: "removeEventListener",
        value: function removeEventListener(_, __, ___) {}
        /**
         * @param {?} _
         * @return {?}
         */

      }, {
        key: "dispatchEvent",
        value: function dispatchEvent(_) {
          return false;
        }
      }, {
        key: "matches",
        get: function get() {
          return this._isActive;
        }
        /**
         * @return {?}
         */

      }, {
        key: "media",
        get: function get() {
          return this._mediaQuery;
        }
      }]);

      return MockMediaQueryList;
    }();
    /**
     * Pre-configured provider for MockMatchMedia
     * @type {?}
     */


    var MockMatchMediaProvider = {
      // tslint:disable-line:variable-name
      provide: MatchMedia,
      useClass: MockMatchMedia
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: core/match-media/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: core/media-marshaller/print-hook.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var PRINT = 'print';
    /** @type {?} */

    var BREAKPOINT_PRINT = {
      alias: PRINT,
      mediaQuery: PRINT,
      priority: 1000
    };
    /**
     * PrintHook - Use to intercept print MediaQuery activations and force
     *             layouts to render with the specified print alias/breakpoint
     *
     * Used in MediaMarshaller and MediaObserver
     */

    var PrintHook = /*#__PURE__*/function () {
      /**
       * @param {?} breakpoints
       * @param {?} layoutConfig
       * @param {?} _document
       */
      function PrintHook(breakpoints, layoutConfig, _document) {
        _classCallCheck(this, PrintHook);

        this.breakpoints = breakpoints;
        this.layoutConfig = layoutConfig;
        this._document = _document; // registeredBeforeAfterPrintHooks tracks if we registered the `beforeprint`
        //  and `afterprint` event listeners.

        this.registeredBeforeAfterPrintHooks = false; // isPrintingBeforeAfterEvent is used to track if we are printing from within
        // a `beforeprint` event handler. This prevents the typicall `stopPrinting`
        // form `interceptEvents` so that printing is not stopped while the dialog
        // is still open. This is an extension of the `isPrinting` property on
        // browsers which support `beforeprint` and `afterprint` events.

        this.isPrintingBeforeAfterEvent = false;
        this.beforePrintEventListeners = [];
        this.afterPrintEventListeners = [];
        /**
         * Is this service currently in Print-mode ?
         */

        this.isPrinting = false;
        this.queue = new PrintQueue();
        this.deactivations = [];
      }
      /**
       * Add 'print' mediaQuery: to listen for matchMedia activations
       * @param {?} queries
       * @return {?}
       */


      _createClass(PrintHook, [{
        key: "withPrintQuery",
        value: function withPrintQuery(queries) {
          return [].concat(_toConsumableArray(queries), [PRINT]);
        }
        /**
         * Is the MediaChange event for any 'print' \@media
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "isPrintEvent",
        value: function isPrintEvent(e) {
          return e.mediaQuery.startsWith(PRINT);
        }
        /**
         * What is the desired mqAlias to use while printing?
         * @return {?}
         */

      }, {
        key: "getEventBreakpoints",

        /**
         * Lookup breakpoint associated with mediaQuery
         * @param {?} __0
         * @return {?}
         */
        value: function getEventBreakpoints(_ref) {
          var mediaQuery = _ref.mediaQuery;

          /** @type {?} */
          var bp = this.breakpoints.findByQuery(mediaQuery);
          /** @type {?} */

          var list = bp ? [].concat(_toConsumableArray(this.printBreakPoints), [bp]) : this.printBreakPoints;
          return list.sort(sortDescendingPriority);
        }
        /**
         * Update event with printAlias mediaQuery information
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "updateEvent",
        value: function updateEvent(event) {
          /** @type {?} */
          var bp = this.breakpoints.findByQuery(event.mediaQuery);

          if (this.isPrintEvent(event)) {
            // Reset from 'print' to first (highest priority) print breakpoint
            bp = this.getEventBreakpoints(event)[0];
            event.mediaQuery = bp ? bp.mediaQuery : '';
          }

          return mergeAlias(event, bp);
        } // registerBeforeAfterPrintHooks registers a `beforeprint` event hook so we can
        // trigger print styles synchronously and apply proper layout styles.
        // It is a noop if the hooks have already been registered or if the document's
        // `defaultView` is not available.

        /**
         * @private
         * @param {?} target
         * @return {?}
         */

      }, {
        key: "registerBeforeAfterPrintHooks",
        value: function registerBeforeAfterPrintHooks(target) {
          var _this9 = this;

          // `defaultView` may be null when rendering on the server or in other contexts.
          if (!this._document.defaultView || this.registeredBeforeAfterPrintHooks) {
            return;
          }

          this.registeredBeforeAfterPrintHooks = true;
          /** @type {?} */

          var beforePrintListener =
          /**
          * @return {?}
          */
          function beforePrintListener() {
            // If we aren't already printing, start printing and update the styles as
            // if there was a regular print `MediaChange`(from matchMedia).
            if (!_this9.isPrinting) {
              _this9.isPrintingBeforeAfterEvent = true;

              _this9.startPrinting(target, _this9.getEventBreakpoints(new MediaChange(true, PRINT)));

              target.updateStyles();
            }
          };
          /** @type {?} */


          var afterPrintListener =
          /**
          * @return {?}
          */
          function afterPrintListener() {
            // If we aren't already printing, start printing and update the styles as
            // if there was a regular print `MediaChange`(from matchMedia).
            _this9.isPrintingBeforeAfterEvent = false;

            if (_this9.isPrinting) {
              _this9.stopPrinting(target);

              target.updateStyles();
            }
          }; // Could we have teardown logic to remove if there are no print listeners being used?


          this._document.defaultView.addEventListener('beforeprint', beforePrintListener);

          this._document.defaultView.addEventListener('afterprint', afterPrintListener);

          this.beforePrintEventListeners.push(beforePrintListener);
          this.afterPrintEventListeners.push(afterPrintListener);
        }
        /**
         * Prepare RxJS filter operator with partial application
         * @param {?} target
         * @return {?} pipeable filter predicate
         */

      }, {
        key: "interceptEvents",
        value: function interceptEvents(target) {
          var _this10 = this;

          this.registerBeforeAfterPrintHooks(target);
          return (
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              if (_this10.isPrintEvent(event)) {
                if (event.matches && !_this10.isPrinting) {
                  _this10.startPrinting(target, _this10.getEventBreakpoints(event));

                  target.updateStyles();
                } else if (!event.matches && _this10.isPrinting && !_this10.isPrintingBeforeAfterEvent) {
                  _this10.stopPrinting(target);

                  target.updateStyles();
                }
              } else {
                _this10.collectActivations(event);
              }
            }
          );
        }
        /**
         * Stop mediaChange event propagation in event streams
         * @return {?}
         */

      }, {
        key: "blockPropagation",
        value: function blockPropagation() {
          var _this11 = this;

          return (
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              return !(_this11.isPrinting || _this11.isPrintEvent(event));
            }
          );
        }
        /**
         * Save current activateBreakpoints (for later restore)
         * and substitute only the printAlias breakpoint
         * @protected
         * @param {?} target
         * @param {?} bpList
         * @return {?}
         */

      }, {
        key: "startPrinting",
        value: function startPrinting(target, bpList) {
          this.isPrinting = true;
          target.activatedBreakpoints = this.queue.addPrintBreakpoints(bpList);
        }
        /**
         * For any print de-activations, reset the entire print queue
         * @protected
         * @param {?} target
         * @return {?}
         */

      }, {
        key: "stopPrinting",
        value: function stopPrinting(target) {
          target.activatedBreakpoints = this.deactivations;
          this.deactivations = [];
          this.queue.clear();
          this.isPrinting = false;
        }
        /**
         * To restore pre-Print Activations, we must capture the proper
         * list of breakpoint activations BEFORE print starts. OnBeforePrint()
         * is supported; so 'print' mediaQuery activations are used as a fallback
         * in browsers without `beforeprint` support.
         *
         * >  But activated breakpoints are deactivated BEFORE 'print' activation.
         *
         * Let's capture all de-activations using the following logic:
         *
         *  When not printing:
         *    - clear cache when activating non-print breakpoint
         *    - update cache (and sort) when deactivating
         *
         *  When printing:
         *    - sort and save when starting print
         *    - restore as activatedTargets and clear when stop printing
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "collectActivations",
        value: function collectActivations(event) {
          if (!this.isPrinting || this.isPrintingBeforeAfterEvent) {
            if (!event.matches) {
              /** @type {?} */
              var bp = this.breakpoints.findByQuery(event.mediaQuery);

              if (bp) {
                // Deactivating a breakpoint
                this.deactivations.push(bp);
                this.deactivations.sort(sortDescendingPriority);
              }
            } else if (!this.isPrintingBeforeAfterEvent) {
              // Only clear deactivations if we aren't printing from a `beforeprint` event.
              // Otherwise this will clear before `stopPrinting()` is called to restore
              // the pre-Print Activations.
              this.deactivations = [];
            }
          }
        }
        /**
         * Teardown logic for the service.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this12 = this;

          this.beforePrintEventListeners.forEach(
          /**
          * @param {?} l
          * @return {?}
          */
          function (l) {
            return _this12._document.defaultView.removeEventListener('beforeprint', l);
          });
          this.afterPrintEventListeners.forEach(
          /**
          * @param {?} l
          * @return {?}
          */
          function (l) {
            return _this12._document.defaultView.removeEventListener('afterprint', l);
          });
        }
      }, {
        key: "printAlias",
        get: function get() {
          return this.layoutConfig.printWithBreakpoints || [];
        }
        /**
         * Lookup breakpoints associated with print aliases.
         * @return {?}
         */

      }, {
        key: "printBreakPoints",
        get: function get() {
          var _this13 = this;

          return (
            /** @type {?} */
            this.printAlias.map(
            /**
            * @param {?} alias
            * @return {?}
            */
            function (alias) {
              return _this13.breakpoints.findByAlias(alias);
            }).filter(
            /**
            * @param {?} bp
            * @return {?}
            */
            function (bp) {
              return bp !== null;
            })
          );
        }
      }]);

      return PrintHook;
    }();

    PrintHook.ɵfac = function PrintHook_Factory(t) {
      return new (t || PrintHook)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };
    /** @nocollapse */


    PrintHook.ctorParameters = function () {
      return [{
        type: BreakPointRegistry
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [LAYOUT_CONFIG]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    PrintHook.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function PrintHook_Factory() {
        return new PrintHook(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LAYOUT_CONFIG), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      },
      token: PrintHook,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintHook, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: BreakPointRegistry
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [LAYOUT_CONFIG]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, null);
    })(); // ************************************************************************
    // Internal Utility class 'PrintQueue'
    // ************************************************************************

    /**
     * Utility class to manage print breakpoints + activatedBreakpoints
     * with correct sorting WHILE printing
     */


    var PrintQueue = /*#__PURE__*/function () {
      function PrintQueue() {
        _classCallCheck(this, PrintQueue);

        /**
         * Sorted queue with prioritized print breakpoints
         */
        this.printBreakpoints = [];
      }
      /**
       * @param {?} bpList
       * @return {?}
       */


      _createClass(PrintQueue, [{
        key: "addPrintBreakpoints",
        value: function addPrintBreakpoints(bpList) {
          var _this14 = this;

          bpList.push(BREAKPOINT_PRINT);
          bpList.sort(sortDescendingPriority);
          bpList.forEach(
          /**
          * @param {?} bp
          * @return {?}
          */
          function (bp) {
            return _this14.addBreakpoint(bp);
          });
          return this.printBreakpoints;
        }
        /**
         * Add Print breakpoint to queue
         * @param {?} bp
         * @return {?}
         */

      }, {
        key: "addBreakpoint",
        value: function addBreakpoint(bp) {
          if (!!bp) {
            /** @type {?} */
            var bpInList = this.printBreakpoints.find(
            /**
            * @param {?} it
            * @return {?}
            */
            function (it) {
              return it.mediaQuery === bp.mediaQuery;
            });

            if (bpInList === undefined) {
              // If this is a `printAlias` breakpoint, then append. If a true 'print' breakpoint,
              // register as highest priority in the queue
              this.printBreakpoints = isPrintBreakPoint(bp) ? [bp].concat(_toConsumableArray(this.printBreakpoints)) : [].concat(_toConsumableArray(this.printBreakpoints), [bp]);
            }
          }
        }
        /**
         * Restore original activated breakpoints and clear internal caches
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear() {
          this.printBreakpoints = [];
        }
      }]);

      return PrintQueue;
    }(); // ************************************************************************
    // Internal Utility methods
    // ************************************************************************

    /**
     * Only support intercept queueing if the Breakpoint is a print \@media query
     * @param {?} bp
     * @return {?}
     */


    function isPrintBreakPoint(bp) {
      return bp ? bp.mediaQuery.startsWith(PRINT) : false;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: core/utils/array.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Wraps the provided value in an array, unless the provided value is an array.
     * @template T
     * @param {?} value
     * @return {?}
     */


    function coerceArray(value) {
      return Array.isArray(value) ? value : [value];
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: core/media-observer/media-observer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * MediaObserver enables applications to listen for 1..n mediaQuery activations and to determine
     * if a mediaQuery is currently activated.
     *
     * Since a breakpoint change will first deactivate 1...n mediaQueries and then possibly activate
     * 1..n mediaQueries, the MediaObserver will debounce notifications and report ALL *activations*
     * in 1 event notification. The reported activations will be sorted in descending priority order.
     *
     * This class uses the BreakPoint Registry to inject alias information into the raw MediaChange
     * notification. For custom mediaQuery notifications, alias information will not be injected and
     * those fields will be ''.
     *
     * Note: Developers should note that only mediaChange activations (not de-activations)
     *       are announced by the MediaObserver.
     *
     * \@usage
     *
     *  // RxJS
     *  import { filter } from 'rxjs/operators';
     *  import { MediaObserver } from '\@angular/flex-layout';
     *
     * \@Component({ ... })
     *  export class AppComponent {
     *    status: string = '';
     *
     *    constructor(mediaObserver: MediaObserver) {
     *      const media$ = mediaObserver.asObservable().pipe(
     *        filter((changes: MediaChange[]) => true)   // silly noop filter
     *      );
     *
     *      media$.subscribe((changes: MediaChange[]) => {
     *        let status = '';
     *        changes.forEach( change => {
     *          status += `'${change.mqAlias}' = (${change.mediaQuery}) <br/>` ;
     *        });
     *        this.status = status;
     *     });
     *
     *    }
     *  }
     */


    var MediaObserver = /*#__PURE__*/function () {
      /**
       * @param {?} breakpoints
       * @param {?} matchMedia
       * @param {?} hook
       */
      function MediaObserver(breakpoints, matchMedia, hook) {
        _classCallCheck(this, MediaObserver);

        this.breakpoints = breakpoints;
        this.matchMedia = matchMedia;
        this.hook = hook;
        /**
         * Filter MediaChange notifications for overlapping breakpoints
         */

        this.filterOverlaps = false;
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._media$ = this.watchActivations();
        this.media$ = this._media$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
        /**
        * @param {?} changes
        * @return {?}
        */
        function (changes) {
          return changes.length > 0;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
        /**
        * @param {?} changes
        * @return {?}
        */
        function (changes) {
          return changes[0];
        }));
      }
      /**
       * Completes the active subject, signalling to all complete for all
       * MediaObserver subscribers
       * @return {?}
       */


      _createClass(MediaObserver, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyed$.next();
          this.destroyed$.complete();
        } // ************************************************
        // Public Methods
        // ************************************************

        /**
         * Observe changes to current activation 'list'
         * @return {?}
         */

      }, {
        key: "asObservable",
        value: function asObservable() {
          return this._media$;
        }
        /**
         * Allow programmatic query to determine if one or more media query/alias match
         * the current viewport size.
         * @param {?} value One or more media queries (or aliases) to check.
         * @return {?} Whether any of the media queries match.
         */

      }, {
        key: "isActive",
        value: function isActive(value) {
          var _this15 = this;

          /** @type {?} */
          var aliases = splitQueries(coerceArray(value));
          return aliases.some(
          /**
          * @param {?} alias
          * @return {?}
          */
          function (alias) {
            /** @type {?} */
            var query = toMediaQuery(alias, _this15.breakpoints);
            return query !== null && _this15.matchMedia.isActive(query);
          });
        } // ************************************************
        // Internal Methods
        // ************************************************

        /**
         * Register all the mediaQueries registered in the BreakPointRegistry
         * This is needed so subscribers can be auto-notified of all standard, registered
         * mediaQuery activations
         * @private
         * @return {?}
         */

      }, {
        key: "watchActivations",
        value: function watchActivations() {
          /** @type {?} */
          var queries = this.breakpoints.items.map(
          /**
          * @param {?} bp
          * @return {?}
          */
          function (bp) {
            return bp.mediaQuery;
          });
          return this.buildObservable(queries);
        }
        /**
         * Only pass/announce activations (not de-activations)
         *
         * Since multiple-mediaQueries can be activation in a cycle,
         * gather all current activations into a single list of changes to observers
         *
         * Inject associated (if any) alias information into the MediaChange event
         * - Exclude mediaQuery activations for overlapping mQs. List bounded mQ ranges only
         * - Exclude print activations that do not have an associated mediaQuery
         *
         * NOTE: the raw MediaChange events [from MatchMedia] do not
         *       contain important alias information; as such this info
         *       must be injected into the MediaChange
         * @private
         * @param {?} mqList
         * @return {?}
         */

      }, {
        key: "buildObservable",
        value: function buildObservable(mqList) {
          var _this16 = this;

          /** @type {?} */
          var hasChanges =
          /**
          * @param {?} changes
          * @return {?}
          */
          function hasChanges(changes) {
            /** @type {?} */
            var isValidQuery =
            /**
            * @param {?} change
            * @return {?}
            */
            function isValidQuery(change) {
              return change.mediaQuery.length > 0;
            };

            return changes.filter(isValidQuery).length > 0;
          };
          /** @type {?} */


          var excludeOverlaps =
          /**
          * @param {?} changes
          * @return {?}
          */
          function excludeOverlaps(changes) {
            return !_this16.filterOverlaps ? changes : changes.filter(
            /**
            * @param {?} change
            * @return {?}
            */
            function (change) {
              /** @type {?} */
              var bp = _this16.breakpoints.findByQuery(change.mediaQuery);

              return !bp ? true : !bp.overlapping;
            });
          };
          /**
           */


          return this.matchMedia.observe(this.hook.withPrintQuery(mqList)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
          /**
          * @param {?} change
          * @return {?}
          */
          function (change) {
            return change.matches;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0, rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(
          /**
          * @param {?} _
          * @return {?}
          */
          function (_) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_this16.findAllActivations());
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(excludeOverlaps), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(hasChanges), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroyed$));
        }
        /**
         * Find all current activations and prepare single list of activations
         * sorted by descending priority.
         * @private
         * @return {?}
         */

      }, {
        key: "findAllActivations",
        value: function findAllActivations() {
          var _this17 = this;

          /** @type {?} */
          var mergeMQAlias =
          /**
          * @param {?} change
          * @return {?}
          */
          function mergeMQAlias(change) {
            /** @type {?} */
            var bp = _this17.breakpoints.findByQuery(change.mediaQuery);

            return mergeAlias(change, bp);
          };
          /** @type {?} */


          var replaceWithPrintAlias =
          /**
          * @param {?} change
          * @return {?}
          */
          function replaceWithPrintAlias(change) {
            return _this17.hook.isPrintEvent(change) ? _this17.hook.updateEvent(change) : change;
          };

          return this.matchMedia.activations.map(
          /**
          * @param {?} query
          * @return {?}
          */
          function (query) {
            return new MediaChange(true, query);
          }).map(replaceWithPrintAlias).map(mergeMQAlias).sort(sortDescendingPriority);
        }
      }]);

      return MediaObserver;
    }();

    MediaObserver.ɵfac = function MediaObserver_Factory(t) {
      return new (t || MediaObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PrintHook));
    };
    /** @nocollapse */


    MediaObserver.ctorParameters = function () {
      return [{
        type: BreakPointRegistry
      }, {
        type: MatchMedia
      }, {
        type: PrintHook
      }];
    };
    /** @nocollapse */


    MediaObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function MediaObserver_Factory() {
        return new MediaObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MatchMedia), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PrintHook));
      },
      token: MediaObserver,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: BreakPointRegistry
        }, {
          type: MatchMedia
        }, {
          type: PrintHook
        }];
      }, null);
    })();
    /**
     * Find associated breakpoint (if any)
     * @param {?} query
     * @param {?} locator
     * @return {?}
     */


    function toMediaQuery(query, locator) {
      /** @type {?} */
      var bp = locator.findByAlias(query) || locator.findByQuery(query);
      return bp ? bp.mediaQuery : null;
    }
    /**
     * Split each query string into separate query strings if two queries are provided as comma
     * separated.
     * @param {?} queries
     * @return {?}
     */


    function splitQueries(queries) {
      return queries.map(
      /**
      * @param {?} query
      * @return {?}
      */
      function (query) {
        return query.split(',');
      }).reduce(
      /**
      * @param {?} a1
      * @param {?} a2
      * @return {?}
      */
      function (a1, a2) {
        return a1.concat(a2);
      }).map(
      /**
      * @param {?} query
      * @return {?}
      */
      function (query) {
        return query.trim();
      });
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: core/media-observer/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: core/media-trigger/media-trigger.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Class
     */


    var MediaTrigger = /*#__PURE__*/function () {
      /**
       * @param {?} breakpoints
       * @param {?} matchMedia
       * @param {?} layoutConfig
       * @param {?} _platformId
       * @param {?} _document
       */
      function MediaTrigger(breakpoints, matchMedia, layoutConfig, _platformId, _document) {
        _classCallCheck(this, MediaTrigger);

        this.breakpoints = breakpoints;
        this.matchMedia = matchMedia;
        this.layoutConfig = layoutConfig;
        this._platformId = _platformId;
        this._document = _document;
        this.hasCachedRegistryMatches = false;
        this.originalActivations = [];
        this.originalRegistry = new Map();
      }
      /**
       * Manually activate range of breakpoints
       * @param {?} list array of mediaQuery or alias strings
       * @return {?}
       */


      _createClass(MediaTrigger, [{
        key: "activate",
        value: function activate(list) {
          list = list.map(
          /**
          * @param {?} it
          * @return {?}
          */
          function (it) {
            return it.trim();
          }); // trim queries

          this.saveActivations();
          this.deactivateAll();
          this.setActivations(list);
          this.prepareAutoRestore();
        }
        /**
         * Restore original, 'real' breakpoints and emit events
         * to trigger stream notification
         * @return {?}
         */

      }, {
        key: "restore",
        value: function restore() {
          if (this.hasCachedRegistryMatches) {
            /** @type {?} */
            var extractQuery =
            /**
            * @param {?} change
            * @return {?}
            */
            function extractQuery(change) {
              return change.mediaQuery;
            };
            /** @type {?} */


            var list = this.originalActivations.map(extractQuery);

            try {
              this.deactivateAll();
              this.restoreRegistryMatches();
              this.setActivations(list);
            } finally {
              this.originalActivations = [];

              if (this.resizeSubscription) {
                this.resizeSubscription.unsubscribe();
              }
            }
          }
        } // ************************************************
        // Internal Methods
        // ************************************************

        /**
         * Whenever window resizes, immediately auto-restore original
         * activations (if we are simulating activations)
         * @private
         * @return {?}
         */

      }, {
        key: "prepareAutoRestore",
        value: function prepareAutoRestore() {
          /** @type {?} */
          var isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) && this._document;
          /** @type {?} */


          var enableAutoRestore = isBrowser && this.layoutConfig.mediaTriggerAutoRestore;

          if (enableAutoRestore) {
            /** @type {?} */
            var resize$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
            this.resizeSubscription = resize$.subscribe(this.restore.bind(this));
          }
        }
        /**
         * Notify all matchMedia subscribers of de-activations
         *
         * Note: we must force 'matches' updates for
         *       future matchMedia::activation lookups
         * @private
         * @return {?}
         */

      }, {
        key: "deactivateAll",
        value: function deactivateAll() {
          /** @type {?} */
          var list = this.currentActivations;
          this.forceRegistryMatches(list, false);
          this.simulateMediaChanges(list, false);
        }
        /**
         * Cache current activations as sorted, prioritized list of MediaChanges
         * @private
         * @return {?}
         */

      }, {
        key: "saveActivations",
        value: function saveActivations() {
          var _this18 = this;

          if (!this.hasCachedRegistryMatches) {
            /** @type {?} */
            var toMediaChange =
            /**
            * @param {?} query
            * @return {?}
            */
            function toMediaChange(query) {
              return new MediaChange(true, query);
            };
            /** @type {?} */


            var mergeMQAlias =
            /**
            * @param {?} change
            * @return {?}
            */
            function mergeMQAlias(change) {
              /** @type {?} */
              var bp = _this18.breakpoints.findByQuery(change.mediaQuery);

              return mergeAlias(change, bp);
            };

            this.originalActivations = this.currentActivations.map(toMediaChange).map(mergeMQAlias).sort(sortDescendingPriority);
            this.cacheRegistryMatches();
          }
        }
        /**
         * Force set manual activations for specified mediaQuery list
         * @private
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "setActivations",
        value: function setActivations(list) {
          if (!!this.originalRegistry) {
            this.forceRegistryMatches(list, true);
          }

          this.simulateMediaChanges(list);
        }
        /**
         * For specified mediaQuery list manually simulate activations or deactivations
         * @private
         * @param {?} queries
         * @param {?=} matches
         * @return {?}
         */

      }, {
        key: "simulateMediaChanges",
        value: function simulateMediaChanges(queries) {
          var _this19 = this;

          var matches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          /** @type {?} */
          var toMediaQuery =
          /**
          * @param {?} query
          * @return {?}
          */
          function toMediaQuery(query) {
            /** @type {?} */
            var locator = _this19.breakpoints;
            /** @type {?} */

            var bp = locator.findByAlias(query) || locator.findByQuery(query);
            return bp ? bp.mediaQuery : query;
          };
          /** @type {?} */


          var emitChangeEvent =
          /**
          * @param {?} query
          * @return {?}
          */
          function emitChangeEvent(query) {
            return _this19.emitChangeEvent(matches, query);
          };

          queries.map(toMediaQuery).forEach(emitChangeEvent);
        }
        /**
         * Replace current registry with simulated registry...
         * Note: this is required since MediaQueryList::matches is 'readOnly'
         * @private
         * @param {?} queries
         * @param {?} matches
         * @return {?}
         */

      }, {
        key: "forceRegistryMatches",
        value: function forceRegistryMatches(queries, matches) {
          /** @type {?} */
          var registry = new Map();
          queries.forEach(
          /**
          * @param {?} query
          * @return {?}
          */
          function (query) {
            registry.set(query,
            /** @type {?} */
            {
              matches: matches
            });
          });
          this.matchMedia.registry = registry;
        }
        /**
         * Save current MatchMedia::registry items.
         * @private
         * @return {?}
         */

      }, {
        key: "cacheRegistryMatches",
        value: function cacheRegistryMatches() {
          /** @type {?} */
          var target = this.originalRegistry;
          target.clear();
          this.matchMedia.registry.forEach(
          /**
          * @param {?} value
          * @param {?} key
          * @return {?}
          */
          function (value, key) {
            target.set(key, value);
          });
          this.hasCachedRegistryMatches = true;
        }
        /**
         * Restore original, 'true' registry
         * @private
         * @return {?}
         */

      }, {
        key: "restoreRegistryMatches",
        value: function restoreRegistryMatches() {
          /** @type {?} */
          var target = this.matchMedia.registry;
          target.clear();
          this.originalRegistry.forEach(
          /**
          * @param {?} value
          * @param {?} key
          * @return {?}
          */
          function (value, key) {
            target.set(key, value);
          });
          this.originalRegistry.clear();
          this.hasCachedRegistryMatches = false;
        }
        /**
         * Manually emit a MediaChange event via the MatchMedia to MediaMarshaller and MediaObserver
         * @private
         * @param {?} matches
         * @param {?} query
         * @return {?}
         */

      }, {
        key: "emitChangeEvent",
        value: function emitChangeEvent(matches, query) {
          this.matchMedia.source.next(new MediaChange(matches, query));
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "currentActivations",
        get: function get() {
          return this.matchMedia.activations;
        }
      }]);

      return MediaTrigger;
    }();

    MediaTrigger.ɵfac = function MediaTrigger_Factory(t) {
      return new (t || MediaTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LAYOUT_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };
    /** @nocollapse */


    MediaTrigger.ctorParameters = function () {
      return [{
        type: BreakPointRegistry
      }, {
        type: MatchMedia
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [LAYOUT_CONFIG]
        }]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    MediaTrigger.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function MediaTrigger_Factory() {
        return new MediaTrigger(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MatchMedia), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LAYOUT_CONFIG), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      },
      token: MediaTrigger,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaTrigger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: BreakPointRegistry
        }, {
          type: MatchMedia
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [LAYOUT_CONFIG]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: core/media-trigger/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: core/utils/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: utils/auto-prefixer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Applies CSS prefixes to appropriate style keys.
     *
     * Note: `-ms-`, `-moz` and `-webkit-box` are no longer supported. e.g.
     *    {
     *      display: -webkit-flex;     NEW - Safari 6.1+. iOS 7.1+, BB10
     *      display: flex;             NEW, Spec - Firefox, Chrome, Opera
     *      // display: -webkit-box;   OLD - iOS 6-, Safari 3.1-6, BB7
     *      // display: -ms-flexbox;   TWEENER - IE 10
     *      // display: -moz-flexbox;  OLD - Firefox
     *    }
     * @param {?} target
     * @return {?}
     */


    function applyCssPrefixes(target) {
      for (var key in target) {
        /** @type {?} */
        var value = target[key] || '';

        switch (key) {
          case 'display':
            if (value === 'flex') {
              target['display'] = ['-webkit-flex', 'flex'];
            } else if (value === 'inline-flex') {
              target['display'] = ['-webkit-inline-flex', 'inline-flex'];
            } else {
              target['display'] = value;
            }

            break;

          case 'align-items':
          case 'align-self':
          case 'align-content':
          case 'flex':
          case 'flex-basis':
          case 'flex-flow':
          case 'flex-grow':
          case 'flex-shrink':
          case 'flex-wrap':
          case 'justify-content':
            target['-webkit-' + key] = value;
            break;

          case 'flex-direction':
            value = value || 'row';
            target['-webkit-flex-direction'] = value;
            target['flex-direction'] = value;
            break;

          case 'order':
            target['order'] = target['-webkit-' + key] = isNaN(+value) ? '0' : value;
            break;
        }
      }

      return target;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: core/style-utils/style-utils.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var StyleUtils = /*#__PURE__*/function () {
      /**
       * @param {?} _serverStylesheet
       * @param {?} _serverModuleLoaded
       * @param {?} _platformId
       * @param {?} layoutConfig
       */
      function StyleUtils(_serverStylesheet, _serverModuleLoaded, _platformId, layoutConfig) {
        _classCallCheck(this, StyleUtils);

        this._serverStylesheet = _serverStylesheet;
        this._serverModuleLoaded = _serverModuleLoaded;
        this._platformId = _platformId;
        this.layoutConfig = layoutConfig;
      }
      /**
       * Applies styles given via string pair or object map to the directive element
       * @param {?} element
       * @param {?} style
       * @param {?=} value
       * @return {?}
       */


      _createClass(StyleUtils, [{
        key: "applyStyleToElement",
        value: function applyStyleToElement(element, style) {
          var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          /** @type {?} */
          var styles = {};

          if (typeof style === 'string') {
            styles[style] = value;
            style = styles;
          }

          styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);

          this._applyMultiValueStyleToElement(styles, element);
        }
        /**
         * Applies styles given via string pair or object map to the directive's element
         * @param {?} style
         * @param {?=} elements
         * @return {?}
         */

      }, {
        key: "applyStyleToElements",
        value: function applyStyleToElements(style) {
          var _this20 = this;

          var elements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

          /** @type {?} */
          var styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);
          elements.forEach(
          /**
          * @param {?} el
          * @return {?}
          */
          function (el) {
            _this20._applyMultiValueStyleToElement(styles, el);
          });
        }
        /**
         * Determine the DOM element's Flexbox flow (flex-direction)
         *
         * Check inline style first then check computed (stylesheet) style
         * @param {?} target
         * @return {?}
         */

      }, {
        key: "getFlowDirection",
        value: function getFlowDirection(target) {
          /** @type {?} */
          var query = 'flex-direction';
          /** @type {?} */

          var value = this.lookupStyle(target, query);
          /** @type {?} */

          var hasInlineValue = this.lookupInlineStyle(target, query) || Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this._platformId) && this._serverModuleLoaded ? value : '';
          return [value || 'row', hasInlineValue];
        }
        /**
         * @param {?} target
         * @return {?}
         */

      }, {
        key: "hasWrap",
        value: function hasWrap(target) {
          /** @type {?} */
          var query = 'flex-wrap';
          return this.lookupStyle(target, query) === 'wrap';
        }
        /**
         * Find the DOM element's raw attribute value (if any)
         * @param {?} element
         * @param {?} attribute
         * @return {?}
         */

      }, {
        key: "lookupAttributeValue",
        value: function lookupAttributeValue(element, attribute) {
          return element.getAttribute(attribute) || '';
        }
        /**
         * Find the DOM element's inline style value (if any)
         * @param {?} element
         * @param {?} styleName
         * @return {?}
         */

      }, {
        key: "lookupInlineStyle",
        value: function lookupInlineStyle(element, styleName) {
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) ? element.style.getPropertyValue(styleName) : this._getServerStyle(element, styleName);
        }
        /**
         * Determine the inline or inherited CSS style
         * NOTE: platform-server has no implementation for getComputedStyle
         * @param {?} element
         * @param {?} styleName
         * @param {?=} inlineOnly
         * @return {?}
         */

      }, {
        key: "lookupStyle",
        value: function lookupStyle(element, styleName) {
          var inlineOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          /** @type {?} */
          var value = '';

          if (element) {
            /** @type {?} */
            var immediateValue = value = this.lookupInlineStyle(element, styleName);

            if (!immediateValue) {
              if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId)) {
                if (!inlineOnly) {
                  value = getComputedStyle(element).getPropertyValue(styleName);
                }
              } else {
                if (this._serverModuleLoaded) {
                  value = this._serverStylesheet.getStyleForElement(element, styleName);
                }
              }
            }
          } // Note: 'inline' is the default of all elements, unless UA stylesheet overrides;
          //       in which case getComputedStyle() should determine a valid value.


          return value ? value.trim() : '';
        }
        /**
         * Applies the styles to the element. The styles object map may contain an array of values
         * Each value will be added as element style
         * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
         * @private
         * @param {?} styles
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_applyMultiValueStyleToElement",
        value: function _applyMultiValueStyleToElement(styles, element) {
          var _this21 = this;

          Object.keys(styles).sort().forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            /** @type {?} */
            var el = styles[key];
            /** @type {?} */

            var values = Array.isArray(el) ? el : [el];
            values.sort();

            var _iterator = _createForOfIteratorHelper(values),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var value = _step.value;
                value = value ? value + '' : '';

                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this21._platformId) || !_this21._serverModuleLoaded) {
                  Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this21._platformId) ? element.style.setProperty(key, value) : _this21._setServerStyle(element, key, value);
                } else {
                  _this21._serverStylesheet.addStyleToElement(element, key, value);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
        }
        /**
         * @private
         * @param {?} element
         * @param {?} styleName
         * @param {?=} styleValue
         * @return {?}
         */

      }, {
        key: "_setServerStyle",
        value: function _setServerStyle(element, styleName, styleValue) {
          styleName = styleName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
          /** @type {?} */

          var styleMap = this._readStyleAttribute(element);

          styleMap[styleName] = styleValue || '';

          this._writeStyleAttribute(element, styleMap);
        }
        /**
         * @private
         * @param {?} element
         * @param {?} styleName
         * @return {?}
         */

      }, {
        key: "_getServerStyle",
        value: function _getServerStyle(element, styleName) {
          /** @type {?} */
          var styleMap = this._readStyleAttribute(element);

          return styleMap[styleName] || '';
        }
        /**
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_readStyleAttribute",
        value: function _readStyleAttribute(element) {
          /** @type {?} */
          var styleMap = {};
          /** @type {?} */

          var styleAttribute = element.getAttribute('style');

          if (styleAttribute) {
            /** @type {?} */
            var styleList = styleAttribute.split(/;+/g);

            for (var i = 0; i < styleList.length; i++) {
              /** @type {?} */
              var style = styleList[i].trim();

              if (style.length > 0) {
                /** @type {?} */
                var colonIndex = style.indexOf(':');

                if (colonIndex === -1) {
                  throw new Error("Invalid CSS style: ".concat(style));
                }
                /** @type {?} */


                var name = style.substr(0, colonIndex).trim();
                styleMap[name] = style.substr(colonIndex + 1).trim();
              }
            }
          }

          return styleMap;
        }
        /**
         * @private
         * @param {?} element
         * @param {?} styleMap
         * @return {?}
         */

      }, {
        key: "_writeStyleAttribute",
        value: function _writeStyleAttribute(element, styleMap) {
          /** @type {?} */
          var styleAttrValue = '';

          for (var key in styleMap) {
            /** @type {?} */
            var newValue = styleMap[key];

            if (newValue) {
              styleAttrValue += key + ':' + styleMap[key] + ';';
            }
          }

          element.setAttribute('style', styleAttrValue);
        }
      }]);

      return StyleUtils;
    }();

    StyleUtils.ɵfac = function StyleUtils_Factory(t) {
      return new (t || StyleUtils)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](StylesheetMap), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SERVER_TOKEN), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LAYOUT_CONFIG));
    };
    /** @nocollapse */


    StyleUtils.ctorParameters = function () {
      return [{
        type: StylesheetMap
      }, {
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [SERVER_TOKEN]
        }]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [LAYOUT_CONFIG]
        }]
      }];
    };
    /** @nocollapse */


    StyleUtils.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function StyleUtils_Factory() {
        return new StyleUtils(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(StylesheetMap), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(SERVER_TOKEN), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(LAYOUT_CONFIG));
      },
      token: StyleUtils,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StyleUtils, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: StylesheetMap
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [SERVER_TOKEN]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [LAYOUT_CONFIG]
          }]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: core/style-builder/style-builder.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A class that encapsulates CSS style generation for common directives
     * @abstract
     */


    var StyleBuilder = /*#__PURE__*/function () {
      function StyleBuilder() {
        _classCallCheck(this, StyleBuilder);

        /**
         * Whether to cache the generated output styles
         */
        this.shouldCache = true;
      }
      /**
       * Run a side effect computation given the input string and the computed styles
       * from the build task and the host configuration object
       * NOTE: This should be a no-op unless an algorithm is provided in a subclass
       * @param {?} _input
       * @param {?} _styles
       * @param {?=} _parent
       * @return {?}
       */


      _createClass(StyleBuilder, [{
        key: "sideEffect",
        value: function sideEffect(_input, _styles, _parent) {}
      }]);

      return StyleBuilder;
    }();
    /**
     * @fileoverview added by tsickle
     * Generated from: core/basis-validator/basis-validator.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The flex API permits 3 or 1 parts of the value:
     *    - `flex-grow flex-shrink flex-basis`, or
     *    - `flex-basis`
     * @param {?} basis
     * @param {?=} grow
     * @param {?=} shrink
     * @return {?}
     */


    function validateBasis(basis) {
      var grow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1';
      var shrink = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '1';

      /** @type {?} */
      var parts = [grow, shrink, basis];
      /** @type {?} */

      var j = basis.indexOf('calc');

      if (j > 0) {
        parts[2] = _validateCalcValue(basis.substring(j).trim());
        /** @type {?} */

        var matches = basis.substr(0, j).trim().split(' ');

        if (matches.length == 2) {
          parts[0] = matches[0];
          parts[1] = matches[1];
        }
      } else if (j == 0) {
        parts[2] = _validateCalcValue(basis.trim());
      } else {
        /** @type {?} */
        var _matches = basis.split(' ');

        parts = _matches.length === 3 ? _matches : [grow, shrink, basis];
      }

      return parts;
    }
    /**
     * Calc expressions require whitespace before & after any expression operators
     * This is a simple, crude whitespace padding solution.
     *   - '3 3 calc(15em + 20px)'
     *   - calc(100% / 7 * 2)
     *   - 'calc(15em + 20px)'
     *   - 'calc(15em+20px)'
     *   - '37px'
     *   = '43%'
     * @param {?} calc
     * @return {?}
     */


    function _validateCalcValue(calc) {
      return calc.replace(/[\s]/g, '').replace(/[\/\*\+\-]/g, ' $& ');
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: core/media-marshaller/media-marshaller.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * MediaMarshaller - register responsive values from directives and
     *                   trigger them based on media query events
     */


    var MediaMarshaller = /*#__PURE__*/function () {
      /**
       * @param {?} matchMedia
       * @param {?} breakpoints
       * @param {?} hook
       */
      function MediaMarshaller(matchMedia, breakpoints, hook) {
        _classCallCheck(this, MediaMarshaller);

        this.matchMedia = matchMedia;
        this.breakpoints = breakpoints;
        this.hook = hook;
        this.activatedBreakpoints = [];
        this.elementMap = new Map();
        this.elementKeyMap = new WeakMap();
        this.watcherMap = new WeakMap(); // special triggers to update elements
        // special triggers to update elements

        this.updateMap = new WeakMap(); // callback functions to update styles
        // callback functions to update styles

        this.clearMap = new WeakMap(); // callback functions to clear styles
        // callback functions to clear styles

        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.observeActivations();
      }
      /**
       * @return {?}
       */


      _createClass(MediaMarshaller, [{
        key: "onMediaChange",

        /**
         * Update styles on breakpoint activates or deactivates
         * @param {?} mc
         * @return {?}
         */
        value: function onMediaChange(mc) {
          /** @type {?} */
          var bp = this.findByQuery(mc.mediaQuery);

          if (bp) {
            mc = mergeAlias(mc, bp);

            if (mc.matches && this.activatedBreakpoints.indexOf(bp) === -1) {
              this.activatedBreakpoints.push(bp);
              this.activatedBreakpoints.sort(sortDescendingPriority);
              this.updateStyles();
            } else if (!mc.matches && this.activatedBreakpoints.indexOf(bp) !== -1) {
              // Remove the breakpoint when it's deactivated
              this.activatedBreakpoints.splice(this.activatedBreakpoints.indexOf(bp), 1);
              this.activatedBreakpoints.sort(sortDescendingPriority);
              this.updateStyles();
            }
          }
        }
        /**
         * initialize the marshaller with necessary elements for delegation on an element
         * @param {?} element
         * @param {?} key
         * @param {?=} updateFn optional callback so that custom bp directives don't have to re-provide this
         * @param {?=} clearFn optional callback so that custom bp directives don't have to re-provide this
         * @param {?=} extraTriggers other triggers to force style updates (e.g. layout, directionality, etc)
         * @return {?}
         */

      }, {
        key: "init",
        value: function init(element, key, updateFn, clearFn) {
          var extraTriggers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
          initBuilderMap(this.updateMap, element, key, updateFn);
          initBuilderMap(this.clearMap, element, key, clearFn);
          this.buildElementKeyMap(element, key);
          this.watchExtraTriggers(element, key, extraTriggers);
        }
        /**
         * get the value for an element and key and optionally a given breakpoint
         * @param {?} element
         * @param {?} key
         * @param {?=} bp
         * @return {?}
         */

      }, {
        key: "getValue",
        value: function getValue(element, key, bp) {
          /** @type {?} */
          var bpMap = this.elementMap.get(element);

          if (bpMap) {
            /** @type {?} */
            var values = bp !== undefined ? bpMap.get(bp) : this.getActivatedValues(bpMap, key);

            if (values) {
              return values.get(key);
            }
          }

          return undefined;
        }
        /**
         * whether the element has values for a given key
         * @param {?} element
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "hasValue",
        value: function hasValue(element, key) {
          /** @type {?} */
          var bpMap = this.elementMap.get(element);

          if (bpMap) {
            /** @type {?} */
            var values = this.getActivatedValues(bpMap, key);

            if (values) {
              return values.get(key) !== undefined || false;
            }
          }

          return false;
        }
        /**
         * Set the value for an input on a directive
         * @param {?} element the element in question
         * @param {?} key the type of the directive (e.g. flex, layout-gap, etc)
         * @param {?} val the value for the breakpoint
         * @param {?} bp the breakpoint suffix (empty string = default)
         * @return {?}
         */

      }, {
        key: "setValue",
        value: function setValue(element, key, val, bp) {
          /** @type {?} */
          var bpMap = this.elementMap.get(element);

          if (!bpMap) {
            bpMap = new Map().set(bp, new Map().set(key, val));
            this.elementMap.set(element, bpMap);
          } else {
            /** @type {?} */
            var values = (bpMap.get(bp) || new Map()).set(key, val);
            bpMap.set(bp, values);
            this.elementMap.set(element, bpMap);
          }
          /** @type {?} */


          var value = this.getValue(element, key);

          if (value !== undefined) {
            this.updateElement(element, key, value);
          }
        }
        /**
         * Track element value changes for a specific key
         * @param {?} element
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "trackValue",
        value: function trackValue(element, key) {
          return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(
          /**
          * @param {?} v
          * @return {?}
          */
          function (v) {
            return v.element === element && v.key === key;
          }));
        }
        /**
         * update all styles for all elements on the current breakpoint
         * @return {?}
         */

      }, {
        key: "updateStyles",
        value: function updateStyles() {
          var _this22 = this;

          this.elementMap.forEach(
          /**
          * @param {?} bpMap
          * @param {?} el
          * @return {?}
          */
          function (bpMap, el) {
            /** @type {?} */
            var keyMap = new Set(
            /** @type {?} */
            _this22.elementKeyMap.get(el));
            /** @type {?} */

            var valueMap = _this22.getActivatedValues(bpMap);

            if (valueMap) {
              valueMap.forEach(
              /**
              * @param {?} v
              * @param {?} k
              * @return {?}
              */
              function (v, k) {
                _this22.updateElement(el, k, v);

                keyMap["delete"](k);
              });
            }

            keyMap.forEach(
            /**
            * @param {?} k
            * @return {?}
            */
            function (k) {
              valueMap = _this22.getActivatedValues(bpMap, k);

              if (valueMap) {
                /** @type {?} */
                var value = valueMap.get(k);

                _this22.updateElement(el, k, value);
              } else {
                _this22.clearElement(el, k);
              }
            });
          });
        }
        /**
         * clear the styles for a given element
         * @param {?} element
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "clearElement",
        value: function clearElement(element, key) {
          /** @type {?} */
          var builders = this.clearMap.get(element);

          if (builders) {
            /** @type {?} */
            var clearFn =
            /** @type {?} */
            builders.get(key);

            if (!!clearFn) {
              clearFn();
              this.subject.next({
                element: element,
                key: key,
                value: ''
              });
            }
          }
        }
        /**
         * update a given element with the activated values for a given key
         * @param {?} element
         * @param {?} key
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "updateElement",
        value: function updateElement(element, key, value) {
          /** @type {?} */
          var builders = this.updateMap.get(element);

          if (builders) {
            /** @type {?} */
            var updateFn =
            /** @type {?} */
            builders.get(key);

            if (!!updateFn) {
              updateFn(value);
              this.subject.next({
                element: element,
                key: key,
                value: value
              });
            }
          }
        }
        /**
         * release all references to a given element
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "releaseElement",
        value: function releaseElement(element) {
          /** @type {?} */
          var watcherMap = this.watcherMap.get(element);

          if (watcherMap) {
            watcherMap.forEach(
            /**
            * @param {?} s
            * @return {?}
            */
            function (s) {
              return s.unsubscribe();
            });
            this.watcherMap["delete"](element);
          }
          /** @type {?} */


          var elementMap = this.elementMap.get(element);

          if (elementMap) {
            elementMap.forEach(
            /**
            * @param {?} _
            * @param {?} s
            * @return {?}
            */
            function (_, s) {
              return elementMap["delete"](s);
            });
            this.elementMap["delete"](element);
          }
        }
        /**
         * trigger an update for a given element and key (e.g. layout)
         * @param {?} element
         * @param {?=} key
         * @return {?}
         */

      }, {
        key: "triggerUpdate",
        value: function triggerUpdate(element, key) {
          var _this23 = this;

          /** @type {?} */
          var bpMap = this.elementMap.get(element);

          if (bpMap) {
            /** @type {?} */
            var valueMap = this.getActivatedValues(bpMap, key);

            if (valueMap) {
              if (key) {
                this.updateElement(element, key, valueMap.get(key));
              } else {
                valueMap.forEach(
                /**
                * @param {?} v
                * @param {?} k
                * @return {?}
                */
                function (v, k) {
                  return _this23.updateElement(element, k, v);
                });
              }
            }
          }
        }
        /**
         * Cross-reference for HTMLElement with directive key
         * @private
         * @param {?} element
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "buildElementKeyMap",
        value: function buildElementKeyMap(element, key) {
          /** @type {?} */
          var keyMap = this.elementKeyMap.get(element);

          if (!keyMap) {
            keyMap = new Set();
            this.elementKeyMap.set(element, keyMap);
          }

          keyMap.add(key);
        }
        /**
         * Other triggers that should force style updates:
         * - directionality
         * - layout changes
         * - mutationobserver updates
         * @private
         * @param {?} element
         * @param {?} key
         * @param {?} triggers
         * @return {?}
         */

      }, {
        key: "watchExtraTriggers",
        value: function watchExtraTriggers(element, key, triggers) {
          var _this24 = this;

          if (triggers && triggers.length) {
            /** @type {?} */
            var watchers = this.watcherMap.get(element);

            if (!watchers) {
              watchers = new Map();
              this.watcherMap.set(element, watchers);
            }
            /** @type {?} */


            var subscription = watchers.get(key);

            if (!subscription) {
              /** @type {?} */
              var newSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"]).apply(void 0, _toConsumableArray(triggers)).subscribe(
              /**
              * @return {?}
              */
              function () {
                /** @type {?} */
                var currentValue = _this24.getValue(element, key);

                _this24.updateElement(element, key, currentValue);
              });
              watchers.set(key, newSubscription);
            }
          }
        }
        /**
         * Breakpoint locator by mediaQuery
         * @private
         * @param {?} query
         * @return {?}
         */

      }, {
        key: "findByQuery",
        value: function findByQuery(query) {
          return this.breakpoints.findByQuery(query);
        }
        /**
         * get the fallback breakpoint for a given element, starting with the current breakpoint
         * @private
         * @param {?} bpMap
         * @param {?=} key
         * @return {?}
         */

      }, {
        key: "getActivatedValues",
        value: function getActivatedValues(bpMap, key) {
          for (var i = 0; i < this.activatedBreakpoints.length; i++) {
            /** @type {?} */
            var activatedBp = this.activatedBreakpoints[i];
            /** @type {?} */

            var valueMap = bpMap.get(activatedBp.alias);

            if (valueMap) {
              if (key === undefined || valueMap.has(key) && valueMap.get(key) != null) {
                return valueMap;
              }
            }
          }
          /** @type {?} */


          var lastHope = bpMap.get('');
          return key === undefined || lastHope && lastHope.has(key) ? lastHope : undefined;
        }
        /**
         * Watch for mediaQuery breakpoint activations
         * @private
         * @return {?}
         */

      }, {
        key: "observeActivations",
        value: function observeActivations() {
          /** @type {?} */
          var target =
          /** @type {?} */

          /** @type {?} */
          this;
          /** @type {?} */

          var queries = this.breakpoints.items.map(
          /**
          * @param {?} bp
          * @return {?}
          */
          function (bp) {
            return bp.mediaQuery;
          });
          this.matchMedia.observe(this.hook.withPrintQuery(queries)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(this.hook.interceptEvents(target)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this));
        }
      }, {
        key: "activatedAlias",
        get: function get() {
          return this.activatedBreakpoints[0] ? this.activatedBreakpoints[0].alias : '';
        }
      }]);

      return MediaMarshaller;
    }();

    MediaMarshaller.ɵfac = function MediaMarshaller_Factory(t) {
      return new (t || MediaMarshaller)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatchMedia), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BreakPointRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PrintHook));
    };
    /** @nocollapse */


    MediaMarshaller.ctorParameters = function () {
      return [{
        type: MatchMedia
      }, {
        type: BreakPointRegistry
      }, {
        type: PrintHook
      }];
    };
    /** @nocollapse */


    MediaMarshaller.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function MediaMarshaller_Factory() {
        return new MediaMarshaller(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MatchMedia), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PrintHook));
      },
      token: MediaMarshaller,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaMarshaller, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: MatchMedia
        }, {
          type: BreakPointRegistry
        }, {
          type: PrintHook
        }];
      }, null);
    })();
    /**
     * @param {?} map
     * @param {?} element
     * @param {?} key
     * @param {?=} input
     * @return {?}
     */


    function initBuilderMap(map$$1, element, key, input) {
      if (input !== undefined) {
        /** @type {?} */
        var oldMap = map$$1.get(element);

        if (!oldMap) {
          oldMap = new Map();
          map$$1.set(element, oldMap);
        }

        oldMap.set(key, input);
      }
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: core/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: core/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=core.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js ***!
    \****************************************************************************/

  /*! exports provided: ExtendedModule, ClassDirective, DefaultClassDirective, ImgSrcStyleBuilder, ImgSrcDirective, DefaultImgSrcDirective, ShowHideStyleBuilder, ShowHideDirective, DefaultShowHideDirective, StyleDirective, DefaultStyleDirective */

  /***/
  function node_modulesAngularFlexLayout__ivy_ngcc__Esm2015ExtendedJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExtendedModule", function () {
      return ExtendedModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassDirective", function () {
      return ClassDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultClassDirective", function () {
      return DefaultClassDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImgSrcStyleBuilder", function () {
      return ImgSrcStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function () {
      return ImgSrcDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultImgSrcDirective", function () {
      return DefaultImgSrcDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowHideStyleBuilder", function () {
      return ShowHideStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function () {
      return ShowHideDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultShowHideDirective", function () {
      return DefaultShowHideDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleDirective", function () {
      return StyleDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultStyleDirective", function () {
      return DefaultStyleDirective;
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


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: extended/img-src/img-src.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ImgSrcStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_) {
      _inherits(ImgSrcStyleBuilder, _angular_flex_layout_);

      var _super2 = _createSuper(ImgSrcStyleBuilder);

      function ImgSrcStyleBuilder() {
        _classCallCheck(this, ImgSrcStyleBuilder);

        return _super2.apply(this, arguments);
      }

      _createClass(ImgSrcStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} url
         * @return {?}
         */
        value: function buildStyles(url) {
          return {
            'content': url ? "url(".concat(url, ")") : ''
          };
        }
      }]);

      return ImgSrcStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]);

    ImgSrcStyleBuilder.ɵfac = function ImgSrcStyleBuilder_Factory(t) {
      return ɵImgSrcStyleBuilder_BaseFactory(t || ImgSrcStyleBuilder);
    };
    /** @nocollapse */


    ImgSrcStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ImgSrcStyleBuilder_Factory() {
        return new ImgSrcStyleBuilder();
      },
      token: ImgSrcStyleBuilder,
      providedIn: "root"
    });

    var ɵImgSrcStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ImgSrcStyleBuilder);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgSrcStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();

    var ImgSrcDirective = /*#__PURE__*/function (_angular_flex_layout_2) {
      _inherits(ImgSrcDirective, _angular_flex_layout_2);

      var _super3 = _createSuper(ImgSrcDirective);

      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       * @param {?} platformId
       * @param {?} serverModuleLoaded
       */
      function ImgSrcDirective(elementRef, styleBuilder, styler, marshal, platformId, serverModuleLoaded) {
        var _this25;

        _classCallCheck(this, ImgSrcDirective);

        _this25 = _super3.call(this, elementRef, styleBuilder, styler, marshal);
        _this25.platformId = platformId;
        _this25.serverModuleLoaded = serverModuleLoaded;
        _this25.DIRECTIVE_KEY = 'img-src';
        _this25.defaultSrc = '';
        _this25.styleCache = imgSrcCache;

        _this25.init();

        _this25.setValue(_this25.nativeElement.getAttribute('src') || '', '');

        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(_this25.platformId) && _this25.serverModuleLoaded) {
          _this25.nativeElement.setAttribute('src', '');
        }

        return _this25;
      }
      /**
       * @param {?} val
       * @return {?}
       */


      _createClass(ImgSrcDirective, [{
        key: "updateWithValue",

        /**
         * Use the [responsively] activated input value to update
         * the host img src attribute or assign a default `img.src=''`
         * if the src has not been defined.
         *
         * Do nothing to standard `<img src="">` usages, only when responsive
         * keys are present do we actually call `setAttribute()`
         * @protected
         * @param {?=} value
         * @return {?}
         */
        value: function updateWithValue(value) {
          /** @type {?} */
          var url = value || this.defaultSrc;

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId) && this.serverModuleLoaded) {
            this.addStyles(url);
          } else {
            this.nativeElement.setAttribute('src', url);
          }
        }
      }, {
        key: "src",
        set: function set(val) {
          this.defaultSrc = val;
          this.setValue(this.defaultSrc, '');
        }
      }]);

      return ImgSrcDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]);

    ImgSrcDirective.ɵfac = function ImgSrcDirective_Factory(t) {
      return new (t || ImgSrcDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ImgSrcStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]));
    };

    ImgSrcDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ImgSrcDirective,
      inputs: {
        src: "src"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    ImgSrcDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: ImgSrcStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
        }]
      }];
    };

    ImgSrcDirective.propDecorators = {
      src: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['src']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImgSrcDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ImgSrcStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
          }]
        }];
      }, {
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['src']
        }]
      });
    })();
    /** @type {?} */


    var imgSrcCache = new Map();
    /** @type {?} */

    var inputs = ['src.xs', 'src.sm', 'src.md', 'src.lg', 'src.xl', 'src.lt-sm', 'src.lt-md', 'src.lt-lg', 'src.lt-xl', 'src.gt-xs', 'src.gt-sm', 'src.gt-md', 'src.gt-lg'];
    /** @type {?} */

    var selector = "\n  img[src.xs],    img[src.sm],    img[src.md],    img[src.lg],   img[src.xl],\n  img[src.lt-sm], img[src.lt-md], img[src.lt-lg], img[src.lt-xl],\n  img[src.gt-xs], img[src.gt-sm], img[src.gt-md], img[src.gt-lg]\n";
    /**
     * This directive provides a responsive API for the HTML <img> 'src' attribute
     * and will update the img.src property upon each responsive activation.
     *
     * e.g.
     *      <img src="defaultScene.jpg" src.xs="mobileScene.jpg"></img>
     *
     * @see https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-src/
     */

    var DefaultImgSrcDirective = /*#__PURE__*/function (_ImgSrcDirective) {
      _inherits(DefaultImgSrcDirective, _ImgSrcDirective);

      var _super4 = _createSuper(DefaultImgSrcDirective);

      function DefaultImgSrcDirective() {
        var _this26;

        _classCallCheck(this, DefaultImgSrcDirective);

        _this26 = _super4.apply(this, arguments);
        _this26.inputs = inputs;
        return _this26;
      }

      return DefaultImgSrcDirective;
    }(ImgSrcDirective);

    DefaultImgSrcDirective.ɵfac = function DefaultImgSrcDirective_Factory(t) {
      return ɵDefaultImgSrcDirective_BaseFactory(t || DefaultImgSrcDirective);
    };

    DefaultImgSrcDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultImgSrcDirective,
      selectors: [["img", "src.xs", ""], ["img", "src.sm", ""], ["img", "src.md", ""], ["img", "src.lg", ""], ["img", "src.xl", ""], ["img", "src.lt-sm", ""], ["img", "src.lt-md", ""], ["img", "src.lt-lg", ""], ["img", "src.lt-xl", ""], ["img", "src.gt-xs", ""], ["img", "src.gt-sm", ""], ["img", "src.gt-md", ""], ["img", "src.gt-lg", ""]],
      inputs: {
        "src.xs": "src.xs",
        "src.sm": "src.sm",
        "src.md": "src.md",
        "src.lg": "src.lg",
        "src.xl": "src.xl",
        "src.lt-sm": "src.lt-sm",
        "src.lt-md": "src.lt-md",
        "src.lt-lg": "src.lt-lg",
        "src.lt-xl": "src.lt-xl",
        "src.gt-xs": "src.gt-xs",
        "src.gt-sm": "src.gt-sm",
        "src.gt-md": "src.gt-md",
        "src.gt-lg": "src.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultImgSrcDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultImgSrcDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultImgSrcDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector,
          inputs: inputs
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: extended/class/class.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ClassDirective = /*#__PURE__*/function (_angular_flex_layout_3) {
      _inherits(ClassDirective, _angular_flex_layout_3);

      var _super5 = _createSuper(ClassDirective);

      /**
       * @param {?} elementRef
       * @param {?} styler
       * @param {?} marshal
       * @param {?} iterableDiffers
       * @param {?} keyValueDiffers
       * @param {?} renderer2
       * @param {?} ngClassInstance
       */
      function ClassDirective(elementRef, styler, marshal, iterableDiffers, keyValueDiffers, renderer2, ngClassInstance) {
        var _this27;

        _classCallCheck(this, ClassDirective);

        _this27 = _super5.call(this, elementRef,
        /** @type {?} */
        null, styler, marshal);
        _this27.ngClassInstance = ngClassInstance;
        _this27.DIRECTIVE_KEY = 'ngClass';

        if (!_this27.ngClassInstance) {
          // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been defined on
          // the same host element; since the responsive variations may be defined...
          _this27.ngClassInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"](iterableDiffers, keyValueDiffers, elementRef, renderer2);
        }

        _this27.init();

        _this27.setValue('', '');

        return _this27;
      }
      /**
       * Capture class assignments so we cache the default classes
       * which are merged with activated styles and used as fallbacks.
       * @param {?} val
       * @return {?}
       */


      _createClass(ClassDirective, [{
        key: "updateWithValue",

        /**
         * @protected
         * @param {?} value
         * @return {?}
         */
        value: function updateWithValue(value) {
          this.ngClassInstance.ngClass = value;
          this.ngClassInstance.ngDoCheck();
        } // ******************************************************************
        // Lifecycle Hooks
        // ******************************************************************

        /**
         * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.ngClassInstance.ngDoCheck();
        }
      }, {
        key: "klass",
        set: function set(val) {
          this.ngClassInstance.klass = val;
          this.setValue(val, '');
        }
      }]);

      return ClassDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]);

    ClassDirective.ɵfac = function ClassDirective_Factory(t) {
      return new (t || ClassDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], 10));
    };

    ClassDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ClassDirective,
      inputs: {
        klass: ["class", "klass"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    ClassDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }]
      }];
    };

    ClassDirective.propDecorators = {
      klass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['class']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }];
      }, {
        klass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['class']
        }]
      });
    })();
    /** @type {?} */


    var inputs$1 = ['ngClass', 'ngClass.xs', 'ngClass.sm', 'ngClass.md', 'ngClass.lg', 'ngClass.xl', 'ngClass.lt-sm', 'ngClass.lt-md', 'ngClass.lt-lg', 'ngClass.lt-xl', 'ngClass.gt-xs', 'ngClass.gt-sm', 'ngClass.gt-md', 'ngClass.gt-lg'];
    /** @type {?} */

    var selector$1 = "\n  [ngClass], [ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl],\n  [ngClass.lt-sm], [ngClass.lt-md], [ngClass.lt-lg], [ngClass.lt-xl],\n  [ngClass.gt-xs], [ngClass.gt-sm], [ngClass.gt-md], [ngClass.gt-lg]\n";
    /**
     * Directive to add responsive support for ngClass.
     * This maintains the core functionality of 'ngClass' and adds responsive API
     * Note: this class is a no-op when rendered on the server
     */

    var DefaultClassDirective = /*#__PURE__*/function (_ClassDirective) {
      _inherits(DefaultClassDirective, _ClassDirective);

      var _super6 = _createSuper(DefaultClassDirective);

      function DefaultClassDirective() {
        var _this28;

        _classCallCheck(this, DefaultClassDirective);

        _this28 = _super6.apply(this, arguments);
        _this28.inputs = inputs$1;
        return _this28;
      }

      return DefaultClassDirective;
    }(ClassDirective);

    DefaultClassDirective.ɵfac = function DefaultClassDirective_Factory(t) {
      return ɵDefaultClassDirective_BaseFactory(t || DefaultClassDirective);
    };

    DefaultClassDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultClassDirective,
      selectors: [["", "ngClass", ""], ["", "ngClass.xs", ""], ["", "ngClass.sm", ""], ["", "ngClass.md", ""], ["", "ngClass.lg", ""], ["", "ngClass.xl", ""], ["", "ngClass.lt-sm", ""], ["", "ngClass.lt-md", ""], ["", "ngClass.lt-lg", ""], ["", "ngClass.lt-xl", ""], ["", "ngClass.gt-xs", ""], ["", "ngClass.gt-sm", ""], ["", "ngClass.gt-md", ""], ["", "ngClass.gt-lg", ""]],
      inputs: {
        ngClass: "ngClass",
        "ngClass.xs": "ngClass.xs",
        "ngClass.sm": "ngClass.sm",
        "ngClass.md": "ngClass.md",
        "ngClass.lg": "ngClass.lg",
        "ngClass.xl": "ngClass.xl",
        "ngClass.lt-sm": "ngClass.lt-sm",
        "ngClass.lt-md": "ngClass.lt-md",
        "ngClass.lt-lg": "ngClass.lt-lg",
        "ngClass.lt-xl": "ngClass.lt-xl",
        "ngClass.gt-xs": "ngClass.gt-xs",
        "ngClass.gt-sm": "ngClass.gt-sm",
        "ngClass.gt-md": "ngClass.gt-md",
        "ngClass.gt-lg": "ngClass.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultClassDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultClassDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultClassDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector$1,
          inputs: inputs$1
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: extended/show-hide/show-hide.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ShowHideStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_4) {
      _inherits(ShowHideStyleBuilder, _angular_flex_layout_4);

      var _super7 = _createSuper(ShowHideStyleBuilder);

      function ShowHideStyleBuilder() {
        _classCallCheck(this, ShowHideStyleBuilder);

        return _super7.apply(this, arguments);
      }

      _createClass(ShowHideStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} show
         * @param {?} parent
         * @return {?}
         */
        value: function buildStyles(show, parent) {
          /** @type {?} */
          var shouldShow = show === 'true';
          return {
            'display': shouldShow ? parent.display || (parent.isServer ? 'initial' : '') : 'none'
          };
        }
      }]);

      return ShowHideStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"]);

    ShowHideStyleBuilder.ɵfac = function ShowHideStyleBuilder_Factory(t) {
      return ɵShowHideStyleBuilder_BaseFactory(t || ShowHideStyleBuilder);
    };
    /** @nocollapse */


    ShowHideStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ShowHideStyleBuilder_Factory() {
        return new ShowHideStyleBuilder();
      },
      token: ShowHideStyleBuilder,
      providedIn: "root"
    });

    var ɵShowHideStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ShowHideStyleBuilder);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowHideStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();

    var ShowHideDirective = /*#__PURE__*/function (_angular_flex_layout_5) {
      _inherits(ShowHideDirective, _angular_flex_layout_5);

      var _super8 = _createSuper(ShowHideDirective);

      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       * @param {?} layoutConfig
       * @param {?} platformId
       * @param {?} serverModuleLoaded
       */
      function ShowHideDirective(elementRef, styleBuilder, styler, marshal, layoutConfig, platformId, serverModuleLoaded) {
        var _this29;

        _classCallCheck(this, ShowHideDirective);

        _this29 = _super8.call(this, elementRef, styleBuilder, styler, marshal);
        _this29.layoutConfig = layoutConfig;
        _this29.platformId = platformId;
        _this29.serverModuleLoaded = serverModuleLoaded;
        _this29.DIRECTIVE_KEY = 'show-hide';
        /**
         * Original DOM Element CSS display style
         */

        _this29.display = '';
        _this29.hasLayout = false;
        _this29.hasFlexChild = false;
        return _this29;
      } // *********************************************
      // Lifecycle Methods
      // *********************************************

      /**
       * @return {?}
       */


      _createClass(ShowHideDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.trackExtraTriggers();
          /** @type {?} */

          var children = Array.from(this.nativeElement.children);

          for (var i = 0; i < children.length; i++) {
            if (this.marshal.hasValue(
            /** @type {?} */
            children[i], 'flex')) {
              this.hasFlexChild = true;
              break;
            }
          }

          if (DISPLAY_MAP.has(this.nativeElement)) {
            this.display =
            /** @type {?} */
            DISPLAY_MAP.get(this.nativeElement);
          } else {
            this.display = this.getDisplayStyle();
            DISPLAY_MAP.set(this.nativeElement, this.display);
          }

          this.init(); // set the default to show unless explicitly overridden

          /** @type {?} */

          var defaultValue = this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY, '');

          if (defaultValue === undefined || defaultValue === '') {
            this.setValue(true, '');
          } else {
            this.triggerUpdate();
          }
        }
        /**
         * On changes to any \@Input properties...
         * Default to use the non-responsive Input value ('fxShow')
         * Then conditionally override with the mq-activated Input's current value
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this30 = this;

          Object.keys(changes).forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            if (_this30.inputs.indexOf(key) !== -1) {
              /** @type {?} */
              var inputKey = key.split('.');
              /** @type {?} */

              var bp = inputKey.slice(1).join('.');
              /** @type {?} */

              var inputValue = changes[key].currentValue;
              /** @type {?} */

              var shouldShow = inputValue !== '' ? inputValue !== 0 ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(inputValue) : false : true;

              if (inputKey[0] === 'fxHide') {
                shouldShow = !shouldShow;
              }

              _this30.setValue(shouldShow, bp);
            }
          });
        } // *********************************************
        // Protected methods
        // *********************************************

        /**
         *  Watch for these extra triggers to update fxShow, fxHide stylings
         * @protected
         * @return {?}
         */

      }, {
        key: "trackExtraTriggers",
        value: function trackExtraTriggers() {
          var _this31 = this;

          this.hasLayout = this.marshal.hasValue(this.nativeElement, 'layout');
          ['layout', 'layout-align'].forEach(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            _this31.marshal.trackValue(_this31.nativeElement, key).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this31.destroySubject)).subscribe(_this31.triggerUpdate.bind(_this31));
          });
        }
        /**
         * Override accessor to the current HTMLElement's `display` style
         * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
         * unless it was already explicitly specified inline or in a CSS stylesheet.
         * @protected
         * @return {?}
         */

      }, {
        key: "getDisplayStyle",
        value: function getDisplayStyle() {
          return this.hasLayout || this.hasFlexChild && this.layoutConfig.addFlexToParent ? 'flex' : this.styler.lookupStyle(this.nativeElement, 'display', true);
        }
        /**
         * Validate the visibility value and then update the host's inline display style
         * @protected
         * @param {?=} value
         * @return {?}
         */

      }, {
        key: "updateWithValue",
        value: function updateWithValue() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          if (value === '') {
            return;
          }
          /** @type {?} */


          var isServer = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId);
          this.addStyles(value ? 'true' : 'false', {
            display: this.display,
            isServer: isServer
          });

          if (isServer && this.serverModuleLoaded) {
            this.nativeElement.style.setProperty('display', '');
          }

          this.marshal.triggerUpdate(
          /** @type {?} */
          this.parentElement, 'layout-gap');
        }
      }]);

      return ShowHideDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]);

    ShowHideDirective.ɵfac = function ShowHideDirective_Factory(t) {
      return new (t || ShowHideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ShowHideStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]));
    };

    ShowHideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ShowHideDirective,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    ShowHideDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: ShowHideStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"]]
        }]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowHideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ShowHideStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"]]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
          }]
        }];
      }, null);
    })();
    /** @type {?} */


    var DISPLAY_MAP = new WeakMap();
    /** @type {?} */

    var inputs$2 = ['fxShow', 'fxShow.print', 'fxShow.xs', 'fxShow.sm', 'fxShow.md', 'fxShow.lg', 'fxShow.xl', 'fxShow.lt-sm', 'fxShow.lt-md', 'fxShow.lt-lg', 'fxShow.lt-xl', 'fxShow.gt-xs', 'fxShow.gt-sm', 'fxShow.gt-md', 'fxShow.gt-lg', 'fxHide', 'fxHide.print', 'fxHide.xs', 'fxHide.sm', 'fxHide.md', 'fxHide.lg', 'fxHide.xl', 'fxHide.lt-sm', 'fxHide.lt-md', 'fxHide.lt-lg', 'fxHide.lt-xl', 'fxHide.gt-xs', 'fxHide.gt-sm', 'fxHide.gt-md', 'fxHide.gt-lg'];
    /** @type {?} */

    var selector$2 = "\n  [fxShow], [fxShow.print],\n  [fxShow.xs], [fxShow.sm], [fxShow.md], [fxShow.lg], [fxShow.xl],\n  [fxShow.lt-sm], [fxShow.lt-md], [fxShow.lt-lg], [fxShow.lt-xl],\n  [fxShow.gt-xs], [fxShow.gt-sm], [fxShow.gt-md], [fxShow.gt-lg],\n  [fxHide], [fxHide.print],\n  [fxHide.xs], [fxHide.sm], [fxHide.md], [fxHide.lg], [fxHide.xl],\n  [fxHide.lt-sm], [fxHide.lt-md], [fxHide.lt-lg], [fxHide.lt-xl],\n  [fxHide.gt-xs], [fxHide.gt-sm], [fxHide.gt-md], [fxHide.gt-lg]\n";
    /**
     * 'show' Layout API directive
     */

    var DefaultShowHideDirective = /*#__PURE__*/function (_ShowHideDirective) {
      _inherits(DefaultShowHideDirective, _ShowHideDirective);

      var _super9 = _createSuper(DefaultShowHideDirective);

      function DefaultShowHideDirective() {
        var _this32;

        _classCallCheck(this, DefaultShowHideDirective);

        _this32 = _super9.apply(this, arguments);
        _this32.inputs = inputs$2;
        return _this32;
      }

      return DefaultShowHideDirective;
    }(ShowHideDirective);

    DefaultShowHideDirective.ɵfac = function DefaultShowHideDirective_Factory(t) {
      return ɵDefaultShowHideDirective_BaseFactory(t || DefaultShowHideDirective);
    };

    DefaultShowHideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultShowHideDirective,
      selectors: [["", "fxShow", ""], ["", "fxShow.print", ""], ["", "fxShow.xs", ""], ["", "fxShow.sm", ""], ["", "fxShow.md", ""], ["", "fxShow.lg", ""], ["", "fxShow.xl", ""], ["", "fxShow.lt-sm", ""], ["", "fxShow.lt-md", ""], ["", "fxShow.lt-lg", ""], ["", "fxShow.lt-xl", ""], ["", "fxShow.gt-xs", ""], ["", "fxShow.gt-sm", ""], ["", "fxShow.gt-md", ""], ["", "fxShow.gt-lg", ""], ["", "fxHide", ""], ["", "fxHide.print", ""], ["", "fxHide.xs", ""], ["", "fxHide.sm", ""], ["", "fxHide.md", ""], ["", "fxHide.lg", ""], ["", "fxHide.xl", ""], ["", "fxHide.lt-sm", ""], ["", "fxHide.lt-md", ""], ["", "fxHide.lt-lg", ""], ["", "fxHide.lt-xl", ""], ["", "fxHide.gt-xs", ""], ["", "fxHide.gt-sm", ""], ["", "fxHide.gt-md", ""], ["", "fxHide.gt-lg", ""]],
      inputs: {
        fxShow: "fxShow",
        "fxShow.print": "fxShow.print",
        "fxShow.xs": "fxShow.xs",
        "fxShow.sm": "fxShow.sm",
        "fxShow.md": "fxShow.md",
        "fxShow.lg": "fxShow.lg",
        "fxShow.xl": "fxShow.xl",
        "fxShow.lt-sm": "fxShow.lt-sm",
        "fxShow.lt-md": "fxShow.lt-md",
        "fxShow.lt-lg": "fxShow.lt-lg",
        "fxShow.lt-xl": "fxShow.lt-xl",
        "fxShow.gt-xs": "fxShow.gt-xs",
        "fxShow.gt-sm": "fxShow.gt-sm",
        "fxShow.gt-md": "fxShow.gt-md",
        "fxShow.gt-lg": "fxShow.gt-lg",
        fxHide: "fxHide",
        "fxHide.print": "fxHide.print",
        "fxHide.xs": "fxHide.xs",
        "fxHide.sm": "fxHide.sm",
        "fxHide.md": "fxHide.md",
        "fxHide.lg": "fxHide.lg",
        "fxHide.xl": "fxHide.xl",
        "fxHide.lt-sm": "fxHide.lt-sm",
        "fxHide.lt-md": "fxHide.lt-md",
        "fxHide.lt-lg": "fxHide.lt-lg",
        "fxHide.lt-xl": "fxHide.lt-xl",
        "fxHide.gt-xs": "fxHide.gt-xs",
        "fxHide.gt-sm": "fxHide.gt-sm",
        "fxHide.gt-md": "fxHide.gt-md",
        "fxHide.gt-lg": "fxHide.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultShowHideDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultShowHideDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultShowHideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector$2,
          inputs: inputs$2
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: extended/style/style-transforms.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * NgStyle allowed inputs
     */


    var NgStyleKeyValue =
    /**
     * @param {?} key
     * @param {?} value
     * @param {?=} noQuotes
     */
    function NgStyleKeyValue(key, value) {
      var noQuotes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      _classCallCheck(this, NgStyleKeyValue);

      this.key = key;
      this.value = value;
      this.key = noQuotes ? key.replace(/['"]/g, '').trim() : key.trim();
      this.value = noQuotes ? value.replace(/['"]/g, '').trim() : value.trim();
      this.value = this.value.replace(/;/, '');
    };
    /**
     * @param {?} target
     * @return {?}
     */


    function getType(target) {
      /** @type {?} */
      var what = typeof target;

      if (what === 'object') {
        return target.constructor === Array ? 'array' : target.constructor === Set ? 'set' : 'object';
      }

      return what;
    }
    /**
     * Split string of key:value pairs into Array of k-v pairs
     * e.g.  'key:value; key:value; key:value;' -> ['key:value',...]
     * @param {?} source
     * @param {?=} delimiter
     * @return {?}
     */


    function buildRawList(source) {
      var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ';';
      return String(source).trim().split(delimiter).map(
      /**
      * @param {?} val
      * @return {?}
      */
      function (val) {
        return val.trim();
      }).filter(
      /**
      * @param {?} val
      * @return {?}
      */
      function (val) {
        return val !== '';
      });
    }
    /**
     * Convert array of key:value strings to a iterable map object
     * @param {?} styles
     * @param {?=} sanitize
     * @return {?}
     */


    function buildMapFromList(styles, sanitize) {
      /** @type {?} */
      var sanitizeValue =
      /**
      * @param {?} it
      * @return {?}
      */
      function sanitizeValue(it) {
        if (sanitize) {
          it.value = sanitize(it.value);
        }

        return it;
      };

      return styles.map(stringToKeyValue).filter(
      /**
      * @param {?} entry
      * @return {?}
      */
      function (entry) {
        return !!entry;
      }).map(sanitizeValue).reduce(keyValuesToMap,
      /** @type {?} */
      {});
    }
    /**
     * Convert Set<string> or raw Object to an iterable NgStyleMap
     * @param {?} source
     * @param {?=} sanitize
     * @return {?}
     */


    function buildMapFromSet(source, sanitize) {
      /** @type {?} */
      var list = [];

      if (getType(source) === 'set') {
        /** @type {?} */
        source.forEach(
        /**
        * @param {?} entry
        * @return {?}
        */
        function (entry) {
          return list.push(entry);
        });
      } else {
        Object.keys(source).forEach(
        /**
        * @param {?} key
        * @return {?}
        */
        function (key) {
          list.push("".concat(key, ":").concat(
          /** @type {?} */
          source[key]));
        });
      }

      return buildMapFromList(list, sanitize);
    }
    /**
     * Convert 'key:value' -> [key, value]
     * @param {?} it
     * @return {?}
     */


    function stringToKeyValue(it) {
      var _it$split = it.split(':'),
          _it$split2 = _toArray(_it$split),
          key = _it$split2[0],
          vals = _it$split2.slice(1);

      return new NgStyleKeyValue(key, vals.join(':'));
    }
    /**
     * Convert [ [key,value] ] -> { key : value }
     * @param {?} map
     * @param {?} entry
     * @return {?}
     */


    function keyValuesToMap(map, entry) {
      if (!!entry.key) {
        map[entry.key] = entry.value;
      }

      return map;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: extended/style/style.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var StyleDirective = /*#__PURE__*/function (_angular_flex_layout_6) {
      _inherits(StyleDirective, _angular_flex_layout_6);

      var _super10 = _createSuper(StyleDirective);

      /**
       * @param {?} elementRef
       * @param {?} styler
       * @param {?} marshal
       * @param {?} sanitizer
       * @param {?} differs
       * @param {?} renderer2
       * @param {?} ngStyleInstance
       * @param {?} serverLoaded
       * @param {?} platformId
       */
      function StyleDirective(elementRef, styler, marshal, sanitizer, differs, renderer2, ngStyleInstance, serverLoaded, platformId) {
        var _this33;

        _classCallCheck(this, StyleDirective);

        _this33 = _super10.call(this, elementRef,
        /** @type {?} */
        null, styler, marshal);
        _this33.sanitizer = sanitizer;
        _this33.ngStyleInstance = ngStyleInstance;
        _this33.DIRECTIVE_KEY = 'ngStyle';

        if (!_this33.ngStyleInstance) {
          // Create an instance NgStyle Directive instance only if `ngStyle=""` has NOT been
          // defined on the same host element; since the responsive variations may be defined...
          _this33.ngStyleInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"](elementRef, differs, renderer2);
        }

        _this33.init();
        /** @type {?} */


        var styles = _this33.nativeElement.getAttribute('style') || '';
        _this33.fallbackStyles = _this33.buildStyleMap(styles);
        _this33.isServer = serverLoaded && Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(platformId);
        return _this33;
      }
      /**
       * Add generated styles
       * @protected
       * @param {?} value
       * @return {?}
       */


      _createClass(StyleDirective, [{
        key: "updateWithValue",
        value: function updateWithValue(value) {
          /** @type {?} */
          var styles = this.buildStyleMap(value);
          this.ngStyleInstance.ngStyle = Object.assign(Object.assign({}, this.fallbackStyles), styles);

          if (this.isServer) {
            this.applyStyleToElement(styles);
          }

          this.ngStyleInstance.ngDoCheck();
        }
        /**
         * Remove generated styles
         * @protected
         * @return {?}
         */

      }, {
        key: "clearStyles",
        value: function clearStyles() {
          this.ngStyleInstance.ngStyle = this.fallbackStyles;
          this.ngStyleInstance.ngDoCheck();
        }
        /**
         * Convert raw strings to ngStyleMap; which is required by ngStyle
         * NOTE: Raw string key-value pairs MUST be delimited by `;`
         *       Comma-delimiters are not supported due to complexities of
         *       possible style values such as `rgba(x,x,x,x)` and others
         * @protected
         * @param {?} styles
         * @return {?}
         */

      }, {
        key: "buildStyleMap",
        value: function buildStyleMap(styles) {
          var _this34 = this;

          // Always safe-guard (aka sanitize) style property values

          /** @type {?} */
          var sanitizer =
          /**
          * @param {?} val
          * @return {?}
          */
          function sanitizer(val) {
            return _this34.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].STYLE, val) || '';
          };

          if (styles) {
            switch (getType(styles)) {
              case 'string':
                return buildMapFromList$1(buildRawList(styles), sanitizer);

              case 'array':
                return buildMapFromList$1(
                /** @type {?} */
                styles, sanitizer);

              case 'set':
                return buildMapFromSet(styles, sanitizer);

              default:
                return buildMapFromSet(styles, sanitizer);
            }
          }

          return {};
        } // ******************************************************************
        // Lifecycle Hooks
        // ******************************************************************

        /**
         * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.ngStyleInstance.ngDoCheck();
        }
      }]);

      return StyleDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"]);

    StyleDirective.ɵfac = function StyleDirective_Factory(t) {
      return new (t || StyleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
    };

    StyleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: StyleDirective,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    StyleDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }]
      }, {
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
        }]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StyleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
          }]
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      }, null);
    })();
    /** @type {?} */


    var inputs$3 = ['ngStyle', 'ngStyle.xs', 'ngStyle.sm', 'ngStyle.md', 'ngStyle.lg', 'ngStyle.xl', 'ngStyle.lt-sm', 'ngStyle.lt-md', 'ngStyle.lt-lg', 'ngStyle.lt-xl', 'ngStyle.gt-xs', 'ngStyle.gt-sm', 'ngStyle.gt-md', 'ngStyle.gt-lg'];
    /** @type {?} */

    var selector$3 = "\n  [ngStyle],\n  [ngStyle.xs], [ngStyle.sm], [ngStyle.md], [ngStyle.lg], [ngStyle.xl],\n  [ngStyle.lt-sm], [ngStyle.lt-md], [ngStyle.lt-lg], [ngStyle.lt-xl],\n  [ngStyle.gt-xs], [ngStyle.gt-sm], [ngStyle.gt-md], [ngStyle.gt-lg]\n";
    /**
     * Directive to add responsive support for ngStyle.
     *
     */

    var DefaultStyleDirective = /*#__PURE__*/function (_StyleDirective) {
      _inherits(DefaultStyleDirective, _StyleDirective);

      var _super11 = _createSuper(DefaultStyleDirective);

      function DefaultStyleDirective() {
        var _this35;

        _classCallCheck(this, DefaultStyleDirective);

        _this35 = _super11.apply(this, arguments);
        _this35.inputs = inputs$3;
        return _this35;
      }

      return DefaultStyleDirective;
    }(StyleDirective);

    DefaultStyleDirective.ɵfac = function DefaultStyleDirective_Factory(t) {
      return ɵDefaultStyleDirective_BaseFactory(t || DefaultStyleDirective);
    };

    DefaultStyleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultStyleDirective,
      selectors: [["", "ngStyle", ""], ["", "ngStyle.xs", ""], ["", "ngStyle.sm", ""], ["", "ngStyle.md", ""], ["", "ngStyle.lg", ""], ["", "ngStyle.xl", ""], ["", "ngStyle.lt-sm", ""], ["", "ngStyle.lt-md", ""], ["", "ngStyle.lt-lg", ""], ["", "ngStyle.lt-xl", ""], ["", "ngStyle.gt-xs", ""], ["", "ngStyle.gt-sm", ""], ["", "ngStyle.gt-md", ""], ["", "ngStyle.gt-lg", ""]],
      inputs: {
        ngStyle: "ngStyle",
        "ngStyle.xs": "ngStyle.xs",
        "ngStyle.sm": "ngStyle.sm",
        "ngStyle.md": "ngStyle.md",
        "ngStyle.lg": "ngStyle.lg",
        "ngStyle.xl": "ngStyle.xl",
        "ngStyle.lt-sm": "ngStyle.lt-sm",
        "ngStyle.lt-md": "ngStyle.lt-md",
        "ngStyle.lt-lg": "ngStyle.lt-lg",
        "ngStyle.lt-xl": "ngStyle.lt-xl",
        "ngStyle.gt-xs": "ngStyle.gt-xs",
        "ngStyle.gt-sm": "ngStyle.gt-sm",
        "ngStyle.gt-md": "ngStyle.gt-md",
        "ngStyle.gt-lg": "ngStyle.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultStyleDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultStyleDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultStyleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector$3,
          inputs: inputs$3
        }]
      }], null, null);
    })();
    /**
     * Build a styles map from a list of styles, while sanitizing bad values first
     * @param {?} styles
     * @param {?=} sanitize
     * @return {?}
     */


    function buildMapFromList$1(styles, sanitize) {
      /** @type {?} */
      var sanitizeValue =
      /**
      * @param {?} it
      * @return {?}
      */
      function sanitizeValue(it) {
        if (sanitize) {
          it.value = sanitize(it.value);
        }

        return it;
      };

      return styles.map(stringToKeyValue).filter(
      /**
      * @param {?} entry
      * @return {?}
      */
      function (entry) {
        return !!entry;
      }).map(sanitizeValue).reduce(keyValuesToMap,
      /** @type {?} */
      {});
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: extended/module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var ALL_DIRECTIVES = [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective];
    /**
     * *****************************************************************
     * Define module for the Extended API
     * *****************************************************************
     */

    var ExtendedModule = function ExtendedModule() {
      _classCallCheck(this, ExtendedModule);
    };

    ExtendedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ExtendedModule
    });
    ExtendedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ExtendedModule_Factory(t) {
        return new (t || ExtendedModule)();
      },
      imports: [[_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExtendedModule, {
        declarations: function declarations() {
          return [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective];
        },
        imports: function imports() {
          return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]];
        },
        exports: function exports() {
          return [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtendedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]],
          declarations: [].concat(ALL_DIRECTIVES),
          exports: [].concat(ALL_DIRECTIVES)
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: extended/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: extended/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=extended.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js ***!
    \*******************************************************************************/

  /*! exports provided: ɵMatchMedia, ɵMockMatchMedia, ɵMockMatchMediaProvider, CoreModule, removeStyles, BROWSER_PROVIDER, CLASS_NAME, MediaChange, StylesheetMap, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, mergeAlias, BaseDirective2, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MediaObserver, MediaTrigger, sortDescendingPriority, sortAscendingPriority, coerceArray, StyleUtils, StyleBuilder, validateBasis, MediaMarshaller, BREAKPOINT_PRINT, PrintHook, ExtendedModule, ClassDirective, DefaultClassDirective, ImgSrcStyleBuilder, ImgSrcDirective, DefaultImgSrcDirective, ShowHideStyleBuilder, ShowHideDirective, DefaultShowHideDirective, StyleDirective, DefaultStyleDirective, FlexModule, FlexStyleBuilder, FlexDirective, DefaultFlexDirective, FlexAlignStyleBuilder, FlexAlignDirective, DefaultFlexAlignDirective, FlexFillStyleBuilder, FlexFillDirective, FlexOffsetStyleBuilder, FlexOffsetDirective, DefaultFlexOffsetDirective, FlexOrderStyleBuilder, FlexOrderDirective, DefaultFlexOrderDirective, LayoutStyleBuilder, LayoutDirective, DefaultLayoutDirective, LayoutAlignStyleBuilder, LayoutAlignDirective, DefaultLayoutAlignDirective, LayoutGapStyleBuilder, LayoutGapDirective, DefaultLayoutGapDirective, ɵgrid_privatef, ɵgrid_privatee, ɵgrid_privated, ɵgrid_privatei, ɵgrid_privateh, ɵgrid_privateg, ɵgrid_privatel, ɵgrid_privatek, ɵgrid_privatej, ɵgrid_privateo, ɵgrid_privaten, ɵgrid_privatem, ɵgrid_privater, ɵgrid_privateq, ɵgrid_privatep, ɵgrid_privateu, ɵgrid_privatet, ɵgrid_privates, ɵgrid_privatex, ɵgrid_privatew, ɵgrid_privatev, ɵgrid_privateba, ɵgrid_privatez, ɵgrid_privatey, ɵgrid_privatec, ɵgrid_privateb, ɵgrid_privatea, ɵgrid_privatebd, ɵgrid_privatebc, ɵgrid_privatebb, ɵgrid_privatebg, ɵgrid_privatebf, ɵgrid_privatebe, GridModule, VERSION, FlexLayoutModule */

  /***/
  function node_modulesAngularFlexLayout__ivy_ngcc__Esm2015FlexLayoutJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return VERSION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexLayoutModule", function () {
      return FlexLayoutModule;
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


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/core.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵMatchMedia", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ɵMatchMedia"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵMockMatchMedia", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ɵMockMatchMedia"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵMockMatchMediaProvider", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ɵMockMatchMediaProvider"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "removeStyles", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["removeStyles"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BROWSER_PROVIDER", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BROWSER_PROVIDER"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CLASS_NAME"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MediaChange", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaChange"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StylesheetMap", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StylesheetMap"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONFIG"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LAYOUT_CONFIG", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "mergeAlias", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["mergeAlias"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BaseDirective2", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective2"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_BREAKPOINTS", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_BREAKPOINTS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ScreenTypes", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ScreenTypes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ORIENTATION_BREAKPOINTS", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ORIENTATION_BREAKPOINTS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BreakPointRegistry", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BreakPointRegistry"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINTS"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MediaObserver", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MediaTrigger", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaTrigger"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "sortDescendingPriority", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["sortDescendingPriority"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "sortAscendingPriority", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["sortAscendingPriority"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["coerceArray"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StyleUtils", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StyleBuilder", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "validateBasis", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["validateBasis"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MediaMarshaller", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMarshaller"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BREAKPOINT_PRINT", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT_PRINT"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PrintHook", function () {
      return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["PrintHook"];
    });
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ExtendedModule", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ClassDirective", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ClassDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultClassDirective", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ImgSrcStyleBuilder", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ImgSrcStyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ImgSrcDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultImgSrcDirective", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultImgSrcDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowHideStyleBuilder", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ShowHideStyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ShowHideDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultShowHideDirective", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultShowHideDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StyleDirective", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["StyleDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultStyleDirective", function () {
      return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultStyleDirective"];
    });
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexModule", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexStyleBuilder", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexStyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultFlexDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexAlignStyleBuilder", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexAlignStyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexAlignDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexAlignDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultFlexAlignDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexAlignDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexFillStyleBuilder", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillStyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexFillDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexOffsetStyleBuilder", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOffsetStyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexOffsetDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOffsetDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultFlexOffsetDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexOffsetDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexOrderStyleBuilder", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOrderStyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlexOrderDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOrderDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultFlexOrderDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexOrderDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutStyleBuilder", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutStyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultLayoutDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutAlignStyleBuilder", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutAlignStyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutAlignDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutAlignDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultLayoutAlignDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutGapStyleBuilder", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutGapStyleBuilder"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutGapDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutGapDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultLayoutGapDirective", function () {
      return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"];
    });
    /* harmony import */


    var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/grid */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/grid.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatef", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatef"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatee", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatee"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privated", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privated"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatei", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatei"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privateh", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateh"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privateg", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateg"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatel", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatel"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatek", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatek"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatej", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatej"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privateo", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateo"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privaten", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privaten"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatem", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatem"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privater", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privater"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privateq", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateq"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatep", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatep"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privateu", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateu"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatet", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatet"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privates", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privates"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatex", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatex"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatew", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatew"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatev", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatev"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privateba", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateba"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatez", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatez"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatey", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatey"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatec", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatec"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privateb", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privateb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatea", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatea"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebd", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebd"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebc", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebc"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebb", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebb"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebg", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebg"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebf", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebf"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebe", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵgrid_privatebe"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GridModule", function () {
      return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"];
    });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: version.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Current version of Angular Flex-Layout.
     * @type {?}
     */


    var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('9.0.0-beta.31');
    /**
     * @fileoverview added by tsickle
     * Generated from: module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * FlexLayoutModule -- the main import for all utilities in the Angular Layout library
     * * Will automatically provide Flex, Grid, and Extended modules for use in the application
     * * Can be configured using the static withConfig method, options viewable on the Wiki's
     *   Configuration page
     */

    var FlexLayoutModule = /*#__PURE__*/function () {
      /**
       * @param {?} serverModuleLoaded
       * @param {?} platformId
       */
      function FlexLayoutModule(serverModuleLoaded, platformId) {
        _classCallCheck(this, FlexLayoutModule);

        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(platformId) && !serverModuleLoaded) {
          console.warn('Warning: Flex Layout loaded on the server without FlexLayoutServerModule');
        }
      }
      /**
       * Initialize the FlexLayoutModule with a set of config options,
       * which sets the corresponding tokens accordingly
       * @param {?} configOptions
       * @param {?=} breakpoints
       * @return {?}
       */


      _createClass(FlexLayoutModule, null, [{
        key: "withConfig",
        value: function withConfig(configOptions) {
          var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          return {
            ngModule: FlexLayoutModule,
            providers: configOptions.serverLoaded ? [{
              provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"],
              useValue: Object.assign(Object.assign({}, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONFIG"]), configOptions)
            }, {
              provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"],
              useValue: breakpoints,
              multi: true
            }, {
              provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"],
              useValue: true
            }] : [{
              provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"],
              useValue: Object.assign(Object.assign({}, _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONFIG"]), configOptions)
            }, {
              provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"],
              useValue: breakpoints,
              multi: true
            }]
          };
        }
      }]);

      return FlexLayoutModule;
    }();

    FlexLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FlexLayoutModule
    });
    FlexLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FlexLayoutModule_Factory(t) {
        return new (t || FlexLayoutModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      },
      imports: [[_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]]
    });
    /** @nocollapse */

    FlexLayoutModule.ctorParameters = function () {
      return [{
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
        }]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }];
    };

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FlexLayoutModule, {
        imports: function imports() {
          return [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]];
        },
        exports: function exports() {
          return [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexLayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]],
          exports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]]
        }]
      }], function () {
        return [{
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]]
          }]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=flex-layout.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js ***!
    \************************************************************************/

  /*! exports provided: FlexModule, FlexStyleBuilder, FlexDirective, DefaultFlexDirective, FlexAlignStyleBuilder, FlexAlignDirective, DefaultFlexAlignDirective, FlexFillStyleBuilder, FlexFillDirective, FlexOffsetStyleBuilder, FlexOffsetDirective, DefaultFlexOffsetDirective, FlexOrderStyleBuilder, FlexOrderDirective, DefaultFlexOrderDirective, LayoutStyleBuilder, LayoutDirective, DefaultLayoutDirective, LayoutAlignStyleBuilder, LayoutAlignDirective, DefaultLayoutAlignDirective, LayoutGapStyleBuilder, LayoutGapDirective, DefaultLayoutGapDirective */

  /***/
  function node_modulesAngularFlexLayout__ivy_ngcc__Esm2015FlexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexModule", function () {
      return FlexModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexStyleBuilder", function () {
      return FlexStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexDirective", function () {
      return FlexDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultFlexDirective", function () {
      return DefaultFlexDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexAlignStyleBuilder", function () {
      return FlexAlignStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexAlignDirective", function () {
      return FlexAlignDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultFlexAlignDirective", function () {
      return DefaultFlexAlignDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexFillStyleBuilder", function () {
      return FlexFillStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexFillDirective", function () {
      return FlexFillDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexOffsetStyleBuilder", function () {
      return FlexOffsetStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexOffsetDirective", function () {
      return FlexOffsetDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultFlexOffsetDirective", function () {
      return DefaultFlexOffsetDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexOrderStyleBuilder", function () {
      return FlexOrderStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexOrderDirective", function () {
      return FlexOrderDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultFlexOrderDirective", function () {
      return DefaultFlexOrderDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutStyleBuilder", function () {
      return LayoutStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutDirective", function () {
      return LayoutDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultLayoutDirective", function () {
      return DefaultLayoutDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutAlignStyleBuilder", function () {
      return LayoutAlignStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutAlignDirective", function () {
      return LayoutAlignDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultLayoutAlignDirective", function () {
      return DefaultLayoutAlignDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutGapStyleBuilder", function () {
      return LayoutGapStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutGapDirective", function () {
      return LayoutGapDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultLayoutGapDirective", function () {
      return DefaultLayoutGapDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: utils/layout-validator.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     * @type {?}
     */


    var INLINE = 'inline';
    /** @type {?} */

    var LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
    /**
     * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
     * @param {?} value
     * @return {?}
     */

    function buildLayoutCSS(value) {
      var _validateValue3 = validateValue(value),
          _validateValue4 = _slicedToArray(_validateValue3, 3),
          direction = _validateValue4[0],
          wrap = _validateValue4[1],
          isInline = _validateValue4[2];

      return buildCSS(direction, wrap, isInline);
    }
    /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of 'row'
     * @param {?} value
     * @return {?}
     */


    function validateValue(value) {
      value = value ? value.toLowerCase() : '';

      var _value$split3 = value.split(' '),
          _value$split4 = _slicedToArray(_value$split3, 3),
          direction = _value$split4[0],
          wrap = _value$split4[1],
          inline = _value$split4[2]; // First value must be the `flex-direction`


      if (!LAYOUT_VALUES.find(
      /**
      * @param {?} x
      * @return {?}
      */
      function (x) {
        return x === direction;
      })) {
        direction = LAYOUT_VALUES[0];
      }

      if (wrap === INLINE) {
        wrap = inline !== INLINE ? inline : '';
        inline = INLINE;
      }

      return [direction, validateWrapValue(wrap), !!inline];
    }
    /**
     * Determine if the validated, flex-direction value specifies
     * a horizontal/row flow.
     * @param {?} value
     * @return {?}
     */


    function isFlowHorizontal(value) {
      var _validateValue5 = validateValue(value),
          _validateValue6 = _slicedToArray(_validateValue5, 1),
          flow = _validateValue6[0];

      return flow.indexOf('row') > -1;
    }
    /**
     * Convert layout-wrap='<value>' to expected flex-wrap style
     * @param {?} value
     * @return {?}
     */


    function validateWrapValue(value) {
      if (!!value) {
        switch (value.toLowerCase()) {
          case 'reverse':
          case 'wrap-reverse':
          case 'reverse-wrap':
            value = 'wrap-reverse';
            break;

          case 'no':
          case 'none':
          case 'nowrap':
            value = 'nowrap';
            break;
          // All other values fallback to 'wrap'

          default:
            value = 'wrap';
            break;
        }
      }

      return value;
    }
    /**
     * Build the CSS that should be assigned to the element instance
     * BUG:
     *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
     *      Use height instead if possible; height : <xxx>vh;
     *
     *  This way any padding or border specified on the child elements are
     *  laid out and drawn inside that element's specified width and height.
     * @param {?} direction
     * @param {?=} wrap
     * @param {?=} inline
     * @return {?}
     */


    function buildCSS(direction) {
      var wrap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var inline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
      };
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: flex/layout/layout.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var LayoutStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_7) {
      _inherits(LayoutStyleBuilder, _angular_flex_layout_7);

      var _super12 = _createSuper(LayoutStyleBuilder);

      function LayoutStyleBuilder() {
        _classCallCheck(this, LayoutStyleBuilder);

        return _super12.apply(this, arguments);
      }

      _createClass(LayoutStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @return {?}
         */
        value: function buildStyles(input) {
          return buildLayoutCSS(input);
        }
      }]);

      return LayoutStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    LayoutStyleBuilder.ɵfac = function LayoutStyleBuilder_Factory(t) {
      return ɵLayoutStyleBuilder_BaseFactory(t || LayoutStyleBuilder);
    };
    /** @nocollapse */


    LayoutStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function LayoutStyleBuilder_Factory() {
        return new LayoutStyleBuilder();
      },
      token: LayoutStyleBuilder,
      providedIn: "root"
    });

    var ɵLayoutStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](LayoutStyleBuilder);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /** @type {?} */


    var inputs = ['fxLayout', 'fxLayout.xs', 'fxLayout.sm', 'fxLayout.md', 'fxLayout.lg', 'fxLayout.xl', 'fxLayout.lt-sm', 'fxLayout.lt-md', 'fxLayout.lt-lg', 'fxLayout.lt-xl', 'fxLayout.gt-xs', 'fxLayout.gt-sm', 'fxLayout.gt-md', 'fxLayout.gt-lg'];
    /** @type {?} */

    var selector = "\n  [fxLayout], [fxLayout.xs], [fxLayout.sm], [fxLayout.md],\n  [fxLayout.lg], [fxLayout.xl], [fxLayout.lt-sm], [fxLayout.lt-md],\n  [fxLayout.lt-lg], [fxLayout.lt-xl], [fxLayout.gt-xs], [fxLayout.gt-sm],\n  [fxLayout.gt-md], [fxLayout.gt-lg]\n";
    /**
     * 'layout' flexbox styling directive
     * Defines the positioning flow direction for the child elements: row or column
     * Optional values: column or row (default)
     * @see https://css-tricks.com/almanac/properties/f/flex-direction/
     *
     */

    var LayoutDirective = /*#__PURE__*/function (_angular_flex_layout_8) {
      _inherits(LayoutDirective, _angular_flex_layout_8);

      var _super13 = _createSuper(LayoutDirective);

      /**
       * @param {?} elRef
       * @param {?} styleUtils
       * @param {?} styleBuilder
       * @param {?} marshal
       */
      function LayoutDirective(elRef, styleUtils, styleBuilder, marshal) {
        var _this36;

        _classCallCheck(this, LayoutDirective);

        _this36 = _super13.call(this, elRef, styleBuilder, styleUtils, marshal);
        _this36.DIRECTIVE_KEY = 'layout';
        _this36.styleCache = layoutCache;

        _this36.init();

        return _this36;
      }

      return LayoutDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

    LayoutDirective.ɵfac = function LayoutDirective_Factory(t) {
      return new (t || LayoutDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LayoutStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
    };

    LayoutDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: LayoutDirective,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    LayoutDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: LayoutStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: LayoutStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      }, null);
    })();

    var DefaultLayoutDirective = /*#__PURE__*/function (_LayoutDirective) {
      _inherits(DefaultLayoutDirective, _LayoutDirective);

      var _super14 = _createSuper(DefaultLayoutDirective);

      function DefaultLayoutDirective() {
        var _this37;

        _classCallCheck(this, DefaultLayoutDirective);

        _this37 = _super14.apply(this, arguments);
        _this37.inputs = inputs;
        return _this37;
      }

      return DefaultLayoutDirective;
    }(LayoutDirective);

    DefaultLayoutDirective.ɵfac = function DefaultLayoutDirective_Factory(t) {
      return ɵDefaultLayoutDirective_BaseFactory(t || DefaultLayoutDirective);
    };

    DefaultLayoutDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultLayoutDirective,
      selectors: [["", "fxLayout", ""], ["", "fxLayout.xs", ""], ["", "fxLayout.sm", ""], ["", "fxLayout.md", ""], ["", "fxLayout.lg", ""], ["", "fxLayout.xl", ""], ["", "fxLayout.lt-sm", ""], ["", "fxLayout.lt-md", ""], ["", "fxLayout.lt-lg", ""], ["", "fxLayout.lt-xl", ""], ["", "fxLayout.gt-xs", ""], ["", "fxLayout.gt-sm", ""], ["", "fxLayout.gt-md", ""], ["", "fxLayout.gt-lg", ""]],
      inputs: {
        fxLayout: "fxLayout",
        "fxLayout.xs": "fxLayout.xs",
        "fxLayout.sm": "fxLayout.sm",
        "fxLayout.md": "fxLayout.md",
        "fxLayout.lg": "fxLayout.lg",
        "fxLayout.xl": "fxLayout.xl",
        "fxLayout.lt-sm": "fxLayout.lt-sm",
        "fxLayout.lt-md": "fxLayout.lt-md",
        "fxLayout.lt-lg": "fxLayout.lt-lg",
        "fxLayout.lt-xl": "fxLayout.lt-xl",
        "fxLayout.gt-xs": "fxLayout.gt-xs",
        "fxLayout.gt-sm": "fxLayout.gt-sm",
        "fxLayout.gt-md": "fxLayout.gt-md",
        "fxLayout.gt-lg": "fxLayout.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultLayoutDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultLayoutDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultLayoutDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector,
          inputs: inputs
        }]
      }], null, null);
    })();
    /** @type {?} */


    var layoutCache = new Map();
    /**
     * @fileoverview added by tsickle
     * Generated from: flex/layout-gap/layout-gap.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var CLEAR_MARGIN_CSS = {
      'margin-left': null,
      'margin-right': null,
      'margin-top': null,
      'margin-bottom': null
    };

    var LayoutGapStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_9) {
      _inherits(LayoutGapStyleBuilder, _angular_flex_layout_9);

      var _super15 = _createSuper(LayoutGapStyleBuilder);

      /**
       * @param {?} _styler
       */
      function LayoutGapStyleBuilder(_styler) {
        var _this38;

        _classCallCheck(this, LayoutGapStyleBuilder);

        _this38 = _super15.call(this);
        _this38._styler = _styler;
        return _this38;
      }
      /**
       * @param {?} gapValue
       * @param {?} parent
       * @return {?}
       */


      _createClass(LayoutGapStyleBuilder, [{
        key: "buildStyles",
        value: function buildStyles(gapValue, parent) {
          if (gapValue.endsWith(GRID_SPECIFIER)) {
            gapValue = gapValue.slice(0, gapValue.indexOf(GRID_SPECIFIER)); // Add the margin to the host element

            return buildGridMargin(gapValue, parent.directionality);
          } else {
            return {};
          }
        }
        /**
         * @param {?} gapValue
         * @param {?} _styles
         * @param {?} parent
         * @return {?}
         */

      }, {
        key: "sideEffect",
        value: function sideEffect(gapValue, _styles, parent) {
          /** @type {?} */
          var items = parent.items;

          if (gapValue.endsWith(GRID_SPECIFIER)) {
            gapValue = gapValue.slice(0, gapValue.indexOf(GRID_SPECIFIER)); // For each `element` children, set the padding

            /** @type {?} */

            var paddingStyles = buildGridPadding(gapValue, parent.directionality);

            this._styler.applyStyleToElements(paddingStyles, parent.items);
          } else {
            /** @type {?} */
            var lastItem =
            /** @type {?} */
            items.pop(); // For each `element` children EXCEPT the last,
            // set the margin right/bottom styles...

            /** @type {?} */

            var gapCss = buildGapCSS(gapValue, parent);

            this._styler.applyStyleToElements(gapCss, items); // Clear all gaps for all visible elements


            this._styler.applyStyleToElements(CLEAR_MARGIN_CSS, [lastItem]);
          }
        }
      }]);

      return LayoutGapStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    LayoutGapStyleBuilder.ɵfac = function LayoutGapStyleBuilder_Factory(t) {
      return new (t || LayoutGapStyleBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]));
    };
    /** @nocollapse */


    LayoutGapStyleBuilder.ctorParameters = function () {
      return [{
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }];
    };
    /** @nocollapse */


    LayoutGapStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function LayoutGapStyleBuilder_Factory() {
        return new LayoutGapStyleBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]));
      },
      token: LayoutGapStyleBuilder,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutGapStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }];
      }, null);
    })();
    /** @type {?} */


    var inputs$1 = ['fxLayoutGap', 'fxLayoutGap.xs', 'fxLayoutGap.sm', 'fxLayoutGap.md', 'fxLayoutGap.lg', 'fxLayoutGap.xl', 'fxLayoutGap.lt-sm', 'fxLayoutGap.lt-md', 'fxLayoutGap.lt-lg', 'fxLayoutGap.lt-xl', 'fxLayoutGap.gt-xs', 'fxLayoutGap.gt-sm', 'fxLayoutGap.gt-md', 'fxLayoutGap.gt-lg'];
    /** @type {?} */

    var selector$1 = "\n  [fxLayoutGap], [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md],\n  [fxLayoutGap.lg], [fxLayoutGap.xl], [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md],\n  [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl], [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm],\n  [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]\n";
    /**
     * 'layout-padding' styling directive
     *  Defines padding of child elements in a layout container
     */

    var LayoutGapDirective = /*#__PURE__*/function (_angular_flex_layout_10) {
      _inherits(LayoutGapDirective, _angular_flex_layout_10);

      var _super16 = _createSuper(LayoutGapDirective);

      /**
       * @param {?} elRef
       * @param {?} zone
       * @param {?} directionality
       * @param {?} styleUtils
       * @param {?} styleBuilder
       * @param {?} marshal
       */
      function LayoutGapDirective(elRef, zone, directionality, styleUtils, styleBuilder, marshal) {
        var _this39;

        _classCallCheck(this, LayoutGapDirective);

        _this39 = _super16.call(this, elRef, styleBuilder, styleUtils, marshal);
        _this39.zone = zone;
        _this39.directionality = directionality;
        _this39.styleUtils = styleUtils;
        _this39.layout = 'row'; // default flex-direction
        // default flex-direction

        _this39.DIRECTIVE_KEY = 'layout-gap';
        _this39.observerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /** @type {?} */

        var extraTriggers = [_this39.directionality.change, _this39.observerSubject.asObservable()];

        _this39.init(extraTriggers);

        _this39.marshal.trackValue(_this39.nativeElement, 'layout').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this39.destroySubject)).subscribe(_this39.onLayoutChange.bind(_assertThisInitialized(_this39)));

        return _this39;
      }
      /**
       * Special accessor to query for all child 'element' nodes regardless of type, class, etc
       * @protected
       * @return {?}
       */


      _createClass(LayoutGapDirective, [{
        key: "ngAfterContentInit",
        // *********************************************
        // Lifecycle Methods
        // *********************************************

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          this.buildChildObservable();
          this.triggerUpdate();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(LayoutGapDirective.prototype), "ngOnDestroy", this).call(this);

          if (this.observer) {
            this.observer.disconnect();
          }
        } // *********************************************
        // Protected methods
        // *********************************************

        /**
         * Cache the parent container 'flex-direction' and update the 'margin' styles
         * @protected
         * @param {?} matcher
         * @return {?}
         */

      }, {
        key: "onLayoutChange",
        value: function onLayoutChange(matcher) {
          var _this40 = this;

          /** @type {?} */
          var layout = matcher.value; // Make sure to filter out 'wrap' option

          /** @type {?} */

          var direction = layout.split(' ');
          this.layout = direction[0];

          if (!LAYOUT_VALUES.find(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x === _this40.layout;
          })) {
            this.layout = 'row';
          }

          this.triggerUpdate();
        }
        /**
         *
         * @protected
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "updateWithValue",
        value: function updateWithValue(value) {
          var _this41 = this;

          // Gather all non-hidden Element nodes

          /** @type {?} */
          var items = this.childrenNodes.filter(
          /**
          * @param {?} el
          * @return {?}
          */
          function (el) {
            return el.nodeType === 1 && _this41.willDisplay(el);
          }).sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            /** @type {?} */
            var orderA = +_this41.styler.lookupStyle(a, 'order');
            /** @type {?} */

            var orderB = +_this41.styler.lookupStyle(b, 'order');

            if (isNaN(orderA) || isNaN(orderB) || orderA === orderB) {
              return 0;
            } else {
              return orderA > orderB ? 1 : -1;
            }
          });

          if (items.length > 0) {
            /** @type {?} */
            var directionality = this.directionality.value;
            /** @type {?} */

            var layout = this.layout;

            if (layout === 'row' && directionality === 'rtl') {
              this.styleCache = layoutGapCacheRowRtl;
            } else if (layout === 'row' && directionality !== 'rtl') {
              this.styleCache = layoutGapCacheRowLtr;
            } else if (layout === 'column' && directionality === 'rtl') {
              this.styleCache = layoutGapCacheColumnRtl;
            } else if (layout === 'column' && directionality !== 'rtl') {
              this.styleCache = layoutGapCacheColumnLtr;
            }

            this.addStyles(value, {
              directionality: directionality,
              items: items,
              layout: layout
            });
          }
        }
        /**
         * We need to override clearStyles because in most cases mru isn't populated
         * @protected
         * @return {?}
         */

      }, {
        key: "clearStyles",
        value: function clearStyles() {
          /** @type {?} */
          var gridMode = Object.keys(this.mru).length > 0;
          /** @type {?} */

          var childrenStyle = gridMode ? 'padding' : getMarginType(this.directionality.value, this.layout); // If there are styles on the parent remove them

          if (gridMode) {
            _get(_getPrototypeOf(LayoutGapDirective.prototype), "clearStyles", this).call(this);
          } // Then remove the children styles too


          this.styleUtils.applyStyleToElements(_defineProperty({}, childrenStyle, ''), this.childrenNodes);
        }
        /**
         * Determine if an element will show or hide based on current activation
         * @protected
         * @param {?} source
         * @return {?}
         */

      }, {
        key: "willDisplay",
        value: function willDisplay(source) {
          /** @type {?} */
          var value = this.marshal.getValue(source, 'show-hide');
          return value === true || value === undefined && this.styleUtils.lookupStyle(source, 'display') !== 'none';
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "buildChildObservable",
        value: function buildChildObservable() {
          var _this42 = this;

          this.zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            if (typeof MutationObserver !== 'undefined') {
              _this42.observer = new MutationObserver(
              /**
              * @param {?} mutations
              * @return {?}
              */
              function (mutations) {
                /** @type {?} */
                var validatedChanges =
                /**
                * @param {?} it
                * @return {?}
                */
                function validatedChanges(it) {
                  return it.addedNodes && it.addedNodes.length > 0 || it.removedNodes && it.removedNodes.length > 0;
                }; // update gap styles only for child 'added' or 'removed' events


                if (mutations.some(validatedChanges)) {
                  _this42.observerSubject.next();
                }
              });

              _this42.observer.observe(_this42.nativeElement, {
                childList: true
              });
            }
          });
        }
      }, {
        key: "childrenNodes",
        get: function get() {
          /** @type {?} */
          var obj = this.nativeElement.children;
          /** @type {?} */

          var buffer = []; // iterate backwards ensuring that length is an UInt32

          for (var i = obj.length; i--;) {
            buffer[i] = obj[i];
          }

          return buffer;
        }
      }]);

      return LayoutGapDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

    LayoutGapDirective.ɵfac = function LayoutGapDirective_Factory(t) {
      return new (t || LayoutGapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LayoutGapStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
    };

    LayoutGapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: LayoutGapDirective,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    LayoutGapDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: LayoutGapStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutGapDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: LayoutGapStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      }, null);
    })();

    var DefaultLayoutGapDirective = /*#__PURE__*/function (_LayoutGapDirective) {
      _inherits(DefaultLayoutGapDirective, _LayoutGapDirective);

      var _super17 = _createSuper(DefaultLayoutGapDirective);

      function DefaultLayoutGapDirective() {
        var _this43;

        _classCallCheck(this, DefaultLayoutGapDirective);

        _this43 = _super17.apply(this, arguments);
        _this43.inputs = inputs$1;
        return _this43;
      }

      return DefaultLayoutGapDirective;
    }(LayoutGapDirective);

    DefaultLayoutGapDirective.ɵfac = function DefaultLayoutGapDirective_Factory(t) {
      return ɵDefaultLayoutGapDirective_BaseFactory(t || DefaultLayoutGapDirective);
    };

    DefaultLayoutGapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultLayoutGapDirective,
      selectors: [["", "fxLayoutGap", ""], ["", "fxLayoutGap.xs", ""], ["", "fxLayoutGap.sm", ""], ["", "fxLayoutGap.md", ""], ["", "fxLayoutGap.lg", ""], ["", "fxLayoutGap.xl", ""], ["", "fxLayoutGap.lt-sm", ""], ["", "fxLayoutGap.lt-md", ""], ["", "fxLayoutGap.lt-lg", ""], ["", "fxLayoutGap.lt-xl", ""], ["", "fxLayoutGap.gt-xs", ""], ["", "fxLayoutGap.gt-sm", ""], ["", "fxLayoutGap.gt-md", ""], ["", "fxLayoutGap.gt-lg", ""]],
      inputs: {
        fxLayoutGap: "fxLayoutGap",
        "fxLayoutGap.xs": "fxLayoutGap.xs",
        "fxLayoutGap.sm": "fxLayoutGap.sm",
        "fxLayoutGap.md": "fxLayoutGap.md",
        "fxLayoutGap.lg": "fxLayoutGap.lg",
        "fxLayoutGap.xl": "fxLayoutGap.xl",
        "fxLayoutGap.lt-sm": "fxLayoutGap.lt-sm",
        "fxLayoutGap.lt-md": "fxLayoutGap.lt-md",
        "fxLayoutGap.lt-lg": "fxLayoutGap.lt-lg",
        "fxLayoutGap.lt-xl": "fxLayoutGap.lt-xl",
        "fxLayoutGap.gt-xs": "fxLayoutGap.gt-xs",
        "fxLayoutGap.gt-sm": "fxLayoutGap.gt-sm",
        "fxLayoutGap.gt-md": "fxLayoutGap.gt-md",
        "fxLayoutGap.gt-lg": "fxLayoutGap.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultLayoutGapDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultLayoutGapDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultLayoutGapDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector$1,
          inputs: inputs$1
        }]
      }], null, null);
    })();
    /** @type {?} */


    var layoutGapCacheRowRtl = new Map();
    /** @type {?} */

    var layoutGapCacheColumnRtl = new Map();
    /** @type {?} */

    var layoutGapCacheRowLtr = new Map();
    /** @type {?} */

    var layoutGapCacheColumnLtr = new Map();
    /** @type {?} */

    var GRID_SPECIFIER = ' grid';
    /**
     * @param {?} value
     * @param {?} directionality
     * @return {?}
     */

    function buildGridPadding(value, directionality) {
      var _value$split5 = value.split(' '),
          _value$split6 = _slicedToArray(_value$split5, 2),
          between = _value$split6[0],
          below = _value$split6[1];
      /** @type {?} */


      var bottom = below || between;
      /** @type {?} */

      var paddingRight = '0px';
      /** @type {?} */

      var paddingBottom = bottom;
      /** @type {?} */

      var paddingLeft = '0px';

      if (directionality === 'rtl') {
        paddingLeft = between;
      } else {
        paddingRight = between;
      }

      return {
        'padding': "0px ".concat(paddingRight, " ").concat(paddingBottom, " ").concat(paddingLeft)
      };
    }
    /**
     * @param {?} value
     * @param {?} directionality
     * @return {?}
     */


    function buildGridMargin(value, directionality) {
      var _value$split7 = value.split(' '),
          _value$split8 = _slicedToArray(_value$split7, 2),
          between = _value$split8[0],
          below = _value$split8[1];
      /** @type {?} */


      var bottom = below || between;
      /** @type {?} */

      var minus =
      /**
      * @param {?} str
      * @return {?}
      */
      function minus(str) {
        return "-".concat(str);
      };
      /** @type {?} */


      var marginRight = '0px';
      /** @type {?} */

      var marginBottom = minus(bottom);
      /** @type {?} */

      var marginLeft = '0px';

      if (directionality === 'rtl') {
        marginLeft = minus(between);
      } else {
        marginRight = minus(between);
      }

      return {
        'margin': "0px ".concat(marginRight, " ").concat(marginBottom, " ").concat(marginLeft)
      };
    }
    /**
     * @param {?} directionality
     * @param {?} layout
     * @return {?}
     */


    function getMarginType(directionality, layout) {
      switch (layout) {
        case 'column':
          return 'margin-bottom';

        case 'column-reverse':
          return 'margin-top';

        case 'row':
          return directionality === 'rtl' ? 'margin-left' : 'margin-right';

        case 'row-reverse':
          return directionality === 'rtl' ? 'margin-right' : 'margin-left';

        default:
          return directionality === 'rtl' ? 'margin-left' : 'margin-right';
      }
    }
    /**
     * @param {?} gapValue
     * @param {?} parent
     * @return {?}
     */


    function buildGapCSS(gapValue, parent) {
      /** @type {?} */
      var key = getMarginType(parent.directionality, parent.layout);
      /** @type {?} */

      var margins = Object.assign({}, CLEAR_MARGIN_CSS);
      margins[key] = gapValue;
      return margins;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: utils/object-extend.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Extends an object with the *enumerable* and *own* properties of one or more source objects,
     * similar to Object.assign.
     *
     * @param {?} dest The object which will have properties copied to it.
     * @param {...?} sources The source objects from which properties will be copied.
     * @return {?}
     */


    function extendObject(dest) {
      if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
      }

      for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        sources[_key2 - 1] = arguments[_key2];
      }

      for (var _i3 = 0, _sources2 = sources; _i3 < _sources2.length; _i3++) {
        var source = _sources2[_i3];

        if (source != null) {
          for (var key in source) {
            if (source.hasOwnProperty(key)) {
              dest[key] = source[key];
            }
          }
        }
      }

      return dest;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: flex/flex/flex.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FlexStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_11) {
      _inherits(FlexStyleBuilder, _angular_flex_layout_11);

      var _super18 = _createSuper(FlexStyleBuilder);

      /**
       * @param {?} layoutConfig
       */
      function FlexStyleBuilder(layoutConfig) {
        var _this44;

        _classCallCheck(this, FlexStyleBuilder);

        _this44 = _super18.call(this);
        _this44.layoutConfig = layoutConfig;
        return _this44;
      }
      /**
       * @param {?} input
       * @param {?} parent
       * @return {?}
       */


      _createClass(FlexStyleBuilder, [{
        key: "buildStyles",
        value: function buildStyles(input, parent) {
          var _input$split = input.split(' '),
              _input$split2 = _toArray(_input$split),
              grow = _input$split2[0],
              shrink = _input$split2[1],
              basisParts = _input$split2.slice(2);
          /** @type {?} */


          var basis = basisParts.join(' '); // The flex-direction of this element's flex container. Defaults to 'row'.

          /** @type {?} */

          var direction = parent.direction.indexOf('column') > -1 ? 'column' : 'row';
          /** @type {?} */

          var max = isFlowHorizontal(direction) ? 'max-width' : 'max-height';
          /** @type {?} */

          var min = isFlowHorizontal(direction) ? 'min-width' : 'min-height';
          /** @type {?} */

          var hasCalc = String(basis).indexOf('calc') > -1;
          /** @type {?} */

          var usingCalc = hasCalc || basis === 'auto';
          /** @type {?} */

          var isPercent = String(basis).indexOf('%') > -1 && !hasCalc;
          /** @type {?} */

          var hasUnits = String(basis).indexOf('px') > -1 || String(basis).indexOf('rem') > -1 || String(basis).indexOf('em') > -1 || String(basis).indexOf('vw') > -1 || String(basis).indexOf('vh') > -1;
          /** @type {?} */

          var isValue = hasCalc || hasUnits;
          grow = grow == '0' ? 0 : grow;
          shrink = shrink == '0' ? 0 : shrink; // make box inflexible when shrink and grow are both zero
          // should not set a min when the grow is zero
          // should not set a max when the shrink is zero

          /** @type {?} */

          var isFixed = !grow && !shrink;
          /** @type {?} */

          var css = {}; // flex-basis allows you to specify the initial/starting main-axis size of the element,
          // before anything else is computed. It can either be a percentage or an absolute value.
          // It is, however, not the breaking point for flex-grow/shrink properties
          //
          // flex-grow can be seen as this:
          //   0: Do not stretch. Either size to element's content width, or obey 'flex-basis'.
          //   1: (Default value). Stretch; will be the same size to all other flex items on
          //       the same row since they have a default value of 1.
          //   ≥2 (integer n): Stretch. Will be n times the size of other elements
          //      with 'flex-grow: 1' on the same row.
          // Use `null` to clear existing styles.

          /** @type {?} */

          var clearStyles = {
            'max-width': null,
            'max-height': null,
            'min-width': null,
            'min-height': null
          };

          switch (basis || '') {
            case '':
              /** @type {?} */
              var useColumnBasisZero = this.layoutConfig.useColumnBasisZero !== false;
              basis = direction === 'row' ? '0%' : useColumnBasisZero ? '0.000000001px' : 'auto';
              break;

            case 'initial': // default

            case 'nogrow':
              grow = 0;
              basis = 'auto';
              break;

            case 'grow':
              basis = '100%';
              break;

            case 'noshrink':
              shrink = 0;
              basis = 'auto';
              break;

            case 'auto':
              break;

            case 'none':
              grow = 0;
              shrink = 0;
              basis = 'auto';
              break;

            default:
              // Defaults to percentage sizing unless `px` is explicitly set
              if (!isValue && !isPercent && !isNaN(
              /** @type {?} */
              basis)) {
                basis = basis + '%';
              } // Fix for issue 280


              if (basis === '0%') {
                isValue = true;
              }

              if (basis === '0px') {
                basis = '0%';
              } // fix issue #5345


              if (hasCalc) {
                css = extendObject(clearStyles, {
                  'flex-grow': grow,
                  'flex-shrink': shrink,
                  'flex-basis': isValue ? basis : '100%'
                });
              } else {
                css = extendObject(clearStyles, {
                  'flex': "".concat(grow, " ").concat(shrink, " ").concat(isValue ? basis : '100%')
                });
              }

              break;
          }

          if (!(css['flex'] || css['flex-grow'])) {
            if (hasCalc) {
              css = extendObject(clearStyles, {
                'flex-grow': grow,
                'flex-shrink': shrink,
                'flex-basis': basis
              });
            } else {
              css = extendObject(clearStyles, {
                'flex': "".concat(grow, " ").concat(shrink, " ").concat(basis)
              });
            }
          } // Fix for issues 277, 534, and 728


          if (basis !== '0%' && basis !== '0px' && basis !== '0.000000001px' && basis !== 'auto') {
            css[min] = isFixed || isValue && grow ? basis : null;
            css[max] = isFixed || !usingCalc && shrink ? basis : null;
          } // Fix for issue 528


          if (!css[min] && !css[max]) {
            if (hasCalc) {
              css = extendObject(clearStyles, {
                'flex-grow': grow,
                'flex-shrink': shrink,
                'flex-basis': basis
              });
            } else {
              css = extendObject(clearStyles, {
                'flex': "".concat(grow, " ").concat(shrink, " ").concat(basis)
              });
            }
          } else {
            // Fix for issue 660
            if (parent.hasWrap) {
              css[hasCalc ? 'flex-basis' : 'flex'] = css[max] ? hasCalc ? css[max] : "".concat(grow, " ").concat(shrink, " ").concat(css[max]) : hasCalc ? css[min] : "".concat(grow, " ").concat(shrink, " ").concat(css[min]);
            }
          }

          return (
            /** @type {?} */
            extendObject(css, {
              'box-sizing': 'border-box'
            })
          );
        }
      }]);

      return FlexStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    FlexStyleBuilder.ɵfac = function FlexStyleBuilder_Factory(t) {
      return new (t || FlexStyleBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]));
    };
    /** @nocollapse */


    FlexStyleBuilder.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]]
        }]
      }];
    };
    /** @nocollapse */


    FlexStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function FlexStyleBuilder_Factory() {
        return new FlexStyleBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]));
      },
      token: FlexStyleBuilder,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]]
          }]
        }];
      }, null);
    })();
    /** @type {?} */


    var inputs$2 = ['fxFlex', 'fxFlex.xs', 'fxFlex.sm', 'fxFlex.md', 'fxFlex.lg', 'fxFlex.xl', 'fxFlex.lt-sm', 'fxFlex.lt-md', 'fxFlex.lt-lg', 'fxFlex.lt-xl', 'fxFlex.gt-xs', 'fxFlex.gt-sm', 'fxFlex.gt-md', 'fxFlex.gt-lg'];
    /** @type {?} */

    var selector$2 = "\n  [fxFlex], [fxFlex.xs], [fxFlex.sm], [fxFlex.md],\n  [fxFlex.lg], [fxFlex.xl], [fxFlex.lt-sm], [fxFlex.lt-md],\n  [fxFlex.lt-lg], [fxFlex.lt-xl], [fxFlex.gt-xs], [fxFlex.gt-sm],\n  [fxFlex.gt-md], [fxFlex.gt-lg]\n";
    /**
     * Directive to control the size of a flex item using flex-basis, flex-grow, and flex-shrink.
     * Corresponds to the css `flex` shorthand property.
     *
     * @see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
     */

    var FlexDirective = /*#__PURE__*/function (_angular_flex_layout_12) {
      _inherits(FlexDirective, _angular_flex_layout_12);

      var _super19 = _createSuper(FlexDirective);

      /**
       * @param {?} elRef
       * @param {?} styleUtils
       * @param {?} layoutConfig
       * @param {?} styleBuilder
       * @param {?} marshal
       */
      function FlexDirective(elRef, styleUtils, layoutConfig, styleBuilder, marshal) {
        var _this45;

        _classCallCheck(this, FlexDirective);

        _this45 = _super19.call(this, elRef, styleBuilder, styleUtils, marshal);
        _this45.layoutConfig = layoutConfig;
        _this45.marshal = marshal;
        _this45.DIRECTIVE_KEY = 'flex';
        _this45.direction = undefined;
        _this45.wrap = undefined;
        _this45.flexGrow = '1';
        _this45.flexShrink = '1';

        _this45.init();

        return _this45;
      }
      /**
       * @return {?}
       */


      _createClass(FlexDirective, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          if (this.parentElement) {
            this.marshal.trackValue(this.parentElement, 'layout').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroySubject)).subscribe(this.onLayoutChange.bind(this));
            this.marshal.trackValue(this.nativeElement, 'layout-align').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroySubject)).subscribe(this.triggerReflow.bind(this));
          }
        }
        /**
         * Caches the parent container's 'flex-direction' and updates the element's style.
         * Used as a handler for layout change events from the parent flex container.
         * @protected
         * @param {?} matcher
         * @return {?}
         */

      }, {
        key: "onLayoutChange",
        value: function onLayoutChange(matcher) {
          /** @type {?} */
          var layout = matcher.value;
          /** @type {?} */

          var layoutParts = layout.split(' ');
          this.direction = layoutParts[0];
          this.wrap = layoutParts[1] !== undefined && layoutParts[1] === 'wrap';
          this.triggerUpdate();
        }
        /**
         * Input to this is exclusively the basis input value
         * @protected
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "updateWithValue",
        value: function updateWithValue(value) {
          /** @type {?} */
          var addFlexToParent = this.layoutConfig.addFlexToParent !== false;

          if (this.direction === undefined) {
            this.direction = this.getFlexFlowDirection(
            /** @type {?} */
            this.parentElement, addFlexToParent);
          }

          if (this.wrap === undefined) {
            this.wrap = this.hasWrap(
            /** @type {?} */
            this.parentElement);
          }
          /** @type {?} */


          var direction = this.direction;
          /** @type {?} */

          var isHorizontal = direction.startsWith('row');
          /** @type {?} */

          var hasWrap = this.wrap;

          if (isHorizontal && hasWrap) {
            this.styleCache = flexRowWrapCache;
          } else if (isHorizontal && !hasWrap) {
            this.styleCache = flexRowCache;
          } else if (!isHorizontal && hasWrap) {
            this.styleCache = flexColumnWrapCache;
          } else if (!isHorizontal && !hasWrap) {
            this.styleCache = flexColumnCache;
          }
          /** @type {?} */


          var basis = String(value).replace(';', '');
          /** @type {?} */

          var parts = Object(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["validateBasis"])(basis, this.flexGrow, this.flexShrink);
          this.addStyles(parts.join(' '), {
            direction: direction,
            hasWrap: hasWrap
          });
        }
        /**
         * Trigger a style reflow, usually based on a shrink/grow input event
         * @protected
         * @return {?}
         */

      }, {
        key: "triggerReflow",
        value: function triggerReflow() {
          /** @type {?} */
          var activatedValue = this.activatedValue;

          if (activatedValue !== undefined) {
            /** @type {?} */
            var parts = Object(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["validateBasis"])(activatedValue + '', this.flexGrow, this.flexShrink);
            this.marshal.updateElement(this.nativeElement, this.DIRECTIVE_KEY, parts.join(' '));
          }
        }
      }, {
        key: "shrink",
        get: function get() {
          return this.flexShrink;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.flexShrink = value || '1';
          this.triggerReflow();
        }
        /**
         * @return {?}
         */

      }, {
        key: "grow",
        get: function get() {
          return this.flexGrow;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.flexGrow = value || '1';
          this.triggerReflow();
        }
      }]);

      return FlexDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

    FlexDirective.ɵfac = function FlexDirective_Factory(t) {
      return new (t || FlexDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FlexStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
    };

    FlexDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FlexDirective,
      inputs: {
        shrink: ["fxShrink", "shrink"],
        grow: ["fxGrow", "grow"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    FlexDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]]
        }]
      }, {
        type: FlexStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };

    FlexDirective.propDecorators = {
      shrink: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['fxShrink']
      }],
      grow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['fxGrow']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["LAYOUT_CONFIG"]]
          }]
        }, {
          type: FlexStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      }, {
        shrink: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['fxShrink']
        }],
        grow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['fxGrow']
        }]
      });
    })();

    var DefaultFlexDirective = /*#__PURE__*/function (_FlexDirective) {
      _inherits(DefaultFlexDirective, _FlexDirective);

      var _super20 = _createSuper(DefaultFlexDirective);

      function DefaultFlexDirective() {
        var _this46;

        _classCallCheck(this, DefaultFlexDirective);

        _this46 = _super20.apply(this, arguments);
        _this46.inputs = inputs$2;
        return _this46;
      }

      return DefaultFlexDirective;
    }(FlexDirective);

    DefaultFlexDirective.ɵfac = function DefaultFlexDirective_Factory(t) {
      return ɵDefaultFlexDirective_BaseFactory(t || DefaultFlexDirective);
    };

    DefaultFlexDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultFlexDirective,
      selectors: [["", "fxFlex", ""], ["", "fxFlex.xs", ""], ["", "fxFlex.sm", ""], ["", "fxFlex.md", ""], ["", "fxFlex.lg", ""], ["", "fxFlex.xl", ""], ["", "fxFlex.lt-sm", ""], ["", "fxFlex.lt-md", ""], ["", "fxFlex.lt-lg", ""], ["", "fxFlex.lt-xl", ""], ["", "fxFlex.gt-xs", ""], ["", "fxFlex.gt-sm", ""], ["", "fxFlex.gt-md", ""], ["", "fxFlex.gt-lg", ""]],
      inputs: {
        fxFlex: "fxFlex",
        "fxFlex.xs": "fxFlex.xs",
        "fxFlex.sm": "fxFlex.sm",
        "fxFlex.md": "fxFlex.md",
        "fxFlex.lg": "fxFlex.lg",
        "fxFlex.xl": "fxFlex.xl",
        "fxFlex.lt-sm": "fxFlex.lt-sm",
        "fxFlex.lt-md": "fxFlex.lt-md",
        "fxFlex.lt-lg": "fxFlex.lt-lg",
        "fxFlex.lt-xl": "fxFlex.lt-xl",
        "fxFlex.gt-xs": "fxFlex.gt-xs",
        "fxFlex.gt-sm": "fxFlex.gt-sm",
        "fxFlex.gt-md": "fxFlex.gt-md",
        "fxFlex.gt-lg": "fxFlex.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultFlexDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultFlexDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultFlexDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          inputs: inputs$2,
          selector: selector$2
        }]
      }], null, null);
    })();
    /** @type {?} */


    var flexRowCache = new Map();
    /** @type {?} */

    var flexColumnCache = new Map();
    /** @type {?} */

    var flexRowWrapCache = new Map();
    /** @type {?} */

    var flexColumnWrapCache = new Map();
    /**
     * @fileoverview added by tsickle
     * Generated from: flex/flex-order/flex-order.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FlexOrderStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_13) {
      _inherits(FlexOrderStyleBuilder, _angular_flex_layout_13);

      var _super21 = _createSuper(FlexOrderStyleBuilder);

      function FlexOrderStyleBuilder() {
        _classCallCheck(this, FlexOrderStyleBuilder);

        return _super21.apply(this, arguments);
      }

      _createClass(FlexOrderStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} value
         * @return {?}
         */
        value: function buildStyles(value) {
          return {
            order: value && parseInt(value, 10) || ''
          };
        }
      }]);

      return FlexOrderStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    FlexOrderStyleBuilder.ɵfac = function FlexOrderStyleBuilder_Factory(t) {
      return ɵFlexOrderStyleBuilder_BaseFactory(t || FlexOrderStyleBuilder);
    };
    /** @nocollapse */


    FlexOrderStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function FlexOrderStyleBuilder_Factory() {
        return new FlexOrderStyleBuilder();
      },
      token: FlexOrderStyleBuilder,
      providedIn: "root"
    });

    var ɵFlexOrderStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FlexOrderStyleBuilder);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexOrderStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /** @type {?} */


    var inputs$3 = ['fxFlexOrder', 'fxFlexOrder.xs', 'fxFlexOrder.sm', 'fxFlexOrder.md', 'fxFlexOrder.lg', 'fxFlexOrder.xl', 'fxFlexOrder.lt-sm', 'fxFlexOrder.lt-md', 'fxFlexOrder.lt-lg', 'fxFlexOrder.lt-xl', 'fxFlexOrder.gt-xs', 'fxFlexOrder.gt-sm', 'fxFlexOrder.gt-md', 'fxFlexOrder.gt-lg'];
    /** @type {?} */

    var selector$3 = "\n  [fxFlexOrder], [fxFlexOrder.xs], [fxFlexOrder.sm], [fxFlexOrder.md],\n  [fxFlexOrder.lg], [fxFlexOrder.xl], [fxFlexOrder.lt-sm], [fxFlexOrder.lt-md],\n  [fxFlexOrder.lt-lg], [fxFlexOrder.lt-xl], [fxFlexOrder.gt-xs], [fxFlexOrder.gt-sm],\n  [fxFlexOrder.gt-md], [fxFlexOrder.gt-lg]\n";
    /**
     * 'flex-order' flexbox styling directive
     * Configures the positional ordering of the element in a sorted layout container
     * @see https://css-tricks.com/almanac/properties/o/order/
     */

    var FlexOrderDirective = /*#__PURE__*/function (_angular_flex_layout_14) {
      _inherits(FlexOrderDirective, _angular_flex_layout_14);

      var _super22 = _createSuper(FlexOrderDirective);

      /**
       * @param {?} elRef
       * @param {?} styleUtils
       * @param {?} styleBuilder
       * @param {?} marshal
       */
      function FlexOrderDirective(elRef, styleUtils, styleBuilder, marshal) {
        var _this47;

        _classCallCheck(this, FlexOrderDirective);

        _this47 = _super22.call(this, elRef, styleBuilder, styleUtils, marshal);
        _this47.DIRECTIVE_KEY = 'flex-order';
        _this47.styleCache = flexOrderCache;

        _this47.init();

        return _this47;
      }

      return FlexOrderDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

    FlexOrderDirective.ɵfac = function FlexOrderDirective_Factory(t) {
      return new (t || FlexOrderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FlexOrderStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
    };

    FlexOrderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FlexOrderDirective,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    FlexOrderDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: FlexOrderStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexOrderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: FlexOrderStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      }, null);
    })();
    /** @type {?} */


    var flexOrderCache = new Map();

    var DefaultFlexOrderDirective = /*#__PURE__*/function (_FlexOrderDirective) {
      _inherits(DefaultFlexOrderDirective, _FlexOrderDirective);

      var _super23 = _createSuper(DefaultFlexOrderDirective);

      function DefaultFlexOrderDirective() {
        var _this48;

        _classCallCheck(this, DefaultFlexOrderDirective);

        _this48 = _super23.apply(this, arguments);
        _this48.inputs = inputs$3;
        return _this48;
      }

      return DefaultFlexOrderDirective;
    }(FlexOrderDirective);

    DefaultFlexOrderDirective.ɵfac = function DefaultFlexOrderDirective_Factory(t) {
      return ɵDefaultFlexOrderDirective_BaseFactory(t || DefaultFlexOrderDirective);
    };

    DefaultFlexOrderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultFlexOrderDirective,
      selectors: [["", "fxFlexOrder", ""], ["", "fxFlexOrder.xs", ""], ["", "fxFlexOrder.sm", ""], ["", "fxFlexOrder.md", ""], ["", "fxFlexOrder.lg", ""], ["", "fxFlexOrder.xl", ""], ["", "fxFlexOrder.lt-sm", ""], ["", "fxFlexOrder.lt-md", ""], ["", "fxFlexOrder.lt-lg", ""], ["", "fxFlexOrder.lt-xl", ""], ["", "fxFlexOrder.gt-xs", ""], ["", "fxFlexOrder.gt-sm", ""], ["", "fxFlexOrder.gt-md", ""], ["", "fxFlexOrder.gt-lg", ""]],
      inputs: {
        fxFlexOrder: "fxFlexOrder",
        "fxFlexOrder.xs": "fxFlexOrder.xs",
        "fxFlexOrder.sm": "fxFlexOrder.sm",
        "fxFlexOrder.md": "fxFlexOrder.md",
        "fxFlexOrder.lg": "fxFlexOrder.lg",
        "fxFlexOrder.xl": "fxFlexOrder.xl",
        "fxFlexOrder.lt-sm": "fxFlexOrder.lt-sm",
        "fxFlexOrder.lt-md": "fxFlexOrder.lt-md",
        "fxFlexOrder.lt-lg": "fxFlexOrder.lt-lg",
        "fxFlexOrder.lt-xl": "fxFlexOrder.lt-xl",
        "fxFlexOrder.gt-xs": "fxFlexOrder.gt-xs",
        "fxFlexOrder.gt-sm": "fxFlexOrder.gt-sm",
        "fxFlexOrder.gt-md": "fxFlexOrder.gt-md",
        "fxFlexOrder.gt-lg": "fxFlexOrder.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultFlexOrderDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultFlexOrderDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultFlexOrderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector$3,
          inputs: inputs$3
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: flex/flex-offset/flex-offset.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FlexOffsetStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_15) {
      _inherits(FlexOffsetStyleBuilder, _angular_flex_layout_15);

      var _super24 = _createSuper(FlexOffsetStyleBuilder);

      function FlexOffsetStyleBuilder() {
        _classCallCheck(this, FlexOffsetStyleBuilder);

        return _super24.apply(this, arguments);
      }

      _createClass(FlexOffsetStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} offset
         * @param {?} parent
         * @return {?}
         */
        value: function buildStyles(offset, parent) {
          if (offset === '') {
            offset = '0';
          }
          /** @type {?} */


          var isPercent = String(offset).indexOf('%') > -1;
          /** @type {?} */

          var isPx = String(offset).indexOf('px') > -1;

          if (!isPx && !isPercent && !isNaN(+offset)) {
            offset = offset + '%';
          }
          /** @type {?} */


          var horizontalLayoutKey = parent.isRtl ? 'margin-right' : 'margin-left';
          /** @type {?} */

          var styles = isFlowHorizontal(parent.layout) ? _defineProperty({}, horizontalLayoutKey, "".concat(offset)) : {
            'margin-top': "".concat(offset)
          };
          return styles;
        }
      }]);

      return FlexOffsetStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    FlexOffsetStyleBuilder.ɵfac = function FlexOffsetStyleBuilder_Factory(t) {
      return ɵFlexOffsetStyleBuilder_BaseFactory(t || FlexOffsetStyleBuilder);
    };
    /** @nocollapse */


    FlexOffsetStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function FlexOffsetStyleBuilder_Factory() {
        return new FlexOffsetStyleBuilder();
      },
      token: FlexOffsetStyleBuilder,
      providedIn: "root"
    });

    var ɵFlexOffsetStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FlexOffsetStyleBuilder);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexOffsetStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /** @type {?} */


    var inputs$4 = ['fxFlexOffset', 'fxFlexOffset.xs', 'fxFlexOffset.sm', 'fxFlexOffset.md', 'fxFlexOffset.lg', 'fxFlexOffset.xl', 'fxFlexOffset.lt-sm', 'fxFlexOffset.lt-md', 'fxFlexOffset.lt-lg', 'fxFlexOffset.lt-xl', 'fxFlexOffset.gt-xs', 'fxFlexOffset.gt-sm', 'fxFlexOffset.gt-md', 'fxFlexOffset.gt-lg'];
    /** @type {?} */

    var selector$4 = "\n  [fxFlexOffset], [fxFlexOffset.xs], [fxFlexOffset.sm], [fxFlexOffset.md],\n  [fxFlexOffset.lg], [fxFlexOffset.xl], [fxFlexOffset.lt-sm], [fxFlexOffset.lt-md],\n  [fxFlexOffset.lt-lg], [fxFlexOffset.lt-xl], [fxFlexOffset.gt-xs], [fxFlexOffset.gt-sm],\n  [fxFlexOffset.gt-md], [fxFlexOffset.gt-lg]\n";
    /**
     * 'flex-offset' flexbox styling directive
     * Configures the 'margin-left' of the element in a layout container
     */

    var FlexOffsetDirective = /*#__PURE__*/function (_angular_flex_layout_16) {
      _inherits(FlexOffsetDirective, _angular_flex_layout_16);

      var _super25 = _createSuper(FlexOffsetDirective);

      /**
       * @param {?} elRef
       * @param {?} directionality
       * @param {?} styleBuilder
       * @param {?} marshal
       * @param {?} styler
       */
      function FlexOffsetDirective(elRef, directionality, styleBuilder, marshal, styler) {
        var _this49;

        _classCallCheck(this, FlexOffsetDirective);

        _this49 = _super25.call(this, elRef, styleBuilder, styler, marshal);
        _this49.directionality = directionality;
        _this49.DIRECTIVE_KEY = 'flex-offset';

        _this49.init([_this49.directionality.change]); // Parent DOM `layout-gap` with affect the nested child with `flex-offset`


        if (_this49.parentElement) {
          _this49.marshal.trackValue(_this49.parentElement, 'layout-gap').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this49.destroySubject)).subscribe(_this49.triggerUpdate.bind(_assertThisInitialized(_this49)));
        }

        return _this49;
      } // *********************************************
      // Protected methods
      // *********************************************

      /**
       * Using the current fxFlexOffset value, update the inline CSS
       * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
       *       otherwise `margin-top` is used for the offset.
       * @protected
       * @param {?=} value
       * @return {?}
       */


      _createClass(FlexOffsetDirective, [{
        key: "updateWithValue",
        value: function updateWithValue() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          // The flex-direction of this element's flex container. Defaults to 'row'.

          /** @type {?} */
          var layout = this.getFlexFlowDirection(
          /** @type {?} */
          this.parentElement, true);
          /** @type {?} */

          var isRtl = this.directionality.value === 'rtl';

          if (layout === 'row' && isRtl) {
            this.styleCache = flexOffsetCacheRowRtl;
          } else if (layout === 'row' && !isRtl) {
            this.styleCache = flexOffsetCacheRowLtr;
          } else if (layout === 'column' && isRtl) {
            this.styleCache = flexOffsetCacheColumnRtl;
          } else if (layout === 'column' && !isRtl) {
            this.styleCache = flexOffsetCacheColumnLtr;
          }

          this.addStyles(value + '', {
            layout: layout,
            isRtl: isRtl
          });
        }
      }]);

      return FlexOffsetDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

    FlexOffsetDirective.ɵfac = function FlexOffsetDirective_Factory(t) {
      return new (t || FlexOffsetDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FlexOffsetStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]));
    };

    FlexOffsetDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FlexOffsetDirective,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    FlexOffsetDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]
      }, {
        type: FlexOffsetStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexOffsetDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Directionality"]
        }, {
          type: FlexOffsetStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }];
      }, null);
    })();

    var DefaultFlexOffsetDirective = /*#__PURE__*/function (_FlexOffsetDirective) {
      _inherits(DefaultFlexOffsetDirective, _FlexOffsetDirective);

      var _super26 = _createSuper(DefaultFlexOffsetDirective);

      function DefaultFlexOffsetDirective() {
        var _this50;

        _classCallCheck(this, DefaultFlexOffsetDirective);

        _this50 = _super26.apply(this, arguments);
        _this50.inputs = inputs$4;
        return _this50;
      }

      return DefaultFlexOffsetDirective;
    }(FlexOffsetDirective);

    DefaultFlexOffsetDirective.ɵfac = function DefaultFlexOffsetDirective_Factory(t) {
      return ɵDefaultFlexOffsetDirective_BaseFactory(t || DefaultFlexOffsetDirective);
    };

    DefaultFlexOffsetDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultFlexOffsetDirective,
      selectors: [["", "fxFlexOffset", ""], ["", "fxFlexOffset.xs", ""], ["", "fxFlexOffset.sm", ""], ["", "fxFlexOffset.md", ""], ["", "fxFlexOffset.lg", ""], ["", "fxFlexOffset.xl", ""], ["", "fxFlexOffset.lt-sm", ""], ["", "fxFlexOffset.lt-md", ""], ["", "fxFlexOffset.lt-lg", ""], ["", "fxFlexOffset.lt-xl", ""], ["", "fxFlexOffset.gt-xs", ""], ["", "fxFlexOffset.gt-sm", ""], ["", "fxFlexOffset.gt-md", ""], ["", "fxFlexOffset.gt-lg", ""]],
      inputs: {
        fxFlexOffset: "fxFlexOffset",
        "fxFlexOffset.xs": "fxFlexOffset.xs",
        "fxFlexOffset.sm": "fxFlexOffset.sm",
        "fxFlexOffset.md": "fxFlexOffset.md",
        "fxFlexOffset.lg": "fxFlexOffset.lg",
        "fxFlexOffset.xl": "fxFlexOffset.xl",
        "fxFlexOffset.lt-sm": "fxFlexOffset.lt-sm",
        "fxFlexOffset.lt-md": "fxFlexOffset.lt-md",
        "fxFlexOffset.lt-lg": "fxFlexOffset.lt-lg",
        "fxFlexOffset.lt-xl": "fxFlexOffset.lt-xl",
        "fxFlexOffset.gt-xs": "fxFlexOffset.gt-xs",
        "fxFlexOffset.gt-sm": "fxFlexOffset.gt-sm",
        "fxFlexOffset.gt-md": "fxFlexOffset.gt-md",
        "fxFlexOffset.gt-lg": "fxFlexOffset.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultFlexOffsetDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultFlexOffsetDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultFlexOffsetDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector$4,
          inputs: inputs$4
        }]
      }], null, null);
    })();
    /** @type {?} */


    var flexOffsetCacheRowRtl = new Map();
    /** @type {?} */

    var flexOffsetCacheColumnRtl = new Map();
    /** @type {?} */

    var flexOffsetCacheRowLtr = new Map();
    /** @type {?} */

    var flexOffsetCacheColumnLtr = new Map();
    /**
     * @fileoverview added by tsickle
     * Generated from: flex/flex-align/flex-align.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var FlexAlignStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_17) {
      _inherits(FlexAlignStyleBuilder, _angular_flex_layout_17);

      var _super27 = _createSuper(FlexAlignStyleBuilder);

      function FlexAlignStyleBuilder() {
        _classCallCheck(this, FlexAlignStyleBuilder);

        return _super27.apply(this, arguments);
      }

      _createClass(FlexAlignStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @return {?}
         */
        value: function buildStyles(input) {
          input = input || 'stretch';
          /** @type {?} */

          var styles = {}; // Cross-axis

          switch (input) {
            case 'start':
              styles['align-self'] = 'flex-start';
              break;

            case 'end':
              styles['align-self'] = 'flex-end';
              break;

            default:
              styles['align-self'] = input;
              break;
          }

          return styles;
        }
      }]);

      return FlexAlignStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    FlexAlignStyleBuilder.ɵfac = function FlexAlignStyleBuilder_Factory(t) {
      return ɵFlexAlignStyleBuilder_BaseFactory(t || FlexAlignStyleBuilder);
    };
    /** @nocollapse */


    FlexAlignStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function FlexAlignStyleBuilder_Factory() {
        return new FlexAlignStyleBuilder();
      },
      token: FlexAlignStyleBuilder,
      providedIn: "root"
    });

    var ɵFlexAlignStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FlexAlignStyleBuilder);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexAlignStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /** @type {?} */


    var inputs$5 = ['fxFlexAlign', 'fxFlexAlign.xs', 'fxFlexAlign.sm', 'fxFlexAlign.md', 'fxFlexAlign.lg', 'fxFlexAlign.xl', 'fxFlexAlign.lt-sm', 'fxFlexAlign.lt-md', 'fxFlexAlign.lt-lg', 'fxFlexAlign.lt-xl', 'fxFlexAlign.gt-xs', 'fxFlexAlign.gt-sm', 'fxFlexAlign.gt-md', 'fxFlexAlign.gt-lg'];
    /** @type {?} */

    var selector$5 = "\n  [fxFlexAlign], [fxFlexAlign.xs], [fxFlexAlign.sm], [fxFlexAlign.md],\n  [fxFlexAlign.lg], [fxFlexAlign.xl], [fxFlexAlign.lt-sm], [fxFlexAlign.lt-md],\n  [fxFlexAlign.lt-lg], [fxFlexAlign.lt-xl], [fxFlexAlign.gt-xs], [fxFlexAlign.gt-sm],\n  [fxFlexAlign.gt-md], [fxFlexAlign.gt-lg]\n";
    /**
     * 'flex-align' flexbox styling directive
     * Allows element-specific overrides for cross-axis alignments in a layout container
     * @see https://css-tricks.com/almanac/properties/a/align-self/
     */

    var FlexAlignDirective = /*#__PURE__*/function (_angular_flex_layout_18) {
      _inherits(FlexAlignDirective, _angular_flex_layout_18);

      var _super28 = _createSuper(FlexAlignDirective);

      /**
       * @param {?} elRef
       * @param {?} styleUtils
       * @param {?} styleBuilder
       * @param {?} marshal
       */
      function FlexAlignDirective(elRef, styleUtils, styleBuilder, marshal) {
        var _this51;

        _classCallCheck(this, FlexAlignDirective);

        _this51 = _super28.call(this, elRef, styleBuilder, styleUtils, marshal);
        _this51.DIRECTIVE_KEY = 'flex-align';
        _this51.styleCache = flexAlignCache;

        _this51.init();

        return _this51;
      }

      return FlexAlignDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

    FlexAlignDirective.ɵfac = function FlexAlignDirective_Factory(t) {
      return new (t || FlexAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FlexAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
    };

    FlexAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FlexAlignDirective,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    FlexAlignDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: FlexAlignStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexAlignDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: FlexAlignStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      }, null);
    })();
    /** @type {?} */


    var flexAlignCache = new Map();

    var DefaultFlexAlignDirective = /*#__PURE__*/function (_FlexAlignDirective) {
      _inherits(DefaultFlexAlignDirective, _FlexAlignDirective);

      var _super29 = _createSuper(DefaultFlexAlignDirective);

      function DefaultFlexAlignDirective() {
        var _this52;

        _classCallCheck(this, DefaultFlexAlignDirective);

        _this52 = _super29.apply(this, arguments);
        _this52.inputs = inputs$5;
        return _this52;
      }

      return DefaultFlexAlignDirective;
    }(FlexAlignDirective);

    DefaultFlexAlignDirective.ɵfac = function DefaultFlexAlignDirective_Factory(t) {
      return ɵDefaultFlexAlignDirective_BaseFactory(t || DefaultFlexAlignDirective);
    };

    DefaultFlexAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultFlexAlignDirective,
      selectors: [["", "fxFlexAlign", ""], ["", "fxFlexAlign.xs", ""], ["", "fxFlexAlign.sm", ""], ["", "fxFlexAlign.md", ""], ["", "fxFlexAlign.lg", ""], ["", "fxFlexAlign.xl", ""], ["", "fxFlexAlign.lt-sm", ""], ["", "fxFlexAlign.lt-md", ""], ["", "fxFlexAlign.lt-lg", ""], ["", "fxFlexAlign.lt-xl", ""], ["", "fxFlexAlign.gt-xs", ""], ["", "fxFlexAlign.gt-sm", ""], ["", "fxFlexAlign.gt-md", ""], ["", "fxFlexAlign.gt-lg", ""]],
      inputs: {
        fxFlexAlign: "fxFlexAlign",
        "fxFlexAlign.xs": "fxFlexAlign.xs",
        "fxFlexAlign.sm": "fxFlexAlign.sm",
        "fxFlexAlign.md": "fxFlexAlign.md",
        "fxFlexAlign.lg": "fxFlexAlign.lg",
        "fxFlexAlign.xl": "fxFlexAlign.xl",
        "fxFlexAlign.lt-sm": "fxFlexAlign.lt-sm",
        "fxFlexAlign.lt-md": "fxFlexAlign.lt-md",
        "fxFlexAlign.lt-lg": "fxFlexAlign.lt-lg",
        "fxFlexAlign.lt-xl": "fxFlexAlign.lt-xl",
        "fxFlexAlign.gt-xs": "fxFlexAlign.gt-xs",
        "fxFlexAlign.gt-sm": "fxFlexAlign.gt-sm",
        "fxFlexAlign.gt-md": "fxFlexAlign.gt-md",
        "fxFlexAlign.gt-lg": "fxFlexAlign.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultFlexAlignDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultFlexAlignDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultFlexAlignDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector$5,
          inputs: inputs$5
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: flex/flex-fill/flex-fill.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var FLEX_FILL_CSS = {
      'margin': 0,
      'width': '100%',
      'height': '100%',
      'min-width': '100%',
      'min-height': '100%'
    };

    var FlexFillStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_19) {
      _inherits(FlexFillStyleBuilder, _angular_flex_layout_19);

      var _super30 = _createSuper(FlexFillStyleBuilder);

      function FlexFillStyleBuilder() {
        _classCallCheck(this, FlexFillStyleBuilder);

        return _super30.apply(this, arguments);
      }

      _createClass(FlexFillStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} _input
         * @return {?}
         */
        value: function buildStyles(_input) {
          return FLEX_FILL_CSS;
        }
      }]);

      return FlexFillStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    FlexFillStyleBuilder.ɵfac = function FlexFillStyleBuilder_Factory(t) {
      return ɵFlexFillStyleBuilder_BaseFactory(t || FlexFillStyleBuilder);
    };
    /** @nocollapse */


    FlexFillStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function FlexFillStyleBuilder_Factory() {
        return new FlexFillStyleBuilder();
      },
      token: FlexFillStyleBuilder,
      providedIn: "root"
    });

    var ɵFlexFillStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FlexFillStyleBuilder);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexFillStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /**
     * 'fxFill' flexbox styling directive
     *  Maximizes width and height of element in a layout container
     *
     *  NOTE: fxFill is NOT responsive API!!
     */


    var FlexFillDirective = /*#__PURE__*/function (_angular_flex_layout_20) {
      _inherits(FlexFillDirective, _angular_flex_layout_20);

      var _super31 = _createSuper(FlexFillDirective);

      /**
       * @param {?} elRef
       * @param {?} styleUtils
       * @param {?} styleBuilder
       * @param {?} marshal
       */
      function FlexFillDirective(elRef, styleUtils, styleBuilder, marshal) {
        var _this53;

        _classCallCheck(this, FlexFillDirective);

        _this53 = _super31.call(this, elRef, styleBuilder, styleUtils, marshal);
        _this53.styleCache = flexFillCache;

        _this53.addStyles('');

        return _this53;
      }

      return FlexFillDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

    FlexFillDirective.ɵfac = function FlexFillDirective_Factory(t) {
      return new (t || FlexFillDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FlexFillStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
    };

    FlexFillDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FlexFillDirective,
      selectors: [["", "fxFill", ""], ["", "fxFlexFill", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    FlexFillDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: FlexFillStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexFillDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: "[fxFill], [fxFlexFill]"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: FlexFillStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      }, null);
    })();
    /** @type {?} */


    var flexFillCache = new Map();
    /**
     * @fileoverview added by tsickle
     * Generated from: flex/layout-align/layout-align.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var LayoutAlignStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_21) {
      _inherits(LayoutAlignStyleBuilder, _angular_flex_layout_21);

      var _super32 = _createSuper(LayoutAlignStyleBuilder);

      function LayoutAlignStyleBuilder() {
        _classCallCheck(this, LayoutAlignStyleBuilder);

        return _super32.apply(this, arguments);
      }

      _createClass(LayoutAlignStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} align
         * @param {?} parent
         * @return {?}
         */
        value: function buildStyles(align, parent) {
          /** @type {?} */
          var css = {};

          var _align$split = align.split(' '),
              _align$split2 = _slicedToArray(_align$split, 2),
              mainAxis = _align$split2[0],
              crossAxis = _align$split2[1]; // Main axis


          switch (mainAxis) {
            case 'center':
              css['justify-content'] = 'center';
              break;

            case 'space-around':
              css['justify-content'] = 'space-around';
              break;

            case 'space-between':
              css['justify-content'] = 'space-between';
              break;

            case 'space-evenly':
              css['justify-content'] = 'space-evenly';
              break;

            case 'end':
            case 'flex-end':
              css['justify-content'] = 'flex-end';
              break;

            case 'start':
            case 'flex-start':
            default:
              css['justify-content'] = 'flex-start'; // default main axis

              break;
          } // Cross-axis


          switch (crossAxis) {
            case 'start':
            case 'flex-start':
              css['align-items'] = css['align-content'] = 'flex-start';
              break;

            case 'center':
              css['align-items'] = css['align-content'] = 'center';
              break;

            case 'end':
            case 'flex-end':
              css['align-items'] = css['align-content'] = 'flex-end';
              break;

            case 'space-between':
              css['align-content'] = 'space-between';
              css['align-items'] = 'stretch';
              break;

            case 'space-around':
              css['align-content'] = 'space-around';
              css['align-items'] = 'stretch';
              break;

            case 'baseline':
              css['align-content'] = 'stretch';
              css['align-items'] = 'baseline';
              break;

            case 'stretch':
            default:
              // 'stretch'
              css['align-items'] = css['align-content'] = 'stretch'; // default cross axis

              break;
          }

          return (
            /** @type {?} */
            extendObject(css, {
              'display': parent.inline ? 'inline-flex' : 'flex',
              'flex-direction': parent.layout,
              'box-sizing': 'border-box',
              'max-width': crossAxis === 'stretch' ? !isFlowHorizontal(parent.layout) ? '100%' : null : null,
              'max-height': crossAxis === 'stretch' ? isFlowHorizontal(parent.layout) ? '100%' : null : null
            })
          );
        }
      }]);

      return LayoutAlignStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    LayoutAlignStyleBuilder.ɵfac = function LayoutAlignStyleBuilder_Factory(t) {
      return ɵLayoutAlignStyleBuilder_BaseFactory(t || LayoutAlignStyleBuilder);
    };
    /** @nocollapse */


    LayoutAlignStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function LayoutAlignStyleBuilder_Factory() {
        return new LayoutAlignStyleBuilder();
      },
      token: LayoutAlignStyleBuilder,
      providedIn: "root"
    });

    var ɵLayoutAlignStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](LayoutAlignStyleBuilder);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutAlignStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /** @type {?} */


    var inputs$6 = ['fxLayoutAlign', 'fxLayoutAlign.xs', 'fxLayoutAlign.sm', 'fxLayoutAlign.md', 'fxLayoutAlign.lg', 'fxLayoutAlign.xl', 'fxLayoutAlign.lt-sm', 'fxLayoutAlign.lt-md', 'fxLayoutAlign.lt-lg', 'fxLayoutAlign.lt-xl', 'fxLayoutAlign.gt-xs', 'fxLayoutAlign.gt-sm', 'fxLayoutAlign.gt-md', 'fxLayoutAlign.gt-lg'];
    /** @type {?} */

    var selector$6 = "\n  [fxLayoutAlign], [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md],\n  [fxLayoutAlign.lg], [fxLayoutAlign.xl], [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md],\n  [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl], [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm],\n  [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]\n";
    /**
     * 'layout-align' flexbox styling directive
     *  Defines positioning of child elements along main and cross axis in a layout container
     *  Optional values: {main-axis} values or {main-axis cross-axis} value pairs
     *
     * @see https://css-tricks.com/almanac/properties/j/justify-content/
     * @see https://css-tricks.com/almanac/properties/a/align-items/
     * @see https://css-tricks.com/almanac/properties/a/align-content/
     */

    var LayoutAlignDirective = /*#__PURE__*/function (_angular_flex_layout_22) {
      _inherits(LayoutAlignDirective, _angular_flex_layout_22);

      var _super33 = _createSuper(LayoutAlignDirective);

      // default inline value

      /**
       * @param {?} elRef
       * @param {?} styleUtils
       * @param {?} styleBuilder
       * @param {?} marshal
       */
      function LayoutAlignDirective(elRef, styleUtils, styleBuilder, marshal) {
        var _this54;

        _classCallCheck(this, LayoutAlignDirective);

        _this54 = _super33.call(this, elRef, styleBuilder, styleUtils, marshal);
        _this54.DIRECTIVE_KEY = 'layout-align';
        _this54.layout = 'row'; // default flex-direction
        // default flex-direction

        _this54.inline = false; // default inline value

        _this54.init();

        _this54.marshal.trackValue(_this54.nativeElement, 'layout').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this54.destroySubject)).subscribe(_this54.onLayoutChange.bind(_assertThisInitialized(_this54)));

        return _this54;
      } // *********************************************
      // Protected methods
      // *********************************************

      /**
       *
       * @protected
       * @param {?} value
       * @return {?}
       */


      _createClass(LayoutAlignDirective, [{
        key: "updateWithValue",
        value: function updateWithValue(value) {
          /** @type {?} */
          var layout = this.layout || 'row';
          /** @type {?} */

          var inline = this.inline;

          if (layout === 'row' && inline) {
            this.styleCache = layoutAlignHorizontalInlineCache;
          } else if (layout === 'row' && !inline) {
            this.styleCache = layoutAlignHorizontalCache;
          } else if (layout === 'row-reverse' && inline) {
            this.styleCache = layoutAlignHorizontalRevInlineCache;
          } else if (layout === 'row-reverse' && !inline) {
            this.styleCache = layoutAlignHorizontalRevCache;
          } else if (layout === 'column' && inline) {
            this.styleCache = layoutAlignVerticalInlineCache;
          } else if (layout === 'column' && !inline) {
            this.styleCache = layoutAlignVerticalCache;
          } else if (layout === 'column-reverse' && inline) {
            this.styleCache = layoutAlignVerticalRevInlineCache;
          } else if (layout === 'column-reverse' && !inline) {
            this.styleCache = layoutAlignVerticalRevCache;
          }

          this.addStyles(value, {
            layout: layout,
            inline: inline
          });
        }
        /**
         * Cache the parent container 'flex-direction' and update the 'flex' styles
         * @protected
         * @param {?} matcher
         * @return {?}
         */

      }, {
        key: "onLayoutChange",
        value: function onLayoutChange(matcher) {
          var _this55 = this;

          /** @type {?} */
          var layoutKeys = matcher.value.split(' ');
          this.layout = layoutKeys[0];
          this.inline = matcher.value.includes('inline');

          if (!LAYOUT_VALUES.find(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x === _this55.layout;
          })) {
            this.layout = 'row';
          }

          this.triggerUpdate();
        }
      }]);

      return LayoutAlignDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

    LayoutAlignDirective.ɵfac = function LayoutAlignDirective_Factory(t) {
      return new (t || LayoutAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LayoutAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
    };

    LayoutAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: LayoutAlignDirective,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    LayoutAlignDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: LayoutAlignStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutAlignDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: LayoutAlignStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      }, null);
    })();

    var DefaultLayoutAlignDirective = /*#__PURE__*/function (_LayoutAlignDirective) {
      _inherits(DefaultLayoutAlignDirective, _LayoutAlignDirective);

      var _super34 = _createSuper(DefaultLayoutAlignDirective);

      function DefaultLayoutAlignDirective() {
        var _this56;

        _classCallCheck(this, DefaultLayoutAlignDirective);

        _this56 = _super34.apply(this, arguments);
        _this56.inputs = inputs$6;
        return _this56;
      }

      return DefaultLayoutAlignDirective;
    }(LayoutAlignDirective);

    DefaultLayoutAlignDirective.ɵfac = function DefaultLayoutAlignDirective_Factory(t) {
      return ɵDefaultLayoutAlignDirective_BaseFactory(t || DefaultLayoutAlignDirective);
    };

    DefaultLayoutAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultLayoutAlignDirective,
      selectors: [["", "fxLayoutAlign", ""], ["", "fxLayoutAlign.xs", ""], ["", "fxLayoutAlign.sm", ""], ["", "fxLayoutAlign.md", ""], ["", "fxLayoutAlign.lg", ""], ["", "fxLayoutAlign.xl", ""], ["", "fxLayoutAlign.lt-sm", ""], ["", "fxLayoutAlign.lt-md", ""], ["", "fxLayoutAlign.lt-lg", ""], ["", "fxLayoutAlign.lt-xl", ""], ["", "fxLayoutAlign.gt-xs", ""], ["", "fxLayoutAlign.gt-sm", ""], ["", "fxLayoutAlign.gt-md", ""], ["", "fxLayoutAlign.gt-lg", ""]],
      inputs: {
        fxLayoutAlign: "fxLayoutAlign",
        "fxLayoutAlign.xs": "fxLayoutAlign.xs",
        "fxLayoutAlign.sm": "fxLayoutAlign.sm",
        "fxLayoutAlign.md": "fxLayoutAlign.md",
        "fxLayoutAlign.lg": "fxLayoutAlign.lg",
        "fxLayoutAlign.xl": "fxLayoutAlign.xl",
        "fxLayoutAlign.lt-sm": "fxLayoutAlign.lt-sm",
        "fxLayoutAlign.lt-md": "fxLayoutAlign.lt-md",
        "fxLayoutAlign.lt-lg": "fxLayoutAlign.lt-lg",
        "fxLayoutAlign.lt-xl": "fxLayoutAlign.lt-xl",
        "fxLayoutAlign.gt-xs": "fxLayoutAlign.gt-xs",
        "fxLayoutAlign.gt-sm": "fxLayoutAlign.gt-sm",
        "fxLayoutAlign.gt-md": "fxLayoutAlign.gt-md",
        "fxLayoutAlign.gt-lg": "fxLayoutAlign.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultLayoutAlignDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultLayoutAlignDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultLayoutAlignDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector$6,
          inputs: inputs$6
        }]
      }], null, null);
    })();
    /** @type {?} */


    var layoutAlignHorizontalCache = new Map();
    /** @type {?} */

    var layoutAlignVerticalCache = new Map();
    /** @type {?} */

    var layoutAlignHorizontalRevCache = new Map();
    /** @type {?} */

    var layoutAlignVerticalRevCache = new Map();
    /** @type {?} */

    var layoutAlignHorizontalInlineCache = new Map();
    /** @type {?} */

    var layoutAlignVerticalInlineCache = new Map();
    /** @type {?} */

    var layoutAlignHorizontalRevInlineCache = new Map();
    /** @type {?} */

    var layoutAlignVerticalRevInlineCache = new Map();
    /**
     * @fileoverview added by tsickle
     * Generated from: flex/module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var ALL_DIRECTIVES = [DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective, DefaultFlexOrderDirective, DefaultFlexOffsetDirective, FlexFillDirective, DefaultFlexAlignDirective, DefaultFlexDirective];
    /**
     * *****************************************************************
     * Define module for the Flex API
     * *****************************************************************
     */

    var FlexModule = function FlexModule() {
      _classCallCheck(this, FlexModule);
    };

    FlexModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FlexModule
    });
    FlexModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FlexModule_Factory(t) {
        return new (t || FlexModule)();
      },
      imports: [[_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FlexModule, {
        declarations: function declarations() {
          return [DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective, DefaultFlexOrderDirective, DefaultFlexOffsetDirective, FlexFillDirective, DefaultFlexAlignDirective, DefaultFlexDirective];
        },
        imports: function imports() {
          return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]];
        },
        exports: function exports() {
          return [DefaultLayoutDirective, DefaultLayoutGapDirective, DefaultLayoutAlignDirective, DefaultFlexOrderDirective, DefaultFlexOffsetDirective, FlexFillDirective, DefaultFlexAlignDirective, DefaultFlexDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
          declarations: [].concat(ALL_DIRECTIVES),
          exports: [].concat(ALL_DIRECTIVES)
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: flex/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: flex/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=flex.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/grid.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/grid.js ***!
    \************************************************************************/

  /*! exports provided: GridModule, ɵgrid_privatef, ɵgrid_privatee, ɵgrid_privated, ɵgrid_privatei, ɵgrid_privateh, ɵgrid_privateg, ɵgrid_privatel, ɵgrid_privatek, ɵgrid_privatej, ɵgrid_privateo, ɵgrid_privaten, ɵgrid_privatem, ɵgrid_privater, ɵgrid_privateq, ɵgrid_privatep, ɵgrid_privateu, ɵgrid_privatet, ɵgrid_privates, ɵgrid_privatex, ɵgrid_privatew, ɵgrid_privatev, ɵgrid_privateba, ɵgrid_privatez, ɵgrid_privatey, ɵgrid_privatec, ɵgrid_privateb, ɵgrid_privatea, ɵgrid_privatebd, ɵgrid_privatebc, ɵgrid_privatebb, ɵgrid_privatebg, ɵgrid_privatebf, ɵgrid_privatebe */

  /***/
  function node_modulesAngularFlexLayout__ivy_ngcc__Esm2015GridJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridModule", function () {
      return GridModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatef", function () {
      return DefaultGridAlignColumnsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatee", function () {
      return GridAlignColumnsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privated", function () {
      return GridAlignColumnsStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatei", function () {
      return DefaultGridAlignRowsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privateh", function () {
      return GridAlignRowsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privateg", function () {
      return GridAlignRowsStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatel", function () {
      return DefaultGridAreaDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatek", function () {
      return GridAreaDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatej", function () {
      return GridAreaStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privateo", function () {
      return DefaultGridAreasDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privaten", function () {
      return GridAreasDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatem", function () {
      return GridAreasStyleBuiler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privater", function () {
      return DefaultGridAutoDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privateq", function () {
      return GridAutoDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatep", function () {
      return GridAutoStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privateu", function () {
      return DefaultGridColumnDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatet", function () {
      return GridColumnDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privates", function () {
      return GridColumnStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatex", function () {
      return DefaultGridColumnsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatew", function () {
      return GridColumnsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatev", function () {
      return GridColumnsStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privateba", function () {
      return DefaultGridGapDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatez", function () {
      return GridGapDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatey", function () {
      return GridGapStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatec", function () {
      return DefaultGridAlignDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privateb", function () {
      return GridAlignDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatea", function () {
      return GridAlignStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebd", function () {
      return DefaultGridRowDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebc", function () {
      return GridRowDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebb", function () {
      return GridRowStyleBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebg", function () {
      return DefaultGridRowsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebf", function () {
      return GridRowsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵgrid_privatebe", function () {
      return GridRowsStyleBuilder;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/core */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: grid/grid-align/grid-align.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var ROW_DEFAULT = 'stretch';
    /** @type {?} */

    var COL_DEFAULT = 'stretch';

    var GridAlignStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_23) {
      _inherits(GridAlignStyleBuilder, _angular_flex_layout_23);

      var _super35 = _createSuper(GridAlignStyleBuilder);

      function GridAlignStyleBuilder() {
        _classCallCheck(this, GridAlignStyleBuilder);

        return _super35.apply(this, arguments);
      }

      _createClass(GridAlignStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @return {?}
         */
        value: function buildStyles(input) {
          return buildCss(input || ROW_DEFAULT);
        }
      }]);

      return GridAlignStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridAlignStyleBuilder.ɵfac = function GridAlignStyleBuilder_Factory(t) {
      return ɵGridAlignStyleBuilder_BaseFactory(t || GridAlignStyleBuilder);
    };
    /** @nocollapse */


    GridAlignStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function GridAlignStyleBuilder_Factory() {
        return new GridAlignStyleBuilder();
      },
      token: GridAlignStyleBuilder,
      providedIn: "root"
    });

    var ɵGridAlignStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAlignStyleBuilder);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAlignStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();

    var GridAlignDirective = /*#__PURE__*/function (_angular_flex_layout_24) {
      _inherits(GridAlignDirective, _angular_flex_layout_24);

      var _super36 = _createSuper(GridAlignDirective);

      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       */
      function GridAlignDirective(elementRef, styleBuilder, styler, marshal) {
        var _this57;

        _classCallCheck(this, GridAlignDirective);

        _this57 = _super36.call(this, elementRef, styleBuilder, styler, marshal);
        _this57.DIRECTIVE_KEY = 'grid-align';
        _this57.styleCache = alignCache;

        _this57.init();

        return _this57;
      }

      return GridAlignDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

    GridAlignDirective.ɵfac = function GridAlignDirective_Factory(t) {
      return new (t || GridAlignDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAlignStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
    };

    GridAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: GridAlignDirective,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    GridAlignDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: GridAlignStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAlignDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridAlignStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      }, null);
    })();
    /** @type {?} */


    var alignCache = new Map();
    /** @type {?} */

    var inputs = ['gdGridAlign', 'gdGridAlign.xs', 'gdGridAlign.sm', 'gdGridAlign.md', 'gdGridAlign.lg', 'gdGridAlign.xl', 'gdGridAlign.lt-sm', 'gdGridAlign.lt-md', 'gdGridAlign.lt-lg', 'gdGridAlign.lt-xl', 'gdGridAlign.gt-xs', 'gdGridAlign.gt-sm', 'gdGridAlign.gt-md', 'gdGridAlign.gt-lg'];
    /** @type {?} */

    var selector = "\n  [gdGridAlign],\n  [gdGridAlign.xs], [gdGridAlign.sm], [gdGridAlign.md], [gdGridAlign.lg],[gdGridAlign.xl],\n  [gdGridAlign.lt-sm], [gdGridAlign.lt-md], [gdGridAlign.lt-lg], [gdGridAlign.lt-xl],\n  [gdGridAlign.gt-xs], [gdGridAlign.gt-sm], [gdGridAlign.gt-md], [gdGridAlign.gt-lg]\n";
    /**
     * 'align' CSS Grid styling directive for grid children
     *  Defines positioning of child elements along row and column axis in a grid container
     *  Optional values: {row-axis} values or {row-axis column-axis} value pairs
     *
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-self
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-self
     */

    var DefaultGridAlignDirective = /*#__PURE__*/function (_GridAlignDirective) {
      _inherits(DefaultGridAlignDirective, _GridAlignDirective);

      var _super37 = _createSuper(DefaultGridAlignDirective);

      function DefaultGridAlignDirective() {
        var _this58;

        _classCallCheck(this, DefaultGridAlignDirective);

        _this58 = _super37.apply(this, arguments);
        _this58.inputs = inputs;
        return _this58;
      }

      return DefaultGridAlignDirective;
    }(GridAlignDirective);

    DefaultGridAlignDirective.ɵfac = function DefaultGridAlignDirective_Factory(t) {
      return ɵDefaultGridAlignDirective_BaseFactory(t || DefaultGridAlignDirective);
    };

    DefaultGridAlignDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultGridAlignDirective,
      selectors: [["", "gdGridAlign", ""], ["", "gdGridAlign.xs", ""], ["", "gdGridAlign.sm", ""], ["", "gdGridAlign.md", ""], ["", "gdGridAlign.lg", ""], ["", "gdGridAlign.xl", ""], ["", "gdGridAlign.lt-sm", ""], ["", "gdGridAlign.lt-md", ""], ["", "gdGridAlign.lt-lg", ""], ["", "gdGridAlign.lt-xl", ""], ["", "gdGridAlign.gt-xs", ""], ["", "gdGridAlign.gt-sm", ""], ["", "gdGridAlign.gt-md", ""], ["", "gdGridAlign.gt-lg", ""]],
      inputs: {
        gdGridAlign: "gdGridAlign",
        "gdGridAlign.xs": "gdGridAlign.xs",
        "gdGridAlign.sm": "gdGridAlign.sm",
        "gdGridAlign.md": "gdGridAlign.md",
        "gdGridAlign.lg": "gdGridAlign.lg",
        "gdGridAlign.xl": "gdGridAlign.xl",
        "gdGridAlign.lt-sm": "gdGridAlign.lt-sm",
        "gdGridAlign.lt-md": "gdGridAlign.lt-md",
        "gdGridAlign.lt-lg": "gdGridAlign.lt-lg",
        "gdGridAlign.lt-xl": "gdGridAlign.lt-xl",
        "gdGridAlign.gt-xs": "gdGridAlign.gt-xs",
        "gdGridAlign.gt-sm": "gdGridAlign.gt-sm",
        "gdGridAlign.gt-md": "gdGridAlign.gt-md",
        "gdGridAlign.gt-lg": "gdGridAlign.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultGridAlignDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAlignDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridAlignDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector,
          inputs: inputs
        }]
      }], null, null);
    })();
    /**
     * @param {?=} align
     * @return {?}
     */


    function buildCss() {
      var align = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      /** @type {?} */
      var css = {};

      var _align$split3 = align.split(' '),
          _align$split4 = _slicedToArray(_align$split3, 2),
          rowAxis = _align$split4[0],
          columnAxis = _align$split4[1]; // Row axis


      switch (rowAxis) {
        case 'end':
          css['justify-self'] = 'end';
          break;

        case 'center':
          css['justify-self'] = 'center';
          break;

        case 'stretch':
          css['justify-self'] = 'stretch';
          break;

        case 'start':
          css['justify-self'] = 'start';
          break;

        default:
          css['justify-self'] = ROW_DEFAULT; // default row axis

          break;
      } // Column axis


      switch (columnAxis) {
        case 'end':
          css['align-self'] = 'end';
          break;

        case 'center':
          css['align-self'] = 'center';
          break;

        case 'stretch':
          css['align-self'] = 'stretch';
          break;

        case 'start':
          css['align-self'] = 'start';
          break;

        default:
          css['align-self'] = COL_DEFAULT; // default column axis

          break;
      }

      return css;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: grid/align-columns/align-columns.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_MAIN = 'start';
    /** @type {?} */

    var DEFAULT_CROSS = 'stretch';

    var GridAlignColumnsStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_25) {
      _inherits(GridAlignColumnsStyleBuilder, _angular_flex_layout_25);

      var _super38 = _createSuper(GridAlignColumnsStyleBuilder);

      function GridAlignColumnsStyleBuilder() {
        _classCallCheck(this, GridAlignColumnsStyleBuilder);

        return _super38.apply(this, arguments);
      }

      _createClass(GridAlignColumnsStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @param {?} parent
         * @return {?}
         */
        value: function buildStyles(input, parent) {
          return buildCss$1(input || "".concat(DEFAULT_MAIN, " ").concat(DEFAULT_CROSS), parent.inline);
        }
      }]);

      return GridAlignColumnsStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridAlignColumnsStyleBuilder.ɵfac = function GridAlignColumnsStyleBuilder_Factory(t) {
      return ɵGridAlignColumnsStyleBuilder_BaseFactory(t || GridAlignColumnsStyleBuilder);
    };
    /** @nocollapse */


    GridAlignColumnsStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function GridAlignColumnsStyleBuilder_Factory() {
        return new GridAlignColumnsStyleBuilder();
      },
      token: GridAlignColumnsStyleBuilder,
      providedIn: "root"
    });

    var ɵGridAlignColumnsStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAlignColumnsStyleBuilder);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAlignColumnsStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();

    var GridAlignColumnsDirective = /*#__PURE__*/function (_angular_flex_layout_26) {
      _inherits(GridAlignColumnsDirective, _angular_flex_layout_26);

      var _super39 = _createSuper(GridAlignColumnsDirective);

      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       */
      function GridAlignColumnsDirective(elementRef, styleBuilder, styler, marshal) {
        var _this59;

        _classCallCheck(this, GridAlignColumnsDirective);

        _this59 = _super39.call(this, elementRef, styleBuilder, styler, marshal);
        _this59.DIRECTIVE_KEY = 'grid-align-columns';
        _this59._inline = false;

        _this59.init();

        return _this59;
      }
      /**
       * @return {?}
       */


      _createClass(GridAlignColumnsDirective, [{
        key: "updateWithValue",
        // *********************************************
        // Protected methods
        // *********************************************

        /**
         * @protected
         * @param {?} value
         * @return {?}
         */
        value: function updateWithValue(value) {
          this.styleCache = this.inline ? alignColumnsInlineCache : alignColumnsCache;
          this.addStyles(value, {
            inline: this.inline
          });
        }
      }, {
        key: "inline",
        get: function get() {
          return this._inline;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
        }
      }]);

      return GridAlignColumnsDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

    GridAlignColumnsDirective.ɵfac = function GridAlignColumnsDirective_Factory(t) {
      return new (t || GridAlignColumnsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAlignColumnsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
    };

    GridAlignColumnsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: GridAlignColumnsDirective,
      inputs: {
        inline: ["gdInline", "inline"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    GridAlignColumnsDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: GridAlignColumnsStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };

    GridAlignColumnsDirective.propDecorators = {
      inline: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['gdInline']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAlignColumnsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridAlignColumnsStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      }, {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      });
    })();
    /** @type {?} */


    var alignColumnsCache = new Map();
    /** @type {?} */

    var alignColumnsInlineCache = new Map();
    /** @type {?} */

    var inputs$1 = ['gdAlignColumns', 'gdAlignColumns.xs', 'gdAlignColumns.sm', 'gdAlignColumns.md', 'gdAlignColumns.lg', 'gdAlignColumns.xl', 'gdAlignColumns.lt-sm', 'gdAlignColumns.lt-md', 'gdAlignColumns.lt-lg', 'gdAlignColumns.lt-xl', 'gdAlignColumns.gt-xs', 'gdAlignColumns.gt-sm', 'gdAlignColumns.gt-md', 'gdAlignColumns.gt-lg'];
    /** @type {?} */

    var selector$1 = "\n  [gdAlignColumns],\n  [gdAlignColumns.xs], [gdAlignColumns.sm], [gdAlignColumns.md],\n  [gdAlignColumns.lg], [gdAlignColumns.xl], [gdAlignColumns.lt-sm],\n  [gdAlignColumns.lt-md], [gdAlignColumns.lt-lg], [gdAlignColumns.lt-xl],\n  [gdAlignColumns.gt-xs], [gdAlignColumns.gt-sm], [gdAlignColumns.gt-md],\n  [gdAlignColumns.gt-lg]\n";
    /**
     * 'column alignment' CSS Grid styling directive
     * Configures the alignment in the column direction
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-19
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-21
     */

    var DefaultGridAlignColumnsDirective = /*#__PURE__*/function (_GridAlignColumnsDire) {
      _inherits(DefaultGridAlignColumnsDirective, _GridAlignColumnsDire);

      var _super40 = _createSuper(DefaultGridAlignColumnsDirective);

      function DefaultGridAlignColumnsDirective() {
        var _this60;

        _classCallCheck(this, DefaultGridAlignColumnsDirective);

        _this60 = _super40.apply(this, arguments);
        _this60.inputs = inputs$1;
        return _this60;
      }

      return DefaultGridAlignColumnsDirective;
    }(GridAlignColumnsDirective);

    DefaultGridAlignColumnsDirective.ɵfac = function DefaultGridAlignColumnsDirective_Factory(t) {
      return ɵDefaultGridAlignColumnsDirective_BaseFactory(t || DefaultGridAlignColumnsDirective);
    };

    DefaultGridAlignColumnsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultGridAlignColumnsDirective,
      selectors: [["", "gdAlignColumns", ""], ["", "gdAlignColumns.xs", ""], ["", "gdAlignColumns.sm", ""], ["", "gdAlignColumns.md", ""], ["", "gdAlignColumns.lg", ""], ["", "gdAlignColumns.xl", ""], ["", "gdAlignColumns.lt-sm", ""], ["", "gdAlignColumns.lt-md", ""], ["", "gdAlignColumns.lt-lg", ""], ["", "gdAlignColumns.lt-xl", ""], ["", "gdAlignColumns.gt-xs", ""], ["", "gdAlignColumns.gt-sm", ""], ["", "gdAlignColumns.gt-md", ""], ["", "gdAlignColumns.gt-lg", ""]],
      inputs: {
        gdAlignColumns: "gdAlignColumns",
        "gdAlignColumns.xs": "gdAlignColumns.xs",
        "gdAlignColumns.sm": "gdAlignColumns.sm",
        "gdAlignColumns.md": "gdAlignColumns.md",
        "gdAlignColumns.lg": "gdAlignColumns.lg",
        "gdAlignColumns.xl": "gdAlignColumns.xl",
        "gdAlignColumns.lt-sm": "gdAlignColumns.lt-sm",
        "gdAlignColumns.lt-md": "gdAlignColumns.lt-md",
        "gdAlignColumns.lt-lg": "gdAlignColumns.lt-lg",
        "gdAlignColumns.lt-xl": "gdAlignColumns.lt-xl",
        "gdAlignColumns.gt-xs": "gdAlignColumns.gt-xs",
        "gdAlignColumns.gt-sm": "gdAlignColumns.gt-sm",
        "gdAlignColumns.gt-md": "gdAlignColumns.gt-md",
        "gdAlignColumns.gt-lg": "gdAlignColumns.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultGridAlignColumnsDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAlignColumnsDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridAlignColumnsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector$1,
          inputs: inputs$1
        }]
      }], null, null);
    })();
    /**
     * @param {?} align
     * @param {?} inline
     * @return {?}
     */


    function buildCss$1(align, inline) {
      /** @type {?} */
      var css = {};

      var _align$split5 = align.split(' '),
          _align$split6 = _slicedToArray(_align$split5, 2),
          mainAxis = _align$split6[0],
          crossAxis = _align$split6[1]; // Main axis


      switch (mainAxis) {
        case 'center':
          css['align-content'] = 'center';
          break;

        case 'space-around':
          css['align-content'] = 'space-around';
          break;

        case 'space-between':
          css['align-content'] = 'space-between';
          break;

        case 'space-evenly':
          css['align-content'] = 'space-evenly';
          break;

        case 'end':
          css['align-content'] = 'end';
          break;

        case 'start':
          css['align-content'] = 'start';
          break;

        case 'stretch':
          css['align-content'] = 'stretch';
          break;

        default:
          css['align-content'] = DEFAULT_MAIN; // default main axis

          break;
      } // Cross-axis


      switch (crossAxis) {
        case 'start':
          css['align-items'] = 'start';
          break;

        case 'center':
          css['align-items'] = 'center';
          break;

        case 'end':
          css['align-items'] = 'end';
          break;

        case 'stretch':
          css['align-items'] = 'stretch';
          break;

        default:
          // 'stretch'
          css['align-items'] = DEFAULT_CROSS; // default cross axis

          break;
      }

      css['display'] = inline ? 'inline-grid' : 'grid';
      return css;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: grid/align-rows/align-rows.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_MAIN$1 = 'start';
    /** @type {?} */

    var DEFAULT_CROSS$1 = 'stretch';

    var GridAlignRowsStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_27) {
      _inherits(GridAlignRowsStyleBuilder, _angular_flex_layout_27);

      var _super41 = _createSuper(GridAlignRowsStyleBuilder);

      function GridAlignRowsStyleBuilder() {
        _classCallCheck(this, GridAlignRowsStyleBuilder);

        return _super41.apply(this, arguments);
      }

      _createClass(GridAlignRowsStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @param {?} parent
         * @return {?}
         */
        value: function buildStyles(input, parent) {
          return buildCss$2(input || "".concat(DEFAULT_MAIN$1, " ").concat(DEFAULT_CROSS$1), parent.inline);
        }
      }]);

      return GridAlignRowsStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridAlignRowsStyleBuilder.ɵfac = function GridAlignRowsStyleBuilder_Factory(t) {
      return ɵGridAlignRowsStyleBuilder_BaseFactory(t || GridAlignRowsStyleBuilder);
    };
    /** @nocollapse */


    GridAlignRowsStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function GridAlignRowsStyleBuilder_Factory() {
        return new GridAlignRowsStyleBuilder();
      },
      token: GridAlignRowsStyleBuilder,
      providedIn: "root"
    });

    var ɵGridAlignRowsStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAlignRowsStyleBuilder);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAlignRowsStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();

    var GridAlignRowsDirective = /*#__PURE__*/function (_angular_flex_layout_28) {
      _inherits(GridAlignRowsDirective, _angular_flex_layout_28);

      var _super42 = _createSuper(GridAlignRowsDirective);

      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       */
      function GridAlignRowsDirective(elementRef, styleBuilder, styler, marshal) {
        var _this61;

        _classCallCheck(this, GridAlignRowsDirective);

        _this61 = _super42.call(this, elementRef, styleBuilder, styler, marshal);
        _this61.DIRECTIVE_KEY = 'grid-align-rows';
        _this61._inline = false;

        _this61.init();

        return _this61;
      }
      /**
       * @return {?}
       */


      _createClass(GridAlignRowsDirective, [{
        key: "updateWithValue",
        // *********************************************
        // Protected methods
        // *********************************************

        /**
         * @protected
         * @param {?} value
         * @return {?}
         */
        value: function updateWithValue(value) {
          this.styleCache = this.inline ? alignRowsInlineCache : alignRowsCache;
          this.addStyles(value, {
            inline: this.inline
          });
        }
      }, {
        key: "inline",
        get: function get() {
          return this._inline;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
        }
      }]);

      return GridAlignRowsDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

    GridAlignRowsDirective.ɵfac = function GridAlignRowsDirective_Factory(t) {
      return new (t || GridAlignRowsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAlignRowsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
    };

    GridAlignRowsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: GridAlignRowsDirective,
      inputs: {
        inline: ["gdInline", "inline"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    GridAlignRowsDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: GridAlignRowsStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };

    GridAlignRowsDirective.propDecorators = {
      inline: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['gdInline']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAlignRowsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridAlignRowsStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      }, {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      });
    })();
    /** @type {?} */


    var alignRowsCache = new Map();
    /** @type {?} */

    var alignRowsInlineCache = new Map();
    /** @type {?} */

    var inputs$2 = ['gdAlignRows', 'gdAlignRows.xs', 'gdAlignRows.sm', 'gdAlignRows.md', 'gdAlignRows.lg', 'gdAlignRows.xl', 'gdAlignRows.lt-sm', 'gdAlignRows.lt-md', 'gdAlignRows.lt-lg', 'gdAlignRows.lt-xl', 'gdAlignRows.gt-xs', 'gdAlignRows.gt-sm', 'gdAlignRows.gt-md', 'gdAlignRows.gt-lg'];
    /** @type {?} */

    var selector$2 = "\n  [gdAlignRows],\n  [gdAlignRows.xs], [gdAlignRows.sm], [gdAlignRows.md],\n  [gdAlignRows.lg], [gdAlignRows.xl], [gdAlignRows.lt-sm],\n  [gdAlignRows.lt-md], [gdAlignRows.lt-lg], [gdAlignRows.lt-xl],\n  [gdAlignRows.gt-xs], [gdAlignRows.gt-sm], [gdAlignRows.gt-md],\n  [gdAlignRows.gt-lg]\n";
    /**
     * 'row alignment' CSS Grid styling directive
     * Configures the alignment in the row direction
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-18
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-20
     */

    var DefaultGridAlignRowsDirective = /*#__PURE__*/function (_GridAlignRowsDirecti) {
      _inherits(DefaultGridAlignRowsDirective, _GridAlignRowsDirecti);

      var _super43 = _createSuper(DefaultGridAlignRowsDirective);

      function DefaultGridAlignRowsDirective() {
        var _this62;

        _classCallCheck(this, DefaultGridAlignRowsDirective);

        _this62 = _super43.apply(this, arguments);
        _this62.inputs = inputs$2;
        return _this62;
      }

      return DefaultGridAlignRowsDirective;
    }(GridAlignRowsDirective);

    DefaultGridAlignRowsDirective.ɵfac = function DefaultGridAlignRowsDirective_Factory(t) {
      return ɵDefaultGridAlignRowsDirective_BaseFactory(t || DefaultGridAlignRowsDirective);
    };

    DefaultGridAlignRowsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultGridAlignRowsDirective,
      selectors: [["", "gdAlignRows", ""], ["", "gdAlignRows.xs", ""], ["", "gdAlignRows.sm", ""], ["", "gdAlignRows.md", ""], ["", "gdAlignRows.lg", ""], ["", "gdAlignRows.xl", ""], ["", "gdAlignRows.lt-sm", ""], ["", "gdAlignRows.lt-md", ""], ["", "gdAlignRows.lt-lg", ""], ["", "gdAlignRows.lt-xl", ""], ["", "gdAlignRows.gt-xs", ""], ["", "gdAlignRows.gt-sm", ""], ["", "gdAlignRows.gt-md", ""], ["", "gdAlignRows.gt-lg", ""]],
      inputs: {
        gdAlignRows: "gdAlignRows",
        "gdAlignRows.xs": "gdAlignRows.xs",
        "gdAlignRows.sm": "gdAlignRows.sm",
        "gdAlignRows.md": "gdAlignRows.md",
        "gdAlignRows.lg": "gdAlignRows.lg",
        "gdAlignRows.xl": "gdAlignRows.xl",
        "gdAlignRows.lt-sm": "gdAlignRows.lt-sm",
        "gdAlignRows.lt-md": "gdAlignRows.lt-md",
        "gdAlignRows.lt-lg": "gdAlignRows.lt-lg",
        "gdAlignRows.lt-xl": "gdAlignRows.lt-xl",
        "gdAlignRows.gt-xs": "gdAlignRows.gt-xs",
        "gdAlignRows.gt-sm": "gdAlignRows.gt-sm",
        "gdAlignRows.gt-md": "gdAlignRows.gt-md",
        "gdAlignRows.gt-lg": "gdAlignRows.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultGridAlignRowsDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAlignRowsDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridAlignRowsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector$2,
          inputs: inputs$2
        }]
      }], null, null);
    })();
    /**
     * @param {?} align
     * @param {?} inline
     * @return {?}
     */


    function buildCss$2(align, inline) {
      /** @type {?} */
      var css = {};

      var _align$split7 = align.split(' '),
          _align$split8 = _slicedToArray(_align$split7, 2),
          mainAxis = _align$split8[0],
          crossAxis = _align$split8[1]; // Main axis


      switch (mainAxis) {
        case 'center':
        case 'space-around':
        case 'space-between':
        case 'space-evenly':
        case 'end':
        case 'start':
        case 'stretch':
          css['justify-content'] = mainAxis;
          break;

        default:
          css['justify-content'] = DEFAULT_MAIN$1; // default main axis

          break;
      } // Cross-axis


      switch (crossAxis) {
        case 'start':
        case 'center':
        case 'end':
        case 'stretch':
          css['justify-items'] = crossAxis;
          break;

        default:
          // 'stretch'
          css['justify-items'] = DEFAULT_CROSS$1; // default cross axis

          break;
      }

      css['display'] = inline ? 'inline-grid' : 'grid';
      return css;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: grid/area/area.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_VALUE = 'auto';

    var GridAreaStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_29) {
      _inherits(GridAreaStyleBuilder, _angular_flex_layout_29);

      var _super44 = _createSuper(GridAreaStyleBuilder);

      function GridAreaStyleBuilder() {
        _classCallCheck(this, GridAreaStyleBuilder);

        return _super44.apply(this, arguments);
      }

      _createClass(GridAreaStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @return {?}
         */
        value: function buildStyles(input) {
          return {
            'grid-area': input || DEFAULT_VALUE
          };
        }
      }]);

      return GridAreaStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridAreaStyleBuilder.ɵfac = function GridAreaStyleBuilder_Factory(t) {
      return ɵGridAreaStyleBuilder_BaseFactory(t || GridAreaStyleBuilder);
    };
    /** @nocollapse */


    GridAreaStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function GridAreaStyleBuilder_Factory() {
        return new GridAreaStyleBuilder();
      },
      token: GridAreaStyleBuilder,
      providedIn: "root"
    });

    var ɵGridAreaStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAreaStyleBuilder);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAreaStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();

    var GridAreaDirective = /*#__PURE__*/function (_angular_flex_layout_30) {
      _inherits(GridAreaDirective, _angular_flex_layout_30);

      var _super45 = _createSuper(GridAreaDirective);

      /**
       * @param {?} elRef
       * @param {?} styleUtils
       * @param {?} styleBuilder
       * @param {?} marshal
       */
      function GridAreaDirective(elRef, styleUtils, styleBuilder, marshal) {
        var _this63;

        _classCallCheck(this, GridAreaDirective);

        _this63 = _super45.call(this, elRef, styleBuilder, styleUtils, marshal);
        _this63.DIRECTIVE_KEY = 'grid-area';
        _this63.styleCache = gridAreaCache;

        _this63.init();

        return _this63;
      }

      return GridAreaDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

    GridAreaDirective.ɵfac = function GridAreaDirective_Factory(t) {
      return new (t || GridAreaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAreaStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
    };

    GridAreaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: GridAreaDirective,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    GridAreaDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: GridAreaStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAreaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: GridAreaStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      }, null);
    })();
    /** @type {?} */


    var gridAreaCache = new Map();
    /** @type {?} */

    var inputs$3 = ['gdArea', 'gdArea.xs', 'gdArea.sm', 'gdArea.md', 'gdArea.lg', 'gdArea.xl', 'gdArea.lt-sm', 'gdArea.lt-md', 'gdArea.lt-lg', 'gdArea.lt-xl', 'gdArea.gt-xs', 'gdArea.gt-sm', 'gdArea.gt-md', 'gdArea.gt-lg'];
    /** @type {?} */

    var selector$3 = "\n  [gdArea],\n  [gdArea.xs], [gdArea.sm], [gdArea.md], [gdArea.lg], [gdArea.xl],\n  [gdArea.lt-sm], [gdArea.lt-md], [gdArea.lt-lg], [gdArea.lt-xl],\n  [gdArea.gt-xs], [gdArea.gt-sm], [gdArea.gt-md], [gdArea.gt-lg]\n";
    /**
     * 'grid-area' CSS Grid styling directive
     * Configures the name or position of an element within the grid
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-27
     */

    var DefaultGridAreaDirective = /*#__PURE__*/function (_GridAreaDirective) {
      _inherits(DefaultGridAreaDirective, _GridAreaDirective);

      var _super46 = _createSuper(DefaultGridAreaDirective);

      function DefaultGridAreaDirective() {
        var _this64;

        _classCallCheck(this, DefaultGridAreaDirective);

        _this64 = _super46.apply(this, arguments);
        _this64.inputs = inputs$3;
        return _this64;
      }

      return DefaultGridAreaDirective;
    }(GridAreaDirective);

    DefaultGridAreaDirective.ɵfac = function DefaultGridAreaDirective_Factory(t) {
      return ɵDefaultGridAreaDirective_BaseFactory(t || DefaultGridAreaDirective);
    };

    DefaultGridAreaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultGridAreaDirective,
      selectors: [["", "gdArea", ""], ["", "gdArea.xs", ""], ["", "gdArea.sm", ""], ["", "gdArea.md", ""], ["", "gdArea.lg", ""], ["", "gdArea.xl", ""], ["", "gdArea.lt-sm", ""], ["", "gdArea.lt-md", ""], ["", "gdArea.lt-lg", ""], ["", "gdArea.lt-xl", ""], ["", "gdArea.gt-xs", ""], ["", "gdArea.gt-sm", ""], ["", "gdArea.gt-md", ""], ["", "gdArea.gt-lg", ""]],
      inputs: {
        gdArea: "gdArea",
        "gdArea.xs": "gdArea.xs",
        "gdArea.sm": "gdArea.sm",
        "gdArea.md": "gdArea.md",
        "gdArea.lg": "gdArea.lg",
        "gdArea.xl": "gdArea.xl",
        "gdArea.lt-sm": "gdArea.lt-sm",
        "gdArea.lt-md": "gdArea.lt-md",
        "gdArea.lt-lg": "gdArea.lt-lg",
        "gdArea.lt-xl": "gdArea.lt-xl",
        "gdArea.gt-xs": "gdArea.gt-xs",
        "gdArea.gt-sm": "gdArea.gt-sm",
        "gdArea.gt-md": "gdArea.gt-md",
        "gdArea.gt-lg": "gdArea.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultGridAreaDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAreaDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridAreaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector$3,
          inputs: inputs$3
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: grid/areas/areas.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_VALUE$1 = 'none';
    /** @type {?} */

    var DELIMETER = '|';

    var GridAreasStyleBuiler = /*#__PURE__*/function (_angular_flex_layout_31) {
      _inherits(GridAreasStyleBuiler, _angular_flex_layout_31);

      var _super47 = _createSuper(GridAreasStyleBuiler);

      function GridAreasStyleBuiler() {
        _classCallCheck(this, GridAreasStyleBuiler);

        return _super47.apply(this, arguments);
      }

      _createClass(GridAreasStyleBuiler, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @param {?} parent
         * @return {?}
         */
        value: function buildStyles(input, parent) {
          /** @type {?} */
          var areas = (input || DEFAULT_VALUE$1).split(DELIMETER).map(
          /**
          * @param {?} v
          * @return {?}
          */
          function (v) {
            return "\"".concat(v.trim(), "\"");
          });
          return {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-template-areas': areas.join(' ')
          };
        }
      }]);

      return GridAreasStyleBuiler;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridAreasStyleBuiler.ɵfac = function GridAreasStyleBuiler_Factory(t) {
      return ɵGridAreasStyleBuiler_BaseFactory(t || GridAreasStyleBuiler);
    };
    /** @nocollapse */


    GridAreasStyleBuiler.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function GridAreasStyleBuiler_Factory() {
        return new GridAreasStyleBuiler();
      },
      token: GridAreasStyleBuiler,
      providedIn: "root"
    });

    var ɵGridAreasStyleBuiler_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAreasStyleBuiler);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAreasStyleBuiler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();

    var GridAreasDirective = /*#__PURE__*/function (_angular_flex_layout_32) {
      _inherits(GridAreasDirective, _angular_flex_layout_32);

      var _super48 = _createSuper(GridAreasDirective);

      /**
       * @param {?} elRef
       * @param {?} styleUtils
       * @param {?} styleBuilder
       * @param {?} marshal
       */
      function GridAreasDirective(elRef, styleUtils, styleBuilder, marshal) {
        var _this65;

        _classCallCheck(this, GridAreasDirective);

        _this65 = _super48.call(this, elRef, styleBuilder, styleUtils, marshal);
        _this65.DIRECTIVE_KEY = 'grid-areas';
        _this65._inline = false;

        _this65.init();

        return _this65;
      }
      /**
       * @return {?}
       */


      _createClass(GridAreasDirective, [{
        key: "updateWithValue",
        // *********************************************
        // Protected methods
        // *********************************************

        /**
         * @protected
         * @param {?} value
         * @return {?}
         */
        value: function updateWithValue(value) {
          this.styleCache = this.inline ? areasInlineCache : areasCache;
          this.addStyles(value, {
            inline: this.inline
          });
        }
      }, {
        key: "inline",
        get: function get() {
          return this._inline;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
        }
      }]);

      return GridAreasDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

    GridAreasDirective.ɵfac = function GridAreasDirective_Factory(t) {
      return new (t || GridAreasDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAreasStyleBuiler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
    };

    GridAreasDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: GridAreasDirective,
      inputs: {
        inline: ["gdInline", "inline"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    GridAreasDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: GridAreasStyleBuiler
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };

    GridAreasDirective.propDecorators = {
      inline: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['gdInline']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAreasDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: GridAreasStyleBuiler
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      }, {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      });
    })();
    /** @type {?} */


    var areasCache = new Map();
    /** @type {?} */

    var areasInlineCache = new Map();
    /** @type {?} */

    var inputs$4 = ['gdAreas', 'gdAreas.xs', 'gdAreas.sm', 'gdAreas.md', 'gdAreas.lg', 'gdAreas.xl', 'gdAreas.lt-sm', 'gdAreas.lt-md', 'gdAreas.lt-lg', 'gdAreas.lt-xl', 'gdAreas.gt-xs', 'gdAreas.gt-sm', 'gdAreas.gt-md', 'gdAreas.gt-lg'];
    /** @type {?} */

    var selector$4 = "\n  [gdAreas],\n  [gdAreas.xs], [gdAreas.sm], [gdAreas.md], [gdAreas.lg], [gdAreas.xl],\n  [gdAreas.lt-sm], [gdAreas.lt-md], [gdAreas.lt-lg], [gdAreas.lt-xl],\n  [gdAreas.gt-xs], [gdAreas.gt-sm], [gdAreas.gt-md], [gdAreas.gt-lg]\n";
    /**
     * 'grid-template-areas' CSS Grid styling directive
     * Configures the names of elements within the grid
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-14
     */

    var DefaultGridAreasDirective = /*#__PURE__*/function (_GridAreasDirective) {
      _inherits(DefaultGridAreasDirective, _GridAreasDirective);

      var _super49 = _createSuper(DefaultGridAreasDirective);

      function DefaultGridAreasDirective() {
        var _this66;

        _classCallCheck(this, DefaultGridAreasDirective);

        _this66 = _super49.apply(this, arguments);
        _this66.inputs = inputs$4;
        return _this66;
      }

      return DefaultGridAreasDirective;
    }(GridAreasDirective);

    DefaultGridAreasDirective.ɵfac = function DefaultGridAreasDirective_Factory(t) {
      return ɵDefaultGridAreasDirective_BaseFactory(t || DefaultGridAreasDirective);
    };

    DefaultGridAreasDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultGridAreasDirective,
      selectors: [["", "gdAreas", ""], ["", "gdAreas.xs", ""], ["", "gdAreas.sm", ""], ["", "gdAreas.md", ""], ["", "gdAreas.lg", ""], ["", "gdAreas.xl", ""], ["", "gdAreas.lt-sm", ""], ["", "gdAreas.lt-md", ""], ["", "gdAreas.lt-lg", ""], ["", "gdAreas.lt-xl", ""], ["", "gdAreas.gt-xs", ""], ["", "gdAreas.gt-sm", ""], ["", "gdAreas.gt-md", ""], ["", "gdAreas.gt-lg", ""]],
      inputs: {
        gdAreas: "gdAreas",
        "gdAreas.xs": "gdAreas.xs",
        "gdAreas.sm": "gdAreas.sm",
        "gdAreas.md": "gdAreas.md",
        "gdAreas.lg": "gdAreas.lg",
        "gdAreas.xl": "gdAreas.xl",
        "gdAreas.lt-sm": "gdAreas.lt-sm",
        "gdAreas.lt-md": "gdAreas.lt-md",
        "gdAreas.lt-lg": "gdAreas.lt-lg",
        "gdAreas.lt-xl": "gdAreas.lt-xl",
        "gdAreas.gt-xs": "gdAreas.gt-xs",
        "gdAreas.gt-sm": "gdAreas.gt-sm",
        "gdAreas.gt-md": "gdAreas.gt-md",
        "gdAreas.gt-lg": "gdAreas.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultGridAreasDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAreasDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridAreasDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector$4,
          inputs: inputs$4
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: grid/auto/auto.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_VALUE$2 = 'initial';

    var GridAutoStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_33) {
      _inherits(GridAutoStyleBuilder, _angular_flex_layout_33);

      var _super50 = _createSuper(GridAutoStyleBuilder);

      function GridAutoStyleBuilder() {
        _classCallCheck(this, GridAutoStyleBuilder);

        return _super50.apply(this, arguments);
      }

      _createClass(GridAutoStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @param {?} parent
         * @return {?}
         */
        value: function buildStyles(input, parent) {
          var _split = (input || DEFAULT_VALUE$2).split(' '),
              _split2 = _slicedToArray(_split, 2),
              direction = _split2[0],
              dense = _split2[1];

          if (direction !== 'column' && direction !== 'row' && direction !== 'dense') {
            direction = 'row';
          }

          dense = dense === 'dense' && direction !== 'dense' ? ' dense' : '';
          return {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-auto-flow': direction + dense
          };
        }
      }]);

      return GridAutoStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridAutoStyleBuilder.ɵfac = function GridAutoStyleBuilder_Factory(t) {
      return ɵGridAutoStyleBuilder_BaseFactory(t || GridAutoStyleBuilder);
    };
    /** @nocollapse */


    GridAutoStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function GridAutoStyleBuilder_Factory() {
        return new GridAutoStyleBuilder();
      },
      token: GridAutoStyleBuilder,
      providedIn: "root"
    });

    var ɵGridAutoStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridAutoStyleBuilder);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAutoStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();

    var GridAutoDirective = /*#__PURE__*/function (_angular_flex_layout_34) {
      _inherits(GridAutoDirective, _angular_flex_layout_34);

      var _super51 = _createSuper(GridAutoDirective);

      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       */
      function GridAutoDirective(elementRef, styleBuilder, styler, marshal) {
        var _this67;

        _classCallCheck(this, GridAutoDirective);

        _this67 = _super51.call(this, elementRef, styleBuilder, styler, marshal);
        _this67._inline = false;
        _this67.DIRECTIVE_KEY = 'grid-auto';

        _this67.init();

        return _this67;
      }
      /**
       * @return {?}
       */


      _createClass(GridAutoDirective, [{
        key: "updateWithValue",
        // *********************************************
        // Protected methods
        // *********************************************

        /**
         * @protected
         * @param {?} value
         * @return {?}
         */
        value: function updateWithValue(value) {
          this.styleCache = this.inline ? autoInlineCache : autoCache;
          this.addStyles(value, {
            inline: this.inline
          });
        }
      }, {
        key: "inline",
        get: function get() {
          return this._inline;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
        }
      }]);

      return GridAutoDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

    GridAutoDirective.ɵfac = function GridAutoDirective_Factory(t) {
      return new (t || GridAutoDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridAutoStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
    };

    GridAutoDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: GridAutoDirective,
      inputs: {
        inline: ["gdInline", "inline"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    GridAutoDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: GridAutoStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };

    GridAutoDirective.propDecorators = {
      inline: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['gdInline']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridAutoDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridAutoStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      }, {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      });
    })();
    /** @type {?} */


    var autoCache = new Map();
    /** @type {?} */

    var autoInlineCache = new Map();
    /** @type {?} */

    var inputs$5 = ['gdAuto', 'gdAuto.xs', 'gdAuto.sm', 'gdAuto.md', 'gdAuto.lg', 'gdAuto.xl', 'gdAuto.lt-sm', 'gdAuto.lt-md', 'gdAuto.lt-lg', 'gdAuto.lt-xl', 'gdAuto.gt-xs', 'gdAuto.gt-sm', 'gdAuto.gt-md', 'gdAuto.gt-lg'];
    /** @type {?} */

    var selector$5 = "\n  [gdAuto],\n  [gdAuto.xs], [gdAuto.sm], [gdAuto.md], [gdAuto.lg], [gdAuto.xl],\n  [gdAuto.lt-sm], [gdAuto.lt-md], [gdAuto.lt-lg], [gdAuto.lt-xl],\n  [gdAuto.gt-xs], [gdAuto.gt-sm], [gdAuto.gt-md], [gdAuto.gt-lg]\n";
    /**
     * 'grid-auto-flow' CSS Grid styling directive
     * Configures the auto placement algorithm for the grid
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-23
     */

    var DefaultGridAutoDirective = /*#__PURE__*/function (_GridAutoDirective) {
      _inherits(DefaultGridAutoDirective, _GridAutoDirective);

      var _super52 = _createSuper(DefaultGridAutoDirective);

      function DefaultGridAutoDirective() {
        var _this68;

        _classCallCheck(this, DefaultGridAutoDirective);

        _this68 = _super52.apply(this, arguments);
        _this68.inputs = inputs$5;
        return _this68;
      }

      return DefaultGridAutoDirective;
    }(GridAutoDirective);

    DefaultGridAutoDirective.ɵfac = function DefaultGridAutoDirective_Factory(t) {
      return ɵDefaultGridAutoDirective_BaseFactory(t || DefaultGridAutoDirective);
    };

    DefaultGridAutoDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultGridAutoDirective,
      selectors: [["", "gdAuto", ""], ["", "gdAuto.xs", ""], ["", "gdAuto.sm", ""], ["", "gdAuto.md", ""], ["", "gdAuto.lg", ""], ["", "gdAuto.xl", ""], ["", "gdAuto.lt-sm", ""], ["", "gdAuto.lt-md", ""], ["", "gdAuto.lt-lg", ""], ["", "gdAuto.lt-xl", ""], ["", "gdAuto.gt-xs", ""], ["", "gdAuto.gt-sm", ""], ["", "gdAuto.gt-md", ""], ["", "gdAuto.gt-lg", ""]],
      inputs: {
        gdAuto: "gdAuto",
        "gdAuto.xs": "gdAuto.xs",
        "gdAuto.sm": "gdAuto.sm",
        "gdAuto.md": "gdAuto.md",
        "gdAuto.lg": "gdAuto.lg",
        "gdAuto.xl": "gdAuto.xl",
        "gdAuto.lt-sm": "gdAuto.lt-sm",
        "gdAuto.lt-md": "gdAuto.lt-md",
        "gdAuto.lt-lg": "gdAuto.lt-lg",
        "gdAuto.lt-xl": "gdAuto.lt-xl",
        "gdAuto.gt-xs": "gdAuto.gt-xs",
        "gdAuto.gt-sm": "gdAuto.gt-sm",
        "gdAuto.gt-md": "gdAuto.gt-md",
        "gdAuto.gt-lg": "gdAuto.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultGridAutoDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridAutoDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridAutoDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector$5,
          inputs: inputs$5
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: grid/column/column.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_VALUE$3 = 'auto';

    var GridColumnStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_35) {
      _inherits(GridColumnStyleBuilder, _angular_flex_layout_35);

      var _super53 = _createSuper(GridColumnStyleBuilder);

      function GridColumnStyleBuilder() {
        _classCallCheck(this, GridColumnStyleBuilder);

        return _super53.apply(this, arguments);
      }

      _createClass(GridColumnStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @return {?}
         */
        value: function buildStyles(input) {
          return {
            'grid-column': input || DEFAULT_VALUE$3
          };
        }
      }]);

      return GridColumnStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridColumnStyleBuilder.ɵfac = function GridColumnStyleBuilder_Factory(t) {
      return ɵGridColumnStyleBuilder_BaseFactory(t || GridColumnStyleBuilder);
    };
    /** @nocollapse */


    GridColumnStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function GridColumnStyleBuilder_Factory() {
        return new GridColumnStyleBuilder();
      },
      token: GridColumnStyleBuilder,
      providedIn: "root"
    });

    var ɵGridColumnStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridColumnStyleBuilder);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridColumnStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();

    var GridColumnDirective = /*#__PURE__*/function (_angular_flex_layout_36) {
      _inherits(GridColumnDirective, _angular_flex_layout_36);

      var _super54 = _createSuper(GridColumnDirective);

      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       */
      function GridColumnDirective(elementRef, styleBuilder, styler, marshal) {
        var _this69;

        _classCallCheck(this, GridColumnDirective);

        _this69 = _super54.call(this, elementRef, styleBuilder, styler, marshal);
        _this69.DIRECTIVE_KEY = 'grid-column';
        _this69.styleCache = columnCache;

        _this69.init();

        return _this69;
      }

      return GridColumnDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

    GridColumnDirective.ɵfac = function GridColumnDirective_Factory(t) {
      return new (t || GridColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridColumnStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
    };

    GridColumnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: GridColumnDirective,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    GridColumnDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: GridColumnStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridColumnDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridColumnStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      }, null);
    })();
    /** @type {?} */


    var columnCache = new Map();
    /** @type {?} */

    var inputs$6 = ['gdColumn', 'gdColumn.xs', 'gdColumn.sm', 'gdColumn.md', 'gdColumn.lg', 'gdColumn.xl', 'gdColumn.lt-sm', 'gdColumn.lt-md', 'gdColumn.lt-lg', 'gdColumn.lt-xl', 'gdColumn.gt-xs', 'gdColumn.gt-sm', 'gdColumn.gt-md', 'gdColumn.gt-lg'];
    /** @type {?} */

    var selector$6 = "\n  [gdColumn],\n  [gdColumn.xs], [gdColumn.sm], [gdColumn.md], [gdColumn.lg], [gdColumn.xl],\n  [gdColumn.lt-sm], [gdColumn.lt-md], [gdColumn.lt-lg], [gdColumn.lt-xl],\n  [gdColumn.gt-xs], [gdColumn.gt-sm], [gdColumn.gt-md], [gdColumn.gt-lg]\n";
    /**
     * 'grid-column' CSS Grid styling directive
     * Configures the name or position of an element within the grid
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
     */

    var DefaultGridColumnDirective = /*#__PURE__*/function (_GridColumnDirective) {
      _inherits(DefaultGridColumnDirective, _GridColumnDirective);

      var _super55 = _createSuper(DefaultGridColumnDirective);

      function DefaultGridColumnDirective() {
        var _this70;

        _classCallCheck(this, DefaultGridColumnDirective);

        _this70 = _super55.apply(this, arguments);
        _this70.inputs = inputs$6;
        return _this70;
      }

      return DefaultGridColumnDirective;
    }(GridColumnDirective);

    DefaultGridColumnDirective.ɵfac = function DefaultGridColumnDirective_Factory(t) {
      return ɵDefaultGridColumnDirective_BaseFactory(t || DefaultGridColumnDirective);
    };

    DefaultGridColumnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultGridColumnDirective,
      selectors: [["", "gdColumn", ""], ["", "gdColumn.xs", ""], ["", "gdColumn.sm", ""], ["", "gdColumn.md", ""], ["", "gdColumn.lg", ""], ["", "gdColumn.xl", ""], ["", "gdColumn.lt-sm", ""], ["", "gdColumn.lt-md", ""], ["", "gdColumn.lt-lg", ""], ["", "gdColumn.lt-xl", ""], ["", "gdColumn.gt-xs", ""], ["", "gdColumn.gt-sm", ""], ["", "gdColumn.gt-md", ""], ["", "gdColumn.gt-lg", ""]],
      inputs: {
        gdColumn: "gdColumn",
        "gdColumn.xs": "gdColumn.xs",
        "gdColumn.sm": "gdColumn.sm",
        "gdColumn.md": "gdColumn.md",
        "gdColumn.lg": "gdColumn.lg",
        "gdColumn.xl": "gdColumn.xl",
        "gdColumn.lt-sm": "gdColumn.lt-sm",
        "gdColumn.lt-md": "gdColumn.lt-md",
        "gdColumn.lt-lg": "gdColumn.lt-lg",
        "gdColumn.lt-xl": "gdColumn.lt-xl",
        "gdColumn.gt-xs": "gdColumn.gt-xs",
        "gdColumn.gt-sm": "gdColumn.gt-sm",
        "gdColumn.gt-md": "gdColumn.gt-md",
        "gdColumn.gt-lg": "gdColumn.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultGridColumnDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridColumnDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridColumnDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector$6,
          inputs: inputs$6
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: grid/columns/columns.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_VALUE$4 = 'none';
    /** @type {?} */

    var AUTO_SPECIFIER = '!';

    var GridColumnsStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_37) {
      _inherits(GridColumnsStyleBuilder, _angular_flex_layout_37);

      var _super56 = _createSuper(GridColumnsStyleBuilder);

      function GridColumnsStyleBuilder() {
        _classCallCheck(this, GridColumnsStyleBuilder);

        return _super56.apply(this, arguments);
      }

      _createClass(GridColumnsStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @param {?} parent
         * @return {?}
         */
        value: function buildStyles(input, parent) {
          input = input || DEFAULT_VALUE$4;
          /** @type {?} */

          var auto = false;

          if (input.endsWith(AUTO_SPECIFIER)) {
            input = input.substring(0, input.indexOf(AUTO_SPECIFIER));
            auto = true;
          }
          /** @type {?} */


          var css = {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-auto-columns': '',
            'grid-template-columns': ''
          };
          /** @type {?} */

          var key = auto ? 'grid-auto-columns' : 'grid-template-columns';
          css[key] = input;
          return css;
        }
      }]);

      return GridColumnsStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridColumnsStyleBuilder.ɵfac = function GridColumnsStyleBuilder_Factory(t) {
      return ɵGridColumnsStyleBuilder_BaseFactory(t || GridColumnsStyleBuilder);
    };
    /** @nocollapse */


    GridColumnsStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function GridColumnsStyleBuilder_Factory() {
        return new GridColumnsStyleBuilder();
      },
      token: GridColumnsStyleBuilder,
      providedIn: "root"
    });

    var ɵGridColumnsStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridColumnsStyleBuilder);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridColumnsStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();

    var GridColumnsDirective = /*#__PURE__*/function (_angular_flex_layout_38) {
      _inherits(GridColumnsDirective, _angular_flex_layout_38);

      var _super57 = _createSuper(GridColumnsDirective);

      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       */
      function GridColumnsDirective(elementRef, styleBuilder, styler, marshal) {
        var _this71;

        _classCallCheck(this, GridColumnsDirective);

        _this71 = _super57.call(this, elementRef, styleBuilder, styler, marshal);
        _this71.DIRECTIVE_KEY = 'grid-columns';
        _this71._inline = false;

        _this71.init();

        return _this71;
      }
      /**
       * @return {?}
       */


      _createClass(GridColumnsDirective, [{
        key: "updateWithValue",
        // *********************************************
        // Protected methods
        // *********************************************

        /**
         * @protected
         * @param {?} value
         * @return {?}
         */
        value: function updateWithValue(value) {
          this.styleCache = this.inline ? columnsInlineCache : columnsCache;
          this.addStyles(value, {
            inline: this.inline
          });
        }
      }, {
        key: "inline",
        get: function get() {
          return this._inline;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
        }
      }]);

      return GridColumnsDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

    GridColumnsDirective.ɵfac = function GridColumnsDirective_Factory(t) {
      return new (t || GridColumnsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridColumnsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
    };

    GridColumnsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: GridColumnsDirective,
      inputs: {
        inline: ["gdInline", "inline"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    GridColumnsDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: GridColumnsStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };

    GridColumnsDirective.propDecorators = {
      inline: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['gdInline']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridColumnsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridColumnsStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      }, {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      });
    })();
    /** @type {?} */


    var columnsCache = new Map();
    /** @type {?} */

    var columnsInlineCache = new Map();
    /** @type {?} */

    var inputs$7 = ['gdColumns', 'gdColumns.xs', 'gdColumns.sm', 'gdColumns.md', 'gdColumns.lg', 'gdColumns.xl', 'gdColumns.lt-sm', 'gdColumns.lt-md', 'gdColumns.lt-lg', 'gdColumns.lt-xl', 'gdColumns.gt-xs', 'gdColumns.gt-sm', 'gdColumns.gt-md', 'gdColumns.gt-lg'];
    /** @type {?} */

    var selector$7 = "\n  [gdColumns],\n  [gdColumns.xs], [gdColumns.sm], [gdColumns.md], [gdColumns.lg], [gdColumns.xl],\n  [gdColumns.lt-sm], [gdColumns.lt-md], [gdColumns.lt-lg], [gdColumns.lt-xl],\n  [gdColumns.gt-xs], [gdColumns.gt-sm], [gdColumns.gt-md], [gdColumns.gt-lg]\n";
    /**
     * 'grid-template-columns' CSS Grid styling directive
     * Configures the sizing for the columns in the grid
     * Syntax: <column value> [auto]
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
     */

    var DefaultGridColumnsDirective = /*#__PURE__*/function (_GridColumnsDirective) {
      _inherits(DefaultGridColumnsDirective, _GridColumnsDirective);

      var _super58 = _createSuper(DefaultGridColumnsDirective);

      function DefaultGridColumnsDirective() {
        var _this72;

        _classCallCheck(this, DefaultGridColumnsDirective);

        _this72 = _super58.apply(this, arguments);
        _this72.inputs = inputs$7;
        return _this72;
      }

      return DefaultGridColumnsDirective;
    }(GridColumnsDirective);

    DefaultGridColumnsDirective.ɵfac = function DefaultGridColumnsDirective_Factory(t) {
      return ɵDefaultGridColumnsDirective_BaseFactory(t || DefaultGridColumnsDirective);
    };

    DefaultGridColumnsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultGridColumnsDirective,
      selectors: [["", "gdColumns", ""], ["", "gdColumns.xs", ""], ["", "gdColumns.sm", ""], ["", "gdColumns.md", ""], ["", "gdColumns.lg", ""], ["", "gdColumns.xl", ""], ["", "gdColumns.lt-sm", ""], ["", "gdColumns.lt-md", ""], ["", "gdColumns.lt-lg", ""], ["", "gdColumns.lt-xl", ""], ["", "gdColumns.gt-xs", ""], ["", "gdColumns.gt-sm", ""], ["", "gdColumns.gt-md", ""], ["", "gdColumns.gt-lg", ""]],
      inputs: {
        gdColumns: "gdColumns",
        "gdColumns.xs": "gdColumns.xs",
        "gdColumns.sm": "gdColumns.sm",
        "gdColumns.md": "gdColumns.md",
        "gdColumns.lg": "gdColumns.lg",
        "gdColumns.xl": "gdColumns.xl",
        "gdColumns.lt-sm": "gdColumns.lt-sm",
        "gdColumns.lt-md": "gdColumns.lt-md",
        "gdColumns.lt-lg": "gdColumns.lt-lg",
        "gdColumns.lt-xl": "gdColumns.lt-xl",
        "gdColumns.gt-xs": "gdColumns.gt-xs",
        "gdColumns.gt-sm": "gdColumns.gt-sm",
        "gdColumns.gt-md": "gdColumns.gt-md",
        "gdColumns.gt-lg": "gdColumns.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultGridColumnsDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridColumnsDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridColumnsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector$7,
          inputs: inputs$7
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: grid/gap/gap.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_VALUE$5 = '0';

    var GridGapStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_39) {
      _inherits(GridGapStyleBuilder, _angular_flex_layout_39);

      var _super59 = _createSuper(GridGapStyleBuilder);

      function GridGapStyleBuilder() {
        _classCallCheck(this, GridGapStyleBuilder);

        return _super59.apply(this, arguments);
      }

      _createClass(GridGapStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @param {?} parent
         * @return {?}
         */
        value: function buildStyles(input, parent) {
          return {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-gap': input || DEFAULT_VALUE$5
          };
        }
      }]);

      return GridGapStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridGapStyleBuilder.ɵfac = function GridGapStyleBuilder_Factory(t) {
      return ɵGridGapStyleBuilder_BaseFactory(t || GridGapStyleBuilder);
    };
    /** @nocollapse */


    GridGapStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function GridGapStyleBuilder_Factory() {
        return new GridGapStyleBuilder();
      },
      token: GridGapStyleBuilder,
      providedIn: "root"
    });

    var ɵGridGapStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridGapStyleBuilder);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridGapStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();

    var GridGapDirective = /*#__PURE__*/function (_angular_flex_layout_40) {
      _inherits(GridGapDirective, _angular_flex_layout_40);

      var _super60 = _createSuper(GridGapDirective);

      /**
       * @param {?} elRef
       * @param {?} styleUtils
       * @param {?} styleBuilder
       * @param {?} marshal
       */
      function GridGapDirective(elRef, styleUtils, styleBuilder, marshal) {
        var _this73;

        _classCallCheck(this, GridGapDirective);

        _this73 = _super60.call(this, elRef, styleBuilder, styleUtils, marshal);
        _this73.DIRECTIVE_KEY = 'grid-gap';
        _this73._inline = false;

        _this73.init();

        return _this73;
      }
      /**
       * @return {?}
       */


      _createClass(GridGapDirective, [{
        key: "updateWithValue",
        // *********************************************
        // Protected methods
        // *********************************************

        /**
         * @protected
         * @param {?} value
         * @return {?}
         */
        value: function updateWithValue(value) {
          this.styleCache = this.inline ? gapInlineCache : gapCache;
          this.addStyles(value, {
            inline: this.inline
          });
        }
      }, {
        key: "inline",
        get: function get() {
          return this._inline;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
        }
      }]);

      return GridGapDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

    GridGapDirective.ɵfac = function GridGapDirective_Factory(t) {
      return new (t || GridGapDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridGapStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
    };

    GridGapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: GridGapDirective,
      inputs: {
        inline: ["gdInline", "inline"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    GridGapDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: GridGapStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };

    GridGapDirective.propDecorators = {
      inline: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['gdInline']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridGapDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: GridGapStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      }, {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      });
    })();
    /** @type {?} */


    var gapCache = new Map();
    /** @type {?} */

    var gapInlineCache = new Map();
    /** @type {?} */

    var inputs$8 = ['gdGap', 'gdGap.xs', 'gdGap.sm', 'gdGap.md', 'gdGap.lg', 'gdGap.xl', 'gdGap.lt-sm', 'gdGap.lt-md', 'gdGap.lt-lg', 'gdGap.lt-xl', 'gdGap.gt-xs', 'gdGap.gt-sm', 'gdGap.gt-md', 'gdGap.gt-lg'];
    /** @type {?} */

    var selector$8 = "\n  [gdGap],\n  [gdGap.xs], [gdGap.sm], [gdGap.md], [gdGap.lg], [gdGap.xl],\n  [gdGap.lt-sm], [gdGap.lt-md], [gdGap.lt-lg], [gdGap.lt-xl],\n  [gdGap.gt-xs], [gdGap.gt-sm], [gdGap.gt-md], [gdGap.gt-lg]\n";
    /**
     * 'grid-gap' CSS Grid styling directive
     * Configures the gap between items in the grid
     * Syntax: <row gap> [<column-gap>]
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-17
     */

    var DefaultGridGapDirective = /*#__PURE__*/function (_GridGapDirective) {
      _inherits(DefaultGridGapDirective, _GridGapDirective);

      var _super61 = _createSuper(DefaultGridGapDirective);

      function DefaultGridGapDirective() {
        var _this74;

        _classCallCheck(this, DefaultGridGapDirective);

        _this74 = _super61.apply(this, arguments);
        _this74.inputs = inputs$8;
        return _this74;
      }

      return DefaultGridGapDirective;
    }(GridGapDirective);

    DefaultGridGapDirective.ɵfac = function DefaultGridGapDirective_Factory(t) {
      return ɵDefaultGridGapDirective_BaseFactory(t || DefaultGridGapDirective);
    };

    DefaultGridGapDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultGridGapDirective,
      selectors: [["", "gdGap", ""], ["", "gdGap.xs", ""], ["", "gdGap.sm", ""], ["", "gdGap.md", ""], ["", "gdGap.lg", ""], ["", "gdGap.xl", ""], ["", "gdGap.lt-sm", ""], ["", "gdGap.lt-md", ""], ["", "gdGap.lt-lg", ""], ["", "gdGap.lt-xl", ""], ["", "gdGap.gt-xs", ""], ["", "gdGap.gt-sm", ""], ["", "gdGap.gt-md", ""], ["", "gdGap.gt-lg", ""]],
      inputs: {
        gdGap: "gdGap",
        "gdGap.xs": "gdGap.xs",
        "gdGap.sm": "gdGap.sm",
        "gdGap.md": "gdGap.md",
        "gdGap.lg": "gdGap.lg",
        "gdGap.xl": "gdGap.xl",
        "gdGap.lt-sm": "gdGap.lt-sm",
        "gdGap.lt-md": "gdGap.lt-md",
        "gdGap.lt-lg": "gdGap.lt-lg",
        "gdGap.lt-xl": "gdGap.lt-xl",
        "gdGap.gt-xs": "gdGap.gt-xs",
        "gdGap.gt-sm": "gdGap.gt-sm",
        "gdGap.gt-md": "gdGap.gt-md",
        "gdGap.gt-lg": "gdGap.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultGridGapDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridGapDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridGapDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector$8,
          inputs: inputs$8
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: grid/row/row.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_VALUE$6 = 'auto';

    var GridRowStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_41) {
      _inherits(GridRowStyleBuilder, _angular_flex_layout_41);

      var _super62 = _createSuper(GridRowStyleBuilder);

      function GridRowStyleBuilder() {
        _classCallCheck(this, GridRowStyleBuilder);

        return _super62.apply(this, arguments);
      }

      _createClass(GridRowStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @return {?}
         */
        value: function buildStyles(input) {
          return {
            'grid-row': input || DEFAULT_VALUE$6
          };
        }
      }]);

      return GridRowStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridRowStyleBuilder.ɵfac = function GridRowStyleBuilder_Factory(t) {
      return ɵGridRowStyleBuilder_BaseFactory(t || GridRowStyleBuilder);
    };
    /** @nocollapse */


    GridRowStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function GridRowStyleBuilder_Factory() {
        return new GridRowStyleBuilder();
      },
      token: GridRowStyleBuilder,
      providedIn: "root"
    });

    var ɵGridRowStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridRowStyleBuilder);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridRowStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();

    var GridRowDirective = /*#__PURE__*/function (_angular_flex_layout_42) {
      _inherits(GridRowDirective, _angular_flex_layout_42);

      var _super63 = _createSuper(GridRowDirective);

      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       */
      function GridRowDirective(elementRef, styleBuilder, styler, marshal) {
        var _this75;

        _classCallCheck(this, GridRowDirective);

        _this75 = _super63.call(this, elementRef, styleBuilder, styler, marshal);
        _this75.DIRECTIVE_KEY = 'grid-row';
        _this75.styleCache = rowCache;

        _this75.init();

        return _this75;
      }

      return GridRowDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

    GridRowDirective.ɵfac = function GridRowDirective_Factory(t) {
      return new (t || GridRowDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridRowStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
    };

    GridRowDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: GridRowDirective,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    GridRowDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: GridRowStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridRowDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridRowStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      }, null);
    })();
    /** @type {?} */


    var rowCache = new Map();
    /** @type {?} */

    var inputs$9 = ['gdRow', 'gdRow.xs', 'gdRow.sm', 'gdRow.md', 'gdRow.lg', 'gdRow.xl', 'gdRow.lt-sm', 'gdRow.lt-md', 'gdRow.lt-lg', 'gdRow.lt-xl', 'gdRow.gt-xs', 'gdRow.gt-sm', 'gdRow.gt-md', 'gdRow.gt-lg'];
    /** @type {?} */

    var selector$9 = "\n  [gdRow],\n  [gdRow.xs], [gdRow.sm], [gdRow.md], [gdRow.lg], [gdRow.xl],\n  [gdRow.lt-sm], [gdRow.lt-md], [gdRow.lt-lg], [gdRow.lt-xl],\n  [gdRow.gt-xs], [gdRow.gt-sm], [gdRow.gt-md], [gdRow.gt-lg]\n";
    /**
     * 'grid-row' CSS Grid styling directive
     * Configures the name or position of an element within the grid
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
     */

    var DefaultGridRowDirective = /*#__PURE__*/function (_GridRowDirective) {
      _inherits(DefaultGridRowDirective, _GridRowDirective);

      var _super64 = _createSuper(DefaultGridRowDirective);

      function DefaultGridRowDirective() {
        var _this76;

        _classCallCheck(this, DefaultGridRowDirective);

        _this76 = _super64.apply(this, arguments);
        _this76.inputs = inputs$9;
        return _this76;
      }

      return DefaultGridRowDirective;
    }(GridRowDirective);

    DefaultGridRowDirective.ɵfac = function DefaultGridRowDirective_Factory(t) {
      return ɵDefaultGridRowDirective_BaseFactory(t || DefaultGridRowDirective);
    };

    DefaultGridRowDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultGridRowDirective,
      selectors: [["", "gdRow", ""], ["", "gdRow.xs", ""], ["", "gdRow.sm", ""], ["", "gdRow.md", ""], ["", "gdRow.lg", ""], ["", "gdRow.xl", ""], ["", "gdRow.lt-sm", ""], ["", "gdRow.lt-md", ""], ["", "gdRow.lt-lg", ""], ["", "gdRow.lt-xl", ""], ["", "gdRow.gt-xs", ""], ["", "gdRow.gt-sm", ""], ["", "gdRow.gt-md", ""], ["", "gdRow.gt-lg", ""]],
      inputs: {
        gdRow: "gdRow",
        "gdRow.xs": "gdRow.xs",
        "gdRow.sm": "gdRow.sm",
        "gdRow.md": "gdRow.md",
        "gdRow.lg": "gdRow.lg",
        "gdRow.xl": "gdRow.xl",
        "gdRow.lt-sm": "gdRow.lt-sm",
        "gdRow.lt-md": "gdRow.lt-md",
        "gdRow.lt-lg": "gdRow.lt-lg",
        "gdRow.lt-xl": "gdRow.lt-xl",
        "gdRow.gt-xs": "gdRow.gt-xs",
        "gdRow.gt-sm": "gdRow.gt-sm",
        "gdRow.gt-md": "gdRow.gt-md",
        "gdRow.gt-lg": "gdRow.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultGridRowDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridRowDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridRowDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector$9,
          inputs: inputs$9
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: grid/rows/rows.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_VALUE$7 = 'none';
    /** @type {?} */

    var AUTO_SPECIFIER$1 = '!';

    var GridRowsStyleBuilder = /*#__PURE__*/function (_angular_flex_layout_43) {
      _inherits(GridRowsStyleBuilder, _angular_flex_layout_43);

      var _super65 = _createSuper(GridRowsStyleBuilder);

      function GridRowsStyleBuilder() {
        _classCallCheck(this, GridRowsStyleBuilder);

        return _super65.apply(this, arguments);
      }

      _createClass(GridRowsStyleBuilder, [{
        key: "buildStyles",

        /**
         * @param {?} input
         * @param {?} parent
         * @return {?}
         */
        value: function buildStyles(input, parent) {
          input = input || DEFAULT_VALUE$7;
          /** @type {?} */

          var auto = false;

          if (input.endsWith(AUTO_SPECIFIER$1)) {
            input = input.substring(0, input.indexOf(AUTO_SPECIFIER$1));
            auto = true;
          }
          /** @type {?} */


          var css = {
            'display': parent.inline ? 'inline-grid' : 'grid',
            'grid-auto-rows': '',
            'grid-template-rows': ''
          };
          /** @type {?} */

          var key = auto ? 'grid-auto-rows' : 'grid-template-rows';
          css[key] = input;
          return css;
        }
      }]);

      return GridRowsStyleBuilder;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleBuilder"]);

    GridRowsStyleBuilder.ɵfac = function GridRowsStyleBuilder_Factory(t) {
      return ɵGridRowsStyleBuilder_BaseFactory(t || GridRowsStyleBuilder);
    };
    /** @nocollapse */


    GridRowsStyleBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function GridRowsStyleBuilder_Factory() {
        return new GridRowsStyleBuilder();
      },
      token: GridRowsStyleBuilder,
      providedIn: "root"
    });

    var ɵGridRowsStyleBuilder_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GridRowsStyleBuilder);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridRowsStyleBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();

    var GridRowsDirective = /*#__PURE__*/function (_angular_flex_layout_44) {
      _inherits(GridRowsDirective, _angular_flex_layout_44);

      var _super66 = _createSuper(GridRowsDirective);

      /**
       * @param {?} elementRef
       * @param {?} styleBuilder
       * @param {?} styler
       * @param {?} marshal
       */
      function GridRowsDirective(elementRef, styleBuilder, styler, marshal) {
        var _this77;

        _classCallCheck(this, GridRowsDirective);

        _this77 = _super66.call(this, elementRef, styleBuilder, styler, marshal);
        _this77.DIRECTIVE_KEY = 'grid-rows';
        _this77._inline = false;

        _this77.init();

        return _this77;
      }
      /**
       * @return {?}
       */


      _createClass(GridRowsDirective, [{
        key: "updateWithValue",
        // *********************************************
        // Protected methods
        // *********************************************

        /**
         * @protected
         * @param {?} value
         * @return {?}
         */
        value: function updateWithValue(value) {
          this.styleCache = this.inline ? rowsInlineCache : rowsCache;
          this.addStyles(value, {
            inline: this.inline
          });
        }
      }, {
        key: "inline",
        get: function get() {
          return this._inline;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._inline = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
        }
      }]);

      return GridRowsDirective;
    }(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["BaseDirective2"]);

    GridRowsDirective.ɵfac = function GridRowsDirective_Factory(t) {
      return new (t || GridRowsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](GridRowsStyleBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]));
    };

    GridRowsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: GridRowsDirective,
      inputs: {
        inline: ["gdInline", "inline"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });
    /** @nocollapse */

    GridRowsDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: GridRowsStyleBuilder
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
      }, {
        type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
      }];
    };

    GridRowsDirective.propDecorators = {
      inline: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['gdInline']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridRowsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: GridRowsStyleBuilder
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["StyleUtils"]
        }, {
          type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["MediaMarshaller"]
        }];
      }, {
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['gdInline']
        }]
      });
    })();
    /** @type {?} */


    var rowsCache = new Map();
    /** @type {?} */

    var rowsInlineCache = new Map();
    /** @type {?} */

    var inputs$10 = ['gdRows', 'gdRows.xs', 'gdRows.sm', 'gdRows.md', 'gdRows.lg', 'gdRows.xl', 'gdRows.lt-sm', 'gdRows.lt-md', 'gdRows.lt-lg', 'gdRows.lt-xl', 'gdRows.gt-xs', 'gdRows.gt-sm', 'gdRows.gt-md', 'gdRows.gt-lg'];
    /** @type {?} */

    var selector$10 = "\n  [gdRows],\n  [gdRows.xs], [gdRows.sm], [gdRows.md], [gdRows.lg], [gdRows.xl],\n  [gdRows.lt-sm], [gdRows.lt-md], [gdRows.lt-lg], [gdRows.lt-xl],\n  [gdRows.gt-xs], [gdRows.gt-sm], [gdRows.gt-md], [gdRows.gt-lg]\n";
    /**
     * 'grid-template-rows' CSS Grid styling directive
     * Configures the sizing for the rows in the grid
     * Syntax: <column value> [auto]
     * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
     */

    var DefaultGridRowsDirective = /*#__PURE__*/function (_GridRowsDirective) {
      _inherits(DefaultGridRowsDirective, _GridRowsDirective);

      var _super67 = _createSuper(DefaultGridRowsDirective);

      function DefaultGridRowsDirective() {
        var _this78;

        _classCallCheck(this, DefaultGridRowsDirective);

        _this78 = _super67.apply(this, arguments);
        _this78.inputs = inputs$10;
        return _this78;
      }

      return DefaultGridRowsDirective;
    }(GridRowsDirective);

    DefaultGridRowsDirective.ɵfac = function DefaultGridRowsDirective_Factory(t) {
      return ɵDefaultGridRowsDirective_BaseFactory(t || DefaultGridRowsDirective);
    };

    DefaultGridRowsDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DefaultGridRowsDirective,
      selectors: [["", "gdRows", ""], ["", "gdRows.xs", ""], ["", "gdRows.sm", ""], ["", "gdRows.md", ""], ["", "gdRows.lg", ""], ["", "gdRows.xl", ""], ["", "gdRows.lt-sm", ""], ["", "gdRows.lt-md", ""], ["", "gdRows.lt-lg", ""], ["", "gdRows.lt-xl", ""], ["", "gdRows.gt-xs", ""], ["", "gdRows.gt-sm", ""], ["", "gdRows.gt-md", ""], ["", "gdRows.gt-lg", ""]],
      inputs: {
        gdRows: "gdRows",
        "gdRows.xs": "gdRows.xs",
        "gdRows.sm": "gdRows.sm",
        "gdRows.md": "gdRows.md",
        "gdRows.lg": "gdRows.lg",
        "gdRows.xl": "gdRows.xl",
        "gdRows.lt-sm": "gdRows.lt-sm",
        "gdRows.lt-md": "gdRows.lt-md",
        "gdRows.lt-lg": "gdRows.lt-lg",
        "gdRows.lt-xl": "gdRows.lt-xl",
        "gdRows.gt-xs": "gdRows.gt-xs",
        "gdRows.gt-sm": "gdRows.gt-sm",
        "gdRows.gt-md": "gdRows.gt-md",
        "gdRows.gt-lg": "gdRows.gt-lg"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵDefaultGridRowsDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DefaultGridRowsDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultGridRowsDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: selector$10,
          inputs: inputs$10
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: grid/module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var ALL_DIRECTIVES = [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective];
    /**
     * *****************************************************************
     * Define module for the CSS Grid API
     * *****************************************************************
     */

    var GridModule = function GridModule() {
      _classCallCheck(this, GridModule);
    };

    GridModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GridModule
    });
    GridModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GridModule_Factory(t) {
        return new (t || GridModule)();
      },
      imports: [[_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GridModule, {
        declarations: function declarations() {
          return [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective];
        },
        imports: function imports() {
          return [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]];
        },
        exports: function exports() {
          return [DefaultGridAlignDirective, DefaultGridAlignColumnsDirective, DefaultGridAlignRowsDirective, DefaultGridAreaDirective, DefaultGridAreasDirective, DefaultGridAutoDirective, DefaultGridColumnDirective, DefaultGridColumnsDirective, DefaultGridGapDirective, DefaultGridRowDirective, DefaultGridRowsDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]],
          declarations: [].concat(ALL_DIRECTIVES),
          exports: [].concat(ALL_DIRECTIVES)
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: grid/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: grid/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=grid.js.map

    /***/

  },

  /***/
  "./node_modules/chartist/dist/chartist.js":
  /*!************************************************!*\
    !*** ./node_modules/chartist/dist/chartist.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesChartistDistChartistJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    (function (root, factory) {
      if (true) {
        // AMD. Register as an anonymous module unless amdModuleId is set
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
          return root['Chartist'] = factory();
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      } else {}
    })(this, function () {
      /* Chartist.js 0.11.4
       * Copyright © 2019 Gion Kunz
       * Free to use under either the WTFPL license or the MIT license.
       * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
       * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
       */

      /**
       * The core module of Chartist that is mainly providing static functions and higher level functions for chart modules.
       *
       * @module Chartist.Core
       */
      var Chartist = {
        version: '0.11.4'
      };

      (function (globalRoot, Chartist) {
        'use strict';

        var window = globalRoot.window;
        var document = globalRoot.document;
        /**
         * This object contains all namespaces used within Chartist.
         *
         * @memberof Chartist.Core
         * @type {{svg: string, xmlns: string, xhtml: string, xlink: string, ct: string}}
         */

        Chartist.namespaces = {
          svg: 'http://www.w3.org/2000/svg',
          xmlns: 'http://www.w3.org/2000/xmlns/',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          ct: 'http://gionkunz.github.com/chartist-js/ct'
        };
        /**
         * Helps to simplify functional style code
         *
         * @memberof Chartist.Core
         * @param {*} n This exact value will be returned by the noop function
         * @return {*} The same value that was provided to the n parameter
         */

        Chartist.noop = function (n) {
          return n;
        };
        /**
         * Generates a-z from a number 0 to 26
         *
         * @memberof Chartist.Core
         * @param {Number} n A number from 0 to 26 that will result in a letter a-z
         * @return {String} A character from a-z based on the input number n
         */


        Chartist.alphaNumerate = function (n) {
          // Limit to a-z
          return String.fromCharCode(97 + n % 26);
        };
        /**
         * Simple recursive object extend
         *
         * @memberof Chartist.Core
         * @param {Object} target Target object where the source will be merged into
         * @param {Object...} sources This object (objects) will be merged into target and then target is returned
         * @return {Object} An object that has the same reference as target but is extended and merged with the properties of source
         */


        Chartist.extend = function (target) {
          var i, source, sourceProp;
          target = target || {};

          for (i = 1; i < arguments.length; i++) {
            source = arguments[i];

            for (var prop in source) {
              sourceProp = source[prop];

              if (typeof sourceProp === 'object' && sourceProp !== null && !(sourceProp instanceof Array)) {
                target[prop] = Chartist.extend(target[prop], sourceProp);
              } else {
                target[prop] = sourceProp;
              }
            }
          }

          return target;
        };
        /**
         * Replaces all occurrences of subStr in str with newSubStr and returns a new string.
         *
         * @memberof Chartist.Core
         * @param {String} str
         * @param {String} subStr
         * @param {String} newSubStr
         * @return {String}
         */


        Chartist.replaceAll = function (str, subStr, newSubStr) {
          return str.replace(new RegExp(subStr, 'g'), newSubStr);
        };
        /**
         * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
         *
         * @memberof Chartist.Core
         * @param {Number} value
         * @param {String} unit
         * @return {String} Returns the passed number value with unit.
         */


        Chartist.ensureUnit = function (value, unit) {
          if (typeof value === 'number') {
            value = value + unit;
          }

          return value;
        };
        /**
         * Converts a number or string to a quantity object.
         *
         * @memberof Chartist.Core
         * @param {String|Number} input
         * @return {Object} Returns an object containing the value as number and the unit as string.
         */


        Chartist.quantity = function (input) {
          if (typeof input === 'string') {
            var match = /^(\d+)\s*(.*)$/g.exec(input);
            return {
              value: +match[1],
              unit: match[2] || undefined
            };
          }

          return {
            value: input
          };
        };
        /**
         * This is a wrapper around document.querySelector that will return the query if it's already of type Node
         *
         * @memberof Chartist.Core
         * @param {String|Node} query The query to use for selecting a Node or a DOM node that will be returned directly
         * @return {Node}
         */


        Chartist.querySelector = function (query) {
          return query instanceof Node ? query : document.querySelector(query);
        };
        /**
         * Functional style helper to produce array with given length initialized with undefined values
         *
         * @memberof Chartist.Core
         * @param length
         * @return {Array}
         */


        Chartist.times = function (length) {
          return Array.apply(null, new Array(length));
        };
        /**
         * Sum helper to be used in reduce functions
         *
         * @memberof Chartist.Core
         * @param previous
         * @param current
         * @return {*}
         */


        Chartist.sum = function (previous, current) {
          return previous + (current ? current : 0);
        };
        /**
         * Multiply helper to be used in `Array.map` for multiplying each value of an array with a factor.
         *
         * @memberof Chartist.Core
         * @param {Number} factor
         * @returns {Function} Function that can be used in `Array.map` to multiply each value in an array
         */


        Chartist.mapMultiply = function (factor) {
          return function (num) {
            return num * factor;
          };
        };
        /**
         * Add helper to be used in `Array.map` for adding a addend to each value of an array.
         *
         * @memberof Chartist.Core
         * @param {Number} addend
         * @returns {Function} Function that can be used in `Array.map` to add a addend to each value in an array
         */


        Chartist.mapAdd = function (addend) {
          return function (num) {
            return num + addend;
          };
        };
        /**
         * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
         *
         * @memberof Chartist.Core
         * @param arr
         * @param cb
         * @return {Array}
         */


        Chartist.serialMap = function (arr, cb) {
          var result = [],
              length = Math.max.apply(null, arr.map(function (e) {
            return e.length;
          }));
          Chartist.times(length).forEach(function (e, index) {
            var args = arr.map(function (e) {
              return e[index];
            });
            result[index] = cb.apply(null, args);
          });
          return result;
        };
        /**
         * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
         *
         * @memberof Chartist.Core
         * @param {Number} value The value that should be rounded with precision
         * @param {Number} [digits] The number of digits after decimal used to do the rounding
         * @returns {number} Rounded value
         */


        Chartist.roundWithPrecision = function (value, digits) {
          var precision = Math.pow(10, digits || Chartist.precision);
          return Math.round(value * precision) / precision;
        };
        /**
         * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
         *
         * @memberof Chartist.Core
         * @type {number}
         */


        Chartist.precision = 8;
        /**
         * A map with characters to escape for strings to be safely used as attribute values.
         *
         * @memberof Chartist.Core
         * @type {Object}
         */

        Chartist.escapingMap = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          '\'': '&#039;'
        };
        /**
         * This function serializes arbitrary data to a string. In case of data that can't be easily converted to a string, this function will create a wrapper object and serialize the data using JSON.stringify. The outcoming string will always be escaped using Chartist.escapingMap.
         * If called with null or undefined the function will return immediately with null or undefined.
         *
         * @memberof Chartist.Core
         * @param {Number|String|Object} data
         * @return {String}
         */

        Chartist.serialize = function (data) {
          if (data === null || data === undefined) {
            return data;
          } else if (typeof data === 'number') {
            data = '' + data;
          } else if (typeof data === 'object') {
            data = JSON.stringify({
              data: data
            });
          }

          return Object.keys(Chartist.escapingMap).reduce(function (result, key) {
            return Chartist.replaceAll(result, key, Chartist.escapingMap[key]);
          }, data);
        };
        /**
         * This function de-serializes a string previously serialized with Chartist.serialize. The string will always be unescaped using Chartist.escapingMap before it's returned. Based on the input value the return type can be Number, String or Object. JSON.parse is used with try / catch to see if the unescaped string can be parsed into an Object and this Object will be returned on success.
         *
         * @memberof Chartist.Core
         * @param {String} data
         * @return {String|Number|Object}
         */


        Chartist.deserialize = function (data) {
          if (typeof data !== 'string') {
            return data;
          }

          data = Object.keys(Chartist.escapingMap).reduce(function (result, key) {
            return Chartist.replaceAll(result, Chartist.escapingMap[key], key);
          }, data);

          try {
            data = JSON.parse(data);
            data = data.data !== undefined ? data.data : data;
          } catch (e) {}

          return data;
        };
        /**
         * Create or reinitialize the SVG element for the chart
         *
         * @memberof Chartist.Core
         * @param {Node} container The containing DOM Node object that will be used to plant the SVG element
         * @param {String} width Set the width of the SVG element. Default is 100%
         * @param {String} height Set the height of the SVG element. Default is 100%
         * @param {String} className Specify a class to be added to the SVG element
         * @return {Object} The created/reinitialized SVG element
         */


        Chartist.createSvg = function (container, width, height, className) {
          var svg;
          width = width || '100%';
          height = height || '100%'; // Check if there is a previous SVG element in the container that contains the Chartist XML namespace and remove it
          // Since the DOM API does not support namespaces we need to manually search the returned list http://www.w3.org/TR/selectors-api/

          Array.prototype.slice.call(container.querySelectorAll('svg')).filter(function filterChartistSvgObjects(svg) {
            return svg.getAttributeNS(Chartist.namespaces.xmlns, 'ct');
          }).forEach(function removePreviousElement(svg) {
            container.removeChild(svg);
          }); // Create svg object with width and height or use 100% as default

          svg = new Chartist.Svg('svg').attr({
            width: width,
            height: height
          }).addClass(className);
          svg._node.style.width = width;
          svg._node.style.height = height; // Add the DOM node to our container

          container.appendChild(svg._node);
          return svg;
        };
        /**
         * Ensures that the data object passed as second argument to the charts is present and correctly initialized.
         *
         * @param  {Object} data The data object that is passed as second argument to the charts
         * @return {Object} The normalized data object
         */


        Chartist.normalizeData = function (data, reverse, multi) {
          var labelCount;
          var output = {
            raw: data,
            normalized: {}
          }; // Check if we should generate some labels based on existing series data

          output.normalized.series = Chartist.getDataArray({
            series: data.series || []
          }, reverse, multi); // If all elements of the normalized data array are arrays we're dealing with
          // multi series data and we need to find the largest series if they are un-even

          if (output.normalized.series.every(function (value) {
            return value instanceof Array;
          })) {
            // Getting the series with the the most elements
            labelCount = Math.max.apply(null, output.normalized.series.map(function (series) {
              return series.length;
            }));
          } else {
            // We're dealing with Pie data so we just take the normalized array length
            labelCount = output.normalized.series.length;
          }

          output.normalized.labels = (data.labels || []).slice(); // Padding the labels to labelCount with empty strings

          Array.prototype.push.apply(output.normalized.labels, Chartist.times(Math.max(0, labelCount - output.normalized.labels.length)).map(function () {
            return '';
          }));

          if (reverse) {
            Chartist.reverseData(output.normalized);
          }

          return output;
        };
        /**
         * This function safely checks if an objects has an owned property.
         *
         * @param {Object} object The object where to check for a property
         * @param {string} property The property name
         * @returns {boolean} Returns true if the object owns the specified property
         */


        Chartist.safeHasProperty = function (object, property) {
          return object !== null && typeof object === 'object' && object.hasOwnProperty(property);
        };
        /**
         * Checks if a value is considered a hole in the data series.
         *
         * @param {*} value
         * @returns {boolean} True if the value is considered a data hole
         */


        Chartist.isDataHoleValue = function (value) {
          return value === null || value === undefined || typeof value === 'number' && isNaN(value);
        };
        /**
         * Reverses the series, labels and series data arrays.
         *
         * @memberof Chartist.Core
         * @param data
         */


        Chartist.reverseData = function (data) {
          data.labels.reverse();
          data.series.reverse();

          for (var i = 0; i < data.series.length; i++) {
            if (typeof data.series[i] === 'object' && data.series[i].data !== undefined) {
              data.series[i].data.reverse();
            } else if (data.series[i] instanceof Array) {
              data.series[i].reverse();
            }
          }
        };
        /**
         * Convert data series into plain array
         *
         * @memberof Chartist.Core
         * @param {Object} data The series object that contains the data to be visualized in the chart
         * @param {Boolean} [reverse] If true the whole data is reversed by the getDataArray call. This will modify the data object passed as first parameter. The labels as well as the series order is reversed. The whole series data arrays are reversed too.
         * @param {Boolean} [multi] Create a multi dimensional array from a series data array where a value object with `x` and `y` values will be created.
         * @return {Array} A plain array that contains the data to be visualized in the chart
         */


        Chartist.getDataArray = function (data, reverse, multi) {
          // Recursively walks through nested arrays and convert string values to numbers and objects with value properties
          // to values. Check the tests in data core -> data normalization for a detailed specification of expected values
          function recursiveConvert(value) {
            if (Chartist.safeHasProperty(value, 'value')) {
              // We are dealing with value object notation so we need to recurse on value property
              return recursiveConvert(value.value);
            } else if (Chartist.safeHasProperty(value, 'data')) {
              // We are dealing with series object notation so we need to recurse on data property
              return recursiveConvert(value.data);
            } else if (value instanceof Array) {
              // Data is of type array so we need to recurse on the series
              return value.map(recursiveConvert);
            } else if (Chartist.isDataHoleValue(value)) {
              // We're dealing with a hole in the data and therefore need to return undefined
              // We're also returning undefined for multi value output
              return undefined;
            } else {
              // We need to prepare multi value output (x and y data)
              if (multi) {
                var multiValue = {}; // Single series value arrays are assumed to specify the Y-Axis value
                // For example: [1, 2] => [{x: undefined, y: 1}, {x: undefined, y: 2}]
                // If multi is a string then it's assumed that it specified which dimension should be filled as default

                if (typeof multi === 'string') {
                  multiValue[multi] = Chartist.getNumberOrUndefined(value);
                } else {
                  multiValue.y = Chartist.getNumberOrUndefined(value);
                }

                multiValue.x = value.hasOwnProperty('x') ? Chartist.getNumberOrUndefined(value.x) : multiValue.x;
                multiValue.y = value.hasOwnProperty('y') ? Chartist.getNumberOrUndefined(value.y) : multiValue.y;
                return multiValue;
              } else {
                // We can return simple data
                return Chartist.getNumberOrUndefined(value);
              }
            }
          }

          return data.series.map(recursiveConvert);
        };
        /**
         * Converts a number into a padding object.
         *
         * @memberof Chartist.Core
         * @param {Object|Number} padding
         * @param {Number} [fallback] This value is used to fill missing values if a incomplete padding object was passed
         * @returns {Object} Returns a padding object containing top, right, bottom, left properties filled with the padding number passed in as argument. If the argument is something else than a number (presumably already a correct padding object) then this argument is directly returned.
         */


        Chartist.normalizePadding = function (padding, fallback) {
          fallback = fallback || 0;
          return typeof padding === 'number' ? {
            top: padding,
            right: padding,
            bottom: padding,
            left: padding
          } : {
            top: typeof padding.top === 'number' ? padding.top : fallback,
            right: typeof padding.right === 'number' ? padding.right : fallback,
            bottom: typeof padding.bottom === 'number' ? padding.bottom : fallback,
            left: typeof padding.left === 'number' ? padding.left : fallback
          };
        };

        Chartist.getMetaData = function (series, index) {
          var value = series.data ? series.data[index] : series[index];
          return value ? value.meta : undefined;
        };
        /**
         * Calculate the order of magnitude for the chart scale
         *
         * @memberof Chartist.Core
         * @param {Number} value The value Range of the chart
         * @return {Number} The order of magnitude
         */


        Chartist.orderOfMagnitude = function (value) {
          return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
        };
        /**
         * Project a data length into screen coordinates (pixels)
         *
         * @memberof Chartist.Core
         * @param {Object} axisLength The svg element for the chart
         * @param {Number} length Single data value from a series array
         * @param {Object} bounds All the values to set the bounds of the chart
         * @return {Number} The projected data length in pixels
         */


        Chartist.projectLength = function (axisLength, length, bounds) {
          return length / bounds.range * axisLength;
        };
        /**
         * Get the height of the area in the chart for the data series
         *
         * @memberof Chartist.Core
         * @param {Object} svg The svg element for the chart
         * @param {Object} options The Object that contains all the optional values for the chart
         * @return {Number} The height of the area in the chart for the data series
         */


        Chartist.getAvailableHeight = function (svg, options) {
          return Math.max((Chartist.quantity(options.height).value || svg.height()) - (options.chartPadding.top + options.chartPadding.bottom) - options.axisX.offset, 0);
        };
        /**
         * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
         *
         * @memberof Chartist.Core
         * @param {Array} data The array that contains the data to be visualized in the chart
         * @param {Object} options The Object that contains the chart options
         * @param {String} dimension Axis dimension 'x' or 'y' used to access the correct value and high / low configuration
         * @return {Object} An object that contains the highest and lowest value that will be visualized on the chart.
         */


        Chartist.getHighLow = function (data, options, dimension) {
          // TODO: Remove workaround for deprecated global high / low config. Axis high / low configuration is preferred
          options = Chartist.extend({}, options, dimension ? options['axis' + dimension.toUpperCase()] : {});
          var highLow = {
            high: options.high === undefined ? -Number.MAX_VALUE : +options.high,
            low: options.low === undefined ? Number.MAX_VALUE : +options.low
          };
          var findHigh = options.high === undefined;
          var findLow = options.low === undefined; // Function to recursively walk through arrays and find highest and lowest number

          function recursiveHighLow(data) {
            if (data === undefined) {
              return undefined;
            } else if (data instanceof Array) {
              for (var i = 0; i < data.length; i++) {
                recursiveHighLow(data[i]);
              }
            } else {
              var value = dimension ? +data[dimension] : +data;

              if (findHigh && value > highLow.high) {
                highLow.high = value;
              }

              if (findLow && value < highLow.low) {
                highLow.low = value;
              }
            }
          } // Start to find highest and lowest number recursively


          if (findHigh || findLow) {
            recursiveHighLow(data);
          } // Overrides of high / low based on reference value, it will make sure that the invisible reference value is
          // used to generate the chart. This is useful when the chart always needs to contain the position of the
          // invisible reference value in the view i.e. for bipolar scales.


          if (options.referenceValue || options.referenceValue === 0) {
            highLow.high = Math.max(options.referenceValue, highLow.high);
            highLow.low = Math.min(options.referenceValue, highLow.low);
          } // If high and low are the same because of misconfiguration or flat data (only the same value) we need
          // to set the high or low to 0 depending on the polarity


          if (highLow.high <= highLow.low) {
            // If both values are 0 we set high to 1
            if (highLow.low === 0) {
              highLow.high = 1;
            } else if (highLow.low < 0) {
              // If we have the same negative value for the bounds we set bounds.high to 0
              highLow.high = 0;
            } else if (highLow.high > 0) {
              // If we have the same positive value for the bounds we set bounds.low to 0
              highLow.low = 0;
            } else {
              // If data array was empty, values are Number.MAX_VALUE and -Number.MAX_VALUE. Set bounds to prevent errors
              highLow.high = 1;
              highLow.low = 0;
            }
          }

          return highLow;
        };
        /**
         * Checks if a value can be safely coerced to a number. This includes all values except null which result in finite numbers when coerced. This excludes NaN, since it's not finite.
         *
         * @memberof Chartist.Core
         * @param value
         * @returns {Boolean}
         */


        Chartist.isNumeric = function (value) {
          return value === null ? false : isFinite(value);
        };
        /**
         * Returns true on all falsey values except the numeric value 0.
         *
         * @memberof Chartist.Core
         * @param value
         * @returns {boolean}
         */


        Chartist.isFalseyButZero = function (value) {
          return !value && value !== 0;
        };
        /**
         * Returns a number if the passed parameter is a valid number or the function will return undefined. On all other values than a valid number, this function will return undefined.
         *
         * @memberof Chartist.Core
         * @param value
         * @returns {*}
         */


        Chartist.getNumberOrUndefined = function (value) {
          return Chartist.isNumeric(value) ? +value : undefined;
        };
        /**
         * Checks if provided value object is multi value (contains x or y properties)
         *
         * @memberof Chartist.Core
         * @param value
         */


        Chartist.isMultiValue = function (value) {
          return typeof value === 'object' && ('x' in value || 'y' in value);
        };
        /**
         * Gets a value from a dimension `value.x` or `value.y` while returning value directly if it's a valid numeric value. If the value is not numeric and it's falsey this function will return `defaultValue`.
         *
         * @memberof Chartist.Core
         * @param value
         * @param dimension
         * @param defaultValue
         * @returns {*}
         */


        Chartist.getMultiValue = function (value, dimension) {
          if (Chartist.isMultiValue(value)) {
            return Chartist.getNumberOrUndefined(value[dimension || 'y']);
          } else {
            return Chartist.getNumberOrUndefined(value);
          }
        };
        /**
         * Pollard Rho Algorithm to find smallest factor of an integer value. There are more efficient algorithms for factorization, but this one is quite efficient and not so complex.
         *
         * @memberof Chartist.Core
         * @param {Number} num An integer number where the smallest factor should be searched for
         * @returns {Number} The smallest integer factor of the parameter num.
         */


        Chartist.rho = function (num) {
          if (num === 1) {
            return num;
          }

          function gcd(p, q) {
            if (p % q === 0) {
              return q;
            } else {
              return gcd(q, p % q);
            }
          }

          function f(x) {
            return x * x + 1;
          }

          var x1 = 2,
              x2 = 2,
              divisor;

          if (num % 2 === 0) {
            return 2;
          }

          do {
            x1 = f(x1) % num;
            x2 = f(f(x2)) % num;
            divisor = gcd(Math.abs(x1 - x2), num);
          } while (divisor === 1);

          return divisor;
        };
        /**
         * Calculate and retrieve all the bounds for the chart and return them in one array
         *
         * @memberof Chartist.Core
         * @param {Number} axisLength The length of the Axis used for
         * @param {Object} highLow An object containing a high and low property indicating the value range of the chart.
         * @param {Number} scaleMinSpace The minimum projected length a step should result in
         * @param {Boolean} onlyInteger
         * @return {Object} All the values to set the bounds of the chart
         */


        Chartist.getBounds = function (axisLength, highLow, scaleMinSpace, onlyInteger) {
          var i,
              optimizationCounter = 0,
              newMin,
              newMax,
              bounds = {
            high: highLow.high,
            low: highLow.low
          };
          bounds.valueRange = bounds.high - bounds.low;
          bounds.oom = Chartist.orderOfMagnitude(bounds.valueRange);
          bounds.step = Math.pow(10, bounds.oom);
          bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
          bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
          bounds.range = bounds.max - bounds.min;
          bounds.numberOfSteps = Math.round(bounds.range / bounds.step); // Optimize scale step by checking if subdivision is possible based on horizontalGridMinSpace
          // If we are already below the scaleMinSpace value we will scale up

          var length = Chartist.projectLength(axisLength, bounds.step, bounds);
          var scaleUp = length < scaleMinSpace;
          var smallestFactor = onlyInteger ? Chartist.rho(bounds.range) : 0; // First check if we should only use integer steps and if step 1 is still larger than scaleMinSpace so we can use 1

          if (onlyInteger && Chartist.projectLength(axisLength, 1, bounds) >= scaleMinSpace) {
            bounds.step = 1;
          } else if (onlyInteger && smallestFactor < bounds.step && Chartist.projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) {
            // If step 1 was too small, we can try the smallest factor of range
            // If the smallest factor is smaller than the current bounds.step and the projected length of smallest factor
            // is larger than the scaleMinSpace we should go for it.
            bounds.step = smallestFactor;
          } else {
            // Trying to divide or multiply by 2 and find the best step value
            while (true) {
              if (scaleUp && Chartist.projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
                bounds.step *= 2;
              } else if (!scaleUp && Chartist.projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
                bounds.step /= 2;

                if (onlyInteger && bounds.step % 1 !== 0) {
                  bounds.step *= 2;
                  break;
                }
              } else {
                break;
              }

              if (optimizationCounter++ > 1000) {
                throw new Error('Exceeded maximum number of iterations while optimizing scale step!');
              }
            }
          }

          var EPSILON = 2.221E-16;
          bounds.step = Math.max(bounds.step, EPSILON);

          function safeIncrement(value, increment) {
            // If increment is too small use *= (1+EPSILON) as a simple nextafter
            if (value === (value += increment)) {
              value *= 1 + (increment > 0 ? EPSILON : -EPSILON);
            }

            return value;
          } // Narrow min and max based on new step


          newMin = bounds.min;
          newMax = bounds.max;

          while (newMin + bounds.step <= bounds.low) {
            newMin = safeIncrement(newMin, bounds.step);
          }

          while (newMax - bounds.step >= bounds.high) {
            newMax = safeIncrement(newMax, -bounds.step);
          }

          bounds.min = newMin;
          bounds.max = newMax;
          bounds.range = bounds.max - bounds.min;
          var values = [];

          for (i = bounds.min; i <= bounds.max; i = safeIncrement(i, bounds.step)) {
            var value = Chartist.roundWithPrecision(i);

            if (value !== values[values.length - 1]) {
              values.push(value);
            }
          }

          bounds.values = values;
          return bounds;
        };
        /**
         * Calculate cartesian coordinates of polar coordinates
         *
         * @memberof Chartist.Core
         * @param {Number} centerX X-axis coordinates of center point of circle segment
         * @param {Number} centerY X-axis coordinates of center point of circle segment
         * @param {Number} radius Radius of circle segment
         * @param {Number} angleInDegrees Angle of circle segment in degrees
         * @return {{x:Number, y:Number}} Coordinates of point on circumference
         */


        Chartist.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
          var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
          return {
            x: centerX + radius * Math.cos(angleInRadians),
            y: centerY + radius * Math.sin(angleInRadians)
          };
        };
        /**
         * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
         *
         * @memberof Chartist.Core
         * @param {Object} svg The svg element for the chart
         * @param {Object} options The Object that contains all the optional values for the chart
         * @param {Number} [fallbackPadding] The fallback padding if partial padding objects are used
         * @return {Object} The chart rectangles coordinates inside the svg element plus the rectangles measurements
         */


        Chartist.createChartRect = function (svg, options, fallbackPadding) {
          var hasAxis = !!(options.axisX || options.axisY);
          var yAxisOffset = hasAxis ? options.axisY.offset : 0;
          var xAxisOffset = hasAxis ? options.axisX.offset : 0; // If width or height results in invalid value (including 0) we fallback to the unitless settings or even 0

          var width = svg.width() || Chartist.quantity(options.width).value || 0;
          var height = svg.height() || Chartist.quantity(options.height).value || 0;
          var normalizedPadding = Chartist.normalizePadding(options.chartPadding, fallbackPadding); // If settings were to small to cope with offset (legacy) and padding, we'll adjust

          width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
          height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);
          var chartRect = {
            padding: normalizedPadding,
            width: function width() {
              return this.x2 - this.x1;
            },
            height: function height() {
              return this.y1 - this.y2;
            }
          };

          if (hasAxis) {
            if (options.axisX.position === 'start') {
              chartRect.y2 = normalizedPadding.top + xAxisOffset;
              chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
            } else {
              chartRect.y2 = normalizedPadding.top;
              chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
            }

            if (options.axisY.position === 'start') {
              chartRect.x1 = normalizedPadding.left + yAxisOffset;
              chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
            } else {
              chartRect.x1 = normalizedPadding.left;
              chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
            }
          } else {
            chartRect.x1 = normalizedPadding.left;
            chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
            chartRect.y2 = normalizedPadding.top;
            chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
          }

          return chartRect;
        };
        /**
         * Creates a grid line based on a projected value.
         *
         * @memberof Chartist.Core
         * @param position
         * @param index
         * @param axis
         * @param offset
         * @param length
         * @param group
         * @param classes
         * @param eventEmitter
         */


        Chartist.createGrid = function (position, index, axis, offset, length, group, classes, eventEmitter) {
          var positionalData = {};
          positionalData[axis.units.pos + '1'] = position;
          positionalData[axis.units.pos + '2'] = position;
          positionalData[axis.counterUnits.pos + '1'] = offset;
          positionalData[axis.counterUnits.pos + '2'] = offset + length;
          var gridElement = group.elem('line', positionalData, classes.join(' ')); // Event for grid draw

          eventEmitter.emit('draw', Chartist.extend({
            type: 'grid',
            axis: axis,
            index: index,
            group: group,
            element: gridElement
          }, positionalData));
        };
        /**
         * Creates a grid background rect and emits the draw event.
         *
         * @memberof Chartist.Core
         * @param gridGroup
         * @param chartRect
         * @param className
         * @param eventEmitter
         */


        Chartist.createGridBackground = function (gridGroup, chartRect, className, eventEmitter) {
          var gridBackground = gridGroup.elem('rect', {
            x: chartRect.x1,
            y: chartRect.y2,
            width: chartRect.width(),
            height: chartRect.height()
          }, className, true); // Event for grid background draw

          eventEmitter.emit('draw', {
            type: 'gridBackground',
            group: gridGroup,
            element: gridBackground
          });
        };
        /**
         * Creates a label based on a projected value and an axis.
         *
         * @memberof Chartist.Core
         * @param position
         * @param length
         * @param index
         * @param labels
         * @param axis
         * @param axisOffset
         * @param labelOffset
         * @param group
         * @param classes
         * @param useForeignObject
         * @param eventEmitter
         */


        Chartist.createLabel = function (position, length, index, labels, axis, axisOffset, labelOffset, group, classes, useForeignObject, eventEmitter) {
          var labelElement;
          var positionalData = {};
          positionalData[axis.units.pos] = position + labelOffset[axis.units.pos];
          positionalData[axis.counterUnits.pos] = labelOffset[axis.counterUnits.pos];
          positionalData[axis.units.len] = length;
          positionalData[axis.counterUnits.len] = Math.max(0, axisOffset - 10);

          if (useForeignObject) {
            // We need to set width and height explicitly to px as span will not expand with width and height being
            // 100% in all browsers
            var content = document.createElement('span');
            content.className = classes.join(' ');
            content.setAttribute('xmlns', Chartist.namespaces.xhtml);
            content.innerText = labels[index];
            content.style[axis.units.len] = Math.round(positionalData[axis.units.len]) + 'px';
            content.style[axis.counterUnits.len] = Math.round(positionalData[axis.counterUnits.len]) + 'px';
            labelElement = group.foreignObject(content, Chartist.extend({
              style: 'overflow: visible;'
            }, positionalData));
          } else {
            labelElement = group.elem('text', positionalData, classes.join(' ')).text(labels[index]);
          }

          eventEmitter.emit('draw', Chartist.extend({
            type: 'label',
            axis: axis,
            index: index,
            group: group,
            element: labelElement,
            text: labels[index]
          }, positionalData));
        };
        /**
         * Helper to read series specific options from options object. It automatically falls back to the global option if
         * there is no option in the series options.
         *
         * @param {Object} series Series object
         * @param {Object} options Chartist options object
         * @param {string} key The options key that should be used to obtain the options
         * @returns {*}
         */


        Chartist.getSeriesOption = function (series, options, key) {
          if (series.name && options.series && options.series[series.name]) {
            var seriesOptions = options.series[series.name];
            return seriesOptions.hasOwnProperty(key) ? seriesOptions[key] : options[key];
          } else {
            return options[key];
          }
        };
        /**
         * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
         *
         * @memberof Chartist.Core
         * @param {Object} options Options set by user
         * @param {Array} responsiveOptions Optional functions to add responsive behavior to chart
         * @param {Object} eventEmitter The event emitter that will be used to emit the options changed events
         * @return {Object} The consolidated options object from the defaults, base and matching responsive options
         */


        Chartist.optionsProvider = function (options, responsiveOptions, eventEmitter) {
          var baseOptions = Chartist.extend({}, options),
              currentOptions,
              mediaQueryListeners = [],
              i;

          function updateCurrentOptions(mediaEvent) {
            var previousOptions = currentOptions;
            currentOptions = Chartist.extend({}, baseOptions);

            if (responsiveOptions) {
              for (i = 0; i < responsiveOptions.length; i++) {
                var mql = window.matchMedia(responsiveOptions[i][0]);

                if (mql.matches) {
                  currentOptions = Chartist.extend(currentOptions, responsiveOptions[i][1]);
                }
              }
            }

            if (eventEmitter && mediaEvent) {
              eventEmitter.emit('optionsChanged', {
                previousOptions: previousOptions,
                currentOptions: currentOptions
              });
            }
          }

          function removeMediaQueryListeners() {
            mediaQueryListeners.forEach(function (mql) {
              mql.removeListener(updateCurrentOptions);
            });
          }

          if (!window.matchMedia) {
            throw 'window.matchMedia not found! Make sure you\'re using a polyfill.';
          } else if (responsiveOptions) {
            for (i = 0; i < responsiveOptions.length; i++) {
              var mql = window.matchMedia(responsiveOptions[i][0]);
              mql.addListener(updateCurrentOptions);
              mediaQueryListeners.push(mql);
            }
          } // Execute initially without an event argument so we get the correct options


          updateCurrentOptions();
          return {
            removeMediaQueryListeners: removeMediaQueryListeners,
            getCurrentOptions: function getCurrentOptions() {
              return Chartist.extend({}, currentOptions);
            }
          };
        };
        /**
         * Splits a list of coordinates and associated values into segments. Each returned segment contains a pathCoordinates
         * valueData property describing the segment.
         *
         * With the default options, segments consist of contiguous sets of points that do not have an undefined value. Any
         * points with undefined values are discarded.
         *
         * **Options**
         * The following options are used to determine how segments are formed
         * ```javascript
         * var options = {
         *   // If fillHoles is true, undefined values are simply discarded without creating a new segment. Assuming other options are default, this returns single segment.
         *   fillHoles: false,
         *   // If increasingX is true, the coordinates in all segments have strictly increasing x-values.
         *   increasingX: false
         * };
         * ```
         *
         * @memberof Chartist.Core
         * @param {Array} pathCoordinates List of point coordinates to be split in the form [x1, y1, x2, y2 ... xn, yn]
         * @param {Array} values List of associated point values in the form [v1, v2 .. vn]
         * @param {Object} options Options set by user
         * @return {Array} List of segments, each containing a pathCoordinates and valueData property.
         */


        Chartist.splitIntoSegments = function (pathCoordinates, valueData, options) {
          var defaultOptions = {
            increasingX: false,
            fillHoles: false
          };
          options = Chartist.extend({}, defaultOptions, options);
          var segments = [];
          var hole = true;

          for (var i = 0; i < pathCoordinates.length; i += 2) {
            // If this value is a "hole" we set the hole flag
            if (Chartist.getMultiValue(valueData[i / 2].value) === undefined) {
              // if(valueData[i / 2].value === undefined) {
              if (!options.fillHoles) {
                hole = true;
              }
            } else {
              if (options.increasingX && i >= 2 && pathCoordinates[i] <= pathCoordinates[i - 2]) {
                // X is not increasing, so we need to make sure we start a new segment
                hole = true;
              } // If it's a valid value we need to check if we're coming out of a hole and create a new empty segment


              if (hole) {
                segments.push({
                  pathCoordinates: [],
                  valueData: []
                }); // As we have a valid value now, we are not in a "hole" anymore

                hole = false;
              } // Add to the segment pathCoordinates and valueData


              segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
              segments[segments.length - 1].valueData.push(valueData[i / 2]);
            }
          }

          return segments;
        };
      })(this || global, Chartist);

      ;
      /**
      * Chartist path interpolation functions.
      *
      * @module Chartist.Interpolation
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        Chartist.Interpolation = {};
        /**
         * This interpolation function does not smooth the path and the result is only containing lines and no curves.
         *
         * @example
         * var chart = new Chartist.Line('.ct-chart', {
         *   labels: [1, 2, 3, 4, 5],
         *   series: [[1, 2, 8, 1, 7]]
         * }, {
         *   lineSmooth: Chartist.Interpolation.none({
         *     fillHoles: false
         *   })
         * });
         *
         *
         * @memberof Chartist.Interpolation
         * @return {Function}
         */

        Chartist.Interpolation.none = function (options) {
          var defaultOptions = {
            fillHoles: false
          };
          options = Chartist.extend({}, defaultOptions, options);
          return function none(pathCoordinates, valueData) {
            var path = new Chartist.Svg.Path();
            var hole = true;

            for (var i = 0; i < pathCoordinates.length; i += 2) {
              var currX = pathCoordinates[i];
              var currY = pathCoordinates[i + 1];
              var currData = valueData[i / 2];

              if (Chartist.getMultiValue(currData.value) !== undefined) {
                if (hole) {
                  path.move(currX, currY, false, currData);
                } else {
                  path.line(currX, currY, false, currData);
                }

                hole = false;
              } else if (!options.fillHoles) {
                hole = true;
              }
            }

            return path;
          };
        };
        /**
         * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
         *
         * Simple smoothing can be used instead of `Chartist.Smoothing.cardinal` if you'd like to get rid of the artifacts it produces sometimes. Simple smoothing produces less flowing lines but is accurate by hitting the points and it also doesn't swing below or above the given data point.
         *
         * All smoothing functions within Chartist are factory functions that accept an options parameter. The simple interpolation function accepts one configuration parameter `divisor`, between 1 and ∞, which controls the smoothing characteristics.
         *
         * @example
         * var chart = new Chartist.Line('.ct-chart', {
         *   labels: [1, 2, 3, 4, 5],
         *   series: [[1, 2, 8, 1, 7]]
         * }, {
         *   lineSmooth: Chartist.Interpolation.simple({
         *     divisor: 2,
         *     fillHoles: false
         *   })
         * });
         *
         *
         * @memberof Chartist.Interpolation
         * @param {Object} options The options of the simple interpolation factory function.
         * @return {Function}
         */


        Chartist.Interpolation.simple = function (options) {
          var defaultOptions = {
            divisor: 2,
            fillHoles: false
          };
          options = Chartist.extend({}, defaultOptions, options);
          var d = 1 / Math.max(1, options.divisor);
          return function simple(pathCoordinates, valueData) {
            var path = new Chartist.Svg.Path();
            var prevX, prevY, prevData;

            for (var i = 0; i < pathCoordinates.length; i += 2) {
              var currX = pathCoordinates[i];
              var currY = pathCoordinates[i + 1];
              var length = (currX - prevX) * d;
              var currData = valueData[i / 2];

              if (currData.value !== undefined) {
                if (prevData === undefined) {
                  path.move(currX, currY, false, currData);
                } else {
                  path.curve(prevX + length, prevY, currX - length, currY, currX, currY, false, currData);
                }

                prevX = currX;
                prevY = currY;
                prevData = currData;
              } else if (!options.fillHoles) {
                prevX = currX = prevData = undefined;
              }
            }

            return path;
          };
        };
        /**
         * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
         *
         * Cardinal splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
         *
         * All smoothing functions within Chartist are factory functions that accept an options parameter. The cardinal interpolation function accepts one configuration parameter `tension`, between 0 and 1, which controls the smoothing intensity.
         *
         * @example
         * var chart = new Chartist.Line('.ct-chart', {
         *   labels: [1, 2, 3, 4, 5],
         *   series: [[1, 2, 8, 1, 7]]
         * }, {
         *   lineSmooth: Chartist.Interpolation.cardinal({
         *     tension: 1,
         *     fillHoles: false
         *   })
         * });
         *
         * @memberof Chartist.Interpolation
         * @param {Object} options The options of the cardinal factory function.
         * @return {Function}
         */


        Chartist.Interpolation.cardinal = function (options) {
          var defaultOptions = {
            tension: 1,
            fillHoles: false
          };
          options = Chartist.extend({}, defaultOptions, options);
          var t = Math.min(1, Math.max(0, options.tension)),
              c = 1 - t;
          return function cardinal(pathCoordinates, valueData) {
            // First we try to split the coordinates into segments
            // This is necessary to treat "holes" in line charts
            var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
              fillHoles: options.fillHoles
            });

            if (!segments.length) {
              // If there were no segments return 'Chartist.Interpolation.none'
              return Chartist.Interpolation.none()([]);
            } else if (segments.length > 1) {
              // If the split resulted in more that one segment we need to interpolate each segment individually and join them
              // afterwards together into a single path.
              var paths = []; // For each segment we will recurse the cardinal function

              segments.forEach(function (segment) {
                paths.push(cardinal(segment.pathCoordinates, segment.valueData));
              }); // Join the segment path data into a single path and return

              return Chartist.Svg.Path.join(paths);
            } else {
              // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
              // segment
              pathCoordinates = segments[0].pathCoordinates;
              valueData = segments[0].valueData; // If less than two points we need to fallback to no smoothing

              if (pathCoordinates.length <= 4) {
                return Chartist.Interpolation.none()(pathCoordinates, valueData);
              }

              var path = new Chartist.Svg.Path().move(pathCoordinates[0], pathCoordinates[1], false, valueData[0]),
                  z;

              for (var i = 0, iLen = pathCoordinates.length; iLen - 2 * !z > i; i += 2) {
                var p = [{
                  x: +pathCoordinates[i - 2],
                  y: +pathCoordinates[i - 1]
                }, {
                  x: +pathCoordinates[i],
                  y: +pathCoordinates[i + 1]
                }, {
                  x: +pathCoordinates[i + 2],
                  y: +pathCoordinates[i + 3]
                }, {
                  x: +pathCoordinates[i + 4],
                  y: +pathCoordinates[i + 5]
                }];

                if (z) {
                  if (!i) {
                    p[0] = {
                      x: +pathCoordinates[iLen - 2],
                      y: +pathCoordinates[iLen - 1]
                    };
                  } else if (iLen - 4 === i) {
                    p[3] = {
                      x: +pathCoordinates[0],
                      y: +pathCoordinates[1]
                    };
                  } else if (iLen - 2 === i) {
                    p[2] = {
                      x: +pathCoordinates[0],
                      y: +pathCoordinates[1]
                    };
                    p[3] = {
                      x: +pathCoordinates[2],
                      y: +pathCoordinates[3]
                    };
                  }
                } else {
                  if (iLen - 4 === i) {
                    p[3] = p[2];
                  } else if (!i) {
                    p[0] = {
                      x: +pathCoordinates[i],
                      y: +pathCoordinates[i + 1]
                    };
                  }
                }

                path.curve(t * (-p[0].x + 6 * p[1].x + p[2].x) / 6 + c * p[2].x, t * (-p[0].y + 6 * p[1].y + p[2].y) / 6 + c * p[2].y, t * (p[1].x + 6 * p[2].x - p[3].x) / 6 + c * p[2].x, t * (p[1].y + 6 * p[2].y - p[3].y) / 6 + c * p[2].y, p[2].x, p[2].y, false, valueData[(i + 2) / 2]);
              }

              return path;
            }
          };
        };
        /**
         * Monotone Cubic spline interpolation produces a smooth curve which preserves monotonicity. Unlike cardinal splines, the curve will not extend beyond the range of y-values of the original data points.
         *
         * Monotone Cubic splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
         *
         * The x-values of subsequent points must be increasing to fit a Monotone Cubic spline. If this condition is not met for a pair of adjacent points, then there will be a break in the curve between those data points.
         *
         * All smoothing functions within Chartist are factory functions that accept an options parameter.
         *
         * @example
         * var chart = new Chartist.Line('.ct-chart', {
         *   labels: [1, 2, 3, 4, 5],
         *   series: [[1, 2, 8, 1, 7]]
         * }, {
         *   lineSmooth: Chartist.Interpolation.monotoneCubic({
         *     fillHoles: false
         *   })
         * });
         *
         * @memberof Chartist.Interpolation
         * @param {Object} options The options of the monotoneCubic factory function.
         * @return {Function}
         */


        Chartist.Interpolation.monotoneCubic = function (options) {
          var defaultOptions = {
            fillHoles: false
          };
          options = Chartist.extend({}, defaultOptions, options);
          return function monotoneCubic(pathCoordinates, valueData) {
            // First we try to split the coordinates into segments
            // This is necessary to treat "holes" in line charts
            var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
              fillHoles: options.fillHoles,
              increasingX: true
            });

            if (!segments.length) {
              // If there were no segments return 'Chartist.Interpolation.none'
              return Chartist.Interpolation.none()([]);
            } else if (segments.length > 1) {
              // If the split resulted in more that one segment we need to interpolate each segment individually and join them
              // afterwards together into a single path.
              var paths = []; // For each segment we will recurse the monotoneCubic fn function

              segments.forEach(function (segment) {
                paths.push(monotoneCubic(segment.pathCoordinates, segment.valueData));
              }); // Join the segment path data into a single path and return

              return Chartist.Svg.Path.join(paths);
            } else {
              // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
              // segment
              pathCoordinates = segments[0].pathCoordinates;
              valueData = segments[0].valueData; // If less than three points we need to fallback to no smoothing

              if (pathCoordinates.length <= 4) {
                return Chartist.Interpolation.none()(pathCoordinates, valueData);
              }

              var xs = [],
                  ys = [],
                  i,
                  n = pathCoordinates.length / 2,
                  ms = [],
                  ds = [],
                  dys = [],
                  dxs = [],
                  path; // Populate x and y coordinates into separate arrays, for readability

              for (i = 0; i < n; i++) {
                xs[i] = pathCoordinates[i * 2];
                ys[i] = pathCoordinates[i * 2 + 1];
              } // Calculate deltas and derivative


              for (i = 0; i < n - 1; i++) {
                dys[i] = ys[i + 1] - ys[i];
                dxs[i] = xs[i + 1] - xs[i];
                ds[i] = dys[i] / dxs[i];
              } // Determine desired slope (m) at each point using Fritsch-Carlson method
              // See: http://math.stackexchange.com/questions/45218/implementation-of-monotone-cubic-interpolation


              ms[0] = ds[0];
              ms[n - 1] = ds[n - 2];

              for (i = 1; i < n - 1; i++) {
                if (ds[i] === 0 || ds[i - 1] === 0 || ds[i - 1] > 0 !== ds[i] > 0) {
                  ms[i] = 0;
                } else {
                  ms[i] = 3 * (dxs[i - 1] + dxs[i]) / ((2 * dxs[i] + dxs[i - 1]) / ds[i - 1] + (dxs[i] + 2 * dxs[i - 1]) / ds[i]);

                  if (!isFinite(ms[i])) {
                    ms[i] = 0;
                  }
                }
              } // Now build a path from the slopes


              path = new Chartist.Svg.Path().move(xs[0], ys[0], false, valueData[0]);

              for (i = 0; i < n - 1; i++) {
                path.curve( // First control point
                xs[i] + dxs[i] / 3, ys[i] + ms[i] * dxs[i] / 3, // Second control point
                xs[i + 1] - dxs[i] / 3, ys[i + 1] - ms[i + 1] * dxs[i] / 3, // End point
                xs[i + 1], ys[i + 1], false, valueData[i + 1]);
              }

              return path;
            }
          };
        };
        /**
         * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the `showPoint` option is enabled.
         *
         * All smoothing functions within Chartist are factory functions that accept an options parameter. The step interpolation function accepts one configuration parameter `postpone`, that can be `true` or `false`. The default value is `true` and will cause the step to occur where the value actually changes. If a different behaviour is needed where the step is shifted to the left and happens before the actual value, this option can be set to `false`.
         *
         * @example
         * var chart = new Chartist.Line('.ct-chart', {
         *   labels: [1, 2, 3, 4, 5],
         *   series: [[1, 2, 8, 1, 7]]
         * }, {
         *   lineSmooth: Chartist.Interpolation.step({
         *     postpone: true,
         *     fillHoles: false
         *   })
         * });
         *
         * @memberof Chartist.Interpolation
         * @param options
         * @returns {Function}
         */


        Chartist.Interpolation.step = function (options) {
          var defaultOptions = {
            postpone: true,
            fillHoles: false
          };
          options = Chartist.extend({}, defaultOptions, options);
          return function step(pathCoordinates, valueData) {
            var path = new Chartist.Svg.Path();
            var prevX, prevY, prevData;

            for (var i = 0; i < pathCoordinates.length; i += 2) {
              var currX = pathCoordinates[i];
              var currY = pathCoordinates[i + 1];
              var currData = valueData[i / 2]; // If the current point is also not a hole we can draw the step lines

              if (currData.value !== undefined) {
                if (prevData === undefined) {
                  path.move(currX, currY, false, currData);
                } else {
                  if (options.postpone) {
                    // If postponed we should draw the step line with the value of the previous value
                    path.line(currX, prevY, false, prevData);
                  } else {
                    // If not postponed we should draw the step line with the value of the current value
                    path.line(prevX, currY, false, currData);
                  } // Line to the actual point (this should only be a Y-Axis movement


                  path.line(currX, currY, false, currData);
                }

                prevX = currX;
                prevY = currY;
                prevData = currData;
              } else if (!options.fillHoles) {
                prevX = prevY = prevData = undefined;
              }
            }

            return path;
          };
        };
      })(this || global, Chartist);

      ;
      /**
      * A very basic event module that helps to generate and catch events.
      *
      * @module Chartist.Event
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        Chartist.EventEmitter = function () {
          var handlers = [];
          /**
           * Add an event handler for a specific event
           *
           * @memberof Chartist.Event
           * @param {String} event The event name
           * @param {Function} handler A event handler function
           */

          function addEventHandler(event, handler) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
          }
          /**
           * Remove an event handler of a specific event name or remove all event handlers for a specific event.
           *
           * @memberof Chartist.Event
           * @param {String} event The event name where a specific or all handlers should be removed
           * @param {Function} [handler] An optional event handler function. If specified only this specific handler will be removed and otherwise all handlers are removed.
           */


          function removeEventHandler(event, handler) {
            // Only do something if there are event handlers with this name existing
            if (handlers[event]) {
              // If handler is set we will look for a specific handler and only remove this
              if (handler) {
                handlers[event].splice(handlers[event].indexOf(handler), 1);

                if (handlers[event].length === 0) {
                  delete handlers[event];
                }
              } else {
                // If no handler is specified we remove all handlers for this event
                delete handlers[event];
              }
            }
          }
          /**
           * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
           *
           * @memberof Chartist.Event
           * @param {String} event The event name that should be triggered
           * @param {*} data Arbitrary data that will be passed to the event handler callback functions
           */


          function emit(event, data) {
            // Only do something if there are event handlers with this name existing
            if (handlers[event]) {
              handlers[event].forEach(function (handler) {
                handler(data);
              });
            } // Emit event to star event handlers


            if (handlers['*']) {
              handlers['*'].forEach(function (starHandler) {
                starHandler(event, data);
              });
            }
          }

          return {
            addEventHandler: addEventHandler,
            removeEventHandler: removeEventHandler,
            emit: emit
          };
        };
      })(this || global, Chartist);

      ;
      /**
      * This module provides some basic prototype inheritance utilities.
      *
      * @module Chartist.Class
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        function listToArray(list) {
          var arr = [];

          if (list.length) {
            for (var i = 0; i < list.length; i++) {
              arr.push(list[i]);
            }
          }

          return arr;
        }
        /**
         * Method to extend from current prototype.
         *
         * @memberof Chartist.Class
         * @param {Object} properties The object that serves as definition for the prototype that gets created for the new class. This object should always contain a constructor property that is the desired constructor for the newly created class.
         * @param {Object} [superProtoOverride] By default extens will use the current class prototype or Chartist.class. With this parameter you can specify any super prototype that will be used.
         * @return {Function} Constructor function of the new class
         *
         * @example
         * var Fruit = Class.extend({
           * color: undefined,
           *   sugar: undefined,
           *
           *   constructor: function(color, sugar) {
           *     this.color = color;
           *     this.sugar = sugar;
           *   },
           *
           *   eat: function() {
           *     this.sugar = 0;
           *     return this;
           *   }
           * });
         *
         * var Banana = Fruit.extend({
           *   length: undefined,
           *
           *   constructor: function(length, sugar) {
           *     Banana.super.constructor.call(this, 'Yellow', sugar);
           *     this.length = length;
           *   }
           * });
         *
         * var banana = new Banana(20, 40);
         * console.log('banana instanceof Fruit', banana instanceof Fruit);
         * console.log('Fruit is prototype of banana', Fruit.prototype.isPrototypeOf(banana));
         * console.log('bananas prototype is Fruit', Object.getPrototypeOf(banana) === Fruit.prototype);
         * console.log(banana.sugar);
         * console.log(banana.eat().sugar);
         * console.log(banana.color);
         */


        function extend(properties, superProtoOverride) {
          var superProto = superProtoOverride || this.prototype || Chartist.Class;
          var proto = Object.create(superProto);
          Chartist.Class.cloneDefinitions(proto, properties);

          var constr = function constr() {
            var fn = proto.constructor || function () {},
                instance; // If this is linked to the Chartist namespace the constructor was not called with new
            // To provide a fallback we will instantiate here and return the instance


            instance = this === Chartist ? Object.create(proto) : this;
            fn.apply(instance, Array.prototype.slice.call(arguments, 0)); // If this constructor was not called with new we need to return the instance
            // This will not harm when the constructor has been called with new as the returned value is ignored

            return instance;
          };

          constr.prototype = proto;
          constr["super"] = superProto;
          constr.extend = this.extend;
          return constr;
        } // Variable argument list clones args > 0 into args[0] and retruns modified args[0]


        function cloneDefinitions() {
          var args = listToArray(arguments);
          var target = args[0];
          args.splice(1, args.length - 1).forEach(function (source) {
            Object.getOwnPropertyNames(source).forEach(function (propName) {
              // If this property already exist in target we delete it first
              delete target[propName]; // Define the property with the descriptor from source

              Object.defineProperty(target, propName, Object.getOwnPropertyDescriptor(source, propName));
            });
          });
          return target;
        }

        Chartist.Class = {
          extend: extend,
          cloneDefinitions: cloneDefinitions
        };
      })(this || global, Chartist);

      ;
      /**
      * Base for all chart types. The methods in Chartist.Base are inherited to all chart types.
      *
      * @module Chartist.Base
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        var window = globalRoot.window; // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
        // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
        // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
        // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
        // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
        // The problem is with the label offsets that can't be converted into percentage and affecting the chart container

        /**
         * Updates the chart which currently does a full reconstruction of the SVG DOM
         *
         * @param {Object} [data] Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
         * @param {Object} [options] Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
         * @param {Boolean} [override] If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
         * @memberof Chartist.Base
         */

        function update(data, options, override) {
          if (data) {
            this.data = data || {};
            this.data.labels = this.data.labels || [];
            this.data.series = this.data.series || []; // Event for data transformation that allows to manipulate the data before it gets rendered in the charts

            this.eventEmitter.emit('data', {
              type: 'update',
              data: this.data
            });
          }

          if (options) {
            this.options = Chartist.extend({}, override ? this.options : this.defaultOptions, options); // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
            // Otherwise we re-create the optionsProvider at this point

            if (!this.initializeTimeoutId) {
              this.optionsProvider.removeMediaQueryListeners();
              this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
            }
          } // Only re-created the chart if it has been initialized yet


          if (!this.initializeTimeoutId) {
            this.createChart(this.optionsProvider.getCurrentOptions());
          } // Return a reference to the chart object to chain up calls


          return this;
        }
        /**
         * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
         *
         * @memberof Chartist.Base
         */


        function detach() {
          // Only detach if initialization already occurred on this chart. If this chart still hasn't initialized (therefore
          // the initializationTimeoutId is still a valid timeout reference, we will clear the timeout
          if (!this.initializeTimeoutId) {
            window.removeEventListener('resize', this.resizeListener);
            this.optionsProvider.removeMediaQueryListeners();
          } else {
            window.clearTimeout(this.initializeTimeoutId);
          }

          return this;
        }
        /**
         * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
         *
         * @memberof Chartist.Base
         * @param {String} event Name of the event. Check the examples for supported events.
         * @param {Function} handler The handler function that will be called when an event with the given name was emitted. This function will receive a data argument which contains event data. See the example for more details.
         */


        function on(event, handler) {
          this.eventEmitter.addEventHandler(event, handler);
          return this;
        }
        /**
         * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
         *
         * @memberof Chartist.Base
         * @param {String} event Name of the event for which a handler should be removed
         * @param {Function} [handler] The handler function that that was previously used to register a new event handler. This handler will be removed from the event handler list. If this parameter is omitted then all event handlers for the given event are removed from the list.
         */


        function off(event, handler) {
          this.eventEmitter.removeEventHandler(event, handler);
          return this;
        }

        function initialize() {
          // Add window resize listener that re-creates the chart
          window.addEventListener('resize', this.resizeListener); // Obtain current options based on matching media queries (if responsive options are given)
          // This will also register a listener that is re-creating the chart based on media changes

          this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter); // Register options change listener that will trigger a chart update

          this.eventEmitter.addEventHandler('optionsChanged', function () {
            this.update();
          }.bind(this)); // Before the first chart creation we need to register us with all plugins that are configured
          // Initialize all relevant plugins with our chart object and the plugin options specified in the config

          if (this.options.plugins) {
            this.options.plugins.forEach(function (plugin) {
              if (plugin instanceof Array) {
                plugin[0](this, plugin[1]);
              } else {
                plugin(this);
              }
            }.bind(this));
          } // Event for data transformation that allows to manipulate the data before it gets rendered in the charts


          this.eventEmitter.emit('data', {
            type: 'initial',
            data: this.data
          }); // Create the first chart

          this.createChart(this.optionsProvider.getCurrentOptions()); // As chart is initialized from the event loop now we can reset our timeout reference
          // This is important if the chart gets initialized on the same element twice

          this.initializeTimeoutId = undefined;
        }
        /**
         * Constructor of chart base class.
         *
         * @param query
         * @param data
         * @param defaultOptions
         * @param options
         * @param responsiveOptions
         * @constructor
         */


        function Base(query, data, defaultOptions, options, responsiveOptions) {
          this.container = Chartist.querySelector(query);
          this.data = data || {};
          this.data.labels = this.data.labels || [];
          this.data.series = this.data.series || [];
          this.defaultOptions = defaultOptions;
          this.options = options;
          this.responsiveOptions = responsiveOptions;
          this.eventEmitter = Chartist.EventEmitter();
          this.supportsForeignObject = Chartist.Svg.isSupported('Extensibility');
          this.supportsAnimations = Chartist.Svg.isSupported('AnimationEventsAttribute');

          this.resizeListener = function resizeListener() {
            this.update();
          }.bind(this);

          if (this.container) {
            // If chartist was already initialized in this container we are detaching all event listeners first
            if (this.container.__chartist__) {
              this.container.__chartist__.detach();
            }

            this.container.__chartist__ = this;
          } // Using event loop for first draw to make it possible to register event listeners in the same call stack where
          // the chart was created.


          this.initializeTimeoutId = setTimeout(initialize.bind(this), 0);
        } // Creating the chart base class


        Chartist.Base = Chartist.Class.extend({
          constructor: Base,
          optionsProvider: undefined,
          container: undefined,
          svg: undefined,
          eventEmitter: undefined,
          createChart: function createChart() {
            throw new Error('Base chart type can\'t be instantiated!');
          },
          update: update,
          detach: detach,
          on: on,
          off: off,
          version: Chartist.version,
          supportsForeignObject: false
        });
      })(this || global, Chartist);

      ;
      /**
      * Chartist SVG module for simple SVG DOM abstraction
      *
      * @module Chartist.Svg
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        var document = globalRoot.document;
        /**
         * Chartist.Svg creates a new SVG object wrapper with a starting element. You can use the wrapper to fluently create sub-elements and modify them.
         *
         * @memberof Chartist.Svg
         * @constructor
         * @param {String|Element} name The name of the SVG element to create or an SVG dom element which should be wrapped into Chartist.Svg
         * @param {Object} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
         * @param {String} className This class or class list will be added to the SVG element
         * @param {Object} parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
         * @param {Boolean} insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
         */

        function Svg(name, attributes, className, parent, insertFirst) {
          // If Svg is getting called with an SVG element we just return the wrapper
          if (name instanceof Element) {
            this._node = name;
          } else {
            this._node = document.createElementNS(Chartist.namespaces.svg, name); // If this is an SVG element created then custom namespace

            if (name === 'svg') {
              this.attr({
                'xmlns:ct': Chartist.namespaces.ct
              });
            }
          }

          if (attributes) {
            this.attr(attributes);
          }

          if (className) {
            this.addClass(className);
          }

          if (parent) {
            if (insertFirst && parent._node.firstChild) {
              parent._node.insertBefore(this._node, parent._node.firstChild);
            } else {
              parent._node.appendChild(this._node);
            }
          }
        }
        /**
         * Set attributes on the current SVG element of the wrapper you're currently working on.
         *
         * @memberof Chartist.Svg
         * @param {Object|String} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added. If this parameter is a String then the function is used as a getter and will return the attribute value.
         * @param {String} [ns] If specified, the attribute will be obtained using getAttributeNs. In order to write namepsaced attributes you can use the namespace:attribute notation within the attributes object.
         * @return {Object|String} The current wrapper object will be returned so it can be used for chaining or the attribute value if used as getter function.
         */


        function attr(attributes, ns) {
          if (typeof attributes === 'string') {
            if (ns) {
              return this._node.getAttributeNS(ns, attributes);
            } else {
              return this._node.getAttribute(attributes);
            }
          }

          Object.keys(attributes).forEach(function (key) {
            // If the attribute value is undefined we can skip this one
            if (attributes[key] === undefined) {
              return;
            }

            if (key.indexOf(':') !== -1) {
              var namespacedAttribute = key.split(':');

              this._node.setAttributeNS(Chartist.namespaces[namespacedAttribute[0]], key, attributes[key]);
            } else {
              this._node.setAttribute(key, attributes[key]);
            }
          }.bind(this));
          return this;
        }
        /**
         * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
         *
         * @memberof Chartist.Svg
         * @param {String} name The name of the SVG element that should be created as child element of the currently selected element wrapper
         * @param {Object} [attributes] An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
         * @param {String} [className] This class or class list will be added to the SVG element
         * @param {Boolean} [insertFirst] If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
         * @return {Chartist.Svg} Returns a Chartist.Svg wrapper object that can be used to modify the containing SVG data
         */


        function elem(name, attributes, className, insertFirst) {
          return new Chartist.Svg(name, attributes, className, this, insertFirst);
        }
        /**
         * Returns the parent Chartist.SVG wrapper object
         *
         * @memberof Chartist.Svg
         * @return {Chartist.Svg} Returns a Chartist.Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
         */


        function parent() {
          return this._node.parentNode instanceof SVGElement ? new Chartist.Svg(this._node.parentNode) : null;
        }
        /**
         * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
         *
         * @memberof Chartist.Svg
         * @return {Chartist.Svg} The root SVG element wrapped in a Chartist.Svg element
         */


        function root() {
          var node = this._node;

          while (node.nodeName !== 'svg') {
            node = node.parentNode;
          }

          return new Chartist.Svg(node);
        }
        /**
         * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
         *
         * @memberof Chartist.Svg
         * @param {String} selector A CSS selector that is used to query for child SVG elements
         * @return {Chartist.Svg} The SVG wrapper for the element found or null if no element was found
         */


        function querySelector(selector) {
          var foundNode = this._node.querySelector(selector);

          return foundNode ? new Chartist.Svg(foundNode) : null;
        }
        /**
         * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
         *
         * @memberof Chartist.Svg
         * @param {String} selector A CSS selector that is used to query for child SVG elements
         * @return {Chartist.Svg.List} The SVG wrapper list for the element found or null if no element was found
         */


        function querySelectorAll(selector) {
          var foundNodes = this._node.querySelectorAll(selector);

          return foundNodes.length ? new Chartist.Svg.List(foundNodes) : null;
        }
        /**
         * Returns the underlying SVG node for the current element.
         *
         * @memberof Chartist.Svg
         * @returns {Node}
         */


        function getNode() {
          return this._node;
        }
        /**
         * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
         *
         * @memberof Chartist.Svg
         * @param {Node|String} content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
         * @param {String} [attributes] An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
         * @param {String} [className] This class or class list will be added to the SVG element
         * @param {Boolean} [insertFirst] Specifies if the foreignObject should be inserted as first child
         * @return {Chartist.Svg} New wrapper object that wraps the foreignObject element
         */


        function foreignObject(content, attributes, className, insertFirst) {
          // If content is string then we convert it to DOM
          // TODO: Handle case where content is not a string nor a DOM Node
          if (typeof content === 'string') {
            var container = document.createElement('div');
            container.innerHTML = content;
            content = container.firstChild;
          } // Adding namespace to content element


          content.setAttribute('xmlns', Chartist.namespaces.xmlns); // Creating the foreignObject without required extension attribute (as described here
          // http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement)

          var fnObj = this.elem('foreignObject', attributes, className, insertFirst); // Add content to foreignObjectElement

          fnObj._node.appendChild(content);

          return fnObj;
        }
        /**
         * This method adds a new text element to the current Chartist.Svg wrapper.
         *
         * @memberof Chartist.Svg
         * @param {String} t The text that should be added to the text element that is created
         * @return {Chartist.Svg} The same wrapper object that was used to add the newly created element
         */


        function text(t) {
          this._node.appendChild(document.createTextNode(t));

          return this;
        }
        /**
         * This method will clear all child nodes of the current wrapper object.
         *
         * @memberof Chartist.Svg
         * @return {Chartist.Svg} The same wrapper object that got emptied
         */


        function empty() {
          while (this._node.firstChild) {
            this._node.removeChild(this._node.firstChild);
          }

          return this;
        }
        /**
         * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
         *
         * @memberof Chartist.Svg
         * @return {Chartist.Svg} The parent wrapper object of the element that got removed
         */


        function remove() {
          this._node.parentNode.removeChild(this._node);

          return this.parent();
        }
        /**
         * This method will replace the element with a new element that can be created outside of the current DOM.
         *
         * @memberof Chartist.Svg
         * @param {Chartist.Svg} newElement The new Chartist.Svg object that will be used to replace the current wrapper object
         * @return {Chartist.Svg} The wrapper of the new element
         */


        function replace(newElement) {
          this._node.parentNode.replaceChild(newElement._node, this._node);

          return newElement;
        }
        /**
         * This method will append an element to the current element as a child.
         *
         * @memberof Chartist.Svg
         * @param {Chartist.Svg} element The Chartist.Svg element that should be added as a child
         * @param {Boolean} [insertFirst] Specifies if the element should be inserted as first child
         * @return {Chartist.Svg} The wrapper of the appended object
         */


        function append(element, insertFirst) {
          if (insertFirst && this._node.firstChild) {
            this._node.insertBefore(element._node, this._node.firstChild);
          } else {
            this._node.appendChild(element._node);
          }

          return this;
        }
        /**
         * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
         *
         * @memberof Chartist.Svg
         * @return {Array} A list of classes or an empty array if there are no classes on the current element
         */


        function classes() {
          return this._node.getAttribute('class') ? this._node.getAttribute('class').trim().split(/\s+/) : [];
        }
        /**
         * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
         *
         * @memberof Chartist.Svg
         * @param {String} names A white space separated list of class names
         * @return {Chartist.Svg} The wrapper of the current element
         */


        function addClass(names) {
          this._node.setAttribute('class', this.classes(this._node).concat(names.trim().split(/\s+/)).filter(function (elem, pos, self) {
            return self.indexOf(elem) === pos;
          }).join(' '));

          return this;
        }
        /**
         * Removes one or a space separated list of classes from the current element.
         *
         * @memberof Chartist.Svg
         * @param {String} names A white space separated list of class names
         * @return {Chartist.Svg} The wrapper of the current element
         */


        function removeClass(names) {
          var removedClasses = names.trim().split(/\s+/);

          this._node.setAttribute('class', this.classes(this._node).filter(function (name) {
            return removedClasses.indexOf(name) === -1;
          }).join(' '));

          return this;
        }
        /**
         * Removes all classes from the current element.
         *
         * @memberof Chartist.Svg
         * @return {Chartist.Svg} The wrapper of the current element
         */


        function removeAllClasses() {
          this._node.setAttribute('class', '');

          return this;
        }
        /**
         * Get element height using `getBoundingClientRect`
         *
         * @memberof Chartist.Svg
         * @return {Number} The elements height in pixels
         */


        function height() {
          return this._node.getBoundingClientRect().height;
        }
        /**
         * Get element width using `getBoundingClientRect`
         *
         * @memberof Chartist.Core
         * @return {Number} The elements width in pixels
         */


        function width() {
          return this._node.getBoundingClientRect().width;
        }
        /**
         * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Chartist.Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
         * **An animations object could look like this:**
         * ```javascript
         * element.animate({
         *   opacity: {
         *     dur: 1000,
         *     from: 0,
         *     to: 1
         *   },
         *   x1: {
         *     dur: '1000ms',
         *     from: 100,
         *     to: 200,
         *     easing: 'easeOutQuart'
         *   },
         *   y1: {
         *     dur: '2s',
         *     from: 0,
         *     to: 100
         *   }
         * });
         * ```
         * **Automatic unit conversion**
         * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
         * **Guided mode**
         * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Chartist.Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
         * If guided mode is enabled the following behavior is added:
         * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
         * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
         * - The animate element will be forced to use `fill="freeze"`
         * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
         * - After the animation the element attribute value will be set to the `to` value of the animation
         * - The animate element is deleted from the DOM
         *
         * @memberof Chartist.Svg
         * @param {Object} animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
         * @param {Boolean} guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
         * @param {Object} eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
         * @return {Chartist.Svg} The current element where the animation was added
         */


        function animate(animations, guided, eventEmitter) {
          if (guided === undefined) {
            guided = true;
          }

          Object.keys(animations).forEach(function createAnimateForAttributes(attribute) {
            function createAnimate(animationDefinition, guided) {
              var attributeProperties = {},
                  animate,
                  timeout,
                  easing; // Check if an easing is specified in the definition object and delete it from the object as it will not
              // be part of the animate element attributes.

              if (animationDefinition.easing) {
                // If already an easing Bézier curve array we take it or we lookup a easing array in the Easing object
                easing = animationDefinition.easing instanceof Array ? animationDefinition.easing : Chartist.Svg.Easing[animationDefinition.easing];
                delete animationDefinition.easing;
              } // If numeric dur or begin was provided we assume milli seconds


              animationDefinition.begin = Chartist.ensureUnit(animationDefinition.begin, 'ms');
              animationDefinition.dur = Chartist.ensureUnit(animationDefinition.dur, 'ms');

              if (easing) {
                animationDefinition.calcMode = 'spline';
                animationDefinition.keySplines = easing.join(' ');
                animationDefinition.keyTimes = '0;1';
              } // Adding "fill: freeze" if we are in guided mode and set initial attribute values


              if (guided) {
                animationDefinition.fill = 'freeze'; // Animated property on our element should already be set to the animation from value in guided mode

                attributeProperties[attribute] = animationDefinition.from;
                this.attr(attributeProperties); // In guided mode we also set begin to indefinite so we can trigger the start manually and put the begin
                // which needs to be in ms aside

                timeout = Chartist.quantity(animationDefinition.begin || 0).value;
                animationDefinition.begin = 'indefinite';
              }

              animate = this.elem('animate', Chartist.extend({
                attributeName: attribute
              }, animationDefinition));

              if (guided) {
                // If guided we take the value that was put aside in timeout and trigger the animation manually with a timeout
                setTimeout(function () {
                  // If beginElement fails we set the animated attribute to the end position and remove the animate element
                  // This happens if the SMIL ElementTimeControl interface is not supported or any other problems occured in
                  // the browser. (Currently FF 34 does not support animate elements in foreignObjects)
                  try {
                    animate._node.beginElement();
                  } catch (err) {
                    // Set animated attribute to current animated value
                    attributeProperties[attribute] = animationDefinition.to;
                    this.attr(attributeProperties); // Remove the animate element as it's no longer required

                    animate.remove();
                  }
                }.bind(this), timeout);
              }

              if (eventEmitter) {
                animate._node.addEventListener('beginEvent', function handleBeginEvent() {
                  eventEmitter.emit('animationBegin', {
                    element: this,
                    animate: animate._node,
                    params: animationDefinition
                  });
                }.bind(this));
              }

              animate._node.addEventListener('endEvent', function handleEndEvent() {
                if (eventEmitter) {
                  eventEmitter.emit('animationEnd', {
                    element: this,
                    animate: animate._node,
                    params: animationDefinition
                  });
                }

                if (guided) {
                  // Set animated attribute to current animated value
                  attributeProperties[attribute] = animationDefinition.to;
                  this.attr(attributeProperties); // Remove the animate element as it's no longer required

                  animate.remove();
                }
              }.bind(this));
            } // If current attribute is an array of definition objects we create an animate for each and disable guided mode


            if (animations[attribute] instanceof Array) {
              animations[attribute].forEach(function (animationDefinition) {
                createAnimate.bind(this)(animationDefinition, false);
              }.bind(this));
            } else {
              createAnimate.bind(this)(animations[attribute], guided);
            }
          }.bind(this));
          return this;
        }

        Chartist.Svg = Chartist.Class.extend({
          constructor: Svg,
          attr: attr,
          elem: elem,
          parent: parent,
          root: root,
          querySelector: querySelector,
          querySelectorAll: querySelectorAll,
          getNode: getNode,
          foreignObject: foreignObject,
          text: text,
          empty: empty,
          remove: remove,
          replace: replace,
          append: append,
          classes: classes,
          addClass: addClass,
          removeClass: removeClass,
          removeAllClasses: removeAllClasses,
          height: height,
          width: width,
          animate: animate
        });
        /**
         * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
         *
         * @memberof Chartist.Svg
         * @param {String} feature The SVG 1.1 feature that should be checked for support.
         * @return {Boolean} True of false if the feature is supported or not
         */

        Chartist.Svg.isSupported = function (feature) {
          return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#' + feature, '1.1');
        };
        /**
         * This Object contains some standard easing cubic bezier curves. Then can be used with their name in the `Chartist.Svg.animate`. You can also extend the list and use your own name in the `animate` function. Click the show code button to see the available bezier functions.
         *
         * @memberof Chartist.Svg
         */


        var easingCubicBeziers = {
          easeInSine: [0.47, 0, 0.745, 0.715],
          easeOutSine: [0.39, 0.575, 0.565, 1],
          easeInOutSine: [0.445, 0.05, 0.55, 0.95],
          easeInQuad: [0.55, 0.085, 0.68, 0.53],
          easeOutQuad: [0.25, 0.46, 0.45, 0.94],
          easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
          easeInCubic: [0.55, 0.055, 0.675, 0.19],
          easeOutCubic: [0.215, 0.61, 0.355, 1],
          easeInOutCubic: [0.645, 0.045, 0.355, 1],
          easeInQuart: [0.895, 0.03, 0.685, 0.22],
          easeOutQuart: [0.165, 0.84, 0.44, 1],
          easeInOutQuart: [0.77, 0, 0.175, 1],
          easeInQuint: [0.755, 0.05, 0.855, 0.06],
          easeOutQuint: [0.23, 1, 0.32, 1],
          easeInOutQuint: [0.86, 0, 0.07, 1],
          easeInExpo: [0.95, 0.05, 0.795, 0.035],
          easeOutExpo: [0.19, 1, 0.22, 1],
          easeInOutExpo: [1, 0, 0, 1],
          easeInCirc: [0.6, 0.04, 0.98, 0.335],
          easeOutCirc: [0.075, 0.82, 0.165, 1],
          easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
          easeInBack: [0.6, -0.28, 0.735, 0.045],
          easeOutBack: [0.175, 0.885, 0.32, 1.275],
          easeInOutBack: [0.68, -0.55, 0.265, 1.55]
        };
        Chartist.Svg.Easing = easingCubicBeziers;
        /**
         * This helper class is to wrap multiple `Chartist.Svg` elements into a list where you can call the `Chartist.Svg` functions on all elements in the list with one call. This is helpful when you'd like to perform calls with `Chartist.Svg` on multiple elements.
         * An instance of this class is also returned by `Chartist.Svg.querySelectorAll`.
         *
         * @memberof Chartist.Svg
         * @param {Array<Node>|NodeList} nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
         * @constructor
         */

        function SvgList(nodeList) {
          var list = this;
          this.svgElements = [];

          for (var i = 0; i < nodeList.length; i++) {
            this.svgElements.push(new Chartist.Svg(nodeList[i]));
          } // Add delegation methods for Chartist.Svg


          Object.keys(Chartist.Svg.prototype).filter(function (prototypeProperty) {
            return ['constructor', 'parent', 'querySelector', 'querySelectorAll', 'replace', 'append', 'classes', 'height', 'width'].indexOf(prototypeProperty) === -1;
          }).forEach(function (prototypeProperty) {
            list[prototypeProperty] = function () {
              var args = Array.prototype.slice.call(arguments, 0);
              list.svgElements.forEach(function (element) {
                Chartist.Svg.prototype[prototypeProperty].apply(element, args);
              });
              return list;
            };
          });
        }

        Chartist.Svg.List = Chartist.Class.extend({
          constructor: SvgList
        });
      })(this || global, Chartist);

      ;
      /**
      * Chartist SVG path module for SVG path description creation and modification.
      *
      * @module Chartist.Svg.Path
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';
        /**
         * Contains the descriptors of supported element types in a SVG path. Currently only move, line and curve are supported.
         *
         * @memberof Chartist.Svg.Path
         * @type {Object}
         */

        var elementDescriptions = {
          m: ['x', 'y'],
          l: ['x', 'y'],
          c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
          a: ['rx', 'ry', 'xAr', 'lAf', 'sf', 'x', 'y']
        };
        /**
         * Default options for newly created SVG path objects.
         *
         * @memberof Chartist.Svg.Path
         * @type {Object}
         */

        var defaultOptions = {
          // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
          accuracy: 3
        };

        function element(command, params, pathElements, pos, relative, data) {
          var pathElement = Chartist.extend({
            command: relative ? command.toLowerCase() : command.toUpperCase()
          }, params, data ? {
            data: data
          } : {});
          pathElements.splice(pos, 0, pathElement);
        }

        function forEachParam(pathElements, cb) {
          pathElements.forEach(function (pathElement, pathElementIndex) {
            elementDescriptions[pathElement.command.toLowerCase()].forEach(function (paramName, paramIndex) {
              cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
            });
          });
        }
        /**
         * Used to construct a new path object.
         *
         * @memberof Chartist.Svg.Path
         * @param {Boolean} close If set to true then this path will be closed when stringified (with a Z at the end)
         * @param {Object} options Options object that overrides the default objects. See default options for more details.
         * @constructor
         */


        function SvgPath(close, options) {
          this.pathElements = [];
          this.pos = 0;
          this.close = close;
          this.options = Chartist.extend({}, defaultOptions, options);
        }
        /**
         * Gets or sets the current position (cursor) inside of the path. You can move around the cursor freely but limited to 0 or the count of existing elements. All modifications with element functions will insert new elements at the position of this cursor.
         *
         * @memberof Chartist.Svg.Path
         * @param {Number} [pos] If a number is passed then the cursor is set to this position in the path element array.
         * @return {Chartist.Svg.Path|Number} If the position parameter was passed then the return value will be the path object for easy call chaining. If no position parameter was passed then the current position is returned.
         */


        function position(pos) {
          if (pos !== undefined) {
            this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
            return this;
          } else {
            return this.pos;
          }
        }
        /**
         * Removes elements from the path starting at the current position.
         *
         * @memberof Chartist.Svg.Path
         * @param {Number} count Number of path elements that should be removed from the current position.
         * @return {Chartist.Svg.Path} The current path object for easy call chaining.
         */


        function remove(count) {
          this.pathElements.splice(this.pos, count);
          return this;
        }
        /**
         * Use this function to add a new move SVG path element.
         *
         * @memberof Chartist.Svg.Path
         * @param {Number} x The x coordinate for the move element.
         * @param {Number} y The y coordinate for the move element.
         * @param {Boolean} [relative] If set to true the move element will be created with relative coordinates (lowercase letter)
         * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
         * @return {Chartist.Svg.Path} The current path object for easy call chaining.
         */


        function move(x, y, relative, data) {
          element('M', {
            x: +x,
            y: +y
          }, this.pathElements, this.pos++, relative, data);
          return this;
        }
        /**
         * Use this function to add a new line SVG path element.
         *
         * @memberof Chartist.Svg.Path
         * @param {Number} x The x coordinate for the line element.
         * @param {Number} y The y coordinate for the line element.
         * @param {Boolean} [relative] If set to true the line element will be created with relative coordinates (lowercase letter)
         * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
         * @return {Chartist.Svg.Path} The current path object for easy call chaining.
         */


        function line(x, y, relative, data) {
          element('L', {
            x: +x,
            y: +y
          }, this.pathElements, this.pos++, relative, data);
          return this;
        }
        /**
         * Use this function to add a new curve SVG path element.
         *
         * @memberof Chartist.Svg.Path
         * @param {Number} x1 The x coordinate for the first control point of the bezier curve.
         * @param {Number} y1 The y coordinate for the first control point of the bezier curve.
         * @param {Number} x2 The x coordinate for the second control point of the bezier curve.
         * @param {Number} y2 The y coordinate for the second control point of the bezier curve.
         * @param {Number} x The x coordinate for the target point of the curve element.
         * @param {Number} y The y coordinate for the target point of the curve element.
         * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
         * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
         * @return {Chartist.Svg.Path} The current path object for easy call chaining.
         */


        function curve(x1, y1, x2, y2, x, y, relative, data) {
          element('C', {
            x1: +x1,
            y1: +y1,
            x2: +x2,
            y2: +y2,
            x: +x,
            y: +y
          }, this.pathElements, this.pos++, relative, data);
          return this;
        }
        /**
         * Use this function to add a new non-bezier curve SVG path element.
         *
         * @memberof Chartist.Svg.Path
         * @param {Number} rx The radius to be used for the x-axis of the arc.
         * @param {Number} ry The radius to be used for the y-axis of the arc.
         * @param {Number} xAr Defines the orientation of the arc
         * @param {Number} lAf Large arc flag
         * @param {Number} sf Sweep flag
         * @param {Number} x The x coordinate for the target point of the curve element.
         * @param {Number} y The y coordinate for the target point of the curve element.
         * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
         * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
         * @return {Chartist.Svg.Path} The current path object for easy call chaining.
         */


        function arc(rx, ry, xAr, lAf, sf, x, y, relative, data) {
          element('A', {
            rx: +rx,
            ry: +ry,
            xAr: +xAr,
            lAf: +lAf,
            sf: +sf,
            x: +x,
            y: +y
          }, this.pathElements, this.pos++, relative, data);
          return this;
        }
        /**
         * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
         *
         * @memberof Chartist.Svg.Path
         * @param {String} path Any SVG path that contains move (m), line (l) or curve (c) components.
         * @return {Chartist.Svg.Path} The current path object for easy call chaining.
         */


        function parse(path) {
          // Parsing the SVG path string into an array of arrays [['M', '10', '10'], ['L', '100', '100']]
          var chunks = path.replace(/([A-Za-z])([0-9])/g, '$1 $2').replace(/([0-9])([A-Za-z])/g, '$1 $2').split(/[\s,]+/).reduce(function (result, element) {
            if (element.match(/[A-Za-z]/)) {
              result.push([]);
            }

            result[result.length - 1].push(element);
            return result;
          }, []); // If this is a closed path we remove the Z at the end because this is determined by the close option

          if (chunks[chunks.length - 1][0].toUpperCase() === 'Z') {
            chunks.pop();
          } // Using svgPathElementDescriptions to map raw path arrays into objects that contain the command and the parameters
          // For example {command: 'M', x: '10', y: '10'}


          var elements = chunks.map(function (chunk) {
            var command = chunk.shift(),
                description = elementDescriptions[command.toLowerCase()];
            return Chartist.extend({
              command: command
            }, description.reduce(function (result, paramName, index) {
              result[paramName] = +chunk[index];
              return result;
            }, {}));
          }); // Preparing a splice call with the elements array as var arg params and insert the parsed elements at the current position

          var spliceArgs = [this.pos, 0];
          Array.prototype.push.apply(spliceArgs, elements);
          Array.prototype.splice.apply(this.pathElements, spliceArgs); // Increase the internal position by the element count

          this.pos += elements.length;
          return this;
        }
        /**
         * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
         *
         * @memberof Chartist.Svg.Path
         * @return {String}
         */


        function stringify() {
          var accuracyMultiplier = Math.pow(10, this.options.accuracy);
          return this.pathElements.reduce(function (path, pathElement) {
            var params = elementDescriptions[pathElement.command.toLowerCase()].map(function (paramName) {
              return this.options.accuracy ? Math.round(pathElement[paramName] * accuracyMultiplier) / accuracyMultiplier : pathElement[paramName];
            }.bind(this));
            return path + pathElement.command + params.join(',');
          }.bind(this), '') + (this.close ? 'Z' : '');
        }
        /**
         * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
         *
         * @memberof Chartist.Svg.Path
         * @param {Number} x The number which will be used to scale the x, x1 and x2 of all path elements.
         * @param {Number} y The number which will be used to scale the y, y1 and y2 of all path elements.
         * @return {Chartist.Svg.Path} The current path object for easy call chaining.
         */


        function scale(x, y) {
          forEachParam(this.pathElements, function (pathElement, paramName) {
            pathElement[paramName] *= paramName[0] === 'x' ? x : y;
          });
          return this;
        }
        /**
         * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
         *
         * @memberof Chartist.Svg.Path
         * @param {Number} x The number which will be used to translate the x, x1 and x2 of all path elements.
         * @param {Number} y The number which will be used to translate the y, y1 and y2 of all path elements.
         * @return {Chartist.Svg.Path} The current path object for easy call chaining.
         */


        function translate(x, y) {
          forEachParam(this.pathElements, function (pathElement, paramName) {
            pathElement[paramName] += paramName[0] === 'x' ? x : y;
          });
          return this;
        }
        /**
         * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
         * The method signature of the callback function looks like this:
         * ```javascript
         * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
         * ```
         * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
         *
         * @memberof Chartist.Svg.Path
         * @param {Function} transformFnc The callback function for the transformation. Check the signature in the function description.
         * @return {Chartist.Svg.Path} The current path object for easy call chaining.
         */


        function transform(transformFnc) {
          forEachParam(this.pathElements, function (pathElement, paramName, pathElementIndex, paramIndex, pathElements) {
            var transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);

            if (transformed || transformed === 0) {
              pathElement[paramName] = transformed;
            }
          });
          return this;
        }
        /**
         * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
         *
         * @memberof Chartist.Svg.Path
         * @param {Boolean} [close] Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
         * @return {Chartist.Svg.Path}
         */


        function clone(close) {
          var c = new Chartist.Svg.Path(close || this.close);
          c.pos = this.pos;
          c.pathElements = this.pathElements.slice().map(function cloneElements(pathElement) {
            return Chartist.extend({}, pathElement);
          });
          c.options = Chartist.extend({}, this.options);
          return c;
        }
        /**
         * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
         *
         * @memberof Chartist.Svg.Path
         * @param {String} command The command you'd like to use to split the path
         * @return {Array<Chartist.Svg.Path>}
         */


        function splitByCommand(command) {
          var split = [new Chartist.Svg.Path()];
          this.pathElements.forEach(function (pathElement) {
            if (pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) {
              split.push(new Chartist.Svg.Path());
            }

            split[split.length - 1].pathElements.push(pathElement);
          });
          return split;
        }
        /**
         * This static function on `Chartist.Svg.Path` is joining multiple paths together into one paths.
         *
         * @memberof Chartist.Svg.Path
         * @param {Array<Chartist.Svg.Path>} paths A list of paths to be joined together. The order is important.
         * @param {boolean} close If the newly created path should be a closed path
         * @param {Object} options Path options for the newly created path.
         * @return {Chartist.Svg.Path}
         */


        function join(paths, close, options) {
          var joinedPath = new Chartist.Svg.Path(close, options);

          for (var i = 0; i < paths.length; i++) {
            var path = paths[i];

            for (var j = 0; j < path.pathElements.length; j++) {
              joinedPath.pathElements.push(path.pathElements[j]);
            }
          }

          return joinedPath;
        }

        Chartist.Svg.Path = Chartist.Class.extend({
          constructor: SvgPath,
          position: position,
          remove: remove,
          move: move,
          line: line,
          curve: curve,
          arc: arc,
          scale: scale,
          translate: translate,
          transform: transform,
          parse: parse,
          stringify: stringify,
          clone: clone,
          splitByCommand: splitByCommand
        });
        Chartist.Svg.Path.elementDescriptions = elementDescriptions;
        Chartist.Svg.Path.join = join;
      })(this || global, Chartist);

      ;
      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        var window = globalRoot.window;
        var document = globalRoot.document;
        var axisUnits = {
          x: {
            pos: 'x',
            len: 'width',
            dir: 'horizontal',
            rectStart: 'x1',
            rectEnd: 'x2',
            rectOffset: 'y2'
          },
          y: {
            pos: 'y',
            len: 'height',
            dir: 'vertical',
            rectStart: 'y2',
            rectEnd: 'y1',
            rectOffset: 'x1'
          }
        };

        function Axis(units, chartRect, ticks, options) {
          this.units = units;
          this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
          this.chartRect = chartRect;
          this.axisLength = chartRect[units.rectEnd] - chartRect[units.rectStart];
          this.gridOffset = chartRect[units.rectOffset];
          this.ticks = ticks;
          this.options = options;
        }

        function createGridAndLabels(gridGroup, labelGroup, useForeignObject, chartOptions, eventEmitter) {
          var axisOptions = chartOptions['axis' + this.units.pos.toUpperCase()];
          var projectedValues = this.ticks.map(this.projectValue.bind(this));
          var labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);
          projectedValues.forEach(function (projectedValue, index) {
            var labelOffset = {
              x: 0,
              y: 0
            }; // TODO: Find better solution for solving this problem
            // Calculate how much space we have available for the label

            var labelLength;

            if (projectedValues[index + 1]) {
              // If we still have one label ahead, we can calculate the distance to the next tick / label
              labelLength = projectedValues[index + 1] - projectedValue;
            } else {
              // If we don't have a label ahead and we have only two labels in total, we just take the remaining distance to
              // on the whole axis length. We limit that to a minimum of 30 pixel, so that labels close to the border will
              // still be visible inside of the chart padding.
              labelLength = Math.max(this.axisLength - projectedValue, 30);
            } // Skip grid lines and labels where interpolated label values are falsey (execpt for 0)


            if (Chartist.isFalseyButZero(labelValues[index]) && labelValues[index] !== '') {
              return;
            } // Transform to global coordinates using the chartRect
            // We also need to set the label offset for the createLabel function


            if (this.units.pos === 'x') {
              projectedValue = this.chartRect.x1 + projectedValue;
              labelOffset.x = chartOptions.axisX.labelOffset.x; // If the labels should be positioned in start position (top side for vertical axis) we need to set a
              // different offset as for positioned with end (bottom)

              if (chartOptions.axisX.position === 'start') {
                labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
              } else {
                labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
              }
            } else {
              projectedValue = this.chartRect.y1 - projectedValue;
              labelOffset.y = chartOptions.axisY.labelOffset.y - (useForeignObject ? labelLength : 0); // If the labels should be positioned in start position (left side for horizontal axis) we need to set a
              // different offset as for positioned with end (right side)

              if (chartOptions.axisY.position === 'start') {
                labelOffset.x = useForeignObject ? this.chartRect.padding.left + chartOptions.axisY.labelOffset.x : this.chartRect.x1 - 10;
              } else {
                labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
              }
            }

            if (axisOptions.showGrid) {
              Chartist.createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [chartOptions.classNames.grid, chartOptions.classNames[this.units.dir]], eventEmitter);
            }

            if (axisOptions.showLabel) {
              Chartist.createLabel(projectedValue, labelLength, index, labelValues, this, axisOptions.offset, labelOffset, labelGroup, [chartOptions.classNames.label, chartOptions.classNames[this.units.dir], axisOptions.position === 'start' ? chartOptions.classNames[axisOptions.position] : chartOptions.classNames['end']], useForeignObject, eventEmitter);
            }
          }.bind(this));
        }

        Chartist.Axis = Chartist.Class.extend({
          constructor: Axis,
          createGridAndLabels: createGridAndLabels,
          projectValue: function projectValue(value, index, data) {
            throw new Error('Base axis can\'t be instantiated!');
          }
        });
        Chartist.Axis.units = axisUnits;
      })(this || global, Chartist);

      ;
      /**
      * The auto scale axis uses standard linear scale projection of values along an axis. It uses order of magnitude to find a scale automatically and evaluates the available space in order to find the perfect amount of ticks for your chart.
      * **Options**
      * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
      * ```javascript
      * var options = {
      *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
      *   high: 100,
      *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
      *   low: 0,
      *   // This option will be used when finding the right scale division settings. The amount of ticks on the scale will be determined so that as many ticks as possible will be displayed, while not violating this minimum required space (in pixel).
      *   scaleMinSpace: 20,
      *   // Can be set to true or false. If set to true, the scale will be generated with whole numbers only.
      *   onlyInteger: true,
      *   // The reference value can be used to make sure that this value will always be on the chart. This is especially useful on bipolar charts where the bipolar center always needs to be part of the chart.
      *   referenceValue: 5
      * };
      * ```
      *
      * @module Chartist.AutoScaleAxis
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        var window = globalRoot.window;
        var document = globalRoot.document;

        function AutoScaleAxis(axisUnit, data, chartRect, options) {
          // Usually we calculate highLow based on the data but this can be overriden by a highLow object in the options
          var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
          this.bounds = Chartist.getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
          this.range = {
            min: this.bounds.min,
            max: this.bounds.max
          };
          Chartist.AutoScaleAxis["super"].constructor.call(this, axisUnit, chartRect, this.bounds.values, options);
        }

        function projectValue(value) {
          return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.bounds.min) / this.bounds.range;
        }

        Chartist.AutoScaleAxis = Chartist.Axis.extend({
          constructor: AutoScaleAxis,
          projectValue: projectValue
        });
      })(this || global, Chartist);

      ;
      /**
      * The fixed scale axis uses standard linear projection of values along an axis. It makes use of a divisor option to divide the range provided from the minimum and maximum value or the options high and low that will override the computed minimum and maximum.
      * **Options**
      * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
      * ```javascript
      * var options = {
      *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
      *   high: 100,
      *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
      *   low: 0,
      *   // If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points. The default divisor is 1.
      *   divisor: 4,
      *   // If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.
      *   ticks: [1, 10, 20, 30]
      * };
      * ```
      *
      * @module Chartist.FixedScaleAxis
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        var window = globalRoot.window;
        var document = globalRoot.document;

        function FixedScaleAxis(axisUnit, data, chartRect, options) {
          var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
          this.divisor = options.divisor || 1;
          this.ticks = options.ticks || Chartist.times(this.divisor).map(function (value, index) {
            return highLow.low + (highLow.high - highLow.low) / this.divisor * index;
          }.bind(this));
          this.ticks.sort(function (a, b) {
            return a - b;
          });
          this.range = {
            min: highLow.low,
            max: highLow.high
          };
          Chartist.FixedScaleAxis["super"].constructor.call(this, axisUnit, chartRect, this.ticks, options);
          this.stepLength = this.axisLength / this.divisor;
        }

        function projectValue(value) {
          return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.range.min) / (this.range.max - this.range.min);
        }

        Chartist.FixedScaleAxis = Chartist.Axis.extend({
          constructor: FixedScaleAxis,
          projectValue: projectValue
        });
      })(this || global, Chartist);

      ;
      /**
      * The step axis for step based charts like bar chart or step based line charts. It uses a fixed amount of ticks that will be equally distributed across the whole axis length. The projection is done using the index of the data value rather than the value itself and therefore it's only useful for distribution purpose.
      * **Options**
      * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
      * ```javascript
      * var options = {
      *   // Ticks to be used to distribute across the axis length. As this axis type relies on the index of the value rather than the value, arbitrary data that can be converted to a string can be used as ticks.
      *   ticks: ['One', 'Two', 'Three'],
      *   // If set to true the full width will be used to distribute the values where the last value will be at the maximum of the axis length. If false the spaces between the ticks will be evenly distributed instead.
      *   stretch: true
      * };
      * ```
      *
      * @module Chartist.StepAxis
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        var window = globalRoot.window;
        var document = globalRoot.document;

        function StepAxis(axisUnit, data, chartRect, options) {
          Chartist.StepAxis["super"].constructor.call(this, axisUnit, chartRect, options.ticks, options);
          var calc = Math.max(1, options.ticks.length - (options.stretch ? 1 : 0));
          this.stepLength = this.axisLength / calc;
        }

        function projectValue(value, index) {
          return this.stepLength * index;
        }

        Chartist.StepAxis = Chartist.Axis.extend({
          constructor: StepAxis,
          projectValue: projectValue
        });
      })(this || global, Chartist);

      ;
      /**
      * The Chartist line chart can be used to draw Line or Scatter charts. If used in the browser you can access the global `Chartist` namespace where you find the `Line` function as a main entry point.
      *
      * For examples on how to use the line chart please check the examples of the `Chartist.Line` method.
      *
      * @module Chartist.Line
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        var window = globalRoot.window;
        var document = globalRoot.document;
        /**
         * Default options in line charts. Expand the code view to see a detailed list of options with comments.
         *
         * @memberof Chartist.Line
         */

        var defaultOptions = {
          // Options for X-Axis
          axisX: {
            // The offset of the labels to the chart area
            offset: 30,
            // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
            position: 'end',
            // Allows you to correct label positioning on this axis by positive or negative x and y offset.
            labelOffset: {
              x: 0,
              y: 0
            },
            // If labels should be shown or not
            showLabel: true,
            // If the axis grid should be drawn or not
            showGrid: true,
            // Interpolation function that allows you to intercept the value from the axis label
            labelInterpolationFnc: Chartist.noop,
            // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
            type: undefined
          },
          // Options for Y-Axis
          axisY: {
            // The offset of the labels to the chart area
            offset: 40,
            // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
            position: 'start',
            // Allows you to correct label positioning on this axis by positive or negative x and y offset.
            labelOffset: {
              x: 0,
              y: 0
            },
            // If labels should be shown or not
            showLabel: true,
            // If the axis grid should be drawn or not
            showGrid: true,
            // Interpolation function that allows you to intercept the value from the axis label
            labelInterpolationFnc: Chartist.noop,
            // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
            type: undefined,
            // This value specifies the minimum height in pixel of the scale steps
            scaleMinSpace: 20,
            // Use only integer values (whole numbers) for the scale steps
            onlyInteger: false
          },
          // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
          width: undefined,
          // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
          height: undefined,
          // If the line should be drawn or not
          showLine: true,
          // If dots should be drawn or not
          showPoint: true,
          // If the line chart should draw an area
          showArea: false,
          // The base for the area chart that will be used to close the area shape (is normally 0)
          areaBase: 0,
          // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
          lineSmooth: true,
          // If the line chart should add a background fill to the .ct-grids group.
          showGridBackground: false,
          // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
          low: undefined,
          // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
          high: undefined,
          // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
          chartPadding: {
            top: 15,
            right: 15,
            bottom: 5,
            left: 10
          },
          // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
          fullWidth: false,
          // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
          reverseData: false,
          // Override the class names that get used to generate the SVG structure of the chart
          classNames: {
            chart: 'ct-chart-line',
            label: 'ct-label',
            labelGroup: 'ct-labels',
            series: 'ct-series',
            line: 'ct-line',
            point: 'ct-point',
            area: 'ct-area',
            grid: 'ct-grid',
            gridGroup: 'ct-grids',
            gridBackground: 'ct-grid-background',
            vertical: 'ct-vertical',
            horizontal: 'ct-horizontal',
            start: 'ct-start',
            end: 'ct-end'
          }
        };
        /**
         * Creates a new chart
         *
         */

        function createChart(options) {
          var data = Chartist.normalizeData(this.data, options.reverseData, true); // Create new svg object

          this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart); // Create groups for labels, grid and series

          var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
          var seriesGroup = this.svg.elem('g');
          var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);
          var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
          var axisX, axisY;

          if (options.axisX.type === undefined) {
            axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
              ticks: data.normalized.labels,
              stretch: options.fullWidth
            }));
          } else {
            axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
          }

          if (options.axisY.type === undefined) {
            axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
              high: Chartist.isNumeric(options.high) ? options.high : options.axisY.high,
              low: Chartist.isNumeric(options.low) ? options.low : options.axisY.low
            }));
          } else {
            axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
          }

          axisX.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
          axisY.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

          if (options.showGridBackground) {
            Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
          } // Draw the series


          data.raw.series.forEach(function (series, seriesIndex) {
            var seriesElement = seriesGroup.elem('g'); // Write attributes to series group element. If series name or meta is undefined the attributes will not be written

            seriesElement.attr({
              'ct:series-name': series.name,
              'ct:meta': Chartist.serialize(series.meta)
            }); // Use series class from series data or if not set generate one

            seriesElement.addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex)].join(' '));
            var pathCoordinates = [],
                pathData = [];
            data.normalized.series[seriesIndex].forEach(function (value, valueIndex) {
              var p = {
                x: chartRect.x1 + axisX.projectValue(value, valueIndex, data.normalized.series[seriesIndex]),
                y: chartRect.y1 - axisY.projectValue(value, valueIndex, data.normalized.series[seriesIndex])
              };
              pathCoordinates.push(p.x, p.y);
              pathData.push({
                value: value,
                valueIndex: valueIndex,
                meta: Chartist.getMetaData(series, valueIndex)
              });
            }.bind(this));
            var seriesOptions = {
              lineSmooth: Chartist.getSeriesOption(series, options, 'lineSmooth'),
              showPoint: Chartist.getSeriesOption(series, options, 'showPoint'),
              showLine: Chartist.getSeriesOption(series, options, 'showLine'),
              showArea: Chartist.getSeriesOption(series, options, 'showArea'),
              areaBase: Chartist.getSeriesOption(series, options, 'areaBase')
            };
            var smoothing = typeof seriesOptions.lineSmooth === 'function' ? seriesOptions.lineSmooth : seriesOptions.lineSmooth ? Chartist.Interpolation.monotoneCubic() : Chartist.Interpolation.none(); // Interpolating path where pathData will be used to annotate each path element so we can trace back the original
            // index, value and meta data

            var path = smoothing(pathCoordinates, pathData); // If we should show points we need to create them now to avoid secondary loop
            // Points are drawn from the pathElements returned by the interpolation function
            // Small offset for Firefox to render squares correctly

            if (seriesOptions.showPoint) {
              path.pathElements.forEach(function (pathElement) {
                var point = seriesElement.elem('line', {
                  x1: pathElement.x,
                  y1: pathElement.y,
                  x2: pathElement.x + 0.01,
                  y2: pathElement.y
                }, options.classNames.point).attr({
                  'ct:value': [pathElement.data.value.x, pathElement.data.value.y].filter(Chartist.isNumeric).join(','),
                  'ct:meta': Chartist.serialize(pathElement.data.meta)
                });
                this.eventEmitter.emit('draw', {
                  type: 'point',
                  value: pathElement.data.value,
                  index: pathElement.data.valueIndex,
                  meta: pathElement.data.meta,
                  series: series,
                  seriesIndex: seriesIndex,
                  axisX: axisX,
                  axisY: axisY,
                  group: seriesElement,
                  element: point,
                  x: pathElement.x,
                  y: pathElement.y
                });
              }.bind(this));
            }

            if (seriesOptions.showLine) {
              var line = seriesElement.elem('path', {
                d: path.stringify()
              }, options.classNames.line, true);
              this.eventEmitter.emit('draw', {
                type: 'line',
                values: data.normalized.series[seriesIndex],
                path: path.clone(),
                chartRect: chartRect,
                index: seriesIndex,
                series: series,
                seriesIndex: seriesIndex,
                seriesMeta: series.meta,
                axisX: axisX,
                axisY: axisY,
                group: seriesElement,
                element: line
              });
            } // Area currently only works with axes that support a range!


            if (seriesOptions.showArea && axisY.range) {
              // If areaBase is outside the chart area (< min or > max) we need to set it respectively so that
              // the area is not drawn outside the chart area.
              var areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min); // We project the areaBase value into screen coordinates

              var areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase); // In order to form the area we'll first split the path by move commands so we can chunk it up into segments

              path.splitByCommand('M').filter(function onlySolidSegments(pathSegment) {
                // We filter only "solid" segments that contain more than one point. Otherwise there's no need for an area
                return pathSegment.pathElements.length > 1;
              }).map(function convertToArea(solidPathSegments) {
                // Receiving the filtered solid path segments we can now convert those segments into fill areas
                var firstElement = solidPathSegments.pathElements[0];
                var lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1]; // Cloning the solid path segment with closing option and removing the first move command from the clone
                // We then insert a new move that should start at the area base and draw a straight line up or down
                // at the end of the path we add an additional straight line to the projected area base value
                // As the closing option is set our path will be automatically closed

                return solidPathSegments.clone(true).position(0).remove(1).move(firstElement.x, areaBaseProjected).line(firstElement.x, firstElement.y).position(solidPathSegments.pathElements.length + 1).line(lastElement.x, areaBaseProjected);
              }).forEach(function createArea(areaPath) {
                // For each of our newly created area paths, we'll now create path elements by stringifying our path objects
                // and adding the created DOM elements to the correct series group
                var area = seriesElement.elem('path', {
                  d: areaPath.stringify()
                }, options.classNames.area, true); // Emit an event for each area that was drawn

                this.eventEmitter.emit('draw', {
                  type: 'area',
                  values: data.normalized.series[seriesIndex],
                  path: areaPath.clone(),
                  series: series,
                  seriesIndex: seriesIndex,
                  axisX: axisX,
                  axisY: axisY,
                  chartRect: chartRect,
                  index: seriesIndex,
                  group: seriesElement,
                  element: area
                });
              }.bind(this));
            }
          }.bind(this));
          this.eventEmitter.emit('created', {
            bounds: axisY.bounds,
            chartRect: chartRect,
            axisX: axisX,
            axisY: axisY,
            svg: this.svg,
            options: options
          });
        }
        /**
         * This method creates a new line chart.
         *
         * @memberof Chartist.Line
         * @param {String|Node} query A selector query string or directly a DOM element
         * @param {Object} data The data object that needs to consist of a labels and a series array
         * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
         * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
         * @return {Object} An object which exposes the API for the created chart
         *
         * @example
         * // Create a simple line chart
         * var data = {
         *   // A labels array that can contain any sort of values
         *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
         *   // Our series array that contains series objects or in this case series data arrays
         *   series: [
         *     [5, 2, 4, 2, 0]
         *   ]
         * };
         *
         * // As options we currently only set a static size of 300x200 px
         * var options = {
         *   width: '300px',
         *   height: '200px'
         * };
         *
         * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
         * new Chartist.Line('.ct-chart', data, options);
         *
         * @example
         * // Use specific interpolation function with configuration from the Chartist.Interpolation module
         *
         * var chart = new Chartist.Line('.ct-chart', {
         *   labels: [1, 2, 3, 4, 5],
         *   series: [
         *     [1, 1, 8, 1, 7]
         *   ]
         * }, {
         *   lineSmooth: Chartist.Interpolation.cardinal({
         *     tension: 0.2
         *   })
         * });
         *
         * @example
         * // Create a line chart with responsive options
         *
         * var data = {
         *   // A labels array that can contain any sort of values
         *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
         *   // Our series array that contains series objects or in this case series data arrays
         *   series: [
         *     [5, 2, 4, 2, 0]
         *   ]
         * };
         *
         * // In addition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
         * var responsiveOptions = [
         *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
         *     showPoint: false,
         *     axisX: {
         *       labelInterpolationFnc: function(value) {
         *         // Will return Mon, Tue, Wed etc. on medium screens
         *         return value.slice(0, 3);
         *       }
         *     }
         *   }],
         *   ['screen and (max-width: 640px)', {
         *     showLine: false,
         *     axisX: {
         *       labelInterpolationFnc: function(value) {
         *         // Will return M, T, W etc. on small screens
         *         return value[0];
         *       }
         *     }
         *   }]
         * ];
         *
         * new Chartist.Line('.ct-chart', data, null, responsiveOptions);
         *
         */


        function Line(query, data, options, responsiveOptions) {
          Chartist.Line["super"].constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
        } // Creating line chart type in Chartist namespace


        Chartist.Line = Chartist.Base.extend({
          constructor: Line,
          createChart: createChart
        });
      })(this || global, Chartist);

      ;
      /**
      * The bar chart module of Chartist that can be used to draw unipolar or bipolar bar and grouped bar charts.
      *
      * @module Chartist.Bar
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        var window = globalRoot.window;
        var document = globalRoot.document;
        /**
         * Default options in bar charts. Expand the code view to see a detailed list of options with comments.
         *
         * @memberof Chartist.Bar
         */

        var defaultOptions = {
          // Options for X-Axis
          axisX: {
            // The offset of the chart drawing area to the border of the container
            offset: 30,
            // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
            position: 'end',
            // Allows you to correct label positioning on this axis by positive or negative x and y offset.
            labelOffset: {
              x: 0,
              y: 0
            },
            // If labels should be shown or not
            showLabel: true,
            // If the axis grid should be drawn or not
            showGrid: true,
            // Interpolation function that allows you to intercept the value from the axis label
            labelInterpolationFnc: Chartist.noop,
            // This value specifies the minimum width in pixel of the scale steps
            scaleMinSpace: 30,
            // Use only integer values (whole numbers) for the scale steps
            onlyInteger: false
          },
          // Options for Y-Axis
          axisY: {
            // The offset of the chart drawing area to the border of the container
            offset: 40,
            // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
            position: 'start',
            // Allows you to correct label positioning on this axis by positive or negative x and y offset.
            labelOffset: {
              x: 0,
              y: 0
            },
            // If labels should be shown or not
            showLabel: true,
            // If the axis grid should be drawn or not
            showGrid: true,
            // Interpolation function that allows you to intercept the value from the axis label
            labelInterpolationFnc: Chartist.noop,
            // This value specifies the minimum height in pixel of the scale steps
            scaleMinSpace: 20,
            // Use only integer values (whole numbers) for the scale steps
            onlyInteger: false
          },
          // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
          width: undefined,
          // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
          height: undefined,
          // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
          high: undefined,
          // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
          low: undefined,
          // Unless low/high are explicitly set, bar chart will be centered at zero by default. Set referenceValue to null to auto scale.
          referenceValue: 0,
          // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
          chartPadding: {
            top: 15,
            right: 15,
            bottom: 5,
            left: 10
          },
          // Specify the distance in pixel of bars in a group
          seriesBarDistance: 15,
          // If set to true this property will cause the series bars to be stacked. Check the `stackMode` option for further stacking options.
          stackBars: false,
          // If set to 'overlap' this property will force the stacked bars to draw from the zero line.
          // If set to 'accumulate' this property will form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
          stackMode: 'accumulate',
          // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
          horizontalBars: false,
          // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
          distributeSeries: false,
          // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
          reverseData: false,
          // If the bar chart should add a background fill to the .ct-grids group.
          showGridBackground: false,
          // Override the class names that get used to generate the SVG structure of the chart
          classNames: {
            chart: 'ct-chart-bar',
            horizontalBars: 'ct-horizontal-bars',
            label: 'ct-label',
            labelGroup: 'ct-labels',
            series: 'ct-series',
            bar: 'ct-bar',
            grid: 'ct-grid',
            gridGroup: 'ct-grids',
            gridBackground: 'ct-grid-background',
            vertical: 'ct-vertical',
            horizontal: 'ct-horizontal',
            start: 'ct-start',
            end: 'ct-end'
          }
        };
        /**
         * Creates a new chart
         *
         */

        function createChart(options) {
          var data;
          var highLow;

          if (options.distributeSeries) {
            data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
            data.normalized.series = data.normalized.series.map(function (value) {
              return [value];
            });
          } else {
            data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
          } // Create new svg element


          this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart + (options.horizontalBars ? ' ' + options.classNames.horizontalBars : '')); // Drawing groups in correct order

          var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
          var seriesGroup = this.svg.elem('g');
          var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

          if (options.stackBars && data.normalized.series.length !== 0) {
            // If stacked bars we need to calculate the high low from stacked values from each series
            var serialSums = Chartist.serialMap(data.normalized.series, function serialSums() {
              return Array.prototype.slice.call(arguments).map(function (value) {
                return value;
              }).reduce(function (prev, curr) {
                return {
                  x: prev.x + (curr && curr.x) || 0,
                  y: prev.y + (curr && curr.y) || 0
                };
              }, {
                x: 0,
                y: 0
              });
            });
            highLow = Chartist.getHighLow([serialSums], options, options.horizontalBars ? 'x' : 'y');
          } else {
            highLow = Chartist.getHighLow(data.normalized.series, options, options.horizontalBars ? 'x' : 'y');
          } // Overrides of high / low from settings


          highLow.high = +options.high || (options.high === 0 ? 0 : highLow.high);
          highLow.low = +options.low || (options.low === 0 ? 0 : highLow.low);
          var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
          var valueAxis, labelAxisTicks, labelAxis, axisX, axisY; // We need to set step count based on some options combinations

          if (options.distributeSeries && options.stackBars) {
            // If distributed series are enabled and bars need to be stacked, we'll only have one bar and therefore should
            // use only the first label for the step axis
            labelAxisTicks = data.normalized.labels.slice(0, 1);
          } else {
            // If distributed series are enabled but stacked bars aren't, we should use the series labels
            // If we are drawing a regular bar chart with two dimensional series data, we just use the labels array
            // as the bars are normalized
            labelAxisTicks = data.normalized.labels;
          } // Set labelAxis and valueAxis based on the horizontalBars setting. This setting will flip the axes if necessary.


          if (options.horizontalBars) {
            if (options.axisX.type === undefined) {
              valueAxis = axisX = new Chartist.AutoScaleAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
                highLow: highLow,
                referenceValue: 0
              }));
            } else {
              valueAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
                highLow: highLow,
                referenceValue: 0
              }));
            }

            if (options.axisY.type === undefined) {
              labelAxis = axisY = new Chartist.StepAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, {
                ticks: labelAxisTicks
              });
            } else {
              labelAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
            }
          } else {
            if (options.axisX.type === undefined) {
              labelAxis = axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, {
                ticks: labelAxisTicks
              });
            } else {
              labelAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
            }

            if (options.axisY.type === undefined) {
              valueAxis = axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
                highLow: highLow,
                referenceValue: 0
              }));
            } else {
              valueAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
                highLow: highLow,
                referenceValue: 0
              }));
            }
          } // Projected 0 point


          var zeroPoint = options.horizontalBars ? chartRect.x1 + valueAxis.projectValue(0) : chartRect.y1 - valueAxis.projectValue(0); // Used to track the screen coordinates of stacked bars

          var stackedBarValues = [];
          labelAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
          valueAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

          if (options.showGridBackground) {
            Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
          } // Draw the series


          data.raw.series.forEach(function (series, seriesIndex) {
            // Calculating bi-polar value of index for seriesOffset. For i = 0..4 biPol will be -1.5, -0.5, 0.5, 1.5 etc.
            var biPol = seriesIndex - (data.raw.series.length - 1) / 2; // Half of the period width between vertical grid lines used to position bars

            var periodHalfLength; // Current series SVG element

            var seriesElement; // We need to set periodHalfLength based on some options combinations

            if (options.distributeSeries && !options.stackBars) {
              // If distributed series are enabled but stacked bars aren't, we need to use the length of the normaizedData array
              // which is the series count and divide by 2
              periodHalfLength = labelAxis.axisLength / data.normalized.series.length / 2;
            } else if (options.distributeSeries && options.stackBars) {
              // If distributed series and stacked bars are enabled we'll only get one bar so we should just divide the axis
              // length by 2
              periodHalfLength = labelAxis.axisLength / 2;
            } else {
              // On regular bar charts we should just use the series length
              periodHalfLength = labelAxis.axisLength / data.normalized.series[seriesIndex].length / 2;
            } // Adding the series group to the series element


            seriesElement = seriesGroup.elem('g'); // Write attributes to series group element. If series name or meta is undefined the attributes will not be written

            seriesElement.attr({
              'ct:series-name': series.name,
              'ct:meta': Chartist.serialize(series.meta)
            }); // Use series class from series data or if not set generate one

            seriesElement.addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex)].join(' '));
            data.normalized.series[seriesIndex].forEach(function (value, valueIndex) {
              var projected, bar, previousStack, labelAxisValueIndex; // We need to set labelAxisValueIndex based on some options combinations

              if (options.distributeSeries && !options.stackBars) {
                // If distributed series are enabled but stacked bars aren't, we can use the seriesIndex for later projection
                // on the step axis for label positioning
                labelAxisValueIndex = seriesIndex;
              } else if (options.distributeSeries && options.stackBars) {
                // If distributed series and stacked bars are enabled, we will only get one bar and therefore always use
                // 0 for projection on the label step axis
                labelAxisValueIndex = 0;
              } else {
                // On regular bar charts we just use the value index to project on the label step axis
                labelAxisValueIndex = valueIndex;
              } // We need to transform coordinates differently based on the chart layout


              if (options.horizontalBars) {
                projected = {
                  x: chartRect.x1 + valueAxis.projectValue(value && value.x ? value.x : 0, valueIndex, data.normalized.series[seriesIndex]),
                  y: chartRect.y1 - labelAxis.projectValue(value && value.y ? value.y : 0, labelAxisValueIndex, data.normalized.series[seriesIndex])
                };
              } else {
                projected = {
                  x: chartRect.x1 + labelAxis.projectValue(value && value.x ? value.x : 0, labelAxisValueIndex, data.normalized.series[seriesIndex]),
                  y: chartRect.y1 - valueAxis.projectValue(value && value.y ? value.y : 0, valueIndex, data.normalized.series[seriesIndex])
                };
              } // If the label axis is a step based axis we will offset the bar into the middle of between two steps using
              // the periodHalfLength value. Also we do arrange the different series so that they align up to each other using
              // the seriesBarDistance. If we don't have a step axis, the bar positions can be chosen freely so we should not
              // add any automated positioning.


              if (labelAxis instanceof Chartist.StepAxis) {
                // Offset to center bar between grid lines, but only if the step axis is not stretched
                if (!labelAxis.options.stretch) {
                  projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
                } // Using bi-polar offset for multiple series if no stacked bars or series distribution is used


                projected[labelAxis.units.pos] += options.stackBars || options.distributeSeries ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);
              } // Enter value in stacked bar values used to remember previous screen value for stacking up bars


              previousStack = stackedBarValues[valueIndex] || zeroPoint;
              stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]); // Skip if value is undefined

              if (value === undefined) {
                return;
              }

              var positions = {};
              positions[labelAxis.units.pos + '1'] = projected[labelAxis.units.pos];
              positions[labelAxis.units.pos + '2'] = projected[labelAxis.units.pos];

              if (options.stackBars && (options.stackMode === 'accumulate' || !options.stackMode)) {
                // Stack mode: accumulate (default)
                // If bars are stacked we use the stackedBarValues reference and otherwise base all bars off the zero line
                // We want backwards compatibility, so the expected fallback without the 'stackMode' option
                // to be the original behaviour (accumulate)
                positions[labelAxis.counterUnits.pos + '1'] = previousStack;
                positions[labelAxis.counterUnits.pos + '2'] = stackedBarValues[valueIndex];
              } else {
                // Draw from the zero line normally
                // This is also the same code for Stack mode: overlap
                positions[labelAxis.counterUnits.pos + '1'] = zeroPoint;
                positions[labelAxis.counterUnits.pos + '2'] = projected[labelAxis.counterUnits.pos];
              } // Limit x and y so that they are within the chart rect


              positions.x1 = Math.min(Math.max(positions.x1, chartRect.x1), chartRect.x2);
              positions.x2 = Math.min(Math.max(positions.x2, chartRect.x1), chartRect.x2);
              positions.y1 = Math.min(Math.max(positions.y1, chartRect.y2), chartRect.y1);
              positions.y2 = Math.min(Math.max(positions.y2, chartRect.y2), chartRect.y1);
              var metaData = Chartist.getMetaData(series, valueIndex); // Create bar element

              bar = seriesElement.elem('line', positions, options.classNames.bar).attr({
                'ct:value': [value.x, value.y].filter(Chartist.isNumeric).join(','),
                'ct:meta': Chartist.serialize(metaData)
              });
              this.eventEmitter.emit('draw', Chartist.extend({
                type: 'bar',
                value: value,
                index: valueIndex,
                meta: metaData,
                series: series,
                seriesIndex: seriesIndex,
                axisX: axisX,
                axisY: axisY,
                chartRect: chartRect,
                group: seriesElement,
                element: bar
              }, positions));
            }.bind(this));
          }.bind(this));
          this.eventEmitter.emit('created', {
            bounds: valueAxis.bounds,
            chartRect: chartRect,
            axisX: axisX,
            axisY: axisY,
            svg: this.svg,
            options: options
          });
        }
        /**
         * This method creates a new bar chart and returns API object that you can use for later changes.
         *
         * @memberof Chartist.Bar
         * @param {String|Node} query A selector query string or directly a DOM element
         * @param {Object} data The data object that needs to consist of a labels and a series array
         * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
         * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
         * @return {Object} An object which exposes the API for the created chart
         *
         * @example
         * // Create a simple bar chart
         * var data = {
         *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
         *   series: [
         *     [5, 2, 4, 2, 0]
         *   ]
         * };
         *
         * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
         * new Chartist.Bar('.ct-chart', data);
         *
         * @example
         * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
         * new Chartist.Bar('.ct-chart', {
         *   labels: [1, 2, 3, 4, 5, 6, 7],
         *   series: [
         *     [1, 3, 2, -5, -3, 1, -6],
         *     [-5, -2, -4, -1, 2, -3, 1]
         *   ]
         * }, {
         *   seriesBarDistance: 12,
         *   low: -10,
         *   high: 10
         * });
         *
         */


        function Bar(query, data, options, responsiveOptions) {
          Chartist.Bar["super"].constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
        } // Creating bar chart type in Chartist namespace


        Chartist.Bar = Chartist.Base.extend({
          constructor: Bar,
          createChart: createChart
        });
      })(this || global, Chartist);

      ;
      /**
      * The pie chart module of Chartist that can be used to draw pie, donut or gauge charts
      *
      * @module Chartist.Pie
      */

      /* global Chartist */

      (function (globalRoot, Chartist) {
        'use strict';

        var window = globalRoot.window;
        var document = globalRoot.document;
        /**
         * Default options in line charts. Expand the code view to see a detailed list of options with comments.
         *
         * @memberof Chartist.Pie
         */

        var defaultOptions = {
          // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
          width: undefined,
          // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
          height: undefined,
          // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
          chartPadding: 5,
          // Override the class names that are used to generate the SVG structure of the chart
          classNames: {
            chartPie: 'ct-chart-pie',
            chartDonut: 'ct-chart-donut',
            series: 'ct-series',
            slicePie: 'ct-slice-pie',
            sliceDonut: 'ct-slice-donut',
            sliceDonutSolid: 'ct-slice-donut-solid',
            label: 'ct-label'
          },
          // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
          startAngle: 0,
          // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
          total: undefined,
          // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
          donut: false,
          // If specified the donut segments will be drawn as shapes instead of strokes.
          donutSolid: false,
          // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
          // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
          donutWidth: 60,
          // If a label should be shown or not
          showLabel: true,
          // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
          labelOffset: 0,
          // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
          labelPosition: 'inside',
          // An interpolation function for the label value
          labelInterpolationFnc: Chartist.noop,
          // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
          labelDirection: 'neutral',
          // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
          reverseData: false,
          // If true empty values will be ignored to avoid drawing unncessary slices and labels
          ignoreEmptyValues: false
        };
        /**
         * Determines SVG anchor position based on direction and center parameter
         *
         * @param center
         * @param label
         * @param direction
         * @return {string}
         */

        function determineAnchorPosition(center, label, direction) {
          var toTheRight = label.x > center.x;

          if (toTheRight && direction === 'explode' || !toTheRight && direction === 'implode') {
            return 'start';
          } else if (toTheRight && direction === 'implode' || !toTheRight && direction === 'explode') {
            return 'end';
          } else {
            return 'middle';
          }
        }
        /**
         * Creates the pie chart
         *
         * @param options
         */


        function createChart(options) {
          var data = Chartist.normalizeData(this.data);
          var seriesGroups = [],
              labelsGroup,
              chartRect,
              radius,
              labelRadius,
              totalDataSum,
              startAngle = options.startAngle; // Create SVG.js draw

          this.svg = Chartist.createSvg(this.container, options.width, options.height, options.donut ? options.classNames.chartDonut : options.classNames.chartPie); // Calculate charting rect

          chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding); // Get biggest circle radius possible within chartRect

          radius = Math.min(chartRect.width() / 2, chartRect.height() / 2); // Calculate total of all series to get reference value or use total reference from optional options

          totalDataSum = options.total || data.normalized.series.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
          }, 0);
          var donutWidth = Chartist.quantity(options.donutWidth);

          if (donutWidth.unit === '%') {
            donutWidth.value *= radius / 100;
          } // If this is a donut chart we need to adjust our radius to enable strokes to be drawn inside
          // Unfortunately this is not possible with the current SVG Spec
          // See this proposal for more details: http://lists.w3.org/Archives/Public/www-svg/2003Oct/0000.html


          radius -= options.donut && !options.donutSolid ? donutWidth.value / 2 : 0; // If labelPosition is set to `outside` or a donut chart is drawn then the label position is at the radius,
          // if regular pie chart it's half of the radius

          if (options.labelPosition === 'outside' || options.donut && !options.donutSolid) {
            labelRadius = radius;
          } else if (options.labelPosition === 'center') {
            // If labelPosition is center we start with 0 and will later wait for the labelOffset
            labelRadius = 0;
          } else if (options.donutSolid) {
            labelRadius = radius - donutWidth.value / 2;
          } else {
            // Default option is 'inside' where we use half the radius so the label will be placed in the center of the pie
            // slice
            labelRadius = radius / 2;
          } // Add the offset to the labelRadius where a negative offset means closed to the center of the chart


          labelRadius += options.labelOffset; // Calculate end angle based on total sum and current data value and offset with padding

          var center = {
            x: chartRect.x1 + chartRect.width() / 2,
            y: chartRect.y2 + chartRect.height() / 2
          }; // Check if there is only one non-zero value in the series array.

          var hasSingleValInSeries = data.raw.series.filter(function (val) {
            return val.hasOwnProperty('value') ? val.value !== 0 : val !== 0;
          }).length === 1; // Creating the series groups

          data.raw.series.forEach(function (series, index) {
            seriesGroups[index] = this.svg.elem('g', null, null);
          }.bind(this)); //if we need to show labels we create the label group now

          if (options.showLabel) {
            labelsGroup = this.svg.elem('g', null, null);
          } // Draw the series
          // initialize series groups


          data.raw.series.forEach(function (series, index) {
            // If current value is zero and we are ignoring empty values then skip to next value
            if (data.normalized.series[index] === 0 && options.ignoreEmptyValues) return; // If the series is an object and contains a name or meta data we add a custom attribute

            seriesGroups[index].attr({
              'ct:series-name': series.name
            }); // Use series class from series data or if not set generate one

            seriesGroups[index].addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(index)].join(' ')); // If the whole dataset is 0 endAngle should be zero. Can't divide by 0.

            var endAngle = totalDataSum > 0 ? startAngle + data.normalized.series[index] / totalDataSum * 360 : 0; // Use slight offset so there are no transparent hairline issues

            var overlappigStartAngle = Math.max(0, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2)); // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
            // with Z and use 359.99 degrees

            if (endAngle - overlappigStartAngle >= 359.99) {
              endAngle = overlappigStartAngle + 359.99;
            }

            var start = Chartist.polarToCartesian(center.x, center.y, radius, overlappigStartAngle),
                end = Chartist.polarToCartesian(center.x, center.y, radius, endAngle);
            var innerStart, innerEnd, donutSolidRadius; // Create a new path element for the pie chart. If this isn't a donut chart we should close the path for a correct stroke

            var path = new Chartist.Svg.Path(!options.donut || options.donutSolid).move(end.x, end.y).arc(radius, radius, 0, endAngle - startAngle > 180, 0, start.x, start.y); // If regular pie chart (no donut) we add a line to the center of the circle for completing the pie

            if (!options.donut) {
              path.line(center.x, center.y);
            } else if (options.donutSolid) {
              donutSolidRadius = radius - donutWidth.value;
              innerStart = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));
              innerEnd = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, endAngle);
              path.line(innerStart.x, innerStart.y);
              path.arc(donutSolidRadius, donutSolidRadius, 0, endAngle - startAngle > 180, 1, innerEnd.x, innerEnd.y);
            } // Create the SVG path
            // If this is a donut chart we add the donut class, otherwise just a regular slice


            var pathClassName = options.classNames.slicePie;

            if (options.donut) {
              pathClassName = options.classNames.sliceDonut;

              if (options.donutSolid) {
                pathClassName = options.classNames.sliceDonutSolid;
              }
            }

            var pathElement = seriesGroups[index].elem('path', {
              d: path.stringify()
            }, pathClassName); // Adding the pie series value to the path

            pathElement.attr({
              'ct:value': data.normalized.series[index],
              'ct:meta': Chartist.serialize(series.meta)
            }); // If this is a donut, we add the stroke-width as style attribute

            if (options.donut && !options.donutSolid) {
              pathElement._node.style.strokeWidth = donutWidth.value + 'px';
            } // Fire off draw event


            this.eventEmitter.emit('draw', {
              type: 'slice',
              value: data.normalized.series[index],
              totalDataSum: totalDataSum,
              index: index,
              meta: series.meta,
              series: series,
              group: seriesGroups[index],
              element: pathElement,
              path: path.clone(),
              center: center,
              radius: radius,
              startAngle: startAngle,
              endAngle: endAngle
            }); // If we need to show labels we need to add the label for this slice now

            if (options.showLabel) {
              var labelPosition;

              if (data.raw.series.length === 1) {
                // If we have only 1 series, we can position the label in the center of the pie
                labelPosition = {
                  x: center.x,
                  y: center.y
                };
              } else {
                // Position at the labelRadius distance from center and between start and end angle
                labelPosition = Chartist.polarToCartesian(center.x, center.y, labelRadius, startAngle + (endAngle - startAngle) / 2);
              }

              var rawValue;

              if (data.normalized.labels && !Chartist.isFalseyButZero(data.normalized.labels[index])) {
                rawValue = data.normalized.labels[index];
              } else {
                rawValue = data.normalized.series[index];
              }

              var interpolatedValue = options.labelInterpolationFnc(rawValue, index);

              if (interpolatedValue || interpolatedValue === 0) {
                var labelElement = labelsGroup.elem('text', {
                  dx: labelPosition.x,
                  dy: labelPosition.y,
                  'text-anchor': determineAnchorPosition(center, labelPosition, options.labelDirection)
                }, options.classNames.label).text('' + interpolatedValue); // Fire off draw event

                this.eventEmitter.emit('draw', {
                  type: 'label',
                  index: index,
                  group: labelsGroup,
                  element: labelElement,
                  text: '' + interpolatedValue,
                  x: labelPosition.x,
                  y: labelPosition.y
                });
              }
            } // Set next startAngle to current endAngle.
            // (except for last slice)


            startAngle = endAngle;
          }.bind(this));
          this.eventEmitter.emit('created', {
            chartRect: chartRect,
            svg: this.svg,
            options: options
          });
        }
        /**
         * This method creates a new pie chart and returns an object that can be used to redraw the chart.
         *
         * @memberof Chartist.Pie
         * @param {String|Node} query A selector query string or directly a DOM element
         * @param {Object} data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
         * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
         * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
         * @return {Object} An object with a version and an update method to manually redraw the chart
         *
         * @example
         * // Simple pie chart example with four series
         * new Chartist.Pie('.ct-chart', {
         *   series: [10, 2, 4, 3]
         * });
         *
         * @example
         * // Drawing a donut chart
         * new Chartist.Pie('.ct-chart', {
         *   series: [10, 2, 4, 3]
         * }, {
         *   donut: true
         * });
         *
         * @example
         * // Using donut, startAngle and total to draw a gauge chart
         * new Chartist.Pie('.ct-chart', {
         *   series: [20, 10, 30, 40]
         * }, {
         *   donut: true,
         *   donutWidth: 20,
         *   startAngle: 270,
         *   total: 200
         * });
         *
         * @example
         * // Drawing a pie chart with padding and labels that are outside the pie
         * new Chartist.Pie('.ct-chart', {
         *   series: [20, 10, 30, 40]
         * }, {
         *   chartPadding: 30,
         *   labelOffset: 50,
         *   labelDirection: 'explode'
         * });
         *
         * @example
         * // Overriding the class names for individual series as well as a name and meta data.
         * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
         * // to a ct:meta attribute.
         * new Chartist.Pie('.ct-chart', {
         *   series: [{
         *     value: 20,
         *     name: 'Series 1',
         *     className: 'my-custom-class-one',
         *     meta: 'Meta One'
         *   }, {
         *     value: 10,
         *     name: 'Series 2',
         *     className: 'my-custom-class-two',
         *     meta: 'Meta Two'
         *   }, {
         *     value: 70,
         *     name: 'Series 3',
         *     className: 'my-custom-class-three',
         *     meta: 'Meta Three'
         *   }]
         * });
         */


        function Pie(query, data, options, responsiveOptions) {
          Chartist.Pie["super"].constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
        } // Creating pie chart type in Chartist namespace


        Chartist.Pie = Chartist.Base.extend({
          constructor: Pie,
          createChart: createChart,
          determineAnchorPosition: determineAnchorPosition
        });
      })(this || global, Chartist);

      return Chartist;
    });
    /***/

  },

  /***/
  "./node_modules/ng-chartist/__ivy_ngcc__/fesm2015/ng-chartist.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/ng-chartist/__ivy_ngcc__/fesm2015/ng-chartist.js ***!
    \***********************************************************************/

  /*! exports provided: ChartistComponent, ChartistModule */

  /***/
  function node_modulesNgChartist__ivy_ngcc__Fesm2015NgChartistJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartistComponent", function () {
      return ChartistComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartistModule", function () {
      return ChartistModule;
    });
    /* harmony import */


    var chartist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! chartist */
    "./node_modules/chartist/dist/chartist.js");
    /* harmony import */


    var chartist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Angular component which renders Chartist chart.
     *
     * See Chartist {\@link https://gionkunz.github.io/chartist-js/api-documentation.html API documentation} and
     * {\@link https://gionkunz.github.io/chartist-js/examples.html examples} for more information.
     * ### Example
     * ```html
     * <x-chartist
     * [type]="type"
     * [data]="data"
     * [options]="options"
     * [responsiveOptions]="responsiveOptions"
     * [events]="events"
     * ></x-chartist>
     * ```
     */


    var ChartistComponent = /*#__PURE__*/function () {
      /**
       * @ignore
       * @param {?} elementRef
       */
      function ChartistComponent(elementRef) {
        _classCallCheck(this, ChartistComponent);

        this.elementRef = elementRef;
        /**
         * Event emitted after Chartist chart has been initialized.
         *
         * Event handler function will receive chart instance argument.
         */

        this.initialized = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * @ignore
       * @return {?}
       */


      _createClass(ChartistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.type && this.data) {
            this.renderChart();
          }
        }
        /**
         * @ignore
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.update(changes);
        }
        /**
         * @ignore
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.chart) {
            this.chart.detach();
            this.chart = null;
          }
        }
        /**
         * @ignore
         * @private
         * @return {?}
         */

      }, {
        key: "renderChart",
        value: function renderChart() {
          /** @type {?} */
          var nativeElement = this.elementRef.nativeElement;

          if (!(this.type in chartist__WEBPACK_IMPORTED_MODULE_0__)) {
            throw new Error("".concat(this.type, " is not a valid chart type"));
          }

          this.chart =
          /** @type {?} */
          chartist__WEBPACK_IMPORTED_MODULE_0__[this.type](nativeElement, this.data, this.options, this.responsiveOptions);

          if (this.events) {
            this.bindEvents();
          }

          this.initialized.emit(this.chart);
        }
        /**
         * @ignore
         * @private
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "update",
        value: function update(changes) {
          if (!this.type || !this.data) {
            return;
          }

          if (!this.chart || 'type' in changes) {
            this.renderChart();
          } else if (changes.data || changes.options) {
            /** @type {?} */
            this.chart.update(this.data, this.options);
          }
        }
        /**
         * @ignore
         * @private
         * @return {?}
         */

      }, {
        key: "bindEvents",
        value: function bindEvents() {
          for (var _i4 = 0, _Object$keys = Object.keys(this.events); _i4 < _Object$keys.length; _i4++) {
            var event = _Object$keys[_i4];
            this.chart.on(event, this.events[event]);
          }
        }
      }]);

      return ChartistComponent;
    }();

    ChartistComponent.ɵfac = function ChartistComponent_Factory(t) {
      return new (t || ChartistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    ChartistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChartistComponent,
      selectors: [["x-chartist"]],
      inputs: {
        data: "data",
        type: "type",
        options: "options",
        responsiveOptions: "responsiveOptions",
        events: "events"
      },
      outputs: {
        initialized: "initialized"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 0,
      vars: 0,
      template: function ChartistComponent_Template(rf, ctx) {},
      styles: ["[_nghost-%COMP%] {\n        display: block;\n      }"]
    });
    /** @nocollapse */

    ChartistComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    ChartistComponent.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      responsiveOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      events: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      initialized: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChartistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'x-chartist',
          template: '',
          styles: ["\n      :host {\n        display: block;\n      }\n    "]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, {
        initialized: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        responsiveOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ChartistModule = function ChartistModule() {
      _classCallCheck(this, ChartistModule);
    };

    ChartistModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ChartistModule
    });
    ChartistModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ChartistModule_Factory(t) {
        return new (t || ChartistModule)();
      },
      imports: [[]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChartistModule, {
        declarations: [ChartistComponent],
        exports: [ChartistComponent]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChartistModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [ChartistComponent],
          imports: [],
          exports: [ChartistComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-chartist.js.map

    /***/

  },

  /***/
  "./src/app/dashboard/dashboard-components/activity/activity-data.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/dashboard/dashboard-components/activity/activity-data.ts ***!
    \**************************************************************************/

  /*! exports provided: activities */

  /***/
  function srcAppDashboardDashboardComponentsActivityActivityDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "activities", function () {
      return activities;
    });

    var activities = [{
      name: 'Nirav joshi',
      image: 'assets/images/users/1.jpg',
      commentTime: '5 minute ago',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
      bottomImage: 'assets/images/big/img2.jpg',
      buttonColor: ''
    }, {
      name: 'Sunil joshi',
      image: 'assets/images/users/2.jpg',
      commentTime: '3 minute ago',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
      bottomImage: '',
      buttonColor: 'primary'
    }, {
      name: 'Vishal Bhatt',
      image: 'assets/images/users/3.jpg',
      commentTime: '1 minute ago',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
      bottomImage: 'assets/images/big/img1.jpg',
      buttonColor: ''
    }, {
      name: 'Dhiren Adesara',
      image: 'assets/images/users/4.jpg',
      commentTime: '7 minute ago',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
      bottomImage: '',
      buttonColor: 'warn'
    }];
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard-components/activity/activity.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/dashboard/dashboard-components/activity/activity.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ActivityComponent */

  /***/
  function srcAppDashboardDashboardComponentsActivityActivityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivityComponent", function () {
      return ActivityComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _activity_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./activity-data */
    "./src/app/dashboard/dashboard-components/activity/activity-data.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ActivityComponent_div_4_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var activity_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", activity_r1.bottomImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ActivityComponent_div_4_button_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Check Now");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var activity_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("color", activity_r1.buttonColor);
      }
    }

    function ActivityComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ActivityComponent_div_4_div_10_Template, 3, 1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ActivityComponent_div_4_button_11_Template, 2, 1, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var activity_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", activity_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", activity_r1.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", activity_r1.commentTime, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](activity_r1.comment);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", activity_r1.bottomImage !== "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", activity_r1.bottomImage === "");
      }
    }

    var ActivityComponent = /*#__PURE__*/function () {
      function ActivityComponent() {
        _classCallCheck(this, ActivityComponent);

        this.activityData = _activity_data__WEBPACK_IMPORTED_MODULE_1__["activities"];
      }

      _createClass(ActivityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ActivityComponent;
    }();

    ActivityComponent.ɵfac = function ActivityComponent_Factory(t) {
      return new (t || ActivityComponent)();
    };

    ActivityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ActivityComponent,
      selectors: [["app-activity"]],
      decls: 35,
      vars: 1,
      consts: [["label", "Activity"], ["class", "d-flex no-blcok", 4, "ngFor", "ngForOf"], ["label", "Profile"], [1, "basic-form"], ["fxLayout", "row wrap"], ["fxFlex.gt-sm", "100", "fxFlex", "100"], ["matInput", "", "placeholder", "Some text value"], ["matInput", "", "placeholder", "EmailId", "type", "email"], ["matInput", "", "placeholder", "Password", "type", "password"], ["placeholder", "Select"], ["value", "option"], ["matInput", "", "placeholder", "Textarea"], ["mat-raised-button", "", "color", "primary"], [1, "d-flex", "no-blcok"], [1, "m-r-20"], ["width", "50", "alt", "Image", 1, "img-circle", 3, "src"], [1, "p-b-20", "b-b", "m-b-30"], [1, "m-0"], [1, "text-muted"], ["fxLayout", "row wrap", 4, "ngIf"], ["mat-raised-button", "", 3, "color", 4, "ngIf"], ["fxFlex.gt-sm", "20", "fxFlex", "100"], ["alt", "Image", 1, "img-responsive", "rounded", 3, "src"], ["mat-raised-button", "", 3, "color"]],
      template: function ActivityComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ActivityComponent_div_4_Template, 12, 6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Form Basic Layouts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Option2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Option3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "textarea", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Update Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.activityData);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29tcG9uZW50cy9hY3Rpdml0eS9hY3Rpdml0eS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-activity',
          templateUrl: './activity.component.html',
          styleUrls: ['./activity.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard-components/contacts/contact-data.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/dashboard/dashboard-components/contacts/contact-data.ts ***!
    \*************************************************************************/

  /*! exports provided: contacts */

  /***/
  function srcAppDashboardDashboardComponentsContactsContactDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "contacts", function () {
      return contacts;
    });

    var contacts = [{
      image: 'assets/images/users/1.jpg',
      "class": 'online',
      name: 'Pavan kumar',
      email: 'info@wrappixel.com'
    }, {
      image: 'assets/images/users/2.jpg',
      "class": 'busy',
      name: 'Sonu Nigam',
      email: 'pamela1987@gmail.com'
    }, {
      image: 'assets/images/users/4.jpg',
      "class": 'offline',
      name: 'Pavan kumar',
      email: 'kat@gmail.com'
    }, {
      image: 'assets/images/users/5.jpg',
      "class": 'online',
      name: 'Andrew',
      email: 'info@wrappixel.com'
    }, {
      image: 'assets/images/users/6.jpg',
      "class": 'busy',
      name: 'Jonathan Joe',
      email: 'jj@gmail.com'
    }];
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard-components/contacts/contacts.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/dashboard/dashboard-components/contacts/contacts.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ContactsComponent */

  /***/
  function srcAppDashboardDashboardComponentsContactsContactsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
      return ContactsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _contact_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./contact-data */
    "./src/app/dashboard/dashboard-components/contacts/contact-data.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContactsComponent_a_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var contact_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", contact_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("profile-status pull-right ", contact_r1["class"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", contact_r1.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r1.email);
      }
    }

    var ContactsComponent = /*#__PURE__*/function () {
      function ContactsComponent() {
        _classCallCheck(this, ContactsComponent);

        this.contactsData = _contact_data__WEBPACK_IMPORTED_MODULE_1__["contacts"];
      }

      _createClass(ContactsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactsComponent;
    }();

    ContactsComponent.ɵfac = function ContactsComponent_Factory(t) {
      return new (t || ContactsComponent)();
    };

    ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactsComponent,
      selectors: [["app-contacts"]],
      decls: 11,
      vars: 1,
      consts: [[1, "p-20", "bg-info", "position-relative"], [1, "card-title", "text-white", "m-0"], [1, "card-subtitle", "text-white", "m-0", "op-5"], ["mat-mini-fab", "", "color", "accent", 1, "add-contact"], [1, "message-box", "contact-box", "p-20"], [1, "message-widget", "contact-widget"], ["href", "#", 4, "ngFor", "ngForOf"], ["href", "#"], [1, "user-img"], ["alt", "user", 1, "img-circle", 3, "src"], [1, "mail-contnet"], [1, "mail-desc"]],
      template: function ContactsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Checkout my contacts here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ContactsComponent_a_10_Template, 9, 6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactsData);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contacts',
          templateUrl: './contacts.component.html',
          styleUrls: ['./contacts.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard-components/sales-overview-grap/data.json":
  /*!******************************************************************************!*\
    !*** ./src/app/dashboard/dashboard-components/sales-overview-grap/data.json ***!
    \******************************************************************************/

  /*! exports provided: Bar, Pie, default */

  /***/
  function srcAppDashboardDashboardComponentsSalesOverviewGrapDataJson(module) {
    module.exports = JSON.parse("{\"Bar\":{\"labels\":[\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\"],\"series\":[[9,4,11,7,10,12],[3,2,9,5,8,10]]},\"Pie\":{\"series\":[20,10,30,40]}}");
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard-components/sales-overview-grap/sales-overview-grap.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/dashboard/dashboard-components/sales-overview-grap/sales-overview-grap.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: SalesOverviewGrapComponent */

  /***/
  function srcAppDashboardDashboardComponentsSalesOverviewGrapSalesOverviewGrapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalesOverviewGrapComponent", function () {
      return SalesOverviewGrapComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var ng_chartist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-chartist */
    "./node_modules/ng-chartist/__ivy_ngcc__/fesm2015/ng-chartist.js");

    var data = __webpack_require__(
    /*! ./data.json */
    "./src/app/dashboard/dashboard-components/sales-overview-grap/data.json");

    var SalesOverviewGrapComponent = /*#__PURE__*/function () {
      function SalesOverviewGrapComponent() {
        _classCallCheck(this, SalesOverviewGrapComponent);

        this.barChart1 = {
          type: 'Bar',
          data: data['Bar'],
          options: {
            seriesBarDistance: 15,
            high: 12,
            axisX: {
              showGrid: false,
              offset: 20
            },
            axisY: {
              showGrid: true,
              offset: 40
            },
            height: 360
          },
          responsiveOptions: [['screen and (min-width: 640px)', {
            axisX: {
              labelInterpolationFnc: function labelInterpolationFnc(value, index) {
                return index % 1 === 0 ? "".concat(value) : '';
              }
            }
          }]]
        };
      }

      _createClass(SalesOverviewGrapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SalesOverviewGrapComponent;
    }();

    SalesOverviewGrapComponent.ɵfac = function SalesOverviewGrapComponent_Factory(t) {
      return new (t || SalesOverviewGrapComponent)();
    };

    SalesOverviewGrapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SalesOverviewGrapComponent,
      selectors: [["app-sales-overview-grap"]],
      decls: 20,
      vars: 5,
      consts: [[1, "d-flex", "flex-wrap"], [1, "ml-auto"], [1, "list-inline"], [1, "text-success", "m-0"], [1, "mdi", "mdi-checkbox-blank-circle", "font-10", "m-r-10"], [1, "text-info", "m-0"], [1, "barchrt", 2, "height", "360px"], [1, "", 3, "data", "type", "options", "responsiveOptions", "events"]],
      template: function SalesOverviewGrapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yield Overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ample Vs Material");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ample");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Pixel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "x-chartist", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.barChart1.data)("type", ctx.barChart1.type)("options", ctx.barChart1.options)("responsiveOptions", ctx.barChart1.responsiveOptions)("events", ctx.barChart1.events);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], ng_chartist__WEBPACK_IMPORTED_MODULE_2__["ChartistComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29tcG9uZW50cy9zYWxlcy1vdmVydmlldy1ncmFwL3NhbGVzLW92ZXJ2aWV3LWdyYXAuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesOverviewGrapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sales-overview-grap',
          templateUrl: './sales-overview-grap.component.html',
          styleUrls: ['./sales-overview-grap.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard-components/sticker/sticker.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/dashboard/dashboard-components/sticker/sticker.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: StickerComponent */

  /***/
  function srcAppDashboardDashboardComponentsStickerStickerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StickerComponent", function () {
      return StickerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    var StickerComponent = /*#__PURE__*/function () {
      function StickerComponent() {
        _classCallCheck(this, StickerComponent);
      }

      _createClass(StickerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StickerComponent;
    }();

    StickerComponent.ɵfac = function StickerComponent_Factory(t) {
      return new (t || StickerComponent)();
    };

    StickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StickerComponent,
      selectors: [["app-sticker"]],
      decls: 28,
      vars: 0,
      consts: [[1, "oh", "text-center", "little-profile"], ["mat-card-image", "", "src", "assets/images/background/profile-bg.jpg", "alt", "Photo of a Shiba Inu"], [1, "pro-img"], ["src", "assets/images/users/profile2.png", "width", "100", "alt", "user", 1, "img-circle"], [1, "m-b-0"], [1, "m-t-0"], ["mat-raised-button", "", "color", "warn"], ["fxLayout", "row", "fxLayoutWrap", "wrap", 1, "m-t-30"], ["fxFlex.gt-sm", "33.33%", "fxFlex.gt-xs", "33.33%", "fxFlex", "100"], [1, "m-0", "font-light"]],
      template: function StickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Yawen Li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Web Designer & Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Follow");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "1099");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Articles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "23,469");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Followers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "6035");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Likes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29tcG9uZW50cy9zdGlja2VyL3N0aWNrZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sticker',
          templateUrl: './sticker.component.html',
          styleUrls: ['./sticker.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard-components/visiter-graph/data.json":
  /*!************************************************************************!*\
    !*** ./src/app/dashboard/dashboard-components/visiter-graph/data.json ***!
    \************************************************************************/

  /*! exports provided: Bar, Pie, default */

  /***/
  function srcAppDashboardDashboardComponentsVisiterGraphDataJson(module) {
    module.exports = JSON.parse("{\"Bar\":{\"labels\":[\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\"],\"series\":[[9,4,11,7,10,12],[3,2,9,5,8,10]]},\"Pie\":{\"series\":[20,10,30,40]}}");
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard-components/visiter-graph/visiter-graph.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/dashboard/dashboard-components/visiter-graph/visiter-graph.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: VisiterGraphComponent */

  /***/
  function srcAppDashboardDashboardComponentsVisiterGraphVisiterGraphComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisiterGraphComponent", function () {
      return VisiterGraphComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var ng_chartist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-chartist */
    "./node_modules/ng-chartist/__ivy_ngcc__/fesm2015/ng-chartist.js");

    var data = __webpack_require__(
    /*! ./data.json */
    "./src/app/dashboard/dashboard-components/visiter-graph/data.json");

    var VisiterGraphComponent = /*#__PURE__*/function () {
      function VisiterGraphComponent() {
        _classCallCheck(this, VisiterGraphComponent);

        this.donuteChart1 = {
          type: 'Pie',
          data: data['Pie'],
          options: {
            donut: true,
            height: 260,
            showLabel: false,
            donutWidth: 20
          }
        };
      }

      _createClass(VisiterGraphComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VisiterGraphComponent;
    }();

    VisiterGraphComponent.ɵfac = function VisiterGraphComponent_Factory(t) {
      return new (t || VisiterGraphComponent)();
    };

    VisiterGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VisiterGraphComponent,
      selectors: [["app-visiter-graph"]],
      decls: 23,
      vars: 5,
      consts: [[1, "piechart"], [1, "", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "list-inline", "text-center"], [1, "text-success", "m-0"], [1, "mdi", "mdi-checkbox-blank-circle", "font-10", "m-r-10"], [1, "text-info", "m-0"], [1, "text-purple", "m-0"]],
      template: function VisiterGraphComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Our Visitors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Different Devices Used to Visit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "x-chartist", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Desktop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h6", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Tablet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.donuteChart1.data)("type", ctx.donuteChart1.type)("options", ctx.donuteChart1.options)("responsiveOptions", ctx.donuteChart1.responsiveOptions)("events", ctx.donuteChart1.events);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], ng_chartist__WEBPACK_IMPORTED_MODULE_2__["ChartistComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQtY29tcG9uZW50cy92aXNpdGVyLWdyYXBoL3Zpc2l0ZXItZ3JhcGguY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisiterGraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-visiter-graph',
          templateUrl: './visiter-graph.component.html',
          styleUrls: ['./visiter-graph.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _dashboard_components_sales_overview_grap_sales_overview_grap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard-components/sales-overview-grap/sales-overview-grap.component */
    "./src/app/dashboard/dashboard-components/sales-overview-grap/sales-overview-grap.component.ts");
    /* harmony import */


    var _dashboard_components_visiter_graph_visiter_graph_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard-components/visiter-graph/visiter-graph.component */
    "./src/app/dashboard/dashboard-components/visiter-graph/visiter-graph.component.ts");
    /* harmony import */


    var _dashboard_components_sticker_sticker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard-components/sticker/sticker.component */
    "./src/app/dashboard/dashboard-components/sticker/sticker.component.ts");
    /* harmony import */


    var _dashboard_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard-components/contacts/contacts.component */
    "./src/app/dashboard/dashboard-components/contacts/contacts.component.ts");
    /* harmony import */


    var _dashboard_components_activity_activity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard-components/activity/activity.component */
    "./src/app/dashboard/dashboard-components/activity/activity.component.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)();
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 11,
      vars: 0,
      consts: [["fxLayout", "row wrap"], ["fxFlex.gt-lg", "66", "fxFlex.gt-md", "66", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "33", "fxFlex.gt-md", "33", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "25", "fxFlex.gt-md", "40", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "75", "fxFlex.gt-md", "60", "fxFlex.gt-xs", "100", "fxFlex", "100"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sales-overview-grap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-visiter-graph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-sticker");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-contacts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-activity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _dashboard_components_sales_overview_grap_sales_overview_grap_component__WEBPACK_IMPORTED_MODULE_2__["SalesOverviewGrapComponent"], _dashboard_components_visiter_graph_visiter_graph_component__WEBPACK_IMPORTED_MODULE_3__["VisiterGraphComponent"], _dashboard_components_sticker_sticker_component__WEBPACK_IMPORTED_MODULE_4__["StickerComponent"], _dashboard_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"], _dashboard_components_activity_activity_component__WEBPACK_IMPORTED_MODULE_6__["ActivityComponent"]],
      styles: [".position-relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.add-contact[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 17px;\n  top: 57px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxEZXZcXEludGVybmFsXFxDbGllbnRBcHAtMi9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7RUFDRyxXQUFBO0VBQ0EsU0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3NpdGlvbi1yZWxhdGl2ZSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYWRkLWNvbnRhY3Qge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgdG9wOiA1N3B4O1xyXG59IiwiLnBvc2l0aW9uLXJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWRkLWNvbnRhY3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxN3B4O1xuICB0b3A6IDU3cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../angular-material-module */
    "./src/app/angular-material-module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _dashboard_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard.routing */
    "./src/app/dashboard/dashboard.routing.ts");
    /* harmony import */


    var ng_chartist__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-chartist */
    "./node_modules/ng-chartist/__ivy_ngcc__/fesm2015/ng-chartist.js");
    /* harmony import */


    var _dashboard_components_sales_overview_grap_sales_overview_grap_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./dashboard-components/sales-overview-grap/sales-overview-grap.component */
    "./src/app/dashboard/dashboard-components/sales-overview-grap/sales-overview-grap.component.ts");
    /* harmony import */


    var _dashboard_components_visiter_graph_visiter_graph_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dashboard-components/visiter-graph/visiter-graph.component */
    "./src/app/dashboard/dashboard-components/visiter-graph/visiter-graph.component.ts");
    /* harmony import */


    var _dashboard_components_sticker_sticker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dashboard-components/sticker/sticker.component */
    "./src/app/dashboard/dashboard-components/sticker/sticker.component.ts");
    /* harmony import */


    var _dashboard_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./dashboard-components/contacts/contacts.component */
    "./src/app/dashboard/dashboard-components/contacts/contacts.component.ts");
    /* harmony import */


    var _dashboard_components_activity_activity_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./dashboard-components/activity/activity.component */
    "./src/app/dashboard/dashboard-components/activity/activity.component.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardModule_Factory(t) {
        return new (t || DashboardModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_7__["ChartistModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutes"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _dashboard_components_sales_overview_grap_sales_overview_grap_component__WEBPACK_IMPORTED_MODULE_8__["SalesOverviewGrapComponent"], _dashboard_components_visiter_graph_visiter_graph_component__WEBPACK_IMPORTED_MODULE_9__["VisiterGraphComponent"], _dashboard_components_sticker_sticker_component__WEBPACK_IMPORTED_MODULE_10__["StickerComponent"], _dashboard_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__["ContactsComponent"], _dashboard_components_activity_activity_component__WEBPACK_IMPORTED_MODULE_12__["ActivityComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_7__["ChartistModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_3__["AngularMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_7__["ChartistModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutes"])],
          // tslint:disable-next-line:max-line-length
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _dashboard_components_sales_overview_grap_sales_overview_grap_component__WEBPACK_IMPORTED_MODULE_8__["SalesOverviewGrapComponent"], _dashboard_components_visiter_graph_visiter_graph_component__WEBPACK_IMPORTED_MODULE_9__["VisiterGraphComponent"], _dashboard_components_sticker_sticker_component__WEBPACK_IMPORTED_MODULE_10__["StickerComponent"], _dashboard_components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__["ContactsComponent"], _dashboard_components_activity_activity_component__WEBPACK_IMPORTED_MODULE_12__["ActivityComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/dashboard/dashboard.routing.ts":
  /*!************************************************!*\
    !*** ./src/app/dashboard/dashboard.routing.ts ***!
    \************************************************/

  /*! exports provided: DashboardRoutes */

  /***/
  function srcAppDashboardDashboardRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function () {
      return DashboardRoutes;
    });
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");

    var DashboardRoutes = [{
      path: '',
      component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]
    }];
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map