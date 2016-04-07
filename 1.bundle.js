webpackJsonp([1],{

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./ui/combo\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Form = Vue.extend({
	    template: __webpack_require__(8),
	    data: function (transition) {
	        return {
	            cities: [{
	                id: 1,
	                name: '上海'
	            }, {
	                id: 2,
	                name: '北京'
	            }]
	        }
	    },
	    computed: {

	    },
	    methods: {
	        submit: function() {
	        }
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
	module.exports = Form;


/***/ },

/***/ 8:
/***/ function(module, exports) {

	module.exports = "<form>\n    <div class=\"form-group\">\n      <label for=\"age\">combo</label>\n      <combo></combo>\n    </div>\n  <div class=\"form-group\">\n    <label for=\"age\">年龄</label>\n    <input type=\"text\" class=\"form-control\" id=\"age\" placeholder=\"年龄\" v-model=\"form.age\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"name\">姓名</label>\n    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"姓名\" v-model=\"form.name\">\n  </div>\n  <div class=\"form-group\">\n      <label for=\"city\">城市</label>\n      <select name=\"city\" v-model=\"city\" class=\"form-control\">\n          <option v-for=\"option in cities\" v-bind:value=\"option.id\">\n            {{ option.name }}\n          </option>\n      </select>\n  </div>\n  <button type=\"button\" class=\"btn btn-default\" v-on:click=\"submit\">提交</button>\n</form>\n";

/***/ }

});