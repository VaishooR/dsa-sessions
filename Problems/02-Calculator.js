function Calculator(op, a, b) {
    switch(op) {
        case "Add":
            return a + b
        case "Sub":
            return a - b
        case "Mul":
            return a * b
        case "Div":
            return a / b
        default:
            return "Invalid operation"
    }
}

const multiply = Calculator("Mul", 5, 10)
console.log(multiply)
const divide = Calculator("Div", 50, 10)
console.log(divide)
