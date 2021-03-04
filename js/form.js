function checkForJQuery() {
	if(window.jQuery) {
		$(document).ready(function() {
			$('.widget input, .widget textarea').focus(function(){
				$(this).parent().addClass('focused');
			}).blur(function(){
				$(this).parent().removeClass('focused');
			}).keyup(function(){
				if($(this).val()){
					$(this).parent().addClass("has-value");
				} else{
					$(this).parent().removeClass("has-value");
				}
			});
		});
	}
}

checkForJQuery();