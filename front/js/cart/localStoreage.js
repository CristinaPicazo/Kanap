
// Get data from localStorage to show it in the page

function getSofasFromBack(cart, id) {
    // Create cart from localStoreage and url
    const url = `http://127.0.0.1:3000/api/products/${id}`;
    fetch(url)
        .then(response => {
            const json = response.json()
            return json;
        })
        .then(data => {
            cart.push(data);
        })
        .catch(err => console.log(err))
    return cart;
}




export function createCart() {
    const cart = [];

    for (let i = 0; i < localStorage.length; i++) {
        // Get key from localStoreage
        const key = localStorage.key(i);

        // Get id and color from key
        const id = key.split(':').at(0);
        const selectedColor = key.split(':').at(-1);

        getSofasFromBack(cart, id);

        // Get quantity from localStoreage
        const localStoreageSofa = localStorage.getItem(key);
        const localStoreageSofaJSON = JSON.parse(localStoreageSofa);
        // console.log('localStoreageSofaJSON.selectedQuantity:', localStoreageSofaJSON.selectedQuantity)
        // console.log('cart[i]:', cart[i])
        // cart.selectedQuantity = localStoreageSofaJSON.selectedQuantity;


    }

    console.log('cart:', cart)
    return cart;
}




/*

export function createCart() {
    const cart = [];
    console.log('cart:', cart)
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        console.log('key:', key)
        const sofa = localStorage.getItem(key);
        console.log('sofa:', sofa)
        cart.push(JSON.parse(sofa));
    }
    return cart;
}

*/
