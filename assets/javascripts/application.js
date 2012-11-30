$('.header_link').hover(
		function(e)
		{
			/// On-Hover, scale up the link.
			$(this).transition({ scale: '1.2'});
		}, 
		function()
		{
			$(this).transition({ scale: '1'});
		}
	);