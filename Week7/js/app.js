$(function (){
	$("a").on("click", function(e){
		e.preventDefault();
		//alert(this.text)
		var city = this.text.toLowerCase();
		$.ajax({
			type: 'GET',
			// url API for open weather map that fetches city json data value in either degrees or fahrenheit
			url: 'http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=9fc92320165fc94d421601aeb79d3de1',
			success: function(data){
				//console.log(data);
				$("#container").html(data.name + ": ");
				$("#container").html("");
				// function to convert the temperature degree celsius
				function convertC(temp){
					//math.round function returns the value of the number rounded to the nearest integer.
					temp = Math.round(temp - 273.15);
					return (temp +"&deg;C");
				};

                 //also function to convert the temperature degree fahrenheit 
				function convertF(temp){
					//math.round function returns the value of the number rounded to the nearest integer.
					temp = Math.round((temp * 9 / 5)-459.67);
					return (temp + "&deg;F");
				};
                 //function that connects or links the div "container" with class "convert" id "celsius" in the html to convert and fetch the data to display on the html
			$("#celsius").click(function(){
					$("#container").html(convertC(data.main.temp));
				//function that connects or links the div "container" with class "convert" id "fahrenhiet" in the html to convert and fetch the data to display on the html
				});
             $("#fahrenheit").click(function(){
					$("#container").html(convertF(data.main.temp));
				});
			}
		});
	});
});
