$(document).ready ( function(){
	if(Cookies.get("blackThunderFLLCookiePolicy__Accepted") == "true") {
		$(".button").html("Decline cookies");
	}
});
function changeButtonContent() {
	$(".button").html("You haven't accepted cookies");
	$('.button').css({'cursor': 'not-allowed'});
	$(".button-enabled").removeClass("button-enabled");
}
