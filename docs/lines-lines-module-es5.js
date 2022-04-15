function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lines-lines-module"], {
  /***/
  "./node_modules/angular-svg-icon/__ivy_ngcc__/fesm2015/angular-svg-icon.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/angular-svg-icon/__ivy_ngcc__/fesm2015/angular-svg-icon.js ***!
    \*********************************************************************************/

  /*! exports provided: AngularSvgIconModule, SERVER_URL, SVG_ICON_REGISTRY_PROVIDER, SVG_ICON_REGISTRY_PROVIDER_FACTORY, SvgHttpLoader, SvgIconComponent, SvgIconRegistryService, SvgLoader */

  /***/
  function node_modulesAngularSvgIcon__ivy_ngcc__Fesm2015AngularSvgIconJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularSvgIconModule", function () {
      return AngularSvgIconModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SERVER_URL", function () {
      return SERVER_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SVG_ICON_REGISTRY_PROVIDER", function () {
      return SVG_ICON_REGISTRY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SVG_ICON_REGISTRY_PROVIDER_FACTORY", function () {
      return SVG_ICON_REGISTRY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SvgHttpLoader", function () {
      return SvgHttpLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SvgIconComponent", function () {
      return SvgIconComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SvgIconRegistryService", function () {
      return SvgIconRegistryService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SvgLoader", function () {
      return SvgLoader;
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
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var _c0 = ["*"];

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var SvgLoader = function SvgLoader() {
      _classCallCheck(this, SvgLoader);
    };

    var SvgHttpLoader = /*#__PURE__*/function (_SvgLoader) {
      _inherits(SvgHttpLoader, _SvgLoader);

      var _super = _createSuper(SvgHttpLoader);

      function SvgHttpLoader(http) {
        var _this;

        _classCallCheck(this, SvgHttpLoader);

        _this = _super.call(this);
        _this.http = http;
        return _this;
      }

      _createClass(SvgHttpLoader, [{
        key: "getSvg",
        value: function getSvg(url) {
          return this.http.get(url, {
            responseType: 'text'
          });
        }
      }]);

      return SvgHttpLoader;
    }(SvgLoader);

    SvgHttpLoader.ɵfac = function SvgHttpLoader_Factory(t) {
      return new (t || SvgHttpLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    SvgHttpLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SvgHttpLoader,
      factory: SvgHttpLoader.ɵfac
    });

    SvgHttpLoader.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    SvgHttpLoader = __decorate([__metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], SvgHttpLoader);

    var __decorate$1 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$1 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var SERVER_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('SERVER_URL');

    var SvgIconRegistryService = /*#__PURE__*/function () {
      function SvgIconRegistryService(loader, platformId, serverUrl, _document) {
        _classCallCheck(this, SvgIconRegistryService);

        this.loader = loader;
        this.platformId = platformId;
        this.serverUrl = serverUrl;
        this._document = _document;
        this.iconsByUrl = new Map();
        this.iconsLoadingByUrl = new Map();
        this.document = this._document;
      }
      /** Add a SVG to the registry by passing a name and the SVG. */


      _createClass(SvgIconRegistryService, [{
        key: "addSvg",
        value: function addSvg(name, data) {
          if (!this.iconsByUrl.has(name)) {
            var div = this.document.createElement('DIV');
            div.innerHTML = data;
            var svg = div.querySelector('svg');
            this.iconsByUrl.set(name, svg);
          }
        }
        /** Load a SVG to the registry from a URL. */

      }, {
        key: "loadSvg",
        value: function loadSvg(url) {
          var _this2 = this;

          var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;

          // not sure if there should be a possibility to use name for server usage
          // so overriding it for now if provided
          // maybe should separate functionality for url and name use-cases
          if (this.serverUrl && url.match(/^(http(s)?):/) === null) {
            url = this.serverUrl + url;
            name = url;
          }

          if (this.iconsByUrl.has(name)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.iconsByUrl.get(name));
          } else if (this.iconsLoadingByUrl.has(name)) {
            return this.iconsLoadingByUrl.get(name);
          }

          var o = this.loader.getSvg(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (svg) {
            var div = _this2.document.createElement('DIV');

            div.innerHTML = svg;
            return div.querySelector('svg');
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (svg) {
            return _this2.iconsByUrl.set(name, svg);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            return _this2.iconsLoadingByUrl["delete"](name);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
          this.iconsLoadingByUrl.set(name, o);
          return o;
        }
        /** Get loaded SVG from registry by name. (also works by url because of blended map) */

      }, {
        key: "getSvgByName",
        value: function getSvgByName(name) {
          if (this.iconsByUrl.has(name)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.iconsByUrl.get(name));
          } else if (this.iconsLoadingByUrl.has(name)) {
            return this.iconsLoadingByUrl.get(name);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("No svg with name '".concat(name, "' has been loaded"));
        }
        /** Remove a SVG from the registry by URL (or name). */

      }, {
        key: "unloadSvg",
        value: function unloadSvg(url) {
          if (this.iconsByUrl.has(url)) {
            this.iconsByUrl["delete"](url);
          }
        }
      }]);

      return SvgIconRegistryService;
    }();

    SvgIconRegistryService.ɵfac = function SvgIconRegistryService_Factory(t) {
      return new (t || SvgIconRegistryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SvgLoader), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SERVER_URL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], 8));
    };

    SvgIconRegistryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SvgIconRegistryService,
      factory: SvgIconRegistryService.ɵfac
    });

    SvgIconRegistryService.ctorParameters = function () {
      return [{
        type: SvgLoader
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [SERVER_URL]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };

    SvgIconRegistryService = __decorate$1([__param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(SERVER_URL)), __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])), __metadata$1("design:paramtypes", [SvgLoader, Object, String, Object])], SvgIconRegistryService);

    function SVG_ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, loader, platformId, serverUrl, document) {
      return parentRegistry || new SvgIconRegistryService(loader, platformId, serverUrl, document);
    }

    var SVG_ICON_REGISTRY_PROVIDER = {
      provide: SvgIconRegistryService,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), SvgIconRegistryService], SvgLoader, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), SERVER_URL], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), _angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]],
      useFactory: SVG_ICON_REGISTRY_PROVIDER_FACTORY
    };

    var __decorate$2 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata$2 = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var SvgIconComponent = /*#__PURE__*/function () {
      function SvgIconComponent(element, differs, renderer, iconReg, cdr) {
        _classCallCheck(this, SvgIconComponent);

        this.element = element;
        this.differs = differs;
        this.renderer = renderer;
        this.iconReg = iconReg;
        this.cdr = cdr;
        this.stretch = false;
        this.applyClass = false;
        /** @deprecated since 9.1.0 */

        this.applyCss = false;
        this.loaded = false;
      } // Adapted from ngStyle


      _createClass(SvgIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.init();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changeRecord) {
          if (changeRecord.src || changeRecord.name) {
            if (this.loaded) {
              this.destroy();
            }

            this.init();
          }

          if (changeRecord.stretch) {
            this.stylize();
          }

          if (changeRecord.applyClass) {
            if (this.applyClass) {
              this.setClass(null, this.klass);
            } else {
              this.setClass(this.klass, null);
            }
          }

          if (changeRecord.svgClass) {
            this.setClass(changeRecord.svgClass.previousValue, changeRecord.svgClass.currentValue);
          }

          if (changeRecord.klass) {
            if (this.applyClass) {
              this.setClass(changeRecord.klass.previousValue, changeRecord.klass.currentValue);
            } else {
              this.setClass(changeRecord.klass.previousValue, null);
            }
          }

          if (changeRecord.viewBox) {
            if (this.loaded) {
              this.destroy();
            }

            this.init();
          }

          if (changeRecord.applyCss) {
            console.warn('applyCss deprecated since 9.1.0, will be removed in 10.0.0');
            console.warn('use applyClass instead');
          }
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.svg && this.differ) {
            var changes = this.differ.diff(this._svgStyle);

            if (changes) {
              this.applyChanges(changes);
            }
          }
        }
      }, {
        key: "init",
        value: function init() {
          if (this.name) {
            this.icnSub = this.iconReg.getSvgByName(this.name).subscribe(this.initSvg.bind(this));
          } else if (this.src) {
            this.icnSub = this.iconReg.loadSvg(this.src).subscribe(this.initSvg.bind(this));
          } else {
            var elem = this.element.nativeElement;
            elem.innerHTML = '';
            this.cdr.markForCheck();
          }
        }
      }, {
        key: "initSvg",
        value: function initSvg(svg) {
          if (!this.loaded) {
            this.setSvg(svg);
            this.resetDiffer();
          }
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.svg = undefined;
          this.differ = undefined;
          this.loaded = false;

          if (this.icnSub) {
            this.icnSub.unsubscribe();
          }
        }
      }, {
        key: "resetDiffer",
        value: function resetDiffer() {
          if (this._svgStyle && !this.differ) {
            this.differ = this.differs.find(this._svgStyle).create();
          }
        }
      }, {
        key: "setSvg",
        value: function setSvg(svg) {
          if (!this.loaded && svg) {
            this.svg = svg;
            var icon = svg.cloneNode(true);
            var elem = this.element.nativeElement;
            this.copyNgContentAttribute(elem, icon);

            if (this.klass && this.applyClass) {
              this.renderer.setAttribute(icon, 'class', this.klass);
            }

            if (this.svgClass) {
              this.renderer.setAttribute(icon, 'class', this.svgClass);
            }

            if (this.viewBox) {
              if (this.viewBox === 'auto') {
                // Attempt to convert height & width to a viewBox.
                var w = icon.getAttribute('width');
                var h = icon.getAttribute('height');

                if (h && w) {
                  var vb = "0 0 ".concat(w, " ").concat(h);
                  this.renderer.setAttribute(icon, 'viewBox', vb);
                  this.renderer.removeAttribute(icon, 'width');
                  this.renderer.removeAttribute(icon, 'height');
                }
              } else if (this.viewBox !== '') {
                this.renderer.setAttribute(icon, 'viewBox', this.viewBox);
                this.renderer.removeAttribute(icon, 'width');
                this.renderer.removeAttribute(icon, 'height');
              }
            }

            elem.innerHTML = '';
            this.renderer.appendChild(elem, icon);
            this.loaded = true;
            this.stylize();
            this.cdr.markForCheck();
          }
        }
      }, {
        key: "copyNgContentAttribute",
        value: function copyNgContentAttribute(hostElem, icon) {
          var attributes = hostElem.attributes;
          var len = attributes.length;

          for (var i = 0; i < len; i += 1) {
            var attribute = attributes.item(i);

            if (attribute.name.startsWith('_ngcontent')) {
              this.setNgContentAttribute(icon, attribute.name);
              break;
            }
          }
        }
      }, {
        key: "setNgContentAttribute",
        value: function setNgContentAttribute(parent, attributeName) {
          this.renderer.setAttribute(parent, attributeName, '');
          var len = parent.childNodes.length;

          for (var i = 0; i < len; i += 1) {
            var child = parent.childNodes[i];

            if (child instanceof Element) {
              this.setNgContentAttribute(child, attributeName);
            }
          }
        }
      }, {
        key: "stylize",
        value: function stylize() {
          if (this.svg) {
            var svg = this.element.nativeElement.firstChild;

            if (this.stretch === true) {
              this.renderer.setAttribute(svg, 'preserveAspectRatio', 'none');
            } else if (this.stretch === false) {
              this.renderer.removeAttribute(svg, 'preserveAspectRatio');
            }
          }
        }
      }, {
        key: "applyChanges",
        value: function applyChanges(changes) {
          var _this3 = this;

          changes.forEachRemovedItem(function (record) {
            return _this3.setStyle(record.key, null);
          });
          changes.forEachAddedItem(function (record) {
            return _this3.setStyle(record.key, record.currentValue);
          });
          changes.forEachChangedItem(function (record) {
            return _this3.setStyle(record.key, record.currentValue);
          });
        }
      }, {
        key: "setStyle",
        value: function setStyle(nameAndUnit, value) {
          var _nameAndUnit$split = nameAndUnit.split('.'),
              _nameAndUnit$split2 = _slicedToArray(_nameAndUnit$split, 2),
              name = _nameAndUnit$split2[0],
              unit = _nameAndUnit$split2[1];

          value = value !== null && unit ? "".concat(value).concat(unit) : value;
          var svg = this.element.nativeElement.firstChild;

          if (value !== null) {
            this.renderer.setStyle(svg, name, value);
          } else {
            this.renderer.removeStyle(svg, name);
          }
        }
      }, {
        key: "setClass",
        value: function setClass(previous, current) {
          var svg = this.element.nativeElement.firstChild;

          if (svg) {
            if (previous) {
              this.renderer.removeClass(svg, previous);
            }

            if (current) {
              var klasses = current.split(' ');

              var _iterator = _createForOfIteratorHelper(klasses),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var k = _step.value;
                  this.renderer.addClass(svg, k);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
        }
      }, {
        key: "svgStyle",
        set: function set(v) {
          this._svgStyle = v;

          if (!this.differ && v) {
            this.differ = this.differs.find(v).create();
          }
        }
      }]);

      return SvgIconComponent;
    }();

    SvgIconComponent.ɵfac = function SvgIconComponent_Factory(t) {
      return new (t || SvgIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SvgIconRegistryService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    SvgIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SvgIconComponent,
      selectors: [["svg-icon"]],
      inputs: {
        stretch: "stretch",
        applyClass: "applyClass",
        applyCss: "applyCss",
        svgStyle: "svgStyle",
        src: "src",
        name: "name",
        svgClass: "svgClass",
        klass: ["class", "klass"],
        viewBox: "viewBox"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function SvgIconComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    SvgIconComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: SvgIconRegistryService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", String)], SvgIconComponent.prototype, "src", void 0);

    __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", String)], SvgIconComponent.prototype, "name", void 0);

    __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", Object)], SvgIconComponent.prototype, "stretch", void 0);

    __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", Object)], SvgIconComponent.prototype, "applyClass", void 0);

    __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", Object)], SvgIconComponent.prototype, "applyCss", void 0);

    __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", String)], SvgIconComponent.prototype, "svgClass", void 0);

    __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('class'), __metadata$2("design:type", String)], SvgIconComponent.prototype, "klass", void 0);

    __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", String)], SvgIconComponent.prototype, "viewBox", void 0);

    __decorate$2([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata$2("design:type", Object), __metadata$2("design:paramtypes", [Object])], SvgIconComponent.prototype, "svgStyle", null);

    SvgIconComponent = __decorate$2([__metadata$2("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], SvgIconRegistryService, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], SvgIconComponent);

    var __decorate$3 = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var AngularSvgIconModule_1;

    var AngularSvgIconModule = AngularSvgIconModule_1 = /*#__PURE__*/function () {
      function AngularSvgIconModule() {
        _classCallCheck(this, AngularSvgIconModule);
      }

      _createClass(AngularSvgIconModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: AngularSvgIconModule_1,
            providers: [SVG_ICON_REGISTRY_PROVIDER, config.loader || {
              provide: SvgLoader,
              useClass: SvgHttpLoader
            }]
          };
        }
      }]);

      return AngularSvgIconModule;
    }();

    AngularSvgIconModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AngularSvgIconModule
    });
    AngularSvgIconModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AngularSvgIconModule_Factory(t) {
        return new (t || AngularSvgIconModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SvgHttpLoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SvgIconRegistryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: SvgLoader
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [SERVER_URL]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SvgIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'svg-icon',
          template: '<ng-content></ng-content>'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: SvgIconRegistryService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        stretch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        applyClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        applyCss: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        svgStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        svgClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        klass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['class']
        }],
        viewBox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularSvgIconModule, {
        declarations: function declarations() {
          return [SvgIconComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [SvgIconComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularSvgIconModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [SvgIconComponent],
          exports: [SvgIconComponent]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=angular-svg-icon.js.map

    /***/

  },

  /***/
  "./src/app/equipments/shared/section.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/equipments/shared/section.service.ts ***!
    \******************************************************/

  /*! exports provided: SectionService */

  /***/
  function srcAppEquipmentsSharedSectionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionService", function () {
      return SectionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SectionService = function SectionService() {
      _classCallCheck(this, SectionService);
    };

    SectionService.ɵfac = function SectionService_Factory(t) {
      return new (t || SectionService)();
    };

    SectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SectionService,
      factory: SectionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lines/line-default/line-default.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/lines/line-default/line-default.component.ts ***!
    \**************************************************************/

  /*! exports provided: LineDefaultComponent */

  /***/
  function srcAppLinesLineDefaultLineDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LineDefaultComponent", function () {
      return LineDefaultComponent;
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


    var _shared_workflow_models_workflow_settings_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/workflow/models/workflow-settings.model */
    "./src/app/shared/workflow/models/workflow-settings.model.ts");
    /* harmony import */


    var _storage_storage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../storage/storage.component */
    "./src/app/lines/storage/storage.component.ts");
    /* harmony import */


    var angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-svg-icon */
    "./node_modules/angular-svg-icon/__ivy_ngcc__/fesm2015/angular-svg-icon.js");
    /* harmony import */


    var _bins_shared_bin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../bins/shared/bin.service */
    "./src/app/bins/shared/bin.service.ts");
    /* harmony import */


    var _equipments_shared_equipment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../equipments/shared/equipment.service */
    "./src/app/equipments/shared/equipment.service.ts");
    /* harmony import */


    var _equipments_shared_section_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../equipments/shared/section.service */
    "./src/app/equipments/shared/section.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var dynamic_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! dynamic-form */
    "./dist/dynamic-form/fesm2015/dynamic-form.js");

    var LineDefaultComponent = /*#__PURE__*/function () {
      function LineDefaultComponent(binService, equipmentService, sectionService, route, dynamicFormService) {
        _classCallCheck(this, LineDefaultComponent);

        this.binService = binService;
        this.equipmentService = equipmentService;
        this.sectionService = sectionService;
        this.route = route;
        this.dynamicFormService = dynamicFormService;
        this.workflowSettings = new _shared_workflow_models_workflow_settings_model__WEBPACK_IMPORTED_MODULE_3__["WorkflowSettings"](); // Used for cleaning subscription

        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(LineDefaultComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.workflowSettings.isEdited = true;
          this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe(function (data) {
            _this4.line = data.line;
            _this4.svg = 'assets/svgs/' + _this4.line.name + '.svg';
            _this4.sections = data.line.sections.map(function (section, index, array) {
              return {
                id: section.id,
                name: section.name,
                status: _this4.getStatus(),
                jobName: _this4.line.name + ':00000' + (index + 1)
              };
            }); // const workflow = new Workflow();
            // let yAix = 0;
            // const diff = 50;
            // workflow.vertexes = this.line.sections.map(section => {
            //   yAix = yAix + diff;
            //   return {
            //     id: section.id,
            //     name: section.name,
            //     width: 200,
            //     height: 80,
            //     x: 100,
            //     y: yAix,
            //     style: 'red'
            //   };
            // });
            // workflow.edges = workflow.vertexes.map((vertex, index, array) => {
            //   if (index + 1 < array.length) {
            //     return {
            //       id: index.toString(),
            //       name: '',
            //       source: vertex.id,
            //       target: array[index + 1].id,
            //       style: ''
            //     };
            //   }
            // }).filter(edge => edge);
            // this.workflowSettings.workflow = workflow;
            // this.svg = 'assets/svgs/' + this.line.name + '.svg';

            console.log(_this4.line);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this5 = this;

          setTimeout(function () {
            // Read the first svg, if any.
            var icn = _this5.svgIcons.first;
            console.log(icn);

            if (icn) {
              var svg = icn.nativeElement.firstChild;
              console.log(svg);
              var storages = svg.querySelectorAll('[devicetype=\'storage\']');

              var idsOfStorage = _this5.getIdsFromSvg(storages);

              var sections = svg.querySelectorAll('[devicetype=\'section\']');

              var idsOfSections = _this5.getIdsFromSvg(sections);

              var equipments = svg.querySelectorAll('[devicetype=\'equipment\']');

              var idsOfEquipments = _this5.getIdsFromSvg(equipments);

              var observables = [];
              observables.push(_this5.binService.getBinsByIds(idsOfStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this5.unsubscribe)));
              observables.push(_this5.equipmentService.getSectionsByIds(idsOfSections).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this5.unsubscribe)));
              observables.push(_this5.equipmentService.getEquipmentsByIds(idsOfEquipments).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this5.unsubscribe)));
              Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(observables).subscribe(function (x) {
                _this5.storages = x[0];
                _this5.sections = x[1];
                _this5.equipments = x[2];
                storages.forEach(function (storageElement) {
                  var id = storageElement.getAttribute('deviceident');
                  var storageData = x[0].find(function (s) {
                    return s.id === id;
                  });
                  var productName = '';
                  var height = 0;

                  if (storageData) {
                    productName = storageData.productName;
                    var currenWeight = storageData.currentWeight;
                    var maxWeight = storageData.maxWeight;
                    height = currenWeight / maxWeight * 100;
                  }

                  var identText = storageElement.querySelector('.product');
                  identText.innerHTML = productName;
                  var capacity = storageElement.querySelector('.capacity');
                  capacity.setAttribute('height', height);
                });
              });
              console.log(storages);
            } // const observables: Observable<any>[] = [];
            // observables.push(this.binService.getBins().pipe(takeUntil(this.unsubscribe)))
            // observables.push(this.equipmentService.get().pipe(takeUntil(this.unsubscribe)))
            // this.binService.getBins().pipe(takeUntil(this.unsubscribe)).subscribe(bins => {
            //
            // });

          }, 250); // An estimate of the time it takes for the svg to actually load.
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe.next();
          this.unsubscribe.complete();
        }
      }, {
        key: "getIdsFromSvg",
        value: function getIdsFromSvg(list) {
          return Array.from(list).map(function (element) {
            return element.getAttribute('deviceident');
          });
        }
      }, {
        key: "getStatus",
        value: function getStatus() {
          var statusNum = Math.floor(Math.random() * 3);

          if (statusNum === 0) {
            return 'Running';
          } else if (statusNum === 1) {
            return 'Suspend';
          } else {
            return 'Error';
          }
        }
      }, {
        key: "svgClicked",
        value: function svgClicked($event) {
          console.log($event);
          this.openItem($event.path, 0);
        }
      }, {
        key: "openItem",
        value: function openItem(paths, index) {
          if (index > paths.length - 1 || paths[index].nodeName.toLowerCase() === 'svg-icon') {
            return;
          }

          var currentPath = paths[index];
          console.log(currentPath.getAttribute('id') + ' with node type: ' + currentPath.nodeName);
          var deviceType = currentPath.getAttribute('devicetype');
          var deviceIdent = currentPath.getAttribute('deviceident');
          console.log('deviceIdent: ' + deviceIdent);
          console.log('deviceType: ' + deviceType);

          if (deviceType !== null && deviceIdent !== null) {
            switch (deviceType) {
              case 'storage':
                this.openStorage(deviceIdent);
                break;

              case 'section':
                this.openSection(deviceIdent);
                break;

              case 'equipment':
                this.openEquipment(deviceIdent);
                break;
            }
          } else {
            this.openItem(paths, ++index);
          }
        }
      }, {
        key: "openStorage",
        value: function openStorage(id) {
          var storage = this.storages.find(function (s) {
            return s.id === id;
          });
          this.dynamicFormService.popModal(_storage_storage_component__WEBPACK_IMPORTED_MODULE_4__["StorageComponent"], {
            size: 'lg',
            backdrop: 'static',
            windowClass: 'modal-xxxl',
            storage: storage,
            onSubmit: function onSubmit(e) {},
            onDismiss: function onDismiss() {}
          });
        }
      }, {
        key: "openSection",
        value: function openSection(id) {}
      }, {
        key: "openEquipment",
        value: function openEquipment(id) {}
      }]);

      return LineDefaultComponent;
    }();

    LineDefaultComponent.ɵfac = function LineDefaultComponent_Factory(t) {
      return new (t || LineDefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bins_shared_bin_service__WEBPACK_IMPORTED_MODULE_6__["BinService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_equipments_shared_equipment_service__WEBPACK_IMPORTED_MODULE_7__["EquipmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_equipments_shared_section_service__WEBPACK_IMPORTED_MODULE_8__["SectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](dynamic_form__WEBPACK_IMPORTED_MODULE_10__["DynamicFormService"]));
    };

    LineDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LineDefaultComponent,
      selectors: [["emes-line-default"]],
      viewQuery: function LineDefaultComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__["SvgIconComponent"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.svgIcons = _t);
        }
      },
      decls: 2,
      vars: 3,
      consts: [[3, "src", "stretch", "viewBox", "click"], ["container", ""]],
      template: function LineDefaultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg-icon", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LineDefaultComponent_Template_svg_icon_click_0_listener($event) {
            return ctx.svgClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/svgs/" + ctx.line.name + ".svg")("stretch", true)("viewBox", "auto");
        }
      },
      directives: [angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__["SvgIconComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-height: 0;\n  height: 100%;\n}\n\nsvg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.capacity[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluZXMvbGluZS1kZWZhdWx0L0M6XFxEZXZcXEludGVybmFsXFxDbGllbnRBcHAtMi9zcmNcXGFwcFxcbGluZXNcXGxpbmUtZGVmYXVsdFxcbGluZS1kZWZhdWx0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9saW5lcy9saW5lLWRlZmF1bHQvbGluZS1kZWZhdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbGluZXMvbGluZS1kZWZhdWx0L2xpbmUtZGVmYXVsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgbWluLWhlaWdodDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FwYWNpdHkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtaW4taGVpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbnN2ZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXBhY2l0eSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineDefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-line-default',
          templateUrl: './line-default.component.html',
          styleUrls: ['./line-default.component.scss']
        }]
      }], function () {
        return [{
          type: _bins_shared_bin_service__WEBPACK_IMPORTED_MODULE_6__["BinService"]
        }, {
          type: _equipments_shared_equipment_service__WEBPACK_IMPORTED_MODULE_7__["EquipmentService"]
        }, {
          type: _equipments_shared_section_service__WEBPACK_IMPORTED_MODULE_8__["SectionService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }, {
          type: dynamic_form__WEBPACK_IMPORTED_MODULE_10__["DynamicFormService"]
        }];
      }, {
        svgIcons: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__["SvgIconComponent"], {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/lines/line-details/line-details.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/lines/line-details/line-details.component.ts ***!
    \**************************************************************/

  /*! exports provided: LineDetailsComponent */

  /***/
  function srcAppLinesLineDetailsLineDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LineDetailsComponent", function () {
      return LineDetailsComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function LineDetailsComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LineDetailsComponent_div_7_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.save(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LineDetailsComponent_div_7_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.save(false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LineDetailsComponent_div_7_Template_button_click_8_listener() {
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

    function LineDetailsComponent_button_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LineDetailsComponent_button_14_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.save(true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LineDetailsComponent_button_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LineDetailsComponent_button_15_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save & Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LineDetailsComponent_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LineDetailsComponent_button_16_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.copy();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Copy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LineDetailsComponent_button_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LineDetailsComponent_button_17_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16["delete"]();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LineDetailsComponent_tr_43_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var section_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r18.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r18.jobName);
      }
    }

    function LineDetailsComponent_tr_43_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var section_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r18.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r18.jobName);
      }
    }

    function LineDetailsComponent_tr_43_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var section_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r18.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r18.jobName);
      }
    }

    function LineDetailsComponent_tr_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LineDetailsComponent_tr_43_ng_container_5_Template, 5, 2, "ng-container", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LineDetailsComponent_tr_43_ng_container_6_Template, 5, 2, "ng-container", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LineDetailsComponent_tr_43_ng_container_7_Template, 5, 2, "ng-container", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var section_r18 = ctx.$implicit;
        var i_r19 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](section_r18.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", section_r18.status === "Running");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", section_r18.status === "Suspend");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", section_r18.status === "Error");
      }
    }

    var LineDetailsComponent = /*#__PURE__*/function () {
      function LineDetailsComponent(route) {
        _classCallCheck(this, LineDetailsComponent);

        this.route = route; // Icon

        this.faEllipsisV = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEllipsisV"]; // Indicator whether it is a author

        this.isAuthor = true; // Indicator whether it is a owner

        this.isOwner = true; // Used for cleaning subscription

        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(LineDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.route.parent.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(function (data) {
            _this6.line = data.line;
            console.log(_this6.line);
            _this6.sections = data.line.sections.map(function (section, index, array) {
              return {
                id: section.id,
                name: section.name,
                status: _this6.getStatus(),
                jobName: _this6.line.name + ':00000' + (index + 1)
              };
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe.next();
          this.unsubscribe.complete();
        }
      }, {
        key: "getStatus",
        value: function getStatus() {
          var statusNum = Math.floor(Math.random() * 3);

          if (statusNum === 0) {
            return 'Running';
          } else if (statusNum === 1) {
            return 'Suspend';
          } else {
            return 'Error';
          }
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
        key: "nameChanged",
        value: function nameChanged($event) {}
      }]);

      return LineDetailsComponent;
    }();

    LineDetailsComponent.ɵfac = function LineDetailsComponent_Factory(t) {
      return new (t || LineDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    LineDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LineDetailsComponent,
      selectors: [["emes-line-details"]],
      decls: 44,
      vars: 10,
      consts: [[1, "container-fluid", "d-flex", "flex-column"], [1, "row", "justify-content-between", "align-items-center", "pt-3", "pb-2", "mb-3", "border-bottom"], [1, "col-auto"], [1, "btn-toolbar", "mb-2", "mb-md-0"], ["class", "btn-group mr-2", 4, "ngIf"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", "mr-2", 3, "click"], ["ngbDropdown", "", "placement", "bottom-right", 1, "btn-group", "mr-2"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-sm", "btn-link", "dropdown-icon"], [1, "text-primary", "pointer", 3, "icon", "fixedWidth"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "inputId"], ["type", "text", "id", "inputId", "name", "inputId", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputName"], ["type", "text", "id", "inputName", "name", "inputName", "placeholder", "Enter Name here", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "btn-group", "mr-2"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["ngbDropdown", "", "placement", "bottom-right", 1, "btn-group"], ["ngbDropdownToggle", "", 1, "btn", "btn-sm", "btn-primary", "dropdown-toggle-split"], ["ngbDropdownItem", "", 3, "click"], ["scope", "row"], [4, "ngIf"], [1, "green-background"], [1, "yellow-background"], [1, "red-background"]],
      template: function LineDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Line Management ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LineDetailsComponent_div_7_Template, 10, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LineDetailsComponent_Template_button_click_8_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LineDetailsComponent_button_14_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LineDetailsComponent_button_15_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LineDetailsComponent_button_16_Template, 2, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LineDetailsComponent_button_17_Template, 2, 0, "button", 10);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LineDetailsComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.line.id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LineDetailsComponent_Template_input_ngModelChange_27_listener($event) {
            return ctx.line.name = $event;
          })("input", function LineDetailsComponent_Template_input_input_27_listener($event) {
            return ctx.nameChanged($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sections");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "table", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Section Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "JobName");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, LineDetailsComponent_tr_43_Template, 8, 5, "tr", 19);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.line.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.line.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sections);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownToggle"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownMenu"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownItem"]],
      styles: [".dropdown-icon.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluZXMvbGluZS1kZXRhaWxzL0M6XFxEZXZcXEludGVybmFsXFxDbGllbnRBcHAtMi9zcmNcXGFwcFxcbGluZXNcXGxpbmUtZGV0YWlsc1xcbGluZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9saW5lcy9saW5lLWRldGFpbHMvbGluZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGluZXMvbGluZS1kZXRhaWxzL2xpbmUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wZG93bi1pY29uLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgIiwiLmRyb3Bkb3duLWljb24uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-line-details',
          templateUrl: './line-details.component.html',
          styleUrls: ['./line-details.component.scss']
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
  "./src/app/lines/line/line.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/lines/line/line.component.ts ***!
    \**********************************************/

  /*! exports provided: LineComponent */

  /***/
  function srcAppLinesLineLineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LineComponent", function () {
      return LineComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/side-bar/side-bar.component */
    "./src/app/shared/side-bar/side-bar.component.ts");

    var LineComponent = /*#__PURE__*/function () {
      function LineComponent(route, router) {
        _classCallCheck(this, LineComponent);

        this.route = route;
        this.router = router; // Used for cleaning subscription

        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(LineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.route.snapshot.params['lineId'];
          this.menuItems = [{
            id: '1',
            label: 'Jobs',
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTasks"],
            route: ['jobs'],
            children: []
          }, {
            id: '2',
            label: 'Line Home',
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTasks"],
            route: ['..', id],
            children: []
          }, {
            id: '3',
            label: 'Line Detail',
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTasks"],
            route: ['details'],
            children: []
          }, {
            id: '4',
            label: 'Job Log',
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTasks"],
            route: ['joblogs'],
            children: []
          }];
        }
      }]);

      return LineComponent;
    }();

    LineComponent.ɵfac = function LineComponent_Factory(t) {
      return new (t || LineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LineComponent,
      selectors: [["emes-line"]],
      decls: 5,
      vars: 2,
      consts: [[1, "container-fluid", "h-100", "px-0"], [1, "row", "h-100", "no-gutters"], [1, "col-md-3", "col-lg-2", "d-none", "d-md-block", "bg-light", 3, "header", "menuItems"], [1, "col-md-9", "col-lg-10", "d-flex", "flex-column", "w-100"]],
      template: function LineComponent_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", "Line")("menuItems", ctx.menuItems);
        }
      },
      directives: [_shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_4__["SideBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluZXMvbGluZS9DOlxcRGV2XFxJbnRlcm5hbFxcQ2xpZW50QXBwLTIvc3JjXFxhcHBcXGxpbmVzXFxsaW5lXFxsaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9saW5lcy9saW5lL2xpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9saW5lcy9saW5lL2xpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-line',
          templateUrl: './line.component.html',
          styleUrls: ['./line.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lines/lines-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/lines/lines-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LinesRoutingModule */

  /***/
  function srcAppLinesLinesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinesRoutingModule", function () {
      return LinesRoutingModule;
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


    var _line_default_line_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./line-default/line-default.component */
    "./src/app/lines/line-default/line-default.component.ts");
    /* harmony import */


    var _line_details_line_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./line-details/line-details.component */
    "./src/app/lines/line-details/line-details.component.ts");
    /* harmony import */


    var _line_line_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./line/line.component */
    "./src/app/lines/line/line.component.ts");
    /* harmony import */


    var _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lines/lines.component */
    "./src/app/lines/lines/lines.component.ts");
    /* harmony import */


    var _route_resolvers_line_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./route-resolvers/line-resolver.service */
    "./src/app/lines/route-resolvers/line-resolver.service.ts");
    /* harmony import */


    var _route_resolvers_lines_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./route-resolvers/lines-resolver.service */
    "./src/app/lines/route-resolvers/lines-resolver.service.ts");

    var routes = [{
      path: '',
      component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_5__["LinesComponent"],
      resolve: {
        lines: _route_resolvers_lines_resolver_service__WEBPACK_IMPORTED_MODULE_7__["LinesResolverService"]
      }
    }, {
      path: ':lineId',
      resolve: {
        line: _route_resolvers_line_resolver_service__WEBPACK_IMPORTED_MODULE_6__["LineResolverService"]
      },
      component: _line_line_component__WEBPACK_IMPORTED_MODULE_4__["LineComponent"],
      children: [{
        path: 'jobs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | jobs-jobs-module */
          "jobs-jobs-module").then(__webpack_require__.bind(null,
          /*! ./jobs/jobs.module */
          "./src/app/lines/jobs/jobs.module.ts")).then(function (m) {
            return m.JobsModule;
          });
        }
      }, {
        path: 'joblogs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | job-logs-job-logs-module */
          "job-logs-job-logs-module").then(__webpack_require__.bind(null,
          /*! ./job-logs/job-logs.module */
          "./src/app/lines/job-logs/job-logs.module.ts")).then(function (m) {
            return m.JobLogsModule;
          });
        }
      }, {
        path: 'details',
        component: _line_details_line_details_component__WEBPACK_IMPORTED_MODULE_3__["LineDetailsComponent"]
      }, {
        path: '',
        component: _line_default_line_default_component__WEBPACK_IMPORTED_MODULE_2__["LineDefaultComponent"]
      }]
    }];

    var LinesRoutingModule = function LinesRoutingModule() {
      _classCallCheck(this, LinesRoutingModule);
    };

    LinesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LinesRoutingModule
    });
    LinesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LinesRoutingModule_Factory(t) {
        return new (t || LinesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LinesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinesRoutingModule, [{
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
  "./src/app/lines/lines.module.ts":
  /*!***************************************!*\
    !*** ./src/app/lines/lines.module.ts ***!
    \***************************************/

  /*! exports provided: LinesModule */

  /***/
  function srcAppLinesLinesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinesModule", function () {
      return LinesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _lines_lines_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lines/lines.component */
    "./src/app/lines/lines/lines.component.ts");
    /* harmony import */


    var _line_line_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./line/line.component */
    "./src/app/lines/line/line.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _lines_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lines-routing.module */
    "./src/app/lines/lines-routing.module.ts");
    /* harmony import */


    var _line_default_line_default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./line-default/line-default.component */
    "./src/app/lines/line-default/line-default.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _line_details_line_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./line-details/line-details.component */
    "./src/app/lines/line-details/line-details.component.ts");
    /* harmony import */


    var angular_svg_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-svg-icon */
    "./node_modules/angular-svg-icon/__ivy_ngcc__/fesm2015/angular-svg-icon.js");
    /* harmony import */


    var _storage_storage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./storage/storage.component */
    "./src/app/lines/storage/storage.component.ts");

    var LinesModule = function LinesModule() {
      _classCallCheck(this, LinesModule);
    };

    LinesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LinesModule
    });
    LinesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LinesModule_Factory(t) {
        return new (t || LinesModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _lines_routing_module__WEBPACK_IMPORTED_MODULE_4__["LinesRoutingModule"], // InlineSVGModule.forRoot(),
      angular_svg_icon__WEBPACK_IMPORTED_MODULE_8__["AngularSvgIconModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LinesModule, {
        declarations: [_lines_lines_component__WEBPACK_IMPORTED_MODULE_1__["LinesComponent"], _line_line_component__WEBPACK_IMPORTED_MODULE_2__["LineComponent"], _line_default_line_default_component__WEBPACK_IMPORTED_MODULE_5__["LineDefaultComponent"], _line_details_line_details_component__WEBPACK_IMPORTED_MODULE_7__["LineDetailsComponent"], _storage_storage_component__WEBPACK_IMPORTED_MODULE_9__["StorageComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _lines_routing_module__WEBPACK_IMPORTED_MODULE_4__["LinesRoutingModule"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_8__["AngularSvgIconModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_lines_lines_component__WEBPACK_IMPORTED_MODULE_1__["LinesComponent"], _line_line_component__WEBPACK_IMPORTED_MODULE_2__["LineComponent"], _line_default_line_default_component__WEBPACK_IMPORTED_MODULE_5__["LineDefaultComponent"], _line_details_line_details_component__WEBPACK_IMPORTED_MODULE_7__["LineDetailsComponent"], _storage_storage_component__WEBPACK_IMPORTED_MODULE_9__["StorageComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _lines_routing_module__WEBPACK_IMPORTED_MODULE_4__["LinesRoutingModule"], // InlineSVGModule.forRoot(),
          angular_svg_icon__WEBPACK_IMPORTED_MODULE_8__["AngularSvgIconModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/lines/lines/lines.component.ts":
  /*!************************************************!*\
    !*** ./src/app/lines/lines/lines.component.ts ***!
    \************************************************/

  /*! exports provided: LinesComponent */

  /***/
  function srcAppLinesLinesLinesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinesComponent", function () {
      return LinesComponent;
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


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function LinesComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Last updated 3 mins ago");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var line_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, line_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](line_r1.name);
      }
    }

    var LinesComponent = /*#__PURE__*/function () {
      function LinesComponent(route) {
        _classCallCheck(this, LinesComponent);

        this.route = route; // Icons

        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"]; // Used for cleaning subscription 

        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // Holds filter text

        this.filterSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(LinesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe)).subscribe(function (data) {
            _this7.lines = data.lines;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe.next();
          this.unsubscribe.complete();
        }
      }]);

      return LinesComponent;
    }();

    LinesComponent.ɵfac = function LinesComponent_Factory(t) {
      return new (t || LinesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    LinesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LinesComponent,
      selectors: [["emes-lines"]],
      decls: 15,
      vars: 3,
      consts: [[1, "container"], [1, "row", "no-gutters", "justify-content-between", "border-bottom", "py-2", "mb-3"], [1, "col-auto"], [1, "form-control-plaintext"], [1, "input-group", "input-group-sm"], ["type", "search", "placeholder", "Filter...", 1, "form-control", "form-control-sm", 3, "input"], [1, "input-group-append"], [1, "input-group-text"], [3, "icon"], [1, "row"], [1, "col-12", "mb-3"], ["class", "col-lg-3 col-md-4 col-sm-6", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-4", "col-sm-6"], [1, "card", "h-100"], [1, "card-body"], [1, "card-title", "d-flex", "justify-content-between"], [1, "pointer", 3, "routerLink"], [1, "card-text"], [1, "text-muted"]],
      template: function LinesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function LinesComponent_Template_input_input_7_listener($event) {
            return ctx.filterSubject$.next($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LinesComponent_div_14_Template, 9, 4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.lines.length, " Lines ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lines);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpbmVzL2xpbmVzL2xpbmVzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-lines',
          templateUrl: './lines.component.html',
          styleUrls: ['./lines.component.scss']
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
  "./src/app/lines/route-resolvers/line-resolver.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/lines/route-resolvers/line-resolver.service.ts ***!
    \****************************************************************/

  /*! exports provided: LineResolverService */

  /***/
  function srcAppLinesRouteResolversLineResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LineResolverService", function () {
      return LineResolverService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_line_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/line.service */
    "./src/app/lines/shared/line.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LineResolverService = /*#__PURE__*/function () {
      function LineResolverService(lineService, router) {
        _classCallCheck(this, LineResolverService);

        this.lineService = lineService;
        this.router = router;
      }

      _createClass(LineResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var id = route.paramMap.get('lineId');
          return this.lineService.getLine(id);
        }
      }]);

      return LineResolverService;
    }();

    LineResolverService.ɵfac = function LineResolverService_Factory(t) {
      return new (t || LineResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_line_service__WEBPACK_IMPORTED_MODULE_1__["LineService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LineResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LineResolverService,
      factory: LineResolverService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_line_service__WEBPACK_IMPORTED_MODULE_1__["LineService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lines/route-resolvers/lines-resolver.service.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/lines/route-resolvers/lines-resolver.service.ts ***!
    \*****************************************************************/

  /*! exports provided: LinesResolverService */

  /***/
  function srcAppLinesRouteResolversLinesResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinesResolverService", function () {
      return LinesResolverService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_line_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/line.service */
    "./src/app/lines/shared/line.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LinesResolverService = /*#__PURE__*/function () {
      function LinesResolverService(lineService, router) {
        _classCallCheck(this, LinesResolverService);

        this.lineService = lineService;
        this.router = router;
      }

      _createClass(LinesResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.lineService.getLines();
        }
      }]);

      return LinesResolverService;
    }();

    LinesResolverService.ɵfac = function LinesResolverService_Factory(t) {
      return new (t || LinesResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_line_service__WEBPACK_IMPORTED_MODULE_1__["LineService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LinesResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LinesResolverService,
      factory: LinesResolverService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinesResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_line_service__WEBPACK_IMPORTED_MODULE_1__["LineService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lines/shared/line.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/lines/shared/line.service.ts ***!
    \**********************************************/

  /*! exports provided: LineService */

  /***/
  function srcAppLinesSharedLineServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LineService", function () {
      return LineService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LineService = /*#__PURE__*/function () {
      function LineService() {
        _classCallCheck(this, LineService);

        this.lines = [{
          id: '252558f9-c2a8-4f7d-b607-ff02dc1e6c4c',
          name: 'INT1',
          sections: [{
            id: '10ea3dfd-6e28-4b9e-9244-a2eba42bc15f',
            name: 'INT1-Section1'
          }]
        }, {
          id: '5bcdc28b-fc29-4d4e-a6c3-e15866531989',
          name: 'INT2',
          sections: [{
            id: 'f5c17700-75ac-4a21-a4a9-d1aa4b347b40',
            name: 'INT2-Section1'
          }]
        }, {
          id: '844660ac-7ec5-4819-887d-00dae25676e6',
          name: 'MIX1',
          sections: [{
            id: 'a61860c1-44a8-4cb3-b623-60dc2cf3a123',
            name: 'MIX1-DISCHARGING'
          }, {
            id: 'a61860c1-44a8-4cb3-b623-60dc2cf3a0bf',
            name: 'MIX1-MIXING'
          }, {
            id: 'e15fa296-cae4-4c03-808d-68f9bdf53148',
            name: 'MIX1-PACKING'
          }]
        }];
      }

      _createClass(LineService, [{
        key: "getLines",
        value: function getLines() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.lines);
        }
      }, {
        key: "getLine",
        value: function getLine(id) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.lines.find(function (l) {
            return l.id === id;
          }));
        }
      }]);

      return LineService;
    }();

    LineService.ɵfac = function LineService_Factory(t) {
      return new (t || LineService)();
    };

    LineService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LineService,
      factory: LineService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/lines/storage/storage.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/lines/storage/storage.component.ts ***!
    \****************************************************/

  /*! exports provided: StorageComponent */

  /***/
  function srcAppLinesStorageStorageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageComponent", function () {
      return StorageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var StorageComponent = /*#__PURE__*/function () {
      function StorageComponent() {
        _classCallCheck(this, StorageComponent);

        // Event Emitters
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dismissed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(StorageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.storage = this.config.storage;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {}
      }, {
        key: "submitForm",
        value: function submitForm(event) {
          this.submitted.emit(null);
        } // Dismiss the modal form

      }, {
        key: "dismissForm",
        value: function dismissForm(method) {
          this.dismissed.emit(method);
        }
      }, {
        key: "productSelected",
        value: function productSelected() {}
      }, {
        key: "typeSelected",
        value: function typeSelected() {}
      }, {
        key: "nameChanged",
        value: function nameChanged(name) {}
      }]);

      return StorageComponent;
    }();

    StorageComponent.ɵfac = function StorageComponent_Factory(t) {
      return new (t || StorageComponent)();
    };

    StorageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StorageComponent,
      selectors: [["emes-storage"]],
      inputs: {
        config: "config"
      },
      outputs: {
        submitted: "submitted",
        dismissed: "dismissed"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 39,
      vars: 5,
      consts: [[1, "modal-content", 2, "height", "90vh"], [1, "modal-header", "p-2", "red-border-left", 2, "border-left", "10px solid"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "py-0", "d-flex", "flex-column"], [1, "row"], [1, "col", "gray-200-background"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "inputId"], ["type", "text", "id", "inputId", "name", "inputId", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputName"], ["type", "text", "disabled", "", "id", "inputName", "name", "inputName", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-md-12"], ["for", "inputType"], ["type", "text", "id", "inputType", "name", "inputType", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "inputProduct"], ["type", "text", "id", "inputProductName", "name", "inputProductName", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "inputProduct", "name", "inputProduct", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
      template: function StorageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Storage Viewer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StorageComponent_Template_button_click_4_listener() {
            return ctx.dismissForm("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StorageComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.storage.id = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StorageComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.storage.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StorageComponent_Template_input_ngModelChange_24_listener($event) {
            return ctx.storage.type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StorageComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.storage.productName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StorageComponent_Template_input_ngModelChange_33_listener($event) {
            return ctx.storage.productId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StorageComponent_Template_button_click_35_listener() {
            return ctx.dismissForm("Cancel");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StorageComponent_Template_button_click_37_listener() {
            return ctx.submitForm("OK");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.storage.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.storage.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.storage.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.storage.productName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.storage.productId);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpbmVzL3N0b3JhZ2Uvc3RvcmFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'emes-storage',
          templateUrl: './storage.component.html',
          styleUrls: ['./storage.component.scss']
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

  }
}]);
//# sourceMappingURL=lines-lines-module-es5.js.map