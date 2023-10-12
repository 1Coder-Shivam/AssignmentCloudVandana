const readline = require('readline');

class ArraySorter {
    static sortArrayDescending(arr) {
        if (!Array.isArray(arr)) {
            throw new Error("Input must be an array.");
        }

        if (arr.length === 0) {
            throw new Error("Array is empty.");
        }

        if (!arr.every(element => typeof element === "number")) {
            throw new Error("Array must contain only numbers.");
        }

        return arr.sort((a, b) => b - a);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by spaces (e.g., 5 2 8 1 9): ", (input) => {
    const numbersArray = input.split(" ").map(Number);

    try {
        const sortedArray = ArraySorter.sortArrayDescending(numbersArray);
        console.log("Sorted array in descending order: " + sortedArray);
    } catch (error) {
        console.error("Error: " + error.message);
    }

    rl.close();
});
