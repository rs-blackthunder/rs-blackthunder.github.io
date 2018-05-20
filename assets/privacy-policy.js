$(document).ready ( function(){
	if(Cookies.get("blackThunderFLLCookiePolicy__Accepted") == "true") {
		$(".button").show();
	}
});
function hideButton() {
	$(".button").animate({
		opacity: 0
	}, 500);
	$(".button").hide();
}
