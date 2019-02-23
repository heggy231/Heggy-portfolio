// when user scrolls fire scrollPosDetect()
$(document).ready(function () {

  console.log( "document loaded and ready!" );
  window.onscroll = function() {
    // is my onscroll getting called?
    // debugger;
    makePanelStick();
  }
}); 


var navbar = document.querySelector(".nav-wrapper-flex");
// .offsetTop detects where scroll located => > document.querySelector(x).offsetTop  number in px where my x element is on my page

// Get my navbar position (unit px)
var stickyNavPosition = navbar.offsetTop;

// function Add the sticky class to the navbar when you reach its scroll position. Remove the sticky class when you leave the scroll position.  > window.pageYOffset changes as user scrolls getting the y position of viewport window
function makePanelStick() {
  // debugger;
  if (window.pageYOffset >= stickyNavPosition) {
    navbar.classList.add("sticky-nav")
  } else {
    navbar.classList.remove("sticky-nav")
  }
}
