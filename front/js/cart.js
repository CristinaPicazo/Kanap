//Get itmems from local storeage
const cart = createCart();
showItemsinPage();
total();
checkForm();
changeQuantities()
Order();


function createCart() {
    const cart = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const sofa = localStorage.getItem(key);
        cart.push(JSON.parse(sofa));
    }
    return cart;
}

function createArticle(sofa) {
    const article = document.createElement("article");
    article.classList.add("cart__item");
    article.setAttribute("data-id", sofa._id);
    article.setAttribute("data-color", sofa.selectedColor);
    article.innerHTML = `
                    <div class="cart__item__img">
                    <img src=${sofa.imageUrl} alt=${sofa.altTxt}>
                    </div>
                    <div class="cart__item__content">
                    <div class="cart__item__content__description">
                        <h2>${sofa.name}</h2>
                        <p>${sofa.selectedColor}</p>
                        <p>${sofa.price}</p>
                    </div>
                    <div class="cart__item__content__settings">
                        <div class="cart__item__content__settings__quantity">
                        <p>Qté : </p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${sofa.selectedQuantity}>
                        </div>
                        <div class="cart__item__content__settings__delete">
                        <p class="deleteItem">Delete</p>
                        </div>
                    </div>
                    </div>
                </article>
    `
    return article
}

//Show items in cart
function showItemsinPage() {
    const cartItems = document.getElementById("cart__items");
    for (let i = 0; i < cart.length; i++) {
        const article = createArticle(cart[i]);
        cartItems.appendChild(article);
        deleteButton(article);
    }
}
//delete items
function deleteButton(article) {
    const deleteButton = article.querySelector(".deleteItem");
    deleteButton.addEventListener("click", () => {
        const key = article.dataset.id + ":" + article.dataset.color;
        window.localStorage.removeItem(key);
        window.location.reload()
    });
}

function total() {
    const totalQuantity = document.getElementById('totalQuantity');
    const totalPrice = document.getElementById('totalPrice');
    let sumQuantity = 0;
    let sumPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        sumQuantity += cart[i].selectedQuantity;
        sumPrice += (cart[i].selectedQuantity * cart[i].price);
        totalQuantity.innerHTML = sumQuantity;
        totalPrice.innerHTML = sumPrice;

    }

}
function changeQuantities() {
    let itemQuantityValue = document.querySelectorAll(".itemQuantity");
    for (let itemQuantityValues of itemQuantityValue) {
        itemQuantityValues.addEventListener('change', (event) => {
            const idDelete = event.target.closest(".cart__item");
            updateQuantity(idDelete.dataset.id, itemQuantityValues.value);

        });
    }
}

function updateQuantity(id, quantity) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i]._id === id) {
            cart[i].selectedQuantity = Number(quantity);
            total();
        }
    }
}





//Order Sofa
function checkForm() {
    //order.disabled = true;

    const firstName = document.getElementById('firstName');
    const firstNameErrorMsg = document.getElementById('firstNameErrorMsg');
    const noNumbers = new RegExp(/^[a-z]*$/);
    firstName.addEventListener('change', () => {
        checkInput(firstName, noNumbers, firstNameErrorMsg, "first name");
    });


    const lastName = document.getElementById('lastName');
    const lastNameErrorMsg = document.getElementById('lastNameErrorMsg');
    lastName.addEventListener('change', () => {
        checkInput(lastName, noNumbers, lastNameErrorMsg, "name");
    });
    const address = document.getElementById('address');
    const addressErrorMsg = document.getElementById('addressErrorMsg');
    address.addEventListener('change', () => {
        //checkInput(address, noNumbers, addressErrorMsg, "address");
    });
    const city = document.getElementById('city');
    const cityErrorMsg = document.getElementById('cityErrorMsg');
    city.addEventListener('change', () => {
        checkInput(city, noNumbers, cityErrorMsg, "city");
    });
    const email = document.getElementById('email');
    const emailErrorMsg = document.getElementById('emailErrorMsg');
    const emailReg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    email.addEventListener('change', () => {
        checkInput(email, emailReg, emailErrorMsg, "email");
    });
}


function checkInput(name, reg, err, text) {
    if (reg.test(name.value) == false) {
        console.log(reg.test(name.value))
        err.innerHTML = "Please add correct " + text;
    }
    else {
        err.innerHTML = " ";
    }
}

function Order() {
    document.getElementById("order").addEventListener('click', (event) => {
        /*
        const areAllFieldsValid = fields.every(checkInput)
        if (!areAllFieldsValid) {
            event.preventDefault();
            return;
        }
        */
        sendOrder()
    });
}

function sendOrder() {
    /*
    const url = "http://127.0.0.1:300/api/products/order";
    //let body={contact, product} 
    //fetch(url,body)
    const order = document.getElementById('order');
    order.addEventListener('click', () => {

        //event.preventDefault();
        const orderNumber = Math.floor((Math.random() * 1000) + 1);
        window.location.href = "../html/confirmation.html";
        //window.location.href = window.location.href + orderNumber;
    });
*/
    const body = {
        contact: {
            firstName: firstName.value,
            lastName: lastName.value,
            address: address.value,
            city: city.value,
            email: email.value
        },
        //products: getIdsFromCart(cart)
    }
    const url = `http://127.0.0.1:3000/api/products/order`;
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
        .then((data) => {
            const orderId = data.orderId
            window.location.href = "../html/confirmation.html?orderId=" + orderId
        })
        .catch((err) => alert(err))
}


