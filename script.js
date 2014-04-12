var coin;
var flipSound;

$(document).ready(function() {
	//Initialize coin
	changeCoin(
		loadCoin("res/us/quarter.json")
	);
	flipSound = new Audio("http://www.soundjay.com/misc/sounds/spinning-coin-1.mp3");
	
	//Clicking on coin flips coin
	$('map#hitbox').click(function() {
		//Choose wether to show heads or tails
		if (Math.random() < 0.5) {
			$('img#coin').attr('src', coin.headSrc);
		} else {
			$('img#coin').attr('src', coin.tailSrc);
		}
		
		//Play coin flip sound
		flipSound.play();
	});
	
	//On new coin select
	$('select#chooseCoin').change(
		function() {
			changeCoin(
				loadCoin("res/" + $(this).val() + ".json")
			)
		}
	);
});

//Load a coin json file from url "path"
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

//Change coin to a new loaded coin
//This will also adjust the coin size and reset the coin source
function changeCoin(newCoin) {
	coin = newCoin;
	
	//Set coin image to blank
	$('img#coin').attr('src', "http://upload.wikimedia.org/wikipedia/commons/a/a0/Circle_-_black_simple.svg");
	//Fix relative coin size
	$('img#coin').width(newCoin.size * 10);
	$('img#coin').height(newCoin.size * 10);
	$('map#hitbox').attr('coords',
		(newCoin.size * 5) + ', ' +
		(newCoin.size * 5) + ', ' +
		(newCoin.size * 5)
	);
}
