// TYPEWRITER START

// set up text to print, each item in array is new line

var arrText = new Array(
"Welcome"
);

var intSpeed = 100; // time delay of print out
var intIndex = 0; // start printing array at this posision
var intArrayLength = arrText[0].length; // the length of the text array
var intScrollAt = 20; // start scrolling up at this many lines

var intTextPosition = 0; // initialise text position
var strContents = ""; // initialise contents variable
var intRow; // initialise current row

function typeTitle()
{
	strContents =  ' ';
	intRow = Math.max(0, intIndex-intScrollAt);
	var destination = document.getElementById("title");

	while ( intRow < intIndex ) {
		strContents += arrText[intRow++] + '<br>';
	}
	destination.innerHTML = strContents + arrText[intIndex].substring(0, intTextPosition) + "_";
	if ( intTextPosition++ == intArrayLength ) {
		intTextPosition = 0;
		intIndex++;
		if ( intIndex != arrText.length ) {
			intArrayLength = arrText[intIndex].length;
			setTimeout("typeTitle()", intSpeed);
		}
		else {
			setTimeout(function() {
				destination.innerHTML = destination.innerHTML.substring(0, destination.innerHTML.length - 1);
			}, 500);

			// Finishing
			document.getElementsByClassName("YTContainer")[0].style.display = "block";
			document.querySelector("#mainContent").style.display = "block";
			var intMainParagraphs = $("#mainContent > span").length
			var intYouTubeAnimationDelay = intMainParagraphs * 800 + 800
			setTimeout(function(){
				$(".YTContainer").animate({
					opacity: 1,
					top: "0"
				}, 1000);
			}, intYouTubeAnimationDelay);
		}
	} else {
		setTimeout("typeTitle()", intSpeed);
	}
}

setTimeout(typeTitle, 2000);

// TYPEWRITER END
