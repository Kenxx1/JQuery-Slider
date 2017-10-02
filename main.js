//"use strict";

$(function(){
	//configure vars
	var width = 720;
	var animSpeed = 1000;
	var pause = 1000;
	var currentSlide = 1;

	//cache DOM
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');

	var interval;
	//setInterval
	//animate margin-left
	function startSlider(){	
		interval = setInterval(function(){
			$slideContainer.animate({'margin-left': '-=720'},animSpeed, function(){
					//if it's last slide goto position 1 (0px);
					currentSlide++;
					if(currentSlide == $slides.length){
						currentSlide = 1;
						$slideContainer.css('margin-left',0);
					}
			});
		},pause);
	}

	function stopSlider() {
		clearInterval(interval);
	}		
		//listen to mouseend and pause
	$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
		//resume on mouse leave
	startSlider();
});