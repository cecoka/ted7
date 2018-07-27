window.onload = function() {
    var loadingScreen = document.getElementById("loadingScreen");
    var loader = document.getElementById("loader");
    var loaderLogo = document.getElementById("loaderLogo");  
    var body = document.getElementsByTagName("body")[0];  
    loader.style.display = "none";
    loaderLogo.style.display = "none";
    body.style.overflow = "visible";
    if (document.readyState === "complete"){
        var loaderScreenOpacity = setInterval(changeLoaderScreenOpacity, 10);
        var opacity = 1;
        function changeLoaderScreenOpacity(){
            if (opacity > 0 && screen.width >= 1024 && loadingScreen.style.opacity !== undefined){
                opacity =  opacity - 0.01;
//               console.log(opacity+"%"); //use for debugging
                loadingScreen.style.opacity = opacity;
            }
            else {
                clearInterval(loaderScreenOpacity);
                loadingScreen.style.display = "none";
            }
        }  
    }  
}