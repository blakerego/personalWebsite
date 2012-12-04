
$("#content_container").fadeIn(500);
//$("#content_container").toggle("explode", {}, "slow");


$('.header_link').hover(
		function()
		{
			/// On-Hover, scale up the link.
			$(this).transition({ scale: '1.1'});
		}, 
		function()
		{
			/// On-hover-leave, the link should be normal size. 
			$(this).transition({ scale: '1'});
		}
	);
