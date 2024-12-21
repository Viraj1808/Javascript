let a; 
a=2;
if(a==1){
	const arr=["apple","banana","orange","mango","kiwi"];
	let arr3=arr.push("guvava");
	console.log(arr3);
	console.log(arr);
}
else if(a==2){
	const arr=["apple","banana","orange","mango","kiwi"]
	let arr2=arr.pop();
	console.log(arr2);
	console.log(arr);

}
else if(a==3){

	const arr=["apple","banana","orange","mango","kiwi"]
	let arr1=arr.shift();
	console.log(arr1);
	console.log(arr);
}
else{
	console.log("ERROR");
}

