// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        const t = document.querySelector(this.getAttribute('href'));
        if(t) t.scrollIntoView({behavior:'smooth',block:'start'});
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    const dark = document.body.classList.contains('dark-mode');
    if(window.scrollY > 50) nav.style.background = dark ? '#2d2d2d' : 'white';
});

// Dark Mode Toggle
const toggle = document.getElementById('darkModeToggle');
const icon = document.getElementById('darkModeIcon');

// Check for saved dark mode preference
if(localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    icon.classList.remove('bi-moon-fill');
    icon.classList.add('bi-sun-fill');
}

// Toggle dark mode on button click
toggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
        icon.classList.remove('bi-moon-fill');
        icon.classList.add('bi-sun-fill');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.classList.remove('bi-sun-fill');
        icon.classList.add('bi-moon-fill');
        localStorage.setItem('darkMode', 'disabled');
    }
});
