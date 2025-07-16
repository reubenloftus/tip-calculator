  document.addEventListener("DOMContentLoaded", () => {
      const button = document.querySelector(".myButton");

      button.addEventListener("click", () => {
        const billInput = document.querySelector("#billAmount input");
        const bill = parseFloat(billInput.value);

        if (isNaN(bill) || bill <= 0) {
          alert("Please enter a valid bill amount");
          return;
        }

        const tipSelect = document.getElementById("tipAmount");
        const tipPercent = tipSelect.value.replace("%", "");
        const tipDecimal = parseFloat(tipPercent) / 100;

        const tipAmount = bill * tipDecimal;
        const totalAmount = bill + tipAmount;

        document.getElementById("tipResult").textContent = tipAmount.toFixed(2);
        document.getElementById("totalResult").textContent = totalAmount.toFixed(2);
      });
    });