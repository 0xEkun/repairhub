document.addEventListener("DOMContentLoaded", () => {
  const screens = document.querySelectorAll(".screen");
  const navTriggers = document.querySelectorAll("[data-target]");
  const signupForm = document.getElementById("customer-signup-form");
  const techBtn = document.getElementById("tech-onboarding-btn");
  const googleBtn = document.getElementById("google-signup-btn");

  // Switch between screens cleanly
  function showScreen(targetId) {
    screens.forEach((screen) => {
      screen.classList.remove("active");
    });

    const targetScreen = document.getElementById(targetId);
    if (targetScreen) {
      targetScreen.classList.add("active");
    }
  }

  // Attach click handlers to all navigation buttons/links
  navTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const targetScreenId = trigger.getAttribute("data-target");
      showScreen(targetScreenId);
    });
  });

  // Handle customer sign-up submission
  if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const fullName = document.getElementById("fullname").value.trim();
      const phone = document.getElementById("phone").value.trim();

      // Placeholder for backend API / OTP flow
      alert(`Welcome to Repairhub, ${fullName}!\nSending OTP verification to ${phone}...`);
    });
  }

  // Secondary role button placeholder
  if (techBtn) {
    techBtn.addEventListener("click", () => {
      alert("Redirecting to Technician Onboarding...");
    });
  }

  // Google OAuth placeholder
  if (googleBtn) {
    googleBtn.addEventListener("click", () => {
      alert("Launching Google Sign-In flow...");
    });
  }
});

