$(document).ready(function(){

	var scrWidth = screen.width;
	var scrHeight = screen.height;
	var cliWidth = document.documentElement.clientWidth;
	var cliHeight = document.documentElement.clientHeight;

	$('#one').text('Device screen width/height: ' + scrWidth + ' / ' + scrHeight);
	$('#two').text('Browser display width/height: ' + cliWidth + ' / ' + cliHeight);
	if(window.devicePixelRatio) {
		$('#three').text('Window device pixel ratio: ' + window.devicePixelRatio);
	} else {
		$('#three').text('window.devicePixelRatio is not supported');
	}

	var col = parseInt(cliWidth / 100);
	console.log(col);
	var row = parseInt(cliHeight / 100);
	console.log(row);

	for(r = 0; r < row; r++){
		$('#container').append('<div class="mainRow" id="row' + r + '"></div>');
		for(p = 0; p < col; p++){
			$('#row' + r).append('<div class="block" id="col' + p + '"></div>');
		}
	}
	
	var lastRow = cliHeight % 100;
	console.log(lastRow);

	$('#row' + (row - 1)).after('<div class="bottom"></div>');
	$('.bottom').css('height', lastRow);

	for(i = 0; i < col; i++){
		$('.bottom').append('<div class="block" id="col' + i + '"></div>');
	}

	/*var headHeight = $('header').css('height');
	if (window.innerWidth) {
		var clientWidth = window.innerWidth;
	} else if (document.all) {
		var clientWidth = document.body.clientWidth;
	}
	console.log(headHeight);
	console.log(clientWidth);

	if (clientWidth < 980) {
		$('#content').css('padding-top', headHeight);
	}*/

});