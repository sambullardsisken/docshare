Docshare.Views.DocumentShow = Backbone.View.extend({
  events: {
    'click button': 'submit'
  },

  template: JST["documents/show"],

  initialize: function() {
    var that = this;

    var events = []
  },

  render: function() {
    console.log("inside render")
    console.log(this.model)
    var content = this.template({
      document: this.model
    });
    this.$el.html(content);

    return this;
  },

  submit: function(event) {
    event.preventDefault();
    id = $(event.currentTarget).attr("data-id")
    var newTitle = $("#title" + id).val()
    var newBody = $("#body" + id).val()
    var docData = {title: newTitle, body: newBody}
    console.log(docData)
    this.model.set(docData)
    console.log("after set")
    $.ajax({
      url: "/documents/" + id + ".json",
      type: "put",
      data: {document: docData},
      success: function(newDocData) {
        console.log( newDocData)
      }
    })
    // this.model.save(docData);
    console.log("after save")
    console.log(this.model)
    this.render
  }
});