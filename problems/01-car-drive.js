// Your code here
/*
1. Create a `Car` class.
2. A newly instantiated instance should have its `speed` property initialized to
   `0`.
3. Add an instance method called `drive(newSpeed)` that takes in a `newSpeed`
   and sets it to the instance's `speed` property. It should also return the
   present `speed` of the instance.

*/
class Car{
	constructor(){
		this.speed = 0;
	}

	drive(newSpeed){
		this.speed = newSpeed;
		return this.speed;
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}