// Get the container for buttons
let buttonContainer = document.querySelector(".button-div");

// Function to calculate and display the result
let calculateResult = function (e) {
  // Check if the clicked element is within the button container
  if (e.target.classList[0] == "button-div") return;

  // Remove the previous result if it exists
  let oldResult = document.querySelector(".ans-div");
  if (oldResult) {
    oldResult.remove();
  }

  // Get input values
  let input1 = document.querySelector(".first-number").value;
  let input2 = document.querySelector(".second-number").value;

  // Check if inputs are empty
  if (input1 == "" || input2 == "") {
    alert("Enter The Inputs Correctly");
    return;
  }

  // Get the operator from the clicked button
  let operator = e.target.value;
  
  // Calculate the result using the eval function
  let ans = eval(` ${input1}${operator}${input2}`);

  // Handle cases where the result is not a finite number
  if (!isNaN(ans) && isFinite(ans)) {
    ans = ans;
  } else {
    ans = "Infinite";
  }

  // Create HTML to display the result
  let html = `
  <div class="ans-div">
    <p>The Result Is :</p>
    <p>${ans}</p>
  </div>
  `;

  // Insert the result HTML after the button container
  buttonContainer.insertAdjacentHTML("afterend", html);
};

// Add click event listener to the button container
buttonContainer.addEventListener("click", calculateResult);

