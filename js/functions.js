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

		calcSize: function(cantidad) {

	        	if (cantidad === undefined)
	        	{
	        		cantidad = myPixelDraw.defaultCells;
	        	}
	        	
	        	var totalCeldas = cantidad * cantidad;
	        	myPixelDraw.container.empty();
	        	
	        	for (var i = 0; i < totalCeldas; i++) {
	        		myPixelDraw.container.append('<div class="celda" draggable> </div>')
	        	}
	        	
	        	var tamDeCelda = myPixelDraw.container.width() / cantidad;

	        	$(".celda").width(tamDeCelda);
	        	$(".celda").height(tamDeCelda);
	        },
	    
	    reSize: function() {
	          $('#sizeit').on('click', function() {
	          	var newSisze = $('#resize').val();
	          	if ( == 0 || newSisze > 50) 
	          	{
	          		alert('Ingres un valor de 1 a 50');
                    var newSize = defaultCells;

	          	} else if 
	          	{
	          		alter('Ingrese un numero valido');
	          		var newSize = defaultCells;
	          	}
	          	myPixelDraw.fns.calcSize(newSize);
	          })

	        },
		
		detectMouseUp: function() {
				$(document).on('mouseup', function(e) {
                myPixelDraw.coloring = false;
            	});
			},

		colorPalette: function() {
				$('#color-pick > div').on('click', function() {
					var clase = $(e).attr('class');
					$(e).css('background-color', clase);

				});
			},

		pickColor: function() {
			
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