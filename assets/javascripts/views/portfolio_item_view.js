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

    //$(this.el).append('<ul id="portfolio_items" class="thumbnails">');    

    if (typeof this.collection != 'undefined' )
    {

      /// Rows can only contain 3 items, otherwise there is an ugly offset on the overflow. 
      /// To get around this, only add three items at a time. 
      var items = this.collection.models;
      var totalSize = items.length; 
      var totalFullRows = Math.floor(totalSize / 3); 
      var remainderRow = totalSize % 3; 
      var fullItems = totalFullRows * 3;


      var current = 0;
      while (current < fullItems)
      {
        var rowTag = 'portfolio_items_' + current.toString(); 

        $(this.el).append('<div class="row-fluid /><ul id="'+ rowTag + '" class="thumbnails">'
          + this.getItemView(items[current++]).render().el.outerHTML   
          + this.getItemView(items[current++]).render().el.outerHTML
          + this.getItemView(items[current++]).render().el.outerHTML
          + '</ul>'
          );
      }

      /// Here we do our incomplete (less than 3) row, if it exists. 
      if (remainderRow > 0)
      {
        while( current  < current + remainderRow)
        {
          var rowTag = 'portfolio_items_' + current.toString(); 

          if (remainderRow == 2)
          {
            $(this.el).append('<div class="row-fluid /><ul id="'+ rowTag + '" class="thumbnails">'
              + this.getItemView(items[current++]).render().el.outerHTML   
              + this.getItemView(items[current++]).render().el.outerHTML
              + '</ul>'
              );
          }
          else
          {
            $(this.el).append('<div class="row-fluid /><ul id="'+ rowTag + '" class="thumbnails">'
              + this.getItemView(items[current++]).render().el.outerHTML   
              + '</ul>'
            );
          }
        }
      }
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
