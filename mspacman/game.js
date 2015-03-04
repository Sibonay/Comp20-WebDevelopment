function init() {
	canvas = document.getElementById('game_canvas');
	ctx = canvas.getContext('2d');

	var image_sprite = new Image();
	image_sprite.addEventListener("load", function() {
		// draws the blue board
		ctx.drawImage(image_sprite, 324, 1, 462, 133, 0, 0, 462, 133); 
		// draws Ms. Pac-Man
		ctx.drawImage(image_sprite, 80, 18, 20, 20, 30, 25, 20, 20);
	}, false);
	image_sprite.src = "pacman10-hp-sprite.png";
}





