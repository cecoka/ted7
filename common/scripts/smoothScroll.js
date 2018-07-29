var menuButtons = document.getElementsByClassName("NavButton");
var marginY = 0; //variable to change on selected destination
var destination = 0; //top of element
var speed = 10; //in px per ms


//SMOOTH SCROLL FUNCTION
function initScroll(elementId) {  
    destination = document.getElementById(elementId).offsetTop;
    
    if (screen.width < 800){
            window.scrollTo(0, destination);
    }
    else{       
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
}

//SMOOTH SCROLL TO TOP FUNCTION (for intro button)
function toTop(){ // Define function toTop()
    if (screen.width < 800){
            window.scrollTo(0, 0);
    }
    else{
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
}


//HIGHLIGHT SELECTED FUNCTION
var menuItems = document.getElementById("sideBarNav").getElementsByClassName("NavButton");
var currentMenuItem = menuItems[0];
var Section = document.getElementsByTagName("section");

var quarterVH = window.innerHeight*0.25 ;

var secTwoY = Section[1].offsetTop-quarterVH;
var secThreeY = Section[2].offsetTop-quarterVH;
var secFourY = Section[3].offsetTop-quarterVH;

onscroll = function selectMenuButton(){
    if (screen.width < 800){}
    else{
        for (i = 0; i < Section.length; i++) {
            function highlight(){ //Reset all button properties to default and hightlights selected only
                //Default properties
                menuItems[i].setAttribute("data", "0") // 0/1 = not selected / selected
                menuItems[i].style.color = "#111E2B"; 
                menuItems[i].style.backgroundColor = "#F5F9FD"; 
                menuItems[i].style.border = "none"; 
                menuItems[i].style.borderBottom = "1px solid #B3811A"; 

                //Properties on selection
                currentMenuItem.setAttribute("data", "1") // 0/1 = not selected / selected
                currentMenuItem.style.color = "#F5F9FD"; 
                currentMenuItem.style.backgroundColor = "#283440";
                currentMenuItem.style.border = "1px solid #B3811A";
                currentMenuItem.style.borderBottom = "0px solid #B3811A";        
            }

            if (window.pageYOffset >= 0 && window.pageYOffset < secTwoY){
                currentMenuItem = menuItems[0];
                highlight();
                currentMenuItem.style.borderLeft = "0px solid #F5F9FD;";
            }

            else if (window.pageYOffset >= secTwoY && window.pageYOffset < secThreeY){
                currentMenuItem = menuItems[1];
                highlight();
            }

            else if (window.pageYOffset >= secThreeY && window.pageYOffset < secFourY){
                currentMenuItem = menuItems[2];
                highlight();
            }

            else if (window.pageYOffset <= (secFourY+quarterVH)){
               currentMenuItem = menuItems[3];
                highlight();
                currentMenuItem.style.borderRight = "0px solid #F5F9FD;";
            }
        } 
    }
}


//HIGHLIGHT ON HOVER FUNCTION
for (i = 0; i < Section.length; i++) {
    menuItems[i].addEventListener("mouseover", function hoverHighlight(){ 
        if (this.getAttribute("data") == 0 && screen.width > 800){
            //On Hover properties
            this.style.color = "#F5F9FD"; 
            this.style.backgroundColor = "#B3811A";
        }
    })

    menuItems[i].addEventListener("mouseout", function hoverHighlight(){ 
        if (this.getAttribute("data") == 0 && screen.width > 800){
            //Default properties
            this.style.color = "#111E2B"; 
            this.style.backgroundColor = "#F5F9FD";
        }
    }) 
}