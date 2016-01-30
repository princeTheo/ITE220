//Theo
$(function (){
	$("a").on("click", function(e){
		e.preventDefault();
		//alert(this.text)
		var city = this.text.toLowerCase();
		$.ajax({
			type: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=9fc92320165fc94d421601aeb79d3de1',
			success: function(data){
				//console.log(data);
				$("#container").html(data.name + ": ");
				$("#container").html("");
				function convertC(temp){
					temp = Math.round(temp - 273.15);
					return (temp +"&deg;C");
				};

				function convertF(temp){
					temp = Math.round((temp * 9 / 5)-459.67);
					return (temp + "&deg;F");
				};

			$("#celsius").click(function(){
					$("#container").html(convertC(data.main.temp));
					
				});
             $("#fahrenheit").click(function(){
					$("#container").html(convertF(data.main.temp));
				});
			}
		});
	});
});