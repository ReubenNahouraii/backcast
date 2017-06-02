var VideoListView = Backbone.View.extend({


  render: function() {
    this.$el.children().detach();
    // this.$el.html(this.template());
    let children = this.collection.map(video => new VideoListEntryView({ model: video}).render().$el);
    // debugger;

    this.$el.append(children);

    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
