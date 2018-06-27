var Videos = Backbone.Collection.extend({
  
  model: Video,
  
  url: 'https://www.googleapis.com/youtube/v3/search',  
  
  initialize: function() {
    if (!this.length) {
      this.search('cats');
    }
  },

  parse: function(response) {
    return response.items; 
  }, 
  
  search: function(target) {
    var data = {
      maxResults: '5',
      q: target,
      type: 'video',
      key: window.YOUTUBE_API_KEY,
      part: 'snippet',
      videoEmbeddable: 'true'
    };
    
    this.fetch({data: data});
  }
  
});
