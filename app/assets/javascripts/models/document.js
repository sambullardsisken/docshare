Docshare.Models.Document = Backbone.Model.extend({
  parse: function(response) {
    response.sharing_users = new Docshare.Collections.Users(response.sharing_users)
    console.log(response.sharing_users)
    this.sharing_users = response.sharing_users
    return response;
  }
});