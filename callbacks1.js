// Write a function called multiplyNumbers 
// that takes two numbers and a callback function
// as arguments. The function should multiply the
//  numbers together and pass the result to the callback,
//  which will then log the result to the console.

function multiplyNumebers(first,second,callback){

  const result = first * second;
 callback(result);

}

function answer(final){
	
	 console.log("answer is this"+ final);
}
let a=10;
let b = 30;
multiplyNumebers(a,b,answer);