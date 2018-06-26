var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(target){
    this.fetch();
  }, 

});

