$(function(){
	var app = {
		init: function() {
			app.init_effect();
			app.init_event();
		},
		init_effect: function() {
			$("#head_tagline").height(200);
			$("#head_tagline>hi").hide().fadeIn("700");
			$("#head_tagline>p:first").hide().delay("700").fadeIn("700");
			
			$("#head_tagline>p:last").hide();
			$("#head_tagline>a").hide().delay("1,400").fadeIn("700");
			
		},
		init_event: function() {
			$("#head_tagline>a:first").on("click",function()
			{
				$("#head_tagline>p:last").hide() .fadeIn(700);
				("#head_tagline") .height(320);
			});
			$("#head_tagline>a:first").on("click",function()
			{
				$("#head_tagline>a:last").hide();
				("#head_tagline").height(200);
			});
				
			$("#orm-submit") .on("click", function() {
				var phone = $("#form-number") .val();
				if (!$.isNumeric(phone)) {
					$(".error:first") .show();
				}
				else 
					$(".error:first") .hide();
			});
			$(".image-flip").flip({
				axis: 'y',
				trigger: 'hover'
			});
		}
	};
	app.init();
});