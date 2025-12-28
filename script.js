document.addEventListener("DOMContentLoaded", () => {

    const expressionDisplay = document.getElementById("expression");
    const resultDisplay = document.getElementById("result");
    const buttons = document.querySelectorAll("button");

    let expression = "";
    let justCalculated = false;
    let showPreview = true;   // 🔹 controls preview visibility

    function updateDisplay() {
        expressionDisplay.textContent = expression || "0";

        if (showPreview) {
            updateLiveResult();
        } else {
            resultDisplay.textContent = "";
        }
    }

    function updateLiveResult() {
        if (!expression || expression.endsWith(" ")) {
            resultDisplay.textContent = "";
            return;
        }

        try {
            const evalExp = expression
                .replace(/×/g, "*")
                .replace(/÷/g, "/")
                .replace(/−/g, "-");

            const result = eval(evalExp);
            resultDisplay.textContent = result;
        } catch {
            resultDisplay.textContent = "";
        }
    }

    function handleNumber(num) {
    const display = document.getElementById("display");

    // 🔥 If user types a number AFTER "=", start fresh
    if (justCalculated) {
        expression = num;
        justCalculated = false;
        showPreview = true;
        display.classList.remove("final");
        return;
    }

    expression += num;
}


    function handleOperator(op) {
    if (!expression) return;

    // 🔥 If last action was "=", continue calculation
    if (justCalculated) {
        justCalculated = false;
        showPreview = true;
    }

    if (expression.endsWith(" ")) return;
    expression += " " + op + " ";
}


    function calculate() {
        try {
            const evalExp = expression
                .replace(/×/g, "*")
                .replace(/÷/g, "/")
                .replace(/−/g, "-");

            const result = eval(evalExp);
            expression = result.toString();
            showPreview = false;      // 🔥 hide preview after "="
            justCalculated = true;
            updateDisplay();
        } catch {
            expressionDisplay.textContent = "Error";
            resultDisplay.textContent = "";
            expression = "";
        }
    }

    function clearAll() {
        expression = "";
        resultDisplay.textContent = "";
        justCalculated = false;
        showPreview = true;
        updateDisplay();
    }

    function deleteLast() {
        if (justCalculated) return;

        if (expression.endsWith(" ")) {
            expression = expression.slice(0, -3);
        } else {
            expression = expression.slice(0, -1);
        }
        showPreview = true;
        updateDisplay();
    }

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const value = btn.textContent;

            if (!isNaN(value) || value === ".") {
                handleNumber(value);
            } else if (value === "C") {
                clearAll();
            } else if (value === "Del") {
                deleteLast();
            } else if (value === "=") {
                calculate();
                return;
            } else {
                handleOperator(value);
            }

            updateDisplay();
        });
    });

    updateDisplay();
});
