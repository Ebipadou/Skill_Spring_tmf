const signUpButton = document.getElementById("sign-up-toggle");
const signInButton = document.getElementById("sign-in-toggle");
const signUpForm = document.getElementById("sign-up");
const signInForm = document.getElementById("sign-in");




// Sign Up/Sign In Toggle Buttons
signUpButton.addEventListener("click", () => {
  signInButton.classList.remove("active");
  signUpButton.classList.add("active");
  signInForm.classList.remove("active");
  signUpForm.classList.add("active");
});


signInButton.addEventListener("click", () => {
  signUpButton.classList.remove("active");
  signInButton.classList.add("active");
  signInForm.classList.add("active");
  signUpForm.classList.remove("active");
});

signUpForm.addEventListener("click", (e) => {
  e.preventDefault();
})

signInForm.addEventListener("click", (e) => {
  e.preventDefault();
})