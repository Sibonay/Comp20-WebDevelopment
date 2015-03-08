function myCallbackFunction() {
	if (xhr.readyState == 4 && xhr.status == 200) {
		data = JSON.parse(xhr.responseText);
		console.log(data);
		console.log(data["content"]);
		for (i = 0; i < data.length; i++) {   										// check syntax
			document.getElementById("messages").innerHTML += '<br />' +
			data[i]["content"] + ' ' + data[i]["username"]; 
		}
	}
}

function parse() { 
	xhr = new XMLHttpRequest();

	xhr.open("GET", "data.json", true);
	xhr.onreadystatechange = myCallbackFunction;

	xhr.send();
}