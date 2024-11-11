function randomizeArray(arr) {
    // Step 1: Extract the last element
    const lastElement = arr.pop();

    // Step 2: Shuffle the remaining array using map() and sort() for randomness
    const shuffled = arr
        .map(value => ({ value, sort: Math.random() })) // Create objects with random values
        .sort((a, b) => a.sort - b.sort) // Sort by the random value
        .map(item => item.value); // Extract the shuffled values

    // Step 3: Add the last element to the front
    shuffled.unshift(lastElement);

    return shuffled;
}

// Example usage
const originalArray = [1, 2, 3, 4, 5];
const randomizedArray = randomizeArray(originalArray);
console.log(randomizedArray);
