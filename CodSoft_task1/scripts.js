document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".page");
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Toggle mobile navigation
  const navToggle = document.querySelector("nav");
  navToggle.addEventListener("click", () => {
    const navList = document.querySelector("nav ul");
    navList.classList.toggle("open");
  });
});


