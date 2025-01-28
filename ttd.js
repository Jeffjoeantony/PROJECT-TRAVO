// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll event listener for header transparency
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0,0,0,0.8)';
    } else {
        header.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)';
    }
});

// Add hover effect for destination cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        cards.forEach(c => c.style.transform = 'scale(0.95)');
        card.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        cards.forEach(c => c.style.transform = 'scale(1)');
    });
});

// Simple slideshow functionality for hero section
let currentSlide = 3;
const totalSlides = 4;
const slideIndicators = document.querySelectorAll('.slide-indicators span');

function updateSlideIndicators() {
    slideIndicators[0].textContent = String(currentSlide).padStart(2, '0');
    slideIndicators[1].textContent = String(currentSlide + 1).padStart(2, '0');
}

setInterval(() => {
    currentSlide = currentSlide >= totalSlides ? 1 : currentSlide + 1;
    updateSlideIndicators();
}, 5000);