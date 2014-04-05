var coin;

$(document).ready(function() {
	coin = loadCoin("res/us/quarter.json");

	$('img#coin').click(function() {
		if (Math.random() < 0.5) {
			$(this).attr('src', coin.headSrc);
		} else {
			$(this).attr('src', coin.tailSrc);
		}
	});
});

function loadCoin(path) {
	var json = (function () {
		var json = null;
		$.ajax({
			'async': false,
			'global': false,
			'url': path,
			'dataType': "json",
			'success': function (data) {
				json = data;
			}
		});
		return json;
	})();

	return json;
}

function changeCoin(newCoin) {
	coin = newCoin;

	$('img#coin').width(newCoin.size * 10);
	$('img#coin').height(newCoin.size * 10);
}
