$(document).ready ( function(){
	if(Cookies.get("blackThunderCookiePolicy__Accepted") == "true") {
		$(".button").addClass("button-enabled");
		$(".button").innerHTML("Decline cookies");
		$('.button').css({'cursor': 'pointer'});
	}
});
function changeButtonContent() {
	$(".button").html("You haven't accepted cookies");
	$('.button').css({'cursor': 'not-allowed'});
	$(".button-enabled").removeClass("button-enabled");
}
