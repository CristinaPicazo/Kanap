import { formFields, showItemsinPage } from "./cart/dom.js";
import { createCart } from "./cart/localStoreage.js";
import { handleForm } from "./cart/form.js";

// Create cart from localStorage
const cart = createCart();

showItemsinPage(cart);
handleForm(formFields, cart);