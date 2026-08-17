const inputPatterns = {
    firstName: /^[A-Za-z]{2,10}$/,
    lastName: /^[A-Za-z]{2,10}$/,
    mobile: /^[6-9][0-9]{9}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/
};


const inputs = document.querySelectorAll("#registrationForm input");
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

console.log(inputs);


inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        const pattern = inputPatterns[e.target.name];
        if (pattern) {
            validateField(e.target, pattern);
        }
    });
});


const validateField = (field, regex) => {
    if (regex.test(field.value)) {
        field.style.borderColor = "green";
        field.style.borderWidth = "2px";
    } else {
        field.style.borderColor = "red";
        field.style.borderWidth = "2px";
    }
};