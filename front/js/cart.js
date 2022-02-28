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


//Separate sofas
//color = cartItem[0][i].search("Blue" || "White" || "Black" || "Yellow" || "Red" || "Green" || "Orange" || "Pink" || "Grey" || "Purple" || "Navi" || "Silver" || "Brown")
const numberPattern = /[0-9]/;
const lettersPattern = /\w/g;
const sofaChosen = {
    idSofa: "",
    quantity: "",
    color: "",
}
for (let i = 0; i < cartItem[0].length; i++) {
    if (cartItem[0][i].match(numberPattern)) {
        sofaChosen.quantity = cartItem[0][i];
    } else if (cartItem[0][i].match(lettersPattern)) {
        sofaChosen.color = cartItem[0][i];
    } else if (cartItem[0][i]) {
        sofaChosen.idSofa = cartItem[0][i];  //Doesn't recognize id
    }
}

//Check duplicates
for (let i = 0; i < cartItem[0].length; i++) {
    for (let n = 0; n < cartItem[0].length; n++) {
        if (sofaChosen.idSofa[i] === sofaChosen.idSofa[n] && sofaChosen.color[i] === sofaChosen.color[n]) {
            sofaChosen.quantity[i] += sofaChosen.quantity[n];
            delete sofaChosen[n];
        }
    }
}

//Order Sofa
document.getElementById('order').addEventListener('click', () => {

})

const cartItems = document.getElementById('cart__items');
let totalQuantity = document.getElementById('totalQuantity');
const totalPrice = document.getElementById('totalPrice');
function displayItem(sofas) {
    for (let i = 0; i < sofaChosen.idSofa.length; i++) {
        totalQuantity += sofaChosen.quantity[i];
        totalPrice += sofaChosen.quantity[i] * sofa.price;
        if (sofaChosen.idSofa[i] === sofas[i]._id) {
            //if (cartItem[0][i] === color) {
            const sofa = sofas[i];
            cartItems.innerHTML += `
                <article class="cart__item" data-id="${sofaChosen.idSofa[i]}" data-color="${sofaChosen.color[i]}">
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
                                    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${sofaChosen.quantity[i]}>
                                    </div>
                                    <div class="cart__item__content__settings__delete">
                                    <p class="deleteItem">Delete</p>
                                    </div>
                                </div>
                                </div>
                            </article>
                `
            //Delete Sofa
            document.getElementsByClassName('deleteItem').addEventListener('click', () => {
                delete sofaChosen[i];
            });
        }
    }
}
