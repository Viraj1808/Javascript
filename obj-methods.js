const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
     console.log("This is the method of the object"+person.firstName);
  }
};

person.fullName();


