var messages = [  
 '<br>Dear friends of my humans,<br><br>' +
 'It seems the holiday season is upon us.  My paw-sized stocking has been ' +
 'hung <br> from the chimney with care and I’ve been yelled at on more than ' + 
 'one occasion for <br> watering the Christmas tree...',

 '<br>Message 2',

 '<br>Message 3',

 '<br>Message 4',

 '<br>Message 5',

 '<br>Message 6'
];



 window.onbeforeunload = null; 

$(document).ready( function(){

  var $slideText = $('.slideshow p').html(messages[0]);

  var audio = new Audio('joytoworld.mp3');
  audio.play();

  $('#hiddenBody').hide( 0, function(){
    $('.slideshow').fadeIn(3000, function(){
      startSlideShow();
    });
  });

});


function startSlideShow() {

  var $slideshow = $('.slide');
  var $slideImg = $('.slideshow img');
  var $slideText = $('.slideshow p');
  var nextSlide = 2; 
  var slideSrc = './slideshow/'+ nextSlide + '.jpg';
  var i;  

  var switchSlide, fadeSlide;

  switchSlide = function() {
    slideSrc = './slideshow/'+ nextSlide + '.jpg'; 
    $slideImg.attr('src' ,slideSrc);
    $slideText.html(messages[nextSlide-1]);
    nextSlide++;
  };
  
  fadeSlide = function($slideShow) {
    var next = $slideshow
    .delay(5000)
    .fadeOut(3000, function(){ switchSlide(); })
    .fadeIn(3000);
    return next;
  };

  for(i = 0; i <= 4; i++) {
    $slideshow = fadeSlide($slideshow);
  }

  $slideshow.delay(5000).fadeOut(3000, function(){
    $('.slideshow').hide(0, function(){
      openEvite();
    });
  });

}


function openEvite() {

  $('#hiddenBody').hide()
  .css("background-image", "url(background1.jpg)")
  .fadeIn(3000);
  
  //$('.main-container').fadeIn(3000);

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