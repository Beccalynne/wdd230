const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(data => {
    console.log(data);
    const h1 = document.createElement('h1');
    h1.textContent = data["Latter-day Prophets"];
    const prophets = jsonObject['prophets'];
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    p1.textContent = `First Name: ${data.name}`;
    p2.textContent = `Last Name: ${data["lastname"]}`;
    p3.textContent = `Date of Birth: ${data["birthdate"]}`;
    p4.textContent = `Place of Birth: ${(data["birthplace"])}`;
    cardsElement.appendChild(h1);
    cardsElement.appendChild(p1);
    cardsElement.appendChild(p2);
    cardsElement.appendChild(p3);
    cardsElement.appendChild(p4);
    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    h2.textContent = "Members";
    section.appendChild(h2);
    data['members'].forEach(
      member => {
        const element = populateMember(member);
        section.append(element);
      }
    );
    resultElement.appendChild(section);
    //    <section>
    //         <h2>members</h2>
    //         <section>
    //             <h3>Member name</h3>
    //             <p>age</p>
    //             <p>secret id</p>
    //             <ul>
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //             </ul>
    //         </section>
    //     </section>
  });

  function populateMember(member) {
    const s1 = document.createElement('section');
    const h3 = document.createElement('h3');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const ul = document.createElement('ul');
    h3.textContent = member['name'];
    p1.textContent = member['age'];
    p2.textContent = member['secretIdentity'];
    member['powers'].forEach(power => {
      const li = document.createElement('li');
      li.textContent = power;
      ul.appendChild(li);
    });
    s1.appendChild(h3);
    s1.appendChild(p1);
    s1.appendChild(p2);
    s1.appendChild(ul);
    return s1;
  }


  
  // function displayProphets(prophet) {
  //   // Create elements to add to the document
  //   let card = document.createElement('section');
  //   let h2 = document.createElement('h2');
  //   let portrait = document.createElement('img');
  
  //   // Change the textContent property of the h2 element to contain the prophet's full name
  //   h2.textContent = prophet.name + ' ' + prophet.lastname;
  
  //   // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  //   // ____.setAttribute('src', prophet.imageurl);
  //   // ____.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname);
  //   // ____.setAttribute('loading', 'lazy');
  
  //   // Add/append the section(card) with the h2 element
  //   card.appendChild(h2);
  //   card.appendChild(portrait);
  
  //   // Add/append the existing HTML div with the cards class with the section(card)
  //   document.querySelector('div.cards').appendChild(card);
  // }