// Exercise 6
function validate(event) {
	let error = 0;
	let fName = document.getElementById("fName");
	let fLastN = document.getElementById("fLastN");
	let fEmail = document.getElementById("fEmail");
	let fPassword = document.getElementById("fPassword");
	let fAddress = document.getElementById("fAddress");
	let fPhone = document.getElementById("fPhone");
  
	let errorName = document.getElementById("errorName");
	let errorLastN = document.getElementById("errorLastN");
	let errorEmail = document.getElementById("errorEmail");
	let errorPassword = document.getElementById("errorPassword");
	let errorAddress = document.getElementById("errorAddress");
	let errorPhone = document.getElementById("errorPhone");
  
	let isValid = true;
  
	// Definir regular expressions
	let letterRegex = /^[A-Za-z]+$/;
	let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let passwordRegex = /(?=.*[a-zA-Z])(?=.*[0-9])/;
	let addressRegex = /^[a-zA-Z0-9\s/,-]+$/;
	let numberRegex = /^\d+$/;
  
	function validateField(input, errorElement, regex, minLength) {
	  let inputValue = input.value.trim();
	  if (inputValue.length < minLength || !regex.test(inputValue)) {
		errorElement.style.display = "block";
		input.classList.add("is-invalid");
		isValid = false;
		error++;
	  } else {
		errorElement.style.display = "none";
		input.classList.remove("is-invalid");
	  }
	}
  
	validateField(fName, errorName, letterRegex, 3);
	validateField(fLastN, errorLastN, letterRegex, 3);
	validateField(fEmail, errorEmail, emailRegex, 3);
	validateField(fPassword, errorPassword, passwordRegex, 4);
	validateField(fAddress, errorAddress, addressRegex, 3);
	validateField(fPhone, errorPhone, numberRegex, 9);

	if (error > 0 || !isValid) {
	  event.preventDefault();
	  event.stopPropagation();
	  alert(
		"Please correct the highlighted fields and fill out all required information."
	  );
	} else {
	  alert("Form submitted successfully!");
	}
  }
  
  
  