const breedSelect = document.getElementById("breed-select");
const button = document.getElementById("get-dog-btn");
const dogContainer = document.getElementById("dog-container");

document.addEventListener("DOMContentLoaded", loadBreeds);
button.addEventListener("click", fetchAndDisplayDog);

function loadBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(data => {
      const breeds = Object.keys(data.message);
      breeds.forEach(breed => {
        const option = document.createElement("option");
        option.value = breed;
        option.textContent = breed.charAt(0).toUpperCase() + breed.slice(1);
        breedSelect.appendChild(option);
      });
    })
    .catch(error => console.error("Error loading breeds:", error));
}

function fetchAndDisplayDog() {
  const breed = breedSelect.value;

  if (!breed) {
    alert("Please select a breed!");
    return;
  }

  const url = `https://dog.ceo/api/breed/${breed}/images/random`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const card = document.createElement("div");
      card.className = "dog-card";

      const img = document.createElement("img");
      img.src = data.message;
      img.alt = breed;

      const name = document.createElement("div");
      name.className = "breed-name";
      name.textContent = `Breed: ${breed.charAt(0).toUpperCase() + breed.slice(1)}`;

      const likeBtn = document.createElement("button");
      likeBtn.textContent = "Like ❤️";
      likeBtn.className = "like-button";

      const likeCount = document.createElement("span");
      likeCount.textContent = " 0 Likes";
      likeCount.className = "like-count";

      let count = 0;
      likeBtn.addEventListener("click", () => {
        count++;
        likeCount.textContent = ` ${count} Like${count !== 1 ? "s" : ""}`;
      });

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(likeBtn);
      card.appendChild(likeCount);
      dogContainer.appendChild(card);
    })
    .catch(error => console.error("Error fetching dog image:", error));
}
