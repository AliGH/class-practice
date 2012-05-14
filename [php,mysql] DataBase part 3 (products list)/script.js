$(function(){
	var dly = 0;
	
	$('.book:even').css('float','left');
	$('.book:even').css('width','400px');
	$('.book:odd').css('margin-left','530px');
	
	$('.book').each(function(){
		$(this).delay(dly+=200).animate({'margin-top':'0'},700);
	});
	
	$('.readmore').click(function(){
		$('.more').fadeTo(1000,.8);
	});
	$('.more').click(function(){
		$('.more').fadeOut(500);
	});
			
});