function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/bins/shared/bin.service.ts":
  /*!********************************************!*\
    !*** ./src/app/bins/shared/bin.service.ts ***!
    \********************************************/

  /*! exports provided: BinService */

  /***/
  function srcAppBinsSharedBinServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BinService", function () {
      return BinService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var BinService = /*#__PURE__*/function () {
      function BinService() {
        _classCallCheck(this, BinService);

        this.bins = [{
          id: 'd4ddfdf1-8660-43d9-aa8c-479a581ad5e7',
          name: 'Bin1',
          type: 'bulk',
          maxWeight: 10000,
          currentWeight: 0,
          unit: 'kg'
        }, {
          id: 'bfc287e6-b90d-4c66-8f3f-aba567e621bf',
          name: 'Bin2',
          type: 'bulk',
          maxWeight: 10000,
          currentWeight: 0,
          unit: 'kg'
        }, {
          id: 'dd37e65b-0d88-4ad7-8419-51376ff5100f',
          name: 'Bin3',
          type: 'bulk',
          maxWeight: 10000,
          currentWeight: 0,
          unit: 'kg'
        }, {
          id: 'ad897cd2-247f-421c-b1f9-5604ab2b61d8',
          name: 'Bin4',
          type: 'bulk',
          maxWeight: 10000,
          productId: '821c6f60-c7b5-4090-ad6a-0cd25cd4cdfb',
          productName: 'Corn',
          currentWeight: 5000,
          unit: 'kg'
        }, {
          id: '65eb3583-ffd2-44c9-adb3-f59d17a5c370',
          name: 'Bin5',
          type: 'bulk',
          maxWeight: 10000,
          currentWeight: 0,
          unit: 'kg'
        }, {
          id: '5c1549fc-7ac0-4de9-8b10-e8b7b3f24227',
          name: 'Bin6',
          type: 'bulk',
          maxWeight: 10000,
          currentWeight: 0,
          unit: 'kg'
        }];
      }

      _createClass(BinService, [{
        key: "getBins",
        value: function getBins() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.bins);
        }
      }, {
        key: "getBinsByIds",
        value: function getBinsByIds(ids) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.bins.filter(function (b) {
            return ids.includes(b.id);
          }));
        }
      }, {
        key: "getBin",
        value: function getBin(id) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.bins.find(function (b) {
            return b.id === id;
          }));
        }
      }]);

      return BinService;
    }();

    BinService.ɵfac = function BinService_Factory(t) {
      return new (t || BinService)();
    };

    BinService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BinService,
      factory: BinService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BinService, [{
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
  "./src/app/core/user/user.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/core/user/user.service.ts ***!
    \*******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppCoreUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/core/user/authentication.service.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(http, authenticationService) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.authenticationService = authenticationService; // Behaviour subject authenticatedUser

        this.userUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'api/v1/users';
        this.users$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.users = [{
          id: '1',
          firstName: 'Allen',
          lastName: 'Li',
          userName: 'lia',
          roles: [{
            id: '1',
            name: 'ROLE_ADMIN'
          }],
          enabled: true
        }, {
          id: '2',
          firstName: 'Demo',
          lastName: '',
          userName: 'demo',
          roles: [{
            id: '1',
            name: 'ROLE_ADMIN'
          }],
          enabled: true
        }];
      }

      _createClass(UserService, [{
        key: "getUser",
        value: function getUser(id) {
          // const url = `${this.userUrl}/${id}`;
          // return this.http.get<any>(url);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.users.find(function (x) {
            return x.id === id;
          }));
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          this.users$.next(this.users);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.users); // const url = `${this.userUrl}`;
          // return this.http.get<any>(url).pipe(tap(u => {
          //   this.users$.next(u);
          // }));
        }
      }, {
        key: "createUser",
        value: function createUser(newUser) {
          // const url = this.userUrl;
          // return this.http.post<any>(url, newUser)
          //   .pipe(tap(x => {
          //     const users = this.users$.getValue();
          //     users.push({...newUser, id: x, roles: [], enabled: true});
          //     this.users$.next(users);
          //   }));
          var users = this.users$.getValue();
          users.push(Object.assign(Object.assign({}, newUser), {
            id: '123',
            roles: [],
            enabled: true
          }));
          this.users$.next(users);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.users);
        }
      }, {
        key: "updateUser",
        value: function updateUser(id, updatedUser, updateNeeded) {
          // const url = `${this.userUrl}/${id}`;
          // return this.http.put<any>(url, updatedUser)
          //   .pipe(tap(x => {
          //     if (updateNeeded) {
          //       this.authenticationService.currentUserValue.lastName = updatedUser.lastName;
          //       this.authenticationService.currentUserValue.firstName = updatedUser.firstName;
          //       this.authenticationService.updateUser(this.authenticationService.currentUserValue);
          //     }
          //   }));
          if (updateNeeded) {
            this.authenticationService.currentUserValue.lastName = updatedUser.lastName;
            this.authenticationService.currentUserValue.firstName = updatedUser.firstName;
            this.authenticationService.updateUser(this.authenticationService.currentUserValue);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({});
        }
      }, {
        key: "deleteUser",
        value: function deleteUser() {
          alert('Not implement yet');
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/equipments/shared/equipment.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/equipments/shared/equipment.service.ts ***!
    \********************************************************/

  /*! exports provided: EquipmentService */

  /***/
  function srcAppEquipmentsSharedEquipmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EquipmentService", function () {
      return EquipmentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var EquipmentService = /*#__PURE__*/function () {
      function EquipmentService() {
        _classCallCheck(this, EquipmentService);

        this.sections = [{
          id: '10ea3dfd-6e28-4b9e-9244-a2eba42bc15f',
          name: 'INT1-Section1',
          equipments: [{
            id: '1c2fbab8-80de-40a6-beba-418484eb2ef3',
            name: 'Discharger1',
            type: 'discharger'
          }]
        }, {
          id: 'f5c17700-75ac-4a21-a4a9-d1aa4b347b40',
          name: 'INT2-Section1',
          equipments: [{
            id: 'd763bcbe-39d7-44d4-81c3-390dfe899a81',
            name: 'Discharger2',
            type: 'discharger'
          }]
        }, {
          id: 'a61860c1-44a8-4cb3-b623-60dc2cf3a123',
          name: 'MIX1-DISCHARGING',
          equipments: []
        }, {
          id: 'a61860c1-44a8-4cb3-b623-60dc2cf3a0bf',
          name: 'MIX1-MIXING',
          equipments: [{
            id: '8e8e45cb-9dc3-493b-a729-73a23808df3e',
            name: 'Mixer1',
            type: 'mixer'
          }]
        }, {
          id: 'e15fa296-cae4-4c03-808d-68f9bdf53148',
          name: 'MIX1-PACKING',
          equipments: [{
            id: '6c713110-9748-45e5-b096-81530e292915',
            name: 'Packer2',
            type: 'packer'
          }]
        }];
        this.equipments = [{
          id: '1c2fbab8-80de-40a6-beba-418484eb2ef3',
          name: 'Discharger1',
          type: 'discharger'
        }, {
          id: 'd763bcbe-39d7-44d4-81c3-390dfe899a81',
          name: 'Discharger2',
          type: 'discharger'
        }, {
          id: '8e8e45cb-9dc3-493b-a729-73a23808df3e',
          name: 'Mixer1',
          type: 'mixer'
        }, {
          id: '1b1256f7-41b2-4707-889b-26d79ec25ebd',
          name: 'Packer1',
          type: 'packer'
        }, {
          id: '6c713110-9748-45e5-b096-81530e292915',
          name: 'Packer2',
          type: 'packer'
        }];
      }

      _createClass(EquipmentService, [{
        key: "getEquipments",
        value: function getEquipments() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.equipments);
        }
      }, {
        key: "getEquipmentsByIds",
        value: function getEquipmentsByIds(ids) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.equipments.filter(function (eq) {
            return ids.includes(eq.id);
          }));
        }
      }, {
        key: "getEquipment",
        value: function getEquipment(id) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.equipments.find(function (e) {
            return e.id === id;
          }));
        }
      }, {
        key: "getSections",
        value: function getSections() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.sections);
        }
      }, {
        key: "getSectionsByIds",
        value: function getSectionsByIds(ids) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.sections.filter(function (s) {
            return ids.includes(s.id);
          }));
        }
      }, {
        key: "getSection",
        value: function getSection(id) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.sections.find(function (s) {
            return s.id === id;
          }));
        }
      }]);

      return EquipmentService;
    }();

    EquipmentService.ɵfac = function EquipmentService_Factory(t) {
      return new (t || EquipmentService)();
    };

    EquipmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EquipmentService,
      factory: EquipmentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EquipmentService, [{
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
  "./src/app/shared/services/scheme.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/services/scheme.service.ts ***!
    \***************************************************/

  /*! exports provided: SchemeService */

  /***/
  function srcAppSharedServicesSchemeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchemeService", function () {
      return SchemeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SchemeService = /*#__PURE__*/function () {
      function SchemeService(http) {
        _classCallCheck(this, SchemeService);

        this.http = http;
        this.schemeUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl + 'api/v1/schemes'; // URL to web api

        this.schemeNames$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.scheme$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.mockedOrderScheme = {
          id: '1',
          schemeName: 'Order_Scheme',
          builtin: true,
          primitiv: false,
          description: '',
          fields: [{
            id: '1',
            name: 'erp_body_data',
            fullName: 'erp_body_data',
            scheme: '',
            unit: '',
            type: 'array',
            attributes: [],
            fields: [{
              id: '1',
              name: 'vinCode',
              fullName: 'vinCode',
              scheme: 'string',
              unit: '',
              type: 'string',
              fields: [],
              attributes: []
            }, {
              id: '2',
              name: 'bodyType',
              fullName: 'bodyType',
              scheme: 'string',
              unit: '',
              type: 'string',
              fields: [],
              attributes: []
            }, {
              id: '3',
              name: 'firstColorCode',
              fullName: 'firstColorCode',
              unit: '',
              scheme: 'string',
              type: 'string',
              fields: [],
              attributes: []
            }, {
              id: '4',
              name: 'secondColorCode',
              fullName: 'secondColorCode',
              unit: '',
              scheme: 'string',
              type: 'string',
              fields: [],
              attributes: []
            }, {
              id: '5',
              name: 'carCategory',
              fullName: 'carCategory',
              unit: '',
              scheme: 'string',
              type: 'string',
              fields: [],
              attributes: []
            }, {
              id: '6',
              name: 'roofWindow',
              unit: '',
              fullName: 'roofWindow',
              scheme: 'string',
              type: 'string',
              fields: [],
              attributes: []
            }, {
              id: '7',
              name: 'orderNumber',
              unit: '',
              fullName: 'orderNumber',
              scheme: 'string',
              type: 'string',
              fields: [],
              attributes: []
            }, {
              id: '8',
              name: 'orderType',
              unit: '',
              fullName: 'orderType',
              scheme: 'string',
              type: 'string',
              fields: [],
              attributes: []
            }, {
              id: '9',
              name: 'plantId',
              unit: '',
              fullName: 'plantId',
              scheme: 'string',
              type: 'string',
              fields: [],
              attributes: []
            }, {
              id: '10',
              name: 'twoTonedCar',
              unit: '',
              fullName: 'twoTonedCar',
              scheme: 'string',
              type: 'string',
              fields: [],
              attributes: []
            }]
          }]
        };
      }

      _createClass(SchemeService, [{
        key: "getSchemes",
        value: function getSchemes(page, size) {
          var url = "".concat(this.schemeUrl, "/?page=").concat(page, "&size=").concat(size);
          return this.http.get(url);
        }
      }, {
        key: "getSchemeNames",
        value: function getSchemeNames() {
          // const url = `${this.schemeUrl}`;
          // return this.http.get<string[]>(url).pipe(tap(x => {
          //   this.schemeNames$.next(x);
          // }));
          var schemeName = [this.mockedOrderScheme.schemeName];
          this.schemeNames$.next(schemeName);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(schemeName);
        }
      }, {
        key: "getSchemeByName",
        value: function getSchemeByName(name) {
          // const url = `${this.schemeUrl}/by-name/${name}`;
          // return this.http.get(url).pipe(tap(x => {
          //   this.scheme$.next(x);
          // }));
          this.scheme$.next(this.mockedOrderScheme);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.mockedOrderScheme);
        }
      }]);

      return SchemeService;
    }();

    SchemeService.ɵfac = function SchemeService_Factory(t) {
      return new (t || SchemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    SchemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SchemeService,
      factory: SchemeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SchemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/workflow/models/workflow-settings.model.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/workflow/models/workflow-settings.model.ts ***!
    \*******************************************************************/

  /*! exports provided: WorkflowSettings */

  /***/
  function srcAppSharedWorkflowModelsWorkflowSettingsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkflowSettings", function () {
      return WorkflowSettings;
    });

    var WorkflowSettings = function WorkflowSettings() {
      _classCallCheck(this, WorkflowSettings);
    };
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map