function Person(first, last, age, eye){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const student = new Person("Virraj","Prajapati","18","brown");
console.log( "My name is " + student.firstName  +" "+ student.lastName);