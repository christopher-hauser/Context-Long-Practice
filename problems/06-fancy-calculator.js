const Calculator = require("./02-calculator")

class FancyCalculator extends Calculator{
	constructor(){
		super();
	}
	setTotal(newTotal){
		this.total = newTotal;
		return this.total;
	}
	modulo(num){
		this.total = this.total % num;
		return this.total;
	}
	squared(){
		this.total *= this.total;
		return this.total;
	}
}
/*
1. Import the `Calculator` class.
2. Create a `FancyCalculator` class with the `Calculator` class as its parent
   class.
3. Add the following instance methods which should all return the `total`
   property of the instance:
   a. `setTotal(newTotal)` - sets the `total` to the `newTotal`
   b. `modulo(num)` - sets the `total` to the remainder of dividing by `num`
   c. `squared()` - multiplies the `total` by its self
*/

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}