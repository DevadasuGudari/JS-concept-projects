const runButtons = document.querySelectorAll(".run");
const copyButtons = document.querySelectorAll(".copy");

runButtons.forEach((button) => {

    button.addEventListener("click", function () {

        const demo = this.parentElement;
        const code = demo.querySelector("pre").textContent;
        const output = demo.querySelector(".output");

        let result = [];

        const myConsole = {
            log: function (...values) {
                result.push(values.join(" "));
            }
        };

        try {

            new Function("console", code)(myConsole);

            output.textContent =
                result.length ? result.join("\n") : "Code executed successfully.";

        } catch (error) {

            output.textContent =
                error.name + ": " + error.message;

        }

    });

});


copyButtons.forEach((button) => {

    button.addEventListener("click", function () {

        const demo = this.parentElement;
        const code = demo.querySelector("pre").textContent;

        navigator.clipboard.writeText(code);

        this.textContent = "Copied!";

        setTimeout(() => {
            this.textContent = "Copy Code";
        }, 1000);

    });

});