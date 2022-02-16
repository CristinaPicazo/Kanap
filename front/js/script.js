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

function displayItems(sofas) {
    for (let i = 0; i < sofas.length; i++) {
        console.log(sofas[i]);
    }
    const section = document.getElementById('items')
    console.log(section)
}

