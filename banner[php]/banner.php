<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
<link type="text/css" rel="stylesheet" href="layout.css" />
<script type="text/javascript" src="js.js"></script>
</head>
<body>
	<div class="container">
		<div class="banner">
			<div class="media">
				<div id="back" onClick="prvSlide()"></div>
				<div id="play"></div>
				<div id="next" onClick="nextSlide()"></div>
			</div>
			<div class="scroll">
				<?php
				$counter = 0;
					$dir = './images/banner1';
					$sup_type = array('jpg','png','jpeg','gif'); 
					
					$d = dir($dir);
					while( $f=$d->read() ){
						$f_type = end (explode('.',$f) );
						 if( !in_array(strtolower($f_type),$sup_type) ) continue;
						echo "<div><img src='./images/banner1/$f' /></div>";
						$counter ++;
					}
					
				?>
			</div>
			<div class="text">
					<div class="txt1">
						<h3>Camera Enhancements</h3>
						<br />
						<p>Now you can access the Camera app right from the lock screen. 
							<br />
						Just press the volume-up button, point, and shoot.</p>
					</div>
					<div class="txt2">
						<h3>Safari</h3>
						<br />
						<p>Reader displays web articles without ads or cutter. 
							<br />
						And reading list lets you save article links to peruse later.</p>
					</div>
					<div class="txt3">
						<h3>PC Free</h3>
						<br />
						<p>You can activate and set up your iPhone wirelessly, right out of the box. 
							<br />
						without the need for a Mac or PC.</p>
					</div>
					<div class="txt4">
					<h3>Newsstand</h3>
						<br />
						<p>Find all your newspaper and magazine apps here.
							<br />
						 Even subscribe to something new.</p>
					</div>
				</div>
				<ul class="btn">
					<?php
						for ($i=0;$i<$counter;$i++) {
							echo "<li></li>";
						}
					?>
				</ul>
		</div>
			<!--<input type="button" id="back" value="Back" onClick="prvSlide()" />
			<input type="button" id="next" value="Next" onClick="nextSlide()" />-->
	</div>
</body>
</html>
