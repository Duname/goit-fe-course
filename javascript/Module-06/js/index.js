'use strict';

class Hamburger {
	constructor(size, stuffing) {
		this.size = size;
		this.stuffing = stuffing;
		this.topping = [];
	}

	addTopping(topping) {
		const include = this.topping.includes(topping);
		if (!include) {
			this.topping.push(topping)
		}
	}

	removeTopping(topping) {
		const idx = this.topping.indexOf(topping);
		this.topping.splice(idx, 1);
	}

	get getToppings() {
		return this.topping
	}

	get getSize() {
		return this.size;
	}
	get calculatePrice() {
		const arrOrder = [Hamburger.SIZES[this.size], Hamburger.STUFFINGS[this.stuffing]];
		let sumPrice = arrOrder.reduce((acc, obj) => acc + obj.price, 0);
		const toppingPrice = this.topping.reduce((acc, key) => acc + Hamburger.TOPPINGS[key].price, 0);
		sumPrice += toppingPrice;
		return sumPrice;
	}

	get calculateCalories() {
		const arrOrder = [Hamburger.SIZES[this.size], Hamburger.STUFFINGS[this.stuffing]];
		let sumCalories = arrOrder.reduce((acc, obj) => acc + obj.calories, 0);
		sumCalories += this.topping.reduce((acc, key) => acc + Hamburger.TOPPINGS[key].calories, 0);
		return sumCalories;
	}

}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';
Hamburger.SIZES = {
	[Hamburger.SIZE_SMALL]: {
		price: 30,
		calories: 50,
	},
	[Hamburger.SIZE_LARGE]: {
		price: 50,
		calories: 100,
	},
};
Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';
Hamburger.STUFFINGS = {
	[Hamburger.STUFFING_CHEESE]: {
		price: 15,
		calories: 20,
	},
	[Hamburger.STUFFING_SALAD]: {
		price: 20,
		calories: 5,
	},
	[Hamburger.STUFFING_MEAT]: {
		price: 35,
		calories: 15,
	},
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';
Hamburger.TOPPINGS = {
	[Hamburger.TOPPING_SPICE]: {
		price: 10,
		calories: 0,
	},
	[Hamburger.TOPPING_SAUCE]: {
		price: 15,
		calories: 5,
	}

};
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log("Calories: ", hamburger.calculateCalories);
console.log("Price: ", hamburger.calculatePrice);
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Price with sauce: ", hamburger.calculatePrice);
console.log("Is hamburger large: ", hamburger.getSize === Hamburger.SIZE_LARGE);
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Hamburger has %d toppings", hamburger.getToppings.length);
