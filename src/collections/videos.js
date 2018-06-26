var Videos = Backbone.Collection.extend({
  initialize: function(data) {
    this.on('all', this.parse());
  },

  model: Video,
  
  // sync: function(){
  //   this.model = Video;
  // },
  

  
  search: function(target){
    this.fetch();
  }, 
  

  
  // parse: function(data){
  //   // this.set(kind) = data.items.kind;
  //   // this.set(etag) = data.etag;
  //   // this.set(id) = data.id;
  //   // this.set(snippet) = data.snippet;
  //   return data.items.map(function(item){
  //     this.set(item) = data.items[item];
  //   });
  //}

});

