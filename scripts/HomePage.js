function createStars(containerId, count) {
  const starsContainer = document.getElementById(containerId);
  if (!starsContainer) return;

  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Random position
    const top = Math.random() * 100;
    const left = Math.random() * 100;

    // Random size (between 1px and 3px)
    const size = Math.random() * 2 + 1;

    star.style.top = `${top}%`;
    star.style.left = `${left}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Randomize animation start (delay)
    star.style.animationDelay = `${Math.random() * 5}s`;

    starsContainer.appendChild(star);
  }
}

// Simple animation for the hero section
document.addEventListener("DOMContentLoaded", function () {
  // 1. Create the stars for all three sections
  createStars("featuresStars", 150);
  createStars("recommendationsStars", 120);
  createStars("howItWorksStars", 100);
  createStars("articlesStars", 100);

  const heroContent = document.querySelector(".hero-content");
  heroContent.style.opacity = "0";
  heroContent.style.transform = "translateY(30px) scale(0.95)";

  setTimeout(() => {
    heroContent.style.transition = "opacity 1s, transform 1s";
    heroContent.style.opacity = "1";
    heroContent.style.transform = "translateY(0) scale(1)";
  }, 300);

  // Add parallax effect to bronze orbs
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll(".bronze-orb");

    orbs.forEach((orb, index) => {
      const speed = 0.05 * (index + 1);
      // Updated transform to use the new float-orb keyframe logic
      orb.style.transform = `translateY(${scrolled * speed}px) rotate(${
        scrolled * 0.1
      }deg)`;
    });
  });

  // Add intersection observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe feature cards
  document.querySelectorAll(".feature-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s, transform 0.6s";
    observer.observe(card);
  });

  // Observe destination cards
  document.querySelectorAll(".destination-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s, transform 0.6s";
    observer.observe(card);
  });

  // Observe steps
  document.querySelectorAll(".step").forEach((step) => {
    step.style.opacity = "0";
    step.style.transform = "translateY(30px)";
    step.style.transition = "opacity 0.6s, transform 0.6s";
    observer.observe(step);
  });
});
document.querySelector(".workBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const section1 = document.querySelector("#how-it-works");
  const s1coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: "smooth" });
});
