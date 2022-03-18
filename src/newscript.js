'use strict';

// 4-range
const range = (start, end) => {
	const numbers = [];
	for (let i = start; i <= end; i++){
		numbers.push(i);
	}
	return numbers;
}
//console.log(range(15,30)); 


// 5-rangeOdd

const rangeOdd = (start, end) => {
	const odd = [];
	for (start; start <= end; ++start) {
		if (start % 2 !== 0)
			odd.push(start);
	}
	return odd;
}

//console.log(rangeOdd(15,30));

// 6-calculate

const average = ( a, b ) => (a + b) / 2;
const cube = x => x ** 3;
const square = x => x * x;
const calculate = () => {
	const numbers = [];
	for (let i = 0; i < 9; i++) {
		numbers.push(average(cube(i), square(i)));
	}
	return numbers;

}

//console.log(calculate());

// 7-objects

const fn = () => {
 const name = 'name';
 let age = 18;

	const firstObj = {name};
	let secondObj = {name};
	console.log(firstObj, secondObj);

	firstObj.name = "Marcus";
	secondObj.name = "Aurelius";
	console.log(firstObj, secondObj);

	let anotherObj = {age};
	firstObj = anotherObj;
	secondObj = anotherObj;
	console.log(firstObj, secondObj);
}

// 8-createUser

const createUser = (name, city) => {
	let obj = {};
	return obj = {name, city};
}

//console.log(createUser("Eugene", "Brovary"));

// 9-phonebook

const phonebook = [
	{ name: 'Marcus Aurelius', phone: '+10445554433' },
	{ name: 'John Doe', phone: '+480445554433' },
	{ name: 'Marcus Schmolling', phone: '+970445554433' },
	{ name: 'Judah Priest', phone: '+4410445554433' },
	{ name: 'John Rooney', phone: '+950445554433' },
];

const findPhoneByName = (name) => {
 for (const obj of phonebook) {
 	if (obj.name === name){
 		return obj.phone;
 	}
 }

};



console.log(findPhoneByName('John Doe'));





