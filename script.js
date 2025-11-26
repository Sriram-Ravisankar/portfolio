document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("feedbackMessage");
  const submitButton = document.getElementById("submitButton");

  // Navbar Toggle Elements
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  // Function to display feedback message (Still used if you manually trigger it,
  // but Netlify Forms typically redirects or refreshes on success)
  const showFeedback = (message, isSuccess = true) => {
    feedback.textContent = message;
    // Dynamically set classes for success or error styling
    feedback.className = `text-center mt-4 p-3 rounded-lg font-semibold transition-opacity duration-500 ${
      isSuccess ? "bg-green-500 text-white" : "bg-red-500 text-white"
    }`;
    feedback.classList.remove("hidden");

    // Hide message after 5 seconds
    setTimeout(() => {
      feedback.classList.add("hidden");
    }, 5000);
  };

  // Event listener for form submission
  form.addEventListener("submit", (event) => {

    // Show immediate visual feedback
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
  });

  // Event listener for menu toggle (Hamburger icon)
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("hidden");
    });

    const navLinksList = navLinks.querySelectorAll("a");
    navLinksList.forEach((link) => {
      link.addEventListener("click", () => {
        // Tailwind's 'sm' breakpoint is 640px
        if (window.innerWidth < 640) {
          navLinks.classList.add("hidden");
        }
      });
    });
  }
});
