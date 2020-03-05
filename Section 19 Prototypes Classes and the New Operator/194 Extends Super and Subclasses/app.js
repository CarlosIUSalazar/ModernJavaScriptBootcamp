class Pet {
	constructor(name,age){
		console.log("IN PET CONSTRUCTOR")
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name} is eating`;
	}
}

class Cat extends Pet{
	constructor(name,age, livesLeft = 9){ //this adds additional information for Cat
		console.log("IN CAT CONSTRUCTOR")
		super(name,age);  //super refers to the constructor function
		this.livesLeft = livesLeft;
	}
	meow(){
		return "MEOWWW!!"
	}
	eat(){
		return `${this.name} scarfs her food`
	}
}

class Dog extends Pet{
	bark(){
		return "WOOOFF!!"
	}
}

//const gizmo = new Cat("Gizmo",3);