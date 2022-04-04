import { formFields, showItemsinPage } from "./cart/dom.js";
import { createCart } from "./cart/localStoreage.js";
import { handleForm } from "./cart/form.js";

// Create cart from localStorage
const cart = createCart();

// Display selected items from product page
showItemsinPage(cart);

// Check if the form is correct to be sent
handleForm(formFields, cart);