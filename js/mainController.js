jQuery(document).ready(function($){
	var $animation_elements = $('.animation-element');
	var $window = $(window);

	function check_if_in_view(){

		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);

		$.each($animation_elements, function(){

			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)){				
				$element.addClass('in-view');
				//bounce in view
				$('.bounce-in-view').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
				    function(e) {
				    // code to execute after transition ends
					//$('.bounce-in-view').effect( "bounce", {times:3}, 300 );  
					$('.bounce-in-view').addClass('bounce');
				});
				
			}else{
				$element.removeClass('in-view');
				$('.bounce-in-view').removeClass('bounce');
			}
		});
	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');
});