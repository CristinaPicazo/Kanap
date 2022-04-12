
retrieveOrderId();

// Clean sofas in localStorage
localStorage.clear();

// Display orderNumber in html
function retrieveOrderId() {
    const orderNumber = window.location.search.split('=').at(-1);
    const orderId = document.getElementById('orderId');
    orderId.innerHTML = orderNumber;

}






