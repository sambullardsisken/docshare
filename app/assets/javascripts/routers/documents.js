Docshare.Routers.Documents = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "index",
    "documents/shared": "showShared",
    "documents/new": "new",
    "documents/:id": "show",
  },

  showShared: function() {
    var that = this;

    Docshare.shared_documents.fetch({
      success: function() {
        var sharedView = new Docshare.Views.SharedDocuments({
          collection: Docshare.shared_documents
        });

        that._swapView(sharedView);
        toggle = "shared"
      }
    });
  },

  index: function() {
    var that = this;

    Docshare.documents.fetch({
      success: function() {
        var indexView = new Docshare.Views.DocumentsIndex({
          collection: Docshare.documents
        });

        that._swapView(indexView);
        toggle = "index";
      }
    });
  },

  show: function(id) {
    console.log(id)
    var doc = Docshare.documents.get(id) || Docshare.shared_documents.get(id)
    var showView = new Docshare.Views.DocumentShow({
      model: doc,
      collection: Docshare.documents
    });
    this._swapView(showView);
    toggle = "show"
  },

  new: function() {
    var newDoc = new Docshare.Models.Document();
    var formView = new Docshare.Views.DocumentForm({
      collection: Docshare.documents,
      model: newDoc
    });
    this._swapView(formView);
    toggle = "new"
  },



  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});