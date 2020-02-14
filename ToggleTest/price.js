function updatePrice() 
{
	var prices = [1, 10, 100, 1000];
	var basePrice = 100;
	var price = basePrice;

	var priceText = document.getElementById('price');
	var button = document.getElementsByClassName('pricecheck');
	var bonusPrices = document.getElementsByClassName('bonusprice');

	for(let i = 0,target = button.length; i < target; i++)
	{
		if (button[i].checked == true) 
		{
			bonusPrices[i].style.display = 'inline';
			price += prices[i];
		}
		else
		{
			bonusPrices[i].style.display = 'none';
		}
	}
	priceText.textContent = price;
	return 0;
}
