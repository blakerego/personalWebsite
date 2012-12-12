// var spork = new PortfolioItem(
// {
// 	'primary_url' : 'http://www.sporkmap.com',
// 	'title' : 'Spork', 
// 	'image_url' : 'assets/images/spork_300x200_thumb.png',
// 	'blurb' : 'Spork is a web application that serves as an online food truck ordering system.  ',
// 	'primary_button_name' : 'View',
// 	'secondary_url' : 'https://github.com/blakerego/sporkMaps', 
// 	'secondary_button_name' : 'Source Code'
// });
// var sporkView = new PortfolioItemView({
// 	model : spork
// });
// sporkView.render();


var allItems = new PortfolioItemList(
	[
	new PortfolioItem(
	{
		'primary_url' : 'http://www.sporkmap.com',
		'title' : 'Spork', 
		'image_url' : 'assets/images/spork_300x200_thumb.png',
		'blurb' : 'Spork is a web application that serves as an online food truck ordering system.  ',
		'primary_button_name' : 'View',
		'secondary_url' : 'https://github.com/blakerego/sporkMaps', 
		'secondary_button_name' : 'Source Code'
	}),

	new PortfolioItem(
	{
		'primary_url' : 'heatmap.shtml',
		'title' : 'Heat Map Visualizations', 
		'image_url' : 'assets/images/heatmap1_300x200_thumb.png',
		'blurb' : 'The heat map project is a web application designed to visually depict city-wide utility equipment load on an interactive map. ',
		'primary_button_name' : 'Read More',
	}),

	new PortfolioItem(
	{
		'primary_url' : 'http://www.sporkmap.com',
		'title' : 'Personal Web Site', 
		'image_url' : 'assets/images/portfolio_300x200_thumb.png',
		'blurb' : "A web site I designed to showcase the work I've been doing. You're browsing it right now.",
		'primary_button_name' : 'View',
		'secondary_url' : 'home.shtml', 
		'secondary_button_name' : 'Source Code'
	})
	]

	);
var fullView = new PortfolioItemListView({ 
	collection : allItems
});
fullView.render();
