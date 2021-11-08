// Check local storage and update cart icon

var currentQ = localStorage.getItem('cartQuantity');

if (currentQ === null) {
    cartQuantityElem.innerText = 0;
}
else {
    var cartQuantityElem = document.querySelector('.cart-num-items');
    cartQuantityElem.innerText = currentQ;
}