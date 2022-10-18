function checkString(str) {
	try {
		var aux = parseInt(str);
		return str;
	} catch (e) {}

	var current = str[0];
	var res = "";
	var count = 1;
	if (str && str.length > 0) {
		for (let i = 1; i < str.length; i++) {
			if (str[i] === current && count < 10) {
				count++;
			} else {
				res = res + count + current;
				count = 1;
				current = str[i];
			}
		}
		if (res[res.length - 1] != current) {
			res = res + count + current;
		}
	}

	return res;
}

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let a = parseInt(arr[i]);
		if (a < 0) {
			a = a * -1;
			arr[i] = a;
		}
	}
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}
	return arr;
}

function sortedSq(arr) {
	var res = [];
	if (arr && arr.length > 0) {
		if (parseInt(arr[0]) < 0) arr = bubbleSort(arr);
		for (let i = 0; i < arr.length; i++) {
			let val = parseInt(arr[i]);
			res.push(val * val);
		}
	}
	return res;
}
// console.log(sortedSq([1, 2, 3, 5, 6, 8, 9]));
// console.log(checkString("55332"));
