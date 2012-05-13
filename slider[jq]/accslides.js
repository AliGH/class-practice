$(function(){
	
	var imgTags = $('.slider .scroll > div');

	imgTags.last().css({'padding-right':'200px'});
	
	imgTags.mouseover(function(){
		
		imgTags.stop().animate({
			'width':'40px'
			},650);
				
		$(this).stop().animate({
			'width':'450px'
			},650);
			
	});
	
	imgTags.mouseout(function(){
		
		imgTags.stop().animate({
			'width':'110px'
		},400);
		
	});
	
});