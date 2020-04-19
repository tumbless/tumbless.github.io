function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/_service/queue-system.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/_service/queue-system.service.ts ***!
    \**************************************************/

  /*! exports provided: QueueSystemService */

  /***/
  function srcApp_serviceQueueSystemServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QueueSystemService", function () {
      return QueueSystemService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var QueueSystemService = /*#__PURE__*/function () {
      function QueueSystemService(httpClient) {
        _classCallCheck(this, QueueSystemService);

        this.httpClient = httpClient;
        this.id = 1;
        this.getUrl = 'https://imac.local:5100/api/blog/';
        this.name = 'Queue System';
        this.postUrl = 'https://imac.local:5100/api/blog/';
      }

      _createClass(QueueSystemService, [{
        key: "init",
        value: function init() {
          var _this = this;

          return this.doQuery(this.getUrl, "query {\n\t\t\tblogs {\n\t\t\tblogId\n\t\t\t\ttumblr {\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t}\n\t\t}").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (data) {
            _this.user = {
              blogs: data.blogs
            };
          }));
        }
      }, {
        key: "queue",
        value: function queue(to, posts) {
          return this.doQuery(this.postUrl, "\n\t\t\tmutation do($blogId: String!, $fromId: String!, $posts: [PostInput!]!) {\n\t\t\t\taddPosts(blogId: $blogId, fromId: $fromId, posts: $posts) {\n\t\t\t\t\tok\n\t\t\t\t}\n\t\t\t}\n\t\t", {
            blogId: to,
            fromId: posts[0]['fromId'],
            posts: posts
          });
        }
      }, {
        key: "doQuery",
        value: function doQuery(endpoint, query) {
          var variables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.httpClient.post(endpoint, {
            query: query,
            variables: variables
          }, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            if (data.errors) {
              throw new Error(data.errors[0].message);
            }

            return data.data;
          }));
        }
      }]);

      return QueueSystemService;
    }();

    QueueSystemService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      factory: function QueueSystemService_Factory() {
        return new QueueSystemService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      },
      token: QueueSystemService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/_service/queue.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_service/queue.service.ts ***!
    \*******************************************/

  /*! exports provided: QueueService, ɵ0 */

  /***/
  function srcApp_serviceQueueServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QueueService", function () {
      return QueueService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var lodash_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! lodash/string */
    "./node_modules/lodash/string.js");
    /* harmony import */


    var lodash_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_string__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var QueueService = /*#__PURE__*/function () {
      function QueueService() {
        _classCallCheck(this, QueueService);

        this.posts$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.posts$ = this.posts$$.asObservable();
        this.consumer$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.consumer$ = this.consumer$$.asObservable();
      }

      _createClass(QueueService, [{
        key: "clearPosts",
        value: function clearPosts() {
          this.posts = [];
        }
      }, {
        key: "addPost",
        value: function addPost(post) {
          this.posts = [].concat(_toConsumableArray(this.posts), [post]);
        }
      }, {
        key: "removePost",
        value: function removePost(post) {
          this.posts = this.posts.filter(function (p) {
            return p.id !== post.id;
          });
        }
      }, {
        key: "selectPost",
        value: function selectPost(id) {
          var post = this.posts.find(function (p) {
            return p.id == id;
          });
          console.log(post);

          if (post) {
            var index = this.posts.indexOf(post);
            var selected = !post.selected;
            this.posts[index] = Object.assign({}, post, {
              selected: selected
            });
            this.posts = _toConsumableArray(this.posts);
          }
        }
      }, {
        key: "selectPostByNoteCount",
        value: function selectPostByNoteCount(count) {
          this.posts = this.posts.map(function (post) {
            if (post.note_count >= count) {
              post.selected = true;
            }

            return post;
          });
        }
      }, {
        key: "selectedPostsCount",
        value: function selectedPostsCount() {
          return this.posts.reduce(function (n, p) {
            if (p.selected) {
              return n + 1;
            }

            return n;
          }, 0);
        }
      }, {
        key: "selectedPosts",
        value: function selectedPosts() {
          return this.posts.filter(function (post) {
            return post.selected === true;
          }).map(function (post) {
            return {
              fromId: post['blog']['uuid'],
              postId: post.id,
              reblogKey: post.reblog_key
            };
          });
        }
      }, {
        key: "setConsumer",
        value: function setConsumer(consumer) {
          this.consumer = consumer;
        }
      }, {
        key: "queue",
        value: function queue(blog) {
          var _this2 = this;

          this.consumer.queue(blog, this.selectedPosts()).subscribe(function () {
            _this2.posts = _this2.posts.map(function (post) {
              post.selected = false;
              return post;
            });
          }, function (error) {
            window.alert(error.message);
          }, console.log);
        }
      }, {
        key: "posts",
        get: function get() {
          return this.posts$$.getValue();
        },
        set: function set(p) {
          this.posts$$.next(p);
        }
      }, {
        key: "consumer",
        get: function get() {
          return this.consumer$$.getValue();
        },
        set: function set(consumer) {
          this.consumer$$.next(consumer);
        }
      }]);

      return QueueService;
    }();

    QueueService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      factory: function QueueService_Factory() {
        return new QueueService();
      },
      token: QueueService,
      providedIn: "root"
    });

    var camelCaseKeys = function camelCaseKeys(obj) {
      return Object.keys(obj).reduce(function (ccObj, field) {
        return Object.assign({}, ccObj, _defineProperty({}, Object(lodash_string__WEBPACK_IMPORTED_MODULE_0__["camelCase"])(field), obj[field]));
      }, {});
    };

    var ɵ0 = camelCaseKeys;
    /***/
  },

  /***/
  "./src/app/app.component.ngfactory.js":
  /*!********************************************!*\
    !*** ./src/app/app.component.ngfactory.js ***!
    \********************************************/

  /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

  /***/
  function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */


    var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component.scss.shim.ngstyle */
    "./src/app/app.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _post_post_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./post/post.component.ngfactory */
    "./src/app/post/post.component.ngfactory.js");
    /* harmony import */


    var _post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./post/post.component */
    "./src/app/post/post.component.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _service_queue_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./_service/queue.service */
    "./src/app/_service/queue.service.ts");
    /* harmony import */


    var _service_queue_system_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./_service/queue-system.service */
    "./src/app/_service/queue-system.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppComponent,
      data: {}
    });

    function View_AppComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], function (_ck, _v) {
        var currVal_0 = _v.context.index;

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _v.context.index;

        _ck(_v, 2, 0, currVal_1);
      }, function (_ck, _v) {
        var currVal_2 = _v.context.$implicit.name;

        _ck(_v, 3, 0, currVal_2);
      });
    }

    function View_AppComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "select", [], null, [[null, "change"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _co.selectConsumer($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.consumers;

        _ck(_v, 3, 0, currVal_0);
      }, null);
    }

    function View_AppComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.blogId;

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.blogId;

        _ck(_v, 2, 0, currVal_1);
      }, function (_ck, _v) {
        var currVal_2 = _v.context.$implicit.tumblr.name;

        _ck(_v, 3, 0, currVal_2);
      });
    }

    function View_AppComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "select", [["formControlName", "blog"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onChange($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onTouched() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = "blog";

        _ck(_v, 4, 0, currVal_7);

        var currVal_8 = _co.queueService.consumer.user.blogs;

        _ck(_v, 8, 0, currVal_8);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending;

        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
      });
    }

    function View_AppComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "button", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.queueService.queue(_co.queueForm.value.blog) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"]], {
        ngClass: [0, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, {
        "ready": 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["Queue ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.queueService.selectPostByNoteCount(0) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["0+"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.queueService.selectPostByNoteCount(1000) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["1K+"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.queueService.selectPostByNoteCount(10000) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["10K+"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.queueService.selectPostByNoteCount(100000) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["100K+"]))], function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _ck(_v, 4, 0, _co.queueService.selectedPostsCount() > 0);

        _ck(_v, 3, 0, currVal_0);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_1 = _co.queueService.selectedPostsCount();

        _ck(_v, 5, 0, currVal_1);
      });
    }

    function View_AppComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.value;

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.value;

        _ck(_v, 2, 0, currVal_1);
      }, function (_ck, _v) {
        var currVal_2 = _v.context.$implicit.title;

        _ck(_v, 3, 0, currVal_2);
      });
    }

    function View_AppComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-post", [], null, null, null, _post_post_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_PostComponent_0"], _post_post_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_PostComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"], [], {
        post: [0, "post"]
      }, null)], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 60, "header", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 14, "div", [["class", "bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 13, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 8, "table", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 7, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](17, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 40, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 39, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 34, "table", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 33, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 18, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 9, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 8, "div", [["class", "form-element"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 7, "select", [["class", "form-control"], ["formControlName", "type"], ["id", "country"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onChange($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onTouched() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 7, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 6, "div", [["class", "form-element"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 5, "input", [["formControlName", "blog"], ["placeholder", "Blog Name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 8, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 7, "td", [["colspan", "2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 6, "div", [["class", "form-element"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 5, "input", [["class", "form-element-input-tag"], ["formControlName", "tag"], ["placeholder", "Tag"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 3, "td", [["colspan", "2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 2, "div", [["class", "form-element"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.load(undefined) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Load"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 4, "main", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 3, "div", [["class", "post-elements"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_AppComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](64, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"],
        ngForTrackBy: [1, "ngForTrackBy"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 0, "footer", [], null, null, null, null, null))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.queueForm;

        _ck(_v, 4, 0, currVal_7);

        var currVal_8 = _co.consumers.length > 0;

        _ck(_v, 11, 0, currVal_8);

        var currVal_9 = _co.queueService.consumer;

        _ck(_v, 13, 0, currVal_9);

        var currVal_10 = "(queueService.posts$ | async).length > 0";

        _ck(_v, 15, 0, currVal_10);

        var currVal_20 = _co.postsForm;

        _ck(_v, 23, 0, currVal_20);

        var currVal_28 = "type";

        _ck(_v, 34, 0, currVal_28);

        var currVal_29 = _co.types;

        _ck(_v, 38, 0, currVal_29);

        var currVal_37 = "blog";

        _ck(_v, 44, 0, currVal_37);

        var currVal_45 = "tag";

        _ck(_v, 53, 0, currVal_45);

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 64, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 65).transform(_co.queueService.posts$));

        var currVal_47 = _co.trackByIdentity;

        _ck(_v, 64, 0, currVal_46, currVal_47);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending;

        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_11 = _co.title;

        _ck(_v, 17, 0, currVal_11);

        var currVal_12 = _co.quote;

        _ck(_v, 19, 0, currVal_12);

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassUntouched;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassTouched;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPristine;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassDirty;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassValid;

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassInvalid;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPending;

        _ck(_v, 21, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19);

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassUntouched;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassTouched;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassPristine;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassDirty;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassValid;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassInvalid;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).ngClassPending;

        _ck(_v, 31, 0, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27);

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).ngClassUntouched;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).ngClassTouched;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).ngClassPristine;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).ngClassDirty;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).ngClassValid;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).ngClassInvalid;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).ngClassPending;

        _ck(_v, 41, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36);

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassUntouched;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassTouched;

        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassPristine;

        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassDirty;

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassValid;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassInvalid;

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).ngClassPending;

        _ck(_v, 50, 0, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44);
      });
    }

    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, [["window", "scroll"], ["window", "beforeunload"]], function (_v, en, $event) {
        var ad = true;

        if ("window:scroll" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onScroll() !== false;
          ad = pd_0 && ad;
        }

        if ("window:beforeunload" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onBeforeUnload($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], _service_queue_service__WEBPACK_IMPORTED_MODULE_8__["QueueService"], _service_queue_system_service__WEBPACK_IMPORTED_MODULE_9__["QueueSystemService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/app.component.scss.shim.ngstyle.js":
  /*!****************************************************!*\
    !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
    \****************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppAppComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["@import url(\"https://fonts.googleapis.com/css?family=Quicksand:400,700\");\n\n\n\n\n.ui-helper-hidden[_ngcontent-%COMP%] {\n\tdisplay: none;\n}\n.ui-helper-hidden-accessible[_ngcontent-%COMP%] {\n\tborder: 0;\n\tclip: rect(0 0 0 0);\n\theight: 1px;\n\tmargin: -1px;\n\toverflow: hidden;\n\tpadding: 0;\n\tposition: absolute;\n\twidth: 1px;\n}\n.ui-helper-reset[_ngcontent-%COMP%] {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\toutline: 0;\n\tline-height: 1.3;\n\ttext-decoration: none;\n\tfont-size: 100%;\n\tlist-style: none;\n}\n.ui-helper-clearfix[_ngcontent-%COMP%]:before, .ui-helper-clearfix[_ngcontent-%COMP%]:after {\n\tcontent: \"\";\n\tdisplay: table;\n\tborder-collapse: collapse;\n}\n.ui-helper-clearfix[_ngcontent-%COMP%]:after {\n\tclear: both;\n}\n.ui-helper-zfix[_ngcontent-%COMP%] {\n\twidth: 100%;\n\theight: 100%;\n\ttop: 0;\n\tleft: 0;\n\tposition: absolute;\n\topacity: 0;\n\tfilter:Alpha(Opacity=0); \n}\n.ui-front[_ngcontent-%COMP%] {\n\tz-index: 100;\n}\n\n.ui-state-disabled[_ngcontent-%COMP%] {\n\tcursor: default !important;\n\tpointer-events: none;\n}\n\n.ui-icon[_ngcontent-%COMP%] {\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tmargin-top: -.25em;\n\tposition: relative;\n\ttext-indent: -99999px;\n\toverflow: hidden;\n\tbackground-repeat: no-repeat;\n}\n.ui-widget-icon-block[_ngcontent-%COMP%] {\n\tleft: 50%;\n\tmargin-left: -8px;\n\tdisplay: block;\n}\n\n\n.ui-widget-overlay[_ngcontent-%COMP%] {\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.ui-accordion[_ngcontent-%COMP%]   .ui-accordion-header[_ngcontent-%COMP%] {\n\tdisplay: block;\n\tcursor: pointer;\n\tposition: relative;\n\tmargin: 2px 0 0 0;\n\tpadding: .5em .5em .5em .7em;\n\tfont-size: 100%;\n}\n.ui-accordion[_ngcontent-%COMP%]   .ui-accordion-content[_ngcontent-%COMP%] {\n\tpadding: 1em 2.2em;\n\tborder-top: 0;\n\toverflow: auto;\n}\n\n.ui-autocomplete[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tcursor: default;\n}\n\n.ui-button[_ngcontent-%COMP%] {\n\tpadding: .4em 1em;\n\tdisplay: inline-block;\n\tposition: relative;\n\tline-height: normal;\n\tmargin-right: .1em;\n\tcursor: pointer;\n\tvertical-align: middle;\n\ttext-align: center;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\n\t\n\toverflow: visible;\n}\n.ui-button[_ngcontent-%COMP%], .ui-button[_ngcontent-%COMP%]:link, .ui-button[_ngcontent-%COMP%]:visited, .ui-button[_ngcontent-%COMP%]:hover, .ui-button[_ngcontent-%COMP%]:active {\n\ttext-decoration: none;\n}\n\n.ui-button-icon-only[_ngcontent-%COMP%] {\n\twidth: 2em;\n\tbox-sizing: border-box;\n\ttext-indent: -9999px;\n\twhite-space: nowrap;\n}\n\ninput.ui-button.ui-button-icon-only[_ngcontent-%COMP%] {\n\ttext-indent: 0;\n}\n\n.ui-button-icon-only[_ngcontent-%COMP%]   .ui-icon[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-top: -8px;\n\tmargin-left: -8px;\n}\n.ui-button.ui-icon-notext[_ngcontent-%COMP%]   .ui-icon[_ngcontent-%COMP%] {\n\tpadding: 0;\n\twidth: 2.1em;\n\theight: 2.1em;\n\ttext-indent: -9999px;\n\twhite-space: nowrap;\n\n}\ninput.ui-button.ui-icon-notext[_ngcontent-%COMP%]   .ui-icon[_ngcontent-%COMP%] {\n\twidth: auto;\n\theight: auto;\n\ttext-indent: 0;\n\twhite-space: normal;\n\tpadding: .4em 1em;\n}\n\n\ninput.ui-button[_ngcontent-%COMP%]::-moz-focus-inner, button.ui-button[_ngcontent-%COMP%]::-moz-focus-inner {\n\tborder: 0;\n\tpadding: 0;\n}\n\n.ui-checkboxradio-label[_ngcontent-%COMP%]   .ui-icon-background[_ngcontent-%COMP%] {\n\tbox-shadow: inset 1px 1px 1px #ccc;\n\tborder-radius: .12em;\n\tborder: none;\n}\n.ui-checkboxradio-radio-label[_ngcontent-%COMP%]   .ui-icon-background[_ngcontent-%COMP%] {\n\twidth: 16px;\n\theight: 16px;\n\tborder-radius: 1em;\n\toverflow: visible;\n\tborder: none;\n}\n.ui-checkboxradio-radio-label.ui-checkboxradio-checked[_ngcontent-%COMP%]   .ui-icon[_ngcontent-%COMP%], .ui-checkboxradio-radio-label.ui-checkboxradio-checked[_ngcontent-%COMP%]:hover   .ui-icon[_ngcontent-%COMP%] {\n\tbackground-image: none;\n\twidth: 8px;\n\theight: 8px;\n\tborder-width: 4px;\n\tborder-style: solid;\n}\n.ui-checkboxradio-disabled[_ngcontent-%COMP%] {\n\tpointer-events: none;\n}\n\n.ui-controlgroup[_ngcontent-%COMP%] {\n\tvertical-align: middle;\n\tdisplay: inline-block;\n}\n.ui-controlgroup[_ngcontent-%COMP%]    > .ui-controlgroup-item[_ngcontent-%COMP%] {\n\tfloat: left;\n\tmargin-left: 0;\n\tmargin-right: 0;\n}\n.ui-controlgroup[_ngcontent-%COMP%]    > .ui-controlgroup-item[_ngcontent-%COMP%]:focus, .ui-controlgroup[_ngcontent-%COMP%]    > .ui-controlgroup-item.ui-visual-focus[_ngcontent-%COMP%] {\n\tz-index: 9999;\n}\n.ui-controlgroup-vertical[_ngcontent-%COMP%]    > .ui-controlgroup-item[_ngcontent-%COMP%] {\n\tdisplay: block;\n\tfloat: none;\n\twidth: 100%;\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n\ttext-align: left;\n}\n.ui-controlgroup-vertical[_ngcontent-%COMP%]   .ui-controlgroup-item[_ngcontent-%COMP%] {\n\tbox-sizing: border-box;\n}\n.ui-controlgroup[_ngcontent-%COMP%]   .ui-controlgroup-label[_ngcontent-%COMP%] {\n\tpadding: .4em 1em;\n}\n.ui-controlgroup[_ngcontent-%COMP%]   .ui-controlgroup-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n\tfont-size: 80%;\n}\n.ui-controlgroup-horizontal[_ngcontent-%COMP%]   .ui-controlgroup-label[_ngcontent-%COMP%]    + .ui-controlgroup-item[_ngcontent-%COMP%] {\n\tborder-left: none;\n}\n.ui-controlgroup-vertical[_ngcontent-%COMP%]   .ui-controlgroup-label[_ngcontent-%COMP%]    + .ui-controlgroup-item[_ngcontent-%COMP%] {\n\tborder-top: none;\n}\n.ui-controlgroup-horizontal[_ngcontent-%COMP%]   .ui-controlgroup-label.ui-widget-content[_ngcontent-%COMP%] {\n\tborder-right: none;\n}\n.ui-controlgroup-vertical[_ngcontent-%COMP%]   .ui-controlgroup-label.ui-widget-content[_ngcontent-%COMP%] {\n\tborder-bottom: none;\n}\n\n.ui-controlgroup-vertical[_ngcontent-%COMP%]   .ui-spinner-input[_ngcontent-%COMP%] {\n\n\t\n\twidth: 75%;\n\twidth: calc( 100% - 2.4em );\n}\n.ui-controlgroup-vertical[_ngcontent-%COMP%]   .ui-spinner[_ngcontent-%COMP%]   .ui-spinner-up[_ngcontent-%COMP%] {\n\tborder-top-style: solid;\n}\n\n.ui-datepicker[_ngcontent-%COMP%] {\n\twidth: 17em;\n\tpadding: .2em .2em 0;\n\tdisplay: none;\n}\n.ui-datepicker[_ngcontent-%COMP%]   .ui-datepicker-header[_ngcontent-%COMP%] {\n\tposition: relative;\n\tpadding: .2em 0;\n}\n.ui-datepicker[_ngcontent-%COMP%]   .ui-datepicker-prev[_ngcontent-%COMP%], .ui-datepicker[_ngcontent-%COMP%]   .ui-datepicker-next[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 2px;\n\twidth: 1.8em;\n\theight: 1.8em;\n}\n.ui-datepicker[_ngcontent-%COMP%]   .ui-datepicker-prev-hover[_ngcontent-%COMP%], .ui-datepicker[_ngcontent-%COMP%]   .ui-datepicker-next-hover[_ngcontent-%COMP%] {\n\ttop: 1px;\n}\n.ui-datepicker[_ngcontent-%COMP%]   .ui-datepicker-prev[_ngcontent-%COMP%] {\n\tleft: 2px;\n}\n.ui-datepicker[_ngcontent-%COMP%]   .ui-datepicker-next[_ngcontent-%COMP%] {\n\tright: 2px;\n}\n.ui-datepicker[_ngcontent-%COMP%]   .ui-datepicker-prev-hover[_ngcontent-%COMP%] {\n\tleft: 1px;\n}\n.ui-datepicker[_ngcontent-%COMP%]   .ui-datepicker-next-hover[_ngcontent-%COMP%] {\n\tright: 1px;\n}\n.ui-datepicker[_ngcontent-%COMP%]   .ui-datepicker-prev[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .ui-datepicker[_ngcontent-%COMP%]   .ui-datepicker-next[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 50%;\n\tmargin-left: -8px;\n\ttop: 50%;\n\tmargin-top: -8px;\n}\n.ui-datepicker[_ngcontent-%COMP%]   .ui-datepicker-title[_ngcontent-%COMP%] {\n\tmargin: 0 2.3em;\n\tline-height: 1.8em;\n\ttext-align: center;\n}\n.ui-datepicker[_ngcontent-%COMP%]   .ui-datepicker-title[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n\tfont-size: 1em;\n\tmargin: 1px 0;\n}\n.ui-datepicker[_ngcontent-%COMP%]   select.ui-datepicker-month[_ngcontent-%COMP%], .ui-datepicker[_ngcontent-%COMP%]   select.ui-datepicker-year[_ngcontent-%COMP%] {\n\twidth: 45%;\n}\n.ui-datepicker[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n\twidth: 100%;\n\tfont-size: .9em;\n\tborder-collapse: collapse;\n\tmargin: 0 0 .4em;\n}\n.ui-datepicker[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n\tpadding: .7em .3em;\n\ttext-align: center;\n\tfont-weight: bold;\n\tborder: 0;\n}\n.ui-datepicker[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n\tborder: 0;\n\tpadding: 1px;\n}\n.ui-datepicker[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .ui-datepicker[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tdisplay: block;\n\tpadding: .2em;\n\ttext-align: right;\n\ttext-decoration: none;\n}\n.ui-datepicker[_ngcontent-%COMP%]   .ui-datepicker-buttonpane[_ngcontent-%COMP%] {\n\tbackground-image: none;\n\tmargin: .7em 0 0 0;\n\tpadding: 0 .2em;\n\tborder-left: 0;\n\tborder-right: 0;\n\tborder-bottom: 0;\n}\n.ui-datepicker[_ngcontent-%COMP%]   .ui-datepicker-buttonpane[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n\tfloat: right;\n\tmargin: .5em .2em .4em;\n\tcursor: pointer;\n\tpadding: .2em .6em .3em .6em;\n\twidth: auto;\n\toverflow: visible;\n}\n.ui-datepicker[_ngcontent-%COMP%]   .ui-datepicker-buttonpane[_ngcontent-%COMP%]   button.ui-datepicker-current[_ngcontent-%COMP%] {\n\tfloat: left;\n}\n\n.ui-datepicker.ui-datepicker-multi[_ngcontent-%COMP%] {\n\twidth: auto;\n}\n.ui-datepicker-multi[_ngcontent-%COMP%]   .ui-datepicker-group[_ngcontent-%COMP%] {\n\tfloat: left;\n}\n.ui-datepicker-multi[_ngcontent-%COMP%]   .ui-datepicker-group[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n\twidth: 95%;\n\tmargin: 0 auto .4em;\n}\n.ui-datepicker-multi-2[_ngcontent-%COMP%]   .ui-datepicker-group[_ngcontent-%COMP%] {\n\twidth: 50%;\n}\n.ui-datepicker-multi-3[_ngcontent-%COMP%]   .ui-datepicker-group[_ngcontent-%COMP%] {\n\twidth: 33.3%;\n}\n.ui-datepicker-multi-4[_ngcontent-%COMP%]   .ui-datepicker-group[_ngcontent-%COMP%] {\n\twidth: 25%;\n}\n.ui-datepicker-multi[_ngcontent-%COMP%]   .ui-datepicker-group-last[_ngcontent-%COMP%]   .ui-datepicker-header[_ngcontent-%COMP%], .ui-datepicker-multi[_ngcontent-%COMP%]   .ui-datepicker-group-middle[_ngcontent-%COMP%]   .ui-datepicker-header[_ngcontent-%COMP%] {\n\tborder-left-width: 0;\n}\n.ui-datepicker-multi[_ngcontent-%COMP%]   .ui-datepicker-buttonpane[_ngcontent-%COMP%] {\n\tclear: left;\n}\n.ui-datepicker-row-break[_ngcontent-%COMP%] {\n\tclear: both;\n\twidth: 100%;\n\tfont-size: 0;\n}\n\n.ui-datepicker-rtl[_ngcontent-%COMP%] {\n\tdirection: rtl;\n}\n.ui-datepicker-rtl[_ngcontent-%COMP%]   .ui-datepicker-prev[_ngcontent-%COMP%] {\n\tright: 2px;\n\tleft: auto;\n}\n.ui-datepicker-rtl[_ngcontent-%COMP%]   .ui-datepicker-next[_ngcontent-%COMP%] {\n\tleft: 2px;\n\tright: auto;\n}\n.ui-datepicker-rtl[_ngcontent-%COMP%]   .ui-datepicker-prev[_ngcontent-%COMP%]:hover {\n\tright: 1px;\n\tleft: auto;\n}\n.ui-datepicker-rtl[_ngcontent-%COMP%]   .ui-datepicker-next[_ngcontent-%COMP%]:hover {\n\tleft: 1px;\n\tright: auto;\n}\n.ui-datepicker-rtl[_ngcontent-%COMP%]   .ui-datepicker-buttonpane[_ngcontent-%COMP%] {\n\tclear: right;\n}\n.ui-datepicker-rtl[_ngcontent-%COMP%]   .ui-datepicker-buttonpane[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n\tfloat: left;\n}\n.ui-datepicker-rtl[_ngcontent-%COMP%]   .ui-datepicker-buttonpane[_ngcontent-%COMP%]   button.ui-datepicker-current[_ngcontent-%COMP%], .ui-datepicker-rtl[_ngcontent-%COMP%]   .ui-datepicker-group[_ngcontent-%COMP%] {\n\tfloat: right;\n}\n.ui-datepicker-rtl[_ngcontent-%COMP%]   .ui-datepicker-group-last[_ngcontent-%COMP%]   .ui-datepicker-header[_ngcontent-%COMP%], .ui-datepicker-rtl[_ngcontent-%COMP%]   .ui-datepicker-group-middle[_ngcontent-%COMP%]   .ui-datepicker-header[_ngcontent-%COMP%] {\n\tborder-right-width: 0;\n\tborder-left-width: 1px;\n}\n\n.ui-datepicker[_ngcontent-%COMP%]   .ui-icon[_ngcontent-%COMP%] {\n\tdisplay: block;\n\ttext-indent: -99999px;\n\toverflow: hidden;\n\tbackground-repeat: no-repeat;\n\tleft: .5em;\n\ttop: .3em;\n}\n\n.ui-dialog[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tpadding: .2em;\n\toutline: 0;\n}\n.ui-dialog[_ngcontent-%COMP%]   .ui-dialog-titlebar[_ngcontent-%COMP%] {\n\tpadding: .4em 1em;\n\tposition: relative;\n}\n.ui-dialog[_ngcontent-%COMP%]   .ui-dialog-title[_ngcontent-%COMP%] {\n\tfloat: left;\n\tmargin: .1em 0;\n\twhite-space: nowrap;\n\twidth: 90%;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n.ui-dialog[_ngcontent-%COMP%]   .ui-dialog-titlebar-close[_ngcontent-%COMP%] {\n\tposition: absolute;\n\tright: .3em;\n\ttop: 50%;\n\twidth: 20px;\n\tmargin: -10px 0 0 0;\n\tpadding: 1px;\n\theight: 20px;\n}\n.ui-dialog[_ngcontent-%COMP%]   .ui-dialog-content[_ngcontent-%COMP%] {\n\tposition: relative;\n\tborder: 0;\n\tpadding: .5em 1em;\n\tbackground: none;\n\toverflow: auto;\n}\n.ui-dialog[_ngcontent-%COMP%]   .ui-dialog-buttonpane[_ngcontent-%COMP%] {\n\ttext-align: left;\n\tborder-width: 1px 0 0 0;\n\tbackground-image: none;\n\tmargin-top: .5em;\n\tpadding: .3em 1em .5em .4em;\n}\n.ui-dialog[_ngcontent-%COMP%]   .ui-dialog-buttonpane[_ngcontent-%COMP%]   .ui-dialog-buttonset[_ngcontent-%COMP%] {\n\tfloat: right;\n}\n.ui-dialog[_ngcontent-%COMP%]   .ui-dialog-buttonpane[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n\tmargin: .5em .4em .5em 0;\n\tcursor: pointer;\n}\n.ui-dialog[_ngcontent-%COMP%]   .ui-resizable-n[_ngcontent-%COMP%] {\n\theight: 2px;\n\ttop: 0;\n}\n.ui-dialog[_ngcontent-%COMP%]   .ui-resizable-e[_ngcontent-%COMP%] {\n\twidth: 2px;\n\tright: 0;\n}\n.ui-dialog[_ngcontent-%COMP%]   .ui-resizable-s[_ngcontent-%COMP%] {\n\theight: 2px;\n\tbottom: 0;\n}\n.ui-dialog[_ngcontent-%COMP%]   .ui-resizable-w[_ngcontent-%COMP%] {\n\twidth: 2px;\n\tleft: 0;\n}\n.ui-dialog[_ngcontent-%COMP%]   .ui-resizable-se[_ngcontent-%COMP%], .ui-dialog[_ngcontent-%COMP%]   .ui-resizable-sw[_ngcontent-%COMP%], .ui-dialog[_ngcontent-%COMP%]   .ui-resizable-ne[_ngcontent-%COMP%], .ui-dialog[_ngcontent-%COMP%]   .ui-resizable-nw[_ngcontent-%COMP%] {\n\twidth: 7px;\n\theight: 7px;\n}\n.ui-dialog[_ngcontent-%COMP%]   .ui-resizable-se[_ngcontent-%COMP%] {\n\tright: 0;\n\tbottom: 0;\n}\n.ui-dialog[_ngcontent-%COMP%]   .ui-resizable-sw[_ngcontent-%COMP%] {\n\tleft: 0;\n\tbottom: 0;\n}\n.ui-dialog[_ngcontent-%COMP%]   .ui-resizable-ne[_ngcontent-%COMP%] {\n\tright: 0;\n\ttop: 0;\n}\n.ui-dialog[_ngcontent-%COMP%]   .ui-resizable-nw[_ngcontent-%COMP%] {\n\tleft: 0;\n\ttop: 0;\n}\n.ui-draggable[_ngcontent-%COMP%]   .ui-dialog-titlebar[_ngcontent-%COMP%] {\n\tcursor: move;\n}\n\n.ui-draggable-handle[_ngcontent-%COMP%] {\n\ttouch-action: none;\n}\n\n.ui-menu[_ngcontent-%COMP%] {\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0;\n\tdisplay: block;\n\toutline: 0;\n}\n.ui-menu[_ngcontent-%COMP%]   .ui-menu[_ngcontent-%COMP%] {\n\tposition: absolute;\n}\n.ui-menu[_ngcontent-%COMP%]   .ui-menu-item[_ngcontent-%COMP%] {\n\tmargin: 0;\n\tcursor: pointer;\n\t\n\tlist-style-image: url(\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\");\n}\n.ui-menu[_ngcontent-%COMP%]   .ui-menu-item-wrapper[_ngcontent-%COMP%] {\n\tposition: relative;\n\tpadding: 3px 1em 3px .4em;\n}\n.ui-menu[_ngcontent-%COMP%]   .ui-menu-divider[_ngcontent-%COMP%] {\n\tmargin: 5px 0;\n\theight: 0;\n\tfont-size: 0;\n\tline-height: 0;\n\tborder-width: 1px 0 0 0;\n}\n.ui-menu[_ngcontent-%COMP%]   .ui-state-focus[_ngcontent-%COMP%], .ui-menu[_ngcontent-%COMP%]   .ui-state-active[_ngcontent-%COMP%] {\n\tmargin: -1px;\n}\n\n.ui-menu-icons[_ngcontent-%COMP%] {\n\tposition: relative;\n}\n.ui-menu-icons[_ngcontent-%COMP%]   .ui-menu-item-wrapper[_ngcontent-%COMP%] {\n\tpadding-left: 2em;\n}\n\n.ui-menu[_ngcontent-%COMP%]   .ui-icon[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tleft: .2em;\n\tmargin: auto 0;\n}\n\n.ui-menu[_ngcontent-%COMP%]   .ui-menu-icon[_ngcontent-%COMP%] {\n\tleft: auto;\n\tright: 0;\n}\n\n.ui-progressbar[_ngcontent-%COMP%] {\n\theight: 2em;\n\ttext-align: left;\n\toverflow: hidden;\n}\n.ui-progressbar[_ngcontent-%COMP%]   .ui-progressbar-value[_ngcontent-%COMP%] {\n\tmargin: -1px;\n\theight: 100%;\n}\n.ui-progressbar[_ngcontent-%COMP%]   .ui-progressbar-overlay[_ngcontent-%COMP%] {\n\tbackground: url(\"data:image/gif;base64,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\");\n\theight: 100%;\n\tfilter: alpha(opacity=25); \n\topacity: 0.25;\n}\n.ui-progressbar-indeterminate[_ngcontent-%COMP%]   .ui-progressbar-value[_ngcontent-%COMP%] {\n\tbackground-image: none;\n}\n\n.ui-resizable[_ngcontent-%COMP%] {\n\tposition: relative;\n}\n.ui-resizable-handle[_ngcontent-%COMP%] {\n\tposition: absolute;\n\tfont-size: 0.1px;\n\tdisplay: block;\n\ttouch-action: none;\n}\n.ui-resizable-disabled[_ngcontent-%COMP%]   .ui-resizable-handle[_ngcontent-%COMP%], .ui-resizable-autohide[_ngcontent-%COMP%]   .ui-resizable-handle[_ngcontent-%COMP%] {\n\tdisplay: none;\n}\n.ui-resizable-n[_ngcontent-%COMP%] {\n\tcursor: n-resize;\n\theight: 7px;\n\twidth: 100%;\n\ttop: -5px;\n\tleft: 0;\n}\n.ui-resizable-s[_ngcontent-%COMP%] {\n\tcursor: s-resize;\n\theight: 7px;\n\twidth: 100%;\n\tbottom: -5px;\n\tleft: 0;\n}\n.ui-resizable-e[_ngcontent-%COMP%] {\n\tcursor: e-resize;\n\twidth: 7px;\n\tright: -5px;\n\ttop: 0;\n\theight: 100%;\n}\n.ui-resizable-w[_ngcontent-%COMP%] {\n\tcursor: w-resize;\n\twidth: 7px;\n\tleft: -5px;\n\ttop: 0;\n\theight: 100%;\n}\n.ui-resizable-se[_ngcontent-%COMP%] {\n\tcursor: se-resize;\n\twidth: 12px;\n\theight: 12px;\n\tright: 1px;\n\tbottom: 1px;\n}\n.ui-resizable-sw[_ngcontent-%COMP%] {\n\tcursor: sw-resize;\n\twidth: 9px;\n\theight: 9px;\n\tleft: -5px;\n\tbottom: -5px;\n}\n.ui-resizable-nw[_ngcontent-%COMP%] {\n\tcursor: nw-resize;\n\twidth: 9px;\n\theight: 9px;\n\tleft: -5px;\n\ttop: -5px;\n}\n.ui-resizable-ne[_ngcontent-%COMP%] {\n\tcursor: ne-resize;\n\twidth: 9px;\n\theight: 9px;\n\tright: -5px;\n\ttop: -5px;\n}\n\n.ui-selectable[_ngcontent-%COMP%] {\n\ttouch-action: none;\n}\n.ui-selectable-helper[_ngcontent-%COMP%] {\n\tposition: absolute;\n\tz-index: 100;\n\tborder: 1px dotted black;\n}\n\n.ui-selectmenu-menu[_ngcontent-%COMP%] {\n\tpadding: 0;\n\tmargin: 0;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tdisplay: none;\n}\n.ui-selectmenu-menu[_ngcontent-%COMP%]   .ui-menu[_ngcontent-%COMP%] {\n\toverflow: auto;\n\toverflow-x: hidden;\n\tpadding-bottom: 1px;\n}\n.ui-selectmenu-menu[_ngcontent-%COMP%]   .ui-menu[_ngcontent-%COMP%]   .ui-selectmenu-optgroup[_ngcontent-%COMP%] {\n\tfont-size: 1em;\n\tfont-weight: bold;\n\tline-height: 1.5;\n\tpadding: 2px 0.4em;\n\tmargin: 0.5em 0 0 0;\n\theight: auto;\n\tborder: 0;\n}\n.ui-selectmenu-open[_ngcontent-%COMP%] {\n\tdisplay: block;\n}\n.ui-selectmenu-text[_ngcontent-%COMP%] {\n\tdisplay: block;\n\tmargin-right: 20px;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n.ui-selectmenu-button.ui-button[_ngcontent-%COMP%] {\n\ttext-align: left;\n\twhite-space: nowrap;\n\twidth: 14em;\n}\n.ui-selectmenu-icon.ui-icon[_ngcontent-%COMP%] {\n\tfloat: right;\n\tmargin-top: 0;\n}\n\n.ui-sortable-handle[_ngcontent-%COMP%] {\n\ttouch-action: none;\n}\n\n.ui-slider[_ngcontent-%COMP%] {\n\tposition: relative;\n\ttext-align: left;\n}\n.ui-slider[_ngcontent-%COMP%]   .ui-slider-handle[_ngcontent-%COMP%] {\n\tposition: absolute;\n\tz-index: 2;\n\twidth: 1.2em;\n\theight: 1.2em;\n\tcursor: default;\n\ttouch-action: none;\n}\n.ui-slider[_ngcontent-%COMP%]   .ui-slider-range[_ngcontent-%COMP%] {\n\tposition: absolute;\n\tz-index: 1;\n\tfont-size: .7em;\n\tdisplay: block;\n\tborder: 0;\n\tbackground-position: 0 0;\n}\n\n.ui-slider.ui-state-disabled[_ngcontent-%COMP%]   .ui-slider-handle[_ngcontent-%COMP%], .ui-slider.ui-state-disabled[_ngcontent-%COMP%]   .ui-slider-range[_ngcontent-%COMP%] {\n\t-webkit-filter: inherit;\n\t        filter: inherit;\n}\n.ui-slider-horizontal[_ngcontent-%COMP%] {\n\theight: .8em;\n}\n.ui-slider-horizontal[_ngcontent-%COMP%]   .ui-slider-handle[_ngcontent-%COMP%] {\n\ttop: -.3em;\n\tmargin-left: -.6em;\n}\n.ui-slider-horizontal[_ngcontent-%COMP%]   .ui-slider-range[_ngcontent-%COMP%] {\n\ttop: 0;\n\theight: 100%;\n}\n.ui-slider-horizontal[_ngcontent-%COMP%]   .ui-slider-range-min[_ngcontent-%COMP%] {\n\tleft: 0;\n}\n.ui-slider-horizontal[_ngcontent-%COMP%]   .ui-slider-range-max[_ngcontent-%COMP%] {\n\tright: 0;\n}\n.ui-slider-vertical[_ngcontent-%COMP%] {\n\twidth: .8em;\n\theight: 100px;\n}\n.ui-slider-vertical[_ngcontent-%COMP%]   .ui-slider-handle[_ngcontent-%COMP%] {\n\tleft: -.3em;\n\tmargin-left: 0;\n\tmargin-bottom: -.6em;\n}\n.ui-slider-vertical[_ngcontent-%COMP%]   .ui-slider-range[_ngcontent-%COMP%] {\n\tleft: 0;\n\twidth: 100%;\n}\n.ui-slider-vertical[_ngcontent-%COMP%]   .ui-slider-range-min[_ngcontent-%COMP%] {\n\tbottom: 0;\n}\n.ui-slider-vertical[_ngcontent-%COMP%]   .ui-slider-range-max[_ngcontent-%COMP%] {\n\ttop: 0;\n}\n\n.ui-spinner[_ngcontent-%COMP%] {\n\tposition: relative;\n\tdisplay: inline-block;\n\toverflow: hidden;\n\tpadding: 0;\n\tvertical-align: middle;\n}\n.ui-spinner-input[_ngcontent-%COMP%] {\n\tborder: none;\n\tbackground: none;\n\tcolor: inherit;\n\tpadding: .222em 0;\n\tmargin: .2em 0;\n\tvertical-align: middle;\n\tmargin-left: .4em;\n\tmargin-right: 2em;\n}\n.ui-spinner-button[_ngcontent-%COMP%] {\n\twidth: 1.6em;\n\theight: 50%;\n\tfont-size: .5em;\n\tpadding: 0;\n\tmargin: 0;\n\ttext-align: center;\n\tposition: absolute;\n\tcursor: default;\n\tdisplay: block;\n\toverflow: hidden;\n\tright: 0;\n}\n\n.ui-spinner[_ngcontent-%COMP%]   a.ui-spinner-button[_ngcontent-%COMP%] {\n\tborder-top-style: none;\n\tborder-bottom-style: none;\n\tborder-right-style: none;\n}\n.ui-spinner-up[_ngcontent-%COMP%] {\n\ttop: 0;\n}\n.ui-spinner-down[_ngcontent-%COMP%] {\n\tbottom: 0;\n}\n\n.ui-tabs[_ngcontent-%COMP%] {\n\tposition: relative;\n\tpadding: .2em;\n}\n.ui-tabs[_ngcontent-%COMP%]   .ui-tabs-nav[_ngcontent-%COMP%] {\n\tmargin: 0;\n\tpadding: .2em .2em 0;\n}\n.ui-tabs[_ngcontent-%COMP%]   .ui-tabs-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\tlist-style: none;\n\tfloat: left;\n\tposition: relative;\n\ttop: 0;\n\tmargin: 1px .2em 0 0;\n\tborder-bottom-width: 0;\n\tpadding: 0;\n\twhite-space: nowrap;\n}\n.ui-tabs[_ngcontent-%COMP%]   .ui-tabs-nav[_ngcontent-%COMP%]   .ui-tabs-anchor[_ngcontent-%COMP%] {\n\tfloat: left;\n\tpadding: .5em 1em;\n\ttext-decoration: none;\n}\n.ui-tabs[_ngcontent-%COMP%]   .ui-tabs-nav[_ngcontent-%COMP%]   li.ui-tabs-active[_ngcontent-%COMP%] {\n\tmargin-bottom: -1px;\n\tpadding-bottom: 1px;\n}\n.ui-tabs[_ngcontent-%COMP%]   .ui-tabs-nav[_ngcontent-%COMP%]   li.ui-tabs-active[_ngcontent-%COMP%]   .ui-tabs-anchor[_ngcontent-%COMP%], .ui-tabs[_ngcontent-%COMP%]   .ui-tabs-nav[_ngcontent-%COMP%]   li.ui-state-disabled[_ngcontent-%COMP%]   .ui-tabs-anchor[_ngcontent-%COMP%], .ui-tabs[_ngcontent-%COMP%]   .ui-tabs-nav[_ngcontent-%COMP%]   li.ui-tabs-loading[_ngcontent-%COMP%]   .ui-tabs-anchor[_ngcontent-%COMP%] {\n\tcursor: text;\n}\n.ui-tabs-collapsible[_ngcontent-%COMP%]   .ui-tabs-nav[_ngcontent-%COMP%]   li.ui-tabs-active[_ngcontent-%COMP%]   .ui-tabs-anchor[_ngcontent-%COMP%] {\n\tcursor: pointer;\n}\n.ui-tabs[_ngcontent-%COMP%]   .ui-tabs-panel[_ngcontent-%COMP%] {\n\tdisplay: block;\n\tborder-width: 0;\n\tpadding: 1em 1.4em;\n\tbackground: none;\n}\n\n.ui-tooltip[_ngcontent-%COMP%] {\n\tpadding: 8px;\n\tposition: absolute;\n\tz-index: 9999;\n\tmax-width: 300px;\n}\nbody[_ngcontent-%COMP%]   .ui-tooltip[_ngcontent-%COMP%] {\n\tborder-width: 2px;\n}\n\n\n.ui-widget[_ngcontent-%COMP%] {\n\tfont-family: Arial,Helvetica,sans-serif;\n\tfont-size: 1em;\n}\n.ui-widget[_ngcontent-%COMP%]   .ui-widget[_ngcontent-%COMP%] {\n\tfont-size: 1em;\n}\n.ui-widget[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .ui-widget[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .ui-widget[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .ui-widget[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n\tfont-family: Arial,Helvetica,sans-serif;\n\tfont-size: 1em;\n}\n.ui-widget.ui-widget-content[_ngcontent-%COMP%] {\n\tborder: 1px solid #c5c5c5;\n}\n.ui-widget-content[_ngcontent-%COMP%] {\n\tborder: 1px solid #dddddd;\n\tbackground: #ffffff    ;\n\tcolor: #333333;\n}\n.ui-widget-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #333333;\n}\n.ui-widget-header[_ngcontent-%COMP%] {\n\tborder: 1px solid #dddddd;\n\tbackground: #e9e9e9    ;\n\tcolor: #333333;\n\tfont-weight: bold;\n}\n.ui-widget-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #333333;\n}\n\n.ui-state-default[_ngcontent-%COMP%], .ui-widget-content[_ngcontent-%COMP%]   .ui-state-default[_ngcontent-%COMP%], .ui-widget-header[_ngcontent-%COMP%]   .ui-state-default[_ngcontent-%COMP%], .ui-button[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   .ui-button.ui-state-disabled[_ngcontent-%COMP%]:hover, html[_ngcontent-%COMP%]   .ui-button.ui-state-disabled[_ngcontent-%COMP%]:active {\n\tborder: 1px solid #c5c5c5;\n\tbackground: #f6f6f6    ;\n\tfont-weight: normal;\n\tcolor: #454545;\n}\n.ui-state-default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .ui-state-default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link, .ui-state-default[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, a.ui-button[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:link.ui-button, a[_ngcontent-%COMP%]:visited.ui-button, .ui-button[_ngcontent-%COMP%] {\n\tcolor: #454545;\n\ttext-decoration: none;\n}\n.ui-state-hover[_ngcontent-%COMP%], .ui-widget-content[_ngcontent-%COMP%]   .ui-state-hover[_ngcontent-%COMP%], .ui-widget-header[_ngcontent-%COMP%]   .ui-state-hover[_ngcontent-%COMP%], .ui-state-focus[_ngcontent-%COMP%], .ui-widget-content[_ngcontent-%COMP%]   .ui-state-focus[_ngcontent-%COMP%], .ui-widget-header[_ngcontent-%COMP%]   .ui-state-focus[_ngcontent-%COMP%], .ui-button[_ngcontent-%COMP%]:hover, .ui-button[_ngcontent-%COMP%]:focus {\n\tborder: 1px solid #cccccc;\n\tbackground: #ededed    ;\n\tfont-weight: normal;\n\tcolor: #2b2b2b;\n}\n.ui-state-hover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .ui-state-hover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .ui-state-hover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link, .ui-state-hover[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, .ui-state-focus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .ui-state-focus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .ui-state-focus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link, .ui-state-focus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, a.ui-button[_ngcontent-%COMP%]:hover, a.ui-button[_ngcontent-%COMP%]:focus {\n\tcolor: #2b2b2b;\n\ttext-decoration: none;\n}\n.ui-visual-focus[_ngcontent-%COMP%] {\n\tbox-shadow: 0 0 3px 1px rgb(94, 158, 214);\n}\n.ui-state-active[_ngcontent-%COMP%], .ui-widget-content[_ngcontent-%COMP%]   .ui-state-active[_ngcontent-%COMP%], .ui-widget-header[_ngcontent-%COMP%]   .ui-state-active[_ngcontent-%COMP%], a.ui-button[_ngcontent-%COMP%]:active, .ui-button[_ngcontent-%COMP%]:active, .ui-button.ui-state-active[_ngcontent-%COMP%]:hover {\n\tborder: 1px solid #003eff;\n\tbackground: #007fff    ;\n\tfont-weight: normal;\n\tcolor: #ffffff;\n}\n.ui-icon-background[_ngcontent-%COMP%], .ui-state-active[_ngcontent-%COMP%]   .ui-icon-background[_ngcontent-%COMP%] {\n\tborder: #003eff;\n\tbackground-color: #ffffff;\n}\n.ui-state-active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .ui-state-active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link, .ui-state-active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n\tcolor: #ffffff;\n\ttext-decoration: none;\n}\n\n.ui-state-highlight[_ngcontent-%COMP%], .ui-widget-content[_ngcontent-%COMP%]   .ui-state-highlight[_ngcontent-%COMP%], .ui-widget-header[_ngcontent-%COMP%]   .ui-state-highlight[_ngcontent-%COMP%] {\n\tborder: 1px solid #dad55e;\n\tbackground: #fffa90    ;\n\tcolor: #777620;\n}\n.ui-state-checked[_ngcontent-%COMP%] {\n\tborder: 1px solid #dad55e;\n\tbackground: #fffa90;\n}\n.ui-state-highlight[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .ui-widget-content[_ngcontent-%COMP%]   .ui-state-highlight[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .ui-widget-header[_ngcontent-%COMP%]   .ui-state-highlight[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #777620;\n}\n.ui-state-error[_ngcontent-%COMP%], .ui-widget-content[_ngcontent-%COMP%]   .ui-state-error[_ngcontent-%COMP%], .ui-widget-header[_ngcontent-%COMP%]   .ui-state-error[_ngcontent-%COMP%] {\n\tborder: 1px solid #f1a899;\n\tbackground: #fddfdf    ;\n\tcolor: #5f3f3f;\n}\n.ui-state-error[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .ui-widget-content[_ngcontent-%COMP%]   .ui-state-error[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .ui-widget-header[_ngcontent-%COMP%]   .ui-state-error[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n\tcolor: #5f3f3f;\n}\n.ui-state-error-text[_ngcontent-%COMP%], .ui-widget-content[_ngcontent-%COMP%]   .ui-state-error-text[_ngcontent-%COMP%], .ui-widget-header[_ngcontent-%COMP%]   .ui-state-error-text[_ngcontent-%COMP%] {\n\tcolor: #5f3f3f;\n}\n.ui-priority-primary[_ngcontent-%COMP%], .ui-widget-content[_ngcontent-%COMP%]   .ui-priority-primary[_ngcontent-%COMP%], .ui-widget-header[_ngcontent-%COMP%]   .ui-priority-primary[_ngcontent-%COMP%] {\n\tfont-weight: bold;\n}\n.ui-priority-secondary[_ngcontent-%COMP%], .ui-widget-content[_ngcontent-%COMP%]   .ui-priority-secondary[_ngcontent-%COMP%], .ui-widget-header[_ngcontent-%COMP%]   .ui-priority-secondary[_ngcontent-%COMP%] {\n\topacity: .7;\n\tfilter:Alpha(Opacity=70); \n\tfont-weight: normal;\n}\n.ui-state-disabled[_ngcontent-%COMP%], .ui-widget-content[_ngcontent-%COMP%]   .ui-state-disabled[_ngcontent-%COMP%], .ui-widget-header[_ngcontent-%COMP%]   .ui-state-disabled[_ngcontent-%COMP%] {\n\topacity: .35;\n\tfilter:Alpha(Opacity=35); \n\tbackground-image: none;\n}\n.ui-state-disabled[_ngcontent-%COMP%]   .ui-icon[_ngcontent-%COMP%] {\n\tfilter:Alpha(Opacity=35); \n}\n\n\n.ui-icon[_ngcontent-%COMP%] {\n\twidth: 16px;\n\theight: 16px;\n}\n.ui-icon[_ngcontent-%COMP%], .ui-widget-content[_ngcontent-%COMP%]   .ui-icon[_ngcontent-%COMP%] {\n\tbackground-image: url('ui-icons_444444_256x240.a4c733ec4baef9ad3896.png');\n}\n.ui-widget-header[_ngcontent-%COMP%]   .ui-icon[_ngcontent-%COMP%] {\n\tbackground-image: url('ui-icons_444444_256x240.a4c733ec4baef9ad3896.png');\n}\n.ui-state-hover[_ngcontent-%COMP%]   .ui-icon[_ngcontent-%COMP%], .ui-state-focus[_ngcontent-%COMP%]   .ui-icon[_ngcontent-%COMP%], .ui-button[_ngcontent-%COMP%]:hover   .ui-icon[_ngcontent-%COMP%], .ui-button[_ngcontent-%COMP%]:focus   .ui-icon[_ngcontent-%COMP%] {\n\tbackground-image: url('ui-icons_555555_256x240.971364734f3b603e5d36.png');\n}\n.ui-state-active[_ngcontent-%COMP%]   .ui-icon[_ngcontent-%COMP%], .ui-button[_ngcontent-%COMP%]:active   .ui-icon[_ngcontent-%COMP%] {\n\tbackground-image: url('ui-icons_ffffff_256x240.bf27228a7d3957983584.png');\n}\n.ui-state-highlight[_ngcontent-%COMP%]   .ui-icon[_ngcontent-%COMP%], .ui-button[_ngcontent-%COMP%]   .ui-state-highlight.ui-icon[_ngcontent-%COMP%] {\n\tbackground-image: url('ui-icons_777620_256x240.208a290102a4ada58a04.png');\n}\n.ui-state-error[_ngcontent-%COMP%]   .ui-icon[_ngcontent-%COMP%], .ui-state-error-text[_ngcontent-%COMP%]   .ui-icon[_ngcontent-%COMP%] {\n\tbackground-image: url('ui-icons_cc0000_256x240.0de3b51742ed3ac61435.png');\n}\n.ui-button[_ngcontent-%COMP%]   .ui-icon[_ngcontent-%COMP%] {\n\tbackground-image: url('ui-icons_777777_256x240.73a1fd052c9d84c0ee0b.png');\n}\n\n.ui-icon-blank[_ngcontent-%COMP%] { background-position: 16px 16px; }\n.ui-icon-caret-1-n[_ngcontent-%COMP%] { background-position: 0 0; }\n.ui-icon-caret-1-ne[_ngcontent-%COMP%] { background-position: -16px 0; }\n.ui-icon-caret-1-e[_ngcontent-%COMP%] { background-position: -32px 0; }\n.ui-icon-caret-1-se[_ngcontent-%COMP%] { background-position: -48px 0; }\n.ui-icon-caret-1-s[_ngcontent-%COMP%] { background-position: -65px 0; }\n.ui-icon-caret-1-sw[_ngcontent-%COMP%] { background-position: -80px 0; }\n.ui-icon-caret-1-w[_ngcontent-%COMP%] { background-position: -96px 0; }\n.ui-icon-caret-1-nw[_ngcontent-%COMP%] { background-position: -112px 0; }\n.ui-icon-caret-2-n-s[_ngcontent-%COMP%] { background-position: -128px 0; }\n.ui-icon-caret-2-e-w[_ngcontent-%COMP%] { background-position: -144px 0; }\n.ui-icon-triangle-1-n[_ngcontent-%COMP%] { background-position: 0 -16px; }\n.ui-icon-triangle-1-ne[_ngcontent-%COMP%] { background-position: -16px -16px; }\n.ui-icon-triangle-1-e[_ngcontent-%COMP%] { background-position: -32px -16px; }\n.ui-icon-triangle-1-se[_ngcontent-%COMP%] { background-position: -48px -16px; }\n.ui-icon-triangle-1-s[_ngcontent-%COMP%] { background-position: -65px -16px; }\n.ui-icon-triangle-1-sw[_ngcontent-%COMP%] { background-position: -80px -16px; }\n.ui-icon-triangle-1-w[_ngcontent-%COMP%] { background-position: -96px -16px; }\n.ui-icon-triangle-1-nw[_ngcontent-%COMP%] { background-position: -112px -16px; }\n.ui-icon-triangle-2-n-s[_ngcontent-%COMP%] { background-position: -128px -16px; }\n.ui-icon-triangle-2-e-w[_ngcontent-%COMP%] { background-position: -144px -16px; }\n.ui-icon-arrow-1-n[_ngcontent-%COMP%] { background-position: 0 -32px; }\n.ui-icon-arrow-1-ne[_ngcontent-%COMP%] { background-position: -16px -32px; }\n.ui-icon-arrow-1-e[_ngcontent-%COMP%] { background-position: -32px -32px; }\n.ui-icon-arrow-1-se[_ngcontent-%COMP%] { background-position: -48px -32px; }\n.ui-icon-arrow-1-s[_ngcontent-%COMP%] { background-position: -65px -32px; }\n.ui-icon-arrow-1-sw[_ngcontent-%COMP%] { background-position: -80px -32px; }\n.ui-icon-arrow-1-w[_ngcontent-%COMP%] { background-position: -96px -32px; }\n.ui-icon-arrow-1-nw[_ngcontent-%COMP%] { background-position: -112px -32px; }\n.ui-icon-arrow-2-n-s[_ngcontent-%COMP%] { background-position: -128px -32px; }\n.ui-icon-arrow-2-ne-sw[_ngcontent-%COMP%] { background-position: -144px -32px; }\n.ui-icon-arrow-2-e-w[_ngcontent-%COMP%] { background-position: -160px -32px; }\n.ui-icon-arrow-2-se-nw[_ngcontent-%COMP%] { background-position: -176px -32px; }\n.ui-icon-arrowstop-1-n[_ngcontent-%COMP%] { background-position: -192px -32px; }\n.ui-icon-arrowstop-1-e[_ngcontent-%COMP%] { background-position: -208px -32px; }\n.ui-icon-arrowstop-1-s[_ngcontent-%COMP%] { background-position: -224px -32px; }\n.ui-icon-arrowstop-1-w[_ngcontent-%COMP%] { background-position: -240px -32px; }\n.ui-icon-arrowthick-1-n[_ngcontent-%COMP%] { background-position: 1px -48px; }\n.ui-icon-arrowthick-1-ne[_ngcontent-%COMP%] { background-position: -16px -48px; }\n.ui-icon-arrowthick-1-e[_ngcontent-%COMP%] { background-position: -32px -48px; }\n.ui-icon-arrowthick-1-se[_ngcontent-%COMP%] { background-position: -48px -48px; }\n.ui-icon-arrowthick-1-s[_ngcontent-%COMP%] { background-position: -64px -48px; }\n.ui-icon-arrowthick-1-sw[_ngcontent-%COMP%] { background-position: -80px -48px; }\n.ui-icon-arrowthick-1-w[_ngcontent-%COMP%] { background-position: -96px -48px; }\n.ui-icon-arrowthick-1-nw[_ngcontent-%COMP%] { background-position: -112px -48px; }\n.ui-icon-arrowthick-2-n-s[_ngcontent-%COMP%] { background-position: -128px -48px; }\n.ui-icon-arrowthick-2-ne-sw[_ngcontent-%COMP%] { background-position: -144px -48px; }\n.ui-icon-arrowthick-2-e-w[_ngcontent-%COMP%] { background-position: -160px -48px; }\n.ui-icon-arrowthick-2-se-nw[_ngcontent-%COMP%] { background-position: -176px -48px; }\n.ui-icon-arrowthickstop-1-n[_ngcontent-%COMP%] { background-position: -192px -48px; }\n.ui-icon-arrowthickstop-1-e[_ngcontent-%COMP%] { background-position: -208px -48px; }\n.ui-icon-arrowthickstop-1-s[_ngcontent-%COMP%] { background-position: -224px -48px; }\n.ui-icon-arrowthickstop-1-w[_ngcontent-%COMP%] { background-position: -240px -48px; }\n.ui-icon-arrowreturnthick-1-w[_ngcontent-%COMP%] { background-position: 0 -64px; }\n.ui-icon-arrowreturnthick-1-n[_ngcontent-%COMP%] { background-position: -16px -64px; }\n.ui-icon-arrowreturnthick-1-e[_ngcontent-%COMP%] { background-position: -32px -64px; }\n.ui-icon-arrowreturnthick-1-s[_ngcontent-%COMP%] { background-position: -48px -64px; }\n.ui-icon-arrowreturn-1-w[_ngcontent-%COMP%] { background-position: -64px -64px; }\n.ui-icon-arrowreturn-1-n[_ngcontent-%COMP%] { background-position: -80px -64px; }\n.ui-icon-arrowreturn-1-e[_ngcontent-%COMP%] { background-position: -96px -64px; }\n.ui-icon-arrowreturn-1-s[_ngcontent-%COMP%] { background-position: -112px -64px; }\n.ui-icon-arrowrefresh-1-w[_ngcontent-%COMP%] { background-position: -128px -64px; }\n.ui-icon-arrowrefresh-1-n[_ngcontent-%COMP%] { background-position: -144px -64px; }\n.ui-icon-arrowrefresh-1-e[_ngcontent-%COMP%] { background-position: -160px -64px; }\n.ui-icon-arrowrefresh-1-s[_ngcontent-%COMP%] { background-position: -176px -64px; }\n.ui-icon-arrow-4[_ngcontent-%COMP%] { background-position: 0 -80px; }\n.ui-icon-arrow-4-diag[_ngcontent-%COMP%] { background-position: -16px -80px; }\n.ui-icon-extlink[_ngcontent-%COMP%] { background-position: -32px -80px; }\n.ui-icon-newwin[_ngcontent-%COMP%] { background-position: -48px -80px; }\n.ui-icon-refresh[_ngcontent-%COMP%] { background-position: -64px -80px; }\n.ui-icon-shuffle[_ngcontent-%COMP%] { background-position: -80px -80px; }\n.ui-icon-transfer-e-w[_ngcontent-%COMP%] { background-position: -96px -80px; }\n.ui-icon-transferthick-e-w[_ngcontent-%COMP%] { background-position: -112px -80px; }\n.ui-icon-folder-collapsed[_ngcontent-%COMP%] { background-position: 0 -96px; }\n.ui-icon-folder-open[_ngcontent-%COMP%] { background-position: -16px -96px; }\n.ui-icon-document[_ngcontent-%COMP%] { background-position: -32px -96px; }\n.ui-icon-document-b[_ngcontent-%COMP%] { background-position: -48px -96px; }\n.ui-icon-note[_ngcontent-%COMP%] { background-position: -64px -96px; }\n.ui-icon-mail-closed[_ngcontent-%COMP%] { background-position: -80px -96px; }\n.ui-icon-mail-open[_ngcontent-%COMP%] { background-position: -96px -96px; }\n.ui-icon-suitcase[_ngcontent-%COMP%] { background-position: -112px -96px; }\n.ui-icon-comment[_ngcontent-%COMP%] { background-position: -128px -96px; }\n.ui-icon-person[_ngcontent-%COMP%] { background-position: -144px -96px; }\n.ui-icon-print[_ngcontent-%COMP%] { background-position: -160px -96px; }\n.ui-icon-trash[_ngcontent-%COMP%] { background-position: -176px -96px; }\n.ui-icon-locked[_ngcontent-%COMP%] { background-position: -192px -96px; }\n.ui-icon-unlocked[_ngcontent-%COMP%] { background-position: -208px -96px; }\n.ui-icon-bookmark[_ngcontent-%COMP%] { background-position: -224px -96px; }\n.ui-icon-tag[_ngcontent-%COMP%] { background-position: -240px -96px; }\n.ui-icon-home[_ngcontent-%COMP%] { background-position: 0 -112px; }\n.ui-icon-flag[_ngcontent-%COMP%] { background-position: -16px -112px; }\n.ui-icon-calendar[_ngcontent-%COMP%] { background-position: -32px -112px; }\n.ui-icon-cart[_ngcontent-%COMP%] { background-position: -48px -112px; }\n.ui-icon-pencil[_ngcontent-%COMP%] { background-position: -64px -112px; }\n.ui-icon-clock[_ngcontent-%COMP%] { background-position: -80px -112px; }\n.ui-icon-disk[_ngcontent-%COMP%] { background-position: -96px -112px; }\n.ui-icon-calculator[_ngcontent-%COMP%] { background-position: -112px -112px; }\n.ui-icon-zoomin[_ngcontent-%COMP%] { background-position: -128px -112px; }\n.ui-icon-zoomout[_ngcontent-%COMP%] { background-position: -144px -112px; }\n.ui-icon-search[_ngcontent-%COMP%] { background-position: -160px -112px; }\n.ui-icon-wrench[_ngcontent-%COMP%] { background-position: -176px -112px; }\n.ui-icon-gear[_ngcontent-%COMP%] { background-position: -192px -112px; }\n.ui-icon-heart[_ngcontent-%COMP%] { background-position: -208px -112px; }\n.ui-icon-star[_ngcontent-%COMP%] { background-position: -224px -112px; }\n.ui-icon-link[_ngcontent-%COMP%] { background-position: -240px -112px; }\n.ui-icon-cancel[_ngcontent-%COMP%] { background-position: 0 -128px; }\n.ui-icon-plus[_ngcontent-%COMP%] { background-position: -16px -128px; }\n.ui-icon-plusthick[_ngcontent-%COMP%] { background-position: -32px -128px; }\n.ui-icon-minus[_ngcontent-%COMP%] { background-position: -48px -128px; }\n.ui-icon-minusthick[_ngcontent-%COMP%] { background-position: -64px -128px; }\n.ui-icon-close[_ngcontent-%COMP%] { background-position: -80px -128px; }\n.ui-icon-closethick[_ngcontent-%COMP%] { background-position: -96px -128px; }\n.ui-icon-key[_ngcontent-%COMP%] { background-position: -112px -128px; }\n.ui-icon-lightbulb[_ngcontent-%COMP%] { background-position: -128px -128px; }\n.ui-icon-scissors[_ngcontent-%COMP%] { background-position: -144px -128px; }\n.ui-icon-clipboard[_ngcontent-%COMP%] { background-position: -160px -128px; }\n.ui-icon-copy[_ngcontent-%COMP%] { background-position: -176px -128px; }\n.ui-icon-contact[_ngcontent-%COMP%] { background-position: -192px -128px; }\n.ui-icon-image[_ngcontent-%COMP%] { background-position: -208px -128px; }\n.ui-icon-video[_ngcontent-%COMP%] { background-position: -224px -128px; }\n.ui-icon-script[_ngcontent-%COMP%] { background-position: -240px -128px; }\n.ui-icon-alert[_ngcontent-%COMP%] { background-position: 0 -144px; }\n.ui-icon-info[_ngcontent-%COMP%] { background-position: -16px -144px; }\n.ui-icon-notice[_ngcontent-%COMP%] { background-position: -32px -144px; }\n.ui-icon-help[_ngcontent-%COMP%] { background-position: -48px -144px; }\n.ui-icon-check[_ngcontent-%COMP%] { background-position: -64px -144px; }\n.ui-icon-bullet[_ngcontent-%COMP%] { background-position: -80px -144px; }\n.ui-icon-radio-on[_ngcontent-%COMP%] { background-position: -96px -144px; }\n.ui-icon-radio-off[_ngcontent-%COMP%] { background-position: -112px -144px; }\n.ui-icon-pin-w[_ngcontent-%COMP%] { background-position: -128px -144px; }\n.ui-icon-pin-s[_ngcontent-%COMP%] { background-position: -144px -144px; }\n.ui-icon-play[_ngcontent-%COMP%] { background-position: 0 -160px; }\n.ui-icon-pause[_ngcontent-%COMP%] { background-position: -16px -160px; }\n.ui-icon-seek-next[_ngcontent-%COMP%] { background-position: -32px -160px; }\n.ui-icon-seek-prev[_ngcontent-%COMP%] { background-position: -48px -160px; }\n.ui-icon-seek-end[_ngcontent-%COMP%] { background-position: -64px -160px; }\n.ui-icon-seek-start[_ngcontent-%COMP%] { background-position: -80px -160px; }\n\n.ui-icon-seek-first[_ngcontent-%COMP%] { background-position: -80px -160px; }\n.ui-icon-stop[_ngcontent-%COMP%] { background-position: -96px -160px; }\n.ui-icon-eject[_ngcontent-%COMP%] { background-position: -112px -160px; }\n.ui-icon-volume-off[_ngcontent-%COMP%] { background-position: -128px -160px; }\n.ui-icon-volume-on[_ngcontent-%COMP%] { background-position: -144px -160px; }\n.ui-icon-power[_ngcontent-%COMP%] { background-position: 0 -176px; }\n.ui-icon-signal-diag[_ngcontent-%COMP%] { background-position: -16px -176px; }\n.ui-icon-signal[_ngcontent-%COMP%] { background-position: -32px -176px; }\n.ui-icon-battery-0[_ngcontent-%COMP%] { background-position: -48px -176px; }\n.ui-icon-battery-1[_ngcontent-%COMP%] { background-position: -64px -176px; }\n.ui-icon-battery-2[_ngcontent-%COMP%] { background-position: -80px -176px; }\n.ui-icon-battery-3[_ngcontent-%COMP%] { background-position: -96px -176px; }\n.ui-icon-circle-plus[_ngcontent-%COMP%] { background-position: 0 -192px; }\n.ui-icon-circle-minus[_ngcontent-%COMP%] { background-position: -16px -192px; }\n.ui-icon-circle-close[_ngcontent-%COMP%] { background-position: -32px -192px; }\n.ui-icon-circle-triangle-e[_ngcontent-%COMP%] { background-position: -48px -192px; }\n.ui-icon-circle-triangle-s[_ngcontent-%COMP%] { background-position: -64px -192px; }\n.ui-icon-circle-triangle-w[_ngcontent-%COMP%] { background-position: -80px -192px; }\n.ui-icon-circle-triangle-n[_ngcontent-%COMP%] { background-position: -96px -192px; }\n.ui-icon-circle-arrow-e[_ngcontent-%COMP%] { background-position: -112px -192px; }\n.ui-icon-circle-arrow-s[_ngcontent-%COMP%] { background-position: -128px -192px; }\n.ui-icon-circle-arrow-w[_ngcontent-%COMP%] { background-position: -144px -192px; }\n.ui-icon-circle-arrow-n[_ngcontent-%COMP%] { background-position: -160px -192px; }\n.ui-icon-circle-zoomin[_ngcontent-%COMP%] { background-position: -176px -192px; }\n.ui-icon-circle-zoomout[_ngcontent-%COMP%] { background-position: -192px -192px; }\n.ui-icon-circle-check[_ngcontent-%COMP%] { background-position: -208px -192px; }\n.ui-icon-circlesmall-plus[_ngcontent-%COMP%] { background-position: 0 -208px; }\n.ui-icon-circlesmall-minus[_ngcontent-%COMP%] { background-position: -16px -208px; }\n.ui-icon-circlesmall-close[_ngcontent-%COMP%] { background-position: -32px -208px; }\n.ui-icon-squaresmall-plus[_ngcontent-%COMP%] { background-position: -48px -208px; }\n.ui-icon-squaresmall-minus[_ngcontent-%COMP%] { background-position: -64px -208px; }\n.ui-icon-squaresmall-close[_ngcontent-%COMP%] { background-position: -80px -208px; }\n.ui-icon-grip-dotted-vertical[_ngcontent-%COMP%] { background-position: 0 -224px; }\n.ui-icon-grip-dotted-horizontal[_ngcontent-%COMP%] { background-position: -16px -224px; }\n.ui-icon-grip-solid-vertical[_ngcontent-%COMP%] { background-position: -32px -224px; }\n.ui-icon-grip-solid-horizontal[_ngcontent-%COMP%] { background-position: -48px -224px; }\n.ui-icon-gripsmall-diagonal-se[_ngcontent-%COMP%] { background-position: -64px -224px; }\n.ui-icon-grip-diagonal-se[_ngcontent-%COMP%] { background-position: -80px -224px; }\n\n\n.ui-corner-all[_ngcontent-%COMP%], .ui-corner-top[_ngcontent-%COMP%], .ui-corner-left[_ngcontent-%COMP%], .ui-corner-tl[_ngcontent-%COMP%] {\n\tborder-top-left-radius: 3px;\n}\n.ui-corner-all[_ngcontent-%COMP%], .ui-corner-top[_ngcontent-%COMP%], .ui-corner-right[_ngcontent-%COMP%], .ui-corner-tr[_ngcontent-%COMP%] {\n\tborder-top-right-radius: 3px;\n}\n.ui-corner-all[_ngcontent-%COMP%], .ui-corner-bottom[_ngcontent-%COMP%], .ui-corner-left[_ngcontent-%COMP%], .ui-corner-bl[_ngcontent-%COMP%] {\n\tborder-bottom-left-radius: 3px;\n}\n.ui-corner-all[_ngcontent-%COMP%], .ui-corner-bottom[_ngcontent-%COMP%], .ui-corner-right[_ngcontent-%COMP%], .ui-corner-br[_ngcontent-%COMP%] {\n\tborder-bottom-right-radius: 3px;\n}\n\n.ui-widget-overlay[_ngcontent-%COMP%] {\n\tbackground: #aaaaaa    ;\n\topacity: .3;\n\tfilter: Alpha(Opacity=30); \n}\n.ui-widget-shadow[_ngcontent-%COMP%] {\n\tbox-shadow: 0 0 5px #666666;\n}\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n  margin: 0;\n}\nbody[_ngcontent-%COMP%] {\n  color: #263238;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 16px;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Quicksand\", sans-serif;\n  margin: 0 0 10px 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\ninput[_ngcontent-%COMP%] {\n  border: 2px solid #263238;\n  border-radius: 5px;\n  box-sizing: border-box;\n  height: 30px;\n  outline: none;\n  padding: 0 5px;\n  color: #263238;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 16px;\n}\nbutton[_ngcontent-%COMP%] {\n  height: 30px;\n  background: #f5f5f5;\n  border: 2px solid #263238;\n  border-radius: 5px;\n  cursor: pointer;\n  outline: none;\n  color: #263238;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 16px;\n}\nbutton.ready[_ngcontent-%COMP%] {\n  background: #00e676;\n  color: #FFFFFF;\n}\nselect[_ngcontent-%COMP%] {\n  height: 30px;\n  border: 2px solid #263238;\n  border-radius: 5px;\n  cursor: pointer;\n  outline: none;\n  color: #263238;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 16px;\n}\ndiv.ui-selectable-helper[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10000000;\n  border: 1px dotted black;\n}\nform[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin: auto;\n}\nheader[_ngcontent-%COMP%], main[_ngcontent-%COMP%], footer[_ngcontent-%COMP%] {\n  text-align: center;\n}\nheader[_ngcontent-%COMP%] {\n  padding: 70px 10px 10px 10px;\n}\nheader[_ngcontent-%COMP%]   div.bar[_ngcontent-%COMP%] {\n  background: #ffee58;\n  height: 50px;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\nheader[_ngcontent-%COMP%]   div.bar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-spacing: 10px;\n  height: 50px;\n}\nheader[_ngcontent-%COMP%]   div.bar[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0;\n}\nheader[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form-element[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form-element[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  padding: 10px 10px 10px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96YWNoYmVja2VyL1B5Y2hhcm1Qcm9qZWN0cy90dW1ibGVzcy90dW1ibGVzcy5naXRodWIuaW8vc3JjL3N0eWxlcy5zY3NzIiwibm9kZV9tb2R1bGVzL2pxdWVyeS11aS90aGVtZXMvYmFzZS9hbGwuY3NzIiwibm9kZV9tb2R1bGVzL2pxdWVyeS11aS90aGVtZXMvYmFzZS9iYXNlLmNzcyIsIm5vZGVfbW9kdWxlcy9qcXVlcnktdWkvdGhlbWVzL2Jhc2UvY29yZS5jc3MiLCJub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3RoZW1lcy9iYXNlL2FjY29yZGlvbi5jc3MiLCJub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3RoZW1lcy9iYXNlL2F1dG9jb21wbGV0ZS5jc3MiLCJub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3RoZW1lcy9iYXNlL2J1dHRvbi5jc3MiLCJub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3RoZW1lcy9iYXNlL2NoZWNrYm94cmFkaW8uY3NzIiwibm9kZV9tb2R1bGVzL2pxdWVyeS11aS90aGVtZXMvYmFzZS9jb250cm9sZ3JvdXAuY3NzIiwibm9kZV9tb2R1bGVzL2pxdWVyeS11aS90aGVtZXMvYmFzZS9kYXRlcGlja2VyLmNzcyIsIm5vZGVfbW9kdWxlcy9qcXVlcnktdWkvdGhlbWVzL2Jhc2UvZGlhbG9nLmNzcyIsIm5vZGVfbW9kdWxlcy9qcXVlcnktdWkvdGhlbWVzL2Jhc2UvZHJhZ2dhYmxlLmNzcyIsIm5vZGVfbW9kdWxlcy9qcXVlcnktdWkvdGhlbWVzL2Jhc2UvbWVudS5jc3MiLCJub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3RoZW1lcy9iYXNlL3Byb2dyZXNzYmFyLmNzcyIsIm5vZGVfbW9kdWxlcy9qcXVlcnktdWkvdGhlbWVzL2Jhc2UvcmVzaXphYmxlLmNzcyIsIm5vZGVfbW9kdWxlcy9qcXVlcnktdWkvdGhlbWVzL2Jhc2Uvc2VsZWN0YWJsZS5jc3MiLCJub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3RoZW1lcy9iYXNlL3NlbGVjdG1lbnUuY3NzIiwibm9kZV9tb2R1bGVzL2pxdWVyeS11aS90aGVtZXMvYmFzZS9zb3J0YWJsZS5jc3MiLCJub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3RoZW1lcy9iYXNlL3NsaWRlci5jc3MiLCJub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3RoZW1lcy9iYXNlL3NwaW5uZXIuY3NzIiwibm9kZV9tb2R1bGVzL2pxdWVyeS11aS90aGVtZXMvYmFzZS90YWJzLmNzcyIsIm5vZGVfbW9kdWxlcy9qcXVlcnktdWkvdGhlbWVzL2Jhc2UvdG9vbHRpcC5jc3MiLCJub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3RoZW1lcy9iYXNlL3RoZW1lLmNzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3phY2hiZWNrZXIvUHljaGFybVByb2plY3RzL3R1bWJsZXNzL3R1bWJsZXNzLmdpdGh1Yi5pby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx3RUFBQTtBQ0FSOzs7Ozs7Ozs7RUFTRTtBQ1RGOzs7Ozs7Ozs7RUFTRTtBQ1RGOzs7Ozs7Ozs7RUFTRTtBQUVGO21DQUNtQztBQUNuQztDQUNDLGFBQWE7QUFDZDtBQUNBO0NBQ0MsU0FBUztDQUNULG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLFVBQVU7QUFDWDtBQUNBO0NBQ0MsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQixxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxjQUFjO0NBQ2QseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osTUFBTTtDQUNOLE9BQU87Q0FDUCxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLHVCQUF1QixFQUFFLGlCQUFpQjtBQUMzQztB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O0F1QnFCRDtBdkIyQkM7RUFDQyxtQkFyRU07RUFzRU4sY0ExRE07QXVCaUNSO0F2QjZCQTtFQUNDLFlBQUE7RUFDQSx5QkFBQTtFQUdBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUEvREEsY0F4Qk87RUF5QlAsb0NBQUE7RUFDQSxlQUFBO0F1QnNDRDtBdkIyQkE7RUFDQyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QXVCeEJEO0FDcEVDO0VBQ0MsWUFBQTtBRHVFRjtBQ25FQTtFQUNDLGtCQUFBO0FEc0VEO0FDbkVBO0VBRUMsNEJBQUE7QURxRUQ7QUNwRUM7RUFDQyxtQnhCS087RXdCSlAsWUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FEc0VGO0FDcEVHO0VBQ0Msb0JBQUE7RUFDQSxZQUFBO0FEc0VKO0FDckVJO0VBQ0MsVUFBQTtBRHVFTDtBQ2hFRztFQUNDLFdBQUE7QURrRUo7QUN6REE7RUFDQyw0QkFBQTtBRDRERCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UXVpY2tzYW5kOjQwMCw3MDAnKTtcblxuJGJsYWNrOiAjMjYzMjM4O1xuXG4kYmx1ZTogIzAwZTVmZjtcbiRibHVlLWxpZ2h0OiAjNmVmZmZmO1xuJGJsdWU6ICMwMGIyY2M7XG5cbiRncmVlbjogIzAwZTY3NjtcbiRncmVlbi1saWdodDogIzY2ZmZhNjtcbiRncmVlbi1kYXJrOiAjMDBiMjQ4O1xuXG4kb3JhbmdlOiAjZmZhMDAwO1xuXG4kcHVycGxlOiAjZWE4MGZjO1xuJHB1cnBsZS1saWdodDogI2ZmYjJmZjtcbiRwdXJwbGUtZGFyazogI2I2NGZjODtcblxuJGdyZXk6ICNmNWY1ZjU7XG5cbiR3aGl0ZTogI0ZGRkZGRjtcblxuJHllbGxvdzogI2ZmZWU1ODtcbiR5ZWxsb3ctbGlnaHQ6ICNmZmZmOGI7XG5cbkBtaXhpbiBCb2R5Rm9udCB7XG5cdGNvbG9yOiAkYmxhY2s7XG5cdGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxNnB4O1xufVxuXG5AbWl4aW4gSGVhZGVyRm9udCB7XG5cdGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcbn1cblxuYm9keSwgaHRtbCB7XG5cdG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG5cdEBpbmNsdWRlIEJvZHlGb250O1xufVxuXG5oMSwgaDIsIGgzIHtcblx0QGluY2x1ZGUgSGVhZGVyRm9udDtcblx0bWFyZ2luOiAwIDAgMTBweCAwO1xufVxuXG5wIHtcblx0bWFyZ2luOiAwO1xufVxuXG5pbnB1dCB7XG5cdGJvcmRlcjogMnB4IHNvbGlkICRibGFjaztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcblx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRoZWlnaHQ6IDMwcHg7XG5cdG91dGxpbmU6IG5vbmU7XG5cdHBhZGRpbmc6IDAgNXB4O1xuXHRAaW5jbHVkZSBCb2R5Rm9udDtcbn1cblxuYnV0dG9uIHtcblx0aGVpZ2h0OiAzMHB4O1xuXHRiYWNrZ3JvdW5kOiAkZ3JleTtcblx0Ym9yZGVyOiAycHggc29saWQgJGJsYWNrO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRvdXRsaW5lOiBub25lO1xuXHRAaW5jbHVkZSBCb2R5Rm9udDtcblx0Ji5yZWFkeSB7XG5cdFx0YmFja2dyb3VuZDogJGdyZWVuO1xuXHRcdGNvbG9yOiAkd2hpdGU7XG5cdH1cbn1cblxuc2VsZWN0IHtcblx0aGVpZ2h0OiAzMHB4O1xuXHRib3JkZXI6IDJweCBzb2xpZCAkYmxhY2s7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdG91dGxpbmU6IG5vbmU7XG5cdEBpbmNsdWRlIEJvZHlGb250O1xufVxuXG5kaXYudWktc2VsZWN0YWJsZS1oZWxwZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHotaW5kZXg6IDEwMDAwMDAwO1xuXHRib3JkZXI6IDFweCBkb3R0ZWQgYmxhY2s7XG59XG4iLCIvKiFcbiAqIGpRdWVyeSBVSSBDU1MgRnJhbWV3b3JrIDEuMTIuMVxuICogaHR0cDovL2pxdWVyeXVpLmNvbVxuICpcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKlxuICogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20vY2F0ZWdvcnkvdGhlbWluZy9cbiAqL1xuQGltcG9ydCBcImJhc2UuY3NzXCI7XG5AaW1wb3J0IFwidGhlbWUuY3NzXCI7XG4iLCIvKiFcbiAqIGpRdWVyeSBVSSBDU1MgRnJhbWV3b3JrIDEuMTIuMVxuICogaHR0cDovL2pxdWVyeXVpLmNvbVxuICpcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKlxuICogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20vY2F0ZWdvcnkvdGhlbWluZy9cbiAqL1xuQGltcG9ydCB1cmwoXCJjb3JlLmNzc1wiKTtcblxuQGltcG9ydCB1cmwoXCJhY2NvcmRpb24uY3NzXCIpO1xuQGltcG9ydCB1cmwoXCJhdXRvY29tcGxldGUuY3NzXCIpO1xuQGltcG9ydCB1cmwoXCJidXR0b24uY3NzXCIpO1xuQGltcG9ydCB1cmwoXCJjaGVja2JveHJhZGlvLmNzc1wiKTtcbkBpbXBvcnQgdXJsKFwiY29udHJvbGdyb3VwLmNzc1wiKTtcbkBpbXBvcnQgdXJsKFwiZGF0ZXBpY2tlci5jc3NcIik7XG5AaW1wb3J0IHVybChcImRpYWxvZy5jc3NcIik7XG5AaW1wb3J0IHVybChcImRyYWdnYWJsZS5jc3NcIik7XG5AaW1wb3J0IHVybChcIm1lbnUuY3NzXCIpO1xuQGltcG9ydCB1cmwoXCJwcm9ncmVzc2Jhci5jc3NcIik7XG5AaW1wb3J0IHVybChcInJlc2l6YWJsZS5jc3NcIik7XG5AaW1wb3J0IHVybChcInNlbGVjdGFibGUuY3NzXCIpO1xuQGltcG9ydCB1cmwoXCJzZWxlY3RtZW51LmNzc1wiKTtcbkBpbXBvcnQgdXJsKFwic29ydGFibGUuY3NzXCIpO1xuQGltcG9ydCB1cmwoXCJzbGlkZXIuY3NzXCIpO1xuQGltcG9ydCB1cmwoXCJzcGlubmVyLmNzc1wiKTtcbkBpbXBvcnQgdXJsKFwidGFicy5jc3NcIik7XG5AaW1wb3J0IHVybChcInRvb2x0aXAuY3NzXCIpO1xuIiwiLyohXG4gKiBqUXVlcnkgVUkgQ1NTIEZyYW1ld29yayAxLjEyLjFcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIGh0dHA6Ly9hcGkuanF1ZXJ5dWkuY29tL2NhdGVnb3J5L3RoZW1pbmcvXG4gKi9cblxuLyogTGF5b3V0IGhlbHBlcnNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnVpLWhlbHBlci1oaWRkZW4ge1xuXHRkaXNwbGF5OiBub25lO1xufVxuLnVpLWhlbHBlci1oaWRkZW4tYWNjZXNzaWJsZSB7XG5cdGJvcmRlcjogMDtcblx0Y2xpcDogcmVjdCgwIDAgMCAwKTtcblx0aGVpZ2h0OiAxcHg7XG5cdG1hcmdpbjogLTFweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0cGFkZGluZzogMDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogMXB4O1xufVxuLnVpLWhlbHBlci1yZXNldCB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRvdXRsaW5lOiAwO1xuXHRsaW5lLWhlaWdodDogMS4zO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbi51aS1oZWxwZXItY2xlYXJmaXg6YmVmb3JlLFxuLnVpLWhlbHBlci1jbGVhcmZpeDphZnRlciB7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGRpc3BsYXk6IHRhYmxlO1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuLnVpLWhlbHBlci1jbGVhcmZpeDphZnRlciB7XG5cdGNsZWFyOiBib3RoO1xufVxuLnVpLWhlbHBlci16Zml4IHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdG9wYWNpdHk6IDA7XG5cdGZpbHRlcjpBbHBoYShPcGFjaXR5PTApOyAvKiBzdXBwb3J0OiBJRTggKi9cbn1cblxuLnVpLWZyb250IHtcblx0ei1pbmRleDogMTAwO1xufVxuXG5cbi8qIEludGVyYWN0aW9uIEN1ZXNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnVpLXN0YXRlLWRpc2FibGVkIHtcblx0Y3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5cbi8qIEljb25zXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi51aS1pY29uIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRtYXJnaW4tdG9wOiAtLjI1ZW07XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dGV4dC1pbmRlbnQ6IC05OTk5OXB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4udWktd2lkZ2V0LWljb24tYmxvY2sge1xuXHRsZWZ0OiA1MCU7XG5cdG1hcmdpbi1sZWZ0OiAtOHB4O1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLyogTWlzYyB2aXN1YWxzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLyogT3ZlcmxheXMgKi9cbi51aS13aWRnZXQtb3ZlcmxheSB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xufVxuIiwiLyohXG4gKiBqUXVlcnkgVUkgQWNjb3JkaW9uIDEuMTIuMVxuICogaHR0cDovL2pxdWVyeXVpLmNvbVxuICpcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKlxuICogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20vYWNjb3JkaW9uLyN0aGVtaW5nXG4gKi9cbi51aS1hY2NvcmRpb24gLnVpLWFjY29yZGlvbi1oZWFkZXIge1xuXHRkaXNwbGF5OiBibG9jaztcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG1hcmdpbjogMnB4IDAgMCAwO1xuXHRwYWRkaW5nOiAuNWVtIC41ZW0gLjVlbSAuN2VtO1xuXHRmb250LXNpemU6IDEwMCU7XG59XG4udWktYWNjb3JkaW9uIC51aS1hY2NvcmRpb24tY29udGVudCB7XG5cdHBhZGRpbmc6IDFlbSAyLjJlbTtcblx0Ym9yZGVyLXRvcDogMDtcblx0b3ZlcmZsb3c6IGF1dG87XG59XG4iLCIvKiFcbiAqIGpRdWVyeSBVSSBBdXRvY29tcGxldGUgMS4xMi4xXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS9hdXRvY29tcGxldGUvI3RoZW1pbmdcbiAqL1xuLnVpLWF1dG9jb21wbGV0ZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHRjdXJzb3I6IGRlZmF1bHQ7XG59XG4iLCIvKiFcbiAqIGpRdWVyeSBVSSBCdXR0b24gMS4xMi4xXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS9idXR0b24vI3RoZW1pbmdcbiAqL1xuLnVpLWJ1dHRvbiB7XG5cdHBhZGRpbmc6IC40ZW0gMWVtO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcblx0bWFyZ2luLXJpZ2h0OiAuMWVtO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcblx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcblxuXHQvKiBTdXBwb3J0OiBJRSA8PSAxMSAqL1xuXHRvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnVpLWJ1dHRvbixcbi51aS1idXR0b246bGluayxcbi51aS1idXR0b246dmlzaXRlZCxcbi51aS1idXR0b246aG92ZXIsXG4udWktYnV0dG9uOmFjdGl2ZSB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogdG8gbWFrZSByb29tIGZvciB0aGUgaWNvbiwgYSB3aWR0aCBuZWVkcyB0byBiZSBzZXQgaGVyZSAqL1xuLnVpLWJ1dHRvbi1pY29uLW9ubHkge1xuXHR3aWR0aDogMmVtO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHR0ZXh0LWluZGVudDogLTk5OTlweDtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLyogbm8gaWNvbiBzdXBwb3J0IGZvciBpbnB1dCBlbGVtZW50cyAqL1xuaW5wdXQudWktYnV0dG9uLnVpLWJ1dHRvbi1pY29uLW9ubHkge1xuXHR0ZXh0LWluZGVudDogMDtcbn1cblxuLyogYnV0dG9uIGljb24gZWxlbWVudChzKSAqL1xuLnVpLWJ1dHRvbi1pY29uLW9ubHkgLnVpLWljb24ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNTAlO1xuXHRsZWZ0OiA1MCU7XG5cdG1hcmdpbi10b3A6IC04cHg7XG5cdG1hcmdpbi1sZWZ0OiAtOHB4O1xufVxuXG4udWktYnV0dG9uLnVpLWljb24tbm90ZXh0IC51aS1pY29uIHtcblx0cGFkZGluZzogMDtcblx0d2lkdGg6IDIuMWVtO1xuXHRoZWlnaHQ6IDIuMWVtO1xuXHR0ZXh0LWluZGVudDogLTk5OTlweDtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblxufVxuXG5pbnB1dC51aS1idXR0b24udWktaWNvbi1ub3RleHQgLnVpLWljb24ge1xuXHR3aWR0aDogYXV0bztcblx0aGVpZ2h0OiBhdXRvO1xuXHR0ZXh0LWluZGVudDogMDtcblx0d2hpdGUtc3BhY2U6IG5vcm1hbDtcblx0cGFkZGluZzogLjRlbSAxZW07XG59XG5cbi8qIHdvcmthcm91bmRzICovXG4vKiBTdXBwb3J0OiBGaXJlZm94IDUgLSA0MCAqL1xuaW5wdXQudWktYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuYnV0dG9uLnVpLWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XG5cdGJvcmRlcjogMDtcblx0cGFkZGluZzogMDtcbn1cbiIsIi8qIVxuICogalF1ZXJ5IFVJIENoZWNrYm94cmFkaW8gMS4xMi4xXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS9jaGVja2JveHJhZGlvLyN0aGVtaW5nXG4gKi9cblxuLnVpLWNoZWNrYm94cmFkaW8tbGFiZWwgLnVpLWljb24tYmFja2dyb3VuZCB7XG5cdGJveC1zaGFkb3c6IGluc2V0IDFweCAxcHggMXB4ICNjY2M7XG5cdGJvcmRlci1yYWRpdXM6IC4xMmVtO1xuXHRib3JkZXI6IG5vbmU7XG59XG4udWktY2hlY2tib3hyYWRpby1yYWRpby1sYWJlbCAudWktaWNvbi1iYWNrZ3JvdW5kIHtcblx0d2lkdGg6IDE2cHg7XG5cdGhlaWdodDogMTZweDtcblx0Ym9yZGVyLXJhZGl1czogMWVtO1xuXHRvdmVyZmxvdzogdmlzaWJsZTtcblx0Ym9yZGVyOiBub25lO1xufVxuLnVpLWNoZWNrYm94cmFkaW8tcmFkaW8tbGFiZWwudWktY2hlY2tib3hyYWRpby1jaGVja2VkIC51aS1pY29uLFxuLnVpLWNoZWNrYm94cmFkaW8tcmFkaW8tbGFiZWwudWktY2hlY2tib3hyYWRpby1jaGVja2VkOmhvdmVyIC51aS1pY29uIHtcblx0YmFja2dyb3VuZC1pbWFnZTogbm9uZTtcblx0d2lkdGg6IDhweDtcblx0aGVpZ2h0OiA4cHg7XG5cdGJvcmRlci13aWR0aDogNHB4O1xuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuLnVpLWNoZWNrYm94cmFkaW8tZGlzYWJsZWQge1xuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbiIsIi8qIVxuICogalF1ZXJ5IFVJIENvbnRyb2xncm91cCAxLjEyLjFcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIGh0dHA6Ly9hcGkuanF1ZXJ5dWkuY29tL2NvbnRyb2xncm91cC8jdGhlbWluZ1xuICovXG5cbi51aS1jb250cm9sZ3JvdXAge1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4udWktY29udHJvbGdyb3VwID4gLnVpLWNvbnRyb2xncm91cC1pdGVtIHtcblx0ZmxvYXQ6IGxlZnQ7XG5cdG1hcmdpbi1sZWZ0OiAwO1xuXHRtYXJnaW4tcmlnaHQ6IDA7XG59XG4udWktY29udHJvbGdyb3VwID4gLnVpLWNvbnRyb2xncm91cC1pdGVtOmZvY3VzLFxuLnVpLWNvbnRyb2xncm91cCA+IC51aS1jb250cm9sZ3JvdXAtaXRlbS51aS12aXN1YWwtZm9jdXMge1xuXHR6LWluZGV4OiA5OTk5O1xufVxuLnVpLWNvbnRyb2xncm91cC12ZXJ0aWNhbCA+IC51aS1jb250cm9sZ3JvdXAtaXRlbSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmbG9hdDogbm9uZTtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbi10b3A6IDA7XG5cdG1hcmdpbi1ib3R0b206IDA7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG4udWktY29udHJvbGdyb3VwLXZlcnRpY2FsIC51aS1jb250cm9sZ3JvdXAtaXRlbSB7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4udWktY29udHJvbGdyb3VwIC51aS1jb250cm9sZ3JvdXAtbGFiZWwge1xuXHRwYWRkaW5nOiAuNGVtIDFlbTtcbn1cbi51aS1jb250cm9sZ3JvdXAgLnVpLWNvbnRyb2xncm91cC1sYWJlbCBzcGFuIHtcblx0Zm9udC1zaXplOiA4MCU7XG59XG4udWktY29udHJvbGdyb3VwLWhvcml6b250YWwgLnVpLWNvbnRyb2xncm91cC1sYWJlbCArIC51aS1jb250cm9sZ3JvdXAtaXRlbSB7XG5cdGJvcmRlci1sZWZ0OiBub25lO1xufVxuLnVpLWNvbnRyb2xncm91cC12ZXJ0aWNhbCAudWktY29udHJvbGdyb3VwLWxhYmVsICsgLnVpLWNvbnRyb2xncm91cC1pdGVtIHtcblx0Ym9yZGVyLXRvcDogbm9uZTtcbn1cbi51aS1jb250cm9sZ3JvdXAtaG9yaXpvbnRhbCAudWktY29udHJvbGdyb3VwLWxhYmVsLnVpLXdpZGdldC1jb250ZW50IHtcblx0Ym9yZGVyLXJpZ2h0OiBub25lO1xufVxuLnVpLWNvbnRyb2xncm91cC12ZXJ0aWNhbCAudWktY29udHJvbGdyb3VwLWxhYmVsLnVpLXdpZGdldC1jb250ZW50IHtcblx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLyogU3Bpbm5lciBzcGVjaWZpYyBzdHlsZSBmaXhlcyAqL1xuLnVpLWNvbnRyb2xncm91cC12ZXJ0aWNhbCAudWktc3Bpbm5lci1pbnB1dCB7XG5cblx0LyogU3VwcG9ydDogSUU4IG9ubHksIEFuZHJvaWQgPCA0LjQgb25seSAqL1xuXHR3aWR0aDogNzUlO1xuXHR3aWR0aDogY2FsYyggMTAwJSAtIDIuNGVtICk7XG59XG4udWktY29udHJvbGdyb3VwLXZlcnRpY2FsIC51aS1zcGlubmVyIC51aS1zcGlubmVyLXVwIHtcblx0Ym9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG59XG5cbiIsIi8qIVxuICogalF1ZXJ5IFVJIERhdGVwaWNrZXIgMS4xMi4xXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS9kYXRlcGlja2VyLyN0aGVtaW5nXG4gKi9cbi51aS1kYXRlcGlja2VyIHtcblx0d2lkdGg6IDE3ZW07XG5cdHBhZGRpbmc6IC4yZW0gLjJlbSAwO1xuXHRkaXNwbGF5OiBub25lO1xufVxuLnVpLWRhdGVwaWNrZXIgLnVpLWRhdGVwaWNrZXItaGVhZGVyIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRwYWRkaW5nOiAuMmVtIDA7XG59XG4udWktZGF0ZXBpY2tlciAudWktZGF0ZXBpY2tlci1wcmV2LFxuLnVpLWRhdGVwaWNrZXIgLnVpLWRhdGVwaWNrZXItbmV4dCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAycHg7XG5cdHdpZHRoOiAxLjhlbTtcblx0aGVpZ2h0OiAxLjhlbTtcbn1cbi51aS1kYXRlcGlja2VyIC51aS1kYXRlcGlja2VyLXByZXYtaG92ZXIsXG4udWktZGF0ZXBpY2tlciAudWktZGF0ZXBpY2tlci1uZXh0LWhvdmVyIHtcblx0dG9wOiAxcHg7XG59XG4udWktZGF0ZXBpY2tlciAudWktZGF0ZXBpY2tlci1wcmV2IHtcblx0bGVmdDogMnB4O1xufVxuLnVpLWRhdGVwaWNrZXIgLnVpLWRhdGVwaWNrZXItbmV4dCB7XG5cdHJpZ2h0OiAycHg7XG59XG4udWktZGF0ZXBpY2tlciAudWktZGF0ZXBpY2tlci1wcmV2LWhvdmVyIHtcblx0bGVmdDogMXB4O1xufVxuLnVpLWRhdGVwaWNrZXIgLnVpLWRhdGVwaWNrZXItbmV4dC1ob3ZlciB7XG5cdHJpZ2h0OiAxcHg7XG59XG4udWktZGF0ZXBpY2tlciAudWktZGF0ZXBpY2tlci1wcmV2IHNwYW4sXG4udWktZGF0ZXBpY2tlciAudWktZGF0ZXBpY2tlci1uZXh0IHNwYW4ge1xuXHRkaXNwbGF5OiBibG9jaztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiA1MCU7XG5cdG1hcmdpbi1sZWZ0OiAtOHB4O1xuXHR0b3A6IDUwJTtcblx0bWFyZ2luLXRvcDogLThweDtcbn1cbi51aS1kYXRlcGlja2VyIC51aS1kYXRlcGlja2VyLXRpdGxlIHtcblx0bWFyZ2luOiAwIDIuM2VtO1xuXHRsaW5lLWhlaWdodDogMS44ZW07XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi51aS1kYXRlcGlja2VyIC51aS1kYXRlcGlja2VyLXRpdGxlIHNlbGVjdCB7XG5cdGZvbnQtc2l6ZTogMWVtO1xuXHRtYXJnaW46IDFweCAwO1xufVxuLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXItbW9udGgsXG4udWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci15ZWFyIHtcblx0d2lkdGg6IDQ1JTtcbn1cbi51aS1kYXRlcGlja2VyIHRhYmxlIHtcblx0d2lkdGg6IDEwMCU7XG5cdGZvbnQtc2l6ZTogLjllbTtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0bWFyZ2luOiAwIDAgLjRlbTtcbn1cbi51aS1kYXRlcGlja2VyIHRoIHtcblx0cGFkZGluZzogLjdlbSAuM2VtO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRib3JkZXI6IDA7XG59XG4udWktZGF0ZXBpY2tlciB0ZCB7XG5cdGJvcmRlcjogMDtcblx0cGFkZGluZzogMXB4O1xufVxuLnVpLWRhdGVwaWNrZXIgdGQgc3Bhbixcbi51aS1kYXRlcGlja2VyIHRkIGEge1xuXHRkaXNwbGF5OiBibG9jaztcblx0cGFkZGluZzogLjJlbTtcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi51aS1kYXRlcGlja2VyIC51aS1kYXRlcGlja2VyLWJ1dHRvbnBhbmUge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuXHRtYXJnaW46IC43ZW0gMCAwIDA7XG5cdHBhZGRpbmc6IDAgLjJlbTtcblx0Ym9yZGVyLWxlZnQ6IDA7XG5cdGJvcmRlci1yaWdodDogMDtcblx0Ym9yZGVyLWJvdHRvbTogMDtcbn1cbi51aS1kYXRlcGlja2VyIC51aS1kYXRlcGlja2VyLWJ1dHRvbnBhbmUgYnV0dG9uIHtcblx0ZmxvYXQ6IHJpZ2h0O1xuXHRtYXJnaW46IC41ZW0gLjJlbSAuNGVtO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHBhZGRpbmc6IC4yZW0gLjZlbSAuM2VtIC42ZW07XG5cdHdpZHRoOiBhdXRvO1xuXHRvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi51aS1kYXRlcGlja2VyIC51aS1kYXRlcGlja2VyLWJ1dHRvbnBhbmUgYnV0dG9uLnVpLWRhdGVwaWNrZXItY3VycmVudCB7XG5cdGZsb2F0OiBsZWZ0O1xufVxuXG4vKiB3aXRoIG11bHRpcGxlIGNhbGVuZGFycyAqL1xuLnVpLWRhdGVwaWNrZXIudWktZGF0ZXBpY2tlci1tdWx0aSB7XG5cdHdpZHRoOiBhdXRvO1xufVxuLnVpLWRhdGVwaWNrZXItbXVsdGkgLnVpLWRhdGVwaWNrZXItZ3JvdXAge1xuXHRmbG9hdDogbGVmdDtcbn1cbi51aS1kYXRlcGlja2VyLW11bHRpIC51aS1kYXRlcGlja2VyLWdyb3VwIHRhYmxlIHtcblx0d2lkdGg6IDk1JTtcblx0bWFyZ2luOiAwIGF1dG8gLjRlbTtcbn1cbi51aS1kYXRlcGlja2VyLW11bHRpLTIgLnVpLWRhdGVwaWNrZXItZ3JvdXAge1xuXHR3aWR0aDogNTAlO1xufVxuLnVpLWRhdGVwaWNrZXItbXVsdGktMyAudWktZGF0ZXBpY2tlci1ncm91cCB7XG5cdHdpZHRoOiAzMy4zJTtcbn1cbi51aS1kYXRlcGlja2VyLW11bHRpLTQgLnVpLWRhdGVwaWNrZXItZ3JvdXAge1xuXHR3aWR0aDogMjUlO1xufVxuLnVpLWRhdGVwaWNrZXItbXVsdGkgLnVpLWRhdGVwaWNrZXItZ3JvdXAtbGFzdCAudWktZGF0ZXBpY2tlci1oZWFkZXIsXG4udWktZGF0ZXBpY2tlci1tdWx0aSAudWktZGF0ZXBpY2tlci1ncm91cC1taWRkbGUgLnVpLWRhdGVwaWNrZXItaGVhZGVyIHtcblx0Ym9yZGVyLWxlZnQtd2lkdGg6IDA7XG59XG4udWktZGF0ZXBpY2tlci1tdWx0aSAudWktZGF0ZXBpY2tlci1idXR0b25wYW5lIHtcblx0Y2xlYXI6IGxlZnQ7XG59XG4udWktZGF0ZXBpY2tlci1yb3ctYnJlYWsge1xuXHRjbGVhcjogYm90aDtcblx0d2lkdGg6IDEwMCU7XG5cdGZvbnQtc2l6ZTogMDtcbn1cblxuLyogUlRMIHN1cHBvcnQgKi9cbi51aS1kYXRlcGlja2VyLXJ0bCB7XG5cdGRpcmVjdGlvbjogcnRsO1xufVxuLnVpLWRhdGVwaWNrZXItcnRsIC51aS1kYXRlcGlja2VyLXByZXYge1xuXHRyaWdodDogMnB4O1xuXHRsZWZ0OiBhdXRvO1xufVxuLnVpLWRhdGVwaWNrZXItcnRsIC51aS1kYXRlcGlja2VyLW5leHQge1xuXHRsZWZ0OiAycHg7XG5cdHJpZ2h0OiBhdXRvO1xufVxuLnVpLWRhdGVwaWNrZXItcnRsIC51aS1kYXRlcGlja2VyLXByZXY6aG92ZXIge1xuXHRyaWdodDogMXB4O1xuXHRsZWZ0OiBhdXRvO1xufVxuLnVpLWRhdGVwaWNrZXItcnRsIC51aS1kYXRlcGlja2VyLW5leHQ6aG92ZXIge1xuXHRsZWZ0OiAxcHg7XG5cdHJpZ2h0OiBhdXRvO1xufVxuLnVpLWRhdGVwaWNrZXItcnRsIC51aS1kYXRlcGlja2VyLWJ1dHRvbnBhbmUge1xuXHRjbGVhcjogcmlnaHQ7XG59XG4udWktZGF0ZXBpY2tlci1ydGwgLnVpLWRhdGVwaWNrZXItYnV0dG9ucGFuZSBidXR0b24ge1xuXHRmbG9hdDogbGVmdDtcbn1cbi51aS1kYXRlcGlja2VyLXJ0bCAudWktZGF0ZXBpY2tlci1idXR0b25wYW5lIGJ1dHRvbi51aS1kYXRlcGlja2VyLWN1cnJlbnQsXG4udWktZGF0ZXBpY2tlci1ydGwgLnVpLWRhdGVwaWNrZXItZ3JvdXAge1xuXHRmbG9hdDogcmlnaHQ7XG59XG4udWktZGF0ZXBpY2tlci1ydGwgLnVpLWRhdGVwaWNrZXItZ3JvdXAtbGFzdCAudWktZGF0ZXBpY2tlci1oZWFkZXIsXG4udWktZGF0ZXBpY2tlci1ydGwgLnVpLWRhdGVwaWNrZXItZ3JvdXAtbWlkZGxlIC51aS1kYXRlcGlja2VyLWhlYWRlciB7XG5cdGJvcmRlci1yaWdodC13aWR0aDogMDtcblx0Ym9yZGVyLWxlZnQtd2lkdGg6IDFweDtcbn1cblxuLyogSWNvbnMgKi9cbi51aS1kYXRlcGlja2VyIC51aS1pY29uIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHRleHQtaW5kZW50OiAtOTk5OTlweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0bGVmdDogLjVlbTtcblx0dG9wOiAuM2VtO1xufVxuIiwiLyohXG4gKiBqUXVlcnkgVUkgRGlhbG9nIDEuMTIuMVxuICogaHR0cDovL2pxdWVyeXVpLmNvbVxuICpcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKlxuICogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20vZGlhbG9nLyN0aGVtaW5nXG4gKi9cbi51aS1kaWFsb2cge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0cGFkZGluZzogLjJlbTtcblx0b3V0bGluZTogMDtcbn1cbi51aS1kaWFsb2cgLnVpLWRpYWxvZy10aXRsZWJhciB7XG5cdHBhZGRpbmc6IC40ZW0gMWVtO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udWktZGlhbG9nIC51aS1kaWFsb2ctdGl0bGUge1xuXHRmbG9hdDogbGVmdDtcblx0bWFyZ2luOiAuMWVtIDA7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdHdpZHRoOiA5MCU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnVpLWRpYWxvZyAudWktZGlhbG9nLXRpdGxlYmFyLWNsb3NlIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogLjNlbTtcblx0dG9wOiA1MCU7XG5cdHdpZHRoOiAyMHB4O1xuXHRtYXJnaW46IC0xMHB4IDAgMCAwO1xuXHRwYWRkaW5nOiAxcHg7XG5cdGhlaWdodDogMjBweDtcbn1cbi51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRib3JkZXI6IDA7XG5cdHBhZGRpbmc6IC41ZW0gMWVtO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRvdmVyZmxvdzogYXV0bztcbn1cbi51aS1kaWFsb2cgLnVpLWRpYWxvZy1idXR0b25wYW5lIHtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0Ym9yZGVyLXdpZHRoOiAxcHggMCAwIDA7XG5cdGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG5cdG1hcmdpbi10b3A6IC41ZW07XG5cdHBhZGRpbmc6IC4zZW0gMWVtIC41ZW0gLjRlbTtcbn1cbi51aS1kaWFsb2cgLnVpLWRpYWxvZy1idXR0b25wYW5lIC51aS1kaWFsb2ctYnV0dG9uc2V0IHtcblx0ZmxvYXQ6IHJpZ2h0O1xufVxuLnVpLWRpYWxvZyAudWktZGlhbG9nLWJ1dHRvbnBhbmUgYnV0dG9uIHtcblx0bWFyZ2luOiAuNWVtIC40ZW0gLjVlbSAwO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG4udWktZGlhbG9nIC51aS1yZXNpemFibGUtbiB7XG5cdGhlaWdodDogMnB4O1xuXHR0b3A6IDA7XG59XG4udWktZGlhbG9nIC51aS1yZXNpemFibGUtZSB7XG5cdHdpZHRoOiAycHg7XG5cdHJpZ2h0OiAwO1xufVxuLnVpLWRpYWxvZyAudWktcmVzaXphYmxlLXMge1xuXHRoZWlnaHQ6IDJweDtcblx0Ym90dG9tOiAwO1xufVxuLnVpLWRpYWxvZyAudWktcmVzaXphYmxlLXcge1xuXHR3aWR0aDogMnB4O1xuXHRsZWZ0OiAwO1xufVxuLnVpLWRpYWxvZyAudWktcmVzaXphYmxlLXNlLFxuLnVpLWRpYWxvZyAudWktcmVzaXphYmxlLXN3LFxuLnVpLWRpYWxvZyAudWktcmVzaXphYmxlLW5lLFxuLnVpLWRpYWxvZyAudWktcmVzaXphYmxlLW53IHtcblx0d2lkdGg6IDdweDtcblx0aGVpZ2h0OiA3cHg7XG59XG4udWktZGlhbG9nIC51aS1yZXNpemFibGUtc2Uge1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAwO1xufVxuLnVpLWRpYWxvZyAudWktcmVzaXphYmxlLXN3IHtcblx0bGVmdDogMDtcblx0Ym90dG9tOiAwO1xufVxuLnVpLWRpYWxvZyAudWktcmVzaXphYmxlLW5lIHtcblx0cmlnaHQ6IDA7XG5cdHRvcDogMDtcbn1cbi51aS1kaWFsb2cgLnVpLXJlc2l6YWJsZS1udyB7XG5cdGxlZnQ6IDA7XG5cdHRvcDogMDtcbn1cbi51aS1kcmFnZ2FibGUgLnVpLWRpYWxvZy10aXRsZWJhciB7XG5cdGN1cnNvcjogbW92ZTtcbn1cbiIsIi8qIVxuICogalF1ZXJ5IFVJIERyYWdnYWJsZSAxLjEyLjFcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICovXG4udWktZHJhZ2dhYmxlLWhhbmRsZSB7XG5cdC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XG5cdHRvdWNoLWFjdGlvbjogbm9uZTtcbn1cbiIsIi8qIVxuICogalF1ZXJ5IFVJIE1lbnUgMS4xMi4xXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS9tZW51LyN0aGVtaW5nXG4gKi9cbi51aS1tZW51IHtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xuXHRkaXNwbGF5OiBibG9jaztcblx0b3V0bGluZTogMDtcbn1cbi51aS1tZW51IC51aS1tZW51IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuLnVpLW1lbnUgLnVpLW1lbnUtaXRlbSB7XG5cdG1hcmdpbjogMDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHQvKiBzdXBwb3J0OiBJRTEwLCBzZWUgIzg4NDQgKi9cblx0bGlzdC1zdHlsZS1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3XCIpO1xufVxuLnVpLW1lbnUgLnVpLW1lbnUtaXRlbS13cmFwcGVyIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRwYWRkaW5nOiAzcHggMWVtIDNweCAuNGVtO1xufVxuLnVpLW1lbnUgLnVpLW1lbnUtZGl2aWRlciB7XG5cdG1hcmdpbjogNXB4IDA7XG5cdGhlaWdodDogMDtcblx0Zm9udC1zaXplOiAwO1xuXHRsaW5lLWhlaWdodDogMDtcblx0Ym9yZGVyLXdpZHRoOiAxcHggMCAwIDA7XG59XG4udWktbWVudSAudWktc3RhdGUtZm9jdXMsXG4udWktbWVudSAudWktc3RhdGUtYWN0aXZlIHtcblx0bWFyZ2luOiAtMXB4O1xufVxuXG4vKiBpY29uIHN1cHBvcnQgKi9cbi51aS1tZW51LWljb25zIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnVpLW1lbnUtaWNvbnMgLnVpLW1lbnUtaXRlbS13cmFwcGVyIHtcblx0cGFkZGluZy1sZWZ0OiAyZW07XG59XG5cbi8qIGxlZnQtYWxpZ25lZCAqL1xuLnVpLW1lbnUgLnVpLWljb24ge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0Ym90dG9tOiAwO1xuXHRsZWZ0OiAuMmVtO1xuXHRtYXJnaW46IGF1dG8gMDtcbn1cblxuLyogcmlnaHQtYWxpZ25lZCAqL1xuLnVpLW1lbnUgLnVpLW1lbnUtaWNvbiB7XG5cdGxlZnQ6IGF1dG87XG5cdHJpZ2h0OiAwO1xufVxuIiwiLyohXG4gKiBqUXVlcnkgVUkgUHJvZ3Jlc3NiYXIgMS4xMi4xXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS9wcm9ncmVzc2Jhci8jdGhlbWluZ1xuICovXG4udWktcHJvZ3Jlc3NiYXIge1xuXHRoZWlnaHQ6IDJlbTtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi51aS1wcm9ncmVzc2JhciAudWktcHJvZ3Jlc3NiYXItdmFsdWUge1xuXHRtYXJnaW46IC0xcHg7XG5cdGhlaWdodDogMTAwJTtcbn1cbi51aS1wcm9ncmVzc2JhciAudWktcHJvZ3Jlc3NiYXItb3ZlcmxheSB7XG5cdGJhY2tncm91bmQ6IHVybChcImRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEtBQW9BSUFCQUFBQUFQLy8veUgvQzA1RlZGTkRRVkJGTWk0d0F3RUFBQUFoK1FRSkFRQUJBQ3dBQUFBQUtBQW9BQUFDa1l3TnFYcmRDNTJEUzA2YTdNRlpJKzRGSEJDS29EZVdLWHF5bVBxR3F4dkpyWFpiTXg3VHRjK3c5WGdVMkZCM2xPeVFSV0VUMklGR2lVOW0xZnJEVnB4WlpjNmJmSHd2NGMxWVhQNmsxVmR5MjkyRmI2VWt1dkZ0WHB2V1N6QStIeWNYSkhVWGlHWUlpTWcyUjZXNDU5Z25XR2ZITmRqSXFEV1ZxZW1IMmVrcE9ia3BPbHBwV1VxWmlxcjZlZHFxV1FBQUlma0VDUUVBQVFBc0FBQUFBQ2dBS0FBQUFwU01nWm5HZmFxY2cxRTJ1dXpEbW1IVUJSOFFpbDk1aGlQS3FXbjNhcXRMc1MxOHk3RzFTek5lb3dXQkVOdFFkK1QxSmt0UDA1bnpQVGRKWmxSNnZVeE5XV2pWK3ZVV2hXTmtXRnd4bDlWcFpSZWRZY2ZsSU9MYWZhYTI4WGRzSC95bmxjYzF1UFZEWnhRSVIwSzI1K2NJQ0Ntb3FDZTVtR2haT2ZlWVNVaDV5SmNKeXJrWldXcGFSOGRvSjJvNE5ZcTYybEFBQUNINUJBa0JBQUVBTEFBQUFBQW9BQ2dBQUFLVkRJNFl5MjJabklOUk5xb3N3MEJ2N2kxZ3lIVWtGajdvU2FXbHUzb3ZDOEd4TnNvNWZsdXozcUxWaEJWZVQvTHo3WlRIeXhMNWREYWxRV1BWT3NRV3RSbnV3WGFGVGo5alZWaDhwbWE5SmpaNHpZU2o1Wk95bWE3dXVvbGZmaCtJUjVhVzk3Y0h1QlVYS0dLWGxLam4rRGlIV01jWUphaDROMGxZQ01sSk9YaXBHUnI1cWRnb1NUcnFXU3E2V0ZsMnlwb2FVQUFBSWZrRUNRRUFBUUFzQUFBQUFDZ0FLQUFBQXBhRWI2SExnZC9pTzdGTld0Y0ZXZSt1Zk9ER2pSZm9pSjJha1NoYnVlYjB3dEk1MHptMDJwYnZ3ZldFTVdCUTF6S0dsTEloc2tpRVBtOVI2dlJYeFY0WnpXVDJ5SE9HcFdNeW9yYmxLbE5wOEhtSEViL2xDWGpjVzdibXRYUDhYdDIyOU9WV1IxZm9kMmVXcU5mSHVNalhDUGtJR05pbGVPaUltVm1DT0Vtb1NmbjN5WGxKV21vSEdocXA2aWxZdVdZcG1UcUtVZ0FBSWZrRUNRRUFBUUFzQUFBQUFDZ0FLQUFBQXBpRUg2a2I1OGJpUTNGTld0TUZXVzNlTlZjb2p1RkdmcW5acVNlYnVTMDZ3NVY4MC9YMDJwS2U4ekZ3UDZFRldPVDFsREZrOHJHRVJoMVRUTk9vY1E2MUhtNFhtMlZleFVIcHpqeW1WaUhyRmJpRUxzZWZWcm42WEtmbnQyUTlHLytYZGllNDk5WEhkMmc0aDdpb09HaFhHSmJvR0FuWFNCbm9Cd0tZeWZpb3ViWkoySG4wUnVSWmFmbFpPaWw1NlpwNmlpb0tTWHBVQUFBaCtRUUpBUUFCQUN3QUFBQUFLQUFvQUFBQ2tvUVJxUnZueHVJN2tVMWExVVU1YmQ1dG5TZU9aWGhtbjVsV0szcU5UV3ZSZFF4UDhxdmFDKy95YVlRelhPN0JNdmFVRW1KUmQzVHNpTUFnc3dtTllyU2daZFlyVFg2dFNIR1pPNzNlenVBdzJ1eHVRK0JiZVpmTXhzZXhZMzUrL1FlNEoxaW5WMGc0eDNXSHVNaElsMmpYT0tUMlErVlU1ZmdvU1VJNTJWZlp5ZmtKR2toYTZqbVkrYWFZZGlycStsUUFBQ0g1QkFrQkFBRUFMQUFBQUFBb0FDZ0FBQUtXQklLcFllMEwzWU5LVG9xc3dVbHZ6bmlnZDR3aVI0S2hackt0OVVwcWlwNjFpOUUzdk12eFJkSGxiRUZpRVhmazlZQVJZeE9aWkQ2VlEycFV1bkJtdFJYbzFMZjhoTVZWY05sOEphZlYzOGFNMi9GdTVWMTZCbjYzcjZ4dDk3ajA5K01YU0ZpNEJuaUdGYWUzaHpiSDkraFlCemtwdVVoNWFabUh1YW5aT1pnSXV2YkdpTmVvbUNuYXh4YXAydXBhQ1pzcSsxa0FBQ0g1QkFrQkFBRUFMQUFBQUFBb0FDZ0FBQUtYakk4Qnk1emY0a094VFZyWE5WbHYxWDBkOElHWkdLTG5OcFl0bThMcjljcVZldU9TdmZPVzc5RDlhREhpek5oREppZEZaaE55ZEVhaE9hREg2bm9tdEpqcDF0dXRLb05Xa3ZBNkpxZlJWTEhVL1FVZmF1OWwyeDdHNTRkMWZsOTk1eGNJR0FkWHFNZkJOYWRvWXJoSCtNZzJLQmxwVnBibHVDaVhtTW5aMlNoNEdCcUorY2tJT3FxSjZMbUtTbGxabXNvcTZ3cFFBQUFoK1FRSkFRQUJBQ3dBQUFBQUtBQW9BQUFDbFl4L29Mdm94dUpEa1UxYTFZVVpiSjU5blNkMlpYaFdxYlJhMi9nRjhHdTJEWTNpcXM3eXJxK3hCWUVrWXZGU004YVNTT2JFK1pnUmwxQkhGWk5yN3BSQ2F2WjVCVzIxNDJoWTNBTi96V3RzbWYxMnA5WHh4RmwybHBMbjFyc2V6dGZYWmpkSVdJZjJzNWRJdHdqWUtCZ285eWc1cEhnekpYVEVlR2xadWVucHlQbXBHUW9LT1drWW1TcGFTbnFLaWxlSTJGQUFBQ0g1QkFrQkFBRUFMQUFBQUFBb0FDZ0FBQUtWakIrZ3Urakc0a09SVFZyVmhSbHNubjJkSjNabGVGYXB0RnJiK0NYbU85T296ZUw1VmZQOTlIdkFXaHBpVWRjd2twQkgzODI1QXdZZFU4eFRxbExHaHRDb3NBcktNcHZmYTFtTVJhZTlWdldaZmVCMlhmUGtlTG1tMThsVWNCaitwNWRuTjhqWFozWUlHRWhZdU9VbjQ1YW9DRGtwMTZobDVJallKdmpXS2Nub0dRcHF5UGxwT2hyM2FFbGFxcnE1NkJxN1ZBQUFPdz09XCIpO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGZpbHRlcjogYWxwaGEob3BhY2l0eT0yNSk7IC8qIHN1cHBvcnQ6IElFOCAqL1xuXHRvcGFjaXR5OiAwLjI1O1xufVxuLnVpLXByb2dyZXNzYmFyLWluZGV0ZXJtaW5hdGUgLnVpLXByb2dyZXNzYmFyLXZhbHVlIHtcblx0YmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cbiIsIi8qIVxuICogalF1ZXJ5IFVJIFJlc2l6YWJsZSAxLjEyLjFcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICovXG4udWktcmVzaXphYmxlIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnVpLXJlc2l6YWJsZS1oYW5kbGUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGZvbnQtc2l6ZTogMC4xcHg7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHQtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xuXHR0b3VjaC1hY3Rpb246IG5vbmU7XG59XG4udWktcmVzaXphYmxlLWRpc2FibGVkIC51aS1yZXNpemFibGUtaGFuZGxlLFxuLnVpLXJlc2l6YWJsZS1hdXRvaGlkZSAudWktcmVzaXphYmxlLWhhbmRsZSB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG4udWktcmVzaXphYmxlLW4ge1xuXHRjdXJzb3I6IG4tcmVzaXplO1xuXHRoZWlnaHQ6IDdweDtcblx0d2lkdGg6IDEwMCU7XG5cdHRvcDogLTVweDtcblx0bGVmdDogMDtcbn1cbi51aS1yZXNpemFibGUtcyB7XG5cdGN1cnNvcjogcy1yZXNpemU7XG5cdGhlaWdodDogN3B4O1xuXHR3aWR0aDogMTAwJTtcblx0Ym90dG9tOiAtNXB4O1xuXHRsZWZ0OiAwO1xufVxuLnVpLXJlc2l6YWJsZS1lIHtcblx0Y3Vyc29yOiBlLXJlc2l6ZTtcblx0d2lkdGg6IDdweDtcblx0cmlnaHQ6IC01cHg7XG5cdHRvcDogMDtcblx0aGVpZ2h0OiAxMDAlO1xufVxuLnVpLXJlc2l6YWJsZS13IHtcblx0Y3Vyc29yOiB3LXJlc2l6ZTtcblx0d2lkdGg6IDdweDtcblx0bGVmdDogLTVweDtcblx0dG9wOiAwO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG4udWktcmVzaXphYmxlLXNlIHtcblx0Y3Vyc29yOiBzZS1yZXNpemU7XG5cdHdpZHRoOiAxMnB4O1xuXHRoZWlnaHQ6IDEycHg7XG5cdHJpZ2h0OiAxcHg7XG5cdGJvdHRvbTogMXB4O1xufVxuLnVpLXJlc2l6YWJsZS1zdyB7XG5cdGN1cnNvcjogc3ctcmVzaXplO1xuXHR3aWR0aDogOXB4O1xuXHRoZWlnaHQ6IDlweDtcblx0bGVmdDogLTVweDtcblx0Ym90dG9tOiAtNXB4O1xufVxuLnVpLXJlc2l6YWJsZS1udyB7XG5cdGN1cnNvcjogbnctcmVzaXplO1xuXHR3aWR0aDogOXB4O1xuXHRoZWlnaHQ6IDlweDtcblx0bGVmdDogLTVweDtcblx0dG9wOiAtNXB4O1xufVxuLnVpLXJlc2l6YWJsZS1uZSB7XG5cdGN1cnNvcjogbmUtcmVzaXplO1xuXHR3aWR0aDogOXB4O1xuXHRoZWlnaHQ6IDlweDtcblx0cmlnaHQ6IC01cHg7XG5cdHRvcDogLTVweDtcbn1cbiIsIi8qIVxuICogalF1ZXJ5IFVJIFNlbGVjdGFibGUgMS4xMi4xXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqL1xuLnVpLXNlbGVjdGFibGUge1xuXHQtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xuXHR0b3VjaC1hY3Rpb246IG5vbmU7XG59XG4udWktc2VsZWN0YWJsZS1oZWxwZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHotaW5kZXg6IDEwMDtcblx0Ym9yZGVyOiAxcHggZG90dGVkIGJsYWNrO1xufVxuIiwiLyohXG4gKiBqUXVlcnkgVUkgU2VsZWN0bWVudSAxLjEyLjFcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIGh0dHA6Ly9hcGkuanF1ZXJ5dWkuY29tL3NlbGVjdG1lbnUvI3RoZW1pbmdcbiAqL1xuLnVpLXNlbGVjdG1lbnUtbWVudSB7XG5cdHBhZGRpbmc6IDA7XG5cdG1hcmdpbjogMDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG4udWktc2VsZWN0bWVudS1tZW51IC51aS1tZW51IHtcblx0b3ZlcmZsb3c6IGF1dG87XG5cdG92ZXJmbG93LXg6IGhpZGRlbjtcblx0cGFkZGluZy1ib3R0b206IDFweDtcbn1cbi51aS1zZWxlY3RtZW51LW1lbnUgLnVpLW1lbnUgLnVpLXNlbGVjdG1lbnUtb3B0Z3JvdXAge1xuXHRmb250LXNpemU6IDFlbTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGxpbmUtaGVpZ2h0OiAxLjU7XG5cdHBhZGRpbmc6IDJweCAwLjRlbTtcblx0bWFyZ2luOiAwLjVlbSAwIDAgMDtcblx0aGVpZ2h0OiBhdXRvO1xuXHRib3JkZXI6IDA7XG59XG4udWktc2VsZWN0bWVudS1vcGVuIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG4udWktc2VsZWN0bWVudS10ZXh0IHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdG1hcmdpbi1yaWdodDogMjBweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4udWktc2VsZWN0bWVudS1idXR0b24udWktYnV0dG9uIHtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0d2lkdGg6IDE0ZW07XG59XG4udWktc2VsZWN0bWVudS1pY29uLnVpLWljb24ge1xuXHRmbG9hdDogcmlnaHQ7XG5cdG1hcmdpbi10b3A6IDA7XG59XG4iLCIvKiFcbiAqIGpRdWVyeSBVSSBTb3J0YWJsZSAxLjEyLjFcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICovXG4udWktc29ydGFibGUtaGFuZGxlIHtcblx0LW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcblx0dG91Y2gtYWN0aW9uOiBub25lO1xufVxuIiwiLyohXG4gKiBqUXVlcnkgVUkgU2xpZGVyIDEuMTIuMVxuICogaHR0cDovL2pxdWVyeXVpLmNvbVxuICpcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKlxuICogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20vc2xpZGVyLyN0aGVtaW5nXG4gKi9cbi51aS1zbGlkZXIge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG4udWktc2xpZGVyIC51aS1zbGlkZXItaGFuZGxlIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiAyO1xuXHR3aWR0aDogMS4yZW07XG5cdGhlaWdodDogMS4yZW07XG5cdGN1cnNvcjogZGVmYXVsdDtcblx0LW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcblx0dG91Y2gtYWN0aW9uOiBub25lO1xufVxuLnVpLXNsaWRlciAudWktc2xpZGVyLXJhbmdlIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiAxO1xuXHRmb250LXNpemU6IC43ZW07XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRib3JkZXI6IDA7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbn1cblxuLyogc3VwcG9ydDogSUU4IC0gU2VlICM2NzI3ICovXG4udWktc2xpZGVyLnVpLXN0YXRlLWRpc2FibGVkIC51aS1zbGlkZXItaGFuZGxlLFxuLnVpLXNsaWRlci51aS1zdGF0ZS1kaXNhYmxlZCAudWktc2xpZGVyLXJhbmdlIHtcblx0ZmlsdGVyOiBpbmhlcml0O1xufVxuXG4udWktc2xpZGVyLWhvcml6b250YWwge1xuXHRoZWlnaHQ6IC44ZW07XG59XG4udWktc2xpZGVyLWhvcml6b250YWwgLnVpLXNsaWRlci1oYW5kbGUge1xuXHR0b3A6IC0uM2VtO1xuXHRtYXJnaW4tbGVmdDogLS42ZW07XG59XG4udWktc2xpZGVyLWhvcml6b250YWwgLnVpLXNsaWRlci1yYW5nZSB7XG5cdHRvcDogMDtcblx0aGVpZ2h0OiAxMDAlO1xufVxuLnVpLXNsaWRlci1ob3Jpem9udGFsIC51aS1zbGlkZXItcmFuZ2UtbWluIHtcblx0bGVmdDogMDtcbn1cbi51aS1zbGlkZXItaG9yaXpvbnRhbCAudWktc2xpZGVyLXJhbmdlLW1heCB7XG5cdHJpZ2h0OiAwO1xufVxuXG4udWktc2xpZGVyLXZlcnRpY2FsIHtcblx0d2lkdGg6IC44ZW07XG5cdGhlaWdodDogMTAwcHg7XG59XG4udWktc2xpZGVyLXZlcnRpY2FsIC51aS1zbGlkZXItaGFuZGxlIHtcblx0bGVmdDogLS4zZW07XG5cdG1hcmdpbi1sZWZ0OiAwO1xuXHRtYXJnaW4tYm90dG9tOiAtLjZlbTtcbn1cbi51aS1zbGlkZXItdmVydGljYWwgLnVpLXNsaWRlci1yYW5nZSB7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlO1xufVxuLnVpLXNsaWRlci12ZXJ0aWNhbCAudWktc2xpZGVyLXJhbmdlLW1pbiB7XG5cdGJvdHRvbTogMDtcbn1cbi51aS1zbGlkZXItdmVydGljYWwgLnVpLXNsaWRlci1yYW5nZS1tYXgge1xuXHR0b3A6IDA7XG59XG4iLCIvKiFcbiAqIGpRdWVyeSBVSSBTcGlubmVyIDEuMTIuMVxuICogaHR0cDovL2pxdWVyeXVpLmNvbVxuICpcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKlxuICogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20vc3Bpbm5lci8jdGhlbWluZ1xuICovXG4udWktc3Bpbm5lciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRwYWRkaW5nOiAwO1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnVpLXNwaW5uZXItaW5wdXQge1xuXHRib3JkZXI6IG5vbmU7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdGNvbG9yOiBpbmhlcml0O1xuXHRwYWRkaW5nOiAuMjIyZW0gMDtcblx0bWFyZ2luOiAuMmVtIDA7XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdG1hcmdpbi1sZWZ0OiAuNGVtO1xuXHRtYXJnaW4tcmlnaHQ6IDJlbTtcbn1cbi51aS1zcGlubmVyLWJ1dHRvbiB7XG5cdHdpZHRoOiAxLjZlbTtcblx0aGVpZ2h0OiA1MCU7XG5cdGZvbnQtc2l6ZTogLjVlbTtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Y3Vyc29yOiBkZWZhdWx0O1xuXHRkaXNwbGF5OiBibG9jaztcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0cmlnaHQ6IDA7XG59XG4vKiBtb3JlIHNwZWNpZmljaXR5IHJlcXVpcmVkIGhlcmUgdG8gb3ZlcnJpZGUgZGVmYXVsdCBib3JkZXJzICovXG4udWktc3Bpbm5lciBhLnVpLXNwaW5uZXItYnV0dG9uIHtcblx0Ym9yZGVyLXRvcC1zdHlsZTogbm9uZTtcblx0Ym9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcblx0Ym9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xufVxuLnVpLXNwaW5uZXItdXAge1xuXHR0b3A6IDA7XG59XG4udWktc3Bpbm5lci1kb3duIHtcblx0Ym90dG9tOiAwO1xufVxuIiwiLyohXG4gKiBqUXVlcnkgVUkgVGFicyAxLjEyLjFcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIGh0dHA6Ly9hcGkuanF1ZXJ5dWkuY29tL3RhYnMvI3RoZW1pbmdcbiAqL1xuLnVpLXRhYnMge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7LyogcG9zaXRpb246IHJlbGF0aXZlIHByZXZlbnRzIElFIHNjcm9sbCBidWcgKGVsZW1lbnQgd2l0aCBwb3NpdGlvbjogcmVsYXRpdmUgaW5zaWRlIGNvbnRhaW5lciB3aXRoIG92ZXJmbG93OiBhdXRvIGFwcGVhciBhcyBcImZpeGVkXCIpICovXG5cdHBhZGRpbmc6IC4yZW07XG59XG4udWktdGFicyAudWktdGFicy1uYXYge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IC4yZW0gLjJlbSAwO1xufVxuLnVpLXRhYnMgLnVpLXRhYnMtbmF2IGxpIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0ZmxvYXQ6IGxlZnQ7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dG9wOiAwO1xuXHRtYXJnaW46IDFweCAuMmVtIDAgMDtcblx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMDtcblx0cGFkZGluZzogMDtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi51aS10YWJzIC51aS10YWJzLW5hdiAudWktdGFicy1hbmNob3Ige1xuXHRmbG9hdDogbGVmdDtcblx0cGFkZGluZzogLjVlbSAxZW07XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi51aS10YWJzIC51aS10YWJzLW5hdiBsaS51aS10YWJzLWFjdGl2ZSB7XG5cdG1hcmdpbi1ib3R0b206IC0xcHg7XG5cdHBhZGRpbmctYm90dG9tOiAxcHg7XG59XG4udWktdGFicyAudWktdGFicy1uYXYgbGkudWktdGFicy1hY3RpdmUgLnVpLXRhYnMtYW5jaG9yLFxuLnVpLXRhYnMgLnVpLXRhYnMtbmF2IGxpLnVpLXN0YXRlLWRpc2FibGVkIC51aS10YWJzLWFuY2hvcixcbi51aS10YWJzIC51aS10YWJzLW5hdiBsaS51aS10YWJzLWxvYWRpbmcgLnVpLXRhYnMtYW5jaG9yIHtcblx0Y3Vyc29yOiB0ZXh0O1xufVxuLnVpLXRhYnMtY29sbGFwc2libGUgLnVpLXRhYnMtbmF2IGxpLnVpLXRhYnMtYWN0aXZlIC51aS10YWJzLWFuY2hvciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cbi51aS10YWJzIC51aS10YWJzLXBhbmVsIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGJvcmRlci13aWR0aDogMDtcblx0cGFkZGluZzogMWVtIDEuNGVtO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xufVxuIiwiLyohXG4gKiBqUXVlcnkgVUkgVG9vbHRpcCAxLjEyLjFcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIGh0dHA6Ly9hcGkuanF1ZXJ5dWkuY29tL3Rvb2x0aXAvI3RoZW1pbmdcbiAqL1xuLnVpLXRvb2x0aXAge1xuXHRwYWRkaW5nOiA4cHg7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ei1pbmRleDogOTk5OTtcblx0bWF4LXdpZHRoOiAzMDBweDtcbn1cbmJvZHkgLnVpLXRvb2x0aXAge1xuXHRib3JkZXItd2lkdGg6IDJweDtcbn1cbiIsIi8qIVxuICogalF1ZXJ5IFVJIENTUyBGcmFtZXdvcmsgMS4xMi4xXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS9jYXRlZ29yeS90aGVtaW5nL1xuICpcbiAqIFRvIHZpZXcgYW5kIG1vZGlmeSB0aGlzIHRoZW1lLCB2aXNpdCBodHRwOi8vanF1ZXJ5dWkuY29tL3RoZW1lcm9sbGVyL1xuICovXG5cblxuLyogQ29tcG9uZW50IGNvbnRhaW5lcnNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnVpLXdpZGdldCB7XG5cdGZvbnQtZmFtaWx5OiBBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZi8qe2ZmRGVmYXVsdH0qLztcblx0Zm9udC1zaXplOiAxZW0vKntmc0RlZmF1bHR9Ki87XG59XG4udWktd2lkZ2V0IC51aS13aWRnZXQge1xuXHRmb250LXNpemU6IDFlbTtcbn1cbi51aS13aWRnZXQgaW5wdXQsXG4udWktd2lkZ2V0IHNlbGVjdCxcbi51aS13aWRnZXQgdGV4dGFyZWEsXG4udWktd2lkZ2V0IGJ1dHRvbiB7XG5cdGZvbnQtZmFtaWx5OiBBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZi8qe2ZmRGVmYXVsdH0qLztcblx0Zm9udC1zaXplOiAxZW07XG59XG4udWktd2lkZ2V0LnVpLXdpZGdldC1jb250ZW50IHtcblx0Ym9yZGVyOiAxcHggc29saWQgI2M1YzVjNS8qe2JvcmRlckNvbG9yRGVmYXVsdH0qLztcbn1cbi51aS13aWRnZXQtY29udGVudCB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQvKntib3JkZXJDb2xvckNvbnRlbnR9Ki87XG5cdGJhY2tncm91bmQ6ICNmZmZmZmYvKntiZ0NvbG9yQ29udGVudH0qLyAvKntiZ0ltZ1VybENvbnRlbnR9Ki8gLyp7YmdDb250ZW50WFBvc30qLyAvKntiZ0NvbnRlbnRZUG9zfSovIC8qe2JnQ29udGVudFJlcGVhdH0qLztcblx0Y29sb3I6ICMzMzMzMzMvKntmY0NvbnRlbnR9Ki87XG59XG4udWktd2lkZ2V0LWNvbnRlbnQgYSB7XG5cdGNvbG9yOiAjMzMzMzMzLyp7ZmNDb250ZW50fSovO1xufVxuLnVpLXdpZGdldC1oZWFkZXIge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkLyp7Ym9yZGVyQ29sb3JIZWFkZXJ9Ki87XG5cdGJhY2tncm91bmQ6ICNlOWU5ZTkvKntiZ0NvbG9ySGVhZGVyfSovIC8qe2JnSW1nVXJsSGVhZGVyfSovIC8qe2JnSGVhZGVyWFBvc30qLyAvKntiZ0hlYWRlcllQb3N9Ki8gLyp7YmdIZWFkZXJSZXBlYXR9Ki87XG5cdGNvbG9yOiAjMzMzMzMzLyp7ZmNIZWFkZXJ9Ki87XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnVpLXdpZGdldC1oZWFkZXIgYSB7XG5cdGNvbG9yOiAjMzMzMzMzLyp7ZmNIZWFkZXJ9Ki87XG59XG5cbi8qIEludGVyYWN0aW9uIHN0YXRlc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4udWktc3RhdGUtZGVmYXVsdCxcbi51aS13aWRnZXQtY29udGVudCAudWktc3RhdGUtZGVmYXVsdCxcbi51aS13aWRnZXQtaGVhZGVyIC51aS1zdGF0ZS1kZWZhdWx0LFxuLnVpLWJ1dHRvbixcblxuLyogV2UgdXNlIGh0bWwgaGVyZSBiZWNhdXNlIHdlIG5lZWQgYSBncmVhdGVyIHNwZWNpZmljaXR5IHRvIG1ha2Ugc3VyZSBkaXNhYmxlZFxud29ya3MgcHJvcGVybHkgd2hlbiBjbGlja2VkIG9yIGhvdmVyZWQgKi9cbmh0bWwgLnVpLWJ1dHRvbi51aS1zdGF0ZS1kaXNhYmxlZDpob3Zlcixcbmh0bWwgLnVpLWJ1dHRvbi51aS1zdGF0ZS1kaXNhYmxlZDphY3RpdmUge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjYzVjNWM1Lyp7Ym9yZGVyQ29sb3JEZWZhdWx0fSovO1xuXHRiYWNrZ3JvdW5kOiAjZjZmNmY2Lyp7YmdDb2xvckRlZmF1bHR9Ki8gLyp7YmdJbWdVcmxEZWZhdWx0fSovIC8qe2JnRGVmYXVsdFhQb3N9Ki8gLyp7YmdEZWZhdWx0WVBvc30qLyAvKntiZ0RlZmF1bHRSZXBlYXR9Ki87XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWwvKntmd0RlZmF1bHR9Ki87XG5cdGNvbG9yOiAjNDU0NTQ1Lyp7ZmNEZWZhdWx0fSovO1xufVxuLnVpLXN0YXRlLWRlZmF1bHQgYSxcbi51aS1zdGF0ZS1kZWZhdWx0IGE6bGluayxcbi51aS1zdGF0ZS1kZWZhdWx0IGE6dmlzaXRlZCxcbmEudWktYnV0dG9uLFxuYTpsaW5rLnVpLWJ1dHRvbixcbmE6dmlzaXRlZC51aS1idXR0b24sXG4udWktYnV0dG9uIHtcblx0Y29sb3I6ICM0NTQ1NDUvKntmY0RlZmF1bHR9Ki87XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi51aS1zdGF0ZS1ob3Zlcixcbi51aS13aWRnZXQtY29udGVudCAudWktc3RhdGUtaG92ZXIsXG4udWktd2lkZ2V0LWhlYWRlciAudWktc3RhdGUtaG92ZXIsXG4udWktc3RhdGUtZm9jdXMsXG4udWktd2lkZ2V0LWNvbnRlbnQgLnVpLXN0YXRlLWZvY3VzLFxuLnVpLXdpZGdldC1oZWFkZXIgLnVpLXN0YXRlLWZvY3VzLFxuLnVpLWJ1dHRvbjpob3Zlcixcbi51aS1idXR0b246Zm9jdXMge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjLyp7Ym9yZGVyQ29sb3JIb3Zlcn0qLztcblx0YmFja2dyb3VuZDogI2VkZWRlZC8qe2JnQ29sb3JIb3Zlcn0qLyAvKntiZ0ltZ1VybEhvdmVyfSovIC8qe2JnSG92ZXJYUG9zfSovIC8qe2JnSG92ZXJZUG9zfSovIC8qe2JnSG92ZXJSZXBlYXR9Ki87XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWwvKntmd0RlZmF1bHR9Ki87XG5cdGNvbG9yOiAjMmIyYjJiLyp7ZmNIb3Zlcn0qLztcbn1cbi51aS1zdGF0ZS1ob3ZlciBhLFxuLnVpLXN0YXRlLWhvdmVyIGE6aG92ZXIsXG4udWktc3RhdGUtaG92ZXIgYTpsaW5rLFxuLnVpLXN0YXRlLWhvdmVyIGE6dmlzaXRlZCxcbi51aS1zdGF0ZS1mb2N1cyBhLFxuLnVpLXN0YXRlLWZvY3VzIGE6aG92ZXIsXG4udWktc3RhdGUtZm9jdXMgYTpsaW5rLFxuLnVpLXN0YXRlLWZvY3VzIGE6dmlzaXRlZCxcbmEudWktYnV0dG9uOmhvdmVyLFxuYS51aS1idXR0b246Zm9jdXMge1xuXHRjb2xvcjogIzJiMmIyYi8qe2ZjSG92ZXJ9Ki87XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnVpLXZpc3VhbC1mb2N1cyB7XG5cdGJveC1zaGFkb3c6IDAgMCAzcHggMXB4IHJnYig5NCwgMTU4LCAyMTQpO1xufVxuLnVpLXN0YXRlLWFjdGl2ZSxcbi51aS13aWRnZXQtY29udGVudCAudWktc3RhdGUtYWN0aXZlLFxuLnVpLXdpZGdldC1oZWFkZXIgLnVpLXN0YXRlLWFjdGl2ZSxcbmEudWktYnV0dG9uOmFjdGl2ZSxcbi51aS1idXR0b246YWN0aXZlLFxuLnVpLWJ1dHRvbi51aS1zdGF0ZS1hY3RpdmU6aG92ZXIge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMDAzZWZmLyp7Ym9yZGVyQ29sb3JBY3RpdmV9Ki87XG5cdGJhY2tncm91bmQ6ICMwMDdmZmYvKntiZ0NvbG9yQWN0aXZlfSovIC8qe2JnSW1nVXJsQWN0aXZlfSovIC8qe2JnQWN0aXZlWFBvc30qLyAvKntiZ0FjdGl2ZVlQb3N9Ki8gLyp7YmdBY3RpdmVSZXBlYXR9Ki87XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWwvKntmd0RlZmF1bHR9Ki87XG5cdGNvbG9yOiAjZmZmZmZmLyp7ZmNBY3RpdmV9Ki87XG59XG4udWktaWNvbi1iYWNrZ3JvdW5kLFxuLnVpLXN0YXRlLWFjdGl2ZSAudWktaWNvbi1iYWNrZ3JvdW5kIHtcblx0Ym9yZGVyOiAjMDAzZWZmLyp7Ym9yZGVyQ29sb3JBY3RpdmV9Ki87XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYvKntmY0FjdGl2ZX0qLztcbn1cbi51aS1zdGF0ZS1hY3RpdmUgYSxcbi51aS1zdGF0ZS1hY3RpdmUgYTpsaW5rLFxuLnVpLXN0YXRlLWFjdGl2ZSBhOnZpc2l0ZWQge1xuXHRjb2xvcjogI2ZmZmZmZi8qe2ZjQWN0aXZlfSovO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIEludGVyYWN0aW9uIEN1ZXNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnVpLXN0YXRlLWhpZ2hsaWdodCxcbi51aS13aWRnZXQtY29udGVudCAudWktc3RhdGUtaGlnaGxpZ2h0LFxuLnVpLXdpZGdldC1oZWFkZXIgLnVpLXN0YXRlLWhpZ2hsaWdodCB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNkYWQ1NWUvKntib3JkZXJDb2xvckhpZ2hsaWdodH0qLztcblx0YmFja2dyb3VuZDogI2ZmZmE5MC8qe2JnQ29sb3JIaWdobGlnaHR9Ki8gLyp7YmdJbWdVcmxIaWdobGlnaHR9Ki8gLyp7YmdIaWdobGlnaHRYUG9zfSovIC8qe2JnSGlnaGxpZ2h0WVBvc30qLyAvKntiZ0hpZ2hsaWdodFJlcGVhdH0qLztcblx0Y29sb3I6ICM3Nzc2MjAvKntmY0hpZ2hsaWdodH0qLztcbn1cbi51aS1zdGF0ZS1jaGVja2VkIHtcblx0Ym9yZGVyOiAxcHggc29saWQgI2RhZDU1ZS8qe2JvcmRlckNvbG9ySGlnaGxpZ2h0fSovO1xuXHRiYWNrZ3JvdW5kOiAjZmZmYTkwLyp7YmdDb2xvckhpZ2hsaWdodH0qLztcbn1cbi51aS1zdGF0ZS1oaWdobGlnaHQgYSxcbi51aS13aWRnZXQtY29udGVudCAudWktc3RhdGUtaGlnaGxpZ2h0IGEsXG4udWktd2lkZ2V0LWhlYWRlciAudWktc3RhdGUtaGlnaGxpZ2h0IGEge1xuXHRjb2xvcjogIzc3NzYyMC8qe2ZjSGlnaGxpZ2h0fSovO1xufVxuLnVpLXN0YXRlLWVycm9yLFxuLnVpLXdpZGdldC1jb250ZW50IC51aS1zdGF0ZS1lcnJvcixcbi51aS13aWRnZXQtaGVhZGVyIC51aS1zdGF0ZS1lcnJvciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNmMWE4OTkvKntib3JkZXJDb2xvckVycm9yfSovO1xuXHRiYWNrZ3JvdW5kOiAjZmRkZmRmLyp7YmdDb2xvckVycm9yfSovIC8qe2JnSW1nVXJsRXJyb3J9Ki8gLyp7YmdFcnJvclhQb3N9Ki8gLyp7YmdFcnJvcllQb3N9Ki8gLyp7YmdFcnJvclJlcGVhdH0qLztcblx0Y29sb3I6ICM1ZjNmM2YvKntmY0Vycm9yfSovO1xufVxuLnVpLXN0YXRlLWVycm9yIGEsXG4udWktd2lkZ2V0LWNvbnRlbnQgLnVpLXN0YXRlLWVycm9yIGEsXG4udWktd2lkZ2V0LWhlYWRlciAudWktc3RhdGUtZXJyb3IgYSB7XG5cdGNvbG9yOiAjNWYzZjNmLyp7ZmNFcnJvcn0qLztcbn1cbi51aS1zdGF0ZS1lcnJvci10ZXh0LFxuLnVpLXdpZGdldC1jb250ZW50IC51aS1zdGF0ZS1lcnJvci10ZXh0LFxuLnVpLXdpZGdldC1oZWFkZXIgLnVpLXN0YXRlLWVycm9yLXRleHQge1xuXHRjb2xvcjogIzVmM2YzZi8qe2ZjRXJyb3J9Ki87XG59XG4udWktcHJpb3JpdHktcHJpbWFyeSxcbi51aS13aWRnZXQtY29udGVudCAudWktcHJpb3JpdHktcHJpbWFyeSxcbi51aS13aWRnZXQtaGVhZGVyIC51aS1wcmlvcml0eS1wcmltYXJ5IHtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udWktcHJpb3JpdHktc2Vjb25kYXJ5LFxuLnVpLXdpZGdldC1jb250ZW50IC51aS1wcmlvcml0eS1zZWNvbmRhcnksXG4udWktd2lkZ2V0LWhlYWRlciAudWktcHJpb3JpdHktc2Vjb25kYXJ5IHtcblx0b3BhY2l0eTogLjc7XG5cdGZpbHRlcjpBbHBoYShPcGFjaXR5PTcwKTsgLyogc3VwcG9ydDogSUU4ICovXG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4udWktc3RhdGUtZGlzYWJsZWQsXG4udWktd2lkZ2V0LWNvbnRlbnQgLnVpLXN0YXRlLWRpc2FibGVkLFxuLnVpLXdpZGdldC1oZWFkZXIgLnVpLXN0YXRlLWRpc2FibGVkIHtcblx0b3BhY2l0eTogLjM1O1xuXHRmaWx0ZXI6QWxwaGEoT3BhY2l0eT0zNSk7IC8qIHN1cHBvcnQ6IElFOCAqL1xuXHRiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuLnVpLXN0YXRlLWRpc2FibGVkIC51aS1pY29uIHtcblx0ZmlsdGVyOkFscGhhKE9wYWNpdHk9MzUpOyAvKiBzdXBwb3J0OiBJRTggLSBTZWUgIzYwNTkgKi9cbn1cblxuLyogSWNvbnNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vKiBzdGF0ZXMgYW5kIGltYWdlcyAqL1xuLnVpLWljb24ge1xuXHR3aWR0aDogMTZweDtcblx0aGVpZ2h0OiAxNnB4O1xufVxuLnVpLWljb24sXG4udWktd2lkZ2V0LWNvbnRlbnQgLnVpLWljb24ge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWFnZXMvdWktaWNvbnNfNDQ0NDQ0XzI1NngyNDAucG5nXCIpLyp7aWNvbnNDb250ZW50fSovO1xufVxuLnVpLXdpZGdldC1oZWFkZXIgLnVpLWljb24ge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWFnZXMvdWktaWNvbnNfNDQ0NDQ0XzI1NngyNDAucG5nXCIpLyp7aWNvbnNIZWFkZXJ9Ki87XG59XG4udWktc3RhdGUtaG92ZXIgLnVpLWljb24sXG4udWktc3RhdGUtZm9jdXMgLnVpLWljb24sXG4udWktYnV0dG9uOmhvdmVyIC51aS1pY29uLFxuLnVpLWJ1dHRvbjpmb2N1cyAudWktaWNvbiB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltYWdlcy91aS1pY29uc181NTU1NTVfMjU2eDI0MC5wbmdcIikvKntpY29uc0hvdmVyfSovO1xufVxuLnVpLXN0YXRlLWFjdGl2ZSAudWktaWNvbixcbi51aS1idXR0b246YWN0aXZlIC51aS1pY29uIHtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1hZ2VzL3VpLWljb25zX2ZmZmZmZl8yNTZ4MjQwLnBuZ1wiKS8qe2ljb25zQWN0aXZlfSovO1xufVxuLnVpLXN0YXRlLWhpZ2hsaWdodCAudWktaWNvbixcbi51aS1idXR0b24gLnVpLXN0YXRlLWhpZ2hsaWdodC51aS1pY29uIHtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1hZ2VzL3VpLWljb25zXzc3NzYyMF8yNTZ4MjQwLnBuZ1wiKS8qe2ljb25zSGlnaGxpZ2h0fSovO1xufVxuLnVpLXN0YXRlLWVycm9yIC51aS1pY29uLFxuLnVpLXN0YXRlLWVycm9yLXRleHQgLnVpLWljb24ge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWFnZXMvdWktaWNvbnNfY2MwMDAwXzI1NngyNDAucG5nXCIpLyp7aWNvbnNFcnJvcn0qLztcbn1cbi51aS1idXR0b24gLnVpLWljb24ge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWFnZXMvdWktaWNvbnNfNzc3Nzc3XzI1NngyNDAucG5nXCIpLyp7aWNvbnNEZWZhdWx0fSovO1xufVxuXG4vKiBwb3NpdGlvbmluZyAqL1xuLnVpLWljb24tYmxhbmsgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNnB4IDE2cHg7IH1cbi51aS1pY29uLWNhcmV0LTEtbiB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgMDsgfVxuLnVpLWljb24tY2FyZXQtMS1uZSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IDA7IH1cbi51aS1pY29uLWNhcmV0LTEtZSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IDA7IH1cbi51aS1pY29uLWNhcmV0LTEtc2UgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAwOyB9XG4udWktaWNvbi1jYXJldC0xLXMgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjVweCAwOyB9XG4udWktaWNvbi1jYXJldC0xLXN3IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggMDsgfVxuLnVpLWljb24tY2FyZXQtMS13IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggMDsgfVxuLnVpLWljb24tY2FyZXQtMS1udyB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAwOyB9XG4udWktaWNvbi1jYXJldC0yLW4tcyB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAwOyB9XG4udWktaWNvbi1jYXJldC0yLWUtdyB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAwOyB9XG4udWktaWNvbi10cmlhbmdsZS0xLW4geyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xNnB4OyB9XG4udWktaWNvbi10cmlhbmdsZS0xLW5lIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTE2cHg7IH1cbi51aS1pY29uLXRyaWFuZ2xlLTEtZSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xNnB4OyB9XG4udWktaWNvbi10cmlhbmdsZS0xLXNlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTE2cHg7IH1cbi51aS1pY29uLXRyaWFuZ2xlLTEtcyB7IGJhY2tncm91bmQtcG9zaXRpb246IC02NXB4IC0xNnB4OyB9XG4udWktaWNvbi10cmlhbmdsZS0xLXN3IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTE2cHg7IH1cbi51aS1pY29uLXRyaWFuZ2xlLTEtdyB7IGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xNnB4OyB9XG4udWktaWNvbi10cmlhbmdsZS0xLW53IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xNnB4OyB9XG4udWktaWNvbi10cmlhbmdsZS0yLW4tcyB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTZweDsgfVxuLnVpLWljb24tdHJpYW5nbGUtMi1lLXcgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTE2cHg7IH1cbi51aS1pY29uLWFycm93LTEtbiB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgLTMycHg7IH1cbi51aS1pY29uLWFycm93LTEtbmUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMzJweDsgfVxuLnVpLWljb24tYXJyb3ctMS1lIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTMycHg7IH1cbi51aS1pY29uLWFycm93LTEtc2UgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMzJweDsgfVxuLnVpLWljb24tYXJyb3ctMS1zIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY1cHggLTMycHg7IH1cbi51aS1pY29uLWFycm93LTEtc3cgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMzJweDsgfVxuLnVpLWljb24tYXJyb3ctMS13IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTMycHg7IH1cbi51aS1pY29uLWFycm93LTEtbncgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTMycHg7IH1cbi51aS1pY29uLWFycm93LTItbi1zIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0zMnB4OyB9XG4udWktaWNvbi1hcnJvdy0yLW5lLXN3IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0zMnB4OyB9XG4udWktaWNvbi1hcnJvdy0yLWUtdyB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMzJweDsgfVxuLnVpLWljb24tYXJyb3ctMi1zZS1udyB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtMzJweDsgfVxuLnVpLWljb24tYXJyb3dzdG9wLTEtbiB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMzJweDsgfVxuLnVpLWljb24tYXJyb3dzdG9wLTEtZSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMzJweDsgfVxuLnVpLWljb24tYXJyb3dzdG9wLTEtcyB7IGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtMzJweDsgfVxuLnVpLWljb24tYXJyb3dzdG9wLTEtdyB7IGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtMzJweDsgfVxuLnVpLWljb24tYXJyb3d0aGljay0xLW4geyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxcHggLTQ4cHg7IH1cbi51aS1pY29uLWFycm93dGhpY2stMS1uZSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC00OHB4OyB9XG4udWktaWNvbi1hcnJvd3RoaWNrLTEtZSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC00OHB4OyB9XG4udWktaWNvbi1hcnJvd3RoaWNrLTEtc2UgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtNDhweDsgfVxuLnVpLWljb24tYXJyb3d0aGljay0xLXMgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtNDhweDsgfVxuLnVpLWljb24tYXJyb3d0aGljay0xLXN3IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTQ4cHg7IH1cbi51aS1pY29uLWFycm93dGhpY2stMS13IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTQ4cHg7IH1cbi51aS1pY29uLWFycm93dGhpY2stMS1udyB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtNDhweDsgfVxuLnVpLWljb24tYXJyb3d0aGljay0yLW4tcyB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtNDhweDsgfVxuLnVpLWljb24tYXJyb3d0aGljay0yLW5lLXN3IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC00OHB4OyB9XG4udWktaWNvbi1hcnJvd3RoaWNrLTItZS13IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC00OHB4OyB9XG4udWktaWNvbi1hcnJvd3RoaWNrLTItc2UtbncgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTQ4cHg7IH1cbi51aS1pY29uLWFycm93dGhpY2tzdG9wLTEtbiB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtNDhweDsgfVxuLnVpLWljb24tYXJyb3d0aGlja3N0b3AtMS1lIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC00OHB4OyB9XG4udWktaWNvbi1hcnJvd3RoaWNrc3RvcC0xLXMgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTQ4cHg7IH1cbi51aS1pY29uLWFycm93dGhpY2tzdG9wLTEtdyB7IGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtNDhweDsgfVxuLnVpLWljb24tYXJyb3dyZXR1cm50aGljay0xLXcgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC02NHB4OyB9XG4udWktaWNvbi1hcnJvd3JldHVybnRoaWNrLTEtbiB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC02NHB4OyB9XG4udWktaWNvbi1hcnJvd3JldHVybnRoaWNrLTEtZSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC02NHB4OyB9XG4udWktaWNvbi1hcnJvd3JldHVybnRoaWNrLTEtcyB7IGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC02NHB4OyB9XG4udWktaWNvbi1hcnJvd3JldHVybi0xLXcgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtNjRweDsgfVxuLnVpLWljb24tYXJyb3dyZXR1cm4tMS1uIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTY0cHg7IH1cbi51aS1pY29uLWFycm93cmV0dXJuLTEtZSB7IGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC02NHB4OyB9XG4udWktaWNvbi1hcnJvd3JldHVybi0xLXMgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTY0cHg7IH1cbi51aS1pY29uLWFycm93cmVmcmVzaC0xLXcgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTY0cHg7IH1cbi51aS1pY29uLWFycm93cmVmcmVzaC0xLW4geyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTY0cHg7IH1cbi51aS1pY29uLWFycm93cmVmcmVzaC0xLWUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTY0cHg7IH1cbi51aS1pY29uLWFycm93cmVmcmVzaC0xLXMgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTY0cHg7IH1cbi51aS1pY29uLWFycm93LTQgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC04MHB4OyB9XG4udWktaWNvbi1hcnJvdy00LWRpYWcgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtODBweDsgfVxuLnVpLWljb24tZXh0bGluayB7IGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC04MHB4OyB9XG4udWktaWNvbi1uZXd3aW4geyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtODBweDsgfVxuLnVpLWljb24tcmVmcmVzaCB7IGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC04MHB4OyB9XG4udWktaWNvbi1zaHVmZmxlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTgwcHg7IH1cbi51aS1pY29uLXRyYW5zZmVyLWUtdyB7IGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC04MHB4OyB9XG4udWktaWNvbi10cmFuc2ZlcnRoaWNrLWUtdyB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtODBweDsgfVxuLnVpLWljb24tZm9sZGVyLWNvbGxhcHNlZCB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgLTk2cHg7IH1cbi51aS1pY29uLWZvbGRlci1vcGVuIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTk2cHg7IH1cbi51aS1pY29uLWRvY3VtZW50IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTk2cHg7IH1cbi51aS1pY29uLWRvY3VtZW50LWIgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtOTZweDsgfVxuLnVpLWljb24tbm90ZSB7IGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC05NnB4OyB9XG4udWktaWNvbi1tYWlsLWNsb3NlZCB7IGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC05NnB4OyB9XG4udWktaWNvbi1tYWlsLW9wZW4geyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtOTZweDsgfVxuLnVpLWljb24tc3VpdGNhc2UgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTk2cHg7IH1cbi51aS1pY29uLWNvbW1lbnQgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTk2cHg7IH1cbi51aS1pY29uLXBlcnNvbiB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtOTZweDsgfVxuLnVpLWljb24tcHJpbnQgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTk2cHg7IH1cbi51aS1pY29uLXRyYXNoIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC05NnB4OyB9XG4udWktaWNvbi1sb2NrZWQgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTk2cHg7IH1cbi51aS1pY29uLXVubG9ja2VkIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC05NnB4OyB9XG4udWktaWNvbi1ib29rbWFyayB7IGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtOTZweDsgfVxuLnVpLWljb24tdGFnIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC05NnB4OyB9XG4udWktaWNvbi1ob21lIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTEycHg7IH1cbi51aS1pY29uLWZsYWcgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTEycHg7IH1cbi51aS1pY29uLWNhbGVuZGFyIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTExMnB4OyB9XG4udWktaWNvbi1jYXJ0IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTExMnB4OyB9XG4udWktaWNvbi1wZW5jaWwgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTEycHg7IH1cbi51aS1pY29uLWNsb2NrIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTExMnB4OyB9XG4udWktaWNvbi1kaXNrIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTExMnB4OyB9XG4udWktaWNvbi1jYWxjdWxhdG9yIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xMTJweDsgfVxuLnVpLWljb24tem9vbWluIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xMTJweDsgfVxuLnVpLWljb24tem9vbW91dCB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTEycHg7IH1cbi51aS1pY29uLXNlYXJjaCB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMTEycHg7IH1cbi51aS1pY29uLXdyZW5jaCB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtMTEycHg7IH1cbi51aS1pY29uLWdlYXIgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTExMnB4OyB9XG4udWktaWNvbi1oZWFydCB7IGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMTEycHg7IH1cbi51aS1pY29uLXN0YXIgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTExMnB4OyB9XG4udWktaWNvbi1saW5rIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC0xMTJweDsgfVxuLnVpLWljb24tY2FuY2VsIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTI4cHg7IH1cbi51aS1pY29uLXBsdXMgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTI4cHg7IH1cbi51aS1pY29uLXBsdXN0aGljayB7IGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xMjhweDsgfVxuLnVpLWljb24tbWludXMgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTI4cHg7IH1cbi51aS1pY29uLW1pbnVzdGhpY2sgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTI4cHg7IH1cbi51aS1pY29uLWNsb3NlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTEyOHB4OyB9XG4udWktaWNvbi1jbG9zZXRoaWNrIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTEyOHB4OyB9XG4udWktaWNvbi1rZXkgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTEyOHB4OyB9XG4udWktaWNvbi1saWdodGJ1bGIgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTEyOHB4OyB9XG4udWktaWNvbi1zY2lzc29ycyB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTI4cHg7IH1cbi51aS1pY29uLWNsaXBib2FyZCB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMTI4cHg7IH1cbi51aS1pY29uLWNvcHkgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTEyOHB4OyB9XG4udWktaWNvbi1jb250YWN0IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC0xMjhweDsgfVxuLnVpLWljb24taW1hZ2UgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTEyOHB4OyB9XG4udWktaWNvbi12aWRlbyB7IGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtMTI4cHg7IH1cbi51aS1pY29uLXNjcmlwdCB7IGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtMTI4cHg7IH1cbi51aS1pY29uLWFsZXJ0IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTQ0cHg7IH1cbi51aS1pY29uLWluZm8geyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTQ0cHg7IH1cbi51aS1pY29uLW5vdGljZSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xNDRweDsgfVxuLnVpLWljb24taGVscCB7IGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xNDRweDsgfVxuLnVpLWljb24tY2hlY2sgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTQ0cHg7IH1cbi51aS1pY29uLWJ1bGxldCB7IGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xNDRweDsgfVxuLnVpLWljb24tcmFkaW8tb24geyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTQ0cHg7IH1cbi51aS1pY29uLXJhZGlvLW9mZiB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTQ0cHg7IH1cbi51aS1pY29uLXBpbi13IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xNDRweDsgfVxuLnVpLWljb24tcGluLXMgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTE0NHB4OyB9XG4udWktaWNvbi1wbGF5IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTYwcHg7IH1cbi51aS1pY29uLXBhdXNlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTE2MHB4OyB9XG4udWktaWNvbi1zZWVrLW5leHQgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTYwcHg7IH1cbi51aS1pY29uLXNlZWstcHJldiB7IGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xNjBweDsgfVxuLnVpLWljb24tc2Vlay1lbmQgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTYwcHg7IH1cbi51aS1pY29uLXNlZWstc3RhcnQgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTYwcHg7IH1cbi8qIHVpLWljb24tc2Vlay1maXJzdCBpcyBkZXByZWNhdGVkLCB1c2UgdWktaWNvbi1zZWVrLXN0YXJ0IGluc3RlYWQgKi9cbi51aS1pY29uLXNlZWstZmlyc3QgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTYwcHg7IH1cbi51aS1pY29uLXN0b3AgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTYwcHg7IH1cbi51aS1pY29uLWVqZWN0IHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xNjBweDsgfVxuLnVpLWljb24tdm9sdW1lLW9mZiB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTYwcHg7IH1cbi51aS1pY29uLXZvbHVtZS1vbiB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTYwcHg7IH1cbi51aS1pY29uLXBvd2VyIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTc2cHg7IH1cbi51aS1pY29uLXNpZ25hbC1kaWFnIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTE3NnB4OyB9XG4udWktaWNvbi1zaWduYWwgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTc2cHg7IH1cbi51aS1pY29uLWJhdHRlcnktMCB7IGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xNzZweDsgfVxuLnVpLWljb24tYmF0dGVyeS0xIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTE3NnB4OyB9XG4udWktaWNvbi1iYXR0ZXJ5LTIgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTc2cHg7IH1cbi51aS1pY29uLWJhdHRlcnktMyB7IGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xNzZweDsgfVxuLnVpLWljb24tY2lyY2xlLXBsdXMgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xOTJweDsgfVxuLnVpLWljb24tY2lyY2xlLW1pbnVzIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTE5MnB4OyB9XG4udWktaWNvbi1jaXJjbGUtY2xvc2UgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTkycHg7IH1cbi51aS1pY29uLWNpcmNsZS10cmlhbmdsZS1lIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTE5MnB4OyB9XG4udWktaWNvbi1jaXJjbGUtdHJpYW5nbGUtcyB7IGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xOTJweDsgfVxuLnVpLWljb24tY2lyY2xlLXRyaWFuZ2xlLXcgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTkycHg7IH1cbi51aS1pY29uLWNpcmNsZS10cmlhbmdsZS1uIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTE5MnB4OyB9XG4udWktaWNvbi1jaXJjbGUtYXJyb3ctZSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTkycHg7IH1cbi51aS1pY29uLWNpcmNsZS1hcnJvdy1zIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xOTJweDsgfVxuLnVpLWljb24tY2lyY2xlLWFycm93LXcgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTE5MnB4OyB9XG4udWktaWNvbi1jaXJjbGUtYXJyb3ctbiB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMTkycHg7IH1cbi51aS1pY29uLWNpcmNsZS16b29taW4geyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTE5MnB4OyB9XG4udWktaWNvbi1jaXJjbGUtem9vbW91dCB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMTkycHg7IH1cbi51aS1pY29uLWNpcmNsZS1jaGVjayB7IGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMTkycHg7IH1cbi51aS1pY29uLWNpcmNsZXNtYWxsLXBsdXMgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0yMDhweDsgfVxuLnVpLWljb24tY2lyY2xlc21hbGwtbWludXMgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMjA4cHg7IH1cbi51aS1pY29uLWNpcmNsZXNtYWxsLWNsb3NlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTIwOHB4OyB9XG4udWktaWNvbi1zcXVhcmVzbWFsbC1wbHVzIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTIwOHB4OyB9XG4udWktaWNvbi1zcXVhcmVzbWFsbC1taW51cyB7IGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0yMDhweDsgfVxuLnVpLWljb24tc3F1YXJlc21hbGwtY2xvc2UgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMjA4cHg7IH1cbi51aS1pY29uLWdyaXAtZG90dGVkLXZlcnRpY2FsIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMjI0cHg7IH1cbi51aS1pY29uLWdyaXAtZG90dGVkLWhvcml6b250YWwgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMjI0cHg7IH1cbi51aS1pY29uLWdyaXAtc29saWQtdmVydGljYWwgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMjI0cHg7IH1cbi51aS1pY29uLWdyaXAtc29saWQtaG9yaXpvbnRhbCB7IGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0yMjRweDsgfVxuLnVpLWljb24tZ3JpcHNtYWxsLWRpYWdvbmFsLXNlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTIyNHB4OyB9XG4udWktaWNvbi1ncmlwLWRpYWdvbmFsLXNlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTIyNHB4OyB9XG5cblxuLyogTWlzYyB2aXN1YWxzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLyogQ29ybmVyIHJhZGl1cyAqL1xuLnVpLWNvcm5lci1hbGwsXG4udWktY29ybmVyLXRvcCxcbi51aS1jb3JuZXItbGVmdCxcbi51aS1jb3JuZXItdGwge1xuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHgvKntjb3JuZXJSYWRpdXN9Ki87XG59XG4udWktY29ybmVyLWFsbCxcbi51aS1jb3JuZXItdG9wLFxuLnVpLWNvcm5lci1yaWdodCxcbi51aS1jb3JuZXItdHIge1xuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4Lyp7Y29ybmVyUmFkaXVzfSovO1xufVxuLnVpLWNvcm5lci1hbGwsXG4udWktY29ybmVyLWJvdHRvbSxcbi51aS1jb3JuZXItbGVmdCxcbi51aS1jb3JuZXItYmwge1xuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHgvKntjb3JuZXJSYWRpdXN9Ki87XG59XG4udWktY29ybmVyLWFsbCxcbi51aS1jb3JuZXItYm90dG9tLFxuLnVpLWNvcm5lci1yaWdodCxcbi51aS1jb3JuZXItYnIge1xuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4Lyp7Y29ybmVyUmFkaXVzfSovO1xufVxuXG4vKiBPdmVybGF5cyAqL1xuLnVpLXdpZGdldC1vdmVybGF5IHtcblx0YmFja2dyb3VuZDogI2FhYWFhYS8qe2JnQ29sb3JPdmVybGF5fSovIC8qe2JnSW1nVXJsT3ZlcmxheX0qLyAvKntiZ092ZXJsYXlYUG9zfSovIC8qe2JnT3ZlcmxheVlQb3N9Ki8gLyp7YmdPdmVybGF5UmVwZWF0fSovO1xuXHRvcGFjaXR5OiAuMy8qe29wYWNpdHlPdmVybGF5fSovO1xuXHRmaWx0ZXI6IEFscGhhKE9wYWNpdHk9MzApLyp7b3BhY2l0eUZpbHRlck92ZXJsYXl9Ki87IC8qIHN1cHBvcnQ6IElFOCAqL1xufVxuLnVpLXdpZGdldC1zaGFkb3cge1xuXHQtd2Via2l0LWJveC1zaGFkb3c6IDAvKntvZmZzZXRMZWZ0U2hhZG93fSovIDAvKntvZmZzZXRUb3BTaGFkb3d9Ki8gNXB4Lyp7dGhpY2tuZXNzU2hhZG93fSovICM2NjY2NjYvKntiZ0NvbG9yU2hhZG93fSovO1xuXHRib3gtc2hhZG93OiAwLyp7b2Zmc2V0TGVmdFNoYWRvd30qLyAwLyp7b2Zmc2V0VG9wU2hhZG93fSovIDVweC8qe3RoaWNrbmVzc1NoYWRvd30qLyAjNjY2NjY2Lyp7YmdDb2xvclNoYWRvd30qLztcbn1cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVF1aWNrc2FuZDo0MDAsNzAwXCIpO1xuQGltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdGhlbWVzL2Jhc2UvYWxsLmNzc1wiO1xuYm9keSwgaHRtbCB7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gIGNvbG9yOiAjMjYzMjM4O1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5oMSwgaDIsIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuaW5wdXQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjYzMjM4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGNvbG9yOiAjMjYzMjM4O1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5idXR0b24ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyNjMyMzg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjMjYzMjM4O1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuYnV0dG9uLnJlYWR5IHtcbiAgYmFja2dyb3VuZDogIzAwZTY3NjtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbnNlbGVjdCB7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzI2MzIzODtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICMyNjMyMzg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmRpdi51aS1zZWxlY3RhYmxlLWhlbHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDAwMDA7XG4gIGJvcmRlcjogMXB4IGRvdHRlZCBibGFjaztcbn1cblxuZm9ybSB0YWJsZSB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaGVhZGVyLCBtYWluLCBmb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmhlYWRlciB7XG4gIHBhZGRpbmc6IDcwcHggMTBweCAxMHB4IDEwcHg7XG59XG5oZWFkZXIgZGl2LmJhciB7XG4gIGJhY2tncm91bmQ6ICNmZmVlNTg7XG4gIGhlaWdodDogNTBweDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxO1xufVxuaGVhZGVyIGRpdi5iYXIgZm9ybSB0YWJsZSB7XG4gIGJvcmRlci1zcGFjaW5nOiAxMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5oZWFkZXIgZGl2LmJhciBmb3JtIHRhYmxlIHRkIHtcbiAgcGFkZGluZzogMDtcbn1cbmhlYWRlciBmb3JtIGRpdi5mb3JtLWVsZW1lbnQgYnV0dG9uLCBoZWFkZXIgZm9ybSBkaXYuZm9ybS1lbGVtZW50IGlucHV0LCBoZWFkZXIgZm9ybSBkaXYuZm9ybS1lbGVtZW50IHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYWluIHtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcbn0iLCJAaW1wb3J0IFwiLi4vc3R5bGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS90aGVtZXMvYmFzZS9hbGwuY3NzXCI7XG5cbmZvcm0ge1xuXHR0YWJsZSB7XG5cdFx0bWFyZ2luOiBhdXRvO1xuXHR9XG59XG5cbmhlYWRlciwgbWFpbiwgZm9vdGVyIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oZWFkZXIge1xuXG5cdHBhZGRpbmc6IDcwcHggMTBweCAxMHB4IDEwcHg7XG5cdGRpdi5iYXIge1xuXHRcdGJhY2tncm91bmQ6ICR5ZWxsb3c7XG5cdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdGxlZnQ6IDA7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdHRvcDogMDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHR6LWluZGV4OiAxO1xuXHRcdGZvcm0ge1xuXHRcdFx0dGFibGUge1xuXHRcdFx0XHRib3JkZXItc3BhY2luZzogMTBweDtcblx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdFx0XHR0ZCB7XG5cdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRmb3JtIHtcblx0XHRkaXYuZm9ybS1lbGVtZW50IHtcblx0XHRcdGJ1dHRvbiwgaW5wdXQsIHNlbGVjdCB7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0fVxuXHRcdFx0Ly9pbnB1dC5mb3JtLWVsZW1lbnQtaW5wdXQtdGFnIHtcblx0XHRcdC8vXHR3aWR0aDogMTAwcHg7XG5cdFx0XHQvL31cblx0XHR9XG5cdH1cbn1cblxubWFpbiB7XG5cdHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XG59XG4iXX0= */"];
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var jquery_ui_ui_widgets_selectable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jquery-ui/ui/widgets/selectable */
    "./node_modules/jquery-ui/ui/widgets/selectable.js");
    /* harmony import */


    var jquery_ui_ui_widgets_selectable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_selectable__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _service_queue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./_service/queue.service */
    "./src/app/_service/queue.service.ts");
    /* harmony import */


    var _service_queue_system_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./_service/queue-system.service */
    "./src/app/_service/queue-system.service.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var jquery_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! jquery-ui */
    "./node_modules/jquery-ui/ui/widget.js");
    /* harmony import */


    var jquery_ui__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery_ui__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(zone, changeDetectorRef, httpClient, queueService, queueSystemService) {
        _classCallCheck(this, AppComponent);

        this.zone = zone;
        this.changeDetectorRef = changeDetectorRef;
        this.httpClient = httpClient;
        this.queueService = queueService;
        this.queueSystemService = queueSystemService;
        this.consumers = [];
        this.quotes = ['"Three may keep a secret, if two of them are dead."', '"If you want to keep a secret, you must also hide it from yourself."', '"The more you leave out, the more you highlight what you leave in."', '"I want to be with those who know secret things or else alone."', '"Just do not tell Tumblr."'];
        this.quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        this.title = 'Tumbless';
        this.types = [{
          title: 'All',
          value: '/'
        }, {
          title: 'Photo',
          value: '/photo'
        }, {
          title: 'Video',
          value: '/video'
        }, {
          title: 'Audio',
          value: '/audio'
        }, {
          title: 'Text',
          value: '/text'
        }, {
          title: 'Quote',
          value: '/quote'
        }, {
          title: 'Link',
          value: '/link'
        }, {
          title: 'Answer',
          value: '/answer'
        }, {
          title: 'Chat',
          value: '/chat'
        }];
        this.queueForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          blog: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.postsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          blog: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          tag: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('/')
        });
        this.networking = false;
        this.consumers.push(this.queueSystemService);
      }

      _createClass(AppComponent, [{
        key: "trackByIdentity",
        value: function trackByIdentity(index, item) {
          return '' + item.id + item.selected;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(this.consumers.map(function (c) {
            return c.init();
          })).subscribe(function () {
            _this3.queueService.setConsumer(_this3.consumers[0]);

            _this3.queueForm.patchValue({
              blog: _this3.consumers[0].user.blogs[0].tumblr.name
            });
          }, console.error);
          jquery__WEBPACK_IMPORTED_MODULE_6__('div.post-elements').selectable({
            filter: 'div.post-element',
            selected: function selected(event, ui) {
              console.log(jquery__WEBPACK_IMPORTED_MODULE_6__(ui.selected).data('postId'));

              _this3.zone.run(function () {
                return _this3.queueService.selectPost(jquery__WEBPACK_IMPORTED_MODULE_6__(ui.selected).data('postId'));
              });
            }
          });
        }
      }, {
        key: "onScroll",
        value: function onScroll() {
          if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            if (!this.networking && this.queueService.next) {
              this.load(this.queueService.next.href);
            }
          }
        }
      }, {
        key: "onBeforeUnload",
        value: function onBeforeUnload(event) {
          if (this.queueService.selectedPostsCount() > 0) {
            event.returnValue = true;
          }
        }
      }, {
        key: "load",
        value: function load(path) {
          var _this4 = this;

          if (this.networking) {
            return;
          }

          this.networking = true;

          if (path === undefined) {
            if (!/^[\dA-Za-z-:]+$/.test(this.postsForm.value.blog)) {
              return;
            }

            this.queueService.clearPosts();
            path = '/v2/blog/' + this.postsForm.value.blog + '/posts' + this.postsForm.value.type + '?limit=50&page_number=1';

            if (this.postsForm.value.tag !== '') {
              path = path + '&tag=' + this.postsForm.value.tag;
            }
          }

          this.httpClient.get('https://api.tumblr.com' + path, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              Authorization: 'Bearer aIcXSOoTtqrzR8L8YEIOmBeW94c3FmbSNSWAUbxsny9KKx5VFh'
            })
          }).subscribe(function (posts) {
            var _iterator = _createForOfIteratorHelper(posts.response.posts),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var post = _step.value;
                post.from = post.blog_name;
                post.post_id = post.id.toString();

                _this4.queueService.addPost(post);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (posts.response._links !== undefined) {
              _this4.queueService.next = posts.response._links.next;
            }

            _this4.networking = false;
          }, console.error);
        }
      }, {
        key: "selectConsumer",
        value: function selectConsumer(event) {
          this.queueService.setConsumer(this.consumers[event.target.value]);
        }
      }]);

      return AppComponent;
    }();
    /***/

  },

  /***/
  "./src/app/app.module.ngfactory.js":
  /*!*****************************************!*\
    !*** ./src/app/app.module.ngfactory.js ***!
    \*****************************************/

  /*! exports provided: AppModuleNgFactory */

  /***/
  function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component.ngfactory */
    "./src/app/app.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_app_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵDomRendererFactory2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]);
    });
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };
    /***/

  },

  /***/
  "./src/app/post/post.component.ngfactory.js":
  /*!**************************************************!*\
    !*** ./src/app/post/post.component.ngfactory.js ***!
    \**************************************************/

  /*! exports provided: RenderType_PostComponent, View_PostComponent_0, View_PostComponent_Host_0, PostComponentNgFactory */

  /***/
  function srcAppPostPostComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_PostComponent", function () {
      return RenderType_PostComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PostComponent_0", function () {
      return View_PostComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PostComponent_Host_0", function () {
      return View_PostComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostComponentNgFactory", function () {
      return PostComponentNgFactory;
    });
    /* harmony import */


    var _post_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./post.component.scss.shim.ngstyle */
    "./src/app/post/post.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./post.component */
    "./src/app/post/post.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_PostComponent = [_post_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_PostComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_PostComponent,
      data: {}
    });

    function View_PostComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["#", " "]))], null, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_PostComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "post-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "p", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], {
        ngClass: [0, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, {
        "post-text-quote": 0,
        "post-text-chat": 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""]))], function (_ck, _v) {
        var currVal_0 = _ck(_v, 4, 0, _v.parent.context.$implicit.subtype === "quote", _v.parent.context.$implicit.subtype === "chat");

        _ck(_v, 3, 0, currVal_0);
      }, function (_ck, _v) {
        var currVal_1 = _v.parent.context.$implicit.text;

        _ck(_v, 5, 0, currVal_1);
      });
    }

    function View_PostComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "post-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PostComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.type == "text";

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_PostComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PostComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.post.content;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_PostComponent_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "post-image"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"]], {
        ngStyle: [0, "ngStyle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, {
        "background-image": 0
      })], function (_ck, _v) {
        var currVal_0 = _ck(_v, 4, 0, "url(" + _v.parent.parent.context.$implicit.slim_media.media_url_template.replace("{id}", "250") + ")");

        _ck(_v, 3, 0, currVal_0);
      }, null);
    }

    function View_PostComponent_10(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "post-image"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"]], {
        ngStyle: [0, "ngStyle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, {
        "background-image": 0
      })], function (_ck, _v) {
        var currVal_0 = _ck(_v, 3, 0, "url(" + _v.parent.parent.context.$implicit.media[0].url + ")");

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_PostComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "post-photo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PostComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["elseBlock", 2]], null, 0, null, View_PostComponent_10))], function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.media === undefined;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3);

        _ck(_v, 2, 0, currVal_0, currVal_1);
      }, null);
    }

    function View_PostComponent_12(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "post-image"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"]], {
        ngStyle: [0, "ngStyle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, {
        "background-image": 0
      })], function (_ck, _v) {
        var currVal_0 = _ck(_v, 4, 0, "url(" + _v.parent.parent.context.$implicit.poster[0].url + ")");

        _ck(_v, 3, 0, currVal_0);
      }, null);
    }

    function View_PostComponent_11(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["class", "post-audio"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "table", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 9, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PostComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 6, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""]))], function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.poster;

        _ck(_v, 5, 0, currVal_0);
      }, function (_ck, _v) {
        var currVal_1 = _v.parent.context.$implicit.title;

        _ck(_v, 8, 0, currVal_1);

        var currVal_2 = _v.parent.context.$implicit.album;

        _ck(_v, 10, 0, currVal_2);

        var currVal_3 = _v.parent.context.$implicit.artist;

        _ck(_v, 12, 0, currVal_3);
      });
    }

    function View_PostComponent_14(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "post-image"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgStyleImpl"]], {
        ngStyle: [0, "ngStyle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, {
        "background-image": 0
      })], function (_ck, _v) {
        var currVal_0 = _ck(_v, 3, 0, "url(" + _v.parent.parent.context.$implicit.poster[0].url + ")");

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_PostComponent_13(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "post-video"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PostComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.poster;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_PostComponent_15(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "post-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "p", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], {
        ngClass: [0, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](4, {
        "post-text-quote": 0,
        "post-text-chat": 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""]))], function (_ck, _v) {
        var currVal_0 = _ck(_v, 4, 0, _v.parent.context.$implicit.subtype === "quote", _v.parent.context.$implicit.subtype === "chat");

        _ck(_v, 3, 0, currVal_0);
      }, function (_ck, _v) {
        var currVal_1 = _v.parent.context.$implicit.text;

        _ck(_v, 5, 0, currVal_1);
      });
    }

    function View_PostComponent_16(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "post-link"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.title;

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_PostComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PostComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PostComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PostComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PostComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PostComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.type == "image";

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.type == "audio";

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.type == "video";

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _v.context.$implicit.type == "text";

        _ck(_v, 8, 0, currVal_3);

        var currVal_4 = _v.context.$implicit.type == "link";

        _ck(_v, 10, 0, currVal_4);
      }, null);
    }

    function View_PostComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "post-trail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PostComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.content;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_PostComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PostComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.post.trail;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_PostComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "div", [["class", "post-element"]], [[1, "data-post-id", 0], [1, "data-post-reblog-key", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, {
        "post-element-selected": 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "div", [["class", "post-element-cover"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["Notes: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PostComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PostComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PostComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = "post-element";

        var currVal_3 = _ck(_v, 3, 0, _co.post.selected);

        _ck(_v, 2, 0, currVal_2, currVal_3);

        var currVal_5 = _co.post.tags;

        _ck(_v, 9, 0, currVal_5);

        var currVal_6 = _co.post.content.length > 0;

        _ck(_v, 11, 0, currVal_6);

        var currVal_7 = _co.post.trail.length > 0;

        _ck(_v, 13, 0, currVal_7);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.post.id;
        var currVal_1 = _co.post.reblog_key;

        _ck(_v, 0, 0, currVal_0, currVal_1);

        var currVal_4 = _co.post.note_count;

        _ck(_v, 6, 0, currVal_4);
      });
    }

    function View_PostComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-post", [], null, null, null, View_PostComponent_0, RenderType_PostComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var PostComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-post", _post_component__WEBPACK_IMPORTED_MODULE_3__["PostComponent"], View_PostComponent_Host_0, {
      post: "post"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/post/post.component.scss.shim.ngstyle.js":
  /*!**********************************************************!*\
    !*** ./src/app/post/post.component.scss.shim.ngstyle.js ***!
    \**********************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppPostPostComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["@import url(\"https://fonts.googleapis.com/css?family=Quicksand:400,700\");\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n  margin: 0;\n}\nbody[_ngcontent-%COMP%] {\n  color: #263238;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 16px;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  font-family: \"Quicksand\", sans-serif;\n  margin: 0 0 10px 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\ninput[_ngcontent-%COMP%] {\n  border: 2px solid #263238;\n  border-radius: 5px;\n  box-sizing: border-box;\n  height: 30px;\n  outline: none;\n  padding: 0 5px;\n  color: #263238;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 16px;\n}\nbutton[_ngcontent-%COMP%] {\n  height: 30px;\n  background: #f5f5f5;\n  border: 2px solid #263238;\n  border-radius: 5px;\n  cursor: pointer;\n  outline: none;\n  color: #263238;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 16px;\n}\nbutton.ready[_ngcontent-%COMP%] {\n  background: #00e676;\n  color: #FFFFFF;\n}\nselect[_ngcontent-%COMP%] {\n  height: 30px;\n  border: 2px solid #263238;\n  border-radius: 5px;\n  cursor: pointer;\n  outline: none;\n  color: #263238;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 16px;\n}\ndiv.ui-selectable-helper[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10000000;\n  border: 1px dotted black;\n}\ndiv.post-element[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  border-radius: 5px;\n  cursor: pointer;\n  display: inline-block;\n  height: 200px;\n  margin: 5px;\n  overflow: hidden;\n  position: relative;\n  text-align: left;\n  vertical-align: middle;\n  width: 200px;\n}\ndiv.post-element[_ngcontent-%COMP%]   div.post-image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  background-size: cover;\n}\ndiv.post-element[_ngcontent-%COMP%]   div.post-audio[_ngcontent-%COMP%] {\n  background: #ea80fc;\n  color: white;\n  padding: 10px;\n}\ndiv.post-element[_ngcontent-%COMP%]   div.post-audio[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  border-spacing: 0;\n  font-size: 0.75em;\n  table-layout: fixed;\n}\ndiv.post-element[_ngcontent-%COMP%]   div.post-audio[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0;\n  vertical-align: top;\n}\ndiv.post-element[_ngcontent-%COMP%]   div.post-audio[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   div.post-image[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background-size: cover;\n  border-radius: 5px;\n}\ndiv.post-element[_ngcontent-%COMP%]   div.post-audio[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\ndiv.post-element[_ngcontent-%COMP%]   div.post-link[_ngcontent-%COMP%] {\n  background: #00e676;\n  color: white;\n  padding: 10px;\n}\ndiv.post-element[_ngcontent-%COMP%]   div.post-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n}\ndiv.post-element[_ngcontent-%COMP%]   div.post-text[_ngcontent-%COMP%]   p.post-text-heading1[_ngcontent-%COMP%], div.post-element[_ngcontent-%COMP%]   div.post-text[_ngcontent-%COMP%]   p.post-text-quote[_ngcontent-%COMP%] {\n  background: #ffa000;\n  font-size: 1.25em;\n}\ndiv.post-element[_ngcontent-%COMP%]   div.post-text[_ngcontent-%COMP%]   p.post-text-chat[_ngcontent-%COMP%] {\n  font-style: italic;\n  background: #00b2cc;\n  color: white;\n}\ndiv.post-element[_ngcontent-%COMP%]   div.post-video[_ngcontent-%COMP%] {\n  background: pink;\n  padding: 10px;\n}\ndiv.post-element[_ngcontent-%COMP%]   div.post-video[_ngcontent-%COMP%]   div.post-image[_ngcontent-%COMP%] {\n  height: 180px;\n  background-size: cover;\n  border-radius: 5px;\n  width: 180px;\n}\ndiv.post-element[_ngcontent-%COMP%]   div.post-element-cover[_ngcontent-%COMP%] {\n  display: none;\n}\ndiv.post-element[_ngcontent-%COMP%]:hover   .post-element-cover[_ngcontent-%COMP%], div.post-element.post-element-selected[_ngcontent-%COMP%]   .post-element-cover[_ngcontent-%COMP%] {\n  background: rgba(255, 238, 88, 0.8);\n  color: #263238;\n  display: block;\n  font-size: 18px;\n  font-weight: bold;\n  height: 180px;\n  padding: 10px;\n  position: absolute;\n  width: 180px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96YWNoYmVja2VyL1B5Y2hhcm1Qcm9qZWN0cy90dW1ibGVzcy90dW1ibGVzcy5naXRodWIuaW8vc3JjL3N0eWxlcy5zY3NzIiwic3JjL2FwcC9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvemFjaGJlY2tlci9QeWNoYXJtUHJvamVjdHMvdHVtYmxlc3MvdHVtYmxlc3MuZ2l0aHViLmlvL3NyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHdFQUFBO0FBbUNSO0VBQ0MsU0FBQTtBQ2pDRDtBRG9DQTtFQWJDLGNBeEJPO0VBeUJQLG9DQUFBO0VBQ0EsZUFBQTtBQ25CRDtBRGtDQTtFQVhDLG9DQUFBO0VBYUEsa0JBQUE7QUMvQkQ7QURrQ0E7RUFDQyxTQUFBO0FDL0JEO0FEa0NBO0VBQ0MseUJBQUE7RUFHQSxrQkFBQTtFQUdBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBcENBLGNBeEJPO0VBeUJQLG9DQUFBO0VBQ0EsZUFBQTtBQ01EO0FEZ0NBO0VBQ0MsWUFBQTtFQUNBLG1CQWxETTtFQW1ETix5QkFBQTtFQUdBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFoREEsY0F4Qk87RUF5QlAsb0NBQUE7RUFDQSxlQUFBO0FDb0JEO0FENEJDO0VBQ0MsbUJBckVNO0VBc0VOLGNBMURNO0FDZ0NSO0FEOEJBO0VBQ0MsWUFBQTtFQUNBLHlCQUFBO0VBR0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQS9EQSxjQXhCTztFQXlCUCxvQ0FBQTtFQUNBLGVBQUE7QUNxQ0Q7QUQ0QkE7RUFDQyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUN6QkQ7QUNyRUE7RUFDQyxtQkZlTTtFRVpOLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUR3RUQ7QUN0RUM7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FEd0VGO0FDckVDO0VBQ0MsbUJGVk87RUVXUCxZQUFBO0VBQ0EsYUFBQTtBRHVFRjtBQ3JFRTtFQUNDLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRHVFSDtBQ3JFRztFQUNDLFVBQUE7RUFDQSxtQkFBQTtBRHVFSjtBQ3JFSTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFHQSxrQkFBQTtBRHVFTDtBQ3BFSTtFQUNDLGlCQUFBO0FEc0VMO0FDaEVDO0VBQ0MsbUJGOUNNO0VFK0NOLFlBQUE7RUFDQSxhQUFBO0FEa0VGO0FDOURFO0VBQ0MsaUJBQUE7QURnRUg7QUM3REU7RUFDQyxtQkZyRE07RUVzRE4saUJBQUE7QUQrREg7QUM1REU7RUFDQyxrQkFBQTtFQUNBLG1CRmpFSTtFRWtFSixZQUFBO0FEOERIO0FDMURDO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0FENERGO0FDMURFO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBR0Esa0JBQUE7RUFFQSxZQUFBO0FEMkRIO0FDdkRDO0VBQ0MsYUFBQTtBRHlERjtBQ3REQztFQUNDLG1DQUFBO0VBQ0EsY0YvRk07RUVnR04sY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FEd0RGIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1RdWlja3NhbmQ6NDAwLDcwMCcpO1xuXG4kYmxhY2s6ICMyNjMyMzg7XG5cbiRibHVlOiAjMDBlNWZmO1xuJGJsdWUtbGlnaHQ6ICM2ZWZmZmY7XG4kYmx1ZTogIzAwYjJjYztcblxuJGdyZWVuOiAjMDBlNjc2O1xuJGdyZWVuLWxpZ2h0OiAjNjZmZmE2O1xuJGdyZWVuLWRhcms6ICMwMGIyNDg7XG5cbiRvcmFuZ2U6ICNmZmEwMDA7XG5cbiRwdXJwbGU6ICNlYTgwZmM7XG4kcHVycGxlLWxpZ2h0OiAjZmZiMmZmO1xuJHB1cnBsZS1kYXJrOiAjYjY0ZmM4O1xuXG4kZ3JleTogI2Y1ZjVmNTtcblxuJHdoaXRlOiAjRkZGRkZGO1xuXG4keWVsbG93OiAjZmZlZTU4O1xuJHllbGxvdy1saWdodDogI2ZmZmY4YjtcblxuQG1peGluIEJvZHlGb250IHtcblx0Y29sb3I6ICRibGFjaztcblx0Zm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xuXHRmb250LXNpemU6IDE2cHg7XG59XG5cbkBtaXhpbiBIZWFkZXJGb250IHtcblx0Zm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5LCBodG1sIHtcblx0bWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcblx0QGluY2x1ZGUgQm9keUZvbnQ7XG59XG5cbmgxLCBoMiwgaDMge1xuXHRAaW5jbHVkZSBIZWFkZXJGb250O1xuXHRtYXJnaW46IDAgMCAxMHB4IDA7XG59XG5cbnAge1xuXHRtYXJnaW46IDA7XG59XG5cbmlucHV0IHtcblx0Ym9yZGVyOiAycHggc29saWQgJGJsYWNrO1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGhlaWdodDogMzBweDtcblx0b3V0bGluZTogbm9uZTtcblx0cGFkZGluZzogMCA1cHg7XG5cdEBpbmNsdWRlIEJvZHlGb250O1xufVxuXG5idXR0b24ge1xuXHRoZWlnaHQ6IDMwcHg7XG5cdGJhY2tncm91bmQ6ICRncmV5O1xuXHRib3JkZXI6IDJweCBzb2xpZCAkYmxhY2s7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdG91dGxpbmU6IG5vbmU7XG5cdEBpbmNsdWRlIEJvZHlGb250O1xuXHQmLnJlYWR5IHtcblx0XHRiYWNrZ3JvdW5kOiAkZ3JlZW47XG5cdFx0Y29sb3I6ICR3aGl0ZTtcblx0fVxufVxuXG5zZWxlY3Qge1xuXHRoZWlnaHQ6IDMwcHg7XG5cdGJvcmRlcjogMnB4IHNvbGlkICRibGFjaztcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0b3V0bGluZTogbm9uZTtcblx0QGluY2x1ZGUgQm9keUZvbnQ7XG59XG5cbmRpdi51aS1zZWxlY3RhYmxlLWhlbHBlciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0ei1pbmRleDogMTAwMDAwMDA7XG5cdGJvcmRlcjogMXB4IGRvdHRlZCBibGFjaztcbn1cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVF1aWNrc2FuZDo0MDAsNzAwXCIpO1xuYm9keSwgaHRtbCB7XG4gIG1hcmdpbjogMDtcbn1cblxuYm9keSB7XG4gIGNvbG9yOiAjMjYzMjM4O1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5oMSwgaDIsIGgzIHtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuaW5wdXQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjYzMjM4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGNvbG9yOiAjMjYzMjM4O1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5idXR0b24ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyNjMyMzg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjMjYzMjM4O1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuYnV0dG9uLnJlYWR5IHtcbiAgYmFja2dyb3VuZDogIzAwZTY3NjtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbnNlbGVjdCB7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzI2MzIzODtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICMyNjMyMzg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmRpdi51aS1zZWxlY3RhYmxlLWhlbHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDAwMDA7XG4gIGJvcmRlcjogMXB4IGRvdHRlZCBibGFjaztcbn1cblxuZGl2LnBvc3QtZWxlbWVudCB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IDIwMHB4O1xufVxuZGl2LnBvc3QtZWxlbWVudCBkaXYucG9zdC1pbWFnZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbmRpdi5wb3N0LWVsZW1lbnQgZGl2LnBvc3QtYXVkaW8ge1xuICBiYWNrZ3JvdW5kOiAjZWE4MGZjO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5kaXYucG9zdC1lbGVtZW50IGRpdi5wb3N0LWF1ZGlvIHRhYmxlIHtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuZGl2LnBvc3QtZWxlbWVudCBkaXYucG9zdC1hdWRpbyB0YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5kaXYucG9zdC1lbGVtZW50IGRpdi5wb3N0LWF1ZGlvIHRhYmxlIHRkIGRpdi5wb3N0LWltYWdlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5kaXYucG9zdC1lbGVtZW50IGRpdi5wb3N0LWF1ZGlvIHRhYmxlIHRkIHAge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbmRpdi5wb3N0LWVsZW1lbnQgZGl2LnBvc3QtbGluayB7XG4gIGJhY2tncm91bmQ6ICMwMGU2NzY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbn1cbmRpdi5wb3N0LWVsZW1lbnQgZGl2LnBvc3QtdGV4dCBwIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5kaXYucG9zdC1lbGVtZW50IGRpdi5wb3N0LXRleHQgcC5wb3N0LXRleHQtaGVhZGluZzEsIGRpdi5wb3N0LWVsZW1lbnQgZGl2LnBvc3QtdGV4dCBwLnBvc3QtdGV4dC1xdW90ZSB7XG4gIGJhY2tncm91bmQ6ICNmZmEwMDA7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xufVxuZGl2LnBvc3QtZWxlbWVudCBkaXYucG9zdC10ZXh0IHAucG9zdC10ZXh0LWNoYXQge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGJhY2tncm91bmQ6ICMwMGIyY2M7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmRpdi5wb3N0LWVsZW1lbnQgZGl2LnBvc3QtdmlkZW8ge1xuICBiYWNrZ3JvdW5kOiBwaW5rO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuZGl2LnBvc3QtZWxlbWVudCBkaXYucG9zdC12aWRlbyBkaXYucG9zdC1pbWFnZSB7XG4gIGhlaWdodDogMTgwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTgwcHg7XG59XG5kaXYucG9zdC1lbGVtZW50IGRpdi5wb3N0LWVsZW1lbnQtY292ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuZGl2LnBvc3QtZWxlbWVudDpob3ZlciAucG9zdC1lbGVtZW50LWNvdmVyLCBkaXYucG9zdC1lbGVtZW50LnBvc3QtZWxlbWVudC1zZWxlY3RlZCAucG9zdC1lbGVtZW50LWNvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIzOCwgODgsIDAuOCk7XG4gIGNvbG9yOiAjMjYzMjM4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiAxODBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTgwcHg7XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlc1wiO1xuXG5kaXYucG9zdC1lbGVtZW50IHtcblx0YmFja2dyb3VuZDogJGdyZXk7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0aGVpZ2h0OiAyMDBweDtcblx0bWFyZ2luOiA1cHg7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0d2lkdGg6IDIwMHB4O1xuXG5cdGRpdi5wb3N0LWltYWdlIHtcblx0XHR3aWR0aDogMjAwcHg7XG5cdFx0aGVpZ2h0OiAyMDBweDtcblx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHR9XG5cblx0ZGl2LnBvc3QtYXVkaW8ge1xuXHRcdGJhY2tncm91bmQ6ICRwdXJwbGU7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdHBhZGRpbmc6IDEwcHg7XG5cblx0XHR0YWJsZSB7XG5cdFx0XHRib3JkZXItc3BhY2luZzogMDtcblx0XHRcdGZvbnQtc2l6ZTogMC43NWVtO1xuXHRcdFx0dGFibGUtbGF5b3V0OiBmaXhlZDtcblxuXHRcdFx0dGQge1xuXHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuXG5cdFx0XHRcdGRpdi5wb3N0LWltYWdlIHtcblx0XHRcdFx0XHR3aWR0aDogNTBweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDUwcHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRcdFx0XHQtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTBweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGRpdi5wb3N0LWxpbmsge1xuXHRcdGJhY2tncm91bmQ6ICRncmVlbjtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0cGFkZGluZzogMTBweDtcblx0fVxuXG5cdGRpdi5wb3N0LXRleHQge1xuXHRcdHAge1xuXHRcdFx0cGFkZGluZzogNXB4IDEwcHg7XG5cdFx0fVxuXG5cdFx0cC5wb3N0LXRleHQtaGVhZGluZzEsIHAucG9zdC10ZXh0LXF1b3RlIHtcblx0XHRcdGJhY2tncm91bmQ6ICRvcmFuZ2U7XG5cdFx0XHRmb250LXNpemU6IDEuMjVlbTtcblx0XHR9XG5cblx0XHRwLnBvc3QtdGV4dC1jaGF0IHtcblx0XHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0XHRcdGJhY2tncm91bmQ6ICRibHVlO1xuXHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdH1cblx0fVxuXG5cdGRpdi5wb3N0LXZpZGVvIHtcblx0XHRiYWNrZ3JvdW5kOiBwaW5rO1xuXHRcdHBhZGRpbmc6IDEwcHg7XG5cblx0XHRkaXYucG9zdC1pbWFnZSB7XG5cdFx0XHRoZWlnaHQ6IDE4MHB4O1xuXHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuXHRcdFx0LW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHQvL21hcmdpbjogMTBweDtcblx0XHRcdHdpZHRoOiAxODBweDtcblx0XHR9XG5cdH1cblxuXHRkaXYucG9zdC1lbGVtZW50LWNvdmVyIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cblx0Jjpob3ZlciAucG9zdC1lbGVtZW50LWNvdmVyLCAmLnBvc3QtZWxlbWVudC1zZWxlY3RlZCAucG9zdC1lbGVtZW50LWNvdmVyIHtcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKCR5ZWxsb3csIDAuOCk7XG5cdFx0Y29sb3I6ICRibGFjaztcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0aGVpZ2h0OiAxODBweDtcblx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR3aWR0aDogMTgwcHg7XG5cdH1cbn1cbiJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/post/post.component.ts":
  /*!****************************************!*\
    !*** ./src/app/post/post.component.ts ***!
    \****************************************/

  /*! exports provided: PostComponent */

  /***/
  function srcAppPostPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostComponent", function () {
      return PostComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PostComponent = /*#__PURE__*/function () {
      function PostComponent() {
        _classCallCheck(this, PostComponent);
      }

      _createClass(PostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PostComponent;
    }();
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module.ngfactory */
    "./src/app/app.module.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])["catch"](function (err) {
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
    /*! /Users/zachbecker/PycharmProjects/tumbless/tumbless.github.io/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.a44c3950b55cd6343200.js.map