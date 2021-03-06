var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', this.render, this);
  },

  render: function(video) {

    console.log('rendering a video');
    // this.$el.html(this.template());
    if(video) {
      this.$el.html(this.template(video.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }

    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
