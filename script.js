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

function loadCoin(path) {
	$.ajax({
		url: path,
		success: function (data) {
			return JSON.parse(data);
		}
	});
}
