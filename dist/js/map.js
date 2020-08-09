var map;
var arrMarkers = [];
var arrInfoWindows = [];

function mapInit() {
	var centerCoord = new google.maps.LatLng(56.316667, 44);
	var mapOptions = {
		zoom: 7,
		center: centerCoord,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById("map"), mapOptions);

	//Загружаем данные в формате JSON из файла markers.json
	$.getJSON("../js/markers.json", {}, function (data) {
		$.each(data.places, function (i, item) {

			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(item.lat, item.lng),
				map: map,
				title: item.title
			});

			arrMarkers[i] = marker;
			var infowindow = new google.maps.InfoWindow({
				content: "<h3>" + item.title + "</h3><p>"
			});

			arrInfoWindows[i] = infowindow;
			google.maps.event.addListener(marker, 'click', function () {
				infowindow.open(map, marker);
			});

		});
	});
}

function newLocation(newLat, newLng, newZoom) {
	map.setCenter({
		lat: newLat,
		lng: newLng
	});
	map.setZoom(newZoom)
}

$(document).on('click', '.b-addresses-block__link, .contact-block__link', function (e) {
	e.preventDefault();
	newLocation($(this).data('lat'), $(this).data('long'), $(this).data('zoom'));
});


$(function () {
	if($('#map').length) {
		mapInit();
	}
});