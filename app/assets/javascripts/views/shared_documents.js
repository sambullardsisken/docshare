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
    console.log("rendering shared docs");
    console.log(this.collection)
    var content = this.template({
      documents: this.collection
    });

    this.$el.html(content);

    return this;
  }
})