// display the calendar here
/*var hotelTable = document.getElementById("hotelCalendarTable");
var defaultData = hotelTable.innerHTML;
var stringHTML = "";
stringHTML = "<tr><td>1</td><td>2</td></tr>";
hotelTable.innerHTML += stringHTML;*/

// To put values in an individual cell 
for(var x =1; x <= 31; x++){
        document.getElementById("cell" + x).innerHTML = x ;
}
