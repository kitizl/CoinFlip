function toss(){
	var choice = Math.floor(Math.random()*2);
	switch(choice){
		case 0: document.getElementById('coin').src = "img/heads.jpg";
				break;
		case 1: document.getElementById('coin').src = "img/tails.jpg";
				break;
		default: console.log('error');
				break;
	}
}