const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const operators = ["+", "-", "/", "*"];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        try {
            output = eval(output);
        } catch (error) {
            output = "Error";
        }
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else if (operators.includes(btnValue)) {
        // Jika operator yang ditekan adalah operator matematika, pastikan operator yang
        // baru tidak ditambahkan jika yang terakhir sudah operator.
        if (operators.includes(output[output.length - 1])) return;
        output += btnValue;
    } else {
        output += btnValue;
    }
    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});