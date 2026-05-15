// Anime.js Configuration for SkillSpring Splash Screen

// Splash Screen Animation Sequence
document.addEventListener("DOMContentLoaded", function () {
  // Step 1: Show SkillSpring splash for 3 seconds, then fade out
  setTimeout(function () {
    const mainPage = document.querySelector(".main-page");
    mainPage.classList.add("fade-out");

    // Step 2: After fade out, show loading screen
    setTimeout(function () {
      const loadingContainer = document.querySelector(".loading-container");
      loadingContainer.classList.add("active");

      // Step 3: After 2 seconds of loading, show slide-pg-1
      setTimeout(function () {
        loadingContainer.classList.remove("active");
        const slidePg1 = document.querySelector(".slide-pg-1");
        slidePg1.classList.add("show");

        // Step 4: Animate the content on slide-pg-1
        animateSlideContent();
      }, 2000);
    }, 500); // Small delay for smooth transition
  }, 3000); // Show splash for 3 seconds
});

// Animate slide content
function animateSlideContent() {
  anime
    .timeline()
    .add({
      targets: ".container img",
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      easing: "easeOutQuad",
    })
    .add(
      {
        targets: ".final-container h3",
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        easing: "easeOutQuad",
      },
      "-=400",
    )
    .add(
      {
        targets: ".final-container p",
        opacity: [0, 1],
        duration: 600,
        easing: "easeOutQuad",
      },
      "-=300",
    );
}

// Button hover effect
document.addEventListener("click", function () {
  const nextBtn = document.getElementById("next");
  if (nextBtn) {
    nextBtn.addEventListener("mouseenter", function () {
      anime({
        targets: "#next",
        scale: 1.05,
        duration: 300,
        easing: "easeOutQuad",
      });
    });

    nextBtn.addEventListener("mouseleave", function () {
      anime({
        targets: "#next",
        scale: 1,
        duration: 300,
        easing: "easeOutQuad",
      });
    });

    nextBtn.addEventListener("click", function () {
      anime({
        targets: "#next",
        scale: 0.95,
        duration: 100,
        easing: "easeOutQuad",
      });
    });
  }
});
