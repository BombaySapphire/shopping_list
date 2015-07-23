$(document).ready(function() {
	initializePage();
});

function initializePage() {

	var numberOfItems = 0;
	var iteminput = $('input#item');
	iteminput.val("");

	$('a#addItem').click(shoppingList);

	function shoppingList() {
		if($('input#item').val() === '') {
			return;
		}

		//get items to buy & purchased items 
		var items = $('ul#items');
		var purchased = $('ul#done');
		var itemToAdd = $('input#item').val();
		$('input#item').val("");

		var listItem = $("<li><input type='checkbox' name=" + itemToAdd + " value=" + itemToAdd + "> " + itemToAdd + " <a class='delete' href='#'><strong>-</strong> Delete</a></li>");
		listItem.attr("id","items[" + numberOfItems++ + "]");
		addItems(listItem);


		function addItems(listItem) {
		listItem.hide();
		items.append(listItem);
		listItem.show('slow');

		}
	}
}