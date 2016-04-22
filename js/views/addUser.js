var $http = require('../vendors/rest.js');
var grid = Vue.extend({
    template: require('../template/addUser.html'),
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
