$(document).ready(function(event) {
			
			var container = $('#container');
			var c1 = container.find('.circle1');
			var c2 = container.find('.circle2');
			var c3 = container.find('.circle3');
			var main =  $('#main');
			var c = main.find('.circle');
   
  c1.animate({right:'1px', top: '53px'}, 800);
  c2.animate({top:'-51px',left:'27px'}, 800);
  c3.animate({right:'53px'}, 800);
   
  c1.animate({right:'53px'}, 800);
  c2.animate({left:'52px', top: '0px'}, 800);
  c3.animate({top:'-51px',left:'-25px'}, 800);

  c1.animate({top:'1px',left:'1px'}, 800);
  c2.animate({left:'1px'}, 800);
  c3.animate({top:'0.5px',left:'0.5px'}, 800);

      c.animate({
       width: '55px',
	height: '55px',
    opacity: 0.2,
    left: '-17px',
    top: '-17px'
  }, 2000,);


  $( function() {
    $( "#container" ).draggable();
  } );


 $( function() {
    $( "#main" ).draggable();
  } );
			
		c1.click(function () {
				console.log('Не трогай меня !!!');
		
			});

});



