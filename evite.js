 window.onbeforeunload = null; 

$(document).ready( function(){
  var $slideshow = $('.slideshow img');
  var nextSlide = 2; 
  var slideInterval; 
  
  slideInterval = setInterval(function() {
    var slideSrc = './slideshow/'+ nextSlide + '.jpg'; 

    $slideshow
    .fadeOut(3000, function(){
      $slideshow.attr('src' ,slideSrc);
    })
    .fadeIn(3000);

    console.log(nextSlide);
    
    if (nextSlide === 6) {
      clearInterval(slideInterval);
      openEvite();
    } else {
      nextSlide++;
    } 
    
  }, 3000);


 

});


function openEvite() {

  $.fn.snow();

  $('form').bind('ajax:complete', function() {
    var $theForm = $(this);

     $theForm.find(
      'input[type=text], ' +
      'input[type=radio], ' +
      'input[type=email] ' 
    ).val("");

   });
  
  // capture submit
  $('form').submit(function() {
    var $theForm = $(this);
    var data = $theForm.serializeArray();
    var response = data[2].value;

    //hide the form
    $('.rsvp-area').addClass('hidden');

   
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
}