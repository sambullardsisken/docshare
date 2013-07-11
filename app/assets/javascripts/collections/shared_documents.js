Docshare.Collections.SharedDocuments = Backbone.Collection.extend({
  model: Docshare.Models.Document,
  url: "documents/shared",
  comparator: function(document) {
    return -Number(new Date(document.get("updated_at")))
  }
})