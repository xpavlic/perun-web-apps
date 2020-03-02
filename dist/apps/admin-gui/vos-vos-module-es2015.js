(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vos-vos-module"],{

/***/ "./src/app/vos/components/application-detail/application-detail.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/vos/components/application-detail/application-detail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ApplicationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationDetailComponent", function() { return ApplicationDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_dialogs_application_re_send_notification_dialog_application_re_send_notification_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/dialogs/application-re-send-notification-dialog/application-re-send-notification-dialog.component */ "./src/app/shared/components/dialogs/application-re-send-notification-dialog/application-re-send-notification-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_application_reject_dialog_application_reject_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/dialogs/application-reject-dialog/application-reject-dialog.component */ "./src/app/shared/components/dialogs/application-reject-dialog/application-reject-dialog.component.ts");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _shared_pipes_application_state_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/pipes/application-state.pipe */ "./src/app/shared/pipes/application-state.pipe.ts");
/* harmony import */ var _shared_pipes_user_full_name_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/pipes/user-full-name.pipe */ "./src/app/shared/pipes/user-full-name.pipe.ts");


























function ApplicationDetailComponent_mat_spinner_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 5);
} }
function ApplicationDetailComponent_div_7_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r400 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationDetailComponent_div_7_button_1_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r400); const ctx_r399 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r399.verifyApplication(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.VERIFY"), " ");
} }
function ApplicationDetailComponent_div_7_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r402 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationDetailComponent_div_7_button_2_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r402); const ctx_r401 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r401.approveApplication(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.APPROVE"), " ");
} }
function ApplicationDetailComponent_div_7_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r404 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationDetailComponent_div_7_button_3_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r404); const ctx_r403 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r403.rejectApplication(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.REJECT"), " ");
} }
function ApplicationDetailComponent_div_7_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r406 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationDetailComponent_div_7_button_4_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r406); const ctx_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r405.deleteApplication(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.DELETE"), " ");
} }
function ApplicationDetailComponent_div_7_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_right_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Initial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApplicationDetailComponent_div_7_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Extension ");
} }
function ApplicationDetailComponent_div_7_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.REJECTED_BY"), ": ", ctx_r395.getModifiedAtName(ctx_r395.application.modifiedBy), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 8, ctx_r395.application.modifiedAt, "d.M.y h:mm:ss a"), "");
} }
function ApplicationDetailComponent_div_7_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.APPROVED_BY"), ": ", ctx_r396.getModifiedAtName(ctx_r396.application.modifiedBy), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 8, ctx_r396.application.modifiedAt, "d.M.y h:mm:ss a"), "");
} }
function ApplicationDetailComponent_div_7_table_55_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 32);
} }
function ApplicationDetailComponent_div_7_table_55_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userData_r413 = ctx.$implicit;
    const ctx_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r408.getLabel(userData_r413.formItem), "", userData_r413.formItem.type.startsWith("FROM_FEDERATION") ? "*" : "", "");
} }
function ApplicationDetailComponent_div_7_table_55_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 32);
} }
function ApplicationDetailComponent_div_7_table_55_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userData_r414 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", userData_r414.value, " ");
} }
function ApplicationDetailComponent_div_7_table_55_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 35);
} }
function ApplicationDetailComponent_div_7_table_55_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 36);
} }
function ApplicationDetailComponent_div_7_table_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ApplicationDetailComponent_div_7_table_55_th_2_Template, 1, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ApplicationDetailComponent_div_7_table_55_td_3_Template, 2, 2, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ApplicationDetailComponent_div_7_table_55_th_5_Template, 1, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ApplicationDetailComponent_div_7_table_55_td_6_Template, 2, 1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ApplicationDetailComponent_div_7_table_55_tr_7_Template, 1, 0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ApplicationDetailComponent_div_7_table_55_tr_8_Template, 1, 0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r397 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r397.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r397.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r397.displayedColumns);
} }
function ApplicationDetailComponent_div_7_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("*", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.VALUE_BY_EXTERNALS"), "");
} }
function ApplicationDetailComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r417 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApplicationDetailComponent_div_7_button_1_Template, 3, 3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ApplicationDetailComponent_div_7_button_2_Template, 3, 3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ApplicationDetailComponent_div_7_button_3_Template, 3, 3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ApplicationDetailComponent_div_7_button_4_Template, 3, 3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationDetailComponent_div_7_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r417); const ctx_r416 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r416.resendNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " mail_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "applicationState");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ApplicationDetailComponent_div_7_span_27_Template, 4, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ApplicationDetailComponent_div_7_ng_template_28_Template, 3, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ApplicationDetailComponent_div_7_div_30_Template, 12, 11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ApplicationDetailComponent_div_7_div_31_Template, 12, 11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "redo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "userFullName");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ApplicationDetailComponent_div_7_table_55_Template, 9, 3, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ApplicationDetailComponent_div_7_div_56_Template, 3, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
    const ctx_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r387.application.state == "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r387.application.state == "VERIFIED" || ctx_r387.application.state == "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r387.application.state == "VERIFIED" || ctx_r387.application.state == "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r387.application.state == "REJECTED" || ctx_r387.application.state == "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 24, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.SEND_NOTIFICATION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 26, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.APPLICATION_FOR_VO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r387.application.vo.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 28, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.STATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("outerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 30, ctx_r387.application.state), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 32, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r387.application.type == "INITIAL")("ngIfElse", _r393);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r387.application.state == "REJECTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r387.application.state == "APPROVED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 34, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.SUBMITTED_BY"), ": ", ctx_r387.application.user === null ? ctx_r387.submittedBy() : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 36, ctx_r387.application.user), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 38, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.EXT_SRC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx_r387.application.extSourceName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 40, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.LOA"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx_r387.application.extSourceLoa, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 42, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](54, 44, ctx_r387.application.createdAt, "d.M.y h:mm:ss a"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r387.userData.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r387.userData.length !== 0);
} }
class ApplicationDetailComponent {
    constructor(registrarService, registrarManager, dialog, translate, route, notificator, router) {
        this.registrarService = registrarService;
        this.registrarManager = registrarManager;
        this.dialog = dialog;
        this.translate = translate;
        this.route = route;
        this.notificator = notificator;
        this.router = router;
        this.userData = [];
        this.displayedColumns = ['label', 'value'];
        this.loading = true;
    }
    ngOnInit() {
        this.loading = true;
        this.route.params.subscribe(parentParams => {
            const applicationId = parentParams['applicationId'];
            this.registrarManager.getApplicationById(applicationId).subscribe(application => {
                this.application = application;
                this.registrarManager.getApplicationDataById(this.application.id).subscribe(value => {
                    this.userData = value;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.userData);
                    this.loading = false;
                });
            });
        });
    }
    getLabel(formItem) {
        if (formItem.i18n['en'].label !== null) {
            if (formItem.i18n['en'].label.length !== 0) {
                return formItem.i18n['en'].label; // prerobit na ne en
            }
        }
        return formItem.shortname;
    }
    submittedBy() {
        return this.application.createdBy.slice(this.application.createdBy.lastIndexOf('=') + 1, this.application.createdBy.length);
    }
    getModifiedAtName(modifiedBy) {
        const index = modifiedBy.lastIndexOf('/CN=');
        if (index !== -1) {
            const string = modifiedBy.slice(index + 4, modifiedBy.length).replace('/unstructuredName=', ' ');
            if (string.lastIndexOf('\\') !== -1) {
                return modifiedBy.slice(modifiedBy.lastIndexOf('=') + 1, modifiedBy.length);
            }
            return string;
        }
        return modifiedBy;
    }
    resendNotification() {
        this.dialog.open(_shared_components_dialogs_application_re_send_notification_dialog_application_re_send_notification_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationReSendNotificationDialogComponent"], {
            width: '500px',
            data: { applicationId: this.application.id }
        });
    }
    deleteApplication() {
        this.registrarManager.deleteApplication(this.application.id).subscribe(any => {
            this.translate.get('VO_DETAIL.APPLICATION.APPLICATION_DETAIL.DELETE_MESSAGE').subscribe(successMessage => {
                this.notificator.showSuccess(successMessage);
                this.router.navigateByUrl(this.router.url.substring(0, this.router.url.lastIndexOf('/')));
            });
        });
    }
    rejectApplication() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_application_reject_dialog_application_reject_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ApplicationRejectDialogComponent"], {
            width: '500px',
            data: { applicationId: this.application.id }
        });
        dialogRef.afterClosed().subscribe(value => {
            this.loading = true;
            this.registrarManager.getApplicationById(this.application.id).subscribe(reloaded => {
                this.application = reloaded;
                this.loading = false;
            });
        });
    }
    approveApplication() {
        this.registrarManager.approveApplication(this.application.id).subscribe(application => {
            this.translate.get('VO_DETAIL.APPLICATION.APPLICATION_DETAIL.APPROVE_MESSAGE').subscribe(successMessage => {
                this.notificator.showSuccess(successMessage);
            });
            this.loading = true;
            this.registrarManager.getApplicationById(this.application.id).subscribe(reloaded => {
                this.application = reloaded;
                this.loading = false;
            });
        });
    }
    verifyApplication() {
        this.registrarManager.verifyApplication(this.application.id).subscribe(application => {
            this.translate.get('VO_DETAIL.APPLICATION.APPLICATION_DETAIL.VERIFY_MESSAGE').subscribe(successMessage => {
                this.notificator.showSuccess(successMessage);
            });
            this.loading = true;
            this.registrarManager.getApplicationById(this.application.id).subscribe(reloaded => {
                this.application = reloaded;
                this.loading = false;
            });
        });
    }
}
ApplicationDetailComponent.ɵfac = function ApplicationDetailComponent_Factory(t) { return new (t || ApplicationDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_8__["RegistrarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_9__["RegistrarManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_7__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ApplicationDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationDetailComponent, selectors: [["app-application-detail"]], hostVars: 2, hostBindings: function ApplicationDetailComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 8, vars: 6, consts: [[1, "page-subtitle"], [1, "text-muted"], [1, "mb-4"], ["class", "ml-auto mr-auto", 4, "ngIf"], [4, "ngIf"], [1, "ml-auto", "mr-auto"], ["mat-flat-button", "", "color", "accent", "class", "mr-2", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "warn", "class", "mr-2", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", 1, "mr-2", "mb-2", 3, "click"], [1, "material-icons"], [1, "font-weight-bold"], [3, "outerHTML"], [4, "ngIf", "ngIfElse"], ["extension", ""], ["class", "card p-3 mt-2", 4, "ngIf"], [1, "card", "p-4", "mt-2"], ["mat-table", "", "class", "w-100", 3, "dataSource", 4, "ngIf"], ["class", "font-italic", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "warn", 1, "mr-2", 3, "click"], [1, "align-text-bottom"], [1, "card", "p-3", "mt-2"], [1, "material-icons", "red"], [1, "material-icons", "green"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "label"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "font-weight-bold", 4, "matCellDef"], ["matColumnDef", "value"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", "class", "h-50", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "font-weight-bold"], ["mat-cell", ""], ["mat-header-row", "", 1, "h-50"], ["mat-row", ""], [1, "font-italic"]], template: function ApplicationDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ApplicationDetailComponent_mat_spinner_6_Template, 1, 0, "mat-spinner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ApplicationDetailComponent_div_7_Template, 57, 47, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" #", ctx.application.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], _shared_pipes_application_state_pipe__WEBPACK_IMPORTED_MODULE_16__["ApplicationStatePipe"], _shared_pipes_user_full_name_pipe__WEBPACK_IMPORTED_MODULE_17__["UserFullNamePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWRldGFpbC9hcHBsaWNhdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-application-detail',
                templateUrl: './application-detail.component.html',
                styleUrls: ['./application-detail.component.scss']
            }]
    }], function () { return [{ type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_8__["RegistrarService"] }, { type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_9__["RegistrarManagerService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_7__["NotificatorService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/components/application-form-preview/application-form-preview.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/vos/components/application-form-preview/application-form-preview.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ApplicationFormPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationFormPreviewComponent", function() { return ApplicationFormPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









function ApplicationFormPreviewComponent_mat_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 3);
} }
function ApplicationFormPreviewComponent_div_4_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r429 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationFormPreviewComponent_div_4_button_2_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r429); const ctx_r428 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r428.switchToInitial(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_right_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "VO_DETAIL.SETTINGS.APPLICATION_FORM.PREVIEW_PAGE.SWITCH_INITIAL"), " ");
} }
function ApplicationFormPreviewComponent_div_4_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r431 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationFormPreviewComponent_div_4_button_3_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r431); const ctx_r430 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r430.switchToExtension(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "VO_DETAIL.SETTINGS.APPLICATION_FORM.PREVIEW_PAGE.SWITCH_EXTENSION"), " ");
} }
function ApplicationFormPreviewComponent_div_4_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r433 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationFormPreviewComponent_div_4_button_4_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r433); const ctx_r432 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r432.switchToEnglish(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "public");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "VO_DETAIL.SETTINGS.APPLICATION_FORM.PREVIEW_PAGE.SWITCH_ENGLISH"), " ");
} }
function ApplicationFormPreviewComponent_div_4_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r435 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationFormPreviewComponent_div_4_button_5_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r435); const ctx_r434 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r434.switchToCzech(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "public");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "VO_DETAIL.SETTINGS.APPLICATION_FORM.PREVIEW_PAGE.SWITCH_CZECH"), " ");
} }
function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicationFormItem_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r438 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r438.getLocalizedLabel(applicationFormItem_r436));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r438.getLocalizedHint(applicationFormItem_r436));
} }
function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicationFormItem_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r439 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r439.getLocalizedLabel(applicationFormItem_r436));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r439.getLocalizedHint(applicationFormItem_r436));
} }
function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicationFormItem_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r440 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r440.getLocalizedLabel(applicationFormItem_r436));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r440.getLocalizedHint(applicationFormItem_r436));
} }
function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r454 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r454, "");
} }
function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_4_div_5_Template, 4, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicationFormItem_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r441 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r441.getLocalizedLabel(applicationFormItem_r436));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r441.getLocalizedOptions(applicationFormItem_r436));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "VO_DETAIL.SETTINGS.APPLICATION_FORM.CLEAR_SELECTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r441.getLocalizedHint(applicationFormItem_r436));
} }
function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicationFormItem_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r442 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r442.getLocalizedLabel(applicationFormItem_r436), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_6_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r458 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r458);
} }
function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_6_option_6_Template, 2, 1, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicationFormItem_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r443 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r443.getLocalizedLabel(applicationFormItem_r436));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r443.getLocalizedOptions(applicationFormItem_r436));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r443.getLocalizedHint(applicationFormItem_r436));
} }
function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicationFormItem_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r444 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r444.getLocalizedLabel(applicationFormItem_r436));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r444.getLocalizedHint(applicationFormItem_r436));
} }
function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_8_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r463 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r463);
} }
function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_8_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r465 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_8_Template_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r465); const applicationFormItem_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r464 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r464.mapForCombobox[applicationFormItem_r436.id] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_8_option_9_Template, 2, 1, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_8_div_10_Template, 3, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicationFormItem_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r445 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r445.getLocalizedLabel(applicationFormItem_r436));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r445.mapForCombobox[applicationFormItem_r436.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, "VO_DETAIL.SETTINGS.APPLICATION_FORM.OTHER_VALUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r445.getLocalizedOptions(applicationFormItem_r436));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r445.mapForCombobox[applicationFormItem_r436.id] === "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r445.getLocalizedHint(applicationFormItem_r436));
} }
function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_9_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r469 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r469, " ");
} }
function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_9_div_6_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicationFormItem_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r446 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r446.getLocalizedLabel(applicationFormItem_r436));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r446.getLocalizedOptions(applicationFormItem_r436));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r446.getLocalizedHint(applicationFormItem_r436));
} }
function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicationFormItem_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r447 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r447.getLocalizedLabel(applicationFormItem_r436));
} }
function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicationFormItem_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r448 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r448.getLocalizedLabel(applicationFormItem_r436));
} }
function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "(GMT -12:00) Eniwetok, Kwajalein");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(GMT -11:00) Midway Island, Samoa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "(GMT -10:00) Hawaii");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "(GMT -9:30) Taiohae");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "(GMT -9:00) Alaska");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "(GMT -8:00) Pacific Time (US & Canada)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "(GMT -7:00) Mountain Time (US & Canada)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "(GMT -6:00) Central Time (US & Canada), Mexico City");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "(GMT -4:30) Caracas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "(GMT -3:30) Newfoundland");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "(GMT -3:00) Brazil, Buenos Aires, Georgetown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "(GMT -2:00) Mid-Atlantic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "(GMT -1:00) Azores, Cape Verde Islands");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "(GMT) Western Europe Time, London, Lisbon, Casablanca");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "(GMT +1:00) Brussels, Copenhagen, Madrid, Paris");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "(GMT +2:00) Kaliningrad, South Africa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "(GMT +3:30) Tehran");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "(GMT +4:30) Kabul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "(GMT +5:30) Bombay, Calcutta, Madras, New Delhi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "(GMT +5:45) Kathmandu, Pokhara");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "(GMT +6:00) Almaty, Dhaka, Colombo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "(GMT +6:30) Yangon, Mandalay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "(GMT +7:00) Bangkok, Hanoi, Jakarta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "(GMT +8:00) Beijing, Perth, Singapore, Hong Kong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "(GMT +8:45) Eucla");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "(GMT +9:30) Adelaide, Darwin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "(GMT +10:00) Eastern Australia, Guam, Vladivostok");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "(GMT +10:30) Lord Howe Island");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "(GMT +11:00) Magadan, Solomon Islands, New Caledonia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "(GMT +11:30) Norfolk Island");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "(GMT +12:45) Chatham Islands");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "(GMT +13:00) Apia, Nukualofa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "(GMT +14:00) Line Islands, Tokelau");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicationFormItem_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r449 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r449.getLocalizedLabel(applicationFormItem_r436));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, "VO_DETAIL.SETTINGS.APPLICATION_FORM.NOT_SELECTED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r449.getLocalizedHint(applicationFormItem_r436));
} }
function ApplicationFormPreviewComponent_div_4_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_1_Template, 9, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_2_Template, 9, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_3_Template, 11, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_4_Template, 11, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_5_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_6_Template, 10, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_7_Template, 8, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_8_Template, 14, 8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_9_Template, 10, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_10_Template, 3, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_11_Template, 3, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_12_Template, 92, 5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicationFormItem_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r436.type === "TEXTFIELD" || applicationFormItem_r436.type === "VALIDATED_EMAIL" || applicationFormItem_r436.type === "USERNAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r436.type === "FROM_FEDERATION_SHOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r436.type === "PASSWORD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r436.type === "RADIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r436.type === "HEADING" || applicationFormItem_r436.type === "HTML_COMMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r436.type === "SELECTIONBOX");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r436.type === "TEXTAREA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r436.type === "COMBOBOX");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r436.type === "CHECKBOX");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r436.type === "SUBMIT_BUTTON");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r436.type === "AUTO_SUBMIT_BUTTON");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r436.type === "TIMEZONE");
} }
function ApplicationFormPreviewComponent_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApplicationFormPreviewComponent_div_4_div_7_div_1_Template, 13, 12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicationFormItem_r436 = ctx.$implicit;
    const ctx_r427 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r427.isValid(applicationFormItem_r436));
} }
function ApplicationFormPreviewComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ApplicationFormPreviewComponent_div_4_button_2_Template, 5, 3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ApplicationFormPreviewComponent_div_4_button_3_Template, 5, 3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ApplicationFormPreviewComponent_div_4_button_4_Template, 5, 3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ApplicationFormPreviewComponent_div_4_button_5_Template, 5, 3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ApplicationFormPreviewComponent_div_4_div_7_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r422 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r422.initialPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r422.initialPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r422.language === "cs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r422.language === "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r422.applicationFormItems);
} }
class ApplicationFormPreviewComponent {
    constructor(route) {
        this.route = route;
        this.loading = true;
        this.applicationFormItems = [];
        this.language = 'en';
        this.initialPage = true;
        this.mapForCombobox = new Map();
    }
    ngOnInit() {
        this.route.queryParamMap.subscribe(params => {
            this.applicationFormItems = JSON.parse(params.get('applicationFormItems'));
            this.loading = false;
        });
    }
    switchToInitial() {
        this.initialPage = true;
    }
    switchToExtension() {
        this.initialPage = false;
    }
    switchToEnglish() {
        this.language = 'en';
    }
    switchToCzech() {
        this.language = 'cs';
    }
    getLocalizedOptions(applicationFormItem) {
        if (applicationFormItem.i18n[this.language]) {
            const options = applicationFormItem.i18n[this.language].options;
            if (options !== null && options !== '') {
                const labels = [];
                for (const item of options.split('|')) {
                    labels.push(item.split('#')[1]);
                }
                return labels;
            }
        }
        return [];
    }
    isValid(applicationFormItem) {
        if (applicationFormItem.forDelete) {
            return false;
        }
        for (const type of applicationFormItem.applicationTypes) {
            if (type === 'INITIAL' && this.initialPage) {
                return true;
            }
            if (type === 'EXTENSION' && !this.initialPage) {
                return true;
            }
        }
        return false;
    }
    getLocalizedLabel(applicationFormItem) {
        if (applicationFormItem.i18n[this.language]) {
            return applicationFormItem.i18n[this.language].label;
        }
        return applicationFormItem.shortname;
    }
    getLocalizedHint(applicationFormItem) {
        if (applicationFormItem.i18n[this.language]) {
            return applicationFormItem.i18n[this.language].help;
        }
        return '';
    }
}
ApplicationFormPreviewComponent.ɵfac = function ApplicationFormPreviewComponent_Factory(t) { return new (t || ApplicationFormPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ApplicationFormPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationFormPreviewComponent, selectors: [["app-application-form-preview"]], hostVars: 2, hostBindings: function ApplicationFormPreviewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 5, vars: 5, consts: [[1, "page-subtitle"], ["class", "ml-auto mr-auto", 4, "ngIf"], [4, "ngIf"], [1, "ml-auto", "mr-auto"], [1, "w-100", "d-flex", "mb-2"], ["mat-stroked-button", "", "class", "mr-2", 3, "click", 4, "ngIf"], [1, "card", "mb-4", "p-5"], [4, "ngFor", "ngForOf"], ["mat-stroked-button", "", 1, "mr-2", 3, "click"], [1, "material-icons"], ["class", "mb-2", 4, "ngIf"], [1, "mb-2"], ["class", "d-flex", 4, "ngIf"], [1, "d-flex"], [1, "w-50", "d-flex"], [1, "w-50"], ["type", "text", 1, "w-100"], [1, "ml-2"], ["type", "text", "disabled", "", 1, "w-100"], ["type", "text", 1, "mb-1", "w-100"], ["type", "reset", 3, "value"], ["type", "radio", "name", "temp"], [3, "innerHTML"], [1, "w-100"], [1, "w-100", 3, "ngModel", "ngModelChange"], ["value", "true", "selected", ""], ["value", "false", 4, "ngFor", "ngForOf"], ["class", "w-100", 4, "ngIf"], ["value", "false"], ["type", "text"], ["type", "checkbox"], ["mat-flat-button", "", "color", "accent"], ["name", "timezone_offset", "id", "timezone-offset", 1, "w-100"], ["value", "-12:00", "selected", "selected"], ["value", "-12:00"], ["value", "-11:00"], ["value", "-10:00"], ["value", "-09:50"], ["value", "-09:00"], ["value", "-08:00"], ["value", "-07:00"], ["value", "-06:00"], ["value", "-05:00"], ["value", "-04:50"], ["value", "-04:00"], ["value", "-03:50"], ["value", "-03:00"], ["value", "-02:00"], ["value", "-01:00"], ["value", "+00:00"], ["value", "+01:00"], ["value", "+02:00"], ["value", "+03:00"], ["value", "+03:50"], ["value", "+04:00"], ["value", "+04:50"], ["value", "+05:00"], ["value", "+05:50"], ["value", "+05:75"], ["value", "+06:00"], ["value", "+06:50"], ["value", "+07:00"], ["value", "+08:00"], ["value", "+08:75"], ["value", "+09:00"], ["value", "+09:50"], ["value", "+10:00"], ["value", "+10:50"], ["value", "+11:00"], ["value", "+11:50"], ["value", "+12:00"], ["value", "+12:75"], ["value", "+13:00"], ["value", "+14:00"]], template: function ApplicationFormPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ApplicationFormPreviewComponent_mat_spinner_3_Template, 1, 0, "mat-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ApplicationFormPreviewComponent_div_4_Template, 8, 5, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "VO_DETAIL.SETTINGS.APPLICATION_FORM.PREVIEW_PAGE.TITLE"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWZvcm0tcHJldmlldy9hcHBsaWNhdGlvbi1mb3JtLXByZXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationFormPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-application-form-preview',
                templateUrl: './application-form-preview.component.html',
                styleUrls: ['./application-form-preview.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/components/expiration-settings/expiration-settings.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/vos/components/expiration-settings/expiration-settings.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ExpirationAttrValue, ExpirationSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpirationAttrValue", function() { return ExpirationAttrValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpirationSettingsComponent", function() { return ExpirationSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slide-toggle */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/radio */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _shared_components_settings_toggle_item_settings_toggle_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/settings-toggle-item/settings-toggle-item.component */ "./src/app/shared/components/settings-toggle-item/settings-toggle-item.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");















function ExpirationSettingsComponent_div_0_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r1241 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_div_21_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1241); const ctx_r1240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r1240.currentConfiguration.periodStatic = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", ctx_r1232.datePattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_INPUT_STATIC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1232.currentConfiguration.periodStatic);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "VO_MANAGEMENT.SETTINGS.EXPIRATION.DP_HINT"));
} }
function ExpirationSettingsComponent_div_0_div_22_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1243 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1243.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1243.text);
} }
function ExpirationSettingsComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r1245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_div_22_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1245); const ctx_r1244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r1244.currentConfiguration.periodDynamic = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_div_22_Template_mat_select_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1245); const ctx_r1246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r1246.currentConfiguration.periodDynamicUnit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExpirationSettingsComponent_div_0_div_22_mat_option_9_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", ctx_r1233.dynamicAmountPattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "VO_MANAGEMENT.SETTINGS.EXPIRATION.AMOUNT_VALUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1233.currentConfiguration.periodDynamic);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "VO_MANAGEMENT.SETTINGS.EXPIRATION.AMOUNT_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1233.currentConfiguration.periodDynamicUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1233.amountOptions);
} }
function ExpirationSettingsComponent_div_0_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loa_r1247 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", loa_r1247);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](loa_r1247);
} }
function ExpirationSettingsComponent_div_0_mat_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loa_r1248 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", loa_r1248);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](loa_r1248);
} }
function ExpirationSettingsComponent_div_0_mat_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1249 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1249.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1249.text);
} }
function ExpirationSettingsComponent_div_0_mat_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loa_r1250 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", loa_r1250);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", loa_r1250, " ");
} }
function ExpirationSettingsComponent_div_0_div_62_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r1256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_div_62_div_10_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1256); const ctx_r1255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r1255.currentConfiguration.specialLoaPeriodStatic = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", ctx_r1253.datePattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_INPUT_STATIC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1253.currentConfiguration.specialLoaPeriodStatic);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "VO_MANAGEMENT.SETTINGS.EXPIRATION.DP_HINT"));
} }
function ExpirationSettingsComponent_div_0_div_62_div_11_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1258 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1258.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1258.text);
} }
function ExpirationSettingsComponent_div_0_div_62_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r1260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_div_62_div_11_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1260); const ctx_r1259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r1259.currentConfiguration.specialLoaPeriodDynamic = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_div_62_div_11_Template_mat_select_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1260); const ctx_r1261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r1261.currentConfiguration.specialLoaPeriodDynamicUnit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExpirationSettingsComponent_div_0_div_62_div_11_mat_option_9_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", ctx_r1254.dynamicAmountPattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "VO_MANAGEMENT.SETTINGS.EXPIRATION.AMOUNT_VALUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1254.currentConfiguration.specialLoaPeriodDynamic);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "VO_MANAGEMENT.SETTINGS.EXPIRATION.AMOUNT_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1254.currentConfiguration.specialLoaPeriodDynamicUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1254.amountOptions);
} }
function ExpirationSettingsComponent_div_0_div_62_Template(rf, ctx) { if (rf & 1) {
    const _r1263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_div_62_Template_mat_radio_group_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1263); const ctx_r1262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r1262.currentConfiguration.specialLoaPeriodType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-radio-button", 9, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-radio-button", 11, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExpirationSettingsComponent_div_0_div_62_div_10_Template, 7, 8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExpirationSettingsComponent_div_0_div_62_div_11_Template, 10, 10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-checkbox", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_div_62_Template_mat_checkbox_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1263); const ctx_r1264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r1264.currentConfiguration.specialLoaPeriodExtendExpiredMembers = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r1252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r1239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1239.currentConfiguration.specialLoaPeriodType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, "VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_TYPE_STATIC"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, "VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_TYPE_DYNAMIC"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1251.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1252.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1239.currentConfiguration.specialLoaPeriodExtendExpiredMembers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 11, "VO_MANAGEMENT.SETTINGS.EXPIRATION.EXTEND_EXPIRED_MEMBERS_CHECKBOX"), " ");
} }
function ExpirationSettingsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1266 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpirationSettingsComponent_div_0_Template_h1_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1266); const _r1229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r1229.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-slide-toggle", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_Template_mat_slide_toggle_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1266); const ctx_r1267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1267.currentConfiguration.enabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-radio-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_Template_mat_radio_group_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1266); const ctx_r1268 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1268.currentConfiguration.periodType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-radio-button", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-radio-button", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ExpirationSettingsComponent_div_0_div_21_Template, 7, 8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ExpirationSettingsComponent_div_0_div_22_Template, 10, 10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "app-settings-toggle-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function ExpirationSettingsComponent_div_0_Template_app_settings_toggle_item_modelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1266); const ctx_r1269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1269.currentConfiguration.doNotAllowLoasEnabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-placeholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_Template_mat_select_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1266); const ctx_r1270 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1270.currentConfiguration.doNotAllowLoas = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ExpirationSettingsComponent_div_0_mat_option_30_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "app-settings-toggle-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function ExpirationSettingsComponent_div_0_Template_app_settings_toggle_item_modelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1266); const ctx_r1271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1271.currentConfiguration.doNotExtendLoasEnabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-placeholder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_Template_mat_select_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1266); const ctx_r1272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1272.currentConfiguration.doNotExtendLoas = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ExpirationSettingsComponent_div_0_mat_option_38_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "app-settings-toggle-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function ExpirationSettingsComponent_div_0_Template_app_settings_toggle_item_modelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1266); const ctx_r1273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1273.currentConfiguration.gracePeriodEnabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_Template_input_ngModelChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1266); const ctx_r1274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1274.currentConfiguration.gracePeriod = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_Template_mat_select_ngModelChange_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1266); const ctx_r1275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1275.currentConfiguration.gracePeriodUnit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ExpirationSettingsComponent_div_0_mat_option_50_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "app-settings-toggle-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function ExpirationSettingsComponent_div_0_Template_app_settings_toggle_item_modelChange_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1266); const ctx_r1276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1276.currentConfiguration.specialLoaPeriodEnabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-select", 8, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_Template_mat_select_ngModelChange_59_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1266); const ctx_r1277 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1277.currentConfiguration.specialLoa = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ExpirationSettingsComponent_div_0_mat_option_61_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ExpirationSettingsComponent_div_0_div_62_Template, 16, 13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpirationSettingsComponent_div_0_Template_button_click_64_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1266); const ctx_r1278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1278.saveChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const _r1230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const _r1231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
    const ctx_r1228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("unselected-setting", !_r1229.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 37, "VO_MANAGEMENT.SETTINGS.EXPIRATION.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1228.currentConfiguration.enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@openClose", _r1229.checked ? "open" : "closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 39, "VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_LABEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1228.currentConfiguration.periodType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 41, "VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_TYPE_STATIC"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 43, "VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_TYPE_DYNAMIC"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1230.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1231.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r1228.currentConfiguration.doNotAllowLoasEnabled)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 45, "VO_MANAGEMENT.SETTINGS.EXPIRATION.DONT_ALLOW_LOA_LABEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 47, "VO_MANAGEMENT.SETTINGS.EXPIRATION.DONT_ALLOW_LOA_SELECT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1228.currentConfiguration.doNotAllowLoas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1228.LOAS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r1228.currentConfiguration.doNotExtendLoasEnabled)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 49, "VO_MANAGEMENT.SETTINGS.EXPIRATION.DONT_EXTEND_LOA_LABEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 51, "VO_MANAGEMENT.SETTINGS.EXPIRATION.DONT_EXTEND_LOA_SELECT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1228.currentConfiguration.doNotExtendLoas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1228.LOAS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r1228.currentConfiguration.gracePeriodEnabled)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 53, "VO_MANAGEMENT.SETTINGS.EXPIRATION.GRACE_PERIOD_LABEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", ctx_r1228.dynamicAmountPattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 55, "VO_MANAGEMENT.SETTINGS.EXPIRATION.GRACE_AMOUNT_VALUE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1228.currentConfiguration.gracePeriod);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 57, "VO_MANAGEMENT.SETTINGS.EXPIRATION.GRACE_AMOUNT_TYPE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1228.currentConfiguration.gracePeriodUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1228.amountOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r1228.currentConfiguration.specialLoaPeriodEnabled)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 59, "VO_MANAGEMENT.SETTINGS.EXPIRATION.LOA_PERIOD_LABEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 61, "VO_MANAGEMENT.SETTINGS.EXPIRATION.SPECIAL_LOA_SELECT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1228.currentConfiguration.specialLoa);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1228.LOAS);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1228.currentConfiguration.specialLoa !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1228.areChangesMade());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 63, "VO_MANAGEMENT.SETTINGS.EXPIRATION.SAVE"), " ");
} }
class ExpirationAttrValue {
}
class ExpirationSettingsComponent {
    constructor() {
        this.saveAttribute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.LOAS = [0, 1, 2];
        this.datePattern = '^(3[01]|[12][0-9]|0?[1-9])\\.(1[012]|0?[1-9])\\.$';
        this.dynamicAmountPattern = '^[1-9]+$';
        // TODO translation
        this.amountOptions = [{
                value: 'd',
                text: 'Days'
            }, {
                value: 'm',
                text: 'Months'
            }, {
                value: 'y',
                text: 'Years'
            }];
    }
    ngOnInit() {
        const loaPeriods = new Map();
        this.LOAS.forEach(loa => loaPeriods.set(loa, ''));
        this.initialConfiguration = this.unParseAttrValue(this.expirationAttribute.value);
        this.currentConfiguration = this.unParseAttrValue(this.expirationAttribute.value);
    }
    saveChanges() {
        this.saveAttribute.emit(this.parseExpirationRulesAttribute());
    }
    areChangesMade() {
        const currentValue = this.parseAttributeValueFromConfig(this.currentConfiguration);
        const initValue = this.parseAttributeValueFromConfig(this.initialConfiguration);
        if (initValue === null) {
            return currentValue !== null;
        }
        if (currentValue === null) {
            return true;
        }
        return currentValue.period !== initValue.period ||
            currentValue.gracePeriod !== initValue.gracePeriod ||
            currentValue.doNotExtendLoa !== initValue.doNotExtendLoa ||
            currentValue.doNotAllowLoa !== initValue.doNotAllowLoa ||
            currentValue.periodLoa !== initValue.periodLoa;
    }
    parseExpirationRulesAttribute() {
        this.expirationAttribute.value = this.parseAttributeValueFromConfig(this.currentConfiguration);
        return this.expirationAttribute;
    }
    parsePeriod(config) {
        switch (config.periodType) {
            case 'dynamic':
                return this.parseDynamicPeriod(config);
            case 'static':
                return this.parseStaticPeriod(config);
            default:
            // TODO show error
        }
    }
    createInitConfiguration() {
        const loaPeriods = new Map();
        this.LOAS.forEach(loa => loaPeriods.set(loa, ''));
        return {
            enabled: false,
            periodType: null,
            periodStatic: '',
            periodDynamic: '',
            periodDynamicUnit: 'm',
            doNotAllowLoas: [],
            doNotAllowLoasEnabled: false,
            doNotExtendLoas: [],
            doNotExtendLoasEnabled: false,
            gracePeriodEnabled: false,
            gracePeriod: null,
            gracePeriodUnit: null,
            specialLoaPeriodEnabled: false,
            specialLoaPeriod: '',
            specialLoa: null,
            specialLoaPeriodType: null,
            specialLoaPeriodDynamic: '',
            specialLoaPeriodDynamicUnit: 'm',
            specialLoaPeriodStatic: '',
            specialLoaPeriodExtendExpiredMembers: false
        };
    }
    unParseAttrValue(value) {
        let config = this.createInitConfiguration();
        if (value == null) {
            return config;
        }
        if (value.period !== undefined && value.period.length > 0) {
            config = this.setPeriodValues(value, config);
        }
        if (value.doNotAllowLoa !== undefined && value.doNotAllowLoa.length > 0) {
            config = this.setDoNotAllowLoasValues(value, config);
        }
        if (value.doNotExtendLoa !== undefined && value.doNotExtendLoa.length > 0) {
            config = this.setDoNotExtendLoasValues(value, config);
        }
        if (value.gracePeriod !== undefined && value.gracePeriod.length > 0) {
            config = this.setGracePeriodValues(value, config);
        }
        if (value.periodLoa !== undefined && value.periodLoa.length > 0) {
            config = this.setSpecialLoaPeriodValues(value, config);
        }
        return config;
    }
    setPeriodValues(value, config) {
        config.enabled = true;
        if (value.period.startsWith('+')) {
            config.periodType = 'dynamic';
            const unit = value.period.charAt(value.period.length - 1);
            config.periodDynamic = value.period.substring(1, value.period.length - 1);
            config.periodDynamicUnit = unit;
        }
        else {
            config.periodType = 'static';
            config.periodStatic = value.period;
        }
        return config;
    }
    setDoNotAllowLoasValues(value, config) {
        const loas = [];
        value.doNotAllowLoa.split(',').forEach(l => loas.push(parseInt(l.trim(), 10)));
        config.doNotAllowLoas = loas;
        if (loas.length > 0) {
            config.doNotAllowLoasEnabled = true;
        }
        return config;
    }
    setDoNotExtendLoasValues(value, config) {
        const loas = [];
        value.doNotExtendLoa.split(',').forEach(l => loas.push(parseInt(l.trim(), 10)));
        config.doNotExtendLoas = loas;
        if (loas.length > 0) {
            config.doNotExtendLoasEnabled = true;
        }
        return config;
    }
    setGracePeriodValues(value, config) {
        config.gracePeriodEnabled = true;
        const unit = value.gracePeriod.charAt(value.gracePeriod.length - 1);
        config.gracePeriod = value.gracePeriod.substring(0, value.gracePeriod.length - 1);
        config.gracePeriodUnit = unit;
        return config;
    }
    setSpecialLoaPeriodValues(value, config) {
        config.specialLoa = parseInt(value.periodLoa.substring(0, value.periodLoa.indexOf('|')), 10);
        config.specialLoaPeriodEnabled = true;
        let specialPeriodValue = value.periodLoa.substring(value.periodLoa.indexOf('|') + 1, value.periodLoa.length);
        if (specialPeriodValue.startsWith('+')) {
            if (specialPeriodValue.endsWith('.')) {
                config.specialLoaPeriodExtendExpiredMembers = true;
                specialPeriodValue = specialPeriodValue.substring(0, specialPeriodValue.length - 1);
            }
            config.specialLoaPeriodType = 'dynamic';
            const unit = specialPeriodValue.charAt(specialPeriodValue.length - 1);
            config.specialLoaPeriodDynamic = specialPeriodValue.substring(1, specialPeriodValue.length - 1);
            config.specialLoaPeriodDynamicUnit = unit;
        }
        else {
            if (specialPeriodValue.endsWith('..')) {
                config.specialLoaPeriodExtendExpiredMembers = true;
                specialPeriodValue = specialPeriodValue.substring(0, specialPeriodValue.length - 1);
            }
            config.specialLoaPeriodType = 'static';
            config.specialLoaPeriodStatic = specialPeriodValue;
        }
        return config;
    }
    parseDynamicPeriod(config) {
        return '+' + config.periodDynamic + config.periodDynamicUnit;
    }
    parseStaticPeriod(config) {
        return config.periodStatic;
    }
    parseDontAllowLoas(config) {
        if (!config.doNotAllowLoasEnabled) {
            return null;
        }
        let dontAllowLoas = '';
        config.doNotAllowLoas.forEach(loa => dontAllowLoas += loa + ',');
        if (dontAllowLoas.length > 0) {
            dontAllowLoas = dontAllowLoas.substring(0, dontAllowLoas.length - 1);
        }
        return dontAllowLoas.length > 0 ? dontAllowLoas : null;
    }
    parseDontExtendLoas(config) {
        if (!config.doNotExtendLoasEnabled) {
            return null;
        }
        let dontExtendLoas = '';
        config.doNotExtendLoas.forEach(loa => dontExtendLoas += loa + ',');
        if (dontExtendLoas.length > 0) {
            dontExtendLoas = dontExtendLoas.substring(0, dontExtendLoas.length - 1);
        }
        return dontExtendLoas.length > 0 ? dontExtendLoas : null;
    }
    parseGracePeriod(config) {
        if (!config.gracePeriodEnabled) {
            return null;
        }
        return config.gracePeriod + config.gracePeriodUnit;
    }
    parseSpecialLoaPeriod(config) {
        if (!config.specialLoaPeriodEnabled) {
            return null;
        }
        let period = config.specialLoa + '|';
        switch (config.specialLoaPeriodType) {
            case 'static':
                period += this.parseSpecialLoaPeriodStatic(config);
                break;
            case 'dynamic':
                period += this.parseSpecialLoaPeriodDynamic(config);
                break;
            default:
            // TODO show error
        }
        if (period != null && config.specialLoaPeriodExtendExpiredMembers) {
            period += '.';
        }
        return period;
    }
    parseSpecialLoaPeriodStatic(config) {
        return config.specialLoaPeriodStatic;
    }
    parseSpecialLoaPeriodDynamic(config) {
        return '+' + config.specialLoaPeriodDynamic + config.specialLoaPeriodDynamicUnit;
    }
    parseAttributeValueFromConfig(config) {
        if (!config.enabled) {
            return null;
        }
        const period = this.parsePeriod(config);
        const dontAllowLoas = this.parseDontAllowLoas(config);
        const dontExtendLoad = this.parseDontExtendLoas(config);
        const gracePeriod = this.parseGracePeriod(config);
        const specialLoaPeriod = this.parseSpecialLoaPeriod(config);
        const value = {
            period: period,
        };
        if (dontExtendLoad !== null) {
            value.doNotExtendLoa = dontExtendLoad;
        }
        if (dontAllowLoas !== null) {
            value.doNotAllowLoa = dontAllowLoas;
        }
        if (gracePeriod !== null) {
            value.gracePeriod = gracePeriod;
        }
        if (specialLoaPeriod !== null) {
            value.periodLoa = specialLoaPeriod;
        }
        return value;
    }
}
ExpirationSettingsComponent.ɵfac = function ExpirationSettingsComponent_Factory(t) { return new (t || ExpirationSettingsComponent)(); };
ExpirationSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpirationSettingsComponent, selectors: [["app-expiration-settings"]], inputs: { expirationAttribute: "expirationAttribute" }, outputs: { saveAttribute: "saveAttribute" }, decls: 1, vars: 1, consts: [["class", "card settings-card col-12 col-md-12 col-xl-6", 4, "ngIf"], [1, "card", "settings-card", "col-12", "col-md-12", "col-xl-6"], [1, "d-flex", "flex-row", "align-items-baseline", "justify-content-between"], [1, "settings-header", 3, "click"], ["color", "primary", 1, "ml-4", 3, "ngModel", "ngModelChange"], ["mainToggle", ""], [1, "setting-item", "pt-2"], [1, "ml-1"], [3, "ngModel", "ngModelChange"], ["color", "primary", "value", "static", 1, "mr-3"], ["staticPeriod", ""], ["color", "primary", "value", "dynamic"], ["dynamicPeriod", ""], ["class", "form-container", 4, "ngIf"], ["class", "d-flex flex-row", 4, "ngIf"], [3, "model", "title", "modelChange"], ["multiple", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row"], [1, "mr-2", "amount-field"], ["matInput", "", 3, "pattern", "ngModel", "placeholder", "ngModelChange"], ["specialLoaSelect", ""], ["class", "mt-2", 4, "ngIf"], [1, "w-100", "d-flex", "mt-3", "mb-3"], ["mat-flat-button", "", "color", "primary", 1, "ml-auto", 3, "disabled", "click"], [1, "form-container"], [1, "date-field"], [3, "value"], [1, "mt-2"], ["loaStaticRadioButton", ""], ["loaDynamicRadioButton", ""], ["color", "primary", 3, "ngModel", "ngModelChange"]], template: function ExpirationSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExpirationSettingsComponent_div_0_Template, 67, 65, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentConfiguration);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioButton"], _shared_components_settings_toggle_item_settings_toggle_item_component__WEBPACK_IMPORTED_MODULE_6__["SettingsToggleItemComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatPlaceholder"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: [".period-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 1.5rem;\n}\n\n.amount-field[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.date-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.settings-header[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n  font-size: 1.25rem;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.settings-card[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.5rem 0.5rem 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZlY3RvdW4vZ2l0L3BlcnVuLXdlYi1hcHBzL2FwcHMvYWRtaW4tZ3VpL3NyYy9hcHAvdm9zL2NvbXBvbmVudHMvZXhwaXJhdGlvbi1zZXR0aW5ncy9leHBpcmF0aW9uLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9hZG1pbi1ndWkvc3JjL2FwcC92b3MvY29tcG9uZW50cy9leHBpcmF0aW9uLXNldHRpbmdzL2V4cGlyYXRpb24tc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBRUEsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxvQ0FBQTtBQ0FGIiwiZmlsZSI6ImFwcHMvYWRtaW4tZ3VpL3NyYy9hcHAvdm9zL2NvbXBvbmVudHMvZXhwaXJhdGlvbi1zZXR0aW5ncy9leHBpcmF0aW9uLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcmlvZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG5cbi5hbW91bnQtZmllbGQge1xuICB3aWR0aDogODBweDtcbn1cblxuLmRhdGUtZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNldHRpbmdzLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDAuNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5zZXR0aW5ncy1jYXJkIHtcbiAgcGFkZGluZzogLjVyZW0gMS41cmVtIC41cmVtIDEuNXJlbTtcbn1cbiIsIi5wZXJpb2QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4uYW1vdW50LWZpZWxkIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5kYXRlLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZXR0aW5ncy1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnNldHRpbmdzLWNhcmQge1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtIDAuNXJlbSAxLjVyZW07XG59Il19 */"], data: { animation: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__["openClose"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpirationSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-expiration-settings',
                templateUrl: './expiration-settings.component.html',
                styleUrls: ['./expiration-settings.component.scss'],
                animations: [
                    _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__["openClose"]
                ]
            }]
    }], function () { return []; }, { expirationAttribute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], saveAttribute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/vos/components/notification-list/notification-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/vos/components/notification-list/notification-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NotificationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationListComponent", function() { return NotificationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _shared_components_dialogs_add_edit_notification_dialog_add_edit_notification_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component */ "./src/app/shared/components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

























function NotificationListComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r1292 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NotificationListComponent_th_3_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1292); const ctx_r1291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event ? ctx_r1291.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1279.selection.hasValue() && ctx_r1279.isAllSelected())("indeterminate", ctx_r1279.selection.hasValue() && !ctx_r1279.isAllSelected())("aria-label", ctx_r1279.checkboxLabel());
} }
function NotificationListComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    const _r1295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationListComponent_td_4_Template_mat_checkbox_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1295); return $event.stopPropagation(); })("change", function NotificationListComponent_td_4_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1295); const row_r1293 = ctx.$implicit; const ctx_r1296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event ? ctx_r1296.toggle(row_r1293) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1293 = ctx.$implicit;
    const ctx_r1280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1280.selection.isSelected(row_r1293))("aria-label", ctx_r1280.checkboxLabel(row_r1293));
} }
function NotificationListComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VO_DETAIL.SETTINGS.NOTIFICATIONS.TABLE_EMAIL_ID"), " ");
} }
function NotificationListComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicationMail_r1297 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](applicationMail_r1297.id);
} }
function NotificationListComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VO_DETAIL.SETTINGS.NOTIFICATIONS.TABLE_EMAIL_TYPE"), " ");
} }
function NotificationListComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicationMail_r1298 = ctx.$implicit;
    const ctx_r1284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1284.getMailType(applicationMail_r1298));
} }
function NotificationListComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VO_DETAIL.SETTINGS.NOTIFICATIONS.TABLE_APPLICATION_TYPE"), " ");
} }
function NotificationListComponent_td_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_right_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "VO_DETAIL.SETTINGS.NOTIFICATIONS.TABLE_APPLICATION_TYPE_INITIAL"), " ");
} }
function NotificationListComponent_td_13_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "VO_DETAIL.SETTINGS.NOTIFICATIONS.TABLE_APPLICATION_TYPE_EXTENSION"), " ");
} }
function NotificationListComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationListComponent_td_13_div_1_Template, 5, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NotificationListComponent_td_13_ng_template_2_Template, 4, 3, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicationMail_r1299 = ctx.$implicit;
    const _r1301 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationMail_r1299.appType == "INITIAL")("ngIfElse", _r1301);
} }
function NotificationListComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VO_DETAIL.SETTINGS.NOTIFICATIONS.TABLE_SENDING_ENABLED"), " ");
} }
function NotificationListComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r1305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationListComponent_td_16_Template_mat_checkbox_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1305); return $event.stopPropagation(); })("change", function NotificationListComponent_td_16_Template_mat_checkbox_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1305); const applicationMail_r1303 = ctx.$implicit; const ctx_r1306 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1306.changeSending(applicationMail_r1303); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const applicationMail_r1303 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", applicationMail_r1303.send);
} }
function NotificationListComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
function NotificationListComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r1309 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationListComponent_tr_18_Template_tr_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1309); const applicationMail_r1307 = ctx.$implicit; const ctx_r1308 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1308.openApplicationMailDetail(applicationMail_r1307); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [5, 10, 25]; };
class NotificationListComponent {
    constructor(registrarService, registrarManager, translate, notificator, dialog) {
        this.registrarService = registrarService;
        this.registrarManager = registrarManager;
        this.translate = translate;
        this.notificator = notificator;
        this.dialog = dialog;
        this.displayedColumns = ['select', 'id', 'mailType', 'appType', 'send'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set matSort(ms) {
        this.sort = ms;
        this.setDataSource();
    }
    ngOnChanges() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.applicationMails);
        this.setDataSource();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
        this.selectionChange.emit(this.selection);
    }
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
    }
    changeSending(applicationMail) {
        if (applicationMail.send) {
            this.registrarService.setSendingEnabled(0, [applicationMail]).subscribe(() => {
                applicationMail.send = false;
            });
        }
        else {
            this.registrarService.setSendingEnabled(1, [applicationMail]).subscribe(() => {
                applicationMail.send = true;
            });
        }
    }
    openApplicationMailDetail(applicationMail) {
        const dialog = this.dialog.open(_shared_components_dialogs_add_edit_notification_dialog_add_edit_notification_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddEditNotificationDialogComponent"], {
            width: '1400px',
            height: '700px',
            data: { voId: this.voId, groupId: this.groupId, createMailNotification: false, applicationMail: applicationMail }
        });
        dialog.afterClosed().subscribe(success => {
            if (success) {
                this.translate.get('VO_DETAIL.SETTINGS.NOTIFICATIONS.EDIT_SUCCESS').subscribe(text => {
                    this.notificator.showSuccess(text);
                });
                this.selection.clear();
                this.selectionChange.emit(this.selection);
                this.update();
            }
        });
    }
    getMailType(applicationMail) {
        let value = '';
        if (applicationMail.mailType === undefined || applicationMail.mailType === null || applicationMail.mailType === '') {
            value = '';
        }
        else {
            this.translate.get('VO_DETAIL.SETTINGS.NOTIFICATIONS.MAIL_TYPE_' + applicationMail.mailType).subscribe(text => {
                value = text;
            });
        }
        return value;
    }
    update() {
        if (this.groupId) {
            this.registrarService.getApplicationMailsForGroup(this.groupId).subscribe(mails => {
                this.updateTable(mails);
            });
        }
        else {
            this.registrarService.getApplicationMailsForVo(this.voId).subscribe(mails => {
                this.updateTable(mails);
            });
        }
    }
    toggle(row) {
        this.selection.toggle(row);
        this.selectionChange.emit(this.selection);
    }
    updateTable(mails) {
        this.applicationMails = mails;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.applicationMails);
        this.setDataSource();
    }
    setDataSource() {
        if (!!this.dataSource) {
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        }
    }
}
NotificationListComponent.ɵfac = function NotificationListComponent_Factory(t) { return new (t || NotificationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_9__["RegistrarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["RegistrarManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_8__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
NotificationListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationListComponent, selectors: [["app-notification-list"]], viewQuery: function NotificationListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matSort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, inputs: { applicationMails: "applicationMails", voId: "voId", groupId: "groupId", selection: "selection" }, outputs: { selectionChange: "selectionChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()], decls: 20, vars: 7, consts: [[1, "card-body"], ["mat-table", "", "matSort", "", "matSortDirection", "asc", "matSortDisableClear", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "static-column-size", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "mailType"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "appType"], ["matColumnDef", "send"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "dark-hover-list-item", 3, "click", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], ["color", "primary", 3, "checked", "indeterminate", "aria-label", "change"], ["mat-cell", "", 1, "static-column-size"], ["color", "primary", 3, "checked", "aria-label", "click", "change"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngIf", "ngIfElse"], ["extension", ""], ["matTooltip", "Initial", "matTooltipPosition", "above"], ["matTooltip", "Extension", "matTooltipPosition", "above"], [3, "ngModel", "click", "change"], ["mat-header-row", ""], ["mat-row", "", 1, "dark-hover-list-item", 3, "click"]], template: function NotificationListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotificationListComponent_th_3_Template, 2, 3, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotificationListComponent_td_4_Template, 2, 2, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotificationListComponent_th_6_Template, 3, 3, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotificationListComponent_td_7_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NotificationListComponent_th_9_Template, 3, 3, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NotificationListComponent_td_10_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NotificationListComponent_th_12_Template, 3, 3, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NotificationListComponent_td_13_Template, 4, 2, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NotificationListComponent_th_15_Template, 3, 3, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NotificationListComponent_td_16_Template, 3, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NotificationListComponent_tr_17_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NotificationListComponent_tr_18_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-paginator", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.applicationMails.length)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi1saXN0L25vdGlmaWNhdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notification-list',
                templateUrl: './notification-list.component.html',
                styleUrls: ['./notification-list.component.scss']
            }]
    }], function () { return [{ type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_9__["RegistrarService"] }, { type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["RegistrarManagerService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }, { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_8__["NotificatorService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, { applicationMails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], voId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], matSort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/group-detail-page/group-detail-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/vos/pages/group-detail-page/group-detail-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: GroupDetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailPageComponent", function() { return GroupDetailPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/side-menu/side-menu-item.service */ "./src/app/shared/side-menu/side-menu-item.service.ts");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/back-button/back-button.component */ "./src/app/shared/components/back-button/back-button.component.ts");
/* harmony import */ var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/animated-router-outlet/animated-router-outlet.component */ "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

















const _c0 = function (a1, a3) { return ["/organizations", a1, "groups", a3]; };
function GroupDetailPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-back-button");
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
    const ctx_r370 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "GROUP_DETAIL.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx_r370.vo.id, ctx_r370.group.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r370.group.shortName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0#", ctx_r370.group.id, " ");
} }
class GroupDetailPageComponent {
    constructor(sideMenuService, voService, route, sideMenuItemService, groupService) {
        this.sideMenuService = sideMenuService;
        this.voService = voService;
        this.route = route;
        this.sideMenuItemService = sideMenuItemService;
        this.groupService = groupService;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            const voId = params['voId'];
            const groupId = params['groupId'];
            this.voService.getVoById(voId).subscribe(vo => {
                this.vo = vo;
                this.groupService.getGroupById(groupId).subscribe(group => {
                    this.group = group;
                    const voSideMenuItem = this.sideMenuItemService.parseVo(vo);
                    const groupSideMenuItem = this.sideMenuItemService.parseGroup(group);
                    this.sideMenuService.setAccessMenuItems([voSideMenuItem, groupSideMenuItem]);
                });
            });
        });
    }
}
GroupDetailPageComponent.ɵfac = function GroupDetailPageComponent_Factory(t) { return new (t || GroupDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_5__["VoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_6__["GroupsManagerService"])); };
GroupDetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GroupDetailPageComponent, selectors: [["app-group-detail-page"]], decls: 1, vars: 1, consts: [["class", "container-fluid pl-xl-5 pr-xl-5 group-theme", 4, "ngIf"], [1, "container-fluid", "pl-xl-5", "pr-xl-5", "group-theme"], [1, "page-title"], [1, "group-link", 3, "routerLink"], [1, "text-muted"]], template: function GroupDetailPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GroupDetailPageComponent_div_0_Template, 10, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vo !== undefined && ctx.group !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_8__["BackButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_9__["AnimatedRouterOutletComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1kZXRhaWwtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupDetailPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-group-detail-page',
                templateUrl: './group-detail-page.component.html',
                styleUrls: ['./group-detail-page.component.scss'],
                animations: [
                    _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]
                ]
            }]
    }], function () { return [{ type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"] }, { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_5__["VoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuItemService"] }, { type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_6__["GroupsManagerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/vos/pages/group-detail-page/group-overview/group-overview.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/vos/pages/group-detail-page/group-overview/group-overview.component.ts ***!
  \****************************************************************************************/
/*! exports provided: GroupOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupOverviewComponent", function() { return GroupOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/menu-buttons-field/menu-buttons-field.component */ "./src/app/shared/components/menu-buttons-field/menu-buttons-field.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









const _c0 = function (a1, a3) { return ["/organizations", a1, "groups", a3]; };
function GroupOverviewComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "GROUP_DETAIL.SUBGROUP_INFO"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx_r375.parentGroup.voId, ctx_r375.parentGroup.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r375.parentGroup.name, "\n");
} }
class GroupOverviewComponent {
    constructor(route, groupService) {
        this.route = route;
        this.groupService = groupService;
        this.navItems = [];
        this.parentGroup = null;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.groupId = params['groupId'];
            this.groupService.getGroupById(this.groupId).subscribe(group => {
                this.group = group;
                if (this.group.parentGroupId !== null) {
                    this.loadParentGroupData();
                }
                else {
                    this.parentGroup = null;
                    this.initNavItems();
                }
            });
        });
    }
    loadParentGroupData() {
        this.groupService.getGroupById(this.group.parentGroupId).subscribe(parentGroup => {
            this.parentGroup = parentGroup;
            this.initNavItems();
        });
    }
    initNavItems() {
        this.navItems = [
            {
                cssIcon: 'perun-user',
                url: `/organizations/${this.group.voId}/groups/${this.groupId}/members`,
                label: 'MENU_ITEMS.GROUP.MEMBERS',
                style: 'group-btn'
            },
            {
                cssIcon: 'perun-group',
                url: `/organizations/${this.group.voId}/groups/${this.groupId}/subgroups`,
                label: 'MENU_ITEMS.GROUP.SUBGROUPS',
                style: 'group-btn'
            },
            {
                cssIcon: 'perun-manage-facility',
                url: `/organizations/${this.group.voId}/groups/${this.groupId}/resources`,
                label: 'MENU_ITEMS.GROUP.RESOURCES',
                style: 'group-btn'
            },
            {
                cssIcon: 'perun-applications',
                url: `/organizations/${this.group.voId}/groups/${this.groupId}/applications`,
                label: 'MENU_ITEMS.GROUP.APPLICATIONS',
                style: 'group-btn'
            },
            {
                cssIcon: 'perun-settings2',
                url: `/organizations/${this.group.voId}/groups/${this.groupId}/settings`,
                label: 'MENU_ITEMS.GROUP.SETTINGS',
                style: 'group-btn'
            },
        ];
    }
}
GroupOverviewComponent.ɵfac = function GroupOverviewComponent_Factory(t) { return new (t || GroupOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["GroupsManagerService"])); };
GroupOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GroupOverviewComponent, selectors: [["app-group-overview"]], hostVars: 2, hostBindings: function GroupOverviewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "items", "size"], [1, "group-link", 3, "routerLink"]], template: function GroupOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GroupOverviewComponent_p_0_Template, 5, 8, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-buttons-field", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.parentGroup !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.navItems)("size", "small");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_4__["MenuButtonsFieldComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1vdmVydmlldy9ncm91cC1vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-group-overview',
                templateUrl: './group-overview.component.html',
                styleUrls: ['./group-overview.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["GroupsManagerService"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: GroupSettingsAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSettingsAttributesComponent", function() { return GroupSettingsAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/attributes-list/attributes-list.component */ "./src/app/shared/components/attributes-list/attributes-list.component.ts");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component */ "./src/app/shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component */ "./src/app/shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component.ts");
/* harmony import */ var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @perun-web-apps/perun/utils */ "../../libs/perun/utils/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/refresh-button/refresh-button.component */ "./src/app/shared/components/refresh-button/refresh-button.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/immediate-filter/immediate-filter.component */ "./src/app/shared/components/immediate-filter/immediate-filter.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");























const _c0 = ["list"];
function GroupSettingsAttributesComponent_mat_spinner_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
} }
function GroupSettingsAttributesComponent_app_attributes_list_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-attributes-list", 9, 10);
} if (rf & 2) {
    const ctx_r419 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filterValue", ctx_r419.filterValue)("attributes", ctx_r419.attributes)("selection", ctx_r419.selection);
} }
class GroupSettingsAttributesComponent {
    constructor(route, attributesManager, notificator, dialog, translate) {
        this.route = route;
        this.attributesManager = attributesManager;
        this.notificator = notificator;
        this.dialog = dialog;
        this.translate = translate;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.attributes = [];
        this.filterValue = '';
        this.translate.get('GROUP_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE').subscribe(value => this.saveSuccessMessage = value);
        this.translate.get('GROUP_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE').subscribe(value => this.deleteSuccessMessage = value);
    }
    ngOnInit() {
        this.route.parent.parent.params.subscribe(params => {
            this.groupId = params['groupId'];
            this.refreshTable();
        });
    }
    onCreate() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CreateAttributeDialogComponent"], {
            width: '1050px',
            data: {
                entityId: this.groupId,
                entity: 'group',
                notEmptyAttributes: this.attributes,
                style: 'group-theme'
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
        this.attributesManager.setGroupAttributes({ group: this.groupId, attributes: this.selection.selected }).subscribe(() => {
            this.attributesManager.getGroupAttributes(this.groupId).subscribe(attributes => {
                this.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["filterCoreAttributes"])(attributes);
                this.notificator.showSuccess(this.saveSuccessMessage);
                this.selection.clear();
            });
        });
    }
    onDelete() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteAttributeDialogComponent"], {
            width: '450px',
            data: {
                entityId: this.groupId,
                entity: 'group',
                attributes: this.selection.selected
            }
        });
        dialogRef.afterClosed().subscribe(didConfirm => {
            if (didConfirm) {
                this.refreshTable();
            }
        });
    }
    refreshTable() {
        // TODO Does not apply filter on refresh.
        this.loading = true;
        this.attributesManager.getGroupAttributes(this.groupId).subscribe(attributes => {
            this.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["filterCoreAttributes"])(attributes);
            this.selection.clear();
            this.loading = false;
        });
    }
    applyFilter(filterValue) {
        this.filterValue = filterValue;
    }
}
GroupSettingsAttributesComponent.ɵfac = function GroupSettingsAttributesComponent_Factory(t) { return new (t || GroupSettingsAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_4__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"])); };
GroupSettingsAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GroupSettingsAttributesComponent, selectors: [["app-group-settings-attributes"]], viewQuery: function GroupSettingsAttributesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
    } }, hostVars: 2, hostBindings: function GroupSettingsAttributesComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 17, vars: 17, consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "filterValue", "attributes", "selection", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [3, "filterValue", "attributes", "selection"], ["list", ""]], template: function GroupSettingsAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-refresh-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function GroupSettingsAttributesComponent_Template_app_refresh_button_refresh_4_listener($event) { return ctx.refreshTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupSettingsAttributesComponent_Template_button_click_5_listener($event) { return ctx.onCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupSettingsAttributesComponent_Template_button_click_8_listener($event) { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupSettingsAttributesComponent_Template_button_click_11_listener($event) { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-immediate-filter", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function GroupSettingsAttributesComponent_Template_app_immediate_filter_filter_14_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GroupSettingsAttributesComponent_mat_spinner_15_Template, 1, 0, "mat-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GroupSettingsAttributesComponent_app_attributes_list_16_Template, 2, 3, "app-attributes-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, "GROUP_DETAIL.SETTINGS.ATTRIBUTES.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 11, "GROUP_DETAIL.SETTINGS.ATTRIBUTES.CREATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, "GROUP_DETAIL.SETTINGS.ATTRIBUTES.SAVE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 15, "GROUP_DETAIL.SETTINGS.ATTRIBUTES.DELETE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "SHARED.COMPONENTS.ATTRIBUTES_LIST.FILTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_11__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_13__["ImmediateFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_3__["AttributesListComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy1hdHRyaWJ1dGVzL2dyb3VwLXNldHRpbmdzLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupSettingsAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-group-settings-attributes',
                templateUrl: './group-settings-attributes.component.html',
                styleUrls: ['./group-settings-attributes.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"] }, { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_4__["NotificatorService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }], list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['list']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: GroupSettingsExpirationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSettingsExpirationComponent", function() { return GroupSettingsExpirationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _perun_web_apps_perun_urns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @perun-web-apps/perun/urns */ "../../libs/perun/urns/src/index.ts");
/* harmony import */ var _core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/api/api-request-configuration.service */ "./src/app/core/services/api/api-request-configuration.service.ts");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/expiration-settings/expiration-settings.component */ "./src/app/vos/components/expiration-settings/expiration-settings.component.ts");















function GroupSettingsExpirationComponent_app_expiration_settings_0_Template(rf, ctx) { if (rf & 1) {
    const _r488 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-expiration-settings", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveAttribute", function GroupSettingsExpirationComponent_app_expiration_settings_0_Template_app_expiration_settings_saveAttribute_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r488); const ctx_r487 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r487.saveExpirationAttribute($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r486 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expirationAttribute", ctx_r486.expirationAttribute);
} }
class GroupSettingsExpirationComponent {
    constructor(attributesManager, route, translate, notificator, apiRequest) {
        this.attributesManager = attributesManager;
        this.route = route;
        this.translate = translate;
        this.notificator = notificator;
        this.apiRequest = apiRequest;
        this.translate.get('GROUP_DETAIL.SETTINGS.EXPIRATION.SUCCESS_MESSAGE').subscribe(value => this.successMessage = value);
        this.translate.get('GROUP_DETAIL.SETTINGS.EXPIRATION.ERROR_MESSAGE').subscribe(value => this.errorMessage = value);
    }
    ngOnInit() {
        this.route.parent.parent.params.subscribe(params => {
            this.groupId = params['groupId'];
            this.loadSettings();
        });
    }
    loadSettings() {
        this.attributesManager.getGroupAttributeByName(this.groupId, _perun_web_apps_perun_urns__WEBPACK_IMPORTED_MODULE_4__["Urns"].GROUP_DEF_EXPIRATION_RULES).subscribe(attr => {
            this.expirationAttribute = attr;
        });
    }
    saveExpirationAttribute(attribute) {
        // FIXME this might not work in case of some race condition (other request finishes sooner)
        this.apiRequest.dontHandleErrorForNext();
        this.attributesManager.setGroupAttribute({ group: this.groupId, attribute: attribute }).subscribe(() => {
            this.loadSettings();
            this.notificator.showSuccess(this.successMessage);
        }, error => this.notificator.showRPCError(error.error, this.errorMessage));
    }
}
GroupSettingsExpirationComponent.ɵfac = function GroupSettingsExpirationComponent_Factory(t) { return new (t || GroupSettingsExpirationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_6__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ApiRequestConfigurationService"])); };
GroupSettingsExpirationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GroupSettingsExpirationComponent, selectors: [["app-group-settings-expiration"]], hostVars: 2, hostBindings: function GroupSettingsExpirationComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 1, vars: 1, consts: [[3, "expirationAttribute", "saveAttribute", 4, "ngIf"], [3, "expirationAttribute", "saveAttribute"]], template: function GroupSettingsExpirationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GroupSettingsExpirationComponent_app_expiration_settings_0_Template, 1, 1, "app-expiration-settings", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expirationAttribute !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_8__["ExpirationSettingsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy1leHBpcmF0aW9uL2dyb3VwLXNldHRpbmdzLWV4cGlyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupSettingsExpirationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-group-settings-expiration',
                templateUrl: './group-settings-expiration.component.html',
                styleUrls: ['./group-settings-expiration.component.scss']
            }]
    }], function () { return [{ type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_6__["AttributesManagerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"] }, { type: _core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ApiRequestConfigurationService"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: GroupSettingsManagersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSettingsManagersComponent", function() { return GroupSettingsManagersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @perun-web-apps/perun/models */ "../../libs/perun/models/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_managers_page_managers_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/managers-page/managers-page.component */ "./src/app/shared/components/managers-page/managers-page.component.ts");









function GroupSettingsManagersComponent_app_managers_page_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-managers-page", 1);
} if (rf & 2) {
    const ctx_r489 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("complementaryObject", ctx_r489.group)("complementaryObjectType", ctx_r489.type)("theme", ctx_r489.theme)("availableRoles", ctx_r489.availableRoles);
} }
class GroupSettingsManagersComponent {
    constructor(groupService, route) {
        this.groupService = groupService;
        this.route = route;
        this.availableRoles = [_perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_3__["Role"].GROUPADMIN];
        this.selected = 'user';
        this.type = 'Group';
        this.theme = 'group-theme';
    }
    ngOnInit() {
        this.route.parent.parent.params.subscribe(parentParentParams => {
            const groupId = parentParentParams['groupId'];
            this.groupService.getGroupById(groupId).subscribe(group => {
                this.group = group;
            });
        });
    }
}
GroupSettingsManagersComponent.ɵfac = function GroupSettingsManagersComponent_Factory(t) { return new (t || GroupSettingsManagersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["GroupsManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
GroupSettingsManagersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GroupSettingsManagersComponent, selectors: [["app-group-settings-managers"]], hostVars: 2, hostBindings: function GroupSettingsManagersComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 1, vars: 1, consts: [[3, "complementaryObject", "complementaryObjectType", "theme", "availableRoles", 4, "ngIf"], [3, "complementaryObject", "complementaryObjectType", "theme", "availableRoles"]], template: function GroupSettingsManagersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GroupSettingsManagersComponent_app_managers_page_0_Template, 1, 4, "app-managers-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.group);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_managers_page_managers_page_component__WEBPACK_IMPORTED_MODULE_5__["ManagersPageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy1tYW5hZ2Vycy9ncm91cC1zZXR0aW5ncy1tYW5hZ2Vycy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupSettingsManagersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-group-settings-managers',
                templateUrl: './group-settings-managers.component.html',
                styleUrls: ['./group-settings-managers.component.scss']
            }]
    }], function () { return [{ type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["GroupsManagerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: GroupSettingsNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSettingsNotificationsComponent", function() { return GroupSettingsNotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _shared_components_dialogs_add_edit_notification_dialog_add_edit_notification_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component */ "./src/app/shared/components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_delete_notification_dialog_delete_notification_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/delete-notification-dialog/delete-notification-dialog.component */ "./src/app/shared/components/dialogs/delete-notification-dialog/delete-notification-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_notifications_copy_mails_dialog_notifications_copy_mails_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/notifications-copy-mails-dialog/notifications-copy-mails-dialog.component */ "./src/app/shared/components/dialogs/notifications-copy-mails-dialog/notifications-copy-mails-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_edit_email_footer_dialog_edit_email_footer_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/edit-email-footer-dialog/edit-email-footer-dialog.component */ "./src/app/shared/components/dialogs/edit-email-footer-dialog/edit-email-footer-dialog.component.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/services/api/api-request-configuration.service */ "./src/app/core/services/api/api-request-configuration.service.ts");
/* harmony import */ var _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @perun-web-apps/perun/models */ "../../libs/perun/models/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../components/notification-list/notification-list.component */ "./src/app/vos/components/notification-list/notification-list.component.ts");
/* harmony import */ var _libs_ui_alerts_src_lib_alert_alert_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../../../libs/ui/alerts/src/lib/alert/alert.component */ "../../libs/ui/alerts/src/lib/alert/alert.component.ts");



























function GroupSettingsNotificationsComponent_mat_spinner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 3);
} }
function GroupSettingsNotificationsComponent_div_4_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r551 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-notification-list", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function GroupSettingsNotificationsComponent_div_4_div_18_Template_app_notification_list_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r551); const ctx_r550 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r550.changeSelection($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r548 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("applicationMails", ctx_r548.applicationMails)("groupId", ctx_r548.groupId)("selection", ctx_r548.selection);
} }
function GroupSettingsNotificationsComponent_div_4_app_alert_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-alert", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "GROUP_DETAIL.SETTINGS.NOTIFICATIONS.NO_EMAILS"), " ");
} }
function GroupSettingsNotificationsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r553 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupSettingsNotificationsComponent_div_4_Template_button_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r553); const ctx_r552 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r552.add(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupSettingsNotificationsComponent_div_4_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r553); const ctx_r554 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r554.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupSettingsNotificationsComponent_div_4_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r553); const ctx_r555 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r555.changeEmailFooter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupSettingsNotificationsComponent_div_4_Template_button_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r553); const ctx_r556 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r556.copy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "file_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, GroupSettingsNotificationsComponent_div_4_div_18_Template, 2, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GroupSettingsNotificationsComponent_div_4_app_alert_19_Template, 3, 3, "app-alert", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r546 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, "GROUP_DETAIL.SETTINGS.NOTIFICATIONS.ADD"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r546.selection.selected.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, "GROUP_DETAIL.SETTINGS.NOTIFICATIONS.REMOVE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, "GROUP_DETAIL.SETTINGS.NOTIFICATIONS.EMAIL_FOOTER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 13, "GROUP_DETAIL.SETTINGS.NOTIFICATIONS.COPY_FROM_VO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r546.applicationMails.length !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r546.applicationMails.length === 0);
} }
function GroupSettingsNotificationsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r558 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-alert", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupSettingsNotificationsComponent_div_5_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r558); const ctx_r557 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r557.createEmptyApplicationForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "GROUP_DETAIL.SETTINGS.NOTIFICATIONS.NO_APPLICATION_FORM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "GROUP_DETAIL.SETTINGS.NOTIFICATIONS.CREATE_APPLICATION_FORM"), " ");
} }
class GroupSettingsNotificationsComponent {
    constructor(route, registrarService, registrarManager, translate, dialog, apiRequest, notificator) {
        this.route = route;
        this.registrarService = registrarService;
        this.registrarManager = registrarManager;
        this.translate = translate;
        this.dialog = dialog;
        this.apiRequest = apiRequest;
        this.notificator = notificator;
        this.loading = false;
        this.applicationMails = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        this.noApplicationForm = false;
    }
    ngOnInit() {
        this.loading = true;
        this.route.parent.parent.params.subscribe(params => {
            this.voId = params['voId'];
            this.groupId = params['groupId'];
            // FIXME this might not work in case of some race condition (other request finishes sooner)
            this.apiRequest.dontHandleErrorForNext();
            this.registrarManager.getGroupApplicationForm(this.groupId).subscribe(form => {
                this.applicationForm = form;
                this.registrarService.getApplicationMailsForGroup(this.groupId).subscribe(mails => {
                    this.applicationMails = mails;
                    this.loading = false;
                });
            }, error => {
                if (error.name === 'FormNotExistsException') {
                    this.noApplicationForm = true;
                    this.loading = false;
                }
                else {
                    this.notificator.showRPCError(error);
                }
            });
        });
    }
    add() {
        const applicationMail = new _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_13__["ApplicationMail"]();
        applicationMail.formId = this.applicationForm.id;
        const dialog = this.dialog.open(_shared_components_dialogs_add_edit_notification_dialog_add_edit_notification_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddEditNotificationDialogComponent"], {
            width: '1400px',
            height: '700px',
            data: { voId: this.voId,
                groupId: this.groupId,
                createMailNotification: true,
                applicationMail: applicationMail,
                applicationMails: this.applicationMails }
        });
        dialog.afterClosed().subscribe(success => {
            if (success) {
                this.translate.get('GROUP_DETAIL.SETTINGS.NOTIFICATIONS.ADD_SUCCESS').subscribe(text => {
                    this.notificator.showSuccess(text);
                });
                this.selection.clear();
                this.updateTable();
            }
        });
    }
    remove() {
        const dialog = this.dialog.open(_shared_components_dialogs_delete_notification_dialog_delete_notification_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteNotificationDialogComponent"], {
            width: '500px',
            data: { voId: this.voId, groupId: this.groupId, mails: this.selection.selected }
        });
        dialog.afterClosed().subscribe(success => {
            if (success) {
                this.translate.get('GROUP_DETAIL.SETTINGS.NOTIFICATIONS.DELETE_SUCCESS').subscribe(text => {
                    this.notificator.showSuccess(text);
                });
                this.selection.clear();
                this.updateTable();
            }
        });
    }
    copy() {
        const dialog = this.dialog.open(_shared_components_dialogs_notifications_copy_mails_dialog_notifications_copy_mails_dialog_component__WEBPACK_IMPORTED_MODULE_8__["NotificationsCopyMailsDialogComponent"], {
            width: '500px',
            data: { voId: this.voId, groupId: this.groupId }
        });
        dialog.afterClosed().subscribe(copyFrom => {
            if (copyFrom) {
                this.selection.clear();
                this.updateTable();
            }
        });
    }
    updateTable() {
        this.loading = true;
        this.registrarService.getApplicationMailsForGroup(this.groupId).subscribe(mails => {
            this.applicationMails = mails;
            this.loading = false;
        });
    }
    changeEmailFooter() {
        this.dialog.open(_shared_components_dialogs_edit_email_footer_dialog_edit_email_footer_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EditEmailFooterDialogComponent"], {
            width: '500px',
            data: { voId: this.voId, groupId: this.groupId }
        });
    }
    changeSelection(selection) {
        this.selection = selection;
    }
    createEmptyApplicationForm() {
        this.registrarManager.createApplicationFormInGroup(this.groupId).subscribe(() => {
            this.noApplicationForm = false;
            this.ngOnInit();
        });
    }
}
GroupSettingsNotificationsComponent.ɵfac = function GroupSettingsNotificationsComponent_Factory(t) { return new (t || GroupSettingsNotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_10__["RegistrarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_11__["RegistrarManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_12__["ApiRequestConfigurationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_4__["NotificatorService"])); };
GroupSettingsNotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GroupSettingsNotificationsComponent, selectors: [["app-group-settings-notifications"]], hostVars: 2, hostBindings: function GroupSettingsNotificationsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 6, vars: 6, consts: [[1, "page-subtitle"], ["class", "ml-auto mr-auto", 4, "ngIf"], [4, "ngIf"], [1, "ml-auto", "mr-auto"], [1, "w-100", "d-flex"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "warn", 1, "mr-2", 3, "disabled", "click"], ["mat-stroked-button", "", 1, "mr-2", 3, "click"], [1, "material-icons"], ["mat-stroked-button", "", 1, "ml-auto", 3, "click"], ["class", "card mt-2", 4, "ngIf"], ["color", "warn", 4, "ngIf"], [1, "card", "mt-2"], [3, "applicationMails", "groupId", "selection", "selectionChange"], ["color", "warn"], ["mat-stroked-button", "", 3, "click"]], template: function GroupSettingsNotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GroupSettingsNotificationsComponent_mat_spinner_3_Template, 1, 0, "mat-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GroupSettingsNotificationsComponent_div_4_Template, 20, 15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GroupSettingsNotificationsComponent_div_5_Template, 7, 6, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "GROUP_DETAIL.SETTINGS.NOTIFICATIONS.TITLE"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.noApplicationForm && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noApplicationForm && !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_17__["NotificationListComponent"], _libs_ui_alerts_src_lib_alert_alert_component__WEBPACK_IMPORTED_MODULE_18__["AlertComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy1ub3RpZmljYXRpb25zL2dyb3VwLXNldHRpbmdzLW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupSettingsNotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-group-settings-notifications',
                templateUrl: './group-settings-notifications.component.html',
                styleUrls: ['./group-settings-notifications.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_10__["RegistrarService"] }, { type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_11__["RegistrarManagerService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_12__["ApiRequestConfigurationService"] }, { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_4__["NotificatorService"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: GroupSettingsOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSettingsOverviewComponent", function() { return GroupSettingsOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/menu-buttons-field/menu-buttons-field.component */ "./src/app/shared/components/menu-buttons-field/menu-buttons-field.component.ts");











class GroupSettingsOverviewComponent {
    constructor(sideMenuService, voService, groupService, route, router) {
        this.sideMenuService = sideMenuService;
        this.voService = voService;
        this.groupService = groupService;
        this.route = route;
        this.router = router;
        this.items = [];
    }
    ngOnInit() {
        this.route.parent.parent.params.subscribe(grandParentParams => {
            const voId = grandParentParams['voId'];
            const groupId = grandParentParams['groupId'];
            this.groupService.getGroupById(groupId).subscribe(group => {
                this.group = group;
                this.voService.getVoById(voId).subscribe(vo => {
                    this.vo = vo;
                    this.initItems();
                });
            });
        });
    }
    initItems() {
        this.items = [
            {
                cssIcon: 'perun-attributes',
                url: `/organizations/${this.vo.id}/groups/${this.group.id}/settings/attributes`,
                label: 'MENU_ITEMS.GROUP.ATTRIBUTES',
                style: 'group-btn'
            },
            {
                cssIcon: 'perun-group',
                url: `/organizations/${this.vo.id}/groups/${this.group.id}/settings/expiration`,
                label: 'MENU_ITEMS.GROUP.EXPIRATION',
                style: 'group-btn'
            },
            {
                cssIcon: 'perun-manager',
                url: `/organizations/${this.vo.id}/groups/${this.group.id}/settings/managers`,
                label: 'MENU_ITEMS.GROUP.MANAGERS',
                style: 'group-btn'
            },
            {
                cssIcon: 'perun-application-form',
                url: `/organizations/${this.vo.id}/groups/${this.group.id}/settings/applicationForm`,
                label: 'MENU_ITEMS.GROUP.APPLICATION_FORM',
                style: 'group-btn'
            },
            {
                cssIcon: 'perun-notification',
                url: `/organizations/${this.vo.id}/groups/${this.group.id}/settings/notifications`,
                label: 'MENU_ITEMS.GROUP.NOTIFICATIONS',
                style: 'group-btn'
            },
            {
                cssIcon: 'perun-group',
                url: `/organizations/${this.vo.id}/groups/${this.group.id}/settings/relations`,
                label: 'MENU_ITEMS.GROUP.RELATIONS',
                style: 'group-btn'
            }
        ];
    }
}
GroupSettingsOverviewComponent.ɵfac = function GroupSettingsOverviewComponent_Factory(t) { return new (t || GroupSettingsOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["VoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_4__["GroupsManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
GroupSettingsOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GroupSettingsOverviewComponent, selectors: [["app-group-settings-overview"]], hostVars: 2, hostBindings: function GroupSettingsOverviewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 2, vars: 2, consts: [[3, "items", "size"]], template: function GroupSettingsOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-buttons-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items)("size", "small");
    } }, directives: [_shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_5__["MenuButtonsFieldComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy1vdmVydmlldy9ncm91cC1zZXR0aW5ncy1vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupSettingsOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-group-settings-overview',
                templateUrl: './group-settings-overview.component.html',
                styleUrls: ['./group-settings-overview.component.scss']
            }]
    }], function () { return [{ type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"] }, { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["VoService"] }, { type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_4__["GroupsManagerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-relations/group-settings-relations.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings-relations/group-settings-relations.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: GroupSettingsRelationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSettingsRelationsComponent", function() { return GroupSettingsRelationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _shared_components_dialogs_create_relation_dialog_create_relation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/create-relation-dialog/create-relation-dialog.component */ "./src/app/shared/components/dialogs/create-relation-dialog/create-relation-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_remove_relation_dialog_remove_relation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/remove-relation-dialog/remove-relation-dialog.component */ "./src/app/shared/components/dialogs/remove-relation-dialog/remove-relation-dialog.component.ts");
/* harmony import */ var _shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/refresh-button/refresh-button.component */ "./src/app/shared/components/refresh-button/refresh-button.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/immediate-filter/immediate-filter.component */ "./src/app/shared/components/immediate-filter/immediate-filter.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _shared_components_groups_list_groups_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/groups-list/groups-list.component */ "./src/app/shared/components/groups-list/groups-list.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



















function GroupSettingsRelationsComponent_mat_spinner_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
} }
function GroupSettingsRelationsComponent_app_groups_list_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-groups-list", 9);
} if (rf & 2) {
    const ctx_r586 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groups", ctx_r586.groups)("selection", ctx_r586.selection)("filter", ctx_r586.filterValue)("disableHeadCheckbox", true);
} }
class GroupSettingsRelationsComponent {
    constructor(route, groupService, dialog) {
        this.route = route;
        this.groupService = groupService;
        this.dialog = dialog;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.groups = [];
        this.reverse = false;
        this.filterValue = '';
    }
    ngOnInit() {
        this.route.parent.parent.params.subscribe(params => {
            this.groupId = params['groupId'];
            this.voId = params['voId'];
            this.refreshTable();
        });
    }
    onCreate() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_create_relation_dialog_create_relation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CreateRelationDialogComponent"], {
            width: '1050px',
            data: {
                groups: this.groups,
                theme: 'group-theme',
                groupId: +this.groupId,
                voId: this.voId,
                reverse: this.reverse
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.refreshTable();
            }
        });
    }
    onDelete() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_remove_relation_dialog_remove_relation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["RemoveRelationDialogComponent"], {
            width: '450px',
            data: {
                groups: this.selection.selected,
                theme: 'group-theme',
                groupId: +this.groupId,
                reverse: this.reverse
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.refreshTable();
            }
        });
    }
    refreshTable() {
        this.loading = true;
        this.groupService.getGroupUnions(this.groupId, this.reverse).subscribe(groups => {
            this.groups = groups;
            this.selection.clear();
            this.loading = false;
        }, () => this.loading = false);
    }
    applyFilter(filterValue) {
        this.filterValue = filterValue;
    }
    showReverseUnions() {
        this.reverse = !this.reverse;
        this.refreshTable();
    }
}
GroupSettingsRelationsComponent.ɵfac = function GroupSettingsRelationsComponent_Factory(t) { return new (t || GroupSettingsRelationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_4__["GroupsManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
GroupSettingsRelationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GroupSettingsRelationsComponent, selectors: [["app-group-settings-relations"]], hostVars: 2, hostBindings: function GroupSettingsRelationsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 17, vars: 16, consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "warn", 3, "disabled", "click"], [3, "placeholder", "filter"], [3, "change"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "groups", "selection", "filter", "disableHeadCheckbox", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [3, "groups", "selection", "filter", "disableHeadCheckbox"]], template: function GroupSettingsRelationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-refresh-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function GroupSettingsRelationsComponent_Template_app_refresh_button_refresh_4_listener($event) { return ctx.refreshTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupSettingsRelationsComponent_Template_button_click_5_listener($event) { return ctx.onCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupSettingsRelationsComponent_Template_button_click_8_listener($event) { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-immediate-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function GroupSettingsRelationsComponent_Template_app_immediate_filter_filter_11_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GroupSettingsRelationsComponent_Template_mat_checkbox_change_12_listener($event) { return ctx.showReverseUnions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GroupSettingsRelationsComponent_mat_spinner_15_Template, 1, 0, "mat-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GroupSettingsRelationsComponent_app_groups_list_16_Template, 1, 4, "app-groups-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, "GROUP_DETAIL.SETTINGS.RELATIONS.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, "GROUP_DETAIL.SETTINGS.RELATIONS.CREATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, "GROUP_DETAIL.SETTINGS.RELATIONS.DELETE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "GROUP_DETAIL.SETTINGS.RELATIONS.FILTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 14, "GROUP_DETAIL.SETTINGS.RELATIONS.REVERSE_UNIONS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_7__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_9__["ImmediateFilterComponent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _shared_components_groups_list_groups_list_component__WEBPACK_IMPORTED_MODULE_13__["GroupsListComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy1yZWxhdGlvbnMvZ3JvdXAtc2V0dGluZ3MtcmVsYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupSettingsRelationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-group-settings-relations',
                templateUrl: './group-settings-relations.component.html',
                styleUrls: ['./group-settings-relations.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_4__["GroupsManagerService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/group-detail-page/group-settings/group-settings.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings.component.ts ***!
  \****************************************************************************************/
/*! exports provided: GroupSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSettingsComponent", function() { return GroupSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");
/* harmony import */ var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/animated-router-outlet/animated-router-outlet.component */ "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");




class GroupSettingsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
GroupSettingsComponent.ɵfac = function GroupSettingsComponent_Factory(t) { return new (t || GroupSettingsComponent)(); };
GroupSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GroupSettingsComponent, selectors: [["app-group-settings"]], hostVars: 2, hostBindings: function GroupSettingsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 1, vars: 0, template: function GroupSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-animated-router-outlet");
    } }, directives: [_shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_2__["AnimatedRouterOutletComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-group-settings',
                templateUrl: './group-settings.component.html',
                styleUrls: ['./group-settings.component.scss'],
                animations: [
                    _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]
                ]
            }]
    }], function () { return []; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/member-detail-page/member-detail-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/vos/pages/member-detail-page/member-detail-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: MemberDetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailPageComponent", function() { return MemberDetailPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/side-menu/side-menu-item.service */ "./src/app/shared/side-menu/side-menu-item.service.ts");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/back-button/back-button.component */ "./src/app/shared/components/back-button/back-button.component.ts");
/* harmony import */ var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/animated-router-outlet/animated-router-outlet.component */ "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");
















const _c0 = function (a1, a3) { return ["/organizations", a1, "members", a3]; };
function MemberDetailPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-back-button");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-animated-router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r371 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "MEMBER_DETAIL.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx_r371.vo.id, ctx_r371.member.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r371.fullName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0#", ctx_r371.member.id, " ");
} }
class MemberDetailPageComponent {
    constructor(sideMenuItemService, translate, sideMenuService, membersService, voService, route) {
        this.sideMenuItemService = sideMenuItemService;
        this.translate = translate;
        this.sideMenuService = sideMenuService;
        this.membersService = membersService;
        this.voService = voService;
        this.route = route;
        this.fullName = '';
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            const voId = params['voId'];
            const memberId = params['memberId'];
            this.voService.getVoById(voId).subscribe(vo => {
                this.vo = vo;
                this.membersService.getRichMemberWithAttributes(memberId).subscribe(member => {
                    this.member = member;
                    const voSideMenuItem = this.sideMenuItemService.parseVo(this.vo);
                    const memberSideMenuItem = this.sideMenuItemService.parseMember(this.member);
                    this.fullName = memberSideMenuItem.label;
                    this.sideMenuService.setAccessMenuItems([voSideMenuItem, memberSideMenuItem]);
                });
            });
        });
    }
}
MemberDetailPageComponent.ɵfac = function MemberDetailPageComponent_Factory(t) { return new (t || MemberDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["MembersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["VoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
MemberDetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberDetailPageComponent, selectors: [["app-member-detail-page"]], decls: 1, vars: 1, consts: [["class", "container-fluid pl-xl-5 pr-xl-5 member-theme", 4, "ngIf"], [1, "container-fluid", "pl-xl-5", "pr-xl-5", "member-theme"], [1, "page-title", "mb-1"], [1, "member-link", 3, "routerLink"], [1, "text-muted"], [1, "mb-5"]], template: function MemberDetailPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MemberDetailPageComponent_div_0_Template, 11, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vo !== undefined && ctx.member !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_8__["BackButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_9__["AnimatedRouterOutletComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9tZW1iZXItZGV0YWlsLXBhZ2UvbWVtYmVyLWRldGFpbC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_5__["fadeIn"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberDetailPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-member-detail-page',
                templateUrl: './member-detail-page.component.html',
                styleUrls: ['./member-detail-page.component.scss'],
                animations: [
                    _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_5__["fadeIn"]
                ]
            }]
    }], function () { return [{ type: _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuItemService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"] }, { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["MembersService"] }, { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["VoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/vos/pages/member-detail-page/member-overview/member-overview.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/vos/pages/member-detail-page/member-overview/member-overview.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: MemberOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberOverviewComponent", function() { return MemberOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_urns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @perun-web-apps/perun/urns */ "../../libs/perun/urns/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @perun-web-apps/perun/utils */ "../../libs/perun/utils/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/menu-buttons-field/menu-buttons-field.component */ "./src/app/shared/components/menu-buttons-field/menu-buttons-field.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");















function MemberOverviewComponent_table_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Expiration:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r374 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r374.statusIconColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r374.statusIcon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r374.member.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r374.expiration, " ");
} }
class MemberOverviewComponent {
    constructor(attributesManager, membersService, translate, route) {
        this.attributesManager = attributesManager;
        this.membersService = membersService;
        this.translate = translate;
        this.route = route;
        this.fullName = '';
        this.statusIcon = '';
        this.statusIconColor = '';
        this.expiration = '';
        this.member = null;
        this.navItems = [];
    }
    ngOnInit() {
        this.route.parent.params.subscribe(parentParams => {
            const memberId = parentParams['memberId'];
            this.membersService.getRichMemberWithAttributes(memberId).subscribe(member => {
                this.member = member;
                this.fullName = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_5__["parseFullName"])(this.member.user);
                this.statusIcon = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_5__["parseStatusIcon"])(this.member);
                this.statusIconColor = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_5__["parseStatusColor"])(this.member);
                this.initNavItems();
                this.attributesManager.getMemberAttributeByName(this.member.id, _perun_web_apps_perun_urns__WEBPACK_IMPORTED_MODULE_4__["Urns"].MEMBER_DEF_EXPIRATION).subscribe(attr => {
                    this.expiration = attr.value === null ? this.translate.instant('MEMBER_DETAIL.OVERVIEW.NEVER_EXPIRES') : attr.value;
                });
            });
        });
    }
    initNavItems() {
        this.navItems = [
            {
                cssIcon: 'perun-group',
                url: `/organizations/${this.member.voId}/members/${this.member.id}/groups`,
                label: 'MENU_ITEMS.MEMBER.GROUPS',
                style: 'member-btn'
            },
            {
                cssIcon: 'perun-settings2',
                url: `/organizations/${this.member.voId}/members/${this.member.id}/settings`,
                label: 'MENU_ITEMS.MEMBER.SETTINGS',
                style: 'member-btn'
            }
        ];
    }
}
MemberOverviewComponent.ɵfac = function MemberOverviewComponent_Factory(t) { return new (t || MemberOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_6__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["MembersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
MemberOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberOverviewComponent, selectors: [["app-member-overview"]], hostVars: 2, hostBindings: function MemberOverviewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 5, vars: 6, consts: [[1, "page-subtitle"], ["class", "table table-bordered info-table col-3", 4, "ngIf"], [3, "items", "size"], [1, "table", "table-bordered", "info-table", "col-3"], [1, "d-flex", "border-0"], [1, "mr-1", 3, "color"]], template: function MemberOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MemberOverviewComponent_table_3_Template, 16, 4, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-menu-buttons-field", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "MEMBER_DETAIL.OVERVIEW.MEMBERSHIP"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.member !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.navItems)("size", "small");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_8__["MenuButtonsFieldComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9tZW1iZXItZGV0YWlsLXBhZ2UvbWVtYmVyLW92ZXJ2aWV3L21lbWJlci1vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-member-overview',
                templateUrl: './member-overview.component.html',
                styleUrls: ['./member-overview.component.scss']
            }]
    }], function () { return [{ type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_6__["AttributesManagerService"] }, { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["MembersService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/vos/pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: MemberSettingsAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberSettingsAttributesComponent", function() { return MemberSettingsAttributesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/attributes-list/attributes-list.component */ "./src/app/shared/components/attributes-list/attributes-list.component.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component */ "./src/app/shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component */ "./src/app/shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component.ts");
/* harmony import */ var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @perun-web-apps/perun/utils */ "../../libs/perun/utils/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/refresh-button/refresh-button.component */ "./src/app/shared/components/refresh-button/refresh-button.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/immediate-filter/immediate-filter.component */ "./src/app/shared/components/immediate-filter/immediate-filter.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");























const _c0 = ["list"];
function MemberSettingsAttributesComponent_mat_spinner_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
} }
function MemberSettingsAttributesComponent_app_attributes_list_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-attributes-list", 9, 10);
} if (rf & 2) {
    const ctx_r476 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filterValue", ctx_r476.filterValue)("attributes", ctx_r476.attributes)("selection", ctx_r476.selection);
} }
class MemberSettingsAttributesComponent {
    constructor(route, attributesManager, notificator, dialog, translate) {
        this.route = route;
        this.attributesManager = attributesManager;
        this.notificator = notificator;
        this.dialog = dialog;
        this.translate = translate;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        this.attributes = [];
        this.filterValue = '';
        this.translate.get('MEMBER_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE').subscribe(value => this.saveSuccessMessage = value);
        this.translate.get('MEMBER_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE').subscribe(value => this.deleteSuccessMessage = value);
    }
    ngOnInit() {
        this.route.parent.parent.params.subscribe(params => {
            this.memberId = params['memberId'];
            this.refreshTable();
        });
    }
    onCreate() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CreateAttributeDialogComponent"], {
            width: '1050px',
            data: {
                entityId: this.memberId,
                entity: 'member',
                notEmptyAttributes: this.attributes,
                style: 'member-theme'
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
        this.attributesManager.setMemberAttributes({ member: this.memberId, attributes: this.selection.selected }).subscribe(() => {
            this.attributesManager.getMemberAttributes(this.memberId).subscribe(attributes => {
                this.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["filterCoreAttributes"])(attributes);
                this.notificator.showSuccess(this.saveSuccessMessage);
                this.selection.clear();
            });
        });
    }
    onDelete() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteAttributeDialogComponent"], {
            width: '450px',
            data: {
                entityId: this.memberId,
                entity: 'member',
                attributes: this.selection.selected
            }
        });
        dialogRef.afterClosed().subscribe(didConfirm => {
            if (didConfirm) {
                this.refreshTable();
            }
        });
    }
    refreshTable() {
        this.loading = true;
        this.attributesManager.getMemberAttributes(this.memberId).subscribe(attributes => {
            this.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["filterCoreAttributes"])(attributes);
            this.selection.clear();
            this.loading = false;
        });
    }
    applyFilter(filterValue) {
        this.filterValue = filterValue;
    }
}
MemberSettingsAttributesComponent.ɵfac = function MemberSettingsAttributesComponent_Factory(t) { return new (t || MemberSettingsAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_2__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"])); };
MemberSettingsAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberSettingsAttributesComponent, selectors: [["app-member-settings-attributes"]], viewQuery: function MemberSettingsAttributesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
    } }, hostVars: 2, hostBindings: function MemberSettingsAttributesComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 17, vars: 17, consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "mr-auto ml-auto", 4, "ngIf"], [3, "filterValue", "attributes", "selection", 4, "ngIf"], [1, "mr-auto", "ml-auto"], [3, "filterValue", "attributes", "selection"], ["list", ""]], template: function MemberSettingsAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-refresh-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function MemberSettingsAttributesComponent_Template_app_refresh_button_refresh_4_listener($event) { return ctx.refreshTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberSettingsAttributesComponent_Template_button_click_5_listener($event) { return ctx.onCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberSettingsAttributesComponent_Template_button_click_8_listener($event) { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberSettingsAttributesComponent_Template_button_click_11_listener($event) { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-immediate-filter", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function MemberSettingsAttributesComponent_Template_app_immediate_filter_filter_14_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MemberSettingsAttributesComponent_mat_spinner_15_Template, 1, 0, "mat-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MemberSettingsAttributesComponent_app_attributes_list_16_Template, 2, 3, "app-attributes-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, "MEMBER_DETAIL.SETTINGS.ATTRIBUTES.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 11, "MEMBER_DETAIL.SETTINGS.ATTRIBUTES.CREATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, "MEMBER_DETAIL.SETTINGS.ATTRIBUTES.SAVE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 15, "MEMBER_DETAIL.SETTINGS.ATTRIBUTES.DELETE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "SHARED.COMPONENTS.ATTRIBUTES_LIST.FILTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_11__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_13__["ImmediateFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_5__["AttributesListComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9tZW1iZXItZGV0YWlsLXBhZ2UvbWVtYmVyLXNldHRpbmdzL21lbWJlci1zZXR0aW5ncy1hdHRyaWJ1dGVzL21lbWJlci1zZXR0aW5ncy1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberSettingsAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-member-settings-attributes',
                templateUrl: './member-settings-attributes.component.html',
                styleUrls: ['./member-settings-attributes.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"] }, { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_2__["NotificatorService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }], list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['list']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/vos/pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: MemberSettingsOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberSettingsOverviewComponent", function() { return MemberSettingsOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/menu-buttons-field/menu-buttons-field.component */ "./src/app/shared/components/menu-buttons-field/menu-buttons-field.component.ts");









class MemberSettingsOverviewComponent {
    constructor(sideMenuService, voService, memberService, route, router) {
        this.sideMenuService = sideMenuService;
        this.voService = voService;
        this.memberService = memberService;
        this.route = route;
        this.router = router;
        this.items = [];
    }
    ngOnInit() {
        this.route.parent.parent.params.subscribe(grandParentParams => {
            const voId = grandParentParams['voId'];
            const memberId = grandParentParams['memberId'];
            this.memberService.getMemberById(memberId).subscribe(member => {
                this.member = member;
                this.voService.getVoById(voId).subscribe(vo => {
                    this.vo = vo;
                    this.initItems();
                });
            });
        });
    }
    initItems() {
        this.items = [
            {
                cssIcon: 'perun-attributes',
                url: `/organizations/${this.vo.id}/members/${this.member.id}/settings/attributes`,
                label: 'MENU_ITEMS.MEMBER.ATTRIBUTES',
                style: 'member-btn'
            }
        ];
    }
}
MemberSettingsOverviewComponent.ɵfac = function MemberSettingsOverviewComponent_Factory(t) { return new (t || MemberSettingsOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["VoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["MembersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MemberSettingsOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberSettingsOverviewComponent, selectors: [["app-member-settings-overview"]], hostVars: 2, hostBindings: function MemberSettingsOverviewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 2, vars: 2, consts: [[3, "items", "size"]], template: function MemberSettingsOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-buttons-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items)("size", "small");
    } }, directives: [_shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_4__["MenuButtonsFieldComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9tZW1iZXItZGV0YWlsLXBhZ2UvbWVtYmVyLXNldHRpbmdzL21lbWJlci1zZXR0aW5ncy1vdmVydmlldy9tZW1iZXItc2V0dGluZ3Mtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberSettingsOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-member-settings-overview',
                templateUrl: './member-settings-overview.component.html',
                styleUrls: ['./member-settings-overview.component.scss']
            }]
    }], function () { return [{ type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"] }, { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["VoService"] }, { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["MembersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/member-detail-page/member-settings/member-settings.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/vos/pages/member-detail-page/member-settings/member-settings.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: MemberSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberSettingsComponent", function() { return MemberSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");
/* harmony import */ var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/animated-router-outlet/animated-router-outlet.component */ "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");




class MemberSettingsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
MemberSettingsComponent.ɵfac = function MemberSettingsComponent_Factory(t) { return new (t || MemberSettingsComponent)(); };
MemberSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberSettingsComponent, selectors: [["app-member-settings"]], hostVars: 2, hostBindings: function MemberSettingsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 1, vars: 0, template: function MemberSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-animated-router-outlet");
    } }, directives: [_shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_2__["AnimatedRouterOutletComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9tZW1iZXItZGV0YWlsLXBhZ2UvbWVtYmVyLXNldHRpbmdzL21lbWJlci1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-member-settings',
                templateUrl: './member-settings.component.html',
                styleUrls: ['./member-settings.component.scss'],
                animations: [
                    _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]
                ]
            }]
    }], function () { return []; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-detail-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-detail-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: VoDetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoDetailPageComponent", function() { return VoDetailPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/side-menu/side-menu-item.service */ "./src/app/shared/side-menu/side-menu-item.service.ts");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @perun-web-apps/perun/utils */ "../../libs/perun/utils/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/back-button/back-button.component */ "./src/app/shared/components/back-button/back-button.component.ts");
/* harmony import */ var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/animated-router-outlet/animated-router-outlet.component */ "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
















const _c0 = function (a1) { return ["/organizations/", a1]; };
function VoDetailPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-back-button");
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
    const ctx_r373 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "VO_DETAIL.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r373.vo.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r373.vo.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0#", ctx_r373.vo.id, " ");
} }
class VoDetailPageComponent {
    constructor(sideMenuService, voService, route, router, sideMenuItemService) {
        this.sideMenuService = sideMenuService;
        this.voService = voService;
        this.route = route;
        this.router = router;
        this.sideMenuItemService = sideMenuItemService;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            const voId = params['voId'];
            this.voService.getVoById(voId).subscribe(vo => {
                this.vo = vo;
                const sideMenuItem = this.sideMenuItemService.parseVo(vo);
                this.sideMenuService.setAccessMenuItems([sideMenuItem]);
                Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["addRecentlyVisited"])('vos', this.vo);
            });
        });
    }
}
VoDetailPageComponent.ɵfac = function VoDetailPageComponent_Factory(t) { return new (t || VoDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_5__["VoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuItemService"])); };
VoDetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoDetailPageComponent, selectors: [["app-vo-detail-page"]], decls: 1, vars: 1, consts: [["class", "container-fluid pl-xl-5 pr-xl-5 vo-theme", 4, "ngIf"], [1, "container-fluid", "pl-xl-5", "pr-xl-5", "vo-theme"], [1, "page-title"], [1, "vo-link", 3, "routerLink"], [1, "text-muted"]], template: function VoDetailPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VoDetailPageComponent_div_0_Template, 10, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vo !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_8__["BackButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_9__["AnimatedRouterOutletComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1kZXRhaWwtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoDetailPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vo-detail-page',
                templateUrl: './vo-detail-page.component.html',
                styleUrls: ['./vo-detail-page.component.scss'],
                animations: [
                    _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]
                ]
            }]
    }], function () { return [{ type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"] }, { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_5__["VoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuItemService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-overview/vo-overview.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-overview/vo-overview.component.ts ***!
  \*******************************************************************************/
/*! exports provided: VoOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoOverviewComponent", function() { return VoOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_dialogs_invite_member_dialog_invite_member_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/dialogs/invite-member-dialog/invite-member-dialog.component */ "./src/app/shared/components/dialogs/invite-member-dialog/invite-member-dialog.component.ts");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/menu-buttons-field/menu-buttons-field.component */ "./src/app/shared/components/menu-buttons-field/menu-buttons-field.component.ts");











class VoOverviewComponent {
    // @HostBinding('class.router-component') true;
    constructor(sideMenuService, voService, route, router, authResolver) {
        this.sideMenuService = sideMenuService;
        this.voService = voService;
        this.route = route;
        this.router = router;
        this.authResolver = authResolver;
        this.items = [];
        this.navItems = [];
    }
    ngOnInit() {
        this.route.parent.params.subscribe(parentParams => {
            const voId = parentParams['voId'];
            this.voService.getVoById(voId).subscribe(vo => {
                this.vo = vo;
                // this.initItems();
                this.initNavItems();
            });
        });
    }
    initNavItems() {
        // Members
        if (this.authResolver.isThisVoAdminOrObserver(this.vo.id)) {
            this.navItems.push({
                cssIcon: 'perun-user',
                url: `/organizations/${this.vo.id}/members`,
                label: 'MENU_ITEMS.VO.MEMBERS',
                style: 'vo-btn'
            });
        }
        // Groups
        if (this.authResolver.isThisVoAdminOrObserver(this.vo.id)
            || this.authResolver.isGroupAdminInThisVo(this.vo.id)) {
            this.navItems.push({
                cssIcon: 'perun-group',
                url: `/organizations/${this.vo.id}/groups`,
                label: 'MENU_ITEMS.VO.GROUPS',
                style: 'vo-btn'
            });
        }
        // Resource management
        if (this.authResolver.isThisVoAdminOrObserver(this.vo.id)) {
            this.navItems.push({
                cssIcon: 'perun-manage-facility',
                url: `/organizations/${this.vo.id}/resources`,
                label: 'MENU_ITEMS.VO.RESOURCES',
                style: 'vo-btn'
            });
        }
        // Applications
        if (this.authResolver.isThisVoAdminOrObserver(this.vo.id)) {
            this.navItems.push({
                cssIcon: 'perun-applications',
                url: `/organizations/${this.vo.id}/applications`,
                label: 'MENU_ITEMS.VO.APPLICATIONS',
                style: 'vo-btn'
            });
        }
        // Settings
        if (this.authResolver.isThisVoAdminOrObserver(this.vo.id)) {
            this.navItems.push({
                cssIcon: 'perun-settings2',
                url: `/organizations/${this.vo.id}/settings`,
                label: 'MENU_ITEMS.VO.SETTINGS',
                style: 'vo-btn'
            });
        }
    }
    initItems() {
        this.items = [
            {
                cssIcon: 'perun-invite-member',
                label: 'VO_DETAIL.OVERVIEW.INVITE_MEMBER',
                style: 'vo-btn',
                url: `/organizations/${this.vo.id}/invite-member`,
                clickAction: function (dialog, voId) {
                    dialog.open(_shared_components_dialogs_invite_member_dialog_invite_member_dialog_component__WEBPACK_IMPORTED_MODULE_1__["InviteMemberDialogComponent"], {
                        width: '450px',
                        data: { voId: voId }
                    });
                }
            },
            {
                cssIcon: 'perun-service-identity',
                label: 'VO_DETAIL.OVERVIEW.CREATE_SERVICE_MEMBER',
                style: 'vo-btn',
                url: `/organizations/${this.vo.id}/create-service-member`,
                clickAction: function (dialog, voId) {
                    return;
                }
            },
            {
                cssIcon: 'perun-manager',
                label: 'VO_DETAIL.OVERVIEW.ADD_MANAGER',
                style: 'vo-btn',
                url: `/organizations/${this.vo.id}/add-manager`,
                clickAction: function (dialog, voId) {
                    return;
                }
            },
            {
                cssIcon: 'perun-group',
                label: 'VO_DETAIL.OVERVIEW.CREATE_GROUP',
                style: 'vo-btn',
                url: `/organizations/${this.vo.id}/create-group`,
                clickAction: function (dialog, voId) {
                    return;
                }
            },
            {
                cssIcon: 'perun-create1',
                label: 'VO_DETAIL.OVERVIEW.ADD_MEMBER',
                style: 'vo-btn',
                url: `/organizations/${this.vo.id}/invite-member`,
                clickAction: function (dialog, voId) {
                    return;
                }
            }
        ];
    }
}
VoOverviewComponent.ɵfac = function VoOverviewComponent_Factory(t) { return new (t || VoOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["VoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["AuthResolverService"])); };
VoOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoOverviewComponent, selectors: [["app-vo-overview"]], decls: 2, vars: 2, consts: [[3, "items", "size"]], template: function VoOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-buttons-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.navItems)("size", "small");
    } }, directives: [_shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_5__["MenuButtonsFieldComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1vdmVydmlldy92by1vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vo-overview',
                templateUrl: './vo-overview.component.html',
                styleUrls: ['./vo-overview.component.scss']
            }]
    }], function () { return [{ type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"] }, { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["VoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["AuthResolverService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: VoResourcesOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoResourcesOverviewComponent", function() { return VoResourcesOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/menu-buttons-field/menu-buttons-field.component */ "./src/app/shared/components/menu-buttons-field/menu-buttons-field.component.ts");









class VoResourcesOverviewComponent {
    constructor(sideMenuService, voService, route, router) {
        this.sideMenuService = sideMenuService;
        this.voService = voService;
        this.route = route;
        this.router = router;
        this.items = [];
    }
    ngOnInit() {
        this.route.parent.parent.params.subscribe(parentParams => {
            const voId = parentParams['voId'];
            this.voService.getVoById(voId).subscribe(vo => {
                this.vo = vo;
                this.initItems();
            });
        });
    }
    initItems() {
        this.items = [
            {
                cssIcon: 'perun-resource',
                url: `/organizations/${this.vo.id}/resources/preview`,
                label: 'MENU_ITEMS.VO.RESOURCE_PREVIEW',
                style: 'vo-btn'
            },
            {
                cssIcon: 'perun-resource-tags',
                url: `/organizations/${this.vo.id}/resources/tags`,
                label: 'MENU_ITEMS.VO.RESOURCE_TAGS',
                style: 'vo-btn'
            },
            {
                cssIcon: 'perun-resources-state',
                url: `/organizations/${this.vo.id}/resources/states`,
                label: 'MENU_ITEMS.VO.RESOURCE_STATES',
                style: 'vo-btn'
            }
        ];
    }
}
VoResourcesOverviewComponent.ɵfac = function VoResourcesOverviewComponent_Factory(t) { return new (t || VoResourcesOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["VoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
VoResourcesOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoResourcesOverviewComponent, selectors: [["app-vo-resources-overview"]], hostVars: 2, hostBindings: function VoResourcesOverviewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 2, vars: 2, consts: [[3, "items", "size"]], template: function VoResourcesOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-buttons-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items)("size", "small");
    } }, directives: [_shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_4__["MenuButtonsFieldComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1yZXNvdXJjZXMvdm8tcmVzb3VyY2VzLW92ZXJ2aWV3L3ZvLXJlc291cmNlcy1vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoResourcesOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vo-resources-overview',
                templateUrl: './vo-resources-overview.component.html',
                styleUrls: ['./vo-resources-overview.component.scss']
            }]
    }], function () { return [{ type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"] }, { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["VoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: VoResourcesTagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoResourcesTagsComponent", function() { return VoResourcesTagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _shared_components_dialogs_create_resource_tag_dialog_create_resource_tag_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/create-resource-tag-dialog/create-resource-tag-dialog.component */ "./src/app/shared/components/dialogs/create-resource-tag-dialog/create-resource-tag-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_delete_resource_tag_dialog_delete_resource_tag_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/delete-resource-tag-dialog/delete-resource-tag-dialog.component */ "./src/app/shared/components/dialogs/delete-resource-tag-dialog/delete-resource-tag-dialog.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/refresh-button/refresh-button.component */ "./src/app/shared/components/refresh-button/refresh-button.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/immediate-filter/immediate-filter.component */ "./src/app/shared/components/immediate-filter/immediate-filter.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _shared_components_resources_tags_list_resources_tags_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../shared/components/resources-tags-list/resources-tags-list.component */ "./src/app/shared/components/resources-tags-list/resources-tags-list.component.ts");





















function VoResourcesTagsComponent_mat_spinner_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 7);
} }
function VoResourcesTagsComponent_app_resources_tags_list_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-resources-tags-list", 8);
} if (rf & 2) {
    const ctx_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selection", ctx_r485.selection)("resourceTags", ctx_r485.resourceTag)("filterValue", ctx_r485.filterValue);
} }
class VoResourcesTagsComponent {
    constructor(route, resourceManager, dialog, notificator, translator) {
        this.route = route;
        this.resourceManager = resourceManager;
        this.dialog = dialog;
        this.notificator = notificator;
        this.translator = translator;
        this.loading = false;
        this.resourceTag = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
    }
    ngOnInit() {
        this.route.parent.parent.params.subscribe(parentParams => {
            this.voId = parentParams['voId'];
            this.updateData();
        });
    }
    deleteTag() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_delete_resource_tag_dialog_delete_resource_tag_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DeleteResourceTagDialogComponent"], {
            width: '450px',
            data: { tagsForDelete: this.selection.selected }
        });
        dialogRef.afterClosed().subscribe(success => {
            if (success) {
                this.translator.get('VO_DETAIL.RESOURCES.TAGS.DELETE_SUCCESS').subscribe(text => {
                    this.notificator.showSuccess(text);
                });
                this.updateData();
            }
        });
    }
    create() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_create_resource_tag_dialog_create_resource_tag_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CreateResourceTagDialogComponent"], {
            width: '450px',
            data: { voId: this.voId }
        });
        dialogRef.afterClosed().subscribe(success => {
            if (success) {
                this.translator.get('VO_DETAIL.RESOURCES.TAGS.CREATE_SUCCESS').subscribe(text => {
                    this.notificator.showSuccess(text);
                });
                this.updateData();
            }
        });
    }
    updateData() {
        this.loading = true;
        this.selection.clear();
        this.resourceManager.getAllResourcesTagsForVo(this.voId).subscribe(tags => {
            this.resourceTag = tags;
            this.loading = false;
        });
    }
    applyFilter(filterValue) {
        this.filterValue = filterValue;
    }
}
VoResourcesTagsComponent.ɵfac = function VoResourcesTagsComponent_Factory(t) { return new (t || VoResourcesTagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_8__["ResourcesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_7__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"])); };
VoResourcesTagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoResourcesTagsComponent, selectors: [["app-vo-resources-tags"]], hostVars: 2, hostBindings: function VoResourcesTagsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 13, vars: 13, consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "warn", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "selection", "resourceTags", "filterValue", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [3, "selection", "resourceTags", "filterValue"]], template: function VoResourcesTagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-refresh-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function VoResourcesTagsComponent_Template_app_refresh_button_refresh_3_listener($event) { return ctx.updateData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoResourcesTagsComponent_Template_button_click_4_listener($event) { return ctx.create(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoResourcesTagsComponent_Template_button_click_7_listener($event) { return ctx.deleteTag(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-immediate-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function VoResourcesTagsComponent_Template_app_immediate_filter_filter_10_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, VoResourcesTagsComponent_mat_spinner_11_Template, 1, 0, "mat-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VoResourcesTagsComponent_app_resources_tags_list_12_Template, 1, 3, "app-resources-tags-list", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 7, "VO_DETAIL.RESOURCES.TAGS.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, "VO_DETAIL.RESOURCES.TAGS.CREATE_BUTTON"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 11, "VO_DETAIL.RESOURCES.TAGS.DELETE_BUTTON"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "SHARED.COMPONENTS.RESOURCES_LIST.TABLE_SEARCH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_9__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_11__["ImmediateFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], _shared_components_resources_tags_list_resources_tags_list_component__WEBPACK_IMPORTED_MODULE_14__["ResourcesTagsListComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1yZXNvdXJjZXMvdm8tcmVzb3VyY2VzLXRhZ3Mvdm8tcmVzb3VyY2VzLXRhZ3MuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoResourcesTagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vo-resources-tags',
                templateUrl: './vo-resources-tags.component.html',
                styleUrls: ['./vo-resources-tags.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_8__["ResourcesManagerService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_7__["NotificatorService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources.component.ts ***!
  \*********************************************************************************/
/*! exports provided: VoResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoResourcesComponent", function() { return VoResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");
/* harmony import */ var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/animated-router-outlet/animated-router-outlet.component */ "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");






class VoResourcesComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.parent.params.subscribe(parentParams => {
            this.voId = parentParams['voId'];
        });
    }
}
VoResourcesComponent.ɵfac = function VoResourcesComponent_Factory(t) { return new (t || VoResourcesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
VoResourcesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoResourcesComponent, selectors: [["app-vo-resources"]], hostVars: 2, hostBindings: function VoResourcesComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 1, vars: 0, template: function VoResourcesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-animated-router-outlet");
    } }, directives: [_shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_3__["AnimatedRouterOutletComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1yZXNvdXJjZXMvdm8tcmVzb3VyY2VzLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoResourcesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vo-resources',
                templateUrl: './vo-resources.component.html',
                styleUrls: ['./vo-resources.component.scss'],
                animations: [
                    _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: VoSettingsAttributesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoSettingsAttributesComponent", function() { return VoSettingsAttributesComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component */ "./src/app/shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component */ "./src/app/shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/attributes-list/attributes-list.component */ "./src/app/shared/components/attributes-list/attributes-list.component.ts");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @perun-web-apps/perun/utils */ "../../libs/perun/utils/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/refresh-button/refresh-button.component */ "./src/app/shared/components/refresh-button/refresh-button.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/immediate-filter/immediate-filter.component */ "./src/app/shared/components/immediate-filter/immediate-filter.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");























const _c0 = ["list"];
function VoSettingsAttributesComponent_mat_spinner_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-spinner", 8);
} }
function VoSettingsAttributesComponent_app_attributes_list_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-attributes-list", 9, 10);
} if (rf & 2) {
    const ctx_r377 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("filterValue", ctx_r377.filterValue)("attributes", ctx_r377.attributes)("selection", ctx_r377.selection);
} }
class VoSettingsAttributesComponent {
    constructor(attributesManager, route, dialog, notificator, translate) {
        this.attributesManager = attributesManager;
        this.route = route;
        this.dialog = dialog;
        this.notificator = notificator;
        this.translate = translate;
        this.attributes = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true, []);
        this.filterValue = '';
        this.translate.get('VO_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE').subscribe(value => this.saveSuccessMessage = value);
        this.translate.get('VO_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE').subscribe(value => this.deleteSuccessMessage = value);
    }
    ngOnInit() {
        this.route.parent.parent.params.subscribe(parentParams => {
            this.voId = parentParams['voId'];
            this.refreshTable();
        });
    }
    onDelete() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DeleteAttributeDialogComponent"], {
            width: '450px',
            data: {
                entityId: this.voId,
                entity: 'vo',
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
        const dialogRef = this.dialog.open(_shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CreateAttributeDialogComponent"], {
            width: '1050px',
            data: {
                entityId: this.voId,
                entity: 'vo',
                notEmptyAttributes: this.attributes,
                style: 'vo-theme'
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'saved') {
                this.refreshTable();
            }
        });
    }
    onSave() {
        // have to use this to update attribute with map in it, before saving it
        this.list.updateMapAttributes();
        this.attributesManager.setVoAttributes({ vo: this.voId, attributes: this.selection.selected }).subscribe(() => {
            this.attributesManager.getVoAttributes(this.voId).subscribe(attributes => {
                this.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["filterCoreAttributes"])(attributes);
                this.notificator.showSuccess(this.saveSuccessMessage);
                this.selection.clear();
            });
        });
    }
    refreshTable() {
        this.loading = true;
        this.attributesManager.getVoAttributes(this.voId).subscribe(attributes => {
            this.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["filterCoreAttributes"])(attributes);
            this.selection.clear();
            this.loading = false;
        });
    }
    applyFilter(filterValue) {
        this.filterValue = filterValue;
    }
}
VoSettingsAttributesComponent.ɵfac = function VoSettingsAttributesComponent_Factory(t) { return new (t || VoSettingsAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_7__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"])); };
VoSettingsAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: VoSettingsAttributesComponent, selectors: [["app-vo-settings-attributes"]], viewQuery: function VoSettingsAttributesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
    } }, hostVars: 2, hostBindings: function VoSettingsAttributesComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("router-component", true);
    } }, decls: 17, vars: 17, consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "filterValue", "attributes", "selection", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [3, "filterValue", "attributes", "selection"], ["list", ""]], template: function VoSettingsAttributesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "app-refresh-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("refresh", function VoSettingsAttributesComponent_Template_app_refresh_button_refresh_4_listener($event) { return ctx.refreshTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VoSettingsAttributesComponent_Template_button_click_5_listener($event) { return ctx.onCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VoSettingsAttributesComponent_Template_button_click_8_listener($event) { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VoSettingsAttributesComponent_Template_button_click_11_listener($event) { return ctx.onDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "app-immediate-filter", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("filter", function VoSettingsAttributesComponent_Template_app_immediate_filter_filter_14_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, VoSettingsAttributesComponent_mat_spinner_15_Template, 1, 0, "mat-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, VoSettingsAttributesComponent_app_attributes_list_16_Template, 2, 3, "app-attributes-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 9, "VO_DETAIL.SETTINGS.ATTRIBUTES.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 11, "VO_DETAIL.SETTINGS.ATTRIBUTES.CREATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 13, "VO_DETAIL.SETTINGS.ATTRIBUTES.SAVE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 15, "VO_DETAIL.SETTINGS.ATTRIBUTES.DELETE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", "SHARED.COMPONENTS.ATTRIBUTES_LIST.FILTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_11__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_13__["ImmediateFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_6__["AttributesListComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy1hdHRyaWJ1dGVzL3ZvLXNldHRpbmdzLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](VoSettingsAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'app-vo-settings-attributes',
                templateUrl: './vo-settings-attributes.component.html',
                styleUrls: ['./vo-settings-attributes.component.scss']
            }]
    }], function () { return [{ type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_7__["NotificatorService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostBinding"],
            args: ['class.router-component']
        }], list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['list']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: VoSettingsExpirationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoSettingsExpirationComponent", function() { return VoSettingsExpirationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _perun_web_apps_perun_urns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @perun-web-apps/perun/urns */ "../../libs/perun/urns/src/index.ts");
/* harmony import */ var _core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/api/api-request-configuration.service */ "./src/app/core/services/api/api-request-configuration.service.ts");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/expiration-settings/expiration-settings.component */ "./src/app/vos/components/expiration-settings/expiration-settings.component.ts");
















function VoSettingsExpirationComponent_app_expiration_settings_0_Template(rf, ctx) { if (rf & 1) {
    const _r381 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-expiration-settings", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveAttribute", function VoSettingsExpirationComponent_app_expiration_settings_0_Template_app_expiration_settings_saveAttribute_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r381); const ctx_r380 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r380.saveExpirationAttribute($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r379 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expirationAttribute", ctx_r379.expirationAttribute);
} }
class VoSettingsExpirationComponent {
    constructor(attributesManager, route, translate, notificator, apiRequest) {
        this.attributesManager = attributesManager;
        this.route = route;
        this.translate = translate;
        this.notificator = notificator;
        this.apiRequest = apiRequest;
        this.translate.get('VO_DETAIL.SETTINGS.EXPIRATION.SUCCESS_MESSAGE').subscribe(value => this.successMessage = value);
        this.translate.get('VO_DETAIL.SETTINGS.EXPIRATION.ERROR_MESSAGE').subscribe(value => this.errorMessage = value);
    }
    ngOnInit() {
        this.route.parent.parent.params.subscribe(params => {
            this.voId = params['voId'];
            this.loadSettings();
        });
    }
    loadSettings() {
        this.attributesManager.getVoAttributeByName(this.voId, _perun_web_apps_perun_urns__WEBPACK_IMPORTED_MODULE_5__["Urns"].VO_DEF_EXPIRATION_RULES).subscribe(attr => {
            this.expirationAttribute = attr;
        });
    }
    saveExpirationAttribute(attribute) {
        // FIXME this might not work in case of some race condition (other request finishes sooner)
        this.apiRequest.dontHandleErrorForNext();
        this.attributesManager.setVoAttribute({ vo: this.voId, attribute: attribute }).subscribe(() => {
            this.loadSettings();
            this.notificator.showSuccess(this.successMessage);
        }, error => {
            console.log(error);
            this.notificator.showRPCError(error.error, this.errorMessage);
        });
    }
}
VoSettingsExpirationComponent.ɵfac = function VoSettingsExpirationComponent_Factory(t) { return new (t || VoSettingsExpirationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_7__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ApiRequestConfigurationService"])); };
VoSettingsExpirationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoSettingsExpirationComponent, selectors: [["app-vo-settings-expiration"]], hostVars: 2, hostBindings: function VoSettingsExpirationComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 1, vars: 1, consts: [[3, "expirationAttribute", "saveAttribute", 4, "ngIf"], [3, "expirationAttribute", "saveAttribute"]], template: function VoSettingsExpirationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VoSettingsExpirationComponent_app_expiration_settings_0_Template, 1, 1, "app-expiration-settings", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expirationAttribute !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_9__["ExpirationSettingsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy1leHBpcmF0aW9uL3ZvLXNldHRpbmdzLWV4cGlyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__["openClose"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoSettingsExpirationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vo-settings-expiration',
                templateUrl: './vo-settings-expiration.component.html',
                styleUrls: ['./vo-settings-expiration.component.scss'],
                animations: [
                    _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__["openClose"]
                ]
            }]
    }], function () { return [{ type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_7__["AttributesManagerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"] }, { type: _core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_6__["ApiRequestConfigurationService"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: VoSettingsExtsourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoSettingsExtsourcesComponent", function() { return VoSettingsExtsourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_components_dialogs_add_ext_source_dialog_add_ext_source_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/add-ext-source-dialog/add-ext-source-dialog.component */ "./src/app/shared/components/dialogs/add-ext-source-dialog/add-ext-source-dialog.component.ts");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/refresh-button/refresh-button.component */ "./src/app/shared/components/refresh-button/refresh-button.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/immediate-filter/immediate-filter.component */ "./src/app/shared/components/immediate-filter/immediate-filter.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _shared_components_ext_sources_list_ext_sources_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../shared/components/ext-sources-list/ext-sources-list.component */ "./src/app/shared/components/ext-sources-list/ext-sources-list.component.ts");




















function VoSettingsExtsourcesComponent_mat_spinner_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 7);
} }
function VoSettingsExtsourcesComponent_app_ext_sources_list_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ext-sources-list", 8);
} if (rf & 2) {
    const ctx_r567 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("extSources", ctx_r567.extSources)("filterValue", ctx_r567.filterValue)("selection", ctx_r567.selection);
} }
class VoSettingsExtsourcesComponent {
    constructor(extSourceService, route, dialog, notificator, translate) {
        this.extSourceService = extSourceService;
        this.route = route;
        this.dialog = dialog;
        this.notificator = notificator;
        this.translate = translate;
        this.extSources = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.filterValue = '';
        this.translate.get('VO_DETAIL.SETTINGS.EXT_SOURCES.SUCCESS_REMOVED').subscribe(result => this.successMessage = result);
    }
    ngOnInit() {
        this.route.parent.parent.params.subscribe(parentParams => {
            this.voId = parentParams['voId'];
            this.refreshTable();
        });
    }
    refreshTable() {
        this.loading = true;
        this.extSourceService.getVoExtSources(this.voId).subscribe(sources => {
            this.extSources = sources;
            this.selection.clear();
            this.loading = false;
        });
    }
    applyFilter(filterValue) {
        this.filterValue = filterValue;
    }
    onAdd() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_add_ext_source_dialog_add_ext_source_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddExtSourceDialogComponent"], {
            width: '1000px',
            data: {
                voId: this.voId,
                voExtSources: this.extSources,
                theme: 'vo-theme'
            }
        });
        dialogRef.afterClosed().subscribe(added => {
            if (added) {
                this.refreshTable();
            }
        });
    }
    onRemove() {
        for (const extSource of this.selection.selected) {
            this.extSourceService.removeExtSources(this.voId, extSource.id).subscribe(_ => {
                this.notificator.showSuccess(this.successMessage + extSource.name);
                this.refreshTable();
            });
        }
    }
}
VoSettingsExtsourcesComponent.ɵfac = function VoSettingsExtsourcesComponent_Factory(t) { return new (t || VoSettingsExtsourcesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_1__["ExtSourceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_6__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"])); };
VoSettingsExtsourcesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoSettingsExtsourcesComponent, selectors: [["app-vo-settings-extsources"]], decls: 14, vars: 13, consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "warn", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "extSources", "filterValue", "selection", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [3, "extSources", "filterValue", "selection"]], template: function VoSettingsExtsourcesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-refresh-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function VoSettingsExtsourcesComponent_Template_app_refresh_button_refresh_4_listener($event) { return ctx.refreshTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoSettingsExtsourcesComponent_Template_button_click_5_listener($event) { return ctx.onAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoSettingsExtsourcesComponent_Template_button_click_8_listener($event) { return ctx.onRemove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-immediate-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function VoSettingsExtsourcesComponent_Template_app_immediate_filter_filter_11_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VoSettingsExtsourcesComponent_mat_spinner_12_Template, 1, 0, "mat-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, VoSettingsExtsourcesComponent_app_ext_sources_list_13_Template, 1, 3, "app-ext-sources-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, "VO_DETAIL.SETTINGS.EXT_SOURCES.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, "VO_DETAIL.SETTINGS.EXT_SOURCES.ADD"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, "VO_DETAIL.SETTINGS.EXT_SOURCES.REMOVE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "VO_DETAIL.SETTINGS.EXT_SOURCES.FILTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_8__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_10__["ImmediateFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _shared_components_ext_sources_list_ext_sources_list_component__WEBPACK_IMPORTED_MODULE_13__["ExtSourcesListComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy1leHRzb3VyY2VzL3ZvLXNldHRpbmdzLWV4dHNvdXJjZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoSettingsExtsourcesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vo-settings-extsources',
                templateUrl: './vo-settings-extsources.component.html',
                styleUrls: ['./vo-settings-extsources.component.scss']
            }]
    }], function () { return [{ type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_1__["ExtSourceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_6__["NotificatorService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: VoSettingsManagersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoSettingsManagersComponent", function() { return VoSettingsManagersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @perun-web-apps/perun/models */ "../../libs/perun/models/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_managers_page_managers_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/managers-page/managers-page.component */ "./src/app/shared/components/managers-page/managers-page.component.ts");











function VoSettingsManagersComponent_app_managers_page_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-managers-page", 1);
} if (rf & 2) {
    const ctx_r382 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("complementaryObject", ctx_r382.vo)("complementaryObjectType", ctx_r382.type)("theme", ctx_r382.theme)("availableRoles", ctx_r382.availableRoles);
} }
class VoSettingsManagersComponent {
    constructor(dialog, voService, route) {
        this.dialog = dialog;
        this.voService = voService;
        this.route = route;
        this.availableRoles = [_perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_4__["Role"].VOADMIN, _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_4__["Role"].VOOBSERVER, _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_4__["Role"].TOPGROUPCREATOR];
        this.selected = 'user';
        this.type = 'Vo';
        this.theme = 'vo-theme';
    }
    ngOnInit() {
        this.route.parent.parent.params.subscribe(parentParentParams => {
            const voId = parentParentParams['voId'];
            this.voService.getVoById(voId).subscribe(vo => {
                this.vo = vo;
            });
        });
    }
}
VoSettingsManagersComponent.ɵfac = function VoSettingsManagersComponent_Factory(t) { return new (t || VoSettingsManagersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["VoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
VoSettingsManagersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoSettingsManagersComponent, selectors: [["app-vo-settings-managers"]], hostVars: 2, hostBindings: function VoSettingsManagersComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 1, vars: 1, consts: [[3, "complementaryObject", "complementaryObjectType", "theme", "availableRoles", 4, "ngIf"], [3, "complementaryObject", "complementaryObjectType", "theme", "availableRoles"]], template: function VoSettingsManagersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VoSettingsManagersComponent_app_managers_page_0_Template, 1, 4, "app-managers-page", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_components_managers_page_managers_page_component__WEBPACK_IMPORTED_MODULE_6__["ManagersPageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy1tYW5hZ2Vycy92by1zZXR0aW5ncy1tYW5hZ2Vycy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoSettingsManagersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vo-settings-managers',
                templateUrl: './vo-settings-managers.component.html',
                styleUrls: ['./vo-settings-managers.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["VoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: VoSettingsNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoSettingsNotificationsComponent", function() { return VoSettingsNotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_components_dialogs_delete_notification_dialog_delete_notification_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/delete-notification-dialog/delete-notification-dialog.component */ "./src/app/shared/components/dialogs/delete-notification-dialog/delete-notification-dialog.component.ts");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _shared_components_dialogs_edit_email_footer_dialog_edit_email_footer_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/edit-email-footer-dialog/edit-email-footer-dialog.component */ "./src/app/shared/components/dialogs/edit-email-footer-dialog/edit-email-footer-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_add_edit_notification_dialog_add_edit_notification_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component */ "./src/app/shared/components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_notifications_copy_mails_dialog_notifications_copy_mails_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/notifications-copy-mails-dialog/notifications-copy-mails-dialog.component */ "./src/app/shared/components/dialogs/notifications-copy-mails-dialog/notifications-copy-mails-dialog.component.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @perun-web-apps/perun/openapi */ "../../libs/perun/openapi/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @perun-web-apps/perun/models */ "../../libs/perun/models/src/index.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../components/notification-list/notification-list.component */ "./src/app/vos/components/notification-list/notification-list.component.ts");
/* harmony import */ var _libs_ui_alerts_src_lib_alert_alert_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../../../libs/ui/alerts/src/lib/alert/alert.component */ "../../libs/ui/alerts/src/lib/alert/alert.component.ts");

























function VoSettingsNotificationsComponent_mat_spinner_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 10);
} }
function VoSettingsNotificationsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r544 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-notification-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function VoSettingsNotificationsComponent_div_21_Template_app_notification_list_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r544); const ctx_r543 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r543.changeSelection($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r541 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("applicationMails", ctx_r541.applicationMails)("voId", ctx_r541.voId)("selection", ctx_r541.selection);
} }
function VoSettingsNotificationsComponent_app_alert_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-alert", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "warn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "VO_DETAIL.SETTINGS.NOTIFICATIONS.NO_EMAILS"), "\n");
} }
class VoSettingsNotificationsComponent {
    constructor(route, registrarManager, registrarService, translate, dialog, notificator) {
        this.route = route;
        this.registrarManager = registrarManager;
        this.registrarService = registrarService;
        this.translate = translate;
        this.dialog = dialog;
        this.notificator = notificator;
        this.loading = false;
        this.applicationMails = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
    }
    ngOnInit() {
        this.loading = true;
        this.route.parent.parent.params.subscribe(params => {
            this.voId = params['voId'];
            this.registrarManager.getVoApplicationForm(this.voId).subscribe(form => {
                this.applicationForm = form;
                this.registrarService.getApplicationMailsForVo(this.voId).subscribe(mails => {
                    this.applicationMails = mails;
                    this.loading = false;
                });
            });
        });
    }
    add() {
        const applicationMail = new _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_12__["ApplicationMail"]();
        applicationMail.formId = this.applicationForm.id;
        const dialog = this.dialog.open(_shared_components_dialogs_add_edit_notification_dialog_add_edit_notification_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AddEditNotificationDialogComponent"], {
            width: '1400px',
            height: '700px',
            data: { voId: this.voId, createMailNotification: true, applicationMail: applicationMail, applicationMails: this.applicationMails }
        });
        dialog.afterClosed().subscribe(success => {
            if (success) {
                this.translate.get('VO_DETAIL.SETTINGS.NOTIFICATIONS.ADD_SUCCESS').subscribe(text => {
                    this.notificator.showSuccess(text);
                });
                this.selection.clear();
                this.updateTable();
            }
        });
    }
    remove() {
        const dialog = this.dialog.open(_shared_components_dialogs_delete_notification_dialog_delete_notification_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DeleteNotificationDialogComponent"], {
            width: '500px',
            data: { voId: this.voId, mails: this.selection.selected }
        });
        dialog.afterClosed().subscribe(success => {
            if (success) {
                this.translate.get('VO_DETAIL.SETTINGS.NOTIFICATIONS.DELETE_SUCCESS').subscribe(text => {
                    this.notificator.showSuccess(text);
                });
                this.selection.clear();
                this.updateTable();
            }
        });
    }
    copy() {
        const dialog = this.dialog.open(_shared_components_dialogs_notifications_copy_mails_dialog_notifications_copy_mails_dialog_component__WEBPACK_IMPORTED_MODULE_9__["NotificationsCopyMailsDialogComponent"], {
            width: '500px',
            data: { voId: this.voId }
        });
        dialog.afterClosed().subscribe(copyFrom => {
            if (copyFrom) {
                this.selection.clear();
                this.updateTable();
            }
        });
    }
    updateTable() {
        this.loading = true;
        this.registrarService.getApplicationMailsForVo(this.voId).subscribe(mails => {
            this.applicationMails = mails;
            this.loading = false;
        });
    }
    changeEmailFooter() {
        this.dialog.open(_shared_components_dialogs_edit_email_footer_dialog_edit_email_footer_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditEmailFooterDialogComponent"], {
            width: '500px',
            data: { voId: this.voId }
        });
    }
    changeSelection(selection) {
        this.selection = selection;
    }
}
VoSettingsNotificationsComponent.ɵfac = function VoSettingsNotificationsComponent_Factory(t) { return new (t || VoSettingsNotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_11__["RegistrarManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_10__["RegistrarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_6__["NotificatorService"])); };
VoSettingsNotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoSettingsNotificationsComponent, selectors: [["app-vo-settings-notifications"]], hostVars: 2, hostBindings: function VoSettingsNotificationsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 23, vars: 19, consts: [[1, "page-subtitle"], [1, "w-100", "d-flex"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "warn", 1, "mr-2", 3, "disabled", "click"], ["mat-stroked-button", "", 1, "mr-2", 3, "click"], [1, "material-icons"], ["mat-stroked-button", "", 3, "click"], ["class", "ml-auto mr-auto", 4, "ngIf"], ["class", "card mt-2", 4, "ngIf"], [3, "color", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [1, "card", "mt-2"], [3, "applicationMails", "voId", "selection", "selectionChange"], [3, "color"]], template: function VoSettingsNotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoSettingsNotificationsComponent_Template_button_click_4_listener($event) { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoSettingsNotificationsComponent_Template_button_click_7_listener($event) { return ctx.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoSettingsNotificationsComponent_Template_button_click_10_listener($event) { return ctx.changeEmailFooter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoSettingsNotificationsComponent_Template_button_click_15_listener($event) { return ctx.copy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "file_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, VoSettingsNotificationsComponent_mat_spinner_20_Template, 1, 0, "mat-spinner", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, VoSettingsNotificationsComponent_div_21_Template, 2, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, VoSettingsNotificationsComponent_app_alert_22_Template, 3, 4, "app-alert", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 9, "VO_DETAIL.SETTINGS.NOTIFICATIONS.TITLE"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, "VO_DETAIL.SETTINGS.NOTIFICATIONS.ADD"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 13, "VO_DETAIL.SETTINGS.NOTIFICATIONS.REMOVE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 15, "VO_DETAIL.SETTINGS.NOTIFICATIONS.EMAIL_FOOTER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 17, "VO_DETAIL.SETTINGS.NOTIFICATIONS.COPY_FROM_VO"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.applicationMails.length !== 0 && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.applicationMails.length === 0 && !ctx.loading);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_16__["NotificationListComponent"], _libs_ui_alerts_src_lib_alert_alert_component__WEBPACK_IMPORTED_MODULE_17__["AlertComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy1ub3RpZmljYXRpb25zL3ZvLXNldHRpbmdzLW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoSettingsNotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vo-settings-notifications',
                templateUrl: './vo-settings-notifications.component.html',
                styleUrls: ['./vo-settings-notifications.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_11__["RegistrarManagerService"] }, { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_10__["RegistrarService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_6__["NotificatorService"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: VoSettingsOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoSettingsOverviewComponent", function() { return VoSettingsOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/menu-buttons-field/menu-buttons-field.component */ "./src/app/shared/components/menu-buttons-field/menu-buttons-field.component.ts");









class VoSettingsOverviewComponent {
    constructor(sideMenuService, voService, route, router) {
        this.sideMenuService = sideMenuService;
        this.voService = voService;
        this.route = route;
        this.router = router;
        this.items = [];
    }
    ngOnInit() {
        this.route.parent.parent.params.subscribe(parentParams => {
            const voId = parentParams['voId'];
            this.voService.getVoById(voId).subscribe(vo => {
                this.vo = vo;
                this.initItems();
            });
        });
    }
    initItems() {
        this.items = [
            {
                cssIcon: 'perun-attributes',
                url: `/organizations/${this.vo.id}/settings/attributes`,
                label: 'MENU_ITEMS.VO.ATTRIBUTES',
                style: 'vo-btn'
            },
            {
                cssIcon: 'perun-group',
                url: `/organizations/${this.vo.id}/settings/expiration`,
                label: 'MENU_ITEMS.VO.EXPIRATION',
                style: 'vo-btn'
            },
            {
                cssIcon: 'perun-manager',
                url: `/organizations/${this.vo.id}/settings/managers`,
                label: 'MENU_ITEMS.VO.MANAGERS',
                style: 'vo-btn'
            },
            {
                cssIcon: 'perun-application-form',
                url: `/organizations/${this.vo.id}/settings/applicationForm`,
                label: 'MENU_ITEMS.VO.APPLICATION_FORM',
                style: 'vo-btn'
            },
            {
                cssIcon: 'perun-notification',
                url: `/organizations/${this.vo.id}/settings/notifications`,
                label: 'MENU_ITEMS.VO.NOTIFICATIONS',
                style: 'vo-btn'
            },
            {
                cssIcon: 'perun-external-sources',
                url: `/organizations/${this.vo.id}/settings/extsources`,
                label: 'MENU_ITEMS.VO.EXTSOURCES',
                style: 'vo-btn'
            }
        ];
    }
}
VoSettingsOverviewComponent.ɵfac = function VoSettingsOverviewComponent_Factory(t) { return new (t || VoSettingsOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["VoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
VoSettingsOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoSettingsOverviewComponent, selectors: [["app-vo-settings-overview"]], hostVars: 2, hostBindings: function VoSettingsOverviewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 2, vars: 2, consts: [[3, "items", "size"]], template: function VoSettingsOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-buttons-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items)("size", "small");
    } }, directives: [_shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_4__["MenuButtonsFieldComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy1vdmVydmlldy92by1zZXR0aW5ncy1vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoSettingsOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vo-settings-overview',
                templateUrl: './vo-settings-overview.component.html',
                styleUrls: ['./vo-settings-overview.component.scss']
            }]
    }], function () { return [{ type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"] }, { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["VoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings.component.ts ***!
  \*******************************************************************************/
/*! exports provided: VoSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoSettingsComponent", function() { return VoSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");
/* harmony import */ var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/animated-router-outlet/animated-router-outlet.component */ "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");






class VoSettingsComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.backButtonRegex = new RegExp('/organizations/\\d+/settings/\\w+$');
        this.backButtonDisplayed = false;
        this.currentUrl = router.url;
        this.backButtonDisplayed = this.backButtonRegex.test(this.currentUrl);
        router.events.subscribe((_) => {
            if (_ instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.currentUrl = _.url;
                this.backButtonDisplayed = this.backButtonRegex.test(this.currentUrl);
            }
        });
    }
    ngOnInit() {
        this.route.parent.params.subscribe(parentParams => {
            this.voId = parentParams['voId'];
        });
    }
}
VoSettingsComponent.ɵfac = function VoSettingsComponent_Factory(t) { return new (t || VoSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
VoSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoSettingsComponent, selectors: [["app-vo-settings"]], hostVars: 2, hostBindings: function VoSettingsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
    } }, decls: 1, vars: 0, template: function VoSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-animated-router-outlet");
    } }, directives: [_shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_3__["AnimatedRouterOutletComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vo-settings',
                templateUrl: './vo-settings.component.html',
                styleUrls: ['./vo-settings.component.scss'],
                animations: [
                    _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { true: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.router-component']
        }] }); })();


/***/ }),

/***/ "./src/app/vos/pages/vo-select-page/vo-select-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/vos/pages/vo-select-page/vo-select-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: VoSelectPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoSelectPageComponent", function() { return VoSelectPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @perun-web-apps/perun/utils */ "../../libs/perun/utils/src/index.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_components_dialogs_remove_vo_dialog_remove_vo_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/dialogs/remove-vo-dialog/remove-vo-dialog.component */ "./src/app/shared/components/dialogs/remove-vo-dialog/remove-vo-dialog.component.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _shared_components_dialogs_create_vo_dialog_create_vo_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/dialogs/create-vo-dialog/create-vo-dialog.component */ "./src/app/shared/components/dialogs/create-vo-dialog/create-vo-dialog.component.ts");
/* harmony import */ var _shared_components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/back-button/back-button.component */ "./src/app/shared/components/back-button/back-button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/refresh-button/refresh-button.component */ "./src/app/shared/components/refresh-button/refresh-button.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/immediate-filter/immediate-filter.component */ "./src/app/shared/components/immediate-filter/immediate-filter.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _shared_components_vo_select_table_vo_select_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/vo-select-table/vo-select-table.component */ "./src/app/shared/components/vo-select-table/vo-select-table.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





















function VoSelectPageComponent_app_refresh_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r363 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-refresh-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function VoSelectPageComponent_app_refresh_button_5_Template_app_refresh_button_refresh_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r363); const ctx_r362 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r362.refreshTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VoSelectPageComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r365 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoSelectPageComponent_button_6_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r365); const ctx_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r364.onCreateVo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VO_MANAGEMENT.CREATE_VO"), " ");
} }
function VoSelectPageComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r367 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoSelectPageComponent_button_7_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r367); const ctx_r366 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r366.onRemoveVo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r358.selection.selected.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "VO_MANAGEMENT.REMOVE_VO"), " ");
} }
function VoSelectPageComponent_app_immediate_filter_8_Template(rf, ctx) { if (rf & 1) {
    const _r369 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-immediate-filter", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function VoSelectPageComponent_app_immediate_filter_8_Template_app_immediate_filter_filter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r369); const ctx_r368 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r368.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "VO_MANAGEMENT.FILTER_PLACEHOLDER");
} }
function VoSelectPageComponent_mat_spinner_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 12);
} }
function VoSelectPageComponent_app_vo_select_table_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vo-select-table", 13);
} if (rf & 2) {
    const ctx_r361 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayedColumns", ctx_r361.displayedColumns)("selection", ctx_r361.selection)("filterValue", ctx_r361.filterValue)("vos", ctx_r361.vos)("recentIds", ctx_r361.recentIds);
} }
class VoSelectPageComponent {
    constructor(sideMenuService, voService, authzService, dialog) {
        this.sideMenuService = sideMenuService;
        this.voService = voService;
        this.authzService = authzService;
        this.dialog = dialog;
        this.vos = [];
        this.recentIds = [];
        this.filterValue = '';
    }
    ngOnInit() {
        this.loading = true;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](false, []);
        this.isVoAdmin = this.authzService.isVoAdmin();
        this.displayedColumns = this.isVoAdmin ? ['checkbox', 'id', 'recent', 'name'] : ['id', 'recent', 'name'];
        this.sideMenuService.setAccessMenuItems([]);
        this.refreshTable();
    }
    refreshTable() {
        this.loading = true;
        this.selection.clear();
        this.voService.getVos().subscribe(vos => {
            this.vos = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_3__["getRecentlyVisited"])('vos', vos);
            this.recentIds = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_3__["getRecentlyVisitedIds"])('vos');
            this.loading = false;
        });
    }
    applyFilter(filterValue) {
        this.filterValue = filterValue;
    }
    onCreateVo() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_create_vo_dialog_create_vo_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CreateVoDialogComponent"], {
            width: '600px',
            data: { theme: 'vo-theme' }
        });
        dialogRef.afterClosed().subscribe(isVoCreated => {
            if (isVoCreated) {
                this.refreshTable();
            }
        });
    }
    onRemoveVo() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_remove_vo_dialog_remove_vo_dialog_component__WEBPACK_IMPORTED_MODULE_5__["RemoveVoDialogComponent"], {
            width: '600px',
            data: { theme: 'vo-theme', vos: this.selection.selected }
        });
        dialogRef.afterClosed().subscribe(isVoRemoved => {
            if (isVoRemoved) {
                this.refreshTable();
            }
        });
    }
}
VoSelectPageComponent.ɵfac = function VoSelectPageComponent_Factory(t) { return new (t || VoSelectPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_2__["VoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_2__["AuthResolverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
VoSelectPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VoSelectPageComponent, selectors: [["app-vo-select-page"]], decls: 11, vars: 9, consts: [[1, "container-fluid", "pl-xl-5", "pr-xl-5", "vo-theme"], [1, "page-title"], [3, "refresh", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", "class", "ml-2 mr-2", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "warn", "class", "ml-2 mr-2", 3, "disabled", "click", 4, "ngIf"], [3, "placeholder", "filter", 4, "ngIf"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "displayedColumns", "selection", "filterValue", "vos", "recentIds", 4, "ngIf"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "ml-2", "mr-2", 3, "click"], ["mat-flat-button", "", "color", "warn", 1, "ml-2", "mr-2", 3, "disabled", "click"], [3, "placeholder", "filter"], [1, "ml-auto", "mr-auto"], [3, "displayedColumns", "selection", "filterValue", "vos", "recentIds"]], template: function VoSelectPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VoSelectPageComponent_app_refresh_button_5_Template, 1, 0, "app-refresh-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VoSelectPageComponent_button_6_Template, 3, 3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VoSelectPageComponent_button_7_Template, 3, 4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VoSelectPageComponent_app_immediate_filter_8_Template, 1, 1, "app-immediate-filter", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, VoSelectPageComponent_mat_spinner_9_Template, 1, 0, "mat-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, VoSelectPageComponent_app_vo_select_table_10_Template, 1, 5, "app-vo-select-table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, "VO_MANAGEMENT.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.isVoAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.isVoAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_shared_components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_8__["BackButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_10__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_12__["ImmediateFilterComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], _shared_components_vo_select_table_vo_select_table_component__WEBPACK_IMPORTED_MODULE_14__["VoSelectTableComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1zZWxlY3QtcGFnZS92by1zZWxlY3QtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoSelectPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vo-select-page',
                templateUrl: './vo-select-page.component.html',
                styleUrls: ['./vo-select-page.component.scss']
            }]
    }], function () { return [{ type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"] }, { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_2__["VoService"] }, { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_2__["AuthResolverService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/vos/vos-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/vos/vos-routing.module.ts ***!
  \*******************************************/
/*! exports provided: VosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VosRoutingModule", function() { return VosRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_vo_select_page_vo_select_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/vo-select-page/vo-select-page.component */ "./src/app/vos/pages/vo-select-page/vo-select-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pages_group_detail_page_group_detail_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/group-detail-page/group-detail-page.component */ "./src/app/vos/pages/group-detail-page/group-detail-page.component.ts");
/* harmony import */ var _pages_member_detail_page_member_detail_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/member-detail-page/member-detail-page.component */ "./src/app/vos/pages/member-detail-page/member-detail-page.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_overview_vo_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-overview/vo-overview.component */ "./src/app/vos/pages/vo-detail-page/vo-overview/vo-overview.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_groups_vo_groups_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-groups/vo-groups.component */ "./src/app/vos/pages/vo-detail-page/vo-groups/vo-groups.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_members_vo_members_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-members/vo-members.component */ "./src/app/vos/pages/vo-detail-page/vo-members/vo-members.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_detail_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-detail-page.component */ "./src/app/vos/pages/vo-detail-page/vo-detail-page.component.ts");
/* harmony import */ var _pages_member_detail_page_member_overview_member_overview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/member-detail-page/member-overview/member-overview.component */ "./src/app/vos/pages/member-detail-page/member-overview/member-overview.component.ts");
/* harmony import */ var _pages_member_detail_page_member_groups_member_groups_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/member-detail-page/member-groups/member-groups.component */ "./src/app/vos/pages/member-detail-page/member-groups/member-groups.component.ts");
/* harmony import */ var _pages_group_detail_page_group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/group-detail-page/group-overview/group-overview.component */ "./src/app/vos/pages/group-detail-page/group-overview/group-overview.component.ts");
/* harmony import */ var _pages_group_detail_page_group_subgroups_group_subgroups_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/group-detail-page/group-subgroups/group-subgroups.component */ "./src/app/vos/pages/group-detail-page/group-subgroups/group-subgroups.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_applications_vo_applications_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-applications/vo-applications.component */ "./src/app/vos/pages/vo-detail-page/vo-applications/vo-applications.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_attributes_vo_settings_attributes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_overview_vo_settings_overview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_expiration_vo_settings_expiration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component.ts");
/* harmony import */ var _pages_group_detail_page_group_applications_group_applications_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/group-detail-page/group-applications/group-applications.component */ "./src/app/vos/pages/group-detail-page/group-applications/group-applications.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_managers_vo_settings_managers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component.ts");
/* harmony import */ var _components_application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/application-detail/application-detail.component */ "./src/app/vos/components/application-detail/application-detail.component.ts");
/* harmony import */ var _pages_group_detail_page_group_members_group_members_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/group-detail-page/group-members/group-members.component */ "./src/app/vos/pages/group-detail-page/group-members/group-members.component.ts");
/* harmony import */ var _pages_group_detail_page_group_resources_group_resources_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/group-detail-page/group-resources/group-resources.component */ "./src/app/vos/pages/group-detail-page/group-resources/group-resources.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_attributes_group_settings_attributes_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_overview_group_settings_overview_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_application_form_vo_settings_application_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component.ts");
/* harmony import */ var _components_application_form_preview_application_form_preview_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/application-form-preview/application-form-preview.component */ "./src/app/vos/components/application-form-preview/application-form-preview.component.ts");
/* harmony import */ var _pages_member_detail_page_member_settings_member_settings_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/member-detail-page/member-settings/member-settings.component */ "./src/app/vos/pages/member-detail-page/member-settings/member-settings.component.ts");
/* harmony import */ var _pages_member_detail_page_member_settings_member_settings_overview_member_settings_overview_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component */ "./src/app/vos/pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component.ts");
/* harmony import */ var _pages_member_detail_page_member_settings_member_settings_attributes_member_settings_attributes_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component */ "./src/app/vos/pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_overview_vo_resources_overview_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_preview_vo_resources_preview_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources-preview/vo-resources-preview.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-preview/vo-resources-preview.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_states_vo_resources_states_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources-states/vo-resources-states.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-states/vo-resources-states.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_tags_vo_resources_tags_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_expiration_group_settings_expiration_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_managers_group_settings_managers_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_notifications_vo_settings_notifications_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_application_form_group_settings_application_form_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_notifications_group_settings_notifications_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_extsources_vo_settings_extsources_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_relations_group_settings_relations_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-relations/group-settings-relations.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-relations/group-settings-relations.component.ts");




























// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length
















const routes = [
    {
        path: '',
        component: _pages_vo_select_page_vo_select_page_component__WEBPACK_IMPORTED_MODULE_1__["VoSelectPageComponent"]
    },
    {
        path: ':voId',
        component: _pages_vo_detail_page_vo_detail_page_component__WEBPACK_IMPORTED_MODULE_8__["VoDetailPageComponent"],
        children: [
            {
                path: '',
                component: _pages_vo_detail_page_vo_overview_vo_overview_component__WEBPACK_IMPORTED_MODULE_5__["VoOverviewComponent"],
                data: { animation: 'VoOverviewPage' }
            },
            {
                path: 'groups',
                component: _pages_vo_detail_page_vo_groups_vo_groups_component__WEBPACK_IMPORTED_MODULE_6__["VoGroupsComponent"],
                data: { animation: 'VoGroupsPage' }
            },
            {
                path: 'members',
                component: _pages_vo_detail_page_vo_members_vo_members_component__WEBPACK_IMPORTED_MODULE_7__["VoMembersComponent"],
                data: { animation: 'VoMembersPage' }
            },
            {
                path: 'resources',
                component: _pages_vo_detail_page_vo_resources_vo_resources_component__WEBPACK_IMPORTED_MODULE_13__["VoResourcesComponent"],
                children: [
                    {
                        path: '',
                        component: _pages_vo_detail_page_vo_resources_vo_resources_overview_vo_resources_overview_component__WEBPACK_IMPORTED_MODULE_32__["VoResourcesOverviewComponent"],
                        data: { animation: 'VoResourcesOverviewPage' }
                    },
                    {
                        path: 'preview',
                        component: _pages_vo_detail_page_vo_resources_vo_resources_preview_vo_resources_preview_component__WEBPACK_IMPORTED_MODULE_33__["VoResourcesPreviewComponent"],
                        data: { animation: 'VoResourcesPreviewPage' }
                    },
                    {
                        path: 'states',
                        component: _pages_vo_detail_page_vo_resources_vo_resources_states_vo_resources_states_component__WEBPACK_IMPORTED_MODULE_34__["VoResourcesStatesComponent"],
                        data: { animation: 'VoResourcesStatesPage' }
                    },
                    {
                        path: 'tags',
                        component: _pages_vo_detail_page_vo_resources_vo_resources_tags_vo_resources_tags_component__WEBPACK_IMPORTED_MODULE_35__["VoResourcesTagsComponent"],
                        data: { animation: 'VoResourcesTagsPage' }
                    }
                ]
            },
            {
                path: 'applications',
                component: _pages_vo_detail_page_vo_applications_vo_applications_component__WEBPACK_IMPORTED_MODULE_14__["VoApplicationsComponent"],
                data: { animation: 'VoApplicationsPage' }
            },
            {
                path: 'applications/:applicationId',
                component: _components_application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_21__["ApplicationDetailComponent"],
                data: { animation: 'VoApplicationDetailPage' }
            },
            {
                path: 'settings',
                component: _pages_vo_detail_page_vo_settings_vo_settings_component__WEBPACK_IMPORTED_MODULE_15__["VoSettingsComponent"],
                children: [
                    {
                        path: '',
                        component: _pages_vo_detail_page_vo_settings_vo_settings_overview_vo_settings_overview_component__WEBPACK_IMPORTED_MODULE_17__["VoSettingsOverviewComponent"],
                        data: { animation: 'VoSettingsOverviewPage' }
                    },
                    {
                        path: 'attributes',
                        component: _pages_vo_detail_page_vo_settings_vo_settings_attributes_vo_settings_attributes_component__WEBPACK_IMPORTED_MODULE_16__["VoSettingsAttributesComponent"],
                        data: { animation: 'VoSettingsAttributesPage' }
                    },
                    {
                        path: 'expiration',
                        component: _pages_vo_detail_page_vo_settings_vo_settings_expiration_vo_settings_expiration_component__WEBPACK_IMPORTED_MODULE_18__["VoSettingsExpirationComponent"],
                        data: { animation: 'VoSettingsExpirationPage' }
                    },
                    {
                        path: 'managers',
                        component: _pages_vo_detail_page_vo_settings_vo_settings_managers_vo_settings_managers_component__WEBPACK_IMPORTED_MODULE_20__["VoSettingsManagersComponent"],
                        data: { animation: 'VoSettingsManagersPage' }
                    },
                    {
                        path: 'applicationForm',
                        component: _pages_vo_detail_page_vo_settings_vo_settings_application_form_vo_settings_application_form_component__WEBPACK_IMPORTED_MODULE_27__["VoSettingsApplicationFormComponent"],
                        data: { animation: 'SettingsApplicationFormPage' }
                    },
                    {
                        path: 'applicationForm/preview',
                        component: _components_application_form_preview_application_form_preview_component__WEBPACK_IMPORTED_MODULE_28__["ApplicationFormPreviewComponent"],
                        data: { animation: 'SettingsApplicationFormPreviewPage' }
                    },
                    {
                        path: 'notifications',
                        component: _pages_vo_detail_page_vo_settings_vo_settings_notifications_vo_settings_notifications_component__WEBPACK_IMPORTED_MODULE_38__["VoSettingsNotificationsComponent"],
                        data: { animation: 'SettingsApplicationFormNotificationsPage' }
                    },
                    {
                        path: 'extsources',
                        component: _pages_vo_detail_page_vo_settings_vo_settings_extsources_vo_settings_extsources_component__WEBPACK_IMPORTED_MODULE_41__["VoSettingsExtsourcesComponent"],
                        data: { animation: 'VoSettingsExtSourcesPage' }
                    }
                ]
            }
        ]
    },
    {
        path: ':voId/members/:memberId',
        component: _pages_member_detail_page_member_detail_page_component__WEBPACK_IMPORTED_MODULE_4__["MemberDetailPageComponent"],
        children: [
            {
                path: '',
                component: _pages_member_detail_page_member_overview_member_overview_component__WEBPACK_IMPORTED_MODULE_9__["MemberOverviewComponent"],
                data: { animation: 'MemberOverviewPage' }
            },
            {
                path: 'groups',
                component: _pages_member_detail_page_member_groups_member_groups_component__WEBPACK_IMPORTED_MODULE_10__["MemberGroupsComponent"],
                data: { animation: 'MemberGroupsPage' }
            },
            {
                path: 'settings',
                component: _pages_member_detail_page_member_settings_member_settings_component__WEBPACK_IMPORTED_MODULE_29__["MemberSettingsComponent"],
                children: [
                    {
                        path: '',
                        component: _pages_member_detail_page_member_settings_member_settings_overview_member_settings_overview_component__WEBPACK_IMPORTED_MODULE_30__["MemberSettingsOverviewComponent"],
                        data: { animation: 'MemberSettingsOverviewPage' }
                    },
                    {
                        path: 'attributes',
                        component: _pages_member_detail_page_member_settings_member_settings_attributes_member_settings_attributes_component__WEBPACK_IMPORTED_MODULE_31__["MemberSettingsAttributesComponent"],
                        data: { animation: 'MemberSettingsAttributesPage' }
                    }
                ]
            }
        ]
    },
    {
        path: ':voId/groups/:groupId',
        component: _pages_group_detail_page_group_detail_page_component__WEBPACK_IMPORTED_MODULE_3__["GroupDetailPageComponent"],
        children: [
            {
                path: '',
                component: _pages_group_detail_page_group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_11__["GroupOverviewComponent"],
                data: { animation: 'GroupOverviewPage' }
            },
            {
                path: 'members',
                component: _pages_group_detail_page_group_members_group_members_component__WEBPACK_IMPORTED_MODULE_22__["GroupMembersComponent"],
                data: { animation: 'GroupMembersPage' }
            },
            {
                path: 'subgroups',
                component: _pages_group_detail_page_group_subgroups_group_subgroups_component__WEBPACK_IMPORTED_MODULE_12__["GroupSubgroupsComponent"],
                data: { animation: 'GroupSubgroupsPage' }
            },
            {
                path: 'applications',
                component: _pages_group_detail_page_group_applications_group_applications_component__WEBPACK_IMPORTED_MODULE_19__["GroupApplicationsComponent"],
                data: { animation: 'GroupApplicationsPage' }
            },
            {
                path: 'resources',
                component: _pages_group_detail_page_group_resources_group_resources_component__WEBPACK_IMPORTED_MODULE_23__["GroupResourcesComponent"],
                data: { animation: 'GroupResourcesPage' }
            },
            {
                path: 'settings',
                component: _pages_group_detail_page_group_settings_group_settings_component__WEBPACK_IMPORTED_MODULE_24__["GroupSettingsComponent"],
                children: [
                    {
                        path: '',
                        component: _pages_group_detail_page_group_settings_group_settings_overview_group_settings_overview_component__WEBPACK_IMPORTED_MODULE_26__["GroupSettingsOverviewComponent"],
                        data: { animation: 'GroupSettingsOverviewPage' }
                    },
                    {
                        path: 'attributes',
                        component: _pages_group_detail_page_group_settings_group_settings_attributes_group_settings_attributes_component__WEBPACK_IMPORTED_MODULE_25__["GroupSettingsAttributesComponent"],
                        data: { animation: 'GroupSettingsAttributesPage' }
                    },
                    {
                        path: 'expiration',
                        component: _pages_group_detail_page_group_settings_group_settings_expiration_group_settings_expiration_component__WEBPACK_IMPORTED_MODULE_36__["GroupSettingsExpirationComponent"],
                        data: { animation: 'GroupSettingsExpirationPage' }
                    },
                    {
                        path: 'managers',
                        component: _pages_group_detail_page_group_settings_group_settings_managers_group_settings_managers_component__WEBPACK_IMPORTED_MODULE_37__["GroupSettingsManagersComponent"],
                        data: { animation: 'GroupSettingsManagersPage' }
                    },
                    {
                        path: 'applicationForm',
                        component: _pages_group_detail_page_group_settings_group_settings_application_form_group_settings_application_form_component__WEBPACK_IMPORTED_MODULE_39__["GroupSettingsApplicationFormComponent"],
                        data: { animation: 'GroupSettingsApplicationFormPage' }
                    },
                    {
                        path: 'applicationForm/preview',
                        component: _components_application_form_preview_application_form_preview_component__WEBPACK_IMPORTED_MODULE_28__["ApplicationFormPreviewComponent"],
                    },
                    {
                        path: 'notifications',
                        component: _pages_group_detail_page_group_settings_group_settings_notifications_group_settings_notifications_component__WEBPACK_IMPORTED_MODULE_40__["GroupSettingsNotificationsComponent"],
                        data: { animation: 'GroupSettingsNotificationsPage' }
                    },
                    {
                        path: 'relations',
                        component: _pages_group_detail_page_group_settings_group_settings_relations_group_settings_relations_component__WEBPACK_IMPORTED_MODULE_42__["GroupSettingsRelationsComponent"],
                        data: { animation: 'GroupSettingsRelationsPage' }
                    }
                ]
            },
            {
                path: 'applications/:applicationId',
                component: _components_application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_21__["ApplicationDetailComponent"],
                data: { animation: 'GroupApplicationDetailPage' }
            }
        ]
    }
];
class VosRoutingModule {
}
VosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: VosRoutingModule });
VosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function VosRoutingModule_Factory(t) { return new (t || VosRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](VosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/vos/vos.module.ts":
/*!***********************************!*\
  !*** ./src/app/vos/vos.module.ts ***!
  \***********************************/
/*! exports provided: VosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VosModule", function() { return VosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pages_vo_select_page_vo_select_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/vo-select-page/vo-select-page.component */ "./src/app/vos/pages/vo-select-page/vo-select-page.component.ts");
/* harmony import */ var _vos_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vos-routing.module */ "./src/app/vos/vos-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_vo_detail_page_vo_detail_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-detail-page.component */ "./src/app/vos/pages/vo-detail-page/vo-detail-page.component.ts");
/* harmony import */ var _pages_group_detail_page_group_detail_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/group-detail-page/group-detail-page.component */ "./src/app/vos/pages/group-detail-page/group-detail-page.component.ts");
/* harmony import */ var _components_groups_tree_groups_tree_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/groups-tree/groups-tree.component */ "./src/app/vos/components/groups-tree/groups-tree.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_overview_vo_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-overview/vo-overview.component */ "./src/app/vos/pages/vo-detail-page/vo-overview/vo-overview.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_groups_vo_groups_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-groups/vo-groups.component */ "./src/app/vos/pages/vo-detail-page/vo-groups/vo-groups.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_members_vo_members_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-members/vo-members.component */ "./src/app/vos/pages/vo-detail-page/vo-members/vo-members.component.ts");
/* harmony import */ var _components_members_list_members_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/members-list/members-list.component */ "./src/app/vos/components/members-list/members-list.component.ts");
/* harmony import */ var _pages_member_detail_page_member_detail_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/member-detail-page/member-detail-page.component */ "./src/app/vos/pages/member-detail-page/member-detail-page.component.ts");
/* harmony import */ var _pages_member_detail_page_member_overview_member_overview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/member-detail-page/member-overview/member-overview.component */ "./src/app/vos/pages/member-detail-page/member-overview/member-overview.component.ts");
/* harmony import */ var _pages_member_detail_page_member_groups_member_groups_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/member-detail-page/member-groups/member-groups.component */ "./src/app/vos/pages/member-detail-page/member-groups/member-groups.component.ts");
/* harmony import */ var _pages_group_detail_page_group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/group-detail-page/group-overview/group-overview.component */ "./src/app/vos/pages/group-detail-page/group-overview/group-overview.component.ts");
/* harmony import */ var _pages_group_detail_page_group_subgroups_group_subgroups_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/group-detail-page/group-subgroups/group-subgroups.component */ "./src/app/vos/pages/group-detail-page/group-subgroups/group-subgroups.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_applications_vo_applications_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-applications/vo-applications.component */ "./src/app/vos/pages/vo-detail-page/vo-applications/vo-applications.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_attributes_vo_settings_attributes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_overview_vo_settings_overview_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_expiration_vo_settings_expiration_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component.ts");
/* harmony import */ var _components_applications_list_applications_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/applications-list/applications-list.component */ "./src/app/vos/components/applications-list/applications-list.component.ts");
/* harmony import */ var _pages_group_detail_page_group_applications_group_applications_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/group-detail-page/group-applications/group-applications.component */ "./src/app/vos/pages/group-detail-page/group-applications/group-applications.component.ts");
/* harmony import */ var _components_member_group_list_member_group_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/member-group-list/member-group-list.component */ "./src/app/vos/components/member-group-list/member-group-list.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_managers_vo_settings_managers_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component.ts");
/* harmony import */ var _components_application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/application-detail/application-detail.component */ "./src/app/vos/components/application-detail/application-detail.component.ts");
/* harmony import */ var _pages_group_detail_page_group_members_group_members_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/group-detail-page/group-members/group-members.component */ "./src/app/vos/pages/group-detail-page/group-members/group-members.component.ts");
/* harmony import */ var _pages_group_detail_page_group_resources_group_resources_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/group-detail-page/group-resources/group-resources.component */ "./src/app/vos/pages/group-detail-page/group-resources/group-resources.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_attributes_group_settings_attributes_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_overview_group_settings_overview_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_application_form_vo_settings_application_form_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component.ts");
/* harmony import */ var _components_application_form_list_application_form_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/application-form-list/application-form-list.component */ "./src/app/vos/components/application-form-list/application-form-list.component.ts");
/* harmony import */ var _components_application_form_preview_application_form_preview_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/application-form-preview/application-form-preview.component */ "./src/app/vos/components/application-form-preview/application-form-preview.component.ts");
/* harmony import */ var _pages_member_detail_page_member_settings_member_settings_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/member-detail-page/member-settings/member-settings.component */ "./src/app/vos/pages/member-detail-page/member-settings/member-settings.component.ts");
/* harmony import */ var _pages_member_detail_page_member_settings_member_settings_attributes_member_settings_attributes_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component */ "./src/app/vos/pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component.ts");
/* harmony import */ var _pages_member_detail_page_member_settings_member_settings_overview_member_settings_overview_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component */ "./src/app/vos/pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component.ts");
/* harmony import */ var _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../shared/components/attributes-list/attributes-list.component */ "./src/app/shared/components/attributes-list/attributes-list.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_preview_vo_resources_preview_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources-preview/vo-resources-preview.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-preview/vo-resources-preview.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_tags_vo_resources_tags_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_states_vo_resources_states_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources-states/vo-resources-states.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-states/vo-resources-states.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_overview_vo_resources_overview_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_states_state_tab_state_tab_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources-states/state-tab/state-tab.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-states/state-tab/state-tab.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_expiration_group_settings_expiration_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component.ts");
/* harmony import */ var _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/expiration-settings/expiration-settings.component */ "./src/app/vos/components/expiration-settings/expiration-settings.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_notifications_vo_settings_notifications_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_application_form_group_settings_application_form_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_managers_group_settings_managers_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_notifications_group_settings_notifications_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component.ts");
/* harmony import */ var _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/notification-list/notification-list.component */ "./src/app/vos/components/notification-list/notification-list.component.ts");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! mat-table-exporter */ "../../node_modules/mat-table-exporter/__ivy_ngcc__/fesm2015/mat-table-exporter.js");
/* harmony import */ var _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @perun-web-apps/ui/alerts */ "../../libs/ui/alerts/src/index.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_extsources_vo_settings_extsources_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_relations_group_settings_relations_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-relations/group-settings-relations.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-relations/group-settings-relations.component.ts");
/* harmony import */ var _shared_components_dialogs_add_ext_source_dialog_add_ext_source_dialog_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../shared/components/dialogs/add-ext-source-dialog/add-ext-source-dialog.component */ "./src/app/shared/components/dialogs/add-ext-source-dialog/add-ext-source-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_perun_nav_perun_nav_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../shared/perun-nav/perun-nav.component */ "./src/app/shared/perun-nav/perun-nav.component.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/autocomplete */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/cdk/text-field */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _shared_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../shared/side-menu/side-menu.component */ "./src/app/shared/side-menu/side-menu.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../shared/components/menu-buttons-field/menu-buttons-field.component */ "./src/app/shared/components/menu-buttons-field/menu-buttons-field.component.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/material/sort */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/material/tree */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! @angular/material/snack-bar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! @angular/material/progress-bar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _shared_components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ../shared/components/back-button/back-button.component */ "./src/app/shared/components/back-button/back-button.component.ts");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! @angular/material/slide-toggle */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! @angular/material/datepicker */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! @angular/material/radio */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! @angular/material/divider */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! @angular/material/stepper */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _shared_components_settings_toggle_item_settings_toggle_item_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ../shared/components/settings-toggle-item/settings-toggle-item.component */ "./src/app/shared/components/settings-toggle-item/settings-toggle-item.component.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _shared_components_notificator_notificator_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ../shared/components/notificator/notificator.component */ "./src/app/shared/components/notificator/notificator.component.ts");
/* harmony import */ var _shared_components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ../shared/components/users-list/users-list.component */ "./src/app/shared/components/users-list/users-list.component.ts");
/* harmony import */ var _shared_components_resources_list_resources_list_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ../shared/components/resources-list/resources-list.component */ "./src/app/shared/components/resources-list/resources-list.component.ts");
/* harmony import */ var _shared_components_groups_list_groups_list_component__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ../shared/components/groups-list/groups-list.component */ "./src/app/shared/components/groups-list/groups-list.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _shared_components_dialogs_remove_manager_dialog_remove_manager_dialog_component__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ../shared/components/dialogs/remove-manager-dialog/remove-manager-dialog.component */ "./src/app/shared/components/dialogs/remove-manager-dialog/remove-manager-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_add_manager_dialog_add_manager_dialog_component__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ../shared/components/dialogs/add-manager-dialog/add-manager-dialog.component */ "./src/app/shared/components/dialogs/add-manager-dialog/add-manager-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_add_group_manager_dialog_add_group_manager_dialog_component__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ../shared/components/dialogs/add-group-manager-dialog/add-group-manager-dialog.component */ "./src/app/shared/components/dialogs/add-group-manager-dialog/add-group-manager-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_remove_group_manager_dialog_remove_group_manager_dialog_component__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ../shared/components/dialogs/remove-group-manager-dialog/remove-group-manager-dialog.component */ "./src/app/shared/components/dialogs/remove-group-manager-dialog/remove-group-manager-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_add_member_dialog_add_member_dialog_component__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ../shared/components/dialogs/add-member-dialog/add-member-dialog.component */ "./src/app/shared/components/dialogs/add-member-dialog/add-member-dialog.component.ts");
/* harmony import */ var _shared_components_members_candidates_list_members_candidates_list_component__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ../shared/components/members-candidates-list/members-candidates-list.component */ "./src/app/shared/components/members-candidates-list/members-candidates-list.component.ts");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! @angular/material/chips */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ../shared/components/refresh-button/refresh-button.component */ "./src/app/shared/components/refresh-button/refresh-button.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! @angular/material/expansion */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _shared_components_group_menu_group_menu_component__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! ../shared/components/group-menu/group-menu.component */ "./src/app/shared/components/group-menu/group-menu.component.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! ../shared/components/immediate-filter/immediate-filter.component */ "./src/app/shared/components/immediate-filter/immediate-filter.component.ts");
/* harmony import */ var _shared_components_managers_page_managers_page_component__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! ../shared/components/managers-page/managers-page.component */ "./src/app/shared/components/managers-page/managers-page.component.ts");
/* harmony import */ var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! ../shared/components/animated-router-outlet/animated-router-outlet.component */ "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");
/* harmony import */ var _shared_components_resources_tags_list_resources_tags_list_component__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! ../shared/components/resources-tags-list/resources-tags-list.component */ "./src/app/shared/components/resources-tags-list/resources-tags-list.component.ts");
/* harmony import */ var _shared_components_debounce_filter_debounce_filter_component__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! ../shared/components/debounce-filter/debounce-filter.component */ "./src/app/shared/components/debounce-filter/debounce-filter.component.ts");
/* harmony import */ var _shared_components_user_detail_page_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! ../shared/components/user-detail-page/user-detail/user-detail.component */ "./src/app/shared/components/user-detail-page/user-detail/user-detail.component.ts");
/* harmony import */ var _shared_components_user_detail_page_user_detail_page_component__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! ../shared/components/user-detail-page/user-detail-page.component */ "./src/app/shared/components/user-detail-page/user-detail-page.component.ts");
/* harmony import */ var _shared_perun_footer_perun_footer_component__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! ../shared/perun-footer/perun-footer.component */ "./src/app/shared/perun-footer/perun-footer.component.ts");
/* harmony import */ var _shared_components_table_options_table_options_component__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! ../shared/components/table-options/table-options.component */ "./src/app/shared/components/table-options/table-options.component.ts");
/* harmony import */ var _shared_components_vo_select_table_vo_select_table_component__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! ../shared/components/vo-select-table/vo-select-table.component */ "./src/app/shared/components/vo-select-table/vo-select-table.component.ts");
/* harmony import */ var _shared_components_dialogs_create_resource_dialog_create_resource_dialog_component__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! ../shared/components/dialogs/create-resource-dialog/create-resource-dialog.component */ "./src/app/shared/components/dialogs/create-resource-dialog/create-resource-dialog.component.ts");
/* harmony import */ var _shared_components_ext_sources_list_ext_sources_list_component__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! ../shared/components/ext-sources-list/ext-sources-list.component */ "./src/app/shared/components/ext-sources-list/ext-sources-list.component.ts");
/* harmony import */ var _libs_ui_alerts_src_lib_alert_alert_component__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! ../../../../../libs/ui/alerts/src/lib/alert/alert.component */ "../../libs/ui/alerts/src/lib/alert/alert.component.ts");
/* harmony import */ var _shared_pipes_user_full_name_pipe__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! ../shared/pipes/user-full-name.pipe */ "./src/app/shared/pipes/user-full-name.pipe.ts");
/* harmony import */ var _shared_pipes_resource_tags_to_string_pipe__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! ../shared/pipes/resource-tags-to-string.pipe */ "./src/app/shared/pipes/resource-tags-to-string.pipe.ts");
/* harmony import */ var _shared_pipes_application_state_pipe__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! ../shared/pipes/application-state.pipe */ "./src/app/shared/pipes/application-state.pipe.ts");
/* harmony import */ var _shared_pipes_attribute_type_clean_pipe__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! ../shared/pipes/attribute-type-clean.pipe */ "./src/app/shared/pipes/attribute-type-clean.pipe.ts");
/* harmony import */ var _shared_pipes_name_space_to_def_pipe__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! ../shared/pipes/name-space-to-def.pipe */ "./src/app/shared/pipes/name-space-to-def.pipe.ts");
/* harmony import */ var _shared_pipes_member_status_icon_pipe__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! ../shared/pipes/member-status-icon.pipe */ "./src/app/shared/pipes/member-status-icon.pipe.ts");
/* harmony import */ var _shared_pipes_member_status_icon_color_pipe__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! ../shared/pipes/member-status-icon-color.pipe */ "./src/app/shared/pipes/member-status-icon-color.pipe.ts");
/* harmony import */ var _shared_pipes_member_email_pipe__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! ../shared/pipes/member-email.pipe */ "./src/app/shared/pipes/member-email.pipe.ts");
/* harmony import */ var _shared_pipes_member_logins_pipe__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! ../shared/pipes/member-logins.pipe */ "./src/app/shared/pipes/member-logins.pipe.ts");
/* harmony import */ var _shared_pipes_technical_owners_pipe__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! ../shared/pipes/technical-owners.pipe */ "./src/app/shared/pipes/technical-owners.pipe.ts");
/* harmony import */ var _shared_pipes_application_form_item_type_pipe__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! ../shared/pipes/application-form-item-type.pipe */ "./src/app/shared/pipes/application-form-item-type.pipe.ts");
/* harmony import */ var _shared_pipes_application_form_widget_description_pipe__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! ../shared/pipes/application-form-widget-description.pipe */ "./src/app/shared/pipes/application-form-widget-description.pipe.ts");
/* harmony import */ var _shared_pipes_any_to_string_pipe__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! ../shared/pipes/any-to-string.pipe */ "./src/app/shared/pipes/any-to-string.pipe.ts");
/* harmony import */ var _shared_pipes_member_candidate_email_pipe__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! ../shared/pipes/member-candidate-email.pipe */ "./src/app/shared/pipes/member-candidate-email.pipe.ts");
/* harmony import */ var _shared_pipes_vo_or_ext_source_pipe__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! ../shared/pipes/vo-or-ext-source.pipe */ "./src/app/shared/pipes/vo-or-ext-source.pipe.ts");
/* harmony import */ var _shared_pipes_displayed_role_pipe__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! ../shared/pipes/displayed-role.pipe */ "./src/app/shared/pipes/displayed-role.pipe.ts");
/* harmony import */ var _shared_pipes_ext_source_type_pipe__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! ../shared/pipes/ext-source-type.pipe */ "./src/app/shared/pipes/ext-source-type.pipe.ts");






























// tslint:disable-next-line:max-line-length





// tslint:disable-next-line:max-line-length












































































































class VosModule {
}
VosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VosModule });
VosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VosModule_Factory(t) { return new (t || VosModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _vos_routing_module__WEBPACK_IMPORTED_MODULE_3__["VosRoutingModule"],
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_52__["MatTableExporterModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_53__["UiAlertsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VosModule, { declarations: [_pages_vo_select_page_vo_select_page_component__WEBPACK_IMPORTED_MODULE_2__["VoSelectPageComponent"],
        _pages_vo_detail_page_vo_detail_page_component__WEBPACK_IMPORTED_MODULE_5__["VoDetailPageComponent"],
        _pages_group_detail_page_group_detail_page_component__WEBPACK_IMPORTED_MODULE_6__["GroupDetailPageComponent"],
        _components_groups_tree_groups_tree_component__WEBPACK_IMPORTED_MODULE_7__["GroupsTreeComponent"],
        _pages_vo_detail_page_vo_overview_vo_overview_component__WEBPACK_IMPORTED_MODULE_8__["VoOverviewComponent"],
        _pages_vo_detail_page_vo_groups_vo_groups_component__WEBPACK_IMPORTED_MODULE_9__["VoGroupsComponent"],
        _pages_vo_detail_page_vo_members_vo_members_component__WEBPACK_IMPORTED_MODULE_10__["VoMembersComponent"],
        _components_members_list_members_list_component__WEBPACK_IMPORTED_MODULE_11__["MembersListComponent"],
        _pages_member_detail_page_member_detail_page_component__WEBPACK_IMPORTED_MODULE_12__["MemberDetailPageComponent"],
        _pages_member_detail_page_member_overview_member_overview_component__WEBPACK_IMPORTED_MODULE_13__["MemberOverviewComponent"],
        _pages_member_detail_page_member_groups_member_groups_component__WEBPACK_IMPORTED_MODULE_14__["MemberGroupsComponent"],
        _pages_group_detail_page_group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_15__["GroupOverviewComponent"],
        _pages_group_detail_page_group_subgroups_group_subgroups_component__WEBPACK_IMPORTED_MODULE_16__["GroupSubgroupsComponent"],
        _pages_vo_detail_page_vo_resources_vo_resources_component__WEBPACK_IMPORTED_MODULE_17__["VoResourcesComponent"],
        _pages_vo_detail_page_vo_applications_vo_applications_component__WEBPACK_IMPORTED_MODULE_18__["VoApplicationsComponent"],
        _pages_vo_detail_page_vo_settings_vo_settings_component__WEBPACK_IMPORTED_MODULE_19__["VoSettingsComponent"],
        _pages_vo_detail_page_vo_settings_vo_settings_attributes_vo_settings_attributes_component__WEBPACK_IMPORTED_MODULE_20__["VoSettingsAttributesComponent"],
        _pages_vo_detail_page_vo_settings_vo_settings_overview_vo_settings_overview_component__WEBPACK_IMPORTED_MODULE_21__["VoSettingsOverviewComponent"],
        _pages_vo_detail_page_vo_settings_vo_settings_expiration_vo_settings_expiration_component__WEBPACK_IMPORTED_MODULE_22__["VoSettingsExpirationComponent"],
        _components_applications_list_applications_list_component__WEBPACK_IMPORTED_MODULE_23__["ApplicationsListComponent"],
        _pages_group_detail_page_group_applications_group_applications_component__WEBPACK_IMPORTED_MODULE_24__["GroupApplicationsComponent"],
        _components_member_group_list_member_group_list_component__WEBPACK_IMPORTED_MODULE_25__["MemberGroupListComponent"],
        _pages_vo_detail_page_vo_settings_vo_settings_managers_vo_settings_managers_component__WEBPACK_IMPORTED_MODULE_26__["VoSettingsManagersComponent"],
        _components_application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_27__["ApplicationDetailComponent"],
        _pages_group_detail_page_group_members_group_members_component__WEBPACK_IMPORTED_MODULE_28__["GroupMembersComponent"],
        _pages_group_detail_page_group_members_group_members_component__WEBPACK_IMPORTED_MODULE_28__["GroupMembersComponent"],
        _pages_group_detail_page_group_applications_group_applications_component__WEBPACK_IMPORTED_MODULE_24__["GroupApplicationsComponent"],
        _pages_group_detail_page_group_resources_group_resources_component__WEBPACK_IMPORTED_MODULE_29__["GroupResourcesComponent"],
        _pages_group_detail_page_group_settings_group_settings_component__WEBPACK_IMPORTED_MODULE_30__["GroupSettingsComponent"],
        _pages_group_detail_page_group_settings_group_settings_attributes_group_settings_attributes_component__WEBPACK_IMPORTED_MODULE_31__["GroupSettingsAttributesComponent"],
        _pages_group_detail_page_group_settings_group_settings_overview_group_settings_overview_component__WEBPACK_IMPORTED_MODULE_32__["GroupSettingsOverviewComponent"],
        _pages_vo_detail_page_vo_settings_vo_settings_application_form_vo_settings_application_form_component__WEBPACK_IMPORTED_MODULE_33__["VoSettingsApplicationFormComponent"],
        _components_application_form_list_application_form_list_component__WEBPACK_IMPORTED_MODULE_34__["ApplicationFormListComponent"],
        _components_application_form_preview_application_form_preview_component__WEBPACK_IMPORTED_MODULE_35__["ApplicationFormPreviewComponent"],
        _pages_group_detail_page_group_settings_group_settings_overview_group_settings_overview_component__WEBPACK_IMPORTED_MODULE_32__["GroupSettingsOverviewComponent"],
        _pages_member_detail_page_member_settings_member_settings_component__WEBPACK_IMPORTED_MODULE_36__["MemberSettingsComponent"],
        _pages_member_detail_page_member_settings_member_settings_attributes_member_settings_attributes_component__WEBPACK_IMPORTED_MODULE_37__["MemberSettingsAttributesComponent"],
        _pages_member_detail_page_member_settings_member_settings_overview_member_settings_overview_component__WEBPACK_IMPORTED_MODULE_38__["MemberSettingsOverviewComponent"],
        _pages_vo_detail_page_vo_resources_vo_resources_preview_vo_resources_preview_component__WEBPACK_IMPORTED_MODULE_40__["VoResourcesPreviewComponent"],
        _pages_vo_detail_page_vo_resources_vo_resources_tags_vo_resources_tags_component__WEBPACK_IMPORTED_MODULE_41__["VoResourcesTagsComponent"],
        _pages_vo_detail_page_vo_resources_vo_resources_states_vo_resources_states_component__WEBPACK_IMPORTED_MODULE_42__["VoResourcesStatesComponent"],
        _pages_vo_detail_page_vo_resources_vo_resources_overview_vo_resources_overview_component__WEBPACK_IMPORTED_MODULE_43__["VoResourcesOverviewComponent"],
        _pages_vo_detail_page_vo_resources_vo_resources_states_state_tab_state_tab_component__WEBPACK_IMPORTED_MODULE_44__["StateTabComponent"],
        _pages_group_detail_page_group_settings_group_settings_expiration_group_settings_expiration_component__WEBPACK_IMPORTED_MODULE_45__["GroupSettingsExpirationComponent"],
        _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_46__["ExpirationSettingsComponent"],
        _pages_vo_detail_page_vo_settings_vo_settings_notifications_vo_settings_notifications_component__WEBPACK_IMPORTED_MODULE_47__["VoSettingsNotificationsComponent"],
        _pages_group_detail_page_group_settings_group_settings_application_form_group_settings_application_form_component__WEBPACK_IMPORTED_MODULE_48__["GroupSettingsApplicationFormComponent"],
        _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_46__["ExpirationSettingsComponent"],
        _pages_group_detail_page_group_settings_group_settings_managers_group_settings_managers_component__WEBPACK_IMPORTED_MODULE_49__["GroupSettingsManagersComponent"],
        _pages_group_detail_page_group_settings_group_settings_notifications_group_settings_notifications_component__WEBPACK_IMPORTED_MODULE_50__["GroupSettingsNotificationsComponent"],
        _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_51__["NotificationListComponent"],
        _pages_vo_detail_page_vo_settings_vo_settings_extsources_vo_settings_extsources_component__WEBPACK_IMPORTED_MODULE_54__["VoSettingsExtsourcesComponent"],
        _pages_group_detail_page_group_settings_group_settings_relations_group_settings_relations_component__WEBPACK_IMPORTED_MODULE_55__["GroupSettingsRelationsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _vos_routing_module__WEBPACK_IMPORTED_MODULE_3__["VosRoutingModule"],
        mat_table_exporter__WEBPACK_IMPORTED_MODULE_52__["MatTableExporterModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_53__["UiAlertsModule"]], exports: [_shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_39__["AttributesListComponent"],
        _components_members_list_members_list_component__WEBPACK_IMPORTED_MODULE_11__["MembersListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _vos_routing_module__WEBPACK_IMPORTED_MODULE_3__["VosRoutingModule"],
                    mat_table_exporter__WEBPACK_IMPORTED_MODULE_52__["MatTableExporterModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_53__["UiAlertsModule"]
                ],
                exports: [
                    _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_39__["AttributesListComponent"],
                    _components_members_list_members_list_component__WEBPACK_IMPORTED_MODULE_11__["MembersListComponent"]
                ],
                declarations: [
                    _pages_vo_select_page_vo_select_page_component__WEBPACK_IMPORTED_MODULE_2__["VoSelectPageComponent"],
                    _pages_vo_detail_page_vo_detail_page_component__WEBPACK_IMPORTED_MODULE_5__["VoDetailPageComponent"],
                    _pages_group_detail_page_group_detail_page_component__WEBPACK_IMPORTED_MODULE_6__["GroupDetailPageComponent"],
                    _components_groups_tree_groups_tree_component__WEBPACK_IMPORTED_MODULE_7__["GroupsTreeComponent"],
                    _pages_vo_detail_page_vo_overview_vo_overview_component__WEBPACK_IMPORTED_MODULE_8__["VoOverviewComponent"],
                    _pages_vo_detail_page_vo_groups_vo_groups_component__WEBPACK_IMPORTED_MODULE_9__["VoGroupsComponent"],
                    _pages_vo_detail_page_vo_members_vo_members_component__WEBPACK_IMPORTED_MODULE_10__["VoMembersComponent"],
                    _components_members_list_members_list_component__WEBPACK_IMPORTED_MODULE_11__["MembersListComponent"],
                    _pages_member_detail_page_member_detail_page_component__WEBPACK_IMPORTED_MODULE_12__["MemberDetailPageComponent"],
                    _pages_member_detail_page_member_overview_member_overview_component__WEBPACK_IMPORTED_MODULE_13__["MemberOverviewComponent"],
                    _pages_member_detail_page_member_groups_member_groups_component__WEBPACK_IMPORTED_MODULE_14__["MemberGroupsComponent"],
                    _pages_group_detail_page_group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_15__["GroupOverviewComponent"],
                    _pages_group_detail_page_group_subgroups_group_subgroups_component__WEBPACK_IMPORTED_MODULE_16__["GroupSubgroupsComponent"],
                    _pages_vo_detail_page_vo_resources_vo_resources_component__WEBPACK_IMPORTED_MODULE_17__["VoResourcesComponent"],
                    _pages_vo_detail_page_vo_applications_vo_applications_component__WEBPACK_IMPORTED_MODULE_18__["VoApplicationsComponent"],
                    _pages_vo_detail_page_vo_settings_vo_settings_component__WEBPACK_IMPORTED_MODULE_19__["VoSettingsComponent"],
                    _pages_vo_detail_page_vo_settings_vo_settings_attributes_vo_settings_attributes_component__WEBPACK_IMPORTED_MODULE_20__["VoSettingsAttributesComponent"],
                    _pages_vo_detail_page_vo_settings_vo_settings_overview_vo_settings_overview_component__WEBPACK_IMPORTED_MODULE_21__["VoSettingsOverviewComponent"],
                    _pages_vo_detail_page_vo_settings_vo_settings_expiration_vo_settings_expiration_component__WEBPACK_IMPORTED_MODULE_22__["VoSettingsExpirationComponent"],
                    _components_applications_list_applications_list_component__WEBPACK_IMPORTED_MODULE_23__["ApplicationsListComponent"],
                    _pages_group_detail_page_group_applications_group_applications_component__WEBPACK_IMPORTED_MODULE_24__["GroupApplicationsComponent"],
                    _components_member_group_list_member_group_list_component__WEBPACK_IMPORTED_MODULE_25__["MemberGroupListComponent"],
                    _pages_vo_detail_page_vo_settings_vo_settings_managers_vo_settings_managers_component__WEBPACK_IMPORTED_MODULE_26__["VoSettingsManagersComponent"],
                    _components_application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_27__["ApplicationDetailComponent"],
                    _pages_group_detail_page_group_members_group_members_component__WEBPACK_IMPORTED_MODULE_28__["GroupMembersComponent"],
                    _pages_group_detail_page_group_members_group_members_component__WEBPACK_IMPORTED_MODULE_28__["GroupMembersComponent"],
                    _pages_group_detail_page_group_applications_group_applications_component__WEBPACK_IMPORTED_MODULE_24__["GroupApplicationsComponent"],
                    _pages_group_detail_page_group_resources_group_resources_component__WEBPACK_IMPORTED_MODULE_29__["GroupResourcesComponent"],
                    _pages_group_detail_page_group_settings_group_settings_component__WEBPACK_IMPORTED_MODULE_30__["GroupSettingsComponent"],
                    _pages_group_detail_page_group_settings_group_settings_attributes_group_settings_attributes_component__WEBPACK_IMPORTED_MODULE_31__["GroupSettingsAttributesComponent"],
                    _pages_group_detail_page_group_settings_group_settings_overview_group_settings_overview_component__WEBPACK_IMPORTED_MODULE_32__["GroupSettingsOverviewComponent"],
                    _pages_vo_detail_page_vo_settings_vo_settings_application_form_vo_settings_application_form_component__WEBPACK_IMPORTED_MODULE_33__["VoSettingsApplicationFormComponent"],
                    _components_application_form_list_application_form_list_component__WEBPACK_IMPORTED_MODULE_34__["ApplicationFormListComponent"],
                    _components_application_form_preview_application_form_preview_component__WEBPACK_IMPORTED_MODULE_35__["ApplicationFormPreviewComponent"],
                    _pages_group_detail_page_group_settings_group_settings_overview_group_settings_overview_component__WEBPACK_IMPORTED_MODULE_32__["GroupSettingsOverviewComponent"],
                    _pages_member_detail_page_member_settings_member_settings_component__WEBPACK_IMPORTED_MODULE_36__["MemberSettingsComponent"],
                    _pages_member_detail_page_member_settings_member_settings_attributes_member_settings_attributes_component__WEBPACK_IMPORTED_MODULE_37__["MemberSettingsAttributesComponent"],
                    _pages_member_detail_page_member_settings_member_settings_overview_member_settings_overview_component__WEBPACK_IMPORTED_MODULE_38__["MemberSettingsOverviewComponent"],
                    _pages_vo_detail_page_vo_resources_vo_resources_preview_vo_resources_preview_component__WEBPACK_IMPORTED_MODULE_40__["VoResourcesPreviewComponent"],
                    _pages_vo_detail_page_vo_resources_vo_resources_tags_vo_resources_tags_component__WEBPACK_IMPORTED_MODULE_41__["VoResourcesTagsComponent"],
                    _pages_vo_detail_page_vo_resources_vo_resources_states_vo_resources_states_component__WEBPACK_IMPORTED_MODULE_42__["VoResourcesStatesComponent"],
                    _pages_vo_detail_page_vo_resources_vo_resources_overview_vo_resources_overview_component__WEBPACK_IMPORTED_MODULE_43__["VoResourcesOverviewComponent"],
                    _pages_vo_detail_page_vo_resources_vo_resources_states_state_tab_state_tab_component__WEBPACK_IMPORTED_MODULE_44__["StateTabComponent"],
                    _pages_group_detail_page_group_settings_group_settings_expiration_group_settings_expiration_component__WEBPACK_IMPORTED_MODULE_45__["GroupSettingsExpirationComponent"],
                    _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_46__["ExpirationSettingsComponent"],
                    _pages_vo_detail_page_vo_settings_vo_settings_notifications_vo_settings_notifications_component__WEBPACK_IMPORTED_MODULE_47__["VoSettingsNotificationsComponent"],
                    _pages_group_detail_page_group_settings_group_settings_application_form_group_settings_application_form_component__WEBPACK_IMPORTED_MODULE_48__["GroupSettingsApplicationFormComponent"],
                    _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_46__["ExpirationSettingsComponent"],
                    _pages_group_detail_page_group_settings_group_settings_managers_group_settings_managers_component__WEBPACK_IMPORTED_MODULE_49__["GroupSettingsManagersComponent"],
                    _pages_group_detail_page_group_settings_group_settings_notifications_group_settings_notifications_component__WEBPACK_IMPORTED_MODULE_50__["GroupSettingsNotificationsComponent"],
                    _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_51__["NotificationListComponent"],
                    _pages_vo_detail_page_vo_settings_vo_settings_extsources_vo_settings_extsources_component__WEBPACK_IMPORTED_MODULE_54__["VoSettingsExtsourcesComponent"],
                    _pages_group_detail_page_group_settings_group_settings_relations_group_settings_relations_component__WEBPACK_IMPORTED_MODULE_55__["GroupSettingsRelationsComponent"]
                ],
                entryComponents: [
                    _shared_components_dialogs_add_ext_source_dialog_add_ext_source_dialog_component__WEBPACK_IMPORTED_MODULE_56__["AddExtSourceDialogComponent"]
                ],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_components_groups_tree_groups_tree_component__WEBPACK_IMPORTED_MODULE_7__["GroupsTreeComponent"], [_pages_vo_select_page_vo_select_page_component__WEBPACK_IMPORTED_MODULE_2__["VoSelectPageComponent"],
    _pages_vo_detail_page_vo_detail_page_component__WEBPACK_IMPORTED_MODULE_5__["VoDetailPageComponent"],
    _pages_group_detail_page_group_detail_page_component__WEBPACK_IMPORTED_MODULE_6__["GroupDetailPageComponent"],
    _components_groups_tree_groups_tree_component__WEBPACK_IMPORTED_MODULE_7__["GroupsTreeComponent"],
    _pages_vo_detail_page_vo_overview_vo_overview_component__WEBPACK_IMPORTED_MODULE_8__["VoOverviewComponent"],
    _pages_vo_detail_page_vo_groups_vo_groups_component__WEBPACK_IMPORTED_MODULE_9__["VoGroupsComponent"],
    _pages_vo_detail_page_vo_members_vo_members_component__WEBPACK_IMPORTED_MODULE_10__["VoMembersComponent"],
    _components_members_list_members_list_component__WEBPACK_IMPORTED_MODULE_11__["MembersListComponent"],
    _pages_member_detail_page_member_detail_page_component__WEBPACK_IMPORTED_MODULE_12__["MemberDetailPageComponent"],
    _pages_member_detail_page_member_overview_member_overview_component__WEBPACK_IMPORTED_MODULE_13__["MemberOverviewComponent"],
    _pages_member_detail_page_member_groups_member_groups_component__WEBPACK_IMPORTED_MODULE_14__["MemberGroupsComponent"],
    _pages_group_detail_page_group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_15__["GroupOverviewComponent"],
    _pages_group_detail_page_group_subgroups_group_subgroups_component__WEBPACK_IMPORTED_MODULE_16__["GroupSubgroupsComponent"],
    _pages_vo_detail_page_vo_resources_vo_resources_component__WEBPACK_IMPORTED_MODULE_17__["VoResourcesComponent"],
    _pages_vo_detail_page_vo_applications_vo_applications_component__WEBPACK_IMPORTED_MODULE_18__["VoApplicationsComponent"],
    _pages_vo_detail_page_vo_settings_vo_settings_component__WEBPACK_IMPORTED_MODULE_19__["VoSettingsComponent"],
    _pages_vo_detail_page_vo_settings_vo_settings_attributes_vo_settings_attributes_component__WEBPACK_IMPORTED_MODULE_20__["VoSettingsAttributesComponent"],
    _pages_vo_detail_page_vo_settings_vo_settings_overview_vo_settings_overview_component__WEBPACK_IMPORTED_MODULE_21__["VoSettingsOverviewComponent"],
    _pages_vo_detail_page_vo_settings_vo_settings_expiration_vo_settings_expiration_component__WEBPACK_IMPORTED_MODULE_22__["VoSettingsExpirationComponent"],
    _components_applications_list_applications_list_component__WEBPACK_IMPORTED_MODULE_23__["ApplicationsListComponent"],
    _pages_group_detail_page_group_applications_group_applications_component__WEBPACK_IMPORTED_MODULE_24__["GroupApplicationsComponent"],
    _components_member_group_list_member_group_list_component__WEBPACK_IMPORTED_MODULE_25__["MemberGroupListComponent"],
    _pages_vo_detail_page_vo_settings_vo_settings_managers_vo_settings_managers_component__WEBPACK_IMPORTED_MODULE_26__["VoSettingsManagersComponent"],
    _components_application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_27__["ApplicationDetailComponent"],
    _pages_group_detail_page_group_members_group_members_component__WEBPACK_IMPORTED_MODULE_28__["GroupMembersComponent"],
    _pages_group_detail_page_group_resources_group_resources_component__WEBPACK_IMPORTED_MODULE_29__["GroupResourcesComponent"],
    _pages_group_detail_page_group_settings_group_settings_component__WEBPACK_IMPORTED_MODULE_30__["GroupSettingsComponent"],
    _pages_group_detail_page_group_settings_group_settings_attributes_group_settings_attributes_component__WEBPACK_IMPORTED_MODULE_31__["GroupSettingsAttributesComponent"],
    _pages_group_detail_page_group_settings_group_settings_overview_group_settings_overview_component__WEBPACK_IMPORTED_MODULE_32__["GroupSettingsOverviewComponent"],
    _pages_vo_detail_page_vo_settings_vo_settings_application_form_vo_settings_application_form_component__WEBPACK_IMPORTED_MODULE_33__["VoSettingsApplicationFormComponent"],
    _components_application_form_list_application_form_list_component__WEBPACK_IMPORTED_MODULE_34__["ApplicationFormListComponent"],
    _components_application_form_preview_application_form_preview_component__WEBPACK_IMPORTED_MODULE_35__["ApplicationFormPreviewComponent"],
    _pages_member_detail_page_member_settings_member_settings_component__WEBPACK_IMPORTED_MODULE_36__["MemberSettingsComponent"],
    _pages_member_detail_page_member_settings_member_settings_attributes_member_settings_attributes_component__WEBPACK_IMPORTED_MODULE_37__["MemberSettingsAttributesComponent"],
    _pages_member_detail_page_member_settings_member_settings_overview_member_settings_overview_component__WEBPACK_IMPORTED_MODULE_38__["MemberSettingsOverviewComponent"],
    _pages_vo_detail_page_vo_resources_vo_resources_preview_vo_resources_preview_component__WEBPACK_IMPORTED_MODULE_40__["VoResourcesPreviewComponent"],
    _pages_vo_detail_page_vo_resources_vo_resources_tags_vo_resources_tags_component__WEBPACK_IMPORTED_MODULE_41__["VoResourcesTagsComponent"],
    _pages_vo_detail_page_vo_resources_vo_resources_states_vo_resources_states_component__WEBPACK_IMPORTED_MODULE_42__["VoResourcesStatesComponent"],
    _pages_vo_detail_page_vo_resources_vo_resources_overview_vo_resources_overview_component__WEBPACK_IMPORTED_MODULE_43__["VoResourcesOverviewComponent"],
    _pages_vo_detail_page_vo_resources_vo_resources_states_state_tab_state_tab_component__WEBPACK_IMPORTED_MODULE_44__["StateTabComponent"],
    _pages_group_detail_page_group_settings_group_settings_expiration_group_settings_expiration_component__WEBPACK_IMPORTED_MODULE_45__["GroupSettingsExpirationComponent"],
    _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_46__["ExpirationSettingsComponent"],
    _pages_vo_detail_page_vo_settings_vo_settings_notifications_vo_settings_notifications_component__WEBPACK_IMPORTED_MODULE_47__["VoSettingsNotificationsComponent"],
    _pages_group_detail_page_group_settings_group_settings_application_form_group_settings_application_form_component__WEBPACK_IMPORTED_MODULE_48__["GroupSettingsApplicationFormComponent"],
    _pages_group_detail_page_group_settings_group_settings_managers_group_settings_managers_component__WEBPACK_IMPORTED_MODULE_49__["GroupSettingsManagersComponent"],
    _pages_group_detail_page_group_settings_group_settings_notifications_group_settings_notifications_component__WEBPACK_IMPORTED_MODULE_50__["GroupSettingsNotificationsComponent"],
    _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_51__["NotificationListComponent"],
    _pages_vo_detail_page_vo_settings_vo_settings_extsources_vo_settings_extsources_component__WEBPACK_IMPORTED_MODULE_54__["VoSettingsExtsourcesComponent"],
    _pages_group_detail_page_group_settings_group_settings_relations_group_settings_relations_component__WEBPACK_IMPORTED_MODULE_55__["GroupSettingsRelationsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_57__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_57__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_57__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_57__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_57__["ɵangular_packages_router_router_l"], mat_table_exporter__WEBPACK_IMPORTED_MODULE_52__["MatTableExporterDirective"], _shared_perun_nav_perun_nav_component__WEBPACK_IMPORTED_MODULE_58__["PerunNavComponent"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_59__["MatAutocomplete"], _angular_material_core__WEBPACK_IMPORTED_MODULE_60__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_60__["MatOptgroup"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_59__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_59__["MatAutocompleteOrigin"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_61__["Dir"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_62__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_62__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_63__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_64__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_64__["MatTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_65__["NgForm"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_66__["MatIcon"], _shared_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_67__["SideMenuComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_68__["MatDrawer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_68__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_68__["MatDrawerContent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_68__["MatSidenav"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_68__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_68__["MatSidenavContent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_69__["TranslateDirective"], _shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_70__["MenuButtonsFieldComponent"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_71__["MatSort"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_71__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_72__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_72__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_72__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_72__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_72__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_72__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_72__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_72__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_72__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_72__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_72__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_72__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_72__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_72__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_72__["MatTextColumn"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_73__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_73__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_73__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_73__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_73__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_73__["MatTabContent"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_74__["MatNestedTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_74__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_74__["MatTreeNodePadding"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_74__["MatTreeNodeToggle"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_74__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_74__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_74__["MatTreeNodeOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_75__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_75__["MatAnchor"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_76__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_76__["MatCheckboxRequiredValidator"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_77__["MatDialogContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_77__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_77__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_77__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_77__["MatDialogActions"], _angular_material_select__WEBPACK_IMPORTED_MODULE_78__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_78__["MatSelectTrigger"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_79__["MatSnackBarContainer"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_80__["MatProgressSpinner"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_80__["MatSpinner"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_81__["MatProgressBar"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_82__["MatTooltip"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_82__["TooltipComponent"], _shared_components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_83__["BackButtonComponent"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_84__["MatSlideToggleRequiredValidator"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_84__["MatSlideToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_85__["MatCalendar"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_85__["MatCalendarBody"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_85__["MatDatepicker"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_85__["MatDatepickerContent"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_85__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_85__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_85__["MatDatepickerToggleIcon"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_85__["MatMonthView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_85__["MatYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_85__["MatMultiYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_85__["MatCalendarHeader"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_86__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_86__["MatRadioButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_87__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_88__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_88__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_88__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_88__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_88__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_88__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_88__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_88__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_88__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_88__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_88__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_88__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_88__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_88__["MatCardAvatar"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_89__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_89__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_89__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_89__["MatStepLabel"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_89__["MatStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_89__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_89__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_89__["MatStepHeader"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_89__["MatStepperIcon"], _shared_components_settings_toggle_item_settings_toggle_item_component__WEBPACK_IMPORTED_MODULE_90__["SettingsToggleItemComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_60__["MatRipple"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_91__["MatPaginator"], _shared_components_notificator_notificator_component__WEBPACK_IMPORTED_MODULE_92__["NotificatorComponent"], _shared_components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_93__["UsersListComponent"], _shared_components_resources_list_resources_list_component__WEBPACK_IMPORTED_MODULE_94__["ResourcesListComponent"], _shared_components_groups_list_groups_list_component__WEBPACK_IMPORTED_MODULE_95__["GroupsListComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_96__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_96__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_96__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_96__["CdkDragHandle"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_96__["CdkDragPreview"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_96__["CdkDragPlaceholder"], _shared_components_dialogs_remove_manager_dialog_remove_manager_dialog_component__WEBPACK_IMPORTED_MODULE_97__["RemoveManagerDialogComponent"], _shared_components_dialogs_add_manager_dialog_add_manager_dialog_component__WEBPACK_IMPORTED_MODULE_98__["AddManagerDialogComponent"], _shared_components_dialogs_add_group_manager_dialog_add_group_manager_dialog_component__WEBPACK_IMPORTED_MODULE_99__["AddGroupManagerDialogComponent"], _shared_components_dialogs_remove_group_manager_dialog_remove_group_manager_dialog_component__WEBPACK_IMPORTED_MODULE_100__["RemoveGroupManagerDialogComponent"], _shared_components_dialogs_add_member_dialog_add_member_dialog_component__WEBPACK_IMPORTED_MODULE_101__["AddMemberDialogComponent"], _shared_components_members_candidates_list_members_candidates_list_component__WEBPACK_IMPORTED_MODULE_102__["MembersCandidatesListComponent"], _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_39__["AttributesListComponent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_103__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_103__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_103__["MatChipInput"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_103__["MatChipRemove"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_103__["MatChipAvatar"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_103__["MatChipTrailingIcon"], _shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_104__["RefreshButtonComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_105__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_105__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_105__["MatExpansionPanelActionRow"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_105__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_105__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_105__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_105__["MatExpansionPanelContent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_106__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_106__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_106__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_106__["MatMenuContent"], _shared_components_group_menu_group_menu_component__WEBPACK_IMPORTED_MODULE_107__["GroupMenuComponent"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_108__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_108__["CdkScrollable"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_108__["CdkVirtualForOf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_108__["CdkVirtualScrollViewport"], _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_109__["ImmediateFilterComponent"], _shared_components_managers_page_managers_page_component__WEBPACK_IMPORTED_MODULE_110__["ManagersPageComponent"], _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_111__["AnimatedRouterOutletComponent"], _shared_components_resources_tags_list_resources_tags_list_component__WEBPACK_IMPORTED_MODULE_112__["ResourcesTagsListComponent"], _shared_components_debounce_filter_debounce_filter_component__WEBPACK_IMPORTED_MODULE_113__["DebounceFilterComponent"], _shared_components_user_detail_page_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_114__["UserDetailComponent"], _shared_components_user_detail_page_user_detail_page_component__WEBPACK_IMPORTED_MODULE_115__["UserDetailPageComponent"], _shared_perun_footer_perun_footer_component__WEBPACK_IMPORTED_MODULE_116__["PerunFooterComponent"], _shared_components_table_options_table_options_component__WEBPACK_IMPORTED_MODULE_117__["TableOptionsComponent"], _shared_components_vo_select_table_vo_select_table_component__WEBPACK_IMPORTED_MODULE_118__["VoSelectTableComponent"], _shared_components_dialogs_create_resource_dialog_create_resource_dialog_component__WEBPACK_IMPORTED_MODULE_119__["CreateResourceDialogComponent"], _shared_components_ext_sources_list_ext_sources_list_component__WEBPACK_IMPORTED_MODULE_120__["ExtSourcesListComponent"], _libs_ui_alerts_src_lib_alert_alert_component__WEBPACK_IMPORTED_MODULE_121__["AlertComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_69__["TranslatePipe"], _shared_pipes_user_full_name_pipe__WEBPACK_IMPORTED_MODULE_122__["UserFullNamePipe"], _shared_pipes_resource_tags_to_string_pipe__WEBPACK_IMPORTED_MODULE_123__["ResourceTagsToStringPipe"], _shared_pipes_application_state_pipe__WEBPACK_IMPORTED_MODULE_124__["ApplicationStatePipe"], _shared_pipes_attribute_type_clean_pipe__WEBPACK_IMPORTED_MODULE_125__["AttributeTypeCleanPipe"], _shared_pipes_name_space_to_def_pipe__WEBPACK_IMPORTED_MODULE_126__["NameSpaceToDefPipe"], _shared_pipes_member_status_icon_pipe__WEBPACK_IMPORTED_MODULE_127__["MemberStatusIconPipe"], _shared_pipes_member_status_icon_color_pipe__WEBPACK_IMPORTED_MODULE_128__["MemberStatusIconColorPipe"], _shared_pipes_member_email_pipe__WEBPACK_IMPORTED_MODULE_129__["MemberEmailPipe"], _shared_pipes_member_logins_pipe__WEBPACK_IMPORTED_MODULE_130__["MemberLoginsPipe"], _shared_pipes_technical_owners_pipe__WEBPACK_IMPORTED_MODULE_131__["TechnicalOwnersPipe"], _shared_pipes_application_form_item_type_pipe__WEBPACK_IMPORTED_MODULE_132__["ApplicationFormItemTypePipe"], _shared_pipes_application_form_widget_description_pipe__WEBPACK_IMPORTED_MODULE_133__["ApplicationFormWidgetDescriptionPipe"], _shared_pipes_any_to_string_pipe__WEBPACK_IMPORTED_MODULE_134__["AnyToStringPipe"], _shared_pipes_member_candidate_email_pipe__WEBPACK_IMPORTED_MODULE_135__["MemberCandidateEmailPipe"], _shared_pipes_vo_or_ext_source_pipe__WEBPACK_IMPORTED_MODULE_136__["UserVoPipe"], _shared_pipes_displayed_role_pipe__WEBPACK_IMPORTED_MODULE_137__["DisplayedRolePipe"], _shared_pipes_ext_source_type_pipe__WEBPACK_IMPORTED_MODULE_138__["ExtSourceTypePipe"]]);


/***/ })

}]);
//# sourceMappingURL=vos-vos-module-es2015.js.map