// get color, size choices from product details page
// save to current items local storage
// update cart number
// load current items
// function loadProducts() {

// }

// Handle removing items
var removeCartItemButtons = document.getElementsByClassName('remove-btn');
console.log(removeCartItemButtons);
for (let i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.parentElement.remove();
        updateSubtotal();  // update total price TODO
    })
}

// Handle quantity changes for each item
var quantityInputs = document.getElementsByClassName('item-quantity');
console.log(quantityInputs);
for (let i = 0; i < quantityInputs.length; i++) {
    var quantityInput = quantityInputs[i];
    console.log(quantityInput);
    quantityInput.addEventListener('change', updateQuantity);
}

function updateQuantity(event) {
    var quantityInput = event.target;
    if (isNaN(quantityInput.value)) {
        quantityInput.value = 1;
    }
    updatePrice();
}
// check quantity change
// get subtotal
// iterate over CartRows
// get total

function updatePrice() {
    var cartRows = document.getElementsByClassName('cart-row');
    for (let i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElem = cartRow.getElementsByClassName('item-price')[0];
        var price = parseFloat(priceElem.innerText.replace('$',''))
        var quantityElem = cartRow.getElementsByClassName('item-quantity')[0];
        var quantity = quantityElem.value;
        var subtotalElem = cartRow.getElementsByClassName('item-subtotal')[0];
        subtotalElem.innerText = `\$${price * quantity}`;
    }
    var totalElem = document.querySelector('.price-calc >p:last-child');
    var total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        let rowSubtotal = cartRow.getElementsByClassName('item-subtotal')[0].innerText;
        let rowSubtotalNum = parseFloat(rowSubtotal.replace('$',''));
        total = total + rowSubtotalNum;
    }
    totalElem.innerText = `\$${total}`;
}