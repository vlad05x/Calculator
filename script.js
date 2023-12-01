let display = document.querySelector(".display");
let buttons = Array.from(document.querySelectorAll(".button"));
let operatorClicked = false;
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "0";
        break;
      case "=":
        display.innerText = eval(display.innerText);
        break;
      case "%":
        let passedText = display.innerText + "/100";
        display.innerText = eval(passedText);
        break;
      case "C":
        let currentNumber = display.innerText;
        display.innerText = currentNumber.slice(0, -1);
        if (display.innerText === "") {
          display.innerText = "0";
        }
        break;
      default:
        if (e.target.innerText.match(/[+\-*/]/) && operatorClicked) {
          display.innerText = "Error";
        } else {
          if (display.innerText == "0" && e.target.innerText !== ".") {
            display.innerText = e.target.innerText;
          } else {
            display.innerText += e.target.innerText;
          }
          operatorClicked = e.target.innerText.match(/[+\-*/]/) ? true : false; // Устанавливаем флаг, если нажат оператор
        }
    }
  });
});
