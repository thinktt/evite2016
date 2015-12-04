var messages = [  
 '<br>Dear friends of my humans,<br><br>' +
 'It seems the holiday season is upon us.  My paw-sized stocking has been ' +
 'hung <br> from the chimney with care and I’ve been yelled at on more than ' + 
 'one occasion for <br> watering the Christmas tree...',

 '<br> It has been an eventful year in my territory off Laurel Grove.  Here are'+
 ' a few memories we made along the way:',

 '<br>Spending a few relaxing days at the lodge in Whistler...',

 '<br>Catching some rays on the pristine beaches of the Dominican Republic...',

 '<br>My pack hiking the north shore of Oahu...',

  '<br>To cap the year off right, it would be my pleasure to personally invite' + 
  'you to my den for a celebration on the night of December 19th.  Festivities' +  
  'will start at 7 PM.  My humans will provide a pony keg of the finest holiday' +
  'brew as well as hors d\'oeuvres.  Don\'t worry, I\'ve sampled them all and can' +  
  'assure you they are delicious.  Please bring any liquor and mixers you would' + 
  'like, as well as a chair.  Ice and cups will be provided.' 

];

slideDelays = [8000, 5000, 5000, 5000, 5000, 20000];


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
    console.log(nextSlide);
    var next = $slideshow
    .delay(slideDelays.shift())
    .fadeOut(3000, function(){ switchSlide(); })
    .fadeIn(3000);
    return next;
  };

  for(i = 0; i <= 4; i++) {
    $slideshow = fadeSlide($slideshow);
  }

  
  $slideshow.delay(slideDelays.shift())
  .fadeOut(3000, function(){
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