var picWidth = 980,
currentSlide = 0,
divScl, btn, picsLen, go2slide, nextSlide, prvSlide;

window.onload = function(){
	width = 980;
	height = 670;
	divScl = document.getElementsByClassName('banner').item(0).getElementsByClassName('scroll').item(0);
	txt = document.getElementsByClassName('banner').item(0).getElementsByClassName('text').item(0);
	btn = document.getElementsByClassName('banner').item(0).getElementsByClassName('btn').item(0).getElementsByTagName('li');	
	picsLen = btn.length;
	currentSlide = 0;
	
	go2slide = function(n){
		if (n>=picsLen) n = 0;
		if (n<0) n=picsLen-1;
		
		divScl.style.left = (-n*width) + 'px';
		txt.style.top=(-n*height) + 'px';
		currentSlide=n;
	};
	
	nextSlide = function(){
		go2slide(currentSlide+1);
	};
	
	prvSlide = function(){
		go2slide(currentSlide-1);
	};
	
	for (var i=0;i<picsLen;i++){
		(function(j){
			btn.item(j).onclick = function(){
				go2slide(j);
			}
		})(i);		
	}
	
	
}