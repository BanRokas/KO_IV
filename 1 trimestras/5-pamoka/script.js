const mainCard = document.createElement("div");
mainCard.style.display = "flex";
mainCard.style.flexWrap = "wrap";
mainCard.style.gap = "10px";

async function fetchSettings() {
  const response = await fetch(`http://localhost:3000/products`);
  const data = await response.json();
  data.data.map((item) => {
    generateImageCard(item.image, item.price, item.title);
  });
}

function generateImageCard(image, price, title) {
  const cardContainer = document.createElement("div");
  cardContainer.style.border = "1px solid black";
  cardContainer.style.padding = "10px";
  cardContainer.style.width = "200px";
  const imgElement = document.createElement("img");
  imgElement.src = image;
  imgElement.alt = title;
  imgElement.style.width = "100px";
  imgElement.style.height = "auto";
  cardContainer.appendChild(imgElement);
  const titleElement = document.createElement("h3");
  titleElement.textContent = title;
  cardContainer.appendChild(titleElement);
  const priceElement = document.createElement("p");
  priceElement.textContent = `Price: $${price}`;
  cardContainer.appendChild(priceElement);
  appendItemsToMainCard(cardContainer);
}

function appendItemsToMainCard(HTMLElement) {
  mainCard.appendChild(HTMLElement);
  document.body.appendChild(mainCard);
}
fetchSettings();
