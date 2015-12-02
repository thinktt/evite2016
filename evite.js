
 window.onbeforeunload = null; 

$(document).ready( function(){
  
  $.fn.snow();
  
  // capture submit
	$('form').submit(function() {
    var $theForm = $(this);
    var data = $theForm.serializeArray();
    var response = data[2].value;

    //hide the form
    $('.rsvp-area').addClass('hidden');

    //clear the form
    $theForm.find(
      'input[type=text], ' +
      'input[type=radio], ' +
      'input[type=email] ' 
    ).val("");
    
    //unhide the responses
    //hiding and unhiding used here due to mixed use of
    //hide attribute with jquery and bootstrap hidden class 
    $('.response').hide().removeClass('hidden');
    
    if (response === 'Yes!') {
      $('.response-yes').removeClass('hidden');
    } else {
      $('.response-no').removeClass('hidden');
    }
 
    $('.response').fadeIn('slow');
        
  });

});




    