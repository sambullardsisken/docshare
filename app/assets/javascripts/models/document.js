Docshare.Models.Document = Backbone.Model.extend({
  parse: function(response) {
    response.sharing_users = new Docshare.Collections.Users(response.sharing_users)
    response.creator = new Docshare.Collections.Users(response.creator)
    return response;
  }
});