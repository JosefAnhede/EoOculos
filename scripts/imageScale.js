function scaleImages()
{
	var picRatio = 5760 / 2669;
	var viewW = parseInt(document.documentElement.clientWidth, 10);
	var viewH = parseInt(document.documentElement.clientHeight, 10);
	var viewRatio = viewW/viewH;
	console.log(viewRatio);
	var targets = document.getElementsByClassName('slidepic');
	var picRatio;


	for(let i = 0; i < targets.length; i++)
	{
		//Decide limiting factor
		if (viewRatio > picRatio) {
			targets[i].style.width = 100%;
			targets[i].style.height = auto;
		}
		else 
		{
			targets[i].style.width = auto;
			targets[i].style.height = 100%;
		}
		
		
	}
	
}
	