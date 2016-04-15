webpackJsonp([1],{

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	var Form = Vue.extend({
	    template: __webpack_require__(14),
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
	            this.$refs.myform.getValue();
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

/***/ 14:
/***/ function(module, exports) {

	module.exports = "<form is=\"vform\" v-ref:myform>\n    <div class=\"form-group\">\n      <label for=\"age\">下拉框</label>\n      <combo v-ref:city name=\"city\" url=\"./data/city.json\"></combo>\n    </div>\n  <div class=\"form-group\">\n    <label for=\"age\">年龄</label>\n    <input type=\"text\" class=\"form-control\" id=\"age\" placeholder=\"年龄\" v-model=\"form.age\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"name\">姓名</label>\n    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"姓名\" v-model=\"form.name\">\n  </div>\n  <div class=\"form-group\">\n      <label for=\"city\">城市</label>\n      <select name=\"city\" v-model=\"city\" class=\"form-control\">\n          <option v-for=\"option in cities\" v-bind:value=\"option.id\">\n            {{ option.name }}\n          </option>\n      </select>\n  </div>\n  <button type=\"button\" class=\"btn btn-default\" v-on:click=\"submit\">提交</button>\n</form>\n";

/***/ }

});