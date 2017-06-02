var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry': 'controlModel'

  },

  controlModel : function() {
    // debugger;
    this.model.select();
    console.log('model being updatd');
  },

  render: function() {
    // debugger;
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});