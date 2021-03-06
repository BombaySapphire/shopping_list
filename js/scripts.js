$(document).ready(function() {
	initializePage();
});

function initializePage() {

	var numberOfItems = 0;
	var iteminput = $('input#item');
	iteminput.val("");

	$('a#addItem').click(shoppingList);

	function addItems(items, listItem) {
		listItem.hide();
		items.append(listItem);
		listItem.show('slow');
	}

	function shoppingList() {
		if($('input#item').val() === '') {
			return;
		}

		//get items to buy & purchased items 
		var toBuy = $('ul#toBuy');
		var purchased = $('ul#purchased');
		var itemToAdd = $('input#item').val();
		$('input#item').val("");

		var listItem = $("<li><input type='checkbox' name=" + itemToAdd + " value=" + itemToAdd + "> " + itemToAdd + " <a class='delete' href='#'><strong>-</strong> Delete</a></li>");
		listItem.attr("id","items[" + numberOfItems++ + "]");
		addItems(toBuy, listItem);

		listItem.find('a').click(function() {
			$(this).parent().hide('slow', function() {
				$(this).remove();
			});

		})

		listItem.find('input:checkbox').click(function() {
			this.checked ?  addItems(purchased, listItem) : addItems(toBuy, listItem);
		});
	}
}