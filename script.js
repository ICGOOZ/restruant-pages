const URL =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";
let cards = document.querySelector("div.cards");

// Fetch the data from the API
fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    let business = jsObject.business;

    // Loop through the business array and create a card for each business
    for (let i = 0; i < business.length; i++) {
      // Create the card container
      let card = document.createElement("section");
      card.className = "card";

      // Add the business name
      let h2 = document.createElement("h2");
      h2.textContent = business[i].name;
      card.appendChild(h2);

      // Add the business image
      let img = document.createElement("img");
      img.src = business[i].imageUrl; // Assuming image URL is in 'imageUrl' property
      img.alt = business[i].name + " image"; // Adding alt text for accessibility
      card.appendChild(img);

      // Add the business address
      let address = document.createElement("p");
      address.className = "address";
      address.textContent = "Location: " + business[i].address;
      card.appendChild(address);

      // Add the business description
      let description = document.createElement("p");
      description.className = "description";
      description.textContent = business[i].description;
      card.appendChild(description);

      // Append the card to the cards container
      cards.appendChild(card);
    }
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });
