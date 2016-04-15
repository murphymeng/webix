var Field = require('./field');
var Combo = Field.extend({
  template: require('./template/combo.html'),
  props: [
    'name',
    'url',
    'clicky'
  ],
  activate: function(done) {
      this.$set('showList', false);
      this.$set('value', null);
      this.$http({url: this.url, method: 'GET'}).then(function (response) {
            this.$set('items', response.data);
            this.$set('showItems', response.data);

      }, function (response) {
            // error callback
      });
      done();
      $(this.$el.parentNode).mousedown(function(e) {
        // The latest element clicked
          self.clicky = $(e.target);
      });
  },
  methods: {
      set: function(field, value) {
          field = field.charAt(0).toUpperCase() + field.slice(1);
          return this['set' + field](value);
      },
      get: function(field) {
          field = field.charAt(0).toUpperCase() + field.slice(1);
          return this['get' + field]();
      },
      setValue: function(value) {
          var selectedItems = this.items.filter(function(item) {
              return item.id === value;
          });
          this.selectedItem = selectedItems[0];
      },
      setDisplayedValue: function(desc) {
          var selectedItems = this.items.filter(function(item) {
              return item.name === desc;
          });
          this.$set('selectedItem', selectedItems[0]);
      },
      getValue: function() {
          return this.selectedItem.id;
      },
      getDisplayedValue: function() {
          return this.selectedItem.name;
      },
      getSelectedItem: function() {
           return this.selectedItem;
      },
      toggleList: function() {
          if (!this.$data.showList) {
               this.showItems = this.items;
          }
          this.$data.showList = !this.$data.showList;
      },
      setItem: function(item) {
          var self = this;
          self.toggleList();
          self.selectedItem = item;
      },
      change: function(value) {
          var self = this;
          self.showItems = self.items.filter(function(item) {
              return item.name.indexOf(value) >= 0;
          })
      },
      onBlur: function(e) {
          if (!self.clicky.hasClass('webix_input_icon') && !self.clicky.hasClass('webix_list_item')) {
              this.$data.showList = false;
          }
      },
      onArrowClick: function() {
          $(this.$el.parentNode).find('input').focus();
          this.toggleList();
      },
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
