var Form = Vue.extend({
    template: require('../template/form.html'),
    data: function (transition) {
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
