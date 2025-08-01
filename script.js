/** @format */

// Navigation functionality
const navLinks = document.querySelectorAll(".nav-link");
// const pages = document.querySelectorAll(".page");
const ctaButtons = document.querySelectorAll(".cta-button");

// function showPage(pageId) {
//   // Hide all pages
//   pages.forEach((page) => {
//     page.classList.remove("active");
//   });

//   // Show selected page
//   const targetPage = document.getElementById(pageId);
//   if (targetPage) {
//     targetPage.classList.add("active");
//     targetPage.classList.add("fade-in");
//   }

//   // Update active nav link
//   navLinks.forEach((link) => {
//     link.classList.remove("active");
//   });

//   const activeLink = document.querySelector(`[data-page="${pageId}"]`);
//   if (activeLink) {
//     activeLink.classList.add("active");
//   }
// }

// Add click handlers to nav links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const pageId = link.getAttribute("data-page");
    showPage(pageId);
  });
});

// Add click handlers to CTA buttons
ctaButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const pageId = button.getAttribute("data-page");
    if (pageId) {
      showPage(pageId);
    }
  });
});

// Form submission handler
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert(
    "Thank you for your appointment request! We will contact you shortly to confirm your appointment."
  );
});

// Add smooth scrolling and animations
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, observerOptions);

  // Observe all cards and content elements
  document
    .querySelectorAll(
      ".feature-card, .content-card, .service-item, .doctor-card"
    )
    .forEach((el) => {
      observer.observe(el);
    });
});
