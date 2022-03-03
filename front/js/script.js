//Take data from back
const url = 'http://127.0.0.1:3000/api/products';
fetch(url)
    .then(response => {
        const json = response.json()
        return json;
    })
    .then(data => {
        displayItems(data)
    })
    .catch(err => console.log(err))

//Display items from back (fetch)
function displayItems(sofas) {
    const section = document.getElementById('items')

    //Loop to show items from JSON
    for (let i = 0; i < sofas.length; i++) {
        const sofa = sofas[i];
        section.innerHTML += `
        <a href="./product.html?id=${sofa._id}">
        <article>
        <img src=${sofa.imageUrl} alt=${sofa.altTxt}>
        <h3 class="productName">${sofa.name}</h3>
        <p class="productDescription">${sofa.description}</p>
        </article>
        </a>
        `
    }
}

