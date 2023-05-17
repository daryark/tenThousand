//TASK 1
// const arr = [
// 	{ value: 1 },
// 	{ value: 2 },
// 	5,
// 	6,
// 	7,
// 	"test",
// 	"test2",
// 	"test3",
// 	"test4",
// 	false,
// 	null,
// 	undefined,
// 	[123],
// 	[456],
// 	new Date("2021-06-22"),
// 	new Date("2022-02-01"),
// ];

// function groupTypes(arr) {
// 	const result = {
// 		object: [],
// 		number: [],
// 		string: [],
// 		boolean: [],
// 		null: [],
// 		undefined: [],
// 		array: [],
// 		date: [],
// 	};

// 	for (let i = 0; i < arr.length; i += 1) {
// 		if (typeof arr[i] === "string") {
// 			result.string.push(arr[i]);
// 		} else if (typeof arr[i] === "number") {
// 			result.number.push(arr[i]);
// 		} else if (typeof arr[i] === "object") {
// 			result.object.push(arr[i]);
// 		} else if (Array.isArray(arr[i]) === true) {
// 			result.array.push(arr[i]);
// 		} else if (arr[i] === null) {
// 			result.null.push(arr[i]);
// 		} else if (Date.parse(arr[i])) {
// 			result.date.push(arr[i]);
// 		} else if (typeof arr[i] === "boolean") {
// 			result.boolean.push(arr[i]);
// 		} else if (typeof arr[i] === "undefined") {
// 			result.undefined.push(arr[i]);
// 		}
// 	}
// 	return result;
// }

// console.log(groupTypes(arr));

//TASK 2
// const input = [
// 	[33, 100, 110],
// 	[97, 115, 117],
// 	[111, 104, 84],
// 	[110, 101, 84],
// 	[32, 111, 116],
// 	[32, 101, 109],
// 	[111, 99, 108],
// 	[101, 87],
// ];

// function decryptMessage(data) {
// 	let message = "";

// 	data.map((word) =>
// 		word.map((symbol) => {
// 			message += String.fromCharCode(symbol);
// 		})
// 	);
// 	return message.split("").reverse().join("");
// }

// console.log(decryptMessage(input));

//TASK 3
// const text =
// 	"Hello Mike. Here is my phone number +38 (098) 330-00-03, my wife phone number 068-339-09-09 and my sun number 0683390791. Please use same country code +38 to have opportunity to call me";

// Очікуваний результат

// [ '38 (098) 330-00-03', '068-339-09-09', '0683390791' ]

//works  REGEXP(PHONE NUMBER) checker
//?  / start of regexp     end of regexp /    gi- "g" means globally(don't stop when find one match), "i" means case-insensitive search
//?  \+ include plus, ? optionally
//?  \d means any digit 0-9   {0,2} means from 0 to 2 times same(previous) instruction about digits
//?  \s space
//?  -? optionally includes -
//?  \(? optionally includes (
//works
//
//
// const regexp = /\+?\d{0,2}\s?-?\(?\d{3}\)?\s?-?\d{3}\s?-?\d{2}\s?-?\d{2}/gi;
// const phoneNumbers = [];

// function findPhone(str) {
// 	return str.match(regexp);
// }

// console.log(findPhone(text));

//NOT A TASK
//
//
//
//
//
// const paragraph = "   The quick brown fox jumps over the lazy dog. It barked.";
// const regex = /[A-Z][a-z]{2}/g;
// const found = paragraph.match(regex);

// console.log(found);
