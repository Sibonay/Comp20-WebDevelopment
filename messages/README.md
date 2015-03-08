Lab: messages

1) Files:
		- data.json
		- index.html
		- styles.css 
   Successfully loads JSON data using JavaScript's XMLHttpRequest object. Parses this JSON file, and outputs the data to a section of a completely loaded HTML file. 

2) Hours spent on assignment: ~ 3

3) Is it possible to request the data from a different origin or from your local machine using XMLHttpRequest?
	- No!!!
	- Because of the browser's same-origin-policy, XMLHttpRequests will only succeed if they are made to the host that served the original page (i.e. protocol, port [if specified], and host are the same for both)
	- Internet Explorer has a couple exceptions when it comes to same origin policy, but these exceptions are non-standard  