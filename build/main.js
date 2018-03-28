require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var opendb = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee() {
    var uri = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mongodb://localhost/website';
    var connection, options;
    return __WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            connection = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connection;

            connection.on('error', console.error.bind(console, 'connection error: --> '));
            connection.on('open', console.log.bind(console, 'connection open: --> '));
            // mongoose.set('bufferCommands', false);

            options = {
              // useMongoClient: true,
              autoIndex: false, // Don't build indexes
              reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
              reconnectInterval: 500, // Reconnect every 500ms
              poolSize: 10, // Maintain up to 10 socket connections
              // If not connected, return errors immediately rather than waiting for reconnect
              bufferMaxEntries: 0,
              keepAlive: true
            };
            _context.next = 7;
            return __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connect(uri, options);

          case 7:
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context['catch'](0);

            console.error(_context.t0);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 9]]);
  }));

  return function opendb() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ exports["a"] = opendb;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_blog__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





var router = __WEBPACK_IMPORTED_MODULE_1_koa_router__({
  prefix: '/apis'
});

router.get('/blogs', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var types, docs, _types, tags;

    return __WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            console.log(ctx.request.query);
            types = ctx.request.query.types;
            docs = [];

            if (!(typeof types === 'undefined')) {
              _context.next = 10;
              break;
            }

            _context.next = 7;
            return __WEBPACK_IMPORTED_MODULE_2__models_blog__["a" /* default */].find({ status: 0, isPublic: true });

          case 7:
            docs = _context.sent;
            _context.next = 14;
            break;

          case 10:
            types = types.split(',');
            _context.next = 13;
            return __WEBPACK_IMPORTED_MODULE_2__models_blog__["a" /* default */].find({ status: 0, isPublic: true, type: { $in: types } });

          case 13:
            docs = _context.sent;

          case 14:
            console.log(docs);
            _types = [], tags = [];

            docs.map(function (x) {
              x.tags ? tags = __WEBPACK_IMPORTED_MODULE_3_lodash__["concat"](tags, x.tags) : '';
              x.type ? _types.push(x.type) : '';
            });
            _types = __WEBPACK_IMPORTED_MODULE_3_lodash__["uniq"](_types);
            tags = __WEBPACK_IMPORTED_MODULE_3_lodash__["uniq"](tags);
            ctx.body = {
              status: 'success',
              blogs: docs,
              types: _types,
              tags: tags
            };
            _context.next = 26;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context['catch'](0);

            console.error(_context.t0);
            ctx.body = {
              status: 'error',
              message: _context.t0.name
            };

          case 26:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[0, 22]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

router.get('/drafts', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
    var docs;
    return __WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__models_blog__["a" /* default */].find({ status: 1, isPublic: true });

          case 3:
            docs = _context2.sent;

            console.log(docs);
            ctx.body = {
              status: 'success',
              blogs: docs
            };
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](0);

            console.error(_context2.t0);
            ctx.body = {
              status: 'error',
              message: _context2.t0.name
            };

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[0, 8]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

router.get('/types', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
    var docs;
    return __WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return __WEBPACK_IMPORTED_MODULE_2__models_blog__["a" /* default */].distinctType({ status: 0, isPublic: true });

          case 3:
            docs = _context3.sent;

            console.log(docs);
            ctx.body = {
              status: 'success',
              types: docs
            };
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3['catch'](0);

            console.error(_context3.t0);
            ctx.body = {
              status: 'error',
              message: _context3.t0.name
            };

          case 12:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[0, 8]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

router.post('/blog/publish', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
    var _ctx$request$body, title, tags, type, content, isPublic, _ctx$request$body$sta, status, _ctx$request$body$sto, storeAt, _ctx$request$body$upd, updateAt, doc;

    return __WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log(ctx.request.body);
            _context4.prev = 1;
            _ctx$request$body = ctx.request.body, title = _ctx$request$body.title, tags = _ctx$request$body.tags, type = _ctx$request$body.type, content = _ctx$request$body.content, isPublic = _ctx$request$body.isPublic, _ctx$request$body$sta = _ctx$request$body.status, status = _ctx$request$body$sta === undefined ? 0 : _ctx$request$body$sta, _ctx$request$body$sto = _ctx$request$body.storeAt, storeAt = _ctx$request$body$sto === undefined ? new Date() : _ctx$request$body$sto, _ctx$request$body$upd = _ctx$request$body.updateAt, updateAt = _ctx$request$body$upd === undefined ? new Date() : _ctx$request$body$upd;
            _context4.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__models_blog__["a" /* default */].create({ title: title, tags: tags, type: type, content: content, isPublic: isPublic, status: status, storeAt: storeAt, updateAt: updateAt });

          case 5:
            doc = _context4.sent;

            console.log(doc);
            ctx.body = {
              status: 'success',
              blog: doc
            };
            _context4.next = 14;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4['catch'](1);

            console.error(_context4.t0);
            ctx.body = {
              status: 'error',
              message: _context4.t0.name
            };

          case 14:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this, [[1, 10]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

router.post('/blog/draft', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee5(ctx, next) {
    var _ctx$request$body2, title, tags, type, content, isPublic, _ctx$request$body2$st, status, _ctx$request$body2$st2, storeAt, _ctx$request$body2$up, updateAt, doc;

    return __WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            console.log(ctx.request.body);
            _context5.prev = 1;
            _ctx$request$body2 = ctx.request.body, title = _ctx$request$body2.title, tags = _ctx$request$body2.tags, type = _ctx$request$body2.type, content = _ctx$request$body2.content, isPublic = _ctx$request$body2.isPublic, _ctx$request$body2$st = _ctx$request$body2.status, status = _ctx$request$body2$st === undefined ? 1 : _ctx$request$body2$st, _ctx$request$body2$st2 = _ctx$request$body2.storeAt, storeAt = _ctx$request$body2$st2 === undefined ? new Date() : _ctx$request$body2$st2, _ctx$request$body2$up = _ctx$request$body2.updateAt, updateAt = _ctx$request$body2$up === undefined ? new Date() : _ctx$request$body2$up;
            _context5.next = 5;
            return __WEBPACK_IMPORTED_MODULE_2__models_blog__["a" /* default */].create({ title: title, tags: tags, type: type, content: content, isPublic: isPublic, status: status, storeAt: storeAt, updateAt: updateAt });

          case 5:
            doc = _context5.sent;

            console.log(doc);
            ctx.body = {
              status: 'success',
              doc: doc
            };
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5['catch'](1);

            ctx.body = {
              status: 'error',
              message: _context5.t0.name
            };

          case 13:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this, [[1, 10]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

module.exports = router;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'soonfy personal website',
    titleTemplate: '%s - soonfy',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'keywords', name: 'keywords', content: 'nuxt,vue,koa,element-ui,echarts,socket.io' }, { hid: 'description', name: 'description', content: 'soonfy personal website' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/reset.css', '~assets/css/main.css', 'element-ui/lib/theme-chalk/index.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    // extend(config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // },
    postcss: [__webpack_require__(10)({
      browsers: ['last 3 versions', 'Android >= 4.4', 'iOS >= 6']
    })],
    babel: {
      plugins: [['component', [{
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }]]]
    },
    vendor: ['element-ui', 'axios', 'lodash', 'moment', 'echarts']
  },
  plugins: [{ src: '~plugins/middle', ssr: true }, { src: '~plugins/css', ssr: true }, { src: '~plugins/method', ssr: true }, { src: '~plugins/property', ssr: true }]
};

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var config = {
  types: [{
    label: '前端',
    value: 'frontend'
  }, {
    label: '服务端',
    value: 'server',
    disabled: true
  }, {
    label: '数据分析',
    value: 'analysis'
  }, {
    label: '其它',
    value: 'other'
  }]
};

/* harmony default export */ exports["a"] = config;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_index__ = __webpack_require__(8);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


var Schema = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.Schema;



var blogSchema = new Schema({
  title: String,
  tags: Array,
  type: String,
  content: String,
  isPublic: Boolean,
  status: Number, // 0 - blog, 1 - draft, 2 - delete
  storeAt: Date,
  updateAt: Date
});

blogSchema.virtual('getStatusName').get(function () {
  var _status_name = '';
  switch (this.status) {
    case 0:
      _status_name = '已发表';
      break;
    case 1:
      _status_name = '草稿';
      break;
    case 2:
      _status_name = '已删除';
      break;
    default:
      _status_name = '未知状态';
      break;
  }
  return _status_name;
});

// 实例方法
blogSchema.methods.findSimilarType = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee() {
  return __WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return this.model('BLOG').find({ type: this.type });

        case 2:
          return _context.abrupt('return', _context.sent);

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

// 模型方法
blogSchema.statics.findSimilarType = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(type) {
    return __WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return this.find({ type: type });

          case 2:
            return _context2.abrupt('return', _context2.sent);

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();
blogSchema.statics.distinctType = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee3(params) {
    var _types;

    return __WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return this.distinct('type', params);

          case 2:
            _types = _context3.sent;
            return _context3.abrupt('return', _types.map(function (x) {
              var temp = null;
              __WEBPACK_IMPORTED_MODULE_2__config_index__["a" /* default */].types.map(function (y) {
                if (y.value === x) {
                  temp = y;
                }
              });
              return temp;
            }));

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function (_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var blogModel = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('BLOG', blogSchema, 'blogs');

/* harmony default export */ exports["a"] = blogModel;

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("autoprefixer");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("lodash");

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_bodyparser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apis_controllers_blog__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__apis_config_mongo__ = __webpack_require__(2);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var _this = this;

    var app, host, port, config, nuxt, builder;
    return __WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            host = process.env.HOST || '127.0.0.1';
            port = process.env.PORT || 3000;
            _context2.next = 5;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__apis_config_mongo__["a" /* default */])();

          case 5:
            app.use(__WEBPACK_IMPORTED_MODULE_3_koa_bodyparser__());
            app.use(__WEBPACK_IMPORTED_MODULE_4__apis_controllers_blog__["routes"]());
            app.use(__WEBPACK_IMPORTED_MODULE_4__apis_controllers_blog__["allowedMethods"]());

            // Import and Set Nuxt.js options
            config = __webpack_require__(4);

            config.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

            // Build in development

            if (!config.dev) {
              _context2.next = 15;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context2.next = 15;
            return builder.build();

          case 15:

            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0__home_oliver_person_personal_website_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return next();

                      case 2:
                        ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                        return _context.abrupt('return', new Promise(function (resolve, reject) {
                          ctx.res.on('close', resolve);
                          ctx.res.on('finish', resolve);
                          nuxt.render(ctx.req, ctx.res, function (promise) {
                            // nuxt.render passes a rejected promise into callback on error.
                            promise.then(resolve).catch(reject);
                          });
                        }));

                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

          case 18:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }








start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map