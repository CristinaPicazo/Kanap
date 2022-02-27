const url = 'http://127.0.0.1:3000/api/products';
fetch(url)
    .then(response => {
        const json = response.json()
        return json;
    })
    .then(data => {
        displayItem(data)
    })
    .catch(err => console.log(err))


cartItem = [];
cartItem.push(JSON.parse(localStorage.getItem('id')));
console.log('item: ' + localStorage.getItem('id'));
console.log('cartItems: ' + cartItem);
//let person = { id: id, lastName: quantity.value, colors: colors.value };

const cartItems = document.getElementById('cart__items');

function displayItem(sofas) {
    for (let i = 0; i < sofas.length; i++) {
        if (sofas[i]._id === cartItem[0][0]) {
            const sofa = sofas[n];
            cartItems.innerHTML += `
            <article class="cart__item" data-id="${sofa._id}$" data-color="{product - color}$">
                            <div class="cart__item__img">
                            <img src=${sofa.imageUrl} alt=${sofa.altTxt}>
                            </div>
                            <div class="cart__item__content">
                            <div class="cart__item__content__description">
                                <h2>${sofa.name}</h2>
                                <p>Green</p>
                                <p>${sofa.price}</p>
                            </div>
                            <div class="cart__item__content__settings">
                                <div class="cart__item__content__settings__quantity">
                                <p>Qté : </p>
                                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                                </div>
                                <div class="cart__item__content__settings__delete">
                                <p class="deleteItem">Delete</p>
                                </div>
                            </div>
                            </div>
                        </article>
            `
        }
    }
}