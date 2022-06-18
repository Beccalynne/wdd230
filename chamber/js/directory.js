fetch ('js/data.json')
.then(response => response.json())
.then(data => {

document.querySelector ('#cards').textContent =
    `${data['name']} ${data['address']}, Phone Number: ${data['phone'] }`
});