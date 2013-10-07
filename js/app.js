$(function() {
  
  var myApp = myApp || {};

  myApp.Model = Backbone.Model.extend({
  });

  myApp.Collection = Backbone.Collection.extend({
     model: myApp.Model
  });

  myApp.AppView = Backbone.View.extend({
    el: '#messageContainer',
    initialize: function() {
      this.model = new myApp.Model({
        welcomeMessage: 'Welcome to your 3b page. Enjoy building.'
      });
      this.collection = new myApp.Collection();
      this.template = Handlebars.compile($('#messageTemplate').html());
    },
    render: function() {
      $(this.el).html(this.template(this));
    }
  });

  myApp.app = new myApp.AppView();
  myApp.app.render();
});