canvas = document.getElementById('game_canvas');
ctx = canvas.getContext('2d');

var image_sprite = new Image();
image_sprite.src = "pacman10-hp-sprite.png";

image_sprite.addEventListener("load", function() {
	// draws the blue board
	ctx.drawImage(image_sprite, 324, 1, 462, 33, 0, 0, 800, 600); 
	// draws Ms. Pac-Man
	ctx.drawImage(image_sprite, 80, 18, 20, 20, 30, 25, 20, 20);
}, false);





//getting background from sprite: 
//height 1-34
//width 324 - 786


//pacman on background:
//width starts at 355 or 30
//height starts at 25
