// 	http://127.0.0.1:8080/

function myCallbackFunction() {
	if (xhr.readyState == 4 && xhr.status == 200) {
		data = JSON.parse(xhr.responseText);
		
		for (i = 0; i < data.length; i++) {   										// check syntax
			document.getElementById("messages").innerHTML += '<br />' +
			data[i]["content"] + ' ' + data[i]["username"]; 
		}
	}
}

function parse() { 
	xhr = new XMLHttpRequest();

	xhr.open("GET", "data.json", true);
	xhr.setRequestHeader("Content-type", "https://secret-about-box.herokuapp.com/sendLocation");
	xhr.onreadystatechange = myCallbackFunction;

	xhr.send();
}