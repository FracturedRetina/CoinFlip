var coin = loadCoin("res/us/quarter.json");

$(document).ready(function() {
	if ($(window).width() > $(window).height()) {
		$('img#coin').height('75%');
		$('img#coin').height($('img#coin').width());
	} else {
		$('img#coin').width('75%');
		$('img#coin').width($('img#coin').height());
	}
});

$('img#coin').click(function() {
	if (Math.random() < 0.5) {
		$(this).attr('src', coin.headSrc);
	} else {
		$(this).attr('src', coin.tailSrc);
	}
});

function loadCoin(url) {
	jQuery.getJSON(url, function(data) {
		// data is an array of objects
		$.each(data, function(){
			console.log(this.title); // log each title
		});

		return data;
	});
}