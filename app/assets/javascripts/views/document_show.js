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
    var content = this.template({
      document: this.model
    });
    this.$el.html(content);

    return this;
  },

  submit: function(event) {
    event.preventDefault();
    id = $(event.currentTarget).attr("data-id")
    var newTitle = $("#title" + id).text()
    var newBody = $("#body" + id).text()
    var docData = {title: newTitle, body: newBody}
    this.model.set(docData)
    if (this.model.isNew()) {
      this.collection.create(this.model)
    }
   else {
     this.model.save(docData);
   }
   this.render
  }
});