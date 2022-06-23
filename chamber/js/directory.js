fetch ('js/data.json')
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });


  function displayCompanies(companies) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');
    let order = document.createElement('p')
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = companies.name + ' ' + companies.lastname;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', companies.imageurl);
    portrait.setAttribute('alt', 'Portait of ' + companies.name + ' ' + companies.lastname);
    portrait.setAttribute('loading', 'lazy');

    birthdate.textContent = `Birthdate: ${companies.birthdate}`;
    birthplace.textContent = `Birthplace: ${companies.birthplace}`;
    order.textContent = `${companies.order}`;

  
    // Add/append the section(card) with the h2 element
    // order depends how it will show up
    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);
    card.appendChild(order);

  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }