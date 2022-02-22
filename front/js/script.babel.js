'use strict';

var url = 'http://127.0.0.1:3000/api/products';
fetch(url).then(function (response) {
    var json = response.json();
    return json;
}).then(function (data) {
    displayItems(data);
}).catch(function (err) {
    return console.log(err);
});

function displayItems(sofas) {
    for (var i = 0; i < sofas.length; i++) {
        console.log(sofas[i]);
    }
    var section = document.getElementById('items');
    section.innerHTML = section;
    console.log(section);
}
