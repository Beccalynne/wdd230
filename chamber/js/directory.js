fetch ('js/data.json')
const cards = document.querySelector('.cards');

fetch('js/data.json')
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
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('p');
    let membership = document.createElement('p');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = companies.name;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', companies.imageurl);
    portrait.setAttribute('alt', 'Logo of ' + companies.name);
    portrait.setAttribute('loading', 'lazy');

    address.textContent = `${companies.address}`;
    phone.textContent = `${companies.phone}`;
    url.textContent = `${companies.url}`;
    membership.textContent = `Membership level: ${companies.membership}`;

  
    // Add/append the section(card) with the h2 element
    // order depends how it will show up
    card.appendChild(h2);
    card.appendChild(membership);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(portrait);
    card.appendChild(url);

  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

  // Grid -- List view
  const gridbutton = document.querySelector("#grid");
  const listbutton = document.querySelector("#list");
  const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

  gridbutton.addEventListener("click", () => {
	  // example using arrow function
	  display.classList.add("grid");
	  display.classList.remove("list");
  });

  listbutton.addEventListener("click", showList); // example using defined function

  function showList() {
	  display.classList.add("list");
	  display.classList.remove("grid");
  }

  // Lasy Loading

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};
// Options passed to the Intersection Observer
const imgOptions = {
  threshold: 1,
  /* Using -10px for demo purposes, normally use something like 300px so 
     the images load well before the user scrolls to them */
  rootMargin: "0px 0px 500px 0px"
}
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}