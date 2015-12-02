$(document).ready( function(){
  $.fn.snow();
  
  /*// capture submit
	$('form').submit(function() {
    var $theForm = $(this);

    // send xhr request
    $.ajax({
	      type: $theForm.attr('method'),
	      url: $theForm.attr('action'),
	      data: $theForm.serialize(),
	      dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        beforeSend: function (xhr) {
          xhr.setRequestHeader('Access-Control-Allow-Origin', 'chrome-extension://EXTENSION_ID');
          xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
        },
    });

  	// prevent submitting again
  	 return false;
  });
*/
});