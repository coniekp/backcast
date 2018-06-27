var VideoListEntryView = Backbone.View.extend({
  
  events: {
    'click': 'handleClick'
  },

  initialize: function() {
    this.render();
  },
  
  handleClick: function() {
    this.model.select();
  },
  
  render: function() {
    var info = this.model.get('snippet');

    this.$el.html(this.template());
    
    //Changing template's default values
    this.$el.find('img').attr('src', info.thumbnails.default.url);
    this.$el.find('.video-list-entry-title').text(info.title);
    this.$el.find('.video-list-entry-detail').text(info.description); 
       
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
