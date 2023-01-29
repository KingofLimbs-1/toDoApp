// User input
let input = parseInt(prompt("Please enter a number: "))

// Input checks
if (Number.isInteger(input) && input % 2 == 0) {
    console.log("Even")
}

if (Number.isInteger(input) && input % 2 != 0) {
    console.log("Odd")
}

if (isNaN(input)) {
    console.log("Oops that is not a number!")
}