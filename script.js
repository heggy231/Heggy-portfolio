// when user scrolls scrollPosDetect function!
window.onscroll = () => scrollPosDetect();

let nav = document.querySelector(".nav-wrapper-flex div")
// .offsetTop detects where scroll located => > document.querySelector(x).offsetTop  number in px where my x element is on my page

// sets my navbar position (unit px)
let stickyNavPosition = navbar.offsetTop;



