var hotel ={
	
	name: 'Mini Hotel',
	rooms:40,
	booked:25,
	checkAvailability: function(){
		return this.rooms - this.booked;
	}
	};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailability();



var hotel = new Object();

hotel.name = 'Mini Hotel'
hotel.rooms = 40;
hotel.booked = 25;

hotel.checkAvailability= function(){
	return this.rooms-this.booked;
};



var MiniHotel = new Hotel ('Mini Hotel', 40, 25);
