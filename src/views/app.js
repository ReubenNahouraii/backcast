var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },


  render: function() {
    // debugger;
    this.$el.html(this.template());
    new VideoListView({ el : '.list', collection : this.videos }).render();
    new VideoPlayerView({ el : '.player', collection : this.videos }).render();
    new SearchView({ el : '.search', collection : this.videos }).render();
    // this.$el.append(listView);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
