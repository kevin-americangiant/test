/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flatten = exports.asana = undefined;

var _toConsumableArray2 = __webpack_require__(9);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _axios = __webpack_require__(10);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FUNCTIONS

// asana
// given a method (string), url (string), Personal Access Token (string), and optionally a body ({}), asana returns a json parsed response from the Asana API

var asana = exports.asana = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(method, url, token, data) {
    var response;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _axios2.default)({
              url: url,
              baseURL: 'https://app.asana.com/api/1.0/',
              method: method,
              headers: {
                'Authorization': 'Bearer ' + token,
                'Asana-Fast-Api': 'true'
              },
              data: data
            });

          case 3:
            response = _context.sent;
            return _context.abrupt('return', response.data);

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            if (_context.t0.response.status === 401) {
              console.error('Asana responded with 401 (not authorized), this usually means you have not provided a valid Personal Access Token in your .env file or your Personal Access Token does not have permissions for the resource ID you provided. Read more about Personal Access Tokens here: https://asana.com/guide/help/api/api#gl-access-tokens');
            } else if (_context.t0.response.status === 400) {
              console.error('Asana responded with 400 (resource not found), this usually means you have not provided a valid resource ID in your .env file. A Resource can be a task ID or a project ID.');
            } else {
              console.error(_context.t0.message);
            }

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 7]]);
  }));

  return function asana(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

// flatten
// given an two dimensional array, return a one dimensional array
// API helper functions
/*

Every API has its own predilections, here we create straightforward helper functions to make working with external APIs throughout the rest of the app abstract and easy.

We use axios to make these API calls so that we can work with them as promises.

*/

// IMPORTS

var flatten = exports.flatten = function flatten(arr) {
  var _ref2;

  return (_ref2 = []).concat.apply(_ref2, (0, _toConsumableArray3.default)(arr));
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(5);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _socket = __webpack_require__(6);

var _socket2 = _interopRequireDefault(_socket);

var _http = __webpack_require__(7);

var _http2 = _interopRequireDefault(_http);

var _createWebhook = __webpack_require__(8);

var _clearWebhooks = __webpack_require__(11);

var _api = __webpack_require__(2);

var _routes = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// EXPRESS SET UP

// Start up express
var app = (0, _express2.default)();

// Middleware for parsing application/x-www-form-urlencoded
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// Middleware for parsing application/json
app.use(_bodyParser2.default.json());

// SET UP WEB SOCKETS

// Create http server with app
var server = _http2.default.createServer(app);

// pass server to sockiet.io for websockets
var io = (0, _socket2.default)(server);

// add io to Express request objects
app.use(function (req, res, next) {
  req.io = io;
  next();
});

// START UP OUR SERVER

// Serve up some static files
app.use(_express2.default.static('public'));

// Use these routes
app.use('/', (0, _routes.routes)(_express2.default.Router()));

// Listen on this here port
server.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + server.address().port + '. \uD83D\uDEA2');
});

// INTIALIZE WEBHOOkS

var intializeWebhooks = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _clearWebhooks.clearWebhooks)(process.env.PERSONAL_ACCESS_TOKEN, 'https://' + process.env.PROJECT_DOMAIN + '.glitch.me/events', io);

          case 3:

            // 2. After clearWebhooks has resolved, POST a new webhook using the resource ID provided
            (0, _createWebhook.createWebhook)(process.env.PERSONAL_ACCESS_TOKEN, process.env.RESOURCE_ID, 'https://' + process.env.PROJECT_DOMAIN + '.glitch.me/events', io);
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context['catch'](0);

            console.error(_context.t0.message);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 6]]);
  }));

  return function intializeWebhooks() {
    return _ref.apply(this, arguments);
  };
}();

intializeWebhooks();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWebhook = undefined;

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _api = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FUNCTION

var createWebhook = exports.createWebhook = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(token, resource, target) {
    var payload;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;


            // 1. structure the dat we'll post
            payload = {
              data: {
                resource: resource,
                target: target
              }
            };

            // 2. POST using our Asana API helper function

            _context.next = 4;
            return (0, _api.asana)('POST', '/webhooks', process.env.PERSONAL_ACCESS_TOKEN, payload);

          case 4:
            return _context.abrupt('return', _context.sent);

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            console.error(_context.t0.message);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 7]]);
  }));

  return function createWebhook(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); // createWebhook -> utility function
/*

Takes a Personal Access Token, a resource ID, and POSTs a new webhook 

*/

// IMPORTS

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearWebhooks = undefined;

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getWebhooks = __webpack_require__(12);

var _removeWebhook = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FUNCTION

// clearWebhooks -> utiltiy function
/*

Given a Personal Access Token and a target string, composes getWebhooks and removeWebhooks to clear all previously create webhooks from this project.

*/

// IMPORTS

var clearWebhooks = exports.clearWebhooks = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(token, target) {
    var oldWebhooks;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _getWebhooks.getWebhooks)(token, target);

          case 3:
            oldWebhooks = _context2.sent;
            _context2.t0 = Promise;
            _context2.next = 7;
            return oldWebhooks.map(function () {
              var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(v) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return (0, _removeWebhook.removeWebhook)(token, v);

                      case 2:
                        return _context.abrupt('return', _context.sent);

                      case 3:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 7:
            _context2.t1 = _context2.sent;
            _context2.next = 10;
            return _context2.t0.all.call(_context2.t0, _context2.t1);

          case 10:
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t2 = _context2['catch'](0);

            console.error(_context2.t2.message);

          case 15:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 12]]);
  }));

  return function clearWebhooks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWebhooks = undefined;

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _api = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FUNCTION

var getWebhooks = exports.getWebhooks = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(token, target) {
    var workspaces;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _api.asana)('GET', '/users/me?opt_fields=workspaces', token);

          case 3:
            _context2.next = 5;
            return _context2.sent.data.workspaces;

          case 5:
            workspaces = _context2.sent;
            _context2.t0 = _api.flatten;
            _context2.next = 9;
            return Promise.all(

            // 2.3 Map through our array of workspaces and for each one fetch their webhook objects and return the resulting data
            workspaces.map(function () {
              var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(v) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return (0, _api.asana)('GET', 'webhooks?workspace=' + v.id, token);

                      case 2:
                        _context.next = 4;
                        return _context.sent.data;

                      case 4:
                        return _context.abrupt('return', _context.sent);

                      case 5:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 9:
            _context2.t1 = _context2.sent;

            _context2.t2 = function (v) {
              return v.target === target && v.active === true;
            };

            _context2.t3 = function (v) {
              return v.id;
            };

            _context2.next = 14;
            return (0, _context2.t0)(_context2.t1).

            // 2.4 Filter our flattened array of webhook objects by their `target` (string) and `active` (boolean) keys
            filter(_context2.t2).

            // 2.5 Finally, return an array of just the value in each webhook object's `id` key
            map(_context2.t3);

          case 14:
            return _context2.abrupt('return', _context2.sent);

          case 17:
            _context2.prev = 17;
            _context2.t4 = _context2['catch'](0);

            console.error(_context2.t4.message);

          case 20:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 17]]);
  }));

  return function getWebhooks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // getWebhook.js
/* 

Utility function that takes in an Asana Personal Access Token and returns an array of all active webhook IDs associated with a specific target.
  
This lets us find all the webhooks we have created for a specific target and, in practice, allows us to clean up webhooks we've created with previous instances of our application.
  
Getting these IDs is slightly tricky. The Asana API only allows us to GET webhooks by workspace, so we have to:
- Get all the user's workspaces (returned by the API as an array)
- Get all the webhooks in each workspace (returned by the API as objects)
- Filter the webhooks by active and by the target resource
- Concatenate only the IDs into a flat array of numnbers
  
We take a functional, RxJS-esque approach using async/await here. We aren't actually using observables or any external libraries, but if you're familiar with functional or reactive programming patterns or if you've worked with observables before, this will hopefully feel simple.
  
If you aren't familiar with those patterns, this function might feel a little tough. Let's walk you through it step by step:
  
*/

// IMPORTS

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeWebhook = undefined;

var _regenerator = __webpack_require__(0);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(1);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _api = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FUNCTION

var removeWebhook = exports.removeWebhook = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(token, webhookId) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _api.asana)('delete', '/webhooks/' + webhookId, process.env.PERSONAL_ACCESS_TOKEN);

          case 3:
            _context.next = 8;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context['catch'](0);

            console.error(_context.t0.message);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 5]]);
  }));

  return function removeWebhook(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // removeWebhooks -> utiltiy function
/*

Given a Personal Access Token and a webhook ID, sends a DELETE to Asana to remove the webhook.

*/

// IMPORTS

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var routes = exports.routes = function routes(router) {

  // Serve up our index.html file on the main route
  router.get('/', function (request, response) {
    response.sendFile('/app/public/index.html');
  });

  // Pass errors along to our frontend
  router.get('/errors', function (request, response) {
    response.sendFile('/app/public/index.html');
  });

  // '/events' route
  /*
  This is our primary route for webhooks. On this route, we'll have to handle when Asana's API POSTs the initial webhook handshake and when it further POSTs events from our resource 
  */

  router.post('/events', function (request, response) {
    // 1. Set our response header to use the same x-hook-secret key that Asana provides us in the handshake and set our status code to 200
    response.header('x-hook-secret', request.headers['x-hook-secret']).status(200);

    // 2. Respond with a '200 OK' message before we do anything else so that Asana knows we recieved its POST
    response.send('200 OK');

    if (request.body.events) {

      // 3. For diagonstic purposes, log the events Asana sends us (you can see these by clicking the "Logs" button in the upper left)
      console.log(request.body.events);

      // 4. Emit our events array on our websocket
      /* 
      The only thing we do here is emit on our websocket so our client can consume these new events. In a real world application, this is where you might make calls to other APIs (if you're looking to connect Asana events to actions in another service) or make further Asana API calls (if you'd like to explore what triggered these events in more detail). 
      */

      request.io.emit('newEvents', request.body.events);
    }
  });

  // return our newly adorned router

  return router;
};

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map