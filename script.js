var coin = loadCoin("res/us/quarter.json");

$(document).ready(function() {
	
});

$('img#coin').click(function() {
	if (Math.random() < 0.5) {
		$(this).attr('src', coin.headSrc);
		console.log("Heads");
	} else {
		$(this).attr('src', coin.tailSrc);
		console.log("Tails");
	}
});

function loadCoin(url) {
	return $.getJSON(url);
}
