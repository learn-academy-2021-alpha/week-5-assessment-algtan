// Question 1

// Create a function that takes in 1 argument that is a string
codedMessage = (string) => {
    // Split the string into an array
    stringArr = string.split('');

    // Use a higher-order function (.map) to convert a, e, i, o
    codedArr = stringArr.map(value => {
        if (value.toLowerCase() === 'a') {
            return '4';
        } else if (value.toLowerCase() === 'e') {
            return '3';
        } else if (value.toLowerCase() === 'i') {
            return '1';
        } else if (value.toLowerCase() === 'o') {
            return '0';
        } else {
            return value;
        }
    });

    // Join the array back into a string
    // Return a string with the coded message
    return codedArr.join('');
}

const secretCodeWord1 = "lAckAdaIsIcAl";
const secretCodeWord2 = "gObblEdygOOk";

console.log( codedMessage(secretCodeWord1) );
console.log( codedMessage(secretCodeWord2) );


// Question 2

const wordsWithLetterA = (array) => {
    // Use a higher-order function (.filter) to get the words we want
    return array.filter(value => {
        // Check if the word contains the letter 'a'
        if (value.toLowerCase().includes('a')) {
            // Return true
            return true;
        } else {
            // Otherwise, it does not contain the letter 'a'
            // Return false
            return false;
        }
    })
    
    // Return the filtered array above
}

const arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"];

console.log( wordsWithLetterA(arrayOfWords) );


// Create a function that takes in 1 argument that is an array
const fullHouse = (array) => {
    // Create variables to hold the count
    // We only need 2 counts, because a full house will contain two different numbers
    let count1 = 0;
    let count2 = 0;

    // Create variables to hold the number of the card
    // Set the first number to be equal to the first element of the array
    let num1 = array[0];
    // Set the second number to 0, which will be updated later
    let num2 = 0;

    // Iterate through the array to count the number of instances
    // Use higher-order function (.forEach)
    array.forEach(value => {
        // Use conditionals to check the number of instances of that number and update the counts
        // If the current value is equal to num1
        if (value === num1) {
            // Update the count for num1
            count1 += 1;
        // Otherwise, the current value is not equal to num1
        // Check if num2 is still 0
        } else if (num2 === 0) {
            // Store the current value as the new num2
            num2 = value;
            // Update the count of num2
            count2 += 1;
        // Otherwise, num2 is already storing a number
        // Check if the current value is equal to num2
        } else if (value === num2) {
            // Update the count for num2
            count2 += 1;
        }
    })

    console.log('count1', count1);
    console.log('count2', count2);
    
    // If the counts are '3' for one number, and '2' for another
    if ( (count1 === 3 && count2 === 2) || (count1 === 2 && count2 === 3) ) {
        // Return true
        return true;
    // Otherwise
    } else {
        // Return false
        return false;
    }
}

console.log( fullHouse([1, 2, 3, 4, 5]) );