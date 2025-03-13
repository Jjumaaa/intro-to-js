// Define a function using the function keyword
const person = "Me";

function identifyTheUser(name = 'Instagrammer') {
	console.log(`Good Morning, ${name}!`);
}

identifyTheUser('Bob');
identifyTheUser('Mercy');
identifyTheUser('');
identifyTheUser('Sarah')
// Call a function

const identifyTheUserAgain = (name = 'Tiktoker') => {
	console.log(`Good Morning, ${name}!`);
	return name
};
const huyuNiNani = identifyTheUserAgain('Ajib');

identifyTheUserAgain('Ajib');
console.log(huyuNiNani);
// Define an arrow function


// Function with parameters and return values


// Default parameters in a function


// Function expression vs function declaration


// Immediately Invoked Function Expressions (IIFE)


// Higher-order functions (functions that take functions as arguments)


// Demonstrate callback functions


// Pure vs impure functions


// How functions can return other functions
