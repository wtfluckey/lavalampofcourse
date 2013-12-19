$(function(){
  function drawPath(className, duration, delay){
    var path = document.querySelector(className);
    var length = path.getTotalLength();
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition =
      'stroke-dashoffset ' + duration + delay + ' ease-in-out';
    // Go!
    path.style.strokeDashoffset = '0';
  }

  drawPath('.a-name-path', '.5s', '.0s');
  drawPath('.name-path', '1.75s', '.5s');

})
