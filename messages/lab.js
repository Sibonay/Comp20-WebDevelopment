function myCallbackFunction() {
	if (xhr.readyState == 4 && xhr.status == 200) {
		data = JSON.parse(xhr.responseText);
		for (i = 0; i < data.length; i++) {   // syntax											// check syntax
			document.getElementById("messages").innerHTML = 
			data[i][content] + ' ' + data[i][username]; 
		// how to print elements of a key value pair...
		}
	}
}

function parse() { // is a diff parse
	xhr = new XMLHttpRequest();

	xhr.open("GET", "data.json", true);
	xhr.onreadystatechange = myCallbackFunction;

	xhr.send();
}