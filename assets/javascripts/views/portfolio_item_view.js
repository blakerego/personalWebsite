/**********************************
Item View 
**********************************/
var PortfolioItemView = Backbone.View.extend({
  el: $('#thumbnails'), // name of (orphan) root tag in this.el. 
  initialize: function() 
  {
    _.bindAll(this); 
  },

  render: function() 
  {

    var primary_url = this.model.get('primary_url'); 
    var secondary_url = this.model.get('secondary_url');
    var secondary_button_name = this.model.get('secondary_button_name'); 


    var appendText = (typeof secondary_url != 'undefined' && typeof secondary_button_name != 'undefined') 
        ? '<a href="' + secondary_url + '" class="btn">' + secondary_button_name + '</a>' 
        : ''

    $(this.el).html('<li class="span3"><a class="thumbnail" href="' 
      + primary_url + '"><img src="' + this.model.get('image_url') + '"></a><div class="caption"><h3>' 
      + this.model.get('title') + '</h3><p>' + this.model.get('blurb') + '</p><a href="'+ primary_url 
      + '" class="btn btn-primary">' + this.model.get('primary_button_name') + '</a>' 
      + appendText
      + '</p></div></li>'
      );

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
    alert(itemView.render().el);
    $('#thumbnails', this.el).append(itemView.render().el);
  }

});
