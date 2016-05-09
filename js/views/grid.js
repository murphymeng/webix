var grid = Vue.extend({
    template: require('../template/grid.html'),
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
            totalCount: 30,
            pageCount: 3,
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
