// 1)	
// 	Создайте input type text и три кнопки
// 	кнопки должны иметь следующий функционал (должны запускать соотвествующие фунции)
// 	1. Кнопка "Очистить input" (удалять содержимое value тега input)
// 	2. Кнопка заблокировать инпут (disabled setAttribute)
// 	3. Кнопка разблокировать инпут (disabled removeAttribute)
// 	или input.disabled = true/false;

// let blockButton = document.querySelector('.block-button');
// let unblockButton = document.querySelector('.unblock-button');
// let clearButton = document.querySelector('.clear-button');
// let input = document.querySelector('.input');

// blockButton.addEventListener('click', blockInput);
// unblockButton.addEventListener('click', unblockInput);
// clearButton.addEventListener('click', clearInput);

// function blockInput() {
// 	input.setAttribute('disabled', true);
// }

// function unblockInput() {
// 	input.removeAttribute('disabled');
// }

// function clearInput() {
// 	input.value = '';
// }

// 2) 
// 	Создайте в HTML два текстовых инпута и кнопку
// 	Напишите функцию, которая будет по нажатию на кнопку
// 	менять содержимое инпутов (value) местами

let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let swapButton = document.querySelector('.swap-button');

swapButton.addEventListener('click', swapValues)

function swapValues() {
	let clipboard = input2.value;
	input2.value = input1.value;
	input1.value = clipboard;
}