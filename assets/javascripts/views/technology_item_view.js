/**********************************
Single Technology Item View 
**********************************/
var TechnologyItemView = Backbone.View.extend({
  
  tagName: "li",

  template: _.template($('#technology_item_template').html()),

  initialize: function() 
  {
    _.bindAll(this); 
  },

  render: function() 
  {

    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});

