var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videoPlayerView = new VideoPlayerView();
    this.videoListView = new VideoListView({collection: this.collection});
    //this.searchView = new SearchView();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    this.$el.find('.list').append(this.videoListView.render());
    this.$el.find('.player').append(this.videoPlayerView);   
    return this;
  },

  template: templateURL('src/templates/app.html')

});


