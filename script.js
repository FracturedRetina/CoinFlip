var coin;
var flipSound;

$(document).ready(function() {
	changeCoin(loadCoin("res/us/quarter.json"));
	flipSound = new Audio("http://www.soundjay.com/misc/sounds/spinning-coin-1.mp3");
	
	$('img#coin').click(function() {
		if (Math.random() < 0.5) {
			$(this).attr('src', coin.headSrc);
		} else {
			$(this).attr('src', coin.tailSrc);
		}
		
		flipSound.play();
	});
	$('select#chooseCoin').change(
		function() {
			changeCoin(
				loadCoin("res/" + $(this).val() + ".json")
			)
		}
	);
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
	
	$('img#coin').attr('src', "http://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_-_black_simple.svg");
	$('img#coin').width(newCoin.size * 10);
	$('img#coin').height(newCoin.size * 10);
}
