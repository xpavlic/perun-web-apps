function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query GetRepoData($owner: String!, $repoName: String!, $since: GitTimestamp!) {\n    repository(owner: $owner, name: $repoName) {\n      ref(qualifiedName: \"master\") {\n        target {\n          ... on Commit {\n            id\n            history(since: $since) {\n              edges {\n                node {\n                  committedDate\n                  additions\n                  deletions\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../libs/config/src/index.ts":
  /*!*****************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/config/src/index.ts ***!
    \*****************************************************************/

  /*! exports provided: AppConfigService */

  /***/
  function libsConfigSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_app_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/app-config.service */
    "../../libs/config/src/lib/app-config.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AppConfigService", function () {
      return _lib_app_config_service__WEBPACK_IMPORTED_MODULE_0__["AppConfigService"];
    });
    /***/

  },

  /***/
  "../../libs/config/src/lib/app-config.service.ts":
  /*!**********************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/config/src/lib/app-config.service.ts ***!
    \**********************************************************************************/

  /*! exports provided: AppConfigService */

  /***/
  function libsConfigSrcLibAppConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppConfigService", function () {
      return AppConfigService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts"); // tslint:disable-next-line:nx-enforce-module-boundaries


    var AppConfigService =
    /*#__PURE__*/
    function () {
      function AppConfigService(http, storeService) {
        _classCallCheck(this, AppConfigService);

        this.http = http;
        this.storeService = storeService;
      }

      _createClass(AppConfigService, [{
        key: "initializeColors",
        value: function initializeColors(entityColorConfigs, colorConfigs) {
          var _this = this;

          return new Promise(function (resolve) {
            colorConfigs.forEach(function (cc) {
              var color = _this.storeService.get('theme', cc.configValue);

              document.documentElement.style.setProperty(cc.cssVariable, color);
            });
            entityColorConfigs.forEach(function (ecc) {
              var color = _this.storeService.get('theme', ecc.configValue); // set CSS variable for given entity


              document.documentElement.style.setProperty(ecc.cssVariable, color); // update theme for given entity

              _this.setEntityTheme(ecc.entity, color);
            });
            resolve();
          });
        }
      }, {
        key: "setEntityTheme",
        value: function setEntityTheme(entity, color) {
          var primaryColorPalette = computeColors(color);
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = primaryColorPalette[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var paletteColor = _step.value;
              var key1 = "--".concat(entity, "-theme-primary-").concat(paletteColor.name);
              var value1 = "".concat(paletteColor.red, ",").concat(paletteColor.green, ",").concat(paletteColor.blue);
              var key2 = "--".concat(entity, "-theme-primary-contrast-").concat(paletteColor.name);
              var value2 = paletteColor.darkContrast ? '30,30,30' : '255,255,255';
              document.documentElement.style.setProperty(key1, value1);
              document.documentElement.style.setProperty(key2, value2);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
        /**
         * Load default configuration.
         * If instance is not in production mode, the configuration is also
         * taken as instance configuration and load additional data.
         */

      }, {
        key: "loadAppDefaultConfig",
        value: function loadAppDefaultConfig() {
          var _this2 = this;

          return new Promise(function (resolve) {
            _this2.http.get('/assets/config/defaultConfig.json', {
              headers: _this2.getNoCacheHeaders()
            }).subscribe(function (config) {
              _this2.storeService.setDefaultConfig(config);

              resolve();
            });
          });
        }
        /**
         * Load instance configuration.
         * If instance is in production mode, configuration mode is assigned to
         * instance config and load additional data.
         */

      }, {
        key: "loadAppInstanceConfig",
        value: function loadAppInstanceConfig() {
          var _this3 = this;

          return new Promise(function (resolve, reject) {
            _this3.http.get('/assets/config/instanceConfig.json', {
              headers: _this3.getNoCacheHeaders()
            }).subscribe(function (config) {
              _this3.storeService.setInstanceConfig(config);

              resolve();
            }, function () {
              console.log('instance config not detected');
              resolve();
            });
          });
        }
      }, {
        key: "getNoCacheHeaders",
        value: function getNoCacheHeaders() {
          return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
            'Pragma': 'no-cache',
            'Expires': '0'
          });
        }
      }]);

      return AppConfigService;
    }();

    AppConfigService.ɵfac = function AppConfigService_Factory(t) {
      return new (t || AppConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_2__["StoreService"]));
    };

    AppConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppConfigService,
      factory: AppConfigService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_2__["StoreService"]
        }];
      }, null);
    })();

    function computeColors(hex) {
      return [getColorObject(tinycolor(hex).lighten(52), '50'), getColorObject(tinycolor(hex).lighten(37), '100'), getColorObject(tinycolor(hex).lighten(26), '200'), getColorObject(tinycolor(hex).lighten(12), '300'), getColorObject(tinycolor(hex).lighten(6), '400'), getColorObject(tinycolor(hex), '500'), getColorObject(tinycolor(hex).darken(6), '600'), getColorObject(tinycolor(hex).darken(12), '700'), getColorObject(tinycolor(hex).darken(18), '800'), getColorObject(tinycolor(hex).darken(24), '900'), getColorObject(tinycolor(hex).lighten(50).saturate(30), 'A100'), getColorObject(tinycolor(hex).lighten(30).saturate(30), 'A200'), getColorObject(tinycolor(hex).lighten(10).saturate(15), 'A400'), getColorObject(tinycolor(hex).lighten(5).saturate(5), 'A700')];
    }

    function getColorObject(value, name) {
      var c = tinycolor(value);
      var rgb = c.toRgb();
      return {
        name: name,
        hex: c.toHexString(),
        darkContrast: c.isLight(),
        red: rgb.r,
        green: rgb.g,
        blue: rgb.b
      };
    }
    /***/

  },

  /***/
  "../../libs/perun/models/src/index.ts":
  /*!***********************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/models/src/index.ts ***!
    \***********************************************************************/

  /*! exports provided: Language, ApplicationFormItem, Message, ApplicationMail, ApplicationState, ApplicationType, Role, TreeGroup */

  /***/
  function libsPerunModelsSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_ApplicationFormItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/ApplicationFormItem */
    "../../libs/perun/models/src/lib/ApplicationFormItem.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Language", function () {
      return _lib_ApplicationFormItem__WEBPACK_IMPORTED_MODULE_0__["Language"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApplicationFormItem", function () {
      return _lib_ApplicationFormItem__WEBPACK_IMPORTED_MODULE_0__["ApplicationFormItem"];
    });
    /* harmony import */


    var _lib_ApplicationMail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/ApplicationMail */
    "../../libs/perun/models/src/lib/ApplicationMail.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Message", function () {
      return _lib_ApplicationMail__WEBPACK_IMPORTED_MODULE_1__["Message"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApplicationMail", function () {
      return _lib_ApplicationMail__WEBPACK_IMPORTED_MODULE_1__["ApplicationMail"];
    });
    /* harmony import */


    var _lib_ApplicationState_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/ApplicationState.enum */
    "../../libs/perun/models/src/lib/ApplicationState.enum.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApplicationState", function () {
      return _lib_ApplicationState_enum__WEBPACK_IMPORTED_MODULE_2__["ApplicationState"];
    });
    /* harmony import */


    var _lib_ApplicationType_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lib/ApplicationType.enum */
    "../../libs/perun/models/src/lib/ApplicationType.enum.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApplicationType", function () {
      return _lib_ApplicationType_enum__WEBPACK_IMPORTED_MODULE_3__["ApplicationType"];
    });
    /* harmony import */


    var _lib_PerunPrincipal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lib/PerunPrincipal */
    "../../libs/perun/models/src/lib/PerunPrincipal.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Role", function () {
      return _lib_PerunPrincipal__WEBPACK_IMPORTED_MODULE_4__["Role"];
    });
    /* harmony import */


    var _lib_TreeGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lib/TreeGroup */
    "../../libs/perun/models/src/lib/TreeGroup.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TreeGroup", function () {
      return _lib_TreeGroup__WEBPACK_IMPORTED_MODULE_5__["TreeGroup"];
    });
    /***/

  },

  /***/
  "../../libs/perun/models/src/lib/ApplicationFormItem.ts":
  /*!*****************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/models/src/lib/ApplicationFormItem.ts ***!
    \*****************************************************************************************/

  /*! exports provided: Language, ApplicationFormItem */

  /***/
  function libsPerunModelsSrcLibApplicationFormItemTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Language", function () {
      return Language;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationFormItem", function () {
      return ApplicationFormItem;
    });

    var Language = function Language(locale) {
      _classCallCheck(this, Language);

      this.locale = locale;
      this.errorMessage = '';
      this.help = '';
      this.label = '';
      this.options = '';
    };

    var ApplicationFormItem = function ApplicationFormItem() {
      _classCallCheck(this, ApplicationFormItem);

      this.applicationTypes = ['INITIAL', 'EXTENSION'];
      this.federationAttribute = '';
      this.i18n = {};
      this.i18n['cs'] = new Language('cs');
      this.i18n['en'] = new Language('en');
      this.id = 0;
      this.ordnum = 0;
      this.perunDestinationAttribute = null;
      this.perunSourceAttribute = null;
      this.regex = '';
      this.required = false;
      this.shortname = '';
      this.type = '';
    };
    /***/

  },

  /***/
  "../../libs/perun/models/src/lib/ApplicationMail.ts":
  /*!*************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/models/src/lib/ApplicationMail.ts ***!
    \*************************************************************************************/

  /*! exports provided: Message, ApplicationMail */

  /***/
  function libsPerunModelsSrcLibApplicationMailTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Message", function () {
      return Message;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationMail", function () {
      return ApplicationMail;
    });

    var Message = function Message(locale) {
      _classCallCheck(this, Message);

      this.locale = locale;
      this.subject = '';
      this.text = '';
    };

    var ApplicationMail = function ApplicationMail() {
      _classCallCheck(this, ApplicationMail);

      this.appType = 'INITIAL';
      this.formId = 0;
      this.mailType = 'APP_CREATED_USER';
      this.send = true;
      this.message = {};
      this.message['en'] = new Message('en');
      this.message['cs'] = new Message('cs');
    };
    /***/

  },

  /***/
  "../../libs/perun/models/src/lib/ApplicationState.enum.ts":
  /*!*******************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/models/src/lib/ApplicationState.enum.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ApplicationState */

  /***/
  function libsPerunModelsSrcLibApplicationStateEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationState", function () {
      return ApplicationState;
    });

    var ApplicationState;

    (function (ApplicationState) {
      ApplicationState["APPROVED"] = "APPROVED";
      ApplicationState["REJECTED"] = "REJECTED";
      ApplicationState["NEW"] = "NEW";
      ApplicationState["VERIFIED"] = "VERIFIED";
    })(ApplicationState || (ApplicationState = {}));
    /***/

  },

  /***/
  "../../libs/perun/models/src/lib/ApplicationType.enum.ts":
  /*!******************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/models/src/lib/ApplicationType.enum.ts ***!
    \******************************************************************************************/

  /*! exports provided: ApplicationType */

  /***/
  function libsPerunModelsSrcLibApplicationTypeEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationType", function () {
      return ApplicationType;
    });

    var ApplicationType;

    (function (ApplicationType) {
      ApplicationType["INITIAL"] = "INITIAL";
      ApplicationType["EXTENSION"] = "EXTENSION";
    })(ApplicationType || (ApplicationType = {}));
    /***/

  },

  /***/
  "../../libs/perun/models/src/lib/PerunPrincipal.ts":
  /*!************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/models/src/lib/PerunPrincipal.ts ***!
    \************************************************************************************/

  /*! exports provided: Role */

  /***/
  function libsPerunModelsSrcLibPerunPrincipalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Role", function () {
      return Role;
    });

    var Role;

    (function (Role) {
      Role["PERUNADMIN"] = "PERUNADMIN";
      Role["VOADMIN"] = "VOADMIN";
      Role["GROUPADMIN"] = "GROUPADMIN";
      Role["SELF"] = "SELF";
      Role["FACILITYADMIN"] = "FACILITYADMIN";
      Role["RESOURCEADMIN"] = "RESOURCEADMIN";
      Role["RESOURCESELFSERVICE"] = "RESOURCESELFSERVICE";
      Role["REGISTRAR"] = "REGISTRAR";
      Role["ENGINE"] = "ENGINE";
      Role["RPC"] = "RPC";
      Role["NOTIFICATIONS"] = "NOTIFICATIONS";
      Role["SERVICEUSER"] = "SERVICEUSER";
      Role["SPONSOR"] = "SPONSOR";
      Role["VOOBSERVER"] = "VOOBSERVER";
      Role["TOPGROUPCREATOR"] = "TOPGROUPCREATOR";
      Role["SECURITYADMIN"] = "SECURITYADMIN";
      Role["CABINETADMIN"] = "CABINETADMIN";
      Role["UNKNOWNROLENAME"] = "UNKNOWNROLENAME";
    })(Role || (Role = {}));
    /***/

  },

  /***/
  "../../libs/perun/models/src/lib/TreeGroup.ts":
  /*!*******************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/models/src/lib/TreeGroup.ts ***!
    \*******************************************************************************/

  /*! exports provided: TreeGroup */

  /***/
  function libsPerunModelsSrcLibTreeGroupTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TreeGroup", function () {
      return TreeGroup;
    });

    var TreeGroup =
    /*#__PURE__*/
    function () {
      function TreeGroup(group) {
        _classCallCheck(this, TreeGroup);

        this.id = group.id;
        this.name = group.name;
        this.parentGroupId = group.parentGroupId;
        this.voId = group.voId;
        this.shortName = group.shortName;
        this.description = group.description;
      }

      _createClass(TreeGroup, [{
        key: "addChild",
        value: function addChild(group) {
          if (this.children == null) {
            this.children = [group];
          } else {
            this.children.push(group);
          }
        }
      }]);

      return TreeGroup;
    }();
    /***/

  },

  /***/
  "../../libs/perun/services/src/index.ts":
  /*!*************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/services/src/index.ts ***!
    \*************************************************************************/

  /*! exports provided: AuthzService, FacilityService, MembersService, PropagationStatsReaderService, RegistrarService, RtMessagesService, ServiceService, UsersService, VoService, ExtSourceService, AuthResolverService, AuthService, StoreService, InitAuthService, CustomIconService */

  /***/
  function libsPerunServicesSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_authz_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/authz.service */
    "../../libs/perun/services/src/lib/authz.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthzService", function () {
      return _lib_authz_service__WEBPACK_IMPORTED_MODULE_0__["AuthzService"];
    });
    /* harmony import */


    var _lib_facility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/facility.service */
    "../../libs/perun/services/src/lib/facility.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FacilityService", function () {
      return _lib_facility_service__WEBPACK_IMPORTED_MODULE_1__["FacilityService"];
    });
    /* harmony import */


    var _lib_members_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/members.service */
    "../../libs/perun/services/src/lib/members.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MembersService", function () {
      return _lib_members_service__WEBPACK_IMPORTED_MODULE_2__["MembersService"];
    });
    /* harmony import */


    var _lib_propagation_stats_reader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lib/propagation-stats-reader.service */
    "../../libs/perun/services/src/lib/propagation-stats-reader.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PropagationStatsReaderService", function () {
      return _lib_propagation_stats_reader_service__WEBPACK_IMPORTED_MODULE_3__["PropagationStatsReaderService"];
    });
    /* harmony import */


    var _lib_registrar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lib/registrar.service */
    "../../libs/perun/services/src/lib/registrar.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RegistrarService", function () {
      return _lib_registrar_service__WEBPACK_IMPORTED_MODULE_4__["RegistrarService"];
    });
    /* harmony import */


    var _lib_rt_messages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lib/rt-messages.service */
    "../../libs/perun/services/src/lib/rt-messages.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RtMessagesService", function () {
      return _lib_rt_messages_service__WEBPACK_IMPORTED_MODULE_5__["RtMessagesService"];
    });
    /* harmony import */


    var _lib_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./lib/service.service */
    "../../libs/perun/services/src/lib/service.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ServiceService", function () {
      return _lib_service_service__WEBPACK_IMPORTED_MODULE_6__["ServiceService"];
    });
    /* harmony import */


    var _lib_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./lib/users.service */
    "../../libs/perun/services/src/lib/users.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return _lib_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"];
    });
    /* harmony import */


    var _lib_vo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./lib/vo.service */
    "../../libs/perun/services/src/lib/vo.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "VoService", function () {
      return _lib_vo_service__WEBPACK_IMPORTED_MODULE_8__["VoService"];
    });
    /* harmony import */


    var _lib_ext_source_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./lib/ext-source.service */
    "../../libs/perun/services/src/lib/ext-source.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ExtSourceService", function () {
      return _lib_ext_source_service__WEBPACK_IMPORTED_MODULE_9__["ExtSourceService"];
    });
    /* harmony import */


    var _lib_auth_resolver_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./lib/auth-resolver.service */
    "../../libs/perun/services/src/lib/auth-resolver.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthResolverService", function () {
      return _lib_auth_resolver_service__WEBPACK_IMPORTED_MODULE_10__["AuthResolverService"];
    });
    /* harmony import */


    var _lib_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./lib/auth.service */
    "../../libs/perun/services/src/lib/auth.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return _lib_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"];
    });
    /* harmony import */


    var _lib_store_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./lib/store.service */
    "../../libs/perun/services/src/lib/store.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StoreService", function () {
      return _lib_store_service__WEBPACK_IMPORTED_MODULE_12__["StoreService"];
    });
    /* harmony import */


    var _lib_init_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./lib/init-auth.service */
    "../../libs/perun/services/src/lib/init-auth.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InitAuthService", function () {
      return _lib_init_auth_service__WEBPACK_IMPORTED_MODULE_13__["InitAuthService"];
    });
    /* harmony import */


    var _lib_custom_icon_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./lib/custom-icon.service */
    "../../libs/perun/services/src/lib/custom-icon.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CustomIconService", function () {
      return _lib_custom_icon_service__WEBPACK_IMPORTED_MODULE_14__["CustomIconService"];
    });
    /***/

  },

  /***/
  "../../libs/perun/services/src/lib/auth-resolver.service.ts":
  /*!*********************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/services/src/lib/auth-resolver.service.ts ***!
    \*********************************************************************************************/

  /*! exports provided: AuthResolverService */

  /***/
  function libsPerunServicesSrcLibAuthResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthResolverService", function () {
      return AuthResolverService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @perun-web-apps/perun/models */
    "../../libs/perun/models/src/index.ts");

    var AuthResolverService =
    /*#__PURE__*/
    function () {
      function AuthResolverService() {
        _classCallCheck(this, AuthResolverService);

        this.principalRoles = new Set();
        this.editableFacilities = [];
        this.editableVos = [];
        this.members = [];
        this.editableGroups = [];
        this.observableVos = [];
        this.hasGroupInTheseVos = [];
      }

      _createClass(AuthResolverService, [{
        key: "init",
        value: function init(principal) {
          this.principal = principal;
          this.initData(principal);
        }
      }, {
        key: "canManageFacilities",
        value: function canManageFacilities() {
          return this.hasAtLeasOne(_perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].PERUNADMIN, _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].FACILITYADMIN);
        }
      }, {
        key: "isPerunAdmin",
        value: function isPerunAdmin() {
          return this.principalRoles.has(_perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].PERUNADMIN);
        }
      }, {
        key: "isVoAdmin",
        value: function isVoAdmin() {
          return this.hasAtLeasOne(_perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].PERUNADMIN, _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].VOADMIN);
        }
      }, {
        key: "isThisVoAdminOrObserver",
        value: function isThisVoAdminOrObserver(id) {
          return this.editableVos.includes(id) || this.observableVos.includes(id) || this.principalRoles.has(_perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].PERUNADMIN);
        }
      }, {
        key: "isThisVoAdmin",
        value: function isThisVoAdmin(id) {
          return this.editableVos.includes(id) || this.principalRoles.has(_perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].PERUNADMIN);
        }
      }, {
        key: "isGroupAdmin",
        value: function isGroupAdmin() {
          return this.hasAtLeasOne(_perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].PERUNADMIN, _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].GROUPADMIN);
        }
      }, {
        key: "isThisGroupAdmin",
        value: function isThisGroupAdmin(id) {
          return this.editableGroups.includes(id) || this.principalRoles.has(_perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].PERUNADMIN);
        }
      }, {
        key: "isGroupAdminInThisVo",
        value: function isGroupAdminInThisVo(id) {
          return this.hasGroupInTheseVos.includes(id);
        }
      }, {
        key: "isFacilityAdmin",
        value: function isFacilityAdmin() {
          return this.hasAtLeasOne(_perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].PERUNADMIN, _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].FACILITYADMIN);
        }
      }, {
        key: "isThisFacilityAdmin",
        value: function isThisFacilityAdmin(id) {
          return this.editableFacilities.includes(id) || this.principalRoles.has(_perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].PERUNADMIN);
        }
      }, {
        key: "isVoObserver",
        value: function isVoObserver() {
          return this.hasAtLeasOne(_perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].PERUNADMIN, _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].VOOBSERVER);
        }
      }, {
        key: "isThisVoObserver",
        value: function isThisVoObserver(id) {
          return this.principalRoles.has(_perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].PERUNADMIN) || this.observableVos.includes(id);
        }
      }, {
        key: "getMemberIds",
        value: function getMemberIds() {
          return this.members;
        }
        /**
         * Initialises principal data which are used for later verification
         *
         * @param principal given principal
         */

      }, {
        key: "initData",
        value: function initData(principal) {
          this.user = principal.user.id;

          for (var _i = 0, _Object$entries = Object.entries(this.principal.roles); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];

            if (principal.roles.hasOwnProperty(key)) {
              this.principalRoles.add(key);
            }

            for (var _i2 = 0, _Object$entries2 = Object.entries(value); _i2 < _Object$entries2.length; _i2++) {
              var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                  keyInner = _Object$entries2$_i[0],
                  valueInner = _Object$entries2$_i[1];

              switch (key) {
                case _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].VOADMIN:
                  {
                    this.editableVos = valueInner;
                    break;
                  }

                case _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].FACILITYADMIN:
                  {
                    this.editableFacilities = valueInner;
                    break;
                  }

                case _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].GROUPADMIN:
                  {
                    if (keyInner === 'Group') {
                      this.editableGroups = valueInner;
                    }

                    if (keyInner === 'Vo') {
                      this.hasGroupInTheseVos = valueInner;
                    }

                    break;
                  }

                case _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].SELF:
                  {
                    if (keyInner === 'Member') {
                      this.members = valueInner;
                    }

                    break;
                  }

                case _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_1__["Role"].VOOBSERVER:
                  {
                    this.observableVos = valueInner;
                    break;
                  }
              }
            }
          }
        }
        /**
         * Returns true if the principal has at least one of the given roles.
         * Otherwise, returns false
         *
         * @param roles specified roles
         */

      }, {
        key: "hasAtLeasOne",
        value: function hasAtLeasOne() {
          for (var _len = arguments.length, roles = new Array(_len), _key = 0; _key < _len; _key++) {
            roles[_key] = arguments[_key];
          }

          for (var _i3 = 0, _roles = roles; _i3 < _roles.length; _i3++) {
            var role = _roles[_i3];

            if (this.principalRoles.has(role)) {
              return true;
            }
          }

          return false;
        }
      }]);

      return AuthResolverService;
    }();

    AuthResolverService.ɵfac = function AuthResolverService_Factory(t) {
      return new (t || AuthResolverService)();
    };

    AuthResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthResolverService,
      factory: AuthResolverService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthResolverService, [{
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
  "../../libs/perun/services/src/lib/auth.service.ts":
  /*!************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/services/src/lib/auth.service.ts ***!
    \************************************************************************************/

  /*! exports provided: AuthService */

  /***/
  function libsPerunServicesSrcLibAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! oidc-client */
    "../../node_modules/oidc-client/lib/oidc-client.min.js");
    /* harmony import */


    var oidc_client__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(oidc_client__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./store.service */
    "../../libs/perun/services/src/lib/store.service.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(injector, store) {
        var _this4 = this;

        _classCallCheck(this, AuthService);

        this.injector = injector;
        this.store = store;
        this.userSet = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.user = null;
        this.loggedIn = false;
        setTimeout(function () {
          _this4.router = _this4.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]);
        });
      }

      _createClass(AuthService, [{
        key: "getUserManager",
        value: function getUserManager() {
          return this.manager;
        }
      }, {
        key: "getClientSettings",
        value: function getClientSettings() {
          return {
            authority: this.store.get('oidc_client', 'oauth_authority'),
            client_id: this.store.get('oidc_client', 'oauth_client_id'),
            redirect_uri: this.store.get('oidc_client', 'oauth_redirect_uri'),
            post_logout_redirect_uri: this.store.get('oidc_client', 'oauth_post_logout_redirect_uri'),
            response_type: 'id_token token',
            scope: 'openid profile perun_api perun_admin',
            filterProtocolClaims: true,
            loadUserInfo: true,
            automaticSilentRenew: true,
            silent_redirect_uri: this.store.get('oidc_client', 'oauth_silent_redirect_uri')
          };
        }
      }, {
        key: "loadConfigData",
        value: function loadConfigData() {
          var _this5 = this;

          this.manager = new oidc_client__WEBPACK_IMPORTED_MODULE_1__["UserManager"](this.getClientSettings());
          this.setUser();
          this.manager.events.addUserLoaded(function (user) {
            _this5.user = user;
          });
        }
      }, {
        key: "authenticate",
        value: function authenticate() {
          var currentPathname = window.location.pathname;

          if (currentPathname === '/api-callback') {
            return this.handleAuthCallback();
          } else {
            return this.verifyAuthentication(currentPathname);
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.manager.signoutRedirect()["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "isLoggedInPromise",
        value: function isLoggedInPromise() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.manager.getUser()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user) {
              return true;
            } else {
              return false;
            }
          }));
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return this.user != null && !this.user.expired;
        }
      }, {
        key: "getClaims",
        value: function getClaims() {
          return this.user.profile;
        }
      }, {
        key: "getAuthorizationHeaderValue",
        value: function getAuthorizationHeaderValue() {
          return !!this.user ? 'Bearer ' + this.user.access_token : '';
        }
      }, {
        key: "startAuthentication",
        value: function startAuthentication() {
          return this.manager.signinRedirect();
        }
      }, {
        key: "completeAuthentication",
        value: function completeAuthentication() {
          var _this6 = this;

          return this.manager.signinRedirectCallback().then(function (user) {
            _this6.user = user;

            _this6.userSet.emit(_this6.user);
          });
        }
      }, {
        key: "startSigninMainWindow",
        value: function startSigninMainWindow() {
          this.manager.signinRedirect({
            data: this.redirectUrl
          }).then(function () {
            console.log('signinRedirect done');
          })["catch"](function (err) {
            console.log(err);
          });
        }
      }, {
        key: "setUser",
        value: function setUser() {
          var _this7 = this;

          this.manager.getUser().then(function (user) {
            _this7.user = user;
          });
        }
        /**
         * Check if the user is logged in and if not,
         * save current path and start authentication;
         *
         * @param path current url path
         */

      }, {
        key: "verifyAuthentication",
        value: function verifyAuthentication(path) {
          var _this8 = this;

          return this.isLoggedInPromise().toPromise().then(function (isLoggedIn) {
            if (!isLoggedIn) {
              sessionStorage.setItem('auth:redirect', path);

              _this8.startAuthentication().then(function (r) {
                return console.log('R:' + r);
              });
            }
          });
        }
        /**
         * This method is used to handle oauth callbacks.
         *
         * First, it finishes the authentication and then redirects user to the url
         * he wanted to visit.
         *
         */

      }, {
        key: "handleAuthCallback",
        value: function handleAuthCallback() {
          var _this9 = this;

          return this.completeAuthentication().then(function () {
            var redirectUrl = sessionStorage.getItem('auth:redirect');

            if (redirectUrl) {
              sessionStorage.removeItem('auth:redirect');

              _this9.router.navigate([redirectUrl]);
            } else {
              _this9.router.navigate(['/']);
            }
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }, {
          type: _store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../../libs/perun/services/src/lib/authz.service.ts":
  /*!*************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/services/src/lib/authz.service.ts ***!
    \*************************************************************************************/

  /*! exports provided: AuthzService */

  /***/
  function libsPerunServicesSrcLibAuthzServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthzService", function () {
      return AuthzService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/tokens */
    "../../libs/perun/tokens/src/index.ts");

    var AuthzService =
    /*#__PURE__*/
    function () {
      function AuthzService(apiService) {
        _classCallCheck(this, AuthzService);

        this.apiService = apiService;
      }

      _createClass(AuthzService, [{
        key: "getPerunPrincipal",
        value: function getPerunPrincipal() {
          var showNotificationOnError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return this.apiService.get('json/authzResolver/getPerunPrincipal', new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"](), showNotificationOnError);
        }
      }, {
        key: "getRichAdmins",
        value: function getRichAdmins(role, complementaryObjectId, complementaryObjectName, attributes) {
          var allUserAttributes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
          var onlyDirectAdmins = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
          var showNotificationOnError = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
          return this.apiService.post("json/authzResolver/getRichAdmins", {
            role: role,
            complementaryObjectId: complementaryObjectId,
            complementaryObjectName: complementaryObjectName,
            specificAttributes: attributes,
            allUserAttributes: allUserAttributes,
            onlyDirectAdmins: onlyDirectAdmins
          }, showNotificationOnError);
        }
      }, {
        key: "getManagerGroups",
        value: function getManagerGroups(role, complementaryObjectId, complementaryObjectName) {
          var showNotificationOnError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          return this.apiService.post("json/authzResolver/getAdminGroups", {
            role: role,
            complementaryObjectId: complementaryObjectId,
            complementaryObjectName: complementaryObjectName
          }, showNotificationOnError);
        }
      }, {
        key: "removeManagers",
        value: function removeManagers(role, userIds, complementaryObject) {
          var showNotificationOnError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          return this.apiService.post('json/authzResolver/unsetRole', {
            role: role,
            users: userIds,
            complementaryObject: complementaryObject
          }, showNotificationOnError);
        }
      }, {
        key: "setRole",
        value: function setRole(role, userIds, complementaryObject) {
          var showNotificationOnError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          return this.apiService.post('json/authzResolver/setRole', {
            role: role,
            users: userIds,
            complementaryObject: complementaryObject
          }, showNotificationOnError);
        }
      }, {
        key: "unsetRole",
        value: function unsetRole(role, userIds, complementaryObject) {
          var showNotificationOnError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          return this.apiService.post('json/authzResolver/unsetRole', {
            role: role,
            users: userIds,
            complementaryObject: complementaryObject
          }, showNotificationOnError);
        }
      }, {
        key: "unsetRoleForGroups",
        value: function unsetRoleForGroups(role, groupIds, complementaryObject) {
          var showNotificationOnError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          return this.apiService.post('json/authzResolver/unsetRole', {
            role: role,
            authorizedGroups: groupIds,
            complementaryObject: complementaryObject
          }, showNotificationOnError);
        }
      }, {
        key: "setRoleForGroups",
        value: function setRoleForGroups(role, groupIds, complementaryObject) {
          var showNotificationOnError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          return this.apiService.post('json/authzResolver/setRole', {
            role: role,
            authorizedGroups: groupIds,
            complementaryObject: complementaryObject
          }, showNotificationOnError);
        }
      }, {
        key: "logout",
        value: function logout() {
          var showNotificationOnError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return this.apiService.get('json/utils/logout', new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"](), showNotificationOnError);
        }
      }]);

      return AuthzService;
    }();

    AuthzService.ɵfac = function AuthzService_Factory(t) {
      return new (t || AuthzService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_2__["PERUN_API_SERVICE"]));
    };

    AuthzService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthzService,
      factory: AuthzService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthzService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_2__["PERUN_API_SERVICE"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../../libs/perun/services/src/lib/custom-icon.service.ts":
  /*!*******************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/services/src/lib/custom-icon.service.ts ***!
    \*******************************************************************************************/

  /*! exports provided: CustomIcon, CustomIconService */

  /***/
  function libsPerunServicesSrcLibCustomIconServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomIcon", function () {
      return CustomIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomIconService", function () {
      return CustomIconService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var CustomIcon = function CustomIcon() {
      _classCallCheck(this, CustomIcon);
    };

    var CustomIconService =
    /*#__PURE__*/
    function () {
      function CustomIconService(matIconRegistry, domSanitizer) {
        _classCallCheck(this, CustomIconService);

        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.customIcons = [{
          url: 'assets/img/PerunWebImages/refresh_tab-black.svg',
          name: 'perun-refresh-enabled'
        }, {
          url: 'assets/img/PerunWebImages/refresh_tab-grey.svg',
          name: 'perun-refresh-disabled'
        }, {
          url: 'assets/img/PerunWebImages/manage_facility_white.svg',
          name: 'perun-manage-facility'
        }, {
          url: 'assets/img/PerunWebImages/vo-white.svg',
          name: 'perun-vo'
        }, {
          url: 'assets/img/PerunWebImages/user-white.svg',
          name: 'perun-user'
        }, {
          url: 'assets/img/PerunWebImages/perun_admin-white.svg',
          name: 'perun-perun-admin'
        }, {
          url: 'assets/img/PerunWebImages/group-white.svg',
          name: 'perun-group'
        }, {
          url: 'assets/img/PerunWebImages/attributes-white.svg',
          name: 'perun-attributes'
        }, {
          url: 'assets/img/PerunWebImages/preview-white.svg',
          name: 'perun-preview'
        }, {
          url: 'assets/img/PerunWebImages/module_dependencies.svg',
          name: 'perun-module-dependencies'
        }, {
          url: 'assets/img/PerunWebImages/user_destination_relationship.svg',
          name: 'perun-user-destination-relationship'
        }, {
          url: 'assets/img/PerunWebImages/settings2-white.svg',
          name: 'perun-settings2'
        }, {
          url: 'assets/img/PerunWebImages/attributes-white.svg',
          name: 'perun-attributes'
        }, {
          url: 'assets/img/PerunWebImages/applications-white.svg',
          name: 'perun-applications'
        }, {
          url: 'assets/img/PerunWebImages/manager-white.svg',
          name: 'perun-manager'
        }, {
          url: 'assets/img/PerunWebImages/application_form-white.svg',
          name: 'perun-application-form'
        }, {
          url: 'assets/img/PerunWebImages/notification-white.svg',
          name: 'perun-notification'
        }, {
          url: 'assets/img/PerunWebImages/invite_member-white.svg',
          name: 'perun-invite-member'
        }, {
          url: 'assets/img/PerunWebImages/service_identity-white.svg',
          name: 'perun-service-identity'
        }, {
          url: 'assets/img/PerunWebImages/create1-white.svg',
          name: 'perun-create1'
        }, {
          url: 'assets/img/PerunWebImages/resource-white.svg',
          name: 'perun-resource'
        }, {
          url: 'assets/img/PerunWebImages/resource_tags-white.svg',
          name: 'perun-resource-tags'
        }, {
          url: 'assets/img/PerunWebImages/resources_state-white.svg',
          name: 'perun-resources-state'
        }, {
          url: 'assets/img/PerunWebImages/external_sources-white.svg',
          name: 'perun-external-sources'
        }];
      }

      _createClass(CustomIconService, [{
        key: "registerPerunRefreshIcon",
        value: function registerPerunRefreshIcon() {
          var _this10 = this;

          this.customIcons.forEach(function (ci) {
            _this10.matIconRegistry.addSvgIcon(ci.name, _this10.domSanitizer.bypassSecurityTrustResourceUrl(ci.url));
          });
        }
      }]);

      return CustomIconService;
    }();

    CustomIconService.ɵfac = function CustomIconService_Factory(t) {
      return new (t || CustomIconService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
    };

    CustomIconService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CustomIconService,
      factory: CustomIconService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomIconService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../../libs/perun/services/src/lib/ext-source.service.ts":
  /*!******************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/services/src/lib/ext-source.service.ts ***!
    \******************************************************************************************/

  /*! exports provided: ExtSourceService */

  /***/
  function libsPerunServicesSrcLibExtSourceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExtSourceService", function () {
      return ExtSourceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @perun-web-apps/perun/tokens */
    "../../libs/perun/tokens/src/index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ExtSourceService =
    /*#__PURE__*/
    function () {
      function ExtSourceService(apiService) {
        _classCallCheck(this, ExtSourceService);

        this.apiService = apiService;
      }

      _createClass(ExtSourceService, [{
        key: "getExtSources",
        value: function getExtSources() {
          var showNotificationOnError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return this.apiService.get('json/extSourcesManager/getExtSources', new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](), showNotificationOnError);
        }
      }, {
        key: "loadExtSources",
        value: function loadExtSources() {
          var showNotificationOnError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return this.apiService.get('json/extSourcesManager/loadExtSourcesDefinitions', new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](), showNotificationOnError);
        }
      }, {
        key: "getVoExtSources",
        value: function getVoExtSources(voId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.get("json/extSourcesManager/getVoExtSources?vo=".concat(voId), new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](), showNotificationOnError);
        }
      }, {
        key: "addExtSources",
        value: function addExtSources(voId, extSourceId) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var payload = {
            vo: voId,
            source: extSourceId
          };
          return this.apiService.post('json/extSourcesManager/addExtSource', payload, showNotificationOnError);
        }
      }, {
        key: "removeExtSources",
        value: function removeExtSources(voId, extSourceId) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var payload = {
            vo: voId,
            source: extSourceId
          };
          return this.apiService.post('json/extSourcesManager/removeExtSource', payload, showNotificationOnError);
        }
      }]);

      return ExtSourceService;
    }();

    ExtSourceService.ɵfac = function ExtSourceService_Factory(t) {
      return new (t || ExtSourceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_1__["PERUN_API_SERVICE"]));
    };

    ExtSourceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ExtSourceService,
      factory: ExtSourceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExtSourceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_1__["PERUN_API_SERVICE"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../../libs/perun/services/src/lib/facility.service.ts":
  /*!****************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/services/src/lib/facility.service.ts ***!
    \****************************************************************************************/

  /*! exports provided: FacilityService */

  /***/
  function libsPerunServicesSrcLibFacilityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityService", function () {
      return FacilityService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/tokens */
    "../../libs/perun/tokens/src/index.ts");

    var FacilityService =
    /*#__PURE__*/
    function () {
      function FacilityService(apiService) {
        _classCallCheck(this, FacilityService);

        this.apiService = apiService;
      }

      _createClass(FacilityService, [{
        key: "getFacilityById",
        value: function getFacilityById(id) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/facilitiesManager/getFacilityById', {
            'id': id
          }, showNotificationOnError);
        }
      }, {
        key: "getFacilitiesByDestination",
        value: function getFacilitiesByDestination(destination) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/facilitiesManager/getFacilitiesByDestination', {
            'destination': destination
          }, showNotificationOnError);
        }
      }, {
        key: "getAssignedResources",
        value: function getAssignedResources(facility) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/facilitiesManager/getAssignedResources', {
            'facility': facility
          }, showNotificationOnError);
        }
      }, {
        key: "getAllowedGroups",
        value: function getAllowedGroups(facility, vo) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/facilitiesManager/getAllowedGroups', {
            'facility': facility,
            'vo': vo
          }, showNotificationOnError);
        }
      }, {
        key: "getFacilities",
        value: function getFacilities() {
          var showNotificationOnError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return this.apiService.get('json/facilitiesManager/getFacilities', new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"](), showNotificationOnError);
        }
      }, {
        key: "getRichFacilities",
        value: function getRichFacilities() {
          var showNotificationOnError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return this.apiService.get('json/facilitiesManager/getRichFacilities', new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"](), showNotificationOnError);
        }
      }, {
        key: "getAllowedVos",
        value: function getAllowedVos(facility) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/facilitiesManager/getAllowedVos', {
            'facility': facility
          }, showNotificationOnError);
        }
      }]);

      return FacilityService;
    }();

    FacilityService.ɵfac = function FacilityService_Factory(t) {
      return new (t || FacilityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_2__["PERUN_API_SERVICE"]));
    };

    FacilityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FacilityService,
      factory: FacilityService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_2__["PERUN_API_SERVICE"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../../libs/perun/services/src/lib/init-auth.service.ts":
  /*!*****************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/services/src/lib/init-auth.service.ts ***!
    \*****************************************************************************************/

  /*! exports provided: InitAuthService */

  /***/
  function libsPerunServicesSrcLibInitAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitAuthService", function () {
      return InitAuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "../../libs/perun/services/src/lib/auth.service.ts");
    /* harmony import */


    var _store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./store.service */
    "../../libs/perun/services/src/lib/store.service.ts");
    /* harmony import */


    var _auth_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth-resolver.service */
    "../../libs/perun/services/src/lib/auth-resolver.service.ts");
    /* harmony import */


    var _authz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./authz.service */
    "../../libs/perun/services/src/lib/authz.service.ts"); // tslint:disable-next-line:nx-enforce-module-boundaries


    var InitAuthService =
    /*#__PURE__*/
    function () {
      function InitAuthService(authService, storeService, authResolver, authzService) {
        _classCallCheck(this, InitAuthService);

        this.authService = authService;
        this.storeService = storeService;
        this.authResolver = authResolver;
        this.authzService = authzService;
      }
      /**
       * Load additional data. First it init authService with necessarily data, then
       * start authentication.
       */


      _createClass(InitAuthService, [{
        key: "authenticateUser",
        value: function authenticateUser() {
          var _this11 = this;

          return new Promise(function (resolve) {
            _this11.authService.loadConfigData();

            if (_this11.storeService.get('skip_oidc')) {
              resolve();
            } else {
              _this11.authService.authenticate().then(function () {
                resolve();
              });
            }
          });
        }
        /**
         * Load principal
         */

      }, {
        key: "loadPrincipal",
        value: function loadPrincipal() {
          var _this12 = this;

          return this.authzService.getPerunPrincipal().toPromise().then(function (perunPrincipal) {
            _this12.storeService.setPerunPrincipal(perunPrincipal);

            _this12.authResolver.init(perunPrincipal);
          });
        }
      }]);

      return InitAuthService;
    }();

    InitAuthService.ɵfac = function InitAuthService_Factory(t) {
      return new (t || InitAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_resolver_service__WEBPACK_IMPORTED_MODULE_3__["AuthResolverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authz_service__WEBPACK_IMPORTED_MODULE_4__["AuthzService"]));
    };

    InitAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InitAuthService,
      factory: InitAuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitAuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]
        }, {
          type: _auth_resolver_service__WEBPACK_IMPORTED_MODULE_3__["AuthResolverService"]
        }, {
          type: _authz_service__WEBPACK_IMPORTED_MODULE_4__["AuthzService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../../libs/perun/services/src/lib/members.service.ts":
  /*!***************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/services/src/lib/members.service.ts ***!
    \***************************************************************************************/

  /*! exports provided: MembersService */

  /***/
  function libsPerunServicesSrcLibMembersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MembersService", function () {
      return MembersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/tokens */
    "../../libs/perun/tokens/src/index.ts");

    var MembersService =
    /*#__PURE__*/
    function () {
      function MembersService(apiService) {
        _classCallCheck(this, MembersService);

        this.apiService = apiService;
      }

      _createClass(MembersService, [{
        key: "getMemberById",
        value: function getMemberById(memberId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.get("json/membersManager/getMemberById?id=".concat(memberId), new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"](), showNotificationOnError);
        }
      }, {
        key: "findCompleteRichMembers",
        value: function findCompleteRichMembers(voId, searchString, attrsNames, allowedStatuses) {
          var showNotificationOnError = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
          return this.apiService.post('json/membersManager/findCompleteRichMembers', {
            'vo': voId,
            'searchString': searchString,
            'attrsNames': attrsNames,
            'allowedStatuses': allowedStatuses
          }, showNotificationOnError);
        }
      }, {
        key: "getCompleteRichMembers",
        value: function getCompleteRichMembers(voId, attrsNames, allowedStatuses) {
          var showNotificationOnError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          return this.apiService.post("json/membersManager/getCompleteRichMembers", {
            'vo': voId,
            'attrsNames': attrsNames,
            'allowedStatuses': allowedStatuses
          }, showNotificationOnError);
        }
      }, {
        key: "getRichMemberWithAttributes",
        value: function getRichMemberWithAttributes(memberId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.get("json/membersManager/getRichMemberWithAttributes?id=".concat(memberId), new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"](), showNotificationOnError);
        }
      }, {
        key: "findCompleteRichMembersForGroup",
        value: function findCompleteRichMembersForGroup(groupId, searchString, attrsNames) {
          var showNotificationOnError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          return this.apiService.post('json/membersManager/findCompleteRichMembers', {
            'group': groupId,
            'attrsNames': attrsNames,
            'allowedStatuses': ['INVALID', 'SUSPENDED', 'EXPIRED', 'VALID', 'DISABLED'],
            'searchString': searchString,
            'lookingInParentGroup': false
          }, showNotificationOnError);
        }
      }, {
        key: "getCompleteRichMembersForGroup",
        value: function getCompleteRichMembersForGroup(groupId, attrNames) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/membersManager/getCompleteRichMembers', {
            'group': groupId,
            'attrsNames': attrNames,
            'allowedStatuses': ['INVALID', 'SUSPENDED', 'VALID'],
            'lookingInParentGroup': false
          }, showNotificationOnError);
        }
      }, {
        key: "deleteMembers",
        value: function deleteMembers(memberIds) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/membersManager/deleteMembers', {
            'members': memberIds
          }, showNotificationOnError);
        }
      }, {
        key: "getMembersByUser",
        value: function getMembersByUser(user) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/membersManager/getMembersByUser', {
            'user': user
          }, showNotificationOnError);
        }
      }, {
        key: "createMember",
        value: function createMember(voId, userId) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/membersManager/createMember', {
            vo: voId,
            user: userId
          }, showNotificationOnError);
        }
      }, {
        key: "createMemberWithGroups",
        value: function createMemberWithGroups(voId, userId, groups) {
          var showNotificationOnError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          return this.apiService.post('json/membersManager/createMember', {
            vo: voId,
            user: userId,
            groups: groups
          }, showNotificationOnError);
        }
      }, {
        key: "createMemberForCandidateWithGroups",
        value: function createMemberForCandidateWithGroups(voId, candidate, groups) {
          var showNotificationOnError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          return this.apiService.post('json/membersManager/createMember', {
            vo: voId,
            candidate: candidate,
            groups: groups
          }, showNotificationOnError);
        }
      }, {
        key: "createMemberForCandidate",
        value: function createMemberForCandidate(voId, candidate) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/membersManager/createMember', {
            vo: voId,
            candidate: candidate
          }, showNotificationOnError);
        }
      }, {
        key: "getMemberByUser",
        value: function getMemberByUser(voId, userId) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/membersManager/getMemberByUser', {
            'vo': voId,
            'user': userId
          }, showNotificationOnError);
        }
      }, {
        key: "getRichMember",
        value: function getRichMember(memberId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/membersManager/getRichMember', {
            'id': memberId
          }, showNotificationOnError);
        }
      }, {
        key: "setStatus",
        value: function setStatus(member, status) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/membersManager/setStatus', {
            'member': member,
            'status': status
          }, showNotificationOnError);
        }
      }]);

      return MembersService;
    }();

    MembersService.ɵfac = function MembersService_Factory(t) {
      return new (t || MembersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_2__["PERUN_API_SERVICE"]));
    };

    MembersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MembersService,
      factory: MembersService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MembersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_2__["PERUN_API_SERVICE"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../../libs/perun/services/src/lib/propagation-stats-reader.service.ts":
  /*!********************************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/services/src/lib/propagation-stats-reader.service.ts ***!
    \********************************************************************************************************/

  /*! exports provided: PropagationStatsReaderService */

  /***/
  function libsPerunServicesSrcLibPropagationStatsReaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PropagationStatsReaderService", function () {
      return PropagationStatsReaderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @perun-web-apps/perun/tokens */
    "../../libs/perun/tokens/src/index.ts");

    var PropagationStatsReaderService =
    /*#__PURE__*/
    function () {
      function PropagationStatsReaderService(apiService) {
        _classCallCheck(this, PropagationStatsReaderService);

        this.apiService = apiService;
      }

      _createClass(PropagationStatsReaderService, [{
        key: "getAllResourcesState",
        value: function getAllResourcesState(voId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/propagationStatsReader/getAllResourcesState', {
            'voId': voId
          }, showNotificationOnError);
        }
      }]);

      return PropagationStatsReaderService;
    }();

    PropagationStatsReaderService.ɵfac = function PropagationStatsReaderService_Factory(t) {
      return new (t || PropagationStatsReaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_1__["PERUN_API_SERVICE"]));
    };

    PropagationStatsReaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PropagationStatsReaderService,
      factory: PropagationStatsReaderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropagationStatsReaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_1__["PERUN_API_SERVICE"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../../libs/perun/services/src/lib/registrar.service.ts":
  /*!*****************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/services/src/lib/registrar.service.ts ***!
    \*****************************************************************************************/

  /*! exports provided: RegistrarService */

  /***/
  function libsPerunServicesSrcLibRegistrarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrarService", function () {
      return RegistrarService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @perun-web-apps/perun/tokens */
    "../../libs/perun/tokens/src/index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var RegistrarService =
    /*#__PURE__*/
    function () {
      function RegistrarService(apiService) {
        _classCallCheck(this, RegistrarService);

        this.apiService = apiService;
      }

      _createClass(RegistrarService, [{
        key: "consolidate",
        value: function consolidate(token) {
          var showNotificationsOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/registrarManager/consolidateIdentityUsingToken', {
            token: token
          }, showNotificationsOnError);
        }
      }, {
        key: "sendInvitation",
        value: function sendInvitation(voId, email) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/sendInvitation', {
            'voId': voId,
            'email': email
          }, showNotificationOnError);
        }
      }, {
        key: "sendInvitationForGroup",
        value: function sendInvitationForGroup(voId, groupId, email) {
          var showNotificationOnError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          return this.apiService.post('json/registrarManager/sendInvitation', {
            'voId': voId,
            'groupId': groupId,
            'email': email
          }, showNotificationOnError);
        }
      }, {
        key: "sendInvitationToExistingUser",
        value: function sendInvitationToExistingUser(userId, voId) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/sendInvitation', {
            voId: voId,
            userId: userId
          }, showNotificationOnError);
        }
      }, {
        key: "sendInvitationGroupToExistingUser",
        value: function sendInvitationGroupToExistingUser(userId, voId, groupId) {
          var showNotificationOnError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          return this.apiService.post('json/registrarManager/sendInvitation', {
            voId: voId,
            userId: userId,
            groupId: groupId
          }, showNotificationOnError);
        }
      }, {
        key: "getApplicationsForVo",
        value: function getApplicationsForVo(voId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/registrarManager/getApplicationsForVo', {
            'vo': voId
          }, showNotificationOnError);
        }
      }, {
        key: "getApplicationsForVoWithState",
        value: function getApplicationsForVoWithState(voId, state) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/getApplicationsForVo', {
            'vo': voId,
            'state': state
          }, showNotificationOnError);
        }
      }, {
        key: "getApplicationsForGroup",
        value: function getApplicationsForGroup(groupId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/registrarManager/getApplicationsForGroup', {
            'group': groupId
          }, showNotificationOnError);
        }
      }, {
        key: "getApplicationsForGroupWithState",
        value: function getApplicationsForGroupWithState(groupId, state) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/getApplicationsForGroup', {
            'group': groupId,
            'state': state
          }, showNotificationOnError);
        }
      }, {
        key: "getApplicationById",
        value: function getApplicationById(applicationId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/registrarManager/getApplicationById', {
            'id': applicationId
          }, showNotificationOnError);
        }
      }, {
        key: "getApplicationDataById",
        value: function getApplicationDataById(applicationId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/registrarManager/getApplicationDataById', {
            'id': applicationId
          }, showNotificationOnError);
        }
      }, {
        key: "verifyApplication",
        value: function verifyApplication(applicationId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/registrarManager/verifyApplication', {
            'id': applicationId
          }, showNotificationOnError);
        }
      }, {
        key: "approveApplication",
        value: function approveApplication(applicationId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/registrarManager/approveApplication', {
            'id': applicationId
          }, showNotificationOnError);
        }
      }, {
        key: "rejectApplication",
        value: function rejectApplication(applicationId, reason) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/rejectApplication', {
            'id': applicationId,
            'reason': reason
          }, showNotificationOnError);
        }
      }, {
        key: "deleteApplication",
        value: function deleteApplication(applicationId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/registrarManager/deleteApplication', {
            'id': applicationId
          }, showNotificationOnError);
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(applicationId, mailType) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/sendMessage', {
            'appId': applicationId,
            'mailType': mailType
          }, showNotificationOnError);
        }
      }, {
        key: "sendMessageWithReason",
        value: function sendMessageWithReason(applicationId, mailType, reason) {
          var showNotificationOnError = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          return this.apiService.post('json/registrarManager/sendMessage', {
            'appId': applicationId,
            'mailType': mailType,
            'reason': reason
          }, showNotificationOnError);
        }
      }, {
        key: "getApplicationFormForVo",
        value: function getApplicationFormForVo(voId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/registrarManager/getApplicationForm', {
            'vo': voId
          }, showNotificationOnError);
        }
      }, {
        key: "getApplicationFormForGroup",
        value: function getApplicationFormForGroup(groupId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/registrarManager/getApplicationForm', {
            'group': groupId
          }, showNotificationOnError);
        }
      }, {
        key: "getFormItemsForVo",
        value: function getFormItemsForVo(voId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/registrarManager/getFormItems', {
            'vo': voId
          }, showNotificationOnError);
        }
      }, {
        key: "updateFormItemsForVo",
        value: function updateFormItemsForVo(voId, items) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/updateFormItems', {
            'items': items,
            'vo': voId
          }, showNotificationOnError);
        }
      }, {
        key: "updateFormItemsForGroup",
        value: function updateFormItemsForGroup(groupId, items) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/updateFormItems', {
            'items': items,
            'group': groupId
          }, showNotificationOnError);
        }
      }, {
        key: "updateForm",
        value: function updateForm(applicationItem) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/registrarManager/updateForm', {
            'form': applicationItem
          }, showNotificationOnError);
        }
      }, {
        key: "copyFormFromVoToVo",
        value: function copyFormFromVoToVo(fromVo, toVo) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/copyForm', {
            'fromVo': fromVo,
            'toVo': toVo
          }, showNotificationOnError);
        }
      }, {
        key: "copyFormFromGroupToVo",
        value: function copyFormFromGroupToVo(fromGroup, toVo) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/copyForm', {
            'fromGroup': fromGroup,
            'toVo': toVo
          }, showNotificationOnError);
        }
      }, {
        key: "getApplicationMailsForVo",
        value: function getApplicationMailsForVo(vo) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/registrarManager/getApplicationMails', {
            'vo': vo
          }, showNotificationOnError);
        }
      }, {
        key: "getApplicationMailsForGroup",
        value: function getApplicationMailsForGroup(group) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/registrarManager/getApplicationMails', {
            'group': group
          }, showNotificationOnError);
        }
      }, {
        key: "setSendingEnabled",
        value: function setSendingEnabled(enabled, applicationMails) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/setSendingEnabled', {
            'enabled': enabled,
            'mails': applicationMails
          }, showNotificationOnError);
        }
      }, {
        key: "copyMailsFromGroupToVo",
        value: function copyMailsFromGroupToVo(fromGroup, toVo) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/copyMails', {
            'fromGroup': fromGroup,
            'toVo': toVo
          }, showNotificationOnError);
        }
      }, {
        key: "copyMailsFromVoToVo",
        value: function copyMailsFromVoToVo(fromVo, toVo) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/copyMails', {
            'fromVo': fromVo,
            'toVo': toVo
          }, showNotificationOnError);
        }
      }, {
        key: "deleteApplicationMailForVo",
        value: function deleteApplicationMailForVo(vo, id) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/deleteApplicationMail', {
            'vo': vo,
            'id': id
          }, showNotificationOnError);
        }
      }, {
        key: "deleteApplicationMailForGroup",
        value: function deleteApplicationMailForGroup(group, id) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/deleteApplicationMail', {
            'group': group,
            'id': id
          }, showNotificationOnError);
        }
      }, {
        key: "updateApplicationMail",
        value: function updateApplicationMail(mail) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/registrarManager/updateApplicationMail', {
            'mail': mail
          }, showNotificationOnError);
        }
      }, {
        key: "addApplicationMailForVo",
        value: function addApplicationMailForVo(vo, mail) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/addApplicationMail', {
            'vo': vo,
            'mail': mail
          }, showNotificationOnError);
        }
      }, {
        key: "addApplicationMailForGroup",
        value: function addApplicationMailForGroup(group, mail) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/addApplicationMail', {
            'group': group,
            'mail': mail
          }, showNotificationOnError);
        }
      }, {
        key: "copyFormFromGroupToGroup",
        value: function copyFormFromGroupToGroup(fromGroup, toGroup) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/copyForm', {
            'fromGroup': fromGroup,
            'toGroup': toGroup
          }, showNotificationOnError);
        }
      }, {
        key: "copyFormFromVoToGroup",
        value: function copyFormFromVoToGroup(fromVo, toGroup) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/copyForm', {
            'fromVo': fromVo,
            'toGroup': toGroup
          }, showNotificationOnError);
        }
      }, {
        key: "copyMailsFromGroupToGroup",
        value: function copyMailsFromGroupToGroup(fromGroup, toGroup) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/copyMails', {
            'fromGroup': fromGroup,
            'toGroup': toGroup
          }, showNotificationOnError);
        }
      }, {
        key: "copyMailsFromVoToGroup",
        value: function copyMailsFromVoToGroup(fromVo, toGroup) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/registrarManager/copyMails', {
            'fromVo': fromVo,
            'toGroup': toGroup
          }, showNotificationOnError);
        }
      }, {
        key: "getFormItemsForGroup",
        value: function getFormItemsForGroup(group) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/registrarManager/getFormItems', {
            'group': group
          }, showNotificationOnError);
        }
      }, {
        key: "createApplicationForm",
        value: function createApplicationForm(group) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/registrarManager/createApplicationForm', {
            'group': group
          }, showNotificationOnError);
        }
      }, {
        key: "getConsolidatorToken",
        value: function getConsolidatorToken() {
          var showNotificationOnError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return this.apiService.get('json/registrarManager/getConsolidatorToken', new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](), showNotificationOnError);
        }
      }]);

      return RegistrarService;
    }();

    RegistrarService.ɵfac = function RegistrarService_Factory(t) {
      return new (t || RegistrarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_1__["PERUN_API_SERVICE"]));
    };

    RegistrarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RegistrarService,
      factory: RegistrarService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_1__["PERUN_API_SERVICE"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../../libs/perun/services/src/lib/rt-messages.service.ts":
  /*!*******************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/services/src/lib/rt-messages.service.ts ***!
    \*******************************************************************************************/

  /*! exports provided: RtMessagesService */

  /***/
  function libsPerunServicesSrcLibRtMessagesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RtMessagesService", function () {
      return RtMessagesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @perun-web-apps/perun/tokens */
    "../../libs/perun/tokens/src/index.ts");

    var RtMessagesService =
    /*#__PURE__*/
    function () {
      function RtMessagesService(apiService) {
        _classCallCheck(this, RtMessagesService);

        this.apiService = apiService;
      }

      _createClass(RtMessagesService, [{
        key: "sendMessageToRT",
        value: function sendMessageToRT(queue, subject, text) {
          var showNotification = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          return this.apiService.post('json/rtMessagesManager/sentMessageToRT', {
            queue: queue,
            subject: subject,
            text: text
          }, showNotification);
        }
      }]);

      return RtMessagesService;
    }();

    RtMessagesService.ɵfac = function RtMessagesService_Factory(t) {
      return new (t || RtMessagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_1__["PERUN_API_SERVICE"]));
    };

    RtMessagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RtMessagesService,
      factory: RtMessagesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RtMessagesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_1__["PERUN_API_SERVICE"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../../libs/perun/services/src/lib/service.service.ts":
  /*!***************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/services/src/lib/service.service.ts ***!
    \***************************************************************************************/

  /*! exports provided: ServiceService */

  /***/
  function libsPerunServicesSrcLibServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceService", function () {
      return ServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @perun-web-apps/perun/tokens */
    "../../libs/perun/tokens/src/index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ServiceService =
    /*#__PURE__*/
    function () {
      function ServiceService(apiService) {
        _classCallCheck(this, ServiceService);

        this.apiService = apiService;
      }

      _createClass(ServiceService, [{
        key: "getAllRichDestinations",
        value: function getAllRichDestinations(facilityId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/servicesManager/getAllRichDestinations', {
            'facility': facilityId
          }, showNotificationOnError);
        }
      }, {
        key: "getServicesByAttributeDefinition",
        value: function getServicesByAttributeDefinition(attDefId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.get("json/servicesManager/getServicesByAttributeDefinition?attributeDefinition=".concat(attDefId), new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](), showNotificationOnError);
        }
      }]);

      return ServiceService;
    }();

    ServiceService.ɵfac = function ServiceService_Factory(t) {
      return new (t || ServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_1__["PERUN_API_SERVICE"]));
    };

    ServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ServiceService,
      factory: ServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_1__["PERUN_API_SERVICE"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../../libs/perun/services/src/lib/store.service.ts":
  /*!*************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/services/src/lib/store.service.ts ***!
    \*************************************************************************************/

  /*! exports provided: StoreService */

  /***/
  function libsPerunServicesSrcLibStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreService", function () {
      return StoreService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * Class that just store data about instance and default configuration.
     * No logic involved.
     */


    var StoreService =
    /*#__PURE__*/
    function () {
      function StoreService() {
        _classCallCheck(this, StoreService);
      }

      _createClass(StoreService, [{
        key: "setInstanceConfig",
        value: function setInstanceConfig(instanceConfig) {
          this.instanceConfig = instanceConfig;
        }
      }, {
        key: "setDefaultConfig",
        value: function setDefaultConfig(defaultConfig) {
          this.defaultConfig = defaultConfig;
        }
      }, {
        key: "setPerunPrincipal",
        value: function setPerunPrincipal(principal) {
          this.principal = principal;
        }
      }, {
        key: "getPerunPrincipal",
        value: function getPerunPrincipal() {
          return this.principal;
        }
        /**
         * Get key from json configuration. If key is not present in instance
         * configuration method returns value from default configuration.
         * @param keys
         */

      }, {
        key: "get",
        value: function get() {
          var currentValue;

          for (var _len2 = arguments.length, keys = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            keys[_key2] = arguments[_key2];
          }

          if (this.instanceConfig !== undefined) {
            for (var i = 0; i < keys.length; ++i) {
              if (i === 0) {
                currentValue = this.instanceConfig[keys[i]];
              } else {
                if (currentValue === undefined) {
                  break;
                }

                currentValue = currentValue[keys[i]];
              }
            }
          }

          if (this.defaultConfig === undefined) {
            return undefined;
          }

          if (currentValue === undefined) {
            for (var _i4 = 0; _i4 < keys.length; ++_i4) {
              if (_i4 === 0) {
                currentValue = this.defaultConfig[keys[_i4]];
              } else {
                if (currentValue === undefined) {
                  console.error('Missing value in default config: ' + keys);
                  break;
                }

                currentValue = currentValue[keys[_i4]];
              }
            }
          }

          return currentValue;
        }
      }]);

      return StoreService;
    }();

    StoreService.ɵfac = function StoreService_Factory(t) {
      return new (t || StoreService)();
    };

    StoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StoreService,
      factory: StoreService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreService, [{
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
  "../../libs/perun/services/src/lib/users.service.ts":
  /*!*************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/services/src/lib/users.service.ts ***!
    \*************************************************************************************/

  /*! exports provided: UsersService */

  /***/
  function libsPerunServicesSrcLibUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/tokens */
    "../../libs/perun/tokens/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");

    var UsersService =
    /*#__PURE__*/
    function () {
      function UsersService(apiService) {
        _classCallCheck(this, UsersService);

        this.apiService = apiService;
      }

      _createClass(UsersService, [{
        key: "getUserExtSources",
        value: function getUserExtSources(userId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/usersManager/getUserExtSources', {
            user: userId
          }, showNotificationOnError);
        }
      }, {
        key: "getRichUserExtSources",
        value: function getRichUserExtSources(userId, attrsNames) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/usersManager/getRichUserExtSources', {
            user: userId,
            attrsNames: attrsNames
          }, showNotificationOnError);
        }
      }, {
        key: "getRichUserExtSourcesWithAllAttributes",
        value: function getRichUserExtSourcesWithAllAttributes(userId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/usersManager/getRichUserExtSources', {
            user: userId
          }, showNotificationOnError);
        }
      }, {
        key: "findRichUsersWithAttributes",
        value: function findRichUsersWithAttributes(searchString, attributes) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var attrParam = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_3__["parseUrnsToUrlParam"])('attrsNames', attributes);
          return this.apiService.get("json/usersManager/findRichUsersWithAttributes?searchString=".concat(searchString).concat(attrParam), new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"](), showNotificationOnError);
        }
      }, {
        key: "getUserById",
        value: function getUserById(userId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.get("json/usersManager/getUserById?id=".concat(userId), new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"](), showNotificationOnError);
        }
      }, {
        key: "findUsers",
        value: function findUsers(searchstring) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/usersManager/findUsers', {
            'searchString': searchstring
          }, showNotificationOnError);
        }
      }, {
        key: "findRichUsers",
        value: function findRichUsers(searchString) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/usersManager/findRichUsers', {
            searchString: searchString
          }, showNotificationOnError);
        }
      }, {
        key: "getRichUser",
        value: function getRichUser(userId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.get("json/usersManager/getRichUser?id=".concat(userId), new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"](), showNotificationOnError);
        }
      }, {
        key: "getVosWhereUserIsMember",
        value: function getVosWhereUserIsMember(userId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/usersManager/getVosWhereUserIsMember', {
            user: userId
          }, showNotificationOnError);
        }
      }, {
        key: "getVosWhereUserIsAdmin",
        value: function getVosWhereUserIsAdmin(userId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/usersManager/getVosWhereUserIsAdmin', {
            user: userId
          }, showNotificationOnError);
        }
      }, {
        key: "getGroupsWhereUserIsAdmin",
        value: function getGroupsWhereUserIsAdmin(userId) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.post('json/usersManager/getGroupsWhereUserIsAdmin', {
            'user': userId
          }, showNotificationOnError);
        }
      }]);

      return UsersService;
    }();

    UsersService.ɵfac = function UsersService_Factory(t) {
      return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_2__["PERUN_API_SERVICE"]));
    };

    UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsersService,
      factory: UsersService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_2__["PERUN_API_SERVICE"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../../libs/perun/services/src/lib/vo.service.ts":
  /*!**********************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/services/src/lib/vo.service.ts ***!
    \**********************************************************************************/

  /*! exports provided: VoService */

  /***/
  function libsPerunServicesSrcLibVoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoService", function () {
      return VoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/tokens */
    "../../libs/perun/tokens/src/index.ts");

    var VoService =
    /*#__PURE__*/
    function () {
      function VoService(apiService) {
        _classCallCheck(this, VoService);

        this.apiService = apiService;
      }

      _createClass(VoService, [{
        key: "getAllVos",
        value: function getAllVos() {
          var showNotificationOnError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return this.apiService.get('json/vosManager/getAllVos', new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"](), showNotificationOnError);
        }
      }, {
        key: "getVos",
        value: function getVos() {
          var showNotificationOnError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return this.apiService.get('json/vosManager/getVos', new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"](), showNotificationOnError);
        }
      }, {
        key: "getVoById",
        value: function getVoById(id) {
          var showNotificationOnError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return this.apiService.get("json/vosManager/getVoById?id=".concat(id), new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"](), showNotificationOnError);
        }
      }, {
        key: "getCompleteCandidates",
        value: function getCompleteCandidates(id, entity, attrNames, searchString) {
          var showNotificationOnError = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
          var payload = {
            attrNames: attrNames,
            searchString: searchString
          };
          payload[entity] = id;
          return this.apiService.post('json/vosManager/getCompleteCandidates', payload, showNotificationOnError);
        }
      }, {
        key: "removeVo",
        value: function removeVo(voId, force) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/vosManager/deleteVo', {
            vo: voId,
            force: force
          }, showNotificationOnError);
        }
      }, {
        key: "createVo",
        value: function createVo(fullName, shortName) {
          var showNotificationOnError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          return this.apiService.post('json/vosManager/createVo', {
            name: fullName,
            shortName: shortName
          }, showNotificationOnError);
        }
      }]);

      return VoService;
    }();

    VoService.ɵfac = function VoService_Factory(t) {
      return new (t || VoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_2__["PERUN_API_SERVICE"]));
    };

    VoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: VoService,
      factory: VoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_perun_web_apps_perun_tokens__WEBPACK_IMPORTED_MODULE_2__["PERUN_API_SERVICE"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../../libs/perun/tokens/src/index.ts":
  /*!***********************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/tokens/src/index.ts ***!
    \***********************************************************************/

  /*! exports provided: PERUN_API_SERVICE */

  /***/
  function libsPerunTokensSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PERUN_API_SERVICE", function () {
      return PERUN_API_SERVICE;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PERUN_API_SERVICE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('perun-api-service');
    /***/
  },

  /***/
  "../../libs/perun/utils/src/index.ts":
  /*!**********************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/utils/src/index.ts ***!
    \**********************************************************************/

  /*! exports provided: parseStatusIcon, parseStatusColor, parseEmail, parseUserEmail, parseLogins, parseUrnsToUrlParam, parseFullName, parseName, getRichUserAttribute, parseTechnicalOwnersNames, doAfterDelay, delay, getRecentlyVisited, getRecentlyVisitedIds, addRecentlyVisited, indexOfVo, parseVo, filterCoreAttributes, applyFilter, findParent, filterCoreAttributesDefinitions, getAttribute, getCandidateEmail, getExtSourceNameOrOrganizationColumn, convertCertCN, unescapeDN, translateIdp */

  /***/
  function libsPerunUtilsSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/perun-utils */
    "../../libs/perun/utils/src/lib/perun-utils.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "parseStatusIcon", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["parseStatusIcon"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "parseStatusColor", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["parseStatusColor"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "parseEmail", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["parseEmail"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "parseUserEmail", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["parseUserEmail"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "parseLogins", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["parseLogins"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "parseUrnsToUrlParam", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["parseUrnsToUrlParam"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "parseFullName", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["parseFullName"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "parseName", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["parseName"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getRichUserAttribute", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["getRichUserAttribute"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "parseTechnicalOwnersNames", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["parseTechnicalOwnersNames"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "doAfterDelay", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["doAfterDelay"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "delay", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["delay"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getRecentlyVisited", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["getRecentlyVisited"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getRecentlyVisitedIds", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["getRecentlyVisitedIds"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "addRecentlyVisited", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["addRecentlyVisited"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "indexOfVo", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["indexOfVo"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "parseVo", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["parseVo"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "filterCoreAttributes", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["filterCoreAttributes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "applyFilter", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["applyFilter"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "findParent", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["findParent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "filterCoreAttributesDefinitions", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["filterCoreAttributesDefinitions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getAttribute", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["getAttribute"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getCandidateEmail", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["getCandidateEmail"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getExtSourceNameOrOrganizationColumn", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["getExtSourceNameOrOrganizationColumn"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "convertCertCN", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["convertCertCN"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "unescapeDN", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["unescapeDN"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "translateIdp", function () {
      return _lib_perun_utils__WEBPACK_IMPORTED_MODULE_0__["translateIdp"];
    });
    /***/

  },

  /***/
  "../../libs/perun/utils/src/lib/perun-utils.ts":
  /*!********************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/utils/src/lib/perun-utils.ts ***!
    \********************************************************************************/

  /*! exports provided: parseStatusIcon, parseStatusColor, parseEmail, parseUserEmail, parseLogins, parseUrnsToUrlParam, parseFullName, parseName, getRichUserAttribute, parseTechnicalOwnersNames, doAfterDelay, delay, getRecentlyVisited, getRecentlyVisitedIds, addRecentlyVisited, indexOfVo, parseVo, filterCoreAttributes, applyFilter, findParent, filterCoreAttributesDefinitions, getAttribute, getCandidateEmail, getExtSourceNameOrOrganizationColumn, convertCertCN, unescapeDN, translateIdp */

  /***/
  function libsPerunUtilsSrcLibPerunUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseStatusIcon", function () {
      return parseStatusIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseStatusColor", function () {
      return parseStatusColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseEmail", function () {
      return parseEmail;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseUserEmail", function () {
      return parseUserEmail;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseLogins", function () {
      return parseLogins;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseUrnsToUrlParam", function () {
      return parseUrnsToUrlParam;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseFullName", function () {
      return parseFullName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseName", function () {
      return parseName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRichUserAttribute", function () {
      return getRichUserAttribute;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseTechnicalOwnersNames", function () {
      return parseTechnicalOwnersNames;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "doAfterDelay", function () {
      return doAfterDelay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "delay", function () {
      return delay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRecentlyVisited", function () {
      return getRecentlyVisited;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRecentlyVisitedIds", function () {
      return getRecentlyVisitedIds;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addRecentlyVisited", function () {
      return addRecentlyVisited;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "indexOfVo", function () {
      return indexOfVo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseVo", function () {
      return parseVo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "filterCoreAttributes", function () {
      return filterCoreAttributes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "applyFilter", function () {
      return applyFilter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "findParent", function () {
      return findParent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "filterCoreAttributesDefinitions", function () {
      return filterCoreAttributesDefinitions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAttribute", function () {
      return getAttribute;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCandidateEmail", function () {
      return getCandidateEmail;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getExtSourceNameOrOrganizationColumn", function () {
      return getExtSourceNameOrOrganizationColumn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "convertCertCN", function () {
      return convertCertCN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "unescapeDN", function () {
      return unescapeDN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "translateIdp", function () {
      return translateIdp;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    function parseStatusIcon(richMember) {
      switch (richMember.status) {
        case 'VALID':
          return 'verified_user';

        case 'INVALID':
          return 'report';

        case 'SUSPENDED':
          return 'lock';

        case 'EXPIRED':
          return 'schedule';

        case 'DISABLED':
          return 'delete';
      }
    }
    /**
     * Return color which should be used for icon of given member's status.
     *
     * @param richMember member
     */


    function parseStatusColor(richMember) {
      switch (richMember.status) {
        case 'VALID':
          return 'accent';

        case 'INVALID':
          return 'warn';

        default:
          return '';
      }
    }
    /**
     * Gets email of given member. The vo-email has top priority, the preferred email
     * has lower priority. If there are no emails, an empty string is returned.
     *
     * @param richMember RichMember
     */


    function parseEmail(richMember) {
      var email = '';

      if (richMember) {
        richMember.memberAttributes.forEach(function (attr) {
          if (attr.friendlyName === 'mail' && attr.value !== null) {
            email = attr.value;
          }
        });

        if (email.length === 0) {
          richMember.userAttributes.forEach(function (attr) {
            if (attr.friendlyName === 'preferredMail') {
              email = attr.value;
            }
          });
        }
      }

      return email;
    }
    /**
     * Gets email of given user. If there are no emails, an empty string is returned.
     *
     * @param richUser RichUser
     */


    function parseUserEmail(richUser) {
      var email = '';

      if (richUser) {
        richUser.userAttributes.forEach(function (attr) {
          if (attr.friendlyName === 'preferredMail') {
            email = attr.value;
          }
        });
      }

      return email;
    }
    /**
     * Get logins of given member.
     *
     * @param richMember member
     */


    function parseLogins(richMember) {
      var logins = '';
      richMember.userAttributes.forEach(function (attr) {
        // @ts-ignore
        if (attr.baseFriendlyName === 'login-namespace') {
          // @ts-ignore
          logins += attr.friendlyNameParameter + ': ' + attr.value + ' ';
        }
      });

      if (logins.endsWith(' ')) {
        logins = logins.substring(0, logins.length - 1);
      }

      return logins;
    }

    function parseUrnsToUrlParam(paramName, urns) {
      var attributesParam = '';
      urns.forEach(function (a) {
        return attributesParam = attributesParam.concat("&".concat(paramName, "%5B%5D=")).concat(a);
      });
      return attributesParam;
    }
    /**
     * Creates full name for given user form his titles and names.
     *
     * @param user user
     */


    function parseFullName(user) {
      var fullName = '';

      if (user.titleBefore !== null) {
        fullName += user.titleBefore + ' ';
      }

      if (user.firstName !== null) {
        fullName += user.firstName + ' ';
      }

      if (user.middleName !== null) {
        fullName += user.middleName + ' ';
      }

      if (user.lastName !== null) {
        fullName += user.lastName + ' ';
      }

      if (user.titleAfter !== null) {
        fullName += user.titleAfter + ' ';
      }

      if (fullName.endsWith(' ')) {
        fullName = fullName.substring(0, fullName.length - 1);
      }

      return fullName;
    }
    /**
     * Creates name for given user. Returns users name without his titles.
     *
     * @param user user
     */


    function parseName(user) {
      var fullName = '';

      if (user.firstName !== null) {
        fullName += user.firstName + ' ';
      }

      if (user.middleName !== null) {
        fullName += user.middleName + ' ';
      }

      if (user.lastName !== null) {
        fullName += user.lastName + ' ';
      }

      if (fullName.endsWith(' ')) {
        fullName = fullName.substring(0, fullName.length - 1);
      }

      return fullName;
    }
    /**
     * Returns attribute with specific urn from given rich user.
     * If the given user doesn't have attribute with given urn, null is returned.
     *
     * @param user user with attributes
     * @param urn urn for required attribute
     */


    function getRichUserAttribute(user, urn) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = user.userAttributes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var attribute = _step2.value;
          var attributeUrn = attribute.namespace + ':' + attribute.friendlyName;

          if (attributeUrn === urn) {
            return attribute;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return null;
    }

    function parseTechnicalOwnersNames(owners) {
      var names = '';
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = owners[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var owner = _step3.value;

          if (owner.type === 'technical') {
            names += owner.name + ', ';
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (names.endsWith(', ')) {
        names = names.substring(0, names.length - 2);
      }

      return names;
    }

    function doAfterDelay(delayMs, callback) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return delay(delayMs);

              case 2:
                callback();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }

    function delay(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }
    /**
     * Returns array with recently used entities at the top of array.
     *
     * @param key of localStorage
     * @param array of all entities
     */


    function getRecentlyVisited(key, array) {
      var recentIds = JSON.parse(localStorage.getItem(key));

      if (recentIds) {
        (function () {
          var recentlyVisited = [];

          var _loop = function _loop(i) {
            array.forEach(function (item, index) {
              if (item.id === recentIds[i]) {
                recentlyVisited.push(item);
                array.splice(index, 1);
              }
            });
          };

          for (var i = 0; i < recentIds.length; i++) {
            _loop(i);
          }

          for (var _i5 = recentlyVisited.length - 1; _i5 >= 0; _i5--) {
            array.unshift(recentlyVisited[_i5]);
          }
        })();
      }

      return array;
    }
    /**
     * Returns saved ids for given key.
     *
     * @param key of local storage
     */


    function getRecentlyVisitedIds(key) {
      var recentIds = JSON.parse(localStorage.getItem(key));

      if (recentIds) {
        return recentIds;
      }

      return [];
    }
    /**
     * Add entity that was just visited to localStorage.
     *
     * @param key of localStorage
     * @param item entity that was visited
     */


    function addRecentlyVisited(key, item) {
      if (localStorage.getItem(key) === null) {
        // if user not have any in local storage
        var recent = [];
        recent.unshift(item.id);
        localStorage.setItem('vos', JSON.stringify(recent));
      } else {
        var _recent = JSON.parse(localStorage.getItem(key));

        var index = indexOfVo(_recent, item.id);

        if (index > 0) {
          // if vo is in recent but not of first place, then we remove it to placed it first
          _recent.splice(index, 1);
        }

        if (index !== 0) {
          // place the element as first
          _recent.unshift(item.id);
        }

        if (_recent.length > 5) {
          // pop last element if length exceed 5 vo
          _recent.pop();
        }

        localStorage.setItem(key, JSON.stringify(_recent));
      }
    }

    function indexOfVo(recent, id) {
      for (var i = 0; i < recent.length; i++) {
        if (recent[i] === id) {
          return i;
        }
      }

      return -1;
    }
    /**
     * Gets Vo of given user.
     *
     * @param richUser RichUser
     */


    function parseVo(richUser) {
      var result = '';

      if (richUser) {
        richUser.userAttributes.forEach(function (attr) {
          if (attr.friendlyName === 'organization') {
            result = attr.value;
          }
        });
      }

      return result;
    }
    /**
     * From given attributes array removes all core attributes.
     *
     * @param attributes non core attributes
     */


    function filterCoreAttributes(attributes) {
      return attributes.filter(function (attribute) {
        return !attribute.namespace.includes('def:core');
      });
    }
    /**
     * Filter groups by given filter string.
     *
     * @param filterValue filter string
     * @param groups field of groups that its filtering
     * return field - on first position is groups filtered by name, on second groups are filtered by shortName and added their parents
     */


    function applyFilter(filterValue, groups) {
      var filteredTreeGroups = [];
      var filteredGroups = groups.filter(function (option) {
        return option.name.toLowerCase().includes(filterValue.toLowerCase());
      });
      var treegroup = groups.filter(function (option) {
        return option.shortName.toLowerCase().includes(filterValue.toLowerCase());
      });
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = treegroup[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var group = _step4.value;
          filteredTreeGroups.push(group);

          if (group.parentGroupId) {
            filteredTreeGroups.concat(findParent(group.parentGroupId, groups));
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return [filteredGroups, filteredTreeGroups];
    }
    /**
     * Find parents of given group in field of groups
     * @param group that you parent you want to found
     * @param groups field of groups where you want to find parent
     * return field of parents
     */


    function findParent(group, groups) {
      var parent = groups.find(function (x) {
        return x.id === group;
      });

      if (parent) {
        if (parent.parentGroupId) {
          return findParent(parent.parentGroupId, groups).concat(parent);
        } else {
          return [parent];
        }
      } else {
        return [];
      }
    }

    function filterCoreAttributesDefinitions(attributesDef) {
      return attributesDef.filter(function (attribute) {
        return !attribute.namespace.includes('def:core');
      });
    }
    /**
     * Finds attribute with given attrName from given attributes.
     *
     * @param attributes attributes
     * @param attrName attr name
     * @return attribute with given name or null if not found
     */


    function getAttribute(attributes, attrName) {
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = attributes[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var attribute = _step5.value;

          if (attribute.namespace + ":" + attribute.friendlyName === attrName) {
            return attribute;
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return null;
    }
    /**
     * Find candidate email in his attributes
     * @param candidate
     * @return candidate email
     */


    function getCandidateEmail(candidate) {
      if (candidate.attributes['urn:perun:member:attribute-def:def:mail'] != null) {
        return candidate.attributes['urn:perun:member:attribute-def:def:mail'];
      } else if (candidate.attributes['urn:perun:user:attribute-def:def:preferredMail'] != null) {
        return candidate.attributes['urn:perun:user:attribute-def:def:preferredMail'];
      }

      return "";
    }

    function getExtSourceNameOrOrganizationColumn(candidate) {
      if (candidate.userExtSource.extSource.type.toLowerCase() === "cz.metacentrum.perun.core.impl.ExtSourceX509".toLowerCase()) {
        return convertCertCN(candidate.userExtSource.extSource.name);
      } else if (candidate.userExtSource.extSource.type.toLowerCase() === "cz.metacentrum.perun.core.impl.ExtSourceIdp".toLowerCase()) {
        return translateIdp(candidate.userExtSource.extSource.name);
      } else {
        return candidate.userExtSource.extSource.name;
      }
    }
    /**
     * If passed string is DN of certificate(recognized by "/CN=") then returns only CN part with unescaped chars.
     * If passed string is not DN of certificate, original string is returned.
     *
     * @param toConvert
     * @return
     */


    function convertCertCN(toConvert) {
      if (toConvert.includes("/CN=")) {
        var splitted = toConvert.split("/");

        for (var s in splitted) {
          if (s.startsWith("CN=")) {
            return unescapeDN(s.substring(3));
          }
        }
      }

      return toConvert;
    }

    function unescapeDN(string) {
      return decodeURIComponent(string.replace(/\\x/g, '%'));
    }

    function translateIdp(name) {
      switch (name) {
        case 'https://idp.upce.cz/idp/shibboleth':
          return 'University in Pardubice';

        case 'https://idp.slu.cz/idp/shibboleth':
          return 'University in Opava';

        case 'https://login.feld.cvut.cz/idp/shibboleth':
          return 'Faculty of Electrical Engineering, Czech Technical University In Prague';

        case 'https://www.vutbr.cz/SSO/saml2/idp':
          return 'Brno University of Technology';

        case 'https://shibboleth.nkp.cz/idp/shibboleth':
          return 'The National Library of the Czech Republic';

        case 'https://idp2.civ.cvut.cz/idp/shibboleth':
          return 'Czech Technical University In Prague';

        case 'https://shibbo.tul.cz/idp/shibboleth':
          return 'Technical University of Liberec';

        case 'https://idp.mendelu.cz/idp/shibboleth':
          return 'Mendel University in Brno';

        case 'https://cas.cuni.cz/idp/shibboleth':
          return 'Charles University in Prague';

        case 'https://wsso.vscht.cz/idp/shibboleth':
          return 'Institute of Chemical Technology Prague';

        case 'https://idp.vsb.cz/idp/shibboleth':
          return 'VSB – Technical University of Ostrava';

        case 'https://whoami.cesnet.cz/idp/shibboleth':
          return 'CESNET';

        case 'https://helium.jcu.cz/idp/shibboleth':
          return 'University of South Bohemia';

        case 'https://idp.ujep.cz/idp/shibboleth':
          return 'Jan Evangelista Purkyne University in Usti nad Labem';

        case 'https://idp.amu.cz/idp/shibboleth':
          return 'Academy of Performing Arts in Prague';

        case 'https://idp.lib.cas.cz/idp/shibboleth':
          return 'Academy of Sciences Library';

        case 'https://shibboleth.mzk.cz/simplesaml/metadata.xml':
          return 'Moravian  Library';

        case 'https://idp2.ics.muni.cz/idp/shibboleth':
          return 'Masaryk University';

        case 'https://idp.upol.cz/idp/shibboleth':
          return 'Palacky University, Olomouc';

        case 'https://idp.fnplzen.cz/idp/shibboleth':
          return 'FN Plzen';

        case 'https://id.vse.cz/idp/shibboleth':
          return 'University of Economics, Prague';

        case 'https://shib.zcu.cz/idp/shibboleth':
          return 'University of West Bohemia';

        case 'https://idptoo.osu.cz/simplesaml/saml2/idp/metadata.php':
          return 'University of Ostrava';

        case 'https://login.ics.muni.cz/idp/shibboleth':
          return 'MetaCentrum';

        case 'https://idp.hostel.eduid.cz/idp/shibboleth':
          return 'eduID.cz Hostel';

        case 'https://shibboleth.techlib.cz/idp/shibboleth':
          return 'National Library of Technology';

        case 'https://eduid.jamu.cz/idp/shibboleth':
          return 'Janacek Academy of Music and Performing Arts in Brno';

        case 'https://marisa.uochb.cas.cz/simplesaml/saml2/idp/metadata.php':
          return 'Institute of Organic Chemistry and Biochemistry AS CR';

        case 'https://shibboleth.utb.cz/idp/shibboleth':
          return 'Tomas Bata University in Zlin';

        case 'https://engine.elixir-czech.org/authentication/idp/metadata':
          return 'Elixir Europe';

        case 'https://login.elixir-czech.org/idp':
          return 'Elixir Czech';

        case 'https://mojeid.cz/saml/idp.xml':
          return 'MojeID';

        case 'https://www.egi.eu/idp/shibboleth':
          return 'EGI SSO';

        case '@google.extidp.cesnet.cz':
          return 'Google';

        case '@facebook.extidp.cesnet.cz':
          return 'Facebook';

        case '@mojeid.extidp.cesnet.cz':
          return 'MojeID';

        case '@linkedin.extidp.cesnet.cz':
          return 'LinkedIn';

        case '@twitter.extidp.cesnet.cz':
          return 'Twitter';

        case '@seznam.extidp.cesnet.cz':
          return 'Seznam';

        case '@elixir-europe.org':
          return 'Elixir Europe';

        case '@github.extidp.cesnet.cz':
          return 'GitHub';

        case '@orcid.extidp.cesnet.cz':
          return 'OrcID';

        default:
          return name;
      }
    }
    /***/

  },

  /***/
  "../../node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!*********************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/node_modules/moment/locale sync ^\.\/.*$ ***!
    \*********************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "../../node_modules/moment/locale/af.js",
      "./af.js": "../../node_modules/moment/locale/af.js",
      "./ar": "../../node_modules/moment/locale/ar.js",
      "./ar-dz": "../../node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "../../node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "../../node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "../../node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "../../node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "../../node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "../../node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "../../node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "../../node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "../../node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "../../node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "../../node_modules/moment/locale/ar-tn.js",
      "./ar.js": "../../node_modules/moment/locale/ar.js",
      "./az": "../../node_modules/moment/locale/az.js",
      "./az.js": "../../node_modules/moment/locale/az.js",
      "./be": "../../node_modules/moment/locale/be.js",
      "./be.js": "../../node_modules/moment/locale/be.js",
      "./bg": "../../node_modules/moment/locale/bg.js",
      "./bg.js": "../../node_modules/moment/locale/bg.js",
      "./bm": "../../node_modules/moment/locale/bm.js",
      "./bm.js": "../../node_modules/moment/locale/bm.js",
      "./bn": "../../node_modules/moment/locale/bn.js",
      "./bn.js": "../../node_modules/moment/locale/bn.js",
      "./bo": "../../node_modules/moment/locale/bo.js",
      "./bo.js": "../../node_modules/moment/locale/bo.js",
      "./br": "../../node_modules/moment/locale/br.js",
      "./br.js": "../../node_modules/moment/locale/br.js",
      "./bs": "../../node_modules/moment/locale/bs.js",
      "./bs.js": "../../node_modules/moment/locale/bs.js",
      "./ca": "../../node_modules/moment/locale/ca.js",
      "./ca.js": "../../node_modules/moment/locale/ca.js",
      "./cs": "../../node_modules/moment/locale/cs.js",
      "./cs.js": "../../node_modules/moment/locale/cs.js",
      "./cv": "../../node_modules/moment/locale/cv.js",
      "./cv.js": "../../node_modules/moment/locale/cv.js",
      "./cy": "../../node_modules/moment/locale/cy.js",
      "./cy.js": "../../node_modules/moment/locale/cy.js",
      "./da": "../../node_modules/moment/locale/da.js",
      "./da.js": "../../node_modules/moment/locale/da.js",
      "./de": "../../node_modules/moment/locale/de.js",
      "./de-at": "../../node_modules/moment/locale/de-at.js",
      "./de-at.js": "../../node_modules/moment/locale/de-at.js",
      "./de-ch": "../../node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "../../node_modules/moment/locale/de-ch.js",
      "./de.js": "../../node_modules/moment/locale/de.js",
      "./dv": "../../node_modules/moment/locale/dv.js",
      "./dv.js": "../../node_modules/moment/locale/dv.js",
      "./el": "../../node_modules/moment/locale/el.js",
      "./el.js": "../../node_modules/moment/locale/el.js",
      "./en-SG": "../../node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "../../node_modules/moment/locale/en-SG.js",
      "./en-au": "../../node_modules/moment/locale/en-au.js",
      "./en-au.js": "../../node_modules/moment/locale/en-au.js",
      "./en-ca": "../../node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "../../node_modules/moment/locale/en-ca.js",
      "./en-gb": "../../node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "../../node_modules/moment/locale/en-gb.js",
      "./en-ie": "../../node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "../../node_modules/moment/locale/en-ie.js",
      "./en-il": "../../node_modules/moment/locale/en-il.js",
      "./en-il.js": "../../node_modules/moment/locale/en-il.js",
      "./en-nz": "../../node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "../../node_modules/moment/locale/en-nz.js",
      "./eo": "../../node_modules/moment/locale/eo.js",
      "./eo.js": "../../node_modules/moment/locale/eo.js",
      "./es": "../../node_modules/moment/locale/es.js",
      "./es-do": "../../node_modules/moment/locale/es-do.js",
      "./es-do.js": "../../node_modules/moment/locale/es-do.js",
      "./es-us": "../../node_modules/moment/locale/es-us.js",
      "./es-us.js": "../../node_modules/moment/locale/es-us.js",
      "./es.js": "../../node_modules/moment/locale/es.js",
      "./et": "../../node_modules/moment/locale/et.js",
      "./et.js": "../../node_modules/moment/locale/et.js",
      "./eu": "../../node_modules/moment/locale/eu.js",
      "./eu.js": "../../node_modules/moment/locale/eu.js",
      "./fa": "../../node_modules/moment/locale/fa.js",
      "./fa.js": "../../node_modules/moment/locale/fa.js",
      "./fi": "../../node_modules/moment/locale/fi.js",
      "./fi.js": "../../node_modules/moment/locale/fi.js",
      "./fo": "../../node_modules/moment/locale/fo.js",
      "./fo.js": "../../node_modules/moment/locale/fo.js",
      "./fr": "../../node_modules/moment/locale/fr.js",
      "./fr-ca": "../../node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "../../node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "../../node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "../../node_modules/moment/locale/fr-ch.js",
      "./fr.js": "../../node_modules/moment/locale/fr.js",
      "./fy": "../../node_modules/moment/locale/fy.js",
      "./fy.js": "../../node_modules/moment/locale/fy.js",
      "./ga": "../../node_modules/moment/locale/ga.js",
      "./ga.js": "../../node_modules/moment/locale/ga.js",
      "./gd": "../../node_modules/moment/locale/gd.js",
      "./gd.js": "../../node_modules/moment/locale/gd.js",
      "./gl": "../../node_modules/moment/locale/gl.js",
      "./gl.js": "../../node_modules/moment/locale/gl.js",
      "./gom-latn": "../../node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "../../node_modules/moment/locale/gom-latn.js",
      "./gu": "../../node_modules/moment/locale/gu.js",
      "./gu.js": "../../node_modules/moment/locale/gu.js",
      "./he": "../../node_modules/moment/locale/he.js",
      "./he.js": "../../node_modules/moment/locale/he.js",
      "./hi": "../../node_modules/moment/locale/hi.js",
      "./hi.js": "../../node_modules/moment/locale/hi.js",
      "./hr": "../../node_modules/moment/locale/hr.js",
      "./hr.js": "../../node_modules/moment/locale/hr.js",
      "./hu": "../../node_modules/moment/locale/hu.js",
      "./hu.js": "../../node_modules/moment/locale/hu.js",
      "./hy-am": "../../node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "../../node_modules/moment/locale/hy-am.js",
      "./id": "../../node_modules/moment/locale/id.js",
      "./id.js": "../../node_modules/moment/locale/id.js",
      "./is": "../../node_modules/moment/locale/is.js",
      "./is.js": "../../node_modules/moment/locale/is.js",
      "./it": "../../node_modules/moment/locale/it.js",
      "./it-ch": "../../node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "../../node_modules/moment/locale/it-ch.js",
      "./it.js": "../../node_modules/moment/locale/it.js",
      "./ja": "../../node_modules/moment/locale/ja.js",
      "./ja.js": "../../node_modules/moment/locale/ja.js",
      "./jv": "../../node_modules/moment/locale/jv.js",
      "./jv.js": "../../node_modules/moment/locale/jv.js",
      "./ka": "../../node_modules/moment/locale/ka.js",
      "./ka.js": "../../node_modules/moment/locale/ka.js",
      "./kk": "../../node_modules/moment/locale/kk.js",
      "./kk.js": "../../node_modules/moment/locale/kk.js",
      "./km": "../../node_modules/moment/locale/km.js",
      "./km.js": "../../node_modules/moment/locale/km.js",
      "./kn": "../../node_modules/moment/locale/kn.js",
      "./kn.js": "../../node_modules/moment/locale/kn.js",
      "./ko": "../../node_modules/moment/locale/ko.js",
      "./ko.js": "../../node_modules/moment/locale/ko.js",
      "./ku": "../../node_modules/moment/locale/ku.js",
      "./ku.js": "../../node_modules/moment/locale/ku.js",
      "./ky": "../../node_modules/moment/locale/ky.js",
      "./ky.js": "../../node_modules/moment/locale/ky.js",
      "./lb": "../../node_modules/moment/locale/lb.js",
      "./lb.js": "../../node_modules/moment/locale/lb.js",
      "./lo": "../../node_modules/moment/locale/lo.js",
      "./lo.js": "../../node_modules/moment/locale/lo.js",
      "./lt": "../../node_modules/moment/locale/lt.js",
      "./lt.js": "../../node_modules/moment/locale/lt.js",
      "./lv": "../../node_modules/moment/locale/lv.js",
      "./lv.js": "../../node_modules/moment/locale/lv.js",
      "./me": "../../node_modules/moment/locale/me.js",
      "./me.js": "../../node_modules/moment/locale/me.js",
      "./mi": "../../node_modules/moment/locale/mi.js",
      "./mi.js": "../../node_modules/moment/locale/mi.js",
      "./mk": "../../node_modules/moment/locale/mk.js",
      "./mk.js": "../../node_modules/moment/locale/mk.js",
      "./ml": "../../node_modules/moment/locale/ml.js",
      "./ml.js": "../../node_modules/moment/locale/ml.js",
      "./mn": "../../node_modules/moment/locale/mn.js",
      "./mn.js": "../../node_modules/moment/locale/mn.js",
      "./mr": "../../node_modules/moment/locale/mr.js",
      "./mr.js": "../../node_modules/moment/locale/mr.js",
      "./ms": "../../node_modules/moment/locale/ms.js",
      "./ms-my": "../../node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "../../node_modules/moment/locale/ms-my.js",
      "./ms.js": "../../node_modules/moment/locale/ms.js",
      "./mt": "../../node_modules/moment/locale/mt.js",
      "./mt.js": "../../node_modules/moment/locale/mt.js",
      "./my": "../../node_modules/moment/locale/my.js",
      "./my.js": "../../node_modules/moment/locale/my.js",
      "./nb": "../../node_modules/moment/locale/nb.js",
      "./nb.js": "../../node_modules/moment/locale/nb.js",
      "./ne": "../../node_modules/moment/locale/ne.js",
      "./ne.js": "../../node_modules/moment/locale/ne.js",
      "./nl": "../../node_modules/moment/locale/nl.js",
      "./nl-be": "../../node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "../../node_modules/moment/locale/nl-be.js",
      "./nl.js": "../../node_modules/moment/locale/nl.js",
      "./nn": "../../node_modules/moment/locale/nn.js",
      "./nn.js": "../../node_modules/moment/locale/nn.js",
      "./pa-in": "../../node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "../../node_modules/moment/locale/pa-in.js",
      "./pl": "../../node_modules/moment/locale/pl.js",
      "./pl.js": "../../node_modules/moment/locale/pl.js",
      "./pt": "../../node_modules/moment/locale/pt.js",
      "./pt-br": "../../node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "../../node_modules/moment/locale/pt-br.js",
      "./pt.js": "../../node_modules/moment/locale/pt.js",
      "./ro": "../../node_modules/moment/locale/ro.js",
      "./ro.js": "../../node_modules/moment/locale/ro.js",
      "./ru": "../../node_modules/moment/locale/ru.js",
      "./ru.js": "../../node_modules/moment/locale/ru.js",
      "./sd": "../../node_modules/moment/locale/sd.js",
      "./sd.js": "../../node_modules/moment/locale/sd.js",
      "./se": "../../node_modules/moment/locale/se.js",
      "./se.js": "../../node_modules/moment/locale/se.js",
      "./si": "../../node_modules/moment/locale/si.js",
      "./si.js": "../../node_modules/moment/locale/si.js",
      "./sk": "../../node_modules/moment/locale/sk.js",
      "./sk.js": "../../node_modules/moment/locale/sk.js",
      "./sl": "../../node_modules/moment/locale/sl.js",
      "./sl.js": "../../node_modules/moment/locale/sl.js",
      "./sq": "../../node_modules/moment/locale/sq.js",
      "./sq.js": "../../node_modules/moment/locale/sq.js",
      "./sr": "../../node_modules/moment/locale/sr.js",
      "./sr-cyrl": "../../node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "../../node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "../../node_modules/moment/locale/sr.js",
      "./ss": "../../node_modules/moment/locale/ss.js",
      "./ss.js": "../../node_modules/moment/locale/ss.js",
      "./sv": "../../node_modules/moment/locale/sv.js",
      "./sv.js": "../../node_modules/moment/locale/sv.js",
      "./sw": "../../node_modules/moment/locale/sw.js",
      "./sw.js": "../../node_modules/moment/locale/sw.js",
      "./ta": "../../node_modules/moment/locale/ta.js",
      "./ta.js": "../../node_modules/moment/locale/ta.js",
      "./te": "../../node_modules/moment/locale/te.js",
      "./te.js": "../../node_modules/moment/locale/te.js",
      "./tet": "../../node_modules/moment/locale/tet.js",
      "./tet.js": "../../node_modules/moment/locale/tet.js",
      "./tg": "../../node_modules/moment/locale/tg.js",
      "./tg.js": "../../node_modules/moment/locale/tg.js",
      "./th": "../../node_modules/moment/locale/th.js",
      "./th.js": "../../node_modules/moment/locale/th.js",
      "./tl-ph": "../../node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "../../node_modules/moment/locale/tl-ph.js",
      "./tlh": "../../node_modules/moment/locale/tlh.js",
      "./tlh.js": "../../node_modules/moment/locale/tlh.js",
      "./tr": "../../node_modules/moment/locale/tr.js",
      "./tr.js": "../../node_modules/moment/locale/tr.js",
      "./tzl": "../../node_modules/moment/locale/tzl.js",
      "./tzl.js": "../../node_modules/moment/locale/tzl.js",
      "./tzm": "../../node_modules/moment/locale/tzm.js",
      "./tzm-latn": "../../node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "../../node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "../../node_modules/moment/locale/tzm.js",
      "./ug-cn": "../../node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "../../node_modules/moment/locale/ug-cn.js",
      "./uk": "../../node_modules/moment/locale/uk.js",
      "./uk.js": "../../node_modules/moment/locale/uk.js",
      "./ur": "../../node_modules/moment/locale/ur.js",
      "./ur.js": "../../node_modules/moment/locale/ur.js",
      "./uz": "../../node_modules/moment/locale/uz.js",
      "./uz-latn": "../../node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "../../node_modules/moment/locale/uz-latn.js",
      "./uz.js": "../../node_modules/moment/locale/uz.js",
      "./vi": "../../node_modules/moment/locale/vi.js",
      "./vi.js": "../../node_modules/moment/locale/vi.js",
      "./x-pseudo": "../../node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "../../node_modules/moment/locale/x-pseudo.js",
      "./yo": "../../node_modules/moment/locale/yo.js",
      "./yo.js": "../../node_modules/moment/locale/yo.js",
      "./zh-cn": "../../node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "../../node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "../../node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "../../node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "../../node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "../../node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "../../node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/home-page/home-page.component */
    "./src/app/pages/home-page/home-page.component.ts");

    var routes = [{
      path: '',
      component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'statistics';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["perun-web-apps-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3N0YXRpc3RpY3Mvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'perun-web-apps-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: provideApollo, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "provideApollo", function () {
      return provideApollo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! apollo-angular */
    "../../node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/home-page/home-page.component */
    "./src/app/pages/home-page/home-page.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _components_repository_commits_repository_commits_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/repository-commits/repository-commits.component */
    "./src/app/components/repository-commits/repository-commits.component.ts");
    /* harmony import */


    var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! apollo-angular-link-http */
    "../../node_modules/apollo-angular-link-http/__ivy_ngcc__/fesm2015/ngApolloLinkHttp.js");
    /* harmony import */


    var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! apollo-cache-inmemory */
    "../../node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var apollo_link_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! apollo-link-context */
    "../../node_modules/apollo-link-context/lib/bundle.esm.js");
    /* harmony import */


    var apollo_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! apollo-link */
    "../../node_modules/apollo-link/lib/bundle.esm.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng2-charts */
    "../../node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _perun_web_apps_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @perun-web-apps/config */
    "../../libs/config/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _components_graphana_graph_graphana_graph_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/graphana-graph/graphana-graph.component */
    "./src/app/components/graphana-graph/graphana-graph.component.ts");
    /* harmony import */


    var _components_jednotne_prihlaseni_loginy_jednotne_prihlaseni_loginy_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/jednotne-prihlaseni-loginy/jednotne-prihlaseni-loginy.component */
    "./src/app/components/jednotne-prihlaseni-loginy/jednotne-prihlaseni-loginy.component.ts");

    function provideApollo(httpLink, store) {
      var basic = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_11__["setContext"])(function (operation, context) {
        return {
          headers: {
            Accept: 'charset=utf-8'
          }
        };
      });
      var TOKEN = store.get('github_token'); // Get the authentication token from local storage if it exists

      var auth = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_11__["setContext"])(function (operation, context) {
        return {
          headers: {
            Authorization: "token ".concat(TOKEN)
          }
        };
      });
      var link = apollo_link__WEBPACK_IMPORTED_MODULE_12__["ApolloLink"].from([basic, auth, httpLink.create({
        uri: 'https://api.github.com/graphql'
      })]);
      var cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_9__["InMemoryCache"]();
      var defaultOptions = {
        watchQuery: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'ignore'
        },
        query: {
          fetchPolicy: 'no-cache',
          errorPolicy: 'all'
        }
      };
      return {
        link: link,
        cache: cache,
        defaultOptions: defaultOptions
      };
    }

    var loadConfigs = function loadConfigs(appConfig) {
      return function () {
        return appConfig.loadAppDefaultConfig().then(function () {
          return appConfig.loadAppInstanceConfig();
        });
      };
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: apollo_angular__WEBPACK_IMPORTED_MODULE_3__["APOLLO_OPTIONS"],
        useFactory: provideApollo,
        deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_8__["HttpLink"], _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_17__["StoreService"]]
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
        useFactory: loadConfigs,
        multi: true,
        deps: [_perun_web_apps_config__WEBPACK_IMPORTED_MODULE_16__["AppConfigService"]]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], apollo_angular__WEBPACK_IMPORTED_MODULE_3__["ApolloModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_8__["HttpLinkModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_13__["ChartsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"], _components_repository_commits_repository_commits_component__WEBPACK_IMPORTED_MODULE_7__["RepositoryCommitsComponent"], _components_graphana_graph_graphana_graph_component__WEBPACK_IMPORTED_MODULE_18__["GraphanaGraphComponent"], _components_jednotne_prihlaseni_loginy_jednotne_prihlaseni_loginy_component__WEBPACK_IMPORTED_MODULE_19__["JednotnePrihlaseniLoginyComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], apollo_angular__WEBPACK_IMPORTED_MODULE_3__["ApolloModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_8__["HttpLinkModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_13__["ChartsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"], _components_repository_commits_repository_commits_component__WEBPACK_IMPORTED_MODULE_7__["RepositoryCommitsComponent"], _components_graphana_graph_graphana_graph_component__WEBPACK_IMPORTED_MODULE_18__["GraphanaGraphComponent"], _components_jednotne_prihlaseni_loginy_jednotne_prihlaseni_loginy_component__WEBPACK_IMPORTED_MODULE_19__["JednotnePrihlaseniLoginyComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], apollo_angular__WEBPACK_IMPORTED_MODULE_3__["ApolloModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_8__["HttpLinkModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_13__["ChartsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"]],
          providers: [{
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_3__["APOLLO_OPTIONS"],
            useFactory: provideApollo,
            deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_8__["HttpLink"], _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_17__["StoreService"]]
          }, {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
            useFactory: loadConfigs,
            multi: true,
            deps: [_perun_web_apps_config__WEBPACK_IMPORTED_MODULE_16__["AppConfigService"]]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/graphana-graph/graphana-graph.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/graphana-graph/graphana-graph.component.ts ***!
    \***********************************************************************/

  /*! exports provided: GraphanaGraphComponent */

  /***/
  function srcAppComponentsGraphanaGraphGraphanaGraphComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphanaGraphComponent", function () {
      return GraphanaGraphComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var GraphanaGraphComponent =
    /*#__PURE__*/
    function () {
      function GraphanaGraphComponent(httpClient) {
        _classCallCheck(this, GraphanaGraphComponent);

        this.httpClient = httpClient;
      }

      _createClass(GraphanaGraphComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.httpClient.get("https://id.muni.cz/simplesaml/grafana.php?panelId=".concat(this.panelId, "&width=500&height=400"), {
            responseType: 'blob'
          }).subscribe(function (data) {
            var reader = new FileReader();
            reader.readAsDataURL(data);

            reader.onloadend = function () {
              _this13.imgUrl = reader.result;
              console.log(reader.result);
            };
          });
        }
      }]);

      return GraphanaGraphComponent;
    }();

    GraphanaGraphComponent.ɵfac = function GraphanaGraphComponent_Factory(t) {
      return new (t || GraphanaGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    GraphanaGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GraphanaGraphComponent,
      selectors: [["perun-web-apps-graphana-graph"]],
      inputs: {
        panelId: "panelId"
      },
      decls: 1,
      vars: 1,
      consts: [[1, "graph", 3, "src"]],
      template: function GraphanaGraphComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      styles: [".graph[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZlY3RvdW4vZ2l0L3BlcnVuLXdlYi1hcHBzL2FwcHMvc3RhdGlzdGljcy9zcmMvYXBwL2NvbXBvbmVudHMvZ3JhcGhhbmEtZ3JhcGgvZ3JhcGhhbmEtZ3JhcGguY29tcG9uZW50LnNjc3MiLCJhcHBzL3N0YXRpc3RpY3Mvc3JjL2FwcC9jb21wb25lbnRzL2dyYXBoYW5hLWdyYXBoL2dyYXBoYW5hLWdyYXBoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6ImFwcHMvc3RhdGlzdGljcy9zcmMvYXBwL2NvbXBvbmVudHMvZ3JhcGhhbmEtZ3JhcGgvZ3JhcGhhbmEtZ3JhcGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JhcGgge1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIi5ncmFwaCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphanaGraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'perun-web-apps-graphana-graph',
          templateUrl: './graphana-graph.component.html',
          styleUrls: ['./graphana-graph.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, {
        panelId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/jednotne-prihlaseni-loginy/jednotne-prihlaseni-loginy.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/jednotne-prihlaseni-loginy/jednotne-prihlaseni-loginy.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: JednotnePrihlaseniLoginyComponent */

  /***/
  function srcAppComponentsJednotnePrihlaseniLoginyJednotnePrihlaseniLoginyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JednotnePrihlaseniLoginyComponent", function () {
      return JednotnePrihlaseniLoginyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var JednotnePrihlaseniLoginyComponent =
    /*#__PURE__*/
    function () {
      function JednotnePrihlaseniLoginyComponent(store, httpClient) {
        _classCallCheck(this, JednotnePrihlaseniLoginyComponent);

        this.store = store;
        this.httpClient = httpClient;
      }

      _createClass(JednotnePrihlaseniLoginyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var url = this.store.get('proxy_stat_url');
          this.httpClient.get(url).subscribe(function (data) {
            console.log(data);
          });
        }
      }]);

      return JednotnePrihlaseniLoginyComponent;
    }();

    JednotnePrihlaseniLoginyComponent.ɵfac = function JednotnePrihlaseniLoginyComponent_Factory(t) {
      return new (t || JednotnePrihlaseniLoginyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_1__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    JednotnePrihlaseniLoginyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JednotnePrihlaseniLoginyComponent,
      selectors: [["perun-web-apps-jednotne-prihlaseni-loginy"]],
      decls: 2,
      vars: 0,
      template: function JednotnePrihlaseniLoginyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "jednotne-prihlaseni-loginy works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3N0YXRpc3RpY3Mvc3JjL2FwcC9jb21wb25lbnRzL2plZG5vdG5lLXByaWhsYXNlbmktbG9naW55L2plZG5vdG5lLXByaWhsYXNlbmktbG9naW55LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JednotnePrihlaseniLoginyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'perun-web-apps-jednotne-prihlaseni-loginy',
          templateUrl: './jednotne-prihlaseni-loginy.component.html',
          styleUrls: ['./jednotne-prihlaseni-loginy.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_1__["StoreService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/repository-commits/repository-commits.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/repository-commits/repository-commits.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: RepositoryCommitsComponent */

  /***/
  function srcAppComponentsRepositoryCommitsRepositoryCommitsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepositoryCommitsComponent", function () {
      return RepositoryCommitsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! graphql-tag */
    "../../node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apollo-angular */
    "../../node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _services_refresher_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/refresher.service */
    "./src/app/services/refresher.service.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-charts */
    "../../node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    function RepositoryCommitsComponent_mat_spinner_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 3);
      }
    }

    function RepositoryCommitsComponent_canvas_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 4);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartType", "line")("datasets", ctx_r3.chartData)("labels", ctx_r3.chartLabels)("legend", true);
      }
    }

    var GET_DATA = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a(_templateObject());

    var RepositoryCommitsComponent =
    /*#__PURE__*/
    function () {
      function RepositoryCommitsComponent(apollo, refresher) {
        _classCallCheck(this, RepositoryCommitsComponent);

        this.apollo = apollo;
        this.refresher = refresher;
        this.commitsPerDate = new Map();
        this.chartData = [{
          data: [],
          label: 'Merged pull requests'
        }];
        this.chartLabels = [];
        this.daysBack = 7;
        this.repoOwner = 'CESNET';
        this.repoName = 'Perun';
        this.loading = true;
      }

      _createClass(RepositoryCommitsComponent, [{
        key: "fetchData",
        value: function fetchData(shouldLoad) {
          var _this14 = this;

          if (shouldLoad) {
            this.loading = true;
          }

          var sinceDay = this.initMap();
          console.log(sinceDay);
          this.data = this.apollo.watchQuery({
            query: GET_DATA,
            variables: {
              owner: this.repoOwner,
              repoName: this.repoName,
              since: sinceDay
            }
          }).valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            console.log(result);
            return result.data.repository.ref.target.history.edges;
          }));
          this.data.subscribe(function (values) {
            values.forEach(function (e) {
              var date = e.node.committedDate.substring(0, 10);

              _this14.commitsPerDate.set(date, _this14.commitsPerDate.get(date) + 1);
            });
            console.log(_this14.commitsPerDate);

            _this14.setCharData();

            if (shouldLoad) {
              _this14.loading = false;
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.fetchData(true);
          this.refresher.subscribe(function () {
            return _this15.fetchData(false);
          });
        }
      }, {
        key: "initMap",
        value: function initMap() {
          this.commitsPerDate = new Map();
          var d;

          for (var i = 0; i < this.daysBack; i++) {
            d = new Date();
            d.setDate(d.getDate() - i);
            this.commitsPerDate.set(Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(d, 'yyyy-MM-dd', 'en'), 0);
          }

          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(d, 'yyyy-MM-ddT00:00:00Z', 'en');
        }
      }, {
        key: "setCharData",
        value: function setCharData() {
          var commitData = new Array();
          var commitLabels = new Array();

          for (var i = 0; i < this.daysBack; i++) {
            var d = new Date();
            d.setDate(d.getDate() - i);
            var key = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(d, 'yyyy-MM-dd', 'en');
            commitData[this.daysBack - i - 1] = this.commitsPerDate.get(key);
            commitLabels[this.daysBack - i - 1] = key;
          }

          this.chartData[0].data = commitData;
          this.chartLabels = commitLabels;
          console.log(commitData);
        }
      }]);

      return RepositoryCommitsComponent;
    }();

    RepositoryCommitsComponent.ɵfac = function RepositoryCommitsComponent_Factory(t) {
      return new (t || RepositoryCommitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_refresher_service__WEBPACK_IMPORTED_MODULE_5__["RefresherService"]));
    };

    RepositoryCommitsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RepositoryCommitsComponent,
      selectors: [["perun-web-apps-repository-commits"]],
      inputs: {
        daysBack: "daysBack",
        repoOwner: "repoOwner",
        repoName: "repoName"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "d-flex", "w-100"], ["class", "ml-auto mr-auto", 4, "ngIf"], ["baseChart", "", "class", "chart", 3, "chartType", "datasets", "labels", "legend", 4, "ngIf"], [1, "ml-auto", "mr-auto"], ["baseChart", "", 1, "chart", 3, "chartType", "datasets", "labels", "legend"]],
      template: function RepositoryCommitsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RepositoryCommitsComponent_mat_spinner_1_Template, 1, 0, "mat-spinner", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RepositoryCommitsComponent_canvas_2_Template, 1, 4, "canvas", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["BaseChartDirective"]],
      styles: [".chart[_ngcontent-%COMP%] {\n  margin: 3rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZlY3RvdW4vZ2l0L3BlcnVuLXdlYi1hcHBzL2FwcHMvc3RhdGlzdGljcy9zcmMvYXBwL2NvbXBvbmVudHMvcmVwb3NpdG9yeS1jb21taXRzL3JlcG9zaXRvcnktY29tbWl0cy5jb21wb25lbnQuc2NzcyIsImFwcHMvc3RhdGlzdGljcy9zcmMvYXBwL2NvbXBvbmVudHMvcmVwb3NpdG9yeS1jb21taXRzL3JlcG9zaXRvcnktY29tbWl0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRiIsImZpbGUiOiJhcHBzL3N0YXRpc3RpY3Mvc3JjL2FwcC9jb21wb25lbnRzL3JlcG9zaXRvcnktY29tbWl0cy9yZXBvc2l0b3J5LWNvbW1pdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnQge1xuICBtYXJnaW46IDNyZW0gMDtcbn1cbiIsIi5jaGFydCB7XG4gIG1hcmdpbjogM3JlbSAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepositoryCommitsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'perun-web-apps-repository-commits',
          templateUrl: './repository-commits.component.html',
          styleUrls: ['./repository-commits.component.scss']
        }]
      }], function () {
        return [{
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]
        }, {
          type: _services_refresher_service__WEBPACK_IMPORTED_MODULE_5__["RefresherService"]
        }];
      }, {
        daysBack: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        repoOwner: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        repoName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/home-page/home-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/home-page/home-page.component.ts ***!
    \********************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppPagesHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _components_repository_commits_repository_commits_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/repository-commits/repository-commits.component */
    "./src/app/components/repository-commits/repository-commits.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_graphana_graph_graphana_graph_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/graphana-graph/graphana-graph.component */
    "./src/app/components/graphana-graph/graphana-graph.component.ts");

    function HomePageComponent_mat_card_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Jednotne prihlaseni");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "perun-web-apps-graphana-graph", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var id_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelId", id_r1);
      }
    }

    var HomePageComponent =
    /*#__PURE__*/
    function () {
      function HomePageComponent(store) {
        _classCallCheck(this, HomePageComponent);

        this.store = store;
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.graphanaIds = this.store.get('graphana_ids');
          console.log(this.graphanaIds);
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
      return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_1__["StoreService"]));
    };

    HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomePageComponent,
      selectors: [["perun-web-apps-home-page"]],
      decls: 15,
      vars: 7,
      consts: [[1, "container-fluid", "pt-4"], [1, "graph-container"], [3, "repoName", "repoOwner", "daysBack"], [4, "ngFor", "ngForOf"], [3, "panelId"]],
      template: function HomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Perun repository");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "perun-web-apps-repository-commits", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Perun-web-apps repository");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "perun-web-apps-repository-commits", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomePageComponent_mat_card_14_Template, 6, 1, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("repoName", "perun")("repoOwner", "CESNET")("daysBack", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("repoName", "perun-web-apps")("repoOwner", "CESNET")("daysBack", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.graphanaIds);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _components_repository_commits_repository_commits_component__WEBPACK_IMPORTED_MODULE_3__["RepositoryCommitsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_graphana_graph_graphana_graph_component__WEBPACK_IMPORTED_MODULE_5__["GraphanaGraphComponent"]],
      styles: [".graph-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 0;\n  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));\n  grid-column-gap: 24px;\n  grid-row-gap: 24px;\n}\n@media (max-width: 1100px) {\n  .graph-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-gap: 0;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)) !important;\n    grid-column-gap: 12px;\n    grid-row-gap: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZlY3RvdW4vZ2l0L3BlcnVuLXdlYi1hcHBzL2FwcHMvc3RhdGlzdGljcy9zcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJhcHBzL3N0YXRpc3RpY3Mvc3JjL2FwcC9wYWdlcy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw0REFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBUEY7SUFRSSxhQUFBO0lBQ0EsV0FBQTtJQUNBLHVFQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtFQ0VGO0FBQ0YiLCJmaWxlIjoiYXBwcy9zdGF0aXN0aWNzL3NyYy9hcHAvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmFwaC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLG1pbm1heCg0MjBweCwxZnIpKTtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiAyNHB4O1xuICBncmlkLXJvdy1nYXA6IDI0cHg7XG5cbiAgQG1lZGlhKG1heC13aWR0aDogMTEwMHB4KSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogMDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsbWlubWF4KDMwMHB4LDFmcikpICFpbXBvcnRhbnQ7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAxMnB4O1xuICAgIGdyaWQtcm93LWdhcDogMTJweDtcbiAgfVxufVxuIiwiLmdyYXBoLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAwO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MjBweCwgMWZyKSk7XG4gIGdyaWQtY29sdW1uLWdhcDogMjRweDtcbiAgZ3JpZC1yb3ctZ2FwOiAyNHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAuZ3JhcGgtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAwO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKSAhaW1wb3J0YW50O1xuICAgIGdyaWQtY29sdW1uLWdhcDogMTJweDtcbiAgICBncmlkLXJvdy1nYXA6IDEycHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'perun-web-apps-home-page',
          templateUrl: './home-page.component.html',
          styleUrls: ['./home-page.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_1__["StoreService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/refresher.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/refresher.service.ts ***!
    \***********************************************/

  /*! exports provided: RefresherService */

  /***/
  function srcAppServicesRefresherServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefresherService", function () {
      return RefresherService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");

    var RefresherService =
    /*#__PURE__*/
    function () {
      function RefresherService() {
        _classCallCheck(this, RefresherService);

        this.refresh = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(60000);
      }

      _createClass(RefresherService, [{
        key: "subscribe",
        value: function subscribe(observer) {
          return this.refresh.subscribe(observer);
        }
      }]);

      return RefresherService;
    }();

    RefresherService.ɵfac = function RefresherService_Factory(t) {
      return new (t || RefresherService)();
    };

    RefresherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RefresherService,
      factory: RefresherService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefresherService, [{
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
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/vectoun/git/perun-web-apps/apps/statistics/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map