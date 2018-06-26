var VideoListEntryView = Backbone.View.extend({
  
  initialize: function(){
    this.on('click', this.model.select());
    this.render();

  },

  render: function() {

    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
