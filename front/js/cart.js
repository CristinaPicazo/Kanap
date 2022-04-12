import { formFields, showItemsinPage } from "./cart/dom.js";
import { createCart, addPriceToSofa } from "./cart/localStoreage.js";
import { handleForm } from "./cart/form.js";

// Create cart from localStorage
const cart = createCart();
Promise.resolve(cart)
    .then(cart => {
        cart.forEach(sofa => {
            addPriceToSofa(sofa);
        });
    }).then(() => {
        showItemsinPage(cart);
    })



// Check if the form is correct to be sent
handleForm(formFields, cart);