webpackJsonp([2],{

/***/ 15:
/*!**************************!*\
  !*** ./js/views/grid.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	var grid = Vue.extend({
	    template: __webpack_require__(/*! ../template/grid.html */ 16),
	    data: function (transition) {
	        var self = this;
	        var columns = [{
	            field: 'id',
	            name: 'id'
	        }, {
	            field: 'name',
	            name: '姓名'
	        }, {
	            field: 'age',
	            name: '年龄'
	        }];
	        var sortOrders = {}
	        columns.forEach(function (item) {
	            sortOrders[item.field] = 1
	        });
	        return {
	            filterKey: '',
	            columns: columns,
	            items: [],
	            sortOrders: sortOrders,
	            sortKey: ''
	        }
	    },
	    computed: {
	        allCheck: {
	            get: function () {
	                return false;
	            },
	            set: function (value) {
	
	                this.items.forEach(function (item) {
	                    item.checked = value;
	                });
	            }
	        }
	    },
	    methods: {
	        sortBy: function(key) {
	            this.sortKey = key;
	            this.sortOrders[key] = this.sortOrders[key] * -1;
	        },
	        removeUsers: function () {
	            this.items = this.items.filter(function (item) {
	                return !item.checked;
	            })
	        },
	        removeUser: function (item) {
	            this.items.$remove(item);
	        },
	        addUser: function () {
	            $('#exampleModal').modal();
	        },
	        editUser: function (item) {
	            console.log('edit');
	            this.username = item.name
	            $('#exampleModal').modal();
	        },
	        saveUser: function () {
	            this.items.push({
	                id: 4,
	                name: this.username
	            });
	            $('#exampleModal').modal('hide');
	        }
	    },
	    route:  {
	        activate: function (transition) {
	            var self = this;
	            console.log('hook-example activated!')
	
	            this.$http({url: './data/user.json', method: 'GET'}).then(function (response) {
	                  self.items = response.data;
	            }, function (response) {
	                  // error callback
	            });
	
	            this.columns.forEach(function (key) {
	              self.sortOrders[key] = 1
	          });
	
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

/***/ 16:
/*!*******************************!*\
  !*** ./js/template/grid.html ***!
  \*******************************/
/***/ function(module, exports) {

	module.exports = "\n<div draggable=\"true\"></div>\n<div id=\"grid\">\n    <button id=\"add\" type=\"button\" name=\"button\"  class=\"btn btn-default\"><a v-link=\"{ path: '/addUser' }\">添加用户</a></button>\n    <button id=\"add\" type=\"button\" name=\"button\" v-on:click=\"addUser\" class=\"btn btn-default\">添加用户弹窗</button>\n    <button id=\"remove\" type=\"button\" name=\"button\" v-on:click=\"removeUsers\" class=\"btn btn-default\">删除用户</button>\n    <br /><br />\n    搜索 <input name=\"query\" v-model=\"filterKey\">\n    <br /><br />\n    <table class=\"table table-bordered table-striped\">\n        <tr>\n            <th><input v-model=\"allCheck\" type=\"checkbox\" /></th>\n            <template v-for=\"item in columns\">\n                <th v-on:click=\"sortBy(item.field)\">{{item.name}}<span class=\"arrow\"\n                    :class=\"sortOrders[item.field] > 0 ? 'asc' : 'dsc'\"></span>\n                </th>\n            </template>\n            <!-- <th><input v-model=\"allCheck\" type=\"checkbox\" /></th>\n            <th><div v-on:click=\"sort\" class=\"webix_hcell\" style=\"position: relative;\">idAA<div class=\"webix_ss_sort_asc\"></div></div></th>\n            <th>name</th>\n            <th>age</th>\n            <th></th> -->\n        </tr>\n        <tr draggable=\"true\" v-for=\"item in items | orderBy sortKey sortOrders[sortKey] | filterBy filterKey 'name'\">\n            <td><input type=\"checkbox\" v-model=\"item.checked\" /></td>\n            <td>{{item.id}}</td>\n            <td><a v-on:click=\"editUser(item)\" style=\"cursor:pointer\">{{item.name}} </a></td>\n            <td>{{item.age}}</td>\n        </tr>\n    </table>\n\n    <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                    <h4 class=\"modal-title\" id=\"exampleModalLabel\">添加新用户</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <form>\n                        <div class=\"form-group\">\n                            <label for=\"recipient-name\" class=\"control-label\">姓名:</label>\n                            <input v-model=\"username\" type=\"text\" class=\"form-control\" id=\"recipient-name\">\n                        </div>\n                    </form>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">关闭</button>\n                    <button v-on:click=\"saveUser\" type=\"button\" class=\"btn btn-primary\">保存</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }

});
//# sourceMappingURL=2.bundle.js.map