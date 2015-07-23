$(document).ready(function() {
	initializePage();
});

function initializePage() {

	var numberOfItems = 0;
	var iteminput = $('input#item');
	iteminput.val("");

	$('button#addItem').click(shoppingList);

	function shoppingList() {
		if($('input#item').val() === '') {
			return false;
		}

		//get items to buy & purchased items 
		var items = $('ul#items');
		var purchased = $('ul#done');
		var itemToAdd = $('input#item').val();
		$('input#item').val("");

		var listItem = $("<li><input type='checkbox' name=" + itemToAdd + " value=" + itemToAdd + "> " + itemToAdd + " <button class='delete'><strong>-</strong> Delete</button></li>");
		listItem.attr("id","items[" + numberOfItems++ + "]");
		addItems(listItem);

		listItem.find("a").click(function() {
			$(this).parent().hide('slow', function() {

			});
		});


		function addItems(listItem) {
		listItem.hide();
		items.append(listItem);
		listItem.show('slow');

		}
	}
}