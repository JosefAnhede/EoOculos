$(function(){

	//Declaring variables
	var blocks = document.getElementsByClassName('block');
	var button = document.getElementById('secondPageContainerButton');

	//On mouse enter
	$("#secondPageContainer").mouseenter(function()
	{
		//Handle blocks
		blocks[0].style.transform = "translateX(-100%)";
		blocks[1].style.transform = "translateX(100%)";

		//Handle button
		button.classList.remove("designButtonIdle");
		button.classList.add("designButtonHover");
	});

	//On mouse leaving
	$("#secondPageContainer").mouseleave(function()
	{
		//Handle blocks
		for(let i = 0; i < blocks.length; i++){
			blocks[i].style.transform = "none";
		}

		//Handle button
		button.classList.remove("designButtonHover");
		button.classList.add("designButtonIdle");
	});
})