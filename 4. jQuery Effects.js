/* Note* The input for these animations are timers by ms.

// animation for fadeToggle, this way we don't have to use fadeIn or fadeOut
$("button").on("click", function() {
	$("div").fadeToggle(1000, function() {
	// Note the div only 'fadeOut/fadeIn', however, div is still present. 
  // To delete div completely, $("div").remove();
  	
	});
})



// animation for slideToggle - similar to drop down.
$("button").on("click", function() {
	$('div').slideToggle();
})

*?
