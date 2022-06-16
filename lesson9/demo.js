fetch ('thursdayclass.json')
.then(response => response.json())
.then(data => {

document.querySelector ('#person').textContent =
    `${data['firstName']} ${data['lastName']}, Age: ${data['age']}`
});

