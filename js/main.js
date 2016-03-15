window.jQuery = window.$ = require('./vendors/jquery.js');
window.Vue = require('./vendors/vue.js');
require('./vendors/bootstrap.js');
Vue.use(require('./vendors/vue-resource'));
window.VueRouter = require('./vendors/vue-router.js');

$(document).ready(function() {
    // var Foo = Vue.component('foo', function(resolve, reject) {
    //     require(['./b.js'], resolve)
    // });

    var Bar = Vue.extend({
        template: '<p>This is bar!</p>'
    });

    var App = Vue.extend({})

// create a router instance
// you can pass in additional options here, but
// let's keep it simple for now.
    var router = new VueRouter()

// define some routes.
// each route should map to a component.
// we'll talk about nested routes later.
    router.map({
        '/form': {
            component: function(resolve) {
                require(['./views/form'], function(form) {
                    resolve(form);
                })
            }
        },
        '/grid': {
            component: function (resolve) {
                require(['./views/grid'], function(grid) {
                    resolve(grid);
                })
            }
        },
        '/addUser': {
            component: function (resolve) {
                require(['./views/addUser'], function(grid) {
                    resolve(grid);
                })
            }
        },
        '/bar': {
            component: Bar
        }
    })

// now we can start the app!
// router will create an instance of App and mount to
// the element matching the selector #app.
    router.start(App, '#app')
})
