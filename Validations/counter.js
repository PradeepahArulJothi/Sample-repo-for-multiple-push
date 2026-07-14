
const textComments = document.getElementById("textComments");
const charCount = document.getElementById("charCount");
const btnSubmit = document.getElementById("btnSubmit");
const charRemaining = document.getElementById("charRemaining");

const textError = document.getElementById("textError");
const textWarning = document.getElementById("textWarning");
const maxCount = 300;

function textAreaValidate() {
    const textValue = textComments.value.trim();

    textError.textContent = "";
    textError.classList.add("hidden-errorMessage");

    textWarning.textContent = "";
    textWarning.classList.add("hidden-errorMessage");
    //char counter number update
    charCount.textContent = textValue.length;
    charRemaining.textContent = maxCount-textValue.length;

    // Rule 1: Check if the field is completely empty
    if (textValue === "") {
        showError("Text area cannot be left blank.", textError, textComments);
        return false;
    }

    // Rule 2: Enforce a maximum length requirement
    if (textValue.length == maxCount) {
        showError("Text area must contain maximum 300 characters.", textWarning, textComments);
        return false;
    }
    return true;
}

// Error Message
function showError(message, errorDisplay, inputValue) {
    errorDisplay.textContent = message;
    errorDisplay.classList.remove("hidden-errorMessage");

}

textComments.addEventListener('input', function () {
    textAreaValidate();
})

// Submit
document.getElementById("counterForm").addEventListener("submit", function (event) {
    // Prevent default page reload on submission
    event.preventDefault();
    if (textAreaValidate()) {
        alert("Form fields validated successfully.");
        charCount.textContent = 0;
        this.reset();
    }
});