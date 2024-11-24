// script.js

// Apply animations on scroll
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
      }
    });
  });

  animatedElements.forEach((el) => observer.observe(el));
});

// Smooth scroll for the Learn More button

// Smooth Scroll for the Learn More Button

// Add a delay to animations for sequential effects
document.querySelectorAll(".animate").forEach((element, index) => {
  element.style.animationDelay = `${index * 0.3}s`;
});
