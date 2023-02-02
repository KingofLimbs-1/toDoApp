// Variables
function calculate() {

    var input1 = parseFloat(document.getElementById("input1").value); // Input 1 (num)
    var input2 = document.getElementById("input2").value; // Input 2 (operator)
    var input3 = parseFloat(document.getElementById("input3").value); // Input 3 (num)
    var result;

    // Calculation Logic
    switch (input2) {
        case "+":
            result = input1 + input3;
            break;
        case "-":
            result = input1 - input3;
            break;
        case "*":
            result = input1 * input3;
            break;
        case "/":
            result = input1 / input3;
            break;
        default:
            result = "Invalid operator";
    }

    // Result Display
    document.getElementById("result").innerHTML = "Result: " + result;

}