// TYPEWRITER START //

var a
var b
var c
var d
var e
var f
var g
var h

// TITLE

// set up text to print, each item in array is new line
var aText = new Array(
"Welcome"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriterTitle()
{
	sContents =  ' ';
	iRow = Math.max(0, iIndex-iScrollAt);
	var destination = document.getElementById("typedTitle");
 
	while ( iRow < iIndex ) {
		sContents += aText[iRow++] + '<br />';
	}
	destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
	if ( iTextPos++ == iArrLength ) {
		iTextPos = 0;
		iIndex++;
		if ( iIndex != aText.length ) {
			iArrLength = aText[iIndex].length;
			c=setTimeout("typewriterTitle()", 500);
		}
		else {
			setTimeout(function() {
				var destination = document.getElementById("typedTitle");
				destination.innerHTML = destination.innerHTML.substring(0, destination.innerHTML.length - 1);
			}, 500);
		}
	} else {
		b=setTimeout("typewriterTitle()", iSpeed);
	}
}


// MAIN TEXT

// set up text to print, each item in array is new line
var aTextText = new Array(
"We are Black Thunder: a FIRST LEGO League team from Reading School, UK. We are a group of around 40 11-16 year olds who enjoy robotics, and meet each Friday after school, to work on robot-related tasks; one of them is the FLL.",
"",
"We have a blog, YouTube channel and Twitter feed; our YouTube channel and Twitter feed can be seen below."
);
var iSpeedText = 30; // time delay of print out
var iIndexText = 0; // start printing array at this posision
var iArrLengthText = aTextText[0].length; // the length of the text array
var iScrollAtText = 20; // start scrolling up at this many lines

var iTextPosText = 0; // initialise text position
var sContentsText = ''; // initialise contents variable
var iRowText; // initialise current row

function typewriterText()
{
	sContentsText =  ' ';
	iRowText = Math.max(0, iIndexText-iScrollAtText);
	var destinationText = document.getElementById("typedText");
 
	while ( iRowText < iIndexText ) {
		sContentsText += aTextText[iRowText++] + '<br />';
	}
	destinationText.innerHTML = sContentsText + aTextText[iIndexText].substring(0, iTextPosText) + "_";
	if ( iTextPosText++ == iArrLengthText ) {
		iTextPosText = 0;
		iIndexText++;
		if ( iIndexText != aTextText.length ) {
			iArrLengthText = aTextText[iIndexText].length;
			c=setTimeout("typewriterText()", 500);
		}
		else {
			setTimeout(function() {
				var destination = document.getElementById("typedText");
				destination.innerHTML = destination.innerHTML.substring(0, destination.innerHTML.length - 1);
				$('.skip-button').fadeOut(500);
				document.getElementsByClassName("YTContainer")[0].style.display = "block";
				$(".YTContainer").animate({
					opacity: 1,
					top: "-=10vh"
				}, 500);
				YTContainerMoved = true;
				$("#typedText").animate({
					marginBottom: "15px"
				}, 500);
			}, 500);
		}
	} else {
		d=setTimeout("typewriterText()", iSpeedText);
	}
}

e=setTimeout(typewriterTitle, 2000);
g=setTimeout(typewriterText, 5000);

// TYPEWRITER END //

// SKIP BUTTON START //

var buttonClick = false
var animateAsNormal = false

setTimeout(function() {
	$(".skip-button").fadeIn();
}, 2000);

setTimeout(function() {
	if (buttonClick) {
		document.getElementsByClassName("YTContainer")[0].style.display = "block";
		$( ".YTContainer" ).animate({
			opacity: 1,
			top: "-=10vh"
		}, 500);
		$("#typedText").animate({
			marginBottom: "15px"
		}, 500);
	}
	else {
		animateAsNormal = true
	}
}, 4550);

function skip() {
	if (buttonClick == false) {
		buttonClick = true;
		clearTimeout(a);
		clearTimeout(b);
		clearTimeout(c);
		clearTimeout(d);
		clearTimeout(e);
		clearTimeout(f);
		clearTimeout(g);
		clearTimeout(h);
		if (animateAsNormal) {
			document.getElementsByClassName("YTContainer")[0].style.display = "block";
			$( ".YTContainer" ).animate({
				opacity: 1,
				top: "-=10vh"
			}, 500);
			$("#typedText").animate({
				marginBottom: "15px"
			}, 500);
		}
	}
};

// SKIP BUTTON END //
