// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const lightMode = document.getElementById('light-mode');
const darkMode = document.getElementById('dark-mode');
const body = document.getElementById('body');

// Check for saved theme preference or default to light mode
let currentTheme = localStorage.getItem('theme') || 'light';

// Initialize theme on page load
function initTheme() {
    if (currentTheme === 'dark') {
        setDarkMode();
    } else {
        setLightMode();
    }
}

// Set light mode (morning)
function setLightMode() {
    currentTheme = 'light';
    localStorage.setItem('theme', 'light');
    
    // Update UI
    lightMode.classList.remove('hidden');
    darkMode.classList.add('hidden');
    
    // Update body classes
    body.className = 'bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900';
    
    // Update toggle button
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    themeIcon.className = 'fas fa-sun text-2xl text-blue-500';
    themeToggle.className = 'fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center theme-toggle hover:shadow-xl';
    
    // Add fade-in animation
    lightMode.querySelectorAll('.fade-in').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
        el.classList.add('fade-in');
    });
}

// Set dark mode (evening)
function setDarkMode() {
    currentTheme = 'dark';
    localStorage.setItem('theme', 'dark');
    
    // Update UI
    darkMode.classList.remove('hidden');
    lightMode.classList.add('hidden');
    
    // Update body classes
    body.className = 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white';
    
    // Update toggle button
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    themeIcon.className = 'fas fa-moon text-2xl text-blue-300';
    themeToggle.className = 'fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-gray-800 shadow-lg flex items-center justify-center theme-toggle hover:shadow-xl';
    
    // Add fade-in animation
    darkMode.querySelectorAll('.fade-in').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
        el.classList.add('fade-in');
    });
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    if (currentTheme === 'light') {
        setDarkMode();
    } else {
        setLightMode();
    }
    
    // Add rotation animation
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = '';
    }, 400);
});

// Initialize theme on page load
initTheme();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Scroll reveal animation
const scrollRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            scrollRevealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

// Observe all scroll-reveal elements
document.querySelectorAll('.scroll-reveal').forEach(el => {
    scrollRevealObserver.observe(el);
});

// Profile images no longer have floating animation

// Add sparkle effect on hover for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Create sparkle effect
        for (let i = 0; i < 5; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            this.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 2000);
        }
    });
});

// Add parallax effect to background elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.absolute.inset-0');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
