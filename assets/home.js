// TYPEWRITER START //

var a
var b
var c
var d
var e
var f
var g
var h
var i

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
 } else {
  d=setTimeout("typewriterText()", iSpeedText);
 }
}

function removeUnderscoreTitle() {
	var destination = document.getElementById("typedTitle");
	destination.innerHTML = "Welcome";
}
function removeUnderscoreMainText() {
	var destination = document.getElementById("typedText");
	destination.innerHTML = "We are Black Thunder: a FIRST LEGO League team from Reading School, UK. We are a group of around 40 11-16 year olds who enjoy robotics, and meet each Friday after school, to work on robot-related tasks; one of them is the FLL.<br/><br/>We have a blog, YouTube channel and Twitter feed; our YouTube channel and Twitter feed can be seen below.";
	$('.skip-button').fadeOut(500);
}

var buttonClick = false
var YTContainerMoved = false

e=setTimeout(typewriterTitle, 2000);
f=setTimeout(removeUnderscoreTitle, 6500);
g=setTimeout(typewriterText, 5000);
h=setTimeout(removeUnderscoreMainText, 18000);
i=setTimeout(function(){
	buttonClick = true
	document.getElementsByClassName("YTContainer")[0].style.display = "block";
	$(".YTContainer").animate({
		opacity: 1,
		top: "-=10vh"
	}, 500);
	YTContainerMoved = true;
	$("#typedText").animate({
		marginBottom: "15px"
	}, 500);
}, 16000);

// TYPEWRITER END //

$('a').attr('target','_blank');

// SKIP BUTTON START //

setTimeout(function() {
	$(".skip-button").fadeIn();
}, 2000);

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
		clearTimeout(i);
		removeUnderscoreTitle();
		removeUnderscoreMainText();
		setTimeout(function() {
			document.getElementsByClassName("YTContainer")[0].style.display = "block";
			$( ".YTContainer" ).animate({
				opacity: 1,
				top: "-=10vh"
			}, 500);
			YTContainerMoved = true;
			while (YTContainerMoved == false) {};
			$("#typedText").animate({
				marginBottom: "15px"
			}, 500);
		}, 2000);
	}
};

// SKIP BUTTON END //
