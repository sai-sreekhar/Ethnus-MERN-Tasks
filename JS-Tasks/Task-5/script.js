// Get references to all input and textarea elements
let inputElements = [
  ...document.querySelectorAll("input"),
  ...document.querySelectorAll("textarea"),
];

// Get reference to the submit button
let submitButton = document.querySelector(".submit-button");

// Function to display an error message for a field
let showError = function (message, currentLabel) {
  let errorMessageHTML = `
      <p class="text-error">${message} is required</p>
  `;
  currentLabel.insertAdjacentHTML("afterend", errorMessageHTML);
};

// Function to clear error messages for a field
let clearError = function (currentLabel) {
  let errorMessage = currentLabel.nextElementSibling;

  if (errorMessage) {
    errorMessage.remove();
  }
};

// Function to check if all fields are filled out before submission
let checkFields = function (e) {
  let allFilled = true;

  inputElements.forEach(function (currentLabel) {
    clearError(currentLabel);

    let fieldName = currentLabel.name;
    let isEmpty = currentLabel.value == "";

    if (isEmpty) {
      allFilled = false;
      currentLabel.style.borderColor = "red";

      let message =
        fieldName == "Name" || fieldName == "Message"
          ? `This field`
          : `A valid ${fieldName}`;

      showError(message, currentLabel);
    } else {
      currentLabel.style.borderColor = "black";
    }
  });

  if (!allFilled) {
    e.preventDefault();
  }
};

// Add click event listener to the submit button
submitButton.addEventListener("click", checkFields);
