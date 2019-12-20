(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vos-vos-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/application-detail/application-detail.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/application-detail/application-detail.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"page-subtitle\">\n  {{'VO_DETAIL.APPLICATION.APPLICATION_DETAIL.TITLE' | translate}}\n  <span class=\"text-muted\">\n    #{{application.id}}\n  </span>\n</h2>\n<mat-divider class=\"mb-4\"></mat-divider>\n\n<mat-spinner *ngIf=\"loading\" class=\"ml-auto mr-auto\">\n</mat-spinner>\n\n<div *ngIf=\"!loading\">\n  <button mat-flat-button color=\"accent\" class=\"mr-2\" (click)=\"verifyApplication()\" *ngIf=\"this.application.state == 'NEW'\">\n    {{'VO_DETAIL.APPLICATION.APPLICATION_DETAIL.VERIFY' | translate}}\n  </button>\n  <button mat-flat-button color=\"accent\" class=\"mr-2\" (click)=\"approveApplication()\" *ngIf=\"this.application.state == 'VERIFIED' || this.application.state == 'NEW'\">\n    {{'VO_DETAIL.APPLICATION.APPLICATION_DETAIL.APPROVE' | translate}}\n  </button>\n  <button mat-flat-button color=\"warn\" class=\"mr-2\" (click)=\"rejectApplication()\" *ngIf=\"this.application.state == 'VERIFIED' || this.application.state == 'NEW'\">\n    {{'VO_DETAIL.APPLICATION.APPLICATION_DETAIL.REJECT' | translate}}\n  </button>\n  <button mat-flat-button color=\"warn\" class=\"mr-2\" (click)=\"deleteApplication()\" *ngIf=\"this.application.state == 'REJECTED' || this.application.state == 'NEW'\">\n    {{'VO_DETAIL.APPLICATION.APPLICATION_DETAIL.DELETE' | translate}}\n  </button>\n  <button mat-stroked-button class=\"mr-2 mb-2\" (click)=\"resendNotification()\">\n    <i class=\"material-icons\">\n      mail_outline\n    </i> {{'VO_DETAIL.APPLICATION.APPLICATION_DETAIL.SEND_NOTIFICATION' | translate}}\n  </button>\n\n  <div>\n    <span class=\"font-weight-bold\">{{'VO_DETAIL.APPLICATION.APPLICATION_DETAIL.APPLICATION_FOR_VO' | translate}}</span> : {{this.application.vo.name}}\n  </div>\n  <div>\n    <span class=\"font-weight-bold\">{{'VO_DETAIL.APPLICATION.APPLICATION_DETAIL.STATE' | translate}}</span>: <span [outerHTML]=\"this.application.state | applicationState\"></span>\n  </div>\n  <div>\n    <span class=\"font-weight-bold\">{{'VO_DETAIL.APPLICATION.APPLICATION_DETAIL.TYPE' | translate}}</span>:\n    <span *ngIf=\"application.type == 'INITIAL'; else extension\">\n      <mat-icon class=\"align-text-bottom\" >arrow_right_alt</mat-icon>Initial\n    </span>\n    <ng-template #extension>\n      <mat-icon class=\"align-text-bottom\">cached</mat-icon>Extension\n    </ng-template>\n  </div>\n\n  <div class=\"card p-3 mt-2\" *ngIf=\"this.application.state == 'REJECTED'\">\n    <mat-card-title><i class=\"material-icons red\">clear</i> {{'VO_DETAIL.APPLICATION.APPLICATION_DETAIL.REJECTED_BY' | translate}}: {{getModifiedAtName(application.modifiedBy)}}</mat-card-title>\n    <div><span class=\"font-weight-bold\">{{'VO_DETAIL.APPLICATION.APPLICATION_DETAIL.DATE' | translate}}</span>: {{this.application.modifiedAt | date:'d.M.y h:mm:ss a'}}</div>\n  </div>\n\n  <div class=\"card p-3 mt-2\" *ngIf=\"this.application.state == 'APPROVED'\">\n    <mat-card-title><i class=\"material-icons green\">done</i> {{'VO_DETAIL.APPLICATION.APPLICATION_DETAIL.APPROVED_BY' | translate}}: {{getModifiedAtName(application.modifiedBy)}}</mat-card-title>\n    <div><span class=\"font-weight-bold\">{{'VO_DETAIL.APPLICATION.APPLICATION_DETAIL.DATE' | translate}}</span>: {{this.application.modifiedAt | date:'d.M.y h:mm:ss a'}}</div>\n  </div>\n\n  <div class=\"card p-4 mt-2\">\n    <mat-card-title><i class=\"material-icons\">redo</i> {{'VO_DETAIL.APPLICATION.APPLICATION_DETAIL.SUBMITTED_BY' | translate}}: {{application.user === null ? submittedBy() : application.user | userFullName}}</mat-card-title>\n\n    <div><span class=\"font-weight-bold\">{{'VO_DETAIL.APPLICATION.APPLICATION_DETAIL.EXT_SRC' | translate}}</span>: {{this.application.extSourceName}}</div>\n    <div><span class=\"font-weight-bold\">{{'VO_DETAIL.APPLICATION.APPLICATION_DETAIL.LOA' | translate}}</span>: {{this.application.extSourceLoa}}</div>\n    <div><span class=\"font-weight-bold\">{{'VO_DETAIL.APPLICATION.APPLICATION_DETAIL.DATE' | translate}}</span>: {{this.application.createdAt | date:'d.M.y h:mm:ss a'}}</div>\n\n    <table mat-table [dataSource]=\"dataSource\" class=\"w-100\" *ngIf=\"userData.length !== 0\">\n      <ng-container matColumnDef=\"label\">\n        <th mat-header-cell *matHeaderCellDef></th>\n        <td mat-cell *matCellDef=\"let userData\" class=\"font-weight-bold\">{{getLabel(userData.formItem)}}{{userData.formItem.type.startsWith(\"FROM_FEDERATION\") ? '*' : ''}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"value\">\n        <th mat-header-cell *matHeaderCellDef></th>\n        <td mat-cell *matCellDef=\"let userData\"> {{userData.value}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"h-50\"></tr>\n      <tr mat-row *matRowDef=\"let userData; columns: displayedColumns;\"></tr>\n    </table>\n    <div *ngIf=\"userData.length !== 0\" class=\"font-italic\">*{{'VO_DETAIL.APPLICATION.APPLICATION_DETAIL.VALUE_BY_EXTERNALS' | translate}}</div>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/application-form-list/application-form-list.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/application-form-list/application-form-list.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-spinner *ngIf=\"loading\" class=\"ml-auto mr-auto\">\n</mat-spinner>\n\n<div class=\"card mt-2\" *ngIf=\"this.applicationFormItems.length !== 0 && !loading\">\n  <div class=\"card-body table-theme\">\n    <table mat-table\n           [cdkDropListDisabled]=\"dragDisabled\"\n           #table\n           [dataSource]=\"dataSource\"\n           class=\"w-100\"\n           cdkDropList\n           cdkDropListData=\"dataSource\"\n           (cdkDropListDropped)=\"drop($event)\">\n      <ng-container matColumnDef=\"drag\">\n        <th mat-header-cell *matHeaderCellDef></th>\n        <td mat-cell *matCellDef=\"let applicationFormItem\">\n          <button mat-icon-button (mousedown)=\"dragDisabled = false;\">\n            <mat-icon>drag_indicator</mat-icon>\n          </button>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"shortname\">\n        <th mat-header-cell *matHeaderCellDef>{{'VO_DETAIL.SETTINGS.APPLICATION_FORM.SHORTNAME' | translate}}</th>\n        <td mat-cell *matCellDef=\"let applicationFormItem\">{{applicationFormItem.shortname}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"type\">\n        <th mat-header-cell *matHeaderCellDef>{{'VO_DETAIL.SETTINGS.APPLICATION_FORM.TYPE' | translate}}</th>\n        <td mat-cell *matCellDef=\"let applicationFormItem\">{{applicationFormItem.type | applicationFormItemType}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"preview\">\n        <th mat-header-cell *matHeaderCellDef>{{'VO_DETAIL.SETTINGS.APPLICATION_FORM.PREVIEW' | translate}}</th>\n        <td mat-cell *matCellDef=\"let applicationFormItem\">\n          <div *ngIf=\"applicationFormItem.type === 'TEXTFIELD' ||\n                      applicationFormItem.type === 'VALIDATED_EMAIL' ||\n                      applicationFormItem.type === 'USERNAME'\">\n            <form>\n              <input type=\"text\">\n            </form>\n          </div>\n          <div class=\"font-italic disabled\" *ngIf=\"applicationFormItem.type === 'FROM_FEDERATION_HIDDEN'\">\n            {{'VO_DETAIL.SETTINGS.APPLICATION_FORM.HIDDEN_VALUE' | translate}}\n          </div>\n          <div *ngIf=\"applicationFormItem.type === 'FROM_FEDERATION_SHOW'\">\n            <form>\n              <input disabled>\n            </form>\n          </div>\n          <div *ngIf=\"applicationFormItem.type === 'PASSWORD'\">\n            <form>\n              <input type=\"text\" class=\"mb-1\"><br/>\n              <input type=\"text\">\n            </form>\n          </div>\n          <div *ngIf=\"applicationFormItem.type === 'RADIO'\">\n            <form>\n              <div *ngFor=\"let item of getLocalizedOptions(applicationFormItem)\">\n                <input type=\"radio\" name=\"temp\"> {{item}}<br>\n              </div>\n              <input type=\"reset\" value=\"{{'VO_DETAIL.SETTINGS.APPLICATION_FORM.CLEAR_SELECTION' | translate}}\">\n            </form>\n          </div>\n          <div *ngIf=\"applicationFormItem.type ==='HEADING' ||\n                      applicationFormItem.type === 'HTML_COMMENT'\">\n            <span [innerHTML]=\"getLocalizedLabel(applicationFormItem)\"></span>\n          </div>\n          <div *ngIf=\"applicationFormItem.type === 'SELECTIONBOX'\">\n            <select>\n              <option *ngFor=\"let item of getLocalizedOptions(applicationFormItem)\">{{item}}</option>\n            </select>\n          </div>\n          <div *ngIf=\"applicationFormItem.type === 'TEXTAREA'\">\n            <textarea></textarea>\n          </div>\n          <div *ngIf=\"applicationFormItem.type === 'COMBOBOX'\">\n            <select [(ngModel)]=\"mapForCombobox[applicationFormItem.id]\">\n              <option value=\"false\" *ngFor=\"let item of getLocalizedOptions(applicationFormItem)\" selected>{{item}}</option>\n              <option value=\"true\">{{'VO_DETAIL.SETTINGS.APPLICATION_FORM.OTHER_VALUE' | translate}}</option>\n            </select>\n            <div *ngIf=\"mapForCombobox[applicationFormItem.id] === 'true'\">\n              <form>\n                <input type=\"text\">\n              </form>\n            </div>\n          </div>\n          <div *ngIf=\"applicationFormItem.type === 'CHECKBOX'\">\n            <form>\n              <div *ngFor=\"let item of getLocalizedOptions(applicationFormItem)\">\n                <input type=\"checkbox\"> {{item}}\n              </div>\n            </form>\n          </div>\n          <div *ngIf=\"applicationFormItem.type === 'SUBMIT_BUTTON'\">\n            <button mat-flat-button color=\"accent\">{{getLocalizedLabel(applicationFormItem)}}</button>\n          </div>\n          <div *ngIf=\"applicationFormItem.type === 'TIMEZONE'\">\n            <select name=\"timezone_offset\" id=\"timezone-offset\" class=\"span5\">\n              <option value=\"-12:00\" selected=\"selected\">{{'VO_DETAIL.SETTINGS.APPLICATION_FORM.NOT_SELECTED' | translate}}</option>\n              <option value=\"-12:00\">(GMT -12:00) Eniwetok, Kwajalein</option>\n              <option value=\"-11:00\">(GMT -11:00) Midway Island, Samoa</option>\n              <option value=\"-10:00\">(GMT -10:00) Hawaii</option>\n              <option value=\"-09:50\">(GMT -9:30) Taiohae</option>\n              <option value=\"-09:00\">(GMT -9:00) Alaska</option>\n              <option value=\"-08:00\">(GMT -8:00) Pacific Time (US &amp; Canada)</option>\n              <option value=\"-07:00\">(GMT -7:00) Mountain Time (US &amp; Canada)</option>\n              <option value=\"-06:00\">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>\n              <option value=\"-05:00\">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>\n              <option value=\"-04:50\">(GMT -4:30) Caracas</option>\n              <option value=\"-04:00\">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>\n              <option value=\"-03:50\">(GMT -3:30) Newfoundland</option>\n              <option value=\"-03:00\">(GMT -3:00) Brazil, Buenos Aires, Georgetown</option>\n              <option value=\"-02:00\">(GMT -2:00) Mid-Atlantic</option>\n              <option value=\"-01:00\">(GMT -1:00) Azores, Cape Verde Islands</option>\n              <option value=\"+00:00\">(GMT) Western Europe Time, London, Lisbon, Casablanca</option>\n              <option value=\"+01:00\">(GMT +1:00) Brussels, Copenhagen, Madrid, Paris</option>\n              <option value=\"+02:00\">(GMT +2:00) Kaliningrad, South Africa</option>\n              <option value=\"+03:00\">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>\n              <option value=\"+03:50\">(GMT +3:30) Tehran</option>\n              <option value=\"+04:00\">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>\n              <option value=\"+04:50\">(GMT +4:30) Kabul</option>\n              <option value=\"+05:00\">(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>\n              <option value=\"+05:50\">(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</option>\n              <option value=\"+05:75\">(GMT +5:45) Kathmandu, Pokhara</option>\n              <option value=\"+06:00\">(GMT +6:00) Almaty, Dhaka, Colombo</option>\n              <option value=\"+06:50\">(GMT +6:30) Yangon, Mandalay</option>\n              <option value=\"+07:00\">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>\n              <option value=\"+08:00\">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>\n              <option value=\"+08:75\">(GMT +8:45) Eucla</option>\n              <option value=\"+09:00\">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>\n              <option value=\"+09:50\">(GMT +9:30) Adelaide, Darwin</option>\n              <option value=\"+10:00\">(GMT +10:00) Eastern Australia, Guam, Vladivostok</option>\n              <option value=\"+10:50\">(GMT +10:30) Lord Howe Island</option>\n              <option value=\"+11:00\">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</option>\n              <option value=\"+11:50\">(GMT +11:30) Norfolk Island</option>\n              <option value=\"+12:00\">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>\n              <option value=\"+12:75\">(GMT +12:45) Chatham Islands</option>\n              <option value=\"+13:00\">(GMT +13:00) Apia, Nukualofa</option>\n              <option value=\"+14:00\">(GMT +14:00) Line Islands, Tokelau</option>\n            </select>\n          </div>\n          <div *ngIf=\"applicationFormItem.type === 'AUTO_SUBMIT_BUTTON'\">\n            <button mat-flat-button color=\"accent\">{{getLocalizedLabel(applicationFormItem)}}</button>\n          </div>\n\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"edit\">\n        <th mat-header-cell *matHeaderCellDef></th>\n        <td mat-cell *matCellDef=\"let applicationFormItem\">\n          <button\n            matTooltip=\"{{'VO_DETAIL.SETTINGS.APPLICATION_FORM.EDIT' | translate}}\"\n            mat-icon-button\n            class=\"hideable-button\"\n            (click)=\"edit(applicationFormItem)\">\n            <mat-icon>edit</mat-icon>\n          </button>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"delete\">\n        <th mat-header-cell *matHeaderCellDef></th>\n        <td mat-cell *matCellDef=\"let applicationFormItem\">\n          <button\n            matTooltip=\"{{'VO_DETAIL.SETTINGS.APPLICATION_FORM.DELETE' | translate}}\"\n            mat-icon-button\n            color=\"warn\"\n            (click)=\"delete(applicationFormItem)\">\n            <mat-icon>delete</mat-icon>\n          </button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr\n        mat-row\n\n        *matRowDef=\"let applicationFormItem; columns: displayedColumns;\"\n        cdkDrag\n        [cdkDragData]=\"applicationFormItem\">\n      </tr>\n    </table>\n  </div>\n</div>\n<app-alert *ngIf=\"this.applicationFormItems.length === 0 && !loading\" color=\"warn\">\n  {{'VO_DETAIL.SETTINGS.APPLICATION_FORM.NO_APPLICATION_FORM' | translate}}\n</app-alert>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/application-form-preview/application-form-preview.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/application-form-preview/application-form-preview.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"page-subtitle\">\n  {{'VO_DETAIL.SETTINGS.APPLICATION_FORM.PREVIEW_PAGE.TITLE' | translate}}\n</h1>\n<mat-spinner *ngIf=\"loading\" class=\"ml-auto mr-auto\">\n</mat-spinner>\n<div *ngIf=\"!loading\">\n\n  <div class=\"w-100 d-flex mb-2\">\n    <button\n      mat-stroked-button\n      *ngIf=\"!initialPage\"\n      class=\"mr-2\"\n      (click)=\"switchToInitial()\">\n      <i class=\"material-icons\">arrow_right_alt</i>\n      {{'VO_DETAIL.SETTINGS.APPLICATION_FORM.PREVIEW_PAGE.SWITCH_INITIAL' | translate}}\n    </button>\n    <button\n      mat-stroked-button\n      *ngIf=\"initialPage\"\n      class=\"mr-2\"\n      (click)=\"switchToExtension()\">\n      <i class=\"material-icons\">cached</i>\n      {{'VO_DETAIL.SETTINGS.APPLICATION_FORM.PREVIEW_PAGE.SWITCH_EXTENSION' | translate}}\n    </button>\n\n    <button\n      mat-stroked-button\n      *ngIf=\"language === 'cs'\"\n      class=\"mr-2\"\n      (click)=\"switchToEnglish()\">\n      <i class=\"material-icons\">public</i>\n      {{'VO_DETAIL.SETTINGS.APPLICATION_FORM.PREVIEW_PAGE.SWITCH_ENGLISH' | translate}}\n    </button>\n    <button\n      mat-stroked-button\n      *ngIf=\"language === 'en'\"\n      class=\"mr-2\"\n      (click)=\"switchToCzech()\">\n      <i class=\"material-icons\">public</i>\n      {{'VO_DETAIL.SETTINGS.APPLICATION_FORM.PREVIEW_PAGE.SWITCH_CZECH' | translate}}\n    </button>\n  </div>\n  <div class=\"card mb-4 p-5\">\n    <div *ngFor=\"let applicationFormItem of applicationFormItems\">\n      <div *ngIf=\"isChoosenType(applicationFormItem)\" class=\"mb-2\">\n\n        <div class=\"d-flex\" *ngIf=\"applicationFormItem.type === 'TEXTFIELD' ||\n                                   applicationFormItem.type === 'VALIDATED_EMAIL' ||\n                                   applicationFormItem.type === 'USERNAME'\">\n          <div class=\"w-50 d-flex\">\n            <span class=\"w-50\">{{getLocalizedLabel(applicationFormItem)}}</span>\n            <div class=\"w-50\">\n              <input type=\"text\" class=\"w-100\">\n            </div>\n          </div>\n          <div class=\"w-50 d-flex\">\n            <span class=\"ml-2\">{{getLocalizedHint(applicationFormItem)}}</span>\n          </div>\n        </div>\n\n\n        <div class=\"d-flex\" *ngIf=\"applicationFormItem.type === 'FROM_FEDERATION_SHOW'\">\n          <div class=\"w-50 d-flex\">\n            <span class=\"w-50\">{{getLocalizedLabel(applicationFormItem)}}</span>\n            <div class=\"w-50\">\n              <input type=\"text\" class=\"w-100\" disabled>\n            </div>\n          </div>\n          <div class=\"w-50 d-flex\">\n            <span class=\"ml-2\">{{getLocalizedHint(applicationFormItem)}}</span>\n          </div>\n        </div>\n\n\n        <div class=\"d-flex\" *ngIf=\"applicationFormItem.type === 'PASSWORD'\">\n          <div class=\"w-50 d-flex\">\n            <span class=\"w-50\">{{getLocalizedLabel(applicationFormItem)}}</span>\n            <div class=\"w-50\">\n              <input class=\"mb-1 w-100\" type=\"text\"><br/>\n              <input class=\"w-100\" type=\"text\">\n            </div>\n          </div>\n          <div class=\"w-50 d-flex\">\n            <span class=\"ml-2\">{{getLocalizedHint(applicationFormItem)}}</span>\n          </div>\n        </div>\n\n\n        <div class=\"d-flex\" *ngIf=\"applicationFormItem.type === 'RADIO'\">\n          <div class=\"w-50 d-flex\">\n            <span class=\"w-50\">{{getLocalizedLabel(applicationFormItem)}}</span>\n            <form class=\"w-50\">\n              <div *ngFor=\"let item of getLocalizedOptions(applicationFormItem)\">\n                <input type=\"radio\" name=\"temp\"> {{item}}<br>\n              </div>\n              <input type=\"reset\" value=\"{{'VO_DETAIL.SETTINGS.APPLICATION_FORM.CLEAR_SELECTION' | translate}}\"><!--tlacitko-->\n            </form>\n          </div>\n          <div class=\"w-50 d-flex\">\n            <span class=\"ml-2\">{{getLocalizedHint(applicationFormItem)}}</span>\n          </div>\n        </div>\n\n\n        <div *ngIf=\"applicationFormItem.type ==='HEADING' ||\n                    applicationFormItem.type === 'HTML_COMMENT'\">\n          <span [innerHTML]=\"getLocalizedLabel(applicationFormItem)\"></span>\n        </div>\n\n\n        <div class=\"d-flex\" *ngIf=\"applicationFormItem.type === 'SELECTIONBOX'\">\n          <div class=\"w-50 d-flex\">\n            <span class=\"w-50\">{{getLocalizedLabel(applicationFormItem)}}</span>\n            <div class=\"w-50\">\n              <select class=\"w-100\">\n                <option *ngFor=\"let item of getLocalizedOptions(applicationFormItem)\">{{item}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"w-50 d-flex\">\n            <span class=\"ml-2\">{{getLocalizedHint(applicationFormItem)}}</span>\n          </div>\n        </div>\n\n\n        <div class=\"d-flex\" *ngIf=\"applicationFormItem.type === 'TEXTAREA'\">\n          <div class=\"w-50 d-flex\">\n            <span class=\"w-50\">{{getLocalizedLabel(applicationFormItem)}}</span>\n            <textarea class=\"w-50\"></textarea>\n          </div>\n          <div class=\"w-50 d-flex\">\n            <span class=\"ml-2\">{{getLocalizedHint(applicationFormItem)}}</span>\n          </div>\n        </div>\n\n\n        <div class=\"d-flex\" *ngIf=\"applicationFormItem.type === 'COMBOBOX'\">\n          <div class=\"w-50 d-flex\">\n            <span class=\"w-50\">{{getLocalizedLabel(applicationFormItem)}}</span>\n            <div class=\"w-50\">\n              <select [(ngModel)]=\"mapForCombobox[applicationFormItem.id]\" class=\"w-100\">\n                <option value=\"true\" selected>{{'VO_DETAIL.SETTINGS.APPLICATION_FORM.OTHER_VALUE' | translate}}</option>\n                <option value=\"false\" *ngFor=\"let item of getLocalizedOptions(applicationFormItem)\">{{item}}</option>\n              </select>\n              <div *ngIf=\"mapForCombobox[applicationFormItem.id] === 'true'\" class=\"w-100\">\n                <form>\n                  <input type=\"text\">\n                </form>\n              </div>\n            </div>\n          </div>\n          <div class=\"w-50 d-flex\">\n            <span class=\"ml-2\">{{getLocalizedHint(applicationFormItem)}}</span>\n          </div>\n        </div>\n\n\n        <div class=\"d-flex\" *ngIf=\"applicationFormItem.type === 'CHECKBOX'\">\n          <div class=\"w-50 d-flex\">\n            <span class=\"w-50\">{{getLocalizedLabel(applicationFormItem)}}</span>\n            <div class=\"w-50\">\n              <form class=\"w-100\">\n                <div *ngFor=\"let item of getLocalizedOptions(applicationFormItem)\">\n                  <input type=\"checkbox\"> {{item}}\n                </div>\n              </form>\n            </div>\n          </div>\n          <div class=\"w-50 d-flex\">\n            <span class=\"ml-2\">{{getLocalizedHint(applicationFormItem)}}</span>\n          </div>\n        </div>\n\n\n        <div class=\"d-flex\" *ngIf=\"applicationFormItem.type === 'SUBMIT_BUTTON'\">\n          <button mat-flat-button color=\"accent\">{{getLocalizedLabel(applicationFormItem)}}</button>\n        </div>\n\n\n        <div *ngIf=\"applicationFormItem.type === 'AUTO_SUBMIT_BUTTON'\">\n          <button mat-flat-button color=\"accent\">{{getLocalizedLabel(applicationFormItem)}}</button>\n        </div>\n\n\n        <div class=\"d-flex\" *ngIf=\"applicationFormItem.type === 'TIMEZONE'\">\n          <div class=\"w-50 d-flex\">\n            <span class=\"w-50\">{{getLocalizedLabel(applicationFormItem)}}</span>\n            <div class=\"w-50\">\n              <select name=\"timezone_offset\" id=\"timezone-offset\" class=\"w-100\">\n                <option value=\"-12:00\" selected=\"selected\">\n                  {{'VO_DETAIL.SETTINGS.APPLICATION_FORM.NOT_SELECTED' | translate}}\n                </option>\n                <option value=\"-12:00\">(GMT -12:00) Eniwetok, Kwajalein</option>\n                <option value=\"-11:00\">(GMT -11:00) Midway Island, Samoa</option>\n                <option value=\"-10:00\">(GMT -10:00) Hawaii</option>\n                <option value=\"-09:50\">(GMT -9:30) Taiohae</option>\n                <option value=\"-09:00\">(GMT -9:00) Alaska</option>\n                <option value=\"-08:00\">(GMT -8:00) Pacific Time (US &amp; Canada)</option>\n                <option value=\"-07:00\">(GMT -7:00) Mountain Time (US &amp; Canada)</option>\n                <option value=\"-06:00\">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>\n                <option value=\"-05:00\">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>\n                <option value=\"-04:50\">(GMT -4:30) Caracas</option>\n                <option value=\"-04:00\">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>\n                <option value=\"-03:50\">(GMT -3:30) Newfoundland</option>\n                <option value=\"-03:00\">(GMT -3:00) Brazil, Buenos Aires, Georgetown</option>\n                <option value=\"-02:00\">(GMT -2:00) Mid-Atlantic</option>\n                <option value=\"-01:00\">(GMT -1:00) Azores, Cape Verde Islands</option>\n                <option value=\"+00:00\">(GMT) Western Europe Time, London, Lisbon, Casablanca</option>\n                <option value=\"+01:00\">(GMT +1:00) Brussels, Copenhagen, Madrid, Paris</option>\n                <option value=\"+02:00\">(GMT +2:00) Kaliningrad, South Africa</option>\n                <option value=\"+03:00\">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>\n                <option value=\"+03:50\">(GMT +3:30) Tehran</option>\n                <option value=\"+04:00\">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>\n                <option value=\"+04:50\">(GMT +4:30) Kabul</option>\n                <option value=\"+05:00\">(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>\n                <option value=\"+05:50\">(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</option>\n                <option value=\"+05:75\">(GMT +5:45) Kathmandu, Pokhara</option>\n                <option value=\"+06:00\">(GMT +6:00) Almaty, Dhaka, Colombo</option>\n                <option value=\"+06:50\">(GMT +6:30) Yangon, Mandalay</option>\n                <option value=\"+07:00\">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>\n                <option value=\"+08:00\">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>\n                <option value=\"+08:75\">(GMT +8:45) Eucla</option>\n                <option value=\"+09:00\">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>\n                <option value=\"+09:50\">(GMT +9:30) Adelaide, Darwin</option>\n                <option value=\"+10:00\">(GMT +10:00) Eastern Australia, Guam, Vladivostok</option>\n                <option value=\"+10:50\">(GMT +10:30) Lord Howe Island</option>\n                <option value=\"+11:00\">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</option>\n                <option value=\"+11:50\">(GMT +11:30) Norfolk Island</option>\n                <option value=\"+12:00\">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>\n                <option value=\"+12:75\">(GMT +12:45) Chatham Islands</option>\n                <option value=\"+13:00\">(GMT +13:00) Apia, Nukualofa</option>\n                <option value=\"+14:00\">(GMT +14:00) Line Islands, Tokelau</option>\n              </select>\n            </div>\n\n          </div>\n          <div class=\"w-50 d-flex\">\n            <span class=\"ml-2\">{{getLocalizedHint(applicationFormItem)}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/applications-list/applications-list.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/applications-list/applications-list.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-2\" [class.hide-table]=\"exporting\" [hidden]=\"this.applications.length === 0 || dataSource.filteredData.length === 0\">\n  <div class=\"card-body table-theme\">\n    <app-table-options [exporter]=\"exporter\" (start)=\"exporting = true\" (end)=\"exporting = false\"></app-table-options>\n    <table mat-table matTableExporter [dataSource]=\"dataSource\" #exporter=\"matTableExporter\" matSort matSortActive=\"id\" matSortDirection=\"asc\" matSortDisableClear class=\"w-100\">\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'VO_DETAIL.APPLICATION.TABLE_ID' | translate}}</th>\n        <td mat-cell class=\"static-column-size\" *matCellDef=\"let application\">{{application.id}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"createdAt\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'VO_DETAIL.APPLICATION.TABLE_CREATED_DATE' | translate}}</th>\n        <td mat-cell *matCellDef=\"let application\">{{application.createdAt | date}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"type\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'VO_DETAIL.APPLICATION.TABLE_TYPE' | translate}}</th>\n        <td mat-cell *matCellDef=\"let application\">\n          <div *ngIf=\"application.type == 'INITIAL'; else extension\">\n            <mat-icon matTooltip=\"Initial\" matTooltipPosition=\"above\">arrow_right_alt</mat-icon>\n          </div>\n          <ng-template #extension>\n            <mat-icon matTooltip=\"Extension\" matTooltipPosition=\"above\">cached</mat-icon>\n          </ng-template>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"state\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'VO_DETAIL.APPLICATION.TABLE_STATE' | translate}}</th>\n        <td mat-cell *matCellDef=\"let application\">\n          <span [outerHTML]=\"application.state | applicationState\"></span>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"user\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'VO_DETAIL.APPLICATION.TABLE_SUBMITTED_BY' | translate}}</th>\n        <td mat-cell *matCellDef=\"let application\">\n          <div *ngIf=\"application.user == null; else name\">\n            {{application.createdBy.slice(application.createdBy.lastIndexOf('=')+1, application.createdBy.length)}}\n          </div>\n          <ng-template #name>\n            {{application.user | userFullName}}\n          </ng-template>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"extSourceLoa\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'VO_DETAIL.APPLICATION.TABLE_LOA' | translate}}</th>\n        <td mat-cell *matCellDef=\"let application\">{{application.extSourceLoa}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"group\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'VO_DETAIL.APPLICATION.TABLE_GROUP_NAME' | translate}}</th>\n        <td mat-cell *matCellDef=\"let application\">\n          <div *ngIf=\"application.group == null; else groupName\" class=\"font-italic text-muted\">\n            -\n          </div>\n          <ng-template #groupName>\n            {{application.group.name}}\n          </ng-template>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"modifiedBy\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'VO_DETAIL.APPLICATION.TABLE_MODIFIED_BY' | translate}}</th>\n        <td mat-cell *matCellDef=\"let application\">{{getFriendlyName(application.modifiedBy)}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr\n        mat-row\n        *matRowDef=\"let application; columns: displayedColumns;\"\n        (click)=\"selectApplication(application)\"\n        class=\"dark-hover-list-item\">\n      </tr>\n    </table>\n    <mat-paginator [length]=\"this.applications.length\" [pageSize]=\"10\" [pageSizeOptions]=\"[5,10,25]\"></mat-paginator>\n  </div>\n</div>\n\n<mat-spinner *ngIf=\"exporting\" class=\"ml-auto mr-auto\"></mat-spinner>\n\n<app-alert *ngIf=\"this.applications.length === 0\" color=\"warn\">\n  {{'VO_DETAIL.APPLICATION.NO_APPLICATION_FOUND' | translate}}\n</app-alert>\n\n<app-alert *ngIf=\"dataSource.filteredData.length === 0 && applications.length !== 0\" color=\"warn\">\n  {{'SHARED.COMPONENTS.NO_FILTER_RESULTS_ALERT' | translate}}\n</app-alert>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/expiration-settings/expiration-settings.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/expiration-settings/expiration-settings.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card settings-card col-12 col-md-12 col-xl-6\" *ngIf=\"currentConfiguration\">\n  <div class=\"d-flex flex-row align-items-baseline justify-content-between\">\n    <h1 class=\"settings-header\" (click)=\"mainToggle.toggle()\"\n        [class.unselected-setting]=\"!mainToggle.checked\">\n      {{'VO_MANAGEMENT.SETTINGS.EXPIRATION.TITLE' | translate}}\n    </h1>\n    <mat-slide-toggle class=\"ml-4\" color=\"primary\" #mainToggle [(ngModel)]=\"currentConfiguration.enabled\">\n    </mat-slide-toggle>\n  </div>\n\n  <div [@openClose]=\"mainToggle.checked ? 'open' : 'closed'\">\n    <label class=\"setting-item pt-2\">{{'VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_LABEL' | translate}}</label>\n    <div class=\"ml-1\">\n      <mat-radio-group [(ngModel)]=\"currentConfiguration.periodType\">\n        <mat-radio-button #staticPeriod class=\"mr-3\" color=\"primary\" value=\"static\">\n          {{'VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_TYPE_STATIC' | translate}}\n        </mat-radio-button>\n        <mat-radio-button #dynamicPeriod color=\"primary\" value=\"dynamic\">\n          {{'VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_TYPE_DYNAMIC' | translate}}\n        </mat-radio-button>\n      </mat-radio-group>\n      <div class=\"form-container\" *ngIf=\"staticPeriod.checked\">\n        <mat-form-field class=\"date-field\">\n          <input\n            pattern=\"{{datePattern}}\"\n            matInput\n            [(ngModel)]=\"currentConfiguration.periodStatic\"\n            placeholder=\"{{'VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_INPUT_STATIC' | translate}}\">\n          <mat-hint>{{'VO_MANAGEMENT.SETTINGS.EXPIRATION.DP_HINT' | translate}}</mat-hint>\n        </mat-form-field>\n      </div>\n      <div class=\"d-flex flex-row\" *ngIf=\"dynamicPeriod.checked\">\n        <mat-form-field class=\"mr-2 amount-field\">\n          <input\n            pattern=\"{{dynamicAmountPattern}}\"\n            matInput\n            [(ngModel)]=\"currentConfiguration.periodDynamic\"\n            placeholder=\"{{'VO_MANAGEMENT.SETTINGS.EXPIRATION.AMOUNT_VALUE' | translate}}\">\n        </mat-form-field>\n        <mat-form-field>\n          <mat-label>{{'VO_MANAGEMENT.SETTINGS.EXPIRATION.AMOUNT_TYPE' | translate}}</mat-label>\n          <mat-select [(ngModel)]=\"currentConfiguration.periodDynamicUnit\">\n            <mat-option *ngFor=\"let option of amountOptions\" [value]=\"option.value\">{{option.text}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </div>\n\n    <!--  Dont allow loa  -->\n\n    <app-settings-toggle-item\n      [(model)]=\"currentConfiguration.doNotAllowLoasEnabled\"\n      [title]=\"'VO_MANAGEMENT.SETTINGS.EXPIRATION.DONT_ALLOW_LOA_LABEL' | translate\">\n      <mat-form-field>\n        <mat-placeholder>{{'VO_MANAGEMENT.SETTINGS.EXPIRATION.DONT_ALLOW_LOA_SELECT' | translate}}</mat-placeholder>\n        <mat-select multiple [(ngModel)]=\"currentConfiguration.doNotAllowLoas\">\n          <mat-option *ngFor=\"let loa of LOAS\" [value]=\"loa\">{{loa}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </app-settings-toggle-item>\n\n    <!--  Dont extend loa  -->\n\n    <app-settings-toggle-item\n      [(model)]=\"currentConfiguration.doNotExtendLoasEnabled\"\n      [title]=\"'VO_MANAGEMENT.SETTINGS.EXPIRATION.DONT_EXTEND_LOA_LABEL' | translate\">\n      <mat-form-field>\n        <mat-placeholder>{{'VO_MANAGEMENT.SETTINGS.EXPIRATION.DONT_EXTEND_LOA_SELECT' | translate}}</mat-placeholder>\n        <mat-select multiple [(ngModel)]=\"currentConfiguration.doNotExtendLoas\">\n          <mat-option *ngFor=\"let loa of LOAS\" [value]=\"loa\">{{loa}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </app-settings-toggle-item>\n\n    <!-- Grace period -->\n\n    <app-settings-toggle-item\n      [(model)]=\"currentConfiguration.gracePeriodEnabled\"\n      [title]=\"'VO_MANAGEMENT.SETTINGS.EXPIRATION.GRACE_PERIOD_LABEL' | translate\">\n      <div class=\"d-flex flex-row\">\n        <mat-form-field class=\"mr-2 amount-field\">\n          <input\n            pattern=\"{{dynamicAmountPattern}}\"\n            matInput\n            [(ngModel)]=\"currentConfiguration.gracePeriod\"\n            placeholder=\"{{'VO_MANAGEMENT.SETTINGS.EXPIRATION.GRACE_AMOUNT_VALUE' | translate}}\">\n        </mat-form-field>\n        <mat-form-field>\n          <mat-label>{{'VO_MANAGEMENT.SETTINGS.EXPIRATION.GRACE_AMOUNT_TYPE' | translate}}</mat-label>\n          <mat-select [(ngModel)]=\"currentConfiguration.gracePeriodUnit\">\n            <mat-option *ngFor=\"let option of amountOptions\" [value]=\"option.value\">{{option.text}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </app-settings-toggle-item>\n\n    <!--  Loa period  -->\n\n    <app-settings-toggle-item\n      [(model)]=\"currentConfiguration.specialLoaPeriodEnabled\"\n      [title]=\"'VO_MANAGEMENT.SETTINGS.EXPIRATION.LOA_PERIOD_LABEL' | translate\">\n      <div class=\"ml-1\">\n        <div>\n          <mat-form-field>\n            <mat-label>{{'VO_MANAGEMENT.SETTINGS.EXPIRATION.SPECIAL_LOA_SELECT' | translate}}</mat-label>\n            <mat-select #specialLoaSelect [(ngModel)]=\"currentConfiguration.specialLoa\">\n              <mat-option *ngFor=\"let loa of LOAS\" [value]=\"loa\">\n                {{loa}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          <div class=\"mt-2\" *ngIf=\"currentConfiguration.specialLoa !== null\">\n            <mat-radio-group [(ngModel)]=\"currentConfiguration.specialLoaPeriodType\">\n              <mat-radio-button #loaStaticRadioButton class=\"mr-3\" color=\"primary\" value=\"static\">\n                {{'VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_TYPE_STATIC' | translate}}\n              </mat-radio-button>\n              <mat-radio-button #loaDynamicRadioButton color=\"primary\" value=\"dynamic\">\n                {{'VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_TYPE_DYNAMIC' | translate}}\n              </mat-radio-button>\n            </mat-radio-group>\n            <div class=\"form-container\" *ngIf=\"loaStaticRadioButton.checked\">\n              <mat-form-field class=\"date-field\">\n                <input\n                  pattern=\"{{datePattern}}\"\n                  [(ngModel)]=\"currentConfiguration.specialLoaPeriodStatic\"\n                  matInput\n                  placeholder=\"{{'VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_INPUT_STATIC' | translate}}\">\n                <mat-hint>{{'VO_MANAGEMENT.SETTINGS.EXPIRATION.DP_HINT' | translate}}</mat-hint>\n              </mat-form-field>\n            </div>\n            <div class=\"d-flex flex-row\" *ngIf=\"loaDynamicRadioButton.checked\">\n              <mat-form-field class=\"mr-2 amount-field\">\n                <input\n                  pattern=\"{{dynamicAmountPattern}}\"\n                  [(ngModel)]=\"currentConfiguration.specialLoaPeriodDynamic\"\n                  matInput\n                  placeholder=\"{{'VO_MANAGEMENT.SETTINGS.EXPIRATION.AMOUNT_VALUE' | translate}}\">\n              </mat-form-field>\n              <mat-form-field>\n                <mat-label>{{'VO_MANAGEMENT.SETTINGS.EXPIRATION.AMOUNT_TYPE' | translate}}</mat-label>\n                <mat-select [(ngModel)]=\"currentConfiguration.specialLoaPeriodDynamicUnit\">\n                  <mat-option *ngFor=\"let option of amountOptions\" [value]=\"option.value\">{{option.text}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n            <div>\n              <mat-checkbox\n                color=\"primary\"\n                [(ngModel)]=\"currentConfiguration.specialLoaPeriodExtendExpiredMembers\">\n                {{'VO_MANAGEMENT.SETTINGS.EXPIRATION.EXTEND_EXPIRED_MEMBERS_CHECKBOX' | translate}}\n              </mat-checkbox>\n            </div>\n          </div>\n        </div>\n      </div>\n    </app-settings-toggle-item>\n  </div>\n\n  <div class=\"w-100 d-flex mt-3 mb-3\">\n    <button [disabled]=\"!areChangesMade()\" mat-flat-button color=\"primary\" class=\"ml-auto\" (click)=\"saveChanges()\">\n      {{'VO_MANAGEMENT.SETTINGS.EXPIRATION.SAVE' | translate}}\n    </button>\n  </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/groups-tree/groups-tree.component.html":
/*!********************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/groups-tree/groups-tree.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-2\" *ngIf=\"groups.length !== 0\">\n  <mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n    <mat-tree-node class=\"group-tree-node\"\n                   *matTreeNodeDef=\"let group\" matTreeNodePadding>            <!--leaf-->\n      <div class=\"group-item-content\" [routerLink]=\"['/organizations', group.voId, 'groups', group.id]\">\n        <mat-checkbox color=\"primary\"\n                      [disabled]=\"group.fullName === 'members'\"\n                      class=\"no-label-margin-bottom ml-4\"\n                      [checked]=\"selection.isSelected(group)\"\n                      (change)=\"leafItemSelectionToggle(group)\"\n                      matTreeNodeToggle></mat-checkbox>\n        <!-- use a disabled button to provide padding for tree leaf -->\n        <button mat-icon-button disabled></button>\n        <div class=\"mr-2\">\n          {{group.name}}\n        </div>\n        <div class=\"text-muted\">\n          #{{group.id}}\n        </div>\n      </div>\n      <app-group-menu\n        [disabled]=\"group.fullName === 'members'\"\n        (moveGroup)=\"onMoveGroup(group)\"\n        [group]=\"group\">\n      </app-group-menu>\n    </mat-tree-node>\n\n    <mat-tree-node\n      class=\"group-tree-node\"\n      *matTreeNodeDef=\"let group;when: hasChild\" matTreeNodePadding> <!--parent-->\n      <mat-checkbox color=\"primary\" class=\"no-label-margin-bottom ml-4\"\n                    [disabled]=\"group.fullName === 'members'\"\n                    [checked]=\"selection.isSelected(group)\"\n                    [indeterminate]=\"descendantsPartiallySelected(group)\"\n                    (change)=\"itemSelectionToggle(group)\"\n                    matTreeNodeToggle></mat-checkbox>\n      <div class=\"group-item-content\" [routerLink]=\"['/organizations', group.voId, 'groups', group.id]\">\n        <button mat-icon-button matTreeNodeToggle\n                [attr.aria-label]=\"'toggle ' + group.name\">\n          <mat-icon class=\"mat-icon-rtl-mirror\">\n            {{treeControl.isExpanded(group) ? 'expand_more' : 'chevron_right'}}\n          </mat-icon>\n        </button>\n        <div class=\"mr-2\" >\n          {{group.name}}\n        </div>\n        <div class=\"text-muted\">\n          #{{group.id}}\n        </div>\n      </div>\n      <app-group-menu\n        [disabled]=\"group.fullName === 'members'\"\n        (moveGroup)=\"onMoveGroup(group)\"\n        [group]=\"group\">\n      </app-group-menu>\n    </mat-tree-node>\n  </mat-tree>\n</div>\n\n<app-alert *ngIf=\"groups.length === 0\" color=\"warn\">\n  {{'VO_DETAIL.GROUPS.NO_GROUPS' | translate}}\n</app-alert>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/member-group-list/member-group-list.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/member-group-list/member-group-list.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-2\" [class.hide-table]=\"exporting\" [hidden]=\"dataSource.filteredData.length === 0 || groups.length === 0\">\n  <div class=\"card-body\">\n    <app-table-options [exporter]=\"exporter\" (start)=\"exporting = true\" (end)=\"exporting = false\"></app-table-options>\n    <table mat-table matTableExporter [dataSource]=\"dataSource\" #exporter=\"matTableExporter\" matSort matSortActive=\"id\" matSortDirection=\"asc\" matSortDisableClear class=\"w-100\">\n      <ng-container matColumnDef=\"select\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-checkbox color=\"primary\"\n                        (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                        [aria-label]=\"checkboxLabel()\">\n          </mat-checkbox>\n        </th>\n        <td mat-cell *matCellDef=\"let row\" class=\"static-column-size\">\n          <mat-checkbox color=\"primary\"\n                        (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(row) : null\"\n                        [checked]=\"selection.isSelected(row)\"\n                        [aria-label]=\"checkboxLabel(row)\">\n          </mat-checkbox>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'MEMBER_DETAIL.GROUPS.TABLE_GROUP_ID' | translate}}</th>\n        <td mat-cell class=\"static-column-size\" *matCellDef=\"let group\">{{group.id}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'MEMBER_DETAIL.GROUPS.TABLE_GROUP_NAME' | translate}}</th>\n        <td mat-cell *matCellDef=\"let group\">{{group.name}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr\n        mat-row\n        *matRowDef=\"let group; columns: displayedColumns;\"\n        [routerLink]=\"['/organizations', group.voId, 'groups', group.id]\"\n        class=\"dark-hover-list-item\">\n      </tr>\n    </table>\n    <mat-paginator [length]=\"this.groups.length\" [pageSize]=\"10\" [pageSizeOptions]=\"[5,10,25]\"></mat-paginator>\n  </div>\n</div>\n\n<mat-spinner *ngIf=\"exporting\" class=\"ml-auto mr-auto\"></mat-spinner>\n\n<app-alert *ngIf=\"groups.length === 0\" color=\"warn\">\n  {{'VO_DETAIL.GROUPS.NO_GROUPS' | translate}}\n</app-alert>\n\n<app-alert *ngIf=\"dataSource.filteredData.length === 0 && groups.length !== 0\" color=\"warn\">\n  {{'SHARED.COMPONENTS.NO_FILTER_RESULTS_ALERT' | translate}}\n</app-alert>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/members-list/members-list.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/members-list/members-list.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-2\" [class.hide-table]=\"exporting\">\n  <div class=\"card-body table-theme\">\n    <app-table-options [exporter]=\"exporter\" (start)=\"exporting = true\" (end)=\"exporting = false\"></app-table-options>\n    <table\n      class=\"w-100\"\n      mat-table\n      matTableExporter\n      [dataSource]=\"dataSource\"\n      #exporter=\"matTableExporter\"\n      matSort\n      matSortActive=\"id\"\n      matSortDirection=\"asc\"\n      matSortDisableClear>\n      <ng-container matColumnDef=\"checkbox\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-checkbox color=\"primary\"\n                        (change)=\"$event ? masterToggle() : null\"\n                        [checked]=\"selection.hasValue() && isAllSelected()\"\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                        [aria-label]=\"checkboxLabel()\">\n          </mat-checkbox>\n        </th>\n        <td mat-cell *matCellDef=\"let member\" class=\"static-column-size\">\n          <mat-checkbox color=\"primary\"\n                        (click)=\"$event.stopPropagation()\"\n                        (change)=\"$event ? selection.toggle(member) : null\"\n                        [checked]=\"selection.isSelected(member)\"\n                        [aria-label]=\"checkboxLabel(member)\">\n          </mat-checkbox>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'MEMBERS_LIST.ID' | translate}}</th>\n        <td mat-cell class=\"static-column-size\" *matCellDef=\"let member\">{{member.id}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"fullName\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'MEMBERS_LIST.NAME' | translate}}</th>\n        <td mat-cell *matCellDef=\"let member\">{{member.user | userFullName}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'MEMBERS_LIST.STATUS' | translate}}</th>\n        <td mat-cell *matCellDef=\"let member\">\n          <i class=\"material-icons {{member.status | memberStatusIconColor}}\"\n             matTooltip=\"{{member.status}}\"\n             (click)=\"changeStatus($event, member)\"\n             matTooltipPosition=\"left\">\n            {{member.status | memberStatusIcon}}\n          </i>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"groupStatus\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'MEMBERS_LIST.GROUP_STATUS' | translate}}</th>\n        <td mat-cell *matCellDef=\"let member\">\n          <i class=\"material-icons {{member.groupStatus | memberStatusIconColor}}\" matTooltip=\"{{member.groupStatus}}\" matTooltipPosition=\"left\">\n            {{member.groupStatus | memberStatusIcon}}\n          </i>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{'MEMBERS_LIST.EMAIL' | translate}}</th>\n        <td mat-cell *matCellDef=\"let member\">{{member | memberEmail}}</td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr\n        mat-row\n        *matRowDef=\"let member; columns: displayedColumns;\"\n        [routerLink]=\"['/organizations', member.voId, 'members', member.id]\"\n        class=\"dark-hover-list-item\">\n      </tr>\n    </table>\n    <mat-paginator [length]=\"this.members.length\" [pageSize]=\"10\" [pageSizeOptions]=\"[5,10,25]\"></mat-paginator>\n  </div>\n</div>\n\n<mat-spinner *ngIf=\"exporting\" class=\"ml-auto mr-auto\"></mat-spinner>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/notification-list/notification-list.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/notification-list/notification-list.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-body\">\n  <table mat-table [dataSource]=\"dataSource\" matSort matSortDirection=\"asc\" matSortDisableClear class=\"w-100\">\n    <ng-container matColumnDef=\"select\">\n      <th mat-header-cell *matHeaderCellDef>\n        <mat-checkbox color=\"primary\"\n                      (change)=\"$event ? masterToggle() : null\"\n                      [checked]=\"selection.hasValue() && isAllSelected()\"\n                      [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                      [aria-label]=\"checkboxLabel()\">\n        </mat-checkbox>\n      </th>\n      <td mat-cell *matCellDef=\"let row\" class=\"static-column-size\">\n        <mat-checkbox color=\"primary\"\n                      (click)=\"$event.stopPropagation()\"\n                      (change)=\"$event ? toggle(row) : null\"\n                      [checked]=\"selection.isSelected(row)\"\n                      [aria-label]=\"checkboxLabel(row)\">\n        </mat-checkbox>\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef>\n        {{'VO_DETAIL.SETTINGS.NOTIFICATIONS.TABLE_EMAIL_ID' | translate}}\n      </th>\n      <td mat-cell  class=\"static-column-size\" *matCellDef=\"let applicationMail\">{{applicationMail.id}}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"mailType\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef>\n        {{'VO_DETAIL.SETTINGS.NOTIFICATIONS.TABLE_EMAIL_TYPE' | translate}}\n      </th>\n      <td mat-cell *matCellDef=\"let applicationMail\">{{getMailType(applicationMail)}}</td>\n    </ng-container>\n    <ng-container matColumnDef=\"appType\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef>\n        {{'VO_DETAIL.SETTINGS.NOTIFICATIONS.TABLE_APPLICATION_TYPE' | translate}}\n      </th>\n      <td mat-cell *matCellDef=\"let applicationMail\">\n        <div *ngIf=\"applicationMail.appType == 'INITIAL'; else extension\">\n          <mat-icon matTooltip=\"Initial\" matTooltipPosition=\"above\">arrow_right_alt</mat-icon>\n          {{'VO_DETAIL.SETTINGS.NOTIFICATIONS.TABLE_APPLICATION_TYPE_INITIAL' | translate}}\n        </div>\n        <ng-template #extension>\n          <mat-icon matTooltip=\"Extension\" matTooltipPosition=\"above\">cached</mat-icon>\n          {{'VO_DETAIL.SETTINGS.NOTIFICATIONS.TABLE_APPLICATION_TYPE_EXTENSION' | translate}}\n        </ng-template>\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"send\">\n      <th mat-header-cell mat-sort-header *matHeaderCellDef>\n        {{'VO_DETAIL.SETTINGS.NOTIFICATIONS.TABLE_SENDING_ENABLED' | translate}}\n      </th>\n      <td mat-cell *matCellDef=\"let applicationMail\">\n        <section>\n          <mat-checkbox [ngModel]=\"applicationMail.send\"\n                        (click)=\"$event.stopPropagation()\"\n                        (change)=\"changeSending(applicationMail)\">\n          </mat-checkbox>\n        </section>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr\n      mat-row\n      *matRowDef=\"let applicationMail; columns: displayedColumns;\"\n      (click)=\"openApplicationMailDetail(applicationMail)\"\n      class=\"dark-hover-list-item\">\n    </tr>\n  </table>\n  <mat-paginator [length]=\"this.applicationMails.length\" [pageSize]=\"10\" [pageSizeOptions]=\"[5,10,25]\"></mat-paginator>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-detail-page.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-detail-page.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid pl-xl-5 pr-xl-5 group-theme\" *ngIf=\"vo !== undefined && group !== undefined\">\n  <app-back-button>\n  </app-back-button>\n  <h1 class=\"page-title\">\n    {{'GROUP_DETAIL.TITLE' | translate}}\n    <a class=\"group-link\" [routerLink]=\"['/organizations', vo.id, 'groups', group.id]\">\n      {{group.shortName}}\n    </a>\n    <span class=\"text-muted\">\n      &nbsp;#{{group.id}}\n    </span>\n  </h1>\n  <app-animated-router-outlet></app-animated-router-outlet>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-overview/group-overview.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-overview/group-overview.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p *ngIf=\"parentGroup !== null\">\n  {{'GROUP_DETAIL.SUBGROUP_INFO' | translate}}<a class=\"group-link\" [routerLink]=\"['/organizations', parentGroup.voId, 'groups', parentGroup.id]\">\n  {{parentGroup.name}}\n</a>\n</p>\n<app-menu-buttons-field [items]=\"navItems\" [size]=\"'small'\"></app-menu-buttons-field>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component.html":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component.html ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"page-subtitle\">\n  {{'GROUP_DETAIL.SETTINGS.APPLICATION_FORM.TITLE' | translate}}\n</h1>\n<mat-spinner *ngIf=\"loading\" class=\"ml-auto mr-auto\">\n</mat-spinner>\n<div *ngIf=\"!loading && !noApplicationForm\">\n  <div class=\"d-flex w-50\">\n    <div class=\"w-50\">\n      <div class=\"font-weight-bold\">{{'GROUP_DETAIL.SETTINGS.APPLICATION_FORM.MODULE_NAME' | translate}}:\n        {{applicationForm.moduleClassName}}\n      </div>\n      <div>\n        <span class=\"font-weight-bold\">{{'GROUP_DETAIL.SETTINGS.APPLICATION_FORM.APPLICATION_TYPE' | translate}}</span>:\n\n        <mat-icon class=\"align-text-bottom\" matTooltip=\"Initial\">arrow_right_alt</mat-icon>\n        {{applicationForm.automaticApproval ?\n        ('GROUP_DETAIL.SETTINGS.APPLICATION_FORM.AUTOMATIC'| translate) : ('GROUP_DETAIL.SETTINGS.APPLICATION_FORM.MANUAL'| translate)}},\n\n        <mat-icon class=\"align-text-bottom\" matTooltip=\"Extension\">cached</mat-icon>\n        {{applicationForm.automaticApprovalExtension ?\n        ('GROUP_DETAIL.SETTINGS.APPLICATION_FORM.AUTOMATIC'| translate) : ('GROUP_DETAIL.SETTINGS.APPLICATION_FORM.MANUAL'| translate)}}\n      </div>\n    </div>\n    <div class=\"w-25\">\n      <button\n        mat-stroked-button\n        (click)=\"settings()\"\n        class=\"ml-auto\">\n        <i class=\"material-icons\">edit</i>\n        {{'GROUP_DETAIL.SETTINGS.APPLICATION_FORM.SETTINGS_BUTTON' | translate}}\n      </button>\n    </div>\n  </div>\n\n  <mat-divider class=\"mb-2 mt-2\"></mat-divider>\n\n  <div class=\"w-100 d-flex\">\n    <button\n      mat-flat-button\n      color=\"accent\"\n      class=\"mr-2\"\n      (click)=\"add()\">\n      {{'GROUP_DETAIL.SETTINGS.APPLICATION_FORM.ADD_BUTTON' | translate}}\n    </button>\n\n    <button\n      mat-stroked-button\n      class=\"mr-auto\"\n      (click)=\"copy()\">\n      <i class=\"material-icons\">file_copy</i>\n      {{'GROUP_DETAIL.SETTINGS.APPLICATION_FORM.COPY_GROUP_BUTTON' | translate}}\n    </button>\n\n    <button\n      mat-stroked-button\n      class=\"ml-auto\"\n      (click)=\"preview()\">\n      <i class=\"material-icons\">search</i>\n      {{'GROUP_DETAIL.SETTINGS.APPLICATION_FORM.PREVIEW_BUTTON' | translate}}\n    </button>\n  </div>\n\n  <app-alert color=\"info\">\n    {{'GROUP_DETAIL.SETTINGS.APPLICATION_FORM.DRAG_AND_DROP_INFO' | translate}}\n  </app-alert>\n\n  <app-application-form-list\n    [loading]=\"loading\"\n    [applicationForm]=\"applicationForm\"\n    [applicationFormItems]=\"applicationFormItems\"\n    (applicationFormItemsChange)=\"changeItems($event)\">\n  </app-application-form-list>\n</div>\n<div *ngIf=\"!loading && noApplicationForm\">\n  <app-alert color=\"warn\">{{'GROUP_DETAIL.SETTINGS.APPLICATION_FORM.NO_APPLICATION_FORM' | translate}}</app-alert>\n  <button mat-stroked-button\n          (click)=\"createEmptyApplicationForm()\">\n    {{'GROUP_DETAIL.SETTINGS.APPLICATION_FORM.CREATE_APPLICATION_FORM' | translate}}\n  </button>\n\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component.html":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component.html ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <h1 class=\"page-subtitle\">{{'GROUP_DETAIL.SETTINGS.ATTRIBUTES.TITLE' | translate}}</h1>\n  <app-refresh-button (refresh)=\"refreshTable()\"></app-refresh-button>\n  <button mat-flat-button class=\"mr-2\" color=\"accent\" (click)=\"onCreate()\">\n    {{'GROUP_DETAIL.SETTINGS.ATTRIBUTES.CREATE' | translate}}\n  </button>\n\n  <button mat-flat-button class=\"mr-2\" color=\"accent\" (click)=\"onSave()\" [disabled]=\"selection.selected.length === 0\">\n    {{'GROUP_DETAIL.SETTINGS.ATTRIBUTES.SAVE' | translate}}\n  </button>\n\n  <button mat-flat-button color=\"warn\" (click)=\"onDelete()\" [disabled]=\"selection.selected.length === 0\">\n    {{'GROUP_DETAIL.SETTINGS.ATTRIBUTES.DELETE' | translate}}\n  </button>\n  <app-immediate-filter [placeholder]=\"'SHARED.COMPONENTS.ATTRIBUTES_LIST.FILTER'\" (filter)=\"applyFilter($event)\"></app-immediate-filter>\n\n  <mat-spinner class=\"ml-auto mr-auto\" *ngIf=\"loading\"></mat-spinner>\n\n  <app-attributes-list\n    #list\n    *ngIf=\"!loading\"\n    [filterValue]=\"filterValue\"\n    [attributes]=\"attributes\"\n    [selection]=\"selection\">\n  </app-attributes-list>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component.html":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component.html ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-expiration-settings *ngIf=\"expirationAttribute !== undefined\"\n                         [expirationAttribute]=\"expirationAttribute\"\n                         (saveAttribute)=\"saveExpirationAttribute($event)\">\n</app-expiration-settings>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component.html":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component.html ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-managers-page *ngIf=\"group\"\n  [complementaryObject]=\"group\"\n  [complementaryObjectType]=\"type\"\n  [theme]=\"theme\"\n  [availableRoles]=\"availableRoles\"\n></app-managers-page>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component.html":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component.html ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"page-subtitle\">\n  {{'GROUP_DETAIL.SETTINGS.NOTIFICATIONS.TITLE' | translate}}\n</h1>\n<mat-spinner *ngIf=\"loading\" class=\"ml-auto mr-auto\">\n</mat-spinner>\n<div *ngIf=\"!noApplicationForm && !loading\">\n  <div class=\"w-100 d-flex\">\n    <button\n      mat-flat-button\n      color=\"accent\"\n      class=\"mr-2\"\n      (click)=\"add()\">\n      {{'GROUP_DETAIL.SETTINGS.NOTIFICATIONS.ADD' | translate}}\n    </button>\n\n    <button\n      mat-flat-button\n      color=\"warn\"\n      class=\"mr-2\"\n      (click)=\"remove()\"\n      [disabled]=\"selection.selected.length === 0\">\n      {{'GROUP_DETAIL.SETTINGS.NOTIFICATIONS.REMOVE' | translate}}\n    </button>\n\n    <button\n      mat-stroked-button\n      class=\"mr-2\"\n      (click)=\"changeEmailFooter()\">\n      <i class=\"material-icons\">email</i>\n      {{'GROUP_DETAIL.SETTINGS.NOTIFICATIONS.EMAIL_FOOTER' | translate}}\n    </button>\n\n    <button\n      mat-stroked-button\n      class=\"ml-auto\"\n      (click)=\"copy()\">\n      <i class=\"material-icons\">file_copy</i>\n      {{'GROUP_DETAIL.SETTINGS.NOTIFICATIONS.COPY_FROM_VO' | translate}}\n    </button>\n  </div>\n\n  <div *ngIf=\"applicationMails.length !== 0\" class=\"card mt-2\">\n    <app-notification-list\n      [applicationMails]=\"applicationMails\"\n      [groupId]=\"groupId\"\n      [selection]=\"selection\"\n      (selectionChange)=\"changeSelection($event)\"></app-notification-list>\n  </div>\n  <app-alert *ngIf=\"this.applicationMails.length === 0\" color=\"warn\">\n    {{'GROUP_DETAIL.SETTINGS.NOTIFICATIONS.NO_EMAILS' | translate}}\n  </app-alert>\n</div>\n<div *ngIf=\"noApplicationForm && !loading\">\n  <app-alert color=\"warn\">{{'GROUP_DETAIL.SETTINGS.NOTIFICATIONS.NO_APPLICATION_FORM' | translate}}</app-alert>\n  <button mat-stroked-button\n          (click)=\"createEmptyApplicationForm()\">\n    {{'GROUP_DETAIL.SETTINGS.NOTIFICATIONS.CREATE_APPLICATION_FORM' | translate}}\n  </button>\n</div>\n\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component.html":
/*!************************************************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component.html ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-menu-buttons-field [items]=\"items\" [size]=\"'small'\"></app-menu-buttons-field>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-animated-router-outlet></app-animated-router-outlet>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/member-detail-page/member-detail-page.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/member-detail-page/member-detail-page.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid pl-xl-5 pr-xl-5 member-theme\" *ngIf=\"vo !== undefined && member !== undefined\">\n  <app-back-button>\n  </app-back-button>\n  <h1 class=\"page-title mb-1\">\n    {{'MEMBER_DETAIL.TITLE' | translate}}\n    <a class=\"member-link\" [routerLink]=\"['/organizations', vo.id, 'members', member.id]\">\n      {{fullName}}\n    </a>\n    <span class=\"text-muted\">\n      &nbsp;#{{member.id}}\n    </span>\n  </h1>\n  <div class=\"mb-5\">\n<!--    TODO add link to user for admin view-->\n<!--    <a class=\"user-link\" [routerLink]=\"['/users', member.user.id]\">-->\n<!--      {{'MEMBER_DETAIL.USER_LINK' | translate}}-->\n<!--      <mat-icon></mat-icon>-->\n<!--    </a>-->\n  </div>\n  <app-animated-router-outlet></app-animated-router-outlet>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/member-detail-page/member-overview/member-overview.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/member-detail-page/member-overview/member-overview.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"page-subtitle\">{{'MEMBER_DETAIL.OVERVIEW.MEMBERSHIP' | translate}}</h1>\n<table *ngIf=\"member !== null\" class=\"table table-bordered info-table col-3\">\n  <tbody>\n  <tr>\n    <td>Status:</td>\n    <td class=\"d-flex border-0\">\n      <mat-icon class=\"mr-1\" [color]=\"statusIconColor\">\n        {{statusIcon}}\n      </mat-icon>\n      <b>\n        {{member.status}}\n      </b>\n    </td>\n  </tr>\n  <tr>\n    <td>Expiration:</td>\n    <td>\n      <i>\n        {{expiration}}\n      </i>\n    </td>\n  </tr>\n  </tbody>\n</table>\n\n<app-menu-buttons-field [items]=\"navItems\" [size]=\"'small'\"></app-menu-buttons-field>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component.html":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component.html ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <h1 class=\"page-subtitle\">{{'MEMBER_DETAIL.SETTINGS.ATTRIBUTES.TITLE' | translate}}</h1>\n  <app-refresh-button (refresh)=\"refreshTable()\"></app-refresh-button>\n  <button mat-flat-button class=\"mr-2\" color=\"accent\" (click)=\"onCreate()\">\n    {{'MEMBER_DETAIL.SETTINGS.ATTRIBUTES.CREATE' | translate}}\n  </button>\n\n  <button mat-flat-button class=\"mr-2\" color=\"accent\" (click)=\"onSave()\" [disabled]=\"selection.selected.length === 0\">\n    {{'MEMBER_DETAIL.SETTINGS.ATTRIBUTES.SAVE' | translate}}\n  </button>\n\n  <button mat-flat-button color=\"warn\" (click)=\"onDelete()\" [disabled]=\"selection.selected.length === 0\">\n    {{'MEMBER_DETAIL.SETTINGS.ATTRIBUTES.DELETE' | translate}}\n  </button>\n  <app-immediate-filter [placeholder]=\"'SHARED.COMPONENTS.ATTRIBUTES_LIST.FILTER'\" (filter)=\"applyFilter($event)\"></app-immediate-filter>\n  <mat-spinner *ngIf=\"loading\" class=\"mr-auto ml-auto\"></mat-spinner>\n  <app-attributes-list\n    #list\n    *ngIf=\"!loading\"\n    [filterValue]=\"filterValue\"\n    [attributes]=\"attributes\"\n    [selection]=\"selection\">\n  </app-attributes-list>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component.html":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component.html ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-menu-buttons-field [items]=\"items\" [size]=\"'small'\"></app-menu-buttons-field>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/member-detail-page/member-settings/member-settings.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/member-detail-page/member-settings/member-settings.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-animated-router-outlet></app-animated-router-outlet>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-detail-page.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-detail-page.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid pl-xl-5 pr-xl-5 vo-theme\" *ngIf=\"vo !== undefined\">\n  <app-back-button>\n  </app-back-button>\n  <h1 class=\"page-title\">\n    {{'VO_DETAIL.TITLE' | translate}}\n    <a class=\"vo-link\" [routerLink]=\"['/organizations/', vo.id]\">\n      {{vo.name}}\n    </a>\n    <span class=\"text-muted\">\n      &nbsp;#{{vo.id}}\n    </span>\n  </h1>\n  <app-animated-router-outlet></app-animated-router-outlet>\n</div>\n\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-overview/vo-overview.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-overview/vo-overview.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-menu-buttons-field [items]=\"navItems\" [size]=\"'small'\"></app-menu-buttons-field>\n\n<!--  <h1 class=\"page-subtitle\">Quick actions</h1>-->\n<!--  <app-menu-buttons-field [items]=\"items\" [size]=\"'medium'\">-->\n<!--  </app-menu-buttons-field>-->\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component.html":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component.html ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-menu-buttons-field [items]=\"items\" [size]=\"'small'\"></app-menu-buttons-field>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-states/state-tab/state-tab.component.html":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-states/state-tab/state-tab.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-2\">\n  <mat-accordion multi=\"true\" class=\"headers-align\" togglePosition=\"before\">\n    <mat-expansion-panel *ngFor=\"let resourceStatus of propagation\">\n      <mat-expansion-panel-header>\n\n        <mat-panel-title>\n          <img src=\"assets/img/PerunWebImages/resource-black.svg\" height=\"28\" width=\"28\">\n          <div class=\"ml-2\">\n            {{resourceStatus.resource.name}}\n          </div>\n        </mat-panel-title>\n\n        <mat-panel-description *ngIf=\"getErrorCountStates(resourceStatus) !== 0\">\n          <div>\n            <i class=\"material-icons red\">\n              error\n            </i>\n            {{getErrorCountStates(resourceStatus)}}\n            {{'VO_DETAIL.RESOURCES.STATES.FROM' | translate}} {{resourceStatus.taskList.length}}\n            {{'VO_DETAIL.RESOURCES.STATES.TASKS_WITH_ERROR_STATE' | translate}}\n          </div>\n        </mat-panel-description>\n\n      </mat-expansion-panel-header>\n\n      <ng-template matExpansionPanelContent>\n\n        <mat-divider></mat-divider>\n        <table mat-table *ngIf=\"resourceStatus.taskList.length !== 0\"\n               [dataSource]=\"datasources[propagation.indexOf(resourceStatus)]\"\n               class=\"w-100\">\n\n          <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef>{{'VO_DETAIL.RESOURCES.STATES.TABLE_ID' | translate}}</th>\n            <td mat-cell *matCellDef=\"let task\">{{task.id}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"service\">\n            <th mat-header-cell *matHeaderCellDef>{{'VO_DETAIL.RESOURCES.STATES.TABLE_SERVICE' | translate}}</th>\n            <td mat-cell *matCellDef=\"let task\">{{task.service.name}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"status\">\n            <th mat-header-cell *matHeaderCellDef>{{'VO_DETAIL.RESOURCES.STATES.TABLE_STATUS' | translate}}</th>\n            <td mat-cell *matCellDef=\"let task\">{{task.status}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"scheduled\">\n            <th mat-header-cell *matHeaderCellDef>{{'VO_DETAIL.RESOURCES.STATES.TABLE_SCHEDULED' | translate}}</th>\n            <td mat-cell *matCellDef=\"let task\">\n              <div *ngIf=\"task.schedule; else notYet\">\n                {{task.schedule | date:'medium'}}\n              </div>\n              <ng-template #notYet class=\"font-italic\">\n                {{'VO_DETAIL.RESOURCES.STATES.NOT_YET' | translate}}\n              </ng-template>\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"started\">\n            <th mat-header-cell *matHeaderCellDef>{{'VO_DETAIL.RESOURCES.STATES.TABLE_STARTED' | translate}}</th>\n            <td mat-cell *matCellDef=\"let task\">\n              <div *ngIf=\"task.startTime; else notYet\">\n                {{task.schedule | date:'medium'}}\n              </div>\n              <ng-template #notYet class=\"font-italic\">\n                {{'VO_DETAIL.RESOURCES.STATES.NOT_YET' | translate}}\n              </ng-template>\n            </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"ended\">\n            <th mat-header-cell *matHeaderCellDef>{{'VO_DETAIL.RESOURCES.STATES.TABLE_ENDED' | translate}}</th>\n            <td mat-cell *matCellDef=\"let task\">\n              <div *ngIf=\"task.endTime; else notYet\">\n                {{task.schedule | date:'medium'}}\n              </div>\n              <ng-template #notYet class=\"font-italic\">\n                {{'VO_DETAIL.RESOURCES.STATES.NOT_YET' | translate}}\n              </ng-template>\n            </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row\n              *matRowDef=\"let task; columns: displayedColumns;\"\n              [ngClass]=\"{'redBackground': task.status === 'ERROR' || task.status === 'SENDERROR' || task.status === 'GENERROR',\n                                'greenBackground': task.status === 'DONE'}\">\n          </tr>\n        </table>\n\n        <div *ngIf=\"resourceStatus.taskList.length === 0\">\n          {{'VO_DETAIL.RESOURCES.STATES.NO_TASKS' | translate}}\n        </div>\n      </ng-template>\n\n    </mat-expansion-panel>\n  </mat-accordion>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component.html":
/*!*******************************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component.html ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"page-subtitle\">{{'VO_DETAIL.RESOURCES.TAGS.TITLE' | translate}}</h1>\n<app-refresh-button (refresh)=\"updateData()\"></app-refresh-button>\n<button\n  mat-flat-button\n  class=\"mr-2\"\n  color=\"accent\"\n  (click)=\"create()\">\n  {{'VO_DETAIL.RESOURCES.TAGS.CREATE_BUTTON' | translate}}\n</button>\n\n<button\n  mat-flat-button\n  color=\"warn\"\n  [disabled]=\"selection.selected.length === 0\"\n  (click)=\"deleteTag()\">\n  {{'VO_DETAIL.RESOURCES.TAGS.DELETE_BUTTON' | translate}}\n</button>\n<app-immediate-filter [placeholder]=\"'SHARED.COMPONENTS.RESOURCES_LIST.TABLE_SEARCH'\" (filter)=\"applyFilter($event)\"></app-immediate-filter>\n\n<mat-spinner *ngIf=\"loading\" class=\"ml-auto mr-auto\"></mat-spinner>\n\n<app-resources-tags-list *ngIf=\"!loading\"\n  [selection]=\"selection\"\n  [resourceTags]=\"resourceTag\"\n  [filterValue]=\"filterValue\"\n></app-resources-tags-list>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-animated-router-outlet></app-animated-router-outlet>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component.html":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component.html ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"page-subtitle\">\n  {{'VO_DETAIL.SETTINGS.APPLICATION_FORM.TITLE' | translate}}\n</h1>\n<mat-spinner *ngIf=\"loading\" class=\"ml-auto mr-auto\">\n</mat-spinner>\n<div *ngIf=\"!loading\">\n  <div class=\"d-flex w-50\">\n    <div class=\"w-50\">\n      <div class=\"font-weight-bold\">{{'VO_DETAIL.SETTINGS.APPLICATION_FORM.MODULE_NAME' | translate}}:\n        {{applicationForm.moduleClassName}}\n      </div>\n      <div>\n        <span class=\"font-weight-bold\">{{'VO_DETAIL.SETTINGS.APPLICATION_FORM.APPLICATION_TYPE' | translate}}</span>:\n\n        <mat-icon class=\"align-text-bottom\" matTooltip=\"Initial\">arrow_right_alt</mat-icon>\n        {{applicationForm.automaticApproval ?\n        ('VO_DETAIL.SETTINGS.APPLICATION_FORM.AUTOMATIC'| translate) : ('VO_DETAIL.SETTINGS.APPLICATION_FORM.MANUAL'| translate)}},\n\n        <mat-icon class=\"align-text-bottom\" matTooltip=\"Extension\">cached</mat-icon>\n        {{applicationForm.automaticApprovalExtension ?\n        ('VO_DETAIL.SETTINGS.APPLICATION_FORM.AUTOMATIC'| translate) : ('VO_DETAIL.SETTINGS.APPLICATION_FORM.MANUAL'| translate)}}\n      </div>\n    </div>\n    <div class=\"w-25\">\n      <button\n        mat-stroked-button\n        (click)=\"settings()\"\n        class=\"ml-auto\">\n        <i class=\"material-icons\">edit</i>\n        {{'VO_DETAIL.SETTINGS.APPLICATION_FORM.SETTINGS_BUTTON' | translate}}\n      </button>\n    </div>\n  </div>\n\n  <mat-divider class=\"mb-2 mt-2\"></mat-divider>\n\n  <div class=\"w-100 d-flex\">\n    <button\n      mat-flat-button\n      color=\"accent\"\n      class=\"mr-2\"\n      (click)=\"add()\">\n      {{'VO_DETAIL.SETTINGS.APPLICATION_FORM.ADD_BUTTON' | translate}}\n    </button>\n\n    <button\n      mat-stroked-button\n      class=\"mr-2\"\n      (click)=\"copy()\">\n      <i class=\"material-icons\">file_copy</i>\n      {{'VO_DETAIL.SETTINGS.APPLICATION_FORM.COPY_VO_BUTTON' | translate}}\n    </button>\n\n    <button\n      mat-stroked-button\n      (click)=\"preview()\">\n      <i class=\"material-icons\">search</i>\n      {{'VO_DETAIL.SETTINGS.APPLICATION_FORM.PREVIEW_BUTTON' | translate}}\n    </button>\n  </div>\n\n  <app-alert [color]=\"'info'\">\n    {{'VO_DETAIL.SETTINGS.APPLICATION_FORM.DRAG_AND_DROP_INFO' | translate}}\n  </app-alert>\n\n  <app-application-form-list\n    [loading]=\"loading\"\n    [applicationForm]=\"applicationForm\"\n    [applicationFormItems]=\"applicationFormItems\"\n    (applicationFormItemsChange)=\"changeItems($event)\">\n  </app-application-form-list>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component.html":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <h1 class=\"page-subtitle\">{{'VO_DETAIL.SETTINGS.ATTRIBUTES.TITLE' | translate}}</h1>\n  <app-refresh-button (refresh)=\"refreshTable()\"></app-refresh-button>\n  <button mat-flat-button class=\"mr-2\" color=\"accent\" (click)=\"onCreate()\">\n    {{'VO_DETAIL.SETTINGS.ATTRIBUTES.CREATE' | translate}}\n  </button>\n\n  <button mat-flat-button class=\"mr-2\" color=\"accent\" (click)=\"onSave()\" [disabled]=\"selection.selected.length === 0\">\n    {{'VO_DETAIL.SETTINGS.ATTRIBUTES.SAVE' | translate}}\n  </button>\n\n  <button mat-flat-button color=\"warn\" (click)=\"onDelete()\" [disabled]=\"selection.selected.length === 0\">\n    {{'VO_DETAIL.SETTINGS.ATTRIBUTES.DELETE' | translate}}\n  </button>\n  <app-immediate-filter [placeholder]=\"'SHARED.COMPONENTS.ATTRIBUTES_LIST.FILTER'\" (filter)=\"applyFilter($event)\"></app-immediate-filter>\n  <mat-spinner class=\"ml-auto mr-auto\" *ngIf=\"loading\"></mat-spinner>\n  <app-attributes-list\n    #list\n    *ngIf=\"!loading\"\n    [filterValue]=\"filterValue\"\n    [attributes]=\"attributes\"\n    [selection]=\"selection\">\n  </app-attributes-list>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component.html":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-expiration-settings *ngIf=\"expirationAttribute !== undefined\"\n  [expirationAttribute]=\"expirationAttribute\"\n  (saveAttribute)=\"saveExpirationAttribute($event)\">\n</app-expiration-settings>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component.html":
/*!****************************************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component.html ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>vo-settings-extsources works!</p>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component.html":
/*!************************************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-managers-page *ngIf=\"vo\"\n                   [complementaryObject]=\"vo\"\n                   [complementaryObjectType]=\"type\"\n                   [theme]=\"theme\"\n                   [availableRoles]=\"availableRoles\"\n></app-managers-page>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component.html":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component.html ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"page-subtitle\">\n  {{'VO_DETAIL.SETTINGS.NOTIFICATIONS.TITLE' | translate}}\n</h1>\n\n<div class=\"w-100 d-flex\">\n  <button\n    mat-flat-button\n    color=\"accent\"\n    class=\"mr-2\"\n    (click)=\"add()\">\n    {{'VO_DETAIL.SETTINGS.NOTIFICATIONS.ADD' | translate}}\n  </button>\n\n  <button\n    mat-flat-button\n    color=\"warn\"\n    class=\"mr-2\"\n    (click)=\"remove()\"\n    [disabled]=\"selection.selected.length === 0\">\n    {{'VO_DETAIL.SETTINGS.NOTIFICATIONS.REMOVE' | translate}}\n  </button>\n\n  <button\n    mat-stroked-button\n    class=\"mr-2\"\n    (click)=\"changeEmailFooter()\">\n    <i class=\"material-icons\">email</i>\n    {{'VO_DETAIL.SETTINGS.NOTIFICATIONS.EMAIL_FOOTER' | translate}}\n  </button>\n\n  <button\n    mat-stroked-button\n    (click)=\"copy()\">\n    <i class=\"material-icons\">file_copy</i>\n    {{'VO_DETAIL.SETTINGS.NOTIFICATIONS.COPY_FROM_VO' | translate}}\n  </button>\n</div>\n\n<mat-spinner *ngIf=\"loading\" class=\"ml-auto mr-auto\">\n</mat-spinner>\n\n<div *ngIf=\"applicationMails.length !== 0 && !loading\" class=\"card mt-2\">\n  <app-notification-list\n    [applicationMails]=\"applicationMails\"\n    [voId]=\"voId\"\n    [selection]=\"selection\"\n    (selectionChange)=\"changeSelection($event)\"></app-notification-list>\n</div>\n<app-alert *ngIf=\"this.applicationMails.length === 0 && !loading\" [color]=\"'warn'\">\n  {{'VO_DETAIL.SETTINGS.NOTIFICATIONS.NO_EMAILS' | translate}}\n</app-alert>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component.html":
/*!************************************************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <app-menu-buttons-field [items]=\"items\" [size]=\"'small'\"></app-menu-buttons-field>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-animated-router-outlet></app-animated-router-outlet>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-select-page/vo-select-page.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** /home/vectoun/git/perun-web-apps/node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-select-page/vo-select-page.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid pl-xl-5 pr-xl-5 vo-theme\">\n  <app-back-button>\n  </app-back-button>\n  <h1 class=\"page-title\">{{'VO_MANAGEMENT.TITLE' | translate}}</h1>\n  <app-refresh-button (refresh)=\"refreshTable()\" *ngIf=\"!loading\"></app-refresh-button>\n  <button mat-flat-button color=\"accent\" class=\"ml-2 mr-2\" (click)=\"onCreateVo()\" *ngIf=\"!loading && isVoAdmin\">\n    {{'VO_MANAGEMENT.CREATE_VO' | translate}}\n  </button>\n  <button mat-flat-button color=\"warn\" class=\"ml-2 mr-2\" (click)=\"onRemoveVo()\" *ngIf=\"!loading && isVoAdmin\" [disabled]=\"selection.selected.length === 0\">\n    {{'VO_MANAGEMENT.REMOVE_VO' | translate}}\n  </button>\n  <app-immediate-filter [placeholder]=\"'VO_MANAGEMENT.FILTER_PLACEHOLDER'\" (filter)=\"applyFilter($event)\" *ngIf=\"!loading\"></app-immediate-filter>\n  <mat-spinner *ngIf=\"loading\" class=\"ml-auto mr-auto\"></mat-spinner>\n  <app-vo-select-table *ngIf=\"!loading\"\n    [displayedColumns]=\"displayedColumns\"\n    [selection]=\"selection\"\n    [filterValue]=\"filterValue\"\n    [vos]=\"vos\"\n    [recentIds]=\"recentIds\">\n  </app-vo-select-table>\n</div>\n");

/***/ }),

/***/ "./src/app/vos/components/application-detail/application-detail.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/vos/components/application-detail/application-detail.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWRldGFpbC9hcHBsaWNhdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/vos/components/application-detail/application-detail.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/vos/components/application-detail/application-detail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ApplicationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationDetailComponent", function() { return ApplicationDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_components_dialogs_application_re_send_notification_dialog_application_re_send_notification_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/dialogs/application-re-send-notification-dialog/application-re-send-notification-dialog.component */ "./src/app/shared/components/dialogs/application-re-send-notification-dialog/application-re-send-notification-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_application_reject_dialog_application_reject_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/dialogs/application-reject-dialog/application-reject-dialog.component */ "./src/app/shared/components/dialogs/application-reject-dialog/application-reject-dialog.component.ts");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");









let ApplicationDetailComponent = class ApplicationDetailComponent {
    constructor(registrarService, dialog, translate, route, notificator, router) {
        this.registrarService = registrarService;
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
            this.registrarService.getApplicationById(applicationId).subscribe(application => {
                this.application = application;
                this.registrarService.getApplicationDataById(this.application.id).subscribe(value => {
                    this.userData = value;
                    this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.userData);
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
        this.registrarService.deleteApplication(this.application.id).subscribe(any => {
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
            this.registrarService.getApplicationById(this.application.id).subscribe(reloaded => {
                this.application = reloaded;
                this.loading = false;
            });
        });
    }
    approveApplication() {
        this.registrarService.approveApplication(this.application.id).subscribe(application => {
            this.translate.get('VO_DETAIL.APPLICATION.APPLICATION_DETAIL.APPROVE_MESSAGE').subscribe(successMessage => {
                this.notificator.showSuccess(successMessage);
            });
            this.loading = true;
            this.registrarService.getApplicationById(this.application.id).subscribe(reloaded => {
                this.application = reloaded;
                this.loading = false;
            });
        });
    }
    verifyApplication() {
        this.registrarService.verifyApplication(this.application.id).subscribe(application => {
            this.translate.get('VO_DETAIL.APPLICATION.APPLICATION_DETAIL.VERIFY_MESSAGE').subscribe(successMessage => {
                this.notificator.showSuccess(successMessage);
            });
            this.loading = true;
            this.registrarService.getApplicationById(this.application.id).subscribe(reloaded => {
                this.application = reloaded;
                this.loading = false;
            });
        });
    }
};
ApplicationDetailComponent.ctorParameters = () => [
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_8__["RegistrarService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_7__["NotificatorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ApplicationDetailComponent.prototype, "true", void 0);
ApplicationDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-application-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./application-detail.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/application-detail/application-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./application-detail.component.scss */ "./src/app/vos/components/application-detail/application-detail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_8__["RegistrarService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_7__["NotificatorService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ApplicationDetailComponent);



/***/ }),

/***/ "./src/app/vos/components/application-form-list/application-form-list.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/vos/components/application-form-list/application-form-list.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drop-list-dragging .mat-row:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.movable-row {\n  cursor: move;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZlY3RvdW4vZ2l0L3BlcnVuLXdlYi1hcHBzL2FwcHMvYWRtaW4tZ3VpL3NyYy9hcHAvdm9zL2NvbXBvbmVudHMvYXBwbGljYXRpb24tZm9ybS1saXN0L2FwcGxpY2F0aW9uLWZvcm0tbGlzdC5jb21wb25lbnQuc2NzcyIsImFwcHMvYWRtaW4tZ3VpL3NyYy9hcHAvdm9zL2NvbXBvbmVudHMvYXBwbGljYXRpb24tZm9ybS1saXN0L2FwcGxpY2F0aW9uLWZvcm0tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQ0NGOztBRElBO0VBQ0UsVUFBQTtBQ0RGOztBRElBO0VBQ0Usc0RBQUE7QUNERjs7QURJQTtFQUNFLHNEQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0FDREYiLCJmaWxlIjoiYXBwcy9hZG1pbi1ndWkvc3JjL2FwcC92b3MvY29tcG9uZW50cy9hcHBsaWNhdGlvbi1mb3JtLWxpc3QvYXBwbGljYXRpb24tZm9ybS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLm1hdC1yb3c6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5tb3ZhYmxlLXJvdyB7XG4gIGN1cnNvcjogbW92ZTtcbn1cbiIsIi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5tYXQtcm93Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuXG4ubW92YWJsZS1yb3cge1xuICBjdXJzb3I6IG1vdmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/vos/components/application-form-list/application-form-list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/vos/components/application-form-list/application-form-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ApplicationFormListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationFormListComponent", function() { return ApplicationFormListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "../../node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _shared_components_dialogs_delete_application_form_item_dialog_delete_application_form_item_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/dialogs/delete-application-form-item-dialog/delete-application-form-item-dialog.component */ "./src/app/shared/components/dialogs/delete-application-form-item-dialog/delete-application-form-item-dialog.component.ts");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_components_dialogs_edit_application_form_item_dialog_edit_application_form_item_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/dialogs/edit-application-form-item-dialog/edit-application-form-item-dialog.component */ "./src/app/shared/components/dialogs/edit-application-form-item-dialog/edit-application-form-item-dialog.component.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");









let ApplicationFormListComponent = class ApplicationFormListComponent {
    constructor(registrarService, dialog, notificator, translate, changeDetectorRef) {
        this.registrarService = registrarService;
        this.dialog = dialog;
        this.notificator = notificator;
        this.translate = translate;
        this.changeDetectorRef = changeDetectorRef;
        this.applicationFormItems = [];
        this.applicationFormItemsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataSource = this.applicationFormItems;
        this.displayedColumns = ['drag', 'shortname', 'type', 'preview', 'edit', 'delete'];
        this.mapForCombobox = new Map();
        this.dragDisabled = true;
    }
    ngOnChanges(changes) {
        this.dataSource = this.applicationFormItems;
        this.changeDetectorRef.detectChanges(); // fix - when data in table changes, error appears
    }
    edit(applicationFormItem) {
        const editDialog = this.dialog.open(_shared_components_dialogs_edit_application_form_item_dialog_edit_application_form_item_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditApplicationFormItemDialogComponent"], {
            width: '600px',
            height: '600px',
            data: { voId: this.applicationForm.vo.id,
                group: this.applicationForm.group,
                applicationFormItem: applicationFormItem,
                applicationFormItems: this.applicationFormItems }
        });
        editDialog.afterClosed().subscribe((isChanged) => {
            if (isChanged) {
                this.applicationForm.group ? this.getFormItemsForGroup() : this.getFormItemsForVo();
            }
        });
    }
    delete(applicationFormItem) {
        const dialog = this.dialog.open(_shared_components_dialogs_delete_application_form_item_dialog_delete_application_form_item_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DeleteApplicationFormItemDialogComponent"], {
            width: '500px'
        });
        dialog.afterClosed().subscribe(deleteItem => {
            if (deleteItem) {
                applicationFormItem.forDelete = true;
                this.decreaseOrdnums(applicationFormItem.ordnum);
                if (this.applicationForm.group) {
                    this.registrarService.updateFormItemsForGroup(this.applicationForm.group.id, this.applicationFormItems).subscribe(() => {
                        this.successDeleteNotification();
                        this.getFormItemsForGroup();
                    });
                }
                else {
                    this.registrarService.updateFormItemsForVo(this.applicationForm.vo.id, this.applicationFormItems).subscribe(() => {
                        this.successDeleteNotification();
                        this.getFormItemsForVo();
                    });
                }
            }
        });
    }
    drop(event) {
        this.dragDisabled = true;
        const prevIndex = this.applicationFormItems.findIndex((d) => d === event.item.data);
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.applicationFormItems, prevIndex, event.currentIndex);
        for (let i = 0; i < this.applicationFormItems.length; i++) {
            this.applicationFormItems[i].ordnum = i;
        }
        this.updateDataSource();
        if (this.applicationForm.group) {
            this.registrarService.updateFormItemsForGroup(this.applicationForm.group.id, this.applicationFormItems).subscribe(() => {
                this.applicationFormItemsChange.emit(this.applicationFormItems);
            });
        }
        else {
            this.registrarService.updateFormItemsForVo(this.applicationForm.vo.id, this.applicationFormItems).subscribe(() => {
                this.applicationFormItemsChange.emit(this.applicationFormItems);
            });
        }
    }
    getLocalizedOptions(applicationFormItem) {
        if (applicationFormItem.i18n[this.translate.getDefaultLang()]) {
            const options = applicationFormItem.i18n[this.translate.getDefaultLang()].options;
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
    updateDataSource() {
        this.dataSource = this.applicationFormItems;
        this.applicationFormItemsChange.emit(this.applicationFormItems);
        this.changeDetectorRef.detectChanges(); // fix - when data in table changes, error appears
        this.table.renderRows();
    }
    decreaseOrdnums(index) {
        for (let i = index + 1; i < this.applicationFormItems.length; i++) {
            this.applicationFormItems[i].ordnum--;
        }
    }
    getLocalizedLabel(applicationFormItem) {
        if (applicationFormItem.i18n[this.translate.getDefaultLang()]) {
            return applicationFormItem.i18n[this.translate.getDefaultLang()].label;
        }
        return applicationFormItem.shortname;
    }
    getFormItemsForVo() {
        this.registrarService.getFormItemsForVo(this.applicationForm.vo.id).subscribe(formItems => {
            this.applicationFormItems = formItems;
            this.updateDataSource();
        });
    }
    getFormItemsForGroup() {
        this.registrarService.getFormItemsForGroup(this.applicationForm.group.id).subscribe(formItems => {
            this.applicationFormItems = formItems;
            this.updateDataSource();
        });
    }
    successDeleteNotification() {
        this.translate.get('VO_DETAIL.SETTINGS.APPLICATION_FORM.DELETE_MESSAGE').subscribe(successMessage => {
            this.notificator.showSuccess(successMessage);
        });
    }
};
ApplicationFormListComponent.ctorParameters = () => [
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_8__["RegistrarService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_5__["NotificatorService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ApplicationFormListComponent.prototype, "loading", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ApplicationFormListComponent.prototype, "applicationForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ApplicationFormListComponent.prototype, "applicationFormItems", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ApplicationFormListComponent.prototype, "applicationFormItemsChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('table', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTable"])
], ApplicationFormListComponent.prototype, "table", void 0);
ApplicationFormListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-application-form-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./application-form-list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/application-form-list/application-form-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./application-form-list.component.scss */ "./src/app/vos/components/application-form-list/application-form-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_8__["RegistrarService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_5__["NotificatorService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], ApplicationFormListComponent);



/***/ }),

/***/ "./src/app/vos/components/application-form-preview/application-form-preview.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/vos/components/application-form-preview/application-form-preview.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWZvcm0tcHJldmlldy9hcHBsaWNhdGlvbi1mb3JtLXByZXZpZXcuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");




let ApplicationFormPreviewComponent = class ApplicationFormPreviewComponent {
    constructor(route, registrarService) {
        this.route = route;
        this.registrarService = registrarService;
        this.loading = true;
        this.applicationFormItems = [];
        this.language = 'en';
        this.initialPage = true;
        this.mapForCombobox = new Map();
    }
    ngOnInit() {
        this.route.parent.parent.params.subscribe(params => {
            const voId = params['voId'];
            const groupId = params['groupId'];
            if (groupId) {
                this.registrarService.getFormItemsForGroup(groupId).subscribe(formItems => {
                    this.applicationFormItems = formItems;
                    this.loading = false;
                });
            }
            else {
                this.registrarService.getFormItemsForVo(voId).subscribe(formItems => {
                    this.applicationFormItems = formItems;
                    this.loading = false;
                });
            }
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
    isChoosenType(applicationFormItem) {
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
};
ApplicationFormPreviewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["RegistrarService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ApplicationFormPreviewComponent.prototype, "true", void 0);
ApplicationFormPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-application-form-preview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./application-form-preview.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/application-form-preview/application-form-preview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./application-form-preview.component.scss */ "./src/app/vos/components/application-form-preview/application-form-preview.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["RegistrarService"]])
], ApplicationFormPreviewComponent);



/***/ }),

/***/ "./src/app/vos/components/applications-list/applications-list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/vos/components/applications-list/applications-list.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9jb21wb25lbnRzL2FwcGxpY2F0aW9ucy1saXN0L2FwcGxpY2F0aW9ucy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/vos/components/applications-list/applications-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/vos/components/applications-list/applications-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ApplicationsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsListComponent", function() { return ApplicationsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "../../node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");






let ApplicationsListComponent = class ApplicationsListComponent {
    constructor(router) {
        this.router = router;
        this.applications = [];
        this.displayedColumns = [];
        this.exporting = false;
    }
    set matSort(ms) {
        this.sort = ms;
        this.setDataSource();
    }
    ngOnChanges(changes) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.applications);
        this.setDataSource();
        this.dataSource.filter = this.filterValue;
    }
    setDataSource() {
        if (!!this.dataSource) {
            this.dataSource.sort = this.sort;
            this.dataSource.sortingDataAccessor = (item, property) => {
                switch (property) {
                    case 'user': {
                        if (item.user) {
                            return item.user.firstName + '' + item.user.lastName;
                        }
                        return item.createdBy.slice(item.createdBy.lastIndexOf('=') + 1, item.createdBy.length);
                    }
                    case 'group': {
                        if (item.group) {
                            return item.group.name;
                        }
                        return '-';
                    }
                    case 'modifiedBy': {
                        const index = item.modifiedBy.lastIndexOf('/CN=');
                        if (index !== -1) {
                            const string = item.modifiedBy.slice(index + 4, item.modifiedBy.length).replace('/unstructuredName=', ' ').toLowerCase();
                            if (string.lastIndexOf('\\') !== -1) {
                                return item.modifiedBy.slice(item.modifiedBy.lastIndexOf('=') + 1, item.modifiedBy.length);
                            }
                            return string;
                        }
                        return item.modifiedBy.toLowerCase();
                    }
                    default: return item[property];
                }
            };
            this.dataSource.paginator = this.paginator;
        }
    }
    getFriendlyName(modifiedBy) {
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
    selectApplication(application) {
        if (this.group) {
            this.router.navigate(['/organizations', application.vo.id, 'groups', this.group.id, 'applications', application.id]);
        }
        else {
            this.router.navigate(['/organizations', application.vo.id, 'applications', application.id]);
        }
    }
};
ApplicationsListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]])
], ApplicationsListComponent.prototype, "matSort", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ApplicationsListComponent.prototype, "applications", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ApplicationsListComponent.prototype, "group", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ApplicationsListComponent.prototype, "displayedColumns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ApplicationsListComponent.prototype, "filterValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], ApplicationsListComponent.prototype, "paginator", void 0);
ApplicationsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-applications-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./applications-list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/applications-list/applications-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./applications-list.component.scss */ "./src/app/vos/components/applications-list/applications-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ApplicationsListComponent);



/***/ }),

/***/ "./src/app/vos/components/expiration-settings/expiration-settings.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/vos/components/expiration-settings/expiration-settings.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".period-container {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1.5rem;\n}\n\n.amount-field {\n  width: 80px;\n}\n\n.date-field {\n  width: 100%;\n}\n\n.settings-header {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n  font-size: 1.25rem;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.settings-card {\n  padding: 0.5rem 1.5rem 0.5rem 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZlY3RvdW4vZ2l0L3BlcnVuLXdlYi1hcHBzL2FwcHMvYWRtaW4tZ3VpL3NyYy9hcHAvdm9zL2NvbXBvbmVudHMvZXhwaXJhdGlvbi1zZXR0aW5ncy9leHBpcmF0aW9uLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9hZG1pbi1ndWkvc3JjL2FwcC92b3MvY29tcG9uZW50cy9leHBpcmF0aW9uLXNldHRpbmdzL2V4cGlyYXRpb24tc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBRUEsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxvQ0FBQTtBQ0FGIiwiZmlsZSI6ImFwcHMvYWRtaW4tZ3VpL3NyYy9hcHAvdm9zL2NvbXBvbmVudHMvZXhwaXJhdGlvbi1zZXR0aW5ncy9leHBpcmF0aW9uLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcmlvZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG5cbi5hbW91bnQtZmllbGQge1xuICB3aWR0aDogODBweDtcbn1cblxuLmRhdGUtZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNldHRpbmdzLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDAuNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5zZXR0aW5ncy1jYXJkIHtcbiAgcGFkZGluZzogLjVyZW0gMS41cmVtIC41cmVtIDEuNXJlbTtcbn1cbiIsIi5wZXJpb2QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4uYW1vdW50LWZpZWxkIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5kYXRlLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZXR0aW5ncy1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnNldHRpbmdzLWNhcmQge1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtIDAuNXJlbSAxLjVyZW07XG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");



class ExpirationAttrValue {
}
let ExpirationSettingsComponent = class ExpirationSettingsComponent {
    constructor() {
        this.saveAttribute = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ExpirationSettingsComponent.prototype, "expirationAttribute", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ExpirationSettingsComponent.prototype, "saveAttribute", void 0);
ExpirationSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expiration-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./expiration-settings.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/expiration-settings/expiration-settings.component.html")).default,
        animations: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__["openClose"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./expiration-settings.component.scss */ "./src/app/vos/components/expiration-settings/expiration-settings.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ExpirationSettingsComponent);



/***/ }),

/***/ "./src/app/vos/components/groups-tree/groups-tree.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/vos/components/groups-tree/groups-tree.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".group-tree-node:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n\n.group-item-content {\n  display: flex;\n  align-items: center;\n  min-height: 48px;\n  flex: 1;\n  overflow: hidden;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZlY3RvdW4vZ2l0L3BlcnVuLXdlYi1hcHBzL2FwcHMvYWRtaW4tZ3VpL3NyYy9hcHAvdm9zL2NvbXBvbmVudHMvZ3JvdXBzLXRyZWUvZ3JvdXBzLXRyZWUuY29tcG9uZW50LnNjc3MiLCJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9jb21wb25lbnRzL2dyb3Vwcy10cmVlL2dyb3Vwcy10cmVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUNBQUE7QUNBSjs7QURJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUNERiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9jb21wb25lbnRzL2dyb3Vwcy10cmVlL2dyb3Vwcy10cmVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyb3VwLXRyZWUtbm9kZSB7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjA1KTtcbiAgfVxufVxuXG4uZ3JvdXAtaXRlbS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuIiwiLmdyb3VwLXRyZWUtbm9kZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5ncm91cC1pdGVtLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/vos/components/groups-tree/groups-tree.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/vos/components/groups-tree/groups-tree.component.ts ***!
  \*********************************************************************/
/*! exports provided: GroupsTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsTreeComponent", function() { return GroupsTreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tree */ "../../node_modules/@angular/material/esm2015/tree.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "../../node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @perun-web-apps/perun/models */ "../../libs/perun/models/src/index.ts");

/* tslint:disable:member-ordering */





let GroupsTreeComponent = class GroupsTreeComponent {
    constructor() {
        this.transformer = (node, level) => {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.shortName,
                fullName: node.name,
                parentGroupId: node.parentGroupId,
                level: level,
                id: node.id,
                voId: node.voId
            };
            // tslint:disable-next-line
        };
        this.moveGroup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.expandAll = false;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["FlatTreeControl"](node => node.level, node => node.expandable);
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this.transformer, node => node.level, node => node.expandable, node => node.children);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.hasChild = (_, node) => node.expandable;
        this.getLevel = (node) => node.level;
    }
    ngOnChanges(changes) {
        this.createGroupTrees(this.groups);
        if (this.expandAll) {
            this.treeControl.expandAll();
        }
    }
    createGroupTrees(groups) {
        const idGroupMap = new Map();
        for (const group of groups) {
            idGroupMap.set(group.id, new _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_5__["TreeGroup"](group));
        }
        // groups which have parentGroupId but the parent cannot be view in subgroups view
        const pseudoRooGroups = new Set();
        idGroupMap.forEach((group, id, map) => {
            // FIXME
            const updatedParentGroup = map.get(group.parentGroupId);
            if (updatedParentGroup !== undefined) {
                updatedParentGroup.addChild(group);
                map.set(group.parentGroupId, updatedParentGroup);
            }
            if (group.parentGroupId !== null && updatedParentGroup === undefined) {
                pseudoRooGroups.add(group.id);
            }
        });
        const groupTree = [];
        idGroupMap.forEach((group) => {
            if (group.parentGroupId === null || pseudoRooGroups.has(group.id)) {
                groupTree.push(group);
            }
        });
        this.dataSource.data = groupTree;
    }
    getParentNode(node) {
        const currentLevel = this.getLevel(node);
        if (currentLevel < 1) {
            return null;
        }
        const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        for (let i = startIndex; i >= 0; i--) {
            const currentNode = this.treeControl.dataNodes[i];
            if (this.getLevel(currentNode) < currentLevel) {
                return currentNode;
            }
        }
        return null;
    }
    checkRootNodeSelection(node) {
        const nodeSelected = this.selection.isSelected(node);
        const descendants = this.treeControl.getDescendants(node);
        const descAllSelected = descendants.every(child => this.selection.isSelected(child));
        if (nodeSelected && !descAllSelected) {
            this.selection.deselect(node);
        }
    }
    checkAllParentsSelection(node) {
        let parent = this.getParentNode(node);
        while (parent) {
            this.checkRootNodeSelection(parent);
            parent = this.getParentNode(parent);
        }
    }
    leafItemSelectionToggle(node) {
        this.selection.toggle(node);
        this.checkAllParentsSelection(node);
    }
    descendantsPartiallySelected(node) {
        const descendants = this.treeControl.getDescendants(node);
        const result = descendants.some(child => this.selection.isSelected(child));
        return result && !this.selection.isSelected(node);
    }
    itemSelectionToggle(node) {
        this.selection.toggle(node);
        const descendants = this.treeControl.getDescendants(node);
        this.selection.isSelected(node)
            ? this.selection.select(...descendants)
            : this.selection.deselect(...descendants);
        // Force update for the parent
        descendants.every(child => this.selection.isSelected(child));
        this.checkAllParentsSelection(node);
    }
    onMoveGroup(group) {
        this.moveGroup.emit(group);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GroupsTreeComponent.prototype, "moveGroup", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], GroupsTreeComponent.prototype, "groups", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GroupsTreeComponent.prototype, "expandAll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GroupsTreeComponent.prototype, "selection", void 0);
GroupsTreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-groups-tree',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./groups-tree.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/groups-tree/groups-tree.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./groups-tree.component.scss */ "./src/app/vos/components/groups-tree/groups-tree.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GroupsTreeComponent);



/***/ }),

/***/ "./src/app/vos/components/member-group-list/member-group-list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/vos/components/member-group-list/member-group-list.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9jb21wb25lbnRzL21lbWJlci1ncm91cC1saXN0L21lbWJlci1ncm91cC1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/vos/components/member-group-list/member-group-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/vos/components/member-group-list/member-group-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MemberGroupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberGroupListComponent", function() { return MemberGroupListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");





let MemberGroupListComponent = class MemberGroupListComponent {
    constructor(route) {
        this.route = route;
        this.groups = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.displayedColumns = ['select', 'id', 'name'];
        this.exporting = false;
    }
    set matSort(ms) {
        this.sort = ms;
        this.setDataSource();
    }
    ngOnChanges(changes) {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.groups);
        this.setDataSource();
    }
    setDataSource() {
        if (!!this.dataSource) {
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.dataSource.filter = this.filterValue;
        }
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
    }
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
    }
    ngOnInit() {
        this.route.parent.params.subscribe(parentParams => this.memberId = parentParams['memberId']);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
};
MemberGroupListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]])
], MemberGroupListComponent.prototype, "matSort", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], MemberGroupListComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], MemberGroupListComponent.prototype, "groups", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MemberGroupListComponent.prototype, "filterValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MemberGroupListComponent.prototype, "selection", void 0);
MemberGroupListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member-group-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./member-group-list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/member-group-list/member-group-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./member-group-list.component.scss */ "./src/app/vos/components/member-group-list/member-group-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], MemberGroupListComponent);



/***/ }),

/***/ "./src/app/vos/components/members-list/members-list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/vos/components/members-list/members-list.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9jb21wb25lbnRzL21lbWJlcnMtbGlzdC9tZW1iZXJzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/vos/components/members-list/members-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/vos/components/members-list/members-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: MembersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersListComponent", function() { return MembersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "../../node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @perun-web-apps/perun/utils */ "../../libs/perun/utils/src/index.ts");
/* harmony import */ var _shared_components_dialogs_change_member_status_dialog_change_member_status_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/dialogs/change-member-status-dialog/change-member-status-dialog.component */ "./src/app/shared/components/dialogs/change-member-status-dialog/change-member-status-dialog.component.ts");








let MembersListComponent = class MembersListComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.hideColumns = [];
        this.updateTable = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.exporting = false;
        this.displayedColumns = ['checkbox', 'id', 'fullName', 'status', 'groupStatus', 'email'];
    }
    set matSort(ms) {
        this.sort = ms;
        this.setDataSource();
    }
    setDataSource() {
        this.displayedColumns = this.displayedColumns.filter(x => !this.hideColumns.includes(x));
        if (!!this.dataSource) {
            this.dataSource.sort = this.sort;
            this.dataSource.sortingDataAccessor = (richMember, property) => {
                switch (property) {
                    case 'fullName':
                        return Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["parseFullName"])(richMember.user);
                    case 'email':
                        return Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["parseEmail"])(richMember);
                    default:
                        return richMember[property];
                }
            };
            this.dataSource.paginator = this.paginator;
        }
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    ngOnChanges(changes) {
        this.displayedColumns = this.displayedColumns.filter(x => !this.hideColumns.includes(x));
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.members);
        this.setDataSource();
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
    }
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
    }
    changeStatus(event, member) {
        event.stopPropagation();
        if (member.status === 'INVALID') {
            const dialogRef = this.dialog.open(_shared_components_dialogs_change_member_status_dialog_change_member_status_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ChangeMemberStatusDialogComponent"], {
                width: '500px',
                data: { member: member }
            });
            dialogRef.afterClosed().subscribe(success => {
                if (success) {
                    this.updateTable.emit(true);
                }
            });
        }
    }
};
MembersListComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]])
], MembersListComponent.prototype, "matSort", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], MembersListComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], MembersListComponent.prototype, "members", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MembersListComponent.prototype, "searchString", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"])
], MembersListComponent.prototype, "selection", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], MembersListComponent.prototype, "hideColumns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MembersListComponent.prototype, "updateTable", void 0);
MembersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-members-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./members-list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/members-list/members-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./members-list.component.scss */ "./src/app/vos/components/members-list/members-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
], MembersListComponent);



/***/ }),

/***/ "./src/app/vos/components/notification-list/notification-list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/vos/components/notification-list/notification-list.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi1saXN0L25vdGlmaWNhdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _shared_components_dialogs_add_edit_notification_dialog_add_edit_notification_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component */ "./src/app/shared/components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");








let NotificationListComponent = class NotificationListComponent {
    constructor(registrarService, translate, notificator, dialog) {
        this.registrarService = registrarService;
        this.translate = translate;
        this.notificator = notificator;
        this.dialog = dialog;
        this.displayedColumns = ['select', 'id', 'mailType', 'appType', 'send'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set matSort(ms) {
        this.sort = ms;
        this.setDataSource();
    }
    ngOnChanges() {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.applicationMails);
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
        const dialog = this.dialog.open(_shared_components_dialogs_add_edit_notification_dialog_add_edit_notification_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AddEditNotificationDialogComponent"], {
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
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.applicationMails);
        this.setDataSource();
    }
    setDataSource() {
        if (!!this.dataSource) {
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        }
    }
};
NotificationListComponent.ctorParameters = () => [
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_7__["RegistrarService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_6__["NotificatorService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], NotificationListComponent.prototype, "applicationMails", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], NotificationListComponent.prototype, "voId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], NotificationListComponent.prototype, "groupId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NotificationListComponent.prototype, "selection", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NotificationListComponent.prototype, "selectionChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]])
], NotificationListComponent.prototype, "matSort", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], NotificationListComponent.prototype, "paginator", void 0);
NotificationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification-list.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/components/notification-list/notification-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification-list.component.scss */ "./src/app/vos/components/notification-list/notification-list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_7__["RegistrarService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_6__["NotificatorService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], NotificationListComponent);



/***/ }),

/***/ "./src/app/vos/pages/group-detail-page/group-detail-page.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/vos/pages/group-detail-page/group-detail-page.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1kZXRhaWwtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/side-menu/side-menu-item.service */ "./src/app/shared/side-menu/side-menu-item.service.ts");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");







let GroupDetailPageComponent = class GroupDetailPageComponent {
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
};
GroupDetailPageComponent.ctorParameters = () => [
    { type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["VoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuItemService"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["GroupService"] }
];
GroupDetailPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-detail-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-detail-page.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-detail-page.component.html")).default,
        animations: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_5__["fadeIn"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-detail-page.component.scss */ "./src/app/vos/pages/group-detail-page/group-detail-page.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["VoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuItemService"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["GroupService"]])
], GroupDetailPageComponent);



/***/ }),

/***/ "./src/app/vos/pages/group-detail-page/group-overview/group-overview.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/vos/pages/group-detail-page/group-overview/group-overview.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1vdmVydmlldy9ncm91cC1vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");




let GroupOverviewComponent = class GroupOverviewComponent {
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
                icon: 'user-white.svg',
                url: `/organizations/${this.group.voId}/groups/${this.groupId}/members`,
                label: 'MENU_ITEMS.GROUP.MEMBERS',
                style: 'group-btn'
            },
            {
                icon: 'group-white.svg',
                url: `/organizations/${this.group.voId}/groups/${this.groupId}/subgroups`,
                label: 'MENU_ITEMS.GROUP.SUBGROUPS',
                style: 'group-btn'
            },
            {
                icon: 'manage_facility_white.svg',
                url: `/organizations/${this.group.voId}/groups/${this.groupId}/resources`,
                label: 'MENU_ITEMS.GROUP.RESOURCES',
                style: 'group-btn'
            },
            {
                icon: 'applications-white.svg',
                url: `/organizations/${this.group.voId}/groups/${this.groupId}/applications`,
                label: 'MENU_ITEMS.GROUP.APPLICATIONS',
                style: 'group-btn'
            },
            {
                icon: 'settings2-white.svg',
                url: `/organizations/${this.group.voId}/groups/${this.groupId}/settings`,
                label: 'MENU_ITEMS.GROUP.SETTINGS',
                style: 'group-btn'
            },
        ];
    }
};
GroupOverviewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["GroupService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GroupOverviewComponent.prototype, "true", void 0);
GroupOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-overview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-overview.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-overview/group-overview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-overview.component.scss */ "./src/app/vos/pages/group-detail-page/group-overview/group-overview.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["GroupService"]])
], GroupOverviewComponent);



/***/ }),

/***/ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component.scss ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy1hcHBsaWNhdGlvbi1mb3JtL2dyb3VwLXNldHRpbmdzLWFwcGxpY2F0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: GroupSettingsApplicationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSettingsApplicationFormComponent", function() { return GroupSettingsApplicationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_components_dialogs_add_application_form_item_dialog_add_application_form_item_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/add-application-form-item-dialog/add-application-form-item-dialog.component */ "./src/app/shared/components/dialogs/add-application-form-item-dialog/add-application-form-item-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_edit_application_form_item_dialog_edit_application_form_item_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/edit-application-form-item-dialog/edit-application-form-item-dialog.component */ "./src/app/shared/components/dialogs/edit-application-form-item-dialog/edit-application-form-item-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_application_form_copy_items_dialog_application_form_copy_items_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/application-form-copy-items-dialog/application-form-copy-items-dialog.component */ "./src/app/shared/components/dialogs/application-form-copy-items-dialog/application-form-copy-items-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_update_application_form_dialog_update_application_form_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/update-application-form-dialog/update-application-form-dialog.component */ "./src/app/shared/components/dialogs/update-application-form-dialog/update-application-form-dialog.component.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/services/api/api-request-configuration.service */ "./src/app/core/services/api/api-request-configuration.service.ts");












let GroupSettingsApplicationFormComponent = class GroupSettingsApplicationFormComponent {
    constructor(registrarService, route, dialog, notificator, translate, apiRequest, router) {
        this.registrarService = registrarService;
        this.route = route;
        this.dialog = dialog;
        this.notificator = notificator;
        this.translate = translate;
        this.apiRequest = apiRequest;
        this.router = router;
        this.loading = false;
        this.applicationFormItems = [];
        this.noApplicationForm = false;
    }
    ngOnInit() {
        this.loading = true;
        this.route.parent.parent.params.subscribe(params => {
            this.voId = params['voId'];
            this.groupId = params['groupId'];
            // FIXME this might not work in case of some race condition (other request finishes sooner)
            this.apiRequest.dontHandleErrorForNext();
            this.registrarService.getApplicationFormForGroup(this.groupId, false).subscribe(form => {
                this.applicationForm = form;
                this.registrarService.getFormItemsForGroup(this.groupId).subscribe(formItems => {
                    this.applicationFormItems = formItems;
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
        const dialog = this.dialog.open(_shared_components_dialogs_add_application_form_item_dialog_add_application_form_item_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddApplicationFormItemDialogComponent"], {
            width: '500px',
            data: { voId: this.voId, groupId: this.groupId, applicationFormItems: this.applicationFormItems }
        });
        dialog.afterClosed().subscribe(success => {
            if (success) {
                this.registrarService.getFormItemsForGroup(this.groupId).subscribe(formItems => {
                    this.applicationFormItems = formItems;
                    const editDialog = this.dialog.open(_shared_components_dialogs_edit_application_form_item_dialog_edit_application_form_item_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditApplicationFormItemDialogComponent"], {
                        width: '600px',
                        height: '600px',
                        data: { voId: this.voId,
                            groupId: this.groupId,
                            applicationFormItem: formItems[success.ordnum],
                            applicationFormItems: this.applicationFormItems }
                    });
                    editDialog.afterClosed().subscribe(() => {
                        this.updateFormItems();
                    });
                });
            }
        });
    }
    copy() {
        const dialog = this.dialog.open(_shared_components_dialogs_application_form_copy_items_dialog_application_form_copy_items_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ApplicationFormCopyItemsDialogComponent"], {
            width: '500px',
            data: { voId: this.voId, groupId: this.groupId }
        });
        dialog.afterClosed().subscribe(copyFrom => {
            if (copyFrom) {
                this.updateFormItems();
            }
        });
    }
    settings() {
        const dialog = this.dialog.open(_shared_components_dialogs_update_application_form_dialog_update_application_form_dialog_component__WEBPACK_IMPORTED_MODULE_9__["UpdateApplicationFormDialogComponent"], {
            width: '400px',
            data: { applicationForm: this.applicationForm }
        });
        dialog.afterClosed().subscribe(newForm => {
            if (newForm) {
                this.translate.get('GROUP_DETAIL.SETTINGS.APPLICATION_FORM.CHANGE_SETTINGS_SUCCESS').subscribe(successMessage => {
                    this.notificator.showSuccess(successMessage);
                });
                this.applicationForm = newForm;
            }
        });
    }
    preview() {
        this.router.navigate(['/organizations', this.voId, 'groups', this.groupId, 'settings', 'applicationForm', 'preview']);
    }
    updateFormItems() {
        this.loading = true;
        this.registrarService.getFormItemsForGroup(this.groupId).subscribe(formItems => {
            this.applicationFormItems = formItems;
            this.loading = false;
        });
    }
    changeItems(applicationFormItemsChange) {
        this.applicationFormItems = applicationFormItemsChange;
    }
    createEmptyApplicationForm() {
        this.registrarService.createApplicationForm(this.groupId).subscribe(() => {
            this.noApplicationForm = false;
            this.ngOnInit();
        });
    }
};
GroupSettingsApplicationFormComponent.ctorParameters = () => [
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_10__["RegistrarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_4__["NotificatorService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_11__["ApiRequestConfigurationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GroupSettingsApplicationFormComponent.prototype, "true", void 0);
GroupSettingsApplicationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-settings-application-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-settings-application-form.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-settings-application-form.component.scss */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_10__["RegistrarService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_4__["NotificatorService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_11__["ApiRequestConfigurationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], GroupSettingsApplicationFormComponent);



/***/ }),

/***/ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy1hdHRyaWJ1dGVzL2dyb3VwLXNldHRpbmdzLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/attributes-list/attributes-list.component */ "./src/app/shared/components/attributes-list/attributes-list.component.ts");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component */ "./src/app/shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component */ "./src/app/shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @perun-web-apps/perun/utils */ "../../libs/perun/utils/src/index.ts");












let GroupSettingsAttributesComponent = class GroupSettingsAttributesComponent {
    constructor(route, attributesService, notificator, dialog, translate) {
        this.route = route;
        this.attributesService = attributesService;
        this.notificator = notificator;
        this.dialog = dialog;
        this.translate = translate;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
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
        const dialogRef = this.dialog.open(_shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CreateAttributeDialogComponent"], {
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
        this.attributesService.setAttributes(this.groupId, 'group', this.selection.selected).subscribe(() => {
            this.attributesService.getAllAttributes(this.groupId, 'group').subscribe(attributes => {
                this.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_11__["filterCoreAttributes"])(attributes);
                this.notificator.showSuccess(this.saveSuccessMessage);
                this.selection.clear();
            });
        });
    }
    onDelete() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DeleteAttributeDialogComponent"], {
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
        this.attributesService.getAllAttributes(this.groupId, 'group').subscribe(attributes => {
            this.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_11__["filterCoreAttributes"])(attributes);
            this.selection.clear();
            this.loading = false;
        });
    }
    applyFilter(filterValue) {
        this.filterValue = filterValue;
    }
};
GroupSettingsAttributesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_10__["AttributesService"] },
    { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_5__["NotificatorService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GroupSettingsAttributesComponent.prototype, "true", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('list', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_4__["AttributesListComponent"])
], GroupSettingsAttributesComponent.prototype, "list", void 0);
GroupSettingsAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-settings-attributes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-settings-attributes.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-settings-attributes.component.scss */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_10__["AttributesService"],
        _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_5__["NotificatorService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
], GroupSettingsAttributesComponent);



/***/ }),

/***/ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy1leHBpcmF0aW9uL2dyb3VwLXNldHRpbmdzLWV4cGlyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_urns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @perun-web-apps/perun/urns */ "../../libs/perun/urns/src/index.ts");
/* harmony import */ var _core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/api/api-request-configuration.service */ "./src/app/core/services/api/api-request-configuration.service.ts");








let GroupSettingsExpirationComponent = class GroupSettingsExpirationComponent {
    constructor(attributesService, route, translate, notificator, apiRequest) {
        this.attributesService = attributesService;
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
        this.attributesService.getAttribute(this.groupId, 'group', _perun_web_apps_perun_urns__WEBPACK_IMPORTED_MODULE_6__["Urns"].GROUP_DEF_EXPIRATION_RULES).subscribe(attr => {
            this.expirationAttribute = attr;
        });
    }
    saveExpirationAttribute(attribute) {
        // FIXME this might not work in case of some race condition (other request finishes sooner)
        this.apiRequest.dontHandleErrorForNext();
        this.attributesService.setAttribute(this.groupId, 'group', attribute, false).subscribe(() => {
            this.loadSettings();
            this.notificator.showSuccess(this.successMessage);
        }, error => this.notificator.showRPCError(error, this.errorMessage));
    }
};
GroupSettingsExpirationComponent.ctorParameters = () => [
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_5__["AttributesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_4__["NotificatorService"] },
    { type: _core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ApiRequestConfigurationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GroupSettingsExpirationComponent.prototype, "true", void 0);
GroupSettingsExpirationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-settings-expiration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-settings-expiration.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-settings-expiration.component.scss */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_5__["AttributesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_4__["NotificatorService"],
        _core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_7__["ApiRequestConfigurationService"]])
], GroupSettingsExpirationComponent);



/***/ }),

/***/ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy1tYW5hZ2Vycy9ncm91cC1zZXR0aW5ncy1tYW5hZ2Vycy5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @perun-web-apps/perun/models */ "../../libs/perun/models/src/index.ts");





let GroupSettingsManagersComponent = class GroupSettingsManagersComponent {
    constructor(groupService, route) {
        this.groupService = groupService;
        this.route = route;
        this.availableRoles = [_perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_4__["Role"].GROUPADMIN];
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
};
GroupSettingsManagersComponent.ctorParameters = () => [
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["GroupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GroupSettingsManagersComponent.prototype, "true", void 0);
GroupSettingsManagersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-settings-managers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-settings-managers.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-settings-managers.component.scss */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["GroupService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], GroupSettingsManagersComponent);



/***/ }),

/***/ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component.scss ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy1ub3RpZmljYXRpb25zL2dyb3VwLXNldHRpbmdzLW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _shared_components_dialogs_add_edit_notification_dialog_add_edit_notification_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component */ "./src/app/shared/components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_delete_notification_dialog_delete_notification_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/delete-notification-dialog/delete-notification-dialog.component */ "./src/app/shared/components/dialogs/delete-notification-dialog/delete-notification-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_notifications_copy_mails_dialog_notifications_copy_mails_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/notifications-copy-mails-dialog/notifications-copy-mails-dialog.component */ "./src/app/shared/components/dialogs/notifications-copy-mails-dialog/notifications-copy-mails-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_edit_email_footer_dialog_edit_email_footer_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/edit-email-footer-dialog/edit-email-footer-dialog.component */ "./src/app/shared/components/dialogs/edit-email-footer-dialog/edit-email-footer-dialog.component.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @perun-web-apps/perun/models */ "../../libs/perun/models/src/index.ts");
/* harmony import */ var _core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/services/api/api-request-configuration.service */ "./src/app/core/services/api/api-request-configuration.service.ts");














let GroupSettingsNotificationsComponent = class GroupSettingsNotificationsComponent {
    constructor(route, registrarService, translate, dialog, apiRequest, notificator) {
        this.route = route;
        this.registrarService = registrarService;
        this.translate = translate;
        this.dialog = dialog;
        this.apiRequest = apiRequest;
        this.notificator = notificator;
        this.loading = false;
        this.applicationMails = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        this.noApplicationForm = false;
    }
    ngOnInit() {
        this.loading = true;
        this.route.parent.parent.params.subscribe(params => {
            this.voId = params['voId'];
            this.groupId = params['groupId'];
            // FIXME this might not work in case of some race condition (other request finishes sooner)
            this.apiRequest.dontHandleErrorForNext();
            this.registrarService.getApplicationFormForGroup(this.groupId, false).subscribe(form => {
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
        const applicationMail = new _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_12__["ApplicationMail"]();
        applicationMail.formId = this.applicationForm.id;
        const dialog = this.dialog.open(_shared_components_dialogs_add_edit_notification_dialog_add_edit_notification_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AddEditNotificationDialogComponent"], {
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
        const dialog = this.dialog.open(_shared_components_dialogs_delete_notification_dialog_delete_notification_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteNotificationDialogComponent"], {
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
        const dialog = this.dialog.open(_shared_components_dialogs_notifications_copy_mails_dialog_notifications_copy_mails_dialog_component__WEBPACK_IMPORTED_MODULE_9__["NotificationsCopyMailsDialogComponent"], {
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
        this.dialog.open(_shared_components_dialogs_edit_email_footer_dialog_edit_email_footer_dialog_component__WEBPACK_IMPORTED_MODULE_10__["EditEmailFooterDialogComponent"], {
            width: '500px',
            data: { voId: this.voId, groupId: this.groupId }
        });
    }
    changeSelection(selection) {
        this.selection = selection;
    }
    createEmptyApplicationForm() {
        this.registrarService.createApplicationForm(this.groupId).subscribe(() => {
            this.noApplicationForm = false;
            this.ngOnInit();
        });
    }
};
GroupSettingsNotificationsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_11__["RegistrarService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_13__["ApiRequestConfigurationService"] },
    { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_5__["NotificatorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GroupSettingsNotificationsComponent.prototype, "true", void 0);
GroupSettingsNotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-settings-notifications',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-settings-notifications.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-settings-notifications.component.scss */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_11__["RegistrarService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_13__["ApiRequestConfigurationService"],
        _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_5__["NotificatorService"]])
], GroupSettingsNotificationsComponent);



/***/ }),

/***/ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy1vdmVydmlldy9ncm91cC1zZXR0aW5ncy1vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");





let GroupSettingsOverviewComponent = class GroupSettingsOverviewComponent {
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
                icon: 'attributes-white.svg',
                url: `/organizations/${this.vo.id}/groups/${this.group.id}/settings/attributes`,
                label: 'MENU_ITEMS.GROUP.ATTRIBUTES',
                style: 'group-btn'
            },
            {
                icon: 'group-white.svg',
                url: `/organizations/${this.vo.id}/groups/${this.group.id}/settings/expiration`,
                label: 'MENU_ITEMS.GROUP.EXPIRATION',
                style: 'group-btn'
            },
            {
                icon: 'manager-white.svg',
                url: `/organizations/${this.vo.id}/groups/${this.group.id}/settings/managers`,
                label: 'MENU_ITEMS.GROUP.MANAGERS',
                style: 'group-btn'
            },
            {
                icon: 'application_form-white.svg',
                url: `/organizations/${this.vo.id}/groups/${this.group.id}/settings/applicationForm`,
                label: 'MENU_ITEMS.GROUP.APPLICATION_FORM',
                style: 'group-btn'
            },
            {
                icon: 'notification-white.svg',
                url: `/organizations/${this.vo.id}/groups/${this.group.id}/settings/notifications`,
                label: 'MENU_ITEMS.GROUP.NOTIFICATIONS',
                style: 'group-btn'
            }
        ];
    }
};
GroupSettingsOverviewComponent.ctorParameters = () => [
    { type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["VoService"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["GroupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GroupSettingsOverviewComponent.prototype, "true", void 0);
GroupSettingsOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-settings-overview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-settings-overview.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-settings-overview.component.scss */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["VoService"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["GroupService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], GroupSettingsOverviewComponent);



/***/ }),

/***/ "./src/app/vos/pages/group-detail-page/group-settings/group-settings.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");



let GroupSettingsComponent = class GroupSettingsComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GroupSettingsComponent.prototype, "true", void 0);
GroupSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-settings.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/group-detail-page/group-settings/group-settings.component.html")).default,
        animations: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-settings.component.scss */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GroupSettingsComponent);



/***/ }),

/***/ "./src/app/vos/pages/member-detail-page/member-detail-page.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/vos/pages/member-detail-page/member-detail-page.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9tZW1iZXItZGV0YWlsLXBhZ2UvbWVtYmVyLWRldGFpbC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/side-menu/side-menu-item.service */ "./src/app/shared/side-menu/side-menu-item.service.ts");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");








let MemberDetailPageComponent = class MemberDetailPageComponent {
    constructor(sideMenuItemService, attributeService, translate, sideMenuService, membersService, voService, route) {
        this.sideMenuItemService = sideMenuItemService;
        this.attributeService = attributeService;
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
};
MemberDetailPageComponent.ctorParameters = () => [
    { type: _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuItemService"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_7__["AttributesService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuService"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_7__["MembersService"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_7__["VoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
MemberDetailPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member-detail-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./member-detail-page.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/member-detail-page/member-detail-page.component.html")).default,
        animations: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_6__["fadeIn"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./member-detail-page.component.scss */ "./src/app/vos/pages/member-detail-page/member-detail-page.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuItemService"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_7__["AttributesService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuService"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_7__["MembersService"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_7__["VoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], MemberDetailPageComponent);



/***/ }),

/***/ "./src/app/vos/pages/member-detail-page/member-overview/member-overview.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/vos/pages/member-detail-page/member-overview/member-overview.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9tZW1iZXItZGV0YWlsLXBhZ2UvbWVtYmVyLW92ZXJ2aWV3L21lbWJlci1vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_urns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @perun-web-apps/perun/urns */ "../../libs/perun/urns/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @perun-web-apps/perun/utils */ "../../libs/perun/utils/src/index.ts");







let MemberOverviewComponent = class MemberOverviewComponent {
    constructor(attributeService, membersService, translate, route) {
        this.attributeService = attributeService;
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
                this.fullName = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["parseFullName"])(this.member.user);
                this.statusIcon = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["parseStatusIcon"])(this.member);
                this.statusIconColor = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["parseStatusColor"])(this.member);
                this.initNavItems();
                this.attributeService.getAttribute(this.member.id, 'member', _perun_web_apps_perun_urns__WEBPACK_IMPORTED_MODULE_5__["Urns"].MEMBER_DEF_EXPIRATION).subscribe(attr => {
                    this.expiration = attr.value === null ? this.translate.instant('MEMBER_DETAIL.OVERVIEW.NEVER_EXPIRES') : attr.value;
                });
            });
        });
    }
    initNavItems() {
        this.navItems = [
            {
                icon: 'group-white.svg',
                url: `/organizations/${this.member.voId}/members/${this.member.id}/groups`,
                label: 'MENU_ITEMS.MEMBER.GROUPS',
                style: 'member-btn'
            },
            {
                icon: 'settings2-white.svg',
                url: `/organizations/${this.member.voId}/members/${this.member.id}/settings`,
                label: 'MENU_ITEMS.MEMBER.SETTINGS',
                style: 'member-btn'
            }
        ];
    }
};
MemberOverviewComponent.ctorParameters = () => [
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["AttributesService"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["MembersService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MemberOverviewComponent.prototype, "true", void 0);
MemberOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member-overview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./member-overview.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/member-detail-page/member-overview/member-overview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./member-overview.component.scss */ "./src/app/vos/pages/member-detail-page/member-overview/member-overview.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["AttributesService"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["MembersService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], MemberOverviewComponent);



/***/ }),

/***/ "./src/app/vos/pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/vos/pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component.scss ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9tZW1iZXItZGV0YWlsLXBhZ2UvbWVtYmVyLXNldHRpbmdzL21lbWJlci1zZXR0aW5ncy1hdHRyaWJ1dGVzL21lbWJlci1zZXR0aW5ncy1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/attributes-list/attributes-list.component */ "./src/app/shared/components/attributes-list/attributes-list.component.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component */ "./src/app/shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component */ "./src/app/shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @perun-web-apps/perun/utils */ "../../libs/perun/utils/src/index.ts");












let MemberSettingsAttributesComponent = class MemberSettingsAttributesComponent {
    constructor(route, attributesService, notificator, dialog, translate) {
        this.route = route;
        this.attributesService = attributesService;
        this.notificator = notificator;
        this.dialog = dialog;
        this.translate = translate;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](true, []);
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
        const dialogRef = this.dialog.open(_shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CreateAttributeDialogComponent"], {
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
        this.attributesService.setAttributes(this.memberId, 'member', this.selection.selected).subscribe(() => {
            this.attributesService.getAllAttributes(this.memberId, 'member').subscribe(attributes => {
                this.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_11__["filterCoreAttributes"])(attributes);
                this.notificator.showSuccess(this.saveSuccessMessage);
                this.selection.clear();
            });
        });
    }
    onDelete() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DeleteAttributeDialogComponent"], {
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
        this.attributesService.getAllAttributes(this.memberId, 'member').subscribe(attributes => {
            this.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_11__["filterCoreAttributes"])(attributes);
            this.selection.clear();
            this.loading = false;
        });
    }
    applyFilter(filterValue) {
        this.filterValue = filterValue;
    }
};
MemberSettingsAttributesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_10__["AttributesService"] },
    { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MemberSettingsAttributesComponent.prototype, "true", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('list', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_6__["AttributesListComponent"])
], MemberSettingsAttributesComponent.prototype, "list", void 0);
MemberSettingsAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member-settings-attributes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./member-settings-attributes.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./member-settings-attributes.component.scss */ "./src/app/vos/pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_10__["AttributesService"],
        _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
], MemberSettingsAttributesComponent);



/***/ }),

/***/ "./src/app/vos/pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/vos/pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9tZW1iZXItZGV0YWlsLXBhZ2UvbWVtYmVyLXNldHRpbmdzL21lbWJlci1zZXR0aW5ncy1vdmVydmlldy9tZW1iZXItc2V0dGluZ3Mtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");





let MemberSettingsOverviewComponent = class MemberSettingsOverviewComponent {
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
                icon: 'attributes-white.svg',
                url: `/organizations/${this.vo.id}/members/${this.member.id}/settings/attributes`,
                label: 'MENU_ITEMS.MEMBER.ATTRIBUTES',
                style: 'member-btn'
            }
        ];
    }
};
MemberSettingsOverviewComponent.ctorParameters = () => [
    { type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["VoService"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["MembersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MemberSettingsOverviewComponent.prototype, "true", void 0);
MemberSettingsOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member-settings-overview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./member-settings-overview.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./member-settings-overview.component.scss */ "./src/app/vos/pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["VoService"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["MembersService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], MemberSettingsOverviewComponent);



/***/ }),

/***/ "./src/app/vos/pages/member-detail-page/member-settings/member-settings.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/vos/pages/member-detail-page/member-settings/member-settings.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9tZW1iZXItZGV0YWlsLXBhZ2UvbWVtYmVyLXNldHRpbmdzL21lbWJlci1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");



let MemberSettingsComponent = class MemberSettingsComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MemberSettingsComponent.prototype, "true", void 0);
MemberSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-member-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./member-settings.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/member-detail-page/member-settings/member-settings.component.html")).default,
        animations: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./member-settings.component.scss */ "./src/app/vos/pages/member-detail-page/member-settings/member-settings.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MemberSettingsComponent);



/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-detail-page.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-detail-page.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1kZXRhaWwtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/side-menu/side-menu-item.service */ "./src/app/shared/side-menu/side-menu-item.service.ts");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @perun-web-apps/perun/utils */ "../../libs/perun/utils/src/index.ts");








let VoDetailPageComponent = class VoDetailPageComponent {
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
                Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_7__["addRecentlyVisited"])('vos', this.vo);
            });
        });
    }
};
VoDetailPageComponent.ctorParameters = () => [
    { type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["VoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuItemService"] }
];
VoDetailPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vo-detail-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vo-detail-page.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-detail-page.component.html")).default,
        animations: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_5__["fadeIn"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vo-detail-page.component.scss */ "./src/app/vos/pages/vo-detail-page/vo-detail-page.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["VoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuItemService"]])
], VoDetailPageComponent);



/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-overview/vo-overview.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-overview/vo-overview.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1vdmVydmlldy92by1vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_components_dialogs_invite_member_dialog_invite_member_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/dialogs/invite-member-dialog/invite-member-dialog.component */ "./src/app/shared/components/dialogs/invite-member-dialog/invite-member-dialog.component.ts");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_common_auth_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/common/auth-resolver.service */ "./src/app/core/services/common/auth-resolver.service.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");







let VoOverviewComponent = class VoOverviewComponent {
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
                icon: 'user-white.svg',
                url: `/organizations/${this.vo.id}/members`,
                label: 'MENU_ITEMS.VO.MEMBERS',
                style: 'vo-btn'
            });
        }
        // Groups
        if (this.authResolver.isThisVoAdminOrObserver(this.vo.id)
            || this.authResolver.isGroupAdminInThisVo(this.vo.id)) {
            this.navItems.push({
                icon: 'group-white.svg',
                url: `/organizations/${this.vo.id}/groups`,
                label: 'MENU_ITEMS.VO.GROUPS',
                style: 'vo-btn'
            });
        }
        // Resource management
        if (this.authResolver.isThisVoAdminOrObserver(this.vo.id)) {
            this.navItems.push({
                icon: 'manage_facility_white.svg',
                url: `/organizations/${this.vo.id}/resources`,
                label: 'MENU_ITEMS.VO.RESOURCES',
                style: 'vo-btn'
            });
        }
        // Applications
        if (this.authResolver.isThisVoAdminOrObserver(this.vo.id)) {
            this.navItems.push({
                icon: 'applications-white.svg',
                url: `/organizations/${this.vo.id}/applications`,
                label: 'MENU_ITEMS.VO.APPLICATIONS',
                style: 'vo-btn'
            });
        }
        // Settings
        if (this.authResolver.isThisVoAdminOrObserver(this.vo.id)) {
            this.navItems.push({
                icon: 'settings2-white.svg',
                url: `/organizations/${this.vo.id}/settings`,
                label: 'MENU_ITEMS.VO.SETTINGS',
                style: 'vo-btn'
            });
        }
    }
    initItems() {
        this.items = [
            {
                icon: 'invite_member-white.svg',
                label: 'VO_DETAIL.OVERVIEW.INVITE_MEMBER',
                style: 'vo-btn',
                url: `/organizations/${this.vo.id}/invite-member`,
                clickAction: function (dialog, voId) {
                    dialog.open(_shared_components_dialogs_invite_member_dialog_invite_member_dialog_component__WEBPACK_IMPORTED_MODULE_2__["InviteMemberDialogComponent"], {
                        width: '450px',
                        data: { voId: voId }
                    });
                }
            },
            {
                icon: 'service_identity-white.svg',
                label: 'VO_DETAIL.OVERVIEW.CREATE_SERVICE_MEMBER',
                style: 'vo-btn',
                url: `/organizations/${this.vo.id}/create-service-member`,
                clickAction: function (dialog, voId) {
                    return;
                }
            },
            {
                icon: 'manager-white.svg',
                label: 'VO_DETAIL.OVERVIEW.ADD_MANAGER',
                style: 'vo-btn',
                url: `/organizations/${this.vo.id}/add-manager`,
                clickAction: function (dialog, voId) {
                    return;
                }
            },
            {
                icon: 'group-white.svg',
                label: 'VO_DETAIL.OVERVIEW.CREATE_GROUP',
                style: 'vo-btn',
                url: `/organizations/${this.vo.id}/create-group`,
                clickAction: function (dialog, voId) {
                    return;
                }
            },
            {
                icon: 'create1-white.svg',
                label: 'VO_DETAIL.OVERVIEW.ADD_MEMBER',
                style: 'vo-btn',
                url: `/organizations/${this.vo.id}/invite-member`,
                clickAction: function (dialog, voId) {
                    return;
                }
            }
        ];
    }
};
VoOverviewComponent.ctorParameters = () => [
    { type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["VoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _core_services_common_auth_resolver_service__WEBPACK_IMPORTED_MODULE_5__["AuthResolverService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VoOverviewComponent.prototype, "true", void 0);
VoOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vo-overview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vo-overview.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-overview/vo-overview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vo-overview.component.scss */ "./src/app/vos/pages/vo-detail-page/vo-overview/vo-overview.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["VoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _core_services_common_auth_resolver_service__WEBPACK_IMPORTED_MODULE_5__["AuthResolverService"]])
], VoOverviewComponent);



/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1yZXNvdXJjZXMvdm8tcmVzb3VyY2VzLW92ZXJ2aWV3L3ZvLXJlc291cmNlcy1vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");





let VoResourcesOverviewComponent = class VoResourcesOverviewComponent {
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
                icon: 'resource-white.svg',
                url: `/organizations/${this.vo.id}/resources/preview`,
                label: 'MENU_ITEMS.VO.RESOURCE_PREVIEW',
                style: 'vo-btn'
            },
            {
                icon: 'resource_tags-white.svg',
                url: `/organizations/${this.vo.id}/resources/tags`,
                label: 'MENU_ITEMS.VO.RESOURCE_TAGS',
                style: 'vo-btn'
            },
            {
                icon: 'resources_state-white.svg',
                url: `/organizations/${this.vo.id}/resources/states`,
                label: 'MENU_ITEMS.VO.RESOURCE_STATES',
                style: 'vo-btn'
            }
        ];
    }
};
VoResourcesOverviewComponent.ctorParameters = () => [
    { type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["VoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VoResourcesOverviewComponent.prototype, "true", void 0);
VoResourcesOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vo-resources-overview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vo-resources-overview.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vo-resources-overview.component.scss */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["VoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], VoResourcesOverviewComponent);



/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-states/state-tab/state-tab.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-states/state-tab/state-tab.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".redBackground {\n  background-color: #FFC4C4;\n}\n\n.greenBackground {\n  background-color: #c4ffcb;\n}\n\n.headers-align .mat-expansion-panel-header-title,\n.headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.headers-align .mat-expansion-panel-header-description {\n  margin-left: 15%;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZlY3RvdW4vZ2l0L3BlcnVuLXdlYi1hcHBzL2FwcHMvYWRtaW4tZ3VpL3NyYy9hcHAvdm9zL3BhZ2VzL3ZvLWRldGFpbC1wYWdlL3ZvLXJlc291cmNlcy92by1yZXNvdXJjZXMtc3RhdGVzL3N0YXRlLXRhYi9zdGF0ZS10YWIuY29tcG9uZW50LnNjc3MiLCJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1yZXNvdXJjZXMvdm8tcmVzb3VyY2VzLXN0YXRlcy9zdGF0ZS10YWIvc3RhdGUtdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsYUFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoiYXBwcy9hZG1pbi1ndWkvc3JjL2FwcC92b3MvcGFnZXMvdm8tZGV0YWlsLXBhZ2Uvdm8tcmVzb3VyY2VzL3ZvLXJlc291cmNlcy1zdGF0ZXMvc3RhdGUtdGFiL3N0YXRlLXRhYi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWRCYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzRDNDtcbn1cblxuLmdyZWVuQmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNGZmY2I7XG59XG5cbi5oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbi5oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGZsZXgtYmFzaXM6IDA7XG59XG5cbi5oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiIsIi5yZWRCYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzRDNDtcbn1cblxuLmdyZWVuQmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNGZmY2I7XG59XG5cbi5oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbi5oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGZsZXgtYmFzaXM6IDA7XG59XG5cbi5oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-states/state-tab/state-tab.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-states/state-tab/state-tab.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: StateTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateTabComponent", function() { return StateTabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");



let StateTabComponent = class StateTabComponent {
    constructor() {
        this.propagation = [];
        this.datasources = [];
        this.displayedColumns = ['id', 'service', 'status', 'scheduled', 'started', 'ended'];
    }
    ngOnInit() {
        this.getDataSource();
    }
    getErrorCountStates(resourceStatus) {
        let counter = 0;
        for (const task of resourceStatus.taskList) {
            if (task.status === 'ERROR' || task.status === 'GENERROR' || task.status === 'SENDERROR') {
                counter++;
            }
        }
        return counter;
    }
    getDataSource() {
        for (const resourceState of this.propagation) {
            this.datasources.push(new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](resourceState.taskList));
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], StateTabComponent.prototype, "propagation", void 0);
StateTabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-state-tab',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./state-tab.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-states/state-tab/state-tab.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./state-tab.component.scss */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-states/state-tab/state-tab.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StateTabComponent);



/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1yZXNvdXJjZXMvdm8tcmVzb3VyY2VzLXRhZ3Mvdm8tcmVzb3VyY2VzLXRhZ3MuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _shared_components_dialogs_create_resource_tag_dialog_create_resource_tag_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/create-resource-tag-dialog/create-resource-tag-dialog.component */ "./src/app/shared/components/dialogs/create-resource-tag-dialog/create-resource-tag-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_delete_resource_tag_dialog_delete_resource_tag_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/delete-resource-tag-dialog/delete-resource-tag-dialog.component */ "./src/app/shared/components/dialogs/delete-resource-tag-dialog/delete-resource-tag-dialog.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");










let VoResourcesTagsComponent = class VoResourcesTagsComponent {
    constructor(route, resourceService, dialog, notificator, translator) {
        this.route = route;
        this.resourceService = resourceService;
        this.dialog = dialog;
        this.notificator = notificator;
        this.translator = translator;
        this.loading = false;
        this.resourceTag = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
    }
    ngOnInit() {
        this.route.parent.parent.params.subscribe(parentParams => {
            this.voId = parentParams['voId'];
            this.updateData();
        });
    }
    deleteTag() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_delete_resource_tag_dialog_delete_resource_tag_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteResourceTagDialogComponent"], {
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
        const dialogRef = this.dialog.open(_shared_components_dialogs_create_resource_tag_dialog_create_resource_tag_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CreateResourceTagDialogComponent"], {
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
        this.resourceService.getAllResourcesTagsForVo(this.voId).subscribe(tags => {
            this.resourceTag = tags;
            this.loading = false;
        });
    }
    applyFilter(filterValue) {
        this.filterValue = filterValue;
    }
};
VoResourcesTagsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_9__["ResourcesService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_8__["NotificatorService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VoResourcesTagsComponent.prototype, "true", void 0);
VoResourcesTagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vo-resources-tags',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vo-resources-tags.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vo-resources-tags.component.scss */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_9__["ResourcesService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_8__["NotificatorService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
], VoResourcesTagsComponent);



/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1yZXNvdXJjZXMvdm8tcmVzb3VyY2VzLmNvbXBvbmVudC5zY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");




let VoResourcesComponent = class VoResourcesComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.parent.params.subscribe(parentParams => {
            this.voId = parentParams['voId'];
        });
    }
};
VoResourcesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VoResourcesComponent.prototype, "true", void 0);
VoResourcesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vo-resources',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vo-resources.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources.component.html")).default,
        animations: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_3__["fadeIn"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vo-resources.component.scss */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], VoResourcesComponent);



/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component.scss ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy1hcHBsaWNhdGlvbi1mb3JtL3ZvLXNldHRpbmdzLWFwcGxpY2F0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: VoSettingsApplicationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoSettingsApplicationFormComponent", function() { return VoSettingsApplicationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_components_dialogs_update_application_form_dialog_update_application_form_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/update-application-form-dialog/update-application-form-dialog.component */ "./src/app/shared/components/dialogs/update-application-form-dialog/update-application-form-dialog.component.ts");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_components_dialogs_application_form_copy_items_dialog_application_form_copy_items_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/application-form-copy-items-dialog/application-form-copy-items-dialog.component */ "./src/app/shared/components/dialogs/application-form-copy-items-dialog/application-form-copy-items-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_add_application_form_item_dialog_add_application_form_item_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/add-application-form-item-dialog/add-application-form-item-dialog.component */ "./src/app/shared/components/dialogs/add-application-form-item-dialog/add-application-form-item-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_edit_application_form_item_dialog_edit_application_form_item_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/edit-application-form-item-dialog/edit-application-form-item-dialog.component */ "./src/app/shared/components/dialogs/edit-application-form-item-dialog/edit-application-form-item-dialog.component.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");











let VoSettingsApplicationFormComponent = class VoSettingsApplicationFormComponent {
    constructor(registrarService, route, dialog, notificator, translate, router) {
        this.registrarService = registrarService;
        this.route = route;
        this.dialog = dialog;
        this.notificator = notificator;
        this.translate = translate;
        this.router = router;
        this.loading = false;
        this.applicationFormItems = [];
    }
    ngOnInit() {
        this.loading = true;
        this.route.parent.parent.params.subscribe(params => {
            const voId = params['voId'];
            this.voId = voId;
            this.registrarService.getApplicationFormForVo(voId).subscribe(form => {
                this.applicationForm = form;
                this.registrarService.getFormItemsForVo(voId).subscribe(formItems => {
                    this.applicationFormItems = formItems;
                    this.loading = false;
                });
            });
        });
    }
    add() {
        const dialog = this.dialog.open(_shared_components_dialogs_add_application_form_item_dialog_add_application_form_item_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AddApplicationFormItemDialogComponent"], {
            width: '500px',
            data: { voId: this.voId, applicationFormItems: this.applicationFormItems }
        });
        dialog.afterClosed().subscribe(success => {
            if (success) {
                this.registrarService.getFormItemsForVo(this.voId).subscribe(formItems => {
                    this.applicationFormItems = formItems;
                    const editDialog = this.dialog.open(_shared_components_dialogs_edit_application_form_item_dialog_edit_application_form_item_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EditApplicationFormItemDialogComponent"], {
                        width: '600px',
                        height: '600px',
                        data: { voId: this.voId, applicationFormItem: formItems[success.ordnum], applicationFormItems: this.applicationFormItems }
                    });
                    editDialog.afterClosed().subscribe(() => {
                        this.updateFormItems();
                    });
                });
            }
        });
    }
    copy() {
        const dialog = this.dialog.open(_shared_components_dialogs_application_form_copy_items_dialog_application_form_copy_items_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ApplicationFormCopyItemsDialogComponent"], {
            width: '500px',
            data: { voId: this.voId }
        });
        dialog.afterClosed().subscribe(copyFrom => {
            if (copyFrom) {
                this.updateFormItems();
            }
        });
    }
    settings() {
        const dialog = this.dialog.open(_shared_components_dialogs_update_application_form_dialog_update_application_form_dialog_component__WEBPACK_IMPORTED_MODULE_4__["UpdateApplicationFormDialogComponent"], {
            width: '400px',
            data: { applicationForm: this.applicationForm }
        });
        dialog.afterClosed().subscribe(newForm => {
            if (newForm) {
                this.translate.get('VO_DETAIL.SETTINGS.APPLICATION_FORM.CHANGE_SETTINGS_SUCCESS').subscribe(successMessage => {
                    this.notificator.showSuccess(successMessage);
                });
                this.applicationForm = newForm;
            }
        });
    }
    preview() {
        this.router.navigate(['/organizations', this.voId, 'settings', 'applicationForm', 'preview']);
    }
    updateFormItems() {
        this.loading = true;
        this.registrarService.getFormItemsForVo(this.voId).subscribe(formItems => {
            this.applicationFormItems = formItems;
            this.loading = false;
        });
    }
    changeItems(applicationFormItemsChange) {
        this.applicationFormItems = applicationFormItemsChange;
    }
};
VoSettingsApplicationFormComponent.ctorParameters = () => [
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_10__["RegistrarService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_5__["NotificatorService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VoSettingsApplicationFormComponent.prototype, "true", void 0);
VoSettingsApplicationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vo-settings-application-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vo-settings-application-form.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vo-settings-application-form.component.scss */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_10__["RegistrarService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_5__["NotificatorService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], VoSettingsApplicationFormComponent);



/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy1hdHRyaWJ1dGVzL3ZvLXNldHRpbmdzLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component */ "./src/app/shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component */ "./src/app/shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/attributes-list/attributes-list.component */ "./src/app/shared/components/attributes-list/attributes-list.component.ts");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @perun-web-apps/perun/utils */ "../../libs/perun/utils/src/index.ts");













let VoSettingsAttributesComponent = class VoSettingsAttributesComponent {
    constructor(attributesService, sideMenuService, voService, route, dialog, notificator, translate) {
        this.attributesService = attributesService;
        this.sideMenuService = sideMenuService;
        this.voService = voService;
        this.route = route;
        this.dialog = dialog;
        this.notificator = notificator;
        this.translate = translate;
        this.attributes = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
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
        const dialogRef = this.dialog.open(_shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DeleteAttributeDialogComponent"], {
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
        const dialogRef = this.dialog.open(_shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CreateAttributeDialogComponent"], {
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
        this.attributesService.setAttributes(this.voId, 'vo', this.selection.selected).subscribe(() => {
            this.attributesService.getAllAttributes(this.voId, 'vo').subscribe(attributes => {
                this.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_12__["filterCoreAttributes"])(attributes);
                this.notificator.showSuccess(this.saveSuccessMessage);
                this.selection.clear();
            });
        });
    }
    refreshTable() {
        this.loading = true;
        this.attributesService.getAllAttributes(this.voId, 'vo').subscribe(attributes => {
            this.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_12__["filterCoreAttributes"])(attributes);
            this.selection.clear();
            this.loading = false;
        });
    }
    applyFilter(filterValue) {
        this.filterValue = filterValue;
    }
};
VoSettingsAttributesComponent.ctorParameters = () => [
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_11__["AttributesService"] },
    { type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_11__["VoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_9__["NotificatorService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VoSettingsAttributesComponent.prototype, "true", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])('list', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_8__["AttributesListComponent"])
], VoSettingsAttributesComponent.prototype, "list", void 0);
VoSettingsAttributesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-vo-settings-attributes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vo-settings-attributes.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vo-settings-attributes.component.scss */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_11__["AttributesService"],
        _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_11__["VoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_9__["NotificatorService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]])
], VoSettingsAttributesComponent);



/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy1leHBpcmF0aW9uL3ZvLXNldHRpbmdzLWV4cGlyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_urns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @perun-web-apps/perun/urns */ "../../libs/perun/urns/src/index.ts");
/* harmony import */ var _core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/api/api-request-configuration.service */ "./src/app/core/services/api/api-request-configuration.service.ts");









let VoSettingsExpirationComponent = class VoSettingsExpirationComponent {
    constructor(attributesService, route, translate, notificator, apiRequest) {
        this.attributesService = attributesService;
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
        this.attributesService.getAttribute(this.voId, 'vo', _perun_web_apps_perun_urns__WEBPACK_IMPORTED_MODULE_7__["Urns"].VO_DEF_EXPIRATION_RULES).subscribe(attr => {
            this.expirationAttribute = attr;
        });
    }
    saveExpirationAttribute(attribute) {
        // FIXME this might not work in case of some race condition (other request finishes sooner)
        this.apiRequest.dontHandleErrorForNext();
        this.attributesService.setAttribute(this.voId, 'vo', attribute, false).subscribe(() => {
            this.loadSettings();
            this.notificator.showSuccess(this.successMessage);
        }, error => {
            console.log(error);
            this.notificator.showRPCError(error, this.errorMessage);
        });
    }
};
VoSettingsExpirationComponent.ctorParameters = () => [
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["AttributesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_4__["NotificatorService"] },
    { type: _core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_8__["ApiRequestConfigurationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VoSettingsExpirationComponent.prototype, "true", void 0);
VoSettingsExpirationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vo-settings-expiration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vo-settings-expiration.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component.html")).default,
        animations: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_2__["openClose"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vo-settings-expiration.component.scss */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["AttributesService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_4__["NotificatorService"],
        _core_services_api_api_request_configuration_service__WEBPACK_IMPORTED_MODULE_8__["ApiRequestConfigurationService"]])
], VoSettingsExpirationComponent);



/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy1leHRzb3VyY2VzL3ZvLXNldHRpbmdzLWV4dHNvdXJjZXMuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let VoSettingsExtsourcesComponent = class VoSettingsExtsourcesComponent {
    constructor() { }
    ngOnInit() {
    }
};
VoSettingsExtsourcesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vo-settings-extsources',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vo-settings-extsources.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vo-settings-extsources.component.scss */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VoSettingsExtsourcesComponent);



/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy1tYW5hZ2Vycy92by1zZXR0aW5ncy1tYW5hZ2Vycy5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @perun-web-apps/perun/models */ "../../libs/perun/models/src/index.ts");






let VoSettingsManagersComponent = class VoSettingsManagersComponent {
    constructor(dialog, voService, route) {
        this.dialog = dialog;
        this.voService = voService;
        this.route = route;
        this.availableRoles = [_perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_5__["Role"].VOADMIN, _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_5__["Role"].VOOBSERVER, _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_5__["Role"].TOPGROUPCREATOR];
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
};
VoSettingsManagersComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["VoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VoSettingsManagersComponent.prototype, "true", void 0);
VoSettingsManagersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vo-settings-managers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vo-settings-managers.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vo-settings-managers.component.scss */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["VoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], VoSettingsManagersComponent);



/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy1ub3RpZmljYXRpb25zL3ZvLXNldHRpbmdzLW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _shared_components_dialogs_delete_notification_dialog_delete_notification_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/delete-notification-dialog/delete-notification-dialog.component */ "./src/app/shared/components/dialogs/delete-notification-dialog/delete-notification-dialog.component.ts");
/* harmony import */ var _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/services/common/notificator.service */ "./src/app/core/services/common/notificator.service.ts");
/* harmony import */ var _shared_components_dialogs_edit_email_footer_dialog_edit_email_footer_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/edit-email-footer-dialog/edit-email-footer-dialog.component */ "./src/app/shared/components/dialogs/edit-email-footer-dialog/edit-email-footer-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_add_edit_notification_dialog_add_edit_notification_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component */ "./src/app/shared/components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component.ts");
/* harmony import */ var _shared_components_dialogs_notifications_copy_mails_dialog_notifications_copy_mails_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/dialogs/notifications-copy-mails-dialog/notifications-copy-mails-dialog.component */ "./src/app/shared/components/dialogs/notifications-copy-mails-dialog/notifications-copy-mails-dialog.component.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @perun-web-apps/perun/models */ "../../libs/perun/models/src/index.ts");













let VoSettingsNotificationsComponent = class VoSettingsNotificationsComponent {
    constructor(route, registrarService, translate, dialog, notificator) {
        this.route = route;
        this.registrarService = registrarService;
        this.translate = translate;
        this.dialog = dialog;
        this.notificator = notificator;
        this.loading = false;
        this.applicationMails = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
    }
    ngOnInit() {
        this.loading = true;
        this.route.parent.parent.params.subscribe(params => {
            this.voId = params['voId'];
            this.registrarService.getApplicationFormForVo(this.voId).subscribe(form => {
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
        const dialog = this.dialog.open(_shared_components_dialogs_add_edit_notification_dialog_add_edit_notification_dialog_component__WEBPACK_IMPORTED_MODULE_9__["AddEditNotificationDialogComponent"], {
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
        const dialog = this.dialog.open(_shared_components_dialogs_delete_notification_dialog_delete_notification_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteNotificationDialogComponent"], {
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
        const dialog = this.dialog.open(_shared_components_dialogs_notifications_copy_mails_dialog_notifications_copy_mails_dialog_component__WEBPACK_IMPORTED_MODULE_10__["NotificationsCopyMailsDialogComponent"], {
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
        this.dialog.open(_shared_components_dialogs_edit_email_footer_dialog_edit_email_footer_dialog_component__WEBPACK_IMPORTED_MODULE_8__["EditEmailFooterDialogComponent"], {
            width: '500px',
            data: { voId: this.voId }
        });
    }
    changeSelection(selection) {
        this.selection = selection;
    }
};
VoSettingsNotificationsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_11__["RegistrarService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_7__["NotificatorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VoSettingsNotificationsComponent.prototype, "true", void 0);
VoSettingsNotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vo-settings-notifications',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vo-settings-notifications.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vo-settings-notifications.component.scss */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_11__["RegistrarService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _core_services_common_notificator_service__WEBPACK_IMPORTED_MODULE_7__["NotificatorService"]])
], VoSettingsNotificationsComponent);



/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy1vdmVydmlldy92by1zZXR0aW5ncy1vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");





let VoSettingsOverviewComponent = class VoSettingsOverviewComponent {
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
                icon: 'attributes-white.svg',
                url: `/organizations/${this.vo.id}/settings/attributes`,
                label: 'MENU_ITEMS.VO.ATTRIBUTES',
                style: 'vo-btn'
            },
            {
                icon: 'group-white.svg',
                url: `/organizations/${this.vo.id}/settings/expiration`,
                label: 'MENU_ITEMS.VO.EXPIRATION',
                style: 'vo-btn'
            },
            {
                icon: 'manager-white.svg',
                url: `/organizations/${this.vo.id}/settings/managers`,
                label: 'MENU_ITEMS.VO.MANAGERS',
                style: 'vo-btn'
            },
            {
                icon: 'application_form-white.svg',
                url: `/organizations/${this.vo.id}/settings/applicationForm`,
                label: 'MENU_ITEMS.VO.APPLICATION_FORM',
                style: 'vo-btn'
            },
            {
                icon: 'notification-white.svg',
                url: `/organizations/${this.vo.id}/settings/notifications`,
                label: 'MENU_ITEMS.VO.NOTIFICATIONS',
                style: 'vo-btn'
            },
            {
                icon: 'external_sources-white.svg',
                url: `/organizations/${this.vo.id}/settings/extsources`,
                label: 'MENU_ITEMS.VO.EXTSOURCES',
                style: 'vo-btn'
            }
        ];
    }
};
VoSettingsOverviewComponent.ctorParameters = () => [
    { type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["VoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VoSettingsOverviewComponent.prototype, "true", void 0);
VoSettingsOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vo-settings-overview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vo-settings-overview.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vo-settings-overview.component.scss */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["VoService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], VoSettingsOverviewComponent);



/***/ }),

/***/ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/animations/Animations */ "./src/app/shared/animations/Animations.ts");




let VoSettingsComponent = class VoSettingsComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.backButtonRegex = new RegExp('/organizations/\\d+/settings/\\w+$');
        this.backButtonDisplayed = false;
        this.currentUrl = router.url;
        this.backButtonDisplayed = this.backButtonRegex.test(this.currentUrl);
        router.events.subscribe((_) => {
            if (_ instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
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
};
VoSettingsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.router-component'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], VoSettingsComponent.prototype, "true", void 0);
VoSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vo-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vo-settings.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings.component.html")).default,
        animations: [
            _shared_animations_Animations__WEBPACK_IMPORTED_MODULE_3__["fadeIn"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vo-settings.component.scss */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], VoSettingsComponent);



/***/ }),

/***/ "./src/app/vos/pages/vo-select-page/vo-select-page.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/vos/pages/vo-select-page/vo-select-page.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1zZWxlY3QtcGFnZS92by1zZWxlY3QtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/common/side-menu.service */ "./src/app/core/services/common/side-menu.service.ts");
/* harmony import */ var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @perun-web-apps/perun/services */ "../../libs/perun/services/src/index.ts");
/* harmony import */ var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @perun-web-apps/perun/utils */ "../../libs/perun/utils/src/index.ts");
/* harmony import */ var _core_services_common_auth_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/common/auth-resolver.service */ "./src/app/core/services/common/auth-resolver.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_components_dialogs_remove_vo_dialog_remove_vo_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/dialogs/remove-vo-dialog/remove-vo-dialog.component */ "./src/app/shared/components/dialogs/remove-vo-dialog/remove-vo-dialog.component.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _shared_components_dialogs_create_vo_dialog_create_vo_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/dialogs/create-vo-dialog/create-vo-dialog.component */ "./src/app/shared/components/dialogs/create-vo-dialog/create-vo-dialog.component.ts");










let VoSelectPageComponent = class VoSelectPageComponent {
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
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](false, []);
        this.isVoAdmin = this.authzService.isVoAdmin();
        this.displayedColumns = this.isVoAdmin ? ['checkbox', 'id', 'recent', 'name'] : ['id', 'recent', 'name'];
        this.sideMenuService.setAccessMenuItems([]);
        this.refreshTable();
    }
    refreshTable() {
        this.loading = true;
        this.selection.clear();
        this.voService.getVos().subscribe(vos => {
            this.vos = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_4__["getRecentlyVisited"])('vos', vos);
            this.recentIds = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_4__["getRecentlyVisitedIds"])('vos');
            this.loading = false;
        });
    }
    applyFilter(filterValue) {
        this.filterValue = filterValue;
    }
    onCreateVo() {
        const dialogRef = this.dialog.open(_shared_components_dialogs_create_vo_dialog_create_vo_dialog_component__WEBPACK_IMPORTED_MODULE_9__["CreateVoDialogComponent"], {
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
        const dialogRef = this.dialog.open(_shared_components_dialogs_remove_vo_dialog_remove_vo_dialog_component__WEBPACK_IMPORTED_MODULE_7__["RemoveVoDialogComponent"], {
            width: '600px',
            data: { theme: 'vo-theme', vos: this.selection.selected }
        });
        dialogRef.afterClosed().subscribe(isVoRemoved => {
            if (isVoRemoved) {
                this.refreshTable();
            }
        });
    }
};
VoSelectPageComponent.ctorParameters = () => [
    { type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"] },
    { type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["VoService"] },
    { type: _core_services_common_auth_resolver_service__WEBPACK_IMPORTED_MODULE_5__["AuthResolverService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }
];
VoSelectPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vo-select-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vo-select-page.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/vos/pages/vo-select-page/vo-select-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vo-select-page.component.scss */ "./src/app/vos/pages/vo-select-page/vo-select-page.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"],
        _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["VoService"],
        _core_services_common_auth_resolver_service__WEBPACK_IMPORTED_MODULE_5__["AuthResolverService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
], VoSelectPageComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_vo_select_page_vo_select_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/vo-select-page/vo-select-page.component */ "./src/app/vos/pages/vo-select-page/vo-select-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pages_group_detail_page_group_detail_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/group-detail-page/group-detail-page.component */ "./src/app/vos/pages/group-detail-page/group-detail-page.component.ts");
/* harmony import */ var _pages_member_detail_page_member_detail_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/member-detail-page/member-detail-page.component */ "./src/app/vos/pages/member-detail-page/member-detail-page.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_overview_vo_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-overview/vo-overview.component */ "./src/app/vos/pages/vo-detail-page/vo-overview/vo-overview.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_groups_vo_groups_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-groups/vo-groups.component */ "./src/app/vos/pages/vo-detail-page/vo-groups/vo-groups.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_members_vo_members_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-members/vo-members.component */ "./src/app/vos/pages/vo-detail-page/vo-members/vo-members.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_detail_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-detail-page.component */ "./src/app/vos/pages/vo-detail-page/vo-detail-page.component.ts");
/* harmony import */ var _pages_member_detail_page_member_overview_member_overview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/member-detail-page/member-overview/member-overview.component */ "./src/app/vos/pages/member-detail-page/member-overview/member-overview.component.ts");
/* harmony import */ var _pages_member_detail_page_member_groups_member_groups_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/member-detail-page/member-groups/member-groups.component */ "./src/app/vos/pages/member-detail-page/member-groups/member-groups.component.ts");
/* harmony import */ var _pages_group_detail_page_group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/group-detail-page/group-overview/group-overview.component */ "./src/app/vos/pages/group-detail-page/group-overview/group-overview.component.ts");
/* harmony import */ var _pages_group_detail_page_group_subgroups_group_subgroups_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/group-detail-page/group-subgroups/group-subgroups.component */ "./src/app/vos/pages/group-detail-page/group-subgroups/group-subgroups.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_applications_vo_applications_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-applications/vo-applications.component */ "./src/app/vos/pages/vo-detail-page/vo-applications/vo-applications.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_attributes_vo_settings_attributes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_overview_vo_settings_overview_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_expiration_vo_settings_expiration_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component.ts");
/* harmony import */ var _pages_group_detail_page_group_applications_group_applications_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/group-detail-page/group-applications/group-applications.component */ "./src/app/vos/pages/group-detail-page/group-applications/group-applications.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_managers_vo_settings_managers_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component.ts");
/* harmony import */ var _components_application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/application-detail/application-detail.component */ "./src/app/vos/components/application-detail/application-detail.component.ts");
/* harmony import */ var _pages_group_detail_page_group_members_group_members_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/group-detail-page/group-members/group-members.component */ "./src/app/vos/pages/group-detail-page/group-members/group-members.component.ts");
/* harmony import */ var _pages_group_detail_page_group_resources_group_resources_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/group-detail-page/group-resources/group-resources.component */ "./src/app/vos/pages/group-detail-page/group-resources/group-resources.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_attributes_group_settings_attributes_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_overview_group_settings_overview_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_application_form_vo_settings_application_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component.ts");
/* harmony import */ var _components_application_form_preview_application_form_preview_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/application-form-preview/application-form-preview.component */ "./src/app/vos/components/application-form-preview/application-form-preview.component.ts");
/* harmony import */ var _pages_member_detail_page_member_settings_member_settings_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/member-detail-page/member-settings/member-settings.component */ "./src/app/vos/pages/member-detail-page/member-settings/member-settings.component.ts");
/* harmony import */ var _pages_member_detail_page_member_settings_member_settings_overview_member_settings_overview_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component */ "./src/app/vos/pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component.ts");
/* harmony import */ var _pages_member_detail_page_member_settings_member_settings_attributes_member_settings_attributes_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component */ "./src/app/vos/pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_overview_vo_resources_overview_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_preview_vo_resources_preview_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources-preview/vo-resources-preview.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-preview/vo-resources-preview.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_states_vo_resources_states_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources-states/vo-resources-states.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-states/vo-resources-states.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_tags_vo_resources_tags_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_expiration_group_settings_expiration_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_managers_group_settings_managers_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_notifications_vo_settings_notifications_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_application_form_group_settings_application_form_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_notifications_group_settings_notifications_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_extsources_vo_settings_extsources_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component.ts");





























// tslint:disable-next-line:max-line-length

// tslint:disable-next-line:max-line-length













const routes = [
    {
        path: '',
        component: _pages_vo_select_page_vo_select_page_component__WEBPACK_IMPORTED_MODULE_2__["VoSelectPageComponent"]
    },
    {
        path: ':voId',
        component: _pages_vo_detail_page_vo_detail_page_component__WEBPACK_IMPORTED_MODULE_9__["VoDetailPageComponent"],
        children: [
            {
                path: '',
                component: _pages_vo_detail_page_vo_overview_vo_overview_component__WEBPACK_IMPORTED_MODULE_6__["VoOverviewComponent"],
                data: { animation: 'VoOverviewPage' }
            },
            {
                path: 'groups',
                component: _pages_vo_detail_page_vo_groups_vo_groups_component__WEBPACK_IMPORTED_MODULE_7__["VoGroupsComponent"],
                data: { animation: 'VoGroupsPage' }
            },
            {
                path: 'members',
                component: _pages_vo_detail_page_vo_members_vo_members_component__WEBPACK_IMPORTED_MODULE_8__["VoMembersComponent"],
                data: { animation: 'VoMembersPage' }
            },
            {
                path: 'resources',
                component: _pages_vo_detail_page_vo_resources_vo_resources_component__WEBPACK_IMPORTED_MODULE_14__["VoResourcesComponent"],
                children: [
                    {
                        path: '',
                        component: _pages_vo_detail_page_vo_resources_vo_resources_overview_vo_resources_overview_component__WEBPACK_IMPORTED_MODULE_33__["VoResourcesOverviewComponent"],
                        data: { animation: 'VoResourcesOverviewPage' }
                    },
                    {
                        path: 'preview',
                        component: _pages_vo_detail_page_vo_resources_vo_resources_preview_vo_resources_preview_component__WEBPACK_IMPORTED_MODULE_34__["VoResourcesPreviewComponent"],
                        data: { animation: 'VoResourcesPreviewPage' }
                    },
                    {
                        path: 'states',
                        component: _pages_vo_detail_page_vo_resources_vo_resources_states_vo_resources_states_component__WEBPACK_IMPORTED_MODULE_35__["VoResourcesStatesComponent"],
                        data: { animation: 'VoResourcesStatesPage' }
                    },
                    {
                        path: 'tags',
                        component: _pages_vo_detail_page_vo_resources_vo_resources_tags_vo_resources_tags_component__WEBPACK_IMPORTED_MODULE_36__["VoResourcesTagsComponent"],
                        data: { animation: 'VoResourcesTagsPage' }
                    }
                ]
            },
            {
                path: 'applications',
                component: _pages_vo_detail_page_vo_applications_vo_applications_component__WEBPACK_IMPORTED_MODULE_15__["VoApplicationsComponent"],
                data: { animation: 'VoApplicationsPage' }
            },
            {
                path: 'applications/:applicationId',
                component: _components_application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_22__["ApplicationDetailComponent"],
                data: { animation: 'VoApplicationDetailPage' }
            },
            {
                path: 'settings',
                component: _pages_vo_detail_page_vo_settings_vo_settings_component__WEBPACK_IMPORTED_MODULE_16__["VoSettingsComponent"],
                children: [
                    {
                        path: '',
                        component: _pages_vo_detail_page_vo_settings_vo_settings_overview_vo_settings_overview_component__WEBPACK_IMPORTED_MODULE_18__["VoSettingsOverviewComponent"],
                        data: { animation: 'VoSettingsOverviewPage' }
                    },
                    {
                        path: 'attributes',
                        component: _pages_vo_detail_page_vo_settings_vo_settings_attributes_vo_settings_attributes_component__WEBPACK_IMPORTED_MODULE_17__["VoSettingsAttributesComponent"],
                        data: { animation: 'VoSettingsAttributesPage' }
                    },
                    {
                        path: 'expiration',
                        component: _pages_vo_detail_page_vo_settings_vo_settings_expiration_vo_settings_expiration_component__WEBPACK_IMPORTED_MODULE_19__["VoSettingsExpirationComponent"],
                        data: { animation: 'VoSettingsExpirationPage' }
                    },
                    {
                        path: 'managers',
                        component: _pages_vo_detail_page_vo_settings_vo_settings_managers_vo_settings_managers_component__WEBPACK_IMPORTED_MODULE_21__["VoSettingsManagersComponent"],
                        data: { animation: 'VoSettingsManagersPage' }
                    },
                    {
                        path: 'applicationForm',
                        component: _pages_vo_detail_page_vo_settings_vo_settings_application_form_vo_settings_application_form_component__WEBPACK_IMPORTED_MODULE_28__["VoSettingsApplicationFormComponent"],
                        data: { animation: 'SettingsApplicationFormPage' }
                    },
                    {
                        path: 'applicationForm/preview',
                        component: _components_application_form_preview_application_form_preview_component__WEBPACK_IMPORTED_MODULE_29__["ApplicationFormPreviewComponent"],
                        data: { animation: 'SettingsApplicationFormPreviewPage' }
                    },
                    {
                        path: 'notifications',
                        component: _pages_vo_detail_page_vo_settings_vo_settings_notifications_vo_settings_notifications_component__WEBPACK_IMPORTED_MODULE_39__["VoSettingsNotificationsComponent"],
                        data: { animation: 'SettingsApplicationFormNotificationsPage' }
                    },
                    {
                        path: 'extsources',
                        component: _pages_vo_detail_page_vo_settings_vo_settings_extsources_vo_settings_extsources_component__WEBPACK_IMPORTED_MODULE_42__["VoSettingsExtsourcesComponent"],
                        data: { animation: 'VoSettingsExtSourcesPage' }
                    }
                ]
            }
        ]
    },
    {
        path: ':voId/members/:memberId',
        component: _pages_member_detail_page_member_detail_page_component__WEBPACK_IMPORTED_MODULE_5__["MemberDetailPageComponent"],
        children: [
            {
                path: '',
                component: _pages_member_detail_page_member_overview_member_overview_component__WEBPACK_IMPORTED_MODULE_10__["MemberOverviewComponent"],
                data: { animation: 'MemberOverviewPage' }
            },
            {
                path: 'groups',
                component: _pages_member_detail_page_member_groups_member_groups_component__WEBPACK_IMPORTED_MODULE_11__["MemberGroupsComponent"],
                data: { animation: 'MemberGroupsPage' }
            },
            {
                path: 'settings',
                component: _pages_member_detail_page_member_settings_member_settings_component__WEBPACK_IMPORTED_MODULE_30__["MemberSettingsComponent"],
                children: [
                    {
                        path: '',
                        component: _pages_member_detail_page_member_settings_member_settings_overview_member_settings_overview_component__WEBPACK_IMPORTED_MODULE_31__["MemberSettingsOverviewComponent"],
                        data: { animation: 'MemberSettingsOverviewPage' }
                    },
                    {
                        path: 'attributes',
                        component: _pages_member_detail_page_member_settings_member_settings_attributes_member_settings_attributes_component__WEBPACK_IMPORTED_MODULE_32__["MemberSettingsAttributesComponent"],
                        data: { animation: 'MemberSettingsAttributesPage' }
                    }
                ]
            }
        ]
    },
    {
        path: ':voId/groups/:groupId',
        component: _pages_group_detail_page_group_detail_page_component__WEBPACK_IMPORTED_MODULE_4__["GroupDetailPageComponent"],
        children: [
            {
                path: '',
                component: _pages_group_detail_page_group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_12__["GroupOverviewComponent"],
                data: { animation: 'GroupOverviewPage' }
            },
            {
                path: 'members',
                component: _pages_group_detail_page_group_members_group_members_component__WEBPACK_IMPORTED_MODULE_23__["GroupMembersComponent"],
                data: { animation: 'GroupMembersPage' }
            },
            {
                path: 'subgroups',
                component: _pages_group_detail_page_group_subgroups_group_subgroups_component__WEBPACK_IMPORTED_MODULE_13__["GroupSubgroupsComponent"],
                data: { animation: 'GroupSubgroupsPage' }
            },
            {
                path: 'applications',
                component: _pages_group_detail_page_group_applications_group_applications_component__WEBPACK_IMPORTED_MODULE_20__["GroupApplicationsComponent"],
                data: { animation: 'GroupApplicationsPage' }
            },
            {
                path: 'resources',
                component: _pages_group_detail_page_group_resources_group_resources_component__WEBPACK_IMPORTED_MODULE_24__["GroupResourcesComponent"],
                data: { animation: 'GroupResourcesPage' }
            },
            {
                path: 'settings',
                component: _pages_group_detail_page_group_settings_group_settings_component__WEBPACK_IMPORTED_MODULE_25__["GroupSettingsComponent"],
                children: [
                    {
                        path: '',
                        component: _pages_group_detail_page_group_settings_group_settings_overview_group_settings_overview_component__WEBPACK_IMPORTED_MODULE_27__["GroupSettingsOverviewComponent"],
                        data: { animation: 'GroupSettingsOverviewPage' }
                    },
                    {
                        path: 'attributes',
                        component: _pages_group_detail_page_group_settings_group_settings_attributes_group_settings_attributes_component__WEBPACK_IMPORTED_MODULE_26__["GroupSettingsAttributesComponent"],
                        data: { animation: 'GroupSettingsAttributesPage' }
                    },
                    {
                        path: 'expiration',
                        component: _pages_group_detail_page_group_settings_group_settings_expiration_group_settings_expiration_component__WEBPACK_IMPORTED_MODULE_37__["GroupSettingsExpirationComponent"],
                        data: { animation: 'GroupSettingsExpirationPage' }
                    },
                    {
                        path: 'managers',
                        component: _pages_group_detail_page_group_settings_group_settings_managers_group_settings_managers_component__WEBPACK_IMPORTED_MODULE_38__["GroupSettingsManagersComponent"],
                        data: { animation: 'GroupSettingsManagersPage' }
                    },
                    {
                        path: 'applicationForm',
                        component: _pages_group_detail_page_group_settings_group_settings_application_form_group_settings_application_form_component__WEBPACK_IMPORTED_MODULE_40__["GroupSettingsApplicationFormComponent"],
                        data: { animation: 'GroupSettingsApplicationFormPage' }
                    },
                    {
                        path: 'applicationForm/preview',
                        component: _components_application_form_preview_application_form_preview_component__WEBPACK_IMPORTED_MODULE_29__["ApplicationFormPreviewComponent"],
                    },
                    {
                        path: 'notifications',
                        component: _pages_group_detail_page_group_settings_group_settings_notifications_group_settings_notifications_component__WEBPACK_IMPORTED_MODULE_41__["GroupSettingsNotificationsComponent"],
                        data: { animation: 'GroupSettingsNotificationsPage' }
                    }
                ]
            },
            {
                path: 'applications/:applicationId',
                component: _components_application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_22__["ApplicationDetailComponent"],
                data: { animation: 'GroupApplicationDetailPage' }
            }
        ]
    }
];
let VosRoutingModule = class VosRoutingModule {
};
VosRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], VosRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pages_vo_select_page_vo_select_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/vo-select-page/vo-select-page.component */ "./src/app/vos/pages/vo-select-page/vo-select-page.component.ts");
/* harmony import */ var _vos_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vos-routing.module */ "./src/app/vos/vos-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_vo_detail_page_vo_detail_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-detail-page.component */ "./src/app/vos/pages/vo-detail-page/vo-detail-page.component.ts");
/* harmony import */ var _pages_group_detail_page_group_detail_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/group-detail-page/group-detail-page.component */ "./src/app/vos/pages/group-detail-page/group-detail-page.component.ts");
/* harmony import */ var _components_groups_tree_groups_tree_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/groups-tree/groups-tree.component */ "./src/app/vos/components/groups-tree/groups-tree.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_overview_vo_overview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-overview/vo-overview.component */ "./src/app/vos/pages/vo-detail-page/vo-overview/vo-overview.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_groups_vo_groups_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-groups/vo-groups.component */ "./src/app/vos/pages/vo-detail-page/vo-groups/vo-groups.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_members_vo_members_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-members/vo-members.component */ "./src/app/vos/pages/vo-detail-page/vo-members/vo-members.component.ts");
/* harmony import */ var _components_members_list_members_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/members-list/members-list.component */ "./src/app/vos/components/members-list/members-list.component.ts");
/* harmony import */ var _pages_member_detail_page_member_detail_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/member-detail-page/member-detail-page.component */ "./src/app/vos/pages/member-detail-page/member-detail-page.component.ts");
/* harmony import */ var _pages_member_detail_page_member_overview_member_overview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/member-detail-page/member-overview/member-overview.component */ "./src/app/vos/pages/member-detail-page/member-overview/member-overview.component.ts");
/* harmony import */ var _pages_member_detail_page_member_groups_member_groups_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/member-detail-page/member-groups/member-groups.component */ "./src/app/vos/pages/member-detail-page/member-groups/member-groups.component.ts");
/* harmony import */ var _pages_group_detail_page_group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/group-detail-page/group-overview/group-overview.component */ "./src/app/vos/pages/group-detail-page/group-overview/group-overview.component.ts");
/* harmony import */ var _pages_group_detail_page_group_subgroups_group_subgroups_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/group-detail-page/group-subgroups/group-subgroups.component */ "./src/app/vos/pages/group-detail-page/group-subgroups/group-subgroups.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_applications_vo_applications_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-applications/vo-applications.component */ "./src/app/vos/pages/vo-detail-page/vo-applications/vo-applications.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_attributes_vo_settings_attributes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_overview_vo_settings_overview_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_expiration_vo_settings_expiration_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component.ts");
/* harmony import */ var _components_applications_list_applications_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/applications-list/applications-list.component */ "./src/app/vos/components/applications-list/applications-list.component.ts");
/* harmony import */ var _pages_group_detail_page_group_applications_group_applications_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/group-detail-page/group-applications/group-applications.component */ "./src/app/vos/pages/group-detail-page/group-applications/group-applications.component.ts");
/* harmony import */ var _components_member_group_list_member_group_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/member-group-list/member-group-list.component */ "./src/app/vos/components/member-group-list/member-group-list.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_managers_vo_settings_managers_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component.ts");
/* harmony import */ var _components_application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/application-detail/application-detail.component */ "./src/app/vos/components/application-detail/application-detail.component.ts");
/* harmony import */ var _pages_group_detail_page_group_members_group_members_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/group-detail-page/group-members/group-members.component */ "./src/app/vos/pages/group-detail-page/group-members/group-members.component.ts");
/* harmony import */ var _pages_group_detail_page_group_resources_group_resources_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/group-detail-page/group-resources/group-resources.component */ "./src/app/vos/pages/group-detail-page/group-resources/group-resources.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_attributes_group_settings_attributes_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_overview_group_settings_overview_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_application_form_vo_settings_application_form_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component.ts");
/* harmony import */ var _components_application_form_list_application_form_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/application-form-list/application-form-list.component */ "./src/app/vos/components/application-form-list/application-form-list.component.ts");
/* harmony import */ var _components_application_form_preview_application_form_preview_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/application-form-preview/application-form-preview.component */ "./src/app/vos/components/application-form-preview/application-form-preview.component.ts");
/* harmony import */ var _pages_member_detail_page_member_settings_member_settings_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/member-detail-page/member-settings/member-settings.component */ "./src/app/vos/pages/member-detail-page/member-settings/member-settings.component.ts");
/* harmony import */ var _pages_member_detail_page_member_settings_member_settings_attributes_member_settings_attributes_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component */ "./src/app/vos/pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component.ts");
/* harmony import */ var _pages_member_detail_page_member_settings_member_settings_overview_member_settings_overview_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component */ "./src/app/vos/pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component.ts");
/* harmony import */ var _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../shared/components/attributes-list/attributes-list.component */ "./src/app/shared/components/attributes-list/attributes-list.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_preview_vo_resources_preview_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources-preview/vo-resources-preview.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-preview/vo-resources-preview.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_tags_vo_resources_tags_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_states_vo_resources_states_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources-states/vo-resources-states.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-states/vo-resources-states.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_overview_vo_resources_overview_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_resources_vo_resources_states_state_tab_state_tab_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-resources/vo-resources-states/state-tab/state-tab.component */ "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-states/state-tab/state-tab.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_expiration_group_settings_expiration_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component.ts");
/* harmony import */ var _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/expiration-settings/expiration-settings.component */ "./src/app/vos/components/expiration-settings/expiration-settings.component.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_notifications_vo_settings_notifications_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_application_form_group_settings_application_form_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_managers_group_settings_managers_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component.ts");
/* harmony import */ var _pages_group_detail_page_group_settings_group_settings_notifications_group_settings_notifications_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component */ "./src/app/vos/pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component.ts");
/* harmony import */ var _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/notification-list/notification-list.component */ "./src/app/vos/components/notification-list/notification-list.component.ts");
/* harmony import */ var mat_table_exporter__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! mat-table-exporter */ "../../node_modules/mat-table-exporter/fesm2015/mat-table-exporter.js");
/* harmony import */ var _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @perun-web-apps/ui/alerts */ "../../libs/ui/alerts/src/index.ts");
/* harmony import */ var _pages_vo_detail_page_vo_settings_vo_settings_extsources_vo_settings_extsources_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component */ "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component.ts");































// tslint:disable-next-line:max-line-length





// tslint:disable-next-line:max-line-length




















let VosModule = class VosModule {
};
VosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _vos_routing_module__WEBPACK_IMPORTED_MODULE_4__["VosRoutingModule"],
            mat_table_exporter__WEBPACK_IMPORTED_MODULE_53__["MatTableExporterModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_54__["UiAlertsModule"]
        ],
        exports: [
            _shared_components_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_40__["AttributesListComponent"],
            _components_members_list_members_list_component__WEBPACK_IMPORTED_MODULE_12__["MembersListComponent"]
        ],
        declarations: [
            _pages_vo_select_page_vo_select_page_component__WEBPACK_IMPORTED_MODULE_3__["VoSelectPageComponent"],
            _pages_vo_detail_page_vo_detail_page_component__WEBPACK_IMPORTED_MODULE_6__["VoDetailPageComponent"],
            _pages_group_detail_page_group_detail_page_component__WEBPACK_IMPORTED_MODULE_7__["GroupDetailPageComponent"],
            _components_groups_tree_groups_tree_component__WEBPACK_IMPORTED_MODULE_8__["GroupsTreeComponent"],
            _pages_vo_detail_page_vo_overview_vo_overview_component__WEBPACK_IMPORTED_MODULE_9__["VoOverviewComponent"],
            _pages_vo_detail_page_vo_groups_vo_groups_component__WEBPACK_IMPORTED_MODULE_10__["VoGroupsComponent"],
            _pages_vo_detail_page_vo_members_vo_members_component__WEBPACK_IMPORTED_MODULE_11__["VoMembersComponent"],
            _components_members_list_members_list_component__WEBPACK_IMPORTED_MODULE_12__["MembersListComponent"],
            _pages_member_detail_page_member_detail_page_component__WEBPACK_IMPORTED_MODULE_13__["MemberDetailPageComponent"],
            _pages_member_detail_page_member_overview_member_overview_component__WEBPACK_IMPORTED_MODULE_14__["MemberOverviewComponent"],
            _pages_member_detail_page_member_groups_member_groups_component__WEBPACK_IMPORTED_MODULE_15__["MemberGroupsComponent"],
            _pages_group_detail_page_group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_16__["GroupOverviewComponent"],
            _pages_group_detail_page_group_subgroups_group_subgroups_component__WEBPACK_IMPORTED_MODULE_17__["GroupSubgroupsComponent"],
            _pages_vo_detail_page_vo_resources_vo_resources_component__WEBPACK_IMPORTED_MODULE_18__["VoResourcesComponent"],
            _pages_vo_detail_page_vo_applications_vo_applications_component__WEBPACK_IMPORTED_MODULE_19__["VoApplicationsComponent"],
            _pages_vo_detail_page_vo_settings_vo_settings_component__WEBPACK_IMPORTED_MODULE_20__["VoSettingsComponent"],
            _pages_vo_detail_page_vo_settings_vo_settings_attributes_vo_settings_attributes_component__WEBPACK_IMPORTED_MODULE_21__["VoSettingsAttributesComponent"],
            _pages_vo_detail_page_vo_settings_vo_settings_overview_vo_settings_overview_component__WEBPACK_IMPORTED_MODULE_22__["VoSettingsOverviewComponent"],
            _pages_vo_detail_page_vo_settings_vo_settings_expiration_vo_settings_expiration_component__WEBPACK_IMPORTED_MODULE_23__["VoSettingsExpirationComponent"],
            _components_applications_list_applications_list_component__WEBPACK_IMPORTED_MODULE_24__["ApplicationsListComponent"],
            _pages_group_detail_page_group_applications_group_applications_component__WEBPACK_IMPORTED_MODULE_25__["GroupApplicationsComponent"],
            _components_member_group_list_member_group_list_component__WEBPACK_IMPORTED_MODULE_26__["MemberGroupListComponent"],
            _pages_vo_detail_page_vo_settings_vo_settings_managers_vo_settings_managers_component__WEBPACK_IMPORTED_MODULE_27__["VoSettingsManagersComponent"],
            _components_application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_28__["ApplicationDetailComponent"],
            _pages_group_detail_page_group_members_group_members_component__WEBPACK_IMPORTED_MODULE_29__["GroupMembersComponent"],
            _pages_group_detail_page_group_members_group_members_component__WEBPACK_IMPORTED_MODULE_29__["GroupMembersComponent"],
            _pages_group_detail_page_group_applications_group_applications_component__WEBPACK_IMPORTED_MODULE_25__["GroupApplicationsComponent"],
            _pages_group_detail_page_group_resources_group_resources_component__WEBPACK_IMPORTED_MODULE_30__["GroupResourcesComponent"],
            _pages_group_detail_page_group_settings_group_settings_component__WEBPACK_IMPORTED_MODULE_31__["GroupSettingsComponent"],
            _pages_group_detail_page_group_settings_group_settings_attributes_group_settings_attributes_component__WEBPACK_IMPORTED_MODULE_32__["GroupSettingsAttributesComponent"],
            _pages_group_detail_page_group_settings_group_settings_overview_group_settings_overview_component__WEBPACK_IMPORTED_MODULE_33__["GroupSettingsOverviewComponent"],
            _pages_vo_detail_page_vo_settings_vo_settings_application_form_vo_settings_application_form_component__WEBPACK_IMPORTED_MODULE_34__["VoSettingsApplicationFormComponent"],
            _components_application_form_list_application_form_list_component__WEBPACK_IMPORTED_MODULE_35__["ApplicationFormListComponent"],
            _components_application_form_preview_application_form_preview_component__WEBPACK_IMPORTED_MODULE_36__["ApplicationFormPreviewComponent"],
            _pages_group_detail_page_group_settings_group_settings_overview_group_settings_overview_component__WEBPACK_IMPORTED_MODULE_33__["GroupSettingsOverviewComponent"],
            _pages_member_detail_page_member_settings_member_settings_component__WEBPACK_IMPORTED_MODULE_37__["MemberSettingsComponent"],
            _pages_member_detail_page_member_settings_member_settings_attributes_member_settings_attributes_component__WEBPACK_IMPORTED_MODULE_38__["MemberSettingsAttributesComponent"],
            _pages_member_detail_page_member_settings_member_settings_overview_member_settings_overview_component__WEBPACK_IMPORTED_MODULE_39__["MemberSettingsOverviewComponent"],
            _pages_vo_detail_page_vo_resources_vo_resources_preview_vo_resources_preview_component__WEBPACK_IMPORTED_MODULE_41__["VoResourcesPreviewComponent"],
            _pages_vo_detail_page_vo_resources_vo_resources_tags_vo_resources_tags_component__WEBPACK_IMPORTED_MODULE_42__["VoResourcesTagsComponent"],
            _pages_vo_detail_page_vo_resources_vo_resources_states_vo_resources_states_component__WEBPACK_IMPORTED_MODULE_43__["VoResourcesStatesComponent"],
            _pages_vo_detail_page_vo_resources_vo_resources_overview_vo_resources_overview_component__WEBPACK_IMPORTED_MODULE_44__["VoResourcesOverviewComponent"],
            _pages_vo_detail_page_vo_resources_vo_resources_states_state_tab_state_tab_component__WEBPACK_IMPORTED_MODULE_45__["StateTabComponent"],
            _pages_group_detail_page_group_settings_group_settings_expiration_group_settings_expiration_component__WEBPACK_IMPORTED_MODULE_46__["GroupSettingsExpirationComponent"],
            _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_47__["ExpirationSettingsComponent"],
            _pages_vo_detail_page_vo_settings_vo_settings_notifications_vo_settings_notifications_component__WEBPACK_IMPORTED_MODULE_48__["VoSettingsNotificationsComponent"],
            _pages_group_detail_page_group_settings_group_settings_application_form_group_settings_application_form_component__WEBPACK_IMPORTED_MODULE_49__["GroupSettingsApplicationFormComponent"],
            _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_47__["ExpirationSettingsComponent"],
            _pages_group_detail_page_group_settings_group_settings_managers_group_settings_managers_component__WEBPACK_IMPORTED_MODULE_50__["GroupSettingsManagersComponent"],
            _pages_group_detail_page_group_settings_group_settings_notifications_group_settings_notifications_component__WEBPACK_IMPORTED_MODULE_51__["GroupSettingsNotificationsComponent"],
            _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_52__["NotificationListComponent"],
            _pages_vo_detail_page_vo_settings_vo_settings_extsources_vo_settings_extsources_component__WEBPACK_IMPORTED_MODULE_55__["VoSettingsExtsourcesComponent"]
        ],
        entryComponents: [],
    })
], VosModule);



/***/ })

}]);
//# sourceMappingURL=vos-vos-module-es2015.js.map