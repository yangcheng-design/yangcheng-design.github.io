// get color, size choices from product details page
// save to current items local storage
// update cart number
// 
// function loadProducts() {

// }

updateSubtotal();

var removeCartItemButtons = document.getElementsByClassName('remove-btn');

for (let i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener('click', function(event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.parentElement.remove();
        updateSubtotal();
    })
}

//:not(.first)

function updateSubtotal() {
    let cartRows = document.getElementsByClassName('cart-row');
    console.log(cartRows);
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElem = cartRow.getElementsByClassName('item-price')[0];
        let price = parseFloat(priceElem.innerText.replace('$',''))
        let quantity = parseInt(document.getElementById('item-quantity').value);
        let subtotalElem = document.querySelector('.item-subtotal');
        subtotalElem.innerText = '$' + price * quantity;
        console.log(price * quantity);
        console.log(quantity);
    }
}