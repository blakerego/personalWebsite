/**********************************
Single Portfolio Item View 
**********************************/
var PortfolioItemView = Backbone.View.extend({
  
  tagName: "li",

  className: "span3",

  template: _.template($('#portfolio_item_template').html()),

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



/**********************************
List View
**********************************/
var PortfolioItemListView = Backbone.View.extend({    

  el: $('#portfolio_items'), // attaches `this.el` to an existing element.

  initialize: function()
  {
    _.bindAll(this); 
    this.el = $('#portfolio_items'); //this shouldn't be necessary.
  },

  render: function()
  {
    $(this.el).append('<div class="row-fluid"><ul id="thumbnails" class="thumbnails">');
    $(this.el).append('</ul></div>')

    if (typeof this.collection != 'undefined' )
    {
      _(this.collection.models).each(function(item){
        this.appendItem(item);
      }, this);
    }
  },

  count: 0,

  appendItem: function(item) 
  {
    this.count++; 

    if (this.count%3 == 1 && this.count != 1)
    {
      var c = "span3";
    } 
    else 
    {
      var c = "span3 offset1"; 
    }


    var itemView = new PortfolioItemView({
      model: item, 
      className: c
    });

    itemView.render(); 
    $('#thumbnails', this.el).append(itemView.render().el);
  }

});
