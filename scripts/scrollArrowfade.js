window.onscroll = function()
{
	var fade = 1 - ($(window).scrollTop() / ($(window).height() - $('#header').height()));
	
	if (fade >= 0) 
	{
		$('#firstpage').css('opacity', fade);
	}
	
}