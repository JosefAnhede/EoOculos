document.onscroll = function()
{
	stickyLimit = document.getElementById('stickyHeaderDiv');

	if ($(window).scrollTop() > ($('#stickyHeaderDiv').height() - $('#header').height()))
	{
		toAbsolute();
	}
	else
	{
		toSticky();
	}
}
function toAbsolute()
{
	$('#header').removeClass('stickyHeader');
	$('#header').addClass('absoluteHeader');
	$('#header').css('top', $('#stickyHeaderDiv').height() - $('#header').height())
}
function toSticky()
{
	$('#header').removeClass('absoluteHeader');
	$('#header').addClass('stickyHeader');
	$('#header').css('top', 0);
}