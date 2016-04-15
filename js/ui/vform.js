Vue.component('vform', {
  template: require('./template/vform.html'),
  props: [
    'url'
  ],
  activate: function(done) {
      done();
  },
  methods: {
      getValue: function() {
          var value = {};
          $.each(this.$children, function(idx, component) {
              if (component.type === 'field') {
                  value[component.name] = component.value;
              }
          })

          return value;
      }
  }
})
