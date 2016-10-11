$( document ).ready(function() {
   


   $('a').smoothScroll();

  
  
	$('.wrapper').on('submit', function(event) {
   event.preventDefault();


   		if ( $('#inputText').val() == '' ) {
      		alert('Please enter a correct email address.');
  		} else {
      		alert('Thank you for subscribing to our newsletter!');
   		}

   		$('#inputText').val('');
});

 });  





