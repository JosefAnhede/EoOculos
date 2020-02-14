$(window).resize(function()
{
	adjustHeight();
});

$(function(){
	adjustHeight();
})


function adjustHeight()
{
	var headerHeight = $("#header").height();
	$("#headerSpace").css("height", headerHeight);
}