var Field = Vue.extend({
  template: "<div type='field'></div>",
  props: {
      type: {
          default: 'field'
      }
  },
  methods: {
  }
});

Vue.component('field', Field)

module.exports = Field;
