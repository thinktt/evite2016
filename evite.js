
//helps keep the form from holding the page up if you try to leave
window.onbeforeunload = null; 

$(document).ready(function(){
  openEvite();
});

// $(window).load(function() {function(){
//   openEvite();
// }


function specialFadeIn($element) {
  var opacity = 0.1;
  var fadeInterval;
  
  fadeInterval = setInterval(function() {
    console.log(opacity);
    opacity += 0.05;
    $element.css('opacity', opacity);
    if(opacity >= 1) clearInterval(fadeInterval);
  }, 90);

}


function openEvite() {

  //hide everything bring in the background and bring it all back
  $('#hidden-body').hide().fadeIn(3000);


  var audio = new Audio('fireplace.mp3');
  audio.loop = true; 
  audio.volume = 0.1;
  audio.play();

  $('#rsvp-btn').click(function() {
    $('.formal-letter').hide();
    
    $('.main-title').removeClass('hidden').css('opacity', '0.05')
    specialFadeIn($('.main-title'));
    $('.rsvp-area').removeClass('hidden').css('opacity', '0.05')
    specialFadeIn($('.rsvp-area'));

  });

  //when form has completed sending clear the form
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


//preload images in a very not DRY way
// $images.push( $('<img>').attr('src', './slideshow/2.jpg').addClass('img-responsive img-rounded') );
// $images.push( $('<img>').attr('src', './slideshow/3.jpg').addClass('img-responsive img-rounded') );
// $images.push( $('<img>').attr('src', './slideshow/4.jpg').addClass('img-responsive img-rounded') );
// $images.push( $('<img>').attr('src', './slideshow/5.jpg').addClass('img-responsive img-rounded') );
// $images.push( $('<img>').attr('src', './slideshow/6.jpg').addClass('img-responsive img-rounded') );