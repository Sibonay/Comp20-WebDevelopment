// Your JavaScript goes here...

xhr = new XMLHttpRequest();

xhr.open("get", "data.json", true);
xhr.onreadystatechange = myCallbackFunction;

xhr.send();

function MyCallbackFunction() {
	if (xhr.readyState == 4 && xhr.status == 200) {
		data = JSON.parse(xhr.responseText);
		document.getElementByID("messages").innerHTML = xhr.responseText;
	}
}



