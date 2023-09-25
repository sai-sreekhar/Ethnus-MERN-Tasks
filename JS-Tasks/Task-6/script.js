// Select all input fields and make them required
let inputFields = document.querySelectorAll("input");
inputFields.forEach(function (input) {
  input.required = true;
});

// Define containers for different sections of the page
let pageContainers = {
  login: document.querySelector(".login-div"),
  createAccount: document.querySelector(".create-div"),
  forgotPassword: document.querySelector(".forgot-password-div"),
  ending: document.querySelector(".ending-div"),
};

// Define actions for buttons to switch between sections
let buttonActions = {
  forgot: () => hideAllSections() || pageContainers.forgotPassword.classList.remove("d-none"),
  create: () => hideAllSections() || pageContainers.createAccount.classList.remove("d-none"),
  login: () => hideAllSections() || pageContainers.login.classList.remove("d-none"),
  submit: () => hideAllSections() || pageContainers.ending.classList.remove("d-none"),
};

// Select all submit buttons and add event listeners
let submitButtons = document.querySelectorAll(".submit-button");
submitButtons.forEach((button) => {
  button.addEventListener("click", function () {
    let currentSection = Object.values(pageContainers).find(
      (section) => !section.classList.contains("d-none")
    );
    let currentInputs = currentSection.querySelectorAll("input");
    let allFieldsFilled = Array.from(currentInputs).every(
      (input) => input.value !== ""
    );

    if (!allFieldsFilled) {
      alert("Please fill in all fields before submitting.");
    } else {
      hideAllSections();
      pageContainers.ending.classList.remove("d-none");
    }
  });
});

// Function to hide all sections
function hideAllSections() {
  Object.values(pageContainers).forEach((section) => section.classList.add("d-none"));
}
