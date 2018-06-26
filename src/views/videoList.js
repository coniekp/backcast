var VideoListView = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.render();
  },
  
  render: function() {

    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(function(video, i) { //refactor when template url changes
      var listItem = new VideoListEntryView({model: video});
      console.log(listItem);
      $(this.$el.find('h5')[i]).html(listItem.$el);
    }, this);

    return this;
  },
  

  template: templateURL('src/templates/videoList.html')

});


