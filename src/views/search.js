var SearchView = Backbone.View.extend({
  events: {
    'click .btn': 'search',
    'keypress': 'checkPressedKey'
  },
  
  initialize: function () {
    this.render();
  },
  
  checkPressedKey: function(event) {
    if (event.key === 'Enter') {
      this.search();
    }
  },
  
  search: function() {
    var target = $('.form-control');
    this.collection.search(target.val());
    target.val('');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
