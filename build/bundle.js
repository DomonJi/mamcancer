/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var dpr = window.devicePixelRatio || 1;
	var width = document.documentElement.clientWidth * dpr;
	var height = document.documentElement.clientHeight * dpr;
	var $ = __webpack_require__(1);
	// require('./rem.js');
	__webpack_require__(2);
	var $videoa = $('#videoa');
	var ua = navigator.userAgent.toLowerCase();
	if (/iphone|ipad|ipod/.test(ua)) {
	  var $vide = $('#video');
	  var video = document.getElementById('video');
	  $videoa.remove();
	} else {
	  $('#video').remove();
	  var $video = $('#videoa');
	  var video = document.getElementById('videoa');
	}
	window.onload = function () {
	  document.body.style.display = 'block';
	  var audio = document.getElementById('audio');
	  // let $video = $('#video')
	  var w = width / 640.0;
	  var h = height / 1045.0;
	  var $img = $('.img');
	  // if (/iphone|ipad|ipod/.test(ua)) {
	  //   $video.attr('src', '../assets/source3.mp4');
	  //   audio.play()
	  //   video.play()
	  // } else {}
	  // video.play();
	  // setTimeout(function() {
	  //     setInterval(function() {
	  //         if (audio.volume > 0.06)
	  //             audio.volume -= 0.02;
	  //     }, 100);
	  // }, 46000);
	  video.addEventListener('ended', function (e) {
	    setTimeout(function () {
	      $img.show();
	      $video.remove();
	      if (/iphone|ipad|ipod/.test(ua)) {} else {
	        audio.play();
	      }
	      // window.location.href = "http://woman.disoul.me";
	      // document.getElementById('btn').style.opacity = 1;
	    }, 400);
	  });
	  video.addEventListener('timeupdate', function (e) {
	    if (e.target.currentTime > 40) {
	      // window.location.href = "http://woman.disoul.me";
	      $img.show();
	      $video.remove();
	    }
	  });
	  if (/iphone|ipad|ipod/.test(ua)) {
	    audio.play();
	  }
	  video.play();
	  setTimeout(function () {
	    scaleToFill(video);
	  }, 10);
	};

	function check() {
	  if ($video.currentTime >= 42) {
	    // window.location.href = "http://woman.disoul.me";
	  }
	  requestAnimationFrame(check);
	}

	function scaleToFill(videoTag) {
	  var $video = $(videoTag),
	      videoRatio = videoTag.videoWidth / videoTag.videoHeight,
	      tagRatio = $video.width() / $video.height();
	  if (videoRatio < tagRatio) {
	    $video.css('-webkit-transform', 'scaleX(' + tagRatio / videoRatio + ')');
	  } else if (tagRatio < videoRatio) {
	    $video.css('-webkit-transform', 'scaleY(' + videoRatio / tagRatio + ')');
	  }
	}
	requestAnimationFrame(check);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.1.1",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Simple selector that can be filtered directly, removing non-Elements
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter( qualifier, elements );
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}

				if ( button & 2 ) {
					return 3;
				}

				if ( button & 4 ) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i,
			val = 0;

		// If we already have the right measurement, avoid augmentation
		if ( extra === ( isBorderBox ? "border" : "content" ) ) {
			i = 4;

		// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnothtmlwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnothtmlwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( jQuery.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win, rect, doc,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;

				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}

			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.parseJSON = JSON.parse;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}





	return jQuery;
	} );


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./index.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*\n * index.css\n * Copyright (C) 2016 disoul\n *\n */\n\n* {\n    box-sizing: border-box;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    -webkit-touch-callout: none;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n    overflow: hidden;\n    position: relative;\n}\n\n#main {\n    position: absolute;\n    top: 0;\n    left: calc(50% - 320px);\n}\n\n\n/*\n.btn {\n    background-image: url('../assets/btn.png');\n    background-repeat: no-repeat;\n    transition: opacity ease 1s;\n    position: absolute;\n    bottom: 1.5rem;\n    left: 1rem;\n    width: 3rem;\n    height: 1rem;\n    background-size: 100% 100%;\n    cursor: pointer;\n    z-index: 100;\n}*/\n\n.music {\n    width: 0.8rem;\n    height: 0.8rem;\n    background-image: url(" + __webpack_require__(5) + ");\n    background-size: cover;\n    position: absolute;\n    top: 0.7rem;\n    left: 0.7rem;\n    z-index: 100;\n}\n\n.music.close {\n    background-image: url(" + __webpack_require__(6) + ");\n}\n\n#app {}\n\n#video {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n#videoa {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.img {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-image: url(" + __webpack_require__(7) + ");\n    background-position: center;\n    background-size: cover;\n    z-index: 1;\n    display: none;\n}\n\n#btn {\n    /*text-align: center;*/\n}\n\n#btn img {\n    display: block;\n    width: 25%;\n    margin: auto auto;\n    cursor: pointer;\n    z-index: 10;\n    margin-top: 90%;\n}\n", ""]);

	// exports


/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 8 */
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


/***/ }
/******/ ]);