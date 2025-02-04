// Carousel functionality
const carousel = {
    currentSlide: 0,
    slides: document.querySelectorAll('.carousel-slide'),
    totalSlides: document.querySelectorAll('.carousel-slide').length,
    slideIndicators: document.querySelectorAll('.slide-indicators span'),
    autoPlayInterval: null,
    
    init() {
        this.showSlide(this.currentSlide);
        this.startAutoPlay();
    },

    showSlide(index) {
        // Remove active class from all slides
        this.slides.forEach(slide => slide.classList.remove('active'));
        
        // Add active class to current slide
        this.slides[index].classList.add('active');
        
        // Update indicators
        this.updateIndicators(index);
    },

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.showSlide(this.currentSlide);
    },

    updateIndicators(index) {
        // Update slide numbers
        this.slideIndicators[0].textContent = String(index + 1).padStart(2, '0');
        this.slideIndicators[1].textContent = String(this.totalSlides).padStart(2, '0');
    },

    startAutoPlay() {
        // Clear any existing interval
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
        
        // Start new interval
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 4000); // Change slide every 4 seconds
    }
};

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    carousel.init();
});

// Header transparency
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0,0,0,0.8)';
    } else {
        header.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)';
    }
});

// Destination cards hover effect
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

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});