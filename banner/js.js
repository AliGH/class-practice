window.onload = function(){
	var height = 500;
	var divScl = document.getElementsByClassName('banner').item(0).getElementsByClassName('scroll').item(0);
	var btn = document.getElementsByClassName('banner').item(0).getElementsByClassName('btn').item(0).getElementsByTagName('li');
	
	for (var i=0;i<btn.length;i++){
		(function(i){
			btn.item(i).onclick = function(){
				divScl.style.top=(-i*height) + 'px';
			}
		})(i);		
	}
}