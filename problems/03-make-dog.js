// Your code here

/*
1. Create a `Dog` class.
2. The `constructor` function should take in a `name` argument and set the
   `name` property of a newly instantiated instance to the `name` argument.
3. Add a static method called `makeJet()` that will return a new instance of the
   `Dog` class with a `name` property of "Jet".
4. Add two instance methods:
   a. `changeName(newName)` - set the `name` to the `newName`
   b. `speak(word)` - returns `${name} says ${word}`
*/
class Dog{
	constructor(name){
		this.name = name;
	}

	static makeJet(){
		const jet = new Dog("Jet");
		return jet;
	}
	changeName(newName){
		this.name = newName;
	}
	speak(word){
		return `${this.name} says ${word}`;
	}
}
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}