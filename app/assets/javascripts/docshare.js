window.Docshare = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Docshare.documents = new Docshare.Collections.Documents();
    Docshare.shared_documents = new Docshare.Collections.SharedDocuments();

    new Docshare.Routers.Documents({
      "$rootEl": $("#content")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Docshare.initialize()
});
