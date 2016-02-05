webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// user require with a reference to bundle the file and use it in this file
	// var example = require('./example');

	// load manifests

	__webpack_require__(1);
	__webpack_require__(4);

	// attach jQuery globally
	__webpack_require__(8);
	__webpack_require__(9);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	//VARIABLES

	var turnCount = 0;

	var sq0 = undefined; // value within each cell
	var sq1 = undefined;
	var sq2 = undefined;
	var sq3 = undefined;
	var sq4 = undefined;
	var sq5 = undefined;
	var sq6 = undefined;
	var sq7 = undefined;
	var sq8 = undefined;

	//GAME MESSAGE
	function playMessage(content) {
	  $('#play').text(content);
	}

	playMessage('Play?');

	//PLACE LETTER AND SWITCH TURNS
	$('td').on('click', function () {
	  $(event.currentTarget).text('X');
	  if (turnCount % 2 === 0) {
	    $(this).text('X');
	  } else {
	    $(this).text('O');
	  }

	  turnCount++;
	});

	var xWin = false;
	var oWin = false;

	//WINNER MESSAGE
	function winMessage() {
	  if (xWin === true) {
	    playMessage('X Win!');
	  } else if (oWin === true) {
	    playMessage('O Wins!');
	  }
	}

	function whoWins() {
	  // CHECKS X
	  if (sq0 === sq1 && sq0 === sq2 && sq0 === 'X' || //first row
	  sq3 === sq4 && sq3 === sq5 && sq3 === 'X' || //second row
	  sq6 === sq7 && sq6 === sq8 && sq6 === 'X' || //third row
	  sq0 === sq3 && sq0 === sq6 && sq0 === 'X' || //first column
	  sq1 === sq4 && sq1 === sq7 && sq1 === 'X' || //second column
	  sq2 === sq5 && sq2 === sq8 && sq2 === 'X' || //third column
	  sq0 === sq4 && sq0 === sq8 && sq0 === 'X' || //diagonal 1
	  sq2 === sq4 && sq2 === sq6 && sq2 === 'X') //diagonal 2
	    {
	      return xWin === true;
	    } else {
	    //CHECKS O
	    if (sq0 === sq1 && sq0 === sq2 && sq0 === 'O' || //second row
	    sq3 === sq4 && sq3 === sq5 && sq3 === 'O' || sq6 === sq7 && sq6 === sq8 && sq6 === 'O' || //third row
	    sq0 === sq3 && sq0 === sq6 && sq0 === 'O' || //first column
	    sq1 === sq4 && sq1 === sq7 && sq1 === 'O' || //second column
	    sq2 === sq5 && sq2 === sq8 && sq2 === 'O' || //third column
	    sq0 === sq4 && sq0 === sq8 && sq0 === 'O' || //diagonal 1
	    sq2 === sq4 && sq2 === sq6 && sq2 === 'O') //diagonal 2
	      {
	        return oWin === true;
	      } else {
	      // CHECKS TIE
	      if ((sq0 === 'X' || sq0 === 'O') && (sq3 === 'X' || sq3 === 'O') && (sq6 === 'X' || sq6 === 'O') && (sq1 === 'X' || sq1 === 'O') && (sq4 === 'X' || sq4 === 'O') && (sq7 === 'X' || sq7 === 'O') && (sq2 === 'X' || sq2 === 'O') && (sq5 === 'X' || sq5 === 'O') && (sq8 === 'X' || sq8 === 'O')) {
	        playMessage('Stalemate!');
	      }
	    }
	  }
	}

	$(document).ready(function () {
	  console.log('ready!');
	});

	//TURNS OFF SQUARES SOMETIMES too much or not enough
	$('td').on('click', function () {
	  if ($('td').text() === true) {
	    //too much w != null
	    $(event.currentTarget).off('click');
	  }
	});

	//CALLS FUNCTIONS ON BOARD CLICK
	$('#board').on('click', function () {
	  whoWins();
	  winMessage();
	});

	//CLEARS BOARD
	$('#butt').on('click', function () {
	  $('td').text(' ');
	});

	module.exports = true;

	// user require with a reference to bundle the file and use it in this file
	// var example = require('./example');

	// use require without a reference to ensure a file is bundled
	__webpack_require__(3);

	// load sass manifest
	__webpack_require__(4);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "html {\n  height: 100%; }\n\nbody {\n  background-color: #000000;\n  color: #ccf444;\n  height: 100%; }\n\nh1 {\n  color: #ccf444;\n  text-align: center;\n  font-family: 'Press Start 2P', cursive;\n  font-size: 3em;\n  background: #000000; }\n\np {\n  color: #0000ff;\n  text-align: right;\n  font-family: 'Press Start 2P', cursive;\n  font-size: 17px; }\n\n.box {\n  display: flex;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  background: #000000; }\n\n.column1 {\n  float: left;\n  margin: 0 auto;\n  width: 30%;\n  color: #ccf444;\n  text-align: center;\n  background-color: #000000; }\n\n.column2 {\n  float: left;\n  margin: 0 auto;\n  width: 40%;\n  background-color: #000000; }\n\n.column3 {\n  float: left;\n  margin: 0 auto;\n  width: 30%;\n  background-color: #000000; }\n\nfooter {\n  position: absolute;\n  left: 0px;\n  bottom: 0px;\n  height: 20px;\n  width: 100%;\n  color: #0000ff;\n  text-size: 16px;\n  background-color: #000000; }\n\nform {\n  height: 20px;\n  font-family: sans-serif;\n  font-size: 15px;\n  color: #0000ff;\n  background-color: #000000;\n  display: inline-block; }\n\n#form {\n  color: #0000ff;\n  font-family: sans-serif;\n  font-size: 15px; }\n\n#play {\n  color: #ccf444;\n  text-align: center;\n  font-family: 'Press Start 2P', cursive;\n  font-size: 2em; }\n\n#board {\n  color: #ccf444;\n  font-family: 'Press Start 2P', cursive;\n  font-size: 70px;\n  text-align: center;\n  border: 1px;\n  position: relative;\n  margin: auto;\n  height: 500px;\n  width: 500px;\n  background-image: url(\"http://i.imgur.com/oHDcoDZ.jpg\"); }\n\n.row1 {\n  top: 0px;\n  height: 33.3333%;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0); }\n\n.row2 {\n  clear: both;\n  height: 33.3333%;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0); }\n\n.row3 {\n  clear: both;\n  height: 33.3333%;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0); }\n\n#sq0 {\n  width: 33.3333%;\n  height: 33.3333%;\n  background-color: rgba(255, 255, 255, 0); }\n\n#sq1 {\n  width: 33.3333%;\n  height: 33.3333%;\n  background-color: rgba(255, 255, 255, 0); }\n\n#sq2 {\n  width: 33.3333%;\n  height: 33.3333%;\n  background-color: rgba(255, 255, 255, 0); }\n\n#sq3 {\n  width: 33.3333%;\n  height: 33.3333%;\n  background-color: rgba(255, 255, 255, 0); }\n\n#sq4 {\n  width: 33.3333%;\n  height: 33.3333%;\n  background-color: rgba(255, 255, 255, 0); }\n\n#sq5 {\n  width: 33.3333%;\n  height: 33.3333%;\n  background-color: rgba(255, 255, 255, 0); }\n\n#sq6 {\n  width: 33.3333%;\n  height: 33.3333%;\n  background-color: rgba(255, 255, 255, 0); }\n\n#sq7 {\n  width: 33.3333%;\n  height: 33.3333%;\n  background-color: rgba(255, 255, 255, 0); }\n\n#sq8 {\n  width: 33.3333%;\n  height: 33.3333%;\n  background-color: rgba(255, 255, 255, 0); }\n\n@media (max-width: 500px) {\n  .board {\n    background-image: url(\"http://i.imgur.com/OI1rBFn.jpg\"); } }\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQuery"] = __webpack_require__(2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
]);