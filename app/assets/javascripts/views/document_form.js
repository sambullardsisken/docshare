Docshare.Views.DocumentForm = Backbone.View.extend({
  events: {
    'click input[type="submit"]': 'submit'
  },

  template: JST["documents/form"],

  render: function() {
    var content = this.template({});
    this.$el.html(content)
    return this
  },

  submit: function(event) {
    event.preventDefault();
    id = $(event.currentTarget).attr("data-id")
    var newTitle = $(".title").val()
    console.log(newTitle)
    var newBody = $(".body").val()
    var docData = {title: newTitle, body: newBody}
    console.log(docData)
    this.model.set(docData)
    if (this.model.isNew()) {
      this.collection.create(this.model)
      this.collection.sort
    }
   else {
     this.model.save(docData);
   }
  }
});