// JavaScript code for sliding animations

let advertisementContainer = document.querySelector('.advertisement-container');
let gurukulItem = document.getElementById('gurukul');
let narayanaItem = document.getElementById('narayana');
let currentSlide = 'gurukul'; // Initially set to 'gurukul'

// Function to toggle between Gurukul and Narayana slides
function toggleSlides() {
    if (currentSlide === 'gurukul') {
        slideToNarayana();
        currentSlide = 'narayana';
    } else {
        slideToGurukul();
        currentSlide = 'gurukul';
    }
}

// Function to slide to Gurukul advertisement
function slideToGurukul() {
    advertisementContainer.style.transform = 'translateX(0)';
    gurukulItem.classList.add('active');
    narayanaItem.classList.remove('active');
}

// Function to slide to Narayana advertisement
function slideToNarayana() {
    advertisementContainer.style.transform = 'translateX(-100%)';
    gurukulItem.classList.remove('active');
    narayanaItem.classList.add('active');
}

// Slide to Gurukul initially
slideToGurukul();

// Set interval to toggle slides every 3 seconds
setInterval(toggleSlides, 3000);
