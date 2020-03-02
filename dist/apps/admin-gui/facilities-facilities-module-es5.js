function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["facilities-facilities-module"], {
  /***/
  "./src/app/facilities/components/facility-select-table/facility-select-table.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/facilities/components/facility-select-table/facility-select-table.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: FacilitySelectTableComponent */

  /***/
  function srcAppFacilitiesComponentsFacilitySelectTableFacilitySelectTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitySelectTableComponent", function () {
      return FacilitySelectTableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/paginator */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/sort */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _shared_components_table_options_table_options_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/components/table-options/table-options.component */
    "./src/app/shared/components/table-options/table-options.component.ts");
    /* harmony import */


    var mat_table_exporter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! mat-table-exporter */
    "../../node_modules/mat-table-exporter/__ivy_ngcc__/fesm2015/mat-table-exporter.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _libs_ui_alerts_src_lib_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../../../../libs/ui/alerts/src/lib/alert/alert.component */
    "../../libs/ui/alerts/src/lib/alert/alert.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_pipes_technical_owners_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../shared/pipes/technical-owners.pipe */
    "./src/app/shared/pipes/technical-owners.pipe.ts");

    function FacilitySelectTableComponent_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FACILITY_MANAGEMENT.TABLE.ID"));
      }
    }

    function FacilitySelectTableComponent_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var facility_r1413 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](facility_r1413.id);
      }
    }

    function FacilitySelectTableComponent_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 21);
      }
    }

    function FacilitySelectTableComponent_td_10_mat_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " visibility ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "VO_MANAGEMENT.TABLE.RECENT"));
      }
    }

    function FacilitySelectTableComponent_td_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FacilitySelectTableComponent_td_10_mat_icon_1_Template, 3, 3, "mat-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var facility_r1414 = ctx.$implicit;

        var ctx_r1402 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1402.recentIds.indexOf(facility_r1414.id) > 0 - 1);
      }
    }

    function FacilitySelectTableComponent_th_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FACILITY_MANAGEMENT.TABLE.NAME"));
      }
    }

    function FacilitySelectTableComponent_td_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var facility_r1416 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](facility_r1416.name);
      }
    }

    function FacilitySelectTableComponent_th_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FACILITY_MANAGEMENT.TABLE.DESCRIPTION"));
      }
    }

    function FacilitySelectTableComponent_td_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var facility_r1417 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](facility_r1417.description);
      }
    }

    function FacilitySelectTableComponent_th_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "FACILITY_MANAGEMENT.TABLE.TECHNICAL_OWNERS"));
      }
    }

    function FacilitySelectTableComponent_td_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "technicalOwners");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var facility_r1418 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, facility_r1418.facilityOwners));
      }
    }

    function FacilitySelectTableComponent_tr_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/facilities", a1];
    };

    function FacilitySelectTableComponent_tr_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 26);
      }

      if (rf & 2) {
        var facility_r1419 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, facility_r1419.id));
      }
    }

    function FacilitySelectTableComponent_mat_spinner_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 27);
      }
    }

    function FacilitySelectTableComponent_app_alert_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-alert", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "SHARED.COMPONENTS.NO_FILTER_RESULTS_ALERT"), "\n");
      }
    }

    var _c1 = function _c1() {
      return [5, 10, 25];
    };

    var FacilitySelectTableComponent =
    /*#__PURE__*/
    function () {
      function FacilitySelectTableComponent() {
        _classCallCheck(this, FacilitySelectTableComponent);

        this.exporting = false;
        this.displayedColumns = ['id', 'recent', 'name', 'description', 'technicalOwners'];
      }

      _createClass(FacilitySelectTableComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.facilities);
          this.setDataSource();
          this.dataSource.filter = this.filterValue;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "setDataSource",
        value: function setDataSource() {
          if (!!this.dataSource) {
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;

            this.dataSource.filterPredicate = function (data, filter) {
              var lowerCaseFilter = filter.trim().toLowerCase();

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
            };
          }
        }
      }, {
        key: "matSort",
        set: function set(ms) {
          this.sort = ms;
          this.setDataSource();
        }
      }]);

      return FacilitySelectTableComponent;
    }();

    FacilitySelectTableComponent.ɵfac = function FacilitySelectTableComponent_Factory(t) {
      return new (t || FacilitySelectTableComponent)();
    };

    FacilitySelectTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilitySelectTableComponent,
      selectors: [["app-facility-select-table"]],
      viewQuery: function FacilitySelectTableComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matSort = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      inputs: {
        facilities: "facilities",
        recentIds: "recentIds",
        filterValue: "filterValue"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()],
      decls: 25,
      vars: 13,
      consts: [[1, "card", "mt-3", 3, "hidden"], [1, "card-body"], [3, "exporter", "start", "end"], ["mat-table", "", "matTableExporter", "", "matSort", "", "matSortDirection", "asc", "matSortDisableClear", "", 1, "w-100", 3, "dataSource"], ["exporter", "matTableExporter"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "static-column-size", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "recent"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "description"], ["matColumnDef", "technicalOwners"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "dark-hover-list-item", 3, "routerLink", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageSize", "pageSizeOptions"], ["class", "ml-auto mr-auto", 4, "ngIf"], ["color", "warn", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 1, "static-column-size"], ["mat-header-cell", ""], ["mat-cell", ""], ["class", "align-bottom", 3, "matTooltip", 4, "ngIf"], [1, "align-bottom", 3, "matTooltip"], ["mat-header-row", ""], ["mat-row", "", 1, "dark-hover-list-item", 3, "routerLink"], [1, "ml-auto", "mr-auto"], ["color", "warn"]],
      template: function FacilitySelectTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-table-options", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("start", function FacilitySelectTableComponent_Template_app_table_options_start_2_listener($event) {
            return ctx.exporting = true;
          })("end", function FacilitySelectTableComponent_Template_app_table_options_end_2_listener($event) {
            return ctx.exporting = false;
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-paginator", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FacilitySelectTableComponent_mat_spinner_23_Template, 1, 0, "mat-spinner", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FacilitySelectTableComponent_app_alert_24_Template, 3, 3, "app-alert", 18);
        }

        if (rf & 2) {
          var _r1398 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide-table", ctx.exporting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.dataSource.filteredData.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exporter", _r1398);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.facilities.length)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exporting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.filteredData.length === 0);
        }
      },
      directives: [_shared_components_table_options_table_options_component__WEBPACK_IMPORTED_MODULE_5__["TableOptionsComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], mat_table_exporter__WEBPACK_IMPORTED_MODULE_6__["MatTableExporterDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"], _libs_ui_alerts_src_lib_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], _shared_pipes_technical_owners_pipe__WEBPACK_IMPORTED_MODULE_14__["TechnicalOwnersPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvY29tcG9uZW50cy9mYWNpbGl0eS1zZWxlY3QtdGFibGUvZmFjaWxpdHktc2VsZWN0LXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitySelectTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-facility-select-table',
          templateUrl: './facility-select-table.component.html',
          styleUrls: ['./facility-select-table.component.scss']
        }]
      }], function () {
        return [];
      }, {
        facilities: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        recentIds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        filterValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        matSort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
            "static": true
          }]
        }],
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/facilities/facilities-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/facilities/facilities-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: FacilitiesRoutingModule */

  /***/
  function srcAppFacilitiesFacilitiesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitiesRoutingModule", function () {
      return FacilitiesRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_facility_select_page_facility_select_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/facility-select-page/facility-select-page.component */
    "./src/app/facilities/pages/facility-select-page/facility-select-page.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_detail_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-detail-page.component */
    "./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_overview_facility_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-overview/facility-overview.component */
    "./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_resources_facility_resources_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-resources/facility-resources.component */
    "./src/app/facilities/pages/facility-detail-page/facility-resources/facility-resources.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_allowed_groups_facility_allowed_groups_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-allowed-groups/facility-allowed-groups.component */
    "./src/app/facilities/pages/facility-detail-page/facility-allowed-groups/facility-allowed-groups.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_detail_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-detail-page.component */
    "./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-overview/resource-overview.component */
    "./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_overview_facility_settings_overview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_attributes_facility_settings_attributes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_settings_resource_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-settings/resource-settings.component */
    "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_settings_resource_settings_overview_resource_settings_overview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component */
    "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_settings_resource_settings_attributes_resource_settings_attributes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component */
    "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_groups_resource_groups_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-groups/resource-groups.component */
    "./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.ts");

    var routes = [{
      path: '',
      component: _pages_facility_select_page_facility_select_page_component__WEBPACK_IMPORTED_MODULE_2__["FacilitySelectPageComponent"]
    }, {
      path: ':facilityId',
      component: _pages_facility_detail_page_facility_detail_page_component__WEBPACK_IMPORTED_MODULE_3__["FacilityDetailPageComponent"],
      children: [{
        path: '',
        component: _pages_facility_detail_page_facility_overview_facility_overview_component__WEBPACK_IMPORTED_MODULE_4__["FacilityOverviewComponent"],
        data: {
          animation: 'FacilityOverviewPage'
        }
      }, {
        path: 'resources',
        component: _pages_facility_detail_page_facility_resources_facility_resources_component__WEBPACK_IMPORTED_MODULE_5__["FacilityResourcesComponent"],
        data: {
          animation: 'FacilityResourcesPage'
        }
      }, {
        path: 'allowed-groups',
        component: _pages_facility_detail_page_facility_allowed_groups_facility_allowed_groups_component__WEBPACK_IMPORTED_MODULE_6__["FacilityAllowedGroupsComponent"],
        data: {
          animation: 'FacilityAllowedGroupsPage'
        }
      }, {
        path: 'settings',
        component: _pages_facility_detail_page_facility_settings_facility_settings_component__WEBPACK_IMPORTED_MODULE_9__["FacilitySettingsComponent"],
        children: [{
          path: '',
          component: _pages_facility_detail_page_facility_settings_facility_settings_overview_facility_settings_overview_component__WEBPACK_IMPORTED_MODULE_10__["FacilitySettingsOverviewComponent"],
          data: {
            animation: 'FacilitySettingsOverviewPage'
          }
        }, {
          path: 'attributes',
          component: _pages_facility_detail_page_facility_settings_facility_settings_attributes_facility_settings_attributes_component__WEBPACK_IMPORTED_MODULE_11__["FacilitySettingsAttributesComponent"],
          data: {
            animation: 'FacilitySettingsAttributesPage'
          }
        }]
      }]
    }, {
      path: ':facilityId/resources/:resourceId',
      component: _pages_resource_detail_page_resource_detail_page_component__WEBPACK_IMPORTED_MODULE_7__["ResourceDetailPageComponent"],
      children: [{
        path: '',
        component: _pages_resource_detail_page_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_8__["ResourceOverviewComponent"],
        data: {
          animation: 'ResourceOverviewPage'
        }
      }, {
        path: 'groups',
        component: _pages_resource_detail_page_resource_groups_resource_groups_component__WEBPACK_IMPORTED_MODULE_15__["ResourceGroupsComponent"],
        data: {
          animation: 'ResourceGroupsComponent'
        }
      }, {
        path: 'settings',
        component: _pages_resource_detail_page_resource_settings_resource_settings_component__WEBPACK_IMPORTED_MODULE_12__["ResourceSettingsComponent"],
        children: [{
          path: '',
          component: _pages_resource_detail_page_resource_settings_resource_settings_overview_resource_settings_overview_component__WEBPACK_IMPORTED_MODULE_13__["ResourceSettingsOverviewComponent"],
          data: {
            animation: 'ResourceSettingsOverviewPage'
          }
        }, {
          path: 'attributes',
          component: _pages_resource_detail_page_resource_settings_resource_settings_attributes_resource_settings_attributes_component__WEBPACK_IMPORTED_MODULE_14__["ResourceSettingsAttributesComponent"],
          data: {
            animation: 'ResourceSettingsAttributesPage'
          }
        }]
      }]
    }];

    var FacilitiesRoutingModule = function FacilitiesRoutingModule() {
      _classCallCheck(this, FacilitiesRoutingModule);
    };

    FacilitiesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FacilitiesRoutingModule
    });
    FacilitiesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FacilitiesRoutingModule_Factory(t) {
        return new (t || FacilitiesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FacilitiesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitiesRoutingModule, [{
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
  "./src/app/facilities/facilities.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/facilities/facilities.module.ts ***!
    \*************************************************/

  /*! exports provided: FacilitiesModule */

  /***/
  function srcAppFacilitiesFacilitiesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitiesModule", function () {
      return FacilitiesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _facilities_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./facilities-routing.module */
    "./src/app/facilities/facilities-routing.module.ts");
    /* harmony import */


    var _pages_facility_select_page_facility_select_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/facility-select-page/facility-select-page.component */
    "./src/app/facilities/pages/facility-select-page/facility-select-page.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _components_facility_select_table_facility_select_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/facility-select-table/facility-select-table.component */
    "./src/app/facilities/components/facility-select-table/facility-select-table.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_detail_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-detail-page.component */
    "./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_overview_facility_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-overview/facility-overview.component */
    "./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_resources_facility_resources_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-resources/facility-resources.component */
    "./src/app/facilities/pages/facility-detail-page/facility-resources/facility-resources.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_allowed_groups_facility_allowed_groups_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-allowed-groups/facility-allowed-groups.component */
    "./src/app/facilities/pages/facility-detail-page/facility-allowed-groups/facility-allowed-groups.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_detail_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-detail-page.component */
    "./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-overview/resource-overview.component */
    "./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_overview_facility_settings_overview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_attributes_facility_settings_attributes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_settings_resource_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-settings/resource-settings.component */
    "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_settings_resource_settings_overview_resource_settings_overview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component */
    "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_settings_resource_settings_attributes_resource_settings_attributes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component */
    "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.ts");
    /* harmony import */


    var mat_table_exporter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! mat-table-exporter */
    "../../node_modules/mat-table-exporter/__ivy_ngcc__/fesm2015/mat-table-exporter.js");
    /* harmony import */


    var _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @perun-web-apps/ui/alerts */
    "../../libs/ui/alerts/src/index.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_groups_resource_groups_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-groups/resource-groups.component */
    "./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.ts");

    var FacilitiesModule = function FacilitiesModule() {
      _classCallCheck(this, FacilitiesModule);
    };

    FacilitiesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FacilitiesModule
    });
    FacilitiesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FacilitiesModule_Factory(t) {
        return new (t || FacilitiesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _facilities_routing_module__WEBPACK_IMPORTED_MODULE_2__["FacilitiesRoutingModule"], mat_table_exporter__WEBPACK_IMPORTED_MODULE_18__["MatTableExporterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_19__["UiAlertsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FacilitiesModule, {
        declarations: [_pages_facility_select_page_facility_select_page_component__WEBPACK_IMPORTED_MODULE_3__["FacilitySelectPageComponent"], _components_facility_select_table_facility_select_table_component__WEBPACK_IMPORTED_MODULE_5__["FacilitySelectTableComponent"], _pages_facility_detail_page_facility_detail_page_component__WEBPACK_IMPORTED_MODULE_6__["FacilityDetailPageComponent"], _pages_facility_detail_page_facility_overview_facility_overview_component__WEBPACK_IMPORTED_MODULE_7__["FacilityOverviewComponent"], _pages_facility_detail_page_facility_resources_facility_resources_component__WEBPACK_IMPORTED_MODULE_8__["FacilityResourcesComponent"], _pages_facility_detail_page_facility_allowed_groups_facility_allowed_groups_component__WEBPACK_IMPORTED_MODULE_9__["FacilityAllowedGroupsComponent"], _pages_resource_detail_page_resource_detail_page_component__WEBPACK_IMPORTED_MODULE_10__["ResourceDetailPageComponent"], _pages_resource_detail_page_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_11__["ResourceOverviewComponent"], _pages_facility_detail_page_facility_settings_facility_settings_component__WEBPACK_IMPORTED_MODULE_12__["FacilitySettingsComponent"], _pages_facility_detail_page_facility_settings_facility_settings_overview_facility_settings_overview_component__WEBPACK_IMPORTED_MODULE_13__["FacilitySettingsOverviewComponent"], _pages_facility_detail_page_facility_settings_facility_settings_attributes_facility_settings_attributes_component__WEBPACK_IMPORTED_MODULE_14__["FacilitySettingsAttributesComponent"], _pages_resource_detail_page_resource_settings_resource_settings_component__WEBPACK_IMPORTED_MODULE_15__["ResourceSettingsComponent"], _pages_resource_detail_page_resource_settings_resource_settings_overview_resource_settings_overview_component__WEBPACK_IMPORTED_MODULE_16__["ResourceSettingsOverviewComponent"], _pages_resource_detail_page_resource_settings_resource_settings_attributes_resource_settings_attributes_component__WEBPACK_IMPORTED_MODULE_17__["ResourceSettingsAttributesComponent"], _pages_resource_detail_page_resource_groups_resource_groups_component__WEBPACK_IMPORTED_MODULE_20__["ResourceGroupsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _facilities_routing_module__WEBPACK_IMPORTED_MODULE_2__["FacilitiesRoutingModule"], mat_table_exporter__WEBPACK_IMPORTED_MODULE_18__["MatTableExporterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_19__["UiAlertsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitiesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_pages_facility_select_page_facility_select_page_component__WEBPACK_IMPORTED_MODULE_3__["FacilitySelectPageComponent"], _components_facility_select_table_facility_select_table_component__WEBPACK_IMPORTED_MODULE_5__["FacilitySelectTableComponent"], _pages_facility_detail_page_facility_detail_page_component__WEBPACK_IMPORTED_MODULE_6__["FacilityDetailPageComponent"], _pages_facility_detail_page_facility_overview_facility_overview_component__WEBPACK_IMPORTED_MODULE_7__["FacilityOverviewComponent"], _pages_facility_detail_page_facility_resources_facility_resources_component__WEBPACK_IMPORTED_MODULE_8__["FacilityResourcesComponent"], _pages_facility_detail_page_facility_allowed_groups_facility_allowed_groups_component__WEBPACK_IMPORTED_MODULE_9__["FacilityAllowedGroupsComponent"], _pages_resource_detail_page_resource_detail_page_component__WEBPACK_IMPORTED_MODULE_10__["ResourceDetailPageComponent"], _pages_resource_detail_page_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_11__["ResourceOverviewComponent"], _pages_facility_detail_page_facility_settings_facility_settings_component__WEBPACK_IMPORTED_MODULE_12__["FacilitySettingsComponent"], _pages_facility_detail_page_facility_settings_facility_settings_overview_facility_settings_overview_component__WEBPACK_IMPORTED_MODULE_13__["FacilitySettingsOverviewComponent"], _pages_facility_detail_page_facility_settings_facility_settings_attributes_facility_settings_attributes_component__WEBPACK_IMPORTED_MODULE_14__["FacilitySettingsAttributesComponent"], _pages_resource_detail_page_resource_settings_resource_settings_component__WEBPACK_IMPORTED_MODULE_15__["ResourceSettingsComponent"], _pages_resource_detail_page_resource_settings_resource_settings_overview_resource_settings_overview_component__WEBPACK_IMPORTED_MODULE_16__["ResourceSettingsOverviewComponent"], _pages_resource_detail_page_resource_settings_resource_settings_attributes_resource_settings_attributes_component__WEBPACK_IMPORTED_MODULE_17__["ResourceSettingsAttributesComponent"], _pages_resource_detail_page_resource_groups_resource_groups_component__WEBPACK_IMPORTED_MODULE_20__["ResourceGroupsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _facilities_routing_module__WEBPACK_IMPORTED_MODULE_2__["FacilitiesRoutingModule"], mat_table_exporter__WEBPACK_IMPORTED_MODULE_18__["MatTableExporterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_19__["UiAlertsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: FacilityDetailPageComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilityDetailPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityDetailPageComponent", function () {
      return FacilityDetailPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/animations/Animations */
    "./src/app/shared/animations/Animations.ts");
    /* harmony import */


    var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/services/common/side-menu.service */
    "./src/app/core/services/common/side-menu.service.ts");
    /* harmony import */


    var _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/side-menu/side-menu-item.service */
    "./src/app/shared/side-menu/side-menu-item.service.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/components/back-button/back-button.component */
    "./src/app/shared/components/back-button/back-button.component.ts");
    /* harmony import */


    var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/components/animated-router-outlet/animated-router-outlet.component */
    "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = function _c0(a1) {
      return ["/facilities", a1];
    };

    function FacilityDetailPageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r1387 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "FACILITY_DETAIL.TITLE"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r1387.facility.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1387.facility.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA0#", ctx_r1387.facility.id, " ");
      }
    }

    var FacilityDetailPageComponent =
    /*#__PURE__*/
    function () {
      function FacilityDetailPageComponent(facilityManager, route, sideMenuService, sideMenuItemService) {
        _classCallCheck(this, FacilityDetailPageComponent);

        this.facilityManager = facilityManager;
        this.route = route;
        this.sideMenuService = sideMenuService;
        this.sideMenuItemService = sideMenuItemService;
      }

      _createClass(FacilityDetailPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.params.subscribe(function (params) {
            var facilityId = params['facilityId'];

            _this.facilityManager.getFacilityById(facilityId).subscribe(function (facility) {
              _this.facility = facility;

              var facilityItem = _this.sideMenuItemService.parseFacility(facility);

              _this.sideMenuService.setFacilityMenuItems([facilityItem]);

              Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["addRecentlyVisited"])('facilities', _this.facility);
            });
          });
        }
      }]);

      return FacilityDetailPageComponent;
    }();

    FacilityDetailPageComponent.ɵfac = function FacilityDetailPageComponent_Factory(t) {
      return new (t || FacilityDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuItemService"]));
    };

    FacilityDetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilityDetailPageComponent,
      selectors: [["app-facility-detail-page"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid pl-xl-5 pr-xl-5 facility-theme", 4, "ngIf"], [1, "container-fluid", "pl-xl-5", "pr-xl-5", "facility-theme"], [1, "page-title"], [1, "facility-link", 3, "routerLink"], [1, "text-muted"]],
      template: function FacilityDetailPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FacilityDetailPageComponent_div_0_Template, 10, 8, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.facility !== undefined);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_8__["BackButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_9__["AnimatedRouterOutletComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"],
      data: {
        animation: [_shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilityDetailPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-facility-detail-page',
          templateUrl: './facility-detail-page.component.html',
          styleUrls: ['./facility-detail-page.component.scss'],
          animations: [_shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]]
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["FacilitiesManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"]
        }, {
          type: _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuItemService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: FacilityOverviewComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilityOverviewFacilityOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityOverviewComponent", function () {
      return FacilityOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/components/menu-buttons-field/menu-buttons-field.component */
    "./src/app/shared/components/menu-buttons-field/menu-buttons-field.component.ts");

    var FacilityOverviewComponent =
    /*#__PURE__*/
    function () {
      function FacilityOverviewComponent(facilityManager, route) {
        _classCallCheck(this, FacilityOverviewComponent);

        this.facilityManager = facilityManager;
        this.route = route;
        this.navItems = [];
      }

      _createClass(FacilityOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.params.subscribe(function (params) {
            var facilityId = params['facilityId'];

            _this2.facilityManager.getFacilityById(facilityId).subscribe(function (facility) {
              _this2.facility = facility;

              _this2.initItems();
            });
          });
        }
      }, {
        key: "initItems",
        value: function initItems() {
          this.navItems = [{
            cssIcon: 'perun-manage-facility',
            url: "/facilities/".concat(this.facility.id, "/resources"),
            label: 'MENU_ITEMS.FACILITY.RESOURCES',
            style: 'facility-btn'
          }, {
            cssIcon: 'perun-group',
            url: "/facilities/".concat(this.facility.id, "/allowed-groups"),
            label: 'MENU_ITEMS.FACILITY.ALLOWED_GROUPS',
            style: 'facility-btn'
          }, {
            cssIcon: 'perun-settings2',
            url: "/facilities/".concat(this.facility.id, "/settings"),
            label: 'MENU_ITEMS.FACILITY.SETTINGS',
            style: 'facility-btn'
          }];
        }
      }]);

      return FacilityOverviewComponent;
    }();

    FacilityOverviewComponent.ɵfac = function FacilityOverviewComponent_Factory(t) {
      return new (t || FacilityOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    FacilityOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilityOverviewComponent,
      selectors: [["app-facility-overview"]],
      hostVars: 2,
      hostBindings: function FacilityOverviewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 2,
      vars: 2,
      consts: [[3, "items", "size"]],
      template: function FacilityOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-buttons-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.navItems)("size", "small");
        }
      },
      directives: [_shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__["MenuButtonsFieldComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktb3ZlcnZpZXcvZmFjaWxpdHktb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilityOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-facility-overview',
          templateUrl: './facility-overview.component.html',
          styleUrls: ['./facility-overview.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, {
        "true": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.router-component']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.ts":
  /*!************************************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.ts ***!
    \************************************************************************************************************************************************/

  /*! exports provided: FacilitySettingsAttributesComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilitySettingsFacilitySettingsAttributesFacilitySettingsAttributesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitySettingsAttributesComponent", function () {
      return FacilitySettingsAttributesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../core/services/common/notificator.service */
    "./src/app/core/services/common/notificator.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../shared/components/attributes-list/attributes-list.component */
    "./src/app/shared/components/attributes-list/attributes-list.component.ts");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component */
    "./src/app/shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component */
    "./src/app/shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../../shared/components/refresh-button/refresh-button.component */
    "./src/app/shared/components/refresh-button/refresh-button.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../../shared/components/immediate-filter/immediate-filter.component */
    "./src/app/shared/components/immediate-filter/immediate-filter.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    var _c0 = ["list"];

    function FacilitySettingsAttributesComponent_mat_spinner_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
      }
    }

    function FacilitySettingsAttributesComponent_app_attributes_list_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-attributes-list", 9, 10);
      }

      if (rf & 2) {
        var ctx_r1390 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filterValue", ctx_r1390.filterValue)("attributes", ctx_r1390.attributes)("selection", ctx_r1390.selection);
      }
    }

    var FacilitySettingsAttributesComponent =
    /*#__PURE__*/
    function () {
      function FacilitySettingsAttributesComponent(attributesManager, route, dialog, notificator, translate) {
        var _this3 = this;

        _classCallCheck(this, FacilitySettingsAttributesComponent);

        this.attributesManager = attributesManager;
        this.route = route;
        this.dialog = dialog;
        this.notificator = notificator;
        this.translate = translate;
        this.attributes = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        this.filterValue = '';
        this.translate.get('FACILITY_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE').subscribe(function (value) {
          return _this3.saveSuccessMessage = value;
        });
        this.translate.get('FACILITY_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE').subscribe(function (value) {
          return _this3.deleteSuccessMessage = value;
        });
      }

      _createClass(FacilitySettingsAttributesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.route.parent.parent.params.subscribe(function (params) {
            _this4.facilityId = params['facilityId'];

            _this4.refreshTable();
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          var _this5 = this;

          var dialogRef = this.dialog.open(_shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteAttributeDialogComponent"], {
            width: '450px',
            data: {
              entityId: this.facilityId,
              entity: 'facility',
              attributes: this.selection.selected
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this5.refreshTable();
            }
          });
        }
      }, {
        key: "onSave",
        value: function onSave() {
          var _this6 = this;

          // have to use this to update attribute with map in it, before saving it
          this.list.updateMapAttributes();
          this.attributesManager.setFacilityAttributes({
            facility: this.facilityId,
            attributes: this.selection.selected
          }).subscribe(function () {
            _this6.attributesManager.getFacilityAttributes(_this6.facilityId).subscribe(function (attributes) {
              _this6.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["filterCoreAttributes"])(attributes);

              _this6.notificator.showSuccess(_this6.saveSuccessMessage);

              _this6.selection.clear();
            });
          });
        }
      }, {
        key: "onCreate",
        value: function onCreate() {
          var _this7 = this;

          var dialogRef = this.dialog.open(_shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CreateAttributeDialogComponent"], {
            width: '1050px',
            data: {
              entityId: this.facilityId,
              entity: 'facility',
              notEmptyAttributes: this.attributes,
              style: 'facility-theme'
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'saved') {
              _this7.refreshTable();
            }
          });
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this8 = this;

          this.loading = true;
          this.attributesManager.getFacilityAttributes(this.facilityId).subscribe(function (attributes) {
            _this8.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["filterCoreAttributes"])(attributes);

            _this8.selection.clear();

            _this8.loading = false;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filterValue = filterValue;
        }
      }]);

      return FacilitySettingsAttributesComponent;
    }();

    FacilitySettingsAttributesComponent.ɵfac = function FacilitySettingsAttributesComponent_Factory(t) {
      return new (t || FacilitySettingsAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]));
    };

    FacilitySettingsAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilitySettingsAttributesComponent,
      selectors: [["app-facility-settings-attributes"]],
      viewQuery: function FacilitySettingsAttributesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function FacilitySettingsAttributesComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 17,
      vars: 17,
      consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "filterValue", "attributes", "selection", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [3, "filterValue", "attributes", "selection"], ["list", ""]],
      template: function FacilitySettingsAttributesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-refresh-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function FacilitySettingsAttributesComponent_Template_app_refresh_button_refresh_4_listener($event) {
            return ctx.refreshTable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilitySettingsAttributesComponent_Template_button_click_5_listener($event) {
            return ctx.onCreate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilitySettingsAttributesComponent_Template_button_click_8_listener($event) {
            return ctx.onSave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilitySettingsAttributesComponent_Template_button_click_11_listener($event) {
            return ctx.onDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-immediate-filter", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function FacilitySettingsAttributesComponent_Template_app_immediate_filter_filter_14_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FacilitySettingsAttributesComponent_mat_spinner_15_Template, 1, 0, "mat-spinner", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FacilitySettingsAttributesComponent_app_attributes_list_16_Template, 2, 3, "app-attributes-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_11__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_13__["ImmediateFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_5__["AttributesListComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktc2V0dGluZ3MvZmFjaWxpdHktc2V0dGluZ3MtYXR0cmlidXRlcy9mYWNpbGl0eS1zZXR0aW5ncy1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitySettingsAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-facility-settings-attributes',
          templateUrl: './facility-settings-attributes.component.html',
          styleUrls: ['./facility-settings-attributes.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }];
      }, {
        "true": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.router-component']
        }],
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['list']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.ts":
  /*!********************************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.ts ***!
    \********************************************************************************************************************************************/

  /*! exports provided: FacilitySettingsOverviewComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilitySettingsFacilitySettingsOverviewFacilitySettingsOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitySettingsOverviewComponent", function () {
      return FacilitySettingsOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../shared/components/menu-buttons-field/menu-buttons-field.component */
    "./src/app/shared/components/menu-buttons-field/menu-buttons-field.component.ts");

    var FacilitySettingsOverviewComponent =
    /*#__PURE__*/
    function () {
      function FacilitySettingsOverviewComponent(route, facilityManager) {
        _classCallCheck(this, FacilitySettingsOverviewComponent);

        this.route = route;
        this.facilityManager = facilityManager;
        this.items = [];
      }

      _createClass(FacilitySettingsOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.route.parent.parent.params.subscribe(function (parentParams) {
            var facilityId = parentParams['facilityId'];

            _this9.facilityManager.getFacilityById(facilityId).subscribe(function (facility) {
              _this9.facility = facility;

              _this9.initItems();
            });
          });
        }
      }, {
        key: "initItems",
        value: function initItems() {
          this.items = [{
            cssIcon: 'perun-attributes',
            url: "/facilities/".concat(this.facility.id, "/settings/attributes"),
            label: 'MENU_ITEMS.FACILITY.ATTRIBUTES',
            style: 'facility-btn'
          }];
        }
      }]);

      return FacilitySettingsOverviewComponent;
    }();

    FacilitySettingsOverviewComponent.ɵfac = function FacilitySettingsOverviewComponent_Factory(t) {
      return new (t || FacilitySettingsOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]));
    };

    FacilitySettingsOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilitySettingsOverviewComponent,
      selectors: [["app-facility-settings-overview"]],
      hostVars: 2,
      hostBindings: function FacilitySettingsOverviewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 2,
      vars: 2,
      consts: [[3, "items", "size"]],
      template: function FacilitySettingsOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-buttons-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items)("size", "small");
        }
      },
      directives: [_shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__["MenuButtonsFieldComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktc2V0dGluZ3MvZmFjaWxpdHktc2V0dGluZ3Mtb3ZlcnZpZXcvZmFjaWxpdHktc2V0dGluZ3Mtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitySettingsOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-facility-settings-overview',
          templateUrl: './facility-settings-overview.component.html',
          styleUrls: ['./facility-settings-overview.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]
        }];
      }, {
        "true": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.router-component']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: FacilitySettingsComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilitySettingsFacilitySettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitySettingsComponent", function () {
      return FacilitySettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../shared/animations/Animations */
    "./src/app/shared/animations/Animations.ts");
    /* harmony import */


    var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/components/animated-router-outlet/animated-router-outlet.component */
    "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");

    var FacilitySettingsComponent =
    /*#__PURE__*/
    function () {
      function FacilitySettingsComponent() {
        _classCallCheck(this, FacilitySettingsComponent);
      }

      _createClass(FacilitySettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FacilitySettingsComponent;
    }();

    FacilitySettingsComponent.ɵfac = function FacilitySettingsComponent_Factory(t) {
      return new (t || FacilitySettingsComponent)();
    };

    FacilitySettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilitySettingsComponent,
      selectors: [["app-facility-settings"]],
      hostVars: 2,
      hostBindings: function FacilitySettingsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 1,
      vars: 0,
      template: function FacilitySettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-animated-router-outlet");
        }
      },
      directives: [_shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_2__["AnimatedRouterOutletComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktc2V0dGluZ3MvZmFjaWxpdHktc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"],
      data: {
        animation: [_shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitySettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-facility-settings',
          templateUrl: './facility-settings.component.html',
          styleUrls: ['./facility-settings.component.scss'],
          animations: [_shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]]
        }]
      }], function () {
        return [];
      }, {
        "true": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.router-component']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/facility-select-page/facility-select-page.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-select-page/facility-select-page.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: FacilitySelectPageComponent */

  /***/
  function srcAppFacilitiesPagesFacilitySelectPageFacilitySelectPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitySelectPageComponent", function () {
      return FacilitySelectPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../core/services/common/side-menu.service */
    "./src/app/core/services/common/side-menu.service.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _shared_components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/components/back-button/back-button.component */
    "./src/app/shared/components/back-button/back-button.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/components/refresh-button/refresh-button.component */
    "./src/app/shared/components/refresh-button/refresh-button.component.ts");
    /* harmony import */


    var _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/components/immediate-filter/immediate-filter.component */
    "./src/app/shared/components/immediate-filter/immediate-filter.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _components_facility_select_table_facility_select_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/facility-select-table/facility-select-table.component */
    "./src/app/facilities/components/facility-select-table/facility-select-table.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function FacilitySelectPageComponent_app_refresh_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r1384 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-refresh-button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function FacilitySelectPageComponent_app_refresh_button_5_Template_app_refresh_button_refresh_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1384);

          var ctx_r1383 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1383.refreshTable();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FacilitySelectPageComponent_app_immediate_filter_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r1386 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-immediate-filter", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function FacilitySelectPageComponent_app_immediate_filter_6_Template_app_immediate_filter_filter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1386);

          var ctx_r1385 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1385.applyFilter($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "FACILITY_MANAGEMENT.FILTER_PLACEHOLDER");
      }
    }

    function FacilitySelectPageComponent_mat_spinner_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
      }
    }

    function FacilitySelectPageComponent_app_facility_select_table_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-facility-select-table", 9);
      }

      if (rf & 2) {
        var ctx_r1382 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filterValue", ctx_r1382.filterValue)("facilities", ctx_r1382.facilities)("recentIds", ctx_r1382.recentIds);
      }
    }

    var FacilitySelectPageComponent =
    /*#__PURE__*/
    function () {
      function FacilitySelectPageComponent(facilityManager, sideMenuService) {
        _classCallCheck(this, FacilitySelectPageComponent);

        this.facilityManager = facilityManager;
        this.sideMenuService = sideMenuService;
        this.facilities = [];
        this.recentIds = [];
        this.filterValue = '';
      }

      _createClass(FacilitySelectPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.sideMenuService.setFacilityMenuItems([]);
          this.refreshTable();
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this10 = this;

          this.loading = true;
          this.facilityManager.getRichFacilities().subscribe(function (facilities) {
            _this10.facilities = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_3__["getRecentlyVisited"])('facilities', facilities);
            _this10.recentIds = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_3__["getRecentlyVisitedIds"])('facilities');
            _this10.loading = false;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filterValue = filterValue;
        }
      }]);

      return FacilitySelectPageComponent;
    }();

    FacilitySelectPageComponent.ɵfac = function FacilitySelectPageComponent_Factory(t) {
      return new (t || FacilitySelectPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]));
    };

    FacilitySelectPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilitySelectPageComponent,
      selectors: [["app-facility-select-page"]],
      decls: 9,
      vars: 7,
      consts: [[1, "container-fluid", "pl-xl-5", "pr-xl-5", "facility-theme"], [1, "page-title"], [3, "refresh", 4, "ngIf"], [3, "placeholder", "filter", 4, "ngIf"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "filterValue", "facilities", "recentIds", 4, "ngIf"], [3, "refresh"], [3, "placeholder", "filter"], [1, "ml-auto", "mr-auto"], [3, "filterValue", "facilities", "recentIds"]],
      template: function FacilitySelectPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-back-button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FacilitySelectPageComponent_app_refresh_button_5_Template, 1, 0, "app-refresh-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FacilitySelectPageComponent_app_immediate_filter_6_Template, 1, 1, "app-immediate-filter", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FacilitySelectPageComponent_mat_spinner_7_Template, 1, 0, "mat-spinner", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FacilitySelectPageComponent_app_facility_select_table_8_Template, 1, 3, "app-facility-select-table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_shared_components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_4__["BackButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_6__["RefreshButtonComponent"], _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_7__["ImmediateFilterComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _components_facility_select_table_facility_select_table_component__WEBPACK_IMPORTED_MODULE_9__["FacilitySelectTableComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktc2VsZWN0LXBhZ2UvZmFjaWxpdHktc2VsZWN0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitySelectPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-facility-select-page',
          templateUrl: './facility-select-page.component.html',
          styleUrls: ['./facility-select-page.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]
        }, {
          type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ResourceDetailPageComponent */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceDetailPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceDetailPageComponent", function () {
      return ResourceDetailPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/animations/Animations */
    "./src/app/shared/animations/Animations.ts");
    /* harmony import */


    var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/services/common/side-menu.service */
    "./src/app/core/services/common/side-menu.service.ts");
    /* harmony import */


    var _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/side-menu/side-menu-item.service */
    "./src/app/shared/side-menu/side-menu-item.service.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/components/back-button/back-button.component */
    "./src/app/shared/components/back-button/back-button.component.ts");
    /* harmony import */


    var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/components/animated-router-outlet/animated-router-outlet.component */
    "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = function _c0(a1, a3) {
      return ["/facilities", a1, "resources", a3];
    };

    function ResourceDetailPageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var ctx_r1388 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "RESOURCE_DETAIL.TITLE"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx_r1388.resource.facilityId, ctx_r1388.resource.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1388.resource.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA0#", ctx_r1388.resource.id, " ");
      }
    }

    var ResourceDetailPageComponent =
    /*#__PURE__*/
    function () {
      function ResourceDetailPageComponent(route, facilityManager, resourcesManager, sideMenuService, sideMenuItemService) {
        _classCallCheck(this, ResourceDetailPageComponent);

        this.route = route;
        this.facilityManager = facilityManager;
        this.resourcesManager = resourcesManager;
        this.sideMenuService = sideMenuService;
        this.sideMenuItemService = sideMenuItemService;
      }

      _createClass(ResourceDetailPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.route.params.subscribe(function (params) {
            var resourceId = params['resourceId'];

            _this11.resourcesManager.getResourceById(resourceId).subscribe(function (resource) {
              _this11.resource = resource;

              _this11.facilityManager.getFacilityById(resource.facilityId).subscribe(function (facility) {
                var facilityItem = _this11.sideMenuItemService.parseFacility(facility);

                var resourceItem = _this11.sideMenuItemService.parseResource(resource);

                _this11.sideMenuService.setFacilityMenuItems([facilityItem, resourceItem]);
              });
            });
          });
        }
      }]);

      return ResourceDetailPageComponent;
    }();

    ResourceDetailPageComponent.ɵfac = function ResourceDetailPageComponent_Factory(t) {
      return new (t || ResourceDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["ResourcesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuItemService"]));
    };

    ResourceDetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResourceDetailPageComponent,
      selectors: [["app-resource-detail-page"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid pl-xl-5 pr-xl-5 resource-theme", 4, "ngIf"], [1, "container-fluid", "pl-xl-5", "pr-xl-5", "resource-theme"], [1, "page-title"], [1, "resource-link", 3, "routerLink"], [1, "text-muted"]],
      template: function ResourceDetailPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResourceDetailPageComponent_div_0_Template, 10, 9, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resource !== undefined);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_7__["BackButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_8__["AnimatedRouterOutletComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2UtZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"],
      data: {
        animation: [_shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceDetailPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resource-detail-page',
          templateUrl: './resource-detail-page.component.html',
          styleUrls: ['./resource-detail-page.component.scss'],
          animations: [_shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["FacilitiesManagerService"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["ResourcesManagerService"]
        }, {
          type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"]
        }, {
          type: _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuItemService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: ResourceGroupsComponent */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceGroupsResourceGroupsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceGroupsComponent", function () {
      return ResourceGroupsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_components_dialogs_remove_group_from_resource_dialog_remove_group_from_resource_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/components/dialogs/remove-group-from-resource-dialog/remove-group-from-resource-dialog.component */
    "./src/app/shared/components/dialogs/remove-group-from-resource-dialog/remove-group-from-resource-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_assign_group_to_resource_dialog_assign_group_to_resource_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/components/dialogs/assign-group-to-resource-dialog/assign-group-to-resource-dialog.component */
    "./src/app/shared/components/dialogs/assign-group-to-resource-dialog/assign-group-to-resource-dialog.component.ts");
    /* harmony import */


    var _shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/components/refresh-button/refresh-button.component */
    "./src/app/shared/components/refresh-button/refresh-button.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _shared_components_debounce_filter_debounce_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../shared/components/debounce-filter/debounce-filter.component */
    "./src/app/shared/components/debounce-filter/debounce-filter.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _shared_components_groups_list_groups_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../shared/components/groups-list/groups-list.component */
    "./src/app/shared/components/groups-list/groups-list.component.ts");
    /* harmony import */


    var _libs_ui_alerts_src_lib_alert_alert_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../../../../../libs/ui/alerts/src/lib/alert/alert.component */
    "../../libs/ui/alerts/src/lib/alert/alert.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = ["checkbox"];

    function ResourceGroupsComponent_mat_spinner_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
      }
    }

    var _c1 = function _c1() {
      return ["vo", "menu"];
    };

    function ResourceGroupsComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-groups-list", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1396 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groups", ctx_r1396.filteredGroups)("selection", ctx_r1396.selected)("disableMembers", false)("inDialog", false)("hideColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
      }
    }

    function ResourceGroupsComponent_app_alert_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-alert", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "RESOURCE_DETAIL.ASSIGNED_GROUPS.NO_GROUPS"), "\n");
      }
    }

    var ResourceGroupsComponent =
    /*#__PURE__*/
    function () {
      function ResourceGroupsComponent(route, resourcesManager, dialog) {
        _classCallCheck(this, ResourceGroupsComponent);

        this.route = route;
        this.resourcesManager = resourcesManager;
        this.dialog = dialog;
        this.assignedGroups = [];
        this.selected = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.filteredGroups = [];
      }

      _createClass(ResourceGroupsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.loading = true;
          this.route.parent.params.subscribe(function (parentParams) {
            _this12.resourceId = parentParams['resourceId'];

            _this12.loadAllGroups();
          });
        }
      }, {
        key: "loadAllGroups",
        value: function loadAllGroups() {
          var _this13 = this;

          this.loading = true;
          this.resourcesManager.getAssignedGroups(this.resourceId).subscribe(function (assignedGroups) {
            _this13.assignedGroups = assignedGroups;
            _this13.filteredGroups = assignedGroups;

            _this13.selected.clear();

            _this13.loading = false;
          });
        }
      }, {
        key: "addGroup",
        value: function addGroup() {
          var _this14 = this;

          var dialogRef = this.dialog.open(_shared_components_dialogs_assign_group_to_resource_dialog_assign_group_to_resource_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AssignGroupToResourceDialogComponent"], {
            width: '800px',
            data: {
              theme: 'resource-theme',
              resourceId: this.resourceId
            }
          });
          dialogRef.afterClosed().subscribe(function (success) {
            if (success) {
              _this14.loadAllGroups();
            }
          });
        }
      }, {
        key: "removeGroups",
        value: function removeGroups() {
          var _this15 = this;

          var dialogRef = this.dialog.open(_shared_components_dialogs_remove_group_from_resource_dialog_remove_group_from_resource_dialog_component__WEBPACK_IMPORTED_MODULE_6__["RemoveGroupFromResourceDialogComponent"], {
            width: '500px',
            data: {
              resourceId: this.resourceId,
              groups: this.selected.selected
            }
          });
          dialogRef.afterClosed().subscribe(function (success) {
            if (success) {
              _this15.loadAllGroups();
            }
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filteredGroups = this.assignedGroups.filter(function (option) {
            return option.name.toLowerCase().includes(filterValue.toLowerCase());
          });
        }
      }]);

      return ResourceGroupsComponent;
    }();

    ResourceGroupsComponent.ɵfac = function ResourceGroupsComponent_Factory(t) {
      return new (t || ResourceGroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
    };

    ResourceGroupsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResourceGroupsComponent,
      selectors: [["app-perun-web-apps-resource-groups"]],
      viewQuery: function ResourceGroupsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.checkbox = _t.first);
        }
      },
      decls: 14,
      vars: 14,
      consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 3, "click"], ["mat-flat-button", "", "color", "warn", 1, "ml-2", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], ["color", "warn", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [1, "mt-3"], [3, "groups", "selection", "disableMembers", "inDialog", "hideColumns"], ["color", "warn"]],
      template: function ResourceGroupsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-refresh-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function ResourceGroupsComponent_Template_app_refresh_button_refresh_3_listener($event) {
            return ctx.loadAllGroups();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceGroupsComponent_Template_button_click_4_listener($event) {
            return ctx.addGroup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceGroupsComponent_Template_button_click_7_listener($event) {
            return ctx.removeGroups();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-debounce-filter", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function ResourceGroupsComponent_Template_app_debounce_filter_filter_10_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResourceGroupsComponent_mat_spinner_11_Template, 1, 0, "mat-spinner", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ResourceGroupsComponent_div_12_Template, 2, 6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResourceGroupsComponent_app_alert_13_Template, 3, 3, "app-alert", 7);
        }

        if (rf & 2) {
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
        }
      },
      directives: [_shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_8__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _shared_components_debounce_filter_debounce_filter_component__WEBPACK_IMPORTED_MODULE_10__["DebounceFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _shared_components_groups_list_groups_list_component__WEBPACK_IMPORTED_MODULE_13__["GroupsListComponent"], _libs_ui_alerts_src_lib_alert_alert_component__WEBPACK_IMPORTED_MODULE_14__["AlertComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2UtZ3JvdXBzL3Jlc291cmNlLWdyb3Vwcy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceGroupsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-perun-web-apps-resource-groups',
          templateUrl: './resource-groups.component.html',
          styleUrls: ['./resource-groups.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      }, {
        checkbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['checkbox', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: ResourceOverviewComponent */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceOverviewResourceOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceOverviewComponent", function () {
      return ResourceOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/components/menu-buttons-field/menu-buttons-field.component */
    "./src/app/shared/components/menu-buttons-field/menu-buttons-field.component.ts");

    var ResourceOverviewComponent =
    /*#__PURE__*/
    function () {
      function ResourceOverviewComponent(resourcesManager, route) {
        _classCallCheck(this, ResourceOverviewComponent);

        this.resourcesManager = resourcesManager;
        this.route = route;
        this.navItems = [];
      }

      _createClass(ResourceOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.route.params.subscribe(function (params) {
            var resourceId = params['resourceId'];

            _this16.resourcesManager.getResourceById(resourceId).subscribe(function (resource) {
              _this16.resource = resource;

              _this16.initItems();
            });
          });
        }
      }, {
        key: "initItems",
        value: function initItems() {
          this.navItems = [{
            cssIcon: 'perun-group',
            url: "/facilities/".concat(this.resource.facilityId, "/resources/").concat(this.resource.id, "/groups"),
            label: 'MENU_ITEMS.RESOURCE.ASSIGNED_GROUPS',
            style: 'resource-btn'
          }, {
            cssIcon: 'perun-settings2',
            url: "/facilities/".concat(this.resource.facilityId, "/resources/").concat(this.resource.id, "/settings"),
            label: 'MENU_ITEMS.RESOURCE.SETTINGS',
            style: 'resource-btn'
          }];
        }
      }]);

      return ResourceOverviewComponent;
    }();

    ResourceOverviewComponent.ɵfac = function ResourceOverviewComponent_Factory(t) {
      return new (t || ResourceOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    ResourceOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResourceOverviewComponent,
      selectors: [["app-resource-overview"]],
      hostVars: 2,
      hostBindings: function ResourceOverviewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 2,
      vars: 2,
      consts: [[3, "items", "size"]],
      template: function ResourceOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-buttons-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.navItems)("size", "small");
        }
      },
      directives: [_shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__["MenuButtonsFieldComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2Utb3ZlcnZpZXcvcmVzb3VyY2Utb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resource-overview',
          templateUrl: './resource-overview.component.html',
          styleUrls: ['./resource-overview.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, {
        "true": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.router-component']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.ts":
  /*!************************************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.ts ***!
    \************************************************************************************************************************************************/

  /*! exports provided: ResourceSettingsAttributesComponent */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceSettingsResourceSettingsAttributesResourceSettingsAttributesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceSettingsAttributesComponent", function () {
      return ResourceSettingsAttributesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../core/services/common/notificator.service */
    "./src/app/core/services/common/notificator.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../shared/components/attributes-list/attributes-list.component */
    "./src/app/shared/components/attributes-list/attributes-list.component.ts");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component */
    "./src/app/shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component */
    "./src/app/shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../../shared/components/refresh-button/refresh-button.component */
    "./src/app/shared/components/refresh-button/refresh-button.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../../shared/components/immediate-filter/immediate-filter.component */
    "./src/app/shared/components/immediate-filter/immediate-filter.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    var _c0 = ["list"];

    function ResourceSettingsAttributesComponent_mat_spinner_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
      }
    }

    function ResourceSettingsAttributesComponent_app_attributes_list_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-attributes-list", 9, 10);
      }

      if (rf & 2) {
        var ctx_r1393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filterValue", ctx_r1393.filterValue)("attributes", ctx_r1393.attributes)("selection", ctx_r1393.selection);
      }
    }

    var ResourceSettingsAttributesComponent =
    /*#__PURE__*/
    function () {
      function ResourceSettingsAttributesComponent(attributesManager, route, dialog, notificator, translate) {
        var _this17 = this;

        _classCallCheck(this, ResourceSettingsAttributesComponent);

        this.attributesManager = attributesManager;
        this.route = route;
        this.dialog = dialog;
        this.notificator = notificator;
        this.translate = translate;
        this.attributes = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        this.filterValue = '';
        this.translate.get('RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE').subscribe(function (value) {
          return _this17.saveSuccessMessage = value;
        });
        this.translate.get('RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE').subscribe(function (value) {
          return _this17.deleteSuccessMessage = value;
        });
      }

      _createClass(ResourceSettingsAttributesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.route.parent.parent.params.subscribe(function (params) {
            _this18.resourceId = params['resourceId'];

            _this18.refreshTable();
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          var _this19 = this;

          var dialogRef = this.dialog.open(_shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteAttributeDialogComponent"], {
            width: '450px',
            data: {
              entityId: this.resourceId,
              entity: 'resource',
              attributes: this.selection.selected
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this19.refreshTable();
            }
          });
        }
      }, {
        key: "onSave",
        value: function onSave() {
          var _this20 = this;

          // have to use this to update attribute with map in it, before saving it
          this.list.updateMapAttributes();
          this.attributesManager.setResourceAttributes({
            resource: this.resourceId,
            attributes: this.selection.selected
          }).subscribe(function () {
            _this20.attributesManager.getResourceAttributes(_this20.resourceId).subscribe(function (attributes) {
              _this20.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["filterCoreAttributes"])(attributes);

              _this20.notificator.showSuccess(_this20.saveSuccessMessage);

              _this20.selection.clear();
            });
          });
        }
      }, {
        key: "onCreate",
        value: function onCreate() {
          var _this21 = this;

          var dialogRef = this.dialog.open(_shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CreateAttributeDialogComponent"], {
            width: '1050px',
            data: {
              entityId: this.resourceId,
              entity: 'resource',
              notEmptyAttributes: this.attributes,
              style: 'resource-theme'
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'saved') {
              _this21.refreshTable();
            }
          });
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this22 = this;

          this.loading = true;
          this.attributesManager.getResourceAttributes(this.resourceId).subscribe(function (attributes) {
            _this22.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["filterCoreAttributes"])(attributes);

            _this22.selection.clear();

            _this22.loading = false;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filterValue = filterValue;
        }
      }]);

      return ResourceSettingsAttributesComponent;
    }();

    ResourceSettingsAttributesComponent.ɵfac = function ResourceSettingsAttributesComponent_Factory(t) {
      return new (t || ResourceSettingsAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]));
    };

    ResourceSettingsAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResourceSettingsAttributesComponent,
      selectors: [["app-resource-settings-attributes"]],
      viewQuery: function ResourceSettingsAttributesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function ResourceSettingsAttributesComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 17,
      vars: 17,
      consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "filterValue", "attributes", "selection", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [3, "filterValue", "attributes", "selection"], ["list", ""]],
      template: function ResourceSettingsAttributesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-refresh-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function ResourceSettingsAttributesComponent_Template_app_refresh_button_refresh_4_listener($event) {
            return ctx.refreshTable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceSettingsAttributesComponent_Template_button_click_5_listener($event) {
            return ctx.onCreate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceSettingsAttributesComponent_Template_button_click_8_listener($event) {
            return ctx.onSave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceSettingsAttributesComponent_Template_button_click_11_listener($event) {
            return ctx.onDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-immediate-filter", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function ResourceSettingsAttributesComponent_Template_app_immediate_filter_filter_14_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResourceSettingsAttributesComponent_mat_spinner_15_Template, 1, 0, "mat-spinner", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ResourceSettingsAttributesComponent_app_attributes_list_16_Template, 2, 3, "app-attributes-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
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
        }
      },
      directives: [_shared_components_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_11__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _shared_components_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_13__["ImmediateFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_5__["AttributesListComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2Utc2V0dGluZ3MvcmVzb3VyY2Utc2V0dGluZ3MtYXR0cmlidXRlcy9yZXNvdXJjZS1zZXR0aW5ncy1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceSettingsAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resource-settings-attributes',
          templateUrl: './resource-settings-attributes.component.html',
          styleUrls: ['./resource-settings-attributes.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }];
      }, {
        "true": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.router-component']
        }],
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['list']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.ts":
  /*!********************************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.ts ***!
    \********************************************************************************************************************************************/

  /*! exports provided: ResourceSettingsOverviewComponent */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceSettingsResourceSettingsOverviewResourceSettingsOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceSettingsOverviewComponent", function () {
      return ResourceSettingsOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../shared/components/menu-buttons-field/menu-buttons-field.component */
    "./src/app/shared/components/menu-buttons-field/menu-buttons-field.component.ts");

    var ResourceSettingsOverviewComponent =
    /*#__PURE__*/
    function () {
      function ResourceSettingsOverviewComponent(route, resourceManager) {
        _classCallCheck(this, ResourceSettingsOverviewComponent);

        this.route = route;
        this.resourceManager = resourceManager;
        this.items = [];
      }

      _createClass(ResourceSettingsOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.route.parent.parent.params.subscribe(function (parentParams) {
            var resourceId = parentParams['resourceId'];

            _this23.resourceManager.getResourceById(resourceId).subscribe(function (resource) {
              _this23.resource = resource;

              _this23.initItems();
            });
          });
        }
      }, {
        key: "initItems",
        value: function initItems() {
          this.items = [{
            cssIcon: 'perun-attributes',
            url: "/facilities/".concat(this.resource.facilityId, "/resources/").concat(this.resource.id, "/settings/attributes"),
            label: 'MENU_ITEMS.RESOURCE.ATTRIBUTES',
            style: 'resource-btn'
          }];
        }
      }]);

      return ResourceSettingsOverviewComponent;
    }();

    ResourceSettingsOverviewComponent.ɵfac = function ResourceSettingsOverviewComponent_Factory(t) {
      return new (t || ResourceSettingsOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]));
    };

    ResourceSettingsOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResourceSettingsOverviewComponent,
      selectors: [["app-resource-settings-overview"]],
      hostVars: 2,
      hostBindings: function ResourceSettingsOverviewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 2,
      vars: 2,
      consts: [[3, "items", "size"]],
      template: function ResourceSettingsOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-buttons-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items)("size", "small");
        }
      },
      directives: [_shared_components_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__["MenuButtonsFieldComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2Utc2V0dGluZ3MvcmVzb3VyY2Utc2V0dGluZ3Mtb3ZlcnZpZXcvcmVzb3VyY2Utc2V0dGluZ3Mtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceSettingsOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resource-settings-overview',
          templateUrl: './resource-settings-overview.component.html',
          styleUrls: ['./resource-settings-overview.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]
        }];
      }, {
        "true": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.router-component']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: ResourceSettingsComponent */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceSettingsResourceSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceSettingsComponent", function () {
      return ResourceSettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../shared/animations/Animations */
    "./src/app/shared/animations/Animations.ts");
    /* harmony import */


    var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/components/animated-router-outlet/animated-router-outlet.component */
    "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");

    var ResourceSettingsComponent =
    /*#__PURE__*/
    function () {
      function ResourceSettingsComponent() {
        _classCallCheck(this, ResourceSettingsComponent);
      }

      _createClass(ResourceSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResourceSettingsComponent;
    }();

    ResourceSettingsComponent.ɵfac = function ResourceSettingsComponent_Factory(t) {
      return new (t || ResourceSettingsComponent)();
    };

    ResourceSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResourceSettingsComponent,
      selectors: [["app-resource-settings"]],
      hostVars: 2,
      hostBindings: function ResourceSettingsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 1,
      vars: 0,
      template: function ResourceSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-animated-router-outlet");
        }
      },
      directives: [_shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_2__["AnimatedRouterOutletComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2Utc2V0dGluZ3MvcmVzb3VyY2Utc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"],
      data: {
        animation: [_shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resource-settings',
          templateUrl: './resource-settings.component.html',
          styleUrls: ['./resource-settings.component.scss'],
          animations: [_shared_animations_Animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]]
        }]
      }], function () {
        return [];
      }, {
        "true": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.router-component']
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=facilities-facilities-module-es5.js.map