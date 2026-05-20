const signUpButton = document.getElementById("sign-up-toggle");
const signInButton = document.getElementById("sign-in-toggle");
const signUpForm = document.getElementById("sign-up");
const signInForm = document.getElementById("sign-in");
const submitSignup = document.getElementById("submitSignup");
const submitSignin = document.getElementById("submitSignin");

// Smooth toggle animation with Anime.js
signUpButton.addEventListener("click", () => {
  signInButton.classList.remove("active");
  signUpButton.classList.add("active");

  // Fade out current form
  anime({
    targets: signInForm,
    opacity: 0,
    duration: 300,
    easing: "easeInOutQuad",
  });

  // Remove active and fade in new form
  setTimeout(() => {
    signInForm.classList.remove("active");
    signUpForm.classList.add("active");
  }, 150);

  // Animate button scale
  anime({
    targets: signUpButton,
    scale: 1.05,
    duration: 200,
    easing: "easeOutQuad",
  });

  clearErrors();
});

signInButton.addEventListener("click", () => {
  signUpButton.classList.remove("active");
  signInButton.classList.add("active");

  // Fade out current form
  anime({
    targets: signUpForm,
    opacity: 0,
    duration: 300,
    easing: "easeInOutQuad",
  });

  // Remove active and fade in new form
  setTimeout(() => {
    signUpForm.classList.remove("active");
    signInForm.classList.add("active");
  }, 150);

  // Animate button scale
  anime({
    targets: signInButton,
    scale: 1.05,
    duration: 200,
    easing: "easeOutQuad",
  });

  clearErrors();
});

function clearErrors() {
  document
    .querySelectorAll(".errors")
    .forEach((span) => (span.textContent = ""));
}

// Helper: show error for a specific field
function showError(elementId, message) {
  const errorSpan = document.getElementById(elementId);
  if (errorSpan) {
    errorSpan.textContent = message;

    // Shake animation for error
    anime({
      targets: errorSpan,
      translateX: [-5, 5, -5, 5, 0],
      duration: 400,
      easing: "easeInOutQuad",
    });
  }

  setTimeout(() => {
    if (errorSpan) {
      anime({
        targets: errorSpan,
        opacity: 0,
        duration: 300,
        easing: "easeOutQuad",
        complete: () => {
          errorSpan.textContent = "";
          errorSpan.style.opacity = "1";
        },
      });
    }
  }, 3000);
}

// Sign Up validation
function validateSignUp() {
  const firstname = document.getElementById("signup-firstname").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value.trim();

  let isValid = true;
  clearErrors();

  if (firstname === "") {
    showError("signup-name-error", "First name is required.");
    isValid = false;
  }
  if (email === "") {
    showError("signup-email-error", "Email is required.");
    isValid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    showError("signup-email-error", "Enter a valid email address.");
    isValid = false;
  }
  if (password === "") {
    showError("signup-password-error", "Password is required.");
    isValid = false;
  } else if (password.length < 6) {
    showError(
      "signup-password-error",
      "Password must be at least 6 characters.",
    );
    isValid = false;
  }

  if (isValid) {
    // Success animation
    anime({
      targets: submitSignup,
      backgroundColor: ["#7C3AED", "#22c55e"],
      duration: 500,
      easing: "easeInOutQuad",
    });

    setTimeout(() => {
      anime({
        targets: submitSignup,
        backgroundColor: "var(--my-gradient-color)",
        duration: 500,
      });
    }, 500);

    alert("Sign Up successful! (Demo)");
    signUpButton.classList.remove("active");
    signInButton.classList.add("active");
  }
}

// Sign In validation
function validateSignIn() {
  const email = document.getElementById("signin-email").value.trim();
  const password = document.getElementById("signin-password").value.trim();

  let isValid = true;
  clearErrors();

  if (email === "") {
    showError("signin-email-error", "Email is required.");
    isValid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    showError("signin-email-error", "Enter a valid email address.");
    isValid = false;
  }
  if (password === "") {
    showError("signin-password-error", "Password is required.");
    isValid = false;
  }

  if (isValid) {
    // Success animation
    anime({
      targets: submitSignin,
      backgroundColor: ["#7C3AED", "#22c55e"],
      duration: 500,
      easing: "easeInOutQuad",
    });

    setTimeout(() => {
      anime({
        targets: submitSignin,
        backgroundColor: "var(--my-gradient-color)",
        duration: 500,
      });
    }, 500);

    alert("Sign In successful! (Demo)");
    window.location.href = "/discover.html";

  }
}

// Attach event listeners to buttons
submitSignup.addEventListener("click", (e) => {
  e.preventDefault();

  // Button press animation
  anime({
    targets: submitSignup,
    scale: [1, 0.95, 1],
    duration: 300,
    easing: "easeOutElastic(1, 0.6)",
  });

  validateSignUp();
});

submitSignin.addEventListener("click", (e) => {
  e.preventDefault();

  // Button press animation
  anime({
    targets: submitSignin,
    scale: [1, 0.95, 1],
    duration: 300,
    easing: "easeOutElastic(1, 0.6)",
  });

  validateSignIn();
});

// Add staggered animation to form inputs on page load
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".input");

  anime.stagger = 0;
  anime({
    targets: inputs,
    opacity: [0, 1],
    translateX: [-20, 0],
    delay: anime.stagger(50),
    duration: 500,
    easing: "easeOutQuad",
  });

  // Animate labels
  const labels = document.querySelectorAll("label");
  anime({
    targets: labels,
    opacity: [0, 1],
    translateY: [-10, 0],
    delay: anime.stagger(50),
    duration: 500,
    easing: "easeOutQuad",
  });

  // Add ripple effect on button hover
  const buttons = document.querySelectorAll(".submit-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      anime({
        targets: btn,
        boxShadow: [
          "0 10px 25px rgba(124, 58, 237, 0.35)",
          "0 15px 35px rgba(124, 58, 237, 0.5)",
        ],
        duration: 300,
        easing: "easeOutQuad",
      });
    });

    btn.addEventListener("mouseleave", () => {
      anime({
        targets: btn,
        boxShadow: "0 10px 25px rgba(124, 58, 237, 0.35)",
        duration: 300,
        easing: "easeOutQuad",
      });
    });
  });
});
