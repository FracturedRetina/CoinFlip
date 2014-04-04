var coin;

$(document).ready(function() {
	coin = loadCoin("res/us/quarter.json");
});

$('img#coin').click(function() {
	if (Math.random() < 0.5) {
		$(this).attr('src', coin.headSrc);
	} else {
		$(this).attr('src', coin.tailSrc);
	}
});

function loadCoin(path) {
	var fileText = $.ajax({
		url: path,
		dataType: 'json',
		statusCode: {
			404: function() {
				alert("Coin at url\"" + path + "\" not found");
			}
		}
	});
	
	return fileText;
}
