const cartItemsArray = [];
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const sofa = localStorage.getItem(key);
    cartItemsArray.push(JSON.parse(sofa));
}
console.log(cartItemsArray);

//const numberPattern = /[0-9]/;
//const lettersPattern = /\w/g;

for (let i = 0; i < cartItemsArray.length; i++) {
    let cartItems = document.getElementById('cart__items');
    let totalQuantity = document.getElementById('totalQuantity');
    let totalPrice = document.getElementById('totalPrice');

    totalQuantity.innerHTML += parseInt(cartItemsArray[i].selectedQuantity);
    totalPrice.innerHTML += parseInt(cartItemsArray[i].selectedQuantity * cartItemsArray[i].price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");;

    cartItems.innerHTML += `
                        <article class="cart__item" data-id="${cartItemsArray[i]._id}" data-color="${cartItemsArray[i].selectedColor}">
                                        <div class="cart__item__img">
                                        <img src=${cartItemsArray[i].imageUrl} alt=${cartItemsArray[i].altTxt}>
                                        </div>
                                        <div class="cart__item__content">
                                        <div class="cart__item__content__description">
                                            <h2>${cartItemsArray[i].name}</h2>
                                            <p>${cartItemsArray[i].selectedColor}</p>
                                            <p>${cartItemsArray[i].price}</p>
                                        </div>
                                        <div class="cart__item__content__settings">
                                            <div class="cart__item__content__settings__quantity">
                                            <p>Qté : </p>
                                            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${cartItemsArray[i].selectedQuantity}>
                                            </div>
                                            <div class="cart__item__content__settings__delete">
                                            <p class="deleteItem">Delete</p>
                                            </div>
                                        </div>
                                        </div>
                                    </article>
                        `;
    //Delete Sofa
    /*
    const deleteItem;
    const deleteItem = document.getElementsByClassName('deleteItem').addEventListener('click', () => {
        delete cartItemsArray[i];
    });
    */
}


//Order Sofa
/*
document.getElementById('order').addEventListener('click', () => {

});
*/