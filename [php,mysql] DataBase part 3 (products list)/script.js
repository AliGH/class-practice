$(function(){
	var dly = 0;
	
	$('.book:even').css('float','left');
	$('.book:even').css('width','400px');
	$('.book:odd').css('margin-left','530px');
	
	$('.book').each(function(){
		$(this).delay(dly+=200).animate({'margin-top':'0'},600);
	});
	
	$('.readmore').click(function(){
		$('.more').stop().fadeTo(700,.8);
	});
	$('.more').click(function(){
		$('.more').fadeOut(500);
	});
			
});