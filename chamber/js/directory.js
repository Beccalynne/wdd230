fetch ('js/data.json')
.then(response => response.json())
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['companies'];
    prophets.forEach(displayCompanies);
  });


  function displayCompanies(companies) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    // let portrait = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
  
    // H2 at the top of the card
    h2.textContent = companies.name
  
    // The image for the company
    // portrait.setAttribute('src', companies.imageurl);
    // portrait.setAttribute('alt', 'Company logo for ' + companies.name);
    // portrait.setAttribute('loading', 'lazy');

    address.textContent = `${companies.address}`;
    phone.textContent = `Phone Number: ${companies.phone}`;
  

  
    // Add/append the section(card) with the h2 element
    // order depends how it will show up
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild{phone};
  
    // card.appendChild(portrait);
    

  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }
