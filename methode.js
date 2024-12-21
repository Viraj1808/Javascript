const arithmetic = {
	A:10,
	B:10,
	operation:function() {
		let c = this.A + this.B
		console.log("this is a addition of a & b:="+c);
		let d = this.A * this.B
		console.log("this is a multiplication of a & b:="+d);
		let e = this.A / this.B
		console.log("this is a division of a & b:="+e)
		let f = this.A - this.B
		console.log("this is a subtraction of a & b:="+f)
		
	}

};
arithmetic.operation();