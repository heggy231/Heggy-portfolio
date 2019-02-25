// Put all the function inside of my doc.ready so all the dOM elements
//  are created so that my jQuery works correctly!

$(document).ready(function () {
  console.log( "document loaded and ready!" );
  // when user scrolls fire scrollPosDetect() so that my nav bar
  //   is sticky on top my page
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
    // grab the nav container and toggle to show/hide
    $(".nav-wrapper-flex").toggle();
    $(".hamburger-nav-bar").toggle();
  });

  // carousel 
  $(".fas.fa-arrow-left").click(function(){
    showWhichProject(true);
  });

  $(".fas.fa-arrow-right").click(function(){
    showWhichProject(false);
  });

  // testimoy to slide with SetTimeout method eve 5sec
  showHideWhichTestimony();

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

// ########## carousel setTimeOut method function starts here is global variable so that I can reassign value 1,2,0,1,2.... ###########
// arrow only works 1695px
var myCarouselProjectArray = $("#mycarousel-flex-wrapper > div.myProjectPhoto");
var myCarouselProjectState = 0;
function showWhichProject(clicknext) {
  debugger;
  if(clicknext) {
    myCarouselProjectState = (myCarouselProjectState - 1) % myCarouselProjectArray.length;
  } else {
    myCarouselProjectState = (myCarouselProjectState + 1) % myCarouselProjectArray.length;
  }
  // when my state becomes -1; Lets go to the last img
  if(myCarouselProjectState < 0){
    myCarouselProjectState = myCarouselProjectArray.length - 1;
  }

	for (var i = 0; i < myCarouselProjectArray.length; i++) {
    if( i === myCarouselProjectState ) {
        $(myCarouselProjectArray[i]).show()
      } else {
      $(myCarouselProjectArray[i]).hide()
    }
	}
}





// ########## testimonyState setTimeOut method function starts here is global variable so that I can reassign value 1,2,0,1,2.... ###########
var testimonialArray = $("#testimonial-flex-wrapper > div");
var testimonyState = 0;
function showHideWhichTestimony() {
  // start at testimony[0] default is show, put testimonyState to go 1,2,0,1,2,0...
  //  first run of my showHideWhichTestimony(), testimonyState is 1
  //  second run testimonyState is 2 (2/3 mod is 2)
  //  Cheatsheet for modulus: if a%b if a < b then answer: a
  //                          if a%b if a = b then answer: 0
  testimonyState = (testimonyState + 1) % testimonialArray.length; 
  // testimonialArray.length is 3 
  // Main goal of this for loop is get one $(testimonialArray[i]).show()
  //  and everything else to hide()
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
  // 5sec later call showHideWhichTestimony() again using setTimeout() method
  //  testimony sliding automatically resr: https://www.w3schools.com/jsref/met_win_settimeout.asp
  // donot call with showHideWhichTestimony() since it is a call back it will stack overflow crash window.  setTimeOut only call 5seonds from now only once. and it gets called when my 
  // Then I need to put it in my function 
  setTimeout(showHideWhichTestimony, 5000);
}

