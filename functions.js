var myPixelDraw = {

	colorPiked: 0,
	cellColor: '#ecf0f1',
	defaultCells: 30,
	coloring: false,
	init:function($contenedor){
        this.container = $contenedor;
        var fns = myPixelDraw.fns;
        for (var i = 0; i < Object.keys(fns).length; i++) {
            this.fns[Object.keys(fns)[i]]();
        }
    
	},

	fns: {

		calcSize: function() {
	          console.log('calcSize');
	        },
	    
	    reSize: function() {
	          console.log('reSize');
	        },
		
		detectMouseUp: function() {
				console.log('detectMouseUp');
			},

		colorPalette: function() {
				console.log('colorPalette');
			},

		pickColor: function() {
				console.log('pickColor');
			},

		colorIt: function() {
				console.log('colorIt');
			},
		
		colorOnDrag: function() {
				console.log('colorOnDrag');
			},
		
		reset: function() {
				console.log('reset');
			},
		
		toggleBorders: function() {
				console.log('toggleBorders');
			},
		
		disableRightClick: function() {
				console.log('disableRightClick');
			},
		
		grabImage: function() {
				console.log('grabImage');
			}

	}
}

$(document).ready(function () {
  myPixelDraw.init( $("#container") );

});