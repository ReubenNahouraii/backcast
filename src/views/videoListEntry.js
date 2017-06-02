var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry': 'controlModel'

  },

  controlModel : function() {
    this.model.select();
    console.log('model being updated');
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});