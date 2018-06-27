var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.listenTo(this.videos, 'sync', this.render);
  },

  render: function() {
    this.videoPlayerView = new VideoPlayerView({collection: this.videos});
    this.videoListView = new VideoListView({collection: this.videos});
    this.searchView = new SearchView({collection: this.videos});
    this.$el.html(this.template());
    this.$el.find('.search').html(this.searchView.$el);
    this.$el.find('.list').html(this.videoListView.$el);
    this.$el.find('.player').html(this.videoPlayerView.$el);   
    return this;
  },

  template: templateURL('src/templates/app.html')

});
