// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form submission handler
const ctaForm = document.querySelector(".cta-form");
if (ctaForm) {
  ctaForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;

    // Simulate form submission
    console.log("[v0] Email submitted:", email);

    // Show success message
    const button = this.querySelector("button");
    const originalText = button.textContent;
    button.textContent = "Request Sent!";
    button.style.backgroundColor = "var(--color-accent)";

    // Reset form
    this.reset();

    // Reset button after 3 seconds
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = "";
    }, 3000);
  });
}

// Add scroll-based header background
let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
  } else {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  }

  lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe feature cards and stat items
document.querySelectorAll(".feature-card, .stat-item").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

console.log("[v0] Pure Social landing page initialized");
