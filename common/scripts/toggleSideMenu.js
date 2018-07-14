function toggleSideMenu() {
    "use strict";
    var HeaderNav = document.getElementById("headerNav");
    var SideBarNav = document.getElementById("sideBarNav");
    var NavIcon = document.getElementById("nav-icon");
    var LogoLarge = document.getElementById("logo-large");
    var About = document.getElementById("about-info");
    var Projects = document.getElementById("projects-info");
    var Blog = document.getElementById("blog-info");
    var Contact = document.getElementById("contact-info");
    
    HeaderNav.classList.toggle("closed");
    SideBarNav.classList.toggle("closed");
    NavIcon.classList.toggle("closed");
    LogoLarge.classList.toggle("closed");
    About.classList.toggle("closed");
    Projects.classList.toggle("closed");
    Blog.classList.toggle("closed");
    Contact.classList.toggle("closed");
}




