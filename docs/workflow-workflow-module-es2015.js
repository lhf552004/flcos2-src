(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workflow-workflow-module"],{

/***/ "./src/app/workflow/route-resolvers/workflow-resolver.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/workflow/route-resolvers/workflow-resolver.service.ts ***!
  \***********************************************************************/
/*! exports provided: WorkflowResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowResolverService", function() { return WorkflowResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_workflow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/workflow.service */ "./src/app/workflow/shared/workflow.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class WorkflowResolverService {
    constructor(workflowService, router) {
        this.workflowService = workflowService;
        this.router = router;
    }
    resolve(route, state) {
        const id = route.paramMap.get('workflowId');
        return this.workflowService.getWorkflow(id);
    }
}
WorkflowResolverService.ɵfac = function WorkflowResolverService_Factory(t) { return new (t || WorkflowResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_workflow_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
WorkflowResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WorkflowResolverService, factory: WorkflowResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkflowResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_workflow_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/workflow/route-resolvers/workflows-resolver.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/workflow/route-resolvers/workflows-resolver.service.ts ***!
  \************************************************************************/
/*! exports provided: WorkflowsResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowsResolverService", function() { return WorkflowsResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_workflow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/workflow.service */ "./src/app/workflow/shared/workflow.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class WorkflowsResolverService {
    constructor(workflowService, router) {
        this.workflowService = workflowService;
        this.router = router;
    }
    resolve(route, state) {
        return this.workflowService.getWorkflows();
    }
}
WorkflowsResolverService.ɵfac = function WorkflowsResolverService_Factory(t) { return new (t || WorkflowsResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_workflow_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
WorkflowsResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WorkflowsResolverService, factory: WorkflowsResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkflowsResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_workflow_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/workflow/shared/workflow.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/workflow/shared/workflow.service.ts ***!
  \*****************************************************/
/*! exports provided: WorkflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowService", function() { return WorkflowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class WorkflowService {
    constructor() {
        this.workflows = [{
                id: '1',
                name: 'standard run',
                vertexes: [
                    {
                        id: '1',
                        name: '入涂装',
                        width: 200,
                        height: 80,
                        x: 0,
                        y: 0,
                        style: ''
                    },
                    {
                        id: '2',
                        name: 'PVC线',
                        width: 200,
                        height: 80,
                        x: 0,
                        y: 0,
                        style: ''
                    },
                ],
                edges: [
                    {
                        id: '1',
                        name: '',
                        source: '1',
                        target: '2',
                        style: ''
                    }
                ]
            }];
    }
    getWorkflows() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.workflows);
    }
    getWorkflow(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.workflows.find(w => w.id === id));
    }
}
WorkflowService.ɵfac = function WorkflowService_Factory(t) { return new (t || WorkflowService)(); };
WorkflowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WorkflowService, factory: WorkflowService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkflowService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/workflow/work-flow-designer/work-flow-designer.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/workflow/work-flow-designer/work-flow-designer.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WorkFlowDesignerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkFlowDesignerComponent", function() { return WorkFlowDesignerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_workflow_models_workflow_settings_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/workflow/models/workflow-settings.model */ "./src/app/shared/workflow/models/workflow-settings.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");










const _c0 = ["graphContainer"];
function WorkFlowDesignerComponent_fa_icon_22_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkFlowDesignerComponent_fa_icon_22_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.hideScopeOfWork = !ctx_r5.hideScopeOfWork; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faCaretDown)("fixedWidth", true);
} }
function WorkFlowDesignerComponent_fa_icon_23_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkFlowDesignerComponent_fa_icon_23_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.hideScopeOfWork = !ctx_r7.hideScopeOfWork; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faCaretUp)("fixedWidth", true);
} }
function WorkFlowDesignerComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkFlowDesignerComponent_ng_container_24_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.addRectangle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "crop_16_9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
// declare var mxConstants: any;
// declare var mxEvent: any;
// declare var mxGeometry: any;
// declare var mxGraphView: any;
// declare var mxMouseEvent: any;
// declare var mxRectangle: any;
// declare var mxUtils: any;
// declare var mxPoint: any;
class WorkFlowDesignerComponent {
    constructor(route) {
        this.route = route;
        this.faExpandArrowsAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faExpandArrowsAlt"];
        this.faCaretUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCaretUp"];
        this.faCaretDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCaretDown"];
        this.hideScopeOfWork = false;
        // Used for cleaning subscription
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.workflowSettings = new src_app_shared_workflow_models_workflow_settings_model__WEBPACK_IMPORTED_MODULE_1__["WorkflowSettings"]();
        this.workflowSettings.isEdited = true;
        this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe)).subscribe((data) => {
            this.workflow = data.workflow;
        });
    }
    ngAfterViewInit() {
        const root = new mxCell();
        root.insert(new mxCell());
        this.model = new mxGraphModel(root);
        // @ts-ignore
        this.graph = new mxGraph(this.graphContainer.nativeElement, this.model);
        this.graph.setConnectable(true);
        const parent = this.graph.getDefaultParent();
        try {
            this.model.beginUpdate();
            const vertexes = new Map();
            this.workflow.vertexes.forEach(vertexData => {
                const vertex = this.graph.insertVertex(parent, vertexData.id, vertexData.name, vertexData.x, vertexData.y, vertexData.width, vertexData.height);
                vertexes.set(vertexData.id, vertex);
            });
            this.workflow.edges.forEach(edgeData => {
                const source = vertexes.has(edgeData.source) ? vertexes.get(edgeData.source) : null;
                const target = vertexes.has(edgeData.target) ? vertexes.get(edgeData.target) : null;
                this.graph.insertEdge(parent, edgeData.id, edgeData.name, source, target);
            });
        }
        finally {
            this.model.endUpdate();
            new mxHierarchicalLayout(this.graph).execute(this.graph.getDefaultParent());
        }
    }
    addRectangle() {
        const parent = this.graph.getDefaultParent();
        try {
            this.model.beginUpdate();
            const vertex = this.graph.insertVertex(parent, '222', 'Test', 100, 100, 200, 80);
        }
        finally {
            this.model.endUpdate();
        }
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
WorkFlowDesignerComponent.ɵfac = function WorkFlowDesignerComponent_Factory(t) { return new (t || WorkFlowDesignerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
WorkFlowDesignerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkFlowDesignerComponent, selectors: [["emes-work-flow-designer"]], viewQuery: function WorkFlowDesignerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.graphContainer = _t.first);
    } }, decls: 29, vars: 3, consts: [[1, "container-fluid", "d-flex", "flex-column", "flex-fill"], [1, "row", "justify-content-between", "align-items-center", "pt-3", "pb-2", "mb-3", "border-bottom"], [1, "col"], [1, "col-auto"], [1, "btn-toolbar", "mb-2", "mb-md-0"], [1, "btn-group", "mr-2"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary", "dropdown-toggle"], ["data-feather", "calendar"], [1, "row", "flex-fill"], [1, "col", "geSidebarContainer"], ["sidebarGraphContainer", ""], [1, "row", "border-bottom", "justify-content-between", "no-args", "no-gutters", "mt-3"], [1, "col-auto", "font-weight-bold"], ["class", "gray-text pointer pr-0", 3, "icon", "fixedWidth", "click", 4, "ngIf"], [4, "ngIf"], [1, "col", "geDiagramContainer", "geDiagramBackdrop"], ["id", "graphContainer"], ["graphContainer", ""], [1, "gray-text", "pointer", "pr-0", 3, "icon", "fixedWidth", "click"], [1, "row", "mt-3"], [1, "col", "font-weight-bold"], [3, "click"], [1, "pointer", 2, "font-size", "100px"]], template: function WorkFlowDesignerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "YZ Mod. A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " This week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Normal Process flow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, WorkFlowDesignerComponent_fa_icon_22_Template, 1, 2, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, WorkFlowDesignerComponent_fa_icon_23_Template, 1, 2, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, WorkFlowDesignerComponent_ng_container_24_Template, 6, 0, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hideScopeOfWork);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideScopeOfWork);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideScopeOfWork);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmtmbG93L3dvcmstZmxvdy1kZXNpZ25lci93b3JrLWZsb3ctZGVzaWduZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkFlowDesignerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-work-flow-designer',
                templateUrl: './work-flow-designer.component.html',
                styleUrls: ['./work-flow-designer.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, { graphContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['graphContainer']
        }] }); })();


/***/ }),

/***/ "./src/app/workflow/workflow-default/workflow-default.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/workflow/workflow-default/workflow-default.component.ts ***!
  \*************************************************************************/
/*! exports provided: WorkflowDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowDefaultComponent", function() { return WorkflowDefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WorkflowDefaultComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorkflowDefaultComponent.ɵfac = function WorkflowDefaultComponent_Factory(t) { return new (t || WorkflowDefaultComponent)(); };
WorkflowDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkflowDefaultComponent, selectors: [["emes-workflow-default"]], decls: 2, vars: 0, template: function WorkflowDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "workflow-default works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmtmbG93L3dvcmtmbG93LWRlZmF1bHQvd29ya2Zsb3ctZGVmYXVsdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkflowDefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-workflow-default',
                templateUrl: './workflow-default.component.html',
                styleUrls: ['./workflow-default.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/workflow/workflow-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/workflow/workflow-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: WorkflowRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowRoutingModule", function() { return WorkflowRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _work_flow_designer_work_flow_designer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work-flow-designer/work-flow-designer.component */ "./src/app/workflow/work-flow-designer/work-flow-designer.component.ts");
/* harmony import */ var _workflows_workflows_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workflows/workflows.component */ "./src/app/workflow/workflows/workflows.component.ts");
/* harmony import */ var _route_resolvers_workflows_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route-resolvers/workflows-resolver.service */ "./src/app/workflow/route-resolvers/workflows-resolver.service.ts");
/* harmony import */ var _route_resolvers_workflow_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route-resolvers/workflow-resolver.service */ "./src/app/workflow/route-resolvers/workflow-resolver.service.ts");
/* harmony import */ var _workflow_default_workflow_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workflow-default/workflow-default.component */ "./src/app/workflow/workflow-default/workflow-default.component.ts");









const routes = [
    { path: '', component: _workflows_workflows_component__WEBPACK_IMPORTED_MODULE_3__["WorkflowsComponent"], resolve: { workflows: _route_resolvers_workflows_resolver_service__WEBPACK_IMPORTED_MODULE_4__["WorkflowsResolverService"] }, children: [
            { path: ':workflowId', resolve: { workflow: _route_resolvers_workflow_resolver_service__WEBPACK_IMPORTED_MODULE_5__["WorkflowResolverService"] }, component: _work_flow_designer_work_flow_designer_component__WEBPACK_IMPORTED_MODULE_2__["WorkFlowDesignerComponent"] },
            { path: '', component: _workflow_default_workflow_default_component__WEBPACK_IMPORTED_MODULE_6__["WorkflowDefaultComponent"] }
        ] },
];
class WorkflowRoutingModule {
}
WorkflowRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WorkflowRoutingModule });
WorkflowRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WorkflowRoutingModule_Factory(t) { return new (t || WorkflowRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorkflowRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkflowRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/workflow/workflow.module.ts":
/*!*********************************************!*\
  !*** ./src/app/workflow/workflow.module.ts ***!
  \*********************************************/
/*! exports provided: WorkflowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowModule", function() { return WorkflowModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _workflow_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workflow-routing.module */ "./src/app/workflow/workflow-routing.module.ts");
/* harmony import */ var _work_flow_designer_work_flow_designer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work-flow-designer/work-flow-designer.component */ "./src/app/workflow/work-flow-designer/work-flow-designer.component.ts");
/* harmony import */ var _workflows_workflows_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workflows/workflows.component */ "./src/app/workflow/workflows/workflows.component.ts");
/* harmony import */ var _workflow_default_workflow_default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workflow-default/workflow-default.component */ "./src/app/workflow/workflow-default/workflow-default.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");








class WorkflowModule {
}
WorkflowModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WorkflowModule });
WorkflowModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WorkflowModule_Factory(t) { return new (t || WorkflowModule)(); }, imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _workflow_routing_module__WEBPACK_IMPORTED_MODULE_2__["WorkflowRoutingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorkflowModule, { declarations: [_work_flow_designer_work_flow_designer_component__WEBPACK_IMPORTED_MODULE_3__["WorkFlowDesignerComponent"], _workflows_workflows_component__WEBPACK_IMPORTED_MODULE_4__["WorkflowsComponent"], _workflow_default_workflow_default_component__WEBPACK_IMPORTED_MODULE_5__["WorkflowDefaultComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        _workflow_routing_module__WEBPACK_IMPORTED_MODULE_2__["WorkflowRoutingModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkflowModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_work_flow_designer_work_flow_designer_component__WEBPACK_IMPORTED_MODULE_3__["WorkFlowDesignerComponent"], _workflows_workflows_component__WEBPACK_IMPORTED_MODULE_4__["WorkflowsComponent"], _workflow_default_workflow_default_component__WEBPACK_IMPORTED_MODULE_5__["WorkflowDefaultComponent"]],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                    _workflow_routing_module__WEBPACK_IMPORTED_MODULE_2__["WorkflowRoutingModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/workflow/workflows/workflows.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/workflow/workflows/workflows.component.ts ***!
  \***********************************************************/
/*! exports provided: WorkflowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowsComponent", function() { return WorkflowsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/side-bar/side-bar.component */ "./src/app/shared/side-bar/side-bar.component.ts");








class WorkflowsComponent {
    constructor(route) {
        this.route = route;
        // Icons
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSearch"];
        // Holds filter text
        this.filterSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // Used for cleaning subscription
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe)).subscribe((data) => {
            this.workflows = data.workflows;
            this.menuItems = data.workflows.map(w => ({
                id: w.id,
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faProductHunt"],
                label: w.name,
                route: [w.id],
                children: []
            }));
        });
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
WorkflowsComponent.ɵfac = function WorkflowsComponent_Factory(t) { return new (t || WorkflowsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
WorkflowsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkflowsComponent, selectors: [["emes-workflows"]], decls: 5, vars: 2, consts: [[1, "container-fluid", "h-100", "px-0"], [1, "row", "h-100", "no-gutters"], [1, "col-md-3", "col-lg-2", "d-none", "d-md-block", "bg-light", 3, "header", "menuItems"], [1, "col", "d-flex", "flex-column"]], template: function WorkflowsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", "Workflow")("menuItems", ctx.menuItems);
    } }, directives: [_shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_6__["SideBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmtmbG93L3dvcmtmbG93cy93b3JrZmxvd3MuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkflowsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'emes-workflows',
                templateUrl: './workflows.component.html',
                styleUrls: ['./workflows.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=workflow-workflow-module-es2015.js.map