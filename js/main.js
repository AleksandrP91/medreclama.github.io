/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/slider */ \"./src/js/module/slider.js\");\n/* harmony import */ var _module_phoneInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/phoneInput */ \"./src/js/module/phoneInput.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  (0,_module_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_module_phoneInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\n//# sourceURL=webpack://gulp-started/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/phoneInput.js":
/*!*************************************!*\
  !*** ./src/js/module/phoneInput.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar phoneInput = function phoneInput() {\n  var phoneInputs = document.querySelectorAll('input[data-tel-input]');\n\n  var getInputNumbersValue = function getInputNumbersValue(input) {\n    // Return stripped input value ??? just numbers\n    return input.value.replace(/\\D/g, '');\n  };\n\n  var onPhonePaste = function onPhonePaste(e) {\n    var input = e.target,\n        inputNumbersValue = getInputNumbersValue(input);\n    var pasted = e.clipboardData || window.clipboardData;\n\n    if (pasted) {\n      var pastedText = pasted.getData('Text');\n\n      if (/\\D/g.test(pastedText)) {\n        // Attempt to paste non-numeric symbol ??? remove all non-numeric symbols,\n        // formatting will be in onPhoneInput handler\n        input.value = inputNumbersValue;\n        return;\n      }\n    }\n  };\n\n  var onPhoneInput = function onPhoneInput(e) {\n    var input = e.target,\n        inputNumbersValue = getInputNumbersValue(input),\n        selectionStart = input.selectionStart,\n        formattedInputValue = \"\";\n\n    if (!inputNumbersValue) {\n      return input.value = \"\";\n    }\n\n    if (input.value.length != selectionStart) {\n      // Editing in the middle of input, not last symbol\n      if (e.data && /\\D/g.test(e.data)) {\n        // Attempt to input non-numeric symbol\n        input.value = inputNumbersValue;\n      }\n\n      return;\n    }\n\n    if ([\"7\", \"8\", \"9\"].indexOf(inputNumbersValue[0]) > -1) {\n      if (inputNumbersValue[0] == \"9\") inputNumbersValue = \"7\" + inputNumbersValue;\n      var firstSymbols = inputNumbersValue[0] == \"8\" ? \"8\" : \"+7\";\n      formattedInputValue = input.value = firstSymbols + \" \";\n\n      if (inputNumbersValue.length > 1) {\n        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);\n      }\n\n      if (inputNumbersValue.length >= 5) {\n        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);\n      }\n\n      if (inputNumbersValue.length >= 8) {\n        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);\n      }\n\n      if (inputNumbersValue.length >= 10) {\n        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);\n      }\n    } else {\n      formattedInputValue = '+' + inputNumbersValue.substring(0, 16);\n    }\n\n    input.value = formattedInputValue;\n  };\n\n  var onPhoneKeyDown = function onPhoneKeyDown(e) {\n    // Clear input after remove last symbol\n    var inputValue = e.target.value.replace(/\\D/g, '');\n\n    if (e.keyCode == 8 && inputValue.length == 1) {\n      e.target.value = \"\";\n    }\n  };\n\n  var _iterator = _createForOfIteratorHelper(phoneInputs),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var _phoneInput = _step.value;\n\n      _phoneInput.addEventListener('keydown', onPhoneKeyDown);\n\n      _phoneInput.addEventListener('input', onPhoneInput, false);\n\n      _phoneInput.addEventListener('paste', onPhonePaste, false);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (phoneInput);\n\n//# sourceURL=webpack://gulp-started/./src/js/module/phoneInput.js?");

/***/ }),

/***/ "./src/js/module/slider.js":
/*!*********************************!*\
  !*** ./src/js/module/slider.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar slider = function slider() {\n  var team = new Swiper('.team', {\n    slidesPerView: 2,\n    spaceBetween: 0,\n    slidesPerGroup: 1,\n    navigation: {\n      nextEl: \".swiper-button-next\",\n      prevEl: \".swiper-button-prev\"\n    },\n    breakpoints: {\n      320: {\n        slidesPerView: 1\n      },\n      767: {\n        slidesPerView: 2,\n        spaceBetween: 40\n      }\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (slider);\n\n//# sourceURL=webpack://gulp-started/./src/js/module/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;