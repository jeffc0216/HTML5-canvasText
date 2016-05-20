function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext("2d");

	//shadow
	// canvas.shadowOffsetX = 4; //不可寫4px
	// canvas.shadowOffsetY = 4; //不可寫4px
	// canvas.shadowColor = 'rgb(0,200,55)';
	// canvas.shadowBlur = 3;
	//canvas.shadowColor = 'rgba(0,200,55,0.6)';

	//shadow
	canvas.shadowOffsetX = -2; //不可寫4px
	canvas.shadowOffsetY = -2; //不可寫4px
	canvas.shadowColor = 'rgb(100,180,0)';
	canvas.shadowBlur = 4;

	canvas.strokeStyle = 'red';
	canvas.fillStyle = '#fff';
    //canvas.textBaseline = 'hanging'; //對齊方式
    //canvas.textBaseline = 'bottom'; //對齊方式

	canvas.font = 'bold 40px Comic Sans MS';
	//canvas.fillText('OMG Jeff?', 100, 100);
	canvas.strokeText('OMG Hello?', 100, 100);
	canvas.fillText('OMG Hello?', 100, 100);

	// canvas.moveTo(100,100);
	// canvas.lineTo(300,100);
	// canvas.stroke(); //畫線

}


window.addEventListener('load', doFirst, false);