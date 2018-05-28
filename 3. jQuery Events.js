/*
.click()
// activates when id="#submit' is clicked.
$('#submit').click(function() {
	console.log("Another click");
)}

// activates when ANY button is clicked.
$('button').click(function() {
	$(this).css("background", "pink");
	var text = $(this).text();
	console.log("You clikced " + text);
)}


.keypress()
// activates when input identifies a key pressed.
$('input').keypress(function() {
	console.log("YOU PRESSED A KEY!");
)}

// activates when input identifies the 'Enter Key' is pressed.
$('input').keypress(function(event) {
	if(event.which === 13) {
		console.log("YOU PRESSED THE ENTER KEY!");
	}
)}


.on()
/* 
* .on() is used 99% of the time.
* .on() supports all types of events, not just 'clicks'
* similar to 'vanilla JS''s "addEventListener"
* ex. 'click', 'dblclick', 'dragstart', 'keypress', etc...
*/

// activates when button is clicked using '.on'
$('input').keypress("click", function() {
	console.log("clicked using '.on'");
});

// if there are multiple h1, and you only want to select one listener, use 'this'
$("h1").on("click", function(){
	$(this).css("color", "purple");
});

// hover effect to bold fonts and back to normal
$("h1").on("mouseenter", function(){
	$(this).css("font-weight", "bold");
});
$("h1").on("mouseleave", function(){
	$(this).css("font-weight", "normal");
});




*/
