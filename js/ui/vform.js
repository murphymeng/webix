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
                  value[component.name] = component.get('value');
              }
          })

          $(this.$el).find('input').each(function(idx, input) {
              if (input.name && !value.hasOwnProperty(input.name)) {
                  value[input.name] = $(input).val();
              }
          });

          return value;
      }
  }
})
