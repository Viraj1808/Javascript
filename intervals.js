
function fun(){
	let currentTime=new Date().toLocaleTimeString();
	console.log(currentTime);
}
setInterval(fun,10000);