1 // Write a function calculateFactorial (n) that takes a non-negative integer n and returns the factorial of n.(factorial of 5= 5*4*3*2*1=120)

function calculateFactorial(n) {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}


// console.log(calculateFactorial(5));
alert ( calculateFactorial(5) )

2 // Create an anonymous function that takes an array of numbers as an argument and returns the array with each number doubled. Assign this function to a variable called doubleArray.

const doubleArray = function(arr) {
    return arr.map(function(num) {
        return num * 2;
    });
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers); // Output: [2, 4, 6, 8, 10]
console.log(doubledNumbers);

3 // Define a function expression factorial that takes one number as a parameter and returns its factorial.

const factorial = function(n) {
    if (n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};

// Example usage:
console.log(factorial(5)); // Output: 120



4 // Write a function processArray that takes an array and a callback function as parameters. The function should apply the callback function to each element of the array and return a new array with the results. Use an anonymous function as the callback to double each number in the array.


function processArray(arr, callback) {
    return arr.map(callback);
}

// Example usage with an anonymous function to double each number:
const number = [1, 2, 3, 4, 5];
const doubledNumber = processArray(numbers, function(num) {
    return num * 2;
});

console.log(doubledNumber); // Output: [2, 4, 6, 8, 10]


