function changeSlide(tecken)
{
	var pages = document.getElementsByClassName('page');

	if (tecken == 'l') {
		pages[0].style.left = "-100%";
		pages[1].style.left = "0";
		pages[0].style.opacity = 0;
		pages[1].style.opacity = 1;
	}
	else if (tecken == 'r') {
		pages[0].style.left = "0";
		pages[1].style.left = "100%";
		pages[0].style.opacity = 1;
		pages[1].style.opacity = 0;
	} else {
		alert("ERROR IN CHANGESLIDE")
	}
}