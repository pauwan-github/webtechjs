// Declare variables of different data types
let myString = "Hello, world!";
let myNumber = 42;
let myBoolean = true;

// Initialize chart
let resultChart;
function initializeChart() {
    const ctx = document.getElementById('resultChart').getContext('2d');
    resultChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Addition', 'Subtraction', 'Division', 'Multiplication'],
            datasets: [{
                label: 'Result',
                data: [0, 0, 0, 0],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 0.5
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Define functions to perform simple operations
function add(a, b) {
    console.log(`Adding ${a} and ${b}`);
    let result = a + b;
    console.log(`Result: ${result}`);
    return result;
}

function subtract(a, b) {
    console.log(`Subtracting ${b} from ${a}`);
    let result = a - b;
    console.log(`Result: ${result}`);
    return result;
}

function divide(a, b) {
    console.log(`Dividing ${a} by ${b}`);
    if (b === 0) {
        console.log("Error: Division by zero is not allowed.");
        return null;
    }
    let result = a / b;
    console.log(`Result: ${result}`);
    return result;
}

function multiply(a, b) {
    console.log(`Multiplying ${a} and ${b}`);
    let result = a * b;
    console.log(`Result: ${result}`);
    return result;
}

// Function to read input values and call the arithmetic functions
function getInputValues() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    return { num1, num2 };
}

function displayResult(result) {
    const resultElement = document.getElementById('result');
    if (result === null) {
        resultElement.textContent = "Error: Division by zero is not allowed.";
        resultElement.style.color = 'red';
    } else {
        resultElement.textContent = `Result: ${result}`;
        resultElement.style.color = 'black';
    }
}

// Update chart
function updateChart(operationIndex, result) {
    resultChart.data.datasets[0].data[operationIndex] = result;
    resultChart.update();
}

// Event listeners for buttons
document.getElementById('addButton').addEventListener('click', () => {
    console.log("Calling add function...");
    const { num1, num2 } = getInputValues();
    const result = add(num1, num2);
    displayResult(result);
    updateChart(0, result);
});

document.getElementById('subtractButton').addEventListener('click', () => {
    console.log("Calling subtract function...");
    const { num1, num2 } = getInputValues();
    const result = subtract(num1, num2);
    displayResult(result);
    updateChart(1, result);
});

document.getElementById('divideButton').addEventListener('click', () => {
    console.log("Calling divide function...");
    const { num1, num2 } = getInputValues();
    const result = divide(num1, num2);
    displayResult(result);
    updateChart(2, result);
});

document.getElementById('multiplyButton').addEventListener('click', () => {
    console.log("Calling multiply function...");
    const { num1, num2 } = getInputValues();
    const result = multiply(num1, num2);
    displayResult(result);
    updateChart(3, result);
});

// Input event listeners to clear the result on input change
document.getElementById('num1').addEventListener('input', () => {
    document.getElementById('result').textContent = '';
});

document.getElementById('num2').addEventListener('input', () => {
    document.getElementById('result').textContent = '';
});

// Initial debug message
console.log("JavaScript file loaded successfully.");

// Initialize the chart when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    initializeChart();
});
