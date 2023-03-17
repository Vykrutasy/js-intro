// 1)	
// 	// Сумма свойств объекта
// 	// У нас есть объект, в котором хранятся зарплаты нашей команды:

	let salaries = {
	  John: 100,
	  Ann: 160,
	  Pete: 130
	}
// 	Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

let sum = 0;
for (key in salaries) {
	sum += salaries[key];
}
console.log(sum);

// 	Если объект salaries пуст, то результат должен быть 0.

// 2) 

// 	Умножаем все числовые свойства на 2
// 	Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// 	Например:

// 	// до вызова функции
// 	let menu = {
// 	  width: 200,
// 	  height: 300,
// 	  title: "My menu"
// 	};

// 	multiplyNumeric(menu);

// 	// после вызова функции
// 	menu = {
// 	  width: 400,
// 	  height: 600,
// 	  title: "My menu"
// 	};
// 	Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// 	P.S. Используйте typeof для проверки, что значение свойства числовое.

const multiplyNumeric = (obj) => {
	for (key in obj) {
		if (typeof obj[key] === 'number') {
			obj[key] *= 2
		}
	}
}

	let menu = {
	  width: 200,
	  height: 300,
	  title: "My menu"
	};

multiplyNumeric(menu);
console.log(menu);