var VideoPlayerView = Backbone.View.extend({
  
  initialize: function (){
    this.listenTo(this.collection, 'select', this.selectVideo);
    this.model  = this.collection.at(0);
    this.render();
  },
  
  
  selectVideo: function (selected) {
    this.model = selected || this.model;
    this.render();
  },

  render: function() {
    if(!this.model){
      this.$el.html('<div class="loading">Please wait...</div>');
    } else {
      var url = 'https://www.youtube.com/embed/' + this.model.get('id');
      var info = this.model.get('snippet');
      
      this.$el.html(this.template());
      
      //Changing template's default values
      this.$el.find('iframe').attr('src', url);
      this.$el.find('h3').html(info.title);
      this.$el.find('.video-player-details div').html(info.description);

      //{snippet: this.model.attributes.snippet}
    }
    
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
