// for (i=2; i<11; i++) {
// 	if (i%2 == 0) console.log(i)
// }

// for (let i = 0; i < 3; i++) {
// 		  console.log( `number ${i}!` );
// 		}
// ===
// i = 0;
// while (i < 3) {
// console.log( `number ${i}!` );
// i = i + 1;
// }


		// function ask(question, answer, yes, no) {
		//   question();
		//   if (answer) yes()
		//   else no();
		// }

		// ask(
		//   function() { console.log("Вы согласны?"); },
		//   true,
		//   function() { console.log("Вы согласились."); },
		//   function() { console.log("Вы отказались."); }
		// );


		const ask = (question, answer, yes, no) => {
		  question();
		  if (answer) yes()
		  else no();
		}

		const question = function() { console.log("Вы согласны?"); }	
		const consent = function() { console.log("Вы согласились."); }
		const reject = function() { console.log("Вы отказались."); }

		ask(question, true, consent, reject)


