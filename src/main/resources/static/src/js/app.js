// With VanillaJS
// Example with local data
//var xhttp = new XMLHttpRequest();
//xhttp.onreadystatechange = function() {
//    if (this.readyState == 4 && this.status == 200) {
//       // Typical action to be performed when the document is ready:
//       document.getElementById("asideContent").innerHTML = xhttp.responseText;
//    }
//};
//xhttp.open("GET", "../sidebar.html", true);
//xhttp.send();

// Example with a hosted API
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		// Get JSON from the returned string
		const res = JSON.parse(xhr.responseText);
		// Typical action to be performed when the document is ready:
		console.log({res})
		document.getElementById("asideContent").innerHTML = `<h2>${res.name}</h2>`;
	}
};
xhr.open("GET", "https://swapi.co/api/people/1/", true);
xhr.send();

// With an interval for frequent updates

setInterval(function() {
	xhttp.open("GET", "../sidebar.html", true)
	xhttp.send()
}, 3000);

// With jQuery
// does the same thing as the vanilla js code at first, but with jQuery
//const $asideContent = $('#asideContent')
//$asideContent.load('../sidebar.html')

//$.get()
// The location you want to query
//const url = '/sidebar.html'
//// This will get appended to the url as
//// a query string '?courseName=javascript'
//const data = {
//    courseName: 'javascript'
//};
//// What you want to do when the response comes back
//const callback = function(response) {
//    $($('main')).append('<p>' + response + '</p>')
//}
//$.get(url, data, callback)

//$.ajax({
//	type: 'GET',
//	dataType: 'html',
//	url: '../sidebar.html',
//	success: function(res) {
//		$asideContent.html(res)
//	},
//	error: function(res) {
//		$asideContent.text('You did something bad')
//	}
//})