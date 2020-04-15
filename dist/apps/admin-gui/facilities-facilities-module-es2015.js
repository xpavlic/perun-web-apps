(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["facilities-facilities-module"],{

/***/ "../../libs/perun/facility-services-config/src/index.ts":
/*!*****************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/libs/perun/facility-services-config/src/index.ts ***!
  \*****************************************************************************************/
/*! exports provided: PerunFacilityServicesConfigModule, ServiceConfiguratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_perun_facility_services_config_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/perun-facility-services-config.module */ "../../libs/perun/facility-services-config/src/lib/perun-facility-services-config.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerunFacilityServicesConfigModule", function() { return _lib_perun_facility_services_config_module__WEBPACK_IMPORTED_MODULE_0__["PerunFacilityServicesConfigModule"]; });

/* harmony import */ var _lib_service_configurator_service_configurator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/service-configurator/service-configurator.component */ "../../libs/perun/facility-services-config/src/lib/service-configurator/service-configurator.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceConfiguratorComponent", function() { return _lib_service_configurator_service_configurator_component__WEBPACK_IMPORTED_MODULE_1__["ServiceConfiguratorComponent"]; });





/***/ }),

/***/ "../../libs/perun/facility-services-config/src/lib/perun-facility-services-config.module.ts":
/*!*****************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/libs/perun/facility-services-config/src/lib/perun-facility-services-config.module.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: PerunFacilityServicesConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerunFacilityServicesConfigModule", function() { return PerunFacilityServicesConfigModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _service_configurator_service_configurator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service-configurator/service-configurator.component */ "../../libs/perun/facility-services-config/src/lib/service-configurator/service-configurator.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @perun-web-apps/perun/components */ "../../libs/perun/components/src/index.ts");






class PerunFacilityServicesConfigModule {
}
PerunFacilityServicesConfigModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PerunFacilityServicesConfigModule });
PerunFacilityServicesConfigModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PerunFacilityServicesConfigModule_Factory(t) { return new (t || PerunFacilityServicesConfigModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_4__["PerunSharedComponentsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PerunFacilityServicesConfigModule, { declarations: [_service_configurator_service_configurator_component__WEBPACK_IMPORTED_MODULE_2__["ServiceConfiguratorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_4__["PerunSharedComponentsModule"]], exports: [_service_configurator_service_configurator_component__WEBPACK_IMPORTED_MODULE_2__["ServiceConfiguratorComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerunFacilityServicesConfigModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_4__["PerunSharedComponentsModule"]],
                declarations: [_service_configurator_service_configurator_component__WEBPACK_IMPORTED_MODULE_2__["ServiceConfiguratorComponent"]],
                exports: [_service_configurator_service_configurator_component__WEBPACK_IMPORTED_MODULE_2__["ServiceConfiguratorComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "../../libs/perun/facility-services-config/src/lib/service-configurator/service-configurator.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/libs/perun/facility-services-config/src/lib/service-configurator/service-configurator.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: ServiceConfiguratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceConfiguratorComponent", function() { return ServiceConfiguratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @perun-web-apps/config/table-config */ "../../libs/config/table-config/src/index.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_src_lib_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/src/lib/attributes-list/attributes-list.component */ "../../libs/perun/components/src/lib/attributes-list/attributes-list.component.ts");









function ServiceConfiguratorComponent_perun_web_apps_attributes_list_3_Template(rf, ctx) { if (rf & 1) {
    const _r1589 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-attributes-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ServiceConfiguratorComponent_perun_web_apps_attributes_list_3_Template_perun_web_apps_attributes_list_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1589); const ctx_r1588 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1588.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1585 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r1585.pageSize)("attributes", ctx_r1585.facilityAttributes);
} }
function ServiceConfiguratorComponent_mat_tab_4_perun_web_apps_attributes_list_1_Template(rf, ctx) { if (rf & 1) {
    const _r1592 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-attributes-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ServiceConfiguratorComponent_mat_tab_4_perun_web_apps_attributes_list_1_Template_perun_web_apps_attributes_list_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1592); const ctx_r1591 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r1591.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1590 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r1590.pageSize)("attributes", ctx_r1590.resourceAttributes);
} }
function ServiceConfiguratorComponent_mat_tab_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ServiceConfiguratorComponent_mat_tab_4_perun_web_apps_attributes_list_1_Template, 1, 2, "perun-web-apps-attributes-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1586 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r1586.resource.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r1586.resourceAttributes);
} }
function ServiceConfiguratorComponent_mat_tab_5_perun_web_apps_attributes_list_1_Template(rf, ctx) { if (rf & 1) {
    const _r1595 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-attributes-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ServiceConfiguratorComponent_mat_tab_5_perun_web_apps_attributes_list_1_Template_perun_web_apps_attributes_list_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1595); const ctx_r1594 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r1594.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1593 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r1593.pageSize)("attributes", ctx_r1593.groupAttributes);
} }
function ServiceConfiguratorComponent_mat_tab_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ServiceConfiguratorComponent_mat_tab_5_perun_web_apps_attributes_list_1_Template, 1, 2, "perun-web-apps-attributes-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1587 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r1587.group.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r1587.groupAttributes);
} }
class ServiceConfiguratorComponent {
    constructor(attributesManager, tableConfigService) {
        this.attributesManager = attributesManager;
        this.tableConfigService = tableConfigService;
        this.showTab = 0;
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_2__["TABLE_ATTRIBUTES_SETTINGS"];
    }
    ngOnInit() {
        this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
        this.loadFacilityAttributes();
    }
    ngOnChanges(changes) {
        if (changes['service']) {
            this.reloadAll();
            return;
        }
        if (changes['resource']) {
            if (changes['resource'].currentValue === undefined) {
                this.resourceAttributes = undefined;
                this.showTab = 0;
            }
            else {
                this.showTab = 1;
                this.loadResourceAttributes();
            }
        }
        else if (changes['group']) {
            if (changes['group'].currentValue === undefined) {
                this.groupAttributes = undefined;
                this.showTab = 1;
            }
            else {
                this.showTab = 2;
                this.attributesManager.getGroupAttributes(this.group.id).subscribe(attrs => this.groupAttributes = attrs);
            }
        }
    }
    loadResourceAttributes() {
        if (this.service === 'NOT_SELECTED') {
            this.attributesManager
                .getResourceAttributes(this.resource.id)
                .subscribe(attrs => this.resourceAttributes = attrs);
        }
        else if (this.service === 'ALL') {
            this.attributesManager
                .getRequiredAttributesResource(this.resource.id)
                .subscribe(attrs => this.resourceAttributes = attrs);
        }
        else {
            this.attributesManager
                .getRequiredAttributesResourceService(this.service.id, this.resource.id)
                .subscribe(attrs => this.resourceAttributes = attrs);
        }
    }
    loadFacilityAttributes() {
        if (this.service === 'NOT_SELECTED') {
            this.attributesManager
                .getFacilityAttributes(this.facility.id)
                .subscribe(attrs => this.facilityAttributes = attrs);
        }
        else if (this.service === 'ALL') {
            this.attributesManager
                .getRequiredAttributesFacility(this.facility.id)
                .subscribe(attrs => this.facilityAttributes = attrs);
        }
        else {
            this.attributesManager
                .getRequiredAttributesFacilityService(this.service.id, this.facility.id)
                .subscribe(attrs => this.facilityAttributes = attrs);
        }
    }
    reloadAll() {
        this.loadFacilityAttributes();
        if (this.resource !== undefined) {
            this.loadResourceAttributes();
        }
    }
    pageChanged(event) {
        this.pageSize = event.pageSize;
        this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
    }
}
ServiceConfiguratorComponent.ɵfac = function ServiceConfiguratorComponent_Factory(t) { return new (t || ServiceConfiguratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_2__["TableConfigService"])); };
ServiceConfiguratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiceConfiguratorComponent, selectors: [["perun-web-apps-service-configurator"]], inputs: { facility: "facility", service: "service", resource: "resource", group: "group" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 6, consts: [[2, "min-height", "500px"], [3, "dynamicHeight", "selectedIndex", "selectedIndexChange"], [3, "label"], [3, "pageSize", "attributes", "page", 4, "ngIf"], [3, "label", 4, "ngIf"], [3, "pageSize", "attributes", "page"]], template: function ServiceConfiguratorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function ServiceConfiguratorComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) { return ctx.showTab = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ServiceConfiguratorComponent_perun_web_apps_attributes_list_3_Template, 1, 2, "perun-web-apps-attributes-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ServiceConfiguratorComponent_mat_tab_4_Template, 2, 2, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ServiceConfiguratorComponent_mat_tab_5_Template, 2, 2, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dynamicHeight", true)("selectedIndex", ctx.showTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx.facility.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.facilityAttributes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.resource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.group);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_src_lib_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_5__["AttributesListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3BlcnVuL2ZhY2lsaXR5LXNlcnZpY2VzLWNvbmZpZy9zcmMvbGliL3NlcnZpY2UtY29uZmlndXJhdG9yL3NlcnZpY2UtY29uZmlndXJhdG9yLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceConfiguratorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'perun-web-apps-service-configurator',
                templateUrl: './service-configurator.component.html',
                styleUrls: ['./service-configurator.component.scss']
            }]
    }], function () { return [{ type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__["AttributesManagerService"] }, { type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_2__["TableConfigService"] }]; }, { facility: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], service: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/facilities/components/facility-select-table/facility-select-table.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/facilities/components/facility-select-table/facility-select-table.component.ts ***!
  \************************************************************************************************/
/*! exports provided: FacilitySelectTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitySelectTableComponent", function() { return FacilitySelectTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @perun-web-apps/perun/utils */ "../../libs/perun/utils/src/index.ts");
/* harmony import */ var _libs_perun_components_src_lib_table_options_table_options_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../libs/perun/components/src/lib/table-options/table-options.component */ "../../libs/perun/components/src/lib/table-options/table-options.component.ts");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mat-table-exporter */ "../../node_modules/mat-table-exporter/__ivy_ngcc__/fesm2015/mat-table-exporter.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _libs_ui_alerts_src_lib_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../libs/ui/alerts/src/lib/alert/alert.component */ "../../libs/ui/alerts/src/lib/alert/alert.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_pipes_technical_owners_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/pipes/technical-owners.pipe */ "./src/app/shared/pipes/technical-owners.pipe.ts");



















function FacilitySelectTableComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FACILITY_MANAGEMENT.TABLE.ID"));
} }
function FacilitySelectTableComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facility_r1628 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](facility_r1628.id);
} }
function FacilitySelectTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 21);
} }
function FacilitySelectTableComponent_td_10_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " visibility ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "VO_MANAGEMENT.TABLE.RECENT"));
} }
function FacilitySelectTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FacilitySelectTableComponent_td_10_mat_icon_1_Template, 3, 3, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facility_r1629 = ctx.$implicit;
    const ctx_r1617 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1617.recentIds.indexOf(facility_r1629.id) > 0 - 1);
} }
function FacilitySelectTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FACILITY_MANAGEMENT.TABLE.NAME"));
} }
function FacilitySelectTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facility_r1631 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](facility_r1631.name);
} }
function FacilitySelectTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FACILITY_MANAGEMENT.TABLE.DESCRIPTION"));
} }
function FacilitySelectTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facility_r1632 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](facility_r1632.description);
} }
function FacilitySelectTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FACILITY_MANAGEMENT.TABLE.TECHNICAL_OWNERS"));
} }
function FacilitySelectTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "technicalOwners");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facility_r1633 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, facility_r1633.facilityOwners));
} }
function FacilitySelectTableComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
const _c0 = function (a1) { return ["/facilities", a1]; };
function FacilitySelectTableComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 26);
} if (rf & 2) {
    const facility_r1634 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, facility_r1634.id));
} }
function FacilitySelectTableComponent_mat_spinner_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 27);
} }
function FacilitySelectTableComponent_app_alert_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-alert", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "SHARED_LIB.UI.ALERTS.NO_FILTER_RESULTS_ALERT"), "\n");
} }
class FacilitySelectTableComponent {
    constructor() {
        this.pageSize = 10;
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.exporting = false;
        this.displayedColumns = ['id', 'recent', 'name', 'description', 'technicalOwners'];
        this.pageSizeOptions = _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_4__["TABLE_ITEMS_COUNT_OPTIONS"];
    }
    set matSort(ms) {
        this.sort = ms;
        this.setDataSource();
    }
    ngOnChanges(changes) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.facilities);
        this.setDataSource();
        this.dataSource.filter = this.filterValue;
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    setDataSource() {
        if (!!this.dataSource) {
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.dataSource.filterPredicate = ((data, filter) => {
                const lowerCaseFilter = filter.trim().toLowerCase();
                if (data.name.trim().toLowerCase().indexOf(lowerCaseFilter) !== -1) {
                    return true;
                }
                if (data.description !== null && data.description.trim().toLowerCase().indexOf(lowerCaseFilter) !== -1) {
                    return true;
                }
                if (data.id.toString(10).startsWith(filter)) {
                    return true;
                }
                return Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_4__["parseTechnicalOwnersNames"])(data.facilityOwners).toLowerCase().indexOf(lowerCaseFilter) !== -1;
            });
        }
    }
    pageChanged(event) {
        this.page.emit(event);
    }
}
FacilitySelectTableComponent.ɵfac = function FacilitySelectTableComponent_Factory(t) { return new (t || FacilitySelectTableComponent)(); };
FacilitySelectTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FacilitySelectTableComponent, selectors: [["app-facility-select-table"]], viewQuery: function FacilitySelectTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matSort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { facilities: "facilities", recentIds: "recentIds", filterValue: "filterValue", pageSize: "pageSize" }, outputs: { page: "page" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 25, vars: 12, consts: [[1, "card", "mt-3", 3, "hidden"], [1, "card-body"], [3, "exporter", "end", "start"], ["mat-table", "", "matTableExporter", "", "matSort", "", "matSortDirection", "asc", "matSortDisableClear", "", 1, "w-100", 3, "dataSource"], ["exporter", "matTableExporter"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "static-column-size", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "recent"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "description"], ["matColumnDef", "technicalOwners"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "dark-hover-list-item", 3, "routerLink", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageSize", "pageSizeOptions", "page"], ["class", "ml-auto mr-auto", 4, "ngIf"], ["color", "warn", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "static-column-size"], ["mat-header-cell", ""], ["mat-cell", ""], ["class", "align-bottom", 3, "matTooltip", 4, "ngIf"], [1, "align-bottom", 3, "matTooltip"], ["mat-header-row", ""], ["mat-row", "", 1, "dark-hover-list-item", 3, "routerLink"], [1, "ml-auto", "mr-auto"], ["color", "warn"]], template: function FacilitySelectTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "perun-web-apps-table-options", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("end", function FacilitySelectTableComponent_Template_perun_web_apps_table_options_end_2_listener() { return ctx.exporting = false; })("start", function FacilitySelectTableComponent_Template_perun_web_apps_table_options_start_2_listener() { return ctx.exporting = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FacilitySelectTableComponent_th_6_Template, 3, 3, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FacilitySelectTableComponent_td_7_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FacilitySelectTableComponent_th_9_Template, 1, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FacilitySelectTableComponent_td_10_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FacilitySelectTableComponent_th_12_Template, 3, 3, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FacilitySelectTableComponent_td_13_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FacilitySelectTableComponent_th_15_Template, 3, 3, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FacilitySelectTableComponent_td_16_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FacilitySelectTableComponent_th_18_Template, 3, 3, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FacilitySelectTableComponent_td_19_Template, 3, 3, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FacilitySelectTableComponent_tr_20_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FacilitySelectTableComponent_tr_21_Template, 1, 3, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-paginator", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function FacilitySelectTableComponent_Template_mat_paginator_page_22_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FacilitySelectTableComponent_mat_spinner_23_Template, 1, 0, "mat-spinner", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FacilitySelectTableComponent_app_alert_24_Template, 3, 3, "app-alert", 18);
    } if (rf & 2) {
        const _r1613 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide-table", ctx.exporting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.dataSource.filteredData.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exporter", _r1613);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.facilities.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exporting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.filteredData.length === 0);
    } }, directives: [_libs_perun_components_src_lib_table_options_table_options_component__WEBPACK_IMPORTED_MODULE_5__["TableOptionsComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], mat_table_exporter__WEBPACK_IMPORTED_MODULE_6__["MatTableExporterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"], _libs_ui_alerts_src_lib_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], _shared_pipes_technical_owners_pipe__WEBPACK_IMPORTED_MODULE_14__["TechnicalOwnersPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvY29tcG9uZW50cy9mYWNpbGl0eS1zZWxlY3QtdGFibGUvZmFjaWxpdHktc2VsZWN0LXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitySelectTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-facility-select-table',
                templateUrl: './facility-select-table.component.html',
                styleUrls: ['./facility-select-table.component.scss']
            }]
    }], function () { return []; }, { facilities: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], recentIds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], filterValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], matSort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "./src/app/facilities/facilities-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/facilities/facilities-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FacilitiesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitiesRoutingModule", function() { return FacilitiesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_facility_select_page_facility_select_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/facility-select-page/facility-select-page.component */ "./src/app/facilities/pages/facility-select-page/facility-select-page.component.ts");
/* harmony import */ var _pages_facility_detail_page_facility_detail_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/facility-detail-page/facility-detail-page.component */ "./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.ts");
/* harmony import */ var _pages_facility_detail_page_facility_overview_facility_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/facility-detail-page/facility-overview/facility-overview.component */ "./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.ts");
/* harmony import */ var _pages_facility_detail_page_facility_resources_facility_resources_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/facility-detail-page/facility-resources/facility-resources.component */ "./src/app/facilities/pages/facility-detail-page/facility-resources/facility-resources.component.ts");
/* harmony import */ var _pages_facility_detail_page_facility_allowed_groups_facility_allowed_groups_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/facility-detail-page/facility-allowed-groups/facility-allowed-groups.component */ "./src/app/facilities/pages/facility-detail-page/facility-allowed-groups/facility-allowed-groups.component.ts");
/* harmony import */ var _pages_resource_detail_page_resource_detail_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/resource-detail-page/resource-detail-page.component */ "./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.ts");
/* harmony import */ var _pages_resource_detail_page_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/resource-detail-page/resource-overview/resource-overview.component */ "./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.ts");
/* harmony import */ var _pages_facility_detail_page_facility_settings_facility_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/facility-detail-page/facility-settings/facility-settings.component */ "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.ts");
/* harmony import */ var _pages_facility_detail_page_facility_settings_facility_settings_overview_facility_settings_overview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component */ "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.ts");
/* harmony import */ var _pages_facility_detail_page_facility_settings_facility_settings_attributes_facility_settings_attributes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component */ "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.ts");
/* harmony import */ var _pages_resource_detail_page_resource_settings_resource_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/resource-detail-page/resource-settings/resource-settings.component */ "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.ts");
/* harmony import */ var _pages_resource_detail_page_resource_settings_resource_settings_overview_resource_settings_overview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component */ "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.ts");
/* harmony import */ var _pages_resource_detail_page_resource_settings_resource_settings_attributes_resource_settings_attributes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component */ "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.ts");
/* harmony import */ var _pages_resource_detail_page_resource_groups_resource_groups_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/resource-detail-page/resource-groups/resource-groups.component */ "./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.ts");
/* harmony import */ var _pages_facility_detail_page_facility_service_config_facility_service_config_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/facility-detail-page/facility-service-config/facility-service-config.component */ "./src/app/facilities/pages/facility-detail-page/facility-service-config/facility-service-config.component.ts");
/* harmony import */ var _pages_facility_detail_page_facility_settings_facility_settings_managers_facility_settings_managers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/facility-detail-page/facility-settings/facility-settings-managers/facility-settings-managers.component */ "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-managers/facility-settings-managers.component.ts");




















const routes = [
    {
        path: '',
        component: _pages_facility_select_page_facility_select_page_component__WEBPACK_IMPORTED_MODULE_2__["FacilitySelectPageComponent"]
    },
    {
        path: ':facilityId',
        component: _pages_facility_detail_page_facility_detail_page_component__WEBPACK_IMPORTED_MODULE_3__["FacilityDetailPageComponent"],
        children: [
            {
                path: '',
                component: _pages_facility_detail_page_facility_overview_facility_overview_component__WEBPACK_IMPORTED_MODULE_4__["FacilityOverviewComponent"],
                data: { animation: 'FacilityOverviewPage' }
            },
            {
                path: 'resources',
                component: _pages_facility_detail_page_facility_resources_facility_resources_component__WEBPACK_IMPORTED_MODULE_5__["FacilityResourcesComponent"],
                data: { animation: 'FacilityResourcesPage' }
            },
            {
                path: 'allowed-groups',
                component: _pages_facility_detail_page_facility_allowed_groups_facility_allowed_groups_component__WEBPACK_IMPORTED_MODULE_6__["FacilityAllowedGroupsComponent"],
                data: { animation: 'FacilityAllowedGroupsPage' }
            },
            {
                path: 'service-config',
                component: _pages_facility_detail_page_facility_service_config_facility_service_config_component__WEBPACK_IMPORTED_MODULE_16__["FacilityServiceConfigComponent"],
                data: { animation: 'FacilityServiceConfigPage' }
            },
            {
                path: 'settings',
                component: _pages_facility_detail_page_facility_settings_facility_settings_component__WEBPACK_IMPORTED_MODULE_9__["FacilitySettingsComponent"],
                children: [
                    {
                        path: '',
                        component: _pages_facility_detail_page_facility_settings_facility_settings_overview_facility_settings_overview_component__WEBPACK_IMPORTED_MODULE_10__["FacilitySettingsOverviewComponent"],
                        data: { animation: 'FacilitySettingsOverviewPage' }
                    },
                    {
                        path: 'attributes',
                        component: _pages_facility_detail_page_facility_settings_facility_settings_attributes_facility_settings_attributes_component__WEBPACK_IMPORTED_MODULE_11__["FacilitySettingsAttributesComponent"],
                        data: { animation: 'FacilitySettingsAttributesPage' }
                    },
                    {
                        path: 'managers',
                        component: _pages_facility_detail_page_facility_settings_facility_settings_managers_facility_settings_managers_component__WEBPACK_IMPORTED_MODULE_17__["FacilitySettingsManagersComponent"],
                        data: { animation: 'FacilitySettingsManagersPage' }
                    }
                ]
            }
        ]
    },
    {
        path: ':facilityId/resources/:resourceId',
        component: _pages_resource_detail_page_resource_detail_page_component__WEBPACK_IMPORTED_MODULE_7__["ResourceDetailPageComponent"],
        children: [
            {
                path: '',
                component: _pages_resource_detail_page_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_8__["ResourceOverviewComponent"],
                data: { animation: 'ResourceOverviewPage' }
            },
            {
                path: 'groups',
                component: _pages_resource_detail_page_resource_groups_resource_groups_component__WEBPACK_IMPORTED_MODULE_15__["ResourceGroupsComponent"],
                data: { animation: 'ResourceGroupsComponent' }
            },
            {
                path: 'settings',
                component: _pages_resource_detail_page_resource_settings_resource_settings_component__WEBPACK_IMPORTED_MODULE_12__["ResourceSettingsComponent"],
                children: [
                    {
                        path: '',
                        component: _pages_resource_detail_page_resource_settings_resource_settings_overview_resource_settings_overview_component__WEBPACK_IMPORTED_MODULE_13__["ResourceSettingsOverviewComponent"],
                        data: { animation: 'ResourceSettingsOverviewPage' }
                    },
                    {
                        path: 'attributes',
                        component: _pages_resource_detail_page_resource_settings_resource_settings_attributes_resource_settings_attributes_component__WEBPACK_IMPORTED_MODULE_14__["ResourceSettingsAttributesComponent"],
                        data: { animation: 'ResourceSettingsAttributesPage' }
                    }
                ]
            },
        ]
    }
];
class FacilitiesRoutingModule {
}
FacilitiesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FacilitiesRoutingModule });
FacilitiesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FacilitiesRoutingModule_Factory(t) { return new (t || FacilitiesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FacilitiesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitiesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/facilities/facilities.module.ts":
/*!*************************************************!*\
  !*** ./src/app/facilities/facilities.module.ts ***!
  \*************************************************/
/*! exports provided: FacilitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitiesModule", function() { return FacilitiesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _facilities_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./facilities-routing.module */ "./src/app/facilities/facilities-routing.module.ts");
/* harmony import */ var _pages_facility_select_page_facility_select_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/facility-select-page/facility-select-page.component */ "./src/app/facilities/pages/facility-select-page/facility-select-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_facility_select_table_facility_select_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/facility-select-table/facility-select-table.component */ "./src/app/facilities/components/facility-select-table/facility-select-table.component.ts");
/* harmony import */ var _pages_facility_detail_page_facility_detail_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/facility-detail-page/facility-detail-page.component */ "./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.ts");
/* harmony import */ var _pages_facility_detail_page_facility_overview_facility_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/facility-detail-page/facility-overview/facility-overview.component */ "./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.ts");
/* harmony import */ var _pages_facility_detail_page_facility_resources_facility_resources_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/facility-detail-page/facility-resources/facility-resources.component */ "./src/app/facilities/pages/facility-detail-page/facility-resources/facility-resources.component.ts");
/* harmony import */ var _pages_facility_detail_page_facility_allowed_groups_facility_allowed_groups_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/facility-detail-page/facility-allowed-groups/facility-allowed-groups.component */ "./src/app/facilities/pages/facility-detail-page/facility-allowed-groups/facility-allowed-groups.component.ts");
/* harmony import */ var _pages_resource_detail_page_resource_detail_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/resource-detail-page/resource-detail-page.component */ "./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.ts");
/* harmony import */ var _pages_resource_detail_page_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/resource-detail-page/resource-overview/resource-overview.component */ "./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.ts");
/* harmony import */ var _pages_facility_detail_page_facility_settings_facility_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/facility-detail-page/facility-settings/facility-settings.component */ "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.ts");
/* harmony import */ var _pages_facility_detail_page_facility_settings_facility_settings_overview_facility_settings_overview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component */ "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.ts");
/* harmony import */ var _pages_facility_detail_page_facility_settings_facility_settings_attributes_facility_settings_attributes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component */ "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.ts");
/* harmony import */ var _pages_resource_detail_page_resource_settings_resource_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/resource-detail-page/resource-settings/resource-settings.component */ "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.ts");
/* harmony import */ var _pages_resource_detail_page_resource_settings_resource_settings_overview_resource_settings_overview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component */ "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.ts");
/* harmony import */ var _pages_resource_detail_page_resource_settings_resource_settings_attributes_resource_settings_attributes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component */ "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.ts");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! mat-table-exporter */ "../../node_modules/mat-table-exporter/__ivy_ngcc__/fesm2015/mat-table-exporter.js");
/* harmony import */ var _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @perun-web-apps/ui/alerts */ "../../libs/ui/alerts/src/index.ts");
/* harmony import */ var _pages_resource_detail_page_resource_groups_resource_groups_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/resource-detail-page/resource-groups/resource-groups.component */ "./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.ts");
/* harmony import */ var _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @perun-web-apps/perun/components */ "../../libs/perun/components/src/index.ts");
/* harmony import */ var _pages_facility_detail_page_facility_service_config_facility_service_config_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/facility-detail-page/facility-service-config/facility-service-config.component */ "./src/app/facilities/pages/facility-detail-page/facility-service-config/facility-service-config.component.ts");
/* harmony import */ var _perun_web_apps_perun_facility_services_config__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @perun-web-apps/perun/facility-services-config */ "../../libs/perun/facility-services-config/src/index.ts");
/* harmony import */ var _pages_facility_detail_page_facility_settings_facility_settings_managers_facility_settings_managers_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/facility-detail-page/facility-settings/facility-settings-managers/facility-settings-managers.component */ "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-managers/facility-settings-managers.component.ts");


























class FacilitiesModule {
}
FacilitiesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FacilitiesModule });
FacilitiesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FacilitiesModule_Factory(t) { return new (t || FacilitiesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _facilities_routing_module__WEBPACK_IMPORTED_MODULE_2__["FacilitiesRoutingModule"],
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_18__["MatTableExporterModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_19__["UiAlertsModule"],
            _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_21__["PerunSharedComponentsModule"],
            _perun_web_apps_perun_facility_services_config__WEBPACK_IMPORTED_MODULE_23__["PerunFacilityServicesConfigModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FacilitiesModule, { declarations: [_pages_facility_select_page_facility_select_page_component__WEBPACK_IMPORTED_MODULE_3__["FacilitySelectPageComponent"],
        _components_facility_select_table_facility_select_table_component__WEBPACK_IMPORTED_MODULE_5__["FacilitySelectTableComponent"],
        _pages_facility_detail_page_facility_detail_page_component__WEBPACK_IMPORTED_MODULE_6__["FacilityDetailPageComponent"],
        _pages_facility_detail_page_facility_overview_facility_overview_component__WEBPACK_IMPORTED_MODULE_7__["FacilityOverviewComponent"],
        _pages_facility_detail_page_facility_resources_facility_resources_component__WEBPACK_IMPORTED_MODULE_8__["FacilityResourcesComponent"],
        _pages_facility_detail_page_facility_allowed_groups_facility_allowed_groups_component__WEBPACK_IMPORTED_MODULE_9__["FacilityAllowedGroupsComponent"],
        _pages_resource_detail_page_resource_detail_page_component__WEBPACK_IMPORTED_MODULE_10__["ResourceDetailPageComponent"],
        _pages_resource_detail_page_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_11__["ResourceOverviewComponent"],
        _pages_facility_detail_page_facility_settings_facility_settings_component__WEBPACK_IMPORTED_MODULE_12__["FacilitySettingsComponent"],
        _pages_facility_detail_page_facility_settings_facility_settings_overview_facility_settings_overview_component__WEBPACK_IMPORTED_MODULE_13__["FacilitySettingsOverviewComponent"],
        _pages_facility_detail_page_facility_settings_facility_settings_attributes_facility_settings_attributes_component__WEBPACK_IMPORTED_MODULE_14__["FacilitySettingsAttributesComponent"],
        _pages_resource_detail_page_resource_settings_resource_settings_component__WEBPACK_IMPORTED_MODULE_15__["ResourceSettingsComponent"],
        _pages_resource_detail_page_resource_settings_resource_settings_overview_resource_settings_overview_component__WEBPACK_IMPORTED_MODULE_16__["ResourceSettingsOverviewComponent"],
        _pages_resource_detail_page_resource_settings_resource_settings_attributes_resource_settings_attributes_component__WEBPACK_IMPORTED_MODULE_17__["ResourceSettingsAttributesComponent"],
        _pages_resource_detail_page_resource_groups_resource_groups_component__WEBPACK_IMPORTED_MODULE_20__["ResourceGroupsComponent"],
        _pages_facility_detail_page_facility_service_config_facility_service_config_component__WEBPACK_IMPORTED_MODULE_22__["FacilityServiceConfigComponent"],
        _pages_facility_detail_page_facility_settings_facility_settings_managers_facility_settings_managers_component__WEBPACK_IMPORTED_MODULE_24__["FacilitySettingsManagersComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _facilities_routing_module__WEBPACK_IMPORTED_MODULE_2__["FacilitiesRoutingModule"],
        mat_table_exporter__WEBPACK_IMPORTED_MODULE_18__["MatTableExporterModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_19__["UiAlertsModule"],
        _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_21__["PerunSharedComponentsModule"],
        _perun_web_apps_perun_facility_services_config__WEBPACK_IMPORTED_MODULE_23__["PerunFacilityServicesConfigModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitiesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pages_facility_select_page_facility_select_page_component__WEBPACK_IMPORTED_MODULE_3__["FacilitySelectPageComponent"],
                    _components_facility_select_table_facility_select_table_component__WEBPACK_IMPORTED_MODULE_5__["FacilitySelectTableComponent"],
                    _pages_facility_detail_page_facility_detail_page_component__WEBPACK_IMPORTED_MODULE_6__["FacilityDetailPageComponent"],
                    _pages_facility_detail_page_facility_overview_facility_overview_component__WEBPACK_IMPORTED_MODULE_7__["FacilityOverviewComponent"],
                    _pages_facility_detail_page_facility_resources_facility_resources_component__WEBPACK_IMPORTED_MODULE_8__["FacilityResourcesComponent"],
                    _pages_facility_detail_page_facility_allowed_groups_facility_allowed_groups_component__WEBPACK_IMPORTED_MODULE_9__["FacilityAllowedGroupsComponent"],
                    _pages_resource_detail_page_resource_detail_page_component__WEBPACK_IMPORTED_MODULE_10__["ResourceDetailPageComponent"],
                    _pages_resource_detail_page_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_11__["ResourceOverviewComponent"],
                    _pages_facility_detail_page_facility_settings_facility_settings_component__WEBPACK_IMPORTED_MODULE_12__["FacilitySettingsComponent"],
                    _pages_facility_detail_page_facility_settings_facility_settings_overview_facility_settings_overview_component__WEBPACK_IMPORTED_MODULE_13__["FacilitySettingsOverviewComponent"],
                    _pages_facility_detail_page_facility_settings_facility_settings_attributes_facility_settings_attributes_component__WEBPACK_IMPORTED_MODULE_14__["FacilitySettingsAttributesComponent"],
                    _pages_resource_detail_page_resource_settings_resource_settings_component__WEBPACK_IMPORTED_MODULE_15__["ResourceSettingsComponent"],
                    _pages_resource_detail_page_resource_settings_resource_settings_overview_resource_settings_overview_component__WEBPACK_IMPORTED_MODULE_16__["ResourceSettingsOverviewComponent"],
                    _pages_resource_detail_page_resource_settings_resource_settings_attributes_resource_settings_attributes_component__WEBPACK_IMPORTED_MODULE_17__["ResourceSettingsAttributesComponent"],
                    _pages_resource_detail_page_resource_groups_resource_groups_component__WEBPACK_IMPORTED_MODULE_20__["ResourceGroupsComponent"],
                    _pages_facility_detail_page_facility_service_config_facility_service_config_component__WEBPACK_IMPORTED_MODULE_22__["FacilityServiceConfigComponent"],
                    _pages_facility_detail_page_facility_settings_facility_settings_managers_facility_settings_managers_component__WEBPACK_IMPORTED_MODULE_24__["FacilitySettingsManagersComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _facilities_routing_module__WEBPACK_IMPORTED_MODULE_2__["FacilitiesRoutingModule"],
                    mat_table_exporter__WEBPACK_IMPORTED_MODULE_18__["MatTableExporterModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_19__["UiAlertsModule"],
                    _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_21__["PerunSharedComponentsModule"],
                    _perun_web_apps_perun_facility_services_config__WEBPACK_IMPORTED_MODULE_23__["PerunFacilityServicesConfigModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FacilityDetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityDetailPageComponent", function() { return FacilityDetailPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/side-menu/side-menu-item.service */ "./src/app/shared/side-menu/side-menu-item.service.ts");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @perun-web-apps/perun/utils */ "../../libs/perun/utils/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _libs_perun_components_src_lib_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../libs/perun/components/src/lib/back-button/back-button.component */ "../../libs/perun/components/src/lib/back-button/back-button.component.ts");
/* harmony import */ var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/animated-router-outlet/animated-router-outlet.component */ "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
















const _c0 = function (a1) { return ["/facilities", a1]; };
function FacilityDetailPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "perun-web-apps-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-animated-router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1568 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "FACILITY_DETAIL.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r1568.facility.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1568.facility.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0#", ctx_r1568.facility.id, " ");
} }
class FacilityDetailPageComponent {
    constructor(facilityManager, route, sideMenuService, sideMenuItemService) {
        this.facilityManager = facilityManager;
        this.route = route;
        this.sideMenuService = sideMenuService;
        this.sideMenuItemService = sideMenuItemService;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            const facilityId = params['facilityId'];
            this.facilityManager.getFacilityById(facilityId).subscribe(facility => {
                this.facility = facility;
                const facilityItem = this.sideMenuItemService.parseFacility(facility);
                this.sideMenuService.setFacilityMenuItems([facilityItem]);
                Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["addRecentlyVisited"])('facilities', this.facility);
            });
        });
    }
}
FacilityDetailPageComponent.ɵfac = function FacilityDetailPageComponent_Factory(t) { return new (t || FacilityDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuItemService"])); };
FacilityDetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FacilityDetailPageComponent, selectors: [["app-facility-detail-page"]], decls: 1, vars: 1, consts: [["class", "container-fluid pl-xl-5 pr-xl-5 facility-theme", 4, "ngIf"], [1, "container-fluid", "pl-xl-5", "pr-xl-5", "facility-theme"], [1, "page-title"], [1, "facility-link", 3, "routerLink"], [1, "text-muted"]], template: function FacilityDetailPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FacilityDetailPageComponent_div_0_Template, 10, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.facility !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _libs_perun_components_src_lib_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_8__["BackButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_9__["AnimatedRouterOutletComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilityDetailPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-facility-detail-page',
                templateUrl: './facility-detail-page.component.html',
                styleUrls: ['./facility-detail-page.component.scss'],
                animations: [
                    _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]
                ]
            }]
    }], function () { return [{ type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["FacilitiesManagerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"] }, { type: _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuItemService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: FacilityOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityOverviewComponent", function() { return FacilityOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component */ "../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component.ts");







class FacilityOverviewComponent {
    constructor(facilityManager, route) {
        this.facilityManager = facilityManager;
        this.route = route;
        this.navItems = [];
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            const facilityId = params['facilityId'];
            this.facilityManager.getFacilityById(facilityId).subscribe(facility => {
                this.facility = facility;
                this.initItems();
            });
        });
    }
    initItems() {
        this.navItems = [
            {
                cssIcon: 'perun-manage-facility',
                url: `/facilities/${this.facility.id}/resources`,
                label: 'MENU_ITEMS.FACILITY.RESOURCES',
                style: 'facility-btn'
            },
            {
                cssIcon: 'perun-group',
                url: `/facilities/${this.facility.id}/allowed-groups`,
                label: 'MENU_ITEMS.FACILITY.ALLOWED_GROUPS',
                style: 'facility-btn'
            },
            {
                cssIcon: 'perun-settings2',
                url: `/facilities/${this.facility.id}/settings`,
                label: 'MENU_ITEMS.FACILITY.SETTINGS',
                style: 'facility-btn'
            },
            {
                cssIcon: 'perun-settings2',
                url: `/facilities/${this.facility.id}/service-config`,
                label: 'MENU_ITEMS.FACILITY.SERVICE_CONFIG',
                style: 'facility-btn'
            }
        ];
    }
}
FacilityOverviewComponent.ɵfac = function FacilityOverviewComponent_Factory(t) { return new (t || FacilityOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
FacilityOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FacilityOverviewComponent, selectors: [["app-facility-overview"]], hostVars: 2, hostBindings: function FacilityOverviewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 2, vars: 2, consts: [[3, "items", "size"]], template: function FacilityOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "perun-web-apps-menu-buttons-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.navItems)("size", "small");
    } }, directives: [_libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__["MenuButtonsFieldComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktb3ZlcnZpZXcvZmFjaWxpdHktb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilityOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-facility-overview',
                templateUrl: './facility-overview.component.html',
                styleUrls: ['./facility-overview.component.scss']
            }]
    }], function () { return [{ type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/facilities/pages/facility-detail-page/facility-service-config/facility-service-config.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/facilities/pages/facility-detail-page/facility-service-config/facility-service-config.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: FacilityServiceConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityServiceConfigComponent", function() { return FacilityServiceConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _libs_perun_facility_services_config_src_lib_service_configurator_service_configurator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../../libs/perun/facility-services-config/src/lib/service-configurator/service-configurator.component */ "../../libs/perun/facility-services-config/src/lib/service-configurator/service-configurator.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");













function FacilityServiceConfigComponent_div_4_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r1603 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", s_r1603);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r1603.name, " ");
} }
function FacilityServiceConfigComponent_div_4_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FACILITY_DETAIL.SERVICE_CONFIG.SERVICE_SELECT_NO_SERVICE"), " ");
} }
function FacilityServiceConfigComponent_div_4_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const res_r1604 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", res_r1604);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", res_r1604.name, " ");
} }
function FacilityServiceConfigComponent_div_4_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const g_r1605 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", g_r1605);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", g_r1605.name, " ");
} }
function FacilityServiceConfigComponent_div_4_mat_hint_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FACILITY_DETAIL.SERVICE_CONFIG.GROUP_SELECT_DEFAULT"), " ");
} }
function FacilityServiceConfigComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r1607 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function FacilityServiceConfigComponent_div_4_Template_mat_select_valueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1607); const ctx_r1606 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1606.selectedService = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " NOT SELECTED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " ALL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FacilityServiceConfigComponent_div_4_mat_option_10_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FacilityServiceConfigComponent_div_4_mat_option_11_Template, 3, 3, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-checkbox", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FacilityServiceConfigComponent_div_4_Template_mat_checkbox_change_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1607); const ctx_r1608 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1608.onOfferAllServices($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function FacilityServiceConfigComponent_div_4_Template_mat_select_valueChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1607); const ctx_r1609 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1609.selectedResource = $event; })("selectionChange", function FacilityServiceConfigComponent_div_4_Template_mat_select_selectionChange_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1607); const ctx_r1610 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1610.onSelectedResource(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FacilityServiceConfigComponent_div_4_mat_option_23_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function FacilityServiceConfigComponent_div_4_Template_mat_select_valueChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1607); const ctx_r1611 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1611.selectedGroup = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, FacilityServiceConfigComponent_div_4_mat_option_29_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, FacilityServiceConfigComponent_div_4_mat_hint_30_Template, 3, 3, "mat-hint", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1596 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 16, "FACILITY_DETAIL.SERVICE_CONFIG.SERVICE_SELECT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1596.selectedService);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "NOT_SELECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "ALL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1596.services);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r1596.services && ctx_r1596.services.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 18, "FACILITY_DETAIL.SERVICE_CONFIG.ALL_SERVICES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 20, "FACILITY_DETAIL.SERVICE_CONFIG.RES_SELECT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1596.selectedResource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 22, "FACILITY_DETAIL.SERVICE_CONFIG.UNSELECTED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1596.resources);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 24, "FACILITY_DETAIL.SERVICE_CONFIG.GROUP_SELECT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1596.selectedGroup)("disabled", ctx_r1596.selectedResource === undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1596.groups);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1596.selectedResource === undefined);
} }
function FacilityServiceConfigComponent_perun_web_apps_service_configurator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "perun-web-apps-service-configurator", 12);
} if (rf & 2) {
    const ctx_r1597 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("facility", ctx_r1597.facility)("resource", ctx_r1597.selectedResource)("group", ctx_r1597.selectedGroup)("service", ctx_r1597.selectedService);
} }
class FacilityServiceConfigComponent {
    constructor(route, facilityManager, resourceManager, serviceManager) {
        this.route = route;
        this.facilityManager = facilityManager;
        this.resourceManager = resourceManager;
        this.serviceManager = serviceManager;
        this.selectedService = 'NOT_SELECTED';
    }
    ngOnInit() {
        this.route.parent.params.subscribe(parentParams => {
            const facilityId = parentParams['facilityId'];
            this.facilityManager.getFacilityById(facilityId).subscribe(facility => {
                this.facility = facility;
                this.facilityManager.getAssignedResourcesForFacility(facility.id)
                    .subscribe(resources => this.resources = resources);
                this.serviceManager.getAssignedServices(facility.id).subscribe(services => this.services = services);
            });
        });
    }
    onSelectedResource() {
        if (this.selectedResource !== undefined) {
            this.resourceManager.getAssignedGroups(this.selectedResource.id).subscribe(groups => this.groups = groups);
            this.selectedGroup = undefined;
        }
    }
    onOfferAllServices(event) {
        if (!event.checked) {
            this.serviceManager.getAssignedServices(this.facility.id).subscribe(services => this.services = services);
        }
    }
}
FacilityServiceConfigComponent.ɵfac = function FacilityServiceConfigComponent_Factory(t) { return new (t || FacilityServiceConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ServicesManagerService"])); };
FacilityServiceConfigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FacilityServiceConfigComponent, selectors: [["app-facility-service-config"]], decls: 6, vars: 5, consts: [[1, "page-subtitle"], ["class", "col-12 col-lg-6 mb-2", 4, "ngIf"], [3, "facility", "resource", "group", "service", 4, "ngIf"], [1, "col-12", "col-lg-6", "mb-2"], [1, "w-100"], [3, "value", "valueChange"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "change"], [3, "value", "valueChange", "selectionChange"], [3, "value", "disabled", "valueChange"], [3, "facility", "resource", "group", "service"]], template: function FacilityServiceConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FacilityServiceConfigComponent_div_4_Template, 31, 26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FacilityServiceConfigComponent_perun_web_apps_service_configurator_5_Template, 1, 4, "perun-web-apps-service-configurator", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "FACILITY_DETAIL.SERVICE_CONFIG.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.facility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.facility);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatHint"], _libs_perun_facility_services_config_src_lib_service_configurator_service_configurator_component__WEBPACK_IMPORTED_MODULE_8__["ServiceConfiguratorComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktc2VydmljZS1jb25maWcvZmFjaWxpdHktc2VydmljZS1jb25maWcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilityServiceConfigComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-facility-service-config',
                templateUrl: './facility-service-config.component.html',
                styleUrls: ['./facility-service-config.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"] }, { type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"] }, { type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ServicesManagerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: FacilitySettingsAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitySettingsAttributesComponent", function() { return FacilitySettingsAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @perun-web-apps/perun/components */ "../../libs/perun/components/src/index.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component */ "./src/app/shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component */ "./src/app/shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component.ts");
/* harmony import */ var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @perun-web-apps/perun/utils */ "../../libs/perun/utils/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _shared_components_dialogs_edit_attribute_dialog_edit_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/edit-attribute-dialog/edit-attribute-dialog.component */ "./src/app/shared/components/dialogs/edit-attribute-dialog/edit-attribute-dialog.component.ts");
/* harmony import */ var _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @perun-web-apps/config/table-config */ "../../libs/config/table-config/src/index.ts");
/* harmony import */ var _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../../libs/perun/components/src/lib/refresh-button/refresh-button.component */ "../../libs/perun/components/src/lib/refresh-button/refresh-button.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component */ "../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _libs_perun_components_src_lib_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../../../libs/perun/components/src/lib/attributes-list/attributes-list.component */ "../../libs/perun/components/src/lib/attributes-list/attributes-list.component.ts");


























const _c0 = ["list"];
function FacilitySettingsAttributesComponent_mat_spinner_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
} }
function FacilitySettingsAttributesComponent_perun_web_apps_attributes_list_16_Template(rf, ctx) { if (rf & 1) {
    const _r1574 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-attributes-list", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function FacilitySettingsAttributesComponent_perun_web_apps_attributes_list_16_Template_perun_web_apps_attributes_list_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1574); const ctx_r1573 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1573.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1571 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r1571.pageSize)("filterValue", ctx_r1571.filterValue)("attributes", ctx_r1571.attributes)("selection", ctx_r1571.selection);
} }
class FacilitySettingsAttributesComponent {
    constructor(attributesManager, route, dialog, notificator, tableConfigService, translate) {
        this.attributesManager = attributesManager;
        this.route = route;
        this.dialog = dialog;
        this.notificator = notificator;
        this.tableConfigService = tableConfigService;
        this.translate = translate;
        this.attributes = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        this.filterValue = '';
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_12__["TABLE_ATTRIBUTES_SETTINGS"];
        this.translate.get('FACILITY_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE').subscribe(value => this.saveSuccessMessage = value);
        this.translate.get('FACILITY_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE').subscribe(value => this.deleteSuccessMessage = value);
    }
    ngOnInit() {
        this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
        this.route.parent.parent.params.subscribe(params => {
            this.facilityId = params['facilityId'];
            this.refreshTable();
        });
    }
    onDelete() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteAttributeDialogComponent"], {
            width: '450px',
            data: {
                entityId: this.facilityId,
                entity: 'facility',
                attributes: this.selection.selected
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.refreshTable();
            }
        });
    }
    onSave() {
        // have to use this to update attribute with map in it, before saving it
        this.list.updateMapAttributes();
        const dialogRef = this.dialog.open(_shared_components_dialogs_edit_attribute_dialog_edit_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_11__["EditAttributeDialogComponent"], {
            width: '450px',
            data: {
                entityId: this.facilityId,
                entity: 'facility',
                attributes: this.selection.selected
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.refreshTable();
            }
        });
    }
    onCreate() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CreateAttributeDialogComponent"], {
            width: '1050px',
            data: {
                entityId: this.facilityId,
                entity: 'facility',
                notEmptyAttributes: this.attributes,
                style: 'facility-theme'
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'saved') {
                this.refreshTable();
            }
        });
    }
    refreshTable() {
        this.loading = true;
        this.attributesManager.getFacilityAttributes(this.facilityId).subscribe(attributes => {
            this.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["filterCoreAttributes"])(attributes);
            this.selection.clear();
            this.loading = false;
        });
    }
    applyFilter(filterValue) {
        this.filterValue = filterValue;
    }
    pageChanged(event) {
        this.pageSize = event.pageSize;
        this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
    }
}
FacilitySettingsAttributesComponent.ɵfac = function FacilitySettingsAttributesComponent_Factory(t) { return new (t || FacilitySettingsAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_12__["TableConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
FacilitySettingsAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FacilitySettingsAttributesComponent, selectors: [["app-facility-settings-attributes"]], viewQuery: function FacilitySettingsAttributesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
    } }, hostVars: 2, hostBindings: function FacilitySettingsAttributesComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 17, vars: 17, consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "pageSize", "filterValue", "attributes", "selection", "page", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [3, "pageSize", "filterValue", "attributes", "selection", "page"], ["list", ""]], template: function FacilitySettingsAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "perun-web-apps-refresh-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function FacilitySettingsAttributesComponent_Template_perun_web_apps_refresh_button_refresh_4_listener() { return ctx.refreshTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilitySettingsAttributesComponent_Template_button_click_5_listener() { return ctx.onCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilitySettingsAttributesComponent_Template_button_click_8_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilitySettingsAttributesComponent_Template_button_click_11_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "perun-web-apps-immediate-filter", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function FacilitySettingsAttributesComponent_Template_perun_web_apps_immediate_filter_filter_14_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FacilitySettingsAttributesComponent_mat_spinner_15_Template, 1, 0, "mat-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FacilitySettingsAttributesComponent_perun_web_apps_attributes_list_16_Template, 2, 4, "perun-web-apps-attributes-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, "FACILITY_DETAIL.SETTINGS.ATTRIBUTES.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 11, "FACILITY_DETAIL.SETTINGS.ATTRIBUTES.CREATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, "FACILITY_DETAIL.SETTINGS.ATTRIBUTES.SAVE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 15, "FACILITY_DETAIL.SETTINGS.ATTRIBUTES.DELETE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "SHARED.COMPONENTS.ATTRIBUTES_LIST.FILTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_13__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_15__["ImmediateFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatSpinner"], _libs_perun_components_src_lib_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_18__["AttributesListComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktc2V0dGluZ3MvZmFjaWxpdHktc2V0dGluZ3MtYXR0cmlidXRlcy9mYWNpbGl0eS1zZXR0aW5ncy1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitySettingsAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-facility-settings-attributes',
                templateUrl: './facility-settings-attributes.component.html',
                styleUrls: ['./facility-settings-attributes.component.scss']
            }]
    }], function () { return [{ type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"] }, { type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_12__["TableConfigService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }], list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['list']
        }] }); })();


/***/ }),

/***/ "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-managers/facility-settings-managers.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-managers/facility-settings-managers.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: FacilitySettingsManagersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitySettingsManagersComponent", function() { return FacilitySettingsManagersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @perun-web-apps/perun/models */ "../../libs/perun/models/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_managers_page_managers_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/managers-page/managers-page.component */ "./src/app/shared/components/managers-page/managers-page.component.ts");









function FacilitySettingsManagersComponent_app_managers_page_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-managers-page", 1);
} if (rf & 2) {
    const ctx_r1612 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("complementaryObject", ctx_r1612.facility)("complementaryObjectType", ctx_r1612.type)("theme", ctx_r1612.theme)("availableRoles", ctx_r1612.availableRoles);
} }
class FacilitySettingsManagersComponent {
    constructor(facilityService, route) {
        this.facilityService = facilityService;
        this.route = route;
        this.availableRoles = [_perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_3__["Role"].FACILITYADMIN];
        this.selected = 'user';
        this.type = 'Facility';
        this.theme = 'facility-theme';
    }
    ngOnInit() {
        this.route.parent.parent.params.subscribe(parentParentParams => {
            const facilityId = parentParentParams['facilityId'];
            this.facilityService.getFacilityById(facilityId).subscribe(facility => {
                this.facility = facility;
            });
        });
    }
}
FacilitySettingsManagersComponent.ɵfac = function FacilitySettingsManagersComponent_Factory(t) { return new (t || FacilitySettingsManagersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
FacilitySettingsManagersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FacilitySettingsManagersComponent, selectors: [["app-perun-web-apps-facility-settings-managers"]], hostVars: 2, hostBindings: function FacilitySettingsManagersComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 1, vars: 1, consts: [[3, "complementaryObject", "complementaryObjectType", "theme", "availableRoles", 4, "ngIf"], [3, "complementaryObject", "complementaryObjectType", "theme", "availableRoles"]], template: function FacilitySettingsManagersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FacilitySettingsManagersComponent_app_managers_page_0_Template, 1, 4, "app-managers-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.facility);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_managers_page_managers_page_component__WEBPACK_IMPORTED_MODULE_5__["ManagersPageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktc2V0dGluZ3MvZmFjaWxpdHktc2V0dGluZ3MtbWFuYWdlcnMvZmFjaWxpdHktc2V0dGluZ3MtbWFuYWdlcnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitySettingsManagersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-perun-web-apps-facility-settings-managers',
                templateUrl: './facility-settings-managers.component.html',
                styleUrls: ['./facility-settings-managers.component.scss']
            }]
    }], function () { return [{ type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__["FacilitiesManagerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: FacilitySettingsOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitySettingsOverviewComponent", function() { return FacilitySettingsOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component */ "../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component.ts");







class FacilitySettingsOverviewComponent {
    constructor(route, facilityManager) {
        this.route = route;
        this.facilityManager = facilityManager;
        this.items = [];
    }
    ngOnInit() {
        this.route.parent.parent.params.subscribe(parentParams => {
            const facilityId = parentParams['facilityId'];
            this.facilityManager.getFacilityById(facilityId).subscribe(facility => {
                this.facility = facility;
                this.initItems();
            });
        });
    }
    initItems() {
        this.items = [
            {
                cssIcon: 'perun-attributes',
                url: `/facilities/${this.facility.id}/settings/attributes`,
                label: 'MENU_ITEMS.FACILITY.ATTRIBUTES',
                style: 'facility-btn'
            },
            {
                cssIcon: 'perun-manager',
                url: `/facilities/${this.facility.id}/settings/managers`,
                label: 'MENU_ITEMS.FACILITY.MANAGERS',
                style: 'facility-btn'
            }
        ];
    }
}
FacilitySettingsOverviewComponent.ɵfac = function FacilitySettingsOverviewComponent_Factory(t) { return new (t || FacilitySettingsOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"])); };
FacilitySettingsOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FacilitySettingsOverviewComponent, selectors: [["app-facility-settings-overview"]], hostVars: 2, hostBindings: function FacilitySettingsOverviewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 2, vars: 2, consts: [[3, "items", "size"]], template: function FacilitySettingsOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "perun-web-apps-menu-buttons-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items)("size", "small");
    } }, directives: [_libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__["MenuButtonsFieldComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktc2V0dGluZ3MvZmFjaWxpdHktc2V0dGluZ3Mtb3ZlcnZpZXcvZmFjaWxpdHktc2V0dGluZ3Mtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitySettingsOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-facility-settings-overview',
                templateUrl: './facility-settings-overview.component.html',
                styleUrls: ['./facility-settings-overview.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: FacilitySettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitySettingsComponent", function() { return FacilitySettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");
/* harmony import */ var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/animated-router-outlet/animated-router-outlet.component */ "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");




class FacilitySettingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
FacilitySettingsComponent.ɵfac = function FacilitySettingsComponent_Factory(t) { return new (t || FacilitySettingsComponent)(); };
FacilitySettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FacilitySettingsComponent, selectors: [["app-facility-settings"]], hostVars: 2, hostBindings: function FacilitySettingsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 1, vars: 0, template: function FacilitySettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-animated-router-outlet");
    } }, directives: [_shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_2__["AnimatedRouterOutletComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktc2V0dGluZ3MvZmFjaWxpdHktc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitySettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-facility-settings',
                templateUrl: './facility-settings.component.html',
                styleUrls: ['./facility-settings.component.scss'],
                animations: [
                    _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]
                ]
            }]
    }], function () { return []; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/facilities/pages/facility-select-page/facility-select-page.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/facilities/pages/facility-select-page/facility-select-page.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FacilitySelectPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitySelectPageComponent", function() { return FacilitySelectPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @perun-web-apps/perun/utils */ "../../libs/perun/utils/src/index.ts");
/* harmony import */ var _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @perun-web-apps/config/table-config */ "../../libs/config/table-config/src/index.ts");
/* harmony import */ var _libs_perun_components_src_lib_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../libs/perun/components/src/lib/back-button/back-button.component */ "../../libs/perun/components/src/lib/back-button/back-button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../libs/perun/components/src/lib/refresh-button/refresh-button.component */ "../../libs/perun/components/src/lib/refresh-button/refresh-button.component.ts");
/* harmony import */ var _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component */ "../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _components_facility_select_table_facility_select_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/facility-select-table/facility-select-table.component */ "./src/app/facilities/components/facility-select-table/facility-select-table.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
















function FacilitySelectPageComponent_perun_web_apps_refresh_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r1563 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-refresh-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function FacilitySelectPageComponent_perun_web_apps_refresh_button_5_Template_perun_web_apps_refresh_button_refresh_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1563); const ctx_r1562 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1562.refreshTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FacilitySelectPageComponent_perun_web_apps_immediate_filter_6_Template(rf, ctx) { if (rf & 1) {
    const _r1565 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-immediate-filter", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function FacilitySelectPageComponent_perun_web_apps_immediate_filter_6_Template_perun_web_apps_immediate_filter_filter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1565); const ctx_r1564 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1564.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "FACILITY_MANAGEMENT.FILTER_PLACEHOLDER");
} }
function FacilitySelectPageComponent_mat_spinner_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
} }
function FacilitySelectPageComponent_app_facility_select_table_8_Template(rf, ctx) { if (rf & 1) {
    const _r1567 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-facility-select-table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function FacilitySelectPageComponent_app_facility_select_table_8_Template_app_facility_select_table_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1567); const ctx_r1566 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1566.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1561 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r1561.pageSize)("filterValue", ctx_r1561.filterValue)("facilities", ctx_r1561.facilities)("recentIds", ctx_r1561.recentIds);
} }
class FacilitySelectPageComponent {
    constructor(facilityManager, sideMenuService, tableConfigService) {
        this.facilityManager = facilityManager;
        this.sideMenuService = sideMenuService;
        this.tableConfigService = tableConfigService;
        this.facilities = [];
        this.recentIds = [];
        this.filterValue = '';
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_4__["TABLE_FACILITY_SELECT"];
    }
    ngOnInit() {
        this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
        this.sideMenuService.setFacilityMenuItems([]);
        this.refreshTable();
    }
    refreshTable() {
        this.loading = true;
        this.facilityManager.getRichFacilities().subscribe(facilities => {
            this.facilities = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_3__["getRecentlyVisited"])('facilities', facilities);
            this.recentIds = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_3__["getRecentlyVisitedIds"])('facilities');
            this.loading = false;
        });
    }
    applyFilter(filterValue) {
        this.filterValue = filterValue;
    }
    pageChanged(event) {
        this.pageSize = event.pageSize;
        this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
    }
}
FacilitySelectPageComponent.ɵfac = function FacilitySelectPageComponent_Factory(t) { return new (t || FacilitySelectPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_4__["TableConfigService"])); };
FacilitySelectPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FacilitySelectPageComponent, selectors: [["app-facility-select-page"]], decls: 9, vars: 7, consts: [[1, "container-fluid", "pl-xl-5", "pr-xl-5", "facility-theme"], [1, "page-title"], [3, "refresh", 4, "ngIf"], [3, "placeholder", "filter", 4, "ngIf"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "pageSize", "filterValue", "facilities", "recentIds", "page", 4, "ngIf"], [3, "refresh"], [3, "placeholder", "filter"], [1, "ml-auto", "mr-auto"], [3, "pageSize", "filterValue", "facilities", "recentIds", "page"]], template: function FacilitySelectPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "perun-web-apps-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FacilitySelectPageComponent_perun_web_apps_refresh_button_5_Template, 1, 0, "perun-web-apps-refresh-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FacilitySelectPageComponent_perun_web_apps_immediate_filter_6_Template, 1, 1, "perun-web-apps-immediate-filter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FacilitySelectPageComponent_mat_spinner_7_Template, 1, 0, "mat-spinner", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FacilitySelectPageComponent_app_facility_select_table_8_Template, 1, 4, "app-facility-select-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "FACILITY_MANAGEMENT.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_libs_perun_components_src_lib_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_5__["BackButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_7__["RefreshButtonComponent"], _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_8__["ImmediateFilterComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _components_facility_select_table_facility_select_table_component__WEBPACK_IMPORTED_MODULE_10__["FacilitySelectTableComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktc2VsZWN0LXBhZ2UvZmFjaWxpdHktc2VsZWN0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitySelectPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-facility-select-page',
                templateUrl: './facility-select-page.component.html',
                styleUrls: ['./facility-select-page.component.scss']
            }]
    }], function () { return [{ type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"] }, { type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"] }, { type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_4__["TableConfigService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ResourceDetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceDetailPageComponent", function() { return ResourceDetailPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/side-menu/side-menu-item.service */ "./src/app/shared/side-menu/side-menu-item.service.ts");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _libs_perun_components_src_lib_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../libs/perun/components/src/lib/back-button/back-button.component */ "../../libs/perun/components/src/lib/back-button/back-button.component.ts");
/* harmony import */ var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/animated-router-outlet/animated-router-outlet.component */ "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");















const _c0 = function (a1, a3) { return ["/facilities", a1, "resources", a3]; };
function ResourceDetailPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "perun-web-apps-back-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-animated-router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1569 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "RESOURCE_DETAIL.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx_r1569.resource.facilityId, ctx_r1569.resource.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1569.resource.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0#", ctx_r1569.resource.id, " ");
} }
class ResourceDetailPageComponent {
    constructor(route, facilityManager, resourcesManager, sideMenuService, sideMenuItemService) {
        this.route = route;
        this.facilityManager = facilityManager;
        this.resourcesManager = resourcesManager;
        this.sideMenuService = sideMenuService;
        this.sideMenuItemService = sideMenuItemService;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            const resourceId = params['resourceId'];
            this.resourcesManager.getResourceById(resourceId).subscribe(resource => {
                this.resource = resource;
                this.facilityManager.getFacilityById(resource.facilityId).subscribe(facility => {
                    const facilityItem = this.sideMenuItemService.parseFacility(facility);
                    const resourceItem = this.sideMenuItemService.parseResource(resource);
                    this.sideMenuService.setFacilityMenuItems([facilityItem, resourceItem]);
                });
            });
        });
    }
}
ResourceDetailPageComponent.ɵfac = function ResourceDetailPageComponent_Factory(t) { return new (t || ResourceDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["ResourcesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuItemService"])); };
ResourceDetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourceDetailPageComponent, selectors: [["app-resource-detail-page"]], decls: 1, vars: 1, consts: [["class", "container-fluid pl-xl-5 pr-xl-5 resource-theme", 4, "ngIf"], [1, "container-fluid", "pl-xl-5", "pr-xl-5", "resource-theme"], [1, "page-title"], [1, "resource-link", 3, "routerLink"], [1, "text-muted"]], template: function ResourceDetailPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResourceDetailPageComponent_div_0_Template, 10, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resource !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _libs_perun_components_src_lib_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_7__["BackButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_8__["AnimatedRouterOutletComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2UtZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceDetailPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resource-detail-page',
                templateUrl: './resource-detail-page.component.html',
                styleUrls: ['./resource-detail-page.component.scss'],
                animations: [
                    _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["FacilitiesManagerService"] }, { type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["ResourcesManagerService"] }, { type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"] }, { type: _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuItemService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ResourceGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceGroupsComponent", function() { return ResourceGroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_components_dialogs_remove_group_from_resource_dialog_remove_group_from_resource_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/dialogs/remove-group-from-resource-dialog/remove-group-from-resource-dialog.component */ "./src/app/shared/components/dialogs/remove-group-from-resource-dialog/remove-group-from-resource-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_assign_group_to_resource_dialog_assign_group_to_resource_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/dialogs/assign-group-to-resource-dialog/assign-group-to-resource-dialog.component */ "./src/app/shared/components/dialogs/assign-group-to-resource-dialog/assign-group-to-resource-dialog.component.ts");
/* harmony import */ var _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @perun-web-apps/config/table-config */ "../../libs/config/table-config/src/index.ts");
/* harmony import */ var _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../../libs/perun/components/src/lib/refresh-button/refresh-button.component */ "../../libs/perun/components/src/lib/refresh-button/refresh-button.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _shared_components_debounce_filter_debounce_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/debounce-filter/debounce-filter.component */ "./src/app/shared/components/debounce-filter/debounce-filter.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _libs_perun_components_src_lib_groups_list_groups_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../../libs/perun/components/src/lib/groups-list/groups-list.component */ "../../libs/perun/components/src/lib/groups-list/groups-list.component.ts");
/* harmony import */ var _libs_ui_alerts_src_lib_alert_alert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../../libs/ui/alerts/src/lib/alert/alert.component */ "../../libs/ui/alerts/src/lib/alert/alert.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");






















const _c0 = ["checkbox"];
function ResourceGroupsComponent_mat_spinner_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
} }
const _c1 = function () { return ["vo", "menu"]; };
function ResourceGroupsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r1584 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "perun-web-apps-groups-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ResourceGroupsComponent_div_12_Template_perun_web_apps_groups_list_page_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1584); const ctx_r1583 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1583.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1581 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r1581.pageSize)("groups", ctx_r1581.filteredGroups)("selection", ctx_r1581.selected)("disableMembers", false)("inDialog", false)("hideColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
} }
function ResourceGroupsComponent_app_alert_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-alert", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "RESOURCE_DETAIL.ASSIGNED_GROUPS.NO_GROUPS"), "\n");
} }
class ResourceGroupsComponent {
    constructor(route, resourcesManager, tableConfigService, dialog) {
        this.route = route;
        this.resourcesManager = resourcesManager;
        this.tableConfigService = tableConfigService;
        this.dialog = dialog;
        this.assignedGroups = [];
        this.selected = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.filteredGroups = [];
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_8__["TABLE_RESOURCE_ALLOWED_GROUPS"];
    }
    ngOnInit() {
        this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
        this.loading = true;
        this.route.parent.params.subscribe(parentParams => {
            this.resourceId = parentParams['resourceId'];
            this.loadAllGroups();
        });
    }
    loadAllGroups() {
        this.loading = true;
        this.resourcesManager.getAssignedGroups(this.resourceId).subscribe(assignedGroups => {
            this.assignedGroups = assignedGroups;
            this.filteredGroups = assignedGroups;
            this.selected.clear();
            this.loading = false;
        });
    }
    addGroup() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_assign_group_to_resource_dialog_assign_group_to_resource_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AssignGroupToResourceDialogComponent"], {
            width: '800px',
            data: { theme: 'resource-theme', resourceId: this.resourceId }
        });
        dialogRef.afterClosed().subscribe((success) => {
            if (success) {
                this.loadAllGroups();
            }
        });
    }
    removeGroups() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_remove_group_from_resource_dialog_remove_group_from_resource_dialog_component__WEBPACK_IMPORTED_MODULE_6__["RemoveGroupFromResourceDialogComponent"], {
            width: '500px',
            data: { resourceId: this.resourceId, groups: this.selected.selected }
        });
        dialogRef.afterClosed().subscribe((success) => {
            if (success) {
                this.loadAllGroups();
            }
        });
    }
    applyFilter(filterValue) {
        this.filteredGroups = this.assignedGroups.filter(option => option.name.toLowerCase().includes(filterValue.toLowerCase()));
    }
    pageChanged(event) {
        this.pageSize = event.pageSize;
        this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
    }
}
ResourceGroupsComponent.ɵfac = function ResourceGroupsComponent_Factory(t) { return new (t || ResourceGroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_8__["TableConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
ResourceGroupsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourceGroupsComponent, selectors: [["app-perun-web-apps-resource-groups"]], viewQuery: function ResourceGroupsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.checkbox = _t.first);
    } }, decls: 14, vars: 14, consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 3, "click"], ["mat-flat-button", "", "color", "warn", 1, "ml-2", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], ["color", "warn", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [1, "mt-3"], [3, "pageSize", "groups", "selection", "disableMembers", "inDialog", "hideColumns", "page"], ["color", "warn"]], template: function ResourceGroupsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "perun-web-apps-refresh-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function ResourceGroupsComponent_Template_perun_web_apps_refresh_button_refresh_3_listener() { return ctx.loadAllGroups(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceGroupsComponent_Template_button_click_4_listener() { return ctx.addGroup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceGroupsComponent_Template_button_click_7_listener() { return ctx.removeGroups(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-debounce-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function ResourceGroupsComponent_Template_app_debounce_filter_filter_10_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResourceGroupsComponent_mat_spinner_11_Template, 1, 0, "mat-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ResourceGroupsComponent_div_12_Template, 2, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResourceGroupsComponent_app_alert_13_Template, 3, 3, "app-alert", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 8, "RESOURCE_DETAIL.ASSIGNED_GROUPS.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 10, "RESOURCE_DETAIL.ASSIGNED_GROUPS.ADD_GROUP"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selected.selected.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 12, "RESOURCE_DETAIL.ASSIGNED_GROUPS.REMOVE_GROUP"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "RESOURCE_DETAIL.ASSIGNED_GROUPS.FILTER_GROUPS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.assignedGroups.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.assignedGroups.length === 0 && !ctx.loading);
    } }, directives: [_libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_9__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _shared_components_debounce_filter_debounce_filter_component__WEBPACK_IMPORTED_MODULE_11__["DebounceFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], _libs_perun_components_src_lib_groups_list_groups_list_component__WEBPACK_IMPORTED_MODULE_14__["GroupsListComponent"], _libs_ui_alerts_src_lib_alert_alert_component__WEBPACK_IMPORTED_MODULE_15__["AlertComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2UtZ3JvdXBzL3Jlc291cmNlLWdyb3Vwcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceGroupsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-perun-web-apps-resource-groups',
                templateUrl: './resource-groups.component.html',
                styleUrls: ['./resource-groups.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"] }, { type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_8__["TableConfigService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, { checkbox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['checkbox', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ResourceOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceOverviewComponent", function() { return ResourceOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component */ "../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component.ts");







class ResourceOverviewComponent {
    constructor(resourcesManager, route) {
        this.resourcesManager = resourcesManager;
        this.route = route;
        this.navItems = [];
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            const resourceId = params['resourceId'];
            this.resourcesManager.getResourceById(resourceId).subscribe(resource => {
                this.resource = resource;
                this.initItems();
            });
        });
    }
    initItems() {
        this.navItems = [
            {
                cssIcon: 'perun-group',
                url: `/facilities/${this.resource.facilityId}/resources/${this.resource.id}/groups`,
                label: 'MENU_ITEMS.RESOURCE.ASSIGNED_GROUPS',
                style: 'resource-btn'
            },
            {
                cssIcon: 'perun-settings2',
                url: `/facilities/${this.resource.facilityId}/resources/${this.resource.id}/settings`,
                label: 'MENU_ITEMS.RESOURCE.SETTINGS',
                style: 'resource-btn'
            }
        ];
    }
}
ResourceOverviewComponent.ɵfac = function ResourceOverviewComponent_Factory(t) { return new (t || ResourceOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ResourceOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourceOverviewComponent, selectors: [["app-resource-overview"]], hostVars: 2, hostBindings: function ResourceOverviewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 2, vars: 2, consts: [[3, "items", "size"]], template: function ResourceOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "perun-web-apps-menu-buttons-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.navItems)("size", "small");
    } }, directives: [_libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__["MenuButtonsFieldComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2Utb3ZlcnZpZXcvcmVzb3VyY2Utb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resource-overview',
                templateUrl: './resource-overview.component.html',
                styleUrls: ['./resource-overview.component.scss']
            }]
    }], function () { return [{ type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.ts":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: ResourceSettingsAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceSettingsAttributesComponent", function() { return ResourceSettingsAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @perun-web-apps/perun/components */ "../../libs/perun/components/src/index.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component */ "./src/app/shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component */ "./src/app/shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component.ts");
/* harmony import */ var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @perun-web-apps/perun/utils */ "../../libs/perun/utils/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _shared_components_dialogs_edit_attribute_dialog_edit_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/edit-attribute-dialog/edit-attribute-dialog.component */ "./src/app/shared/components/dialogs/edit-attribute-dialog/edit-attribute-dialog.component.ts");
/* harmony import */ var _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @perun-web-apps/config/table-config */ "../../libs/config/table-config/src/index.ts");
/* harmony import */ var _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../../../libs/perun/components/src/lib/refresh-button/refresh-button.component */ "../../libs/perun/components/src/lib/refresh-button/refresh-button.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component */ "../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _libs_perun_components_src_lib_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../../../libs/perun/components/src/lib/attributes-list/attributes-list.component */ "../../libs/perun/components/src/lib/attributes-list/attributes-list.component.ts");


























const _c0 = ["list"];
function ResourceSettingsAttributesComponent_mat_spinner_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
} }
function ResourceSettingsAttributesComponent_perun_web_apps_attributes_list_16_Template(rf, ctx) { if (rf & 1) {
    const _r1579 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-attributes-list", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ResourceSettingsAttributesComponent_perun_web_apps_attributes_list_16_Template_perun_web_apps_attributes_list_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1579); const ctx_r1578 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1578.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1576 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r1576.pageSize)("filterValue", ctx_r1576.filterValue)("attributes", ctx_r1576.attributes)("selection", ctx_r1576.selection);
} }
class ResourceSettingsAttributesComponent {
    constructor(attributesManager, route, dialog, notificator, tableConfigService, translate) {
        this.attributesManager = attributesManager;
        this.route = route;
        this.dialog = dialog;
        this.notificator = notificator;
        this.tableConfigService = tableConfigService;
        this.translate = translate;
        this.attributes = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        this.filterValue = '';
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_12__["TABLE_ATTRIBUTES_SETTINGS"];
        this.translate.get('RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE').subscribe(value => this.saveSuccessMessage = value);
        this.translate.get('RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE').subscribe(value => this.deleteSuccessMessage = value);
    }
    ngOnInit() {
        this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
        this.route.parent.parent.params.subscribe(params => {
            this.resourceId = params['resourceId'];
            this.refreshTable();
        });
    }
    onDelete() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteAttributeDialogComponent"], {
            width: '450px',
            data: {
                entityId: this.resourceId,
                entity: 'resource',
                attributes: this.selection.selected
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.refreshTable();
            }
        });
    }
    onSave() {
        // have to use this to update attribute with map in it, before saving it
        this.list.updateMapAttributes();
        const dialogRef = this.dialog.open(_shared_components_dialogs_edit_attribute_dialog_edit_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_11__["EditAttributeDialogComponent"], {
            width: '450px',
            data: {
                entityId: this.resourceId,
                entity: 'resource',
                attributes: this.selection.selected
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.refreshTable();
            }
        });
    }
    onCreate() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CreateAttributeDialogComponent"], {
            width: '1050px',
            data: {
                entityId: this.resourceId,
                entity: 'resource',
                notEmptyAttributes: this.attributes,
                style: 'resource-theme'
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'saved') {
                this.refreshTable();
            }
        });
    }
    refreshTable() {
        this.loading = true;
        this.attributesManager.getResourceAttributes(this.resourceId).subscribe(attributes => {
            this.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["filterCoreAttributes"])(attributes);
            this.selection.clear();
            this.loading = false;
        });
    }
    applyFilter(filterValue) {
        this.filterValue = filterValue;
    }
    pageChanged(event) {
        this.pageSize = event.pageSize;
        this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
    }
}
ResourceSettingsAttributesComponent.ɵfac = function ResourceSettingsAttributesComponent_Factory(t) { return new (t || ResourceSettingsAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_12__["TableConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
ResourceSettingsAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourceSettingsAttributesComponent, selectors: [["app-resource-settings-attributes"]], viewQuery: function ResourceSettingsAttributesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
    } }, hostVars: 2, hostBindings: function ResourceSettingsAttributesComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 17, vars: 17, consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "pageSize", "filterValue", "attributes", "selection", "page", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [3, "pageSize", "filterValue", "attributes", "selection", "page"], ["list", ""]], template: function ResourceSettingsAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "perun-web-apps-refresh-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function ResourceSettingsAttributesComponent_Template_perun_web_apps_refresh_button_refresh_4_listener() { return ctx.refreshTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceSettingsAttributesComponent_Template_button_click_5_listener() { return ctx.onCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceSettingsAttributesComponent_Template_button_click_8_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceSettingsAttributesComponent_Template_button_click_11_listener() { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "perun-web-apps-immediate-filter", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function ResourceSettingsAttributesComponent_Template_perun_web_apps_immediate_filter_filter_14_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResourceSettingsAttributesComponent_mat_spinner_15_Template, 1, 0, "mat-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ResourceSettingsAttributesComponent_perun_web_apps_attributes_list_16_Template, 2, 4, "perun-web-apps-attributes-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, "RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 11, "RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.CREATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, "RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SAVE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 15, "RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.DELETE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "SHARED.COMPONENTS.ATTRIBUTES_LIST.FILTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_13__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_15__["ImmediateFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatSpinner"], _libs_perun_components_src_lib_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_18__["AttributesListComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2Utc2V0dGluZ3MvcmVzb3VyY2Utc2V0dGluZ3MtYXR0cmlidXRlcy9yZXNvdXJjZS1zZXR0aW5ncy1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceSettingsAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resource-settings-attributes',
                templateUrl: './resource-settings-attributes.component.html',
                styleUrls: ['./resource-settings-attributes.component.scss']
            }]
    }], function () { return [{ type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"] }, { type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_12__["TableConfigService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }], list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['list']
        }] }); })();


/***/ }),

/***/ "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: ResourceSettingsOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceSettingsOverviewComponent", function() { return ResourceSettingsOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component */ "../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component.ts");







class ResourceSettingsOverviewComponent {
    constructor(route, resourceManager) {
        this.route = route;
        this.resourceManager = resourceManager;
        this.items = [];
    }
    ngOnInit() {
        this.route.parent.parent.params.subscribe(parentParams => {
            const resourceId = parentParams['resourceId'];
            this.resourceManager.getResourceById(resourceId).subscribe(resource => {
                this.resource = resource;
                this.initItems();
            });
        });
    }
    initItems() {
        this.items = [
            {
                cssIcon: 'perun-attributes',
                url: `/facilities/${this.resource.facilityId}/resources/${this.resource.id}/settings/attributes`,
                label: 'MENU_ITEMS.RESOURCE.ATTRIBUTES',
                style: 'resource-btn'
            }
        ];
    }
}
ResourceSettingsOverviewComponent.ɵfac = function ResourceSettingsOverviewComponent_Factory(t) { return new (t || ResourceSettingsOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"])); };
ResourceSettingsOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourceSettingsOverviewComponent, selectors: [["app-resource-settings-overview"]], hostVars: 2, hostBindings: function ResourceSettingsOverviewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 2, vars: 2, consts: [[3, "items", "size"]], template: function ResourceSettingsOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "perun-web-apps-menu-buttons-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items)("size", "small");
    } }, directives: [_libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__["MenuButtonsFieldComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2Utc2V0dGluZ3MvcmVzb3VyY2Utc2V0dGluZ3Mtb3ZlcnZpZXcvcmVzb3VyY2Utc2V0dGluZ3Mtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceSettingsOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resource-settings-overview',
                templateUrl: './resource-settings-overview.component.html',
                styleUrls: ['./resource-settings-overview.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ResourceSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceSettingsComponent", function() { return ResourceSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");
/* harmony import */ var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/animated-router-outlet/animated-router-outlet.component */ "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");




class ResourceSettingsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ResourceSettingsComponent.ɵfac = function ResourceSettingsComponent_Factory(t) { return new (t || ResourceSettingsComponent)(); };
ResourceSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourceSettingsComponent, selectors: [["app-resource-settings"]], hostVars: 2, hostBindings: function ResourceSettingsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 1, vars: 0, template: function ResourceSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-animated-router-outlet");
    } }, directives: [_shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_2__["AnimatedRouterOutletComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2Utc2V0dGluZ3MvcmVzb3VyY2Utc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resource-settings',
                templateUrl: './resource-settings.component.html',
                styleUrls: ['./resource-settings.component.scss'],
                animations: [
                    _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]
                ]
            }]
    }], function () { return []; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=facilities-facilities-module-es2015.js.map