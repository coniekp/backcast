var VideoListView = Backbone.View.extend({
  initialize: function (){
    this.collection.on('change', this.render);
  },
  render: function() {

    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(function(video){ //refactor when template url changes
      var listItem = new VideoListEntryView({model: video});
      this.$el.append(listItem);
    }, this);

    return this;
  },
  
  renderVideo: function (video) {
    var videoEntryView = new VideoListEntryView({model: video});
    this.$el.append(videoEntryView.render());
  },
  

  template: templateURL('src/templates/videoList.html')

});


