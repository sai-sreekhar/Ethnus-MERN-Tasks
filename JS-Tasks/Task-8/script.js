function validate() {
    // Validate First Name
    let firstName = document.forms["myform"]["name"].value;
    if (firstName == "") {
      var firstNameElement = document.getElementById("name");
      firstNameElement.style.borderWidth = "2px";
      firstNameElement.style.borderColor = "red";
      firstNameElement.style.borderStyle = "solid";
      let error = "&emsp;POOR";
      document.getElementById("f1").innerHTML = error;
      document.getElementById("f1").style.color = "red";
    }
  
    // Validate Last Name
    let lastName = document.forms["myform"]["lname"].value;
    if (lastName == "") {
      var lastNameElement = document.getElementById("lname");
      lastNameElement.style.borderWidth = "2px";
      lastNameElement.style.borderColor = "red";
      lastNameElement.style.borderStyle = "solid";
      let error = "&emsp;POOR";
      document.getElementById("f2").innerHTML = error;
      document.getElementById("f2").style.color = "red";
    }
  
    // Validate Email
    let email = document.forms["myform"]["email"].value;
    if (email == "") {
      var emailElement = document.getElementById("email");
      emailElement.style.borderWidth = "2px";
      emailElement.style.borderColor = "red";
      emailElement.style.borderStyle = "solid";
      let error = "&emsp;POOR";
      document.getElementById("f3").innerHTML = error;
      document.getElementById("f3").style.color = "red";
    }
  
    // Validate Password
    let password = document.forms["myform"]["password"].value;
    if (password == "") {
      var passwordElement = document.getElementById("password");
      passwordElement.style.borderWidth = "2px";
      passwordElement.style.borderColor = "red";
      passwordElement.style.borderStyle = "solid";
      let error = "&emsp;POOR";
      document.getElementById("f4").innerHTML = error;
      document.getElementById("f4").style.color = "red";
    }
  
    // Validate Re-enter Password
    let reenteredPassword = document.forms["myform"]["rpassword"].value;
    if (reenteredPassword == "") {
      var reenteredPasswordElement = document.getElementById("rpassword");
      reenteredPasswordElement.style.borderWidth = "2px";
      reenteredPasswordElement.style.borderColor = "red";
      reenteredPasswordElement.style.borderStyle = "solid";
      let error = "&emsp;POOR OR MISMATCH";
      document.getElementById("f5").innerHTML = error;
      document.getElementById("f5").style.color = "red";
    }
  
    // Validate Age
    let age = document.forms["myform"]["age"].value;
    if (age == "") {
      var ageElement = document.getElementById("age");
      ageElement.style.borderWidth = "2px";
      ageElement.style.borderColor = "red";
      ageElement.style.borderStyle = "solid";
      let error = "&emsp;POOR";
      document.getElementById("f7").innerHTML = error;
      document.getElementById("f7").style.color = "red";
    }
  
    // Validate Address
    let address = document.forms["myform"]["address"].value;
    if (address == "") {
      var addressElement = document.getElementById("address");
      addressElement.style.borderWidth = "2px";
      addressElement.style.borderColor = "red";
      addressElement.style.borderStyle = "solid";
      var addressErrorElement = document.getElementById("f8");
      addressErrorElement.style.color = "red";
      let error = "&emsp;POOR";
      addressErrorElement.innerHTML = error;
    }
  
    // Validate State
    let state = document.forms["myform"]["state"].value;
    if (state == "") {
      var stateElement = document.getElementById("state");
      stateElement.style.borderWidth = "2px";
      stateElement.style.borderColor = "red";
      stateElement.style.borderStyle = "solid";
      let error = "&emsp;POOR";
      document.getElementById("f9").innerHTML = error;
      document.getElementById("f9").style.color = "red";
    }
  
    // Validate Country
    let country = document.forms["myform"]["cc"].value;
    if (country == "Choose your country") {
      var countryElement = document.getElementById("cc");
      countryElement.style.borderWidth = "2px";
      countryElement.style.borderColor = "red";
      countryElement.style.borderStyle = "solid";
      let error = "&emsp;POOR";
      document.getElementById("f10").innerHTML = error;
      document.getElementById("f10").style.color = "red";
    }
  
    // Validate Gender
    let gender = document.forms["myform"]["gg"].value;
    if (gender == "") {
      let error = "&emsp;This field is required";
      document.getElementById("f11").innerHTML = error;
      document.getElementById("f11").style.color = "red";
    }
  
    // Validate Checkbox
    let checkboxChecked = document.getElementById("ffg").checked;
    if (!checkboxChecked) {
      let error = "&emsp;This field is required";
      document.getElementById("f12").innerHTML = error;
      document.getElementById("f12").style.color = "red";
    }
  }
  