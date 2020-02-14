function updatePrice() 
{
	var prices = [7000, 12000, 8000, 8000];
	var basePrice = 35000;
	var price = basePrice;

	var priceText = document.getElementById('price');
	var button = document.getElementsByClassName('pricecheck');
	var bonusPrices = document.getElementsByClassName('bonusprice');
	var headers = document.getElementsByClassName('optionHeader');

	for(let i = 0,target = button.length; i < target; i++)
	{
		if (button[i].checked == true) 
		{
			bonusPrices[i].style.display = 'inline';
			price -= prices[i];
			headers[i].classList.remove('inactiveHeader');
			headers[i].classList.add('activeHeader');	
			
		}
		else
		{
			bonusPrices[i].style.display = 'none';
			headers[i].classList.remove('activeHeader');
			headers[i].classList.add('inactiveHeader');
		}
	}
	priceText.textContent = price;

	return 0;
}
