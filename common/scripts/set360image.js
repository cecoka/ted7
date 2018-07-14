"use strict";
var AFrameSky = document.getElementById("image-360");
var Button = document.getElementsByClassName("setVRimg");
var i // your index is inside here

for (i = 0; i < Button.length; i++) {
       Button[i].addEventListener('click', function() {
           AFrameSky.setAttribute("src", this.getAttribute("src"));
           //use for debugging
           //console.log(this.getAttribute("src"));
           //console.log(AFrameSky); //use for debugging
    });
}