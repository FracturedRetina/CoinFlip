var coin = loadCoin("res/us/quarter.json");

$(document).ready(function() {
	
});

$('img#coin').click(function() {
	if (Math.random() < 0.5) {
		$(this).attr('src', coin.headSrc);
	} else {
		$(this).attr('src', coin.tailSrc);
	}
});

function loadCoin(url) {
	return $.getJSON(url);
}
