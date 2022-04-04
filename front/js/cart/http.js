import { formFields } from "./dom";

// Send selected sofas and form to backend
function sendOrder(cart) {
    const body = {
        contact: {
            firstName: firstName.value,
            lastName: lastName.value,
            address: address.value,
            city: city.value,
            email: email.value
        },
        products: mapCartToIds(cart)
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
            const orderId = data.orderId;
            window.location.href = "../html/confirmation.html?orderId=" + orderId
        })
        .catch((err) => alert(err))
}

// Create array of id products to send it to the backend
function mapCartToIds(cart) {
    const ids = [];
    for (const sofa of cart) {
        ids.push(sofa._id)
    }
    return ids;
}

// Sent to form.js
export { sendOrder }