App.Post.View = Backbone.View.extend({
  initialize:function(options){
    $("#submit").on("click", this.post);
  },

  tagName: "ul",

  post: function(event){
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var number = $("#number").val();
    var twitter = $("#twitter").val();
    var linkedin = $("#linkedin").val();
    var model = new App.Post.Model();
    model.save({"name" : name, "email" : email, "number" : number, "Twitter" : twitter, "LinkedIn" : linkedin}).then(
      function(){ App.collection.fetch().then(function(){$("section").html(App.view.render().$el);});}
    );
  },

  template: _.template($("#collection").html()),

  render: function(){
    this.$el.html(this.template({users : this.collection.toJSON()}));
    return this;
  }

});

App.collection = new App.Post.Collection();
App.collection.fetch().then(function(){
App.view = new App.Post.View({collection : App.collection});
  $("section").html(App.view.render().$el);
});
