// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form submission handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Theme picker panel
const themeToggle = document.querySelector('.theme-toggle');
const themePanel = document.querySelector('.theme-panel');
const themeOptions = document.querySelectorAll('.theme-option');

const themePalettes = {
    black: {
        primary: '#0f172a',
        secondary: '#111827',
        accent: '#f8fafc'
    },
    green: {
        primary: '#22c55e',
        secondary: '#16a34a',
        accent: '#bef264'
    },
    blue: {
        primary: '#7c97ff',
        secondary: '#9f7bff',
        accent: '#38bdf8'
    },
    'light-blue': {
        primary: '#38bdf8',
        secondary: '#0ea5e9',
        accent: '#7dd3fc'
    },
    pink: {
        primary: '#f093fb',
        secondary: '#f5576c',
        accent: '#fb7185'
    }
};

function applyTheme(themeKey) {
    const palette = themePalettes[themeKey] || themePalettes.blue;
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty('--primary-color', palette.primary);
    rootStyle.setProperty('--secondary-color', palette.secondary);
    rootStyle.setProperty('--accent-color', palette.accent);
}

themeToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    themePanel.classList.toggle('open');
});

themeOptions.forEach(button => {
    button.addEventListener('click', function() {
        themeOptions.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        applyTheme(button.dataset.theme);
    });
});

document.addEventListener('click', function(event) {
    if (!themePanel.contains(event.target) && event.target !== themeToggle) {
        themePanel.classList.remove('open');
    }
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards and skill categories
document.querySelectorAll('.project-card, .skill-category, .stat').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});
