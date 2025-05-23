const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageNames = [
      "images/pic1.jpg",
      "images/pic2.jpg",
      "images/pic3.jpg",
      "images/pic4.jpg",
      "images/pic5.jpg"
];
      
/* Declaring the alternative text for each image file */
const imageAlternatives = [
      "Closeup on an eye",
      "Many swirling patterns",
      "Various purple flowers",
      "A picture of hieroglyphics",
      "A butterfly on a leaf"
];

/* Looping through images */
for(let i = 0; i < imageNames.length; i++)
{ const newImage = document.createElement('img');
  newImage.setAttribute('src', imageNames[i]);
  newImage.setAttribute('alt', imageAlternatives[i]);
  thumbBar.appendChild(newImage);

// Add click event listener to the current newImage
newImage.addEventListener('click', () => {
displayedImage.src = newImage.src; // Update src
displayedImage.alt = newImage.alt; // Update alt
	});
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const currentClass = btn.getAttribute('class');

    if (currentClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)'; // Darken
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)'; // Lighten
    }
});
