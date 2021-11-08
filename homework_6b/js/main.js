// Check local storage and update cart icon

var currentQ = localStorage.getItem('cartQuantity');
var cartQuantityElem = document.querySelector('.cart-num-items');
cartQuantityElem.innerText = currentQ;

if (currentQ == null) {
    cartQuantityElem.innerText = 0;
}