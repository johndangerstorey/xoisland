;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});

			// Smooth Scrolling w/o any other plugins
			$(function() {
			  $('a[href*=#]:not([href=#])').click(function() {
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			      if (target.length) {
			        $('html,body').animate({
			          scrollTop: target.offset().top
			        }, 1000);
			        return false;
			      }
			    }
			  });
			});

			// Toggles FAQ answers
			$( "#toggleAnswer" ).click(function(e) {
				e.preventDefault();
  			$( 'p' ).toggleClass( "toggleThis" );
			});

			// Video Toggle
			

				var video = document.getElementById("videoElem");

				$( '#videoButton' ).click(function() {
				console.log('video button clicked');
				    video.play();	            
				});

				$('#myModal').on('hidden.bs.modal', function () { 
					console.log('Hide Video Activated');
	 				video.pause();
	 				video.currentTime = 0;
	 			});

			
			

			
			

})(jQuery)