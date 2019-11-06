
$(document).ready(function() {
	

		$('.left').click(function(e){
		e.preventDefault();

		
		var ball = $(".ball").offset();
	   
		//if(box.left>=ball.left && box.top>=ball.top)
  
 // {
	 if(ball.left>=12)
		$('.ball').animate({
			'marginLeft' : "-=30px" 
			});
		
		else{
		$(".ball").stop();
	}
	});
		
	$('.right').click(function(e) {
		e.preventDefault();
	  var ball = $(".ball").offset();
	

	 if(ball.left<=600)
	 {
		$('.ball').animate({
		'marginLeft' : "+=30px" 
		});
	}
	else{
		$(".ball").stop();
	}
	
	});



	$('.down').click(function(e) {
		e.preventDefault();
		var ball = $(".ball").offset();
		
if(ball.top<=200)
{		
		$('.ball').animate({
		'marginTop' : "+=30px" 
		});
	}
	else{
		$(".ball").stop();
	}
	});




	$('.up').click(function(e) {
		e.preventDefault();
		
		var ball = $(".ball").offset();
	
		
        if(ball.top>=2)
		{
		 
			$('.ball').animate({
				'marginTop' : "-=30px" 
				
				});
		
			}

		else if(ball.left>=300 && ball.left<=450)
	   {
	      alert("goal");
	   }
	//  else if(ball.top>=2)
	// 	{
	// 		$('.ball').animate({
	// 			'marginTop' : "-=30px" 
				
	// 			});
		
		
	// 	}
		
		
		else{
			$(".ball").stop();
	    }
	});


	/*
	var position = (e.pageX-offset.left)/$(this).width();
	
if(position <17) {
    $(this).animate({ scrollLeft: 17 });
	$(".ball").html(' Percentage:' + position.toFixed(2) + ' lefting');
}
else {
    $(this).stop().clearQueue();
    $(".ball").html(' Percentage:' + position.toFixed(2));
}


var ball = $( ".ball" ).first();
var position = ball.position();
alert($( ".ball" ).last().text( "left: " + position.left + ", top: " + position.top ));


	

var ball = $( ".ball" ).first();
var position = ball.position();
alert($( ".ball" ).last().text( "left: " + position.left + ", top: " + position.top ));


var ball = $( ".append" ).first();
var position = ball.position();
alert($( ".append" ).last().text( "left: " + position.left + ", top: " + position.top ));
var x = $(".append").offset();
	  alert("Top: " + x.top + " Left: " + x.left);
*/


	});
 

	
