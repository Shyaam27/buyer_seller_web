function addToCart(itemName, price, quantityId) {
    var cartItems = document.getElementById('cart-items');
    var totalBillElement = document.getElementById('total-bill');

    var quantity = parseInt(document.getElementById(quantityId).value) || 0;

    if (quantity > 0) {
        var listItem = document.createElement('li');
        listItem.textContent = `${itemName} x ${quantity} - $${(price * quantity).toFixed(2)}`;
        cartItems.appendChild(listItem);

        var totalBill = parseFloat(totalBillElement.getAttribute('data-total')) || 0;
        totalBill += price * quantity;
        totalBillElement.setAttribute('data-total', totalBill);
        totalBillElement.textContent = `Total: $${totalBill.toFixed(2)}`;
    }
}

function placeOrder() {
    alert("Your order has been placed successfully!");
}

