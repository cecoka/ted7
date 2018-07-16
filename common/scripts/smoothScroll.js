var marginY = 0; //variable to change on selected destination
var destination = 0; //top of element
var speed = 10; //in px per ms

var Button = document.getElementById("sideBarNav").getElementsByClassName("NavButton");
//for (i = 0; i < Button.length; i++) {
//    Button[i].addEventListener('click', function() {
//        console.log(this.classList);
//        console.log(this.hash);
//        this.style.color = "#F5F9FD";
//        this.style.backgroundColor = "#283440";
//        this.style.border = "1px solid #B3811A";
//        this.style.borderBottom = "0px solid #B3811A";
//        if (this.hash === "#about"){
//            this.style.borderLeft = "0px solid #F5F9FD;"
//            }
//        else if (this.hash === "#contact"){
//            this.style.borderRight = "0px solid #F5F9FD;"
//            }
//    });   
//}


function initScroll(elementId) {
//    console.log(document.getElementsByClassName("NavButton"));
//    var currentSel = "#"+elementId;
//    console.log(currentSel);    
    
    destination = document.getElementById(elementId).offsetTop;
//    alert("Position now is "+window.pageYOffset);
//    alert("Destination is "+destination);
    
    if (window.pageYOffset <= destination){ // Choose to go up or down
//        alert("GO DOWN");
        var downScroller = setInterval(scrollDown, 1);
        function scrollDown() { // Define function scrollDown()
            if (marginY <= destination) {
                marginY = marginY + speed; // MarginY to increases every N px every 1ms 
                window.scroll(0, marginY); // Scroll to incrementally increase marginY
            } 
            else {
                clearInterval(downScroller);
            }
        }
    } 
    else {
//        alert("GO UP");
        var upScroller = setInterval(scrollUp, 1);
        function scrollUp() { // Define function scrollUp()
            if (marginY >= destination) {
                marginY = marginY - speed; // MarginY to decreases every N px every 1ms 
                window.scroll(0, marginY); // Scroll to incrementally decrease marginY
            } 
            else {
                clearInterval(upScroller);
            }
        }
    }
}


function toTop(){ // Define function toTop()
    var scrollToTop = setInterval(scrollUpToTop, 1);
    function scrollUpToTop() {
        if (marginY >= 0) {
            marginY = marginY - speed; // MarginY to increases every N px every 1ms 
            window.scroll(0, marginY); // Scroll to incrementally increase marginY 
            
        } else {
            clearInterval(scrollToTop);
            speed = 10; // Reset speed
        }
    }
}
