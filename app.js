// NOTE: The "Hungry for More" section of the assignment is considered extra credit

// Making Classes

// 1. Create a class for a Pet
// 	attributes
// 		name (the constructor takes one parameter and then sets this property on the instance to value of the parameter)
// 		owner (initially set to '' within constructor)
// 	methods
// 		setOwner(owner) - sets the owner property to the parameter passed into this function
class Pet {
	constructor(name){
		this.name = name;
		this.owner = '';
	}
	setOwner(owner){
		this.owner = owner;
	}
}



// Commit 1 

// 🔴 The commit message should read: 
// "Commit 1 - Created Pet Class"



// 2. Create a class for a Dog
// 	this should inherit the attributes from Pet
// 	attributes
// 		price (the constructor takes a parameter in addition to that of Pet and then sets this property on the instance to the value of the additional parameter)
// 	methods
// 		bark() - log "bark"
// 		chaseTail() - log "oh boy oh boy oh boy"
// 		getPrice() - return price
class Dog extends Pet {
	constructor(name, price){
		super(name);
		this.price = price;
	}
	bark(){
		console.log("bark");
	}
	chaseTail(){
		console.log("oh boy oh boy oh boy");
	}
	getPrice(){
		console.log("That will be $" + this.price + ". Thank you!");
		return this.price;
	}
}



// 3. Create an instance of Dog called "Sparky" and set add all the details that need to be added to make a "complete" Dog. Run the methods to ensure that everything works.
const sparky = new Dog("Sparky", 10);
sparky.setOwner("Sam");
console.log(sparky.owner);
sparky.bark();
sparky.chaseTail();
sparky.getPrice();



// Commit 2 

// 🔴 The commit message should read: 
// "Commit 2 - Created Dog Class"



// 4. Create a class for a Cat
// 	this should inherit from Pet
// 	attributes
// 		price (the constructor takes a parameter in addition to that of Pet and then sets this property on the instance to the value of the additional parameter)
// 	methods
// 		purr() - log "purrrrr"
// 		clean() - log "cleaning"
// 		getPrice() - return price



// 5. Create an instance of Cat called "Sprinkles" and set add all the details that need to be added to make a "complete" Cat. Run the methods to ensure that everything works.



// Commit 3 

// 🔴 The commit message should read: 
// "Commit 3 - Created Cat Class"



// 6. Create a class for a Person
// 	attributes
// 		name - set name from parameter in constructor method
// 		age - initially 0
// 		weight - initially 0
// 		mood - integer starting at 0 initially
// 		pets - empty array initially
// 		bankAccount - initially set to 0
// 	methods
// 		getName() - returns the name of the person
// 		getAge() - returns age
// 		getWeight() - returns weight
// 		greet(other_person) - logs a message with another person's name
// 		eat() - increment weight, increment mood
// 		exercise() - decrement weight
// 		age() - increment age, increment weight, decrement mood, increment bank account by 10 (birthday money)
// 		buyPet(pet) - push the pet object onto the pets array, increment mood by 10, decrement bankAccount by the value of the pet (hint: getPrice())



// 7. Create an instance of Person called "Jill" and set add all the details that need to be added to make a "complete" Person. Run the methods to ensure that everything works.



// Commit 4 

// 🔴 The commit message should read: 
// "Commit 4 - Created Person Class"



// Hungry for More?

// Factories

// 1. Create a single factory object to generate shoes
// 	The factory should have an array of shoes that it has generated
// 	A shoe should have a serial number, based on what index it is in the factory's shoes array



// 2. Create Malls & Stores
// 	Create a Store class. It should have a constructor method that is called when a new store is created. It will take, as parameters, mallName and serialNumber.
// 	Create a Mall class. A Mall should have a constructor method that is called when a new mall is created. It takes the mallName as a parameter ("Mall of America", "Tanger Outlets", etc.).
// 	The Mall should have a generateStore method that creates instances of class Store. When creating an instance of class Store, it passes in its mallName as the mallName parameter to Store.
// 	The Mall should keep track of how many stores are created; passing in this number as the serialNumber to the store.
// 	Create a couple of instances of a Store to verify that it's working.



// Commit 7 

// 🔴 The commit message should read: 
// "Commit 7 - Factories"







