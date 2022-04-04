// Show total amount of sofas and price
function calculateTotal(cart) {
    let numberOfSofas = 0;
    let totalPriceSofas = 0;

    cart.forEach(sofa => {
        numberOfSofas += sofa.selectedQuantity;
        totalPriceSofas += sofa.selectedQuantity * sofa.price;
    });
    return { numberOfSofas, totalPriceSofas }
}

// Sent to dom.js
export { calculateTotal }