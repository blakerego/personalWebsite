var allItems = new PortfolioItemList(
	[
	new PortfolioItem(
	{
		'primary_url' : 'http://www.sporkmap.com',
		'title' : 'Spork', 
		'image_url' : 'assets/images/spork_300x200_thumb.png',
		'blurb' : 'Spork is a web application that serves as an online food truck ordering system.  ',
		'primary_button_name' : 'Visit',
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
		'primary_url' : 'showFFT.shtml',
		'title' : 'Audio-Based LED Interface', 
		'image_url' : 'assets/images/lights_300x200_thumb.png',
		'blurb' : 'Software application designed to visually represent rhythm and pitch using LED light arrays.',
		'primary_button_name' : 'Read More',
	}),

	new PortfolioItem(
	{
		'primary_url' : 'research.shtml',
		'title' : 'Center for Molecular Modeling', 
		'image_url' : 'assets/images/cmm_300x200_thumb.png',
		'blurb' : "At Columbia's Nanoscale Engineering Center, I worked on the assembly of carbon nanotube devices by positioning nanotubes using a process known as dielectrophoresis.",
		'primary_button_name' : 'Read More',
	}),

	new PortfolioItem(
	{
		'primary_url' : 'research.shtml#nec',
		'title' : 'Carbon Nanotube Device Creation Research', 
		'image_url' : 'assets/images/nano_300x200_thumb.png',
		'blurb' : "At University of Pennsylvania's center for molecular modeling, I ran molecular dynamic simulations on nanotube-protein interactions.",
		'primary_button_name' : 'Read More',
	}),

	new PortfolioItem(
	{
		'primary_url' : 'index.shtml',
		'title' : 'Personal Web Site', 
		'image_url' : 'assets/images/portfolio_300x200_thumb.png',
		'blurb' : "A web site I designed to showcase the work I've been doing. You're browsing it right now.",
		'primary_button_name' : 'View',
		'secondary_url' : 'http://www.github.com/blakerego/personalwebsite', 
		'secondary_button_name' : 'Source Code'
	})
	]

	);
var fullView = new PortfolioItemListView({ 
	collection : allItems
});
fullView.render();
