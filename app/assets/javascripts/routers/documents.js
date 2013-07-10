Docshare.Routers.Documents = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
    "documents/new": "new",
    "documents/:id": "show",
  },

  index: function() {
    var that = this;

    Docshare.documents.fetch({
      success: function() {
        var indexView = new Docshare.Views.DocumentsIndex({
          collection: Docshare.documents
        });

        that._swapView(indexView);
      }
    });
  },

  show: function(id) {
    var doc = Docshare.documents.get(id);
    var showView = new Docshare.Views.DocumentShow({
      model: doc,
      collection: Docshare.documents
    });
    this._swapView(showView);
  },

  new: function() {
    var newDoc = new Docshare.Models.Document();
    var formView = new Docshare.Views.DocumentForm({
      collection: Docshare.documents,
      model: newDoc
    });
    this._swapView(formView);
  },



  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});