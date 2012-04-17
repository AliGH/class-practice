window.onload = function(){
	var width = 980;
	var height = 670;
	var divScl = document.getElementsByClassName('banner').item(0).getElementsByClassName('scroll').item(0);
	var txt = document.getElementsByClassName('banner').item(0).getElementsByClassName('text').item(0);
	var btn = document.getElementsByClassName('banner').item(0).getElementsByClassName('btn').item(0).getElementsByTagName('li');	
	for (var i=0;i<btn.length;i++){
		(function(i){
			btn.item(i).onclick = function(){
				divScl.style.left=(-i*width) + 'px';
				txt.style.top=(-i*height) + 'px';
				//btn.item(i).style.backgroundColor='#008484';
			}
		})(i);		
	}
	
	
}