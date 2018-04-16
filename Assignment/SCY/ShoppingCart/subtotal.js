var item_prices = new Array();
item_prices["dvd"] = 20;
item_prices["bluray"] = 30;


function getItemPrice() {
	var dicsPrice = 0;
	var theForm = document.forms["itemform"];
	var selectedItem = theForm.elements["selecteditem"];
	for (var i = 0; i < selectedItem.length; i++) {
		if (selectedItem[i].checked) {

			dicsPrice = item_prices[selectedItem[i].value];

			break;
		}
	}
	return dicsPrice;
}

function getQuantity() {

	var x = document.getElementById("number").value;

	return x;

}


function calculateTotal() {

	var itemPrice = getItemPrice();
	var quantity = getQuantity();

	var divobj = document.getElementById('totalPrice');
	divobj.style.display = 'block';
	divobj.innerHTML = "RM " + itemPrice * quantity;

}

function hideTotal() {
	var divobj = document.getElementById('totalPrice');
	divobj.style.display = 'none';
}
