
function setUpVisualizer() {
	canvasCtx.fillStyle = 'rgb(0, 0, 0)';
	canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

	var barWidth = (WIDTH / bufferLength) * 2.5;
	var barHeight;

	var x = 0;

	for(var i = 0; i < bufferLength; i++) {
		barHeight = dataArray[i];

		canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
		canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight/2);

		x += barWidth + 1;
	}

}