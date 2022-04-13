import { sendOrder } from "./http.js";
// Check if the form is correct to be sent
function handleForm(formFields, cart) {
    for (const field of formFields) {
        // Check fields
        field.element.addEventListener('input', () => {
            // Check inputs with regex
            checkInput(field)
        });
    }
    document.getElementById("order").addEventListener('click', (event) => {
        // Send data to back and show confirmation page
        submitForm(event, cart, formFields);
    });
}

// Checks if everything is correct and show confirmation page
function submitForm(event, cart, formFields) {
    event.preventDefault()
    if (cart.length === 0) return
    for (const field of formFields) {
        if (!isFieldValid(field.element.value, field.regex)) return
    }
    // Import it from http.js
    sendOrder(cart)
}

// Check every field within the form and send an error if it is not correct
function checkInput(field) {
    field.errorDiv.innerHTML = isFieldValid(field.element.value, field.regex) ? '' : field.errorMsg;
}

// Pass regex to the values
function isFieldValid(value, regex) {
    return regex.test(value)
}
// Used to cart.js
export { handleForm }