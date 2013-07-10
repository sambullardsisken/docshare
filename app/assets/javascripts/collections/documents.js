Docshare.Collections.Documents = Backbone.Collection.extend({
  model: Docshare.Models.Document,
  url: "/documents",
  comparator: function(document) {
    return -Number(new Date(document.get("updated_at")))
    // return document.get("updated_at")
  }
})