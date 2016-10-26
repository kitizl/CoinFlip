var coin = document.getElementById("coin");

function toss(){
	var choice = Math.floor(Math.random()*2);
	switch(choice){
		case 0: coin.src = "img/heads.jpg";
				break;
		case 1: coin.src = "img/tails.jpg";
				break;
		default: console.log('error');
				break;
	}
}