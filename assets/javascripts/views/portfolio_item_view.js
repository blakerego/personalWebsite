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

    return this; // for chainable calls, like .render().el
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

    //$(this.el).html(this.template(this.model.toJSON()));
    //this.$el.toggleClass('done', this.model.get('done'));

    if (typeof this.collection != 'undefined' )
    {
      _(this.collection.models).each(function(item){
        this.appendItem(item);
      }, this);
    }
  },

  appendItem: function(item) 
  {
    //alert();
    var itemView = new PortfolioItemView({
      model: item
    });
    //itemView.render();
    itemView.render(); 
    //alert(itemView.render().el);
    $('#thumbnails', this.el).append(itemView.render().el);
  }

});
