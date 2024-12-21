let physics=90
let chemistry=89
let maths=87
let total_marks=physics+maths+chemistry
let percentage=total_marks*100/300;
console.log("This is a your total marks" + " " + total_marks);
console.log("This is a your percentage" + " " + percentage);

if(percentage >35 && percentage<50){
	console.log("Your grade is F")


}
else if(percentage >50 && percentage<60){
	console.log("Your grade E")

}
else if(percentage >60 && percentage<70){
	console.log("your grade is D")

}
else if(percentage >70 && percentage<80){
	console.log("Your grade is C")
}
else if(percentage >80 && percentage<90){
	console.log("Your grade is B")
}
else if(percentage>90&&percentage<100){
	console.log("Your grade is A")
}
else{
	console.log("you are fail");
}