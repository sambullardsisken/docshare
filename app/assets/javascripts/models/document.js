Docshare.Models.Document = Backbone.Model.extend({
  parse: function(response) {
    response.sharing_users = new Docshare.Collections.Users(response.sharing_users)
    response.creator = new Docshare.Collections.Users(response.creator)
    // this.sharing_users = response.sharing_users
    return response;
  }
});