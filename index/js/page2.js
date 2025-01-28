// background.js
import img2 from '../image/img2.jpg';
import img3 from '../image/img3.jpg';
import img4 from '../image/img4.jpg';

const images = [
    img2,
    img3,
    img4,
];

let currentIndex = 0;

function changeBackground() {
    const backgroundElement = document.querySelector('.background');
    console.log(backgroundElement)
    backgroundElement.style.backgroundImage = `${images[currentIndex]}`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Change background image every 3 seconds
setInterval(changeBackground, 3000);

// Initialize the background image
changeBackground();