// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

// Найдите все года от 1 до 2022, сумма цифр которых равна 13. 
// Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.


const getDigitsSum = (number) => {
	let digitsSum = 0;
	let snumber = String(number);
	for (i = 0; i < snumber.length; i++) {
		digitsSum += Number(snumber[i]);
	}
	return digitsSum;
}

	for (let i = 0; i <= 2022; i++) {
		if (getDigitsSum(i) === 13) {
			console.log(i);
		}
	}
// или ж

// const yearsSum13 = () => {
// 	let years = [];
// 	for (let i = 0; i <= 2022; i++) {
// 		if (getDigitsSum(i) === 13) {
// 			years.push(i);
// 		}
// 	}
// 	return years;
// }

// console.log(yearsSum13());


// 1)
// 		Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// 		То есть дефисы удаляются, а все слова после них получают заглавную букву.

// 		Примеры:

// 		camelize("background-color") == 'backgroundColor';
// 		camelize("list-style-image") == 'listStyleImage';
// 		camelize("-webkit-transition") == 'WebkitTransition';
// 		P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.


// ура! работает:

// const camelize = (kebabString) => { //my-short-string
// 	let lowArr = kebabString.split('-'); // [my, short, string]
// 	let camelArr = [];
// 	camelArr.push(lowArr[0]);//[my]
// 	for (i = 1; i < lowArr.length; i++) {
// 		camelArr.push(lowArr[i][0].toUpperCase() + lowArr[i].slice(1));
// 	}
// 	// return camelArr; //[my, Short, String]
// 	let camelString = camelArr.join("");
// 	return camelString;
// }

// console.log(camelize('my-short-string'));// myShortString

//  создать ту же строку но с заглавной буквы: let newStr = str[0].toUpperCase()+ str.slice(1);

// 	2)
// 		Задача: написать функцию, принимающую массив чисел
// 		и возвращающую сумму всех его положительных элементов и отрицательных 
// 		чисел отдельно в виде нового массива

// 		например функция принимает как аргумент следующий массив
// 		arr = [1, -2, 3, 4, -9]

// 		и должна вернуть [8, -11]
// 		Сохраняйте вызов этой функции через деструктурирующее присваивание


// ура. работает

// const toSumms = (arr) => {
// 	let twoSumms = [];
// 	let negative = 0,
// 		positive = 0;
// 	for (i = 0; i < arr.length; i++) {
// 		(arr[i] < 0) ? negative += arr[i]
// 				: positive += arr[i]
// 		}
// 	twoSumms.push(positive, negative);
// 	return twoSumms;
// }


// console.log(toSumms([1, -2, 3, 4, -9]))

//то же самое. работает

// const toSumms = (arr) => {
// 	let twoSumms = [];
// 	let [negative, positive] = [0, 0]
// 	for (i = 0; i < arr.length; i++) {
// 		(arr[i] < 0) ? negative += arr[i]
// 				: positive += arr[i]
// 		}
// 	twoSumms = [positive, negative]
// 	return twoSumms;
// }


// console.log(toSumms([1, -2, 3, 4, -9]))

