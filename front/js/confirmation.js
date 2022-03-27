
idNumber();

// Clean sofas in localStorage
localStorage.clear();

// Display orderNumber in html
function idNumber() {
    const orderNumber = window.location.search.split('=').at(-1);
    const orderId = document.getElementById('orderId');
    orderId.innerHTML = orderNumber;

}






