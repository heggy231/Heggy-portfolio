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
    // user has clicked on left button
    showWhichProject(true);
  });

  $(".fas.fa-arrow-right").click(function(){
    // user has clicked on right button
    showWhichProject(false);
  });

  // testimony to slide with SetTimeout method eve 5sec
  showHideWhichTestimony();

  $(".myProjectPhoto").click(function(e){
    // debugger;
    console.log(e);
    // e.currentTarget.firstElementChild.src
    // var eventTargetImgSrc = e.currentTarget.firstElementChild.src;
    var clickImgSrc = e.currentTarget.firstElementChild.src
    var lightBoxImgSrc = $(".lightbox img")[0].src;

    lightBoxImgSrc = clickImgSrc;

  });
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
// prev arrow keeps moving around ** need help how to fix the arrow in spot
var myCarouselProjectArray = $("#mycarousel-flex-wrapper > div.myProjectPhoto");
var myCarouselProjectState = 0;
function showWhichProject(clicknext) {
  // debugger;
  if(clicknext) {
    // user clicked on left > showWhichProject(true) => decrement i--
    // start at myCarouselProjectArray[0] default is show, put myCarouselProjectState to go 3,2,1,0,3,2,1,... i--
    // ex) state = 0 photo showWhichProject(true) go left (last photo) myCarouselProjectState: -1 (-1/4 mod => -1) => if stmt will set State  = lastphoto
    // ex) state = 1 photo showWhichProject(true) go left (first photo) myCarouselProjectState: 0 (0/4 mod => 0)
    //  Cheatsheet for modulus: if a%b if a < b then answer: a
    //                          if a%b if a = b then answer: 0
    myCarouselProjectState = (myCarouselProjectState - 1) % myCarouselProjectArray.length;
  } else {
    // user clicked on right button showWhichProject(false)
    // start at myCarouselProjectArray[0] default is show, put myCarouselProjectState to go 1,2,3,0,1,2,3,0... i++
    // ex) state = 0 photo showWhichProject(false) go right (second photo) myCarouselProjectState: 1 (1/4 mod => 1)
    // ex) state = 1 photo showWhichProject(false) go right (third photo) myCarouselProjectState: 2 (2/4 mod => 2)
    //  Cheatsheet for modulus: if a%b if a < b then answer: a
    //                          if a%b if a = b then answer: 0
    myCarouselProjectState = (myCarouselProjectState + 1) % myCarouselProjectArray.length;
  }
  // when state is -1, set state to last ith img
  //   User currently on 1st img > expects to see last img of array
  //    set ProjectState to array.length -1 (last ith img)
  if(myCarouselProjectState < 0){
    myCarouselProjectState = myCarouselProjectArray.length - 1;
  }

  // Goal of this for loop is to only show one photo at a time
  //  show only when ith = myCarouselProjectState and hide all others.
	for (var i = 0; i < myCarouselProjectArray.length; i++) {
    // myCarouselProjectState no is same ith photo I want to show()
    //  loop thru until state = ith photo > show only that.
    // ex: projectState(1) => only $(myCarouselProjectArray[1]).show() everything else gets .hide()
    if( i === myCarouselProjectState ) {
      // matching ith, state no => now show that (next/prev photo)
      $(myCarouselProjectArray[i]).show()
    } else {
      // all other photos hide 
      $(myCarouselProjectArray[i]).hide()
    }
	}
}

// ########## testimonyState setTimeOut method function starts here.  Set global variable testimonialArray, reassign value to loop 1,2,0,1,2.... ###########
// from id testimonial-flex-wrapper and pick first generation div's
var testimonialArray = $("#testimonial-flex-wrapper > div");
console.log(`testimonialArray below: `)
console.log( testimonialArray);
// state stores current ith position of photo, loop thru by imcrementing
//  up until the last photo and start back up from first photo
var testimonyState = 0;
function showHideWhichTestimony() {
  // start at testimony[0] default is show, therefore, I want to show next photo i+1.  
  //  first run of my showHideWhichTestimony(), testimonyState set to 1
  //  second run testimonyState set to 2 (2/3 mod is 2)
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
  // !!Do not call with showHideWhichTestimony() since it is a callback 
  // only function name is required.  if call showHideWhichTestimony() it will stack overflow > crash window.  setTimeOut calls the function after 5s only once but it becomes recursive by function calling itself.
  // having it calling function itself below makes it loop infinitely 
  setTimeout(showHideWhichTestimony, 5000);
}

