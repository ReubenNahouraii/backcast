var VideoListView = Backbone.View.extend({
  
  el : '.list',

  initialize: function() {
    this.collection.on('all', this.render, this);
    /* Backbone events bubble up through collections,
     * so monitoring a model in a collection is easy! */
    // this.collection.on('change:votes', this.render, this);
    // this.render();
  },

  render: function() {
    this.$el.children().detach();
    // this.$el.html(this.template());
    let children = this.collection.map(video => new VideoListEntryView({ model: video}).render().$el);
    // debugger;

    this.$el.append(children);

    return this;
  },

  // template: templateURL('src/templates/videoList.html')

});
