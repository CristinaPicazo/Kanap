/**
 * Project 5
 * @author Cristina Picazo Merlos
 * @param {string} title - Project 5
 * @param {string} author - Cristina Picazo Merlos
 * @see https://cristinapicazo.github.io/Kanap/front/html/index.html
 * @returns {Object} 
 */
function Project5(title, author) { }

//Takes data from backend
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

//Displays items from backend (fetch)
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

