window.Docshare = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Docshare.documents = new Docshare.Collections.Documents();
    Docshare.shared_documents = new Docshare.Collections.SharedDocuments();

  Docshare.router = new Docshare.Routers.Documents({
      "$rootEl": $("#content")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Docshare.initialize()
  setInterval(function() {
    if (toggle === "shared") {
      Docshare.shared_documents.fetch({
        success: function() {
          var sharedView = new Docshare.Views.SharedDocuments({
            collection: Docshare.shared_documents
          });
           Docshare.router.$rootEl.html(sharedView.render().$el)
        }
      });
    }

    // Docshare.shared_documents.sync("/documents/shared")
  }, 1 * 1000);
});
