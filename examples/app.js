var spryt =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = __webpack_require__(1);
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        window.onload = function () {
            var canvas = document.getElementById('canvas');
            var canvasContext = canvas.getContext('2d');
            var sprite = new Image();
            sprite.src = 'coin-sprite.png';
            var animation1 = new src_1.SprytAnimation('animation1', 0, 0, 9);
            var animation2 = new src_1.SprytAnimation('animation2', 1, 0, 9);
            var spryt = new src_1.Spryt(canvasContext, sprite, 100, 100, animation1);
            spryt.AddAnimation(animation2);
            spryt.SetAnimation('animation2');
            var ticks = 0;
            console.log(spryt.GetCurrentAnimation());
            window.setInterval(function () {
                canvasContext.clearRect(0, 0, canvas.width, canvas.height);
                if (ticks === 9) {
                    spryt.SetAnimation('animation1');
                    console.log(spryt.GetCurrentAnimation());
                }
                ticks++;
                spryt.Draw(10, 10);
            }, 100);
        };
    };
    return Startup;
}());
Startup.main();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(2));
__export(__webpack_require__(3));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Spryt = /** @class */ (function () {
    function Spryt(canvasContext, sprite, frameWidth, frameHeight, defaultAnimation) {
        this.animations = {};
        this.animationFrameIndex = 0;
        this.canvasContext = canvasContext;
        this.sprite = sprite;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.animations[defaultAnimation.Name] = defaultAnimation;
        this.currentAnimation = this.animations[defaultAnimation.Name];
    }
    Spryt.prototype.Draw = function (x, y) {
        if (this.animationFrameIndex > this.currentAnimation.LastFrameIndex) {
            this.animationFrameIndex = 0;
        }
        var frameX = (this.animationFrameIndex) * this.frameWidth;
        var frameY = (this.currentAnimation.Row) * this.frameHeight;
        this.canvasContext.drawImage(this.sprite, frameX, frameY, this.frameWidth, this.frameHeight, x, y, this.frameWidth, this.frameHeight);
        this.animationFrameIndex++;
    };
    Spryt.prototype.AddAnimation = function (sprytAnimation) {
        this.animations[sprytAnimation.Name] = sprytAnimation;
    };
    Spryt.prototype.SetAnimation = function (name) {
        this.currentAnimation = this.animations[name];
        this.animationFrameIndex = 0;
    };
    Spryt.prototype.GetCurrentAnimation = function () {
        return this.currentAnimation.Name;
    };
    return Spryt;
}());
exports.Spryt = Spryt;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SprytAnimation = /** @class */ (function () {
    function SprytAnimation(name, row, firstFrameIndex, lastFrameIndex) {
        this.Name = name;
        this.Row = row;
        this.FirstFrameIndex = firstFrameIndex;
        this.LastFrameIndex = lastFrameIndex;
    }
    return SprytAnimation;
}());
exports.SprytAnimation = SprytAnimation;


/***/ })
/******/ ]);