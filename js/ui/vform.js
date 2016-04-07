Vue.component('vform', {
  template: require('./template/vform.html'),
  props: [
    'url'
  ],
  activate: function(done) {
      done();
  },
  methods: {
      getValues: function() {
          
      }
  }
})
