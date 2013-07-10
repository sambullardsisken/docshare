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
    var newTitle = $("#title" + id).val()
    console.log(newTitle)
    var newBody = $("#body" + id).val()
    var docData = {title: newTitle, body: newBody}
    this.model.set(docData)
    if (this.model.isNew()) {
      this.model.save(docData, {success: function() {
        console.log("usnhift")
      }
      });

    }
   else {
     this.model.save(docData);
   }
   this.render
  }
});