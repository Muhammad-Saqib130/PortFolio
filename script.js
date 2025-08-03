const hamburger = document.querySelector('.hamburger');
const sidebar = document.getElementById('nav-links');
const links = sidebar.querySelectorAll('a');
hamburger.addEventListener('click', () => {
sidebar.classList.toggle('open');
});
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1); 
    const targetSection = document.getElementById(targetId);
    sidebar.classList.remove('open'); 
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.contact-icon');
    icons.forEach((icon, index) => {
        // Initial hidden state
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(20px)';
        
        // Animate in
        setTimeout(() => {
            icon.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0)';
        }, index * 150);
    });
});