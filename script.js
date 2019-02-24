// when user scrolls fire scrollPosDetect()
$(document).ready(function () {
  console.log( "document loaded and ready!" );
  window.onscroll = function() {
    // is my onscroll getting called?
    // debugger;
    makePanelStick();
  }

  // hamburger bar drop down and show me all nav links
  // https://codepen.io/heggy231/pen/YBmjKq
  $(".fas.fa-bars").click(function() {
    // debugger;
    console.log(`hamburger menu clicked`);
    // grab the nav container and toggle
    $(".nav-wrapper-flex").toggle();
    $(".hamburger-nav-bar").toggle();
  });

  // Add set time out to my showHideWhichTestimony() so user sees my 
  //  testimony sliding automatically resr: https://www.w3schools.com/jsref/met_win_settimeout.asp
  // donot call with showHideWhichTestimony() since it is a call back it will stack overflow
  setTimeout(showHideWhichTestimony, 5000);
}); // end of (document).ready


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

// testimonyState is global variable and I want access to this
var testimonialArray = $("#testimonial-flex-wrapper > div");
var testimonyState = 0;
function showHideWhichTestimony() {
  // start at testimony[0] default is show, put testimonyState to go 1,2,0,1,2,0...
  //  first run of my showHideWhichTestimony(), testimonyState is 1
  testimonyState = (testimonyState + 1) % testimonialArray.length; 
  for (var i = 0; i < testimonialArray.length; i++) {
    if ( i === testimonyState ) {
      // convert DOM $("#testimonial-flex-wrapper div")[0] 
      //  into jQuery obj by wrapping $() once more
      //  $($("#testimonial-flex-wrapper div")[0])
      $(testimonialArray[i]).show()
    } else {
      // first run i = 0, testimony = 1.  My first testimony[0] will toggle to hide.
      $(testimonialArray[i]).hide()
    }
  }
  setTimeout(showHideWhichTestimony, 5000);
}

