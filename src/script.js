'use strict';
/*
function truncate(str, maxLenght) {
	if (str.length > maxLenght)
		return console.log(str.slice(0, maxLenght) + "..." )
	else
		return console.log(str);
};

function extractCurrencyValue(str) {
	return str.slice(1);
};



let styles = ["Jazz" , "Bluze", "asdas", "lol"];
styles.push("Rock-n-roll");

styles[Math.floor((styles.length - 1) / 2)] = "Classic";


let input = 0;

/*	while (typeof input == 'number'){
		input = prompt("Input numbers", 0);
		let array = [];
		array.push(input);
		console.log (array);
}
	//while (typeof input == 'number')
let sum = 0;
	for ( let i = 0; i < array.lenght; i++){
		
		sum += array[i];

	}
	return sum;
};


function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("Введите число", 0);

    // Прекращаем ввод?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

 // let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};



/*function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);


let quest = (question, yes, no) => {
	(confirm(question)) ? yes() : no();
}

quest(
	"Do you agree?",
	() => {alert("You agree.");},
	() => {alert("You don't agree.");}
);


function camelize (str) {
	return str.split("-");
};

let func = camelize("my-text-here");
//console.log(func.length);

//func.forEach().charAt(0).toUpperCase() + func.slice(1);

for (let i = 1; i < func.length; i++) {
	func[i] = func[i].charAt(0).toUpperCase() + func[i].slice(1);
}

//let newArray = func.join("");

//console.log(newArray);


function filterRange (arr, a, b) {
	return arr.slice(a, b);
}

let arr = ["HTML", "JS", "CSS", "PHP"];

function copySorted(array) {
	//let newArr = array.slice(0, array.length);
	//newArr.sort();
	return arr.slice().sort();
}

let sorted = copySorted(arr);

function Calculator () {
	this.calculate = function (str) {
		let sum =str;
		str.split(" ").map(function(item) {
			return parseInt(item, 10);
		});
		if (str[1] === '+')
			sum = str[0] + str[2];
		else
			sum = str[0] - str[2];
		return str;
	}
}

/*let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);



//console.log(names);





let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

function getAverageAge (users) {
	return users.reduce((prev, user) => prev + user.age, 0 )/users.length;
}

//console.log(Math.round(getAverageAge(users)));





/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]

let map = new Map();

map.set("a", 123);
console.log(map.get("b"));


let map = new Map();

map.set("name", "John");

let keys = Array.from(map.values());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more", "hello");

console.log(keys);


/*let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};



function sumSalaries(salaries) {
	for (let salary of Object.values(salaries))
		summ += salary;
	return summ;
};



function count(obj) {
	return Object.keys(obj).length;
};


let user = {
  name: "John",
  years: 30
};


let {name , years: age, isAdmin = false} = user;




function getWeekDay(day) {
	day = day.getDay();
	let arr = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

		return console.log(arr[day]);

};


/*let start = new Date(); // начинаем отсчёт времени

// выполняем некоторые действия
for (let i = 0; i < 10000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // заканчиваем отсчёт времени

//alert( `Цикл отработал за ${end - start} миллисекунд` );



let date = new Date();

function getLastDayOfMonth ( year, month) {
	//date.setFullYear( year );
	//date.setMonth( month );
	return new Date( year, month+1, 0).getDate();
};

console.log(getLastDayOfMonth(2022, 1));



let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room // meetup ссылается на room
};

room.occupiedBy = meetup; // room ссылается на meetup






//alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );

/*
let sum = 0;
let array1 = [];

function sumTo( n ) {
	if ( n === 1 )	
		return n;
	else
		for ( let i = n; i > 0; i--) {
			array1.push(i);
			//arrNew.reduce( ( sum, current ) => sum + current, 0 );
		}
		let newArray1 = array1.reduce( (sum,current)  => sum + current);
		return newArray1;
	
};

console.log(sumTo( 3 ));



function sumTo(n) {
	let sum = 0;
	for (let i = 0; i <=n; i++) {
		sum += i;
	}
	return sum;
}

function factorial (n) {
	return (n!=1) ? n * factorial (n - 1) : 1;
};

function factorialFor (n) {
	for ( let i = n-1; i >= 1; i--) {
		n *= i;
	}
	return n;

}

//console.log(factorial(3));
//console.log(factorialFor(3));

function fib(n) {
	return (n<=1) ? n : fib(n-1) + fib(n-2);
}

let listt = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};



function printList(list) {
	
	let arr = [];
	let tmp = list;

	while(tmp){
		arr.push(tmp.value);
		tmp = tmp.next;
	}
	for (let i = arr.length-1; i >= 0; i--){
		console.log(arr[i]);
	}

	//console.log(tmp);


};

//printList(listt);


function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next);
  }

  alert(list.value);
}

//printReverseList(listt);


let str = "Hellothere!";

console.log([...str]);
console.log(Array.from(str));



function add (a) {
	return function (b) {
		return a + b;
	}
};

console.log(add(4)(5));



function inBetween( a, b ) {
	return function (x){
		return x >= a && x <= b;
	};
};

function inArray(arr) {
	return function (x){
		return arr.includes(x);
	};
};


let arr = [1, 2, 3, 4, 5, 6, 7];

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++ ){
    let shooter = function() { // функция shooter
      console.log( i ); // должна выводить порядковый номер
    };
    shooters.push(shooter);
    
  }

  return shooters;
}

let army = makeArmy();
let army1 = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army1[5]();
*/

function printNumbers(from,to) {
	let current = from;

	setTimeout(function go(){
		console.log(current);
		if (current < to) {
			setTimeout(go,1000);
		}
		current++;
	}, 1000)
};

//printNumbers(1,5);


let count = 0;
const arr = [7, 10, 1, 5, 4];
const sum = (acc, val) => (count++, acc + val);
const res = arr.reduce(sum, 0);
console.log(arr+ '\n' + res);






