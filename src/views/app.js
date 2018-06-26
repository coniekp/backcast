var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.videoPlayerView = new VideoPlayerView({collection: this.videos});
    this.videoListView = new VideoListView({collection: this.videos});
    this.searchView = new SearchView();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    this.$el.find('.search h5').html(this.searchView.$el);
    this.$el.find('.list h5').html(this.videoListView.$el);
    this.$el.find('.player h5').html(this.videoPlayerView.$el);   
    return this;
  },

  template: templateURL('src/templates/app.html')

});


