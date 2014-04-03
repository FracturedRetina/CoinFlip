$(document).ready(function() {
	var coin = loadCoin("res/us/quarter.json");
});

$('img#coin').click(function() {
	if (Math.random() < 0.5) {
		$(this).attr('src', coin.headSrc);
	} else {
		$(this).attr('src', coin.tailSrc);
	}
});

function loadCoin(url) {
	$.ajax({
		url: url,
		dataType: "text",
		success: function(data) {
			
			//data downloaded so we call parseJSON function 
			//and pass downloaded data
			var json = $.parseJSON(data);
			//now json variable contains data in json format
			//let's display a few items
			alert('Plugin name: ' + json.name + '<br />Author: ' + json.author.name);
			return json;
		}
	});
}
