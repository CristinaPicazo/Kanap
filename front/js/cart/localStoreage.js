

// Get data from localStorage to show it in the page
export function createCart() {
    const cart = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const sofa = localStorage.getItem(key);
        cart.push(JSON.parse(sofa));
    }
    return cart;
}