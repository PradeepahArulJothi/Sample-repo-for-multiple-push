//Login html

// Target DOM elements and trim empty spaces
const nameInput = document.getElementById('logName');
const inputEmail = document.getElementById('logEmail');
const inputPassword = document.getElementById('logPassword');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

const submitBtn = document.getElementById("loginSubmit");

// FullName input
function validateName() {
    const nameValue = nameInput.value.trim();
    // Regex allowing only English letters, spaces, hyphens, and apostrophes
    const nameRegex = /^[a-zA-Z\s'-]+$/;
    clearError(nameError);

    // Rule 1: Check if the field is completely empty
    if (nameValue === "") {
        showError("Name field cannot be left blank.", nameError, nameInput);
        return false;
    }

    // Rule 2: Enforce a minimum length requirement
    if (nameValue.length < 2) {
        showError("Name must contain at least 2 characters.", nameError, nameInput);
        return false;
    }

    // Rule 3: Enforce format restrictions via regex test
    if (!nameRegex.test(nameValue)) {
        showError("Names can only contain letters, spaces, hyphens, or apostrophes.", nameError, nameInput);
        return false;
    }
    return true;
}

// Email validation
function validateEmail() {
    const emailValue = inputEmail.value.trim();
    clearError(emailError);

    // Rule 1: Check if the field is completely empty
    if (emailValue === "") {
        showError("Email field cannot be left blank.", emailError, inputEmail);
        return false;
    }

    // Rule 2: Regex pattern 
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(emailValue)) {
        showError("Enter proper email format", emailError, inputEmail);
        return false;
    }

    return true;
}

// password validation
function validatePassword() {
    const password = inputPassword.value.trim();
    clearError(passwordError);

    // Rule 1: Check if the field is completely empty
    if (password === "") {
        showError("Password field cannot be left blank.", passwordError, inputPassword);
        return false;
    }
    // Rule 2: Enforce a minimum length 
    if (password.length < 6) {
        showError("Password must contain at least 6 characters.", passwordError, inputPassword);
        return false;
    }
    // Rule 3: Regex pattern 
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
        showError("Password should have lower case, uppercase, number and special characters ", passwordError, inputPassword);
        return false;
    }

    // Rule 4: Enforce a maximum length 
    if (password.length > 20) {
        showError("Password must contain maximum 20 characters.", passwordError, inputPassword);
        return false;
    }
    return true;
}



// Clear any existing error state
function clearError(error) {
    error.textContent = "";
    error.classList.add("hidden-errorMessage");
}

// Error Message
function showError(message, errorDisplay, inputValue) {
    errorDisplay.textContent = message;
    errorDisplay.classList.remove("hidden-errorMessage");

}

function validateForm() {
    submitBtn.disabled = !(
        validateName() &&
        validateEmail() &&
        validatePassword()
    );
}

nameInput.addEventListener("keyup", function () {
    validateName();
    validateForm();
});

inputEmail.addEventListener("keyup", function () {
    validateEmail();
    validateForm();
});

inputPassword.addEventListener("keyup", function () {
    validatePassword();
    validateForm();
});


nameInput.addEventListener("blur", function () {
    validateName();
    validateForm();
});

inputEmail.addEventListener("blur", function () {
    validateEmail();
    validateForm();
});

inputPassword.addEventListener("blur", function () {
    validatePassword();
    validateForm();
});


// Submit
document.getElementById("loginForm").addEventListener("submit", function (event) {
    // Prevent default page reload on submission
    event.preventDefault();

    if (validateName() && validateEmail() && validatePassword()) {
        alert("Form fields validated successfully.");
        this.reset();
        submitBtn.disabled = true;
    }
});