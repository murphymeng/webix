var Combo = Vue.extend({
  template: require('./template/combo.html'),
    props: [
    'url'
  ],
  activate: function(done) {
      this.$http({url: this.url, method: 'GET'}).then(function (response) {
            this.$set('items', response.data);

      }, function (response) {
            // error callback
      });
      done();
  },
  methods: {
      mf: function() {
          this.$data.items.push({
              id: "aaa",
              name: '纽约'
          })
      }
  }
})

// register
Vue.component('combo', Combo)
