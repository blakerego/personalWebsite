var PortfolioItem = Backbone.Model.extend({
	'url' : "#",
	defaults: {
		'primary_url' : '#', 
		'title' : '[enter title]', 
		'image_url' : '#', 
		'blurb' : '[enter blurb]', 
		'primary_button_name' : '[primary button name]'
	}
});

var PortfolioItemList = Backbone.Collection.extend({
	model: PortfolioItem
})