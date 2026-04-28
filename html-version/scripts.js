// MARCORAEX HTML VERSION - SHARED JAVASCRIPT

// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('active');
}

// Close mobile menu when clicking a link
function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.remove('active');
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-up');
        entry.target.style.opacity = '1';
      }
    });
  }, observerOptions);

  // Observe all elements with data-animate attribute
  document.querySelectorAll('[data-animate]').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

// Form validation helper
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  const inputs = form.querySelectorAll('input[required], textarea[required]');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      input.style.borderColor = '#ff4444';
    } else {
      input.style.borderColor = 'rgba(0, 242, 255, 0.3)';
    }
  });

  return isValid;
}

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  initScrollAnimations();
});
