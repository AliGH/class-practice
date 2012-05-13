$(function(){
	
	var imgTags = $('.slider .scroll > div');
	
	window.openSlide = function(slideIndex,duration){
		
		imgTags.last().css({'padding-right':'150px'});
		
		imgTags.stop().animate({
			'width':'40px'
			},duration);
				
		imgTags.eq(slideIndex).stop().animate({
			'width':'450px'
			},650);
	};
	imgTags.click(function(){
		openSlide(imgTags.index(this),650);
	});
	openSlide(2,500);
	
		
});