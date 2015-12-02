$(document).ready( function(){
  $.fn.snow();
  
  // capture submit
	$('form').submit(function() {
    var $theForm = $(this);

    // send xhr request
    $.ajax({
	      type: $theForm.attr('method'),
	      url: $theForm.attr('action'),
	      data: $theForm.serialize(),
	      dataType: 'jsonp',
	      success: function(data) {
	      console.log('Yay! Form sent.');
      }
    });

  	// prevent submitting again
  	 return false;
	});

});