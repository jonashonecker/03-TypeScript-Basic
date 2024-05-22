// Step 1: Declare a variable named 'age' of type 'number' and assign a value to it.
let age: number = 30;
let number: number = 44;

// Step 2: Write a 'for' loop that outputs the numbers from 1 to 'age'.
let array: Array<number> = [];
for (let i: number = 1; i <= age; i++) {
    array.push(i);
}
console.log(array)

// Step 3: Use an 'if-else' statement to check if 'age' is greater than 18.
// Display appropriate messages depending on whether the condition is met or not.
if (age > 18) {
    console.log("Older than 18");
} else {
    console.log("Too young!")
}

// Step 4: Declare a variable named 'score' of type 'number' and assign it the value 0.
let score: number = 0;

// Step 5: Use an 'if' statement to check if 'score' has a value.
// Display 'Score is available.' if 'score' has a value other than 0.
if (score > 0) {
    console.log("Score is available")
}

// Step 6: Use an 'if-else' statement to check if 'score' is evaluated as a 'truthy' value.
// Display 'Score is evaluated as truthy.' if 'score' is considered 'truthy'.
if (score) {
    console.log("Score is evaluated as truthy.")
} else {
    console.log("Score is evaluated as falsy.")
}

// Step 7: Declare a variable named 'username' of type 'string' and assign it the value '' (empty string).
const username: string = '';

// Step 8: Use an 'if' statement to check if 'username' has a value.
// Display 'Username is available.' if 'username' has a value.
if (username !== '') {
    console.log(username);
}

// Step 9: Use an 'if-else' statement to check if 'username' is evaluated as a 'falsy' value.
// Display 'Username is evaluated as falsy.' if 'username' is considered 'falsy'.
if (username) {
    console.log("Username is evaluated as truthy.")
} else {
    console.log("Username is evaluated as falsy.")
}

// Step 10: Declare a variable named 'isAdmin' of type 'boolean' and assign it the value 'false'.
let isAdmin: boolean = false;

// Step 11: Use an 'if-else' statement to check if 'isAdmin' is evaluated as a 'truthy' value.
// Display 'isAdmin is evaluated as truthy.' if 'isAdmin' is considered 'truthy'.
if (isAdmin) {
    console.log("isAdmin is evaluated as truthy.");
} else {
    console.log("isAdmin is evaluated as falsy.");
}

// Step 12: Use an 'if' statement to check if 'isAdmin' is 'false'.
// Display 'isAdmin is false.' if 'isAdmin' has the value 'false'.
if (isAdmin === false) {
    console.log("isAdmin is false");
}

// Bonus
printTree(9);

function printTree(lineNumbers: number): void {
    const maxLines: number = 10;
    let numberOfCharacters: number = 1;
    let numberOfWhitespaces: number = lineNumbers - 1;
    let i:number = 0;

    if (lineNumbers > maxLines) {
        console.log("Sorry, that wouldn't fit in any living room!")
        return;
    }

    do {
        if (i < lineNumbers) {
            console.log(" ".repeat(numberOfWhitespaces) + "*".repeat(numberOfCharacters))
            numberOfCharacters += 2;
            numberOfWhitespaces -= 1;
        } else {
            console.log(" ".repeat(lineNumbers - 1) + "*");
        }
        i++;
    } while (i < maxLines)
}