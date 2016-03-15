var grid = Vue.extend({
    template: require('../template/grid.html'),
    data: function (transition) {
        var self = this;
        return {
            items: []
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
            transition.next()
        },
        deactivate: function (transition) {
            console.log('hook-example deactivated!')
            transition.next()
        }
    }

});
module.exports = grid;
