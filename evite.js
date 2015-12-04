 window.onbeforeunload = null; 

$(document).ready( function(){

   $('body').class('opacity', '0');

  // var $slideshow = $('.slideshow img');
  // var nextSlide = 2; 
  // var slideSrc = './slideshow/'+ nextSlide + '.jpg';
  // var i;  

  // var switchSlide, fadeSlide;

  // switchSlide = function() {
  //   slideSrc = './slideshow/'+ nextSlide + '.jpg'; 
  //   $slideshow.attr('src' ,slideSrc);
  //   nextSlide++;
  // };
  
  // fadeSlide = function($slideShow) {
  //   var next = $slideshow
  //   .delay(5000)
  //   .fadeOut(3000, function(){ switchSlide(); })
  //   .fadeIn(3000);
  //   return next;
  // };

  // for(i = 0; i <= 4; i++) {
  //   $slideshow = fadeSlide($slideshow);
  // }

  // $slideshow.delay(5000).fadeOut(3000, openEvite);

});


function openEvite() {

  $('body').class('opacity', '0')
  .css("background-image", "url(background1.jpg)")
  // .fadeIn(3000, function() {
  //   $('.main-container').show();
  // });


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