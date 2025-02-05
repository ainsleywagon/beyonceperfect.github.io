$(document).ready(function(){ 
  // Cache the Window object
  $window = $(window);
 
    $('section[data-type="background"]').each(function(){
      var $bgobj = $(this); // assigning the object
      
      $(window).scroll(function() {
        
        // Scroll the background at var speed
        // the yPos is a negative value because we're scrolling it up!
        var yPos = -($window.scrollTop() / $bgobj.data('speed'));        
    
        // Put together our final background position
        var coords = '50%' + yPos + 'px';
        
        // Move the background
        $bgobj.css({ backgroundPosition: coords });
    }); 
  });    
}); 
/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");