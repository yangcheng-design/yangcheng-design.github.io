// Check local storage and update cart icon

cartQuantityElem.innerText = 0;

var currentQ = localStorage.getItem('cartQuantity');
var cartQuantityElem = document.querySelector('.cart-num-items');
cartQuantityElem.innerText = currentQ;