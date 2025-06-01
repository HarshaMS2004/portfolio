// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  themeToggle.textContent = body.classList.contains('dark') ? '🌞' : '🌓';
  // Save preference in localStorage
  if(body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.removeItem('theme');
  }
});

// Load saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  if(localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    themeToggle.textContent = '🌞';
  }
});

// Modal functions
function openModal(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Close modal if clicked outside content
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if(event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Typed text effect
const typedText = document.getElementById('typed-text');
const text = "I’m a MERN full stack developer passionate about building scalable web apps. Skilled in React, Node.js, and MongoDB.";
let idx = 0;

function type() {
  if(idx < text.length) {
    typedText.textContent += text.charAt(idx);
    idx++;
    setTimeout(type, 40);
  }
}

window.addEventListener('load', () => {
  typedText.textContent = '';
  idx = 0;
  type();
});

// Contact form submission (basic example, no backend)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  contactForm.reset();
});
