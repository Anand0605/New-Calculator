let display = document.getElementById("display");

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function () {
    display.innerHTML = "";
});

let equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", function () {
    let equation = display.innerHTML;
    let result = eval(equation);
    display.innerHTML = result;
});

let buttons = document.querySelectorAll("button:not(#clear):not(#equals)");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let value = buttons[i].value;
        display.innerHTML += value;
    });
}
