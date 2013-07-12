Docshare.Views.SharedDocuments = Backbone.View.extend({

  template: JST["documents/index"],

  initialize: function() {
    var that = this;

    var events  = ["add", "change:title", "change:body", "remove", "reset"];
    _(events).each(function(event) {
      that.listenTo(that.collection, event, that.render)
    });
  },

  render: function() {
    var content = this.template({
      documents: this.collection
    });

    this.$el.html(content);
    this.$el.find('h5').removeClass('selected')
    this.$el.find('.links a:nth-child(2)').addClass('selected')
    return this;
  }
})