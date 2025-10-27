// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth < 768) {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });
});

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

// Add scroll animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section, .card, .portfolio-item').forEach(el => {
  observer.observe(el);
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
  }
  
  lastScroll = currentScroll;
});

// Form validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple validation
    const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = '#ef4444';
      } else {
        input.style.borderColor = '#e5e7eb';
      }
    });
    
    if (isValid) {
      // Here you would typically send the form data to a server
      alert('Thank you for your message! (This is a demo site)');
      contactForm.reset();
    } else {
      alert('Please fill in all required fields.');
    }
  });
}

// Typing animation (optional)
function typeWriter(element, text, speed = 50) {
  if (!element) return;
  
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing animation for hero title if needed
const heroTitle = document.querySelector('.hero-title');
if (heroTitle && heroTitle.dataset.animate === 'type') {
  const text = heroTitle.textContent;
  typeWriter(heroTitle, text, 50);
}

