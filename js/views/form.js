var Form = Vue.extend({
    template: require('../template/form.html'),
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
            debugger
            var a = 1;
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
