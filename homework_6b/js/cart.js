// JS implementation for the cart

const storedValue = JSON.parse(localStorage.getItem('savedCart'));
var productItems = storedValue ? storedValue : []; 

const cartContainer = document.querySelector('.cart-container');

if (productItems != null) {
    document.querySelector('.empty-cart-msg').remove();
    loadCart();
}

function loadCart() {
    for (let i = 0; i < productItems.length; i++) {
        displaySingleProduct(productItems[i]);
    }
}

function displaySingleProduct(product) {
    var displayColor = product.color.split('-')[1]; // tweak the string format
    var displaySize = product.size.split('-')[1];
    var displayImg = getImage(displayColor);
    let cartRowHTML = '<tr class="cart-row"><td class="cart-item"><img src="'+ displayImg +'" alt="" /><div class="item-details"><h4>Adventure Cat Backpack</h4><p>' + displayColor + '</p><p>' + displaySize + '</p><a href="#" class="remove-btn">Remove</a></div></td><td class="item-price">$46</td><td><input type="number" class="item-quantity" value="1" min="1" /></td><td class="item-subtotal">$46</td></tr>';
    cartContainer.innerHTML += cartRowHTML;
}

function getImage(colorString) {
    switch(colorString) {
        case "strawberry":
            return './images/backpack-strawberry.png';
        case "blackberry":
            return './images/backpack-blackberry.png';
        case "crazyberry":
            return './images/backpack-crazyberry.png';
        case "orange":
            return './images/backpack-orange.png';
    }
}

// Handle removing items
var removeCartItemButtons = document.getElementsByClassName('remove-btn');
for (let i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target;
        var toDelete = buttonClicked.parentElement.parentElement.parentElement;
        toDelete.remove();
        updatePrice();  // update total price
        console.log(i);
        removeItem(i);
    })
}

// Handle quantity changes for each item
var quantityInputs = document.getElementsByClassName('item-quantity');
for (let i = 0; i < quantityInputs.length; i++) {
    var quantityInput = quantityInputs[i];
    quantityInput.addEventListener('change', updateQuantity);
}

function updateQuantity(event) {
    var quantityInput = event.target;
    if (isNaN(quantityInput.value)) {
        quantityInput.value = 1;
    }
    updatePrice();
}

function updatePrice() {
    var cartRows = document.getElementsByClassName('cart-row');
    for (let i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElem = cartRow.getElementsByClassName('item-price')[0];
        var price = parseFloat(priceElem.innerText.replace('$', ''))
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
        let rowSubtotalNum = parseFloat(rowSubtotal.replace('$', ''));
        total = total + rowSubtotalNum;
    }
    totalElem.innerText = `\$${total}`;
}

function removeItem(index) {
    productItems.splice(index, 1); // start at index to delete and delete 1 item
    document.querySelector('.cart-num-items').innerText = productItems.length;
}