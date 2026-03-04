// Sticky Navbar & Active Links
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Scroll Reveal Effect
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
});

// Mobile Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Form Validation
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Basic Validation
    if (name.trim() === '' || phone.trim() === '' || message.trim() === '') {
        showStatus('Please fill in all fields.', 'error');
        return;
    }
    
    if (!/^[0-9]{10}$/.test(phone)) {
        showStatus('Please enter a valid 10-digit phone number.', 'error');
        return;
    }
    
    // Simulate form submission
    showStatus('Sending...', 'info');
    
    setTimeout(() => {
        showStatus('Thank you! Your message has been sent successfully.', 'success');
        contactForm.reset();
    }, 1500);
});

function showStatus(message, type) {
    formStatus.textContent = message;
    formStatus.style.color = type === 'success' ? '#28a745' : (type === 'error' ? '#dc3545' : '#0056b3');
    
    if (type === 'success') {
        setTimeout(() => {
            formStatus.textContent = '';
        }, 5000);
    }
}

// Initial check for reveal elements on load
window.addEventListener('load', () => {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight) {
            reveals[i].classList.add('active');
        }
    }
});