/**********************************
Single Portfolio Item View 
**********************************/
var PortfolioItemView = Backbone.View.extend({
  
  tagName: "li",

  className: "span3 offset1",

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

  el: $('#portfolio_item_placeholder'), // attaches `this.el` to an existing element.

  initialize: function()
  {
    _.bindAll(this); 
  },

  render: function()
  {

    $(this.el).append('<ul id="portfolio_items" class="thumbnails">');    


    if (typeof this.collection != 'undefined' )
    {



      /// Rows can only contain 3 items, otherwise there is an ugly offset on the overflow. 
      /// To get around this, only add three items at a time. 
      var items = this.collection.models;
      var totalSize = items.length; 
      var totalFullRows = totalSize / 3; 
      var remainderRow = totalSize % 3; 
      var fullItems = totalFullRows * 3;


      alert(
        this.getItemView(items[0]).render().$el.html()
        );
      //$('#portfolio_items', this.el).append(this.getItemView(items[0]).render() );   


      var current = 0;
      while (current < fullItems)
      {
        $('#portfolio_items')
            .append(this.getItemView(items[current++]).render().$el.html())   
            .append(this.getItemView(items[current++]).render().$el.html())
            .append(this.getItemView(items[current++]).render().$el.html())
            .wrap('<div class="row-fluid />');
      }


      // _(this.collection.models).each(function(item){
      //   this.appendItem(item);
      // }, this);
    }

    $(this.el).append('</ul>');

  },

  getItemView: function(item)
  {
    return new PortfolioItemView({
      model: item, 
    });
  },

  appendItem: function(item) 
  {
    var itemView = new PortfolioItemView({
      model: item, 
    });

    itemView.render(); 
    $('#portfolio_items', this.el).append(itemView.render().el);

  }

});
