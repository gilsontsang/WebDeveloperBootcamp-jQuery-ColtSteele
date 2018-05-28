/* 
jQuery
- The most popular tool for Javascript library
- Helps us manipulate the DOM using pre-made methods and properties
*Remember, jQuery is like any other java file.

jQuery CDN (content distributed network)
- Access jQuery from online without downloading to our machine

$() function selects elements // This acts similar to querySelectorAll
.css() method style elements

ex. 
$("img") selects all img tags
$(".sale") selects all class 'sale'
$("#bonus") selects element with id 'bonus'
$("li a") selects all a (anchor) tags inside li's


Preview into the power of jQuery
HTML:
	var lis = document.querySelectorAll("li");
    
	for(var i =0; i<lis.length; i++) {
  		lis[i].style.background-color = "skyblue";
    	}
CSS: 
	$("li").css("background-color","skyblue");

We can see CSS significantly shortens the code for us, allowing our code to be more organization.

Example of how we use jQuery are below.
*/

// Select all divs and give them a purple background
$("div").css("background-color","purple");

// Select the divs with class highlight with a width of 200px
$(".highlight").css("width","200px");

// Select the dive of id = "third" and give it a border dashed orange.
$("#third").css("border","2px solid orange");

// Selects the first div ONLY and change its color to pink.
$("div:first-of-type").css("color","pink");

// Styling h1
$("h1").css("border","2px solid red");

// We can also style our HTMl by first creating styles such as "styles" and "styles2".


// Styles the "styles" class.
var styles = {
	backgroundColor: "pink",
  	fontweight: "bold"
}

// Styles the "styles2" class.
var styles2 = {
	color: "red",
  	background: "lightgreen"
}

// Styling body
$("body").css(styles);

// Styling id = "item3"
$("#item3").css(styles2);

// Styling anchor tag
$("a").css("font-size", "40px");

// Styling lists.
$("li").css({
	fontSize: "10px",
 	border: "3px dashed purple",
  	background: "rgba(89, 45, 20, 0.5)"
})
