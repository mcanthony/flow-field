/// <reference path="../def/pixi.d.ts" />
/// <reference path="Kai.ts" />
/// <reference path="Boid.ts" />

module ff {
	
	var allTheThings = [];
	
	function update():void {
		
		
		Kai.renderer.render(Kai.stage);
		
		requestAnimFrame(update);
	}
	
	export class Main {
		constructor() {
		 	Kai.stage = new PIXI.Stage(0x151515);
		 	Kai.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);

			document.body.appendChild(Kai.renderer.view);
			
			var i, x = 0, y = 0,
				amount = 30, size = 50,
				g = ~~(amount / 4);
			
			for (i = 0; i < amount; i++) {
				allTheThings.push(new Boid(x*size+100, y*size+50));
				x++;
				if (x === g) {
					x = 0;
					y++;
				}
			}
			
			update();
		}
	}
}