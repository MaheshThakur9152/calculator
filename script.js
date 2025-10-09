const display = document.getElementById("display");
const Calci = document.getElementById("Calci");
let currentInput = "";

const buttons = [
    "1","2","3","+",
    "4","5","6","-",
    "7","8","9","*",
    "0",".","/","Enter",
    "reset"
];

buttons.forEach(btnText => {
    const btn = document.createElement("button");
    btn.textContent = btnText;
    Calci.appendChild(btn);

    btn.addEventListener("click", function() {
        if(btnText === "Enter") {
            try {
                currentInput = eval(currentInput);
                display.value = currentInput;
                display.classList.add("result-animation");
                setTimeout(() => display.classList.remove("result-animation"), 400);
            } catch {
                display.value = "Error";
            }
        } else if(btnText.toLowerCase() === "reset") {
            currentInput = "";
            display.value = "";
        } else {
            currentInput += btnText;
            display.value = currentInput;
        }
    });
});
