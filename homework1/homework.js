const purse = 100;
const tomatoPrice = 10;
const cucumberPrice = 5;
const applePrice = 15;
let nutPrice;
let vegsandfruitsPrice = 2*(tomatoPrice + cucumberPrice + applePrice);
nutPrice = purse - vegsandfruitsPrice;
console.log(nutPrice);
nutPrice > vegsandfruitsPrice ?
console.log('Больше потратили на орехи') : console.log('Больше потратили на фрукты и овощи');