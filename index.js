let records = new Set();
while (records.size < 100) {
	// Generate a random array of 25 numbers
	let record = Array.from({ length: 25 }, () => Math.floor((Math.random() * 99) + 1));
	// Add the record to the set if it is unique
	if (!records.has(JSON.stringify(record))) {
		records.add(JSON.stringify(record));
	}
}
// console.log(records);

// Convert the set of strings back to an array of arrays
records = Array.from(records, record => JSON.parse(record));
// console.log(records);
// const a = records.map((record) => {
// 	return JSON.parse(record)
// })
// console.log(a);
function getDatePlay() {
	const date = document.getElementById('date')
	const dateInput = new Date(date.value);
	let day = dateInput.getDate();
	let month = dateInput.getMonth() + 1;
	if (day < 10) {
		day = `0${day}`
	}
	if (month < 9) {
		month = `0${month}`
	}
	return `${day}/${month}`
}

function generateTable(records) {
	const elements = records.map(record => {
		let index = 0;
		let table = '<table>';
		for (let i = 0; i < 5; i++) {
			table += '<tr>';
			for (let j = 0; j < 5; j++) {
				if (i === 2 && j === 2) {
					table += '<td class="free">FREE SPACE</td>';
				} else {
					table += '<td>' + record[index] + '</td>';
					index++;
				}
			}
			table += '</tr>';
		}
		const dateElement = `<div class='date'>VÉ NGÀY ${getDatePlay()}</div>`
		table += '</table>';

		return `<div id='container'>
		${dateElement + table}
		</div>`
	})
	console.log(elements.join(''));
	elements.join('')
	return elements;
}

function onGenerate() {
	const elements = generateTable(records)
	const root = document.getElementById('root')
	root.innerHTML = elements
}

// console.log(root)
// console.log(generateTable(records));