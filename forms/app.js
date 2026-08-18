// Regular Expressions for all input fields
const inputPatterns = {
    firstName: /^[A-Za-z]{2,10}$/,
    lastName: /^[A-Za-z]{2,10}$/,
    mobile: /^[6-9][0-9]{9}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/
};

// Select all inputs
const inputs = document.querySelectorAll("#registrationForm input");
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

console.log(inputs);

// Validate each field in real-time
inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {

        const pattern = inputPatterns[e.target.name];

        if (pattern) {
            validateField(e.target, pattern);
        }
    });
});


// Function to validate field
const validateField = (field, regex) => {
    if (regex.test(field.value)) {
        field.style.borderColor = "green";
        field.style.borderWidth = "2px";
    } else {
        field.style.borderColor = "red";
        field.style.borderWidth = "2px";
    }
};

// On form submit
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        message.style.color = "red";
        return;
    }

    // Check if all fields are valid
    const allValid = Array.from(inputs).every((input) => {
        const pattern = inputPatterns[input.name];
        return pattern ? pattern.test(input.value) : true;
    });

    if (allValid) {
        message.textContent = "Form submitted successfully!";
        message.style.color = "green";
        form.reset();

        // Reset border colors
        inputs.forEach((input) => (input.style.borderColor = "#ccc"));
    } else {
        message.textContent = "Please fill all fields correctly!";
        message.style.color = "red";
    }
});


function validatePassword(password) {
    if (password.length < 8) {
        return "Password must be at least 8 characters long";
    }

    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecialChar = false;

    const specialCharacters = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

    for (let char of password) {
        if (char >= "A" && char <= "Z") {
            hasUppercase = true;
        }

        if (char >= "a" && char <= "z") {
            hasLowercase = true;
        }

        if (char >= "0" && char <= "9") {
            hasNumber = true;
        }

        if (specialCharacters.includes(char)) {
            hasSpecialChar = true;
        }
    }

    if (!hasUppercase) {
        return "Password must contain an uppercase letter";
    }

    if (!hasLowercase) {
        return "Password must contain a lowercase letter";
    }

    if (!hasNumber) {
        return "Password must contain a number";
    }

    if (!hasSpecialChar) {
        return "Password must contain a special character";
    }

    return "Password is valid";
}

console.log(validatePassword("Hello123!"));
