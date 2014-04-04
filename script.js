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
	var json = (function () {
		var json = null;
		$.ajax({
			'async': false,
			'global': false,
			'url': my_url,
			'dataType': "json",
			'success': function (data) {
				json = data;
			}
		});
		return json;
	})(); 
}
