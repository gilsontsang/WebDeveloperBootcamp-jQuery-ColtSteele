/* 
We can think of the methods as getters and setters.
$("something").text(); (This will GET all elements inside "something")
$("something").text("override"); (This will SET all elements inside "something" to "override" - this applies to all methods.

.text()
$("something").text(), gives you all of the text inside "something". Strips all HTML elements
-> $("h1").text();
-> $("ul").text();
-> $("li").text();

$("something").text("overwrite"), text inside "something" will be overwritten with "overwrite"
-> $("h1").text("overwrite");
-> $("li").text("multiple overwrites!");

.html()
$("something").html(), gives you all of the HTML inside "something"
We can modify what is inside "something", similar to $("something").text("overwrite")
-> $("ul").html("<li>I have hacked this list</li><li>Hacked listed!</li>");

.attr()
$("something").attr(), gives you all desired attribute
ex. <img id="something" src="somethingelse" alt="we want to change this attribute">
$("#something").attr("attribute we want to change", "change to");

.last()
$("something").last(), selects the last element of the given selector "something"
$("something").last("setter"), sets text to "setter"

.val()
$("something").val(), extracts value from input
$("something").val("setter"), sets text to "setter"
ex. We can even select values of <select> or <input>, this way we can see what the user selected / input.

.addClass()
ex. $("something").addClass("class1 class2");

.removeClass()
ex. $("something").removeClass("class1 class2").addClass("class3");
// Note, we can remove and add class all in one go!

.toggleClass()
ex. $("something").toggleClass("class1");
// This will turn add class1, if "something" currently does not have "class1", vice versa, this will remove class1, if "something" does have "class1"

*/
