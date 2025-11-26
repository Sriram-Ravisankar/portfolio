document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("feedbackMessage");
  const submitButton = document.getElementById("submitButton");

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  const showFeedback = (message, isSuccess = true) => {
    feedback.textContent = message;
    feedback.className = `text-center mt-4 p-3 rounded-lg font-semibold transition-opacity duration-500 ${
      isSuccess ? "bg-green-500 text-white" : "bg-red-500 text-white"
    }`;
    feedback.classList.remove("hidden");

    setTimeout(() => {
      feedback.classList.add("hidden");
    }, 5000);
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    setTimeout(() => {
      showFeedback(
        "Thank you for your message! I will get back to you shortly.",
        true
      );
      form.reset(); 

      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
    }, 1500);
  });

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("hidden");
    });

    const navLinksList = navLinks.querySelectorAll("a");
    navLinksList.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 640) {
          navLinks.classList.add("hidden");
        }
      });
    });
  }

});
