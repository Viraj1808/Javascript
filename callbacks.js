// Define a simple function that accepts a callback
function greet(callback1, callback) {
  console.log('Hello ');
  callback1();
  callback(); // Calling the callback function
}

// Define a callback function
function sayGoodbye() {
  console.log('Goodbye!');
}
function name(){

  console.log("chriestian");
}

// Use the callback
greet(name, sayGoodbye);
