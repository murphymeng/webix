webpackJsonp([3],{

/***/ 17:
/*!*****************************!*\
  !*** ./js/views/addUser.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	var $http = __webpack_require__(/*! ../vendors/rest.js */ 18);
	var grid = Vue.extend({
	    template: __webpack_require__(/*! ../template/addUser.html */ 19),
	    data: function (transition) {
	    },
	    computed: {
	
	    },
	    methods: {
	
	    },
	    route:  {
	        activate: function (transition) {
	            transition.next()
	        },
	        deactivate: function (transition) {
	            console.log('hook-example deactivated!')
	            transition.next()
	        }
	    }
	
	});
	module.exports = grid;


/***/ },

/***/ 18:
/*!****************************!*\
  !*** ./js/vendors/rest.js ***!
  \****************************/
/***/ function(module, exports) {

	module.exports = function(url) {
	    'use strict';
	    // A small example of object
	    var core = {
	      // Method that performs the ajax request
	      ajax : function (method, url, args) {
	        // Creating a promise
	        var promise = new Promise( function (resolve, reject) {
	
	          // Instantiates the XMLHttpRequesturl
	          var client = new XMLHttpRequest();
	          var uri = url;
	
	          if (args && (method === 'POST' || method === 'PUT')) {
	            uri += '?';
	            var argcount = 0;
	            for (var key in args) {
	              if (args.hasOwnProperty(key)) {
	                if (argcount++) {
	                  uri += '&';
	                }
	                uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
	              }
	            }
	          }
	
	          client.open(method, uri);
	          client.send();
	
	          client.onload = function () {
	            if (this.status >= 200 && this.status < 300) {
	              // Performs the function "resolve" when this.status is equal to 2xx
	              resolve(this.response);
	            } else {
	              // Performs the function "reject" when this.status is different than 2xx
	              reject(this.statusText);
	            }
	          };
	          client.onerror = function () {
	            reject(this.statusText);
	          };
	        });
	
	        // Return the promise
	        return promise;
	      }
	    };
	
	    // Adapter pattern
	    return {
	      'get' : function(args) {
	        return core.ajax('GET', url, args);
	      },
	      'post' : function(args) {
	        return core.ajax('POST', url, args);
	      },
	      'put' : function(args) {
	        return core.ajax('PUT', url, args);
	      },
	      'delete' : function(args) {
	        return core.ajax('DELETE', url, args);
	      }
	    };
	}


/***/ },

/***/ 19:
/*!**********************************!*\
  !*** ./js/template/addUser.html ***!
  \**********************************/
/***/ function(module, exports) {

	module.exports = "mfmf\n";

/***/ }

});
//# sourceMappingURL=3.bundle.js.map