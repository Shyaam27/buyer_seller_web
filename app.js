function selectRole(role) {
    var container = document.querySelector('.container');
    if (role === 'seller') {
        container.innerHTML = ''; // Clear the container
        container.insertAdjacentHTML('beforeend', '<object type="text/html" data="seller.html" style="width:100%;height:100%;"></object>');
    } else if (role === 'buyer') {
        container.innerHTML = ''; // Clear the container
        container.insertAdjacentHTML('beforeend', '<object type="text/html" data="buy.html" ></object>');
    }
}
