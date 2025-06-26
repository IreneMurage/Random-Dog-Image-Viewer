# Random Dog Image Viewer

This is a simple, single-page JavaScript application that lets users view random images of different dog breeds using the [Dog CEO API](https://dog.ceo/dog-api/). Each time a breed is selected and the button is clicked, the app displays a new dog image along with the breed name — and keeps adding them on the screen.

## Live Demo

[View Live Site](https://irenemurage.github.io/Random-Dog-Image-Viewer/)


## Features

- Fetches and displays a random image of a selected dog breed.
- Displays the breed name along with the image.
- Keeps a gallery of all selected breeds — no previous image is removed.
- Clean, responsive UI with simple styling using HTML and CSS.
- Fully client-side — no page reloads or API keys needed.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- [Dog CEO Public API](https://dog.ceo/)

## How to Run the App

1. Clone or download this repository.
2. Open the `index.html` file in your browser.
3. Select a dog breed from the dropdown.
4. Click the **Get Dog** button to see a random image for that breed.
5. Repeat to build a gallery of adorable dogs!

## Project Structure

```

random-dog-viewer/
├── index.html       # Main HTML file (single page)
├── style.css        # Optional separate CSS file (or inline in head)
└── README.md        # Project info

```

## API Info

- **Endpoint used**: `https://dog.ceo/api/breeds/list/all` (for all breeds)
- **Breed image endpoint**: `https://dog.ceo/api/breed/{breed}/images/random`
- No API key or authentication needed!

## Learning Objectives

This project demonstrates:

- How to fetch data asynchronously using `fetch()`.
- DOM manipulation using JavaScript.
- Event handling with `addEventListener`.
- Keeping code DRY by using helper functions.

## Requirements Met

- Single-page app with no redirects or reloads.
- Uses a public, no-auth API that returns JSON.
- Includes multiple distinct event listeners.
- Uses array methods (`forEach`) to display dynamic data.
- Clean and functional UI layout.

## Author

**Irene Murage**  
Project: *Random Dog Image Viewer*  

## License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute this project as you like — just include the original copyright.

---

