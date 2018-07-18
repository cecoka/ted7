window.onload = function() {
    var loadingScreen = document.getElementById("loadingScreen");
    var loader = document.getElementById("loader");
    var loaderLogo = document.getElementById("loaderLogo");  
    var body = document.getElementsByTagName("body")[0];  
    loader.style.display = "none";
    loaderLogo.style.display = "none";
    body.style.overflow = "visible";
    if (document.readyState === "complete"){
        var loaderScreenWidth = setInterval(changeLoaderScreenWidth, 10);
        var slider = 100;
        function changeLoaderScreenWidth(){
            if (slider > 0 && screen.width >= 1024){
                slider --;
//               console.log(slider+"%"); //use for debugging
                loadingScreen.style.width = slider+"%";
            }
            else {
                clearInterval(loaderScreenWidth);
                loadingScreen.style.display = "none";
            }
        }  
    }  
}
