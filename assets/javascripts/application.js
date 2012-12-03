//$("#content_container").css("display", "none");
$("#content_container").fadeIn(500);


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

$('.header_link').click(
	function()
	{
		// $('.container').effect("explode", {}, "fast");
	});

// $('.container').effect("bounce", { times: 1, distance:10}, "slow");

