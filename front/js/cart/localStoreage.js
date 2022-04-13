
// Get data from localStorage to show it in the page
export function createCart() {
    const cart = [];
    console.log('cart:', cart)
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const sofa = localStorage.getItem(key);
        cart.push(JSON.parse(sofa));
    }
    return cart.sort((a, b) => a._id.localeCompare(b._id));
}

// Sensitive data is taken from back instead of localStorage
export function addPriceToSofa(sofa) {
    const url = `http://127.0.0.1:3000/api/products/${sofa._id}`;
    return fetch(url)
        .then(response => {
            const json = response.json()
            return json;
        })
        .then(sofaFromServer => {
            sofa.price = sofaFromServer.price;
        })
        .catch(err => console.log(err))
}
