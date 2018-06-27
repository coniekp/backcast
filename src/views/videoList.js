var VideoListView = Backbone.View.extend({
  
  events: {
    'click .prev': 'playPrevious',
    'click .next': 'playNext',
    'click .loop': 'loop',
    'click .pause': 'pause'
  },
  
  initialize: function () {
    this.render();
  },
  
  playPrevious: function() {},
  playNext: function() {},
  loop: function() {},
  pause: function() {},
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(function(video, i) {
      var listItem = new VideoListEntryView({model: video});
      $(this.$el.find('h5')[i]).html(listItem.$el);
    }, this);

    return this;
  },
  
  template: templateURL('src/templates/videoList.html')

});
