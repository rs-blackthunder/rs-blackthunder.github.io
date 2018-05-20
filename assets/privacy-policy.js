$(document).ready ( function(){
	if(Cookies.get("blackThunderFLLCookiePolicy__Accepted") == "true") {
		$(".button").show();
		$(".button").animate({
			opacity: 0
		}, 500);
		$(".button").hide();
	}
});​
