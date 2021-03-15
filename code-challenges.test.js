// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variable provided.

// var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
// var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

describe("codedMessage", () => {
    it("returns a coded message for an input of a string", () => {
        const secretCodeWord1 = "lackadaisical";
        const secretCodeWord2 = "gobbledygook";
        expect( codedMessage(secretCodeWord1) ).toEqual("l4ck4d41s1c4l");
        expect( codedMessage(secretCodeWord2) ).toEqual("g0bbl3dyg00k");
    })
})


// b) Create the function that makes the test pass.

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



// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

// var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

describe("wordsWithLetterA", () => {
    it("returns an array of wordds that contain the letter 'a'", () => {
        const arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"];
        const arrayOfWordsExpected = ["Apple", "Banana", "Peach"];
        expect( wordsWithLetterA(arrayOfWords) ).toEqual(arrayOfWordsExpected);
    })
})



// b) Create the function that makes the test pass.

// Create a function that takes in an array of words
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


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("fullHouse", () => {
    it("returns a boolean on whether the input array is a full house", () => {
        const hand1 = [5, 5, 5, 3, 3];
        const hand2 = [5, 5, 3, 3, 4];
        const hand3 = [5, 5, 5, 5, 4];
        expect( fullHouse(hand1) ).toEqual(true);
        expect( fullHouse(hand2) ).toEqual(false);
        expect( fullHouse(hand3) ).toEqual(false);
    })
})



// b) Create the function that makes the test pass.

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