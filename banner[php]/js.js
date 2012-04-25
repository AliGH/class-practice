var width = 980,
height = 670,
currentSlide = 0,
divScl, btn, picsLen, go2slide, nextSlide, prvSlide;

window.onload = function(){
	divScl = document.getElementsByClassName('banner').item(0).getElementsByClassName('scroll').item(0);
	txt = document.getElementsByClassName('banner').item(0).getElementsByClassName('text').item(0);
	btnWidth = document.getElementsByClassName('banner').item(0).getElementsByClassName('btn').item(0);
	btn = btnWidth.getElementsByTagName('li');	
	
	picsLen = btn.length;
	currentSlide = 0;
	divScl.style.width = (picsLen*980) + 'px';
	btnWidth.style.width = (picsLen*20) + 'px';
	
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
	/* ACTIVE WITH CSS3 :))
	document.getElementById('next').onmousedown = function(){
		document.getElementById('next').style.backgroundPosition = '-90px bottom';
	}
	
	document.getElementById('next').onmouseup = function(){
		document.getElementById('next').style.backgroundPosition = '-90px top';
	}
	
		document.getElementById('next').onmouseout = function(){
		document.getElementById('next').style.backgroundPosition = '-90px top';
	}



	document.getElementById('back').onmousedown = function(){
		document.getElementById('back').style.backgroundPosition = 'right bottom';
	}
	
	document.getElementById('back').onmouseup = function(){
		document.getElementById('back').style.backgroundPosition = 'right top';
	}
	
		document.getElementById('back').onmouseout = function(){
		document.getElementById('back').style.backgroundPosition = 'right top';
	}



	document.getElementById('play').onmousedown = function(){
		document.getElementById('play').style.backgroundPosition = 'left bottom';
		setInterval(nextSlide,3500);
	}
	
	document.getElementById('play').onmouseup = function(){
		document.getElementById('play').style.backgroundPosition = 'center -1px';
	}
	
		document.getElementById('play').onmouseout = function(){
		document.getElementById('play').style.backgroundPosition = 'center -1px';
	}*/

	
}
